import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { products } from "@/data/site";

export function ProductCard({ product, index }: { product: (typeof products)[number]; index: number }) {
  return (
    <article className="product-card">
      <div className="product-visual" style={{ "--accent": product.accent } as React.CSSProperties}>
        <span>0{index + 1}</span><div className="door-shape"><i /><i /><i /><i /></div>
      </div>
      <div className="product-copy"><span className="eyebrow">{product.category}</span><h3>{product.name}</h3><p>{product.summary}</p>
        <Link className="text-link" href={`/products#${product.slug}`}>Explore solution <ArrowUpRight size={17} /></Link>
      </div>
    </article>
  );
}
