import type { Metadata } from "next";
import { ProductCategoryPage } from "@/components/product-category-page";
import { getProductCategory } from "@/data/product-categories";
import { createPageMetadata } from "@/lib/seo";
import "../product-category.css";
import "../products.css";

const category = getProductCategory("industrial-sectional-doors")!;

export const metadata: Metadata = createPageMetadata({ title: "Industrial Sectional Doors", description: category.description, path: "/products/industrial-sectional-doors", image: category.heroImage });

export default function IndustrialSectionalDoorsPage() { return <ProductCategoryPage category={category} />; }
