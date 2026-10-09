import type { Locale } from "../config";
import type { ProjectBase, ProjectImage } from "./projects-shared";
import { buildProjects } from "./projects-shared";
import { getProjectEnrichment } from "./projects-enrichment";

const heroImageFr: ProjectImage = {
  src: "/projet/salle_de_bain/hero.jpg",
  alt: "Salle de bain rénovée — douche à l'italienne, baignoire îlot et meuble vasque par HFE à Lille",
  width: 643,
  height: 858,
};

const heroImageEn: ProjectImage = {
  src: "/projet/salle_de_bain/hero.jpg",
  alt: "Renovated bathroom — walk-in shower, freestanding tub and vanity by HFE in Lille",
  width: 643,
  height: 858,
};

const chantier1ImagesFr: ProjectImage[] = [
  {
    src: "/projet/salle_de_bain/chantier1/1.jpg",
    alt: "Douche à l'italienne avec paroi verrière noire et meuble vasque en bois clair — rénovation salle de bain par HFE",
    width: 768,
    height: 1024,
  },
];

const chantier2ImagesFr: ProjectImage[] = [
  {
    src: "/projet/salle_de_bain/chantier2/1.jpg",
    alt: "Bloc sanitaire professionnel avec urinoirs, WC suspendu et meuble double vasque — installation HFE",
    width: 644,
    height: 858,
  },
];

const chantier3ImagesFr: ProjectImage[] = [
  {
    src: "/projet/salle_de_bain/chantier3/1.jpg",
    alt: "Salle de bain rénovée avec meuble double vasque en bois et douche carrelée vert sauge — HFE Lille",
    width: 647,
    height: 858,
  },
];

const chantier4ImagesFr: ProjectImage[] = [
  {
    src: "/projet/salle_de_bain/chantier4/1.jpg",
    alt: "Douche à l'italienne carrelage effet marbre noir et meuble vasque blanc — rénovation par HFE",
    width: 647,
    height: 863,
  },
];

const chantier5ImagesFr: ProjectImage[] = [
  {
    src: "/projet/salle_de_bain/chantier5/1.jpg",
    alt: "Douche à l'italienne avec faïence murale aspect bois et meuble vasque suspendu — HFE Lille",
    width: 645,
    height: 859,
  },
];

const chantier6ImagesFr: ProjectImage[] = [
  {
    src: "/projet/salle_de_bain/chantier6/1.jpg",
    alt: "Salle de bain moderne avec douche zellige bleu canard et sol mosaïque hexagonale — HFE",
    width: 768,
    height: 1024,
  },
];

const chantier7ImagesFr: ProjectImage[] = [
  {
    src: "/projet/salle_de_bain/chantier7/1.jpg",
    alt: "Salle de bain vintage avec double vasque sur buffet en bois et douche paroi atelier noire — HFE",
    width: 768,
    height: 1024,
  },
];

const chantier8ImagesFr: ProjectImage[] = [
  {
    src: "/projet/salle_de_bain/chantier8/1.jpg",
    alt: "Douche double à l'italienne avec carrelage aspect bois, faïence métro blanche et robinetterie noire — HFE",
    width: 768,
    height: 1024,
  },
];

const chantier1ImagesEn: ProjectImage[] = [
  {
    src: "/projet/salle_de_bain/chantier1/1.jpg",
    alt: "Walk-in shower with black Crittall-style glass partition and light wood vanity — bathroom renovation by HFE",
    width: 768,
    height: 1024,
  },
];

const chantier2ImagesEn: ProjectImage[] = [
  {
    src: "/projet/salle_de_bain/chantier2/1.jpg",
    alt: "Commercial sanitary block with urinals, wall-hung toilet and double vanity — installation by HFE",
    width: 644,
    height: 858,
  },
];

const chantier3ImagesEn: ProjectImage[] = [
  {
    src: "/projet/salle_de_bain/chantier3/1.jpg",
    alt: "Renovated bathroom with double wood vanity and sage green tiled shower — HFE Lille",
    width: 647,
    height: 858,
  },
];

const chantier4ImagesEn: ProjectImage[] = [
  {
    src: "/projet/salle_de_bain/chantier4/1.jpg",
    alt: "Walk-in shower with black marble-effect tiles and white vanity unit — renovation by HFE",
    width: 647,
    height: 863,
  },
];

const chantier5ImagesEn: ProjectImage[] = [
  {
    src: "/projet/salle_de_bain/chantier5/1.jpg",
    alt: "Walk-in shower with wood-effect wall tiles and wall-mounted white vanity — HFE Lille",
    width: 645,
    height: 859,
  },
];

const chantier6ImagesEn: ProjectImage[] = [
  {
    src: "/projet/salle_de_bain/chantier6/1.jpg",
    alt: "Modern bathroom with teal zellige shower and hexagonal mosaic floor — HFE",
    width: 768,
    height: 1024,
  },
];

const chantier7ImagesEn: ProjectImage[] = [
  {
    src: "/projet/salle_de_bain/chantier7/1.jpg",
    alt: "Vintage-style bathroom with double vessel sinks on wooden sideboard and black industrial shower — HFE",
    width: 768,
    height: 1024,
  },
];

const chantier8ImagesEn: ProjectImage[] = [
  {
    src: "/projet/salle_de_bain/chantier8/1.jpg",
    alt: "Double walk-in shower with wood-effect tiles, white subway tiles and matte black fixtures — HFE",
    width: 768,
    height: 1024,
  },
];

const fr = {
  seo: {
    title: "Rénovation salle de bain à Lille | Sanitaire clé en main — HFE",
    description:
      "Rénovation de salle de bain à Lille et métropole par Hecker & Frères Énergie (HFE) : douche à l'italienne, baignoire, plomberie et sanitaires. Projet coordonné avec partenaires carrelage et finitions.",
    keywords: [
      "rénovation salle de bain Lille",
      "douche à l'italienne Lille",
      "rénovation sanitaire Lille",
      "plombier salle de bain Lille",
      "baignoire îlot Lille",
    ],
  },
  breadcrumbs: [
    { name: "Accueil", url: "/" },
    { name: "Plomberie", url: "/plomberie" },
    { name: "Sanitaire & salle de bain", url: "/realisations/salle-de-bain" },
  ],
  hero: {
    badge: "Nos réalisations",
    title: "Sanitaire & rénovation de salle de bain",
    description:
      "Moderniser votre salle de bain, remplacer une baignoire par une douche à l'italienne ou repenser entièrement votre espace : HFE vous accompagne à Lille et dans toute la métropole lilloise.",
    ctaQuote: "Demander un devis",
    image: heroImageFr,
  },
  intro: {
    title: "Une rénovation de salle de bain pensée pour durer",
    paragraphs: [
      "Vous souhaitez moderniser votre salle de bain, remplacer une baignoire par une douche à l'italienne ou repenser entièrement votre espace ? HFE – Hecker & Frères Énergie vous accompagne dans tous vos projets de rénovation de salle de bain à Lille et dans toute la métropole lilloise.",
      "Nous réalisons la partie plomberie, sanitaire et équipements, tandis que notre partenaire spécialisé prend en charge l'ensemble des travaux de carrelage, faïence, placo et finitions. Cette organisation nous permet de vous proposer une rénovation complète avec un seul interlocuteur pour le suivi du chantier.",
    ],
    advantagesTitle: "Nos prestations de rénovation",
    advantages: [
      "Dépose de l'ancienne salle de bain",
      "Modification ou création des réseaux d'eau et d'évacuation",
      "Installation de douche à l'italienne ou receveur extra-plat",
      "Pose de baignoire classique ou îlot",
      "Installation de meubles vasques et robinetterie",
      "Pose de WC suspendus et bâti-supports",
      "Installation de sèche-serviettes et radiateurs de salle de bain",
      "Création de points d'eau supplémentaires",
      "Remplacement de chauffe-eau ou ballon d'eau chaude",
    ],
    turnkey: {
      title: "Une rénovation clé en main",
      intro:
        "Grâce à notre collaboration avec des artisans qualifiés, nous coordonnons l'ensemble des travaux nécessaires à votre projet :",
      items: [
        "Travaux de plomberie et sanitaires",
        "Réseaux d'alimentation et d'évacuation",
        "Pose de carrelage et faïence",
        "Travaux de placo et d'isolation",
        "Création de niches murales et habillages",
        "Finitions et aménagements",
      ],
      outro:
        "Nous vous accompagnons de l'étude du projet jusqu'à la mise en service des équipements afin de vous garantir une salle de bain fonctionnelle, esthétique et durable.",
    },
    closing: {
      title: "Une salle de bain adaptée à vos besoins",
      text: "Que vous souhaitiez une ambiance contemporaine, naturelle, industrielle ou haut de gamme, nous vous conseillons dans le choix des matériaux et équipements afin de créer une salle de bain qui correspond parfaitement à vos envies et à votre budget.",
    },
  },
  cover: heroImageFr,
  projectLabel: "Chantier",
  projects: [
    {
      slug: "douche-italienne-style-industriel",
      title: "Rénovation au style industriel et naturel",
      subtitle: "Douche à l'italienne avec paroi verrière noire et meuble vasque en bois clair",
      description: [
        "Cette réalisation met en avant une transformation complète vers un style moderne et épuré. Le point focal est la grande douche à l'italienne, soulignée par une paroi vitrée à cadre noir de style verrière industrielle.",
        "Nous avons installé l'ensemble de la robinetterie noire mate — mitigeur, douchette et ciel de pluie — pour une touche de sophistication qui contraste avec le meuble vasque en bois clair. Le jeu de textures sur les murs, entre les grands carreaux effet pierre et le parement texturé, crée une ambiance à la fois minérale et contemporaine.",
        "Côté plomberie, nous avons repensé les réseaux d'alimentation et d'évacuation pour accueillir le receveur extra-plat, posé le meuble vasque et raccordé l'ensemble des équipements sanitaires en coordination avec notre partenaire carreleur.",
      ],
      images: chantier1ImagesFr,
    },
    {
      slug: "bloc-sanitaire-professionnel",
      title: "Aménagement d'un bloc sanitaire professionnel",
      subtitle: "Espace sanitaire tertiaire avec urinoirs, WC suspendu et meuble double vasque",
      description: [
        "Réalisation d'un espace sanitaire moderne alliant esthétique et fonctionnalité pour un local professionnel. L'installation comprend des urinoirs à détection automatique et un WC suspendu pour une hygiène irréprochable et un entretien facilité.",
        "Le choix des matériaux, avec un carrelage mural grand format et un sol aspect bois, apporte une touche chaleureuse et contemporaine à cet espace professionnel. Un meuble double vasque complète l'ensemble pour un confort d'utilisation optimal.",
        "HFE a pris en charge l'ensemble de la plomberie : création des points d'évacuation, alimentation des sanitaires, pose des bâti-supports et raccordement de la robinetterie chromée.",
      ],
      images: chantier2ImagesFr,
    },
    {
      slug: "salle-de-bain-scandinave-double-vasque",
      title: "Rénovation alliant modernité et cachet",
      subtitle: "Meuble double vasque en bois et douche carrelée vert sauge dans un appartement haussmannien",
      description: [
        "Dans cet appartement de caractère, nous avons su concilier les hauteurs sous plafond et les portes moulurées d'origine avec un aménagement résolument contemporain. Le meuble double vasque suspendu en bois clair, surmonté d'un plan vasque intégré, structure l'espace lavabo.",
        "La douche d'angle, habillée d'un carrelage vert sauge en grand format, apporte une note de couleur douce. La robinetterie chromée, le miroir rétroéclairé et le receveur extra-plat complètent un ensemble fonctionnel et lumineux.",
        "Notre intervention a porté sur la modification des réseaux, l'installation du receveur de douche, des mitigeurs thermostatiques et des évacuations, en lien étroit avec les travaux de carrelage.",
      ],
      images: chantier3ImagesFr,
    },
    {
      slug: "douche-marbre-noir-minimaliste",
      title: "Salle de bain noir et blanc minimaliste",
      subtitle: "Douche à l'italienne en carrelage effet marbre noir et meuble vasque blanc",
      description: [
        "Ce projet démontre qu'un espace compact peut offrir un rendu haut de gamme. La douche à l'italienne est habillée de grands carreaux effet marbre noir veiné de blanc, avec une niche de rangement intégrée dans le même habillage.",
        "Une paroi fixe en verre trempé, sans cadre, sépare la zone de douche du reste de la pièce. Le meuble vasque blanc sur pieds métalliques et le grand miroir sans cadre renforcent l'aspect épuré et lumineux de l'ensemble.",
        "Nous avons réalisé la plomberie encastrée, la pose du receveur extra-plat, le raccordement de la colonne de douche avec mitigeur thermostatique et l'installation du meuble vasque et de la robinetterie.",
      ],
      images: chantier4ImagesFr,
    },
    {
      slug: "douche-italienne-faience-bois",
      title: "Douche à l'italienne en faïence aspect bois",
      subtitle: "Rénovation d'espace douche avec receveur extra-plat et paroi fixe en verre",
      description: [
        "Cette réalisation met en avant une rénovation complète d'espace douche alliant modernité et chaleur. Nous avons installé une douche à l'italienne équipée d'un receveur extra-plat blanc et d'une paroi fixe en verre trempé pour un aspect épuré.",
        "Le choix d'une faïence murale imitation bois, posée en décalé, apporte une ambiance naturelle et cocooning à la pièce. L'ensemble est complété par une colonne de douche chromée avec ciel de pluie et un meuble vasque suspendu blanc.",
        "Les travaux de plomberie ont inclus la création de l'évacuation au sol, l'alimentation des deux points de douche et la pose du mitigeur thermostatique, en coordination avec la faïence murale.",
      ],
      images: chantier5ImagesFr,
    },
    {
      slug: "renovation-bleue-hexagonale",
      title: "Rénovation complète aux tons bleu profond",
      subtitle: "Douche zellige bleu canard, sol mosaïque hexagonale et meuble vasque en bois clair",
      description: [
        "Ce chantier illustre un mariage élégant entre le bois naturel et des nuances de bleu profond. La douche à l'italienne spacieuse est habillée d'un carrelage mural en petits carreaux bleu canard, complétée par un sol en mosaïque hexagonale aux tons variés.",
        "Le meuble vasque en bois clair, surmonté d'une vasque à poser sur plan de travail sombre, apporte une touche de chaleur. Le sèche-serviettes vertical et la robinetterie chromée complètent un ensemble résolument contemporain.",
        "HFE a assuré la plomberie complète : réseaux d'eau chaude et froide, évacuations, raccordement du sèche-serviettes et installation de la robinetterie, en lien avec notre partenaire pour le carrelage et les finitions.",
      ],
      images: chantier6ImagesFr,
    },
    {
      slug: "salle-de-bain-vintage-industrielle",
      title: "Alliance vintage et design industriel",
      subtitle: "Double vasque sur buffet en bois, faïence terracotta et douche paroi atelier noire",
      description: [
        "Cette salle de bain conjugue le charme du vintage et la modernité du design industriel. Un buffet en bois mid-century a été transformé en meuble double vasque, surmonté de deux vasques à poser blanches et d'une robinetterie dorée brossée.",
        "Le mur d'habillage en faïence effet terre cuite, aux tons chauds et aux motifs patinés, structure l'ensemble de la pièce. La douche à l'italienne, délimitée par une grande paroi vitrée à cadre noir style atelier, est équipée d'une colonne de douche assortie à la robinetterie dorée.",
        "Notre équipe a réalisé l'ensemble des raccordements sanitaires, la plomberie encastrée pour la douche et l'installation des deux points d'eau sur le meuble vasque.",
      ],
      images: chantier7ImagesFr,
    },
    {
      slug: "douche-double-spa-industriel",
      title: "Douche double type spa haut de gamme",
      subtitle: "Deux ciels de pluie encastrés, carrelage aspect bois et faïence métro blanche",
      description: [
        "Ce projet haut de gamme met en scène une douche double à l'italienne pensée comme un véritable espace bien-être. Deux grands ciels de pluie carrés sont encastrés au plafond, complétés par deux douchettes murales et une commande thermostatique à trois sorties.",
        "Le contraste entre le carrelage aspect bois sur le sol et le mur du fond, et la faïence métro blanche à joints foncés sur les parois latérales, crée une atmosphère spa moderne. Un banc intégré en carrelage bois et une paroi atelier noire à vitrages dépolis structurent l'espace.",
        "La complexité de ce chantier résidait dans la plomberie encastrée : double alimentation, deux évacuations linéaires au sol et raccordement des six points de douche. HFE a coordonné l'ensemble des travaux avec le carreleur pour un résultat irréprochable.",
      ],
      images: chantier8ImagesFr,
    },
  ] satisfies readonly ProjectBase[],
  cta: {
    title: "Un projet de rénovation de salle de bain ?",
    subtitle: "Étude gratuite sur place, devis sous 72h — HFE à Lille et métropole.",
  },
} as const;

const en = {
  seo: {
    title: "Bathroom renovation in Lille | Turnkey sanitary — HFE",
    description:
      "Bathroom renovation in Lille and the metropolitan area by Hecker & Frères Énergie (HFE): walk-in showers, baths, plumbing and sanitary fittings. Project coordinated with tiling and finishing partners.",
    keywords: [
      "bathroom renovation Lille",
      "walk-in shower Lille",
      "bathroom plumbing Lille",
      "bathroom fitter Lille",
      "freestanding bath Lille",
    ],
  },
  breadcrumbs: [
    { name: "Home", url: "/en" },
    { name: "Plumbing", url: "/en/plumbing" },
    { name: "Bathroom & sanitary", url: "/en/projects/bathroom-renovation" },
  ],
  hero: {
    badge: "Our projects",
    title: "Bathroom & sanitary renovation",
    description:
      "Modernise your bathroom, replace a bath with a walk-in shower or rethink your entire space: HFE supports you in Lille and across the metropolitan area.",
    ctaQuote: "Request a quote",
    image: heroImageEn,
  },
  intro: {
    title: "A bathroom renovation built to last",
    paragraphs: [
      "Looking to modernise your bathroom, replace a bath with a walk-in shower or completely rethink your space? HFE – Hecker & Frères Énergie supports all your bathroom renovation projects in Lille and the entire metropolitan area.",
      "We handle plumbing, sanitary fittings and equipment, while our specialist partner takes care of tiling, wall coverings, plasterboard and finishes. This setup lets us offer a complete renovation with a single point of contact for project management.",
    ],
    advantagesTitle: "Our renovation services",
    advantages: [
      "Removal of the existing bathroom",
      "Modification or creation of water supply and drainage networks",
      "Walk-in shower or ultra-low tray installation",
      "Standard or freestanding bath installation",
      "Vanity units and tap fittings",
      "Wall-hung toilets and concealed cistern frames",
      "Towel warmers and bathroom radiators",
      "Additional water points",
      "Water heater or hot water tank replacement",
    ],
    turnkey: {
      title: "A turnkey renovation",
      intro:
        "Thanks to our work with qualified tradespeople, we coordinate all the work required for your project:",
      items: [
        "Plumbing and sanitary work",
        "Supply and drainage networks",
        "Tiling and wall coverings",
        "Plasterboard and insulation work",
        "Wall niches and cladding",
        "Finishes and fittings",
      ],
      outro:
        "We support you from the initial survey through to commissioning to ensure a functional, attractive and durable bathroom.",
    },
    closing: {
      title: "A bathroom tailored to your needs",
      text: "Whether you want a contemporary, natural, industrial or high-end feel, we advise you on materials and equipment to create a bathroom that matches your vision and budget.",
    },
  },
  cover: heroImageEn,
  projectLabel: "Project",
  projects: [
    {
      slug: "douche-italienne-style-industriel",
      title: "Industrial and natural style renovation",
      subtitle: "Walk-in shower with black Crittall-style partition and light wood vanity",
      description: [
        "This project showcases a complete transformation towards a modern, streamlined style. The focal point is the large walk-in shower, highlighted by a black-framed glass partition in an industrial Crittall style.",
        "We installed matte black tapware throughout — mixer, hand shower and rain head — for a sophisticated touch that contrasts beautifully with the light wood vanity unit. The interplay of textures on the walls, between large stone-effect tiles and textured cladding, creates a mineral yet contemporary atmosphere.",
        "On the plumbing side, we redesigned the supply and drainage networks for the ultra-low shower tray, fitted the vanity unit and connected all sanitary equipment in coordination with our tiling partner.",
      ],
      images: chantier1ImagesEn,
    },
    {
      slug: "bloc-sanitaire-professionnel",
      title: "Commercial sanitary block fit-out",
      subtitle: "Tertiary sanitary space with urinals, wall-hung toilet and double vanity",
      description: [
        "A modern sanitary space combining aesthetics and functionality for a commercial premises. The installation includes sensor-flush urinals and a wall-hung toilet for impeccable hygiene and easier maintenance.",
        "The material choices — large-format wall tiles and wood-effect floor tiles — bring warmth and a contemporary feel to this professional space. A double vanity unit completes the layout for optimal user comfort.",
        "HFE handled all plumbing: drainage points, sanitary supply lines, concealed cistern frames and chrome tap connections.",
      ],
      images: chantier2ImagesEn,
    },
    {
      slug: "salle-de-bain-scandinave-double-vasque",
      title: "Renovation blending modernity and character",
      subtitle: "Double wood vanity and sage green tiled shower in a period apartment",
      description: [
        "In this character property, we combined the original high ceilings and panelled doors with a decidedly contemporary layout. The wall-mounted double vanity in light wood, topped with an integrated basin unit, structures the wash area.",
        "The corner shower, clad in large-format sage green tiles, adds a soft touch of colour. Chrome tapware, a backlit mirror and an ultra-low shower tray complete a functional, bright ensemble.",
        "Our work covered network modifications, shower tray installation, thermostatic mixers and drainage, working closely with the tiling contractor.",
      ],
      images: chantier3ImagesEn,
    },
    {
      slug: "douche-marbre-noir-minimaliste",
      title: "Minimalist black and white bathroom",
      subtitle: "Walk-in shower in black marble-effect tiles and white vanity unit",
      description: [
        "This project proves that a compact space can deliver a high-end result. The walk-in shower is clad in large black tiles with white marble veining, with a built-in storage niche in the same finish.",
        "A fixed frameless tempered glass panel separates the shower area from the rest of the room. The white vanity on metal legs and the large frameless mirror reinforce the clean, bright look.",
        "We carried out concealed plumbing, ultra-low tray installation, thermostatic shower column connection and vanity and tap fitting.",
      ],
      images: chantier4ImagesEn,
    },
    {
      slug: "douche-italienne-faience-bois",
      title: "Walk-in shower with wood-effect wall tiles",
      subtitle: "Shower area renovation with ultra-low tray and fixed glass panel",
      description: [
        "This project highlights a complete shower area renovation combining modernity and warmth. We installed a walk-in shower with a white ultra-low tray and a fixed tempered glass panel for a clean look.",
        "Wood-effect wall tiles laid in a staggered pattern bring a natural, cosy feel to the room. A chrome shower column with rain head and a white wall-mounted vanity complete the ensemble.",
        "Plumbing work included floor drainage, supply to both shower points and thermostatic mixer installation, coordinated with the wall tiling.",
      ],
      images: chantier5ImagesEn,
    },
    {
      slug: "renovation-bleue-hexagonale",
      title: "Full renovation in deep blue tones",
      subtitle: "Teal zellige shower, hexagonal mosaic floor and light wood vanity",
      description: [
        "This project illustrates an elegant blend of natural wood and deep blue tones. The spacious walk-in shower is clad in small teal wall tiles, complemented by a hexagonal mosaic floor in varied shades.",
        "The light wood vanity, topped with a vessel basin on a dark countertop, adds warmth. A vertical towel warmer and chrome tapware complete a decidedly contemporary ensemble.",
        "HFE handled complete plumbing: hot and cold supply, drainage, towel warmer connection and tap installation, working with our partner for tiling and finishes.",
      ],
      images: chantier6ImagesEn,
    },
    {
      slug: "salle-de-bain-vintage-industrielle",
      title: "Vintage meets industrial design",
      subtitle: "Double vessel sinks on wooden sideboard, terracotta tiles and black atelier shower screen",
      description: [
        "This bathroom combines vintage charm with industrial modernity. A mid-century wooden sideboard was converted into a double vanity, topped with two white vessel basins and brushed gold tapware.",
        "The feature wall in terracotta-effect tiles, in warm patinated tones, structures the entire room. The walk-in shower, defined by a large black atelier-style glass partition, is fitted with a shower column matching the gold tapware.",
        "Our team completed all sanitary connections, concealed shower plumbing and installation of the two water points on the vanity unit.",
      ],
      images: chantier7ImagesEn,
    },
    {
      slug: "douche-double-spa-industriel",
      title: "High-end double spa shower",
      subtitle: "Two recessed rain heads, wood-effect tiles and white subway tiles",
      description: [
        "This high-end project features a double walk-in shower designed as a true wellness space. Two large square rain heads are recessed into the ceiling, complemented by two wall hand showers and a three-outlet thermostatic control.",
        "The contrast between wood-effect tiles on the floor and back wall, and white subway tiles with dark grout on the side walls, creates a modern spa atmosphere. A built-in tiled bench and a black atelier partition with frosted glass panels structure the space.",
        "The complexity of this project lay in concealed plumbing: dual supply, two linear floor drains and connection of six shower points. HFE coordinated all work with the tiler for a flawless result.",
      ],
      images: chantier8ImagesEn,
    },
  ] satisfies readonly ProjectBase[],
  cta: {
    title: "Planning a bathroom renovation?",
    subtitle: "Free on-site survey, quote within 72 hours — HFE in Lille and the metropolitan area.",
  },
} as const;

export function getProjectsSalleDeBainContent(locale: Locale) {
  const content = locale === "en" ? en : fr;
  return { ...content, projects: buildProjects(content.projects, locale, getProjectEnrichment) };
}

export type ProjectsSalleDeBainContent = ReturnType<typeof getProjectsSalleDeBainContent>;
