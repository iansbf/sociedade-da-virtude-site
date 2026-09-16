import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  characters,
  crew,
  episodes,
  platforms,
  site,
} from "@/lib/site"
import { ExternalLink, Play } from "lucide-react"

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main id="topo" className="flex-1">
        <Hero />
        <Series />
        <Episodes />
        <Universe />
        <Watch />
        <Store />
      </main>
      <SiteFooter />
    </>
  )
}

function Hero() {
  return (
    <section className="relative overflow-hidden border-b-4 border-ink">
      <div className="halftone pointer-events-none absolute inset-0 opacity-40" />
      <div className="burst pointer-events-none absolute -top-24 right-[-8rem] size-[28rem] opacity-70 sm:right-[-4rem]" />
      <div className="relative mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 sm:py-24 lg:grid-cols-[1.15fr_0.85fr] lg:items-end lg:py-28">
        <div>
          <p className="font-heading text-xs uppercase tracking-[0.42em] text-yellow">
            Neebla · Max · Adult Swim
          </p>
          <h1 className="mt-4 max-w-3xl font-display text-[clamp(3.2rem,12vw,7.5rem)] leading-[0.82] text-cream drop-shadow-[6px_6px_0_#e31c23]">
            Sociedade
            <br />
            da Virtude
          </h1>
          <p className="mt-2 font-heading text-xl uppercase tracking-[0.28em] text-yellow sm:text-2xl">
            A Série
          </p>
          <p className="mt-6 max-w-xl text-lg text-cream/85 sm:text-xl">
            {site.tagline} Estreou em {site.premiere} na Max e no Adult Swim.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Button
              nativeButton={false}
              render={
                <a href={site.links.max} target="_blank" rel="noreferrer" />
              }
              className="h-12 rounded-none border-2 border-ink bg-yellow px-6 font-heading text-sm uppercase tracking-[0.2em] text-ink hover:bg-cream"
            >
              Assistir na Max
            </Button>
            <Button
              nativeButton={false}
              render={<a href="#trailer" />}
              variant="outline"
              className="h-12 rounded-none border-2 border-yellow bg-transparent px-6 font-heading text-sm uppercase tracking-[0.2em] text-yellow hover:bg-yellow hover:text-ink"
            >
              <Play className="size-4" />
              Trailer oficial
            </Button>
          </div>
          <dl className="mt-10 grid grid-cols-3 gap-3 max-w-lg">
            <Stamp label="Estreia" value="2026" />
            <Stamp label="Episódios" value="10" />
            <Stamp label="Classificação" value={site.rating} />
          </dl>
        </div>

        <aside className="comic-panel -rotate-1 bg-cream p-3 text-ink shadow-[10px_10px_0_#e31c23]">
          <div className="border-4 border-ink bg-ink p-4 text-cream">
            <p className="font-heading text-xs uppercase tracking-[0.3em] text-yellow">
              Megalópolisville
            </p>
            <p className="mt-3 font-display text-4xl leading-none text-cream">
              Heróis imperfeitos.
              <span className="block text-red">Ameaça corporativa.</span>
            </p>
            <p className="mt-4 text-sm leading-relaxed text-cream/80">
              Motion comics desde 2017. Agora, o modo prime da trama — origens,
              time travel e o fim de tudo, de novo.
            </p>
          </div>
        </aside>
      </div>
    </section>
  )
}

function Stamp({ label, value }: { label: string; value: string }) {
  return (
    <div className="border-2 border-yellow/70 bg-ink/60 px-3 py-3">
      <dt className="font-heading text-[0.65rem] uppercase tracking-[0.22em] text-yellow/80">
        {label}
      </dt>
      <dd className="font-display text-2xl leading-none text-cream">{value}</dd>
    </div>
  )
}

function Series() {
  return (
    <section id="serie" className="border-b-4 border-ink bg-cream text-ink">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:py-24">
        <div>
          <Badge className="rounded-none border-2 border-ink bg-yellow font-heading uppercase tracking-[0.2em] text-ink">
            A temporada
          </Badge>
          <h2 className="mt-4 font-display text-5xl leading-none sm:text-6xl">
            Uma equipe contra o bilionário.
          </h2>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink/80">
            {site.synopsis}
          </p>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-ink/70">
            Criada por Ian SBF e Thobias Daneluz, a animação nasceu no YouTube
            em 2017 e atravessou Adult Swim, Max e uma HQ impressa. Esta temporada
            não é reboot nem retcon: é a evolução de um universo que já tinha
            82 capítulos de aquecimento.
          </p>
        </div>

        <Card className="rounded-none border-4 border-ink bg-paper py-0 shadow-[8px_8px_0_#111] ring-0">
          <CardHeader className="border-b-4 border-ink bg-red px-5 py-4 text-cream">
            <CardTitle className="font-heading text-xl uppercase tracking-[0.16em]">
              Ficha técnica
            </CardTitle>
            <CardDescription className="text-cream/80">
              {site.seriesTitle}
            </CardDescription>
          </CardHeader>
          <CardContent className="grid gap-4 px-5 py-5 text-sm">
            <Fact label="Criação e direção" value={crew.createdBy.join(" · ")} />
            <Fact label="Produção" value={crew.producedBy.join(" · ")} />
            <Fact label="Estúdio" value={crew.studio} />
            <Fact label="Elenco" value={crew.cast.join(" · ")} />
            <Fact label="Gênero" value="Animação adulta · comédia · superaventura" />
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

function Fact({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="font-heading text-[0.7rem] uppercase tracking-[0.22em] text-red">
        {label}
      </p>
      <p className="mt-1 leading-relaxed">{value}</p>
    </div>
  )
}

function Episodes() {
  return (
    <section id="episodios" className="border-b-4 border-yellow bg-ink">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-24">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="font-heading text-xs uppercase tracking-[0.35em] text-yellow">
              Temporada 1
            </p>
            <h2 className="mt-2 font-display text-5xl leading-none text-cream sm:text-6xl">
              10 episódios
            </h2>
          </div>
          <p className="max-w-sm text-sm text-cream/70">
            Origens, reforços, viagem no tempo e o fim de tudo — de novo. Tudo
            na Max.
          </p>
        </div>

        <ol className="mt-12 grid gap-4 sm:grid-cols-2">
          {episodes.map((episode) => (
            <li
              key={episode.n}
              className="comic-panel flex gap-4 border-4 border-yellow/80 bg-[#14110f] p-4"
            >
              <span className="font-display text-4xl leading-none text-red">
                {episode.n}
              </span>
              <div>
                <h3 className="font-heading text-lg uppercase tracking-[0.08em] text-cream">
                  {episode.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-cream/70">
                  {episode.blurb}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}

function Universe() {
  return (
    <section id="universo" className="border-b-4 border-ink bg-[#f3d9a4]">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-24">
        <h2 className="font-display text-5xl leading-none text-ink sm:text-6xl">
          O universo
        </h2>
        <p className="mt-4 max-w-2xl text-lg text-ink/75">
          Paródias de super-heróis com humor brasileiro, poderes peculiares e
          uma cidade que nunca pede descanso. Estes são alguns dos nomes que
          cruzam a temporada.
        </p>
        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {characters.map((character) => (
            <li
              key={character.name}
              className="comic-panel overflow-hidden border-4 border-ink bg-ink text-cream shadow-[6px_6px_0_#111]"
            >
              <div
                className="h-24"
                style={{
                  background: `linear-gradient(135deg, ${character.color} 0%, ${character.accent} 100%)`,
                }}
              />
              <div className="p-4">
                <p className="font-heading text-[0.65rem] uppercase tracking-[0.22em] text-yellow">
                  {character.role}
                </p>
                <h3 className="mt-1 font-heading text-lg uppercase tracking-wide">
                  {character.name}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-cream/75">
                  {character.note}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

function Watch() {
  return (
    <section id="assista" className="border-b-4 border-yellow bg-ink">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1.2fr_0.8fr] lg:py-24">
        <div id="trailer">
          <p className="font-heading text-xs uppercase tracking-[0.35em] text-yellow">
            Trailer oficial
          </p>
          <h2 className="mt-2 font-display text-5xl leading-none text-cream">
            Assista
          </h2>
          <div className="comic-panel mt-8 overflow-hidden border-4 border-yellow bg-black">
            <div className="relative aspect-video">
              <iframe
                title="Trailer oficial de Sociedade da Virtude: A Série"
                src={`https://www.youtube-nocookie.com/embed/${site.links.trailerId}`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 size-full"
              />
            </div>
          </div>
          <p className="mt-3 text-sm text-cream/60">
            O player não carregou?{" "}
            <a
              href={site.links.trailer}
              target="_blank"
              rel="noreferrer"
              className="text-yellow underline underline-offset-4"
            >
              Abra o trailer no YouTube
            </a>
            .
          </p>
        </div>

        <div className="flex flex-col gap-4">
          <h3 className="font-heading text-sm uppercase tracking-[0.28em] text-yellow">
            Onde ver
          </h3>
          {platforms.map((platform) => (
            <a
              key={platform.name}
              href={platform.href}
              target="_blank"
              rel="noreferrer"
              className="group comic-panel flex items-center justify-between gap-4 border-4 border-cream/20 bg-[#161312] p-5 transition hover:border-yellow"
            >
              <span>
                <span className="block font-heading text-xl uppercase tracking-[0.12em] text-cream group-hover:text-yellow">
                  {platform.name}
                </span>
                <span className="mt-1 block text-sm text-cream/65">
                  {platform.detail}
                </span>
              </span>
              <ExternalLink className="size-5 text-yellow" />
            </a>
          ))}
          <div className="grid grid-cols-2 gap-3 pt-2">
            <LangLink href={site.links.youtubeEn} label="English" />
            <LangLink href={site.links.youtubeEs} label="Español" />
          </div>
        </div>
      </div>
    </section>
  )
}

function LangLink({ href, label }: { href: string; label: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="border-2 border-yellow/40 px-3 py-3 text-center font-heading text-xs uppercase tracking-[0.2em] text-cream hover:border-yellow hover:text-yellow"
    >
      YouTube {label}
    </a>
  )
}

function Store() {
  return (
    <section id="loja" className="bg-red text-cream">
      <div className="mx-auto flex max-w-6xl flex-col items-start gap-6 px-4 py-16 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:py-20">
        <div>
          <p className="font-heading text-xs uppercase tracking-[0.35em] text-yellow">
            Loja oficial
          </p>
          <h2 className="mt-2 font-display text-5xl leading-none">
            Leve a Sociedade para casa.
          </h2>
          <p className="mt-4 max-w-xl text-cream/85">
            Camisas, canecas, pôsteres e o selo da companhia. A loja oficial
            continua em {new URL(site.links.store).host}.
          </p>
        </div>
        <Button
          nativeButton={false}
          render={<a href={site.links.store} target="_blank" rel="noreferrer" />}
          className="h-14 rounded-none border-4 border-ink bg-yellow px-8 font-heading text-sm uppercase tracking-[0.22em] text-ink hover:bg-cream"
        >
          Abrir a loja
        </Button>
      </div>
    </section>
  )
}
