import Image from "next/image";
import Link from "next/link";
import { Breadcrumb } from "@/components/breadcrumb";
import {
  ArrowRight,
  Building2,
  FileImage,
  Mail,
  MapPin,
  MessageCircle,
  PackageCheck,
  Phone,
  Ruler,
  Settings2,
  Truck,
} from "lucide-react";

export const metadata = {
  title: "Discuss Your Industrial Door Project",
  description: "Contact SEPPES about industrial doors and loading dock equipment. Share opening dimensions, project location and site requirements for review.",
  alternates: { canonical: "/contact" },
};

const whatsapp = "https://wa.me/8617798578460?text=Hello%2C%20I%20would%20like%20to%20discuss%20an%20industrial%20door%20project%20with%20SEPPES.";

const projectInfo = [
  { icon: Ruler, title: "Opening Dimensions", text: "Provide the clear opening width and height, available headroom and side room, plus any surrounding structural constraints." },
  { icon: Building2, title: "Building & Application", text: "Tell us whether the opening serves a factory, warehouse, cleanroom, cold store, logistics center or another industrial facility." },
  { icon: Settings2, title: "Operating Requirements", text: "Share traffic frequency, opening speed, sealing, insulation, wind resistance, safety and control requirements." },
  { icon: Truck, title: "Quantity & Project Location", text: "Include the required quantity and destination country or region so we can review the correct project and delivery context." },
  { icon: FileImage, title: "Drawings & Site Photos", text: "Attach architectural drawings, opening photographs and any available specifications that can support the technical review." },
  { icon: PackageCheck, title: "Supply Scope & Timing", text: "Let us know whether you need complete doors, controls, loading dock equipment, installation support and your desired schedule." },
];

export default function ContactPage() {
  return <div className="contact-reference">
    <header className="contact-hero">
      <Image src="/images/hero-industrial-door.jpg" alt="SEPPES industrial door project consultation" fill priority sizes="100vw" />
      <div className="contact-hero__shade" />
      <div className="container contact-hero__inner"><div className="contact-hero__copy">
        <p className="contact-kicker">PROJECT INQUIRY</p>
        <h1>Discuss Your Industrial Door Project</h1>
        <p>Send your opening dimensions, application, project location and any drawings or site photographs already available. SEPPES will review the conditions and help clarify the suitable product direction and supply scope.</p>
        <div className="contact-actions"><a className="contact-button primary" href="#inquiry">Send an Inquiry <ArrowRight size={18} /></a><a className="contact-button secondary" href={whatsapp} target="_blank" rel="noreferrer"><MessageCircle size={18} /> Contact Us on WhatsApp</a></div>
      </div></div>
    </header>
    <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Contact" }]} />

    <section className="contact-section"><div className="container">
      <div className="contact-heading"><p className="contact-kicker blue">DIRECT CONTACT</p><h2>Contact SEPPES About Your Project</h2><p>Choose the contact method that best matches the information you already have. Send specifications by email, share site photos through WhatsApp, or speak directly with our project team.</p></div>
      <div className="contact-card-grid direct">
        <article className="contact-card"><span className="contact-icon"><Mail /></span><h3>Email Our Sales Team</h3><p>Send project information, drawings, specifications or quotation requirements by email.</p><a href="mailto:huijia@seppes.com.cn">huijia@seppes.com.cn <ArrowRight /></a></article>
        <article className="contact-card"><span className="contact-icon"><MessageCircle /></span><h3>Discuss on WhatsApp</h3><p>Share opening photographs, dimensions and basic project requirements with our team.</p><a href={whatsapp} target="_blank" rel="noreferrer">Chat on WhatsApp <ArrowRight /></a></article>
        <article className="contact-card"><span className="contact-icon"><Phone /></span><h3>Call Our Project Team</h3><p>Talk through the opening conditions, required supply scope and next steps for review.</p><a href="tel:+8617798578460">+86 177 9857 8460 <ArrowRight /></a></article>
        <article className="contact-card"><span className="contact-icon"><MapPin /></span><h3>SEPPES Manufacturing Location</h3><p><strong>Seppes Door Industry (Suzhou) Co., Ltd.</strong></p><p>Suzhou, Jiangsu Province, China</p></article>
      </div>
    </div></section>

    <section className="contact-section tint"><div className="container">
      <div className="contact-heading"><p className="contact-kicker blue">PREPARE YOUR PROJECT INFORMATION</p><h2>What Helps Us Review Your Inquiry?</h2><p>You do not need every technical decision confirmed before contacting us. Share what is available and identify the items that still require project review.</p></div>
      <div className="contact-card-grid information">{projectInfo.map(({ icon: Icon, title, text }) => <article className="contact-card" key={title}><span className="contact-icon"><Icon /></span><h3>{title}</h3><p>{text}</p></article>)}</div>
    </div></section>

    <section className="contact-section process"><div className="container contact-process">
      <div className="contact-heading"><p className="contact-kicker blue">WHAT HAPPENS NEXT</p><h2>A Clear Path From Inquiry to Proposal</h2><p>Our team reviews the project in practical stages, so the recommendation and quotation are based on the real opening conditions.</p></div>
      <ol>{[
        ["01", "Share the Project Basics", "Send the opening size, application, quantity, location and the information already available."],
        ["02", "Review the Site Conditions", "We review traffic, structure, sealing, safety, controls and the requested supply scope."],
        ["03", "Clarify the Product Direction", "We confirm the suitable door type, configuration and any additional technical information needed."],
        ["04", "Prepare the Proposal", "Once the scope is clear, we prepare the technical solution and quotation for your confirmation."],
      ].map(([num, title, text]) => <li key={num}><span>{num}</span><h3>{title}</h3><p>{text}</p></li>)}</ol>
    </div></section>

    <section className="contact-section tint"><div className="container contact-company">
      <div className="contact-company__heading"><p className="contact-kicker blue">COMPANY CONTACT DETAILS</p><h2>Visit or Contact SEPPES</h2><p><strong>Seppes Door Industry (Suzhou) Co., Ltd.</strong> supports project communication, technical drawings, quotation requirements and follow-up for global industrial door projects.</p></div>
      <div className="contact-company__content">
        <div className="contact-company__map">
          <iframe title="SEPPES manufacturing location on Google Maps" src="https://www.google.com/maps?q=%E8%8B%8F%E5%B7%9E%E5%B8%82%E5%90%B4%E4%B8%AD%E5%8C%BA%E6%9C%A8%E6%B8%8E%E9%95%87%E8%B5%B0%E9%A9%AC%E5%A1%98%E8%B7%AF59%E5%8F%B74%E5%B9%A2&output=embed" loading="lazy" allowFullScreen referrerPolicy="no-referrer-when-downgrade" />
        </div>
        <div className="contact-company__panel"><h3>Project Contact</h3><dl><div><dt>Email</dt><dd><a href="mailto:huijia@seppes.com.cn">huijia@seppes.com.cn</a></dd></div><div><dt>Phone / WhatsApp</dt><dd><a href="tel:+8617798578460">+86 177 9857 8460</a></dd></div><div><dt>Address</dt><dd>4 Building, No. 59 Zoumatang Road, Mudu Town, Wuzhong District, Suzhou, China<br />苏州市吴中区木渎镇走马塘路59号4幢</dd></div><div><dt>Response time</dt><dd>Within one business day</dd></div></dl></div>
      </div>
    </div></section>
  </div>;
}
