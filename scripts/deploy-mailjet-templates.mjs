/**
 * Compile les MJML puis pousse le HTML vers Mailjet (PUT /template/{id}/detailcontent).
 *
 * Variables d'environnement requises :
 *   MAILJET_API_KEY_PUBLIC
 *   MAILJET_API_SECRET
 *   MAILJET_TEMPLATE_NOTIFICATION_ID  — notification interne
 *   MAILJET_TEMPLATE_VISITOR_ID       — accusé de réception visiteur
 *
 * Usage : npm run deploy-mailjet-templates
 */
import { execSync } from "node:child_process";
import { readFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const emailsDir = join(root, "emails");

const templates = [
  {
    idEnv: "MAILJET_TEMPLATE_NOTIFICATION_ID",
    label: "Notification interne",
    htmlFile: "contact-notification-mailjet.html",
    mjmlFile: "contact-notification-mailjet.mjml",
  },
  {
    idEnv: "MAILJET_TEMPLATE_VISITOR_ID",
    label: "Confirmation visiteur",
    htmlFile: "contact-confirmation-visiteur-mailjet.html",
    mjmlFile: "contact-confirmation-visiteur-mailjet.mjml",
  },
];

function requireEnv(name) {
  const value = process.env[name]?.trim();
  if (!value) {
    throw new Error(`Variable d'environnement manquante : ${name}`);
  }
  return value;
}

async function compileMjml() {
  for (const template of templates) {
    const input = join(emailsDir, template.mjmlFile);
    const output = join(emailsDir, template.htmlFile);
    execSync(`npx --yes mjml "${input}" -o "${output}"`, { stdio: "inherit", cwd: root });
  }
}

async function pushTemplate({ id, label, htmlPath }) {
  const html = await readFile(htmlPath, "utf8");
  const apiKey = requireEnv("MAILJET_API_KEY_PUBLIC");
  const apiSecret = requireEnv("MAILJET_API_SECRET");
  const auth = Buffer.from(`${apiKey}:${apiSecret}`).toString("base64");

  const response = await fetch(`https://api.mailjet.com/v3/REST/template/${id}/detailcontent`, {
    method: "PUT",
    headers: {
      Authorization: `Basic ${auth}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ "Html-part": html }),
  });

  const body = await response.text();
  if (!response.ok) {
    throw new Error(`Mailjet ${label} (ID ${id}) — HTTP ${response.status} : ${body}`);
  }

  console.log(`✓ ${label} (ID ${id}) mis à jour sur Mailjet`);
}

await compileMjml();

for (const template of templates) {
  const id = requireEnv(template.idEnv);
  await pushTemplate({
    id,
    label: template.label,
    htmlPath: join(emailsDir, template.htmlFile),
  });
}

console.log("\nDéploiement Mailjet terminé.");
