import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check, ClipboardCheck, Factory, Layers3, Ruler, ShieldCheck } from "lucide-react";
import { Breadcrumb } from "./breadcrumb";
import { CTA } from "./cta";
import type { ProductCategory } from "@/data/product-categories";
import { products as catalogProducts } from "@/data/site";
import { createCollectionPageSchema, createFaqPageSchema, serializeJsonLd } from "@/lib/structured-data";

const factorIcons = [Ruler, Factory, Layers3, ShieldCheck, ClipboardCheck, Check];
const catalogProductsBySlug = new Map(catalogProducts.map((product) => [product.slug, product]));

export function ProductCategoryPage({ category }: { category: ProductCategory }) {
  const path = `/products/${category.slug}`;
  const collectionSchema = createCollectionPageSchema({
    path,
    name: category.name,
    description: category.description,
    itemType: "Product",
    items: category.products.map((product) => ({
      name: product.name,
      path: `/products/${product.slug}`,
      image: product.image,
    })),
  });
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      ...collectionSchema["@graph"],
      { "@id": `https://www.seppesde.com${path}#faq`, ...createFaqPageSchema(category.faqs) },
    ],
  };

  return <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serializeJsonLd(schema) }} />
    <div className="product-category">
      <section className="product-category__hero">
        <Image src={category.heroImage} alt={category.heroAlt} fill priority sizes="100vw" />
        <div className="product-category__hero-shade" />
        <div className="container product-category__hero-inner">
          <div>
            <p className="reference-eyebrow">{category.eyebrow}</p>
            <h1>{category.title}</h1>
            <p>{category.description}</p>
            <div className="reference-actions">
              <a className="reference-button reference-button--red" href="#compare-products">Compare Products <ArrowRight size={18} /></a>
              <Link className="reference-button reference-button--ghost" href="/contact">Send Project Details</Link>
            </div>
          </div>
        </div>
      </section>
      <Breadcrumb currentPath={path} items={[{ label: "Home", href: "/" }, { label: "Products", href: "/products" }, { label: category.name }]} />

      <section className="product-category__answer">
        <div className="container product-category__answer-grid">
          <div><p className="reference-eyebrow blue">Product family overview</p><h2>Choose the System Around the Opening</h2></div>
          <div><strong>{category.directAnswer}</strong><p>{category.selectionIntro}</p></div>
        </div>
      </section>

      <section className="product-category__products" id="compare-products">
        <div className="container">
          <div className="product-category__section-head"><p className="reference-eyebrow blue">Products in this category</p><h2>Compare the Available Directions</h2><p>Use the application fit below for early planning. Final selection follows verified opening, traffic and environmental conditions.</p></div>
          <div className={`products-overview__family-grid product-category__product-grid${category.products.length === 1 ? " is-single" : ""}`}>
            {category.products.map((product) => {
              const catalogProduct = catalogProductsBySlug.get(product.slug);
              return <article className="products-overview__family-card" key={product.slug}>
                <Link className="products-overview__media" href={`/products/${product.slug}`} aria-label={`View ${product.name} details`}><Image src={product.image} alt={product.name} fill sizes="(min-width: 900px) 50vw, 100vw" /></Link>
                <div className="products-overview__family-body"><span className="eyebrow">{catalogProduct?.category ?? category.shortName}</span><h3>{product.name}</h3><p>{catalogProduct?.description ?? product.description}</p><h4>Key capabilities</h4><ul>{catalogProduct?.specs.map((spec) => <li key={spec}><Check size={17} />{spec}</li>)}</ul>
                  <Link className="products-overview__text-link" href={`/products/${product.slug}`}>View product details <ArrowRight size={17} /></Link>
                </div>
              </article>;
            })}
          </div>
        </div>
      </section>

      <section className="product-category__selection">
        <div className="container">
          <div className="product-category__section-head"><p className="reference-eyebrow">Selection criteria</p><h2>Information to Confirm Before Specification</h2></div>
          <div className="product-category__factor-grid">{category.selectionFactors.map((factor, index) => { const Icon = factorIcons[index]; return <article key={factor.title}><Icon /><span>0{index + 1}</span><h3>{factor.title}</h3><p>{factor.text}</p></article>; })}</div>
        </div>
      </section>

      <section className="product-category__applications">
        <div className="container"><div className="product-category__section-head"><p className="reference-eyebrow blue">Application fit</p><h2>Plan Around the Operating Environment</h2></div><div className="product-category__application-grid">{category.applications.map((application, index) => <article key={application.title}><span>0{index + 1}</span><h3>{application.title}</h3><p>{application.text}</p></article>)}</div></div>
      </section>

      <section className="product-category__faq">
        <div className="container"><div className="product-category__section-head"><p className="reference-eyebrow blue">Practical answers</p><h2>{category.name} FAQs</h2></div><div>{category.faqs.map(([question, answer]) => <details key={question}><summary>{question}<span>+</span></summary><p>{answer}</p></details>)}</div></div>
      </section>
      <CTA />
    </div>
  </>;
}
