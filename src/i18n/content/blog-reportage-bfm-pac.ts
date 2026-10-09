import type { Locale } from "../config";
import type { BlogArticleContent } from "./blog-article-types";

const fr = {
  seo: {
    title: "Pompes à chaleur sur BFM TV : reportage HFE Lille",
    description:
      "Reportage BFM TV 2023 : Hecker & Frères Énergie présente l’installation de pompes à chaleur à Lille. Panasonic, transition énergétique et conseils pour votre projet.",
    keywords: [
      "pompe à chaleur BFM",
      "reportage pompe à chaleur Lille",
      "Hecker & Frères Énergie BFM",
      "installation PAC Lille",
      "pompe à chaleur Panasonic",
      "transition énergétique Nord",
    ],
  },
  breadcrumbs: [
    { name: "Accueil", url: "/" },
    { name: "Blog", url: "/blog" },
    {
      name: "Reportage BFM pompes à chaleur",
      url: "/blog/reportage-bfm-pompes-a-chaleur-hfe",
    },
  ],
  article: {
    headline: "Pompes à chaleur sur BFM TV : le reportage avec Hecker & Frères Énergie",
    datePublished: "2023-02-23",
    dateModified: "2023-02-23",
    dateLabel: "Publié le 23 février 2023",
    excerpt:
      "En 2023, BFM TV met en lumière les pompes à chaleur et le travail de HFE à Lille : une installation terrain, des partenaires industriels, et l’enjeu de la transition énergétique.",
  },
  hero: {
    badge: "Reportage BFM",
    lead: "Vidéo publiée le 23 février 2023",
    mediaId: "bfmtv",
  },
  video: {
    youtubeId: "9-bsxBefcBI",
    title: "Reportage sur les pompes à chaleur sur BFM TV",
  },
  intro: [
    "Les pompes à chaleur ne sont plus seulement un sujet d’artisans : elles sont au cœur du débat énergétique national. En 2023, <strong>BFM TV</strong> consacre un reportage à ces équipements — et filme le travail de <strong>Hecker &amp; Frères Énergie (HFE)</strong> sur un chantier à Lille.",
    "Publiée le <strong>23 février 2023</strong> sur la chaîne YouTube de l’entreprise, la vidéo (environ 1&nbsp;min&nbsp;45) montre concrètement ce que signifie installer une PAC côté terrain : matériel, partenaires, et ambition de sortir des énergies fossiles.",
  ],
  sections: [
    {
      id: "pourquoi-bfm",
      title: "Pourquoi les pompes à chaleur intéressent les médias",
      html: `
<p>Hausse des prix de l’énergie, objectifs climatiques, aides à la rénovation : la pompe à chaleur est devenue un symbole de la <strong>transition énergétique</strong> dans l’habitat. Les chaînes d’info y consacrent régulièrement des sujets pour expliquer le fonctionnement, les économies possibles et le rôle des installateurs locaux.</p>
<p>Pour les particuliers de Lille et de la métropole, ce type de reportage a un intérêt simple : voir une installation <strong>réelle</strong>, pas seulement un schéma commercial. C’est exactement ce que HFE a pu partager via ce passage sur BFM TV.</p>
`,
    },
    {
      id: "chantier-lille",
      title: "Un chantier HFE filmé à Lille",
      html: `
<p>Le reportage suit l’équipe HFE autour d’une installation de <strong>pompe à chaleur</strong>, dans un contexte urbain lillois (notamment autour du Vieux-Lille). On y voit le métier tel qu’il se pratique au quotidien : dimensionnement, pose, raccordements hydrauliques et mise en service.</p>
<p>Julien Hecker, associé de l’entreprise, a également relayé ce passage télévisé en remerciant les partenaires du chantier — une façon de rappeler qu’une PAC réussie repose autant sur le <strong>savoir-faire artisan</strong> que sur la qualité des équipements.</p>
`,
    },
    {
      id: "partenaires",
      title: "Panasonic et l’écosystème technique",
      html: `
<p>Sur ce chantier mis en avant par BFM, HFE s’appuie notamment sur du matériel <strong>Panasonic</strong> (heating &amp; cooling), marque avec laquelle l’entreprise travaille régulièrement. Les remerciements publics mentionnent aussi des acteurs de la chaîne hydraulique et frigorifique : Uponor, PROLIANS, Van Marcke ou encore Le Froid Pecomark.</p>
<p>Ce n’est pas un détail marketing : une installation durable dépend du trio <strong>matériel adapté + pose soignée + réseau correctement conçu</strong>. Aujourd’hui encore, HFE reste <a href="{{path:panasonicPartner}}">partenaire Panasonic</a> et installateur <strong>RGE QualiPAC</strong> pour sécuriser performance, garanties et accès aux aides.</p>
`,
    },
    {
      id: "renouvelable",
      title: "L’énergie renouvelable, au cœur du message",
      html: `
<p>Au-delà de l’image télévisée, le message du reportage rejoint la ligne de conduite de HFE : produire de la chaleur à partir d’une source renouvelable — l’air extérieur — pour réduire la dépendance aux énergies fossiles et alléger les factures.</p>
<p>Une <a href="{{path:heatPump}}">pompe à chaleur air-eau</a> bien dimensionnée restitue plusieurs kilowattheures de chaleur pour 1&nbsp;kWh électrique consommé. Couplée aux aides (<a href="{{path:grants}}">MaPrimeRénov’, CEE, TVA réduite</a>), elle devient souvent l’option la plus pertinente pour remplacer une chaudière fioul ou gaz ancienne.</p>
`,
    },
    {
      id: "depuis-2023",
      title: "Depuis 2023 : ce qui continue chez HFE",
      html: `
<p>Le passage sur BFM date de 2023, mais l’enjeu n’a pas disparu. Les demandes de PAC, de <a href="{{path:airConditioning}}">climatisation réversible</a> et de rénovation énergétique restent fortes à Lille et dans un rayon d’environ 50&nbsp;km.</p>
<p>Ce que le reportage illustrait déjà reste vrai aujourd’hui : il faut des équipes formées, un suivi de chantier sérieux, et un accompagnement clair sur les aides. Si vous avez un projet, HFE propose une <a href="{{path:contact}}">étude personnalisée et un devis gratuit</a>, sans engagement.</p>
`,
    },
  ],
  faq: {
    title: "Questions fréquentes",
    items: [
      {
        question: "De quoi parle le reportage BFM sur les pompes à chaleur ?",
        answer:
          "Le sujet met en avant les pompes à chaleur comme solution de chauffage renouvelable, avec le témoignage terrain de Hecker & Frères Énergie sur un chantier à Lille. La vidéo officielle est disponible sur YouTube et intégrée en haut de cet article.",
      },
      {
        question: "Quand a été publié ce reportage ?",
        answer:
          "La vidéo « Reportage sur les pompes à chaleur sur BFM TV » a été publiée le 23 février 2023 sur la chaîne YouTube de HFE. Le passage télévisé a été relayé au même moment par l’équipe sur les réseaux professionnels.",
      },
      {
        question: "HFE installe-t-elle encore des pompes à chaleur Panasonic ?",
        answer:
          "Oui. Hecker & Frères Énergie reste spécialiste des pompes à chaleur et partenaire Panasonic. Chaque projet fait l’objet d’une étude sur site à Lille et métropole, avec accompagnement aux aides lorsque vous êtes éligible.",
      },
      {
        question: "Quelles aides pour une pompe à chaleur en 2026 ?",
        answer:
          "Selon votre situation et le type d’équipement, vous pouvez cumuler MaPrimeRénov’, les CEE (Coup de pouce chauffage) et la TVA à 5,5 %. HFE, certifiée RGE QualiPAC, vous oriente vers le parcours adapté. Voir la page Aides & financement.",
      },
      {
        question: "Où voir la vidéo complète ?",
        answer:
          "Sur YouTube : « Reportage sur les pompes à chaleur sur BFM TV » (https://www.youtube.com/watch?v=9-bsxBefcBI). Elle est également intégrée en haut de cet article.",
      },
    ],
  },
  sources: {
    title: "Sources",
    consulted: "Sources consultées pour la rédaction de cet article",
    items: [
      {
        label:
          "YouTube — Reportage sur les pompes à chaleur sur BFM TV (23 février 2023)",
        url: "https://www.youtube.com/watch?v=9-bsxBefcBI",
      },
      {
        label: "LinkedIn — Julien Hecker, passage de HFE sur BFMTV (février 2023)",
        url: "https://fr.linkedin.com/posts/julien-hecker-185aba252_lille-bfm-pompeachaleur-activity-7026476887170281472-aulB",
      },
    ],
  },
  related: {
    title: "À lire aussi sur hfe-energie.fr",
    links: [
      { label: "Pompes à chaleur", routeId: "heatPump" as const },
      { label: "Partenaire Panasonic", routeId: "panasonicPartner" as const },
      { label: "Aides & financement", routeId: "grants" as const },
      { label: "Réalisations PAC air-eau", routeId: "projectsPacAirEau" as const },
      { label: "Contact / devis", routeId: "contact" as const },
      { label: "Blog", routeId: "blog" as const },
    ],
  },
  cta: {
    title: "Un projet de pompe à chaleur à Lille ?",
    subtitle: "Étude personnalisée, devis gratuit et accompagnement aux aides — sans engagement.",
    primaryRouteId: "heatPump" as const,
    primaryLabel: "Découvrir nos pompes à chaleur",
  },
} satisfies BlogArticleContent;

const en = {
  seo: {
    title: "Heat pumps on BFM TV: HFE Lille report",
    description:
      "2023 BFM TV report: Hecker & Frères Énergie showcases heat-pump installation in Lille. Panasonic gear, energy transition and tips for your project.",
    keywords: [
      "heat pump BFM",
      "heat pump report Lille",
      "Hecker & Frères Énergie BFM",
      "PAC installation Lille",
      "Panasonic heat pump",
    ],
  },
  breadcrumbs: [
    { name: "Home", url: "/en" },
    { name: "Blog", url: "/en/blog" },
    {
      name: "BFM heat pump report",
      url: "/en/blog/bfm-heat-pump-report-hfe",
    },
  ],
  article: {
    headline: "Heat pumps on BFM TV: the report featuring Hecker & Frères Énergie",
    datePublished: "2023-02-23",
    dateModified: "2023-02-23",
    dateLabel: "Published 23 February 2023",
    excerpt:
      "In 2023, BFM TV highlighted heat pumps and HFE’s work in Lille: a real installation, industrial partners, and the energy-transition challenge.",
  },
  hero: {
    badge: "BFM report",
    lead: "Video published on 23 February 2023",
    mediaId: "bfmtv",
  },
  video: {
    youtubeId: "9-bsxBefcBI",
    title: "Report on heat pumps on BFM TV",
  },
  intro: [
    "Heat pumps are now central to the national energy debate. In 2023, <strong>BFM TV</strong> covered these systems — and filmed <strong>Hecker &amp; Frères Énergie (HFE)</strong> on a Lille job site.",
    "Published on <strong>23 February 2023</strong> on the company YouTube channel, the short video (~1&nbsp;min&nbsp;45) shows what installing a heat pump looks like on the ground.",
  ],
  sections: [
    {
      id: "why-media",
      title: "Why media cover heat pumps",
      html: `
<p>Energy prices, climate targets and renovation grants have made heat pumps a symbol of the home <strong>energy transition</strong>. Local installers matter as much as the technology itself.</p>
`,
    },
    {
      id: "lille-site",
      title: "An HFE site filmed in Lille",
      html: `
<p>The report follows the HFE team around a <strong>heat-pump</strong> installation in an urban Lille setting. It shows day-to-day craft: sizing, fitting, hydraulic connections and commissioning — with Panasonic equipment and specialist partners.</p>
`,
    },
    {
      id: "today",
      title: "Still relevant today",
      html: `
<p>Demand for <a href="{{path:heatPump}}">heat pumps</a>, <a href="{{path:airConditioning}}">reversible air conditioning</a> and renovation support remains strong. HFE, <strong>RGE QualiPAC</strong> and a <a href="{{path:panasonicPartner}}">Panasonic partner</a>, still offers a free study and quote via <a href="{{path:contact}}">contact</a>.</p>
`,
    },
  ],
  faq: {
    title: "Frequently asked questions",
    items: [
      {
        question: "What is the BFM report about?",
        answer:
          "It highlights heat pumps as a renewable heating solution, with Hecker & Frères Énergie filmed on a Lille installation. The video is on YouTube and embedded above.",
      },
      {
        question: "When was the video published?",
        answer:
          "“Reportage sur les pompes à chaleur sur BFM TV” was published on 23 February 2023 on HFE’s YouTube channel.",
      },
      {
        question: "Does HFE still install Panasonic heat pumps?",
        answer:
          "Yes. HFE remains a heat-pump specialist and Panasonic partner, with on-site studies in Lille and the metro area.",
      },
      {
        question: "Where can I watch the full video?",
        answer:
          "On YouTube: https://www.youtube.com/watch?v=9-bsxBefcBI — also embedded at the top of this article.",
      },
    ],
  },
  sources: {
    title: "Sources",
    consulted: "Sources used for this article",
    items: [
      {
        label: "YouTube — Report on heat pumps on BFM TV (23 February 2023)",
        url: "https://www.youtube.com/watch?v=9-bsxBefcBI",
      },
      {
        label: "LinkedIn — Julien Hecker, HFE on BFMTV (February 2023)",
        url: "https://fr.linkedin.com/posts/julien-hecker-185aba252_lille-bfm-pompeachaleur-activity-7026476887170281472-aulB",
      },
    ],
  },
  related: {
    title: "Also on hfe-energie.fr",
    links: [
      { label: "Heat pumps", routeId: "heatPump" as const },
      { label: "Panasonic partner", routeId: "panasonicPartner" as const },
      { label: "Grants & financing", routeId: "grants" as const },
      { label: "Air-to-water PAC projects", routeId: "projectsPacAirEau" as const },
      { label: "Contact / quote", routeId: "contact" as const },
      { label: "Blog", routeId: "blog" as const },
    ],
  },
  cta: {
    title: "Planning a heat pump in Lille?",
    subtitle: "Personalised study, free quote and grant support — no obligation.",
    primaryRouteId: "heatPump" as const,
    primaryLabel: "Explore our heat pumps",
  },
} satisfies BlogArticleContent;

export type BlogReportageBfmPacContent = typeof fr;

export function getBlogReportageBfmPacContent(locale: Locale): BlogArticleContent {
  return locale === "en" ? en : fr;
}
