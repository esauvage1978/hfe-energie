import type { Locale } from "../config";
import type { ProjectEnrichment } from "./projects-enrichment";

export interface ProjectImage {
  src: string;
  alt: string;
  width: number;
  height: number;
}

export type ProjectStatIcon =
  | "heat-pump"
  | "ac-unit"
  | "snowflake"
  | "flame"
  | "droplet"
  | "shield"
  | "check"
  | "radiator"
  | "leaf"
  | "clock";

export interface ProjectStat {
  icon: ProjectStatIcon;
  value: string;
  label: string;
}

export interface ProjectBeforeAfterSide {
  caption: string;
  image?: ProjectImage;
}

export interface ProjectResult {
  title: string;
  description: string;
}

export interface ProjectBrand {
  name: string;
  logo: string;
  warranties: readonly string[];
}

export interface Project {
  slug: string;
  title: string;
  subtitle: string;
  description: string[];
  stats: readonly [ProjectStat, ProjectStat, ProjectStat, ProjectStat];
  beforeAfter: {
    before?: ProjectBeforeAfterSide;
    after?: ProjectBeforeAfterSide;
    afters?: readonly ProjectBeforeAfterSide[];
  };
  results: readonly [ProjectResult, ProjectResult, ProjectResult, ProjectResult];
  brands?: readonly ProjectBrand[];
  images: ProjectImage[];
}

const uiFr = {
  statsTitle: "Le chantier en chiffres",
  beforeAfterTitle: "Avant / Après",
  beforeLabel: "Avant",
  afterLabel: "Après",
  lightboxClose: "Fermer",
  lightboxPrev: "Photo précédente",
  lightboxNext: "Photo suivante",
  resultsTitle: "Le résultat",
  aboutTitle: "À propos de cette installation",
  galleryTitle: "Photos du chantier",
  installCta: {
    badge: "Votre confort clé en main",
    subtitle: "Étude, installation et suivi : nous nous occupons de tout.",
    quote: "Demander un devis",
  },
} as const;

const uiEn = {
  statsTitle: "The project in figures",
  beforeAfterTitle: "Before / After",
  beforeLabel: "Before",
  afterLabel: "After",
  lightboxClose: "Close",
  lightboxPrev: "Previous photo",
  lightboxNext: "Next photo",
  resultsTitle: "The result",
  aboutTitle: "About this installation",
  galleryTitle: "Project photos",
  installCta: {
    badge: "Your turnkey comfort",
    subtitle: "Survey, installation and follow-up: we take care of everything.",
    quote: "Request a quote",
  },
} as const;

export function getProjectsUi(locale: Locale) {
  return locale === "en" ? uiEn : uiFr;
}

export type ProjectBase = Pick<Project, "slug" | "title" | "subtitle" | "description" | "images">;

export function buildProjects(bases: readonly ProjectBase[], locale: Locale, enrich: (slug: string, loc: "fr" | "en") => ProjectEnrichment | undefined): Project[] {
  const loc = locale === "en" ? "en" : "fr";
  return bases.map((base) => {
    const extra = enrich(base.slug, loc);
    if (!extra) throw new Error(`Enrichissement manquant pour le chantier : ${base.slug}`);
    return { ...base, ...extra };
  });
}
