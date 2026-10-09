import type { Locale } from "../config";
import type { BlogArticleContent } from "./blog-article-types";

const fr = {
  seo: {
    title: "Recrutement plomberie-chauffage : reportage HFE",
    description:
      "Reportage 2022 : Hecker & Frères Énergie face à la pénurie de plombiers-chauffagistes. Demande en hausse, horaires chargés, apprentissage et offres d’emploi à Lille.",
    keywords: [
      "recrutement plombier Lille",
      "pénurie plombiers chauffagistes",
      "apprentissage BTP",
      "Hecker & Frères Énergie",
      "offre emploi chauffagiste Lille",
      "métiers du bâtiment",
    ],
  },
  breadcrumbs: [
    { name: "Accueil", url: "/" },
    { name: "Blog", url: "/blog" },
    {
      name: "Reportage recrutement",
      url: "/blog/reportage-recrutement-plomberie-chauffage-hfe",
    },
  ],
  article: {
    headline: "Pénurie de plombiers-chauffagistes : le reportage chez Hecker & Frères Énergie",
    datePublished: "2022-01-23",
    dateModified: "2022-01-23",
    dateLabel: "Publié le 23 janvier 2022",
    excerpt:
      "Un reportage met en lumière la difficulté de recruter dans la plomberie et le chauffage. Chez HFE, la demande explose, les journées s’allongent, et l’apprentissage devient une réponse concrète.",
  },
  hero: {
    badge: "Reportage",
    lead: "Vidéo publiée le 23 janvier 2022",
  },
  video: {
    youtubeId: "YOFCaRHBqBQ",
    title: "Reportage sur une entreprise de plomberie (Hecker & Frères Energie) qui peine à recruter",
  },
  intro: [
    "Trouver un plombier disponible, compétent et rapidement mobilisable : pour beaucoup de particuliers, le parcours du combattant a commencé bien avant 2022. Un reportage consacré à <strong>Hecker &amp; Frères Énergie (HFE)</strong> illustre concrètement ce que vivent les artisans du bâtiment quand la demande grimpe… et que les candidats manquent.",
    "Publiée le <strong>23 janvier 2022</strong>, la vidéo montre une réalité du terrain à Lille : des clients qui attendent parfois plus d’un mois pour une intervention, une équipe qui multiplie les heures, et un secteur entier en quête de renforts.",
  ],
  sections: [
    {
      id: "temoignage-client",
      title: "Du côté des clients : des délais qui s’allongent",
      html: `
<p>Dans le reportage, une cliente doit remettre sa plomberie aux normes. Elle attend environ <strong>un mois et demi</strong> pour trouver une entreprise disponible. Le constat est net : les métiers de demain du bâtiment sont de moins en moins pourvus, alors même que le besoin reste « honorable » et quotidien.</p>
<p>Obtenir un rendez-vous n’est plus seulement une question de prix : c’est aussi une question de <strong>disponibilité</strong> et de <strong>compétence</strong>. Pour les particuliers, cela signifie planifier plus tôt les travaux de salle de bain, de chauffage ou de dépannage.</p>
`,
    },
    {
      id: "demande-en-hausse",
      title: "Une demande boostée par le contexte",
      html: `
<p>Le reportage relie cette tension à une hausse de la demande liée à la période de crise sanitaire : rester davantage chez soi a poussé de nombreux foyers à lancer des projets de <strong>rénovation de salle de bain</strong> ou d’amélioration du confort.</p>
<p>Résultat : des entreprises comme HFE se retrouvent <strong>débordées</strong>. Les gérants évoquent des semaines pouvant atteindre <strong>50 heures</strong>, avec parfois le regret de devoir refuser des chantiers faute de pouvoir « être au four et au moulin ».</p>
`,
    },
    {
      id: "organisation-hfe",
      title: "Chez HFE : répondre au maximum de clients",
      html: `
<p>Face à cette pression, l’équipe explique sa ligne de conduite : courir partout, faire beaucoup d’heures, et tenter de satisfaire le plus grand nombre. Ce n’est pas un choix de confort, mais une réponse à une réalité économique et humaine du métier.</p>
<p>Le reportage rappelle aussi le profil de l’entreprise : des jeunes associés issus du terrain, formés aux exigences de la plomberie et du chauffage, qui misent sur la proximité et la qualité d’intervention… tout en cherchant à <strong>recruter rapidement</strong> pour retrouver un rythme soutenable.</p>
`,
    },
    {
      id: "apprentissage",
      title: "L’apprentissage, un levier concret",
      html: `
<p>En dernier recours, l’entreprise fait appel à un <strong>apprenti</strong>. Une aide précieuse, même si le métier reste exigeant : le dos, le port de charges, les interventions en cave… Remonter une chaudière de près de <strong>80&nbsp;kg</strong> n’a rien d’anecdotique.</p>
<p>Le reportage souligne un paradoxe national : le bâtiment peine à recruter « comme jamais » depuis des décennies, alors que les besoins restent constants — construction, rénovation, routes, logements. Beaucoup de jeunes se sont tournés vers l’informatique ou les études longues, laissant le BTP en tension.</p>
<p>Bonne nouvelle évoquée dans la vidéo : <strong>l’apprentissage progresse</strong> dans le BTP (hausse mentionnée d’environ 7&nbsp;% sur un an à l’époque du reportage). Une piste que HFE continue d’explorer aujourd’hui via sa page <a href="{{path:recruitment}}">recrutement</a>.</p>
`,
    },
    {
      id: "et-aujourd-hui",
      title: "Et aujourd’hui ?",
      html: `
<p>Depuis 2022, la tension sur les métiers manuels n’a pas disparu. Les projets de <a href="{{path:heatPump}}">pompes à chaleur</a>, de <a href="{{path:airConditioning}}">climatisation</a> et de rénovation énergétique ont même renforcé le besoin d’équipes formées et disponibles.</p>
<p>Si vous êtes artisan, apprenti ou technicien motivé par le terrain à Lille et métropole, HFE reste à l’écoute. Et si vous êtes particulier en attente d’un chantier, anticiper votre projet reste le meilleur moyen d’obtenir un créneau dans de bonnes conditions — <a href="{{path:contact}}">demande de devis</a> sans engagement.</p>
`,
    },
  ],
  faq: {
    title: "Questions fréquentes",
    items: [
      {
        question: "Pourquoi est-il si difficile de trouver un plombier-chauffagiste ?",
        answer:
          "La demande de travaux reste forte (rénovation, confort, énergies renouvelables) tandis que le vivier de candidats formés est insuffisant. Beaucoup de jeunes s’orientent vers d’autres filières. Les entreprises sérieuses sont donc souvent saturées, avec des délais allongés pour les particuliers.",
      },
      {
        question: "HFE recrute-t-elle encore ?",
        answer:
          "Oui. Selon les périodes, Hecker & Frères Énergie ouvre des postes ou des alternances en plomberie, chauffage, climatisation et pompes à chaleur. Consultez la page Recrutement du site pour voir les offres en cours et postuler.",
      },
      {
        question: "L’apprentissage est-il une bonne porte d’entrée ?",
        answer:
          "Oui. Le reportage le montre clairement : un apprenti apporte une aide concrète, apprend sur le terrain et peut évoluer rapidement. Le métier est physique, mais formateur, avec de vrais débouchés locaux à Lille et dans la MEL.",
      },
      {
        question: "Comment réduire les délais pour mes travaux ?",
        answer:
          "Anticipez votre projet, précisez votre besoin (dépannage, salle de bain, PAC, clim) et demandez une étude tôt. Un dossier clair permet à l’entreprise de planifier plus vite. Chez HFE, le devis reste gratuit et sans engagement.",
      },
      {
        question: "Où voir le reportage complet ?",
        answer:
          "La vidéo est disponible sur YouTube : « Reportage sur une entreprise de plomberie (Hecker & Frères Energie) qui peine à recruter », publiée le 23 janvier 2022. Elle est également intégrée en haut de cet article.",
      },
    ],
  },
  sources: {
    title: "Source",
    consulted: "Vidéo consultée pour la rédaction de cet article",
    items: [
      {
        label:
          "YouTube — Reportage sur une entreprise de plomberie (Hecker & Frères Energie) qui peine à recruter (23 janvier 2022)",
        url: "https://www.youtube.com/watch?v=YOFCaRHBqBQ",
      },
    ],
  },
  related: {
    title: "À lire aussi sur hfe-energie.fr",
    links: [
      { label: "Recrutement HFE", routeId: "recruitment" as const },
      { label: "Plomberie", routeId: "plumbing" as const },
      { label: "Pompes à chaleur", routeId: "heatPump" as const },
      { label: "Climatisation", routeId: "airConditioning" as const },
      { label: "Contact / devis", routeId: "contact" as const },
      { label: "Blog", routeId: "blog" as const },
    ],
  },
  cta: {
    title: "Envie de rejoindre l’équipe HFE ?",
    subtitle: "Consultez nos offres ou envoyez votre candidature. Les profils motivés sont les bienvenus.",
    primaryRouteId: "recruitment" as const,
    primaryLabel: "Voir le recrutement",
  },
} satisfies BlogArticleContent;

const en = {
  seo: {
    title: "Plumbing & heating recruitment: HFE report",
    description:
      "2022 report: Hecker & Frères Énergie facing a shortage of plumbers and heating engineers. Rising demand, long hours, apprenticeships and jobs in Lille.",
    keywords: [
      "plumber jobs Lille",
      "heating engineer shortage",
      "construction apprenticeship",
      "Hecker & Frères Énergie",
      "HVAC jobs Lille",
    ],
  },
  breadcrumbs: [
    { name: "Home", url: "/en" },
    { name: "Blog", url: "/en/blog" },
    {
      name: "Recruitment report",
      url: "/en/blog/recruitment-report-plumbing-heating-hfe",
    },
  ],
  article: {
    headline: "Shortage of plumbers and heating engineers: the report at HFE",
    datePublished: "2022-01-23",
    dateModified: "2022-01-23",
    dateLabel: "Published 23 January 2022",
    excerpt:
      "A report highlights how hard it is to recruit in plumbing and heating. At HFE, demand is surging, working hours are long, and apprenticeships are a concrete answer.",
  },
  hero: {
    badge: "Report",
    lead: "Video published on 23 January 2022",
  },
  video: {
    youtubeId: "YOFCaRHBqBQ",
    title: "Report on a plumbing company (Hecker & Frères Energie) struggling to recruit",
  },
  intro: [
    "Finding an available, skilled plumber quickly has become a challenge for many households. A report featuring <strong>Hecker &amp; Frères Énergie (HFE)</strong> shows what local contractors face when demand rises and candidates are scarce.",
    "Published on <strong>23 January 2022</strong>, the video captures a Lille-area reality: clients waiting weeks for work, a team putting in long hours, and a whole sector looking for reinforcements.",
  ],
  sections: [
    {
      id: "customers",
      title: "For customers: longer waiting times",
      html: `
<p>In the report, a customer needs plumbing brought up to standard and waits about <strong>a month and a half</strong> to find an available company. Availability and competence matter as much as price.</p>
`,
    },
    {
      id: "demand",
      title: "Demand boosted by the context",
      html: `
<p>The report links the pressure to higher demand during the health-crisis period, with more bathroom and comfort projects at home. Firms like HFE can work up to <strong>50 hours a week</strong> and sometimes have to turn work down.</p>
`,
    },
    {
      id: "apprenticeship",
      title: "Apprenticeship as a practical lever",
      html: `
<p>HFE brings in an <strong>apprentice</strong> as valuable support. The trade is physical — including heavy equipment — but rewarding. The report also notes rising apprenticeship interest in construction. See our current openings on the <a href="{{path:recruitment}}">careers</a> page.</p>
`,
    },
    {
      id: "today",
      title: "And today?",
      html: `
<p>Skills shortages have not disappeared. Heat pumps, air conditioning and energy renovation still need trained teams. Motivated candidates in Lille are welcome — and homeowners should plan projects early via a <a href="{{path:contact}}">free quote</a>.</p>
`,
    },
  ],
  faq: {
    title: "Frequently asked questions",
    items: [
      {
        question: "Why is it so hard to find a plumber or heating engineer?",
        answer:
          "Work demand remains high while too few trained candidates enter the trade. Serious firms are often fully booked, which lengthens waiting times for households.",
      },
      {
        question: "Is HFE still hiring?",
        answer:
          "Yes, depending on the period. Check the careers page for current roles and apprenticeships in plumbing, heating, air conditioning and heat pumps.",
      },
      {
        question: "Is an apprenticeship a good way in?",
        answer:
          "Yes. The report shows how valuable an apprentice can be on site. The work is physical but offers strong local career prospects.",
      },
      {
        question: "Where can I watch the full report?",
        answer:
          "On YouTube: “Reportage sur une entreprise de plomberie (Hecker & Frères Energie) qui peine à recruter”, published on 23 January 2022. It is also embedded at the top of this article.",
      },
    ],
  },
  sources: {
    title: "Source",
    consulted: "Video used as the basis for this article",
    items: [
      {
        label:
          "YouTube — Report on a plumbing company (Hecker & Frères Energie) struggling to recruit (23 January 2022)",
        url: "https://www.youtube.com/watch?v=YOFCaRHBqBQ",
      },
    ],
  },
  related: {
    title: "Also on hfe-energie.fr",
    links: [
      { label: "Careers at HFE", routeId: "recruitment" as const },
      { label: "Plumbing", routeId: "plumbing" as const },
      { label: "Heat pumps", routeId: "heatPump" as const },
      { label: "Air conditioning", routeId: "airConditioning" as const },
      { label: "Contact / quote", routeId: "contact" as const },
      { label: "Blog", routeId: "blog" as const },
    ],
  },
  cta: {
    title: "Want to join the HFE team?",
    subtitle: "Check our openings or send your application. Motivated profiles are welcome.",
    primaryRouteId: "recruitment" as const,
    primaryLabel: "View careers",
  },
} satisfies BlogArticleContent;

export type BlogReportageRecrutementContent = typeof fr;

export function getBlogReportageRecrutementContent(locale: Locale): BlogArticleContent {
  return locale === "en" ? en : fr;
}
