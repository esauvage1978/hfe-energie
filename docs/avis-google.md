# Avis Google sur le site (sans clé API)

Google ne permet pas d’afficher les avis automatiquement sans **Places API** (payante après crédit gratuit) ou un **service tiers**. Voici les options pour HFE Énergie.

## Option 1 — Mise à jour manuelle (recommandée, gratuite)

1. Ouvrez votre fiche : [Laisser / voir les avis](https://g.page/r/CawB00LcHY7jEAE/review) ou Google Maps → votre établissement → **Avis**.
2. Copiez les **5 avis les plus récents** (nom complet, texte, note, date affichée).
3. Éditez `src/data/google-reviews.json` :
   - `rating` : note moyenne affichée sur Google (ex. `4.9`)
   - `userRatingCount` : nombre total d’avis (ex. `51`)
   - `fetchedAt` : date du jour en ISO (`2026-05-25T10:00:00.000Z`)
   - `source` : `"manual"`
   - `reviews` : tableau de 1 à 5 objets (voir `google-reviews.example.json`)
4. `publishTime` : date approximative pour le tri (le plus récent en premier).
5. `relativeTime` : recopiez tel quel (« il y a 2 mois », etc.).
6. Rebuild : `npm run build`

Modèle : `src/data/google-reviews.example.json`

Les 51 avis actuels ont été importés via `npm run import-google-reviews` (script `scripts/import-manual-google-reviews.mjs`). Pour une mise à jour en masse, éditez ce script ou le JSON directement.

## Option 2 — Widget tiers (automatique, sans clé Google chez vous)

Services qui se connectent à votre fiche Google (compte gratuit limité souvent) :

- [SociableKIT – Google Reviews](https://www.sociablekit.com/google-reviews-widget/)
- [Elfsight – Google Reviews](https://elfsight.com/google-reviews-widget/)

Après création du widget, copiez l’**URL iframe** dans `src/data/google-reviews.config.ts` :

```ts
export const googleReviewsConfig = {
  mode: "widget",
  widgetIframeSrc: "https://…", // URL fournie par le service
  widgetMinHeight: 420,
};
```

Les avis (noms complets, photos) sont gérés par le widget.

## Option 3 — Google Places API (automatique, clé Google)

Crédit mensuel gratuit (~200 $) sur [Google Cloud](https://console.cloud.google.com/) — souvent **0 €** pour une synchro hebdomadaire.

1. Activer **Places API (New)**
2. Créer une clé, la mettre dans `.env` : `GOOGLE_PLACES_API_KEY=…`
3. `npm run fetch-google-reviews`

---

**Limite** : même avec l’API Google, seuls **5 avis** maximum peuvent être récupérés par requête ; le site affiche le total (`userRatingCount`) + ces 5 avis.
