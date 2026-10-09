import type { Locale } from "../config";
import { ibisProjectEn, ibisProjectFr } from "./projects-ibis-drv-shared";
import { buildProjects, type ProjectImage } from "./projects-shared";
import { getProjectEnrichment } from "./projects-enrichment";

const drvHeroFr: ProjectImage = {
  src: "/projet/drv_tertiaire/hero.jpg",
  alt: "Groupes extérieurs Panasonic ECOi EX installés en toiture-terrasse pour un bâtiment tertiaire",
  width: 845,
  height: 488,
};

const drvHeroEn: ProjectImage = {
  src: "/projet/drv_tertiaire/hero.jpg",
  alt: "Panasonic ECOi EX outdoor VRF units installed on a commercial rooftop terrace",
  width: 845,
  height: 488,
};

const fr = {
  seo: {
    title: "Réalisation DRV Hôtel Ibis Grand-Place — Système DRV tertiaire | HFE",
    description:
      "Remplacement des systèmes DRV Mitsubishi à l'Hôtel Ibis Grand-Place par Hecker & Frères Énergie (HFE) : 69 unités intérieures, 6 groupes en toiture, rénovation énergétique bi-tube.",
    keywords: [
      "réalisation DRV tertiaire Lille",
      "chantier DRV hôtel Ibis",
      "installation VRF Mitsubishi tertiaire",
      "système variable réfrigérant volume",
      "rénovation DRV bi-tube Lille",
    ],
  },
  breadcrumbs: [
    { name: "Accueil", url: "/" },
    { name: "Professionnels", url: "/professionnels" },
    { name: "Système DRV tertiaire", url: "/realisations/systeme-drv-tertiaire" },
  ],
  hero: {
    badge: "Nos réalisations",
    title: "Système DRV tertiaire",
    description:
      "Découvrez le remplacement des systèmes DRV de l'Hôtel Ibis Grand-Place : rénovation énergétique Mitsubishi Electric bi-tube réalisée par Hecker & Frères Énergie (HFE) à Lille.",
    ctaQuote: "Demander un devis",
    image: drvHeroFr,
  },
  intro: {
    title: "Qu'est-ce qu'un système DRV tertiaire ?",
    paragraphs: [
      "Installer un système DRV permet d'améliorer le confort thermique d'un bâtiment tout en réduisant les consommations énergétiques. Cette solution s'adapte aux besoins de chaque zone, offre un contrôle précis des températures et garantit un fonctionnement silencieux.",
      "Le DRV est particulièrement adapté aux bureaux, commerces, hôtels et locaux de grande superficie. Une ou plusieurs unités extérieures alimentent de nombreuses unités intérieures (murales, cassettes, gainables), chacune pilotée indépendamment.",
    ],
    advantagesTitle: "Les avantages du DRV en tertiaire",
    advantages: [
      "Régulation indépendante de chaque zone ou pièce.",
      "Adaptation automatique de la puissance aux besoins réels.",
      "Réduction des consommations par rapport à des systèmes fixes.",
      "Fonctionnement silencieux, adapté aux locaux professionnels.",
      "Solution réversible : rafraîchissement et chauffage d'appoint.",
      "Idéal pour bureaux, commerces, hôtels et surfaces commerciales étendues.",
    ],
  },
  projectLabel: "Chantier",
  projects: [ibisProjectFr],
  cover: drvHeroFr,
  cta: {
    title: "Un projet de système DRV pour vos locaux ?",
    subtitle: "Étude gratuite, devis sous 72h, accompagnement par HFE.",
  },
} as const;

const en = {
  seo: {
    title: "Ibis Grand-Place VRF replacement — Commercial VRF system | HFE",
    description:
      "Mitsubishi VRF system replacement at the Ibis Grand-Place hotel by Hecker & Frères Énergie (HFE): 69 indoor units, 6 rooftop groups, two-pipe energy renovation.",
    keywords: [
      "commercial VRF project Lille",
      "Ibis hotel VRF project",
      "Mitsubishi tertiary VRF installation",
      "variable refrigerant flow system",
      "two-pipe VRF renovation Lille",
    ],
  },
  breadcrumbs: [
    { name: "Home", url: "/en" },
    { name: "Business", url: "/en/commercial" },
    { name: "Commercial VRF system", url: "/en/projects/commercial-vrf-system" },
  ],
  hero: {
    badge: "Our projects",
    title: "Commercial VRF system",
    description:
      "Discover the VRF system replacement at the Ibis Grand-Place hotel: Mitsubishi Electric two-pipe energy renovation completed by Hecker & Frères Énergie (HFE) in Lille.",
    ctaQuote: "Request a quote",
    image: drvHeroEn,
  },
  intro: {
    title: "What is a commercial VRF system?",
    paragraphs: [
      "Installing a VRF system improves thermal comfort while reducing energy consumption. The solution adapts to the needs of each zone, provides precise temperature control and ensures quiet operation.",
      "VRF is particularly suited to offices, retail premises, hotels and large floor areas. One or several outdoor units supply multiple indoor units (wall-mounted, cassette, ducted), each independently controlled.",
    ],
    advantagesTitle: "Benefits of VRF in commercial buildings",
    advantages: [
      "Independent control of each zone or room.",
      "Automatic output adjustment to actual demand.",
      "Lower consumption compared with fixed-output systems.",
      "Quiet operation, suited to professional premises.",
      "Reversible solution: cooling and supplementary heating.",
      "Ideal for offices, shops, hotels and large commercial spaces.",
    ],
  },
  projectLabel: "Project",
  projects: [ibisProjectEn],
  cover: drvHeroEn,
  cta: {
    title: "Planning a VRF system for your premises?",
    subtitle: "Free survey, quote within 72 hours, support by HFE.",
  },
} as const;

export function getProjectsDrvTertiaireContent(locale: Locale) {
  const content = locale === "en" ? en : fr;
  return { ...content, projects: buildProjects(content.projects, locale, getProjectEnrichment) };
}

export type ProjectsDrvTertiaireContent = ReturnType<typeof getProjectsDrvTertiaireContent>;
