import type { BlogMediaId } from "@data/blog-media";
import type { Locale } from "../config";
import type { RouteId } from "../routes";

const fr = {
  seo: {
    title: "Blog énergie & rénovation | HFE Lille",
    description:
      "Articles HFE Énergie : pompes à chaleur, climatisation, aides, TVA et conseils pratiques pour votre projet à Lille et métropole.",
    keywords: [
      "blog pompe à chaleur",
      "blog climatisation Lille",
      "aides rénovation énergétique",
      "TVA climatisation réversible",
      "HFE Énergie",
    ],
  },
  breadcrumbs: [
    { name: "Accueil", url: "/" },
    { name: "Blog", url: "/blog" },
  ],
  hero: {
    brandName: "Hecker & Frères Energie",
    brandTagline: "Plomberie - Chauffage - Energie renouvelable",
    titleEyebrow: "LE",
    title: "BLOG",
    descriptionBefore: "Conseils, actualités et solutions pour un habitat",
    highlights: ["confortable", "économique", "durable"] as const,
    pillars: [
      { icon: "ac-unit" as const, labelStrong: "CONFORT", labelRest: "au quotidien", tone: "primary" as const },
      { icon: "leaf" as const, labelStrong: "ÉCONOMIES", labelRest: "d'énergie", tone: "accent" as const },
      { icon: "shield" as const, labelStrong: "ENGAGEMENT", labelRest: "durable", tone: "primary" as const },
    ],
    services: [
      { icon: "droplet" as const, label: "PLOMBERIE" },
      { icon: "radiator" as const, label: "CHAUFFAGE" },
      { icon: "leaf" as const, label: "ÉNERGIE RENOUVELABLE" },
    ],
    sloganBefore: "L'énergie de vos projets, le confort de ",
    sloganHighlight: "demain",
    sloganAfter: ".",
    image: {
      src: "/assets/pompeAChaleur/pompeAChaleur.jpg",
      alt: "Pompe à chaleur et climatisation installées par Hecker & Frères Énergie (HFE)",
      width: 736,
      height: 482,
    },
  },
  posts: [
    {
      routeId: "blogTvaClimReversible" as RouteId,
      date: "2026-07-19",
      dateLabel: "19 juillet 2026",
      title: "La baisse de la TVA sur les climatisations réversibles : ce qui change réellement",
      excerpt:
        "Depuis le 18 juillet 2026, certaines PAC air/air peuvent bénéficier du taux de TVA à 5,5 %. Conditions, dates, simulations et points de vigilance.",
      tag: "Actualité fiscale",
    },
    {
      routeId: "blogReportageTf1Clim" as RouteId,
      date: "2026-06-01",
      dateLabel: "1er juin 2026",
      title: "Climatisation Panasonic sur TF1 : le chantier HFE filmé à Lille",
      excerpt:
        "JT TF1 20h : pose d’une clim Panasonic à Lille, anticipation dès mars, et délais de 3 semaines à 2 mois en période de canicule.",
      tag: "Reportage",
      mediaId: "tf1" as BlogMediaId,
    },
    {
      routeId: "blogReportageTf1Pac" as RouteId,
      date: "2025-07-02",
      dateLabel: "2 juillet 2025",
      title: "Pompe à chaleur Panasonic sur TF1 : le reportage avec Hecker & Frères Énergie",
      excerpt:
        "Reportage TF1 : mise en service d’une PAC Panasonic à Lille un jour de canicule — confort été/hiver et économies d’énergie.",
      tag: "Reportage",
      mediaId: "tf1" as BlogMediaId,
    },
    {
      routeId: "blogReportageBfmPac" as RouteId,
      date: "2023-02-23",
      dateLabel: "23 février 2023",
      title: "Pompes à chaleur sur BFM TV : le reportage avec Hecker & Frères Énergie",
      excerpt:
        "Reportage BFM TV : installation de pompes à chaleur à Lille, matériel Panasonic et transition énergétique — vidéo intégrée.",
      tag: "Reportage",
      mediaId: "bfmtv" as BlogMediaId,
    },
    {
      routeId: "blogReportageRecrutement" as RouteId,
      date: "2022-01-23",
      dateLabel: "23 janvier 2022",
      title: "Pénurie de plombiers-chauffagistes : le reportage chez Hecker & Frères Énergie",
      excerpt:
        "Reportage vidéo : demande en hausse, semaines à 50 h, apprentissage et difficulté à recruter dans la plomberie-chauffage à Lille.",
      tag: "Reportage",
    },
  ],
  cta: {
    title: "Un projet énergie à chiffrer ?",
    subtitle: "Étude personnalisée et devis gratuit, sans engagement.",
  },
} as const;

const en = {
  seo: {
    title: "Energy & renovation blog | HFE Lille",
    description:
      "HFE Énergie articles: heat pumps, air conditioning, grants, VAT and practical tips for your project in Lille and the metro area.",
    keywords: [
      "heat pump blog",
      "air conditioning Lille blog",
      "energy renovation grants",
      "VAT reversible air conditioning",
      "HFE Énergie",
    ],
  },
  breadcrumbs: [
    { name: "Home", url: "/en" },
    { name: "Blog", url: "/en/blog" },
  ],
  hero: {
    brandName: "Hecker & Frères Energie",
    brandTagline: "Plumbing - Heating - Renewable energy",
    titleEyebrow: "THE",
    title: "BLOG",
    descriptionBefore: "Tips, news and solutions for a home that is",
    highlights: ["comfortable", "economical", "sustainable"] as const,
    pillars: [
      { icon: "ac-unit" as const, labelStrong: "COMFORT", labelRest: "every day", tone: "primary" as const },
      { icon: "leaf" as const, labelStrong: "SAVINGS", labelRest: "on energy", tone: "accent" as const },
      { icon: "shield" as const, labelStrong: "COMMITMENT", labelRest: "to sustainability", tone: "primary" as const },
    ],
    services: [
      { icon: "droplet" as const, label: "PLUMBING" },
      { icon: "radiator" as const, label: "HEATING" },
      { icon: "leaf" as const, label: "RENEWABLE ENERGY" },
    ],
    sloganBefore: "The energy for your projects, the comfort of ",
    sloganHighlight: "tomorrow",
    sloganAfter: ".",
    image: {
      src: "/assets/pompeAChaleur/pompeAChaleur.jpg",
      alt: "Heat pump and air conditioning installed by Hecker & Frères Énergie (HFE)",
      width: 736,
      height: 482,
    },
  },
  posts: [
    {
      routeId: "blogTvaClimReversible" as RouteId,
      date: "2026-07-19",
      dateLabel: "19 July 2026",
      title: "Lower VAT on reversible air conditioning: what really changes",
      excerpt:
        "Since 18 July 2026, certain air-to-air heat pumps can qualify for 5.5% VAT. Conditions, dates, examples and points to check.",
      tag: "Tax update",
    },
    {
      routeId: "blogReportageTf1Clim" as RouteId,
      date: "2026-06-01",
      dateLabel: "1 June 2026",
      title: "Panasonic air conditioning on TF1: HFE filmed on site in Lille",
      excerpt:
        "TF1 8pm news: Panasonic AC install in Lille, booking from March, and 3-week to 2-month waits during heatwaves.",
      tag: "Report",
      mediaId: "tf1" as BlogMediaId,
    },
    {
      routeId: "blogReportageTf1Pac" as RouteId,
      date: "2025-07-02",
      dateLabel: "2 July 2025",
      title: "Panasonic heat pump on TF1: the report featuring Hecker & Frères Énergie",
      excerpt:
        "TF1 report: Panasonic heat pump commissioned in Lille on a heatwave day — summer/winter comfort and energy savings.",
      tag: "Report",
      mediaId: "tf1" as BlogMediaId,
    },
    {
      routeId: "blogReportageBfmPac" as RouteId,
      date: "2023-02-23",
      dateLabel: "23 February 2023",
      title: "Heat pumps on BFM TV: the report featuring Hecker & Frères Énergie",
      excerpt:
        "BFM TV report: heat-pump installation in Lille, Panasonic equipment and the energy transition — video embedded.",
      tag: "Report",
      mediaId: "bfmtv" as BlogMediaId,
    },
    {
      routeId: "blogReportageRecrutement" as RouteId,
      date: "2022-01-23",
      dateLabel: "23 January 2022",
      title: "Shortage of plumbers and heating engineers: the report at HFE",
      excerpt:
        "Video report: rising demand, 50-hour weeks, apprenticeships and recruitment pressure in plumbing and heating in Lille.",
      tag: "Report",
    },
  ],
  cta: {
    title: "Planning an energy project?",
    subtitle: "Personalised study and free quote, no obligation.",
  },
} as const;

export type BlogIndexContent = typeof fr;

export function getBlogIndexContent(locale: Locale): BlogIndexContent {
  return (locale === "en" ? en : fr) as BlogIndexContent;
}
