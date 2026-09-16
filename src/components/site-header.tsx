"use client"

import { useState } from "react"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet"
import { ComicSeal } from "@/components/comic-seal"
import { nav, site } from "@/lib/site"

export function SiteHeader() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 border-b-4 border-yellow ink-bar">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:h-[4.5rem] sm:px-6">
        <a href="#topo" className="flex items-center gap-3 text-cream">
          <ComicSeal className="size-10 sm:size-11" />
          <span className="font-heading text-lg uppercase tracking-[0.18em] sm:text-xl">
            Sociedade
            <span className="hidden sm:inline"> da Virtude</span>
          </span>
        </a>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Seções">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="px-3 py-2 font-heading text-sm uppercase tracking-[0.16em] text-cream/80 transition hover:text-yellow"
            >
              {item.label}
            </a>
          ))}
          <Button
            nativeButton={false}
            render={<a href={site.links.max} target="_blank" rel="noreferrer" />}
            className="ml-3 h-10 rounded-none border-2 border-ink bg-yellow px-4 font-heading text-xs uppercase tracking-[0.18em] text-ink hover:bg-yellow/90"
          >
            Assistir
          </Button>
        </nav>

        <Button
          type="button"
          variant="outline"
          size="icon"
          aria-expanded={open}
          aria-controls="menu-mobile"
          className="rounded-none border-2 border-yellow bg-transparent text-yellow lg:hidden"
          onClick={() => setOpen(true)}
        >
          <Menu />
          <span className="sr-only">Abrir menu</span>
        </Button>

        <Sheet open={open} onOpenChange={setOpen}>
          <SheetContent
            id="menu-mobile"
            side="right"
            className="z-[60] border-l-4 border-yellow bg-ink text-cream"
          >
            <SheetHeader>
              <SheetTitle className="font-heading text-xl uppercase tracking-[0.2em] text-yellow">
                Menu
              </SheetTitle>
            </SheetHeader>
            <nav className="flex flex-col gap-1 px-4" aria-label="Mobile">
              {nav.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="border-b border-cream/15 py-3 font-heading text-lg uppercase tracking-[0.16em]"
                >
                  {item.label}
                </a>
              ))}
              <a
                href={site.links.max}
                target="_blank"
                rel="noreferrer"
                className="mt-4 inline-flex h-12 items-center justify-center bg-yellow font-heading text-sm uppercase tracking-[0.2em] text-ink"
              >
                Assistir na Max
              </a>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
