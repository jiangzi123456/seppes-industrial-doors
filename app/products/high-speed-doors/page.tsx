import type { Metadata } from "next";
import { ProductCategoryPage } from "@/components/product-category-page";
import { getProductCategory } from "@/data/product-categories";
import { createPageMetadata } from "@/lib/seo";
import "../product-category.css";
import "../products.css";

const category = getProductCategory("high-speed-doors")!;

export const metadata: Metadata = createPageMetadata({ title: "High Speed Doors for Factories & Warehouses", description: category.description, path: "/products/high-speed-doors", image: category.heroImage });

export default function HighSpeedDoorsPage() { return <ProductCategoryPage category={category} />; }
