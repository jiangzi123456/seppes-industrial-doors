import type { MetadataRoute } from "next";

const routes = [
  "",
  "/products",
  "/products/high-speed-roll-up-door",
  "/products/high-speed-spiral-door",
  "/products/industrial-sectional-door",
  "/products/hydraulic-dock-leveler",
  "/solutions",
  "/cases",
  "/project-support",
  "/source/blog",
  "/about",
  "/contact",
  "/privacy",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://www.seppesde.com";
  return routes.map((route) => ({ url: `${base}${route}`, lastModified: new Date() }));
}
