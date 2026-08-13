import type { MetadataRoute } from "next";

const routes = ["", "/products", "/products/high-speed-roll-up-door", "/solutions", "/project-support", "/source/blog", "/about", "/contact", "/privacy"];

export default function sitemap(): MetadataRoute.Sitemap {
  const base = process.env.NEXT_PUBLIC_SITE_URL
    || (process.env.VERCEL_PROJECT_PRODUCTION_URL ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}` : undefined)
    || "http://localhost:3000";
  return routes.map((route) => ({ url: `${base}${route}`, lastModified: new Date() }));
}
