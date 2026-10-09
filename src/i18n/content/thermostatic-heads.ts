import type { Locale } from "../config";
import type { RouteId } from "../routes";

const fr = {
  seo: {
    title: "Têtes thermostatiques et connectées à Lille – HFE",
    description:
      "Installation de têtes thermostatiques et têtes connectées à Lille et métropole par Hecker & Frères Énergie (HFE). Régulation pièce par pièce, pilotage smartphone et économies de chauffage.",
    keywords: [
      "têtes thermostatiques Lille",
      "têtes thermostatiques connectées Lille",
      "robinet thermostatique radiateur Lille",
      "tête connectée chauffage Lille",
      "économies chauffage Lille",
    ],
  },
  breadcrumbs: [
    { name: "Accueil", url: "/" },
    { name: "Chauffage", url: "/chauffage" },
    { name: "Têtes thermostatiques", url: "/chauffage/tetes-thermostatiques" },
  ],
  structuredData: {
    serviceName: "Installation de têtes thermostatiques à Lille",
    serviceDescription:
      "Têtes thermostatiques classiques et têtes connectées pour radiateurs à eau chaude : régulation pièce par pièce et pilotage à distance à Lille et métropole.",
    slug: "tetes-thermostatiques",
  },
  hero: {
    badge: "Régulation & économies",
    title: "Têtes thermostatiques et têtes connectées",
    description:
      "Sur un circuit de radiateurs existant, le remplacement des anciennes têtes par des modèles thermostatiques — ou connectés — est un investissement rapide, peu invasif et très efficace pour mieux maîtriser votre consommation.",
    ctaQuote: "Demander une étude gratuite",
    image: {
      src: "/projet/tetes_thermostatiques/hero.jpg",
      alt: "Tête thermostatique blanche sur radiateur à colonnes noires — installation chauffage par Hecker & Frères Énergie (HFE) à Lille",
      width: 781,
      height: 1024,
    },
  },
  types: {
    standard: {
      title: "Têtes thermostatiques",
      description:
        "Elles modulent automatiquement le débit d'eau chaude en fonction de la température ambiante de chaque pièce. Fini les pièces surchauffées ou sous-chauffées : chaque radiateur travaille au bon niveau.",
      benefits: [
        "Pose sur radiateurs existants, sans gros travaux",
        "Régulation locale pièce par pièce",
        "Jusqu'à 25 % d'économies sur la facture de chauffage",
        "Compatible chaudière gaz, fioul (avant remplacement) ou PAC air-eau",
      ],
      projectsLabel: "Voir nos réalisations têtes thermostatiques",
      projectsRoute: "projectsTetesThermostatiques" as const satisfies RouteId,
    },
    connected: {
      title: "Têtes thermostatiques connectées",
      description:
        "Les têtes connectées ajoutent le pilotage à distance et l'automatisation : programmation horaire, modes absence, détection d'aération anormale et suivi de consommation depuis votre smartphone.",
      benefits: [
        "Pilotage via application (iOS / Android) depuis n'importe où",
        "Programmation horaire et modes confort / éco / absence",
        "Alertes en cas de fenêtre ouverte ou baisse de température inhabituelle",
        "Historique et suivi pour optimiser votre chauffage dans le temps",
        "Intégration possible avec assistants vocaux ou box domotique (selon marque)",
        "Idéal en maison multi-pièces ou pour anticiper un retour de vacances",
      ],
      brandsNote:
        "Nous dimensionnons et installons des solutions fiables (Danfoss, Honeywell, Netatmo, Eqiva, etc.) selon votre installation, le nombre de radiateurs et votre niveau de connectivité souhaité.",
      projectsLabel: "Voir nos réalisations têtes connectées",
      projectsRoute: "projectsTetesThermostatiquesConnectees" as const satisfies RouteId,
    },
  },
  cta: {
    title: "Un projet de têtes thermostatiques ?",
    subtitle: "Étude gratuite, devis sous 72h, installation par HFE à Lille et métropole.",
  },
} as const;

const en = {
  seo: {
    title: "Thermostatic & smart radiator valves in Lille – HFE",
    description:
      "Thermostatic and smart connected radiator valve installation in Lille and the metropolitan area by Hecker & Frères Énergie (HFE). Room-by-room control, smartphone management and heating savings.",
    keywords: [
      "thermostatic radiator valves Lille",
      "smart TRV Lille",
      "connected radiator valve Lille",
      "heating savings Lille",
      "radiator thermostat Lille",
    ],
  },
  breadcrumbs: [
    { name: "Home", url: "/en" },
    { name: "Heating", url: "/en/heating" },
    { name: "Thermostatic radiator valves", url: "/en/heating/thermostatic-radiator-valves" },
  ],
  structuredData: {
    serviceName: "Thermostatic radiator valve installation in Lille",
    serviceDescription:
      "Standard thermostatic and smart connected radiator valves for hot-water radiators: room-by-room regulation and remote control in Lille and the metropolitan area.",
    slug: "thermostatic-radiator-valves",
  },
  hero: {
    badge: "Control & savings",
    title: "Thermostatic and smart radiator valves",
    description:
      "On an existing radiator circuit, upgrading old valves to thermostatic — or smart — models is a quick, low-disruption investment that helps you control consumption more effectively.",
    ctaQuote: "Request a free survey",
    image: {
      src: "/projet/tetes_thermostatiques/hero.jpg",
      alt: "White thermostatic radiator valve on a black column radiator — heating installation by Hecker & Frères Énergie (HFE) in Lille",
      width: 781,
      height: 1024,
    },
  },
  types: {
    standard: {
      title: "Thermostatic radiator valves (TRV)",
      description:
        "They automatically modulate hot water flow based on each room's temperature. No more overheated or underheated rooms: every radiator works at the right level.",
      benefits: [
        "Fits existing radiators with minimal disruption",
        "Local room-by-room regulation",
        "Up to 25% savings on your heating bill",
        "Compatible with gas or oil boilers (before replacement) and air-to-water heat pumps",
      ],
      projectsLabel: "See our thermostatic valve projects",
      projectsRoute: "projectsTetesThermostatiques" as const satisfies RouteId,
    },
    connected: {
      title: "Smart connected TRVs",
      description:
        "Smart valves add remote control and automation: schedules, away modes, abnormal ventilation alerts and consumption monitoring from your smartphone.",
      benefits: [
        "Control via app (iOS / Android) from anywhere",
        "Time schedules and comfort / eco / away modes",
        "Alerts for open windows or unusual temperature drops",
        "History and tracking to optimise heating over time",
        "Possible integration with voice assistants or smart home hubs (depending on brand)",
        "Ideal for multi-room homes or pre-heating before you return from holiday",
      ],
      brandsNote:
        "We specify and install reliable solutions (Danfoss, Honeywell, Netatmo, Eqiva, etc.) according to your system, the number of radiators and your desired level of connectivity.",
      projectsLabel: "See our smart valve projects",
      projectsRoute: "projectsTetesThermostatiquesConnectees" as const satisfies RouteId,
    },
  },
  cta: {
    title: "Planning a thermostatic valve project?",
    subtitle: "Free survey, quote within 72 hours, installation by HFE in Lille and the metropolitan area.",
  },
} as const;

export function getThermostaticHeadsContent(locale: Locale) {
  return locale === "en" ? en : fr;
}

export type ThermostaticHeadsContent = ReturnType<typeof getThermostaticHeadsContent>;
