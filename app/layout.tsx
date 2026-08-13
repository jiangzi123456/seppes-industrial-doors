import type { Metadata } from "next";
import "./globals.css";
import "./fonts.css";
import "./refinements.css";
import "./reference-redesign.css";
import "./reference-match.css";
import "./inquiry-enhancements.css";
import "./logo-form-fixes.css";
import "./product-page.css";
import "./inner-pages-theme.css";
import "./contact/contact.css";
import "./source/blog/blog.css";
import "./solutions/solutions.css";
import "./about/about.css";
import "./project-support/project-support.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { HomeInquiryForm } from "@/components/home-inquiry-form";
import { BackToTop } from "@/components/back-to-top";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL
  || (process.env.VERCEL_PROJECT_PRODUCTION_URL ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}` : undefined)
  || (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : undefined)
  || "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: "SEPPES | Industrial Door Solutions", template: "%s | SEPPES" },
  description: "Industrial doors and loading dock solutions for global manufacturing, logistics and cold-chain projects.",
  applicationName: "SEPPES Industrial Doors",
  openGraph: {
    title: "SEPPES | Industrial Door Systems for Modern Facilities",
    description: "Industrial doors and loading dock solutions for global manufacturing, logistics and cold-chain projects.",
    images: [{ url: "/og.png", width: 1536, height: 1024, alt: "SEPPES industrial door systems" }],
  },
  twitter: { card: "summary_large_image", images: ["/og.png"] },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body><Header /><main>{children}<HomeInquiryForm /></main><Footer /><BackToTop /></body></html>;
}
