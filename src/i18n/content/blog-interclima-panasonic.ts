import type { Locale } from "../config";
import type { BlogArticleContent } from "./blog-article-types";

const URL_INSTALLATEUR =
  "https://linstallateur.fr/actualites/l-actu/a-interclima-panasonic-voit-grand-de-la-maison-au-tertiaire/7439";
const URL_CASE =
  "https://www.aircon.panasonic.eu/FR_fr/cases/case/hfe-remplacement-dune-chaudiere-fioul-par-2-big-aquarea-t-cap-pour-une-copropriete-de-19-studios/";

const DIR = "/assets/blog/interclima";
const IMG_PAC = `${DIR}/hfe-copropriete-lille-2-big-aquarea-t-cap.jpg`;
const IMG_STAND = `${DIR}/interclima-2026-stand-panasonic-hfe.jpg`;
const IMG_ECS = `${DIR}/hfe-copropriete-lille-ballons-ecs.jpg`;

const a = (url: string, label: string) =>
  `<a href="${url}" rel="noopener" target="_blank">${label}</a>`;

const fig = (src: string, alt: string, w: number, h: number, caption: string) => `
<figure class="my-6">
  <img src="${src}" alt="${alt}" width="${w}" height="${h}" loading="lazy" decoding="async" class="rounded-xl w-full h-auto" />
  <figcaption class="mt-2 text-sm text-neutral-500">${caption}</figcaption>
</figure>`;

const fr = {
  seo: {
    title: "Interclima 2026 : HFE mis en avant par Panasonic | HFE",
    description:
      "Au salon Interclima, Panasonic a présenté notre chantier : 2 PAC Big Aquarea T-CAP de 30 kW à la place d’une chaudière fioul de 134 kW, 19 studios à Lille.",
    keywords: [
      "Interclima 2026 Panasonic",
      "Big Aquarea T-CAP copropriété",
      "remplacer chaudière fioul copropriété Lille",
      "pompe à chaleur R290 copropriété",
      "PAC en cascade immeuble",
      "Hecker & Frères Énergie Panasonic",
    ],
  },
  breadcrumbs: [
    { name: "Accueil", url: "/" },
    { name: "Blog", url: "/blog" },
    { name: "Interclima 2026 : HFE et Panasonic", url: "/blog/interclima-panasonic-hfe-copropriete" },
  ],
  article: {
    headline: "Interclima 2026 : Panasonic met en avant notre chantier de copropriété à Lille",
    image: IMG_PAC,
    datePublished: "2026-11-02",
    dateModified: "2026-11-02",
    dateLabel: "Publié le 2 novembre 2026",
    excerpt:
      "Au salon Interclima à Paris, nous étions sur le stand Panasonic, qui a ensuite publié une étude de cas sur notre chantier : une chaudière fioul de 134 kW remplacée par deux pompes à chaleur de 30 kW dans un immeuble de 19 studios à Lille.",
  },
  hero: {
    badge: "Dans la presse",
    lead: "Interclima 2026 et étude de cas Panasonic",
  },
  intro: [
    "Fin septembre 2026, nous étions à Paris, sur le stand Panasonic du salon <strong>Interclima</strong>. Le magazine professionnel <em>L’Installateur</em> y a photographié l’équipe avec Thierry Ronat, Country Manager France de Panasonic Heating &amp; Cooling, devant la Big Aquarea T-CAP Série M, le modèle de pompe à chaleur que nous avons installé dans une copropriété lilloise.",
    "Panasonic a ensuite publié sur son site une <strong>étude de cas</strong> consacrée à ce chantier. Voici ce qu’est ce salon, ce que Panasonic y a montré, et le détail du chantier, avec les chiffres publiés par le fabricant.",
  ],
  sections: [
    {
      id: "interclima",
      title: "Interclima, c’est quoi ?",
      html: `
<p>Interclima est un salon professionnel organisé à Paris, consacré au <strong>génie climatique</strong> : tout ce qui sert à chauffer, rafraîchir, ventiler un bâtiment et à produire son eau chaude. Les fabricants y présentent leurs nouveaux produits aux installateurs, bureaux d’études et maîtres d’ouvrage. Le grand public n’y vient pas, mais c’est là que se dessinent les équipements qui arriveront chez vous dans les mois suivants.</p>
<p>Pour un installateur, c’est l’occasion de voir les nouveaux équipements avant leur arrivée sur les chantiers et d’échanger directement avec les fabricants. Nous y avons aussi raconté notre chantier de copropriété à <em>L’Installateur</em>.</p>
${fig(IMG_STAND, "Trois hommes posent sur le stand Panasonic du salon Interclima 2026, à côté d’une grande pompe à chaleur Big Aquarea T-CAP Série M grise", 1000, 615, "Sur le stand Panasonic à Interclima 2026 : Thierry Ronat (au milieu), Country Manager France de Panasonic Heating &amp; Cooling, avec l’équipe Hecker &amp; Frères Énergie devant la Big Aquarea T-CAP Série M. Photo L’Installateur.")}
`,
    },
    {
      id: "nouveautes-panasonic",
      title: "Ce que Panasonic a présenté au salon",
      html: `
<p>Selon ${a(URL_INSTALLATEUR, "L’Installateur")}, Panasonic a multiplié les annonces, de la maison individuelle aux bureaux et commerces (le <strong>tertiaire</strong>) :</p>
<ul>
  <li><strong>Aquarea Série N</strong> : une future PAC (pompe à chaleur) fabriquée en Europe, annoncée pour début 2027. Elle utilisera le fluide <strong>R454C</strong>, dont le GWP est de 148. Le <strong>GWP</strong> (potentiel de réchauffement global) mesure l’effet d’un gaz sur le climat comparé au CO₂ : plus il est bas, mieux c’est en cas de fuite.</li>
  <li><strong>Aquarea EcoFlex</strong> : chauffage par l’air et par l’eau, rafraîchissement et production d’ECS (eau chaude sanitaire) autour d’une seule unité extérieure. Nous l’avons détaillée dans <a href="{{path:blogNouveauteEcoflex}}">notre article sur l’EcoFlex</a>.</li>
  <li><strong>ECOi-W Aqua-G Evo</strong> : une PAC pour le tertiaire, au fluide <strong>R290</strong> (du propane, un fluide naturel au GWP très faible), en trois puissances de 60 à 100 kW, qui sera fabriquée à Tillières-sur-Avre, en Normandie.</li>
  <li>Une gamme de <strong>climatiseurs résidentiels</strong> revue, avec le Wi-Fi intégré aux unités murales et aux consoles, et la purification d’air nanoe X sur presque tous les modèles.</li>
</ul>
<p>Le fil conducteur : couvrir la maison, le logement collectif et le tertiaire, avec davantage de systèmes <strong>réversibles</strong> (qui chauffent l’hiver et rafraîchissent l’été). « Le secteur de la construction doit faire sa révolution confort d’été maintenant », a déclaré Thierry Ronat. Panasonic indique aussi que les modèles au R290 représentent déjà plus d’un tiers de ses ventes de PAC air/eau résidentielles.</p>
`,
    },
    {
      id: "chantier",
      title: "Le chantier présenté : 19 studios à Lille",
      html: `
<p>L’étude de cas publiée par ${a(URL_CASE, "Panasonic")} décrit un immeuble résidentiel des années 1920, à Lille : <strong>600 m²</strong> au total, <strong>19 studios de 31 m²</strong>. Certains studios avaient été isolés, mais pas tout l’immeuble. Le chauffage et l’eau chaude venaient d’une <strong>chaudière fioul de 134 kW</strong>.</p>
<p>Deux raisons ont poussé les copropriétaires à changer : la hausse du prix du fioul, et un mauvais <strong>DPE</strong> (diagnostic de performance énergétique, la note de A à G du logement). Un DPE trop bas peut empêcher de louer les appartements.</p>
<h3>La solution : deux PAC en cascade</h3>
<p>Nous avons installé <strong>deux pompes à chaleur Panasonic Big Aquarea T-CAP Série M de 30 kW</strong>, soit <strong>60 kW</strong> au total, au fluide R290. « En cascade » veut dire que les deux machines travaillent ensemble : une seule tourne quand il fait doux, les deux quand il fait froid.</p>
<p>Pourquoi 60 kW au lieu de 134 kW ? L’ancienne chaudière produisait l’eau chaude <strong>en instantané</strong>, à travers un échangeur à plaques : il fallait beaucoup de puissance pour chauffer l’eau au moment où quelqu’un ouvrait le robinet. Avec deux ballons de stockage, l’eau chaude est préparée à l’avance, et 60 kW suffisent. Il n’est plus nécessaire de surdimensionner l’installation.</p>
${fig(IMG_PAC, "Deux pompes à chaleur Panasonic Big Aquarea T-CAP grises posées sur des plots dans une courette en briques, devant l’entrée d’un parking", 1126, 691, "Les deux Big Aquarea T-CAP Série M de 30 kW installées dans la courette de l’immeuble. Photo Panasonic.")}
<h3>Les contraintes du chantier</h3>
<ul>
  <li><strong>Une courette étroite</strong> : il fallait des machines compactes, posées devant l’entrée du parking.</li>
  <li><strong>Les tuyaux au-dessus du garage</strong> : les liaisons hydrauliques (les tuyaux d’eau entre les PAC et la chaufferie) passent au-dessus de l’entrée. Il a fallu respecter la hauteur pour laisser passer les véhicules en toute sécurité.</li>
  <li><strong>Pas de coupure</strong> : le chantier, commencé en juin 2026, s’est fait sans arrêter l’ancien système. Des habitants se chauffaient encore, et tous devaient garder l’eau chaude.</li>
</ul>
<h3>Ce qui a été fait</h3>
<p>Trois personnes pendant <strong>trois semaines</strong> : dépose de l’ancienne chaufferie, pose des PAC, réseaux en diamètre 42, bouteille de découplage de 400 litres (un réservoir qui sépare le circuit des PAC de celui des radiateurs pour que chacun ait le bon débit), ballons d’eau chaude, circulateurs, vannes, sondes, câblage et création complète de la régulation.</p>
<p>Les <strong>radiateurs en fonte</strong> ont été conservés. Nous y avons ajouté des têtes thermostatiques, qui permettent de régler la température pièce par pièce.</p>
${fig(IMG_ECS, "Chaufferie en briques avec deux ballons de stockage beiges et un ballon d’eau chaude bleu", 1126, 691, "Dans la chaufferie, les ballons de stockage de l’eau chaude sanitaire. Photo Panasonic.")}
`,
    },
    {
      id: "chiffres",
      title: "Les chiffres du chantier",
      html: `
<div class="table-wrap"><table>
<thead><tr><th>Élément</th><th>Avant</th><th>Après</th></tr></thead>
<tbody>
<tr><td>Production de chaleur</td><td>Chaudière fioul de 134 kW</td><td>2 PAC Big Aquarea T-CAP Série M de 30 kW (60 kW)</td></tr>
<tr><td>Énergie</td><td>Fioul</td><td>Électricité, PAC au fluide R290 (propane, fluide naturel)</td></tr>
<tr><td>Eau chaude sanitaire</td><td>Instantanée par échangeur à plaques</td><td>760 L de stockage</td></tr>
<tr><td>Radiateurs</td><td>Fonte</td><td>Fonte conservée + têtes thermostatiques</td></tr>
<tr><td>Bâtiment</td><td colspan="2">Années 1920, 600 m², 19 studios de 31 m²</td></tr>
<tr><td>Durée des travaux</td><td colspan="2">3 semaines, 3 personnes, à partir de juin 2026</td></tr>
</tbody>
</table></div>
<p>La gamme Big Aquarea T-CAP Série M est prévue pour les immeubles collectifs et la rénovation : cascade possible jusqu’à 300 kW, eau de départ jusqu’à 75 °C selon les configurations. Grâce à la technologie <strong>T-CAP</strong> de Panasonic, ces PAC fonctionnent jusqu’à −28 °C dehors et gardent leur puissance sans résistance électrique d’appoint jusqu’à −20 °C.</p>
<p class="text-sm">Chiffres relevés le 2 novembre 2026 dans l’étude de cas Panasonic.</p>
`,
    },
    {
      id: "pour-quelle-copropriete",
      title: "Pour quelle copropriété cette solution convient-elle ?",
      html: `
<p>Ce type d’installation a du sens quand votre immeuble ressemble à celui-ci :</p>
<ul>
  <li><strong>Un chauffage collectif au fioul ou au gaz</strong>, avec une chaufferie commune qui fait aussi l’eau chaude.</li>
  <li><strong>Des radiateurs à eau</strong>, même anciens en fonte : la Série M peut produire une eau jusqu’à 75 °C selon les configurations, utile pour des radiateurs dimensionnés à l’époque pour une chaudière.</li>
  <li><strong>Un DPE qui bloque la location</strong> ou une facture de combustible qui grimpe.</li>
  <li><strong>Une place extérieure</strong>, même étroite (courette, toit-terrasse, cour), pour poser les machines.</li>
</ul>
<p>Avant tout devis, nous calculons les besoins réels du bâtiment : la plaque de l’ancienne chaudière ne donne pas la bonne puissance. Il faut aussi faire voter les travaux en assemblée générale. Nous expliquons les étapes, les aides et le comptage du chauffage sur notre page <a href="{{path:coOwnership}}">chauffage en copropriété</a>, et les différents types de PAC sur notre page <a href="{{path:heatPump}}">pompe à chaleur</a>.</p>
`,
    },
    {
      id: "presse",
      title: "Ce chantier dans la presse",
      html: `
<p>Ce même chantier a fait l’objet d’un article de La Voix du Nord le 30 octobre 2026 : nous y revenons dans <a href="{{path:blogReportageLvdnCopro}}">notre article sur le reportage de La Voix du Nord</a>. <em>L’Installateur</em> annonce de son côté un article plus détaillé dans ses prochaines colonnes.</p>
<p>Votre copropriété envisage de remplacer sa chaudière ? <a href="{{path:contact}}">Demandez une étude gratuite</a> : nous venons voir la chaufferie et l’emplacement possible des machines.</p>
`,
    },
  ],
  faq: {
    title: "Questions fréquentes",
    items: [
      {
        question: "Qu’est-ce que le salon Interclima ?",
        answer:
          "Un salon professionnel organisé à Paris, consacré au chauffage, à la climatisation, à la ventilation et à l’eau chaude. Les fabricants y présentent leurs nouveautés aux professionnels.",
      },
      {
        question: "Pourquoi 60 kW de PAC suffisent-ils à remplacer une chaudière de 134 kW ?",
        answer:
          "La chaudière produisait l’eau chaude en instantané, ce qui demandait beaucoup de puissance. Avec deux ballons de stockage, l’eau chaude est préparée à l’avance : selon Panasonic, 60 kW suffisent pour le chauffage et l’eau chaude des 19 studios.",
      },
      {
        question: "Peut-on garder les radiateurs en fonte ?",
        answer:
          "Oui, sur ce chantier ils ont été conservés, avec des têtes thermostatiques ajoutées. Il faut vérifier au cas par cas qu’ils chauffent assez avec la température d’eau de la PAC.",
      },
      {
        question: "Qu’est-ce que le R290 ?",
        answer:
          "C’est du propane utilisé comme fluide frigorigène. C’est un fluide naturel, dont l’effet sur le climat en cas de fuite est très faible comparé aux fluides plus anciens.",
      },
      {
        question: "Les habitants ont-ils été privés de chauffage pendant les travaux ?",
        answer:
          "Non. Le chantier a été mené sans couper l’ancien système : les habitants ont gardé le chauffage et l’eau chaude jusqu’à la bascule.",
      },
    ],
  },
  sources: {
    title: "Sources",
    consulted: "Pages consultées le 2 novembre 2026",
    items: [
      { label: "L’Installateur — « À Interclima, Panasonic voit grand, de la maison au tertiaire » (28/09/2026)", url: URL_INSTALLATEUR },
      { label: "Panasonic — Copropriété de 19 studios à Lille : remplacement d’une chaudière fioul par 2 BIG Aquarea T-CAP", url: URL_CASE },
    ],
  },
  related: {
    title: "À lire aussi sur hfe-energie.fr",
    links: [
      { label: "La Voix du Nord : PAC en copropriété", routeId: "blogReportageLvdnCopro" as const },
      { label: "Nouveauté : Panasonic Aquarea EcoFlex", routeId: "blogNouveauteEcoflex" as const },
      { label: "Chauffage en copropriété", routeId: "coOwnership" as const },
      { label: "Nos réalisations de PAC collective", routeId: "projectsCopropriete" as const },
      { label: "Pompe à chaleur à Lille", routeId: "heatPump" as const },
      { label: "Partenaire Panasonic", routeId: "panasonicPartner" as const },
    ],
  },
  cta: {
    title: "Un projet de chauffage pour votre copropriété ?",
    subtitle: "Visite de la chaufferie, calcul des besoins et étude gratuite dans la métropole lilloise.",
  },
} satisfies BlogArticleContent;

const en = {
  seo: {
    title: "Interclima 2026: HFE featured by Panasonic | HFE",
    description:
      "At Interclima, Panasonic showcased our project: 2 Big Aquarea T-CAP 30 kW heat pumps replacing a 134 kW oil boiler in a 19-studio building in Lille.",
    keywords: [
      "Interclima 2026 Panasonic",
      "Big Aquarea T-CAP apartment building",
      "replace oil boiler co-ownership Lille",
      "R290 heat pump apartment building",
      "cascade heat pumps",
      "Hecker & Frères Énergie Panasonic",
    ],
  },
  breadcrumbs: [
    { name: "Home", url: "/en" },
    { name: "Blog", url: "/en/blog" },
    { name: "Interclima 2026: HFE and Panasonic", url: "/en/blog/interclima-panasonic-hfe-co-ownership" },
  ],
  article: {
    headline: "Interclima 2026: Panasonic showcases our Lille co-ownership project",
    image: IMG_PAC,
    datePublished: "2026-11-02",
    dateModified: "2026-11-02",
    dateLabel: "Published 2 November 2026",
    excerpt:
      "At the Interclima trade show in Paris, we were on Panasonic’s stand; Panasonic then published a case study on our project: a 134 kW oil boiler replaced by two 30 kW heat pumps in a 19-studio building in Lille.",
  },
  hero: {
    badge: "In the press",
    lead: "Interclima 2026 and Panasonic case study",
  },
  intro: [
    "In late September 2026 we were in Paris, on Panasonic’s stand at the <strong>Interclima</strong> trade show. The trade magazine <em>L’Installateur</em> photographed our team with Thierry Ronat, Country Manager France of Panasonic Heating &amp; Cooling, in front of the Big Aquarea T-CAP M Series, the heat pump model we installed in a Lille co-ownership building.",
    "Panasonic then published a <strong>case study</strong> on this project. Here is what the show is, what Panasonic presented there, and the project in detail, with the figures published by the manufacturer.",
  ],
  sections: [
    {
      id: "interclima",
      title: "What is Interclima?",
      html: `
<p>Interclima is a professional trade show held in Paris, dedicated to <strong>building services</strong>: everything used to heat, cool and ventilate a building and to produce its hot water. Manufacturers present new products to installers, engineering firms and building owners.</p>
<p>For an installer, it is a chance to see new equipment before it reaches building sites and to talk directly with manufacturers. We also described our co-ownership project to <em>L’Installateur</em> there.</p>
${fig(IMG_STAND, "Three men posing on the Panasonic stand at Interclima 2026, next to a large grey Big Aquarea T-CAP M Series heat pump", 1000, 615, "On the Panasonic stand at Interclima 2026: Thierry Ronat (centre), Country Manager France of Panasonic Heating &amp; Cooling, with the Hecker &amp; Frères Énergie team in front of the Big Aquarea T-CAP M Series. Photo: L’Installateur.")}
`,
    },
    {
      id: "panasonic-news",
      title: "What Panasonic presented",
      html: `
<p>According to ${a(URL_INSTALLATEUR, "L’Installateur")}, Panasonic made announcements from homes to offices and shops (the <strong>commercial</strong> sector):</p>
<ul>
  <li><strong>Aquarea N Series</strong>: a future heat pump made in Europe, due early 2027, using <strong>R454C</strong> refrigerant with a GWP of 148. <strong>GWP</strong> (global warming potential) measures a gas’s climate effect compared with CO₂: the lower, the better if it leaks.</li>
  <li><strong>Aquarea EcoFlex</strong>: air and water heating, cooling and DHW (domestic hot water) around one outdoor unit. See <a href="{{path:blogNouveauteEcoflex}}">our EcoFlex article</a>.</li>
  <li><strong>ECOi-W Aqua-G Evo</strong>: a commercial heat pump using <strong>R290</strong> (propane, a natural refrigerant with a very low GWP), in three outputs from 60 to 100 kW, to be made in Tillières-sur-Avre, Normandy.</li>
  <li>A revised <strong>residential air conditioning</strong> range, with built-in Wi-Fi and nanoe X air purification on almost all models.</li>
</ul>
<p>The common thread: covering houses, apartment buildings and commercial buildings, with more <strong>reversible</strong> systems (heating in winter, cooling in summer). Panasonic also says R290 models already account for more than a third of its residential air-to-water heat pump sales.</p>
`,
    },
    {
      id: "project",
      title: "The project: 19 studios in Lille",
      html: `
<p>The ${a(URL_CASE, "Panasonic case study")} describes a 1920s residential building in Lille: <strong>600 m²</strong> in total, <strong>19 studios of 31 m²</strong>, partly insulated. Heating and hot water came from a <strong>134 kW oil boiler</strong>. Rising oil prices and a poor <strong>DPE</strong> (the French energy performance certificate, rated A to G, which can prevent letting) led the co-owners to change.</p>
<h3>The solution: two heat pumps in cascade</h3>
<p>We installed <strong>two 30 kW Panasonic Big Aquarea T-CAP M Series heat pumps</strong>, <strong>60 kW</strong> in total, using R290. “In cascade” means the two machines work together: one runs in mild weather, both when it is cold.</p>
<p>Why 60 kW instead of 134 kW? The old boiler made hot water <strong>instantly</strong> through a plate heat exchanger, which needed a lot of power. With two storage tanks, hot water is prepared in advance and 60 kW is enough.</p>
${fig(IMG_PAC, "Two grey Panasonic Big Aquarea T-CAP heat pumps on supports in a narrow brick courtyard, in front of a car park entrance", 1126, 691, "The two 30 kW Big Aquarea T-CAP M Series units in the building’s courtyard. Photo: Panasonic.")}
<h3>Constraints</h3>
<ul>
  <li><strong>A narrow courtyard</strong>: compact machines were needed, in front of the car park entrance.</li>
  <li><strong>Pipes above the garage</strong>: the water pipes between heat pumps and boiler room run above the entrance, at a height that keeps vehicles passing safely.</li>
  <li><strong>No shutdown</strong>: work started in June 2026 without switching off the old system, so residents kept heating and hot water.</li>
</ul>
<h3>What was done</h3>
<p>Three people over <strong>three weeks</strong>: removal of the old boiler room, heat pump installation, 42 mm pipework, a 400-litre low-loss header (a tank that separates the heat pump circuit from the radiator circuit so each has the right flow), hot-water tanks, pumps, valves, sensors, wiring and a complete control system. The <strong>cast-iron radiators</strong> were kept, with thermostatic heads added for room-by-room control.</p>
${fig(IMG_ECS, "Brick boiler room with two beige storage tanks and a blue hot-water cylinder", 1126, 691, "In the boiler room, the domestic hot-water storage tanks. Photo: Panasonic.")}
`,
    },
    {
      id: "figures",
      title: "Key figures",
      html: `
<div class="table-wrap"><table>
<thead><tr><th>Item</th><th>Before</th><th>After</th></tr></thead>
<tbody>
<tr><td>Heat production</td><td>134 kW oil boiler</td><td>2 × 30 kW Big Aquarea T-CAP M Series (60 kW)</td></tr>
<tr><td>Energy</td><td>Heating oil</td><td>Electricity, heat pumps using R290 (propane, natural refrigerant)</td></tr>
<tr><td>Domestic hot water</td><td>Instant, plate heat exchanger</td><td>760 L storage</td></tr>
<tr><td>Radiators</td><td>Cast iron</td><td>Cast iron kept + thermostatic heads</td></tr>
<tr><td>Building</td><td colspan="2">1920s, 600 m², 19 studios of 31 m²</td></tr>
<tr><td>Works</td><td colspan="2">3 weeks, 3 people, from June 2026</td></tr>
</tbody>
</table></div>
<p>The Big Aquarea T-CAP M Series is designed for apartment buildings and renovation: cascades up to 300 kW and flow water up to 75 °C depending on configuration. Thanks to Panasonic’s <strong>T-CAP</strong> technology, they run down to −28 °C outside and keep their output without electric backup down to −20 °C.</p>
<p class="text-sm">Figures taken on 2 November 2026 from the Panasonic case study.</p>
`,
    },
    {
      id: "which-buildings",
      title: "Which co-ownership buildings does this suit?",
      html: `
<ul>
  <li><strong>Central oil or gas heating</strong>, with a shared boiler room that also makes hot water.</li>
  <li><strong>Water radiators</strong>, even old cast-iron ones: the M Series can deliver water up to 75 °C depending on configuration.</li>
  <li><strong>A DPE rating that blocks letting</strong> or a rising fuel bill.</li>
  <li><strong>Some outdoor space</strong>, even narrow (courtyard, flat roof), for the machines.</li>
</ul>
<p>Before any quote, we calculate the building’s real needs, and the work must be voted at the general meeting. Steps, grants and heat metering are on our <a href="{{path:coOwnership}}">co-ownership heating</a> page; heat pump types on our <a href="{{path:heatPump}}">heat pump</a> page.</p>
`,
    },
    {
      id: "press",
      title: "This project in the press",
      html: `
<p>The same project was covered by La Voix du Nord on 30 October 2026: see <a href="{{path:blogReportageLvdnCopro}}">our article on the La Voix du Nord report</a>. <em>L’Installateur</em> also announces a more detailed article in a coming issue.</p>
<p>Is your building thinking of replacing its boiler? <a href="{{path:contact}}">Ask for a free study</a>.</p>
`,
    },
  ],
  faq: {
    title: "Frequently asked questions",
    items: [
      { question: "What is the Interclima show?", answer: "A professional trade show in Paris dedicated to heating, air conditioning, ventilation and hot water, where manufacturers present new products." },
      { question: "Why can 60 kW of heat pumps replace a 134 kW boiler?", answer: "The boiler made hot water instantly, which needed a lot of power. With two storage tanks, hot water is prepared in advance: according to Panasonic, 60 kW covers heating and hot water for the 19 studios." },
      { question: "Can cast-iron radiators be kept?", answer: "Yes, on this project they were kept, with thermostatic heads added. Each case must be checked." },
      { question: "What is R290?", answer: "Propane used as a refrigerant: a natural fluid with a very low climate impact if it leaks." },
      { question: "Were residents left without heating during the works?", answer: "No. The work was done without switching off the old system." },
    ],
  },
  sources: {
    title: "Sources",
    consulted: "Pages consulted on 2 November 2026",
    items: [
      { label: "L’Installateur — “À Interclima, Panasonic voit grand, de la maison au tertiaire” (28/09/2026, French)", url: URL_INSTALLATEUR },
      { label: "Panasonic — 19-studio co-ownership building in Lille: oil boiler replaced by 2 BIG Aquarea T-CAP (French)", url: URL_CASE },
    ],
  },
  related: {
    title: "Also on hfe-energie.fr",
    links: [
      { label: "La Voix du Nord: heat pumps in co-ownership", routeId: "blogReportageLvdnCopro" as const },
      { label: "New: Panasonic Aquarea EcoFlex", routeId: "blogNouveauteEcoflex" as const },
      { label: "Co-ownership heating", routeId: "coOwnership" as const },
      { label: "Our collective heat pump projects", routeId: "projectsCopropriete" as const },
      { label: "Heat pumps in Lille", routeId: "heatPump" as const },
      { label: "Panasonic partner", routeId: "panasonicPartner" as const },
    ],
  },
  cta: {
    title: "A heating project for your building?",
    subtitle: "Boiler room visit, needs calculation and free study across the Lille area.",
  },
} satisfies BlogArticleContent;

export type BlogInterclimaPanasonicContent = BlogArticleContent;

export function getBlogInterclimaPanasonicContent(locale: Locale): BlogArticleContent {
  return locale === "en" ? en : fr;
}
