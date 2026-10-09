import type { Locale } from "../config";
import type { ProjectImage } from "./projects-shared";

const heroImageFr: ProjectImage = {
  src: "/projet/tetes_thermostatiques/hero.jpg",
  alt: "Tête thermostatique blanche sur radiateur à colonnes noires — réglage pièce par pièce par Hecker & Frères Énergie (HFE) à Lille",
  width: 781,
  height: 1024,
};

const heroImageEn: ProjectImage = {
  src: "/projet/tetes_thermostatiques/hero.jpg",
  alt: "White thermostatic radiator valve on a black column radiator — room-by-room control by Hecker & Frères Énergie (HFE) in Lille",
  width: 781,
  height: 1024,
};

const fr = {
  seo: {
    title: "Installation têtes thermostatiques à Lille | Chauffage — HFE",
    description:
      "Installation et remplacement de têtes thermostatiques à Lille et métropole par Hecker & Frères Énergie (HFE). Confort pièce par pièce, réduction des consommations et pose rapide sans gros travaux.",
    keywords: [
      "têtes thermostatiques Lille",
      "installation tête thermostatique Lille",
      "robinet thermostatique radiateur Lille",
      "économies chauffage Lille",
      "remplacement têtes thermostatiques",
    ],
  },
  breadcrumbs: [
    { name: "Accueil", url: "/" },
    { name: "Chauffage", url: "/chauffage" },
    { name: "Têtes thermostatiques", url: "/chauffage/tetes-thermostatiques" },
    { name: "Réalisations", url: "/realisations/tetes-thermostatiques" },
  ],
  hero: {
    badge: "Nos réalisations",
    title: "Têtes thermostatiques",
    description:
      "Régulez automatiquement la température de chaque pièce, limitez les surchauffes et réduisez votre facture de chauffage. Découvrez nos installations de têtes thermostatiques à Lille et dans la métropole lilloise.",
    ctaQuote: "Demander un devis",
    image: heroImageFr,
  },
  intro: {
    title: "Installation de têtes thermostatiques : maîtrisez votre confort et vos consommations",
    paragraphs: [
      "Les têtes thermostatiques permettent de réguler automatiquement la température de chaque pièce de votre habitation en adaptant le débit d'eau chaude circulant dans vos radiateurs. Elles constituent une solution simple, efficace et économique pour améliorer le confort thermique de votre logement.",
      "Contrairement à un radiateur fonctionnant en permanence à pleine puissance, une tête thermostatique maintient la température souhaitée et évite les surchauffes inutiles. Chaque pièce peut ainsi être réglée selon son usage : chambre, salon, bureau ou salle de bains.",
      "L'installation de têtes thermostatiques est un excellent moyen d'optimiser votre système de chauffage tout en réalisant des économies d'énergie. Elles permettent d'adapter le chauffage à vos besoins quotidiens et d'améliorer le confort de toute la famille.",
    ],
    advantagesTitle: "Les avantages des têtes thermostatiques",
    advantages: [
      "Température stable et confortable dans chaque pièce.",
      "Réduction des consommations de chauffage.",
      "Limitation des surchauffes et du gaspillage énergétique.",
      "Réglage simple et intuitif.",
      "Compatible avec la majorité des radiateurs à eau chaude.",
      "Installation rapide et sans gros travaux.",
    ],
    closing: {
      title: "Un accompagnement HFE pour votre chauffage",
      text: "HFE Hecker & Frères Énergie vous accompagne dans le remplacement et l'installation de vos têtes thermostatiques afin d'améliorer les performances de votre installation de chauffage et réduire durablement votre facture énergétique.",
    },
  },
  cover: heroImageFr,
  cta: {
    title: "Un projet de têtes thermostatiques ?",
    subtitle: "Étude gratuite, devis sous 72h, installation par HFE à Lille et métropole.",
  },
} as const;

const en = {
  seo: {
    title: "Thermostatic radiator valve installation in Lille | Heating — HFE",
    description:
      "Thermostatic radiator valve installation and replacement in Lille and the metropolitan area by Hecker & Frères Énergie (HFE). Room-by-room comfort, lower consumption and quick installation without major work.",
    keywords: [
      "thermostatic radiator valves Lille",
      "TRV installation Lille",
      "radiator thermostat Lille",
      "heating savings Lille",
      "thermostatic valve replacement",
    ],
  },
  breadcrumbs: [
    { name: "Home", url: "/en" },
    { name: "Heating", url: "/en/heating" },
    { name: "Thermostatic radiator valves", url: "/en/heating/thermostatic-radiator-valves" },
    { name: "Projects", url: "/en/projects/thermostatic-radiator-valves" },
  ],
  hero: {
    badge: "Our projects",
    title: "Thermostatic radiator valves",
    description:
      "Automatically regulate each room's temperature, prevent overheating and cut your heating bill. Discover our thermostatic valve installations in Lille and the metropolitan area.",
    ctaQuote: "Request a quote",
    image: heroImageEn,
  },
  intro: {
    title: "Thermostatic valve installation: control your comfort and energy use",
    paragraphs: [
      "Thermostatic radiator valves automatically regulate the temperature in each room of your home by adjusting the flow of hot water through your radiators. They are a simple, effective and economical way to improve thermal comfort.",
      "Unlike a radiator running permanently at full output, a thermostatic valve maintains the desired temperature and avoids unnecessary overheating. Each room can be set according to its use: bedroom, living room, home office or bathroom.",
      "Installing thermostatic valves is an excellent way to optimise your heating system while saving energy. They adapt heating to your daily needs and improve comfort for the whole household.",
    ],
    advantagesTitle: "The advantages of thermostatic radiator valves",
    advantages: [
      "Stable, comfortable temperature in every room.",
      "Lower heating consumption.",
      "Less overheating and energy waste.",
      "Simple, intuitive adjustment.",
      "Compatible with most hot-water radiators.",
      "Quick installation without major building work.",
    ],
    closing: {
      title: "HFE support for your heating system",
      text: "HFE Hecker & Frères Énergie supports you with replacing and installing thermostatic radiator valves to improve your heating system's performance and sustainably reduce your energy bill.",
    },
  },
  cover: heroImageEn,
  cta: {
    title: "Planning a thermostatic valve project?",
    subtitle: "Free survey, quote within 72 hours, installation by HFE in Lille and the metropolitan area.",
  },
} as const;

export function getProjectsTetesThermostatiquesContent(locale: Locale) {
  return locale === "en" ? en : fr;
}

export type ProjectsTetesThermostatiquesContent = ReturnType<typeof getProjectsTetesThermostatiquesContent>;
