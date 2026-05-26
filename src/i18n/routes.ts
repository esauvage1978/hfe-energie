import type { Locale } from "./config";
import { defaultLocale } from "./config";

/** Identifiants stables pour le routage et hreflang */
export type RouteId =
  | "home"
  | "heatPump"
  | "airConditioning"
  | "heating"
  | "plumbing"
  | "residential"
  | "commercial"
  | "grants"
  | "contact"
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
  heating: { fr: "/chauffage", en: "/en/heating" },
  plumbing: { fr: "/plomberie", en: "/en/plumbing" },
  residential: { fr: "/particuliers", en: "/en/residential" },
  commercial: { fr: "/professionnels", en: "/en/commercial" },
  grants: { fr: "/aides-financement", en: "/en/grants-and-financing" },
  contact: { fr: "/contact", en: "/en/contact" },
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
