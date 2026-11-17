import type { Metadata } from "next";
import "./globals.css";
import "./fonts.css";
import "./refinements.css";
import "./reference-redesign.css";
import "./reference-match.css";
import "./inquiry-enhancements.css";
import "./logo-form-fixes.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { BackToTop } from "@/components/back-to-top";
import { FloatingContact } from "@/components/floating-contact";

const siteUrl = "https://www.seppesde.com";

const siteSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: "SEPPES Industrial Doors",
      inLanguage: "en",
      publisher: { "@id": `${siteUrl}/#organization` },
    },
    {
      "@type": "Organization",
      "@id": `${siteUrl}/#organization`,
      name: "Seppes Door Industry (Suzhou) Co., Ltd.",
      alternateName: "SEPPES",
      url: siteUrl,
      logo: `${siteUrl}/seppes-logo-cropped.png`,
      foundingDate: "2011",
      email: "huijia@seppes.com.cn",
      telephone: "+86 177 9857 8460",
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "sales",
        email: "huijia@seppes.com.cn",
        telephone: "+86 177 9857 8460",
        availableLanguage: ["English", "Chinese"],
      },
      address: {
        "@type": "PostalAddress",
        streetAddress: "Building 4, No. 59 Zoumatang Road, Mudu Town, Wuzhong District",
        addressLocality: "Suzhou",
        addressRegion: "Jiangsu",
        addressCountry: "CN",
      },
      sameAs: [
        "https://www.youtube.com/@%E7%8E%8B%E6%9D%BE-o4j",
        "https://www.tiktok.com/@seppes_george",
        "https://www.facebook.com/profile.php?id=61580385533175",
      ],
    },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: "SEPPES | Industrial Door Solutions", template: "%s | SEPPES" },
  description: "Industrial doors and loading dock solutions for global manufacturing, logistics and cold-chain projects.",
  applicationName: "SEPPES Industrial Doors",
  openGraph: {
    url: "/",
    siteName: "SEPPES Industrial Doors",
    title: "SEPPES | Industrial Door Systems for Modern Facilities",
    description: "Industrial doors and loading dock solutions for global manufacturing, logistics and cold-chain projects.",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "SEPPES industrial door systems" }],
  },
  twitter: { card: "summary_large_image", images: ["/og.png"] },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" data-scroll-behavior="smooth"><body><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(siteSchema) }} /><Header /><main>{children}</main><Footer /><BackToTop /><FloatingContact /></body></html>;
}
