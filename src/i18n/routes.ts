import type { Locale } from "./config";
import { defaultLocale } from "./config";

/** Identifiants stables pour le routage et hreflang */
export type RouteId =
  | "home"
  | "heatPump"
  | "airConditioning"
  | "climatisationMonoSplit"
  | "heating"
  | "thermostaticHeads"
  | "plumbing"
  | "waterSoftener"
  | "residential"
  | "coOwnership"
  | "commercial"
  | "projects"
  | "projectsPacAirEau"
  | "projectsClim"
  | "projectsGainable"
  | "projectsPetitTertiaire"
  | "projectsDrvTertiaire"
  | "projectsPlancherChauffant"
  | "projectsRemplacementChaudiere"
  | "projectsCopropriete"
  | "projectsBallonThermodynamique"
  | "projectsDepannagePlomberie"
  | "projectsSalleDeBain"
  | "projectsAdoucisseurSel"
  | "projectsAdoucisseurCo2"
  | "projectsDrago"
  | "projectsRadiateursNouvelleGeneration"
  | "projectsTetesThermostatiques"
  | "projectsTetesThermostatiquesConnectees"
  | "grants"
  | "blog"
  | "blogTvaClimReversible"
  | "blogReportageRecrutement"
  | "blogReportageBfmPac"
  | "blogReportageTf1Pac"
  | "blogReportageTf1Clim"
  | "contact"
  | "recruitment"
  | "serviceArea"
  | "panasonicPartner"
  | "legalNotice"
  | "privacy"
  | "cookies"
  | "termsOfSale"
  | "termsOfUse"
  | "notFound";

/** Chemins publics par locale (FR = URLs actuelles, EN = préfixe /en) */
export const routes: Record<RouteId, Record<Locale, string>> = {
  home: { fr: "/", en: "/en" },
  heatPump: { fr: "/pompe-a-chaleur", en: "/en/heat-pump" },
  airConditioning: { fr: "/climatisation", en: "/en/air-conditioning" },
  climatisationMonoSplit: { fr: "/realisations/climatisation/mono-split", en: "/en/projects/air-conditioning/mono-split" },
  heating: { fr: "/chauffage", en: "/en/heating" },
  thermostaticHeads: { fr: "/chauffage/tetes-thermostatiques", en: "/en/heating/thermostatic-radiator-valves" },
  plumbing: { fr: "/plomberie", en: "/en/plumbing" },
  waterSoftener: { fr: "/plomberie/adoucisseur-eau", en: "/en/plumbing/water-softener" },
  residential: { fr: "/particuliers", en: "/en/residential" },
  coOwnership: { fr: "/copropriete", en: "/en/co-ownership" },
  projects: { fr: "/realisations", en: "/en/projects" },
  projectsPacAirEau: { fr: "/realisations/pompe-a-chaleur-air-eau", en: "/en/projects/air-to-water-heat-pump" },
  projectsClim: { fr: "/realisations/climatisation/multi-split", en: "/en/projects/air-conditioning/multi-split" },
  projectsGainable: { fr: "/realisations/climatisation/gainable", en: "/en/projects/air-conditioning/ducted" },
  projectsPetitTertiaire: { fr: "/realisations/petit-tertiaire", en: "/en/projects/small-commercial-air-conditioning" },
  projectsDrvTertiaire: { fr: "/realisations/systeme-drv-tertiaire", en: "/en/projects/commercial-vrf-system" },
  projectsPlancherChauffant: { fr: "/realisations/plancher-chauffant", en: "/en/projects/underfloor-heating" },
  projectsRemplacementChaudiere: { fr: "/realisations/remplacement-chaudiere", en: "/en/projects/boiler-replacement" },
  projectsCopropriete: { fr: "/realisations/pac-collective-copropriete", en: "/en/projects/co-ownership-air-to-water-heat-pump" },
  projectsBallonThermodynamique: { fr: "/realisations/ballon-thermodynamique", en: "/en/projects/thermodynamic-water-heater" },
  projectsDepannagePlomberie: { fr: "/realisations/depannage-plomberie", en: "/en/projects/plumbing-repair" },
  projectsSalleDeBain: { fr: "/realisations/salle-de-bain", en: "/en/projects/bathroom-renovation" },
  projectsAdoucisseurSel: { fr: "/realisations/adoucisseur-au-sel", en: "/en/projects/salt-water-softener" },
  projectsAdoucisseurCo2: { fr: "/realisations/adoucisseur-co2", en: "/en/projects/co2-water-softener" },
  projectsDrago: { fr: "/realisations/systeme-drago", en: "/en/projects/drago-water-treatment" },
  projectsRadiateursNouvelleGeneration: { fr: "/realisations/radiateurs-nouvelle-generation", en: "/en/projects/next-generation-radiators" },
  projectsTetesThermostatiques: { fr: "/realisations/tetes-thermostatiques", en: "/en/projects/thermostatic-radiator-valves" },
  projectsTetesThermostatiquesConnectees: {
    fr: "/realisations/tetes-thermostatiques-connectees",
    en: "/en/projects/smart-thermostatic-radiator-valves",
  },
  commercial: { fr: "/professionnels", en: "/en/commercial" },
  grants: { fr: "/aides-financement", en: "/en/grants-and-financing" },
  blog: { fr: "/blog", en: "/en/blog" },
  blogTvaClimReversible: {
    fr: "/blog/tva-5-5-climatisation-reversible-ce-qui-change",
    en: "/en/blog/reduced-vat-reversible-air-conditioning",
  },
  blogReportageRecrutement: {
    fr: "/blog/reportage-recrutement-plomberie-chauffage-hfe",
    en: "/en/blog/recruitment-report-plumbing-heating-hfe",
  },
  blogReportageBfmPac: {
    fr: "/blog/reportage-bfm-pompes-a-chaleur-hfe",
    en: "/en/blog/bfm-heat-pump-report-hfe",
  },
  blogReportageTf1Pac: {
    fr: "/blog/reportage-tf1-pompe-a-chaleur-climatisation-hfe",
    en: "/en/blog/tf1-heat-pump-air-conditioning-report-hfe",
  },
  blogReportageTf1Clim: {
    fr: "/blog/reportage-tf1-climatisation-panasonic-lille",
    en: "/en/blog/tf1-panasonic-air-conditioning-lille-report",
  },
  contact: { fr: "/contact", en: "/en/contact" },
  recruitment: { fr: "/recrutement", en: "/en/careers" },
  serviceArea: { fr: "/zone-intervention", en: "/en/service-area" },
  panasonicPartner: { fr: "/partenaire-panasonic", en: "/en/panasonic-partner" },
  legalNotice: { fr: "/mentions-legales", en: "/en/legal-notice" },
  privacy: { fr: "/politique-de-confidentialite", en: "/en/privacy-policy" },
  cookies: { fr: "/politique-des-cookies", en: "/en/cookie-policy" },
  termsOfSale: { fr: "/cgv", en: "/en/terms-of-sale" },
  termsOfUse: { fr: "/cgu", en: "/en/terms-of-use" },
  notFound: { fr: "/404", en: "/en/404" },
};

const pathToRoute = new Map<string, RouteId>();

for (const [id, paths] of Object.entries(routes) as [RouteId, Record<Locale, string>][]) {
  for (const p of Object.values(paths)) {
    pathToRoute.set(normalizePath(p), id);
  }
}

export function normalizePath(path: string): string {
  const clean = path.replace(/\/$/, "") || "/";
  if (clean === "/en") return "/en";
  return clean;
}

export function getLocaleFromPath(pathname: string): Locale {
  const path = normalizePath(pathname);
  if (path === "/en" || path.startsWith("/en/")) return "en";
  return defaultLocale;
}

export function getRouteId(pathname: string): RouteId | undefined {
  return pathToRoute.get(normalizePath(pathname));
}

export function pathFor(routeId: RouteId, locale: Locale): string {
  return routes[routeId][locale];
}

/** Bascule la page courante vers l'autre locale (404 → accueil cible) */
export function switchLocalePath(currentPath: string, targetLocale: Locale): string {
  const routeId = getRouteId(currentPath) ?? "home";
  return pathFor(routeId, targetLocale);
}

/** Préfixe un chemin FR interne pour la locale demandée */
export function localizePath(href: string, locale: Locale): string {
  if (!href.startsWith("/") || href.startsWith("//")) return href;
  const normalized = normalizePath(href);
  const routeId = getRouteId(normalized);
  if (routeId) return pathFor(routeId, locale);
  if (locale === "en" && !normalized.startsWith("/en")) {
    return normalized === "/" ? "/en" : `/en${normalized}`;
  }
  return normalized;
}

export function getAlternatePaths(pathname: string): Record<Locale, string> {
  const routeId = getRouteId(pathname) ?? "home";
  return routes[routeId];
}
