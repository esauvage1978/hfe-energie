import type { Locale } from "../i18n/config";
import { pathFor } from "../i18n/index";
import type { RouteId } from "../i18n/routes";
import { getClimatisationMonoSplitContent } from "../i18n/content/climatisation-mono-split";
import { getProjectsAdoucisseurCo2Content } from "../i18n/content/projects-adoucisseur-co2";
import { getProjectsAdoucisseurSelContent } from "../i18n/content/projects-adoucisseur-sel";
import { getProjectsBallonThermodynamiqueContent } from "../i18n/content/projects-ballon-thermodynamique";
import { getProjectsClimContent } from "../i18n/content/projects-climatisation";
import { getProjectsCoproprieteContent } from "../i18n/content/projects-copropriete";
import { getProjectsDepannagePlomberieContent } from "../i18n/content/projects-depannage-plomberie";
import { getProjectsDragoContent } from "../i18n/content/projects-drago";
import { getProjectsDrvTertiaireContent } from "../i18n/content/projects-drv-tertiaire";
import { getProjectsGainableContent } from "../i18n/content/projects-gainable";
import { getProjectsIndexContent } from "../i18n/content/projects-index";
import { getProjectsPacAirEauContent } from "../i18n/content/projects-pac-air-eau";
import { getProjectsPetitTertiaireContent } from "../i18n/content/projects-petit-tertiaire";
import { getProjectsPlancherChauffantContent } from "../i18n/content/projects-plancher-chauffant";
import { getProjectsRadiateursNouvelleGenerationContent } from "../i18n/content/projects-radiateurs-nouvelle-generation";
import { getProjectsRemplacementChaudiereContent } from "../i18n/content/projects-remplacement-chaudiere";
import { getProjectsSalleDeBainContent } from "../i18n/content/projects-salle-de-bain";
import type { Project, ProjectImage } from "../i18n/content/projects-shared";
import { getProjectsTetesThermostatiquesConnecteesContent } from "../i18n/content/projects-tetes-thermostatiques-connectees";
import { getProjectsTetesThermostatiquesContent } from "../i18n/content/projects-tetes-thermostatiques";
import { site } from "./site";

const MAX_IMAGES_PER_PAGE = 1000;

type ProjectPageContent = {
  hero?: { image?: ProjectImage };
  intro?: { image?: ProjectImage };
  projects?: readonly Project[];
  items?: readonly { cover: ProjectImage }[];
};

const PROJECT_PAGE_SOURCES: readonly {
  routeId: RouteId;
  getContent: (locale: Locale) => ProjectPageContent;
}[] = [
  { routeId: "projects", getContent: getProjectsIndexContent },
  { routeId: "projectsPacAirEau", getContent: getProjectsPacAirEauContent },
  { routeId: "climatisationMonoSplit", getContent: getClimatisationMonoSplitContent },
  { routeId: "projectsClim", getContent: getProjectsClimContent },
  { routeId: "projectsGainable", getContent: getProjectsGainableContent },
  { routeId: "projectsPetitTertiaire", getContent: getProjectsPetitTertiaireContent },
  { routeId: "projectsDrvTertiaire", getContent: getProjectsDrvTertiaireContent },
  { routeId: "projectsPlancherChauffant", getContent: getProjectsPlancherChauffantContent },
  { routeId: "projectsRemplacementChaudiere", getContent: getProjectsRemplacementChaudiereContent },
  { routeId: "projectsCopropriete", getContent: getProjectsCoproprieteContent },
  { routeId: "projectsBallonThermodynamique", getContent: getProjectsBallonThermodynamiqueContent },
  { routeId: "projectsDepannagePlomberie", getContent: getProjectsDepannagePlomberieContent },
  { routeId: "projectsSalleDeBain", getContent: getProjectsSalleDeBainContent },
  { routeId: "projectsAdoucisseurSel", getContent: getProjectsAdoucisseurSelContent },
  { routeId: "projectsAdoucisseurCo2", getContent: getProjectsAdoucisseurCo2Content },
  { routeId: "projectsDrago", getContent: getProjectsDragoContent },
  { routeId: "projectsRadiateursNouvelleGeneration", getContent: getProjectsRadiateursNouvelleGenerationContent },
  { routeId: "projectsTetesThermostatiques", getContent: getProjectsTetesThermostatiquesContent },
  { routeId: "projectsTetesThermostatiquesConnectees", getContent: getProjectsTetesThermostatiquesConnecteesContent },
];

function collectProjectImages(project: Project): ProjectImage[] {
  const images: ProjectImage[] = [...project.images];

  if (project.beforeAfter.before?.image) {
    images.push(project.beforeAfter.before.image);
  }
  if (project.beforeAfter.after?.image) {
    images.push(project.beforeAfter.after.image);
  }
  for (const side of project.beforeAfter.afters ?? []) {
    if (side.image) images.push(side.image);
  }

  return images;
}

function extractImageSrcs(content: ProjectPageContent): string[] {
  const srcs: string[] = [];

  if (content.hero?.image) srcs.push(content.hero.image.src);
  if (content.intro?.image) srcs.push(content.intro.image.src);

  for (const item of content.items ?? []) {
    srcs.push(item.cover.src);
  }

  for (const project of content.projects ?? []) {
    for (const image of collectProjectImages(project)) {
      srcs.push(image.src);
    }
  }

  return [...new Set(srcs)];
}

function toAbsoluteImageUrl(src: string): string {
  return new URL(src, site.baseUrl).href;
}

function buildProjectImageMap(): ReadonlyMap<string, readonly string[]> {
  const map = new Map<string, string[]>();

  for (const locale of ["fr", "en"] as const) {
    for (const { routeId, getContent } of PROJECT_PAGE_SOURCES) {
      const pageUrl = new URL(pathFor(routeId, locale), site.baseUrl).href;
      const images = extractImageSrcs(getContent(locale))
        .slice(0, MAX_IMAGES_PER_PAGE)
        .map(toAbsoluteImageUrl);

      if (images.length > 0) {
        map.set(pageUrl, images);
      }
    }
  }

  return map;
}

/** URL de page → URLs absolues des images affichées sur les pages réalisations. */
export const projectImageUrlsByPage = buildProjectImageMap();
