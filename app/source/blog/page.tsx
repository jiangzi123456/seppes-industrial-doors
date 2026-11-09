import type { Metadata } from "next";
import { GeoNewsFeed } from "./geo-news-feed";
import { blogPosts } from "@/data/blog-posts";
import { createPageMetadata } from "@/lib/seo";

const baseMetadata: Metadata = createPageMetadata({
  title: "Industrial Door Blog: Product News & Solutions",
  description: "SEPPES product news, industrial door solutions, project stories and practical buying guides for global facilities.",
  path: "/source/blog",
  image: "/images/blog/cleanroom-zipper-door-yellow-window-crop.webp",
});

export async function generateMetadata({ searchParams }: { searchParams: Promise<{ page?: string }> }) {
  const { page } = await searchParams;
  const current = Math.min(Math.ceil(blogPosts.length / 6), Math.max(1, Math.floor(Number(page) || 1)));
  return current === 1 ? baseMetadata : createPageMetadata({ title: `Industrial Door Blog – Page ${current}`, description: `Browse page ${current} of SEPPES industrial door buying guides, solutions and project insights.`, path: `/source/blog?page=${current}` });
}

export default async function GeoNewsPage({ searchParams }: { searchParams: Promise<{ page?: string }> }) {
  const { page } = await searchParams;
  const current = Math.min(Math.ceil(blogPosts.length / 6), Math.max(1, Math.floor(Number(page) || 1)));
  const posts = [...blogPosts]
    .sort((a, b) => b.dateISO.localeCompare(a.dateISO))
    .map(({ slug, category, date, dateISO, title, excerpt, readTime, image, imageAlt }) => ({
      slug,
      category,
      date,
      dateISO,
      title,
      excerpt,
      readTime,
      image,
      imageAlt,
    }));

  return <GeoNewsFeed posts={posts} initialPage={current} key={current} />;
}
