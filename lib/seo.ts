import type { Metadata } from "next";

export const SITE_URL = "https://www.seppesde.com";
export const SITE_NAME = "SEPPES Industrial Doors";

type PageMetadataOptions = {
  title: string;
  description: string;
  path: string;
  image?: string;
  keywords?: string[];
  robots?: Metadata["robots"];
};

export function createPageMetadata({
  title,
  description,
  path,
  image = "/og.png",
  keywords,
  robots,
}: PageMetadataOptions): Metadata {
  return {
    title,
    description,
    keywords,
    robots,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      url: path,
      siteName: SITE_NAME,
      title,
      description,
      images: [{ url: image, alt: title }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
}
