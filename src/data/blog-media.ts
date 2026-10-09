/**
 * Chaînes / médias associés aux reportages blog (logos pour attribution éditoriale).
 * Sources SVG : Wikimedia Commons (Logo TF1 2013, Logo BFMTV 2019).
 */
export type BlogMediaId = "tf1" | "bfmtv";

export type BlogMediaBrand = {
  id: BlogMediaId;
  name: string;
  logoSrc: string;
  logoAlt: string;
  width: number;
  height: number;
};

export const blogMedia: Record<BlogMediaId, BlogMediaBrand> = {
  tf1: {
    id: "tf1",
    name: "TF1",
    logoSrc: "/assets/blog/media/tf1.svg",
    logoAlt: "Logo TF1",
    width: 120,
    height: 44,
  },
  bfmtv: {
    id: "bfmtv",
    name: "BFM TV",
    logoSrc: "/assets/blog/media/bfmtv.svg",
    logoAlt: "Logo BFM TV",
    width: 56,
    height: 56,
  },
};

export function getBlogMedia(id: BlogMediaId | undefined): BlogMediaBrand | null {
  if (!id) return null;
  return blogMedia[id] ?? null;
}
