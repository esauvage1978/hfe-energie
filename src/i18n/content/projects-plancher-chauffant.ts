import type { Locale } from "../config";
import type { ProjectBase, ProjectImage } from "./projects-shared";
import { buildProjects } from "./projects-shared";
import { getProjectEnrichment } from "./projects-enrichment";

const chantier1ImagesFr: ProjectImage[] = [
  { src: "/projet/plancher_chauffant/projet1/3.jpg", alt: "Plancher chauffant basse température — boucles posées avant coulage de la chape", width: 1206, height: 1603 },
  { src: "/projet/plancher_chauffant/projet1/5.jpg", alt: "Vue d'ensemble des boucles du plancher chauffant dans la pièce de vie", width: 1206, height: 1599 },
  { src: "/projet/plancher_chauffant/projet1/1.jpg", alt: "Collecteur du plancher chauffant — départs et retours des boucles raccordés", width: 904, height: 1421 },
  { src: "/projet/plancher_chauffant/projet1/2.jpg", alt: "Collecteur intégré dans la gaine technique pour une finition discrète", width: 1206, height: 1521 },
  { src: "/projet/plancher_chauffant/projet1/4.jpg", alt: "Local technique — module intérieur de la pompe à chaleur air-eau et ballon tampon", width: 1206, height: 1597 },
];

const chantier1ImagesEn: ProjectImage[] = [
  { src: "/projet/plancher_chauffant/projet1/3.jpg", alt: "Low-temperature underfloor heating — loops laid before the screed is poured", width: 1206, height: 1603 },
  { src: "/projet/plancher_chauffant/projet1/5.jpg", alt: "Overview of the underfloor heating loops in the living area", width: 1206, height: 1599 },
  { src: "/projet/plancher_chauffant/projet1/1.jpg", alt: "Underfloor heating manifold — loop flow and return connections", width: 904, height: 1421 },
  { src: "/projet/plancher_chauffant/projet1/2.jpg", alt: "Manifold integrated into the service duct for a discreet finish", width: 1206, height: 1521 },
  { src: "/projet/plancher_chauffant/projet1/4.jpg", alt: "Plant room — air-to-water heat pump indoor unit and buffer tank", width: 1206, height: 1597 },
];

const fr = {
  seo: {
    title: "Nos réalisations plancher chauffant à Lille — HFE",
    description:
      "Découvrez un chantier de plancher chauffant basse température réalisé par Hecker & Frères Énergie (HFE) à Lille et métropole, couplé à une pompe à chaleur air-eau.",
    keywords: [
      "réalisation plancher chauffant Lille",
      "chantier plancher chauffant basse température",
      "plancher chauffant pompe à chaleur",
      "installation plancher chauffant hydraulique",
      "chauffage au sol Lille",
    ],
  },
  breadcrumbs: [
    { name: "Accueil", url: "/" },
    { name: "Chauffage", url: "/chauffage" },
    { name: "Réalisations plancher chauffant", url: "/realisations/plancher-chauffant" },
  ],
  hero: {
    badge: "Nos réalisations",
    title: "Plancher chauffant : nos chantiers",
    description:
      "Chaque installation est différente. Découvrez un chantier de plancher chauffant basse température réalisé par Hecker & Frères Énergie (HFE) à Lille et dans la métropole lilloise — couplé à une pompe à chaleur air-eau pour un confort optimal.",
    ctaQuote: "Demander un devis",
  },
  intro: {
    title: "Installation de plancher chauffant basse température",
    paragraphs: [
      "Chez Hecker & Frères Énergie (HFE), nous réalisons l'installation de planchers chauffants basse température pour les projets de construction neuve et de rénovation. Associé à une pompe à chaleur, le plancher chauffant représente aujourd'hui l'une des solutions de chauffage les plus confortables, économiques et performantes du marché.",
      "Contrairement aux radiateurs traditionnels, le plancher chauffant diffuse une chaleur douce et homogène sur toute la surface du logement. La chaleur est répartie uniformément du sol au plafond, supprimant les zones froides et procurant un confort optimal dans chaque pièce.",
      "Le plancher chauffant fonctionne à basse température, généralement entre 25 et 35°C, ce qui le rend parfaitement compatible avec les pompes à chaleur air/eau. Cette combinaison permet d'obtenir d'excellentes performances énergétiques tout en réduisant significativement les consommations de chauffage.",
    ],
    advantagesTitle: "Les avantages du plancher chauffant",
    advantages: [
      "Chaleur douce et homogène dans toute l'habitation.",
      "Confort thermique supérieur aux radiateurs traditionnels.",
      "Fonctionnement basse température idéal pour les pompes à chaleur.",
      "Réduction de la consommation énergétique.",
      "Aucune perte d'espace grâce à l'absence de radiateurs.",
      "Température uniforme dans chaque pièce.",
      "Solution discrète et invisible.",
      "Valorisation du logement.",
    ],
  },
  projectLabel: "Chantier",
  projects: [
    {
      slug: "plancher-chauffant-basse-temperature-pac",
      title: "Plancher chauffant",
      subtitle: "Plancher chauffant basse température couplé à une pompe à chaleur air-eau",
      description: [
        "Dans le cadre de ce projet, nous avons réalisé l'installation d'un plancher chauffant basse température destiné à fonctionner avec une pompe à chaleur air/eau.",
        "Cette solution de chauffage permet une diffusion douce et homogène de la chaleur dans l'ensemble de l'habitation, offrant un excellent confort thermique tout en limitant les variations de température. Grâce à son fonctionnement à basse température, le plancher chauffant optimise les performances de la pompe à chaleur et contribue à réduire les consommations énergétiques.",
        "L'absence de radiateurs permet également de libérer de l'espace dans les pièces et d'améliorer l'esthétique intérieure du logement. Ce système constitue aujourd'hui l'une des solutions de chauffage les plus confortables et les plus performantes pour les habitations neuves ou en rénovation.",
      ],
      images: chantier1ImagesFr,
    },
  ] satisfies readonly ProjectBase[],
  cta: {
    title: "Un projet de plancher chauffant ?",
    subtitle: "Étude gratuite, devis sous 72h, accompagnement des aides par HFE.",
  },
} as const;

const en = {
  seo: {
    title: "Our underfloor heating projects in Lille — HFE",
    description:
      "Discover a low-temperature underfloor heating project by Hecker & Frères Énergie (HFE) in Lille, paired with an air-to-water heat pump.",
    keywords: [
      "underfloor heating project Lille",
      "low-temperature underfloor heating installation",
      "underfloor heating heat pump",
      "hydronic underfloor heating",
      "floor heating Lille",
    ],
  },
  breadcrumbs: [
    { name: "Home", url: "/en" },
    { name: "Heating", url: "/en/heating" },
    { name: "Underfloor heating projects", url: "/en/projects/underfloor-heating" },
  ],
  hero: {
    badge: "Our projects",
    title: "Underfloor heating: our installations",
    description:
      "Every installation is different. Discover a low-temperature underfloor heating project completed by Hecker & Frères Énergie (HFE) in Lille and the metropolitan area — paired with an air-to-water heat pump for optimal comfort.",
    ctaQuote: "Request a quote",
  },
  intro: {
    title: "Low-temperature underfloor heating installation",
    paragraphs: [
      "At Hecker & Frères Énergie (HFE), we install low-temperature underfloor heating systems for both new builds and renovation projects. Paired with a heat pump, underfloor heating is now one of the most comfortable, economical and efficient heating solutions on the market.",
      "Unlike traditional radiators, underfloor heating delivers gentle, even warmth across the entire floor area of the home. Heat is distributed uniformly from floor to ceiling, eliminating cold spots and providing optimal comfort in every room.",
      "Underfloor heating operates at low temperatures, typically between 25 and 35°C, making it perfectly suited to air-to-water heat pumps. This combination delivers excellent energy performance while significantly reducing heating consumption.",
    ],
    advantagesTitle: "The advantages of underfloor heating",
    advantages: [
      "Gentle, even warmth throughout the home.",
      "Superior thermal comfort compared with traditional radiators.",
      "Low-temperature operation, ideal for heat pumps.",
      "Reduced energy consumption.",
      "No loss of space thanks to the absence of radiators.",
      "Uniform temperature in every room.",
      "A discreet, invisible solution.",
      "Adds value to your property.",
    ],
  },
  projectLabel: "Installation",
  projects: [
    {
      slug: "low-temperature-underfloor-heating-heat-pump",
      title: "Underfloor heating",
      subtitle: "Low-temperature underfloor heating paired with an air-to-water heat pump",
      description: [
        "As part of this project, we installed a low-temperature underfloor heating system designed to operate with an air-to-water heat pump.",
        "This heating solution provides gentle, even heat distribution throughout the home, delivering excellent thermal comfort while limiting temperature fluctuations. Thanks to its low-temperature operation, underfloor heating optimises the heat pump's performance and helps reduce energy consumption.",
        "The absence of radiators also frees up space in the rooms and improves the interior aesthetics of the home. This system is now one of the most comfortable and efficient heating solutions for new builds and renovations alike.",
      ],
      images: chantier1ImagesEn,
    },
  ] satisfies readonly ProjectBase[],
  cta: {
    title: "Planning an underfloor heating project?",
    subtitle: "Free survey, quote within 72 hours, grant support by HFE.",
  },
} as const;

export function getProjectsPlancherChauffantContent(locale: Locale) {
  const content = locale === "en" ? en : fr;
  return { ...content, projects: buildProjects(content.projects, locale, getProjectEnrichment) };
}

export type ProjectsPlancherChauffantContent = ReturnType<typeof getProjectsPlancherChauffantContent>;
