"use client"

import { useEffect, useMemo, useState, useSyncExternalStore } from "react"
import {
  APRESENTACAO,
  APRESENTACAO_PLACEHOLDER,
  I18N,
  SHOWS,
  type Lang,
} from "@/lib/catalog"

function formatViews(views: number | null, isPt: boolean) {
  const word = isPt ? "visualizações" : "views"
  if (views === null || views === undefined) {
    return { empty: true, text: `— ${word}` }
  }
  return {
    empty: false,
    text: `${views.toLocaleString(isPt ? "pt-BR" : "en-US")} ${word}`,
  }
}

function VideoCard({
  id,
  lang,
  views,
  synopsis,
}: {
  id: string
  lang: Lang
  views: number | null
  synopsis: string
}) {
  const [playing, setPlaying] = useState(false)
  const isPt = lang === "pt"
  const label = isPt ? "Assista em Português" : "Watch in English"
  const flag = isPt ? "🇧🇷" : "🇺🇸"
  const viewLabel = formatViews(views, isPt)

  function play() {
    setPlaying(true)
  }

  return (
    <div className="video">
      <div className="vlabel">
        <span className="flag">{flag}</span>
        {label}
      </div>
      <div className="card">
        <div
          className="frame"
          role="button"
          tabIndex={0}
          aria-label={`${isPt ? "Reproduzir vídeo" : "Play video"} (${label})`}
          onClick={play}
          onKeyDown={(event) => {
            if (event.key === "Enter" || event.key === " ") {
              event.preventDefault()
              play()
            }
          }}
        >
          {playing ? (
            <iframe
              src={`https://www.youtube.com/embed/${id}?autoplay=1&rel=0`}
              title={label}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          ) : (
            <>
              {/* YouTube thumbnails are remote and used as click-to-play posters. */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                className="thumb"
                loading="lazy"
                src={`https://i.ytimg.com/vi/${id}/hqdefault.jpg`}
                alt="Miniatura do vídeo"
              />
              <span className="play">
                <svg viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </span>
            </>
          )}
        </div>
        <div className="vmeta">
          <span className="views">
            <svg viewBox="0 0 24 24">
              <path d="M12 5c-7 0-10 7-10 7s3 7 10 7 10-7 10-7-3-7-10-7zm0 11a4 4 0 110-8 4 4 0 010 8zm0-6a2 2 0 100 4 2 2 0 000-4z" />
            </svg>
            {viewLabel.empty ? (
              <span className="dim">{viewLabel.text}</span>
            ) : (
              viewLabel.text
            )}
          </span>
          <a
            className="yt"
            href={`https://www.youtube.com/watch?v=${id}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            {isPt ? "Abrir no YouTube ↗" : "Open on YouTube ↗"}
          </a>
        </div>
      </div>
      <p className="synopsis">{synopsis}</p>
    </div>
  )
}

function subscribeLang(callback: () => void) {
  window.addEventListener("storage", callback)
  return () => window.removeEventListener("storage", callback)
}

function readLang(): Lang {
  try {
    const saved = localStorage.getItem("sdv-lang")
    if (saved === "pt" || saved === "en") return saved
  } catch {
    /* ignore */
  }
  return "pt"
}

export function ContentSite() {
  const storedLang = useSyncExternalStore<Lang>(subscribeLang, readLang, () => "pt")
  const [override, setOverride] = useState<Lang | null>(null)
  const lang = override ?? storedLang

  function setLang(next: Lang) {
    setOverride(next)
    try {
      localStorage.setItem("sdv-lang", next)
    } catch {
      /* ignore */
    }
  }

  useEffect(() => {
    document.documentElement.lang = I18N[lang].lang
  }, [lang])

  const copy = I18N[lang]
  const intro = useMemo(() => APRESENTACAO[lang], [lang])

  return (
    <>
      <div className="langbar">
        <div className="inner">
          <div className="brandmark">
            Sociedade da <span>Virtude</span>
          </div>
          <div className="switch" role="group" aria-label="Idioma / Language">
            <button
              type="button"
              aria-pressed={lang === "pt"}
              onClick={() => setLang("pt")}
            >
              <span className="flag">🇧🇷</span>Português
            </button>
            <button
              type="button"
              aria-pressed={lang === "en"}
              onClick={() => setLang("en")}
            >
              <span className="flag">🇺🇸</span>English
            </button>
          </div>
        </div>
      </div>

      <header className="hero">
        <div className="wrap">
          <p className="eyebrow">{copy.eyebrow}</p>
          <h1>
            Sociedade
            <br />
            da Virtude
            <span className="thin">Society of Virtue</span>
          </h1>
          <p className="lede">{copy.lede}</p>
          <div className="meta-row">
            <span className="chip">
              <strong>8</strong>&nbsp; {copy.titles}
            </span>
            <span className="chip">
              <strong>8</strong>&nbsp; {copy.videosWord}
            </span>
            <span className="chip">PT&nbsp;·&nbsp;EN</span>
            <span className="chip">Animação de Virtude</span>
          </div>
        </div>
      </header>

      <section className="intro">
        <div className="wrap">
          <h2>{copy.introTitle}</h2>
          <div className="body">
            {intro.length === 0 ? (
              <p className="placeholder">{APRESENTACAO_PLACEHOLDER[lang]}</p>
            ) : (
              intro.map((paragraph) => <p key={paragraph}>{paragraph}</p>)
            )}
          </div>
        </div>
      </section>

      <div className="wrap">
        <p className="videos-title">{copy.videosTitle}</p>
      </div>

      <main className="wrap">
        {SHOWS.map((show, index) => (
          <section className="show" id={`s${index + 1}`} key={show.title}>
            <div className="show-head">
              <h2 className="show-title">{show.title}</h2>
              {show.tag ? <span className="show-tag">{show.tag}</span> : null}
            </div>
            <div className="videos">
              {show.videos
                .filter((video) => video.lang === lang)
                .map((video) => (
                  <VideoCard
                    key={`${show.title}-${video.id}`}
                    id={video.id}
                    lang={video.lang}
                    views={video.views}
                    synopsis={
                      video.lang === "pt" ? show.synopsis.pt : show.synopsis.en
                    }
                  />
                ))}
            </div>
          </section>
        ))}
      </main>

      <footer>
        <a href="#topo" className="top">
          {copy.backTop}
        </a>
        <div className="wrap">
          Sociedade da Virtude · Society of Virtue &nbsp;·&nbsp; Animação de
          Virtude
        </div>
      </footer>
    </>
  )
}
