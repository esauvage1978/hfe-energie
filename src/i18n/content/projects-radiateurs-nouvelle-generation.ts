import type { Locale } from "../config";
import type { ProjectImage } from "./projects-shared";

const heroImageFr: ProjectImage = {
  src: "/projet/radiateurs_nouvelle_generation/hero.jpg",
  alt: "Radiateur nouvelle génération — technologie basse température et pilotage connecté",
  width: 1024,
  height: 959,
};

const heroImageEn: ProjectImage = {
  src: "/projet/radiateurs_nouvelle_generation/hero.jpg",
  alt: "Next-generation radiator — low-temperature technology and smart control",
  width: 1024,
  height: 959,
};

const fr = {
  seo: {
    title: "Radiateurs nouvelle génération à Lille | Installation — HFE",
    description:
      "Installation de radiateurs nouvelle génération à Lille et métropole par Hecker & Frères Énergie (HFE) : basse température, inertie, sèche-serviettes et pilotage connecté.",
    keywords: [
      "radiateurs nouvelle génération Lille",
      "radiateur basse température Lille",
      "sèche-serviettes Lille",
      "radiateur inertie Lille",
      "installation radiateurs Lille",
    ],
  },
  breadcrumbs: [
    { name: "Accueil", url: "/" },
    { name: "Chauffage", url: "/chauffage" },
    { name: "Radiateurs nouvelle génération", url: "/realisations/radiateurs-nouvelle-generation" },
  ],
  hero: {
    badge: "Nos réalisations",
    title: "Radiateurs nouvelle génération",
    description:
      "Chaleur douce, confort homogène et consommation optimisée : découvrez nos installations de radiateurs basse température, à inertie et sèche-serviettes à Lille et dans la métropole lilloise.",
    ctaQuote: "Demander un devis",
    image: heroImageFr,
  },
  intro: {
    title: "Installation de radiateurs nouvelle génération : confort, performance et économies d'énergie",
    paragraphs: [
      "Les radiateurs nouvelle génération offrent une diffusion de chaleur plus homogène, un meilleur confort thermique et une consommation énergétique optimisée. Que ce soit pour le remplacement d'anciens radiateurs, l'installation de radiateurs basse température, de sèche-serviettes ou de radiateurs à inertie pilotables, nous vous accompagnons dans le choix de la solution la mieux adaptée à votre logement.",
      "Les radiateurs basse température fonctionnent idéalement avec les pompes à chaleur et les chaudières à haute performance, permettant une montée en température douce et régulière tout en réduisant les consommations énergétiques. Les radiateurs à inertie accumulent la chaleur et la restituent progressivement pour un confort durable, tandis que les sèche-serviettes assurent à la fois le chauffage de la salle de bains et le séchage des serviettes.",
      "Les modèles pilotables et connectés permettent également de programmer précisément les températures selon vos habitudes de vie afin d'optimiser votre confort et vos dépenses énergétiques.",
      "Investir dans des radiateurs nouvelle génération, c'est améliorer le confort de votre habitation tout en bénéficiant d'équipements performants, économiques et adaptés aux exigences énergétiques actuelles.",
      "HFE Hecker Frères Énergie assure le conseil, la fourniture et l'installation de vos radiateurs et sèche-serviettes afin de vous garantir une solution fiable, confortable et durable pour votre chauffage au quotidien.",
    ],
    advantagesTitle: "Les avantages des radiateurs nouvelle génération",
    advantages: [
      "Chaleur douce et homogène dans toute la pièce.",
      "Réduction des consommations de chauffage.",
      "Compatible avec les pompes à chaleur et systèmes basse température.",
      "Radiateurs à inertie pour un confort durable.",
      "Sèche-serviettes esthétiques et performants.",
      "Pilotage et programmation selon vos besoins.",
      "Design moderne et intégration harmonieuse dans votre intérieur.",
    ],
  },
  cover: heroImageFr,
  cta: {
    title: "Un projet de radiateurs nouvelle génération ?",
    subtitle: "Étude gratuite, devis sous 72h, installation par HFE à Lille et métropole.",
  },
} as const;

const en = {
  seo: {
    title: "Next-generation radiators in Lille | Installation — HFE",
    description:
      "Next-generation radiator installation in Lille and the metropolitan area by Hecker & Frères Énergie (HFE): low-temperature, inertia, towel rails and smart control.",
    keywords: [
      "next-generation radiators Lille",
      "low-temperature radiator Lille",
      "towel rail Lille",
      "inertia radiator Lille",
      "radiator installation Lille",
    ],
  },
  breadcrumbs: [
    { name: "Home", url: "/en" },
    { name: "Heating", url: "/en/heating" },
    { name: "Next-generation radiators", url: "/en/projects/next-generation-radiators" },
  ],
  hero: {
    badge: "Our projects",
    title: "Next-generation radiators",
    description:
      "Gentle, even warmth and optimised consumption: discover our low-temperature, inertia and towel rail installations in Lille and the metropolitan area.",
    ctaQuote: "Request a quote",
    image: heroImageEn,
  },
  intro: {
    title: "Next-generation radiator installation: comfort, performance and energy savings",
    paragraphs: [
      "Next-generation radiators deliver more even heat distribution, better thermal comfort and optimised energy consumption. Whether replacing old radiators or installing low-temperature units, towel rails or smart inertia radiators, we help you choose the best solution for your home.",
      "Low-temperature radiators work ideally with heat pumps and high-efficiency boilers, providing gentle, steady warmth while reducing energy consumption. Inertia radiators store heat and release it gradually for lasting comfort, while towel rails heat the bathroom and dry towels at the same time.",
      "Smart, connected models also let you programme temperatures precisely according to your daily routine to optimise comfort and energy costs.",
      "Investing in next-generation radiators improves home comfort while providing efficient, economical equipment suited to today's energy requirements.",
      "HFE Hecker Frères Énergie provides advice, supply and installation of your radiators and towel rails to ensure a reliable, comfortable and durable heating solution for everyday use.",
    ],
    advantagesTitle: "The advantages of next-generation radiators",
    advantages: [
      "Gentle, even warmth throughout the room.",
      "Reduced heating consumption.",
      "Compatible with heat pumps and low-temperature systems.",
      "Inertia radiators for lasting comfort.",
      "Attractive, high-performance towel rails.",
      "Control and programming to suit your needs.",
      "Modern design that blends harmoniously into your interior.",
    ],
  },
  cover: heroImageEn,
  cta: {
    title: "Planning a next-generation radiator project?",
    subtitle: "Free survey, quote within 72 hours, installation by HFE in Lille and the metropolitan area.",
  },
} as const;

export function getProjectsRadiateursNouvelleGenerationContent(locale: Locale) {
  return locale === "en" ? en : fr;
}

export type ProjectsRadiateursNouvelleGenerationContent = ReturnType<typeof getProjectsRadiateursNouvelleGenerationContent>;
