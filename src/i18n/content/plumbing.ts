import type { Locale } from "../config";

const fr = {
  seo: {
    title: "Plomberie Lille : dépannage, adoucisseur, sanitaire",
    description:
      "Plombier à Lille : dépannage plomberie, installation d'adoucisseur d'eau, ballon d'eau chaude électrique, sanitaire. Intervention rapide, devis gratuit. HFE Énergie.",
    keywords: [
      "plombier Lille",
      "dépannage plomberie Lille",
      "adoucisseur d'eau Lille",
      "ballon eau chaude Lille",
    ],
  },
  breadcrumbs: [
    { name: "Accueil", url: "/" },
    { name: "Plomberie", url: "/plomberie" },
  ],
  structuredData: {
    serviceName: "Plomberie & sanitaire à Lille",
    serviceDescription:
      "Dépannage plomberie, adoucisseur d'eau, ballons d'eau chaude et rénovation sanitaire à Lille et métropole.",
    slug: "plomberie",
  },
  hero: {
    badge: "Plombier",
    title: "Plomberie & sanitaire à Lille",
    description:
      "HFE Énergie intervient pour tous vos travaux de plomberie : dépannage rapide, installation d'adoucisseurs, remplacement de ballons d'eau chaude, rénovation complète de salle de bain.",
    ctaPhone: true,
    ctaQuote: "Devis gratuit",
    phoneNote: "Ligne dédiée plomberie et dépannage sanitaire.",
  },
  offers: {
    title: "Nos prestations de plomberie",
    items: [
      {
        title: "Dépannage plomberie",
        desc: "Fuite, canalisation bouchée, robinetterie : intervention rapide à Lille et métropole.",
      },
      {
        title: "Adoucisseur d'eau",
        desc: "Installation d'adoucisseurs pour protéger vos canalisations et électroménagers du calcaire.",
      },
      {
        title: "Ballon eau chaude",
        desc: "Remplacement de ballons électriques par des modèles à haute performance ou thermodynamiques.",
      },
      {
        title: "Sanitaire & rénovation",
        desc: "Installation complète de salles de bain, WC, douches à l'italienne, robinetterie.",
      },
    ],
  },
  gallery: {
    title: "Nos réalisations en plomberie",
    subtitle: "Salles de bain, sanitaires, adoucisseurs : quelques chantiers récents.",
  },
  cta: {
    title: "Une fuite, une panne, un projet sanitaire ?",
    subtitle: "Notre équipe intervient rapidement à Lille et métropole.",
  },
} as const;

const en = {
  seo: {
    title: "Plumbing Lille: repairs, water softener, bathroom",
    description:
      "Plumber in Lille: plumbing repairs, water softener installation, electric hot water tank, bathroom fittings. Fast response, free quote. HFE Énergie.",
    keywords: [
      "plumber Lille",
      "plumbing repair Lille",
      "water softener Lille",
      "hot water tank Lille",
    ],
  },
  breadcrumbs: [
    { name: "Home", url: "/en" },
    { name: "Plumbing", url: "/en/plumbing" },
  ],
  structuredData: {
    serviceName: "Plumbing & bathroom fittings in Lille",
    serviceDescription:
      "Plumbing repairs, water softeners, hot water tanks and bathroom renovation in Lille and the metropolitan area.",
    slug: "plumbing",
  },
  hero: {
    badge: "Plumber",
    title: "Plumbing & bathroom fittings in Lille",
    description:
      "HFE Énergie handles all your plumbing needs: fast repairs, water softener installation, hot water tank replacement and complete bathroom renovation.",
    ctaPhone: true,
    ctaQuote: "Free quote",
    phoneNote: "Dedicated plumbing and sanitary emergency line.",
  },
  offers: {
    title: "Our plumbing services",
    items: [
      {
        title: "Plumbing repairs",
        desc: "Leaks, blocked pipes, taps: fast response in Lille and the metropolitan area.",
      },
      {
        title: "Water softener",
        desc: "Water softener installation to protect your pipework and appliances from limescale.",
      },
      {
        title: "Hot water tank",
        desc: "Replacement of electric tanks with high-efficiency or thermodynamic models.",
      },
      {
        title: "Bathroom & renovation",
        desc: "Full bathroom installation: toilets, walk-in showers, taps and fittings.",
      },
    ],
  },
  gallery: {
    title: "Our plumbing projects",
    subtitle: "Bathrooms, sanitary fittings, water softeners: recent projects.",
  },
  cta: {
    title: "A leak, a breakdown or a bathroom project?",
    subtitle: "Our team responds quickly across Lille and the metropolitan area.",
  },
} as const;

export function getPlumbingContent(locale: Locale) {
  return locale === "en" ? en : fr;
}

export type PlumbingContent = ReturnType<typeof getPlumbingContent>;
