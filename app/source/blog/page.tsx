import type { Metadata } from "next";
import { GeoNewsFeed } from "./geo-news-feed";

export const metadata: Metadata = {
  title: "Industrial Door Blog: Product News & Solutions",
  description: "SEPPES product news, industrial door solutions, project stories and practical buying guides for global facilities.",
  alternates: { canonical: "/source/blog" },
};

export default function GeoNewsPage() {
  return <GeoNewsFeed />;
}
