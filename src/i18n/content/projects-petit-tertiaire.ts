import type { Locale } from "../config";
import type { ProjectBase, ProjectImage } from "./projects-shared";
import { buildProjects } from "./projects-shared";
import { getProjectEnrichment } from "./projects-enrichment";

const heroImageFr: ProjectImage = {
  src: "/projet/climatisation_professionnel/chantier2/4.jpg",
  alt: "Unité murale Panasonic dans un local commercial — climatisation petit tertiaire installée par HFE à Lille",
  width: 1206,
  height: 1590,
};

const heroImageEn: ProjectImage = {
  src: "/projet/climatisation_professionnel/chantier2/4.jpg",
  alt: "Panasonic wall-mounted unit in a retail space — small commercial air conditioning installed by HFE in Lille",
  width: 1206,
  height: 1590,
};

const chantierImagesFr: ProjectImage[] = [
  { src: "/projet/climatisation_professionnel/chantier2/4.jpg", alt: "Unité murale Panasonic dans un local commercial — intégration discrète au-dessus de la vitrine", width: 1206, height: 1590 },
  { src: "/projet/climatisation_professionnel/chantier2/5.jpg", alt: "Climatisation réversible dans un petit bureau — liaisons passées en faux plafond", width: 1206, height: 1593 },
  { src: "/projet/climatisation_professionnel/chantier2/2.jpg", alt: "Unité extérieure multi-split posée en toiture-terrasse pour un commerce", width: 1206, height: 1592 },
  { src: "/projet/climatisation_professionnel/chantier2/6.jpg", alt: "Mise en service du multi-split — contrôle des pressions et raccordements frigorifiques", width: 1206, height: 1593 },
];

const chantierImagesEn: ProjectImage[] = [
  { src: "/projet/climatisation_professionnel/chantier2/4.jpg", alt: "Panasonic wall-mounted unit in a retail space — discreet installation above the shop front", width: 1206, height: 1590 },
  { src: "/projet/climatisation_professionnel/chantier2/5.jpg", alt: "Reversible air conditioning in a small office — connections routed through the suspended ceiling", width: 1206, height: 1593 },
  { src: "/projet/climatisation_professionnel/chantier2/2.jpg", alt: "Multi-split outdoor unit on a flat roof for a retail premises", width: 1206, height: 1592 },
  { src: "/projet/climatisation_professionnel/chantier2/6.jpg", alt: "Multi-split commissioning — pressure checks and refrigerant connections", width: 1206, height: 1593 },
];

const fr = {
  seo: {
    title: "Réalisation climatisation petit tertiaire à Lille — HFE",
    description:
      "Découvrez un chantier de climatisation petit tertiaire multi-split Panasonic réalisé par HFE à Lille : commerce, cabinet ou petit bureau, confort zone par zone.",
    keywords: [
      "climatisation petit tertiaire Lille",
      "multi-split commerce Lille",
      "climatisation bureau Lille",
      "installation climatisation professionnelle",
      "Panasonic multi-split tertiaire",
    ],
  },
  breadcrumbs: [
    { name: "Accueil", url: "/" },
    { name: "Climatisation", url: "/climatisation" },
    { name: "Petit tertiaire", url: "/realisations/petit-tertiaire" },
  ],
  hero: {
    badge: "Nos réalisations",
    title: "Climatisation petit tertiaire",
    description:
      "Commerce, cabinet ou petit bureau : découvrez une installation multi-split Panasonic réalisée par Hecker & Frères Énergie (HFE) à Lille et dans la métropole lilloise.",
    ctaQuote: "Demander un devis",
    image: heroImageFr,
  },
  projectLabel: "Chantier",
  projects: [
    {
      slug: "petit-tertiaire-multi-split-panasonic",
      title: "Climatisation petit tertiaire multi-split",
      subtitle: "Multi-split Panasonic pour commerce et petits bureaux",
      description: [
        "Pour ce local de petit tertiaire, nous avons installé un système de climatisation réversible multi-split Panasonic adapté aux surfaces modérées : boutique, cabinet ou petit open space.",
        "Trois unités intérieures murales assurent un confort été comme hiver dans la zone d'accueil, le bureau et l'espace de travail, avec une régulation indépendante pièce par pièce.",
        "L'unité extérieure a été positionnée en toiture-terrasse, avec des liaisons frigorifiques calorifugées et des passages en goulottes pour une intégration soignée dans les locaux.",
        "La mise en service a inclus le contrôle des pressions, la configuration des télécommandes et les réglages nécessaires pour un fonctionnement fiable au quotidien.",
      ],
      images: chantierImagesFr,
    },
  ] satisfies readonly ProjectBase[],
  cta: {
    title: "Un projet de climatisation pour votre commerce ou bureau ?",
    subtitle: "Étude gratuite, devis sous 72h, accompagnement par HFE.",
  },
} as const;

const en = {
  seo: {
    title: "Small commercial air conditioning project in Lille — HFE",
    description:
      "Discover a small commercial Panasonic multi-split air conditioning project by HFE in Lille: retail unit, consulting room or small office with zone-by-zone comfort.",
    keywords: [
      "small commercial air conditioning Lille",
      "retail multi-split Lille",
      "office air conditioning Lille",
      "commercial air conditioning installation",
      "Panasonic commercial multi-split",
    ],
  },
  breadcrumbs: [
    { name: "Home", url: "/en" },
    { name: "Air conditioning", url: "/en/air-conditioning" },
    { name: "Small commercial", url: "/en/projects/small-commercial-air-conditioning" },
  ],
  hero: {
    badge: "Our projects",
    title: "Small commercial air conditioning",
    description:
      "Retail unit, consulting room or small office: discover a Panasonic multi-split installation completed by Hecker & Frères Énergie (HFE) in Lille and the metropolitan area.",
    ctaQuote: "Request a quote",
    image: heroImageEn,
  },
  projectLabel: "Installation",
  projects: [
    {
      slug: "small-commercial-multi-split-panasonic",
      title: "Small commercial multi-split air conditioning",
      subtitle: "Panasonic multi-split for retail and small offices",
      description: [
        "For this small commercial premises, we installed a Panasonic multi-split reversible air conditioning system suited to moderate floor areas: retail unit, consulting room or small open-plan office.",
        "Three wall-mounted indoor units provide year-round comfort in the reception area, office and workspace, with independent room-by-room control.",
        "The outdoor unit was positioned on the flat roof, with insulated refrigerant lines and trunking runs for a neat integration within the premises.",
        "Commissioning included pressure checks, remote control setup and the adjustments required for reliable day-to-day operation.",
      ],
      images: chantierImagesEn,
    },
  ] satisfies readonly ProjectBase[],
  cta: {
    title: "Planning air conditioning for your shop or office?",
    subtitle: "Free survey, quote within 72 hours, support by HFE.",
  },
} as const;

export function getProjectsPetitTertiaireContent(locale: Locale) {
  const content = locale === "en" ? en : fr;
  return { ...content, projects: buildProjects(content.projects, locale, getProjectEnrichment) };
}

export type ProjectsPetitTertiaireContent = ReturnType<typeof getProjectsPetitTertiaireContent>;
