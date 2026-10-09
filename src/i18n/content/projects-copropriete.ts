import type { Locale } from "../config";
import type { ProjectBase, ProjectImage } from "./projects-shared";
import { buildProjects } from "./projects-shared";
import { getProjectEnrichment } from "./projects-enrichment";

const heroImageFr: ProjectImage = {
  src: "/projet/copropriete/hero.jpg",
  alt: "Pompe à chaleur en cascade pour une copropriété — installation de pompes à chaleur Panasonic en toiture-terrasse par Hecker & Frères Énergie (HFE) à Lille",
  width: 1024,
  height: 693,
};

const heroImageEn: ProjectImage = {
  src: "/projet/copropriete/hero.jpg",
  alt: "Cascade heat pump installation for a co-ownership building — Panasonic heat pumps on a flat roof by Hecker & Frères Énergie (HFE) in Lille",
  width: 1024,
  height: 693,
};

const chantier1ImagesFr: ProjectImage[] = [
  { src: "/projet/copropriete/projet1/1.jpg", alt: "Cascade de 2 pompes à chaleur Panasonic Big Aquarea 60 kW installées en extérieur pour une copropriété de studios", width: 481, height: 640 },
  { src: "/projet/copropriete/projet1/2.jpg", alt: "Pose d'une pompe à chaleur Panasonic Big Aquarea T-CAP avec raccordements hydrauliques sur mur en briques", width: 481, height: 640 },
  { src: "/projet/copropriete/projet1/3.jpg", alt: "Bouteille de découplage Thermador 400 L et réseau hydraulique en acier dans la chaufferie rénovée", width: 481, height: 640 },
  { src: "/projet/copropriete/projet1/4.jpg", alt: "Réseau hydraulique principal en diamètre 42 avec vannes sur mur en briques — installation collective HFE", width: 481, height: 640 },
];

const chantier1ImagesEn: ProjectImage[] = [
  { src: "/projet/copropriete/projet1/1.jpg", alt: "Cascade of 2 Panasonic Big Aquarea 60 kW heat pumps installed outdoors for a studio flat co-ownership building", width: 481, height: 640 },
  { src: "/projet/copropriete/projet1/2.jpg", alt: "Panasonic Big Aquarea T-CAP heat pump installation with hydraulic connections on a brick wall", width: 481, height: 640 },
  { src: "/projet/copropriete/projet1/3.jpg", alt: "400-litre Thermador decoupling vessel and steel hydraulic network in the renovated plant room", width: 481, height: 640 },
  { src: "/projet/copropriete/projet1/4.jpg", alt: "Main 42 mm hydraulic pipework with valves on a brick wall — HFE collective installation", width: 481, height: 640 },
];

const chantier2ImagesFr: ProjectImage[] = [
  { src: "/projet/copropriete/projet2/4.jpg", alt: "Cascade de 5 pompes à chaleur Panasonic Aquarea Haute Puissance installées en toiture-terrasse d'une copropriété", width: 1024, height: 768 },
  { src: "/projet/copropriete/projet2/1.jpg", alt: "Chaufferie collective rénovée — ballon et tuyauterie en acier avec circulateur dans une cave en briques", width: 768, height: 1024 },
  { src: "/projet/copropriete/projet2/3.jpg", alt: "Bouteille de mélange et tuyauterie isolée dans la chaufferie — circulateur DAB et vannes de régulation", width: 768, height: 1024 },
  { src: "/projet/copropriete/projet2/2.jpg", alt: "Unités extérieures Panasonic R32 en toiture — raccordements électriques et liaisons frigorifiques calorifugées", width: 1024, height: 768 },
];

const chantier2ImagesEn: ProjectImage[] = [
  { src: "/projet/copropriete/projet2/4.jpg", alt: "Cascade of 5 Panasonic Aquarea High Power heat pumps installed on a co-ownership flat roof", width: 1024, height: 768 },
  { src: "/projet/copropriete/projet2/1.jpg", alt: "Renovated collective plant room — tank and steel pipework with circulator pump in a brick cellar", width: 768, height: 1024 },
  { src: "/projet/copropriete/projet2/3.jpg", alt: "Mixing vessel and insulated pipework in the plant room — DAB circulator and control valves", width: 768, height: 1024 },
  { src: "/projet/copropriete/projet2/2.jpg", alt: "Panasonic R32 outdoor units on roof — electrical connections and insulated refrigerant lines", width: 1024, height: 768 },
];

const fr = {
  seo: {
    title: "PAC collective air-eau copropriété à Lille — réalisations | HFE",
    description:
      "Découvrez deux chantiers de PAC collective air-eau en copropriété réalisés par HFE : remplacement de chaudières fioul par des cascades Panasonic, régulation sur mesure et économies d'énergie.",
    keywords: [
      "PAC collective copropriété Lille",
      "PAC air-eau copropriété",
      "pompe à chaleur collective immeuble",
      "remplacement chaudière fioul copropriété",
      "cascade pompes à chaleur copropriété",
    ],
  },
  breadcrumbs: [
    { name: "Accueil", url: "/" },
    { name: "Copropriété", url: "/copropriete" },
    { name: "PAC collective copropriété", url: "/realisations/pac-collective-copropriete" },
  ],
  hero: {
    badge: "Nos réalisations",
    title: "PAC collective air-eau pour copropriété",
    description:
      "Remplacement de chaudières fioul par des cascades de pompes à chaleur air-eau Panasonic : découvrez deux chantiers de PAC collective réalisés par Hecker & Frères Énergie (HFE) en copropriété.",
    ctaQuote: "Demander un devis",
    image: heroImageFr,
  },
  intro: {
    title: "PAC collective air-eau en copropriété",
    paragraphs: [
      "En copropriété, la modernisation de la chaufferie collective est l'un des leviers les plus efficaces pour réduire les charges, supprimer la dépendance au fioul et améliorer le confort de tous les occupants.",
      "HFE conçoit et réalise des installations en cascade de pompes à chaleur Panasonic, adaptées aux besoins réels du bâtiment : chauffage, production d'eau chaude sanitaire, stockage, hydraulique et régulation intelligente.",
    ],
    advantagesTitle: "Les atouts de la cascade PAC en copropriété",
    advantages: [
      "Puissance modulée selon la demande réelle du bâtiment.",
      "Réduction des démarrages et amélioration du rendement global.",
      "Alternance des machines pour répartir l'usure.",
      "Suppression des énergies fossiles et des émissions de CO₂.",
      "Régulation adaptée : constructeur ou sur mesure selon le projet.",
      "Économies d'exploitation significatives à long terme.",
    ],
    closing: {
      title: "Une expertise adaptée aux immeubles collectifs",
      text: "Chaque copropriété est différente. HFE dimensionne l'installation en tenant compte du nombre de lots, des besoins chauffage/ECS, de l'hydraulique existante et des objectifs du syndic. De l'étude à la mise en service, nous assurons une installation fiable, stable et optimisée.",
    },
  },
  projectLabel: "Chantier",
  projects: [
    {
      slug: "cascade-5-pac-11-logements-panasonic",
      title: "Cascade 5 PAC — 11 logements",
      subtitle: "Remplacement d'une chaudière fioul 234 kW par 5 PAC Panasonic Aquarea Haute Puissance 16 kW (80 kW)",
      description: [
        "Dans le cadre de la rénovation énergétique d'un bâtiment collectif comprenant 11 logements de 88 m² (environ 968 m² chauffés), l'ancienne chaufferie équipée d'une chaudière fioul de 234 kW a été remplacée par une installation composée de 5 pompes à chaleur Panasonic Aquarea Haute Puissance de 16 kW, montées en cascade — soit 80 kW au total. Cette nouvelle installation assure exclusivement le chauffage du bâtiment.",
        "Cette opération visait à réduire fortement les consommations énergétiques, supprimer la dépendance aux énergies fossiles, diminuer les coûts d'exploitation, améliorer le rendement global, moderniser la chaufferie et bénéficier d'une régulation intelligente adaptée aux besoins réels du bâtiment.",
        "Les cinq pompes à chaleur Panasonic fonctionnent en cascade grâce à la régulation constructeur Panasonic. En période de faible demande, une seule PAC fonctionne ; lorsque les besoins augmentent, une deuxième, puis une troisième, quatrième ou cinquième PAC démarrent progressivement. Cette modulation évite les surconsommations, limite les démarrages intempestifs, améliore le rendement saisonnier et répartit uniformément les heures de fonctionnement.",
        "Les réseaux principaux ont été réalisés en acier diamètre 54 mm, permettant de véhiculer les débits nécessaires à la puissance totale installée avec une faible perte de charge, une bonne répartition des débits et un fonctionnement optimal des circulateurs.",
        "Une bouteille de mélange de 800 litres a été installée entre le circuit primaire PAC et le réseau de chauffage. Elle assure le découplage hydraulique entre le circuit des PAC et le circuit de distribution, augmente le volume d'eau (limite les cycles courts, améliore l'inertie thermique, stabilise les températures, protège les compresseurs) et agit comme tampon thermique pour absorber les variations rapides de charge.",
        "Afin de garantir un fonctionnement identique des cinq PAC, chaque retour de pompe à chaleur a été équipé d'une vanne d'équilibrage TA. Ces vannes permettent d'obtenir le débit nominal sur chaque machine, d'éviter qu'une PAC travaille davantage qu'une autre et d'assurer une répartition homogène des charges — point essentiel sur une installation multi-générateurs.",
        "L'installation est pilotée par la régulation cascade Panasonic qui gère le démarrage et l'arrêt des PAC, le séquencement, l'alternance automatique, la température de départ selon la courbe de chauffe, l'optimisation du nombre de PAC en fonctionnement et les sécurités (températures, débits, pressions, alarmes).",
        "Comparaison avant/après : ancienne installation — chaudière fioul 234 kW, environ 25 000 € de fioul/an, entretien important, émissions élevées de CO₂. Nouvelle installation — 5 PAC Panasonic 16 kW (80 kW), environ 12 000 € d'électricité/an, énergie renouvelable valorisée, régulation intelligente, maintenance réduite.",
        "Gain annuel : 25 000 € − 12 000 € = 13 000 € d'économies par an, soit 52 % de réduction des dépenses énergétiques, tout en conservant le même niveau de confort pour les occupants. Au-delà de l'aspect financier, le remplacement du fioul par des pompes à chaleur réduit considérablement les émissions de gaz à effet de serre grâce au coefficient de performance (COP).",
        "Le remplacement de la chaudière fioul de 234 kW par une cascade de 5 PAC Panasonic de 16 kW, associée à une bouteille de mélange de 800 litres, un réseau principal en diamètre 54 mm, un équilibrage hydraulique par vannes TA et une régulation cascade Panasonic complète, a permis de moderniser entièrement la chaufferie. Cette réalisation constitue un exemple concret de transition énergétique réussie dans le logement collectif.",
      ],
      images: chantier2ImagesFr,
    },
    {
      slug: "cascade-2-pac-19-studios-panasonic",
      title: "Cascade 2 PAC — 19 studios",
      subtitle: "Remplacement d'une chaudière fioul 134 kW par 2 PAC Panasonic Big Aquarea T-CAP 30 kW (60 kW)",
      description: [
        "Installation réalisée : remplacement d'une chaudière fioul de 134 kW, qui assurait le chauffage du bâtiment et la production d'eau chaude sanitaire en instantané via échangeur à plaques, par une installation en cascade de 2 pompes à chaleur Panasonic Big Aquarea T-CAP Série M de 30 kW, soit 60 kW au total.",
        "La gamme Big Aquarea T-CAP Série M est adaptée aux immeubles collectifs, à la rénovation, aux installations centralisées chauffage/ECS, avec possibilité de cascade jusqu'à 300 kW et départ d'eau jusqu'à 75 °C selon les configurations.",
        "Le bâtiment comprend 19 studios. L'installation assure désormais le chauffage collectif, la production d'eau chaude sanitaire, l'alimentation de deux ballons ECS de 380 litres (760 litres de stockage total) et la gestion complète par une nouvelle régulation créée sur mesure.",
        "Les deux PAC Panasonic fonctionnent en cascade : elles ne démarrent pas forcément ensemble. La régulation pilote les machines selon les besoins réels du bâtiment. En faible demande, une seule PAC peut fonctionner ; lorsque les besoins augmentent, la deuxième vient en appoint. Ce fonctionnement limite les démarrages inutiles, améliore le rendement global et répartit l'usure entre les deux machines.",
        "La puissance installée de 60 kW remplace une chaudière fioul de 134 kW, mais ce n'est pas une sous-puissance directe : l'ancienne chaudière était dimensionnée pour produire l'ECS en instantané, ce qui demande une très forte puissance ponctuelle. Avec les nouveaux ballons de stockage, l'énergie est produite progressivement, ce qui permet de réduire fortement la puissance nécessaire.",
        "Les réseaux principaux ont été réalisés en tube diamètre 42, afin de permettre un débit suffisant entre les PAC, la bouteille de découplage, les départs chauffage et la production ECS. Une bouteille de découplage Thermador de 400 litres a été installée : elle augmente le volume d'eau de l'installation, limite les courts cycles, protège les PAC et assure le découplage hydraulique entre le primaire et le secondaire.",
        "L'ancienne chaudière fioul produisait l'eau chaude en instantané avec un échangeur à plaques. Le nouveau principe repose sur deux ballons de 380 L (760 L au total). Les PAC réchauffent les ballons selon une consigne définie par la régulation. Le stockage permet de couvrir les puisages des 19 studios sans puissance instantanée aussi importante. Une programmation peut favoriser la production ECS sur les plages les plus favorables : température extérieure douce, heures creuses, anticipation des pics, relance automatique après fort puisage.",
        "La régulation a été entièrement créée pour gérer la cascade des deux PAC, la priorité ECS, la température de départ chauffage, la bouteille de découplage, les circulateurs primaires et secondaires, les sondes de température, les demandes chauffage/ECS, l'alternance des PAC et les sécurités de température et de débit. L'objectif : une installation stable, économique et durable, sans démarrages excessifs.",
        "L'installation a nécessité 3 semaines à 3 personnes, soit environ 315 heures (base 35 h/semaine) ou 360 heures (base 40 h/semaine). Ce temps comprend la dépose de l'ancienne chaufferie, la pose des PAC, les réseaux en diamètre 42, la bouteille de découplage 400 L, les ballons ECS, les circulateurs, les vannes, les sondes, le câblage et la création complète de la régulation.",
        "Les économies viennent de la suppression du fioul, du rendement supérieur des PAC (COP) et du stockage ECS au lieu d'une production instantanée énergivore. À titre indicatif, si l'ancienne chaudière consommait 10 000 L de fioul/an (~100 000 kWh PCI), l'énergie utile serait d'environ 85 000 kWh à 85 % de rendement. Avec un COP saisonnier entre 2,5 et 3,2, la consommation électrique serait d'environ 26 500 à 34 000 kWh/an — l'économie dépend du prix du fioul, du kWh électrique et des réglages.",
        "Cette installation modernise complètement la chaufferie : elle remplace une production fioul ancienne et énergivore par une solution PAC en cascade de 60 kW, plus progressive, mieux régulée et adaptée au fonctionnement réel d'un immeuble de 19 studios. La bouteille de découplage de 400 L, les réseaux en diamètre 42, les deux ballons ECS de 380 L et la régulation sur mesure permettent une installation fiable, stable et optimisée.",
      ],
      images: chantier1ImagesFr,
    },
  ] satisfies readonly ProjectBase[],
  cover: heroImageFr,
  cta: {
    title: "Un projet de PAC collective en copropriété ?",
    subtitle: "Étude gratuite, devis sous 72h, accompagnement MaPrimeRénov' Copropriété par HFE.",
  },
} as const;

const en = {
  seo: {
    title: "Collective air-to-water heat pump co-ownership projects in Lille | HFE",
    description:
      "Discover two collective air-to-water heat pump projects by HFE in co-ownership buildings: oil boiler replacement with Panasonic cascade heat pumps, bespoke controls and significant energy savings.",
    keywords: [
      "collective air-to-water heat pump co-ownership Lille",
      "co-ownership heat pump project",
      "oil boiler replacement co-ownership",
      "cascade heat pumps apartment building",
      "Panasonic collective heating",
    ],
  },
  breadcrumbs: [
    { name: "Home", url: "/en" },
    { name: "Co-ownership", url: "/en/co-ownership" },
    { name: "Collective air-to-water heat pumps", url: "/en/projects/co-ownership-air-to-water-heat-pump" },
  ],
  hero: {
    badge: "Our projects",
    title: "Collective air-to-water heat pump for co-ownership",
    description:
      "Oil boiler replacement with Panasonic air-to-water heat pump cascades: discover two collective heat pump projects completed by Hecker & Frères Énergie (HFE) in co-ownership buildings.",
    ctaQuote: "Request a quote",
    image: heroImageEn,
  },
  intro: {
    title: "Collective air-to-water heat pumps in co-ownership",
    paragraphs: [
      "In co-ownership buildings, upgrading the collective plant room is one of the most effective ways to cut service charges, eliminate oil dependency and improve comfort for all residents.",
      "HFE designs and installs Panasonic cascade heat pump systems tailored to the building's real needs: heating, domestic hot water, storage, hydraulics and intelligent controls.",
    ],
    advantagesTitle: "Benefits of cascade heat pumps in co-ownership",
    advantages: [
      "Output modulated to the building's actual demand.",
      "Fewer start cycles and improved overall efficiency.",
      "Machine rotation to spread wear evenly.",
      "Elimination of fossil fuels and CO₂ emissions.",
      "Controls adapted to each project: manufacturer or bespoke.",
      "Significant long-term operating savings.",
    ],
    closing: {
      title: "Expertise tailored to apartment buildings",
      text: "Every co-ownership is different. HFE sizes each installation based on the number of units, heating/DHW requirements, existing hydraulics and the syndic's goals. From survey to commissioning, we deliver a reliable, stable and optimised installation.",
    },
  },
  projectLabel: "Project",
  projects: [
    {
      slug: "5-hp-cascade-11-units-panasonic",
      title: "5 HP cascade — 11 dwellings",
      subtitle: "Replacement of a 234 kW oil boiler with 5 Panasonic Aquarea High Power 16 kW heat pumps (80 kW)",
      description: [
        "As part of the energy renovation of a collective residential building with 11 flats of 88 m² each (approximately 968 m² heated), the old plant room with a 234 kW oil boiler was replaced by an installation of 5 Panasonic Aquarea High Power heat pumps at 16 kW each, in cascade — 80 kW total. The new system provides heating only.",
        "The project aimed to significantly reduce energy consumption, eliminate fossil fuel dependency, cut operating costs, improve overall efficiency, modernise the plant room and benefit from intelligent controls adapted to the building's real needs.",
        "The five Panasonic heat pumps operate in cascade via Panasonic manufacturer controls. At low demand, a single unit runs; as needs increase, a second, third, fourth or fifth unit starts progressively. This modulation avoids over-consumption, limits unnecessary starts, improves seasonal efficiency and distributes running hours evenly across all units.",
        "Main pipework was installed in 54 mm steel, carrying the flows required for total installed output with low pressure drop, good flow distribution and optimal pump operation.",
        "An 800-litre mixing vessel was installed between the heat pump primary circuit and the heating distribution network. It provides hydraulic decoupling between the heat pump circuit and the distribution circuit, increases water volume (limiting short cycles, improving thermal inertia, stabilising temperatures, protecting compressors) and acts as a thermal buffer to absorb rapid load variations.",
        "To ensure identical operation of all five heat pumps, each return was fitted with a TA balancing valve. These valves deliver nominal flow on each unit, prevent one heat pump from working harder than another and ensure even load distribution — essential on multi-generator installations.",
        "The installation is managed by Panasonic cascade controls handling unit start/stop, sequencing, automatic rotation, flow temperature via the heating curve, optimisation of the number of running units and safety monitoring (temperatures, flows, pressures, alarms).",
        "Before/after comparison: old installation — 234 kW oil boiler, approximately €25,000/year in oil, significant maintenance, high CO₂ emissions. New installation — 5 Panasonic 16 kW heat pumps (80 kW), approximately €12,000/year in electricity, renewable energy valorised, intelligent controls, reduced maintenance.",
        "Annual saving: €25,000 − €12,000 = €13,000 per year, a 52% reduction in energy spending while maintaining the same comfort level for residents. Beyond the financial aspect, replacing oil with heat pumps significantly reduces greenhouse gas emissions thanks to the coefficient of performance (COP).",
        "Replacing the 234 kW oil boiler with a cascade of 5 Panasonic 16 kW heat pumps, together with an 800-litre mixing vessel, 54 mm main pipework, TA balancing valves on each return and full Panasonic cascade controls, has fully modernised the plant room. This project is a concrete example of successful energy transition in collective housing.",
      ],
      images: chantier2ImagesEn,
    },
    {
      slug: "2-hp-cascade-19-studios-panasonic",
      title: "2 HP cascade — 19 studios",
      subtitle: "Replacement of a 134 kW oil boiler with 2 Panasonic Big Aquarea T-CAP 30 kW heat pumps (60 kW)",
      description: [
        "Work carried out: replacement of a 134 kW oil boiler supplying building heating and instantaneous domestic hot water via a plate heat exchanger, with a cascade installation of 2 Panasonic Big Aquarea T-CAP Series M heat pumps at 30 kW each — 60 kW total.",
        "The Big Aquarea T-CAP Series M range is designed for apartment buildings, renovation projects and centralised heating/DHW installations, with cascade capability up to 300 kW and flow temperatures up to 75 °C depending on configuration.",
        "The building comprises 19 studio flats. The new installation now provides collective heating, domestic hot water production, supply to two 380-litre DHW tanks (760 litres total storage) and full management through bespoke controls.",
        "The two Panasonic heat pumps operate in cascade: they do not necessarily start together. The controls manage the units according to the building's real demand. At low load, a single unit may run; as demand rises, the second unit provides backup. This limits unnecessary starts, improves overall efficiency and spreads wear between both machines.",
        "The installed 60 kW output replaces a 134 kW oil boiler, but this is not a direct undersizing: the old boiler was sized for instantaneous DHW production, requiring very high peak output. With the new storage tanks, energy is produced progressively, allowing a significant reduction in required output.",
        "Main pipework was installed in 42 mm diameter tubing to ensure adequate flow between the heat pumps, decoupling vessel, heating branches and DHW production. A 400-litre Thermador decoupling vessel was installed: it increases system water volume, limits short cycling, protects the heat pumps and provides hydraulic decoupling between primary and secondary circuits.",
        "The old oil boiler produced hot water instantaneously via a plate heat exchanger. The new principle relies on two 380-litre tanks (760 litres total). The heat pumps reheat the tanks to a setpoint defined by the controls. Storage covers the draw-off of 19 studios without the high instantaneous output previously required. Scheduling can favour DHW production during milder outdoor temperatures, off-peak hours, anticipated peak demand and automatic restart after heavy use.",
        "The controls were fully designed in-house to manage the two-unit cascade, DHW priority, heating flow temperature, the decoupling vessel, primary and secondary pumps, temperature sensors, heating/DHW demands, unit rotation and temperature/flow safety devices. The goal: a stable, economical and durable installation without excessive cycling.",
        "The installation took 3 weeks with a team of 3 — approximately 315 hours (35 h/week) or 360 hours (40 h/week). This includes removal of the old plant room, heat pump installation, 42 mm pipework, 400-litre decoupling vessel, DHW tanks, pumps, valves, sensors, wiring and full control system programming.",
        "Savings come from eliminating oil, the higher efficiency of heat pumps (COP) and DHW storage instead of energy-intensive instantaneous production. As an indication, if the old boiler consumed 10,000 litres of oil per year (~100,000 kWh PCI), useful energy would be around 85,000 kWh at 85% efficiency. With a seasonal COP between 2.5 and 3.2, electricity consumption would be approximately 26,500 to 34,000 kWh/year — actual savings depend on oil and electricity prices and system settings.",
        "This installation fully modernises the plant room: it replaces an old, energy-intensive oil system with a 60 kW cascade heat pump solution that is more progressive, better controlled and suited to the real operation of a 19-studio building. The 400-litre decoupling vessel, 42 mm pipework, two 380-litre DHW tanks and bespoke controls deliver a reliable, stable and optimised installation.",
      ],
      images: chantier1ImagesEn,
    },
  ] satisfies readonly ProjectBase[],
  cover: heroImageEn,
  cta: {
    title: "Planning a collective heat pump project in co-ownership?",
    subtitle: "Free survey, quote within 72 hours, MaPrimeRénov' Copropriété support by HFE.",
  },
} as const;

export function getProjectsCoproprieteContent(locale: Locale) {
  const content = locale === "en" ? en : fr;
  return { ...content, projects: buildProjects(content.projects, locale, getProjectEnrichment) };
}

export type ProjectsCoproprieteContent = ReturnType<typeof getProjectsCoproprieteContent>;
