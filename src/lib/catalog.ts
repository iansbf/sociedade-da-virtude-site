export type Lang = "pt" | "en"

export const I18N = {
  pt: {
    lang: "pt-BR",
    videosTitle: "Alguns vídeos",
    backTop: "↑ Voltar ao topo",
  },
  en: {
    lang: "en-US",
    videosTitle: "Some videos",
    backTop: "↑ Back to top",
  },
} as const

export const APRESENTACAO: Record<Lang, string[]> = {
  pt: [],
  en: [],
}

export const HERO_LOGO = "images/hero-logo.png"

export const CARTELAS: Record<Lang, string[]> = {
  pt: [
    "images/cartelas/pt-01.jpg",
    "images/cartelas/pt-02.jpg",
    "images/cartelas/pt-03.jpg",
    "images/cartelas/pt-04.jpg",
    "images/cartelas/pt-05.jpg",
    "images/cartelas/pt-06.jpg",
    "images/cartelas/pt-07.jpg",
    "images/cartelas/pt-08.jpg",
    "images/cartelas/pt-09.jpg",
  ],
  en: [
    "images/cartelas/en-01.jpg",
    "images/cartelas/en-02.jpg",
    "images/cartelas/en-03.jpg",
    "images/cartelas/en-04.jpg",
    "images/cartelas/en-05.jpg",
    "images/cartelas/en-06.jpg",
    "images/cartelas/en-07.jpg",
    "images/cartelas/en-08.jpg",
    "images/cartelas/en-09.jpg",
  ],
}

export const SHOWS = [
  {
    title: "Black Zebra",
    videos: [
      { id: "tN4NeY_GUmA", lang: "pt" as const },
      { id: "CFY1wBMf8qc", lang: "en" as const },
    ],
  },
  {
    title: "Quem é o Vigilante Noturno",
    videos: [
      { id: "izH9F8hMgvY", lang: "pt" as const },
      { id: "S2FytAQhgFk", lang: "en" as const },
    ],
  },
  {
    title: "Jonathan e Samantha e o assédio sexual",
    videos: [
      { id: "IEOh12k_SsA", lang: "pt" as const },
      { id: "-s6F9r92BIw", lang: "en" as const },
    ],
  },
  {
    title: "Poison",
    videos: [
      { id: "u8CFI_oXe-A", lang: "pt" as const },
      { id: "EcVZs36g8XA", lang: "en" as const },
    ],
  },
  {
    title: "Pantera Ruiva na Ilha de Alumínio",
    videos: [
      { id: "WUxie5cRafM", lang: "pt" as const },
      { id: "-8UvhGDWKyg", lang: "en" as const },
    ],
  },
  {
    title: "Os Gêmeos Hyper-Poderosos",
    videos: [
      { id: "TkcwROw2MMA", lang: "pt" as const },
      { id: "KO4R6ef2EcA", lang: "en" as const },
    ],
  },
  {
    title: "As Garotas Ultra Fortes",
    videos: [
      { id: "r6g5Y26B6C0", lang: "pt" as const },
      { id: "X8Xg6tISJaY", lang: "en" as const },
    ],
  },
  {
    title: "Os Impressionantes",
    videos: [
      { id: "M6o1lTztQRQ", lang: "pt" as const },
      { id: "_nCkFGrYsfU", lang: "en" as const },
    ],
  },
  {
    title: "Episódio 3 - Sociedade da Virtude: A Série",
    videos: [
      { id: "QaE3jyUuHMs", lang: "pt" as const },
      { id: "9FR0bed8kCk", lang: "en" as const },
    ],
  },
]
