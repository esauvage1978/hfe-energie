#!/usr/bin/env node
/**
 * Génère src/data/service-area-communes.json — communes dans le rayon
 * d'intervention autour du siège HFE (Lille, rue Jean sans peur).
 *
 * Source : geo.api.gouv.fr (API publique, sans clé)
 * Usage : node scripts/build-service-area.mjs
 */
import { writeFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const OUT = path.join(ROOT, "src", "data", "service-area-communes.json");

const CENTER = {
  lat: 50.6335,
  lng: 3.0598,
  label: "44 Rue Jean sans peur, 59800 Lille",
};
const RADIUS_KM = 50;
const DEPARTMENTS = ["59", "62", "80", "02"];

const DEPT_NAMES = {
  "59": "Nord",
  "62": "Pas-de-Calais",
  "80": "Somme",
  "02": "Aisne",
};

function haversineKm(lat1, lon1, lat2, lon2) {
  const R = 6371;
  const toRad = (d) => (d * Math.PI) / 180;
  const dLat = toRad(lat2 - lat1);
  const dLon = toRad(lon2 - lon1);
  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) * Math.sin(dLon / 2) ** 2;
  return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
}

const communes = [];

for (const dept of DEPARTMENTS) {
  const url = new URL("https://geo.api.gouv.fr/communes");
  url.searchParams.set("codeDepartement", dept);
  url.searchParams.set("fields", "nom,code,codesPostaux,centre,codeDepartement");
  url.searchParams.set("format", "json");
  url.searchParams.set("geometry", "centre");

  const res = await fetch(url);
  if (!res.ok) throw new Error(`geo.api.gouv.fr ${dept}: ${res.status}`);
  const rows = await res.json();

  for (const row of rows) {
    const [lon, lat] = row.centre.coordinates;
    const distanceKm = haversineKm(CENTER.lat, CENTER.lng, lat, lon);
    if (distanceKm > RADIUS_KM) continue;
    communes.push({
      name: row.nom,
      code: row.code,
      postalCodes: row.codesPostaux ?? [],
      department: row.codeDepartement,
      distanceKm: Math.round(distanceKm * 10) / 10,
    });
  }
}

communes.sort((a, b) => a.name.localeCompare(b.name, "fr"));

const byDepartment = {};
for (const c of communes) {
  if (!byDepartment[c.department]) {
    byDepartment[c.department] = {
      code: c.department,
      name: DEPT_NAMES[c.department] ?? c.department,
      communes: [],
    };
  }
  byDepartment[c.department].communes.push(c);
}

const payload = {
  generatedAt: new Date().toISOString(),
  center: CENTER,
  radiusKm: RADIUS_KM,
  totalCount: communes.length,
  departments: Object.values(byDepartment).sort((a, b) =>
    a.code.localeCompare(b.code),
  ),
  communes,
};

writeFileSync(OUT, `${JSON.stringify(payload, null, 2)}\n`, "utf8");
process.stdout.write(
  `✓ ${communes.length} communes (rayon ${RADIUS_KM} km) → ${path.relative(ROOT, OUT)}\n`,
);
