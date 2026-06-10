import type { Locale } from "../config";

const fr = {
  seo: {
    title: "Contact - Devis gratuit pompe à chaleur Lille",
    description:
      "Contactez Hecker & Frères Énergie (HFE) à Lille pour un devis gratuit : pompe à chaleur, climatisation, chauffage, plomberie. Réponse sous 72h, intervention dans un rayon de 50 km.",
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
      "Particuliers et professionnels : une équipe locale, certifiée RGE QualiPAC, dans un rayon de 50 km autour de Lille.",
  },
  sidebar: {
    contactTitle: "Coordonnées",
    phoneHeatingLabel: "Chauffage, PAC & climatisation",
    phonePlumbingLabel: "Plomberie, salle de bain & dépannage",
    hoursTitle: "Horaires",
    emergencyTitle: "Urgence ?",
    emergencyText:
      "Pour toute panne urgente (chauffage, fuite, dépannage sanitaire), appelez la ligne adaptée à votre besoin. Intervention rapide sur Lille métropole.",
    emergencyHeatingCta: "Chauffage / PAC / clim",
    emergencyPlumbingCta: "Plomberie / dépannage",
    socialLabel: "Réseaux sociaux",
  },
  map: {
    title: "Nous trouver à Lille",
    iframeTitle: "Carte de localisation Hecker & Frères Énergie (HFE) à Lille",
    serviceAreaLink: "Consulter notre zone d'intervention (50 km)",
  },
} as const;

const en = {
  seo: {
    title: "Contact - Free heat pump quote Lille",
    description:
      "Contact Hecker & Frères Énergie (HFE) in Lille for a free quote: heat pump, air conditioning, heating, plumbing. Response within 72h, service within a 50 km radius.",
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
      "Homeowners and businesses: a local team, RGE QualiPAC certified, within a 50 km radius of Lille.",
  },
  sidebar: {
    contactTitle: "Contact details",
    phoneHeatingLabel: "Heating, heat pump & air conditioning",
    phonePlumbingLabel: "Plumbing, bathroom & emergency repairs",
    hoursTitle: "Opening hours",
    emergencyTitle: "Emergency?",
    emergencyText:
      "For any urgent breakdown (heating, leak, plumbing emergency), call the line that matches your need. Fast response across the Lille metropolitan area.",
    emergencyHeatingCta: "Heating / heat pump / AC",
    emergencyPlumbingCta: "Plumbing / emergency",
    socialLabel: "Social media",
  },
  map: {
    title: "Find us in Lille",
    iframeTitle: "Hecker & Frères Énergie (HFE) location map in Lille",
    serviceAreaLink: "View our service area (50 km)",
  },
} as const;

export function getContactContent(locale: Locale) {
  return locale === "en" ? en : fr;
}

export type ContactContent = ReturnType<typeof getContactContent>;
