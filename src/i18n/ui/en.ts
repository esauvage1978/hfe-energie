import { routes } from "../routes";

export const uiEn = {
  meta: {
    siteTagline: "Heating · Air conditioning · RGE certified",
    skipToContent: "Skip to main content",
    homeAria: "Back to home",
    mainNav: "Main navigation",
    mobileNav: "Mobile navigation",
    mobileQuickActions: "Quick contact",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    call: "Call",
    callAria: (phone: string) => `Call ${phone}`,
    language: "Language",
    switchToEn: "English version",
    switchToFr: "French version",
  },
  nav: {
    services: "Our services",
    heatPump: {
      label: "Heat pumps",
      description: "Air-to-water & air-to-air heat pumps, RGE QualiPAC certified",
    },
    airConditioning: {
      label: "Air conditioning",
      description: "Reversible AC: multi-split, ducted, cassette",
    },
    heating: {
      label: "Heating",
      description: "Boilers, underfloor heating, radiators",
    },
    plumbing: {
      label: "Plumbing",
      description: "Installation, renovation, emergency repairs",
    },
    residential: {
      label: "Residential",
      description: "Turnkey home comfort solutions",
    },
    commercial: {
      label: "Commercial",
      description: "Commercial & industrial HVAC",
    },
    grants: {
      label: "Grants & financing",
      description: "MaPrimeRénov', CEE, ANaH",
    },
    contact: { label: "Contact" },
    freeQuote: "Request a free quote",
  },
  footer: {
    about:
      "Hecker & Frères Énergie — RGE QualiPAC certified installer in Lille. Heat pumps, air conditioning, heating and plumbing for homes and businesses.",
    stats: (installations: number, years: number) =>
      `${installations}+ installations · ${years} years of experience`,
    servicesTitle: "Our services",
    grantsLink: "MaPrimeRénov' & CEE grants",
    navTitle: "Navigation",
    contactTitle: "Contact",
    hoursShort: "Mon - Fri: 7:30 AM - 8:00 PM",
    hoursSat: "Saturday: 9:00 AM - 5:00 PM",
    hoursSun: "Sunday: closed",
    serviceAreaTitle: "Service area",
    serviceArea: (areas: string) => `${areas} — and the Lille metropolitan area (MEL).`,
    legalNav: "Legal links",
    copyright: (year: number, legalName: string) => `© ${year} ${legalName}. All rights reserved.`,
    certifications: "RGE QualiPAC certified · Ten-year warranty & professional liability insurance",
    builtBy: "Website designed and developed by",
  },
  legal: {
    lastUpdated: "Last updated",
    home: "Home",
    links: {
      legalNotice: "Legal notice",
      privacy: "Privacy policy",
      cookies: "Cookie policy",
      termsOfSale: "Terms of sale",
      termsOfUse: "Terms of use",
    },
  },
  cta: {
    badge: "Free quote",
    defaultTitle: "Need a heat pump quote?",
    defaultSubtitle: "Free personalised assessment, no obligation. Reply within 72 hours.",
    onlineRequest: "Online request",
  },
  common: {
    freeQuote: "Request a free quote",
    ourServices: "Our services",
    contactUs: "Contact us",
    readMore: "Learn more",
    required: "required",
    requiredMark: "*",
  },
  services: {
    heatPump: "Heat pumps",
    airConditioning: "Air conditioning",
    heating: "Heating",
    plumbing: "Plumbing",
  },
} as const;

export function getLegalLinksEn() {
  return [
    { label: uiEn.legal.links.legalNotice, href: routes.legalNotice.en },
    { label: uiEn.legal.links.privacy, href: routes.privacy.en },
    { label: uiEn.legal.links.cookies, href: routes.cookies.en },
    { label: uiEn.legal.links.termsOfSale, href: routes.termsOfSale.en },
    { label: uiEn.legal.links.termsOfUse, href: routes.termsOfUse.en },
  ];
}

export function getNavigationEn() {
  return [
    {
      label: uiEn.nav.services,
      children: [
        {
          label: uiEn.nav.heatPump.label,
          href: routes.heatPump.en,
          description: uiEn.nav.heatPump.description,
        },
        {
          label: uiEn.nav.airConditioning.label,
          href: routes.airConditioning.en,
          description: uiEn.nav.airConditioning.description,
        },
        {
          label: uiEn.nav.heating.label,
          href: routes.heating.en,
          description: uiEn.nav.heating.description,
        },
        {
          label: uiEn.nav.plumbing.label,
          href: routes.plumbing.en,
          description: uiEn.nav.plumbing.description,
        },
      ],
    },
    {
      label: uiEn.nav.residential.label,
      href: routes.residential.en,
      description: uiEn.nav.residential.description,
    },
    {
      label: uiEn.nav.commercial.label,
      href: routes.commercial.en,
      description: uiEn.nav.commercial.description,
    },
    {
      label: uiEn.nav.grants.label,
      href: routes.grants.en,
      description: uiEn.nav.grants.description,
    },
    { label: uiEn.nav.contact.label, href: routes.contact.en },
  ];
}

export type UiEn = typeof uiEn;
