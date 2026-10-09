import type { Locale } from "../config";
import type { BlogArticleContent } from "./blog-article-types";

const LINKEDIN_URL =
  "https://www.linkedin.com/feed/update/urn:li:activity:7467102717782478848/";

const fr = {
  seo: {
    title: "Climatisation Panasonic sur TF1 : chantier HFE Lille",
    description:
      "Reportage JT TF1 20h (2026) : HFE installe une clim Panasonic à Lille. Anticiper avant la canicule, délais de 3 semaines à 2 mois, conseils terrain.",
    keywords: [
      "climatisation TF1 Lille",
      "reportage TF1 clim Panasonic",
      "installer clim avant canicule",
      "délai installation climatisation",
      "Hecker & Frères Énergie TF1",
      "clim maison Lille",
    ],
  },
  breadcrumbs: [
    { name: "Accueil", url: "/" },
    { name: "Blog", url: "/blog" },
    {
      name: "Reportage TF1 climatisation Lille",
      url: "/blog/reportage-tf1-climatisation-panasonic-lille",
    },
  ],
  article: {
    headline: "Climatisation Panasonic sur TF1 : le chantier HFE filmé à Lille",
    datePublished: "2026-06-01",
    dateModified: "2026-06-01",
    dateLabel: "Publié le 1er juin 2026",
    excerpt:
      "Le JT de TF1 de 20h a filmé l’installation d’une climatisation Panasonic par HFE chez un particulier à Lille — et rappelé pourquoi il faut anticiper avant les fortes chaleurs.",
  },
  hero: {
    badge: "Reportage TF1",
    lead: "Publication LinkedIn du 1er juin 2026",
    mediaId: "tf1",
  },
  video: {
    src: "/assets/blog/reportage-tf1-clim-panasonic.mp4",
    linkedinActivityId: "7467102717782478848",
    title: "TF1 sur le chantier — Installation d’une climatisation Panasonic à Lille",
  },
  intro: [
    "Autre solution pour passer l’été au frais : faire appel à un installateur. Le <strong>JT de TF1 de 20h</strong> l’a illustré sur un chantier de <strong>Hecker &amp; Frères Énergie (HFE)</strong> à Lille, avec une climatisation <strong>Panasonic</strong>.",
    "Le 1er juin 2026, Julien Hecker a partagé ce passage sur <a href=\"" +
      LINKEDIN_URL +
      "\" rel=\"noopener noreferrer\" target=\"_blank\">LinkedIn</a> : pose de l’unité intérieure, perçage pour les liaisons frigorifiques, et un client qui a eu le bon réflexe… en commandant dès le mois de mars.",
  ],
  sections: [
    {
      id: "chantier-louis",
      title: "Chez Louis : anticiper pour bien dormir",
      html: `
<p>Dans le reportage, Louis est propriétaire de sa maison depuis un an. Plus prévoyant que beaucoup, il a contacté un installateur de climatiseurs <strong>en mars</strong>. Quand la température atteint environ <strong>30&nbsp;°C dans la chambre</strong>, l’enjeu n’est plus théorique : c’est le confort de bien dormir.</p>
<p>Sur place, l’équipe montre le geste technique : position de l’<strong>unité intérieure</strong>, trou pour le passage des liaisons, mise en service de l’air frais. Anticiper l’installation de la clim, c’est exactement ce que le reportage met en avant.</p>
`,
    },
    {
      id: "delais",
      title: "Canicule : des carnets déjà pleins",
      html: `
<p>Le sujet TF1 le dit clairement : en période de fortes chaleurs, les <strong>carnets de commandes</strong> des installateurs sont déjà remplis pour les semaines à venir. « Il faut se dépêcher, les places sont chères » — et qui dit demande, dit allongement des délais.</p>
<p>À l’époque du reportage, l’attente évoquée va de <strong>3 semaines à 2 mois</strong>. Un message utile pour les habitants de Lille et de la MEL : ne pas attendre le premier pic à 35&nbsp;°C pour demander un devis. Chez HFE, une <a href="{{path:contact}}">étude personnalisée</a> permet de planifier la pose dans de bonnes conditions.</p>
`,
    },
    {
      id: "panasonic-partenaires",
      title: "Panasonic, Pecomark et Vanmarcke",
      html: `
<p>HFE remercie <strong>Panasonic Heating &amp; Cooling</strong> pour la qualité des équipements, ainsi que <strong>Le Froid Pecomark</strong> et <strong>Vanmarcke</strong> pour l’accompagnement technique. Une clim réussie repose sur du matériel fiable et une pose soignée — pas sur un appareil branché à la dernière minute.</p>
<p>Entreprise <a href="{{path:panasonicPartner}}">partenaire Panasonic</a> et artisan local, HFE propose des solutions adaptées aux maisons et appartements : mono-split, multi-split, gainable… Voir nos pages <a href="{{path:airConditioning}}">climatisation</a> et <a href="{{path:projectsClim}}">réalisations</a>.</p>
`,
    },
    {
      id: "pourquoi-fixe",
      title: "Pourquoi une clim fixe plutôt qu’un appoint ?",
      html: `
<p>Le reportage oppose l’urgence de l’été à la sérénité de ceux qui ont planifié. Une climatisation fixe (souvent une <strong>pompe à chaleur air/air réversible</strong>) apporte un confort durable, un meilleur rendement, et peut aussi chauffer l’hiver — contrairement à un climatiseur mobile ou un ventilateur d’appoint.</p>
<p>Depuis le 18 juillet 2026, certaines installations peuvent même bénéficier du <a href="{{path:blogTvaClimReversible}}">taux de TVA à 5,5&nbsp;%</a> sous conditions. Autre reportage TF1 à lire : notre article sur la <a href="{{path:blogReportageTf1Pac}}">PAC Panasonic filmée en 2025</a>.</p>
`,
    },
    {
      id: "projet",
      title: "Un projet de clim à Lille ?",
      html: `
<p>Étude personnalisée, installation par des professionnels qualifiés, accompagnement sur les <a href="{{path:grants}}">aides à la rénovation énergétique</a> lorsque vous êtes éligible : c’est le parcours que HFE propose aux particuliers de Lille et métropole.</p>
<p>Contactez-nous au 07&nbsp;67&nbsp;34&nbsp;12&nbsp;53 ou via le formulaire — devis gratuit, sans engagement. Plus tôt vous lancez le projet, plus vous sécurisez votre créneau avant la prochaine vague de chaleur.</p>
`,
    },
  ],
  faq: {
    title: "Questions fréquentes",
    items: [
      {
        question: "De quoi parle ce reportage TF1 ?",
        answer:
          "Le JT de 20h montre l’installation d’une climatisation Panasonic par Hecker & Frères Énergie chez un particulier à Lille (Louis), et insiste sur l’intérêt d’anticiper avant les fortes chaleurs.",
      },
      {
        question: "Quels délais d’installation sont évoqués ?",
        answer:
          "En période de forte demande, le reportage cite une attente de 3 semaines à 2 mois. Les carnets des installateurs se remplissent vite dès les premiers pics de chaleur. Anticiper en hiver ou au printemps reste le meilleur réflexe.",
      },
      {
        question: "Quand a été publié le post LinkedIn ?",
        answer:
          "Le 1er juin 2026, par Julien Hecker, pour relayer le passage de HFE au JT TF1 de 20h sur ce chantier de climatisation Panasonic à Lille.",
      },
      {
        question: "HFE installe-t-elle encore des climatisations Panasonic ?",
        answer:
          "Oui. HFE est partenaire Panasonic et réalise des études et poses de climatisation (et pompes à chaleur) à Lille et dans un rayon d’environ 50 km. Devis gratuit après visite.",
      },
      {
        question: "Où retrouver la publication et la vidéo ?",
        answer:
          "La vidéo du reportage est intégrée en haut de cet article. Vous pouvez aussi la voir sur LinkedIn, dans la publication de Julien Hecker « TF1 sur le chantier — Installation d’une climatisation Panasonic à Lille » (1er juin 2026).",
      },
    ],
  },
  sources: {
    title: "Source",
    consulted: "Source consultée pour la rédaction de cet article",
    items: [
      {
        label:
          "LinkedIn — Julien Hecker, TF1 sur le chantier clim Panasonic Lille (1er juin 2026)",
        url: LINKEDIN_URL,
      },
    ],
  },
  related: {
    title: "À lire aussi sur hfe-energie.fr",
    links: [
      { label: "Climatisation", routeId: "airConditioning" as const },
      { label: "Réalisations clim multi-split", routeId: "projectsClim" as const },
      { label: "Partenaire Panasonic", routeId: "panasonicPartner" as const },
      { label: "Reportage TF1 PAC 2025", routeId: "blogReportageTf1Pac" as const },
      { label: "TVA 5,5 % clim réversible", routeId: "blogTvaClimReversible" as const },
      { label: "Contact / devis", routeId: "contact" as const },
    ],
  },
  cta: {
    title: "Anticipez votre clim avant la canicule",
    subtitle: "Étude Panasonic, devis gratuit et créneau planifié — sans engagement.",
    primaryRouteId: "airConditioning" as const,
    primaryLabel: "Voir la climatisation",
  },
} satisfies BlogArticleContent;

const en = {
  seo: {
    title: "Panasonic AC on TF1: HFE Lille job site",
    description:
      "TF1 8pm news (2026): HFE installs Panasonic air conditioning in Lille. Plan before the heatwave, 3-week to 2-month waits, practical tips.",
    keywords: [
      "TF1 air conditioning Lille",
      "Panasonic AC report TF1",
      "install AC before heatwave",
      "air conditioning wait time",
      "Hecker & Frères Énergie TF1",
    ],
  },
  breadcrumbs: [
    { name: "Home", url: "/en" },
    { name: "Blog", url: "/en/blog" },
    {
      name: "TF1 air conditioning Lille report",
      url: "/en/blog/tf1-panasonic-air-conditioning-lille-report",
    },
  ],
  article: {
    headline: "Panasonic air conditioning on TF1: HFE filmed on site in Lille",
    datePublished: "2026-06-01",
    dateModified: "2026-06-01",
    dateLabel: "Published 1 June 2026",
    excerpt:
      "TF1’s 8pm news filmed HFE installing Panasonic air conditioning for a Lille homeowner — and stressed why you should book before the heat peaks.",
  },
  hero: {
    badge: "TF1 report",
    lead: "LinkedIn post dated 1 June 2026",
    mediaId: "tf1",
  },
  video: {
    src: "/assets/blog/reportage-tf1-clim-panasonic.mp4",
    linkedinActivityId: "7467102717782478848",
    title: "TF1 on site — Panasonic air conditioning install in Lille",
  },
  intro: [
    "Another way to stay cool in summer: call a proper installer. <strong>TF1’s 8pm news</strong> showed a <strong>Hecker &amp; Frères Énergie (HFE)</strong> job in Lille fitting <strong>Panasonic</strong> air conditioning.",
    "On 1 June 2026, Julien Hecker shared it on <a href=\"" +
      LINKEDIN_URL +
      "\" rel=\"noopener noreferrer\" target=\"_blank\">LinkedIn</a>: indoor unit placement, refrigerant-line drilling, and a customer who wisely ordered in March.",
  ],
  sections: [
    {
      id: "louis",
      title: "At Louis’s home: plan ahead to sleep well",
      html: `
<p>Louis has owned his house for a year and contacted an AC installer in <strong>March</strong>. When the bedroom hits about <strong>30&nbsp;°C</strong>, comfort becomes about sleeping well. The report shows the indoor unit, pipe routes and fresh air coming online.</p>
`,
    },
    {
      id: "delays",
      title: "Heatwave: order books already full",
      html: `
<p>During hot spells, installers’ diaries fill for weeks ahead. The report mentions waits of <strong>3 weeks to 2 months</strong>. Don’t wait for the first 35&nbsp;°C day — ask HFE for a <a href="{{path:contact}}">free study</a> early.</p>
`,
    },
    {
      id: "partners",
      title: "Panasonic, Pecomark and Vanmarcke",
      html: `
<p>Credits to <strong>Panasonic</strong>, <strong>Le Froid Pecomark</strong> and <strong>Vanmarcke</strong>. HFE remains a <a href="{{path:panasonicPartner}}">Panasonic partner</a> for <a href="{{path:airConditioning}}">air conditioning</a> and heat pumps in Lille.</p>
`,
    },
  ],
  faq: {
    title: "Frequently asked questions",
    items: [
      {
        question: "What is this TF1 report about?",
        answer:
          "The 8pm news covers HFE installing Panasonic air conditioning for Louis in Lille, and why booking early before heatwaves matters.",
      },
      {
        question: "What installation delays are mentioned?",
        answer:
          "About 3 weeks to 2 months when demand surges. Booking in winter or spring is the safest approach.",
      },
      {
        question: "When was the LinkedIn post published?",
        answer: "On 1 June 2026, by Julien Hecker, sharing HFE’s appearance on TF1’s 8pm news.",
      },
      {
        question: "Where can I find the post and video?",
        answer:
          "The report video is embedded at the top of this article. You can also watch it on LinkedIn via Julien Hecker’s update “TF1 sur le chantier — Installation d’une climatisation Panasonic à Lille” (1 June 2026).",
      },
    ],
  },
  sources: {
    title: "Source",
    consulted: "Source used for this article",
    items: [
      {
        label:
          "LinkedIn — Julien Hecker, TF1 on site Panasonic AC Lille (1 June 2026)",
        url: LINKEDIN_URL,
      },
    ],
  },
  related: {
    title: "Also on hfe-energie.fr",
    links: [
      { label: "Air conditioning", routeId: "airConditioning" as const },
      { label: "Multi-split projects", routeId: "projectsClim" as const },
      { label: "Panasonic partner", routeId: "panasonicPartner" as const },
      { label: "TF1 heat-pump report 2025", routeId: "blogReportageTf1Pac" as const },
      { label: "5.5% VAT reversible AC", routeId: "blogTvaClimReversible" as const },
      { label: "Contact / quote", routeId: "contact" as const },
    ],
  },
  cta: {
    title: "Book your AC before the next heatwave",
    subtitle: "Panasonic study, free quote and a planned slot — no obligation.",
    primaryRouteId: "airConditioning" as const,
    primaryLabel: "Explore air conditioning",
  },
} satisfies BlogArticleContent;

export type BlogReportageTf1ClimContent = typeof fr;

export function getBlogReportageTf1ClimContent(locale: Locale): BlogArticleContent {
  return locale === "en" ? en : fr;
}
