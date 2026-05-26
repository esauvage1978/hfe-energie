import type { Locale } from "../config";

const fr = {
  energy: {
    gaz: "Chaudière gaz",
    fioul: "Chaudière fioul",
    electrique: "Chauffage électrique",
  },
  title: "Estimez vos économies avec une pompe à chaleur",
  intro:
    "Simulation indicative basée sur les tarifs énergie en vigueur en 2026 et un SCOP moyen de 3,8. Le devis personnalisé reste la seule référence fiable.",
  currentSystem: "Système de chauffage actuel",
  heatedSurface: "Surface chauffée",
  annualBill: "Facture annuelle actuelle",
  surfaceMin: "40 m²",
  surfaceMax: "400 m²",
  billMin: "500 €",
  billMax: "6 000 €",
  savingsLabel: "Économies estimées par an",
  savingsPercent: (percent: number) => `soit ${percent} % d'économies sur votre facture`,
  today: "Aujourd'hui",
  withPac: "Avec une PAC",
  perYear: "/ an",
  cta: "Obtenir mon devis gratuit",
  disclaimer: "Simulation indicative · Ne tient pas compte des aides MaPrimeRénov' & CEE.",
  localeTag: "fr-FR",
} as const;

const en = {
  energy: {
    gaz: "Gas boiler",
    fioul: "Oil boiler",
    electrique: "Electric heating",
  },
  title: "Estimate your savings with a heat pump",
  intro:
    "Indicative simulation based on 2026 energy prices and an average SCOP of 3.8. A personalised quote remains the only reliable reference.",
  currentSystem: "Current heating system",
  heatedSurface: "Heated floor area",
  annualBill: "Current annual bill",
  surfaceMin: "40 m²",
  surfaceMax: "400 m²",
  billMin: "€500",
  billMax: "€6,000",
  savingsLabel: "Estimated annual savings",
  savingsPercent: (percent: number) => `i.e. ${percent}% off your heating bill`,
  today: "Today",
  withPac: "With a heat pump",
  perYear: "/ year",
  cta: "Get my free quote",
  disclaimer: "Indicative simulation · Does not include MaPrimeRénov' or CEE grants.",
  localeTag: "en-GB",
} as const;

export function getCalculatorStrings(locale: Locale) {
  return locale === "en" ? en : fr;
}

export type CalculatorStrings = ReturnType<typeof getCalculatorStrings>;
