import type { Locale } from "../config";
import type { BlogArticleContent } from "./blog-article-types";

const PX = "https://www.aircon.panasonic.eu/FR_fr";
const URL_GAMME = `${PX}/ranges/aquarea/aquarea-ecoflex/`;
const URL_PRESENTATION = `${PX}/happening/aquarea-ecoflex/`;
const URL_EXT = `${PX}/product/aquarea-ecoflex-k-series-outdoor-unit-r32/`;
const URL_HYDRO = `${PX}/product/aquarea-ecoflex-k-series-air-to-water-indoor-units/`;
const URL_ETHEREA = `${PX}/product/aquarea-ecoflex-etherea-with-nanoe-x-white-matt/`;
const URL_GAINABLE = `${PX}/product/aquarea-ecoflex-cache-dissimulation/`;
const URL_GAINABLE_BP = `${PX}/product/aquarea-ecoflex-low-static-pressure-hide-away/`;
const URL_NEWS =
  "https://www.aircon.panasonic.eu/IE_en/news/new/panasonic-unveils-new-aquarea-ecoflex-the-next-generation-in-heating-cooling-and-air-quality/";

const IMG = "/assets/blog/ecoflex/panasonic-aquarea-ecoflex-stand.jpg";

const a = (url: string, label: string) =>
  `<a href="${url}" rel="noopener" target="_blank">${label}</a>`;

const PHOTO_FR = `
<figure class="my-6">
  <img src="${IMG}" alt="Stand Panasonic Aquarea EcoFlex : groupe extérieur noir, ballon d’eau chaude EcoFlex, unités murales Etherea noire et blanche et étiquette du gainable EcoFlex" width="1000" height="1201" loading="lazy" decoding="async" class="rounded-xl w-full h-auto" />
  <figcaption class="mt-2 text-sm text-neutral-500">La gamme Aquarea EcoFlex présentée sur un stand Panasonic : groupe extérieur, ballon d’eau chaude, unités murales Etherea et gainable. Photo HFE.</figcaption>
</figure>`;

const PHOTO_EN = `
<figure class="my-6">
  <img src="${IMG}" alt="Panasonic Aquarea EcoFlex stand: black outdoor unit, EcoFlex hot-water cylinder, black and white Etherea wall units and the EcoFlex ducted unit label" width="1000" height="1201" loading="lazy" decoding="async" class="rounded-xl w-full h-auto" />
  <figcaption class="mt-2 text-sm text-neutral-500">The Aquarea EcoFlex range on a Panasonic stand: outdoor unit, hot-water cylinder, Etherea wall units and ducted unit. Photo: HFE.</figcaption>
</figure>`;

const fr = {
  seo: {
    title: "Panasonic Aquarea EcoFlex : pour qui, quels cas ? | HFE",
    description:
      "Aquarea EcoFlex : une PAC Panasonic qui chauffe, rafraîchit et fait l’eau chaude. Composants, chiffres officiels, cas d’usage et limites, par HFE à Lille.",
    keywords: [
      "Aquarea EcoFlex",
      "Panasonic EcoFlex",
      "pompe à chaleur air-air air-eau",
      "pompe à chaleur avec climatisation et eau chaude",
      "récupération de chaleur eau chaude",
      "installateur Panasonic Lille",
    ],
  },
  breadcrumbs: [
    { name: "Accueil", url: "/" },
    { name: "Blog", url: "/blog" },
    { name: "Nouveautés", url: "/blog/nouveautes" },
    { name: "Panasonic Aquarea EcoFlex", url: "/blog/nouveaute-panasonic-aquarea-ecoflex" },
  ],
  article: {
    headline: "Panasonic Aquarea EcoFlex : chauffage, clim et eau chaude avec une seule unité extérieure",
    image: IMG,
    datePublished: "2026-10-31",
    dateModified: "2026-10-31",
    dateLabel: "Publié le 31 octobre 2026",
    excerpt:
      "Une seule unité extérieure pour chauffer, rafraîchir et produire l’eau chaude, en récupérant la chaleur de la clim l’été. On vous explique comment fonctionne l’Aquarea EcoFlex, dans quels logements elle a du sens, et quand on vous conseillera autre chose.",
  },
  hero: {
    badge: "Nouveautés",
    lead: "Gamme Panasonic Aquarea EcoFlex",
  },
  intro: [
    "Chez nos clients de la métropole lilloise, la même question revient de plus en plus : « Je veux changer mon chauffage, mais j’aimerais aussi avoir frais l’été. Faut-il deux installations ? » Jusqu’ici, la réponse était souvent oui : une pompe à chaleur pour le chauffage et l’eau chaude, et une climatisation à côté, avec deux unités extérieures sur la façade.",
    "Avec l’<strong>Aquarea EcoFlex</strong>, Panasonic regroupe tout cela autour d’une seule unité extérieure. Nous avons vu la gamme de près sur un stand Panasonic (c’est notre photo ci-dessous). Voici ce qu’il faut savoir, avec les chiffres des fiches du fabricant, et notre avis d’installateur RGE (Reconnu Garant de l’Environnement) sur les cas où elle est intéressante… et ceux où elle ne l’est pas.",
  ],
  sections: [
    {
      id: "ce-que-c-est",
      title: "L’Aquarea EcoFlex, qu’est-ce que c’est ?",
      html: `
<p>C’est une pompe à chaleur qui mélange deux familles qu’on installe d’habitude séparément :</p>
<ul>
  <li><strong>l’air-air</strong> : la chaleur est puisée dans l’air extérieur et soufflée directement dans les pièces par des unités intérieures (murales ou cachées dans un faux plafond). C’est le principe d’une climatisation réversible, qui chauffe l’hiver et rafraîchit l’été ;</li>
  <li><strong>l’air-eau</strong> : la chaleur puisée dehors est transmise à de l’eau, qui circule ensuite dans des radiateurs ou un plancher chauffant, et qui sert aussi à produire l’<strong>ECS</strong> (eau chaude sanitaire, celle de la douche et des robinets).</li>
</ul>
<p>Concrètement, Panasonic annonce sur l’unité extérieure <strong>jusqu’à 3 unités intérieures air-air</strong> (murales Etherea et gainables) pour chauffer et rafraîchir, associées à la production d’eau chaude et, en option, à un chauffage par l’eau pour les radiateurs ou le plancher chauffant.</p>
<p>Sa puissance n’est pas fixe : en rafraîchissement, la fiche de l’unité extérieure annonce de 1,6 à 10,2 kW. C’est le principe <strong>Inverter</strong> : au lieu de fonctionner en tout ou rien, le compresseur ajuste sa vitesse aux besoins. Résultat, moins d’à-coups, moins de bruit et moins de consommation. Le fluide qui transporte la chaleur dans le circuit est du <strong>R32</strong>, un fluide frigorigène courant sur les PAC actuelles.</p>
<p>Panasonic a présenté la nouvelle génération (unité extérieure gris foncé, unité intérieure air-eau redessinée) le 21 novembre 2025, et la version avec simple ballon d’eau chaude est annoncée <strong>à partir de l’automne 2026</strong>.</p>
${PHOTO_FR}
`,
    },
    {
      id: "ce-qui-change",
      title: "Ce qui change par rapport à une PAC air-eau ou une clim classique",
      html: `
<p>Trois fonctions la distinguent vraiment des installations habituelles :</p>
<ol>
  <li><strong>L’eau chaude produite avec la chaleur de la clim.</strong> Quand une climatisation rafraîchit votre salon, elle rejette la chaleur dehors : elle est perdue. Ici, en mode rafraîchissement, l’EcoFlex récupère cette chaleur pour chauffer le ballon d’eau chaude. L’été, une bonne partie de votre eau chaude vient donc de la chaleur retirée de la maison. Panasonic indique un COP (coefficient de performance : la quantité de chaleur produite pour 1 kWh d’électricité consommé) de <strong>5,11</strong> dans ce mode, pour une eau chaude à 55 °C. Les économies sont visibles dans l’application Panasonic Comfort Cloud.</li>
  <li><strong>Deux façons de chauffer en même temps.</strong> Avec l’unité intérieure air-eau, vos radiateurs ou votre plancher chauffant assurent la chaleur douce de fond, et les unités air-air donnent un coup de pouce rapide quand vous rentrez dans une maison froide. Panasonic appelle cela le chauffage mixte.</li>
  <li><strong>Pas de coupure pendant le dégivrage.</strong> Par grand froid, toute pompe à chaleur doit régulièrement dégivrer son unité extérieure ; sur une clim classique, le soufflage s’arrête quelques minutes. Sur l’EcoFlex, la chaleur stockée dans le ballon sert à dégivrer, et le chauffage air-air continue.</li>
</ol>
<p>Autre point concret : avec une seule unité extérieure au lieu de deux, il y a moins de matériel en façade, une seule liaison électrique principale et un seul appareil à entretenir dehors.</p>
<p>Pour comparer avec une solution plus classique, voyez nos pages <a href="{{path:heatPump}}">pompe à chaleur</a> et <a href="{{path:airConditioning}}">climatisation</a>.</p>
`,
    },
    {
      id: "composants",
      title: "Les composants de la gamme",
      html: `
<p>Une installation EcoFlex se compose d’une unité extérieure et d’un choix d’unités intérieures. Voici ce que contient la gamme selon les fiches Panasonic :</p>
<ul>
  <li><strong>L’unité extérieure série K (CU-4WZ90CBE5)</strong> : ${a(URL_EXT, "fiche Panasonic")}. Monophasée (230 V), elle délivre 9 kW en rafraîchissement avec 2 ou 3 unités intérieures, et 7,1 kW avec un seul gainable. Elle mesure 999 × 940 × 340 mm et fonctionne en chauffage jusqu’à −25 °C extérieur.</li>
  <li><strong>L’unité intérieure air-eau série K</strong> (WH-ADF0309K3E5M) : ${a(URL_HYDRO, "fiche Panasonic")}. Elle a la taille d’un grand réfrigérateur (1 882 × 599 × 602 mm) et contient un ballon d’eau chaude de 185 litres, isolé sous vide (technologie U-Vacua) pour limiter les pertes. Elle alimente radiateurs ou plancher chauffant avec 8 kW de puissance. Une version WH-ADF0309K3E5ANM, avec anode électronique, est prévue pour l’eau dure : c’est un vrai sujet dans la métropole lilloise, où l’eau est souvent calcaire.</li>
  <li><strong>Les unités murales Etherea</strong> : ${a(URL_ETHEREA, "fiche Panasonic")}. De 2,5 à 7,1 kW, en blanc mat, argent ou gris graphite (les deux unités noire et blanche de notre photo). Elles intègrent le Wi-Fi et le nanoe™ X, une technologie Panasonic de purification de l’air. Sur le plus petit modèle, le niveau sonore descend à 19 dB(A) en chauffage à vitesse très faible.</li>
  <li><strong>Le gainable EcoFlex (S-71WF3E)</strong> : ${a(URL_GAINABLE, "fiche Panasonic")}. Un <strong>gainable</strong> est une unité cachée dans un faux plafond ou des combles, qui souffle l’air par des grilles discrètes dans plusieurs pièces. Celui-ci fait 7,1 kW et seulement 250 mm de haut, avec pompe de relevage des condensats intégrée.</li>
  <li><strong>Le gainable basse pression</strong> : ${a(URL_GAINABLE_BP, "fiche Panasonic")}. De 2,0 à 6,0 kW, haut de 200 mm, pour les plafonds peu épais.</li>
</ul>
<p>Côté pilotage, tout se commande depuis l’application Comfort Cloud. Les gainables peuvent aussi recevoir en option une interface <strong>Modbus</strong>, KNX ou BACnet : ce sont des langages standard qui permettent de relier le chauffage à une domotique ou à une gestion technique de bâtiment, utile dans un petit local professionnel par exemple.</p>
<p>La gamme complète est sur la ${a(URL_GAMME, "page Aquarea EcoFlex de Panasonic")}.</p>
`,
    },
    {
      id: "tableau",
      title: "Les chiffres clés en un tableau",
      html: `
<p>Le <strong>SCOP</strong> (coefficient de performance saisonnier) indique combien de kWh de chaleur la machine produit en moyenne sur une saison de chauffe pour 1 kWh d’électricité. Plus il est élevé, plus la facture est basse. Le chiffre « à 35 °C » correspond à un plancher chauffant, celui « à 55 °C » à des radiateurs.</p>
<div class="table-wrap"><table>
<thead><tr><th>Élément</th><th>Caractéristique</th><th>Valeur Panasonic</th></tr></thead>
<tbody>
<tr><td>Unité extérieure CU-4WZ90CBE5</td><td>Puissance froid (2 à 3 unités intérieures)</td><td>9,0 kW, SEER 7,00 (A++)</td></tr>
<tr><td>Unité extérieure CU-4WZ90CBE5</td><td>Chauffage air-air (2 à 3 unités)</td><td>9,5 kW, SCOP 4,60 (A++)</td></tr>
<tr><td>Unité extérieure CU-4WZ90CBE5</td><td>Pression sonore à 1 m (chaud)</td><td>55 dB(A)</td></tr>
<tr><td>Unité extérieure CU-4WZ90CBE5</td><td>Fluide frigorigène</td><td>R32</td></tr>
<tr><td>Unité extérieure CU-4WZ90CBE5</td><td>Fonctionnement en chauffage</td><td>jusqu’à −25 °C extérieur</td></tr>
<tr><td>Unité intérieure air-eau</td><td>Puissance chauffage (7 °C dehors, eau à 35 °C)</td><td>8,0 kW, COP 4,21</td></tr>
<tr><td>Unité intérieure air-eau</td><td>SCOP climat moyen, 35 °C / 55 °C</td><td>4,00 / 3,20 (A++ / A++)</td></tr>
<tr><td>Unité intérieure air-eau</td><td>Ballon d’eau chaude intégré</td><td>185 L, profil L, classe A</td></tr>
<tr><td>Unité intérieure air-eau</td><td>Encombrement au sol</td><td>599 × 602 mm</td></tr>
<tr><td>Unité intérieure air-eau</td><td>Pression sonore</td><td>28 dB(A)</td></tr>
<tr><td>Murales Etherea</td><td>Gamme de puissances</td><td>2,5 à 7,1 kW</td></tr>
<tr><td>Gainable S-71WF3E</td><td>Puissance / hauteur</td><td>7,1 kW / 250 mm</td></tr>
</tbody>
</table></div>
<p class="text-sm">Valeurs relevées le 31 octobre 2026 sur les fiches Panasonic citées plus haut. Les performances réelles dépendent du logement, des émetteurs et des réglages.</p>
`,
    },
    {
      id: "dans-quels-cas",
      title: "Dans quels cas l’EcoFlex est un bon choix",
      html: `
<p>D’après les configurations prévues par Panasonic et ce que nous voyons sur le terrain, l’EcoFlex est pertinente dans ces situations :</p>
<ul>
  <li><strong>Vous voulez chauffer, avoir de l’eau chaude ET rafraîchir l’été.</strong> C’est le cas d’usage principal. Plutôt qu’une PAC air-eau et une clim séparées, une seule installation fait les trois, et l’eau chaude profite de la chaleur récupérée.</li>
  <li><strong>Rénovation avec radiateurs à eau ou plancher chauffant.</strong> L’unité intérieure air-eau reprend votre réseau existant, et des murales ou un gainable s’ajoutent dans les pièces où vous voulez du frais (chambres à l’étage, séjour exposé plein sud). Le plancher chauffant donne les meilleurs rendements (SCOP 4,00 à 35 °C).</li>
  <li><strong>Maisons à étage qui surchauffent l’été.</strong> Les chambres sous toiture sont souvent invivables en juillet. Un gainable dans les combles ou des murales à l’étage règlent le problème, pendant que le rez-de-chaussée reste chauffé par l’eau.</li>
  <li><strong>Logement compact sans place pour une chaufferie.</strong> Dans la configuration avec ballon d’eau chaude seul, attendue à partir de l’automne 2026, le chauffage et le rafraîchissement passent par l’air-air, et l’eau chaude par le ballon : Panasonic la présente comme une solution compacte avec moins de composants. L’unité intérieure air-eau, elle, tient dans l’emplacement standard d’un appareil de cuisine ou d’une buanderie.</li>
  <li><strong>Plafonds bas ou faux plafond peu épais.</strong> Le gainable basse pression ne fait que 200 mm de haut.</li>
  <li><strong>Eau calcaire.</strong> La version à anode électronique protège mieux le ballon.</li>
</ul>
<p><strong>Votre logement correspond à l’un de ces cas ?</strong> Nous venons le voir, calculons vos besoins et vous disons si l’EcoFlex est la bonne solution : <a href="{{path:contact}}">demander un devis gratuit</a>.</p>
`,
    },
    {
      id: "quand-eviter",
      title: "Quand ce n’est pas le bon choix",
      html: `
<p>Nous préférons le dire clairement, parce qu’une PAC mal choisie coûte cher pendant des années :</p>
<ul>
  <li><strong>Si vous n’avez pas besoin de fraîcheur.</strong> Tout l’intérêt de l’EcoFlex est de combiner chauffage, eau chaude et rafraîchissement. Si seul le chauffage compte, une <a href="{{path:heatPump}}">pompe à chaleur air-eau</a> classique est plus simple et souvent moins chère.</li>
  <li><strong>Grandes maisons très énergivores.</strong> L’unité intérieure air-eau délivre 8 kW et l’unité extérieure est monophasée. Une grande maison mal isolée demandera une PAC plus puissante. Nous le vérifions toujours par un calcul des déperditions avant de proposer un modèle.</li>
  <li><strong>Vieux radiateurs qui exigent une eau très chaude.</strong> À 55 °C, le SCOP tombe à 3,20. Si vos radiateurs ont besoin de plus pour chauffer correctement, il faut d’abord améliorer l’isolation ou changer certains radiateurs, ou choisir une autre solution.</li>
  <li><strong>Immeubles et chauffage collectif.</strong> L’EcoFlex est une gamme résidentielle. Pour une copropriété, on part sur des PAC de forte puissance en cascade : c’est ce que nous avons fait dans <a href="{{path:blogReportageLvdnCopro}}">la copropriété lilloise présentée par La Voix du Nord</a>.</li>
  <li><strong>Remplacer seulement un chauffe-eau.</strong> Pour l’eau chaude seule, un chauffe-eau thermodynamique suffit.</li>
</ul>
`,
    },
    {
      id: "aides",
      title: "Les aides possibles",
      html: `
<p>Les aides dépendent de la configuration retenue, de vos revenus et des règles en vigueur au moment du devis. Les dispositifs à regarder :</p>
<ul>
  <li><strong>MaPrimeRénov’</strong> et les <strong>certificats d’économies d’énergie (CEE)</strong> peuvent concerner la partie chauffage air-eau, quand elle remplace un ancien chauffage et que l’installation est faite par une entreprise RGE. La partie air-air (clim réversible) n’est pas éligible à MaPrimeRénov’.</li>
  <li><strong>La TVA à taux réduit</strong> sur les travaux de rénovation énergétique dans un logement de plus de deux ans. Nous détaillons les règles dans notre article sur <a href="{{path:blogTvaClimReversible}}">la TVA à 5,5 % et la climatisation réversible</a>.</li>
  <li><strong>L’éco-prêt à taux zéro</strong>, pour financer le reste à charge.</li>
</ul>
<p>Nous vérifions l’éligibilité au cas par cas et l’indiquons sur le devis. Pour le détail, voyez notre page <a href="{{path:grants}}">aides et financement</a>.</p>
`,
    },
    {
      id: "notre-avis",
      title: "Notre avis d’installateur",
      html: `
<p>L’EcoFlex répond à une vraie demande : de plus en plus de familles veulent un seul système pour toute l’année, sans multiplier les appareils en façade. La récupération de chaleur pour l’eau chaude est une idée simple et efficace, et le chauffage qui ne s’arrête pas pendant le dégivrage améliore vraiment le confort par temps froid et humide, comme on en a souvent dans le Nord.</p>
<p>Comme pour toute pompe à chaleur, le résultat dépend du dimensionnement et de la pose : bon choix des puissances, emplacement de l’unité extérieure (bruit, voisinage), longueurs de liaisons, réglage de la courbe de chauffe. Nous sommes partenaires <a href="{{path:panasonicPartner}}">Panasonic</a> et installons dans toute la métropole lilloise, que ce soit pour le <a href="{{path:heating}}">chauffage</a>, la <a href="{{path:airConditioning}}">climatisation</a> ou les deux.</p>
<p>Vous hésitez entre EcoFlex, PAC air-eau classique et climatisation ? <a href="{{path:contact}}">Demandez un devis gratuit</a> : nous venons voir votre logement et vous proposons la solution adaptée, même si ce n’est pas la plus chère.</p>
`,
    },
  ],
  faq: {
    title: "Questions fréquentes",
    items: [
      {
        question: "L’Aquarea EcoFlex fait-elle aussi la climatisation ?",
        answer:
          "Oui. Ses unités intérieures air-air (murales Etherea ou gainables, jusqu’à 3) rafraîchissent l’été, et la chaleur retirée de la maison sert à chauffer l’eau du ballon.",
      },
      {
        question: "Peut-on garder ses radiateurs ou son plancher chauffant ?",
        answer:
          "Oui, avec l’unité intérieure air-eau. Elle alimente les radiateurs à eau ou le plancher chauffant, et produit l’eau chaude dans son ballon de 185 litres.",
      },
      {
        question: "Fonctionne-t-elle par grand froid ?",
        answer:
          "Panasonic indique un fonctionnement en chauffage jusqu’à −25 °C extérieur avec l’unité extérieure CU-4WZ90CBE5. Pendant le dégivrage, le chauffage air-air continue grâce à la chaleur stockée.",
      },
      {
        question: "Quel fluide frigorigène utilise-t-elle ?",
        answer:
          "Les fiches Panasonic de l’unité extérieure série K indiquent du R32.",
      },
      {
        question: "Est-ce bruyant ?",
        answer:
          "Panasonic indique 28 dB(A) pour l’unité intérieure air-eau et 55 dB(A) à 1 mètre pour l’unité extérieure en chauffage. Nous étudions toujours l’emplacement de l’unité extérieure pour limiter la gêne pour vous et vos voisins.",
      },
      {
        question: "Quand est-elle disponible ?",
        answer:
          "Panasonic a présenté la nouvelle génération en novembre 2025. La configuration avec simple ballon d’eau chaude est annoncée à partir de l’automne 2026. Contactez-nous pour connaître les délais du moment.",
      },
      {
        question: "Quelles aides pour une EcoFlex ?",
        answer:
          "La partie chauffage air-eau peut ouvrir droit à MaPrimeRénov’ et aux CEE sous conditions, la TVA réduite peut s’appliquer aux travaux de rénovation énergétique, et l’éco-PTZ peut financer le reste. La partie air-air n’est pas éligible à MaPrimeRénov’. Nous vérifions votre cas sur le devis.",
      },
    ],
  },
  sources: {
    title: "Sources",
    consulted: "Fiches et documents Panasonic consultés le 31 octobre 2026",
    items: [
      { label: "Panasonic — Aquarea EcoFlex, présentation de la gamme", url: URL_PRESENTATION },
      { label: "Panasonic — Gamme Aquarea EcoFlex (tous les modèles)", url: URL_GAMME },
      { label: "Panasonic — Unité extérieure Aquarea EcoFleX série K · R32", url: URL_EXT },
      { label: "Panasonic — Unités intérieures air-eau EcoFleX série K", url: URL_HYDRO },
      { label: "Panasonic — Etherea avec nanoe™ X (EcoFleX)", url: URL_ETHEREA },
      { label: "Panasonic — Gainable Aquarea EcoFleX", url: URL_GAINABLE },
      { label: "Panasonic — Gainable basse pression statique EcoFleX", url: URL_GAINABLE_BP },
      { label: "Panasonic — Communiqué « New Aquarea EcoFlex » (21/11/2025, en anglais)", url: URL_NEWS },
    ],
  },
  related: {
    title: "À lire aussi sur hfe-energie.fr",
    links: [
      { label: "Pompe à chaleur air-eau et air-air à Lille", routeId: "heatPump" as const },
      { label: "Climatisation réversible", routeId: "airConditioning" as const },
      { label: "Chauffage", routeId: "heating" as const },
      { label: "Partenaire Panasonic", routeId: "panasonicPartner" as const },
      { label: "Aides et financement", routeId: "grants" as const },
      { label: "Contact / devis", routeId: "contact" as const },
    ],
  },
  cta: {
    title: "Un projet de chauffage avec rafraîchissement ?",
    subtitle: "Visite, calcul des besoins et devis gratuit dans toute la métropole lilloise.",
  },
} satisfies BlogArticleContent;

const en = {
  seo: {
    title: "Panasonic Aquarea EcoFlex: who is it for? | HFE",
    description:
      "Panasonic Aquarea EcoFlex: one heat pump for heating, cooling and hot water. Components, official figures, use cases and limits, by HFE in Lille.",
    keywords: [
      "Aquarea EcoFlex",
      "Panasonic EcoFlex",
      "air-to-air air-to-water heat pump",
      "heat pump with cooling and hot water",
      "heat recovery hot water",
      "Panasonic installer Lille",
    ],
  },
  breadcrumbs: [
    { name: "Home", url: "/en" },
    { name: "Blog", url: "/en/blog" },
    { name: "New products", url: "/en/blog/new-products" },
    { name: "Panasonic Aquarea EcoFlex", url: "/en/blog/new-panasonic-aquarea-ecoflex" },
  ],
  article: {
    headline: "Panasonic Aquarea EcoFlex: heating, cooling and hot water from one outdoor unit",
    image: IMG,
    datePublished: "2026-10-31",
    dateModified: "2026-10-31",
    dateLabel: "Published 31 October 2026",
    excerpt:
      "One outdoor unit to heat, cool and make hot water, reusing the heat removed by the air conditioning in summer. We explain how the Aquarea EcoFlex works, which homes it suits, and when we would advise something else.",
  },
  hero: {
    badge: "New products",
    lead: "Panasonic Aquarea EcoFlex range",
  },
  intro: [
    "Customers across the Lille area increasingly ask us the same thing: “I want to replace my heating, but I’d also like to stay cool in summer. Do I need two systems?” Until now the answer was often yes: a heat pump for heating and hot water, plus a separate air conditioner, with two outdoor units on the wall.",
    "With <strong>Aquarea EcoFlex</strong>, Panasonic brings all of this together around a single outdoor unit. We saw the range up close on a Panasonic stand (our photo below). Here is what you need to know, with figures from the manufacturer’s data sheets, and our view as an RGE-certified installer (the French “Recognised Environmental Guarantor” label) on when it makes sense… and when it doesn’t.",
  ],
  sections: [
    {
      id: "what-it-is",
      title: "What is the Aquarea EcoFlex?",
      html: `
<p>It is a heat pump that combines two families usually installed separately:</p>
<ul>
  <li><strong>air-to-air</strong>: heat taken from the outdoor air is blown straight into rooms by indoor units (wall-mounted or hidden in a ceiling). This is how reversible air conditioning works, heating in winter and cooling in summer;</li>
  <li><strong>air-to-water</strong>: heat taken from outside is passed to water, which then flows through radiators or underfloor heating and also produces <strong>DHW</strong> (domestic hot water, for showers and taps).</li>
</ul>
<p>Panasonic specifies <strong>up to 3 air-to-air indoor units</strong> (Etherea wall units and ducted units) for heating and cooling, combined with hot-water production and, as an option, water-based heating for radiators or underfloor heating.</p>
<p>Its output is not fixed: in cooling, the outdoor unit data sheet gives 1.6 to 10.2 kW. That is the <strong>Inverter</strong> principle: the compressor adjusts its speed to demand instead of switching on and off, which means fewer jolts, less noise and lower consumption. The refrigerant carrying the heat is <strong>R32</strong>, common on current heat pumps.</p>
<p>Panasonic unveiled the new generation (dark grey outdoor unit, redesigned air-to-water indoor unit) on 21 November 2025, and the version with a simple hot-water cylinder is announced <strong>from autumn 2026</strong>.</p>
${PHOTO_EN}
`,
    },
    {
      id: "what-changes",
      title: "What is different from a standard air-to-water heat pump or air conditioner",
      html: `
<ol>
  <li><strong>Hot water made from the cooling heat.</strong> When an air conditioner cools your living room, it dumps the heat outside. In cooling mode, the EcoFlex recovers that heat to warm the hot-water cylinder. Panasonic quotes a COP (coefficient of performance: heat produced per 1 kWh of electricity) of <strong>5.11</strong> in this mode, for water at 55 °C. Savings are shown in the Panasonic Comfort Cloud app.</li>
  <li><strong>Two ways of heating at once.</strong> With the air-to-water indoor unit, radiators or underfloor heating provide steady background warmth while the air-to-air units give a quick boost.</li>
  <li><strong>No interruption during defrost.</strong> In cold weather every heat pump must defrost its outdoor unit. On the EcoFlex, stored heat from the cylinder is used, and air-to-air heating keeps running.</li>
</ol>
<p>With one outdoor unit instead of two, there is also less equipment on the wall and only one outdoor unit to service. Compare with our <a href="{{path:heatPump}}">heat pump</a> and <a href="{{path:airConditioning}}">air conditioning</a> pages.</p>
`,
    },
    {
      id: "components",
      title: "The components of the range",
      html: `
<ul>
  <li><strong>K-series outdoor unit (CU-4WZ90CBE5)</strong>: ${a(URL_EXT, "Panasonic data sheet")}. Single-phase (230 V), 9 kW cooling with 2 or 3 indoor units, 7.1 kW with a single ducted unit. 999 × 940 × 340 mm, heating down to −25 °C outside.</li>
  <li><strong>K-series air-to-water indoor unit</strong> (WH-ADF0309K3E5M): ${a(URL_HYDRO, "Panasonic data sheet")}. The size of a tall fridge (1,882 × 599 × 602 mm) with a vacuum-insulated (U-Vacua) 185-litre hot-water tank and 8 kW for radiators or underfloor heating. A WH-ADF0309K3E5ANM version with an electronic anode is designed for hard water, common around Lille.</li>
  <li><strong>Etherea wall units</strong>: ${a(URL_ETHEREA, "Panasonic data sheet")}. 2.5 to 7.1 kW, in matt white, silver or graphite grey, with Wi-Fi and nanoe™ X air purification. The smallest model goes down to 19 dB(A) in heating at very low speed.</li>
  <li><strong>EcoFlex ducted unit (S-71WF3E)</strong>: ${a(URL_GAINABLE, "Panasonic data sheet")}. A <strong>ducted unit</strong> is hidden in a ceiling void or loft and blows air through discreet grilles into several rooms. This one is 7.1 kW and only 250 mm high, with a built-in condensate pump.</li>
  <li><strong>Low static pressure ducted unit</strong>: ${a(URL_GAINABLE_BP, "Panasonic data sheet")}. 2.0 to 6.0 kW, 200 mm high, for shallow ceilings.</li>
</ul>
<p>Everything is controlled from the Comfort Cloud app. The ducted units can also take an optional <strong>Modbus</strong>, KNX or BACnet interface: standard protocols that connect the system to home automation or a building management system.</p>
<p>The full range is on Panasonic’s ${a(URL_GAMME, "Aquarea EcoFlex page")}.</p>
`,
    },
    {
      id: "table",
      title: "Key figures at a glance",
      html: `
<p><strong>SCOP</strong> (seasonal coefficient of performance) is the average kWh of heat produced over a heating season per 1 kWh of electricity. The “35 °C” figure applies to underfloor heating, the “55 °C” figure to radiators.</p>
<div class="table-wrap"><table>
<thead><tr><th>Component</th><th>Feature</th><th>Panasonic figure</th></tr></thead>
<tbody>
<tr><td>Outdoor unit CU-4WZ90CBE5</td><td>Cooling (2 to 3 indoor units)</td><td>9.0 kW, SEER 7.00 (A++)</td></tr>
<tr><td>Outdoor unit CU-4WZ90CBE5</td><td>Air-to-air heating (2 to 3 units)</td><td>9.5 kW, SCOP 4.60 (A++)</td></tr>
<tr><td>Outdoor unit CU-4WZ90CBE5</td><td>Sound pressure at 1 m (heating)</td><td>55 dB(A)</td></tr>
<tr><td>Outdoor unit CU-4WZ90CBE5</td><td>Refrigerant</td><td>R32</td></tr>
<tr><td>Outdoor unit CU-4WZ90CBE5</td><td>Heating operation</td><td>down to −25 °C outside</td></tr>
<tr><td>Air-to-water indoor unit</td><td>Heating (7 °C outside, water at 35 °C)</td><td>8.0 kW, COP 4.21</td></tr>
<tr><td>Air-to-water indoor unit</td><td>SCOP average climate, 35 °C / 55 °C</td><td>4.00 / 3.20 (A++ / A++)</td></tr>
<tr><td>Air-to-water indoor unit</td><td>Built-in hot-water tank</td><td>185 L, profile L, class A</td></tr>
<tr><td>Air-to-water indoor unit</td><td>Footprint</td><td>599 × 602 mm</td></tr>
<tr><td>Air-to-water indoor unit</td><td>Sound pressure</td><td>28 dB(A)</td></tr>
<tr><td>Etherea wall units</td><td>Output range</td><td>2.5 to 7.1 kW</td></tr>
<tr><td>Ducted unit S-71WF3E</td><td>Output / height</td><td>7.1 kW / 250 mm</td></tr>
</tbody>
</table></div>
<p class="text-sm">Figures taken on 31 October 2026 from the Panasonic data sheets linked above. Real-world performance depends on the home, emitters and settings.</p>
`,
    },
    {
      id: "when-to-use",
      title: "When the EcoFlex is a good choice",
      html: `
<ul>
  <li><strong>You want heating, hot water AND summer cooling.</strong> That is the main use case: one system does all three, and hot water benefits from recovered heat.</li>
  <li><strong>Renovation with water radiators or underfloor heating.</strong> The air-to-water indoor unit uses your existing system, and wall or ducted units are added where you want cooling. Underfloor heating gives the best efficiency (SCOP 4.00 at 35 °C).</li>
  <li><strong>Houses with upstairs rooms that overheat in summer.</strong> A ducted unit in the loft or wall units upstairs solve it, while the ground floor stays on water heating.</li>
  <li><strong>Compact homes with no room for a boiler room.</strong> In the cylinder-only configuration expected from autumn 2026, heating and cooling go through air-to-air units and hot water through the cylinder, which Panasonic presents as a compact solution with fewer components. The air-to-water unit itself fits a standard kitchen-appliance space.</li>
  <li><strong>Low ceilings.</strong> The low static pressure ducted unit is only 200 mm high.</li>
  <li><strong>Hard water.</strong> The electronic-anode version better protects the tank.</li>
</ul>
<p><strong>Does your home match one of these cases?</strong> We visit, calculate your needs and tell you whether EcoFlex is the right fit: <a href="{{path:contact}}">ask for a free quote</a>.</p>
`,
    },
    {
      id: "when-not",
      title: "When it is not the right choice",
      html: `
<ul>
  <li><strong>You don’t need cooling.</strong> A standard <a href="{{path:heatPump}}">air-to-water heat pump</a> is simpler and often cheaper.</li>
  <li><strong>Large, energy-hungry houses.</strong> The air-to-water unit delivers 8 kW and the outdoor unit is single-phase. We always run a heat-loss calculation first.</li>
  <li><strong>Old radiators that need very hot water.</strong> At 55 °C the SCOP drops to 3.20. Insulation or radiator upgrades may come first.</li>
  <li><strong>Apartment buildings with central heating.</strong> EcoFlex is a residential range. For co-ownership buildings we use high-output heat pumps in cascade, as in <a href="{{path:blogReportageLvdnCopro}}">the Lille building covered by La Voix du Nord</a>.</li>
  <li><strong>Replacing only a water heater.</strong> A heat-pump water heater is enough.</li>
</ul>
`,
    },
    {
      id: "grants",
      title: "Possible grants",
      html: `
<ul>
  <li><strong>MaPrimeRénov’</strong> and <strong>energy savings certificates (CEE)</strong> may cover the air-to-water heating part when it replaces old heating and is installed by an RGE company. The air-to-air part is not eligible for MaPrimeRénov’.</li>
  <li><strong>Reduced VAT</strong> on energy renovation work in homes over two years old: see our article on <a href="{{path:blogTvaClimReversible}}">5.5% VAT and reversible air conditioning</a>.</li>
  <li><strong>The zero-interest eco-loan (éco-PTZ)</strong> to finance the remainder.</li>
</ul>
<p>We check eligibility case by case and show it on the quote. More on our <a href="{{path:grants}}">grants and financing</a> page.</p>
`,
    },
    {
      id: "our-view",
      title: "Our view as installers",
      html: `
<p>EcoFlex meets a real need: more and more families want one system all year round. Recovering heat for hot water is simple and effective, and heating that keeps running during defrost makes a real difference in the cold, damp weather we often get in the North.</p>
<p>As with any heat pump, results depend on sizing and installation. We are a <a href="{{path:panasonicPartner}}">Panasonic</a> partner and install across the Lille area, for <a href="{{path:heating}}">heating</a>, <a href="{{path:airConditioning}}">air conditioning</a> or both.</p>
<p>Unsure between EcoFlex, a standard heat pump and air conditioning? <a href="{{path:contact}}">Ask for a free quote</a>: we visit your home and recommend what suits it, even if it isn’t the most expensive option.</p>
`,
    },
  ],
  faq: {
    title: "Frequently asked questions",
    items: [
      { question: "Does the Aquarea EcoFlex also provide air conditioning?", answer: "Yes. Its air-to-air indoor units (Etherea wall units or ducted units, up to 3) cool in summer, and the heat removed from the house is used to warm the hot-water tank." },
      { question: "Can I keep my radiators or underfloor heating?", answer: "Yes, with the air-to-water indoor unit. It supplies water radiators or underfloor heating and makes hot water in its 185-litre tank." },
      { question: "Does it work in very cold weather?", answer: "Panasonic specifies heating operation down to −25 °C outside with the CU-4WZ90CBE5 outdoor unit. During defrost, air-to-air heating continues using stored heat." },
      { question: "Which refrigerant does it use?", answer: "The Panasonic data sheets for the K-series outdoor unit state R32." },
      { question: "Is it noisy?", answer: "Panasonic states 28 dB(A) for the air-to-water indoor unit and 55 dB(A) at 1 metre for the outdoor unit in heating. We always study where to place the outdoor unit." },
      { question: "When is it available?", answer: "Panasonic unveiled the new generation in November 2025. The cylinder-only configuration is announced from autumn 2026. Contact us for current lead times." },
      { question: "Which grants apply?", answer: "The air-to-water heating part may qualify for MaPrimeRénov’ and CEE under conditions, reduced VAT may apply to energy renovation work, and the éco-PTZ can finance the rest. The air-to-air part is not eligible for MaPrimeRénov’." },
    ],
  },
  sources: {
    title: "Sources",
    consulted: "Panasonic data sheets and documents consulted on 31 October 2026",
    items: [
      { label: "Panasonic — Aquarea EcoFlex, range overview (French)", url: URL_PRESENTATION },
      { label: "Panasonic — Aquarea EcoFlex range (all models)", url: URL_GAMME },
      { label: "Panasonic — Aquarea EcoFleX K-series outdoor unit · R32", url: URL_EXT },
      { label: "Panasonic — EcoFleX K-series air-to-water indoor units", url: URL_HYDRO },
      { label: "Panasonic — Etherea with nanoe™ X (EcoFleX)", url: URL_ETHEREA },
      { label: "Panasonic — Aquarea EcoFleX ducted unit", url: URL_GAINABLE },
      { label: "Panasonic — EcoFleX low static pressure ducted unit", url: URL_GAINABLE_BP },
      { label: "Panasonic — “New Aquarea EcoFlex” press release (21/11/2025)", url: URL_NEWS },
    ],
  },
  related: {
    title: "Also on hfe-energie.fr",
    links: [
      { label: "Air-to-water and air-to-air heat pumps in Lille", routeId: "heatPump" as const },
      { label: "Air conditioning", routeId: "airConditioning" as const },
      { label: "Heating", routeId: "heating" as const },
      { label: "Panasonic partner", routeId: "panasonicPartner" as const },
      { label: "Grants and financing", routeId: "grants" as const },
      { label: "Contact / quote", routeId: "contact" as const },
    ],
  },
  cta: {
    title: "Planning heating with summer cooling?",
    subtitle: "Home visit, needs calculation and free quote across the Lille area.",
  },
} satisfies BlogArticleContent;

export type BlogNouveauteEcoflexContent = BlogArticleContent;

export function getBlogNouveauteEcoflexContent(locale: Locale): BlogArticleContent {
  return locale === "en" ? en : fr;
}
