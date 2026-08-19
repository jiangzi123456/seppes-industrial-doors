import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Building2,
  Check,
  Factory,
  Gauge,
  Globe2,
  MapPin,
  PackageCheck,
  ShieldCheck,
  Sparkles,
  Truck,
} from "lucide-react";
import { Breadcrumb } from "@/components/breadcrumb";
import "./cases.css";

export const metadata = {
  title: "Customer Case Studies",
  description:
    "Explore SEPPES industrial door projects for manufacturing, logistics, clean production and cold-chain facilities worldwide.",
  alternates: { canonical: "/cases" },
};

const projects = [
  {
    number: "01",
    industry: "Automotive manufacturing",
    location: "Mexico",
    title: "High-speed access for a continuous production flow",
    summary:
      "A busy component plant needed to separate production zones without slowing forklifts or interrupting line-side logistics.",
    image: "/images/hero-industrial-door.jpg",
    icon: Factory,
    product: "High-speed roll-up doors",
    scope: "Production-zone separation",
    result: "Faster, controlled material flow",
    href: "/contact?project=automotive-manufacturing",
  },
  {
    number: "02",
    industry: "Logistics & warehousing",
    location: "United Arab Emirates",
    title: "A coordinated entrance system for a regional distribution hub",
    summary:
      "The loading area required reliable exterior access, safer dock movement and a consistent equipment package across multiple bays.",
    image: "/images/logistics-door.jpg",
    icon: Truck,
    product: "Sectional doors & dock levelers",
    scope: "Multi-bay loading operation",
    result: "Safer, smoother dock handling",
    href: "/contact?project=logistics-hub",
  },
  {
    number: "03",
    industry: "Pharmaceutical production",
    location: "Thailand",
    title: "Clean-area doors built around hygiene and pressure control",
    summary:
      "The facility needed frequent personnel and cart access while supporting cleanability, sealing and controlled room conditions.",
    image: "/images/cleanroom-door.jpg",
    icon: Sparkles,
    product: "Cleanroom high-speed doors",
    scope: "Controlled production zones",
    result: "Stable separation with rapid access",
    href: "/contact?project=pharmaceutical-cleanroom",
  },
  {
    number: "04",
    industry: "Cold-chain storage",
    location: "Australia",
    title: "Rapid cycling to reduce open-door time in cold storage",
    summary:
      "A temperature-controlled warehouse wanted to maintain efficient pallet traffic while limiting air exchange at a high-use opening.",
    image: "/images/high-speed-roll-up-door-product.jpg",
    icon: Gauge,
    product: "Insulated high-speed doors",
    scope: "High-frequency cold-room access",
    result: "Shorter exposure at every cycle",
    href: "/contact?project=cold-chain-storage",
  },
];

const process = [
  ["01", "Understand the site", "We review opening dimensions, traffic, environment, safety and control requirements."],
  ["02", "Engineer the system", "Door type, structure, sensors and activation logic are configured around the application."],
  ["03", "Confirm every detail", "Drawings and the supply scope are checked before project-specific manufacturing begins."],
  ["04", "Deliver with support", "Export packing, documentation and remote guidance help the local team complete installation."],
];

export default function CasesPage() {
  return (
    <div className="cases-page">
      <section className="cases-hero">
        <Image
          src="/images/factory-doors.jpg"
          alt="SEPPES industrial doors installed in a modern facility"
          fill
          priority
          sizes="100vw"
        />
        <div className="cases-hero__shade" />
        <div className="container cases-hero__inner">
          <div className="cases-hero__copy">
            <p className="cases-kicker">Customer case studies</p>
            <h1>Industrial doors proven in real operating environments.</h1>
            <p>
              See how manufacturers, logistics operators and controlled-environment facilities turn site requirements into dependable entrance systems.
            </p>
            <div className="cases-actions">
              <a className="cases-button cases-button--red" href="#projects">
                Explore projects <ArrowRight size={17} />
              </a>
              <Link className="cases-button cases-button--ghost" href="/contact">
                Discuss your project
              </Link>
            </div>
          </div>
        </div>
        <div className="cases-hero__proof">
          <Globe2 aria-hidden="true" />
          <span><strong>90+</strong> countries and regions served</span>
        </div>
      </section>

      <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Customer Cases" }]} />

      <section className="cases-intro">
        <div className="container cases-intro__grid">
          <div>
            <p className="cases-kicker cases-kicker--blue">From requirement to result</p>
            <h2>Every project starts with a different operating challenge.</h2>
          </div>
          <div>
            <p className="cases-intro__lead">
              The product is only one part of the answer. Traffic, temperature, hygiene, wind, safety and automation determine the complete system.
            </p>
            <p>
              These representative projects show how SEPPES approaches industrial openings across different industries and regions.
            </p>
          </div>
        </div>
        <div className="container cases-facts">
          <div><strong>2011</strong><span>Founded in Suzhou</span></div>
          <div><strong>20,000+ m²</strong><span>Manufacturing base</span></div>
          <div><strong>7,600+</strong><span>Companies served</span></div>
          <div><strong>30+</strong><span>Recognized certifications</span></div>
        </div>
      </section>

      <section className="cases-projects" id="projects">
        <div className="container">
          <div className="cases-section-head">
            <div>
              <p className="cases-kicker cases-kicker--blue">Selected projects</p>
              <h2>Built around the way each facility works.</h2>
            </div>
            <p>Explore typical project challenges, selected systems and the operational result each configuration was designed to support.</p>
          </div>

          <div className="cases-project-list">
            {projects.map((project, index) => {
              const Icon = project.icon;
              return (
                <article className="case-study" key={project.title}>
                  <div className="case-study__media">
                    <Image src={project.image} alt={`${project.industry} industrial door project`} fill sizes="(max-width: 820px) 100vw, 55vw" />
                    <span>{project.number}</span>
                  </div>
                  <div className="case-study__body">
                    <div className="case-study__meta"><span><Icon size={16} /> {project.industry}</span><span><MapPin size={15} /> {project.location}</span></div>
                    <h3>{project.title}</h3>
                    <p>{project.summary}</p>
                    <dl>
                      <div><dt>Solution</dt><dd>{project.product}</dd></div>
                      <div><dt>Project scope</dt><dd>{project.scope}</dd></div>
                      <div><dt>Designed result</dt><dd>{project.result}</dd></div>
                    </dl>
                    <Link href={project.href}>Plan a similar project <ArrowRight size={16} /></Link>
                  </div>
                  <i aria-hidden="true">{String(index + 1).padStart(2, "0")}</i>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="cases-feature">
        <div className="container cases-feature__grid">
          <div className="cases-feature__visual">
            <Image src="/images/rapid-door-control-system.jpg" alt="Industrial rapid door control system and project engineering" fill sizes="(max-width: 820px) 100vw, 50vw" />
            <div><ShieldCheck /><span>Safety, controls and access logic reviewed as one system</span></div>
          </div>
          <div className="cases-feature__copy">
            <p className="cases-kicker">Project insight</p>
            <h2>The best result is engineered before production begins.</h2>
            <p>Reliable operation comes from matching the product to the actual opening—not from selecting a standard model in isolation.</p>
            <ul>
              <li><Check /> Opening dimensions and available installation space</li>
              <li><Check /> Daily cycles, traffic type and activation method</li>
              <li><Check /> Environmental separation and sealing priorities</li>
              <li><Check /> Safety devices and facility-control interfaces</li>
            </ul>
            <Link href="/project-support">See our project support <ArrowRight size={17} /></Link>
          </div>
        </div>
      </section>

      <section className="cases-process">
        <div className="container">
          <div className="cases-section-head">
            <div><p className="cases-kicker cases-kicker--blue">A repeatable project pathway</p><h2>Four steps from site data to delivery.</h2></div>
            <p>A clear review and confirmation process keeps the door, controls, documentation and local installation team aligned.</p>
          </div>
          <ol>{process.map(([number, title, copy]) => <li key={number}><b>{number}</b><Building2 /><h3>{title}</h3><p>{copy}</p></li>)}</ol>
        </div>
      </section>

      <section className="cases-cta">
        <div className="container cases-cta__inner">
          <PackageCheck />
          <div><p className="cases-kicker">Your project could be next</p><h2>Tell us what the opening needs to achieve.</h2><p>Share the size, application, quantity, location and any available drawings or photos.</p></div>
          <Link className="cases-button cases-button--white" href="/contact">Request a project proposal <ArrowRight size={17} /></Link>
        </div>
      </section>
    </div>
  );
}
