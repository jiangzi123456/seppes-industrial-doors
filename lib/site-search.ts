import { blogPosts } from "@/data/blog-posts";
import { products } from "@/data/site";

export type SiteSearchItem = {
  type: "Product" | "News";
  title: string;
  description: string;
  category: string;
  href: string;
  terms: string;
};

const productSearchAliases: Record<string, string> = {
  "high-speed-roll-up-door": "PVC rapid door fast door factory warehouse food processing dust airflow internal traffic automatic door",
  "zipper-high-speed-door": "cleanroom pharmaceutical food self repairing self repair sealed airlock controlled production hygiene",
  "high-speed-spiral-door": "rigid high speed door hard fast door exterior cold chain insulated security vehicle entrance",
  "industrial-sectional-door": "overhead door lifting door insulated warehouse factory loading bay vertical opening",
  "hydraulic-dock-leveler": "loading bay dock platform ramp forklift trailer warehouse logistics vehicle height",
  "stacking-high-speed-door": "folding fast door fold up door large opening wide opening wind resistant exterior",
  "aluminium-roller-shutter-door": "aluminum roller shutter security closure commercial industrial compact coil",
  "dock-shelter": "dock seal loading bay warehouse trailer vehicle weather sealing logistics",
  "garage-high-speed-door": "residential garage private garage villa vehicle access aluminium rigid fast door",
};

export const siteSearchItems: SiteSearchItem[] = [
  ...products.map((product) => ({
    type: "Product" as const,
    title: product.name,
    description: product.description,
    category: product.category,
    href: `/products/${product.slug}`,
    terms: [product.summary, ...product.specs, productSearchAliases[product.slug] ?? ""].join(" "),
  })),
  ...blogPosts.map((post) => ({
    type: "News" as const,
    title: post.title,
    description: post.excerpt,
    category: post.category,
    href: `/source/blog/${post.slug}`,
    terms: post.keywords?.join(" ") ?? "",
  })),
];

export const suggestedSearches = [
  "High Speed Door",
  "Zipper Door",
  "Cleanroom",
  "Safety Sensors",
  "Sectional Door",
  "Loading Dock",
  "Dock Shelter",
  "Cold Chain",
  "Warehouse",
];

export function filterSiteSearchItems(query: string, limit?: number) {
  const terms = query.trim().toLocaleLowerCase().split(/\s+/).filter(Boolean);
  if (!terms.length) return [];
  const matches = siteSearchItems.filter((item) => {
    const haystack = `${item.title} ${item.category} ${item.description} ${item.terms}`.toLocaleLowerCase();
    return terms.every((term) => haystack.includes(term));
  });
  return typeof limit === "number" ? matches.slice(0, limit) : matches;
}
