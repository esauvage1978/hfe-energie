import type { Locale } from "../config";
import type { ProjectBase, ProjectImage } from "./projects-shared";
import { buildProjects } from "./projects-shared";
import { getProjectEnrichment } from "./projects-enrichment";

const chantier1ImagesFr: ProjectImage[] = [
  {
    src: "/projet/adoucisseur_sel/projet1/1.jpg",
    alt: "Adoucisseur d'eau au sel et chauffe-eau thermodynamique Atlantic installés par HFE en cave",
    width: 771,
    height: 1024,
  },
];

const chantier1ImagesEn: ProjectImage[] = [
  {
    src: "/projet/adoucisseur_sel/projet1/1.jpg",
    alt: "Salt water softener and Atlantic thermodynamic water heater installed by HFE in a cellar",
    width: 771,
    height: 1024,
  },
];

const fr = {
  seo: {
    title: "Installation d'adoucisseur au sel à Lille – HFE",
    description:
      "Installation d'adoucisseur d'eau au sel à Lille et métropole par Hecker & Frères Énergie (HFE). Lutte efficace contre le calcaire, protection du chauffe-eau et des équipements sanitaires.",
    keywords: [
      "adoucisseur au sel Lille",
      "installation adoucisseur eau Lille",
      "anti-calcaire maison Lille",
      "adoucisseur chauffe-eau thermodynamique",
      "traitement eau dure Lille",
    ],
  },
  breadcrumbs: [
    { name: "Accueil", url: "/" },
    { name: "Plomberie", url: "/plomberie" },
    { name: "Adoucisseur au sel", url: "/realisations/adoucisseur-au-sel" },
  ],
  hero: {
    badge: "Nos réalisations",
    title: "Adoucisseur au sel : nos installations",
    description:
      "L'adoucisseur au sel est la solution la plus répandue pour lutter contre le calcaire. Découvrez une installation réalisée par Hecker & Frères Énergie (HFE) à Lille et dans la métropole lilloise.",
    ctaQuote: "Demander un devis",
    image: chantier1ImagesFr[0],
  },
  intro: {
    title: "Adoucisseur au sel : comment ça fonctionne ?",
    paragraphs: [
      "L'adoucisseur au sel est la solution la plus répandue pour lutter contre le calcaire. Son fonctionnement repose sur un principe appelé échange d'ions. Lorsque l'eau traverse l'appareil, les ions calcium et magnésium, responsables de la dureté de l'eau, sont captés par une résine spécifique et remplacés par des ions sodium.",
      "Cette technologie permet d'obtenir une eau adoucie qui limite l'entartrage des canalisations, des robinets, des chauffe-eau et des appareils électroménagers. Pour conserver son efficacité, l'adoucisseur effectue régulièrement une régénération de la résine à l'aide de sel spécialement conçu à cet effet.",
    ],
    advantagesTitle: "Les avantages de l'adoucisseur au sel",
    advantages: [
      "Élimination efficace du calcaire.",
      "Protection durable de l'installation.",
      "Réduction de l'entretien des équipements.",
      "Meilleur confort au quotidien (peau, linge, robinetterie).",
    ],
  },
  projectLabel: "Chantier",
  projects: [
    {
      slug: "adoucisseur-sel-installation-cave",
      title: "Notre expérience",
      subtitle: "Installation d'un adoucisseur d'eau au sel pour traiter la dureté de l'eau",
      description: [
        "Dans le cadre de cette intervention, nous avons réalisé l'installation d'un adoucisseur d'eau au sel afin de traiter efficacement la dureté de l'eau et de limiter les dépôts de calcaire dans l'ensemble du logement.",
        "Cette solution permet de protéger durablement les équipements sanitaires et de chauffage tels que le chauffe-eau thermodynamique, la robinetterie, les canalisations ainsi que les appareils électroménagers. En réduisant l'entartrage, l'adoucisseur contribue à préserver les performances des installations, à diminuer les risques de pannes et à prolonger leur durée de vie.",
        "Au-delà de la protection des équipements, l'eau adoucie apporte également un meilleur confort au quotidien en limitant les traces de calcaire, en améliorant l'efficacité des produits ménagers et en procurant une sensation plus agréable pour la peau et le linge.",
      ],
      images: chantier1ImagesFr,
    },
  ] satisfies readonly ProjectBase[],
  cta: {
    title: "Un projet d'adoucisseur d'eau ?",
    subtitle: "Étude gratuite, devis sous 72h, installation par HFE à Lille et métropole.",
  },
} as const;

const en = {
  seo: {
    title: "Salt water softener installation in Lille – HFE",
    description:
      "Salt water softener installation in Lille and the metropolitan area by Hecker & Frères Énergie (HFE). Effective limescale control, protection for water heaters and sanitary equipment.",
    keywords: [
      "salt water softener Lille",
      "water softener installation Lille",
      "home limescale treatment Lille",
      "thermodynamic water heater softener",
      "hard water treatment Lille",
    ],
  },
  breadcrumbs: [
    { name: "Home", url: "/en" },
    { name: "Plumbing", url: "/en/plumbing" },
    { name: "Salt water softener", url: "/en/projects/salt-water-softener" },
  ],
  hero: {
    badge: "Our projects",
    title: "Salt water softener: our installations",
    description:
      "The salt water softener is the most common solution for fighting limescale. Discover an installation completed by Hecker & Frères Énergie (HFE) in Lille and the metropolitan area.",
    ctaQuote: "Request a quote",
    image: chantier1ImagesEn[0],
  },
  intro: {
    title: "Salt water softener: how does it work?",
    paragraphs: [
      "The salt water softener is the most widespread solution for combating limescale. It works on a principle called ion exchange. As water passes through the unit, calcium and magnesium ions — responsible for water hardness — are captured by a special resin and replaced with sodium ions.",
      "This technology produces softened water that limits scaling in pipework, taps, water heaters and household appliances. To maintain its effectiveness, the softener regularly regenerates the resin using salt specially designed for this purpose.",
    ],
    advantagesTitle: "The advantages of a salt water softener",
    advantages: [
      "Effective limescale removal.",
      "Long-lasting protection for your installation.",
      "Reduced equipment maintenance.",
      "Greater everyday comfort (skin, laundry, taps).",
    ],
  },
  projectLabel: "Installation",
  projects: [
    {
      slug: "salt-water-softener-cellar-installation",
      title: "Our experience",
      subtitle: "Installing a salt water softener to treat water hardness",
      description: [
        "As part of this project, we installed a salt water softener to effectively treat water hardness and limit limescale deposits throughout the home.",
        "This solution durably protects sanitary and heating equipment such as the thermodynamic water heater, taps, pipework and household appliances. By reducing scaling, the softener helps preserve system performance, lower the risk of breakdowns and extend equipment service life.",
        "Beyond equipment protection, softened water also provides greater everyday comfort by limiting limescale marks, improving cleaning product effectiveness and offering a more pleasant feel for skin and laundry.",
      ],
      images: chantier1ImagesEn,
    },
  ] satisfies readonly ProjectBase[],
  cta: {
    title: "Planning a water softener project?",
    subtitle: "Free survey, quote within 72 hours, installation by HFE in Lille and the metropolitan area.",
  },
} as const;

export function getProjectsAdoucisseurSelContent(locale: Locale) {
  const content = locale === "en" ? en : fr;
  return { ...content, projects: buildProjects(content.projects, locale, getProjectEnrichment) };
}

export type ProjectsAdoucisseurSelContent = ReturnType<typeof getProjectsAdoucisseurSelContent>;
