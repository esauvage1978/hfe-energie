import type { RouteId } from "./routes";

export type PageColorScheme = "accent" | "primary" | "heat";

const projectColorSchemes: Partial<Record<RouteId, PageColorScheme>> = {
  projectsPacAirEau: "accent",
  projectsCopropriete: "accent",
  projectsBallonThermodynamique: "primary",
  projectsPlancherChauffant: "accent",
  projectsRemplacementChaudiere: "accent",
  projectsRadiateursNouvelleGeneration: "accent",
  projectsTetesThermostatiques: "accent",
  projectsTetesThermostatiquesConnectees: "accent",
  projectsDepannagePlomberie: "primary",
  projectsSalleDeBain: "primary",
  projectsAdoucisseurSel: "primary",
  projectsAdoucisseurCo2: "primary",
  projectsDrago: "primary",
};

export function getProjectColorScheme(routeId: RouteId): PageColorScheme {
  return projectColorSchemes[routeId] ?? "accent";
}

export interface PageThemeClasses {
  pageTheme: string;
  heroGradient: string;
  badge: string;
  btnPrimary: string;
  btnOutline: string;
  advantagesBox: string;
  advantagesTitle: string;
  checkIcon: string;
  bullet: string;
  indexCardBorder: string;
  indexCardTopAccent: string;
  indexCardHover: string;
  indexTitleHover: string;
  indexLink: string;
  indexCoverBadge: string;
  indexCoverBadgeIcon: string;
  projectIndexBadge: string;
  projectIndexLabel: string;
  projectSubtitle: string;
  projectStatsHeading: string;
  projectStatsIconBox: string;
  projectResultsHeading: string;
  projectResultCheck: string;
  projectAboutHeading: string;
  projectWarrantyBox: string;
  projectWarrantyText: string;
  installCtaGradient: string;
  installCtaGlow: string;
  installCtaSubtitle: string;
  installCtaPhoneHover: string;
  focusRing: string;
  beforeAfterHeading: string;
  beforeAfterBadge: string;
}

const themes: Record<PageColorScheme, PageThemeClasses> = {
  accent: {
    pageTheme: "",
    heroGradient: "from-accent-50 via-white to-accent-50/20",
    badge: "bg-accent-100 text-accent-800",
    btnPrimary: "btn btn-accent",
    btnOutline: "btn btn-outline-accent",
    advantagesBox: "from-accent-50 via-accent-50/60 to-white border-accent-100",
    advantagesTitle: "text-accent-800",
    checkIcon: "text-accent-600",
    bullet: "bg-accent-500",
    indexCardBorder: "border-accent-100",
    indexCardTopAccent: "border-t-4 border-t-accent-500",
    indexCardHover: "hover:border-accent-300",
    indexTitleHover: "group-hover:text-accent-700",
    indexLink: "text-accent-700",
    indexCoverBadge: "bg-accent-100 text-accent-800 border border-accent-200",
    indexCoverBadgeIcon: "text-accent-600",
    projectIndexBadge: "bg-accent-600",
    projectIndexLabel: "text-accent-700",
    projectSubtitle: "text-accent-700",
    projectStatsHeading: "text-accent-800 border-accent-200",
    projectStatsIconBox: "bg-accent-50 text-accent-600",
    projectResultsHeading: "text-accent-800",
    projectResultCheck: "bg-accent-100 text-accent-600",
    projectAboutHeading: "text-accent-800",
    projectWarrantyBox: "border-accent-200 bg-accent-50",
    projectWarrantyText: "text-accent-800",
    installCtaGradient: "from-accent-800 via-accent-900 to-accent-950",
    installCtaGlow: "bg-accent-500/20",
    installCtaSubtitle: "text-accent-100",
    installCtaPhoneHover: "hover:text-accent-100",
    focusRing: "focus-visible:ring-accent-500",
    beforeAfterHeading: "text-accent-800",
    beforeAfterBadge: "bg-accent-600",
  },
  heat: {
    pageTheme: "",
    heroGradient: "from-accent-50 via-white to-accent-50/20",
    badge: "bg-accent-100 text-accent-800",
    btnPrimary: "btn btn-accent",
    btnOutline: "btn btn-outline-accent",
    advantagesBox: "from-accent-50 via-accent-50/60 to-white border-accent-100",
    advantagesTitle: "text-accent-800",
    checkIcon: "text-accent-600",
    bullet: "bg-accent-500",
    indexCardBorder: "border-accent-100",
    indexCardTopAccent: "border-t-4 border-t-accent-500",
    indexCardHover: "hover:border-accent-300",
    indexTitleHover: "group-hover:text-accent-700",
    indexLink: "text-accent-700",
    indexCoverBadge: "bg-accent-100 text-accent-800 border border-accent-200",
    indexCoverBadgeIcon: "text-accent-600",
    projectIndexBadge: "bg-accent-600",
    projectIndexLabel: "text-accent-700",
    projectSubtitle: "text-accent-700",
    projectStatsHeading: "text-accent-800 border-accent-200",
    projectStatsIconBox: "bg-accent-50 text-accent-600",
    projectResultsHeading: "text-accent-800",
    projectResultCheck: "bg-accent-100 text-accent-600",
    projectAboutHeading: "text-accent-800",
    projectWarrantyBox: "border-accent-200 bg-accent-50",
    projectWarrantyText: "text-accent-800",
    installCtaGradient: "from-accent-800 via-accent-900 to-accent-950",
    installCtaGlow: "bg-accent-500/20",
    installCtaSubtitle: "text-accent-100",
    installCtaPhoneHover: "hover:text-accent-100",
    focusRing: "focus-visible:ring-accent-500",
    beforeAfterHeading: "text-accent-800",
    beforeAfterBadge: "bg-accent-600",
  },
  primary: {
    pageTheme: "page-theme-primary",
    heroGradient: "from-primary-50 via-white to-primary-50/40",
    badge: "bg-primary-100 text-primary-800 border border-primary-200",
    btnPrimary: "btn btn-primary",
    btnOutline: "btn btn-outline",
    advantagesBox: "from-primary-50 via-primary-50/60 to-white border-primary-100",
    advantagesTitle: "text-primary-800",
    checkIcon: "text-primary-600",
    bullet: "bg-primary-500",
    indexCardBorder: "border-primary-100",
    indexCardTopAccent: "border-t-4 border-t-primary-500",
    indexCardHover: "hover:border-primary-300",
    indexTitleHover: "group-hover:text-primary-700",
    indexLink: "text-primary-700",
    indexCoverBadge: "bg-primary-100 text-primary-800 border border-primary-200",
    indexCoverBadgeIcon: "text-primary-600",
    projectIndexBadge: "bg-primary-600",
    projectIndexLabel: "text-primary-700",
    projectSubtitle: "text-primary-700",
    projectStatsHeading: "text-primary-800 border-primary-200",
    projectStatsIconBox: "bg-primary-50 text-primary-600",
    projectResultsHeading: "text-primary-800",
    projectResultCheck: "bg-primary-100 text-primary-600",
    projectAboutHeading: "text-primary-800",
    projectWarrantyBox: "border-primary-200 bg-primary-50",
    projectWarrantyText: "text-primary-800",
    installCtaGradient: "from-primary-800 via-primary-900 to-primary-950",
    installCtaGlow: "bg-primary-500/20",
    installCtaSubtitle: "text-primary-100",
    installCtaPhoneHover: "hover:text-primary-100",
    focusRing: "focus-visible:ring-primary-500",
    beforeAfterHeading: "text-primary-800",
    beforeAfterBadge: "bg-primary-600",
  },
};

export function getPageThemeClasses(scheme: PageColorScheme): PageThemeClasses {
  return themes[scheme];
}
