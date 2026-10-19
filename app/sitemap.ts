import type { MetadataRoute } from "next";
import { blogPosts } from "@/data/blog-posts";

const staticRoutes = [
  "",
  "/products",
  "/products/high-speed-roll-up-door",
  "/products/zipper-high-speed-door",
  "/products/high-speed-spiral-door",
  "/products/industrial-sectional-door",
  "/products/hydraulic-dock-leveler",
  "/products/stacking-high-speed-door",
  "/products/aluminium-roller-shutter-door",
  "/products/dock-shelter",
  "/products/garage-high-speed-door",
  "/solutions",
  "/solutions/food-beverage",
  "/solutions/pharmaceutical-cleanroom",
  "/solutions/cold-chain",
  "/solutions/automotive-automated-manufacturing",
  "/solutions/logistics-warehousing",
  "/project-support/rapid-doors-for-an-automated-assembly-workshop",
  "/project-support",
  "/project-support/cleanroom-zipper-door-access",
  "/project-support/integrated-logistics-loading-bay",
  "/project-support/exterior-high-speed-spiral-door",
  "/quality-certifications",
  "/source/blog",
  "/about",
  "/contact",
  "/privacy",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://www.seppesde.com";
  return [
    ...staticRoutes.map((route) => ({ url: `${base}${route}`, lastModified: "2026-10-19" })),
    ...blogPosts.map((post) => ({
      url: `${base}/source/blog/${post.slug}`,
      lastModified: post.dateISO,
    })),
  ];
}
