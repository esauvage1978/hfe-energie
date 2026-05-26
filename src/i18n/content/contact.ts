import type { Locale } from "../config";

const fr = {
  seo: {
    title: "Contact - Devis gratuit pompe à chaleur Lille",
    description:
      "Contactez HFE Énergie à Lille pour un devis gratuit : pompe à chaleur, climatisation, chauffage, plomberie. Réponse sous 72h, intervention sur toute la métropole.",
  },
  breadcrumbs: [
    { name: "Accueil", url: "/" },
    { name: "Contact", url: "/contact" },
  ],
  hero: {
    badge: "Contact",
    title: "Parlons de votre projet",
    description:
      "Décrivez votre projet de pompe à chaleur, climatisation, chauffage ou plomberie. Nous vous recontactons sous 72h avec une première estimation et une proposition de rendez-vous.",
    subtext:
      "Particuliers et professionnels : une équipe locale, certifiée RGE QualiPAC, sur toute la métropole lilloise.",
  },
  sidebar: {
    contactTitle: "Coordonnées",
    hoursTitle: "Horaires",
    emergencyTitle: "Urgence ?",
    emergencyText:
      "Pour toute panne urgente (chauffage, fuite), appelez-nous directement. Intervention rapide sur Lille métropole.",
    emergencyCta: true,
  },
  map: {
    title: "Nous trouver à Lille",
    iframeTitle: "Carte de localisation HFE Énergie à Lille",
  },
} as const;

const en = {
  seo: {
    title: "Contact - Free heat pump quote Lille",
    description:
      "Contact HFE Énergie in Lille for a free quote: heat pump, air conditioning, heating, plumbing. Response within 72h, service across the entire metropolitan area.",
  },
  breadcrumbs: [
    { name: "Home", url: "/en" },
    { name: "Contact", url: "/en/contact" },
  ],
  hero: {
    badge: "Contact",
    title: "Let's discuss your project",
    description:
      "Tell us about your heat pump, air conditioning, heating or plumbing project. We will get back to you within 72 hours with an initial estimate and a meeting proposal.",
    subtext:
      "Homeowners and businesses: a local team, RGE QualiPAC certified, serving the entire Lille metropolitan area.",
  },
  sidebar: {
    contactTitle: "Contact details",
    hoursTitle: "Opening hours",
    emergencyTitle: "Emergency?",
    emergencyText:
      "For any urgent breakdown (heating, leak), call us directly. Fast response across the Lille metropolitan area.",
    emergencyCta: true,
  },
  map: {
    title: "Find us in Lille",
    iframeTitle: "HFE Énergie location map in Lille",
  },
} as const;

export function getContactContent(locale: Locale) {
  return locale === "en" ? en : fr;
}

export type ContactContent = ReturnType<typeof getContactContent>;
