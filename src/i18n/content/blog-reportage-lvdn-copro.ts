import type { Locale } from "../config";
import type { BlogArticleContent } from "./blog-article-types";

const LVDN_URL =
  "https://www.lavoixdunord.fr/1750396/article/2026-10-29/de-plus-en-plus-de-demandes-quand-les-pompes-chaleur-entrent-dans-les-logements";

const PHOTO_FR = `
<figure class="my-6">
  <img src="/assets/blog/lvdn/kevin-hecker-pac-copropriete-lille.jpg" alt="Kévin Hecker, de HFE, debout dans la chaufferie d’une copropriété lilloise, entre les ballons et les pompes à chaleur Panasonic installées en cascade" width="642" height="362" loading="lazy" decoding="async" class="rounded-xl w-full h-auto" />
  <figcaption class="mt-2 text-sm text-neutral-500">Kévin Hecker devant les pompes à chaleur installées dans une copropriété de Lille. Photo PIB / La Voix du Nord.</figcaption>
</figure>`;

const PHOTO_EN = `
<figure class="my-6">
  <img src="/assets/blog/lvdn/kevin-hecker-pac-copropriete-lille.jpg" alt="Kévin Hecker of HFE standing in the boiler room of a Lille co-ownership building, between the tanks and the Panasonic heat pumps installed in cascade" width="642" height="362" loading="lazy" decoding="async" class="rounded-xl w-full h-auto" />
  <figcaption class="mt-2 text-sm text-neutral-500">Kévin Hecker in front of the heat pumps installed in a Lille co-ownership building. Photo: PIB / La Voix du Nord.</figcaption>
</figure>`;

const fr = {
  seo: {
    title: "PAC en copropriété : HFE dans La Voix du Nord",
    description:
      "La Voix du Nord raconte notre chantier : 2 PAC Panasonic Aquarea de 30 kW en cascade remplacent une chaudière fioul de 134 kW dans une copropriété lilloise de 19 logements.",
    keywords: [
      "pompe à chaleur copropriété Lille",
      "PAC collective cascade",
      "remplacer chaudière fioul copropriété",
      "La Voix du Nord pompe à chaleur",
      "Hecker & Frères Énergie",
      "Panasonic Aquarea copropriété",
    ],
  },
  breadcrumbs: [
    { name: "Accueil", url: "/" },
    { name: "Blog", url: "/blog" },
    {
      name: "La Voix du Nord : PAC en copropriété",
      url: "/blog/reportage-voix-du-nord-pompes-a-chaleur-copropriete",
    },
  ],
  article: {
    headline: "Pompes à chaleur en copropriété : notre chantier lillois dans La Voix du Nord",
    image: "/assets/blog/lvdn/kevin-hecker-pac-copropriete-lille.jpg",
    datePublished: "2026-10-30",
    dateModified: "2026-10-30",
    dateLabel: "Publié le 30 octobre 2026",
    excerpt:
      "Deux pompes à chaleur Panasonic en cascade à la place d’une vieille chaudière fioul, dans une copropriété de 19 logements à Lille : La Voix du Nord a suivi le chantier. On vous explique comment on monte ce type de projet.",
  },
  hero: {
    badge: "Dans la presse",
    lead: "La Voix du Nord, 30 octobre 2026",
  },
  intro: [
    "Dans son édition du vendredi 30 octobre 2026 (Lille-Métropole, rubrique « Habiter »), <strong>La Voix du Nord</strong> consacre un article de Marie Delattre aux pompes à chaleur qui « entrent dans les logements collectifs ». Le point de départ : un chantier que nous terminons dans une copropriété lilloise de 19 logements.",
    "Nous remercions la rédaction pour ce sujet. L’article complet est à lire sur <a href=\"" +
      LVDN_URL +
      "\" rel=\"noopener noreferrer\" target=\"_blank\">lavoixdunord.fr</a>. Ici, nous revenons sur ce que la page du journal ne peut pas détailler : pourquoi la cascade, comment on dimensionne, et comment un projet se déroule en copropriété.",
  ],
  sections: [
    {
      id: "le-chantier",
      title: "Le chantier : 19 logements, une chaudière fioul de 134 kW",
      html: `
<p>L’immeuble était chauffé par une chaudière fioul de <strong>134 kW</strong>, particulièrement gourmande. Nous l’avons remplacée par <strong>deux pompes à chaleur Panasonic Aquarea de 30 kW</strong>, montées « en cascade ». Elles assurent à la fois le chauffage et l’eau chaude des 19 logements, avec <strong>60 kW</strong> au total au lieu de 134 kW.</p>
<p>L’installation a été présentée au salon <strong>Interclima</strong>, fin septembre à Paris, et sera mise en service d’ici quelques jours. Pour les habitants, l’objectif est double : faire des économies, et faire gagner à l’immeuble <strong>entre deux et trois lettres</strong> au DPE.</p>
<p>Comme le dit Kévin dans l’article : « Quand on dit pompe à chaleur, ça peut faire peur. Alors que quand c’est bien dimensionné, tout va bien. » C’est tout le sujet.</p>
`,
    },
    {
      id: "pourquoi-la-cascade",
      title: "Pourquoi deux pompes à chaleur plutôt qu’une seule",
      html: `
<p>Un immeuble n’a presque jamais besoin de toute sa puissance. Les jours les plus froids de l’hiver se comptent sur les doigts de la main ; le reste du temps, la demande est modérée, et l’été il ne reste que l’eau chaude. Une seule grosse machine passerait donc l’essentiel de l’année à tourner au ralenti ou à s’arrêter et redémarrer, ce qui use le matériel et fait baisser le rendement.</p>
<p>En cascade, la régulation démarre une première pompe à chaleur, puis la seconde seulement quand les besoins augmentent. Elle alterne aussi les machines pour répartir les heures de fonctionnement. Autre avantage très concret en copropriété : si une unité est en maintenance ou en panne, l’autre continue de chauffer. Personne ne se retrouve sans chauffage ni eau chaude.</p>
${PHOTO_FR}
`,
    },
    {
      id: "dimensionnement",
      title: "Comment on dimensionne en collectif",
      html: `
<p>Passer de 134 kW à 60 kW surprend souvent. Pourtant, les vieilles chaudières collectives ont presque toujours été surdimensionnées. La bonne puissance ne se lit pas sur la plaque de l’ancienne chaudière : elle se calcule.</p>
<ul>
  <li><strong>Les déperditions du bâtiment</strong> : murs, menuiseries, toiture, ventilation. Nous partons de l’audit et des consommations réelles des années précédentes, puis nous calculons la puissance nécessaire par grand froid.</li>
  <li><strong>La température de départ</strong> : une pompe à chaleur est d’autant plus performante que l’eau envoyée dans les radiateurs est moins chaude. Nous vérifions ce que les radiateurs existants peuvent faire avec une eau moins chaude, et nous réglons la loi d’eau (la courbe de chauffe) en conséquence.</li>
  <li><strong>L’eau chaude sanitaire</strong> : le stockage est dimensionné selon le nombre de logements et les habitudes de puisage, pour que les pompes à chaleur produisent l’eau chaude au bon moment plutôt qu’en urgence aux heures de pointe.</li>
  <li><strong>L’hydraulique et l’emplacement</strong> : bouteille de découplage, équilibrage du réseau, place pour les unités extérieures, bruit et accès pour l’entretien.</li>
</ul>
<p>C’est ce travail en amont qui permet d’installer moins de puissance, de consommer moins, et d’obtenir un vrai confort.</p>
`,
    },
    {
      id: "deroule-projet",
      title: "Le déroulé d’un projet en copropriété",
      html: `
<p>En copropriété, la technique n’est qu’une partie du projet. Les décisions se prennent ensemble, et il faut du temps. Voici comment cela se passe en général.</p>
<ol>
  <li><strong>Le diagnostic.</strong> Audit énergétique ou diagnostic de performance énergétique collectif, état de la chaufferie, relevé des consommations. C’est la base du dossier.</li>
  <li><strong>L’étude et le devis.</strong> Nous visitons la chaufferie, les logements témoins et l’emplacement possible des unités extérieures, puis nous proposons une solution chiffrée.</li>
  <li><strong>Le montage des aides.</strong> Selon le projet, la copropriété peut solliciter <strong>MaPrimeRénov’ Copropriété</strong> (qui suppose un gain énergétique minimal et un accompagnement par un assistant à maîtrise d’ouvrage) et les <strong>certificats d’économies d’énergie (CEE)</strong>. Les conditions évoluent : nous les vérifions au moment du projet.</li>
  <li><strong>Le vote en assemblée générale.</strong> Le syndic inscrit les travaux à l’ordre du jour, avec les devis et le plan de financement. Plus le dossier est clair, plus le vote est simple.</li>
  <li><strong>Les travaux et la mise en service.</strong> Nous organisons le chantier pour limiter la coupure de chauffage, puis nous réglons la cascade et suivons les premières semaines de fonctionnement.</li>
</ol>
<p>Côté budget, Kévin donne un ordre de grandeur dans l’article : <strong>entre 60 000 et 90 000 euros</strong> pour une installation en résidence collective. C’est un investissement important, mais les aides permettent de se lancer et la facture s’allège ensuite.</p>
`,
    },
    {
      id: "retour-experience",
      title: "Ce qu’on constate sur une autre copropriété",
      html: `
<p>Ce chantier n’est pas le premier. Dans une autre copropriété lilloise, nous avons installé <strong>cinq pompes à chaleur</strong>, et la facture a été <strong>divisée par trois</strong>. « On a complètement arrêté les chaudières », raconte Kévin. Vous pouvez voir le détail de nos <a href="{{path:projectsCopropriete}}">réalisations en copropriété</a>.</p>
<p>« Les copropriétés s’intéressent de plus en plus à la pompe à chaleur, notamment pour réduire leurs charges et sortir des énergies fossiles. » Avec le prix du fioul et du gaz, la question se pose dans beaucoup d’immeubles de la métropole.</p>
`,
    },
    {
      id: "qui-sommes-nous",
      title: "HFE, de la maison individuelle à l’immeuble",
      html: `
<p>Nous avons lancé l’entreprise il y a cinq ans dans la métropole lilloise, à trois associés : Kévin Hecker, son frère jumeau et un ami d’enfance. Au départ, nous pensions que la pompe à chaleur, c’était surtout pour les particuliers. Au fil des chantiers, les demandes des copropriétés et des <a href="{{path:commercial}}">professionnels</a> se sont multipliées.</p>
<p>Syndic, conseil syndical ou copropriétaire : si votre immeuble chauffe encore au fioul ou au gaz, parlons-en. Découvrez notre approche de la <a href="{{path:coOwnership}}">pompe à chaleur en copropriété</a> et nos <a href="{{path:heatPump}}">pompes à chaleur</a>, ou <a href="{{path:contact}}">demandez une étude</a>.</p>
`,
    },
  ],
  faq: {
    title: "Questions fréquentes",
    items: [
      {
        question: "Une pompe à chaleur peut-elle chauffer tout un immeuble ?",
        answer:
          "Oui, à condition d’être bien dimensionnée. Dans la copropriété de 19 logements présentée par La Voix du Nord, deux pompes à chaleur Panasonic de 30 kW en cascade assurent le chauffage et l’eau chaude, à la place d’une chaudière fioul de 134 kW.",
      },
      {
        question: "Pourquoi installer plusieurs pompes à chaleur en cascade ?",
        answer:
          "Les machines démarrent selon les besoins réels, ce qui améliore le rendement et limite l’usure. Si une unité est arrêtée pour l’entretien, l’autre continue de fonctionner.",
      },
      {
        question: "Combien coûte une pompe à chaleur collective ?",
        answer:
          "Dans l’article, Kévin Hecker évoque entre 60 000 et 90 000 euros pour une installation en résidence collective. Le montant dépend du bâtiment ; nous établissons un devis après visite.",
      },
      {
        question: "Quelles aides pour une copropriété ?",
        answer:
          "Les principales sont MaPrimeRénov’ Copropriété et les certificats d’économies d’énergie (CEE). Leur obtention dépend du gain énergétique et des conditions en vigueur au moment du projet.",
      },
      {
        question: "Faut-il un vote en assemblée générale ?",
        answer:
          "Oui. Le remplacement du chauffage collectif est voté en assemblée générale des copropriétaires, sur la base des devis et du plan de financement présentés par le syndic.",
      },
    ],
  },
  sources: {
    title: "Source",
    consulted: "Source consultée pour la rédaction de cet article",
    items: [
      {
        label:
          "La Voix du Nord — « Quand les pompes à chaleur entrent dans les logements collectifs », Marie Delattre (édition du 30 octobre 2026)",
        url: LVDN_URL,
      },
    ],
  },
  related: {
    title: "À lire aussi sur hfe-energie.fr",
    links: [
      { label: "Interclima 2026 : notre chantier présenté par Panasonic", routeId: "blogInterclimaPanasonic" as const },
      { label: "Nouveauté : Panasonic Aquarea EcoFlex", routeId: "blogNouveauteEcoflex" as const },
      { label: "Pompe à chaleur en copropriété", routeId: "coOwnership" as const },
      { label: "Nos réalisations de PAC collective", routeId: "projectsCopropriete" as const },
      { label: "Achat, pose et tarifs pompe à chaleur air-eau & air-air à Lille", routeId: "heatPump" as const },
      { label: "Professionnels", routeId: "commercial" as const },
      { label: "Reportage BFM pompes à chaleur", routeId: "blogReportageBfmPac" as const },
      { label: "Contact / devis", routeId: "contact" as const },
    ],
  },
  cta: {
    title: "Votre copropriété chauffe encore au fioul ou au gaz ?",
    subtitle: "Étude de la chaufferie, dimensionnement et accompagnement aux aides — sans engagement.",
    primaryRouteId: "coOwnership" as const,
    primaryLabel: "PAC en copropriété",
  },
} satisfies BlogArticleContent;

const en = {
  seo: {
    title: "Heat pumps in co-ownership: HFE in La Voix du Nord",
    description:
      "La Voix du Nord covers our project: 2 Panasonic Aquarea 30 kW heat pumps in cascade replace a 134 kW oil boiler in a 19-flat Lille co-ownership building.",
    keywords: [
      "heat pump co-ownership Lille",
      "cascade heat pumps apartment building",
      "replace oil boiler apartment building",
      "La Voix du Nord heat pump",
      "Hecker & Frères Énergie",
    ],
  },
  breadcrumbs: [
    { name: "Home", url: "/en" },
    { name: "Blog", url: "/en/blog" },
    {
      name: "La Voix du Nord: heat pumps in co-ownership",
      url: "/en/blog/la-voix-du-nord-heat-pumps-co-ownership",
    },
  ],
  article: {
    headline: "Heat pumps in co-ownership buildings: our Lille project in La Voix du Nord",
    image: "/assets/blog/lvdn/kevin-hecker-pac-copropriete-lille.jpg",
    datePublished: "2026-10-30",
    dateModified: "2026-10-30",
    dateLabel: "Published 30 October 2026",
    excerpt:
      "Two Panasonic heat pumps in cascade instead of an old oil boiler, in a 19-flat co-ownership building in Lille: La Voix du Nord followed the project. Here is how we put this kind of project together.",
  },
  hero: {
    badge: "In the press",
    lead: "La Voix du Nord, 30 October 2026",
  },
  intro: [
    "In its Friday 30 October 2026 edition (Lille-Métropole, “Habiter” section), <strong>La Voix du Nord</strong> ran an article by Marie Delattre on heat pumps “moving into collective housing”. The starting point: a project we are finishing in a 19-flat co-ownership building in Lille.",
    "We thank the newsroom for the feature. The full article is on <a href=\"" +
      LVDN_URL +
      "\" rel=\"noopener noreferrer\" target=\"_blank\">lavoixdunord.fr</a>. Here we cover what a newspaper page cannot detail: why a cascade, how we size the system, and how a project runs in a co-ownership building.",
  ],
  sections: [
    {
      id: "the-project",
      title: "The project: 19 flats, a 134 kW oil boiler",
      html: `
<p>The building was heated by a particularly fuel-hungry <strong>134 kW</strong> oil boiler. We replaced it with <strong>two 30 kW Panasonic Aquarea heat pumps</strong> working “in cascade”. They provide both heating and hot water for the 19 flats, with <strong>60 kW</strong> in total instead of 134 kW.</p>
<p>The installation was presented at the <strong>Interclima</strong> trade show in Paris at the end of September and will be commissioned within a few days. For residents, the aim is twofold: save money, and move the building up <strong>two to three letters</strong> on its energy rating (DPE).</p>
<p>As Kévin puts it in the article: “Say ‘heat pump’ and it can sound scary. But when it’s properly sized, everything is fine.” That is the whole point.</p>
`,
    },
    {
      id: "why-cascade",
      title: "Why two heat pumps rather than one",
      html: `
<p>A building almost never needs its full power. The coldest days of winter can be counted on one hand; the rest of the time demand is moderate, and in summer only hot water remains. A single large unit would spend most of the year running at low load or cycling on and off, which wears the equipment and lowers efficiency.</p>
<p>In a cascade, the controller starts the first heat pump, then the second only when demand rises. It also alternates the units to share running hours. Another very practical benefit in a co-ownership building: if one unit is down for maintenance or a fault, the other keeps heating. Nobody is left without heating or hot water.</p>
${PHOTO_EN}
`,
    },
    {
      id: "sizing",
      title: "How we size a collective system",
      html: `
<p>Going from 134 kW to 60 kW often surprises people. Yet old collective boilers were almost always oversized. The right output is not read off the old boiler’s plate: it is calculated.</p>
<ul>
  <li><strong>Building heat losses</strong>: walls, windows, roof, ventilation. We start from the audit and actual consumption in previous years, then calculate the output needed in very cold weather.</li>
  <li><strong>Flow temperature</strong>: a heat pump performs better the cooler the water sent to the radiators. We check what the existing radiators can deliver with cooler water and set the heating curve accordingly.</li>
  <li><strong>Domestic hot water</strong>: storage is sized for the number of flats and usage patterns, so the heat pumps make hot water at the right time rather than in a rush at peak hours.</li>
  <li><strong>Hydraulics and location</strong>: decoupling vessel, network balancing, space for the outdoor units, noise and maintenance access.</li>
</ul>
<p>This upfront work is what lets us install less power, use less energy and deliver real comfort.</p>
`,
    },
    {
      id: "project-steps",
      title: "How a co-ownership project runs",
      html: `
<p>In a co-ownership building, the technical side is only part of the project. Decisions are made together, and that takes time. Here is how it usually goes.</p>
<ol>
  <li><strong>Assessment.</strong> Energy audit or collective energy performance diagnosis, plant-room condition, consumption records. This is the basis of the file.</li>
  <li><strong>Study and quote.</strong> We visit the plant room, sample flats and possible locations for the outdoor units, then propose a costed solution.</li>
  <li><strong>Grants.</strong> Depending on the project, the co-ownership can apply for <strong>MaPrimeRénov’ Copropriété</strong> (which requires a minimum energy gain and support from a project-management assistant) and <strong>energy savings certificates (CEE)</strong>. Conditions change: we check them at the time of the project.</li>
  <li><strong>General meeting vote.</strong> The managing agent puts the works on the agenda, with quotes and the financing plan. The clearer the file, the simpler the vote.</li>
  <li><strong>Works and commissioning.</strong> We organise the work to keep heating interruptions short, then tune the cascade and monitor the first weeks of operation.</li>
</ol>
<p>On budget, Kévin gives a ballpark in the article: <strong>between €60,000 and €90,000</strong> for an installation in a residential building. It is a significant investment, but grants help get started and the bill comes down afterwards.</p>
`,
    },
    {
      id: "feedback",
      title: "What we see in another co-ownership building",
      html: `
<p>This is not our first such project. In another Lille co-ownership building, we installed <strong>five heat pumps</strong>, and the bill was <strong>divided by three</strong>. “We switched the boilers off completely,” says Kévin. See our <a href="{{path:projectsCopropriete}}">co-ownership projects</a> for details.</p>
<p>“Co-ownership buildings are increasingly interested in heat pumps, especially to reduce their service charges and move away from fossil fuels.” With oil and gas prices where they are, the question is coming up in many buildings across the metro area.</p>
`,
    },
    {
      id: "about-hfe",
      title: "HFE, from single homes to apartment buildings",
      html: `
<p>We started the company five years ago in the Lille metro area, three partners: Kévin Hecker, his twin brother and a childhood friend. At first we thought heat pumps were mainly for private homeowners. Project after project, requests from co-ownership buildings and <a href="{{path:commercial}}">businesses</a> have multiplied.</p>
<p>Managing agent, owners’ council or owner: if your building still heats with oil or gas, let’s talk. Discover our approach to <a href="{{path:coOwnership}}">heat pumps in co-ownership buildings</a> and our <a href="{{path:heatPump}}">heat pumps</a>, or <a href="{{path:contact}}">request a study</a>.</p>
`,
    },
  ],
  faq: {
    title: "Frequently asked questions",
    items: [
      {
        question: "Can a heat pump heat an entire building?",
        answer:
          "Yes, if properly sized. In the 19-flat building featured by La Voix du Nord, two 30 kW Panasonic heat pumps in cascade provide heating and hot water, replacing a 134 kW oil boiler.",
      },
      {
        question: "Why install several heat pumps in cascade?",
        answer:
          "Units start according to actual demand, which improves efficiency and limits wear. If one unit is stopped for maintenance, the other keeps running.",
      },
      {
        question: "How much does a collective heat pump cost?",
        answer:
          "In the article, Kévin Hecker mentions €60,000 to €90,000 for an installation in a residential building. The amount depends on the building; we provide a quote after a site visit.",
      },
      {
        question: "What grants are available to a co-ownership?",
        answer:
          "The main ones are MaPrimeRénov’ Copropriété and energy savings certificates (CEE). Eligibility depends on the energy gain and the conditions in force at the time of the project.",
      },
      {
        question: "Is a general meeting vote required?",
        answer:
          "Yes. Replacing the collective heating system is voted at the owners’ general meeting, based on the quotes and financing plan presented by the managing agent.",
      },
    ],
  },
  sources: {
    title: "Source",
    consulted: "Source used for this article",
    items: [
      {
        label:
          "La Voix du Nord — “Quand les pompes à chaleur entrent dans les logements collectifs”, Marie Delattre (30 October 2026 edition)",
        url: LVDN_URL,
      },
    ],
  },
  related: {
    title: "Also on hfe-energie.fr",
    links: [
      { label: "Interclima 2026: our project showcased by Panasonic", routeId: "blogInterclimaPanasonic" as const },
      { label: "New: Panasonic Aquarea EcoFlex", routeId: "blogNouveauteEcoflex" as const },
      { label: "Heat pumps in co-ownership", routeId: "coOwnership" as const },
      { label: "Our collective heat pump projects", routeId: "projectsCopropriete" as const },
      { label: "Heat pumps", routeId: "heatPump" as const },
      { label: "Businesses", routeId: "commercial" as const },
      { label: "BFM heat pump report", routeId: "blogReportageBfmPac" as const },
      { label: "Contact / quote", routeId: "contact" as const },
    ],
  },
  cta: {
    title: "Is your building still heated by oil or gas?",
    subtitle: "Plant-room study, sizing and grant support — no obligation.",
    primaryRouteId: "coOwnership" as const,
    primaryLabel: "Heat pumps in co-ownership",
  },
} satisfies BlogArticleContent;

export type BlogReportageLvdnCoproContent = typeof fr;

export function getBlogReportageLvdnCoproContent(locale: Locale): BlogArticleContent {
  return locale === "en" ? en : fr;
}
