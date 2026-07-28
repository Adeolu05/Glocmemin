import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/about",
    "/beliefs",
    "/programs",
    "/life",
    "/humanitarian",
    "/give",
    "/contact",
  ];

  return routes.map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: new Date(),
    changeFrequency:
      route === "" || route === "/programs" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.8,
  }));
}
