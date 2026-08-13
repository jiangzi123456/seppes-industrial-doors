import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BadgeCheck, Factory, Globe2, ShieldCheck, Wrench } from "lucide-react";
import { Breadcrumb } from "@/components/breadcrumb";

export const metadata = {
  title: "About SEPPES: Industrial Door Manufacturer in China",
  description: "Meet SEPPES, a direct industrial door manufacturer in Suzhou with a 20,000+ m² factory. Explore our history, production capability, founder and global project support.",
  keywords: ["industrial door manufacturer", "industrial door factory China", "high speed door manufacturer", "loading dock equipment manufacturer", "SEPPES factory"],
  alternates: { canonical: "/about" },
};

const milestones = [
  { year: "2011", title: "SEPPES was founded", text: "We began in Suzhou with one focus: making industrial entrance systems more reliable and easier to specify." },
  { year: "2016", title: "Factory capability expanded", text: "Dedicated production, testing and quality-control processes were established for industrial doors and dock equipment." },
  { year: "2019", title: "Global project support", text: "Our products entered more overseas markets, backed by English documentation, export packing and remote installation guidance." },
  { year: "2022", title: "A complete entrance portfolio", text: "High-speed doors, sectional doors, hangar doors and loading dock systems formed one coordinated solution platform." },
  { year: "2025", title: "Serving 80+ countries", text: "SEPPES continued to grow as a trusted manufacturing partner for factories, logistics hubs and clean facilities worldwide." },
];

const strengths = [
  { icon: Factory, number: "20,000+ m²", label: "Manufacturing base", text: "Purpose-built production space for door systems, controls and loading equipment." },
  { icon: Globe2, number: "80+", label: "Countries & regions", text: "Export-ready support for international contractors, distributors and end users." },
  { icon: BadgeCheck, number: "50+", label: "Product certifications", text: "Products developed around recognized safety, quality and performance requirements." },
  { icon: Wrench, number: "14+ years", label: "Industry experience", text: "Application knowledge built through demanding industrial projects since 2011." },
];

const factoryProof = [
  ["02", "Domestic customer visits", "Transparent tours and face-to-face technical exchange"],
  ["03", "International factory audits", "Overseas partners verify our process and capacity"],
  ["05", "Management coordination", "Engineering, production and sales align on every project"],
  ["07", "Experienced manufacturing team", "A stable team focused on industrial entrance systems"],
  ["08", "Suzhou manufacturing campus", "A real production base—not a trading-office operation"],
  ["09", "Intelligent production equipment", "Modern machinery supports repeatable component quality"],
  ["10", "Door assembly workshop", "Products are assembled and checked before export packing"],
  ["12", "Global export loading", "Protected packing and container loading for international delivery"],
];

const aboutFaqs = [
  ["Is SEPPES an industrial door manufacturer or a trading company?", "SEPPES is a direct industrial door manufacturer in Suzhou, China. Our team handles application engineering, production, assembly, quality inspection, function testing, export packing and after-sales technical support."],
  ["What industrial door products does SEPPES manufacture?", "Our main range includes high-speed roll-up doors, high-speed spiral doors, industrial sectional doors, hangar doors, cold-storage doors, dock levelers, dock shelters and related loading bay equipment."],
  ["Can international customers visit or audit the factory?", "Yes. We welcome customer visits, distributor evaluations and third-party factory audits. Remote video inspections and pre-shipment documentation can also be arranged for overseas projects."],
  ["How does SEPPES support overseas installation?", "We provide confirmed technical drawings, installation manuals, wiring information, commissioning guidance and responsive remote support. On-site support can be discussed according to the project location and scope."],
];

export default function AboutPage() {
  return <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
      "@context": "https://schema.org", "@graph": [
        { "@type": "Organization", name: "SEPPES", foundingDate: "2011", description: "Industrial door and loading dock equipment manufacturer in Suzhou, China.", url: "https://seppesaccess.com/about/", logo: "https://seppesaccess.com/seppes-logo.png", address: { "@type": "PostalAddress", addressLocality: "Suzhou", addressRegion: "Jiangsu", addressCountry: "CN" }, founder: { "@type": "Person", name: "Yuanjia Yang", jobTitle: "Founder" }, areaServed: "Worldwide", knowsAbout: ["industrial doors", "high speed doors", "sectional doors", "loading dock equipment"] },
        { "@type": "FAQPage", mainEntity: aboutFaqs.map(([question, answer]) => ({ "@type": "Question", name: question, acceptedAnswer: { "@type": "Answer", text: answer } })) }
      ]
    }) }} />
    <section className="about-hero">
      <Image src="/images/factory-building.jpg" alt="SEPPES industrial door manufacturing facility" fill priority sizes="100vw" />
      <div className="about-hero-shade" />
      <div className="container about-hero-content">
        <span className="about-kicker">ABOUT SEPPES</span>
        <h1>Built by a real factory.<br />Trusted beyond borders.</h1>
        <p>We engineer and manufacture industrial entrance systems that keep modern facilities moving—safely, efficiently and with confidence.</p>
        <div className="about-hero-actions">
          <Link className="about-button about-button-primary" href="/contact">Discuss your project <ArrowRight size={18} /></Link>
          <a className="about-button about-button-ghost" href="#factory">Explore our factory</a>
        </div>
      </div>
      <div className="about-hero-proof"><span>EST. 2011</span><span>SUZHOU · CHINA</span><span>GLOBAL DELIVERY</span></div>
    </section>

    <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "About Us" }]} />

    <section className="about-intro">
      <div className="container about-intro-grid">
        <div><span className="about-kicker dark">WHO WE ARE</span><h2>We do more than sell doors.<br />We manufacture certainty.</h2></div>
        <div className="about-intro-copy"><p>SEPPES is an industrial door and loading dock equipment manufacturer based in Suzhou, China. Since 2011, we have helped manufacturing, logistics, food, pharmaceutical and cold-chain facilities create safer and more efficient access.</p><p>From application review and technical drawings to production, testing, packing and after-sales support, our team keeps every critical step under one roof.</p></div>
      </div>
    </section>

    <section className="about-strengths" aria-label="Company strengths">
      <div className="container about-strength-grid">{strengths.map(({ icon: Icon, number, label, text }) => <article key={label}><Icon aria-hidden="true" /><strong>{number}</strong><h3>{label}</h3><p>{text}</p></article>)}</div>
    </section>

    <section className="about-history" id="history">
      <div className="container">
        <div className="about-section-heading"><div><span className="about-kicker dark">OUR JOURNEY</span><h2>Progress, built one project at a time.</h2></div><p>Our growth has always followed the same principle: listen closely, engineer responsibly and manufacture consistently.</p></div>
        <div className="timeline" role="list">{milestones.map((item, index) => <article className="timeline-item" role="listitem" key={item.year}><div className="timeline-year">{item.year}</div><div className="timeline-dot"><span>{String(index + 1).padStart(2, "0")}</span></div><div className="timeline-card"><h3>{item.title}</h3><p>{item.text}</p></div></article>)}</div>
      </div>
    </section>

    <section className="about-factory" id="factory">
      <div className="container">
        <div className="about-section-heading light"><div><span className="about-kicker">FACTORY STRENGTH</span><h2>See where reliable doors begin.</h2></div><p>In-house manufacturing gives us direct control over materials, workmanship, testing and delivery schedules.</p></div>
        <div className="factory-gallery">
          <figure className="factory-main"><Image src="/images/factory-building.jpg" alt="Exterior of the SEPPES manufacturing facility" fill sizes="(max-width: 800px) 100vw, 66vw" /><figcaption><span>01</span><div><strong>20,000+ m² manufacturing base</strong><small>Suzhou, Jiangsu, China</small></div></figcaption></figure>
          <figure><Image src="/images/factory-doors.jpg" alt="Industrial doors manufactured by SEPPES" fill sizes="(max-width: 800px) 100vw, 34vw" /><figcaption><span>02</span><div><strong>Controlled production</strong><small>Consistent processes at every stage</small></div></figcaption></figure>
          <figure><Image src="/images/high-speed-roll-up-door-product.jpg" alt="SEPPES high speed door product" fill sizes="(max-width: 800px) 100vw, 34vw" /><figcaption><span>03</span><div><strong>Application-led engineering</strong><small>Built to fit the opening and operation</small></div></figcaption></figure>
        </div>
        <div className="factory-checks"><span><ShieldCheck /> Incoming material inspection</span><span><ShieldCheck /> Assembly quality control</span><span><ShieldCheck /> Pre-shipment function test</span><span><ShieldCheck /> Export-standard packaging</span></div>
      </div>
    </section>

    <section className="factory-evidence-section">
      <div className="container">
        <div className="factory-evidence">
          <div className="factory-evidence-intro"><span className="about-kicker">MANUFACTURING IN ACTION</span><h3>A factory you can verify.</h3><p>Customers choose SEPPES because they can see the people, equipment and processes behind every industrial door. From factory audits and technical meetings to assembly, control-system testing and container loading, our operation is open, traceable and built for long-term cooperation.</p></div>
          <div className="factory-proof-grid">{factoryProof.map(([number, title, text]) => <article key={number}><div className={`factory-proof-photo factory-proof-photo-${Number(number)}`} role="img" aria-label={title} /><div><span>{number}</span><h4>{title}</h4><p>{text}</p></div></article>)}</div>
        </div>
      </div>
    </section>

    <section className="founder-section">
      <div className="founder-portrait"><Image src="/images/seppes-founder.jpg" alt="Yuanjia Yang, founder of SEPPES" fill sizes="(max-width: 900px) 100vw, 48vw" /></div>
      <div className="founder-copy"><span className="about-kicker">FOUNDER'S STORY</span><p className="founder-quote">“A dependable industrial door is not simply a product. It is our promise to the people and businesses operating behind it.”</p><div className="founder-name"><strong>Yuanjia Yang</strong><span>Founder of SEPPES</span></div><p>Founded in 2011, SEPPES grew from a focused industrial door team into a global brand serving customers across more than 80 countries and regions. Yuanjia Yang has kept the company anchored to a simple belief: strong products come from understanding real operating conditions, respecting manufacturing details and supporting customers for the long term.</p><Link className="founder-link" href="/contact">Connect with our team <ArrowRight size={18} /></Link></div>
    </section>

    <section className="about-seo-section">
      <div className="container about-seo-grid"><div><span className="about-kicker dark">INDUSTRIAL DOOR MANUFACTURER</span><h2>Factory-direct support for global industrial projects.</h2><p>Choosing an industrial door manufacturer is about more than comparing a product specification. The right partner must understand traffic frequency, opening dimensions, wind load, sealing, temperature control, safety requirements, automation interfaces and local installation conditions.</p><p>SEPPES combines application knowledge with direct manufacturing control. Our engineers help customers define the right door type and control logic, while our production team turns approved drawings into finished industrial entrance systems. This connected process reduces communication gaps and helps contractors, distributors and facility owners manage quality, schedule and installation more confidently.</p><Link className="founder-link seo-link" href="/products">Explore our industrial door range <ArrowRight size={18} /></Link></div><div className="about-capabilities"><h3>What our factory can support</h3><ul><li>Custom opening sizes and operating requirements</li><li>High-frequency and high-speed access applications</li><li>Cleanroom, food, pharmaceutical and cold-chain environments</li><li>Exterior doors requiring wind resistance and security</li><li>Loading dock equipment for warehouse efficiency</li><li>Export documentation, packing and remote installation support</li></ul></div></div>
    </section>

    <section className="about-faq"><div className="container"><div className="about-section-heading"><div><span className="about-kicker dark">FACTORY FAQ</span><h2>Questions about working directly with SEPPES.</h2></div><p>Clear answers for overseas buyers, contractors and distribution partners evaluating an industrial door factory.</p></div><div className="about-faq-list">{aboutFaqs.map(([question, answer], index) => <details key={question} open={index === 0}><summary>{question}<span>+</span></summary><p>{answer}</p></details>)}</div></div></section>

    <section className="about-final-cta"><div className="container"><span className="about-kicker">START WITH THE MANUFACTURER</span><h2>Bring us your opening.<br />We’ll bring the engineering.</h2><p>Share your door size, application and project location. Our engineers will recommend a practical solution within one business day.</p><Link className="about-button about-button-primary" href="/contact">Request a factory-direct proposal <ArrowRight size={18} /></Link></div></section>
  </>;
}
