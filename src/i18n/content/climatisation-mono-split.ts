import type { Locale } from "../config";
import type { ProjectBase, ProjectImage } from "./projects-shared";
import { buildProjects } from "./projects-shared";
import { getProjectEnrichment } from "./projects-enrichment";

const chantier1ImagesFr: ProjectImage[] = [
  { src: "/projet/climatisation/chantier1/1.jpg", alt: "Climatisation monosplit Panasonic 2,5 kW — unité murale installée dans le salon", width: 1206, height: 1590 },
  { src: "/projet/climatisation/chantier1/2.jpg", alt: "Unité extérieure Panasonic R32 posée sur plots sur la terrasse", width: 1206, height: 1599 },
];

const chantier1ImagesEn: ProjectImage[] = [
  { src: "/projet/climatisation/chantier1/1.jpg", alt: "Panasonic 2.5 kW single-split air conditioning — wall-mounted unit installed in the living room", width: 1206, height: 1590 },
  { src: "/projet/climatisation/chantier1/2.jpg", alt: "Panasonic R32 outdoor unit mounted on pads on the terrace", width: 1206, height: 1599 },
];

const fr = {
  seo: {
    title: "Climatisation mono-split à Lille | Installation réversible — HFE",
    description:
      "Installation de climatisation mono-split réversible à Lille par Hecker & Frères Énergie (HFE). Une unité intérieure et une unité extérieure pour climatiser une pièce de 15 à 45 m². Devis gratuit.",
    keywords: [
      "climatisation mono-split Lille",
      "installation monosplit Lille",
      "climatisation réversible salon",
      "installateur monosplit Panasonic Lille",
      "climatisation pièce unique Lille",
    ],
  },
  breadcrumbs: [
    { name: "Accueil", url: "/" },
    { name: "Climatisation", url: "/climatisation" },
    { name: "Réalisations mono-split", url: "/realisations/climatisation/mono-split" },
  ],
  hero: {
    badge: "Climatisation réversible",
    title: "Climatisation mono-split",
    description:
      "Une unité extérieure connectée à une seule unité intérieure : la solution idéale pour climatiser une pièce de vie ou une chambre. Installation rapide, discrète et réversible été comme hiver.",
    ctaQuote: "Demander un devis",
  },
  intro: {
    title: "Qu'est-ce qu'une climatisation mono-split ?",
    paragraphs: [
      "Le mono-split (ou monosplit) est le système de climatisation réversible le plus courant pour une pièce unique. Il associe une unité extérieure à une seule unité intérieure murale, console ou cassette selon la configuration des lieux.",
      "Chez Hecker & Frères Énergie (HFE), nous dimensionnons chaque installation en fonction de la surface à climatiser, de l'exposition et de l'isolation du logement. Une étude technique est réalisée avant chaque devis pour garantir un confort optimal et une consommation maîtrisée.",
      "Réversible, le mono-split rafraîchit en été et peut chauffer en hiver avec un excellent rendement énergétique — une alternative économique au chauffage électrique d'appoint.",
    ],
    advantagesTitle: "Les avantages du mono-split",
    advantages: [
      "Solution 2-en-1 : rafraîchissement et chauffage d'appoint.",
      "Installation rapide, souvent réalisée en une journée.",
      "Idéal pour une pièce de 15 à 45 m².",
      "Régulation précise de la température.",
      "Unité murale discrète et peu encombrante.",
      "Consommation réduite par rapport au chauffage électrique direct.",
    ],
  },
  projectLabel: "Chantier",
  projects: [
    {
      slug: "monosplit-panasonic-2-5kw-salon",
      title: "Installation d'une climatisation monosplit 2,5 kW",
      subtitle: "Climatisation monosplit Panasonic 2,5 kW dans un salon à Lille",
      description: [
        "Dans le cadre de ce projet, nous avons installé une climatisation réversible Panasonic d'une puissance de 2,5 kW afin d'assurer le rafraîchissement du salon durant les périodes de fortes chaleurs. L'unité intérieure a été positionnée de manière à garantir une diffusion homogène de l'air et un confort optimal pour les occupants.",
      ],
      images: chantier1ImagesFr,
    },
  ] satisfies readonly ProjectBase[],
  cta: {
    title: "Un projet de climatisation mono-split ?",
    subtitle: "Étude gratuite, devis sous 72h, accompagnement par HFE.",
  },
} as const;

const en = {
  seo: {
    title: "Single-split air conditioning in Lille | Reversible installation — HFE",
    description:
      "Single-split reversible air conditioning installation in Lille by Hecker & Frères Énergie (HFE). One indoor and one outdoor unit to cool a room from 15 to 45 m². Free quote.",
    keywords: [
      "single-split air conditioning Lille",
      "monosplit installation Lille",
      "reversible air conditioning living room",
      "Panasonic single-split installer Lille",
      "single room air conditioning Lille",
    ],
  },
  breadcrumbs: [
    { name: "Home", url: "/en" },
    { name: "Air conditioning", url: "/en/air-conditioning" },
    { name: "Single-split projects", url: "/en/projects/air-conditioning/mono-split" },
  ],
  hero: {
    badge: "Reversible air conditioning",
    title: "Single-split air conditioning",
    description:
      "One outdoor unit connected to a single indoor unit: the ideal solution to cool a living room or bedroom. Quick, discreet installation that works summer and winter.",
    ctaQuote: "Request a quote",
  },
  intro: {
    title: "What is single-split air conditioning?",
    paragraphs: [
      "Single-split (mono-split) is the most common reversible air conditioning system for a single room. It pairs one outdoor unit with one wall-mounted, floor console or ceiling cassette indoor unit, depending on the layout.",
      "At Hecker & Frères Énergie (HFE), we size every installation based on the area to be cooled, exposure and insulation. A technical survey is carried out before every quote to ensure optimal comfort and controlled energy use.",
      "As a reversible system, single-split cools in summer and can heat in winter with excellent energy efficiency — an economical alternative to direct electric heating.",
    ],
    advantagesTitle: "Benefits of single-split",
    advantages: [
      "2-in-1 solution: cooling and supplementary heating.",
      "Quick installation, often completed in one day.",
      "Ideal for a room from 15 to 45 m².",
      "Precise temperature control.",
      "Discreet, compact wall-mounted unit.",
      "Lower consumption than direct electric heating.",
    ],
  },
  projectLabel: "Installation",
  projects: [
    {
      slug: "panasonic-2-5kw-single-split-living-room",
      title: "Installation of a 2.5 kW single-split air conditioning system",
      subtitle: "Panasonic 2.5 kW single-split air conditioning in a living room in Lille",
      description: [
        "As part of this project, we installed a Panasonic reversible air conditioning unit with an output of 2.5 kW to cool the living room during hot spells. The indoor unit was positioned to ensure even air distribution and optimal comfort for the occupants.",
      ],
      images: chantier1ImagesEn,
    },
  ] satisfies readonly ProjectBase[],
  cta: {
    title: "Planning a single-split air conditioning project?",
    subtitle: "Free survey, quote within 72 hours, support by HFE.",
  },
} as const;

export function getClimatisationMonoSplitContent(locale: Locale) {
  const content = locale === "en" ? en : fr;
  return { ...content, projects: buildProjects(content.projects, locale, getProjectEnrichment) };
}

export type ClimatisationMonoSplitContent = ReturnType<typeof getClimatisationMonoSplitContent>;
