import Link from "next/link";
import { ChevronRight } from "lucide-react";

type BreadcrumbItem = { label: string; href?: string };

export function Breadcrumb({ items }: { items: BreadcrumbItem[] }) {
  return <nav className="product-page__breadcrumb" aria-label="Breadcrumb"><div className="container">
    {items.map((item, index) => <span className="breadcrumb-item" key={`${item.label}-${index}`}>
      {index > 0 && <ChevronRight aria-hidden="true" />}
      {item.href ? <Link href={item.href}>{item.label}</Link> : <span aria-current="page">{item.label}</span>}
    </span>)}
  </div></nav>;
}
