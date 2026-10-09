import type { Locale } from "../config";
import type { ProjectImage } from "./projects-shared";

const heroImageFr: ProjectImage = {
  src: "/projet/depannage_plomberie/hero.jpg",
  alt: "Plombier HFE Hecker & Frères Énergie en intervention sous un lavabo de salle de bain",
  width: 1024,
  height: 767,
};

const heroImageEn: ProjectImage = {
  src: "/projet/depannage_plomberie/hero.jpg",
  alt: "HFE Hecker & Frères Énergie plumber repairing pipework under a bathroom sink",
  width: 1024,
  height: 767,
};

const fr = {
  seo: {
    title: "Dépannage plomberie à Lille | Intervention rapide — HFE",
    description:
      "Dépannage plomberie à Lille et métropole par Hecker & Frères Énergie (HFE) : fuites, robinetterie, chasse d'eau, siphons et équipements sanitaires. Diagnostic précis, intervention réactive.",
    keywords: [
      "dépannage plomberie Lille",
      "plombier urgence Lille",
      "réparation fuite eau Lille",
      "remplacement robinetterie Lille",
      "réparation siphon lavabo Lille",
    ],
  },
  breadcrumbs: [
    { name: "Accueil", url: "/" },
    { name: "Plomberie", url: "/plomberie" },
    { name: "Dépannage plomberie", url: "/realisations/depannage-plomberie" },
  ],
  hero: {
    badge: "Nos réalisations",
    title: "Dépannage plomberie",
    description:
      "Fuites, robinetterie, chasse d'eau ou sanitaires : Hecker & Frères Énergie (HFE) intervient rapidement à Lille et dans la métropole pour rétablir le bon fonctionnement de vos installations.",
    ctaQuote: "Demander un devis",
    image: heroImageFr,
  },
  intro: {
    title: "Intervention plomberie : diagnostic précis et réparation durable",
    paragraphs: [
      "Chez HFE Hecker Frères Énergie, nous intervenons pour tous vos travaux de plomberie, du simple dépannage aux réparations plus complexes. Grâce à notre expertise, nous assurons un diagnostic précis et une intervention rapide afin de rétablir le bon fonctionnement de vos installations.",
      "Nos prestations comprennent la recherche et réparation de fuites d'eau, le remplacement de robinetterie (mitigeurs, mélangeurs, robinets de cuisine et de salle de bains), le changement de mécanismes de chasse d'eau, flotteurs et robinets d'arrêt, ainsi que la réparation ou le remplacement de siphons, évacuations et raccordements sanitaires.",
      "Nous réalisons également la pose et le remplacement d'équipements sanitaires tels que les WC classiques ou suspendus, lave-mains, lavabos, vasques, éviers, meubles de salle de bains et accessoires de plomberie.",
      "Faire appel à HFE Hecker Frères Énergie, c'est bénéficier d'un service de proximité, d'une intervention réactive et d'un travail réalisé dans les règles de l'art pour garantir la fiabilité et la durabilité de vos installations de plomberie.",
    ],
    advantagesTitle: "Nos interventions de dépannage",
    advantages: [
      "Recherche et réparation de fuites d'eau.",
      "Remplacement de robinetterie : mitigeurs, mélangeurs, robinets cuisine et salle de bains.",
      "Changement de mécanismes de chasse d'eau, flotteurs et robinets d'arrêt.",
      "Réparation ou remplacement de siphons, évacuations et raccordements sanitaires.",
      "Pose et remplacement de WC, lavabos, vasques, éviers et meubles de salle de bains.",
      "Service de proximité à Lille et métropole, intervention réactive.",
    ],
  },
  cover: heroImageFr,
  cta: {
    title: "Une fuite, une panne, un équipement à remplacer ?",
    subtitle: "Notre équipe plomberie intervient rapidement à Lille et métropole.",
  },
} as const;

const en = {
  seo: {
    title: "Plumbing repairs in Lille | Fast response — HFE",
    description:
      "Plumbing repairs in Lille and the metropolitan area by Hecker & Frères Énergie (HFE): leaks, taps, toilet mechanisms, traps and sanitary fittings. Accurate diagnosis, fast response.",
    keywords: [
      "plumbing repair Lille",
      "emergency plumber Lille",
      "water leak repair Lille",
      "tap replacement Lille",
      "sink trap repair Lille",
    ],
  },
  breadcrumbs: [
    { name: "Home", url: "/en" },
    { name: "Plumbing", url: "/en/plumbing" },
    { name: "Plumbing repairs", url: "/en/projects/plumbing-repair" },
  ],
  hero: {
    badge: "Our projects",
    title: "Plumbing repairs",
    description:
      "Leaks, taps, toilet mechanisms or sanitary fittings: Hecker & Frères Énergie (HFE) responds quickly in Lille and the metropolitan area to restore your installations.",
    ctaQuote: "Request a quote",
    image: heroImageEn,
  },
  intro: {
    title: "Plumbing call-outs: accurate diagnosis and lasting repairs",
    paragraphs: [
      "At HFE Hecker Frères Énergie, we handle all your plumbing work, from simple repairs to more complex fixes. Thanks to our expertise, we provide an accurate diagnosis and a fast response to restore your installations.",
      "Our services include leak detection and repair, tap replacement (mixers, kitchen and bathroom taps), toilet mechanism, float valve and shut-off valve replacement, as well as trap, waste pipe and sanitary connection repair or replacement.",
      "We also install and replace sanitary equipment such as standard or wall-hung toilets, hand basins, washbasins, vanity basins, sinks, bathroom furniture and plumbing accessories.",
      "Choosing HFE Hecker Frères Énergie means a local service, a responsive call-out and work carried out to professional standards to ensure the reliability and durability of your plumbing.",
    ],
    advantagesTitle: "Our repair services",
    advantages: [
      "Leak detection and repair.",
      "Tap replacement: mixers, kitchen and bathroom taps.",
      "Toilet mechanism, float valve and shut-off valve replacement.",
      "Trap, waste pipe and sanitary connection repair or replacement.",
      "Installation and replacement of toilets, basins, sinks and bathroom furniture.",
      "Local service in Lille and the metropolitan area, fast response.",
    ],
  },
  cover: heroImageEn,
  cta: {
    title: "A leak, a breakdown or equipment to replace?",
    subtitle: "Our plumbing team responds quickly in Lille and the metropolitan area.",
  },
} as const;

export function getProjectsDepannagePlomberieContent(locale: Locale) {
  return locale === "en" ? en : fr;
}

export type ProjectsDepannagePlomberieContent = ReturnType<typeof getProjectsDepannagePlomberieContent>;
