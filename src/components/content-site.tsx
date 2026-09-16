"use client"

import { useEffect, useState, useSyncExternalStore } from "react"
import {
  APRESENTACAO,
  CARTELAS,
  HERO_LOGO,
  I18N,
  SHOWS,
  type Lang,
} from "@/lib/catalog"

function formatViews(views: number, lang: Lang) {
  return views.toLocaleString(lang === "pt" ? "pt-BR" : "en-US")
}

function VideoCard({
  id,
  lang,
  views,
}: {
  id: string
  lang: Lang
  views?: number
}) {
  const [playing, setPlaying] = useState(false)
  const [thumb, setThumb] = useState(
    `https://i.ytimg.com/vi/${id}/maxresdefault.jpg`
  )
  const isPt = lang === "pt"
  const label = isPt ? "Assista em Português" : "Watch in English"
  const flag = isPt ? "🇧🇷" : "🇺🇸"

  function play() {
    setPlaying(true)
  }

  function onThumbError() {
    if (thumb.includes("maxresdefault")) {
      setThumb(`https://i.ytimg.com/vi/${id}/sddefault.jpg`)
    } else if (thumb.includes("sddefault")) {
      setThumb(`https://i.ytimg.com/vi/${id}/hqdefault.jpg`)
    }
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
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                className="thumb"
                loading="lazy"
                src={thumb}
                alt="Miniatura do vídeo"
                onError={onThumbError}
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
          {views != null ? (
            <p className="views">
              <span className="views-label">VIEWS:</span>
              {formatViews(views, lang)}
            </p>
          ) : null}
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
  const storedLang = useSyncExternalStore<Lang>(
    subscribeLang,
    readLang,
    () => "pt"
  )
  const [override, setOverride] = useState<Lang | null>(null)
  const lang = override ?? storedLang
  const copy = I18N[lang]
  const intro = APRESENTACAO[lang]
  const cartelas = CARTELAS[lang]

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

  return (
    <>
      <div className="langbar">
        <div className="inner">
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
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img className="hero-logo" alt="Society of Virtue" src={HERO_LOGO} />
        </div>
      </header>

      {intro.length > 0 ? (
        <section className="intro">
          <div className="wrap">
            <div className="body">
              {intro.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      {cartelas.length > 0 ? (
        <section className="cartelas wrap">
          {cartelas.map((src, index) => (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              key={src}
              loading="lazy"
              src={src}
              alt={`Cartela ${index + 1}`}
            />
          ))}
        </section>
      ) : null}

      <div className="wrap">
        <p className="videos-title">{copy.videosTitle}</p>
      </div>

      <main className="wrap">
        {SHOWS.map((show, index) => {
          const videos = show.videos.filter((video) => video.lang === lang)
          if (videos.length === 0) return null
          const title = show.title[lang]
          return (
            <section className="show" id={`s${index + 1}`} key={show.title.pt}>
              <div className="show-head">
                <h2 className="show-title">{title}</h2>
              </div>
              <div className="videos">
                {videos.map((video) => (
                  <VideoCard
                    key={`${show.title.pt}-${video.id}`}
                    id={video.id}
                    lang={video.lang}
                    views={video.views}
                  />
                ))}
              </div>
            </section>
          )
        })}
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
