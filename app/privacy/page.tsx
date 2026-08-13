import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How SEPPES handles information submitted through this industrial door website.",
};

export default function PrivacyPage() {
  return <div className="page-hero page-hero-light"><div className="container">
    <span className="eyebrow">Privacy</span>
    <h1>Privacy Policy</h1>
    <p>Information you send by email, telephone or WhatsApp is used only to review and respond to your inquiry, prepare project communication and provide requested support. We do not sell inquiry information. Please avoid sending passwords, payment details or other unnecessary sensitive information. To request access, correction or deletion of inquiry information, email huijia@seppes.com.cn.</p>
  </div></div>;
}
