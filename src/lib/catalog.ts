export type Lang = "pt" | "en"

export const I18N = {
  pt: {
    lang: "pt-BR",
    eyebrow: "Apresentação de conteúdo",
    lede: "Uma seleção das séries e produções do nosso universo animado. Escolha o idioma acima para ver a apresentação e os vídeos.",
    titles: "títulos",
    videosWord: "vídeos",
    introTitle: "Apresentação",
    videosTitle: "Os vídeos",
    backTop: "↑ Voltar ao topo",
  },
  en: {
    lang: "en-US",
    eyebrow: "Content showcase",
    lede: "A selection of series and productions from our animated universe. Pick a language above to see the presentation and the videos.",
    titles: "titles",
    videosWord: "videos",
    introTitle: "Presentation",
    videosTitle: "The videos",
    backTop: "↑ Back to top",
  },
} as const

export const APRESENTACAO: Record<Lang, string[]> = {
  pt: [],
  en: [],
}

export const APRESENTACAO_PLACEHOLDER: Record<Lang, string> = {
  pt: "Texto de apresentação em português entra aqui (Ian vai enviar).",
  en: "English presentation text goes here (Ian will send it).",
}

export const SHOWS = [
  {
    title: "Black Zebra",
    tag: null as string | null,
    synopsis: {
      pt: "RASCUNHO: sinopse de Black Zebra.",
      en: "DRAFT: English synopsis for Black Zebra.",
    },
    videos: [
      { id: "tN4NeY_GUmA", lang: "pt" as const, views: null as number | null },
      { id: "CFY1wBMf8qc", lang: "en" as const, views: null },
    ],
  },
  {
    title: "Quem é o Vigilante Noturno",
    tag: "Black",
    synopsis: {
      pt: "RASCUNHO: sinopse do Vigilante Noturno.",
      en: "DRAFT: English synopsis for The Night Vigilante.",
    },
    videos: [
      { id: "izH9F8hMgvY", lang: "pt" as const, views: null as number | null },
      { id: "S2FytAQhgFk", lang: "en" as const, views: null },
    ],
  },
  {
    title: "Thundercats",
    tag: null,
    synopsis: {
      pt: "RASCUNHO: sinopse de Thundercats.",
      en: "DRAFT: English synopsis for Thundercats.",
    },
    videos: [
      { id: "IEOh12k_SsA", lang: "pt" as const, views: null as number | null },
      { id: "-s6F9r92BIw", lang: "en" as const, views: null },
    ],
  },
  {
    title: "Poison",
    tag: null,
    synopsis: {
      pt: "RASCUNHO: sinopse de Poison.",
      en: "DRAFT: English synopsis for Poison.",
    },
    videos: [
      { id: "u8CFI_oXe-A", lang: "pt" as const, views: null as number | null },
      { id: "EcVZs36g8XA", lang: "en" as const, views: null },
    ],
  },
  {
    title: "Pantera Ruiva na Ilha de Alumínio",
    tag: null,
    synopsis: {
      pt: "RASCUNHO: sinopse de Pantera Ruiva na Ilha de Alumínio.",
      en: "DRAFT: English synopsis for Ginger Panther and the Aluminium Island.",
    },
    videos: [
      { id: "WUxie5cRafM", lang: "pt" as const, views: null as number | null },
      { id: "-8UvhGDWKyg", lang: "en" as const, views: null },
    ],
  },
  {
    title: "Os Gêmeos Hyper-Poderosos",
    tag: null,
    synopsis: {
      pt: "RASCUNHO: sinopse dos Gêmeos Hyper-Poderosos.",
      en: "DRAFT: English synopsis for The Hyperpowerful Twins.",
    },
    videos: [
      { id: "TkcwROw2MMA", lang: "pt" as const, views: null as number | null },
      { id: "KO4R6ef2EcA", lang: "en" as const, views: null },
    ],
  },
  {
    title: "As Garotas Ultra Fortes",
    tag: null,
    synopsis: {
      pt: "RASCUNHO: sinopse de As Garotas Ultra Fortes.",
      en: "DRAFT: English synopsis for The Ultra Strong Girls.",
    },
    videos: [
      { id: "r6g5Y26B6C0", lang: "pt" as const, views: null as number | null },
      { id: "X8Xg6tISJaY", lang: "en" as const, views: null },
    ],
  },
  {
    title: "Os Impressionantes",
    tag: null,
    synopsis: {
      pt: "RASCUNHO: sinopse de Os Impressionantes.",
      en: "DRAFT: English synopsis for The Impressives.",
    },
    videos: [
      { id: "M6o1lTztQRQ", lang: "pt" as const, views: null as number | null },
      { id: "_nCkFGrYsfU", lang: "en" as const, views: null },
    ],
  },
]
