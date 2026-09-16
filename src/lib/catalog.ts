export type Lang = "pt" | "en"

export const I18N = {
  pt: {
    lang: "pt-BR",
    videosTitle: "Alguns vídeos",
    backTop: "↑ Voltar ao topo",
    channelNote: "Só no canal brasileiro",
  },
  en: {
    lang: "en-US",
    videosTitle: "Some videos",
    backTop: "↑ Back to top",
    channelNote: "Only on the American channel",
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
    "images/cartelas/en-01-v3.jpg",
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

export type CatalogVideo = {
  id: string
  lang: Lang
  views?: number
}

export const SHOWS: {
  title: Record<Lang, string>
  videos: CatalogVideo[]
}[] = [
  {
    title: { pt: "Black Zebra", en: "Black Zebra" },
    videos: [
      { id: "tN4NeY_GUmA", lang: "pt" as const, views: 547_992 },
      { id: "CFY1wBMf8qc", lang: "en" as const, views: 178_955 },
    ],
  },
  {
    title: { pt: "Poison", en: "Poison" },
    videos: [
      { id: "u8CFI_oXe-A", lang: "pt" as const, views: 1_291_000 },
      { id: "EcVZs36g8XA", lang: "en" as const, views: 410_753 },
    ],
  },
  {
    title: {
      pt: "Quem é o Vigilante Noturno",
      en: "Who Is Black Badness?",
    },
    videos: [
      { id: "izH9F8hMgvY", lang: "pt" as const, views: 104_713 },
      { id: "S2FytAQhgFk", lang: "en" as const, views: 141_702 },
    ],
  },
  {
    title: {
      pt: "Pantera Ruiva na Ilha de Alumínio",
      en: "Ginger Panther on the Aluminium Island",
    },
    videos: [
      { id: "WUxie5cRafM", lang: "pt" as const, views: 1_058_566 },
      { id: "-8UvhGDWKyg", lang: "en" as const, views: 428_554 },
    ],
  },
  {
    title: {
      pt: "Jonathan e Samantha e o assédio sexual",
      en: "Jonathan and Samantha and the Sexual Harassment",
    },
    videos: [
      { id: "IEOh12k_SsA", lang: "pt" as const, views: 155_509 },
      { id: "-s6F9r92BIw", lang: "en" as const, views: 77_862 },
    ],
  },
  {
    title: {
      pt: "Os Gêmeos Hyper-Poderosos",
      en: "The Hyperpowerful Twins",
    },
    videos: [
      { id: "TkcwROw2MMA", lang: "pt" as const, views: 436_165 },
      { id: "KO4R6ef2EcA", lang: "en" as const, views: 309_739 },
    ],
  },
  {
    title: {
      pt: "As Garotas Ultra Fortes",
      en: "The Ultra Strong Girls",
    },
    videos: [
      { id: "r6g5Y26B6C0", lang: "pt" as const, views: 504_474 },
      { id: "X8Xg6tISJaY", lang: "en" as const, views: 279_823 },
    ],
  },
  {
    title: { pt: "Os Impressionantes", en: "The Impressives" },
    videos: [
      { id: "M6o1lTztQRQ", lang: "pt" as const, views: 825_558 },
      { id: "_nCkFGrYsfU", lang: "en" as const, views: 1_195_500 },
    ],
  },
  {
    title: {
      pt: "Episódio 3 - Sociedade da Virtude: A Série",
      en: "Episode 3 - Society of Virtue: The Series",
    },
    videos: [
      { id: "QaE3jyUuHMs", lang: "pt" as const },
      { id: "9FR0bed8kCk", lang: "en" as const },
    ],
  },
]
