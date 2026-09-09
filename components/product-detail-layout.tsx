import type { LucideIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Check,
  Factory,
  Gauge,
  Layers3,
  Maximize2,
  MessageCircle,
  PackageCheck,
  Radio,
  Settings2,
  ShieldCheck,
  Wind,
  Zap,
} from "lucide-react";
import { Breadcrumb } from "./breadcrumb";
import { ProductComponentDetails } from "./product-component-details";

type Item = { title: string; text: string };
type Fact = { label: string; value: string; icon: LucideIcon };

export type ProductDetailContent = {
  slug: string;
  name: string;
  category: string;
  series: string;
  heroImage: string;
  heroAlt: string;
  heroDescription: string;
  heroFacts: Fact[];
  introImage: string;
  introAlt: string;
  introEyebrow: string;
  introTitle: string;
  introLead: string;
  introText: string;
  benefits: Item[];
  principleTitle: string;
  principleText: string;
  steps: Item[];
  planning: Item[];
  parameterIntro: string;
  parameters: Array<[string, string]>;
  parameterNote: string;
  applicationsLead: string;
  applicationsText: string;
  applications: string[];
  faqs: Array<[string, string]>;
};

const benefitIcons = [Zap, Layers3, ShieldCheck, Radio];
const stepIcons = [Radio, Zap, ShieldCheck, Layers3];
const relatedProducts = [
  { href: "/products/high-speed-roll-up-door", image: "/images/home-high-speed-roll-up.webp", category: "High Speed Doors", title: "High Speed Roll Up Door", text: "Flexible PVC rapid access for frequent internal traffic." },
  { href: "/products/high-speed-spiral-door", image: "/images/catalog-high-speed-spiral.webp", category: "High Speed Doors", title: "High Speed Spiral Door", text: "Rigid insulated slats for fast, secure exterior openings." },
  { href: "/products/industrial-sectional-door", image: "/images/industrial-sectional-door.webp", category: "Sectional Doors", title: "Industrial Sectional Door", text: "Insulated vertical access for factories and warehouses." },
  { href: "/products/hydraulic-dock-leveler", image: "/images/home-dock-leveler.webp", category: "Loading Dock Equipment", title: "Hydraulic Dock Leveler", text: "A dependable bridge between loading bays and vehicles." },
];
const productCases: Record<string, Array<{ image: string; title: string; text: string }>> = {
  "high-speed-spiral-door": [
    { image: "/images/catalog-high-speed-spiral.webp", title: "High-Frequency Exterior Entrance", text: "Rigid insulated slats combine rapid vehicle access with security and thermal separation at exposed factory openings." },
    { image: "/images/logistics-door.jpg", title: "Logistics Traffic Route", text: "Fast controlled movement helps shorten vehicle waiting time at frequently used warehouse and distribution routes." },
    { image: "/images/factory-building.jpg", title: "Industrial Building Access", text: "Track geometry, safety devices and panel finish can be configured around the building and operating environment." },
  ],
  "industrial-sectional-door": [
    { image: "/images/industrial-sectional-door.webp", title: "Insulated Factory Entrance", text: "Foam-filled panels and perimeter seals support dependable access and environmental separation for industrial buildings." },
    { image: "/images/factory-building.jpg", title: "Space-Constrained Building", text: "Multiple lifting-track arrangements adapt the door path around roof height, beams, ducts and available headroom." },
    { image: "/images/logistics-door.jpg", title: "Warehouse Loading Entrance", text: "Windows, access controls and safety options support practical daily movement at warehouse and loading-bay openings." },
  ],
  "hydraulic-dock-leveler": [
    { image: "/images/home-dock-leveler.webp", title: "Distribution Centre Loading Bay", text: "A hydraulic platform bridges changing vehicle heights to support repeated forklift movement between dock and trailer." },
    { image: "/images/logistics-door.jpg", title: "Coordinated Dock System", text: "The leveler can be planned with the industrial door, dock shelter and traffic guidance as one loading sequence." },
    { image: "/images/catalog-dock-leveler.webp", title: "Warehouse Retrofit", text: "Swing-lip, telescopic and edge-mounted arrangements address different pit, reach and renovation conditions." },
  ],
};

export function ProductDetailLayout({ product }: { product: ProductDetailContent }) {
  return <div className="product-page">
    <section className="product-page__hero">
      <Image src={product.heroImage} alt={product.heroAlt} fill priority sizes="100vw" className="product-page__hero-image" />
      <div className="product-page__hero-shade" />
      <div className="container product-page__hero-inner">
        <div className="product-page__hero-copy">
          <p className="reference-eyebrow">{product.category} · {product.series}</p>
          <h1>{product.name}</h1>
          <p>{product.heroDescription}</p>
          <div className="reference-actions">
            <Link className="reference-button reference-button--red" href="/contact">Discuss Your Project <ArrowRight size={18} /></Link>
            <a className="reference-button reference-button--ghost" href="#technical-data">Explore Parameters</a>
          </div>
        </div>
        <div className="product-page__hero-facts">{product.heroFacts.map(({ label, value, icon: Icon }) => <div key={label}><Icon /><span>{label}</span><strong>{value}</strong></div>)}</div>
      </div>
    </section>

    <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Products", href: "/products" }, { label: product.name }]} />

    <section className="product-page__intro">
      <div className="container product-page__intro-grid">
        <div className="product-page__intro-image"><Image src={product.introImage} alt={product.introAlt} fill sizes="(min-width: 900px) 50vw, 100vw" /></div>
        <div className="product-page__intro-copy"><p className="reference-eyebrow blue">{product.introEyebrow}</p><h2>{product.introTitle}</h2><strong>{product.introLead}</strong><p>{product.introText}</p><Link className="reference-text-link" href="#technical-data">Review technical data <ArrowRight size={17} /></Link></div>
      </div>
      <div className="container product-page__benefits">{product.benefits.map(({ title, text }, index) => { const Icon = benefitIcons[index]; return <article key={title}><Icon /><b>0{index + 1}</b><h3>{title}</h3><p>{text}</p></article>; })}</div>
    </section>

    <ProductComponentDetails slug={product.slug} />

    <section className="product-page__principle"><div className="container">
      <div className="product-page__center-head"><p className="reference-eyebrow blue">Working principle</p><h2>{product.principleTitle}</h2><p>{product.principleText}</p></div>
      <div className="product-page__steps">{product.steps.map(({ title, text }, index) => { const Icon = stepIcons[index]; return <article key={title}><span>0{index + 1}</span><Icon /><h3>{title}</h3><p>{text}</p></article>; })}</div>
    </div></section>

    <section className="product-page__planning"><div className="container product-page__planning-grid">
      <div><p className="reference-eyebrow blue">Project planning</p><h2>Conditions to Confirm Before Selection</h2><p>A reliable configuration starts with verified site conditions, operating requirements and the intended workflow.</p></div>
      <dl>{product.planning.map(({ title, text }) => <div key={title}><dt>{title}</dt><dd>{text}</dd></div>)}</dl>
    </div></section>

    <section className="product-page__specs" id="technical-data"><div className="container product-page__spec-grid">
      <div className="product-page__spec-copy"><p className="reference-eyebrow">System and parameters</p><h2>Standard Configuration</h2><p>{product.parameterIntro}</p><ul><li><Check /> Made-to-measure production</li><li><Check /> Project-specific configuration</li><li><Check /> Export packaging and documents</li><li><Check /> Remote installation guidance</li></ul></div>
      <div><h3 className="product-page__table-title">Concise Parameter Reference</h3><dl className="product-page__parameter-list">{product.parameters.map(([label, value]) => <div key={label}><dt>{label}</dt><dd>{value}</dd></div>)}</dl><p className="product-page__spec-note">{product.parameterNote}</p></div>
    </div></section>

    <section className="product-page__applications"><div className="container">
      <div className="reference-split-heading"><div><p className="reference-eyebrow blue">Typical applications</p><h2>Designed Around Real Industrial Workflows</h2></div><div className="reference-copy"><strong>{product.applicationsLead}</strong><p>{product.applicationsText}</p></div></div>
      <div className="product-page__application-grid">{product.applications.map((item, index) => <article key={item}><span>0{index + 1}</span><Wind /><h3>{item}</h3><p>Configure the system around the opening, traffic pattern, building conditions and safety requirements.</p></article>)}</div>
    </div></section>

    <section className="product-page__cases"><div className="container">
      <div className="reference-split-heading"><div><p className="reference-eyebrow blue">Application examples</p><h2>{product.name} Use Cases</h2></div><div className="reference-copy"><strong>See how the system supports different industrial workflows.</strong><p>These examples show common application directions. Final configuration depends on the verified opening, traffic pattern and operating environment.</p></div></div>
      <div className="product-page__case-grid">{productCases[product.slug].map((item, index) => <article key={item.title}><div className="product-page__case-image"><Image src={item.image} alt={item.title} fill sizes="(min-width: 900px) 33vw, 100vw" /></div><div className="product-page__case-copy"><span>0{index + 1}</span><h3>{item.title}</h3><p>{item.text}</p></div></article>)}</div>
    </div></section>

    <section className="product-page__related"><div className="container">
      <div className="product-page__related-head"><div><p className="reference-eyebrow blue">Product recommendations</p><h2>Explore More Industrial Door Systems</h2></div><Link className="reference-text-link" href="/products">View all products <ArrowRight size={17} /></Link></div>
      <div className="product-page__related-grid">{relatedProducts.map((item) => <Link className="product-page__related-card" href={item.href} key={item.href}><div className="product-page__related-image"><Image src={item.image} alt={item.title} fill sizes="(min-width: 1100px) 25vw, (min-width: 650px) 50vw, 100vw" /></div><div className="product-page__related-copy"><span>{item.category}</span><h3>{item.title}</h3><p>{item.text}</p><em>View product <ArrowRight size={16} /></em></div></Link>)}</div>
    </div></section>

    <section className="product-page__support"><div className="container product-page__support-grid">
      <div className="product-page__support-image"><Image src="/images/factory-building.jpg" alt="SEPPES industrial door manufacturing facility" fill sizes="(min-width: 900px) 50vw, 100vw" /></div>
      <div><p className="reference-eyebrow">Manufacturing and support</p><h2>From Configuration to Export Delivery</h2><p>SEPPES coordinates opening review, customized production, inspection, packaging, technical documents and remote support for global industrial projects.</p><div className="product-page__support-list"><span><Settings2 />Custom engineering and OEM/ODM</span><span><Factory />Manufacturing and quality inspection</span><span><PackageCheck />Export packaging and spare parts</span><span><MessageCircle />Remote installation support</span></div></div>
    </div></section>

    <section className="product-page__faq"><div className="container"><div className="product-page__center-head"><p className="reference-eyebrow blue">FAQ</p><h2>{product.name} Questions</h2><p>Use these answers for early planning, then confirm the final configuration in the project proposal.</p></div><div className="product-page__faq-list">{product.faqs.map(([question, answer]) => <details key={question}><summary>{question}</summary><p>{answer}</p></details>)}</div></div></section>

    <section className="product-page__project-cta"><div className="container"><div><p className="reference-eyebrow">Project consultation</p><h2>Send Us Your Opening Details.</h2><p>Share the dimensions, quantity, application, project location and available photos or drawings.</p></div><Link className="reference-button reference-button--white" href="/contact">Get a Configuration <ArrowRight size={18} /></Link></div></section>
  </div>;
}

export const standardHeroIcons = { speed: Gauge, size: Maximize2, safety: ShieldCheck };
