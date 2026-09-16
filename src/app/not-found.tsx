import Link from "next/link"
import { Button } from "@/components/ui/button"
import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"

export default function NotFound() {
  return (
    <>
      <SiteHeader />
      <main className="flex flex-1 flex-col items-center justify-center px-6 py-24 text-center">
        <p className="font-heading text-xs uppercase tracking-[0.4em] text-yellow">
          Erro 404
        </p>
        <h1 className="mt-4 max-w-xl font-display text-6xl leading-none text-cream">
          Essa página não existe.
        </h1>
        <p className="mt-6 max-w-md text-cream/75">
          Nem o Lucas Lang Lume, com toda a megacorporação, conseguiu localizar
          esse endereço. Volte para a capa.
        </p>
        <Button
          nativeButton={false}
          render={<Link href="/" />}
          className="mt-8 h-12 rounded-none border-2 border-ink bg-yellow px-6 font-heading text-sm uppercase tracking-[0.2em] text-ink hover:bg-cream"
        >
          Ir para o início
        </Button>
      </main>
      <SiteFooter />
    </>
  )
}
