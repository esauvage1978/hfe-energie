import type { Locale } from "../config";
import type { ProjectImage } from "./projects-shared";

const heroImageFr: ProjectImage = {
  src: "/projet/remplacement_chaudiere/hero.jpg",
  alt: "Chaudière gaz à condensation murale installée par Hecker & Frères Énergie (HFE) à Lille",
  width: 1024,
  height: 683,
};

const heroImageEn: ProjectImage = {
  src: "/projet/remplacement_chaudiere/hero.jpg",
  alt: "Wall-mounted condensing gas boiler installed by Hecker & Frères Énergie (HFE) in Lille",
  width: 1024,
  height: 683,
};

const fr = {
  seo: {
    title: "Remplacement de chaudière à Lille : PAC, hybride – HFE",
    description:
      "Remplacement de chaudière à Lille et métropole par HFE : pompe à chaleur air-eau, PAC hybride ou chaudière gaz à condensation. Étude personnalisée, aides MaPrimeRénov' et CEE.",
    keywords: [
      "remplacement chaudière Lille",
      "chaudière à condensation Lille",
      "remplacement chaudière fioul Lille",
      "PAC hybride Lille",
      "chauffagiste remplacement chaudière",
    ],
  },
  breadcrumbs: [
    { name: "Accueil", url: "/" },
    { name: "Chauffage", url: "/chauffage" },
    { name: "Remplacement de chaudière", url: "/realisations/remplacement-chaudiere" },
  ],
  hero: {
    badge: "Nos réalisations",
    title: "Remplacement de chaudière",
    description:
      "Modernisez votre installation de chauffage à Lille et métropole : pompe à chaleur, PAC hybride ou chaudière gaz à condensation — HFE vous accompagne de l'étude à la mise en service.",
    ctaQuote: "Demander un devis",
    image: heroImageFr,
  },
  intro: {
    title: "Remplacement de chaudière : modernisez votre installation de chauffage",
    paragraphs: [
      "Le remplacement d'une chaudière ancienne génération permet d'améliorer significativement les performances énergétiques de votre logement, de réduire vos consommations et de gagner en confort au quotidien. Selon les besoins du logement, l'état de l'installation existante et les objectifs du client, plusieurs solutions peuvent être envisagées : pompe à chaleur, pompe à chaleur hybride ou chaudière gaz à condensation.",
    ],
    sections: [
      {
        title: "Pompe à chaleur air/eau",
        paragraphs: [
          "La pompe à chaleur air/eau récupère les calories présentes dans l'air extérieur pour chauffer votre habitation et produire votre eau chaude sanitaire. C'est aujourd'hui l'une des solutions les plus performantes pour réduire durablement sa facture énergétique et son impact environnemental.",
        ],
      },
      {
        title: "Pompe à chaleur hybride",
        paragraphs: [
          "La pompe à chaleur hybride associe une pompe à chaleur et une chaudière gaz à condensation. Le système sélectionne automatiquement l'énergie la plus avantageuse en fonction des conditions climatiques et des besoins de chauffage afin d'optimiser le rendement tout au long de l'année.",
        ],
      },
      {
        title: "Chaudière gaz à condensation",
        paragraphs: [
          "La chaudière gaz à condensation constitue une solution fiable et performante pour remplacer une ancienne chaudière. Elle récupère la chaleur contenue dans les fumées pour améliorer son rendement et réduire la consommation de gaz.",
        ],
      },
    ],
    advantagesTitle: "Les avantages du remplacement",
    advantages: [
      "Amélioration du confort thermique",
      "Réduction des consommations d'énergie",
      "Équipements plus performants et plus fiables",
      "Valorisation de votre logement",
      "Réduction des émissions de CO₂",
      "Compatibilité avec radiateurs et planchers chauffants",
      "Accompagnement pour les aides à la rénovation énergétique",
    ],
    closing: {
      title: "Un accompagnement sur mesure",
      text: "Chaque projet fait l'objet d'une étude personnalisée afin de proposer la solution la plus adaptée à votre habitation, à votre budget et à vos habitudes de consommation. HFE – Hecker & Frères Énergie vous accompagne dans le remplacement de votre chaudière, de l'étude thermique à la mise en service, pour vous garantir une installation performante, économique et durable.",
    },
  },
  cover: heroImageFr,
  cta: {
    title: "Un projet de remplacement de chaudière ?",
    subtitle: "Étude gratuite, devis sous 72h, accompagnement des aides par HFE.",
  },
} as const;

const en = {
  seo: {
    title: "Boiler replacement in Lille: heat pump, hybrid – HFE",
    description:
      "Boiler replacement in Lille and the metropolitan area by HFE: air-to-water heat pump, hybrid heat pump or condensing gas boiler. Personalised assessment, MaPrimeRénov' and CEE grant support.",
    keywords: [
      "boiler replacement Lille",
      "condensing boiler Lille",
      "oil boiler replacement Lille",
      "hybrid heat pump Lille",
      "heating engineer boiler replacement",
    ],
  },
  breadcrumbs: [
    { name: "Home", url: "/en" },
    { name: "Heating", url: "/en/heating" },
    { name: "Boiler replacement", url: "/en/projects/boiler-replacement" },
  ],
  hero: {
    badge: "Our projects",
    title: "Boiler replacement",
    description:
      "Upgrade your heating system in Lille and the metropolitan area: heat pump, hybrid heat pump or condensing gas boiler — HFE supports you from assessment to commissioning.",
    ctaQuote: "Request a quote",
    image: heroImageEn,
  },
  intro: {
    title: "Boiler replacement: upgrade your heating system",
    paragraphs: [
      "Replacing an old-generation boiler significantly improves your home's energy performance, cuts consumption and enhances everyday comfort. Depending on your property, the existing installation and your goals, several options are available: heat pump, hybrid heat pump or condensing gas boiler.",
    ],
    sections: [
      {
        title: "Air-to-water heat pump",
        paragraphs: [
          "An air-to-water heat pump captures heat from the outdoor air to heat your home and produce domestic hot water. It is one of the most effective solutions today for sustainably reducing energy bills and environmental impact.",
        ],
      },
      {
        title: "Hybrid heat pump",
        paragraphs: [
          "A hybrid heat pump combines a heat pump and a condensing gas boiler. The system automatically selects the most efficient energy source according to weather conditions and heating demand to optimise performance throughout the year.",
        ],
      },
      {
        title: "Condensing gas boiler",
        paragraphs: [
          "A condensing gas boiler is a reliable, high-performance solution for replacing an old boiler. It recovers heat from flue gases to improve efficiency and reduce gas consumption.",
        ],
      },
    ],
    advantagesTitle: "The benefits of replacement",
    advantages: [
      "Improved thermal comfort",
      "Lower energy consumption",
      "More efficient, more reliable equipment",
      "Increased property value",
      "Reduced CO₂ emissions",
      "Compatible with radiators and underfloor heating",
      "Support with energy renovation grants",
    ],
    closing: {
      title: "Tailored support",
      text: "Every project includes a personalised assessment to recommend the solution best suited to your home, budget and usage habits. HFE – Hecker & Frères Énergie supports you through boiler replacement, from thermal assessment to commissioning, ensuring a high-performance, economical and durable installation.",
    },
  },
  cover: heroImageEn,
  cta: {
    title: "Planning a boiler replacement project?",
    subtitle: "Free assessment, quote within 72 hours, grant support by HFE.",
  },
} as const;

export function getProjectsRemplacementChaudiereContent(locale: Locale) {
  return locale === "en" ? en : fr;
}

export type ProjectsRemplacementChaudiereContent = ReturnType<typeof getProjectsRemplacementChaudiereContent>;
