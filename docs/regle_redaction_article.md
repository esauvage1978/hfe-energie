# Règles de rédaction des articles blog — Hecker & Frères Énergie (HFE)

Ce document définit les règles de rédaction SEO, éditoriales et UX pour les contenus publiés sur le site [`hfe-energie.fr`](https://hfe-energie.fr).

Objectifs :
- développer le trafic SEO qualifié (local + thématique énergie),
- rassurer et informer les particuliers, copropriétés et professionnels,
- démontrer l’expertise artisanale de HFE (RGE QualiPAC, Compagnons du Devoir, partenaire Panasonic),
- générer des demandes de devis et d’étude,
- créer un fort maillage interne vers les pages services et réalisations,
- devenir une référence sur les énergies renouvelables, le chauffage et la plomberie à Lille et dans la MEL.

---

# 1. Règles communes à tous les articles

## 1.1 Objectif éditorial

Chaque article doit répondre à une intention réelle des clients HFE : particuliers, syndic / copropriété ou professionnels (tertiaire).

Intentions principales :

- Comprendre une solution technique (PAC, clim, chauffage, plomberie).
- Comparer des options (air-eau vs air-air, chaudière vs PAC, etc.).
- Estimer coûts, économies et aides (MaPrimeRénov’, CEE…).
- Savoir si une solution convient au climat du Nord / Hauts-de-France.
- Trouver un installateur RGE de confiance à Lille et métropole.
- Préparer un projet (délais, travaux, entretien, garanties).
- Résoudre un problème concret (panne, confort, humidité, eau calcaire…).

L’article doit toujours :
- être concret et ancré terrain,
- rassurant sans promesse irréaliste,
- utile immédiatement (chiffres, critères de choix, prochaines étapes),
- crédible techniquement, sans jargon inutile.

Éviter :
- le jargon trop technique sans explication,
- les textes génériques « France entière » sans ancrage local,
- les contenus purement commerciaux ou agressifs,
- les affirmations juridiques / aides non vérifiées,
- les diagnostics « à distance » trop catégoriques.

Le ton doit être :
- professionnel,
- accessible,
- rassurant,
- pédagogique,
- ancré localement (Lille, MEL, rayon 50 km).

On s’adresse au lecteur en **vous**, on parle de HFE en **nous**.

---

## 1.2 Structure technique du contenu

Le site est en Astro 5. Le contenu éditorial vit aujourd’hui dans des modules TypeScript i18n (`src/i18n/content/*.ts`). Les articles blog futurs devront suivre le même esprit SEO (méta, FAQ, breadcrumbs, maillage) et, si une collection Markdown / MDX est ajoutée, respecter le schéma Astro du projet.

### Champs essentiels (page ou article)

- `seo.title` — titre SEO unique, requête principale + intention
- `seo.description` — 150 à 160 caractères
- `seo.keywords` — liste ciblée (local + thématique)
- `breadcrumbs` — fil d’Ariane `{ name, url }`
- `faq` — questions / réponses visibles + JSON-LD `FAQPage` aligné
- image hero / OG (1200×630 recommandé, alt descriptif)
- date de publication / mise à jour (si blog)

### Champs ou schémas recommandés

- `Service` ou `HVACBusiness` selon le contexte (déjà géré globalement)
- `BreadcrumbList`
- `FAQPage` dès qu’il y a une FAQ
- liens vers pages services, aides, réalisations et contact

### Conventions URL

- FR en kebab-case, sans slash final (`trailingSlash: "never"`)
- EN sous `/en/...` via `src/i18n/routes.ts`
- Priorité SEO : contenu français local ; version EN uniquement si la page est réellement traduite

---

## 1.3 SEO de base

Chaque article doit contenir :

- un H1 unique,
- une introduction claire qui pose le problème et la promesse de réponse,
- des H2 orientés recherche Google,
- des exemples concrets (maison, appartement, copro, tertiaire),
- des critères de choix et conseils applicables,
- des liens internes utiles,
- une FAQ visible quand le sujet s’y prête,
- des formulations naturelles (pas de bourrage de mots-clés).

Les mots-clés doivent être intégrés naturellement, avec un **ancrage local** dès que pertinent (Lille, métropole lilloise, villes MEL).

### Exemples de mots-clés

- pompe à chaleur Lille
- PAC air-eau / PAC air-air
- installateur RGE QualiPAC
- climatisation réversible Lille
- chauffagiste Lille
- remplacement chaudière gaz
- MaPrimeRénov’ pompe à chaleur
- aides CEE
- entretien pompe à chaleur
- adoucisseur d’eau
- climatisation gainable / multi-split
- devis pompe à chaleur Lille

### À éviter

- le bourrage SEO,
- les paragraphes trop longs,
- les promesses d’économies non contextualisées,
- les montants d’aides obsolètes sans date de mise à jour,
- les affirmations techniques absolues (« toujours », « jamais ») sans nuance.

---

## 1.4 Accroche et preuve obligatoire

Chaque article doit contenir :

### Une identification rapide du besoin

Le lecteur doit se reconnaître immédiatement.

Exemples :
- « Votre facture de chauffage a encore augmenté cet hiver ? »
- « Vous hésitez entre une PAC air-eau et une climatisation réversible ? »
- « Votre chaudière gaz arrive en fin de vie et vous visez MaPrimeRénov’ ? »

### Une réassurance crédible

Le contenu doit :
- rassurer sur la faisabilité (climat du Nord, logement, budget),
- s’appuyer sur l’expérience terrain (15 ans, 1500+ installations, note Google),
- rappeler les preuves utiles : RGE QualiPAC, Compagnons du Devoir, partenaire Panasonic.

### Des exemples du quotidien projet

Exemples :
- maison individuelle à rénover,
- appartement / copropriété,
- remplacement chaudière,
- confort d’été (canicule / clim),
- eau calcaire / adoucisseur,
- local professionnel / petit tertiaire,
- entretien annuel obligatoire.

---

## 1.5 FAQ et JSON-LD

Si l’article contient une FAQ :

- les questions doivent être visibles sur la page,
- le schéma `FAQPage` doit reprendre **exactement** les mêmes questions / réponses,
- minimum :
  - 3 questions pour un article simple,
  - 5 questions pour un article pilier.

### Questions types

- Combien coûte une pompe à chaleur à Lille ?
- Quelle PAC choisir pour une maison dans le Nord ?
- Quelles aides en 2026 (MaPrimeRénov’, CEE…) ?
- Une PAC fonctionne-t-elle bien par grand froid ?
- Faut-il un entretien annuel ?
- Combien de temps pour un devis / une installation ?
- HFE intervient-il dans ma ville (MEL / 50 km) ?

---

## 1.6 Maillage interne

Le maillage doit guider naturellement vers la bonne offre HFE et la prise de contact.

### Types de liens internes

- pages services (`/pompe-a-chaleur`, `/climatisation`, `/chauffage`, `/plomberie`),
- sous-pages techniques (adoucisseur, têtes thermostatiques, mono-split…),
- aides & financements (`/aides-financement`),
- audiences (`/particuliers`, `/copropriete`, `/professionnels`),
- réalisations (`/realisations/...`),
- zone d’intervention (`/zone-intervention`),
- partenaire Panasonic (`/partenaire-panasonic`),
- contact / devis (`/contact`).

### Exemples de pages cibles

- `/pompe-a-chaleur`
- `/climatisation`
- `/chauffage`
- `/plomberie`
- `/aides-financement`
- `/particuliers`
- `/copropriete`
- `/professionnels`
- `/realisations/pompe-a-chaleur-air-eau`
- `/realisations/remplacement-chaudiere`
- `/realisations/pac-collective-copropriete`
- `/zone-intervention`
- `/contact`

### Préférer des ancres naturelles

- « Découvrir nos pompes à chaleur air-eau »
- « Estimer vos aides MaPrimeRénov’ et CEE »
- « Voir nos réalisations à Lille et métropole »
- « Demander un devis gratuit »

---

# 2. Article simple

## 2.1 Quand utiliser ce format

Utiliser un article simple pour :

- répondre à une question précise,
- traiter une longue traîne SEO,
- comparer deux options,
- expliquer un point d’entretien ou de réglementation,
- rassurer sur un frein fréquent (froid, aides, bruit, emprise…).

### Exemples

- « Pompe à chaleur et grand froid : ça marche dans le Nord ? »
- « PAC air-eau ou air-air : que choisir ? »
- « Quelles aides pour une pompe à chaleur en 2026 ? »
- « Entretien de pompe à chaleur : obligations et fréquence »
- « Adoucisseur d’eau : quand est-ce utile à Lille ? »

---

## 2.2 Structure recommandée

### Structure type

1. Introduction orientée besoin + contexte local.
2. Réponse rapide.
3. Points clés / critères de choix.
4. Erreurs ou idées reçues à éviter.
5. Conseils concrets ou étapes du projet.
6. Quand faire appel à un pro RGE.
7. Liens internes utiles.
8. FAQ.
9. CTA devis / étude.

---

## 2.3 H1 et titres

Le H1 doit être :
- direct,
- proche des recherches Google,
- éventuellement géolocalisé si naturel.

### Exemples

- `Pompe à chaleur à Lille : guide pour bien choisir`
- `PAC air-eau ou air-air : quelles différences ?`
- `MaPrimeRénov’ et pompe à chaleur : ce qu’il faut savoir`
- `Remplacer sa chaudière gaz par une pompe à chaleur`

### Exemples de H2

- `Pourquoi envisager une PAC aujourd’hui ?`
- `Les critères de choix pour une maison dans le Nord`
- `Budget, aides et retour sur investissement`
- `Quand demander un devis à un installateur RGE ?`

---

## 2.4 Longueur cible

### Repères

- article ciblé :
  1 000 à 1 800 mots.

- sujet concurrentiel :
  1 800 à 2 500 mots.

La longueur doit toujours servir :
- la compréhension,
- la crédibilité,
- l’aide à la décision.

---

## 2.5 Éléments obligatoires

Chaque article doit contenir :

- situations concrètes (logement / usage),
- conseils ou critères applicables,
- nuances techniques utiles (sans surcharger),
- section « quand faire appel à un professionnel »,
- FAQ visible (si pertinent),
- maillage interne vers services / aides / réalisations,
- CTA devis doux.

---

## 2.6 Conversion douce

Le but n’est pas de vendre agressivement : informer, rassurer, puis proposer l’étape suivante.

### Exemples de CTA

- « Demander un devis gratuit »
- « Obtenir une étude personnalisée »
- « Estimer mes aides »
- « Parler de mon projet à Lille et métropole »

Les CTA doivent apparaître :
- après une section décisionnelle forte,
- après les conseils pratiques,
- en fin d’article.

Formulations utiles du site : devis gratuit, réponse rapide (ex. 72h selon les pages), intervention Lille & MEL.

---

## 2.7 Checklist article simple

Avant publication :

- [ ] H1 unique.
- [ ] Intro claire (besoin + promesse de réponse).
- [ ] Audience ciblée (particulier / copro / pro).
- [ ] Conseils ou critères concrets.
- [ ] Ancrage local ou preuve terrain si pertinent.
- [ ] Section « Quand faire appel à un pro ».
- [ ] FAQ visible (si prévue).
- [ ] FAQ JSON-LD alignée.
- [ ] 3 à 5 liens internes utiles.
- [ ] CTA devis / étude non agressif.
- [ ] Aucune promesse irréaliste ni aide non vérifiée.
- [ ] Meta title + description 150–160 caractères.

---

# 3. Article pilier

Un article pilier doit devenir une référence Google sur une thématique forte liée aux métiers HFE.

---

## 3.1 Quand utiliser ce format

Utiliser un article pilier pour :

- pompe à chaleur (guide complet),
- climatisation réversible,
- remplacement de chaudière,
- aides à la rénovation énergétique,
- chauffage performant / plancher chauffant,
- solutions copropriété,
- climatisation tertiaire,
- plomberie / traitement de l’eau (si volume de recherche suffisant).

---

## 3.2 Objectifs d’un article pilier

L’article pilier doit :

- ranker sur des mots-clés concurrentiels,
- capter du trafic longue traîne,
- rassurer sur le projet (coût, aides, travaux, entretien),
- démontrer l’expertise HFE,
- créer un cocon de maillage interne,
- générer des demandes de devis / d’étude.

---

## 3.3 H1 obligatoire

Le H1 doit contenir :
- la thématique principale,
- l’intention utilisateur,
- éventuellement l’année ou la zone (Lille) si naturel.

### Exemples

- `Pompe à chaleur à Lille : le guide complet (2026)`
- `Climatisation réversible : comment choisir son installation`
- `Remplacer sa chaudière : options, aides et étapes`
- `Aides MaPrimeRénov’ et CEE : guide pour vos travaux d’énergie`

---

## 3.4 Introduction SEO

L’introduction doit :

- poser le problème (facture, confort, rénovation, climat),
- rassurer,
- annoncer ce que le lecteur va trouver,
- intégrer naturellement les mots-clés principaux + local si pertinent.

### Longueur

150 à 250 mots.

---

## 3.5 Structure obligatoire

### Structure minimale

1. Introduction SEO.
2. Sommaire avec ancres.
3. Réponse rapide.
4. Comprendre la solution / le sujet.
5. Options et critères de choix.
6. Coûts, économies, aides.
7. Étapes du projet (étude → installation → entretien).
8. Erreurs à éviter / idées reçues.
9. Quand faire appel à un installateur RGE.
10. FAQ SEO.
11. Articles ou pages liées.
12. CTA devis / étude.

---

## 3.6 Section « Comprendre »

Cette section doit :
- vulgariser sans infantiliser,
- contextualiser (logement, usage, climat du Nord),
- poser le cadre réglementaire ou les aides sans surcharger.

### Éviter

- le catalogue technique illisible,
- les affirmations absolues,
- les montants d’aides sans date ni source.

---

## 3.7 Section « Solutions concrètes »

Donner :
- critères de choix actionnables,
- exemples de configurations (maison, appartement, tertiaire),
- ordres de grandeur (économies, délais, types d’équipements),
- points de vigilance (isolation, émetteur, entretien, bruit, emprise).

Les conseils doivent être :
- applicables immédiatement,
- simples,
- crédibles terrain.

---

## 3.8 Section « Quand faire appel à un professionnel »

OBLIGATOIRE.

Inclure selon le sujet :
- obligation RGE pour certaines aides,
- dimensionnement / étude thermique,
- fluides frigorigènes (habilitation),
- sécurité gaz / eau,
- entretien réglementaire,
- cas où un devis sur place est indispensable.

---

## 3.9 FAQ SEO

Minimum :
5 questions.

### Exemples

- Combien coûte une installation de PAC ?
- Quelles aides puis-je obtenir en 2026 ?
- Une PAC est-elle adaptée au climat lillois ?
- Combien de temps dure un chantier ?
- Faut-il changer les radiateurs ?
- HFE intervient-il près de chez moi ?

---

## 3.10 Maillage interne pilier

Le pilier doit redistribuer vers :
- pages services détaillées,
- pages aides,
- réalisations proches du sujet,
- pages audiences (particuliers / copro / pro),
- zone d’intervention,
- contact.

### Objectif

Créer un cocon sémantique fort autour :
- pompes à chaleur,
- climatisation,
- chauffage / rénovation,
- aides financières,
- preuves locales (réalisations, zone MEL).

---

## 3.11 Longueur cible

### Repères

- pilier standard :
  2 500 à 4 000 mots.

- pilier concurrentiel :
  4 000 à 6 000 mots.

---

## 3.12 Conversion et prise de contact

Le pilier doit inspirer confiance.

### Éléments recommandés

- exemples de chantiers / renvois réalisations,
- preuves (RGE QualiPAC, Panasonic, Compagnons du Devoir, avis Google),
- chiffres utiles (économies jusqu’à 75 %, délais, zone 50 km),
- explication claire du déroulé HFE (étude, devis, pose, suivi).

Les CTA doivent être :
- rassurants,
- non agressifs,
- visibles sans être envahissants.

---

## 3.13 Checklist article pilier

Avant publication :

- [ ] H1 optimisé.
- [ ] Intro SEO claire.
- [ ] Sommaire avec ancres.
- [ ] Réponse rapide.
- [ ] Vulgarisation claire.
- [ ] Critères / étapes applicables.
- [ ] Section aides / budget si pertinent (données à jour).
- [ ] Section « Quand faire appel à un pro ».
- [ ] FAQ visible 5+ questions.
- [ ] FAQ JSON-LD alignée.
- [ ] 6+ liens internes structurants.
- [ ] CTA devis / étude.
- [ ] Preuves HFE (RGE, local, expérience) sans survente.
- [ ] Meta title + description 150–160 caractères.
- [ ] Build Astro validé.

---

# 4. Validation technique avant livraison

Après création ou modification :

1. Vérifier les lints / typings TypeScript si le contenu est dans `src/i18n/content/`.
2. Vérifier le nombre de mots.
3. Vérifier le maillage vers des URLs existantes (`src/i18n/routes.ts`).
4. Vérifier FAQ visible = FAQ JSON-LD.
5. Lancer :

```bash
npm run build
```

---

# 5. Synthèse des formats

| Type d'article          | Objectif                              |   Longueur cible | FAQ            | Conversion           | Maillage              |
| ----------------------- | ------------------------------------- | ---------------: | -------------- | -------------------- | --------------------- |
| Article simple          | Répondre à une question précise       | 1 000-2 000 mots | 3-5 questions  | CTA devis doux       | 3-5 liens             |
| Article décisionnel     | Comparer / aider au choix + long tail | 1 800-2 500 mots | 5+ questions   | Étude / devis        | 5-7 liens             |
| Article pilier          | Référence SEO + trafic massif         | 2 500-6 000 mots | 5-10 questions | Forte preuve + devis | 6+ liens structurants |
