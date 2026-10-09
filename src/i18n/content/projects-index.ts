import type { Locale } from "../config";
import type { RouteId } from "../routes";
import { getProjectsPacAirEauContent } from "./projects-pac-air-eau";
import { getClimatisationMonoSplitContent } from "./climatisation-mono-split";
import { getProjectsClimContent } from "./projects-climatisation";
import { getProjectsPetitTertiaireContent } from "./projects-petit-tertiaire";
import { getProjectsDrvTertiaireContent } from "./projects-drv-tertiaire";
import { getProjectsPlancherChauffantContent } from "./projects-plancher-chauffant";
import { getProjectsRemplacementChaudiereContent } from "./projects-remplacement-chaudiere";
import { getProjectsCoproprieteContent } from "./projects-copropriete";
import { getProjectsBallonThermodynamiqueContent } from "./projects-ballon-thermodynamique";
import { getProjectsDepannagePlomberieContent } from "./projects-depannage-plomberie";
import { getProjectsSalleDeBainContent } from "./projects-salle-de-bain";
import { getProjectsAdoucisseurSelContent } from "./projects-adoucisseur-sel";
import { getProjectsAdoucisseurCo2Content } from "./projects-adoucisseur-co2";
import { getProjectsDragoContent } from "./projects-drago";
import { getProjectsRadiateursNouvelleGenerationContent } from "./projects-radiateurs-nouvelle-generation";
import { getProjectsTetesThermostatiquesContent } from "./projects-tetes-thermostatiques";
import { getProjectsTetesThermostatiquesConnecteesContent } from "./projects-tetes-thermostatiques-connectees";
import { getProjectsGainableContent } from "./projects-gainable";

export interface ProjectsIndexItem {
  route: RouteId;
  title: string;
  description: string;
  /** Nombre de chantiers, dérivé du contenu de la page cible */
  count: number;
  cover: { src: string; alt: string; width: number; height: number };
}

function buildItems(locale: Locale): ProjectsIndexItem[] {
  const pacAirEau = getProjectsPacAirEauContent(locale);
  const clim = getProjectsClimContent(locale);
  const monoSplit = getClimatisationMonoSplitContent(locale);
  const petitTertiaire = getProjectsPetitTertiaireContent(locale);
  const drvTertiaire = getProjectsDrvTertiaireContent(locale);
  const plancher = getProjectsPlancherChauffantContent(locale);
  const remplacementChaudiere = getProjectsRemplacementChaudiereContent(locale);
  const copropriete = getProjectsCoproprieteContent(locale);
  const ballonThermo = getProjectsBallonThermodynamiqueContent(locale);
  const depannagePlomberie = getProjectsDepannagePlomberieContent(locale);
  const salleDeBain = getProjectsSalleDeBainContent(locale);
  const adoucisseurSel = getProjectsAdoucisseurSelContent(locale);
  const adoucisseurCo2 = getProjectsAdoucisseurCo2Content(locale);
  const drago = getProjectsDragoContent(locale);
  const radiateurs = getProjectsRadiateursNouvelleGenerationContent(locale);
  const tetesThermo = getProjectsTetesThermostatiquesContent(locale);
  const tetesThermoConnectees = getProjectsTetesThermostatiquesConnecteesContent(locale);
  const gainable = getProjectsGainableContent(locale);

  if (locale === "en") {
    return [
      {
        route: "projectsPacAirEau",
        title: "Air-to-water heat pump",
        description: "Gas boiler replacement, central heating creation, thermodynamic water heater and full system overhauls.",
        count: pacAirEau.projects.length,
        cover: { ...pacAirEau.projects[0].images[0] },
      },
      {
        route: "climatisationMonoSplit",
        title: "Single-split air conditioning",
        description: "One outdoor unit for a single indoor unit: ideal for cooling a living room or bedroom.",
        count: monoSplit.projects.length,
        cover: { ...monoSplit.projects[0].images[0] },
      },
      {
        route: "projectsClim",
        title: "Multi-split air conditioning",
        description: "One outdoor unit for several indoor units: Panasonic TZ68 tri-split, TZ42 air-to-air and 3Z68 with floor console and cassette.",
        count: clim.projects.length,
        cover: { ...clim.projects[0].images[0] },
      },
      {
        route: "projectsGainable",
        title: "Ducted air conditioning",
        description: "Discreet duct network for even heating and cooling, energy savings and improved EPC rating.",
        count: 1,
        cover: { ...gainable.cover },
      },
      {
        route: "projectsPetitTertiaire",
        title: "Small commercial air conditioning",
        description: "Panasonic multi-split for retail units, consulting rooms and small offices: discreet integration and zone-by-zone comfort.",
        count: petitTertiaire.projects.length,
        cover: { ...petitTertiaire.hero.image! },
      },
      {
        route: "projectsDrvTertiaire",
        title: "Commercial VRF system",
        description: "Mitsubishi VRF replacement at the Ibis Grand-Place hotel: two-pipe energy renovation with 69 indoor units and 6 rooftop groups.",
        count: drvTertiaire.projects.length,
        cover: { ...drvTertiaire.cover },
      },
      {
        route: "projectsPlancherChauffant",
        title: "Underfloor heating",
        description: "Low-temperature underfloor heating paired with an air-to-water heat pump for gentle, even warmth.",
        count: plancher.projects.length,
        cover: { ...plancher.projects[0].images[0] },
      },
      {
        route: "projectsRemplacementChaudiere",
        title: "Boiler replacement",
        description: "Heat pump, hybrid heat pump or condensing gas boiler: upgrade your heating system with HFE in Lille.",
        count: 1,
        cover: { ...remplacementChaudiere.cover },
      },
      {
        route: "projectsCopropriete",
        title: "Collective air-to-water heat pump",
        description: "Oil boiler replacement with Panasonic cascade air-to-water heat pumps in co-ownership buildings: heating, DHW and bespoke controls.",
        count: copropriete.projects.length,
        cover: { ...copropriete.cover },
      },
      {
        route: "projectsRadiateursNouvelleGeneration",
        title: "Next-generation radiators",
        description: "Low-temperature radiators, inertia units and towel rails — comfort, performance and energy savings.",
        count: 1,
        cover: { ...radiateurs.cover },
      },
      {
        route: "projectsTetesThermostatiques",
        title: "Thermostatic radiator valves",
        description: "Room-by-room temperature control, lower consumption and quick installation on existing hot-water radiators.",
        count: 1,
        cover: { ...tetesThermo.cover },
      },
      {
        route: "projectsTetesThermostatiquesConnectees",
        title: "Smart connected radiator valves",
        description: "Remote control via smartphone, schedules and heating savings with smart thermostatic valves.",
        count: 1,
        cover: { ...tetesThermoConnectees.cover },
      },
      {
        route: "projectsBallonThermodynamique",
        title: "Thermodynamic water heater",
        description: "Replacing an electric water heater with an Atlantic thermodynamic unit in a cellar, with expansion vessel.",
        count: ballonThermo.projects.length,
        cover: { ...ballonThermo.projects[0].images[0] },
      },
      {
        route: "projectsDepannagePlomberie",
        title: "Plumbing repairs",
        description: "Leak detection, tap replacement, toilet mechanisms, traps and sanitary fittings — fast response in Lille.",
        count: 1,
        cover: { ...depannagePlomberie.cover },
      },
      {
        route: "projectsSalleDeBain",
        title: "Bathroom & sanitary renovation",
        description: "Walk-in showers, baths, plumbing and sanitary fittings — turnkey bathroom renovation coordinated in Lille.",
        count: 1,
        cover: { ...salleDeBain.cover },
      },
      {
        route: "projectsAdoucisseurSel",
        title: "Salt water softener",
        description: "Salt water softener installation to treat hard water and protect thermodynamic water heaters and sanitary equipment.",
        count: adoucisseurSel.projects.length,
        cover: { ...adoucisseurSel.projects[0].images[0] },
      },
      {
        route: "projectsAdoucisseurCo2",
        title: "CO₂ water softener",
        description: "Eco-friendly CO₂ softener: no salt, no wastewater, minerals preserved — anti-limescale by HFE.",
        count: 1,
        cover: { ...adoucisseurCo2.cover },
      },
      {
        route: "projectsDrago",
        title: "DRAGO system",
        description: "Physical anti-limescale treatment: no salt, no electricity, minerals preserved — scale protection by HFE.",
        count: 1,
        cover: { ...drago.cover },
      },
    ];
  }

  return [
    {
      route: "projectsPacAirEau",
      title: "Pompe à chaleur air-eau",
      description: "Remplacement de chaudière gaz, création de réseau de chauffage central, chauffe-eau thermodynamique et remise à neuf de réseaux.",
      count: pacAirEau.projects.length,
      cover: { ...pacAirEau.projects[0].images[0] },
    },
    {
      route: "climatisationMonoSplit",
      title: "Climatisation mono-split",
      description: "Une unité extérieure pour une seule unité intérieure : idéal pour climatiser une pièce de vie ou une chambre.",
      count: monoSplit.projects.length,
      cover: { ...monoSplit.projects[0].images[0] },
    },
    {
      route: "projectsClim",
      title: "Climatisation multi-split",
      description: "Une unité extérieure pour plusieurs unités intérieures : tri-split Panasonic TZ68, PAC air-air TZ42 et 3Z68 avec console basse et cassette.",
      count: clim.projects.length,
      cover: { ...clim.projects[0].images[0] },
    },
    {
      route: "projectsGainable",
      title: "Climatisation gainable",
      description: "Réseau de gaines discret pour un chauffage et une climatisation homogènes, des économies d'énergie et une meilleure note DPE.",
      count: 1,
      cover: { ...gainable.cover },
    },
    {
      route: "projectsPetitTertiaire",
      title: "Petit tertiaire",
      description: "Multi-split Panasonic pour commerce, cabinet ou petit bureau : intégration discrète et confort zone par zone.",
      count: petitTertiaire.projects.length,
      cover: { ...petitTertiaire.hero.image! },
    },
    {
      route: "projectsDrvTertiaire",
      title: "Système DRV tertiaire",
      description: "Remplacement DRV Mitsubishi à l'Hôtel Ibis Grand-Place : rénovation énergétique bi-tube, 69 unités intérieures et 6 groupes en toiture.",
      count: drvTertiaire.projects.length,
      cover: { ...drvTertiaire.cover },
    },
    {
      route: "projectsPlancherChauffant",
      title: "Plancher chauffant",
      description: "Plancher chauffant basse température couplé à une pompe à chaleur air-eau pour une chaleur douce et homogène.",
      count: plancher.projects.length,
      cover: { ...plancher.projects[0].images[0] },
    },
    {
      route: "projectsRemplacementChaudiere",
      title: "Remplacement de chaudière",
      description: "Pompe à chaleur, PAC hybride ou chaudière gaz à condensation : modernisez votre chauffage avec HFE à Lille.",
      count: 1,
      cover: { ...remplacementChaudiere.cover },
    },
    {
      route: "projectsCopropriete",
      title: "PAC collective copropriété",
      description: "Remplacement de chaudière fioul par cascade de PAC air-eau Panasonic en immeuble collectif : chauffage, ECS et régulation sur mesure.",
      count: copropriete.projects.length,
      cover: { ...copropriete.cover },
    },
    {
      route: "projectsRadiateursNouvelleGeneration",
      title: "Radiateurs nouvelle génération",
      description: "Radiateurs basse température, à inertie et sèche-serviettes — confort, performance et économies d'énergie.",
      count: 1,
      cover: { ...radiateurs.cover },
    },
    {
      route: "projectsTetesThermostatiques",
      title: "Têtes thermostatiques",
      description: "Régulation pièce par pièce, réduction des consommations et installation rapide sur radiateurs à eau chaude existants.",
      count: 1,
      cover: { ...tetesThermo.cover },
    },
    {
      route: "projectsTetesThermostatiquesConnectees",
      title: "Têtes thermostatiques connectées",
      description: "Pilotage à distance via smartphone, programmation horaire et économies de chauffage avec des têtes connectées.",
      count: 1,
      cover: { ...tetesThermoConnectees.cover },
    },
    {
      route: "projectsBallonThermodynamique",
      title: "Ballon thermodynamique",
      description: "Remplacement d'un ballon électrique par un chauffe-eau thermodynamique Atlantic en cave, avec vase d'expansion sanitaire.",
      count: ballonThermo.projects.length,
      cover: { ...ballonThermo.projects[0].images[0] },
    },
    {
      route: "projectsDepannagePlomberie",
      title: "Dépannage plomberie",
      description: "Recherche de fuites, remplacement de robinetterie, mécanismes de chasse d'eau, siphons et équipements sanitaires — intervention rapide à Lille.",
      count: 1,
      cover: { ...depannagePlomberie.cover },
    },
    {
      route: "projectsSalleDeBain",
      title: "Sanitaire & salle de bain",
      description: "Douche à l'italienne, baignoire, plomberie et sanitaires — rénovation de salle de bain clé en main coordonnée à Lille.",
      count: 1,
      cover: { ...salleDeBain.cover },
    },
    {
      route: "projectsAdoucisseurSel",
      title: "Adoucisseur au sel",
      description: "Installation d'adoucisseur d'eau au sel pour traiter la dureté de l'eau et protéger chauffe-eau thermodynamique et équipements sanitaires.",
      count: adoucisseurSel.projects.length,
      cover: { ...adoucisseurSel.projects[0].images[0] },
    },
    {
      route: "projectsAdoucisseurCo2",
      title: "Adoucisseur au CO₂",
      description: "Adoucisseur écologique au CO₂ : sans sel, sans rejet d'eau, minéraux préservés — traitement anti-calcaire par HFE.",
      count: 1,
      cover: { ...adoucisseurCo2.cover },
    },
    {
      route: "projectsDrago",
      title: "Système DRAGO",
      description: "Dispositif anticalcaire physique : sans sel, sans électricité, minéraux préservés — protection contre l'entartrage par HFE.",
      count: 1,
      cover: { ...drago.cover },
    },
  ];
}

const fr = {
  seo: {
    title: "Nos réalisations à Lille | Chantiers PAC, climatisation, chauffage — HFE",
    description:
      "Découvrez tous les chantiers réalisés par Hecker & Frères Énergie (HFE) à Lille et métropole : PAC, climatisation, chauffage, plomberie et adoucisseurs d'eau.",
    keywords: [
      "réalisations HFE Lille",
      "chantiers pompe à chaleur Lille",
      "réalisations climatisation Lille",
      "chantier plancher chauffant",
      "avant après installation chauffage",
    ],
  },
  breadcrumbs: [
    { name: "Accueil", url: "/" },
    { name: "Nos réalisations", url: "/realisations" },
  ],
  hero: {
    badge: "Nos réalisations",
    title: "Tous nos chantiers en photos",
    description:
      "PAC, climatisation, plancher chauffant, radiateurs, plomberie et traitements d'eau : découvrez nos chantiers réels à Lille et métropole.",
    ctaQuote: "Demander un devis",
  },
  seeProjects: "Voir les chantiers",
  countLabel: (n: number) => `${n} chantier${n > 1 ? "s" : ""}`,
  cta: {
    title: "Votre projet mérite le même soin",
    subtitle: "Étude gratuite, devis sous 72h, accompagnement des aides par HFE.",
  },
} as const;

const en = {
  seo: {
    title: "Our projects in Lille | Heat pumps, air conditioning, heating — HFE",
    description:
      "Discover all the installations completed by Hecker & Frères Énergie (HFE) in Lille: heat pumps, air conditioning, heating, plumbing and water softeners.",
    keywords: [
      "HFE projects Lille",
      "heat pump installations Lille",
      "air conditioning projects Lille",
      "underfloor heating project",
      "before after heating installation",
    ],
  },
  breadcrumbs: [
    { name: "Home", url: "/en" },
    { name: "Our projects", url: "/en/projects" },
  ],
  hero: {
    badge: "Our projects",
    title: "All our installations in pictures",
    description:
      "Heat pumps, air conditioning, underfloor heating, radiators, plumbing and water treatment: discover our real installations in Lille and the metropolitan area.",
    ctaQuote: "Request a quote",
  },
  seeProjects: "View the installations",
  countLabel: (n: number) => `${n} installation${n > 1 ? "s" : ""}`,
  cta: {
    title: "Your project deserves the same care",
    subtitle: "Free survey, quote within 72 hours, grant support by HFE.",
  },
} as const;

export function getProjectsIndexContent(locale: Locale) {
  return {
    ...(locale === "en" ? en : fr),
    items: buildItems(locale),
  };
}

export type ProjectsIndexContent = ReturnType<typeof getProjectsIndexContent>;
