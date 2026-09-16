import type { Metadata } from "next"
import { Bangers, Geist, Oswald } from "next/font/google"
import "./globals.css"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
})

const bangers = Bangers({
  variable: "--font-bangers",
  subsets: ["latin"],
  weight: "400",
})

export const metadata: Metadata = {
  title: {
    default: "Sociedade da Virtude: A Série",
    template: "%s · Sociedade da Virtude",
  },
  description:
    "Site oficial de Sociedade da Virtude: A Série. As origens dos heróis de Megalópolisville, agora na Max e no Adult Swim.",
  keywords: [
    "Sociedade da Virtude",
    "Ian SBF",
    "Thobias Daneluz",
    "HBO Max",
    "Adult Swim",
    "Neebla",
  ],
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    title: "Sociedade da Virtude: A Série",
    description:
      "As origens dos heróis de Megalópolisville. Estreou em 24 de abril de 2026 na Max e no Adult Swim.",
    locale: "pt_BR",
    type: "website",
  },
}

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pt-BR"
      className={`${geistSans.variable} ${oswald.variable} ${bangers.variable} dark h-full`}
    >
      <body className="flex min-h-full flex-col bg-ink font-sans text-cream antialiased">
        {children}
      </body>
    </html>
  )
}
