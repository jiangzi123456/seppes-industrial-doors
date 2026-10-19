import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProductDetailLayout } from "@/components/product-detail-layout";
import { additionalProducts, getAdditionalProduct } from "@/data/additional-products";
import { createPageMetadata } from "@/lib/seo";

type Props={params:Promise<{slug:string}>};
export function generateStaticParams(){return additionalProducts.map(({slug})=>({slug}))}
export async function generateMetadata({params}:Props):Promise<Metadata>{const {slug}=await params;const product=getAdditionalProduct(slug);if(!product)return {};return createPageMetadata({title:product.name,description:product.heroDescription,path:`/products/${slug}`,image:product.heroImage})}
export default async function AdditionalProductPage({params}:Props){const {slug}=await params;const product=getAdditionalProduct(slug);if(!product)notFound();return <ProductDetailLayout product={product}/>}
