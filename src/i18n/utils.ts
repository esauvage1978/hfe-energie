import type { Locale } from "./config";
import { pathFor, type RouteId } from "./routes";
import { getUi } from "./ui";

/** Helper pour les pages Astro : chemins localisés + libellés UI */
export function pageI18n(locale: Locale) {
  const ui = getUi(locale);
  return {
    locale,
    ui,
    path: (routeId: RouteId) => pathFor(routeId, locale),
    home: ui.homePath,
    breadcrumbHome: { name: ui.strings.legal.home, url: ui.homePath },
  };
}
