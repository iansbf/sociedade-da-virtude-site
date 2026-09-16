import type { Metadata } from "next"
import { Anton, Barlow } from "next/font/google"
import "./globals.css"

const barlow = Barlow({
  variable: "--font-barlow",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
})

const anton = Anton({
  variable: "--font-anton",
  subsets: ["latin"],
  weight: "400",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://societyofvirtuestudios.com"),
  title: "Sociedade da Virtude",
  description:
    "Uma seleção das séries e produções do universo animado da Sociedade da Virtude. Society of Virtue studios.",
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-32.png", type: "image/png", sizes: "32x32" },
      { url: "/icon.png", type: "image/png", sizes: "512x512" },
    ],
    apple: "/apple-icon.png",
  },
  openGraph: {
    title: "Sociedade da Virtude",
    description:
      "Séries e produções do universo animado da Sociedade da Virtude.",
    url: "https://societyofvirtuestudios.com",
    locale: "pt_BR",
    type: "website",
  },
}

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="pt-BR" className={`${barlow.variable} ${anton.variable}`}>
      <body>{children}</body>
    </html>
  )
}
