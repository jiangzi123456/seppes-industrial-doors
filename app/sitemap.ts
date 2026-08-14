import type { MetadataRoute } from "next";

const routes = ["", "/products", "/products/high-speed-roll-up-door", "/solutions", "/project-support", "/source/blog", "/about", "/contact", "/privacy"];

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://www.seppesde.com";
  return routes.map((route) => ({ url: `${base}${route}`, lastModified: new Date() }));
}
