import type { Locale } from "../config";
import type { ProjectBase, ProjectImage } from "./projects-shared";
import { buildProjects } from "./projects-shared";
import { getProjectEnrichment } from "./projects-enrichment";

const chantier2ImagesFr: ProjectImage[] = [
  { src: "/projet/climatisation/chantier2/1.jpg", alt: "Climatisation multi-split Panasonic 3Z68 — unité murale dans le salon", width: 1206, height: 895 },
  { src: "/projet/climatisation/chantier2/2.jpg", alt: "Unité extérieure Panasonic 3Z68 — liaisons acheminées par l'extérieur du bâtiment", width: 1206, height: 898 },
  { src: "/projet/climatisation/chantier2/3.jpg", alt: "Unité murale Panasonic installée dans la cuisine", width: 1206, height: 878 },
];

const pacAirAirChantier1ImagesFr: ProjectImage[] = [
  { src: "/projet/pompe_a_chaleur_air_air/chantier1/1.jpg", alt: "PAC air-air Panasonic TZ42 — unité extérieure sur plots anti-vibratiles", width: 1206, height: 1606 },
  { src: "/projet/pompe_a_chaleur_air_air/chantier1/2.jpg", alt: "Climatisation réversible — unité murale installée dans le salon", width: 1206, height: 1592 },
  { src: "/projet/pompe_a_chaleur_air_air/chantier1/3.jpg", alt: "Unité intérieure murale Panasonic — installation dans l'entrée", width: 1206, height: 1592 },
  { src: "/projet/pompe_a_chaleur_air_air/chantier1/4.jpg", alt: "Unité murale Panasonic — pose soignée au-dessus de la porte", width: 1206, height: 1592 },
  { src: "/projet/pompe_a_chaleur_air_air/chantier1/5.jpg", alt: "Unité murale — liaisons acheminées en goulotte pour une finition propre", width: 1206, height: 891 },
  { src: "/projet/pompe_a_chaleur_air_air/chantier1/6.jpg", alt: "Unité murale dans la chambre — goulotte de finition le long du mur", width: 1206, height: 1596 },
  { src: "/projet/pompe_a_chaleur_air_air/chantier1/7.jpg", alt: "Unité murale installée sous pente dans les combles aménagés", width: 1206, height: 1589 },
  { src: "/projet/pompe_a_chaleur_air_air/chantier1/8.jpg", alt: "Console basse Panasonic — adaptée à la configuration des lieux", width: 1206, height: 1590 },
  { src: "/projet/pompe_a_chaleur_air_air/chantier1/9.jpg", alt: "Console basse sous pente avec commande murale", width: 1206, height: 1597 },
];

const chantier2ImagesEn: ProjectImage[] = [
  { src: "/projet/climatisation/chantier2/1.jpg", alt: "Panasonic 3Z68 multi-split air conditioning — wall-mounted unit in the living room", width: 1206, height: 895 },
  { src: "/projet/climatisation/chantier2/2.jpg", alt: "Panasonic 3Z68 outdoor unit — connections routed along the outside of the building", width: 1206, height: 898 },
  { src: "/projet/climatisation/chantier2/3.jpg", alt: "Panasonic wall-mounted unit installed in the kitchen", width: 1206, height: 878 },
];

const pacAirAirChantier1ImagesEn: ProjectImage[] = [
  { src: "/projet/pompe_a_chaleur_air_air/chantier1/1.jpg", alt: "Panasonic TZ42 air-to-air heat pump — outdoor unit on anti-vibration pads", width: 1206, height: 1606 },
  { src: "/projet/pompe_a_chaleur_air_air/chantier1/2.jpg", alt: "Reversible air conditioning — wall-mounted unit installed in the living room", width: 1206, height: 1592 },
  { src: "/projet/pompe_a_chaleur_air_air/chantier1/3.jpg", alt: "Panasonic wall-mounted indoor unit — installation in the entrance hall", width: 1206, height: 1592 },
  { src: "/projet/pompe_a_chaleur_air_air/chantier1/4.jpg", alt: "Panasonic wall-mounted unit — neat installation above the door", width: 1206, height: 1592 },
  { src: "/projet/pompe_a_chaleur_air_air/chantier1/5.jpg", alt: "Wall-mounted unit — connections routed in trunking for a clean finish", width: 1206, height: 891 },
  { src: "/projet/pompe_a_chaleur_air_air/chantier1/6.jpg", alt: "Wall-mounted unit in the bedroom — finishing trunking along the wall", width: 1206, height: 1596 },
  { src: "/projet/pompe_a_chaleur_air_air/chantier1/7.jpg", alt: "Wall-mounted unit installed under the sloped ceiling of a converted attic", width: 1206, height: 1589 },
  { src: "/projet/pompe_a_chaleur_air_air/chantier1/8.jpg", alt: "Panasonic low-level floor console — adapted to the room layout", width: 1206, height: 1590 },
  { src: "/projet/pompe_a_chaleur_air_air/chantier1/9.jpg", alt: "Low-level floor console under the eaves with wall-mounted controller", width: 1206, height: 1597 },
];

const fr = {
  seo: {
    title: "Réalisations climatisation multi-split à Lille | Installation réversible — HFE",
    description:
      "Découvrez nos chantiers de climatisation multi-split réalisés par Hecker & Frères Énergie (HFE) à Lille et métropole : Panasonic 3Z68 et PAC air-air TZ42 avec unités murales, console basse et cassette.",
    keywords: [
      "réalisation multi-split Lille",
      "chantier climatisation multi-split",
      "installation multi-split Panasonic Lille",
      "PAC air-air TZ42 Lille",
      "climatisation plusieurs pièces Lille",
    ],
  },
  breadcrumbs: [
    { name: "Accueil", url: "/" },
    { name: "Climatisation", url: "/climatisation" },
    { name: "Réalisations multi-split", url: "/realisations/climatisation/multi-split" },
  ],
  hero: {
    badge: "Nos réalisations",
    title: "Climatisation multi-split : nos chantiers",
    description:
      "Une unité extérieure pour plusieurs unités intérieures : découvrez 2 installations multi-split à Lille et dans la métropole lilloise — du Panasonic 3Z68 à la PAC air-air TZ42 avec console basse et cassette.",
    ctaQuote: "Demander un devis",
  },
  intro: {
    title: "Qu'est-ce qu'une climatisation multi-split ?",
    paragraphs: [
      "Le multi-split associe une seule unité extérieure à plusieurs unités intérieures (2 à 5). Chaque pièce bénéficie d'une régulation indépendante pour un confort sur mesure dans tout le logement.",
      "Chez Hecker & Frères Énergie (HFE), nous dimensionnons chaque installation en fonction de la surface, de l'exposition et du nombre de pièces à climatiser. Unités murales, consoles basses ou cassettes de plafond : nous adaptons la solution à chaque configuration.",
      "Réversible, le multi-split et la PAC air-air rafraîchissent en été et chauffent en hiver avec un excellent rendement — une alternative économique au chauffage électrique direct.",
    ],
    advantagesTitle: "Les avantages du multi-split",
    advantages: [
      "Plusieurs pièces climatisées avec une seule unité extérieure.",
      "Régulation indépendante pièce par pièce.",
      "Unités murales, console basse ou cassette selon les lieux.",
      "Solution 2-en-1 : rafraîchissement et chauffage d'appoint.",
      "Idéal pour appartement ou maison à étage.",
      "Alternative économique au chauffage électrique direct.",
    ],
  },
  projectLabel: "Chantier",
  projects: [
    {
      slug: "multisplit-panasonic-3z68",
      title: "Installation d'une climatisation multi-split Panasonic 3Z68 à Lille",
      subtitle: "Climatisation réversible Panasonic 3Z68 pour plusieurs pièces du logement",
      description: [
        "Dans le cadre de ce projet, nous avons installé une climatisation réversible Panasonic 3Z68 afin d'assurer le confort thermique de plusieurs pièces du logement tout au long de l'année. Les unités intérieures ont été positionnées de manière à garantir une diffusion homogène de l'air et un confort optimal pour les occupants.",
        "Pour cette réalisation, les liaisons frigorifiques, l'alimentation électrique et les évacuations des condensats ont été acheminées par l'extérieur du bâtiment, permettant une installation discrète tout en préservant l'esthétique intérieure du logement.",
      ],
      images: chantier2ImagesFr,
    },
    {
      slug: "pac-air-air-panasonic-tz42",
      title: "PAC air-air : climatisation réversible Panasonic TZ42",
      subtitle: "Système multi-split avec quatre unités intérieures : murales, console basse et cassette",
      description: [
        "Dans le cadre de ce projet, nous avons réalisé l'installation d'un système de climatisation réversible Panasonic TZ42 permettant d'assurer un confort optimal tout au long de l'année.",
        "L'installation comprend quatre unités intérieures réparties dans les différentes pièces du logement afin de garantir une diffusion homogène de la température. Parmi celles-ci, une console basse a été installée pour s'adapter parfaitement à la configuration des lieux, tandis qu'une cassette a été mise en place pour une intégration discrète et une excellente répartition de l'air.",
        "L'ensemble des liaisons frigorifiques, alimentations électriques et évacuations des condensats a été soigneusement acheminé à l'aide de goulottes, garantissant une finition propre, soignée et esthétique tout en facilitant l'entretien de l'installation.",
        "Cette réalisation permet au client de bénéficier d'une solution performante et économique pour rafraîchir son habitation en été et la chauffer en hiver, tout en profitant d'un excellent confort thermique dans l'ensemble du logement.",
      ],
      images: pacAirAirChantier1ImagesFr,
    },
  ] satisfies readonly ProjectBase[],
  cta: {
    title: "Un projet de climatisation multi-split ?",
    subtitle: "Étude gratuite, devis sous 72h, accompagnement par HFE.",
  },
} as const;

const en = {
  seo: {
    title: "Multi-split air conditioning projects in Lille | Reversible installation — HFE",
    description:
      "Discover our multi-split air conditioning projects by Hecker & Frères Énergie (HFE) in Lille: Panasonic 3Z68 and TZ42 air-to-air with wall-mounted units, floor console and ceiling cassette.",
    keywords: [
      "multi-split project Lille",
      "multi-split air conditioning installation",
      "Panasonic multi-split installer Lille",
      "TZ42 air-to-air heat pump Lille",
      "multi-room air conditioning Lille",
    ],
  },
  breadcrumbs: [
    { name: "Home", url: "/en" },
    { name: "Air conditioning", url: "/en/air-conditioning" },
    { name: "Multi-split projects", url: "/en/projects/air-conditioning/multi-split" },
  ],
  hero: {
    badge: "Our projects",
    title: "Multi-split air conditioning: our installations",
    description:
      "One outdoor unit for several indoor units: discover 2 multi-split installations in Lille and the metropolitan area — from the Panasonic 3Z68 to the TZ42 air-to-air with floor console and ceiling cassette.",
    ctaQuote: "Request a quote",
  },
  intro: {
    title: "What is multi-split air conditioning?",
    paragraphs: [
      "Multi-split pairs a single outdoor unit with several indoor units (2 to 5). Each room has independent control for tailored comfort throughout the home.",
      "At Hecker & Frères Énergie (HFE), we size every installation based on floor area, exposure and the number of rooms to be cooled. Wall-mounted units, low-level floor consoles or ceiling cassettes: we tailor the solution to each layout.",
      "As reversible systems, multi-split and air-to-air heat pumps cool in summer and heat in winter with excellent efficiency — an economical alternative to direct electric heating.",
    ],
    advantagesTitle: "Benefits of multi-split",
    advantages: [
      "Several rooms cooled with a single outdoor unit.",
      "Independent control room by room.",
      "Wall-mounted, floor console or cassette units as needed.",
      "2-in-1 solution: cooling and supplementary heating.",
      "Ideal for flats or multi-storey homes.",
      "Economical alternative to direct electric heating.",
    ],
  },
  projectLabel: "Installation",
  projects: [
    {
      slug: "panasonic-3z68-multisplit",
      title: "Installation of a Panasonic 3Z68 multi-split air conditioning system in Lille",
      subtitle: "Panasonic 3Z68 reversible air conditioning for several rooms of the home",
      description: [
        "As part of this project, we installed a Panasonic 3Z68 reversible air conditioning system to provide thermal comfort in several rooms of the home all year round. The indoor units were positioned to ensure even air distribution and optimal comfort for the occupants.",
        "For this installation, the refrigerant lines, electrical supply and condensate drains were routed along the outside of the building, allowing a discreet installation while preserving the interior aesthetics of the home.",
      ],
      images: chantier2ImagesEn,
    },
    {
      slug: "panasonic-tz42-air-to-air",
      title: "Air-to-air heat pump: Panasonic TZ42 reversible air conditioning",
      subtitle: "Multi-split system with four indoor units: wall-mounted, low-level console and ceiling cassette",
      description: [
        "As part of this project, we installed a Panasonic TZ42 reversible air conditioning system providing optimal comfort all year round.",
        "The installation includes four indoor units distributed across the rooms of the home to guarantee even temperature distribution. Among them, a low-level floor console was installed to fit the layout perfectly, while a ceiling cassette was fitted for discreet integration and excellent air distribution.",
        "All refrigerant lines, electrical supplies and condensate drains were carefully routed using trunking, ensuring a clean, neat and aesthetic finish while making the installation easy to maintain.",
        "This project gives the customer an efficient and economical solution to cool the home in summer and heat it in winter, while enjoying excellent thermal comfort throughout the house.",
      ],
      images: pacAirAirChantier1ImagesEn,
    },
  ] satisfies readonly ProjectBase[],
  cta: {
    title: "Planning a multi-split air conditioning project?",
    subtitle: "Free survey, quote within 72 hours, support by HFE.",
  },
} as const;

export function getProjectsClimContent(locale: Locale) {
  const content = locale === "en" ? en : fr;
  return { ...content, projects: buildProjects(content.projects, locale, getProjectEnrichment) };
}

export type ProjectsClimContent = ReturnType<typeof getProjectsClimContent>;
