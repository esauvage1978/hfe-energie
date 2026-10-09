import type { Locale } from "../config";
import type { ProjectImage } from "./projects-shared";

const heroImageFr: ProjectImage = {
  src: "/projet/tetes_thermostatiques/hero-connectee.jpg",
  alt: "Tête thermostatique connectée Netatmo sur radiateur — affichage digital et pilotage à distance par Hecker & Frères Énergie (HFE) à Lille",
  width: 600,
  height: 600,
};

const heroImageEn: ProjectImage = {
  src: "/projet/tetes_thermostatiques/hero-connectee.jpg",
  alt: "Netatmo smart thermostatic radiator valve — digital display and remote control by Hecker & Frères Énergie (HFE) in Lille",
  width: 600,
  height: 600,
};

const fr = {
  seo: {
    title: "Installation têtes thermostatiques connectées à Lille | Chauffage — HFE",
    description:
      "Installation de têtes thermostatiques connectées à Lille et métropole par Hecker & Frères Énergie (HFE). Pilotage smartphone, programmation horaire et économies de chauffage.",
    keywords: [
      "têtes thermostatiques connectées Lille",
      "tête connectée radiateur Lille",
      "robinet thermostatique connecté Lille",
      "domotique chauffage Lille",
      "Netatmo radiateur Lille",
    ],
  },
  breadcrumbs: [
    { name: "Accueil", url: "/" },
    { name: "Chauffage", url: "/chauffage" },
    { name: "Têtes thermostatiques", url: "/chauffage/tetes-thermostatiques" },
    { name: "Têtes connectées", url: "/realisations/tetes-thermostatiques-connectees" },
  ],
  hero: {
    badge: "Nos réalisations",
    title: "Têtes thermostatiques connectées",
    description:
      "Pilotez votre chauffage à distance, programmez vos pièces et réduisez vos consommations grâce aux têtes connectées. Découvrez nos installations à Lille et dans la métropole lilloise.",
    ctaQuote: "Demander un devis",
    image: heroImageFr,
  },
  intro: {
    title: "Têtes connectées : chauffage intelligent et économies durables",
    paragraphs: [
      "Les têtes thermostatiques connectées conservent tous les avantages des modèles classiques — régulation pièce par pièce et réduction des surchauffes — tout en ajoutant le pilotage à distance depuis votre smartphone.",
      "Programmation horaire, modes confort ou absence, alertes en cas de fenêtre ouverte : vous gardez la main sur votre consommation, même à distance. C'est particulièrement utile en maison multi-pièces ou pour anticiper un retour de vacances.",
      "Hecker & Frères Énergie (HFE) dimensionne et installe des solutions fiables (Danfoss, Honeywell, Netatmo, Eqiva, etc.) selon votre installation, le nombre de radiateurs et votre niveau de connectivité souhaité.",
    ],
    advantagesTitle: "Les avantages des têtes connectées",
    advantages: [
      "Pilotage via application (iOS / Android) depuis n'importe où.",
      "Programmation horaire et modes confort / éco / absence.",
      "Alertes en cas de fenêtre ouverte ou baisse de température inhabituelle.",
      "Historique et suivi pour optimiser votre chauffage dans le temps.",
      "Intégration possible avec assistants vocaux ou box domotique (selon marque).",
      "Pose sur radiateurs existants, sans gros travaux.",
    ],
    closing: {
      title: "Un accompagnement HFE pour votre chauffage connecté",
      text: "HFE Hecker & Frères Énergie vous accompagne dans le choix, l'installation et la mise en service de vos têtes connectées pour un chauffage plus confortable, plus maîtrisé et plus économique.",
    },
  },
  cover: heroImageFr,
  cta: {
    title: "Un projet de têtes connectées ?",
    subtitle: "Étude gratuite, devis sous 72h, installation par HFE à Lille et métropole.",
  },
} as const;

const en = {
  seo: {
    title: "Smart thermostatic radiator valve installation in Lille | Heating — HFE",
    description:
      "Smart connected radiator valve installation in Lille and the metropolitan area by Hecker & Frères Énergie (HFE). Smartphone control, schedules and heating savings.",
    keywords: [
      "smart TRV Lille",
      "connected radiator valve Lille",
      "smart heating Lille",
      "Netatmo radiator valve Lille",
      "remote heating control Lille",
    ],
  },
  breadcrumbs: [
    { name: "Home", url: "/en" },
    { name: "Heating", url: "/en/heating" },
    { name: "Thermostatic radiator valves", url: "/en/heating/thermostatic-radiator-valves" },
    { name: "Smart TRVs", url: "/en/projects/smart-thermostatic-radiator-valves" },
  ],
  hero: {
    badge: "Our projects",
    title: "Smart connected radiator valves",
    description:
      "Control your heating remotely, schedule each room and cut consumption with smart valves. Discover our installations in Lille and the metropolitan area.",
    ctaQuote: "Request a quote",
    image: heroImageEn,
  },
  intro: {
    title: "Smart valves: intelligent heating and lasting savings",
    paragraphs: [
      "Smart thermostatic radiator valves keep all the benefits of standard models — room-by-room regulation and less overheating — while adding remote control from your smartphone.",
      "Time schedules, comfort or away modes, open-window alerts: you stay in control of consumption, even when away from home. Especially useful in multi-room homes or to pre-heat before returning from holiday.",
      "Hecker & Frères Énergie (HFE) specifies and installs reliable solutions (Danfoss, Honeywell, Netatmo, Eqiva, etc.) according to your system, the number of radiators and your desired level of connectivity.",
    ],
    advantagesTitle: "The advantages of smart connected valves",
    advantages: [
      "Control via app (iOS / Android) from anywhere.",
      "Time schedules and comfort / eco / away modes.",
      "Alerts for open windows or unusual temperature drops.",
      "History and tracking to optimise heating over time.",
      "Possible integration with voice assistants or smart home hubs (depending on brand).",
      "Fits existing radiators with minimal disruption.",
    ],
    closing: {
      title: "HFE support for your connected heating",
      text: "HFE Hecker & Frères Énergie supports you with selecting, installing and commissioning smart valves for more comfortable, controlled and economical heating.",
    },
  },
  cover: heroImageEn,
  cta: {
    title: "Planning a smart valve project?",
    subtitle: "Free survey, quote within 72 hours, installation by HFE in Lille and the metropolitan area.",
  },
} as const;

export function getProjectsTetesThermostatiquesConnecteesContent(locale: Locale) {
  return locale === "en" ? en : fr;
}

export type ProjectsTetesThermostatiquesConnecteesContent = ReturnType<
  typeof getProjectsTetesThermostatiquesConnecteesContent
>;
