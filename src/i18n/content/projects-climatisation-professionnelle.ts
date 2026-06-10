import type { Locale } from "../config";
import type { ProjectBase, ProjectImage } from "./projects-shared";
import { buildProjects } from "./projects-shared";
import { getProjectEnrichment } from "./projects-enrichment";

const chantier1ImagesFr: ProjectImage[] = [
  { src: "/projet/climatisation_professionnel/chantier1/1.jpg", alt: "Climatisation multi-split Panasonic 5Z90 — unité extérieure en toiture-terrasse, liaisons frigorifiques calorifugées", width: 1206, height: 1599 },
  { src: "/projet/climatisation_professionnel/chantier1/2.jpg", alt: "Unité extérieure multi-split — interrupteur de proximité et liaisons soigneusement cheminées", width: 1206, height: 1592 },
  { src: "/projet/climatisation_professionnel/chantier1/3.jpg", alt: "Unité extérieure Panasonic R32 posée sur plots en toiture-terrasse", width: 1206, height: 1593 },
  { src: "/projet/climatisation_professionnel/chantier1/4.jpg", alt: "Unité murale Panasonic dans un bureau — goulotte avec coude de finition vers le faux plafond", width: 1206, height: 1590 },
  { src: "/projet/climatisation_professionnel/chantier1/5.jpg", alt: "Unité murale installée au-dessus d'une porte — liaisons passées en faux plafond", width: 1206, height: 1593 },
  { src: "/projet/climatisation_professionnel/chantier1/6.jpg", alt: "Mise en service de l'unité extérieure — contrôle des pressions et raccordements frigorifiques", width: 1206, height: 1593 },
];

const chantier1ImagesEn: ProjectImage[] = [
  { src: "/projet/climatisation_professionnel/chantier1/1.jpg", alt: "Panasonic 5Z90 multi-split air conditioning — outdoor unit on a flat roof, insulated refrigerant lines", width: 1206, height: 1599 },
  { src: "/projet/climatisation_professionnel/chantier1/2.jpg", alt: "Multi-split outdoor unit — local isolator switch and neatly routed connections", width: 1206, height: 1592 },
  { src: "/projet/climatisation_professionnel/chantier1/3.jpg", alt: "Panasonic R32 outdoor unit mounted on pads on the flat roof", width: 1206, height: 1593 },
  { src: "/projet/climatisation_professionnel/chantier1/4.jpg", alt: "Panasonic wall-mounted unit in an office — trunking with finishing elbow up to the suspended ceiling", width: 1206, height: 1590 },
  { src: "/projet/climatisation_professionnel/chantier1/5.jpg", alt: "Wall-mounted unit installed above a door — connections routed through the suspended ceiling", width: 1206, height: 1593 },
  { src: "/projet/climatisation_professionnel/chantier1/6.jpg", alt: "Commissioning of the outdoor unit — pressure checks and refrigerant connections", width: 1206, height: 1593 },
];

const fr = {
  seo: {
    title: "Nos réalisations climatisation professionnelle à Lille — HFE",
    description:
      "Découvrez un chantier de climatisation professionnelle réalisé par Hecker & Frères Énergie (HFE) à Lille et métropole : multi-split Panasonic 5Z90, intégration en faux plafonds, pompes de relevage des condensats.",
    keywords: [
      "réalisation climatisation professionnelle Lille",
      "chantier climatisation bureaux",
      "installation multi-split Panasonic 5Z90",
      "climatisation tertiaire Lille",
      "climatisation faux plafond entreprise",
    ],
  },
  breadcrumbs: [
    { name: "Accueil", url: "/" },
    { name: "Climatisation", url: "/climatisation" },
    { name: "Réalisations climatisation professionnelle", url: "/realisations/climatisation-professionnelle" },
  ],
  hero: {
    badge: "Nos réalisations",
    title: "Climatisation professionnelle : nos chantiers",
    description:
      "Chaque installation est différente. Découvrez un chantier de climatisation professionnelle réalisé par Hecker & Frères Énergie (HFE) à Lille et dans la métropole lilloise — un multi-split Panasonic 5Z90 avec intégration discrète en faux plafonds.",
    ctaQuote: "Demander un devis",
  },
  projectLabel: "Chantier",
  projects: [
    {
      slug: "panasonic-5z90-multisplit-faux-plafonds",
      title: "Installation d'une climatisation 5Z90",
      subtitle: "Climatisation réversible multi-split Panasonic 5Z90 avec intégration en faux plafonds",
      description: [
        "Dans le cadre de ce projet, nous avons réalisé l'installation d'un système de climatisation réversible multi-split Panasonic 5Z90, conçu pour assurer un confort thermique optimal dans l'ensemble de l'habitation tout au long de l'année.",
        "Cette installation comprend plusieurs unités intérieures réparties stratégiquement dans les différentes pièces du logement afin d'offrir une diffusion homogène de l'air et une régulation précise de la température selon les besoins des occupants.",
        "Pour garantir une intégration la plus discrète possible, une partie importante des liaisons frigorifiques, alimentations électriques et évacuations des condensats a été acheminée à travers les faux plafonds existants. Des passages en goulottes avec coudes de finition ont été réalisés afin de préserver l'esthétique des lieux et d'assurer une parfaite intégration.",
        "Des pompes de relevage des condensats ont également été mises en place sur certaines unités afin de permettre une évacuation efficace de l'eau.",
      ],
      images: chantier1ImagesFr,
    },
  ] satisfies readonly ProjectBase[],
  cta: {
    title: "Un projet de climatisation pour vos locaux ?",
    subtitle: "Étude gratuite, devis sous 72h, accompagnement par HFE.",
  },
} as const;

const en = {
  seo: {
    title: "Our commercial air conditioning projects in Lille — HFE",
    description:
      "Discover a commercial air conditioning project by Hecker & Frères Énergie (HFE) in Lille: Panasonic 5Z90 multi-split, suspended-ceiling integration, condensate lift pumps.",
    keywords: [
      "commercial air conditioning project Lille",
      "office air conditioning installation",
      "Panasonic 5Z90 multi-split installation",
      "commercial HVAC Lille",
      "suspended ceiling air conditioning",
    ],
  },
  breadcrumbs: [
    { name: "Home", url: "/en" },
    { name: "Air conditioning", url: "/en/air-conditioning" },
    { name: "Commercial air conditioning projects", url: "/en/projects/commercial-air-conditioning" },
  ],
  hero: {
    badge: "Our projects",
    title: "Commercial air conditioning: our installations",
    description:
      "Every installation is different. Discover a commercial air conditioning project completed by Hecker & Frères Énergie (HFE) in Lille and the metropolitan area — a Panasonic 5Z90 multi-split with discreet suspended-ceiling integration.",
    ctaQuote: "Request a quote",
  },
  projectLabel: "Installation",
  projects: [
    {
      slug: "panasonic-5z90-multisplit-suspended-ceilings",
      title: "Installation of a 5Z90 air conditioning system",
      subtitle: "Panasonic 5Z90 multi-split reversible air conditioning with suspended-ceiling integration",
      description: [
        "As part of this project, we installed a Panasonic 5Z90 multi-split reversible air conditioning system, designed to provide optimal thermal comfort throughout the premises all year round.",
        "The installation includes several indoor units strategically distributed across the rooms to deliver even air distribution and precise temperature control according to the occupants' needs.",
        "To ensure the most discreet integration possible, a large part of the refrigerant lines, electrical supplies and condensate drains was routed through the existing suspended ceilings. Trunking runs with finishing elbows were installed to preserve the aesthetics of the premises and ensure a perfect integration.",
        "Condensate lift pumps were also fitted on some units to ensure efficient water drainage.",
      ],
      images: chantier1ImagesEn,
    },
  ] satisfies readonly ProjectBase[],
  cta: {
    title: "Planning air conditioning for your premises?",
    subtitle: "Free survey, quote within 72 hours, support by HFE.",
  },
} as const;

export function getProjectsClimProContent(locale: Locale) {
  const content = locale === "en" ? en : fr;
  return { ...content, projects: buildProjects(content.projects, locale, getProjectEnrichment) };
}

export type ProjectsClimProContent = ReturnType<typeof getProjectsClimProContent>;
