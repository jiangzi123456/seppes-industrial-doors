import type { Metadata } from "next";
import { GeoNewsFeed } from "./geo-news-feed";
import { blogPosts } from "@/data/blog-posts";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Industrial Door Blog: Product News & Solutions",
  description: "SEPPES product news, industrial door solutions, project stories and practical buying guides for global facilities.",
  path: "/source/blog",
  image: "/images/blog/cleanroom-zipper-door-yellow-window-crop.webp",
});

export default function GeoNewsPage() {
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

  return <GeoNewsFeed posts={posts} />;
}
