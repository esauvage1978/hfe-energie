import type { Locale } from "../config";
import type { BlogArticleContent } from "./blog-article-types";

const LINKEDIN_URL =
  "https://www.linkedin.com/posts/julien-hecker-185aba252_heckerfr%C3%A8res%C3%A9nergie-pompe%C3%A0chaleur-panasonic-activity-7346030338780880896-1iqR";

const fr = {
  seo: {
    title: "PAC Panasonic sur TF1 : reportage HFE à Lille",
    description:
      "Reportage TF1 2025 : Hecker & Frères Énergie installe une pompe à chaleur Panasonic à Lille. Confort été/hiver, économies et entretien — retour terrain.",
    keywords: [
      "pompe à chaleur TF1",
      "reportage TF1 climatisation Lille",
      "Hecker & Frères Énergie TF1",
      "PAC Panasonic Lille",
      "clim réversible appartement",
      "remplacer climatiseur mobile",
    ],
  },
  breadcrumbs: [
    { name: "Accueil", url: "/" },
    { name: "Blog", url: "/blog" },
    {
      name: "Reportage TF1 pompe à chaleur",
      url: "/blog/reportage-tf1-pompe-a-chaleur-climatisation-hfe",
    },
  ],
  article: {
    headline: "Pompe à chaleur Panasonic sur TF1 : le reportage avec Hecker & Frères Énergie",
    datePublished: "2025-07-02",
    dateModified: "2025-07-02",
    dateLabel: "Publié le 2 juillet 2025",
    excerpt:
      "En pleine canicule à Lille, TF1 filme la mise en service d’une pompe à chaleur Panasonic installée par HFE : confort immédiat, chauffage l’hiver, et facture d’énergie fortement réduite.",
  },
  hero: {
    badge: "Reportage TF1",
    lead: "Publication LinkedIn du 2 juillet 2025",
    mediaId: "tf1",
  },
  video: {
    src: "/assets/blog/reportage-tf1-pac-panasonic.mp4",
    linkedinActivityId: "7346030338780880896",
    title: "Petit passage sur TF1 — Pompe à chaleur Panasonic HFE",
  },
  intro: [
    "Combien consomme une climatisation ? Quels effets sur l’environnement ? Le JT de <strong>TF1</strong> s’est penché sur ces questions… et a suivi un chantier de <strong>Hecker &amp; Frères Énergie (HFE)</strong> à Lille.",
    "Le 2 juillet 2025, Julien Hecker a relayé ce passage télévisé sur <a href=\"" +
      LINKEDIN_URL +
      "\" rel=\"noopener noreferrer\" target=\"_blank\">LinkedIn</a> : une installation de <strong>pompe à chaleur Panasonic</strong>, conçue pour rafraîchir l’été et chauffer l’hiver — bien loin d’un simple climatiseur mobile. La vidéo du reportage est intégrée ci-dessous.",
  ],
  sections: [
    {
      id: "jour-canicule",
      title: "Mise en service le jour de la canicule",
      html: `
<p>Dans le reportage, la fin des travaux tombe pile au bon moment : il fait <strong>37&nbsp;°C à Lille</strong>, et environ <strong>33&nbsp;°C</strong> dans l’appartement du client, Romain. Au sortir du travail, l’objectif est simple : retrouver un logement vivable, prendre une douche… et ne plus transpirer dès la porte franchie.</p>
<p>Romain a troqué son <strong>climatiseur mobile</strong> contre une solution fixe : une pompe à chaleur qui <strong>rafraîchit en été</strong> et <strong>chauffe en hiver</strong>. Le timing du reportage rend le confort immédiatement tangible — c’est souvent ce qui manque dans les discours purement techniques.</p>
`,
    },
    {
      id: "economies",
      title: "Des économies d’énergie concrètes",
      html: `
<p>Le sujet TF1 rappelle un point clé : par rapport à un chauffage électrique classique, une installation de ce type peut <strong>diviser presque par trois</strong> la facture d’énergie associée. Moins de consommation, plus de confort — l’équation qui intéresse les habitants du Nord face aux étés de plus en plus chauds et aux hivers encore exigeants.</p>
<p>Pour ce chantier, le reportage évoque un investissement d’environ <strong>16&nbsp;000&nbsp;€</strong>, auquel s’ajoute un entretien de l’ordre de <strong>180&nbsp;€ par an</strong>. Ces chiffres dépendent toujours du logement, du dimensionnement et des options (pilotage, nombre d’unités, accès chantier…). Chez HFE, chaque projet commence par une <a href="{{path:contact}}">étude personnalisée</a>.</p>
`,
    },
    {
      id: "panasonic-partenaires",
      title: "Panasonic, Airzone et la chaîne technique",
      html: `
<p>Julien Hecker remercie l’équipe TF1, mais aussi les partenaires du chantier : <strong>Panasonic Heating &amp; Cooling</strong>, <strong>Airzone Control</strong> (pilotage / zonage) et <strong>Le Froid Pecomark</strong>. Une installation réussie, ce n’est pas seulement une unité extérieure sur un balcon : c’est un système cohérent, posé dans les règles de l’art.</p>
<p>HFE reste <a href="{{path:panasonicPartner}}">partenaire Panasonic</a> et installateur <strong>RGE QualiPAC</strong>. Que vous visiez une <a href="{{path:airConditioning}}">climatisation réversible</a> ou une <a href="{{path:heatPump}}">pompe à chaleur air-eau</a>, l’enjeu est le même : performance, silence, durabilité et accès éventuel aux <a href="{{path:grants}}">aides</a>.</p>
`,
    },
    {
      id: "mobile-vs-fixe",
      title: "Climatiseur mobile vs pompe à chaleur fixe",
      html: `
<p>Le reportage oppose clairement deux approches. Le climatiseur mobile soulage un instant, mais reste bruyant, peu efficace, et ne prépare pas l’hiver. La pompe à chaleur air/air (clim réversible fixe) assure un <strong>confort 2-en-1</strong> : froid l’été, chaleur l’hiver, avec un bien meilleur rendement.</p>
<p>Depuis juillet 2026, certaines PAC air/air réversibles fixes peuvent aussi bénéficier du <a href="{{path:blogTvaClimReversible}}">taux de TVA à 5,5&nbsp;%</a> sous conditions. Un argument supplémentaire pour passer à une installation pérenne, plutôt qu’à un appareil d’appoint.</p>
`,
    },
    {
      id: "et-maintenant",
      title: "Vous avez un projet similaire à Lille ?",
      html: `
<p>Canicule, appartement surchauffé, radiateurs électriques coûteux : le cas filmé par TF1 ressemble à celui de nombreux foyers de la métropole. HFE intervient à Lille et dans un rayon d’environ 50&nbsp;km pour dimensionner, poser et mettre en service des solutions Panasonic adaptées à votre logement.</p>
<p>Demandez un devis gratuit : nous vous indiquons la solution technique pertinente, le budget réaliste et les aides mobilisables — sans engagement.</p>
`,
    },
  ],
  faq: {
    title: "Questions fréquentes",
    items: [
      {
        question: "De quoi parle le reportage TF1 avec HFE ?",
        answer:
          "Le sujet traite de la consommation et de l’impact de la climatisation, en suivant la mise en service d’une pompe à chaleur Panasonic installée par Hecker & Frères Énergie chez un particulier à Lille, le jour d’une forte chaleur.",
      },
      {
        question: "Quelle différence avec un climatiseur mobile ?",
        answer:
          "Le client du reportage a remplacé un climatiseur mobile par une pompe à chaleur fixe : rafraîchissement l’été, chauffage l’hiver, et bien meilleur rendement énergétique qu’un chauffage électrique classique.",
      },
      {
        question: "Quel budget est évoqué dans le reportage ?",
        answer:
          "Environ 16 000 € pour l’installation présentée, plus environ 180 € par an d’entretien. Ce montant n’est pas un tarif unique : il dépend du logement, de la puissance et du type de système. HFE établit un devis personnalisé après visite.",
      },
      {
        question: "Quand a été publié ce retour LinkedIn ?",
        answer:
          "Le 2 juillet 2025, par Julien Hecker, pour relayer le passage de HFE dans le reportage TF1 consacré aux pompes à chaleur / climatisation.",
      },
      {
        question: "Où retrouver la publication ?",
        answer:
          "Sur le profil LinkedIn de Julien Hecker : le post « Petit passage sur TF1 » présentant l’installation Panasonic réalisée par Hecker Frères Énergie.",
      },
    ],
  },
  sources: {
    title: "Source",
    consulted: "Source consultée pour la rédaction de cet article",
    items: [
      {
        label:
          "LinkedIn — Julien Hecker, passage TF1 pompe à chaleur Panasonic HFE (2 juillet 2025)",
        url: LINKEDIN_URL,
      },
    ],
  },
  related: {
    title: "À lire aussi sur hfe-energie.fr",
    links: [
      { label: "Climatisation", routeId: "airConditioning" as const },
      { label: "Pompes à chaleur", routeId: "heatPump" as const },
      { label: "Partenaire Panasonic", routeId: "panasonicPartner" as const },
      { label: "TVA 5,5 % clim réversible", routeId: "blogTvaClimReversible" as const },
      { label: "Reportage BFM pompes à chaleur", routeId: "blogReportageBfmPac" as const },
      { label: "Contact / devis", routeId: "contact" as const },
    ],
  },
  cta: {
    title: "Remplacer votre clim mobile à Lille ?",
    subtitle: "Étude Panasonic, devis gratuit et accompagnement aux aides — sans engagement.",
    primaryRouteId: "airConditioning" as const,
    primaryLabel: "Voir la climatisation",
  },
} satisfies BlogArticleContent;

const en = {
  seo: {
    title: "Panasonic heat pump on TF1: HFE Lille report",
    description:
      "2025 TF1 report: Hecker & Frères Énergie installs a Panasonic heat pump in Lille. Summer/winter comfort, energy savings and maintenance — on-site story.",
    keywords: [
      "heat pump TF1",
      "TF1 air conditioning Lille",
      "Hecker & Frères Énergie TF1",
      "Panasonic PAC Lille",
      "replace portable air conditioner",
    ],
  },
  breadcrumbs: [
    { name: "Home", url: "/en" },
    { name: "Blog", url: "/en/blog" },
    {
      name: "TF1 heat pump report",
      url: "/en/blog/tf1-heat-pump-air-conditioning-report-hfe",
    },
  ],
  article: {
    headline: "Panasonic heat pump on TF1: the report featuring Hecker & Frères Énergie",
    datePublished: "2025-07-02",
    dateModified: "2025-07-02",
    dateLabel: "Published 2 July 2025",
    excerpt:
      "During a heatwave in Lille, TF1 filmed the commissioning of a Panasonic heat pump installed by HFE: immediate comfort, winter heating, and a sharply lower energy bill.",
  },
  hero: {
    badge: "TF1 report",
    lead: "LinkedIn post dated 2 July 2025",
    mediaId: "tf1",
  },
  video: {
    src: "/assets/blog/reportage-tf1-pac-panasonic.mp4",
    linkedinActivityId: "7346030338780880896",
    title: "On TF1 — Panasonic heat pump by HFE",
  },
  intro: [
    "How much does air conditioning consume? What about its environmental impact? <strong>TF1</strong> covered the topic — and followed a <strong>Hecker &amp; Frères Énergie (HFE)</strong> job in Lille.",
    "On 2 July 2025, Julien Hecker shared the TV feature on <a href=\"" +
      LINKEDIN_URL +
      "\" rel=\"noopener noreferrer\" target=\"_blank\">LinkedIn</a>: a <strong>Panasonic heat pump</strong> that cools in summer and heats in winter — far beyond a portable AC unit. The report video is embedded below.",
  ],
  sections: [
    {
      id: "heatwave-day",
      title: "Commissioned on a heatwave day",
      html: `
<p>Works finished just as Lille hit about <strong>37&nbsp;°C</strong>, with roughly <strong>33&nbsp;°C</strong> inside the customer’s flat. Romain replaced a <strong>portable air conditioner</strong> with a fixed heat pump for summer cooling and winter heating.</p>
`,
    },
    {
      id: "savings",
      title: "Concrete energy savings",
      html: `
<p>Compared with classic electric heating, such a system can cut the related energy bill by nearly <strong>three</strong>. The report mentions about <strong>€16,000</strong> for that installation and roughly <strong>€180/year</strong> for maintenance — indicative figures only. HFE always starts with a <a href="{{path:contact}}">personalised study</a>.</p>
`,
    },
    {
      id: "partners",
      title: "Panasonic, Airzone and partners",
      html: `
<p>Credits go to TF1, <strong>Panasonic</strong>, <strong>Airzone Control</strong> and <strong>Le Froid Pecomark</strong>. HFE remains a <a href="{{path:panasonicPartner}}">Panasonic partner</a> and <strong>RGE QualiPAC</strong> installer for <a href="{{path:airConditioning}}">reversible air conditioning</a> and <a href="{{path:heatPump}}">heat pumps</a>.</p>
`,
    },
  ],
  faq: {
    title: "Frequently asked questions",
    items: [
      {
        question: "What is the TF1 report about?",
        answer:
          "It covers air-conditioning use and impact, following HFE commissioning a Panasonic heat pump for a Lille resident on a very hot day.",
      },
      {
        question: "What budget does the report mention?",
        answer:
          "About €16,000 for that installation, plus around €180 per year for maintenance. Actual quotes depend on the home and system — ask HFE for a site visit.",
      },
      {
        question: "When was the LinkedIn post published?",
        answer: "On 2 July 2025, by Julien Hecker, sharing HFE’s appearance in the TF1 report.",
      },
      {
        question: "Where can I find the post?",
        answer:
          "On Julien Hecker’s LinkedIn profile: the “Petit passage sur TF1” post about the Panasonic installation by Hecker Frères Énergie.",
      },
    ],
  },
  sources: {
    title: "Source",
    consulted: "Source used for this article",
    items: [
      {
        label:
          "LinkedIn — Julien Hecker, TF1 Panasonic heat-pump feature with HFE (2 July 2025)",
        url: LINKEDIN_URL,
      },
    ],
  },
  related: {
    title: "Also on hfe-energie.fr",
    links: [
      { label: "Air conditioning", routeId: "airConditioning" as const },
      { label: "Heat pumps", routeId: "heatPump" as const },
      { label: "Panasonic partner", routeId: "panasonicPartner" as const },
      { label: "5.5% VAT reversible AC", routeId: "blogTvaClimReversible" as const },
      { label: "BFM heat pump report", routeId: "blogReportageBfmPac" as const },
      { label: "Contact / quote", routeId: "contact" as const },
    ],
  },
  cta: {
    title: "Ready to replace portable AC in Lille?",
    subtitle: "Panasonic study, free quote and grant support — no obligation.",
    primaryRouteId: "airConditioning" as const,
    primaryLabel: "Explore air conditioning",
  },
} satisfies BlogArticleContent;

export type BlogReportageTf1PacContent = typeof fr;

export function getBlogReportageTf1PacContent(locale: Locale): BlogArticleContent {
  return locale === "en" ? en : fr;
}
