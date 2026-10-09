import Link from "next/link";
import { ChevronRight } from "lucide-react";

type BreadcrumbItem = { label: string; href?: string };

const siteUrl = "https://www.seppesde.com";

export function Breadcrumb({ items, currentPath }: { items: BreadcrumbItem[]; currentPath?: string }) {
  const schema = currentPath ? {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.label,
      item: `${siteUrl}${item.href ?? currentPath}`,
    })),
  } : null;

  return <><nav className="product-page__breadcrumb" aria-label="Breadcrumb"><div className="container">
    {items.map((item, index) => <span className="breadcrumb-item" key={`${item.label}-${index}`}>
      {index > 0 && <ChevronRight aria-hidden="true" />}
      {item.href ? <Link href={item.href}>{item.label}</Link> : <span aria-current="page">{item.label}</span>}
    </span>)}
  </div></nav>{schema && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />}</>;
}
