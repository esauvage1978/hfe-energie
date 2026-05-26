import type { Locale } from "../config";

const fr = {
  seo: {
    title: "Pompe à chaleur Lille - Installateur RGE QualiPAC",
    description:
      "HFE Énergie - Installation de pompe à chaleur à Lille et métropole. Artisan RGE QualiPAC, devis gratuit, MaPrimeRénov'. 15 ans d'expérience, 1500+ installations.",
    keywords: [
      "pompe à chaleur Lille",
      "PAC air-eau Lille",
      "installateur RGE Lille",
      "climatisation Lille",
      "chauffagiste Lille",
      "MaPrimeRénov pompe à chaleur",
      "HFE Énergie",
      "Hecker Frères Énergie",
    ],
  },
  breadcrumbs: [{ name: "Accueil", url: "/" }],
  hero: {
    tagline: ["Confort", "Performance", "Économies"],
    titleLine1: "Votre confort",
    titleLine2: "notre expertise",
    titleHighlight: (years: number) => `depuis plus de ${years} ans`,
    descriptionBefore: (name: string) =>
      `${name}, votre plombier-chauffagiste à `,
    descriptionStrong1: "Lille et métropole",
    descriptionMiddle: ", spécialiste de l'installation de ",
    descriptionStrong2: "pompes à chaleur",
    descriptionAnd: " et ",
    descriptionStrong3: "climatisation",
    descriptionEnd: ".",
    ctaQuote: "Demander un devis gratuit",
    ctaServices: "Nos services",
  },
  trust: {
    srTitle: "Nos engagements",
    items: [
      { icon: "/assets/icons-trust/shield.png", title: (y: number) => `Plus de ${y} ans`, text: "d'expérience" },
      { icon: "/assets/icons-trust/award.png", title: "Matériel", text: "de qualité" },
      { icon: "/assets/icons-trust/piggy-bank.png", title: "Économies", text: "d'énergie" },
      { icon: "/assets/icons-trust/map-pin.png", title: "Intervention", text: "Lille & métropole" },
    ],
  },
  services: {
    tagline: ["Plomberie", "Chauffage", "Climatisation"],
    title: "Des solutions performantes pour votre ",
    titleHighlight: "confort",
    titleEnd: " au quotidien.",
    cards: [
      { slug: "pompe-a-chaleur", title: "Pompes à chaleur", short: "Air / Eau & Air / Air", iconUrl: "/assets/icons-services/pac.png" },
      { slug: "climatisation", title: "Climatisation", short: "Réversible", iconUrl: "/assets/icons-services/clim.png" },
      { slug: "chauffage", title: "Chauffage", short: "Toutes énergies", iconUrl: "/assets/icons-services/chauffage.png" },
      { slug: "plomberie", title: "Plomberie", short: "Installation & Rénovation", iconUrl: "/assets/icons-services/plomberie.png" },
    ],
    advantages: [
      { icon: "file-text" as const, title: "Étude personnalisée", text: "et devis gratuit" },
      { icon: "shield" as const, title: "Aides MaPrimeRénov'", text: "et CEE" },
    ],
  },
  whyUs: {
    badge: "Pourquoi nous choisir ?",
    title: "Un partenaire de confiance pour vos travaux d'énergie",
    cards: [
      {
        icon: "shield" as const,
        title: "Certifié RGE QualiPAC",
        text: "Nos certifications RGE vous permettent de bénéficier de l'intégralité des aides de l'État : MaPrimeRénov', CEE, TVA à 5,5 %.",
      },
      {
        icon: "leaf" as const,
        title: "Énergies renouvelables",
        text: "Nous privilégions des solutions de chauffage écologiques et performantes pour réduire votre empreinte carbone et préserver l'environnement.",
      },
      {
        icon: "euro" as const,
        title: "Devis 100 % gratuit",
        text: "Étude thermique, dimensionnement et chiffrage sont offerts, sans engagement. Vous recevez sous 72h une proposition claire et détaillée.",
      },
    ],
    certifications: [
      { name: "RGE QualiPAC Chauffage", description: "Reconnu Garant de l'Environnement pour l'installation de pompes à chaleur dédiées au chauffage." },
      { name: "RGE QualiPAC Chauffe-eau thermodynamique", description: "Certification pour l'installation de chauffe-eau thermodynamiques éligibles aux aides de l'État." },
      { name: "Assurance décennale & RC pro", description: "Garantie décennale et responsabilité civile professionnelle pour tous nos chantiers." },
      { name: "Partenaire Panasonic", description: "Partenaire officiel des solutions Panasonic, gage de qualité et de fiabilité." },
    ],
  },
  process: {
    badge: "Notre méthode",
    title: "De la prise de contact à la mise en service",
    steps: [
      { n: 1, title: "Échange & étude", description: "Premier échange téléphonique, visite technique et étude thermique de votre logement." },
      { n: 2, title: "Devis personnalisé", description: "Proposition détaillée incluant le matériel, la pose et l'estimation des aides (MaPrimeRénov', CEE)." },
      { n: 3, title: "Installation soignée", description: "Pose réalisée par nos équipes formées (Compagnons du Devoir), partenaires Panasonic." },
      { n: 4, title: "Mise en service & SAV", description: "Mise en service, formation à l'utilisation, contrat d'entretien et suivi sur la durée." },
    ],
  },
  team: {
    badge: "L'équipe HFE",
    title: "Une équipe artisanale formée aux Compagnons du Devoir",
    description: (years: number) =>
      `Depuis ${years} ans, HFE accompagne particuliers et professionnels de Lille et de la métropole dans leurs projets d'énergie renouvelable. Compétence technique, écoute client et engagement environnemental sont au cœur de notre métier.`,
    bullets: [
      { strong: "Formation Compagnons du Devoir", rest: " - excellence technique" },
      { strong: (n: number) => `${n}+ installations`, rest: " réalisées avec succès" },
      { strong: (n: number) => `${n} clients par an`, rest: " nous font confiance" },
    ],
    ctaMeet: "Rencontrer l'équipe",
  },
  partners: {
    title: "Nos partenaires constructeurs",
    subtitle: "Nous installons les meilleures marques du marché, gage de fiabilité et de performance sur la durée.",
  },
  certificationsSection: {
    badge: "Certifications",
    title: "Un savoir-faire certifié",
    description: "HFE Énergie est certifiée ",
    descriptionStrong: "RGE QualiPAC",
    descriptionEnd: " et dispose de toutes les qualifications nécessaires pour vous garantir un travail conforme et l'accès aux aides de l'État.",
    logoAlt: (name: string) => `Certification ${name}`,
  },
  clients: {
    title: "Ils nous font confiance",
    subtitle: "Particuliers, restaurants, hôtels, grandes enseignes : nos clients nous recommandent.",
  },
  googleReviews: {
    badge: "Avis clients",
    title: "Ce que disent nos clients sur Google",
    subtitle:
      "Les 5 avis les plus récents parmi nos retours Google — installations, dépannages et entretiens à Lille et en métropole.",
    empty:
      "Les avis récents seront affichés ici dès la prochaine synchronisation avec Google.",
    emptyManual:
      "Ajoutez vos derniers avis Google dans le fichier src/data/google-reviews.json (voir docs/avis-google.md).",
    widgetTitle: "Avis clients Google",
    cta: "Laisser un avis",
    viewOnMaps: "Voir la fiche Google",
    source: "Avis Google",
    ratingAria: (rating: number, count: number) =>
      `Note moyenne ${rating} sur 5, basée sur ${count} avis Google`,
    ratingCount: (count: number) =>
      count > 0 ? `${count} avis sur Google` : "Avis sur Google",
    updated: (date: string) => `Mis à jour le ${date}`,
  },
  faq: {
    badge: "FAQ",
    title: "Vos questions sur la pompe à chaleur",
    intro: "Tout ce que vous devez savoir avant de lancer votre projet de pompe à chaleur ou de climatisation.",
    items: [
      {
        question: "Pourquoi installer une pompe à chaleur en 2026 ?",
        answer:
          "La pompe à chaleur (PAC) est le système de chauffage le plus performant et le plus économique du marché. Elle utilise une énergie renouvelable (l'air extérieur) pour chauffer votre logement avec un rendement (SCOP) compris entre 3,5 et 4,5 : pour 1 kWh d'électricité consommé, la PAC restitue 3,5 à 4,5 kWh de chaleur. Vous réduisez ainsi votre facture de chauffage jusqu'à 75 % par rapport à un chauffage électrique ou au fioul, tout en bénéficiant de MaPrimeRénov' et des CEE.",
      },
      {
        question: "Quelles sont les aides disponibles pour une PAC en 2026 ?",
        answer:
          "Trois dispositifs principaux sont cumulables : MaPrimeRénov' (jusqu'à 5 000 € pour une PAC air-eau selon vos revenus), les Certificats d'Économie d'Énergie (CEE, dits « Coup de pouce chauffage », jusqu'à 5 500 €) et le taux de TVA réduit à 5,5 % sur la fourniture et la pose. HFE Énergie est certifiée RGE QualiPAC : votre projet est donc éligible à l'ensemble de ces aides. Nous vous accompagnons dans le montage de votre dossier.",
      },
      {
        question: "Quelle est votre zone d'intervention ?",
        answer:
          "Nous intervenons sur tout Lille et la Métropole Européenne de Lille (MEL) dans un rayon d'environ 30 km : La Madeleine, Marcq-en-Barœul, Villeneuve-d'Ascq, Roubaix, Tourcoing, Wasquehal, Lambersart, Lomme, Hellemmes, Wambrechies, Saint-André-lez-Lille et les communes alentours.",
      },
      {
        question: "Combien de temps dure l'installation d'une pompe à chaleur ?",
        answer:
          "Pour une pompe à chaleur air-eau standard chez un particulier, comptez 2 à 3 jours d'intervention. Pour une PAC air-air (climatisation réversible), une installation mono-split prend 1 journée. Une étude technique préalable est réalisée pour dimensionner correctement votre équipement.",
      },
      {
        question: "Comment gagner des classes au DPE ?",
        answer:
          "Notre expérience montre qu'une PAC air-air (climatisation réversible), correctement dimensionnée, peut faire progresser la note du DPE — jusqu'à trois classes dans les meilleurs cas, notamment quand on remplace un chauffage électrique très consommateur. Le gain dépend de votre logement et de l'isolation. La PAC air-eau reste le choix le plus puissant pour un bond important au DPE si vous remplacez une chaudière fioul ou gaz. Nous évaluons ce potentiel lors de l'étude gratuite avant devis.",
      },
      {
        question: "Quelle est la durée de vie d'une pompe à chaleur ?",
        answer:
          "Une PAC bien entretenue dure 15 à 20 ans. Un entretien annuel obligatoire (depuis le décret du 30 juillet 2020) est indispensable pour garantir performance et longévité. HFE Énergie propose des contrats d'entretien à partir de 149 € TTC / an incluant le contrôle d'étanchéité du circuit frigorifique.",
      },
    ],
  },
} as const;

const en = {
  seo: {
    title: "Heat pump Lille - RGE QualiPAC installer",
    description:
      "HFE Énergie - Heat pump installation in Lille and the metropolitan area. RGE QualiPAC certified contractor, free quote, MaPrimeRénov'. 15 years of experience, 1,500+ installations.",
    keywords: [
      "heat pump Lille",
      "air-to-water heat pump Lille",
      "RGE installer Lille",
      "air conditioning Lille",
      "heating engineer Lille",
      "MaPrimeRénov heat pump",
      "HFE Énergie",
      "Hecker Frères Énergie",
    ],
  },
  breadcrumbs: [{ name: "Home", url: "/en" }],
  hero: {
    tagline: ["Comfort", "Performance", "Savings"],
    titleLine1: "Your comfort,",
    titleLine2: "our expertise",
    titleHighlight: (years: number) => `for over ${years} years`,
    descriptionBefore: (name: string) =>
      `${name}, your plumbing and heating contractor in `,
    descriptionStrong1: "Lille and the metropolitan area",
    descriptionMiddle: ", specialists in ",
    descriptionStrong2: "heat pump",
    descriptionAnd: " and ",
    descriptionStrong3: "air conditioning",
    descriptionEnd: " installation.",
    ctaQuote: "Request a free quote",
    ctaServices: "Our services",
  },
  trust: {
    srTitle: "Our commitments",
    items: [
      { icon: "/assets/icons-trust/shield.png", title: (y: number) => `Over ${y} years`, text: "of experience" },
      { icon: "/assets/icons-trust/award.png", title: "Quality", text: "equipment" },
      { icon: "/assets/icons-trust/piggy-bank.png", title: "Energy", text: "savings" },
      { icon: "/assets/icons-trust/map-pin.png", title: "Serving", text: "Lille & metro area" },
    ],
  },
  services: {
    tagline: ["Plumbing", "Heating", "Air conditioning"],
    title: "High-performance solutions for your everyday ",
    titleHighlight: "comfort",
    titleEnd: ".",
    cards: [
      { slug: "heat-pump", title: "Heat pumps", short: "Air-to-water & air-to-air", iconUrl: "/assets/icons-services/pac.png" },
      { slug: "air-conditioning", title: "Air conditioning", short: "Reversible", iconUrl: "/assets/icons-services/clim.png" },
      { slug: "heating", title: "Heating", short: "All energy types", iconUrl: "/assets/icons-services/chauffage.png" },
      { slug: "plumbing", title: "Plumbing", short: "Installation & renovation", iconUrl: "/assets/icons-services/plomberie.png" },
    ],
    advantages: [
      { icon: "file-text" as const, title: "Personalised survey", text: "and free quote" },
      { icon: "shield" as const, title: "MaPrimeRénov' grants", text: "and CEE incentives" },
    ],
  },
  whyUs: {
    badge: "Why choose us?",
    title: "A trusted partner for your energy upgrade projects",
    cards: [
      {
        icon: "shield" as const,
        title: "RGE QualiPAC certified",
        text: "Our RGE certifications give you access to all eligible government grants: MaPrimeRénov', CEE, and 5.5% VAT.",
      },
      {
        icon: "leaf" as const,
        title: "Renewable energy",
        text: "We favour efficient, low-carbon heating solutions to reduce your carbon footprint and protect the environment.",
      },
      {
        icon: "euro" as const,
        title: "100% free quote",
        text: "Thermal study, sizing and pricing are provided at no cost and with no obligation. You receive a clear, detailed proposal within 72 hours.",
      },
    ],
    certifications: [
      { name: "RGE QualiPAC Heating", description: "Recognised Environmental Guarantor for heat pump installations dedicated to space heating." },
      { name: "RGE QualiPAC thermodynamic water heater", description: "Certification for thermodynamic water heater installations eligible for government grants." },
      { name: "Ten-year warranty & public liability", description: "Ten-year warranty and professional liability insurance on all our projects." },
      { name: "Panasonic partner", description: "Official Panasonic partner — a guarantee of quality and reliability." },
    ],
  },
  process: {
    badge: "Our approach",
    title: "From first contact to commissioning",
    steps: [
      { n: 1, title: "Consultation & survey", description: "Initial phone call, site visit and thermal assessment of your property." },
      { n: 2, title: "Tailored quote", description: "Detailed proposal including equipment, installation and estimated grants (MaPrimeRénov', CEE)." },
      { n: 3, title: "Careful installation", description: "Installation by our Compagnons du Devoir-trained teams, Panasonic partners." },
      { n: 4, title: "Commissioning & after-sales", description: "Commissioning, user training, maintenance contract and long-term support." },
    ],
  },
  team: {
    badge: "The HFE team",
    title: "An artisan team trained with the Compagnons du Devoir",
    description: (years: number) =>
      `For ${years} years, HFE has been supporting homeowners and businesses across Lille and the metropolitan area with renewable energy projects. Technical expertise, customer care and environmental commitment are at the heart of what we do.`,
    bullets: [
      { strong: "Compagnons du Devoir training", rest: " — technical excellence" },
      { strong: (n: number) => `${n}+ successful installations`, rest: "" },
      { strong: (n: number) => `${n} clients per year`, rest: " trust us" },
    ],
    ctaMeet: "Meet the team",
  },
  partners: {
    title: "Our manufacturer partners",
    subtitle: "We install leading brands on the market — reliability and long-term performance guaranteed.",
  },
  certificationsSection: {
    badge: "Certifications",
    title: "Certified expertise",
    description: "HFE Énergie is ",
    descriptionStrong: "RGE QualiPAC",
    descriptionEnd: " certified and holds all qualifications required to deliver compliant work and access to government grants.",
    logoAlt: (name: string) => `${name} certification`,
  },
  clients: {
    title: "They trust us",
    subtitle: "Homeowners, restaurants, hotels and major brands — our clients recommend us.",
  },
  googleReviews: {
    badge: "Customer reviews",
    title: "What our clients say on Google",
    subtitle:
      "The 5 most recent Google reviews — installations, repairs and maintenance in Lille and the metropolitan area.",
    empty:
      "Recent reviews will appear here after the next sync with Google.",
    emptyManual:
      "Add your latest Google reviews in src/data/google-reviews.json (see docs/avis-google.md).",
    widgetTitle: "Google customer reviews",
    cta: "Leave a review",
    viewOnMaps: "View on Google Maps",
    source: "Google review",
    ratingAria: (rating: number, count: number) =>
      `Average rating ${rating} out of 5, based on ${count} Google reviews`,
    ratingCount: (count: number) =>
      count > 0 ? `${count} Google reviews` : "Google reviews",
    updated: (date: string) => `Updated on ${date}`,
  },
  faq: {
    badge: "FAQ",
    title: "Your heat pump questions answered",
    intro: "Everything you need to know before starting your heat pump or air conditioning project.",
    items: [
      {
        question: "Why install a heat pump in 2026?",
        answer:
          "The heat pump is the most efficient and economical heating system on the market. It uses a renewable energy source (outdoor air) to heat your home with a seasonal performance factor (SCOP) of 3.5 to 4.5: for every 1 kWh of electricity consumed, the heat pump delivers 3.5 to 4.5 kWh of heat. You can cut your heating bill by up to 75% compared with electric or oil heating, while benefiting from MaPrimeRénov' and CEE grants.",
      },
      {
        question: "What grants are available for a heat pump in 2026?",
        answer:
          "Three main schemes can be combined: MaPrimeRénov' (up to €5,000 for an air-to-water heat pump depending on household income), Energy Savings Certificates (CEE, also known as the heating boost scheme, up to €5,500) and a reduced VAT rate of 5.5% on supply and installation. HFE Énergie is RGE QualiPAC certified: your project is therefore eligible for all these grants. We support you through the application process.",
      },
      {
        question: "What is your service area?",
        answer:
          "We cover all of Lille and the European Metropolis of Lille (MEL) within approximately 30 km: La Madeleine, Marcq-en-Barœul, Villeneuve-d'Ascq, Roubaix, Tourcoing, Wasquehal, Lambersart, Lomme, Hellemmes, Wambrechies, Saint-André-lez-Lille and surrounding towns.",
      },
      {
        question: "How long does heat pump installation take?",
        answer:
          "For a standard air-to-water heat pump in a residential property, allow 2 to 3 days. For an air-to-air heat pump (reversible air conditioning), a single-split installation takes one day. A prior technical survey is carried out to size your equipment correctly.",
      },
      {
        question: "How can I improve my EPC rating?",
        answer:
          "Our experience shows that a properly sized air-to-air heat pump (reversible air conditioning) can improve your EPC rating — by up to three bands in the best cases, especially when replacing very inefficient electric heating. The gain depends on your property and insulation. An air-to-water heat pump remains the strongest option for a major EPC improvement when replacing oil or gas boilers. We assess this potential during your free pre-quote study.",
      },
      {
        question: "What is the lifespan of a heat pump?",
        answer:
          "A well-maintained heat pump lasts 15 to 20 years. Annual servicing is mandatory (since the decree of 30 July 2020) to ensure performance and longevity. HFE Énergie offers maintenance contracts from €149 incl. VAT per year, including refrigerant circuit leak testing.",
      },
    ],
  },
} as const;

export function getHomeContent(locale: Locale) {
  return locale === "en" ? en : fr;
}

export type HomeContent = ReturnType<typeof getHomeContent>;
