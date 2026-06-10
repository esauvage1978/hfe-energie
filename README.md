# Hecker & Frères Énergie (HFE) - Site vitrine

Site vitrine officiel de **Hecker & Frères Énergie (HFE)**, entreprise artisanale spécialisée dans les **énergies renouvelables à Lille et métropole** : pompes à chaleur, climatisation réversible, chauffage et plomberie.

Construit avec [Astro 5](https://astro.build), [React 19](https://react.dev), [Tailwind CSS 4](https://tailwindcss.com) et optimisé pour les performances et le SEO.

---

## Sommaire

- [Stack technique](#stack-technique)
- [Architecture du projet](#architecture-du-projet)
- [Démarrage rapide](#démarrage-rapide)
- [Scripts disponibles](#scripts-disponibles)
- [Bonnes pratiques SEO mises en place](#bonnes-pratiques-seo-mises-en-place)
- [Approche mobile-first](#approche-mobile-first)
- [Déploiement](#déploiement)

---

## Stack technique

| Outil | Rôle |
|-------|------|
| **Astro 5** | Framework principal (Static Site Generation, performance maximale, zero-JS par défaut) |
| **React 19** | Composants interactifs (formulaires, FAQ, calculateur) chargés à la demande (`client:visible`) |
| **TypeScript** | Sécurité de typage sur tout le code applicatif |
| **Tailwind CSS 4** | Système de design utility-first, mobile-first |
| **@astrojs/sitemap** | Génération automatique du sitemap XML |
| **JSON-LD** | Données structurées Schema.org (HVACBusiness, Service, FAQPage, BreadcrumbList) |

---

## Architecture du projet

```text
hfe-energie/
├── public/                  # Fichiers statiques (favicons, OG image, robots.txt, manifest)
│   ├── favicon.svg
│   ├── logo.svg
│   ├── og-image.svg
│   ├── manifest.webmanifest
│   ├── robots.txt
│   └── hero-pac.svg, service-*.svg
├── src/
│   ├── components/         # Composants Astro + React réutilisables
│   │   ├── Header.astro
│   │   ├── Footer.astro
│   │   ├── Seo.astro
│   │   ├── StructuredData.astro    # JSON-LD Schema.org
│   │   ├── Breadcrumbs.astro
│   │   ├── CtaBanner.astro
│   │   ├── Icon.astro              # Icônes SVG inline
│   │   ├── ContactForm.tsx         # Formulaire React
│   │   ├── Faq.tsx                 # Accordéon FAQ React
│   │   └── SavingsCalculator.tsx   # Simulateur d'économies PAC
│   ├── data/
│   │   └── site.ts                 # Configuration centrale (coordonnées, services, navigation)
│   ├── layouts/
│   │   └── BaseLayout.astro        # Layout principal avec SEO automatique
│   ├── pages/                     # Une page Astro = une URL
│   │   ├── index.astro            # Accueil (focus PAC + simulateur)
│   │   ├── pompe-a-chaleur.astro  # Page PAC dédiée (SEO maximal)
│   │   ├── climatisation.astro
│   │   ├── chauffage.astro
│   │   ├── plomberie.astro
│   │   ├── particuliers.astro
│   │   ├── professionnels.astro
│   │   ├── aides-financement.astro
│   │   ├── contact.astro
│   │   ├── mentions-legales.astro
│   │   └── 404.astro
│   └── styles/
│       └── global.css             # Styles globaux + design tokens Tailwind v4
├── astro.config.mjs              # Configuration Astro (sitemap, integrations, base URL)
├── tsconfig.json                 # Alias d'imports (@components, @data, @layouts...)
└── package.json
```

---

## Démarrage rapide

### Prérequis

- **Node.js >= 18.20** (recommandé : 20 ou 22)
- **npm >= 10**

### Installation

```bash
npm install
```

### Développement local

```bash
npm run dev
```

Le site est accessible sur [http://localhost:4321](http://localhost:4321).

### Build de production

```bash
npm run build
```

Le résultat est généré dans le dossier `dist/`. Il est entièrement statique et peut être déployé n'importe où (Vercel, Netlify, Cloudflare Pages, OVH, serveur Apache/Nginx...).

### Aperçu du build

```bash
npm run preview
```

---

## Scripts disponibles

| Commande | Description |
|----------|-------------|
| `npm run dev` | Lance le serveur de développement sur le port 4321 |
| `npm run build` | Build de production statique (dans `dist/`) |
| `npm run preview` | Aperçu local du build de production |
| `npm run astro` | CLI Astro |
| `npm run fetch-google-reviews` | *(Optionnel)* Synchro API Google — nécessite `GOOGLE_PLACES_API_KEY` dans `.env` |

### Avis Google (page d'accueil)

**Sans clé API** (cas le plus courant) : voir le guide **[docs/avis-google.md](docs/avis-google.md)**.

| Mode | Configuration |
|------|----------------|
| **Manuel** (défaut) | Éditer `src/data/google-reviews.json` — copier nom complet, texte et date depuis Google Maps |
| **Widget tiers** | `src/data/google-reviews.config.ts` → `mode: "widget"` + URL iframe (SociableKIT, Elfsight…) |
| **API Google** | `.env` + `npm run fetch-google-reviews` (crédit Cloud gratuit possible) |

Modèle JSON : `src/data/google-reviews.example.json`. Fiche Google Maps : `https://www.google.com/maps?q=HFE+Pompe+%C3%A0+Chaleur+-+Climatisation,+71+Rue+du+G%C3%A9n%C3%A9ral+de+Gaulle,+59110+La+Madeleine&ftid=0x90e0797ea958d91:0x5f31aec968c997a5`.

---

## Bonnes pratiques SEO mises en place

Le site a été conçu comme un expert SEO senior l'aurait fait. Voici l'ensemble des optimisations en place :

### Méta-données & balises

- **Balise `<title>` unique** par page, optimisée avec la requête principale
- **Meta description** unique de 150-160 caractères par page
- **Mots-clés ciblés** par page (focus PAC, longue traîne géolocalisée Lille)
- **Canonical URLs** systématiques pour éviter le contenu dupliqué
- **Hreflang** prêt pour internationalisation
- **Meta robots** configurable par page (`noIndex` pour les mentions légales et 404)

### Données structurées Schema.org (JSON-LD)

- **`HVACBusiness`** sur toutes les pages : nom, adresse, téléphone, email, horaires, géolocalisation, certifications RGE, zone d'intervention, rating
- **`Service`** sur chaque page service avec `areaServed` (15 villes)
- **`FAQPage`** sur l'accueil, la page PAC, climatisation, chauffage, aides : 25+ questions/réponses indexables
- **`BreadcrumbList`** sur toutes les pages internes
- **`AggregateRating`** (note 4,9/5, 200+ avis)

### Open Graph & Twitter Cards

- Image OG dédiée (1200x630) optimisée
- Title et description spécifiques par page
- `og:locale=fr_FR`

### Performance Core Web Vitals

- **CSS critique inliné** automatiquement par Astro
- **Polices Google Fonts** chargées en `media="print" onload`
- **Préconnect** vers `fonts.googleapis.com` et `fonts.gstatic.com`
- **Images SVG vectorielles** (zéro perte de qualité, poids minimal)
- **Lazy loading** sur les images hors viewport
- **`fetchpriority="high"`** sur les images Hero
- **HTML compressé** en production (`compressHTML: true`)
- **Prefetching automatique** des liens visibles (`prefetchAll: true`)
- **Zéro JavaScript par défaut** (React chargé uniquement sur composants interactifs via `client:visible`)

### Sitemap & robots

- `sitemap-index.xml` généré automatiquement
- `robots.txt` autorisant tous les crawlers + référence au sitemap
- `manifest.webmanifest` (PWA-ready)

### Accessibilité (a11y) - bonus SEO

- HTML sémantique (`<header>`, `<main>`, `<nav>`, `<article>`, `<section>`, `<address>`)
- Skip-link "Aller au contenu principal"
- `aria-label`, `aria-expanded`, `aria-current`, `aria-controls` sur tous les éléments interactifs
- Contrastes WCAG AA respectés
- Hiérarchie des titres (`h1` unique, `h2`, `h3` cohérents)
- `prefers-reduced-motion` respecté
- Cibles tactiles >= 44px (norme WCAG 2.5.5)

### SEO local

- Adresse complète, téléphone cliquable, géolocalisation précise (lat/lng)
- 15 villes ciblées en zone d'intervention (Lille MEL)
- Carte OpenStreetMap intégrée
- Microdonnées `LocalBusiness` complètes

---

## Approche mobile-first

L'intégralité du site a été pensée **mobile-first** :

- Toutes les classes Tailwind partent du mobile (320px+) et utilisent les breakpoints `sm:`, `md:`, `lg:` pour adapter
- Menu hamburger natif en mobile, navigation horizontale en desktop (≥1024px)
- Bouton d'appel téléphone **toujours visible** sur mobile (CTA principal)
- Cibles tactiles minimum 44×44px (WCAG)
- Typographie fluide avec `clamp()` pour s'adapter à toutes les tailles d'écran
- Images responsives (SVG vectoriel = parfait sur Retina)
- Viewport optimisé : `viewport-fit=cover` (notch, safe-area)

---

## Déploiement

Le site est entièrement statique, il peut être déployé sur :

- **Vercel** : `vercel --prod`
- **Netlify** : connexion GitHub + build automatique
- **Cloudflare Pages** : connexion GitHub + commande build `npm run build`, dossier output `dist`
- **GitHub Pages** : workflow GitHub Actions inclus
- **Serveur Apache/Nginx** : uploadez le contenu de `dist/`

### Configuration recommandée pour la production

Mettez à jour `astro.config.mjs` avec le bon `site` (URL canonique) :

```js
site: 'https://hfe-energie.fr',
```

---

## Crédits

- **Édition** : Hecker & Frères Énergie (HFE) - Lille
- **Conception & développement** : 2026
- **Source du contenu** : [hfe-energie.fr](https://hfe-energie.fr) (site de référence)

---

## Licence

Code source propriétaire. Tous droits réservés © 2026 Hecker & Frères Énergie.
