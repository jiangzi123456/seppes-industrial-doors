import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight, Bot, Check, Factory, FileCheck2, Globe2, Headphones,
  PackageCheck, PenTool, ShieldCheck, Snowflake, Sparkles, Truck, Utensils,
} from "lucide-react";
import { Breadcrumb } from "@/components/breadcrumb";
import { ClientLogos } from "@/components/client-logos";

export const metadata = {
  title: "Industrial Door Project Case Studies",
  description: "Explore SEPPES industrial door project applications across manufacturing, logistics, cold chain, clean facilities and automated production.",
  alternates: { canonical: "/project-support" },
};

const sectors = [
  { icon: Factory, count: "12+", title: "Manufacturing", text: "High-cycle access for production lines, workshops and equipment zones." },
  { icon: Truck, count: "18+", title: "Logistics & Warehousing", text: "Coordinated door and loading-bay packages for busy distribution sites." },
  { icon: Snowflake, count: "10+", title: "Cold Chain", text: "Fast separation designed around temperature control and daily traffic." },
  { icon: Sparkles, count: "15+", title: "Clean Facilities", text: "Sealed, controlled openings for pharmaceutical and precision spaces." },
  { icon: Utensils, count: "16+", title: "Food & Beverage", text: "Hygienic access solutions for processing, packing and storage zones." },
  { icon: Bot, count: "9+", title: "Smart Automation", text: "Doors coordinated with AGVs, conveyors and production control signals." },
];

const featured = [
  { region: "Europe", sector: "Automotive", title: "High-cycle access for a precision production line", image: "/images/hero-industrial-door.jpg", size: "lead", tags: ["1.5 m/s opening", "Radar activation", "Signal interface"] },
  { region: "Southeast Asia", sector: "Logistics", title: "A coordinated 24-bay loading system", image: "/images/logistics-door.jpg", size: "", tags: ["24 loading bays", "Unified drawings"] },
  { region: "Middle East", sector: "Food & Clean", title: "Controlled separation for hygienic production", image: "/images/cleanroom-door.jpg", size: "", tags: ["Interlock ready", "Easy-clean finish"] },
];

const library = [
  { title: "Rapid doors for an automated assembly workshop", sector: "Smart Manufacturing", region: "Germany", image: "/images/factory-doors.jpg" },
  { title: "Exterior spiral doors for a regional logistics center", sector: "Logistics", region: "Poland", image: "/images/logistics-door.jpg" },
  { title: "Sealed high-speed doors for a clean production suite", sector: "Pharmaceutical", region: "Malaysia", image: "/images/cleanroom-door.jpg" },
  { title: "Cold-room access for a food distribution facility", sector: "Cold Chain", region: "UAE", image: "/images/high-speed-roll-up-door-product.jpg" },
  { title: "Sectional door package for a manufacturing campus", sector: "Manufacturing", region: "Mexico", image: "/images/factory-building.jpg" },
  { title: "High-frequency traffic separation for a packaging line", sector: "Food & Beverage", region: "Thailand", image: "/images/hero-industrial-door.jpg" },
];

const priorities = [
  ["01", "Traffic & cycle frequency", "Vehicle type, daily cycles and required opening speed shape the operating system."],
  ["02", "Environmental separation", "Temperature, dust, hygiene, wind and pressure determine curtain and sealing choices."],
  ["03", "Safety strategy", "Photo eyes, safety edges, radar and warning devices protect every shared opening."],
  ["04", "Controls & automation", "Loops, remote signals, access control and AGV interfaces connect the door to the workflow."],
  ["05", "Structural conditions", "Opening size, headroom, side room and mounting surfaces define the installation approach."],
  ["06", "Delivery & installation", "Drawings, export packing and installation guidance keep the local handoff coordinated."],
];

export default function ProjectSupportPage() {
  return <div className="project-support-page">
    <section className="ps-hero">
      <Image src="/images/factory-doors.jpg" alt="Industrial door systems in a modern production facility" fill priority sizes="100vw" />
      <div className="ps-hero__overlay" />
      <div className="container ps-hero__content">
        <p className="ps-kicker">Industrial door project portfolio</p>
        <h1>Proven solutions.<br />Built around real sites.</h1>
        <p>Explore industrial entrance projects across manufacturing, logistics, clean facilities, cold chain and automated production—each shaped by a different operating challenge.</p>
        <div className="ps-actions"><a href="#project-library" className="ps-button ps-button--red">Explore case studies <ArrowRight size={18} /></a><Link href="/contact" className="ps-button ps-button--ghost">Discuss a similar project</Link></div>
      </div>
    </section>
    <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Project Support" }]} />

    <section className="ps-section ps-portfolio"><div className="container">
      <div className="ps-heading"><div><p className="ps-kicker ps-kicker--blue">Project portfolio</p><h2>Experience across demanding industrial environments.</h2></div><p>Every site balances traffic, safety, environmental control and installation constraints differently. Start with your application, then review the project details that matter.</p></div>
      <div className="ps-sector-grid">{sectors.map(({ icon: Icon, count, title, text }) => <a href="#project-library" key={title}><div><Icon /><span>{count} projects</span></div><h3>{title}</h3><p>{text}</p><b>View related projects <ArrowRight size={16} /></b></a>)}</div>
    </div></section>

    <section className="ps-section ps-featured"><div className="container">
      <div className="ps-heading"><div><p className="ps-kicker ps-kicker--blue">Featured projects</p><h2>Selected work from the field.</h2></div><p>Representative configurations showing how different requirements lead to different door systems, controls and support packages.</p></div>
      <div className="ps-featured-grid">{featured.map((item, index) => <article className={`ps-featured-card ${item.size ? `ps-featured-card--${item.size}` : ""}`} key={item.title}><Image src={item.image} alt={`${item.sector} industrial door project`} fill sizes={index === 0 ? "(max-width: 800px) 100vw, 66vw" : "(max-width: 800px) 100vw, 34vw"} /><div className="ps-featured-card__shade" /><div className="ps-featured-card__content"><span>{item.region} · {item.sector}</span><h3>{item.title}</h3><div>{item.tags.map(tag => <small key={tag}>{tag}</small>)}</div><Link href="/contact">Discuss this application <ArrowRight size={17} /></Link></div></article>)}</div>
    </div></section>

    <section className="ps-section ps-library" id="project-library"><div className="container">
      <div className="ps-heading"><div><p className="ps-kicker ps-kicker--blue">Case study library</p><h2>More projects. More operating contexts.</h2></div><p>Browse applications across regions and industries. Final specifications always depend on confirmed site conditions.</p></div>
      <div className="ps-library-grid">{library.map((item, index) => <article key={item.title}><div className="ps-library-card__image"><Image src={item.image} alt={item.title} fill sizes="(max-width: 760px) 100vw, 33vw" /><span>0{index + 1}</span></div><div className="ps-library-card__body"><div><span>{item.sector}</span><span>{item.region}</span></div><h3>{item.title}</h3><p>Project planning included door selection, safety strategy, technical confirmation and export-ready documentation.</p><Link href="/cases#projects">View More <ArrowRight size={16} /></Link></div></article>)}</div>
    </div></section>

    <section className="ps-section ps-priorities"><div className="container">
      <div className="ps-heading ps-heading--light"><div><p className="ps-kicker">Project requirements</p><h2>What we review before a door is approved.</h2></div><p>The door model is only one part of the solution. Reliable performance starts with the opening, the workflow and the surrounding environment.</p></div>
      <div className="ps-priority-grid">{priorities.map(([no, title, text]) => <article key={title}><span>{no}</span><Check /><h3>{title}</h3><p>{text}</p></article>)}</div>
    </div></section>

    <section className="ps-section ps-evidence"><div className="container">
      <div className="ps-heading"><div><p className="ps-kicker ps-kicker--blue">Project evidence</p><h2>A clear record at every critical handoff.</h2></div><p>Our support keeps project information visible from the first requirement review through delivery and installation.</p></div>
      <ol className="ps-evidence-grid"><li><PenTool /><span>01</span><h3>Application review</h3><p>Opening, usage, traffic and environmental conditions.</p></li><li><FileCheck2 /><span>02</span><h3>Technical confirmation</h3><p>Drawings, controls, interfaces and approved supply scope.</p></li><li><PackageCheck /><span>03</span><h3>Quality & delivery</h3><p>Function checks, protected packing and shipment documents.</p></li><li><Headphones /><span>04</span><h3>Installation support</h3><p>Manuals, wiring guidance and remote technical assistance.</p></li></ol>
    </div></section>

    <section className="ps-products"><div className="container"><div><p className="ps-kicker">Related systems</p><h2>Continue from project context to product selection.</h2></div><div className="ps-product-links"><Link href="/products/high-speed-roll-up-door"><strong>High Speed Roll Up Doors</strong><span>For high-frequency traffic and environmental separation.</span><ArrowRight /></Link><Link href="/products"><strong>Industrial Door Portfolio</strong><span>Compare sectional doors, spiral doors and dock equipment.</span><ArrowRight /></Link><Link href="/solutions"><strong>Industry Solutions</strong><span>Review selection priorities by operating environment.</span><ArrowRight /></Link></div></div></section>

    <section className="ps-brief"><div className="container ps-brief__inner"><div><p className="ps-kicker ps-kicker--blue">Start your project</p><h2>Have a similar opening?</h2><p>Send the width, height, quantity, application and project country. Drawings or site photos help us move faster.</p></div><div className="ps-brief__proof"><span><Globe2 /> Global export support</span><span><ShieldCheck /> Pre-shipment checks</span><span><Headphones /> Remote assistance</span></div><Link href="/contact" className="ps-button ps-button--red">Request project review <ArrowRight size={18}/></Link></div></section>

    <div className="ps-clients-heading"><div className="container"><p className="ps-kicker ps-kicker--blue">Selected project partners</p><h2>Built for long-term cooperation.</h2></div></div><ClientLogos />
  </div>;
}
