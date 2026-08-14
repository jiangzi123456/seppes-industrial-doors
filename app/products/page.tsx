import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowRight, Check, Factory, Gauge, ShieldCheck, Snowflake } from "lucide-react";
import { Breadcrumb } from "@/components/breadcrumb";
import { CTA } from "@/components/cta";
import { products } from "@/data/site";
import "./products.css";

export const metadata = { title: "Industrial Door Products", description: "Compare SEPPES high-speed doors, sectional doors and loading dock equipment.", alternates: { canonical: "/products" } };

const images: Record<string, string> = {
  "high-speed-roll-up-door": "/images/high-speed-roll-up-door-product.jpg",
  "high-speed-spiral-door": "/images/hero-industrial-door.jpg",
  "industrial-sectional-door": "/images/factory-doors.jpg",
  "hydraulic-dock-leveler": "/images/logistics-door.jpg",
};
const factors = [
  ["01", "Traffic Frequency", "Confirm daily cycles, peak traffic and required opening speed.", "High-speed door direction"],
  ["02", "Opening & Space", "Measure width, height, headroom and side-room conditions.", "Track and structure review"],
  ["03", "Indoor Environment", "Define temperature, cleanliness, pressure and sealing needs.", "Curtain and sealing selection"],
  ["04", "Exterior Exposure", "Review wind load, rain, security and exterior access.", "Rigid or wind-resistant system"],
  ["05", "Vehicle & Workflow", "Map forklifts, pedestrians and loading movements.", "Safety and activation plan"],
  ["06", "Project Integration", "Confirm controls, interlocks and access interfaces.", "Controls and supply scope"],
];
const faqs = [
  ["Which door suits high-frequency traffic?", "High-speed roll-up doors are a common starting point for frequent internal traffic. Final selection depends on size, environment and wind exposure."],
  ["When should I choose a spiral door?", "A spiral door suits demanding exterior openings that need rapid operation, rigid security, insulation and wind resistance."],
  ["Can the doors be customized?", "Yes. Dimensions, curtain or panel construction, colors, windows, controls and sensors can be reviewed for your project."],
  ["What is needed for a quotation?", "Share opening dimensions, application, indoor or outdoor position, traffic type, quantity, country and any drawings or site photos."],
];

export default function ProductsPage() {
  return <div className="products-overview">
    <section className="products-overview__hero">
      <Image className="products-overview__hero-image" src="/images/hero-industrial-door.jpg" alt="Industrial high-speed door" fill priority sizes="100vw" />
      <div className="products-overview__hero-shade" />
      <div className="container products-overview__hero-inner"><div className="products-overview__hero-copy">
        <span className="eyebrow light">Industrial access systems</span><h1>Industrial Door Products</h1>
        <p>Compare high-speed doors, sectional doors and loading dock equipment by traffic, environment, opening conditions and project requirements.</p>
        <div className="products-overview__hero-actions"><a className="button" href="#product-families">Explore Door Types <ArrowDown size={18} /></a><Link className="button products-overview__button-ghost" href="/contact">Send Requirements <ArrowRight size={18} /></Link></div>
      </div></div>
    </section>
    <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Industrial Door Products" }]} />
    <section className="products-overview__section" id="product-families"><div className="container">
      <div className="products-overview__section-heading"><span className="eyebrow">Product families</span><h2>Four Solutions for Industrial Openings</h2><p>Each family addresses a different balance of speed, sealing, security, insulation and loading efficiency.</p></div>
      <div className="products-overview__family-grid">{products.map(product => <article className="products-overview__family-card" id={product.slug} key={product.slug}>
        {product.slug === "high-speed-roll-up-door" ? <Link className="products-overview__media" href={`/products/${product.slug}`} aria-label={`View ${product.name} details`}><Image src={images[product.slug]} alt={product.name} fill sizes="(min-width: 900px) 50vw, 100vw" /></Link> : <div className="products-overview__media"><Image src={images[product.slug]} alt={product.name} fill sizes="(min-width: 900px) 50vw, 100vw" /></div>}
        <div className="products-overview__family-body"><span className="eyebrow">{product.category}</span><h3>{product.name}</h3><p>{product.description}</p><h4>Key capabilities</h4><ul>{product.specs.map(spec => <li key={spec}><Check size={17}/>{spec}</li>)}</ul>
          <Link className="products-overview__text-link" href={product.slug === "high-speed-roll-up-door" ? `/products/${product.slug}` : "/contact"}>View product details <ArrowRight size={17}/></Link>
        </div></article>)}</div>
    </div></section>
    <section className="products-overview__section products-overview__section--tint" id="compare-products"><div className="container">
      <div className="products-overview__section-heading"><span className="eyebrow">Product comparison</span><h2>Compare Industrial Door Types</h2><p>Use this as an initial planning reference. Exact configuration follows verified dimensions and site conditions.</p></div>
      <div className="products-overview__comparison"><table><thead><tr><th>Selection factor</th><th>Roll-up</th><th>Spiral</th><th>Sectional</th><th>Dock leveler</th></tr></thead><tbody>
        <tr><th>Primary role</th><td>Fast traffic separation</td><td>Fast exterior security</td><td>Insulated general access</td><td>Vehicle-to-dock bridge</td></tr>
        <tr><th>Typical position</th><td>Interior / sheltered</td><td>Exterior</td><td>Exterior</td><td>Loading bay</td></tr>
        <tr><th>Operating speed</th><td>Very high</td><td>High</td><td>Standard</td><td>Hydraulic cycle</td></tr>
        <tr><th>Insulation</th><td>Application dependent</td><td>High</td><td>High</td><td>Not applicable</td></tr>
        <tr><th>Best suited to</th><td>Logistics, clean areas</td><td>Factories, logistics</td><td>Warehouses, workshops</td><td>Distribution centers</td></tr>
      </tbody></table></div>
    </div></section>
    <section className="products-overview__section" id="selection-guide"><div className="container">
      <div className="products-overview__section-heading"><span className="eyebrow">Selection guide</span><h2>Choose by Project Requirements</h2><p>These six factors help narrow the product direction before engineering review.</p></div>
      <ol className="products-overview__selection-list">{factors.map(([number,title,copy,result]) => <li key={number}><span>{number}</span><div><h3>{title}</h3><p>{copy}</p><strong>{result}</strong></div></li>)}</ol>
    </div></section>
    <section className="products-overview__support"><div className="container products-overview__support-grid">
      <div><span className="eyebrow light">Project confidence</span><h2>More than a door product.</h2><p>SEPPES supports industrial projects from opening review through product configuration, export packaging and technical documentation.</p></div>
      <div className="products-overview__support-points"><span><Gauge/><strong>Performance-led</strong><small>Matched to operating conditions</small></span><span><ShieldCheck/><strong>Safety considered</strong><small>Sensors, controls and interfaces</small></span><span><Factory/><strong>Made to measure</strong><small>Project-specific dimensions</small></span><span><Snowflake/><strong>Environment ready</strong><small>Sealing and insulation needs</small></span></div>
    </div></section>
    <section className="products-overview__section products-overview__section--tint"><div className="container"><div className="products-overview__section-heading"><span className="eyebrow">Practical answers</span><h2>Industrial Door FAQs</h2></div><div className="products-overview__faq">{faqs.map(([q,a]) => <details key={q}><summary>{q}<span>+</span></summary><p>{a}</p></details>)}</div></div></section>
    <CTA />
  </div>;
}
