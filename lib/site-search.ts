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

export const siteSearchItems: SiteSearchItem[] = [
  ...products.map((product) => ({
    type: "Product" as const,
    title: product.name,
    description: product.description,
    category: product.category,
    href: `/products/${product.slug}`,
    terms: [product.summary, ...product.specs].join(" "),
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
