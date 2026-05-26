import type { Locale } from "./config";
import { getUi } from "./ui";
import { getAlternatePaths, getLocaleFromPath, localizePath, pathFor, switchLocalePath } from "./routes";

export type { Locale } from "./config";
export { locales, defaultLocale, localeLabels, htmlLang, ogLocale, isLocale } from "./config";
export {
  routes,
  getRouteId,
  getLocaleFromPath,
  pathFor,
  switchLocalePath,
  localizePath,
  getAlternatePaths,
  normalizePath,
} from "./routes";
export type { RouteId } from "./routes";
export { getUi, getFormStrings, getCalculatorStrings } from "./ui";
export { pageI18n } from "./utils";
export * from "./content";

export function useI18n(locale: Locale) {
  const ui = getUi(locale);
  return {
    locale,
    ui,
    path: (routeId: Parameters<typeof pathFor>[0]) => pathFor(routeId, locale),
    localize: (href: string) => localizePath(href, locale),
    alternates: (pathname: string) => getAlternatePaths(pathname),
  };
}
