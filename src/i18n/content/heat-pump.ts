import type { Locale } from "../config";

const fr = {
  seo: {
    title: "Pompe à chaleur Lille (air-eau, air-air) : installation RGE",
    description:
      "Achat, pose, entretien et dépannage de pompe à chaleur air-eau et air-air à Lille et métropole (RGE QualiPAC). Prix posé, aides MaPrimeRénov'/CEE, devis 72 h.",
    keywords: [
      "pompe à chaleur Lille",
      "PAC air-eau Lille",
      "PAC air-air Lille",
      "achat pompe à chaleur air-eau Lille",
      "achat pompe à chaleur air-air Lille",
      "vente pompe à chaleur Lille",
      "installateur pompe à chaleur Lille",
      "entretien dépannage pompe à chaleur Lille",
      "installateur RGE QualiPAC Nord",
      "MaPrimeRénov pompe à chaleur Lille",
      "prix pompe à chaleur posée Lille",
      "chauffe-eau thermodynamique Lille",
    ],
  },
  breadcrumbs: [
    { name: "Accueil", url: "/" },
    { name: "Pompe à chaleur", url: "/pompe-a-chaleur" },
  ],
  structuredData: {
    serviceName: "Installation, entretien et dépannage de pompe à chaleur à Lille",
    serviceDescription:
      "Achat, vente, pose, entretien et dépannage de pompes à chaleur air-eau, air-air et chauffe-eau thermodynamiques par Hecker & Frères Énergie (HFE), artisan RGE QualiPAC à Lille et dans la métropole lilloise.",
    slug: "pompe-a-chaleur",
  },
  hero: {
    badge: "Artisan RGE QualiPAC à Lille",
    titleBefore: "Installation, entretien et dépannage de ",
    titleHighlight: "pompes à chaleur à Lille",
    titleAfter: " et en métropole lilloise",
    description:
      "Artisan certifié RGE QualiPAC basé à Lille (44 rue Jean sans Peur), Hecker & Frères Énergie (HFE) assure la vente, la pose, l'entretien et le dépannage de pompes à chaleur air-eau, air-air, eau-eau et chauffe-eau thermodynamiques dans toute la métropole lilloise (Villeneuve-d'Ascq, Roubaix, Tourcoing, Marcq-en-Barœul, Lambersart, Armentières). Étude thermique sur place, devis détaillé sous 72 h, déduction des aides MaPrimeRénov' et CEE et garantie décennale.",
    ctaQuote: "Devis gratuit en 72h",
    stats: [
      { label: "Économies", value: "Jusqu'à 75 %" },
      { label: "Aides cumulées", value: "10 500 €*" },
      { label: "Entretien PAC", value: "Dès 149 €/an" },
    ],
    statsNote: "* Plafond cumulé MaPrimeRénov' + CEE sur PAC air-eau selon les revenus du foyer.",
    imageAlt: "Installation d'une pompe à chaleur air-eau par Hecker & Frères Énergie (HFE) à Lille",
  },
  benefits: {
    title: "Pourquoi installer une pompe à chaleur dans la métropole lilloise ?",
    intro:
      "Adaptée au climat tempéré des Hauts-de-France, la pompe à chaleur capte les calories de l'air extérieur (même jusqu'à -15 °C) ou de la nappe phréatique pour chauffer votre maison avec un rendement saisonnier (SCOP) de 3,5 à 7.",
    items: [
      { icon: "euro" as const, title: "Jusqu'à 75 % d'économies", text: "Une PAC moderne restitue 3,5 à 4,5 kWh de chaleur pour 1 kWh d'électricité consommé, réduisant fortement la facture face au fioul, au gaz ou aux convecteurs." },
      { icon: "leaf" as const, title: "Achat + pose clés en main", text: "Fourniture du matériel (Panasonic, Daikin, Mitsubishi Electric, Atlantic) et pose par nos compagnons : vous bénéficiez directement de la TVA réduite à 5,5 % sur les équipements éligibles." },
      { icon: "shield" as const, title: "Aides MaPrimeRénov' & CEE", text: "Jusqu'à 5 000 € de MaPrimeRénov' et 5 500 € de prime CEE Coup de pouce chauffage en remplacement de chaudière fioul ou gaz, plus l'éco-PTZ à taux zéro." },
      { icon: "snowflake" as const, title: "SAV, entretien & dépannage", text: "Suivi après pose dans un rayon de 50 km autour de Lille : contrat d'entretien dès 149 € TTC/an, télémaintenance Aquarea Service Cloud et dépannage réactif." },
    ],
  },
  types: {
    badge: "Nos équipements installés",
    title: "Achat et pose : les 4 types de pompes à chaleur installés par HFE",
    answer:
      "HFE fournit et installe quatre familles d'équipements thermiques à Lille et dans le Nord : la pompe à chaleur air-eau (chauffage central et eau chaude), la pompe à chaleur air-air (climatisation réversible), la pompe à chaleur eau-eau (géothermie) et le chauffe-eau thermodynamique.",
    budgetLabel: "Budget indicatif TTC posé",
    budgetNote: "avant déduction des aides MaPrimeRénov' & CEE",
    idealForLabel: "Dans quel cas la choisir ?",
    scopLabel: "SCOP",
    items: [
      {
        name: "PAC air-eau",
        slug: "air-eau",
        icon: "heat-pump" as const,
        description:
          "La pompe à chaleur air-eau capte les calories de l'air extérieur pour chauffer l'eau de votre réseau central : radiateurs haute ou moyenne température, plancher chauffant hydraulique et ballon d'eau chaude sanitaire intégré (modèle Duo).",
        idealFor: "Idéale en maison individuelle à Lille, Marcq-en-Barœul ou Villeneuve-d'Ascq pour remplacer une chaudière gaz ou fioul en conservant vos radiateurs existants.",
        pros: [
          "Remplacement direct d'une chaudière gaz ou fioul sans changer les radiateurs (PAC moyenne/haute température 60–75 °C)",
          "Production de chauffage seul ou chauffage + eau chaude sanitaire (ECS intégrée 185 à 260 L)",
          "Éligible MaPrimeRénov' (3 000 € à 5 000 €), prime CEE (jusqu'à 5 500 €) et TVA à 5,5 %",
          "Pilotage connecté et suivi à distance (Panasonic Aquarea Smart & Service Cloud)",
        ],
        scop: "3,8 à 4,6",
        price: "12 000 € à 18 000 € TTC",
        projectsLabel: "Nos réalisations PAC air-eau",
        projectsRoute: "projectsPacAirEau" as const,
      },
      {
        name: "PAC air-air (climatisation réversible)",
        slug: "air-air",
        icon: "ac-unit" as const,
        description:
          "La pompe à chaleur air-air chauffe en hiver et rafraîchit en été via des unités intérieures murales (mono-split ou multi-split), consoles basses ou un réseau gainable dissimulé sous combles.",
        idealFor: "Idéale pour remplacer des radiateurs électriques énergivores (gain jusqu'à 2 ou 3 classes au DPE) et climatiser les chambres ou pièces de vie lors des fortes chaleurs.",
        pros: [
          "Confort 2-en-1 : chauffage réactif l'hiver et climatisation silencieuse l'été (dès 19 dB(A))",
          "Pose rapide en 1 à 2 jours (mono-split dès 1 800 € TTC posé, multi-split 2 à 5 pièces de 5 500 € à 9 000 € TTC)",
          "TVA réduite à 5,5 % sous conditions depuis le 18 juillet 2026 (arrêté du 13/07/2026 : A++ en mono-split, A+ en multi-split)",
          "Purification de l'air intérieur (technologie Panasonic nanoe™ X) et pilotage smartphone",
        ],
        scop: "4,0 à 4,6",
        price: "1 800 € à 9 000 € TTC",
        budgetNote: "TTC posé — TVA à 5,5 % sur modèles éligibles (logement > 2 ans), hors MaPrimeRénov'",
        projectsLabel: "Découvrir la climatisation réversible",
        projectsRoute: "airConditioning" as const,
      },
      {
        name: "PAC eau-eau (géothermie)",
        slug: "eau-eau",
        icon: "droplet" as const,
        description:
          "La pompe à chaleur eau-eau puise les calories dans l'eau de nappe phréatique (température stable entre 10 °C et 12 °C toute l'année dans le Nord) via un forage, pour alimenter votre chauffage central.",
        idealFor: "Idéale sur terrain permettant un forage sur nappe : rendement constant même par gel sévère et très faible consommation électrique annuelle.",
        pros: [
          "Rendement saisonnier le plus élevé du marché (SCOP de 4,5 à 7,0), indépendant de la température extérieure",
          "Parfaitement adaptée aux grandes maisons, planchers chauffants et réseaux basse température",
          "Aucune unité extérieure bruyante en façade ou dans le jardin",
          "Éligible aux aides MaPrimeRénov' géothermie (jusqu'à 11 000 €) et CEE après étude de faisabilité",
        ],
        scop: "4,5 à 7,0",
        price: "18 000 € à 35 000 € TTC",
        budgetNote: "TTC posé — nécessite une étude hydrogéologique et déclaration de forage",
      },
      {
        name: "Chauffe-eau thermodynamique",
        slug: "chauffe-eau-thermodynamique",
        icon: "flame" as const,
        description:
          "Le ballon thermodynamique intègre une pompe à chaleur dédiée à l'eau chaude sanitaire (200 à 270 litres) : il consomme jusqu'à 3 fois moins d'électricité qu'un cumulus à résistance classique.",
        idealFor: "Idéal en remplacement d'un ballon électrique de plus de 10 ans ou en complément d'une PAC air-air / chaudière chauffage seul.",
        pros: [
          "Jusqu'à 70 % d'économies sur la production d'eau chaude sanitaire d'un foyer de 3 à 6 personnes",
          "Éligible à MaPrimeRénov' (400 € à 1 200 €), aux CEE et à la TVA réduite à 5,5 %",
          "Pose en 1 journée en buanderie, garage ou cellier (prise d'air ambiant ou gainée sur extérieur)",
          "Cuve émaillée ou inox avec protection anticorrosion et durée de vie de 15 à 20 ans",
        ],
        scop: "3,0 à 3,5",
        scopLabel: "COP",
        price: "2 500 € à 4 500 € TTC",
        projectsLabel: "Nos réalisations ballon thermodynamique",
        projectsRoute: "projectsBallonThermodynamique" as const,
        colorScheme: "primary" as const,
      },
    ],
  },
  comparison: {
    badge: "Comparatif technique & financier 2026",
    title: "PAC air-eau, PAC air-air ou ballon thermodynamique : quel système choisir à Lille ?",
    intro:
      "Avant tout achat de pompe à chaleur à Lille, voici les données techniques et budgétaires constatées sur nos chantiers en métropole lilloise (fourniture + pose par nos équipes RGE QualiPAC, tarifs 2026).",
    headers: [
      "Critère",
      "PAC air-eau (chauffage central ± ECS)",
      "PAC air-air (clim réversible)",
      "PAC eau-eau (géothermie)",
      "Ballon thermodynamique (ECS)",
    ],
    rows: [
      {
        label: "Usage principal",
        values: [
          "Chauffage central (radiateurs / plancher) + eau chaude en option",
          "Chauffage hiver + climatisation été (sans réseau d'eau)",
          "Chauffage central haute performance + eau chaude",
          "Eau chaude sanitaire seule (cuve 200 à 270 L)",
        ],
      },
      {
        label: "Rendement moyen dans le Nord",
        values: [
          "SCOP 3,8 à 4,6 (jusqu'à -15 °C extérieur)",
          "SCOP 4,0 à 4,6 / SEER 6,5 à 8,5",
          "SCOP 4,5 à 7,0 (nappe stable à 10–12 °C)",
          "COP 3,0 à 3,5 (norme EN 16147)",
        ],
      },
      {
        label: "Logement cible en MEL",
        values: [
          "Maison 90 à 220 m² en remplacement de chaudière gaz ou fioul",
          "Appartement ou maison chauffée à l'électrique, combles, bureaux",
          "Maison avec terrain permettant un forage sur nappe",
          "Tout logement en remplacement d'un cumulus électrique",
        ],
      },
      {
        label: "Prix TTC posé (avant aides)",
        values: [
          "12 000 € à 18 000 € TTC",
          "1 800 € à 3 500 € (mono) / 5 500 € à 9 000 € (multi 3 unités)",
          "18 000 € à 35 000 € TTC (hors forage spécifique)",
          "2 500 € à 4 500 € TTC",
        ],
      },
      {
        label: "Aides 2026 (MaPrimeRénov' & CEE)",
        values: [
          "Jusqu'à 5 000 € MaPrimeRénov' + jusqu'à 5 500 € CEE Coup de pouce",
          "Prime CEE ponctuelle selon barème ; non éligible MaPrimeRénov'",
          "Jusqu'à 11 000 € MaPrimeRénov' + CEE géothermie",
          "400 € à 1 200 € MaPrimeRénov' + ~100 à 250 € CEE",
        ],
      },
      {
        label: "Taux de TVA (fourniture + pose HFE)",
        values: [
          "TVA à 5,5 % (logement achevé depuis > 2 ans)",
          "TVA à 5,5 % si A++ (mono) ou A+ (multi) conforme à l'arrêté du 13/07/2026",
          "TVA à 5,5 % (logement achevé depuis > 2 ans)",
          "TVA à 5,5 % (logement achevé depuis > 2 ans)",
        ],
      },
      {
        label: "Durée moyenne d'installation",
        values: [
          "2 à 3 jours (dépose chaudière, pose, désembouage, mise en service)",
          "1 journée (mono-split) à 2–3 jours (multi-split / gainable)",
          "4 à 6 jours côté chaufferie (après travaux de forage)",
          "1 demi-journée à 1 journée",
        ],
      },
    ],
    grantsTitle: "Barème MaPrimeRénov' & CEE 2026 pour une PAC air-eau à Lille (hors Île-de-France)",
    grantsSubtitle:
      "En faisant appel à HFE (artisan certifié RGE QualiPAC), l'achat et la pose de votre PAC air-eau en remplacement d'une chaudière fioul, gaz ou charbon ouvrent droit aux montants indicatifs suivants :",
    grantsItems: [
      {
        profile: "Ménages très modestes (Bleu)",
        mpr: "5 000 €",
        cee: "4 000 € à 5 500 €",
        total: "Jusqu'à 10 500 € d'aides",
      },
      {
        profile: "Ménages modestes (Jaune)",
        mpr: "4 000 €",
        cee: "4 000 € à 5 000 €",
        total: "Jusqu'à 9 000 € d'aides",
      },
      {
        profile: "Ménages intermédiaires (Violet)",
        mpr: "3 000 €",
        cee: "2 500 € à 4 000 €",
        total: "Jusqu'à 7 000 € d'aides",
      },
      {
        profile: "Ménages supérieurs (Rose)",
        mpr: "Non éligible MPR geste",
        cee: "2 500 € à 3 500 € + TVA 5,5 %",
        total: "2 500 € à 3 500 € + gain TVA",
      },
    ],
  },
  maintenance: {
    badge: "Service après-vente local",
    title: "Entretien obligatoire et dépannage de pompe à chaleur à Lille et dans la MEL",
    intro:
      "Depuis le décret n° 2020-912 du 30 juillet 2020, l'entretien d'une pompe à chaleur (4 à 70 kW) est obligatoire au minimum tous les 2 ans, et recommandé chaque année par les fabricants (Panasonic, Daikin, Mitsubishi Electric, Atlantic) pour maintenir le rendement et la garantie.",
    cards: [
      {
        icon: "shield" as const,
        title: "Contrat d'entretien PAC dès 149 € TTC / an",
        text: "Visite annuelle planifiée comprenant : contrôle d'étanchéité du circuit frigorifique (R32 / R290), nettoyage de l'évaporateur extérieur et des filtres, purge et nettoyage du pot à boues magnétique, contrôle du vase d'expansion, vérification des connexions électriques, ajustement de la courbe de chauffe (loi d'eau) et remise de l'attestation officielle d'entretien.",
      },
      {
        icon: "clock" as const,
        title: "Dépannage rapide et télémaintenance Aquarea",
        text: "Panne de chauffage, code erreur (H11, H62, F23, débit d'eau, pressostat) ou baisse de température ? Nos techniciens frigoristes interviennent à Lille, Roubaix, Tourcoing, Villeneuve-d'Ascq, Marcq-en-Barœul, Lambersart, Armentières, Douai et Lens. En tant que Pro-partenaire Panasonic, nous diagnostiquons aussi votre PAC à distance via Aquarea Service Cloud.",
      },
      {
        icon: "award" as const,
        title: "Marques installées, entretenues et dépannées",
        text: "Nous assurons la fourniture, la pose, la mise en service, la maintenance préventive et le remplacement de pièces d'origine sur les pompes à chaleur et climatisations Panasonic, Daikin, Mitsubishi Electric, Atlantic, Toshiba, Samsung, De Dietrich, Saunier Duval, Frisquet et Airwell.",
      },
    ],
    relatedTitle: "Aller plus loin sur votre projet thermique à Lille",
    relatedLinks: [
      { routeId: "grants" as const, label: "Barèmes détaillés MaPrimeRénov', CEE et éco-PTZ à Lille" },
      { routeId: "airConditioning" as const, label: "Installation de climatisation réversible (PAC air-air mono & multi-split)" },
      { routeId: "heating" as const, label: "Remplacement de chaudière gaz/fioul, plancher chauffant et radiateurs" },
      { routeId: "panasonicPartner" as const, label: "Notre partenariat Panasonic ProClub (garanties étendues & Aquarea Cloud)" },
      { routeId: "blogTvaClimReversible" as const, label: "TVA à 5,5 % sur les PAC air-air : conditions de l'arrêté du 13 juillet 2026" },
      { routeId: "blogReportageBfmPac" as const, label: "Reportage BFM TV : chantier pompe à chaleur HFE filmé à Lille" },
      { routeId: "blogReportageTf1Pac" as const, label: "Reportage TF1 : mise en service d'une PAC Panasonic par HFE à Lille" },
      { routeId: "coOwnership" as const, label: "Pompe à chaleur collective et rénovation chaufferie en copropriété" },
    ],
  },
  howItWorks: {
    badge: "Fonctionnement",
    title: "Comment fonctionne une pompe à chaleur ?",
    paragraphs: [
      "Une pompe à chaleur (PAC) utilise les calories naturellement présentes dans l'air extérieur, même par temps froid, pour chauffer votre logement. Elle fonctionne comme un réfrigérateur, mais à l'envers.",
    ],
    steps: [
      { strong: "Captage", text: " : l'unité extérieure aspire l'air ambiant et en capte les calories." },
      { strong: "Compression", text: " : un fluide frigorigène circule, est compressé et monte en température." },
      { strong: "Restitution", text: " : la chaleur est transférée à l'eau du circuit de chauffage (PAC air-eau) ou directement à l'air (PAC air-air)." },
      { strong: "Détente", text: " : le fluide retrouve son état initial et le cycle recommence." },
    ],
    closingBefore: "Pour 1 kWh d'électricité consommé, une PAC restitue 3 à 5 kWh de chaleur : c'est le ",
    closingStrong: "coefficient de performance (COP)",
    closingEnd: ".",
    imageAlt: "Pompe à chaleur installée dans une maison à Lille",
  },
  calculator: {
    title: "Estimez vos économies en 30 secondes",
    intro: "Comparez le coût de votre chauffage actuel avec celui d'une pompe à chaleur Hecker & Frères Énergie (HFE).",
  },
  gallery: {
    title: "Nos dernières installations de pompe à chaleur",
    subtitle:
      "Découvrez quelques-uns de nos chantiers récents à Lille et dans la métropole - particuliers et professionnels.",
  },
  cta: {
    title: "Prêt à passer à la pompe à chaleur ?",
    subtitle: "Étude thermique offerte, devis sous 72h, accompagnement complet pour MaPrimeRénov' & CEE.",
  },
  zones: {
    badge: "Zone d'intervention",
    title: "Installateur PAC à Lille et dans toute la métropole",
    intro:
      "Basée à Lille, Hecker & Frères Énergie (HFE) intervient dans un rayon de 50 km autour de son siège (MEL, Nord et Pas-de-Calais). Voici les principales villes — la liste complète est disponible sur notre page zone d'intervention.",
    cityPrefix: "Pompe à chaleur",
    fullListLink: "Voir toutes les communes desservies (50 km)",
  },
  faq: {
    badge: "FAQ pompe à chaleur",
    title: "Tout savoir sur la pompe à chaleur à Lille",
    intro:
      "Réponses aux questions les plus recherchées sur l'achat, la vente, l'installation, les aides et l'entretien d'une pompe à chaleur à Lille, Villeneuve-d'Ascq, Roubaix, Tourcoing, Marcq-en-Barœul et dans les Hauts-de-France.",
    items: [
      {
        question: "Où acheter et faire installer une pompe à chaleur air-eau à Lille ?",
        answer:
          "Hecker & Frères Énergie (HFE) assure la vente (fourniture du matériel) et l'installation complète de votre pompe à chaleur air-eau à Lille et dans toute la métropole lilloise. Passer par un artisan RGE QualiPAC pour l'achat et la pose réunis sur une même facture vous permet de bénéficier de la TVA réduite à 5,5 % sur le matériel et la main-d'œuvre (au lieu de 20 % en cas d'achat seul), ainsi que des aides MaPrimeRénov' et CEE. Nous dimensionnons et posons les PAC air-eau Panasonic, Daikin, Atlantic et Mitsubishi Electric avec étude thermique gratuite et devis sous 72 h.",
      },
      {
        question: "Qui est installateur de pompe à chaleur à Lille ?",
        answer:
          "HFE (Hecker & Frères Énergie) est installateur certifié RGE QualiPAC basé au 44 rue Jean sans Peur à Lille, formé aux Compagnons du Devoir, avec plus de 15 ans d'expérience et plus de 1 500 installations en pompes à chaleur, climatisation et chauffage. Nous intervenons pour la pose, l'entretien annuel et le dépannage de PAC air-eau, air-air et chauffe-eau thermodynamiques dans un rayon de 50 km autour de Lille, avec garantie décennale.",
      },
      {
        question: "Où acheter une pompe à chaleur air-air à Lille et à quel prix ?",
        answer:
          "Pour l'achat et la pose d'une pompe à chaleur air-air (climatisation réversible fixe) à Lille, HFE réalise le bilan thermique de vos pièces, la fourniture et l'installation en mono-split (1 800 € à 3 500 € TTC posé), multi-split (5 500 € à 9 000 € TTC posé) ou gainable (dès 9 500 € TTC). Depuis le 18 juillet 2026 (arrêté du 13 juillet 2026), l'achat + pose d'une PAC air-air classée A++ (mono-split ≤ 12 kW) ou A+ (multi-split ≤ 12 kW) dans un logement de plus de 2 ans bénéficie de la TVA à 5,5 %.",
      },
      {
        question: "Intervenez-vous pour l'installation et le dépannage de PAC à Roubaix, Tourcoing, Douai et Haubourdin ?",
        answer:
          "Oui. Nos équipes basées à Lille interviennent quotidiennement à Roubaix, Tourcoing, Haubourdin, Hem, Lambersart, Wasquehal et Armentières, ainsi que dans le bassin minier (Douai, Lens, Béthune, Hénin-Beaumont) dans un rayon de 50 km. Que ce soit pour l'achat et la pose d'une PAC air-eau ou air-air, un contrat d'entretien ou un dépannage, le déplacement pour étude et devis est gratuit.",
      },
      {
        question: "Installez-vous des pompes à chaleur à Villeneuve-d'Ascq ?",
        answer:
          "Oui. HFE intervient à Villeneuve-d'Ascq pour l'installation de pompes à chaleur air-eau, air-air et chauffe-eau thermodynamique, en maison individuelle, copropriété ou tertiaire. Nous y réalisons régulièrement des chantiers PAC air-eau couplées à radiateurs ou plancher chauffant. Installateur RGE QualiPAC, étude thermique et devis gratuits sur place.",
      },
      {
        question: "Installez-vous des pompes à chaleur air-eau à Marcq-en-Barœul ?",
        answer:
          "Oui, Marcq-en-Barœul fait partie de notre zone d'intervention prioritaire. Nous y installons des PAC air-eau en remplacement de chaudière fioul ou gaz, avec raccordement aux radiateurs existants ou au plancher chauffant. Installateur RGE QualiPAC, nous gérons le dossier d'aides MaPrimeRénov' et CEE. Délai moyen : devis sous 72 h, pose en 2 à 3 jours.",
      },
      {
        question: "Intervenez-vous pour l'installation de pompe à chaleur dans les Hauts-de-France ?",
        answer:
          "Oui. Basés à Lille, nous couvrons la métropole lilloise (MEL) et les Hauts-de-France dans un rayon de 50 km : Nord (59) et Pas-de-Calais (62), incluant Roubaix, Tourcoing, Lens, Douai, Valenciennes, Arras et les communes alentour. Pour les projets au-delà de ce périmètre, contactez-nous : nous étudions chaque demande au cas par cas.",
      },
      {
        question: "Proposez-vous la pose de plancher chauffant avec une PAC air-eau à Villeneuve-d'Ascq ?",
        answer:
          "Oui. Nous installons des planchers chauffants hydrauliques neufs ou en rénovation à Villeneuve-d'Ascq, couplés à une pompe à chaleur air-eau dimensionnée pour la basse température (départ d'eau à 30–35 °C). Ce duo offre un SCOP supérieur à 4,3 et un confort thermique homogène. HFE est certifié RGE QualiPAC.",
      },
      {
        question: "Quel est le prix d'une pompe à chaleur installée à Lille en 2026 ?",
        answer:
          "Le prix d'une pompe à chaleur air-eau installée à Lille est compris entre 12 000 € et 18 000 € TTC (fourniture et pose, hors aides), selon la puissance (6 à 16 kW), la production d'eau chaude sanitaire et la configuration hydraulique. Avec MaPrimeRénov' (jusqu'à 5 000 €) et les CEE Coup de pouce (jusqu'à 5 500 €), le reste à charge peut descendre entre 2 000 € et 4 500 € pour les ménages modestes. Une PAC air-air coûte de 1 800 € à 3 500 € TTC en mono-split et de 5 500 € à 9 000 € TTC en multi-split.",
      },
      {
        question: "Quelle pompe à chaleur choisir : air-eau ou air-air ?",
        answer:
          "Choisissez une PAC air-eau si votre logement dispose déjà d'un circuit de chauffage central (radiateurs à eau ou plancher chauffant) : elle remplace votre chaudière gaz ou fioul, assure l'eau chaude sanitaire et ouvre droit à MaPrimeRénov' et aux CEE. Choisissez une PAC air-air (climatisation réversible) si vous chauffez avec des convecteurs électriques ou si vous souhaitez climatiser vos pièces en été pour un budget plus accessible.",
      },
      {
        question: "Est-ce qu'une pompe à chaleur fonctionne bien dans le Nord ?",
        answer:
          "Oui, parfaitement. Les pompes à chaleur que nous installons (notamment Panasonic Aquarea et Mitsubishi Electric) maintiennent leur puissance de chauffe jusqu'à -15 °C voire -20 °C sans appoint excessif. Le climat océanique de Lille (températures hivernales moyennes entre +1 °C et +6 °C, descendant rarement sous -5 °C) permet d'obtenir un SCOP réel de 3,8 à 4,5 sur l'ensemble de la saison de chauffe.",
      },
      {
        question: "Quelles sont les aides MaPrimeRénov', CEE et TVA 5,5 % pour une PAC en 2026 ?",
        answer:
          "Pour une PAC air-eau installée par HFE (RGE QualiPAC) en remplacement d'une chaudière fioul, gaz ou charbon : MaPrimeRénov' finance de 3 000 € (revenus intermédiaires) à 5 000 € (revenus très modestes), la prime CEE Coup de pouce chauffage ajoute de 2 500 € à 5 500 €, et la TVA s'applique à 5,5 % sur la fourniture et la pose. Pour une PAC air-air, MaPrimeRénov' ne s'applique pas, mais la TVA à 5,5 % est désormais applicable depuis le 18 juillet 2026 sur les équipements fixes performants (A++ en mono-split, A+ en multi-split) posés dans un logement de plus de 2 ans.",
      },
      {
        question: "Quel est le tarif et la fréquence d'entretien d'une pompe à chaleur à Lille ?",
        answer:
          "L'entretien est légalement obligatoire tous les 2 ans pour les PAC de 4 à 70 kW (décret du 30 juillet 2020), et conseillé chaque année pour préserver le rendement et la garantie constructeur. HFE propose un contrat d'entretien annuel dès 149 € TTC/an incluant la vérification d'étanchéité frigorifique, le nettoyage des échangeurs et du pot à boues, le contrôle des sécurités et l'accès prioritaire à notre service de dépannage en métropole lilloise.",
      },
    ],
  },
} as const;

const en = {
  seo: {
    title: "Heat pump Lille: air-to-water & air-to-air RGE installation",
    description:
      "RGE QualiPAC installer in Lille: supply, installation, servicing and repair of air-to-water and air-to-air heat pumps. Free quote within 72h, MaPrimeRénov' & CEE.",
    keywords: [
      "heat pump Lille",
      "air-to-water heat pump Lille",
      "air-to-air heat pump Lille",
      "heat pump installer Lille",
      "heat pump servicing repair Lille",
      "RGE QualiPAC installer",
      "MaPrimeRénov heat pump",
      "heat pump price Lille",
      "thermodynamic water heater Lille",
      "boiler replacement heat pump",
    ],
  },
  breadcrumbs: [
    { name: "Home", url: "/en" },
    { name: "Heat pump", url: "/en/heat-pump" },
  ],
  structuredData: {
    serviceName: "Heat pump installation, servicing and repair in Lille",
    serviceDescription:
      "Supply, installation, servicing and repair of air-to-water, air-to-air heat pumps and thermodynamic water heaters by Hecker & Frères Énergie (HFE), RGE QualiPAC certified contractor in Lille.",
    slug: "heat-pump",
  },
  hero: {
    badge: "RGE QualiPAC contractor in Lille",
    titleBefore: "Installation, servicing & repair of ",
    titleHighlight: "heat pumps in Lille",
    titleAfter: " and the metro area",
    description:
      "An RGE QualiPAC certified contractor based in Lille (44 rue Jean sans Peur), Hecker & Frères Énergie (HFE) supplies, installs, services and repairs air-to-water, air-to-air, water-to-water heat pumps and thermodynamic water heaters across the Lille metropolitan area. On-site thermal survey, detailed quote within 72h, MaPrimeRénov' and CEE grant support, ten-year warranty.",
    ctaQuote: "Free quote within 72h",
    stats: [
      { label: "Savings", value: "Up to 75%" },
      { label: "Combined grants", value: "€10,500*" },
      { label: "Servicing", value: "From €149/yr" },
    ],
    statsNote: "* Maximum combined MaPrimeRénov' + CEE grants on air-to-water heat pumps depending on household income.",
    imageAlt: "Air-to-water heat pump installation by Hecker & Frères Énergie (HFE) in Lille",
  },
  benefits: {
    title: "Why install a heat pump in the Lille metropolitan area?",
    intro:
      "Well suited to northern France's temperate climate, a heat pump captures heat from outdoor air (even down to -15°C) or groundwater to heat your home with a seasonal performance factor (SCOP) of 3.5 to 7.",
    items: [
      { icon: "euro" as const, title: "Up to 75% savings", text: "A modern heat pump delivers 3.5 to 4.5 kWh of heat per 1 kWh of electricity used, sharply cutting bills compared with oil, gas or electric convectors." },
      { icon: "leaf" as const, title: "Turnkey supply & installation", text: "Equipment supply (Panasonic, Daikin, Mitsubishi Electric, Atlantic) and installation by our trained engineers, qualifying eligible systems for 5.5% reduced VAT." },
      { icon: "shield" as const, title: "MaPrimeRénov' & CEE grants", text: "Up to €5,000 from MaPrimeRénov' and €5,500 in CEE heating boost grants when replacing an oil or gas boiler, plus 0% eco-PTZ financing." },
      { icon: "snowflake" as const, title: "Local servicing & repair", text: "Aftercare within 50 km of Lille: annual maintenance contracts from €149 incl. VAT/year, Aquarea Service Cloud remote monitoring and responsive call-outs." },
    ],
  },
  types: {
    badge: "Systems we install",
    title: "Supply and installation: the 4 types of heat pumps installed by HFE",
    answer:
      "HFE supplies and installs four types of heat pump systems in Lille and northern France: air-to-water heat pumps (central heating and hot water), air-to-air heat pumps (reversible AC), water-to-water geothermal heat pumps, and thermodynamic water heaters.",
    budgetLabel: "Indicative installed price (incl. VAT)",
    budgetNote: "before MaPrimeRénov' & CEE grants",
    idealForLabel: "When should you choose this system?",
    scopLabel: "SCOP",
    items: [
      {
        name: "Air-to-water heat pump",
        slug: "air-eau",
        icon: "heat-pump" as const,
        description:
          "The air-to-water heat pump captures heat from outdoor air and transfers it to your central heating water circuit: existing radiators, hydronic underfloor heating, and integrated domestic hot water tank (Duo models).",
        idealFor: "Ideal for houses in Lille, Marcq-en-Barœul or Villeneuve-d'Ascq to replace a gas or oil boiler while keeping existing radiators.",
        pros: [
          "Direct replacement for oil or gas boilers without changing radiators (medium/high-temperature 60–75°C models)",
          "Space heating only or combined heating + domestic hot water (185 to 260 L integrated tank)",
          "Eligible for MaPrimeRénov' (€3,000 to €5,000), CEE grants (up to €5,500) and 5.5% VAT",
          "Connected control and remote diagnostics (Panasonic Aquarea Smart & Service Cloud)",
        ],
        scop: "3.8 to 4.6",
        price: "€12,000 to €18,000 incl. VAT",
        projectsLabel: "Our air-to-water projects",
        projectsRoute: "projectsPacAirEau" as const,
      },
      {
        name: "Air-to-air heat pump (reversible AC)",
        slug: "air-air",
        icon: "ac-unit" as const,
        description:
          "The air-to-air heat pump heats in winter and cools in summer via wall-mounted indoor units (single-split or multi-split), floor consoles or concealed ducted systems.",
        idealFor: "Ideal for replacing high-consumption electric convectors (improving EPC rating by up to 2 or 3 bands) and cooling bedrooms or living areas in summer.",
        pros: [
          "2-in-1 comfort: fast winter heating and quiet summer cooling (from 19 dB(A))",
          "Installed in 1 to 2 days (single-split from €1,800 incl. VAT, 2–5 room multi-split from €5,500 to €9,000 incl. VAT)",
          "5.5% reduced VAT under conditions since 18 July 2026 (order of 13/07/2026: A++ single-split, A+ multi-split)",
          "Indoor air purification (Panasonic nanoe™ X) and smartphone control",
        ],
        scop: "4.0 to 4.6",
        price: "€1,800 to €9,000 incl. VAT",
        budgetNote: "Incl. VAT installed — 5.5% VAT on eligible models (home > 2 yrs), not eligible for MaPrimeRénov'",
        projectsLabel: "Discover reversible air conditioning",
        projectsRoute: "airConditioning" as const,
      },
      {
        name: "Water-to-water heat pump (geothermal)",
        slug: "water-to-water",
        icon: "droplet" as const,
        description:
          "A water-to-water heat pump draws heat from groundwater (steady at 10–12°C year-round in northern France) via a borehole and transfers it to your central heating circuit.",
        idealFor: "Best if your plot allows a groundwater borehole — outstanding efficiency regardless of outdoor frost and very low annual running costs.",
        pros: [
          "Highest seasonal efficiency on the market (SCOP 4.5 to 7.0), unaffected by outdoor air temperature",
          "Great fit for large homes, underfloor heating and low-temperature hydronic systems",
          "No outdoor fan unit on facades or in the garden",
          "Eligible for geothermal MaPrimeRénov' (up to €11,000) and CEE grants subject to site study",
        ],
        scop: "4.5 to 7.0",
        price: "€18,000 to €35,000 incl. VAT",
        budgetNote: "Installed price — requires hydrogeological study and borehole permits",
      },
      {
        name: "Thermodynamic water heater",
        slug: "chauffe-eau-thermodynamique",
        icon: "flame" as const,
        description:
          "The thermodynamic water heater combines a 200 to 270 L hot water tank with a dedicated mini heat pump, using up to 3 times less electricity than a standard electric immersion tank.",
        idealFor: "Best for replacing an electric tank over 10 years old or pairing with an air-to-air heat pump or heating-only boiler.",
        pros: [
          "Up to 70% savings on domestic hot water for a household of 3 to 6 people",
          "Eligible for MaPrimeRénov' (€400 to €1,200), CEE grants and 5.5% reduced VAT",
          "Installed in 1 day in a utility room, garage or cellar (ambient or ducted outdoor air)",
          "Enamelled or stainless-steel tank with anti-corrosion protection and 15–20 year lifespan",
        ],
        scop: "3.0 to 3.5",
        scopLabel: "COP",
        price: "€2,500 to €4,500 incl. VAT",
        projectsLabel: "Our thermodynamic water heater projects",
        projectsRoute: "projectsBallonThermodynamique" as const,
        colorScheme: "primary" as const,
      },
    ],
  },
  comparison: {
    badge: "2026 technical & financial comparison",
    title: "Air-to-water, air-to-air or thermodynamic tank: which heat pump for your home in Lille?",
    intro:
      "Before buying a heat pump in Lille, compare the real technical specs and installed price ranges from our job sites across the Lille metropolitan area (supply + installation by our RGE QualiPAC team, 2026 rates).",
    headers: [
      "Criteria",
      "Air-to-water PAC (central heating ± DHW)",
      "Air-to-air PAC (reversible AC)",
      "Water-to-water PAC (geothermal)",
      "Thermodynamic water heater (DHW)",
    ],
    rows: [
      {
        label: "Primary use",
        values: [
          "Central heating (radiators / underfloor) + optional hot water",
          "Winter heating + summer cooling (ductless / air distribution)",
          "High-performance central heating + domestic hot water",
          "Domestic hot water only (200 to 270 L tank)",
        ],
      },
      {
        label: "Seasonal efficiency in northern France",
        values: [
          "SCOP 3.8 to 4.6 (down to -15°C outdoor)",
          "SCOP 4.0 to 4.6 / SEER 6.5 to 8.5",
          "SCOP 4.5 to 7.0 (groundwater steady at 10–12°C)",
          "COP 3.0 to 3.5 (EN 16147 standard)",
        ],
      },
      {
        label: "Target property in Lille area",
        values: [
          "90 to 220 m² house replacing a gas or oil boiler",
          "Flat or house with electric heaters, loft conversions, offices",
          "House with land suitable for groundwater borehole",
          "Any home replacing an ageing electric water heater",
        ],
      },
      {
        label: "Installed price incl. VAT (before grants)",
        values: [
          "€12,000 to €18,000 incl. VAT",
          "€1,800 to €3,500 (single) / €5,500 to €9,000 (3-unit multi)",
          "€18,000 to €35,000 incl. VAT (excl. specific drilling)",
          "€2,500 to €4,500 incl. VAT",
        ],
      },
      {
        label: "2026 grants (MaPrimeRénov' & CEE)",
        values: [
          "Up to €5,000 MaPrimeRénov' + up to €5,500 CEE boost",
          "Specific CEE rebate; not eligible for MaPrimeRénov'",
          "Up to €11,000 MaPrimeRénov' + geothermal CEE",
          "€400 to €1,200 MaPrimeRénov' + ~€100–250 CEE",
        ],
      },
      {
        label: "VAT rate (supply + install by HFE)",
        values: [
          "5.5% VAT (home completed > 2 years ago)",
          "5.5% VAT if A++ (single) or A+ (multi) per 13/07/2026 order",
          "5.5% VAT (home completed > 2 years ago)",
          "5.5% VAT (home completed > 2 years ago)",
        ],
      },
      {
        label: "Typical installation time",
        values: [
          "2 to 3 days (boiler removal, fitting, flushing, commissioning)",
          "1 day (single-split) to 2–3 days (multi-split / ducted)",
          "4 to 6 days in plant room (after borehole works)",
          "Half a day to 1 day",
        ],
      },
    ],
    grantsTitle: "2026 MaPrimeRénov' & CEE grant scale for an air-to-water heat pump in Lille",
    grantsSubtitle:
      "When you work with HFE (RGE QualiPAC certified), supplying and installing an air-to-water heat pump to replace an oil, gas or coal boiler qualifies for the following indicative amounts:",
    grantsItems: [
      {
        profile: "Very modest income (Blue)",
        mpr: "€5,000",
        cee: "€4,000 to €5,500",
        total: "Up to €10,500 in grants",
      },
      {
        profile: "Modest income (Yellow)",
        mpr: "€4,000",
        cee: "€4,000 to €5,000",
        total: "Up to €9,000 in grants",
      },
      {
        profile: "Intermediate income (Purple)",
        mpr: "€3,000",
        cee: "€2,500 to €4,000",
        total: "Up to €7,000 in grants",
      },
      {
        profile: "Higher income (Pink)",
        mpr: "Not eligible for single-measure MPR",
        cee: "€2,500 to €3,500 + 5.5% VAT",
        total: "€2,500 to €3,500 + VAT saving",
      },
    ],
  },
  maintenance: {
    badge: "Local after-sales service",
    title: "Mandatory heat pump servicing and repair in Lille and the metro area",
    intro:
      "Under French decree no. 2020-912 of 30 July 2020, servicing a heat pump (4 to 70 kW) is mandatory at least every 2 years, and recommended annually by manufacturers (Panasonic, Daikin, Mitsubishi Electric, Atlantic) to preserve efficiency and warranty coverage.",
    cards: [
      {
        icon: "shield" as const,
        title: "Annual maintenance contract from €149 incl. VAT / yr",
        text: "Scheduled annual visit including refrigerant leak check (R32 / R290), outdoor coil and filter cleaning, magnetic dirt separator flushing, expansion vessel check, electrical inspection, weather-compensation curve tuning and official servicing certificate.",
      },
      {
        icon: "clock" as const,
        title: "Fast repair & Aquarea remote diagnostics",
        text: "Heating breakdown, fault code (H11, H62, F23, flow switch, pressure sensor) or temperature drop? Our refrigeration engineers cover Lille, Roubaix, Tourcoing, Villeneuve-d'Ascq, Marcq-en-Barœul, Lambersart, Armentières, Douai and Lens. As a Panasonic Pro-partner, we also run remote diagnostics via Aquarea Service Cloud.",
      },
      {
        icon: "award" as const,
        title: "Brands we install, service and repair",
        text: "We supply, install, commission, maintain and fit genuine spare parts on heat pumps and air conditioning systems by Panasonic, Daikin, Mitsubishi Electric, Atlantic, Toshiba, Samsung, De Dietrich, Saunier Duval, Frisquet and Airwell.",
      },
    ],
    relatedTitle: "Explore more about your heating & cooling project in Lille",
    relatedLinks: [
      { routeId: "grants" as const, label: "Detailed MaPrimeRénov', CEE and 0% eco-loan guide in Lille" },
      { routeId: "airConditioning" as const, label: "Reversible air conditioning installation (single & multi-split air-to-air)" },
      { routeId: "heating" as const, label: "Gas/oil boiler replacement, underfloor heating and radiators" },
      { routeId: "panasonicPartner" as const, label: "Our Panasonic ProClub partnership (extended warranties & Aquarea Cloud)" },
      { routeId: "blogTvaClimReversible" as const, label: "5.5% VAT on air-to-air heat pumps: conditions of the 13 July 2026 order" },
      { routeId: "blogReportageBfmPac" as const, label: "BFM TV report: HFE heat pump installation filmed in Lille" },
      { routeId: "blogReportageTf1Pac" as const, label: "TF1 report: Panasonic heat pump commissioned by HFE in Lille" },
      { routeId: "coOwnership" as const, label: "Collective heat pumps and boiler room upgrades for co-owned buildings" },
    ],
  },
  howItWorks: {
    badge: "How it works",
    title: "How does a heat pump work?",
    paragraphs: [
      "A heat pump uses the heat naturally present in outdoor air, even in cold weather, to warm your home. It works like a refrigerator, but in reverse.",
    ],
    steps: [
      { strong: "Capture", text: ": the outdoor unit draws in ambient air and extracts heat." },
      { strong: "Compression", text: ": refrigerant circulates, is compressed and rises in temperature." },
      { strong: "Release", text: ": heat is transferred to the heating circuit water (air-to-water) or directly to the air (air-to-air)." },
      { strong: "Expansion", text: ": the refrigerant returns to its initial state and the cycle starts again." },
    ],
    closingBefore: "For every 1 kWh of electricity consumed, a heat pump delivers 3 to 5 kWh of heat: this is the ",
    closingStrong: "coefficient of performance (COP)",
    closingEnd: ".",
    imageAlt: "Heat pump installed in a home in Lille",
  },
  calculator: {
    title: "Estimate your savings in 30 seconds",
    intro: "Compare the cost of your current heating with a Hecker & Frères Énergie (HFE) heat pump.",
  },
  gallery: {
    title: "Our latest heat pump installations",
    subtitle: "A selection of recent projects in Lille and the metropolitan area — residential and commercial.",
  },
  cta: {
    title: "Ready to switch to a heat pump?",
    subtitle: "Free thermal study, quote within 72h, full support for MaPrimeRénov' & CEE applications.",
  },
  zones: {
    badge: "Service area",
    title: "Heat pump installer in Lille and across the metropolitan area",
    intro:
      "Based in Lille, Hecker & Frères Énergie (HFE) covers a 50 km radius from HQ (MEL, Nord and Pas-de-Calais). Key cities below — see our service area page for the full list.",
    cityPrefix: "Heat pump",
    fullListLink: "View all towns served (50 km)",
  },
  faq: {
    badge: "Heat pump FAQ",
    title: "Everything you need to know about heat pumps in Lille",
    intro:
      "Answers to the most common questions about buying, installing, financing and servicing a heat pump in Lille, Villeneuve-d'Ascq, Roubaix, Tourcoing, Marcq-en-Barœul and across Hauts-de-France.",
    items: [
      {
        question: "Where can I buy and have an air-to-water heat pump installed in Lille?",
        answer:
          "Hecker & Frères Énergie (HFE) handles both equipment supply and full installation of your air-to-water heat pump in Lille and across the metropolitan area. Having an RGE QualiPAC contractor invoice supply and installation together qualifies you for 5.5% reduced VAT on both equipment and labour (instead of 20% when buying equipment alone), plus MaPrimeRénov' and CEE grants. We size and install Panasonic, Daikin, Atlantic and Mitsubishi Electric units with a free thermal study and quote within 72h.",
      },
      {
        question: "Who is the heat pump installer in Lille?",
        answer:
          "HFE (Hecker & Frères Énergie) is an RGE QualiPAC-certified installer based at 44 rue Jean sans Peur in Lille, trained with the Compagnons du Devoir, with over 15 years of experience and 1,500+ installations. We handle installation, annual servicing and repair of air-to-water, air-to-air and thermodynamic water heaters within a 50 km radius of Lille, backed by a ten-year warranty.",
      },
      {
        question: "Where can I buy an air-to-air heat pump in Lille and at what price?",
        answer:
          "For supply and installation of a fixed air-to-air heat pump (reversible AC) in Lille, HFE carries out a room-by-room assessment and installs single-split (€1,800 to €3,500 incl. VAT), multi-split (€5,500 to €9,000 incl. VAT) or ducted systems (from €9,500 incl. VAT). Since 18 July 2026 (order of 13 July 2026), supply + installation of an A++ single-split or A+ multi-split unit (≤ 12 kW) in a home over 2 years old qualifies for 5.5% VAT.",
      },
      {
        question: "Do you install and repair heat pumps in Roubaix, Tourcoing, Douai and Haubourdin?",
        answer:
          "Yes. Our Lille-based engineers work daily in Roubaix, Tourcoing, Haubourdin, Hem, Lambersart, Wasquehal and Armentières, as well as Douai, Lens and Béthune within a 50 km radius. Whether for buying and installing an air-to-water or air-to-air heat pump, annual servicing or breakdown repair, site visits and quotes are free.",
      },
      {
        question: "Do you install heat pumps in Villeneuve-d'Ascq?",
        answer:
          "Yes. HFE works in Villeneuve-d'Ascq installing air-to-water, air-to-air and thermodynamic water heaters for single-family homes, co-owned buildings and commercial premises. We regularly carry out air-to-water heat pump projects connected to radiators or underfloor heating. RGE QualiPAC installer — free thermal study and on-site quote.",
      },
      {
        question: "Do you install air-to-water heat pumps in Marcq-en-Barœul?",
        answer:
          "Yes, Marcq-en-Barœul is a priority service area for us. We install air-to-water heat pumps there to replace oil or gas boilers, connected to existing radiators or underfloor heating. As an RGE QualiPAC installer, we handle MaPrimeRénov' and CEE grant applications. Typical timeline: quote within 72h, installation in 2 to 3 days.",
      },
      {
        question: "Do you install heat pumps across Hauts-de-France?",
        answer:
          "Yes. Based in Lille, we cover the Lille metropolitan area (MEL) and Hauts-de-France within a 50 km radius: Nord (59) and Pas-de-Calais (62), including Roubaix, Tourcoing, Lens, Douai, Valenciennes, Arras and surrounding towns. For projects beyond this area, contact us — we review each request individually.",
      },
      {
        question: "Do you install underfloor heating with an air-to-water heat pump in Villeneuve-d'Ascq?",
        answer:
          "Yes. We install new or retrofit hydronic underfloor heating in Villeneuve-d'Ascq, paired with a low-temperature air-to-water heat pump (30–35°C flow temperature) achieving a SCOP above 4.3. HFE is RGE QualiPAC certified.",
      },
      {
        question: "How much does an installed heat pump cost in Lille in 2026?",
        answer:
          "An installed air-to-water heat pump in Lille costs between €12,000 and €18,000 incl. VAT (before grants), depending on capacity (6 to 16 kW), hot water production and pipework. With MaPrimeRénov' (up to €5,000) and CEE (up to €5,500), out-of-pocket cost can drop to €2,000–4,500 for modest-income households. An air-to-air heat pump costs €1,800 to €3,500 in single-split and €5,500 to €9,000 in multi-split.",
      },
      {
        question: "Which heat pump should I choose: air-to-water or air-to-air?",
        answer:
          "Choose an air-to-water heat pump if you already have a central heating circuit (radiators or underfloor heating): it replaces your oil or gas boiler, can produce domestic hot water and qualifies for MaPrimeRénov' and CEE grants. Choose an air-to-air heat pump (reversible AC) if you heat with electric convectors or want summer cooling on a lower upfront budget.",
      },
      {
        question: "Do heat pumps work well in northern France?",
        answer:
          "Yes, perfectly. The heat pumps we install (including Panasonic Aquarea and Mitsubishi Electric) maintain heating output down to -15°C or -20°C. Lille's temperate oceanic climate (winter averages of +1°C to +6°C, rarely below -5°C) yields a real seasonal SCOP of 3.8 to 4.5.",
      },
      {
        question: "What MaPrimeRénov', CEE and 5.5% VAT incentives apply in 2026?",
        answer:
          "For an air-to-water heat pump installed by HFE (RGE QualiPAC) replacing an oil, gas or coal boiler: MaPrimeRénov' provides €3,000 to €5,000, the CEE heating boost adds €2,500 to €5,500, and 5.5% VAT applies to supply and labour. For air-to-air heat pumps, 5.5% VAT applies since 18 July 2026 on qualifying high-efficiency fixed systems (A++ single-split, A+ multi-split) in homes over 2 years old.",
      },
      {
        question: "How much does heat pump servicing cost in Lille?",
        answer:
          "Servicing is legally required every 2 years for 4 to 70 kW heat pumps (decree of 30 July 2020) and recommended annually to protect efficiency and warranty. HFE offers annual maintenance contracts from €149 incl. VAT/year, including refrigerant leak testing, coil and magnetic filter cleaning, safety checks and priority breakdown support across the Lille metro area.",
      },
    ],
  },
} as const;

export function getHeatPumpContent(locale: Locale) {
  return locale === "en" ? en : fr;
}

export type HeatPumpContent = ReturnType<typeof getHeatPumpContent>;
