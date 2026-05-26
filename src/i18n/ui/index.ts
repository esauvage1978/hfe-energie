import type { Locale } from "../config";
import { getLegalLinksEn, getNavigationEn, uiEn } from "./en";
import { getLegalLinksFr, getNavigationFr, uiFr } from "./fr";

export { getFormStrings, type FormStrings } from "./form";
export { getCalculatorStrings, type CalculatorStrings } from "./calculator";

export function getUi(locale: Locale) {
  if (locale === "en") {
    return {
      strings: uiEn,
      navigation: getNavigationEn(),
      legalLinks: getLegalLinksEn(),
      homePath: "/en",
    };
  }
  return {
    strings: uiFr,
    navigation: getNavigationFr(),
    legalLinks: getLegalLinksFr(),
    homePath: "/",
  };
}

export type UiBundle = ReturnType<typeof getUi>;
