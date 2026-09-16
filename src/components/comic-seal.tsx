export function ComicSeal({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 120 120"
      aria-hidden="true"
      className={className}
    >
      <circle cx="60" cy="60" r="56" fill="#0a0908" stroke="#ffe14a" strokeWidth="4" />
      <circle cx="60" cy="60" r="46" fill="none" stroke="#e31c23" strokeWidth="3" />
      <path
        d="M60 18 L66 48 L96 48 L72 66 L80 96 L60 78 L40 96 L48 66 L24 48 L54 48 Z"
        fill="#ffe14a"
      />
      <text
        x="60"
        y="112"
        textAnchor="middle"
        fill="#f4ead8"
        fontSize="9"
        fontFamily="Oswald, sans-serif"
        letterSpacing="2"
      >
        SDV
      </text>
    </svg>
  )
}
