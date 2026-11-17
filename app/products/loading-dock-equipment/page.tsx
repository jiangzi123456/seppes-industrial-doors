import type { Metadata } from "next";
import { ProductCategoryPage } from "@/components/product-category-page";
import { getProductCategory } from "@/data/product-categories";
import { createPageMetadata } from "@/lib/seo";
import "../product-category.css";
import "../products.css";

const category = getProductCategory("loading-dock-equipment")!;

export const metadata: Metadata = createPageMetadata({ title: "Loading Dock Equipment for Warehouses", description: category.description, path: "/products/loading-dock-equipment", image: category.heroImage });

export default function LoadingDockEquipmentPage() { return <ProductCategoryPage category={category} />; }
