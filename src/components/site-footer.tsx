import { ComicSeal } from "@/components/comic-seal"
import { site } from "@/lib/site"

const socials = [
  { href: site.links.instagram, label: "Instagram" },
  { href: site.links.youtubePt, label: "YouTube" },
  { href: site.links.x, label: "X" },
  { href: site.links.facebook, label: "Facebook" },
  { href: site.links.imdb, label: "IMDb" },
]

export function SiteFooter() {
  return (
    <footer className="border-t-4 border-yellow bg-ink">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-12 sm:px-6 md:flex-row md:items-end md:justify-between">
        <div className="flex items-start gap-4">
          <ComicSeal className="size-14 shrink-0" />
          <div>
            <p className="font-display text-3xl leading-none text-yellow">
              Sociedade da Virtude
            </p>
            <p className="mt-2 max-w-sm text-sm text-cream/70">
              Uma produção {site.studio}. Criada por Ian SBF e Thobias Daneluz.
            </p>
          </div>
        </div>
        <div className="flex flex-wrap gap-x-5 gap-y-2">
          {socials.map((item) => (
            <a
              key={item.label}
              href={item.href}
              target="_blank"
              rel="noreferrer"
              className="font-heading text-xs uppercase tracking-[0.22em] text-cream/70 hover:text-yellow"
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
      <div className="border-t border-cream/15 px-4 py-4 text-center text-xs text-cream/50 sm:px-6">
        © {site.year} {site.studio}. Site oficial da série.
      </div>
    </footer>
  )
}
