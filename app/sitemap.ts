import type { MetadataRoute } from "next";
import { blogPosts } from "@/data/blog-posts";

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
  ...blogPosts.map((post) => "/source/blog/" + post.slug),
  "/about",
  "/contact",
  "/privacy",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://www.seppesde.com";
  return routes.map((route) => ({ url: `${base}${route}`, lastModified: new Date() }));
}
