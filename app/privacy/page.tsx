import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Clock3,
  Database,
  ExternalLink,
  Globe2,
  LockKeyhole,
  Mail,
  ShieldCheck,
  UserRoundCheck,
} from "lucide-react";
import { Breadcrumb } from "@/components/breadcrumb";
import "./privacy.css";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Learn how Seppes Door Industry (Suzhou) Co., Ltd. collects, uses, protects and manages personal information submitted through the SEPPES website.",
  alternates: { canonical: "/privacy" },
  robots: { index: true, follow: true },
};

const sections = [
  ["information", "Information we collect"],
  ["use", "How we use information"],
  ["legal-bases", "Legal bases"],
  ["sharing", "Sharing and transfers"],
  ["retention", "Retention and security"],
  ["rights", "Your privacy rights"],
  ["cookies", "Cookies and third parties"],
  ["contact", "Contact us"],
];

export default function PrivacyPage() {
  return (
    <div className="privacy-page">
      <section className="privacy-hero">
        <div className="privacy-hero__grid" aria-hidden="true" />
        <div className="container privacy-hero__inner">
          <div className="privacy-hero__copy">
            <span className="privacy-kicker">Legal &amp; privacy</span>
            <h1>Your information,<br />handled responsibly.</h1>
            <p>
              This policy explains what information SEPPES receives when you visit our website or contact our team, why we use it, and the choices available to you.
            </p>
            <div className="privacy-hero__meta">
              <span><Clock3 /> Last updated: August 14, 2026</span>
              <span><Globe2 /> Applies to seppesde.com</span>
            </div>
          </div>
          <aside className="privacy-hero__promise" aria-label="Privacy commitments">
            <ShieldCheck />
            <span>Our commitment</span>
            <strong>We do not sell your personal information.</strong>
            <p>We collect only the information needed to answer inquiries, support projects, operate the website and meet legal obligations.</p>
          </aside>
        </div>
      </section>

      <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Privacy Policy" }]} />

      <section className="privacy-summary" aria-label="Privacy summary">
        <div className="container privacy-summary__grid">
          <article><Database /><div><strong>Limited collection</strong><span>Contact, project and basic technical information</span></div></article>
          <article><UserRoundCheck /><div><strong>Purpose-led use</strong><span>Inquiries, projects, support and requested updates</span></div></article>
          <article><LockKeyhole /><div><strong>Practical safeguards</strong><span>Reasonable organizational and technical controls</span></div></article>
        </div>
      </section>

      <section className="privacy-content">
        <div className="container privacy-layout">
          <aside className="privacy-nav">
            <span>On this page</span>
            <nav aria-label="Privacy policy sections">
              {sections.map(([id, label], index) => <a href={`#${id}`} key={id}><b>{String(index + 1).padStart(2, "0")}</b>{label}</a>)}
            </nav>
            <div className="privacy-nav__help">
              <Mail />
              <strong>Privacy question?</strong>
              <a href="mailto:huijia@seppes.com.cn">huijia@seppes.com.cn</a>
            </div>
          </aside>

          <article className="privacy-policy">
            <div className="privacy-intro">
              <p>
                Seppes Door Industry (Suzhou) Co., Ltd. ("SEPPES", "we", "us" or "our") is the controller of personal information covered by this policy. It applies when you use this website, ask for a quotation, request industry updates, or communicate with us about our products and services.
              </p>
              <p>This policy is intended to provide clear information about our current website practices. It does not apply to websites or services operated independently by third parties.</p>
            </div>

            <section id="information" className="privacy-section">
              <span className="privacy-section__number">01</span>
              <h2>Information we collect</h2>
              <p>Depending on how you interact with us, we may receive:</p>
              <ul>
                <li><b>Contact and business information:</b> your name, company, work email, telephone or WhatsApp number, country or region.</li>
                <li><b>Project information:</b> product interests, opening dimensions, quantity, application, project location, drawings, photographs and message content you choose to provide.</li>
                <li><b>Communications:</b> correspondence and records of follow-up through email, telephone, WhatsApp or other channels you select.</li>
                <li><b>Technical information:</b> IP address, browser and device information, access time, requested pages and basic server security logs that may be generated when you visit the website.</li>
                <li><b>Update requests:</b> the work email address you use to ask for SEPPES industry updates.</li>
              </ul>
              <div className="privacy-note"><CheckCircle2 /><p><b>How our forms work:</b> the inquiry and update forms on this website prepare a message in your own email application. The form is not submitted to or stored by our website before you choose to send that email.</p></div>
              <p>Please do not send passwords, payment-card data, government identification numbers, health information or other unnecessary sensitive information through an inquiry.</p>
            </section>

            <section id="use" className="privacy-section">
              <span className="privacy-section__number">02</span>
              <h2>How we use information</h2>
              <p>We use personal information only where relevant to:</p>
              <ul>
                <li>review and respond to inquiries, recommend products and prepare quotations;</li>
                <li>communicate about specifications, drawings, manufacturing, delivery, installation and after-sales support;</li>
                <li>manage customer, distributor, contractor and supplier relationships;</li>
                <li>send product or industry updates you have requested, with an option to unsubscribe;</li>
                <li>operate, secure, troubleshoot and improve the website;</li>
                <li>prevent misuse, protect our rights and comply with applicable laws.</li>
              </ul>
              <p>We do not use website inquiry information for solely automated decisions that produce legal or similarly significant effects.</p>
            </section>

            <section id="legal-bases" className="privacy-section">
              <span className="privacy-section__number">03</span>
              <h2>Legal bases for processing</h2>
              <p>Where laws such as the UK or EU GDPR require a legal basis, we rely on one or more of the following:</p>
              <div className="privacy-basis-grid">
                <div><strong>Your request or a contract</strong><p>To answer a quotation request, take steps before entering a contract, or perform an agreement.</p></div>
                <div><strong>Legitimate interests</strong><p>To operate securely, communicate with business contacts and improve our B2B services, balanced against your rights.</p></div>
                <div><strong>Your consent</strong><p>For requested marketing communications or another purpose where consent is required. You may withdraw it at any time.</p></div>
                <div><strong>Legal obligations</strong><p>To retain required business records and respond to lawful requests from competent authorities.</p></div>
              </div>
            </section>

            <section id="sharing" className="privacy-section">
              <span className="privacy-section__number">04</span>
              <h2>Sharing and international transfers</h2>
              <p>We do not sell or rent personal information. We may share only the information reasonably necessary with:</p>
              <ul>
                <li>SEPPES personnel involved in sales, engineering, manufacturing, logistics and support;</li>
                <li>service providers supporting website hosting, business email, communications, IT security and document storage;</li>
                <li>distributors, contractors, logistics providers or other project partners when needed to evaluate or fulfil your request;</li>
                <li>professional advisers, regulators, courts or authorities where disclosure is legally required or necessary to protect legitimate rights.</li>
              </ul>
              <p>SEPPES is based in China. If you contact us from another country, your information will normally be transferred to and processed in China. Other recipients may also be located outside your country. Where required, we use appropriate contractual or other safeguards for international transfers.</p>
            </section>

            <section id="retention" className="privacy-section">
              <span className="privacy-section__number">05</span>
              <h2>Retention and security</h2>
              <p>We keep personal information only for as long as reasonably necessary for the purpose collected:</p>
              <ul>
                <li>ordinary inquiries are generally retained for up to three years after the last meaningful contact;</li>
                <li>customer, order and transaction records may be kept longer where needed for contractual, tax, accounting, warranty, dispute or legal purposes;</li>
                <li>marketing contact information is kept until you unsubscribe, withdraw consent or we determine it is no longer current;</li>
                <li>security logs are retained for a limited period appropriate to website protection and troubleshooting.</li>
              </ul>
              <p>We use reasonable administrative, technical and organizational measures designed to protect information against unauthorized access, alteration, loss or disclosure. No internet transmission or storage system can be guaranteed completely secure.</p>
            </section>

            <section id="rights" className="privacy-section">
              <span className="privacy-section__number">06</span>
              <h2>Your privacy rights</h2>
              <p>Depending on the law that applies to you, you may have the right to request access, correction, deletion, restriction, objection or portability; withdraw consent; and complain to your local data protection authority.</p>
              <p>To make a request, email <a href="mailto:huijia@seppes.com.cn">huijia@seppes.com.cn</a> and describe what you need. We may ask for information necessary to verify your identity. We will respond within the period required by applicable law and will explain if a lawful exception applies.</p>
              <p>You can stop requested marketing emails at any time by replying with “unsubscribe” or contacting us at the address above.</p>
            </section>

            <section id="cookies" className="privacy-section">
              <span className="privacy-section__number">07</span>
              <h2>Cookies, links and third-party services</h2>
              <p>At the date shown above, this website does not use advertising pixels or third-party audience analytics. The site or hosting infrastructure may use strictly necessary technologies and short-lived technical data to deliver pages, maintain security and provide requested functions.</p>
              <p>Our contact page includes an embedded Google Map. Loading it may allow Google to receive technical information such as your IP address and device details under its own policies. Links to WhatsApp, Facebook, YouTube and TikTok take you to services operated independently by those companies. Their handling of information is governed by their own privacy notices.</p>
              <p>If we later add non-essential analytics, advertising cookies or similar tracking, we will update this policy and provide consent controls where required.</p>
              <div className="privacy-external-links">
                <a href="https://policies.google.com/privacy" target="_blank" rel="noreferrer">Google privacy policy <ExternalLink /></a>
                <a href="https://www.whatsapp.com/legal/privacy-policy" target="_blank" rel="noreferrer">WhatsApp privacy policy <ExternalLink /></a>
              </div>
            </section>

            <section className="privacy-section">
              <span className="privacy-section__number">08</span>
              <h2>Children and policy updates</h2>
              <p>Our website and products are intended for business users and are not directed to children. We do not knowingly collect personal information from children. If you believe a child has provided information to us, please contact us so we can review and delete it where appropriate.</p>
              <p>We may update this policy to reflect changes in our practices, services or legal obligations. The revised version will be posted here with a new “Last updated” date. We will provide additional notice where required for a material change.</p>
            </section>

            <section id="contact" className="privacy-contact">
              <div>
                <span className="privacy-kicker">Contact the data controller</span>
                <h2>Questions or privacy requests</h2>
                <p>Contact us if you would like to exercise a privacy right or ask how your information is handled.</p>
              </div>
              <dl>
                <div><dt>Company</dt><dd>Seppes Door Industry (Suzhou) Co., Ltd.</dd></div>
                <div><dt>Email</dt><dd><a href="mailto:huijia@seppes.com.cn">huijia@seppes.com.cn</a></dd></div>
                <div><dt>Telephone</dt><dd><a href="tel:+8617798578460">+86 177 9857 8460</a></dd></div>
                <div><dt>Address</dt><dd>Building 4, No. 59 Zoumatang Road, Mudu Town, Wuzhong District, Suzhou, Jiangsu, China</dd></div>
              </dl>
              <Link className="privacy-contact__button" href="/contact">View all contact options <ArrowRight /></Link>
            </section>
          </article>
        </div>
      </section>
    </div>
  );
}
