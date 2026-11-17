import type { MetadataRoute } from "next";
import { blogPosts } from "@/data/blog-posts";
import { products } from "@/data/site";

const sourceDateEpoch = Number(process.env.SOURCE_DATE_EPOCH || 0);
const contentReleaseDate = process.env.SITE_CONTENT_UPDATED_AT
  || (sourceDateEpoch > 0 ? new Date(sourceDateEpoch * 1000).toISOString() : "2026-11-17");

const staticRoutes = [
  { route: "", lastModified: "2026-11-09" },
  { route: "/products", lastModified: "2026-11-05" },
  { route: "/products/high-speed-doors", lastModified: "2026-11-17" },
  { route: "/products/industrial-sectional-doors", lastModified: "2026-11-17" },
  { route: "/products/loading-dock-equipment", lastModified: "2026-11-17" },
  { route: "/products/high-speed-roll-up-door", lastModified: "2026-11-05" },
  { route: "/products/zipper-high-speed-door", lastModified: "2026-11-05" },
  { route: "/products/high-speed-spiral-door", lastModified: "2026-11-05" },
  { route: "/products/industrial-sectional-door", lastModified: "2026-11-05" },
  { route: "/products/hydraulic-dock-leveler", lastModified: "2026-10-19" },
  { route: "/products/stacking-high-speed-door", lastModified: "2026-10-19" },
  { route: "/products/aluminium-roller-shutter-door", lastModified: "2026-10-19" },
  { route: "/products/dock-shelter", lastModified: "2026-10-19" },
  { route: "/products/garage-high-speed-door", lastModified: "2026-10-19" },
  { route: "/solutions", lastModified: "2026-10-26" },
  { route: "/solutions/food-beverage", lastModified: "2026-10-19" },
  { route: "/solutions/pharmaceutical-cleanroom", lastModified: "2026-10-19" },
  { route: "/solutions/cold-chain", lastModified: "2026-10-19" },
  { route: "/solutions/automotive-automated-manufacturing", lastModified: "2026-10-19" },
  { route: "/solutions/logistics-warehousing", lastModified: "2026-10-19" },
  { route: "/project-support/rapid-doors-for-an-automated-assembly-workshop", lastModified: "2026-10-19" },
  { route: "/project-support", lastModified: "2026-10-19" },
  { route: "/project-support/cleanroom-zipper-door-access", lastModified: "2026-10-19" },
  { route: "/project-support/integrated-logistics-loading-bay", lastModified: "2026-10-19" },
  { route: "/project-support/exterior-high-speed-spiral-door", lastModified: "2026-10-19" },
  { route: "/quality-certifications", lastModified: "2026-10-19" },
  { route: "/source/blog", lastModified: "2026-10-26" },
  { route: "/about", lastModified: "2026-10-09" },
  { route: "/contact", lastModified: "2026-11-09" },
  { route: "/privacy", lastModified: "2026-10-09" },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://www.seppesde.com";
  return [
    ...staticRoutes.map(({ route, lastModified }) => ({ url: `${base}${route}`, lastModified: route === "/source/blog" ? blogPosts.reduce((latest, post) => post.dateISO > latest ? post.dateISO : latest, contentReleaseDate) : contentReleaseDate || lastModified })),
    ...Array.from({ length: Math.ceil(products.length / 4) - 1 }, (_, i) => ({ url: `${base}/products?page=${i + 2}`, lastModified: contentReleaseDate })),
    ...Array.from({ length: Math.ceil(blogPosts.length / 6) - 1 }, (_, i) => ({ url: `${base}/source/blog?page=${i + 2}`, lastModified: blogPosts.reduce((latest, post) => post.dateISO > latest ? post.dateISO : latest, "2026-10-26") })),
    ...blogPosts.map((post) => ({
      url: `${base}/source/blog/${post.slug}`,
      lastModified: post.dateISO,
    })),
  ];
}
