import type { MetadataRoute } from "next";
import { blogPosts } from "@/data/blog-posts";

const staticRoutes = [
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
  "/about",
  "/contact",
  "/privacy",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://www.seppesde.com";
  return [
    ...staticRoutes.map((route) => ({ url: `${base}${route}`, lastModified: "2026-10-09" })),
    ...blogPosts.map((post) => ({
      url: `${base}/source/blog/${post.slug}`,
      lastModified: post.dateISO,
    })),
  ];
}
