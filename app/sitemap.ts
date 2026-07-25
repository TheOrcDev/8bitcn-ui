import type { MetadataRoute } from "next";

import { siteConfig } from "@/lib/site";
import { source } from "@/lib/source";

const publicRoutes = [
  "",
  "/about",
  "/blocks",
  "/character-sheet",
  "/contributors",
  "/profile-creator",
  "/sponsors",
  "/submit-project",
  "/themes",
  "/v2",
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const staticEntries: MetadataRoute.Sitemap = publicRoutes.map((route) => ({
    url: new URL(route || "/", siteConfig.url).toString(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.7,
  }));

  const docsEntries: MetadataRoute.Sitemap = source.getPages().map((page) => ({
    url: new URL(page.url, siteConfig.url).toString(),
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [...staticEntries, ...docsEntries];
}
