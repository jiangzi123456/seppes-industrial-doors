import type { MetadataRoute } from "next";

const routes = [
  "",
  "/products",
  "/products/high-speed-roll-up-door",
  "/products/high-speed-spiral-door",
  "/products/industrial-sectional-door",
  "/products/hydraulic-dock-leveler",
  "/solutions",
  "/project-support/rapid-doors-for-an-automated-assembly-workshop",
  "/project-support",
  "/source/blog",
  "/source/blog/new-generation-high-speed-roll-up-door",
  "/source/blog/control-dust-and-airflow-between-production-zones",
  "/source/blog/faster-loading-route-modern-logistics-center",
  "/about",
  "/contact",
  "/privacy",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://www.seppesde.com";
  return routes.map((route) => ({ url: `${base}${route}`, lastModified: new Date() }));
}
