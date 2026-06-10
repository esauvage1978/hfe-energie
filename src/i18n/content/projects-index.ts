import type { Locale } from "../config";
import type { RouteId } from "../routes";
import { getProjectsPacAirEauContent } from "./projects-pac-air-eau";
import { getClimatisationMonoSplitContent } from "./climatisation-mono-split";
import { getProjectsClimContent } from "./projects-climatisation";
import { getProjectsClimProContent } from "./projects-climatisation-professionnelle";
import { getProjectsPlancherChauffantContent } from "./projects-plancher-chauffant";

export interface ProjectsIndexItem {
  route: RouteId;
  title: string;
  description: string;
  /** Nombre de chantiers, dérivé du contenu de la page cible */
  count: number;
  cover: { src: string; alt: string; width: number; height: number };
}

function buildItems(locale: Locale): ProjectsIndexItem[] {
  const pacAirEau = getProjectsPacAirEauContent(locale);
  const clim = getProjectsClimContent(locale);
  const monoSplit = getClimatisationMonoSplitContent(locale);
  const climPro = getProjectsClimProContent(locale);
  const plancher = getProjectsPlancherChauffantContent(locale);

  if (locale === "en") {
    return [
      {
        route: "projectsPacAirEau",
        title: "Air-to-water heat pump",
        description: "Gas boiler replacement, central heating creation, thermodynamic water heater and full system overhauls.",
        count: pacAirEau.projects.length,
        cover: { ...pacAirEau.projects[0].images[0] },
      },
      {
        route: "climatisationMonoSplit",
        title: "Single-split air conditioning",
        description: "One outdoor unit for a single indoor unit: ideal for cooling a living room or bedroom.",
        count: monoSplit.projects.length,
        cover: { ...monoSplit.projects[0].images[0] },
      },
      {
        route: "projectsClim",
        title: "Multi-split air conditioning",
        description: "One outdoor unit for several indoor units: Panasonic 3Z68 and TZ42 air-to-air with floor console and cassette.",
        count: clim.projects.length,
        cover: { ...clim.projects[0].images[0] },
      },
      {
        route: "projectsClimPro",
        title: "Commercial air conditioning",
        description: "Multi-split systems for offices with discreet suspended-ceiling integration and condensate lift pumps.",
        count: climPro.projects.length,
        cover: { ...climPro.projects[0].images[0] },
      },
      {
        route: "projectsPlancherChauffant",
        title: "Underfloor heating",
        description: "Low-temperature underfloor heating paired with an air-to-water heat pump for gentle, even warmth.",
        count: plancher.projects.length,
        cover: { ...plancher.projects[0].images[0] },
      },
    ];
  }

  return [
    {
      route: "projectsPacAirEau",
      title: "Pompe à chaleur air-eau",
      description: "Remplacement de chaudière gaz, création de réseau de chauffage central, chauffe-eau thermodynamique et remise à neuf de réseaux.",
      count: pacAirEau.projects.length,
      cover: { ...pacAirEau.projects[0].images[0] },
    },
    {
      route: "climatisationMonoSplit",
      title: "Climatisation mono-split",
      description: "Une unité extérieure pour une seule unité intérieure : idéal pour climatiser une pièce de vie ou une chambre.",
      count: monoSplit.projects.length,
      cover: { ...monoSplit.projects[0].images[0] },
    },
    {
      route: "projectsClim",
      title: "Climatisation multi-split",
      description: "Une unité extérieure pour plusieurs unités intérieures : Panasonic 3Z68 et PAC air-air TZ42 avec console basse et cassette.",
      count: clim.projects.length,
      cover: { ...clim.projects[0].images[0] },
    },
    {
      route: "projectsClimPro",
      title: "Climatisation professionnelle",
      description: "Multi-split tertiaire pour bureaux avec intégration discrète en faux plafonds et pompes de relevage.",
      count: climPro.projects.length,
      cover: { ...climPro.projects[0].images[0] },
    },
    {
      route: "projectsPlancherChauffant",
      title: "Plancher chauffant",
      description: "Plancher chauffant basse température couplé à une pompe à chaleur air-eau pour une chaleur douce et homogène.",
      count: plancher.projects.length,
      cover: { ...plancher.projects[0].images[0] },
    },
  ];
}

const fr = {
  seo: {
    title: "Nos réalisations à Lille | Chantiers PAC, climatisation, chauffage — HFE",
    description:
      "Découvrez tous les chantiers réalisés par Hecker & Frères Énergie (HFE) à Lille et métropole : PAC air-eau, mono-split, multi-split, climatisation professionnelle et plancher chauffant.",
    keywords: [
      "réalisations HFE Lille",
      "chantiers pompe à chaleur Lille",
      "réalisations climatisation Lille",
      "chantier plancher chauffant",
      "avant après installation chauffage",
    ],
  },
  breadcrumbs: [
    { name: "Accueil", url: "/" },
    { name: "Nos réalisations", url: "/realisations" },
  ],
  hero: {
    badge: "Nos réalisations",
    title: "Tous nos chantiers en photos",
    description:
      "PAC air-eau, climatisation mono-split, multi-split, climatisation tertiaire et plancher chauffant : découvrez nos chantiers réels à Lille et dans la métropole lilloise, avec photos et détails techniques.",
    ctaQuote: "Demander un devis",
  },
  seeProjects: "Voir les chantiers",
  countLabel: (n: number) => `${n} chantier${n > 1 ? "s" : ""}`,
  cta: {
    title: "Votre projet mérite le même soin",
    subtitle: "Étude gratuite, devis sous 72h, accompagnement des aides par HFE.",
  },
} as const;

const en = {
  seo: {
    title: "Our projects in Lille | Heat pumps, air conditioning, heating — HFE",
    description:
      "Discover all the installations completed by Hecker & Frères Énergie (HFE) in Lille: air-to-water heat pumps, single-split, multi-split, commercial air conditioning and underfloor heating.",
    keywords: [
      "HFE projects Lille",
      "heat pump installations Lille",
      "air conditioning projects Lille",
      "underfloor heating project",
      "before after heating installation",
    ],
  },
  breadcrumbs: [
    { name: "Home", url: "/en" },
    { name: "Our projects", url: "/en/projects" },
  ],
  hero: {
    badge: "Our projects",
    title: "All our installations in pictures",
    description:
      "Air-to-water heat pumps, single-split, multi-split, commercial air conditioning and underfloor heating: discover our real installations in Lille and the metropolitan area, with photos and technical details.",
    ctaQuote: "Request a quote",
  },
  seeProjects: "View the installations",
  countLabel: (n: number) => `${n} installation${n > 1 ? "s" : ""}`,
  cta: {
    title: "Your project deserves the same care",
    subtitle: "Free survey, quote within 72 hours, grant support by HFE.",
  },
} as const;

export function getProjectsIndexContent(locale: Locale) {
  return {
    ...(locale === "en" ? en : fr),
    items: buildItems(locale),
  };
}

export type ProjectsIndexContent = ReturnType<typeof getProjectsIndexContent>;
