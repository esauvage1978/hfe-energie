import { routes } from "../routes";

export const uiFr = {
  meta: {
    siteTagline: "Chauffagiste · Climaticien · RGE",
    skipToContent: "Aller au contenu principal",
    homeAria: "Retour à l'accueil",
    mainNav: "Navigation principale",
    mobileNav: "Navigation mobile",
    mobileQuickActions: "Contact rapide",
    openMenu: "Ouvrir le menu",
    closeMenu: "Fermer le menu",
    call: "Appeler",
    callAria: (phone: string) => `Appeler le ${phone}`,
    language: "Langue",
    switchToEn: "English version",
    switchToFr: "Version française",
  },
  nav: {
    services: "Nos services",
    heatPump: {
      label: "Pompes à chaleur",
      description: "Installation PAC air-eau & air-air RGE QualiPAC",
    },
    airConditioning: {
      label: "Climatisation",
      description: "Climatisation réversible multi-split, gainable, cassette",
    },
    heating: {
      label: "Chauffage",
      description: "Chaudières, plancher chauffant, radiateurs",
    },
    plumbing: {
      label: "Plomberie",
      description: "Installation, rénovation, dépannage sanitaire",
    },
    projects: {
      label: "Nos réalisations",
      description: "Découvrez tous nos chantiers en photos",
    },
    residential: {
      label: "Particuliers",
      description: "Solutions résidentielles clé en main",
    },
    coOwnership: {
      label: "Copropriété",
      description: "Chauffage collectif et aides MaPrimeRénov' Copro",
    },
    commercial: {
      label: "Professionnels",
      description: "Solutions tertiaires et industrielles",
    },
    grants: {
      label: "Aides & Financements",
      description: "MaPrimeRénov', CEE, ANAH",
    },
    contact: { label: "Contact" },
    freeQuote: "Demander un devis gratuit",
  },
  footer: {
    about:
      "Hecker & Frères Énergie - Installateur RGE QualiPAC à Lille. Pompes à chaleur, climatisation, chauffage et plomberie pour particuliers et professionnels.",
    stats: (installations: number, years: number) =>
      `${installations}+ installations · ${years} ans d'expérience`,
    servicesTitle: "Nos services",
    grantsLink: "MaPrimeRénov' & CEE",
    navTitle: "Navigation",
    contactTitle: "Contact",
    hoursShort: "Lun - Ven : 07h30 - 20h00",
    hoursSat: "Samedi : 09h00 - 17h00",
    hoursSun: "Dimanche : fermé",
    serviceAreaTitle: "Zone d'intervention",
    serviceArea: (areas: string, radius: number) =>
      `${areas} — et la métropole lilloise (MEL), dans un rayon de ${radius} km autour de Lille.`,
    legalNav: "Liens légaux",
    copyright: (year: number, legalName: string) =>
      `© ${year} ${legalName}. Tous droits réservés.`,
    certifications: "Certifié RGE QualiPAC · Assurance décennale & RC pro",
    builtBy: "Site conçu et développé par",
  },
  legal: {
    lastUpdated: "Dernière mise à jour",
    home: "Accueil",
    links: {
      legalNotice: "Mentions légales",
      privacy: "Politique de confidentialité",
      cookies: "Politique des cookies",
      termsOfSale: "CGV",
      termsOfUse: "CGU",
    } satisfies Record<string, string>,
  },
  cta: {
    badge: "Devis gratuit",
    defaultTitle: "Besoin d'un devis pompe à chaleur ?",
    defaultSubtitle: "Étude personnalisée gratuite, sans engagement. Réponse sous 72h.",
    onlineRequest: "Demande en ligne",
  },
  common: {
    freeQuote: "Demander un devis gratuit",
    ourServices: "Nos services",
    contactUs: "Nous contacter",
    readMore: "En savoir plus",
    required: "obligatoires",
    requiredMark: "*",
  },
  services: {
    heatPump: "Pompes à chaleur",
    airConditioning: "Climatisation",
    heating: "Chauffage",
    plumbing: "Plomberie",
  },
} as const;

export function getLegalLinksFr() {
  return [
    { label: uiFr.legal.links.legalNotice, href: routes.legalNotice.fr },
    { label: uiFr.legal.links.privacy, href: routes.privacy.fr },
    { label: uiFr.legal.links.cookies, href: routes.cookies.fr },
    { label: uiFr.legal.links.termsOfSale, href: routes.termsOfSale.fr },
    { label: uiFr.legal.links.termsOfUse, href: routes.termsOfUse.fr },
  ];
}

export function getNavigationFr() {
  return [
    {
      label: uiFr.nav.services,
      children: [
        {
          label: uiFr.nav.heatPump.label,
          href: routes.heatPump.fr,
          description: uiFr.nav.heatPump.description,
        },
        {
          label: uiFr.nav.airConditioning.label,
          href: routes.airConditioning.fr,
          description: uiFr.nav.airConditioning.description,
        },
        {
          label: uiFr.nav.heating.label,
          href: routes.heating.fr,
          description: uiFr.nav.heating.description,
        },
        {
          label: uiFr.nav.plumbing.label,
          href: routes.plumbing.fr,
          description: uiFr.nav.plumbing.description,
        },
      ],
      projects: {
        label: uiFr.nav.projects.label,
        description: uiFr.nav.projects.description,
        href: routes.projects.fr,
      },
    },
    {
      label: uiFr.nav.residential.label,
      href: routes.residential.fr,
      description: uiFr.nav.residential.description,
    },
    {
      label: uiFr.nav.coOwnership.label,
      href: routes.coOwnership.fr,
      description: uiFr.nav.coOwnership.description,
    },
    {
      label: uiFr.nav.commercial.label,
      href: routes.commercial.fr,
      description: uiFr.nav.commercial.description,
    },
    {
      label: uiFr.nav.grants.label,
      href: routes.grants.fr,
      description: uiFr.nav.grants.description,
    },
    { label: uiFr.nav.contact.label, href: routes.contact.fr },
  ];
}

export type UiFr = typeof uiFr;
