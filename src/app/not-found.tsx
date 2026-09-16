import Link from "next/link"

export default function NotFound() {
  return (
    <div className="wrap" style={{ paddingBlock: "80px", textAlign: "center" }}>
      <p className="eyebrow">Erro 404</p>
      <h1>
        Essa página
        <br />
        não existe
        <span className="thin">Society of Virtue</span>
      </h1>
      <p className="lede" style={{ marginInline: "auto" }}>
        O endereço não está no catálogo. Volte para a apresentação de conteúdo.
      </p>
      <p style={{ marginTop: 28 }}>
        <Link href="/" className="top">
          ← Sociedade da Virtude
        </Link>
      </p>
    </div>
  )
}
