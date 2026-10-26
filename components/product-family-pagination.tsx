"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";
import { useState } from "react";
import { products } from "@/data/site";

const images: Record<string, string> = {
  "high-speed-roll-up-door": "/images/catalog-high-speed-roll-up.webp",
  "zipper-high-speed-door": "/images/products/zipper-high-speed-door-cleanroom.webp",
  "high-speed-spiral-door": "/images/catalog-high-speed-spiral.webp",
  "industrial-sectional-door": "/images/industrial-sectional-door.webp",
  "hydraulic-dock-leveler": "/images/catalog-dock-leveler.webp",
  "stacking-high-speed-door": "/images/products/stacking-high-speed-door-hero.webp",
  "aluminium-roller-shutter-door": "/images/products/aluminium-roller-shutter-door-hero.webp",
  "dock-shelter": "/images/products/dock-shelter-hero.webp",
  "garage-high-speed-door": "/images/products/garage-high-speed-door-hero.webp",
};

const pageSize = 4;

export function ProductFamilyPagination() {
  const [page, setPage] = useState(1);
  const pageCount = Math.ceil(products.length / pageSize);
  const start = (page - 1) * pageSize;
  const visibleProducts = products.slice(start, start + pageSize);

  const changePage = (nextPage: number) => {
    setPage(nextPage);
    document.getElementById("product-families")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return <>
    <div className="products-overview__family-grid">{visibleProducts.map(product => <article className="products-overview__family-card" id={product.slug} key={product.slug}>
      <Link className="products-overview__media" href={`/products/${product.slug}`} aria-label={`View ${product.name} details`}><Image src={images[product.slug]} alt={product.name} fill sizes="(min-width: 900px) 50vw, 100vw" /></Link>
      <div className="products-overview__family-body"><span className="eyebrow">{product.category}</span><h3>{product.name}</h3><p>{product.description}</p><h4>Key capabilities</h4><ul>{product.specs.map(spec => <li key={spec}><Check size={17}/>{spec}</li>)}</ul>
        <Link className="products-overview__text-link" href={`/products/${product.slug}`}>View product details <ArrowRight size={17}/></Link>
      </div></article>)}</div>
    <nav className="products-overview__pagination" aria-label="Product pages">
      <button type="button" onClick={() => changePage(page - 1)} disabled={page === 1} aria-label="Previous product page"><ArrowLeft size={17}/>Previous</button>
      <div>{Array.from({ length: pageCount }, (_, index) => index + 1).map(pageNumber => <button type="button" className={pageNumber === page ? "is-current" : ""} aria-current={pageNumber === page ? "page" : undefined} aria-label={`Product page ${pageNumber}`} onClick={() => changePage(pageNumber)} key={pageNumber}>{pageNumber}</button>)}</div>
      <button type="button" onClick={() => changePage(page + 1)} disabled={page === pageCount} aria-label="Next product page">Next<ArrowRight size={17}/></button>
    </nav>
    <nav className="products-overview__all-product-links" aria-label="All product detail pages">{products.map(product => <Link href={`/products/${product.slug}`} key={product.slug}>{product.name}</Link>)}</nav>
  </>;
}
