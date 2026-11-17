import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProductDetailLayout } from "@/components/product-detail-layout";
import { additionalProducts, getAdditionalProduct } from "@/data/additional-products";
import { createPageMetadata } from "@/lib/seo";

type Props={params:Promise<{slug:string}>};
const metadataOverrides:Record<string,{title?:string;description?:string}>={
  "aluminium-roller-shutter-door":{description:"A compact aluminium roller shutter for industrial and commercial openings, configured around slats, guides, coil space, controls and site exposure."},
  "dock-shelter":{title:"Industrial Dock Shelter for Loading Bays"},
};
export function generateStaticParams(){return additionalProducts.map(({slug})=>({slug}))}
export async function generateMetadata({params}:Props):Promise<Metadata>{const {slug}=await params;const product=getAdditionalProduct(slug);if(!product)return {};const override=metadataOverrides[slug];return createPageMetadata({title:override?.title??product.name,description:override?.description??product.heroDescription,path:`/products/${slug}`,image:product.heroImage})}
export default async function AdditionalProductPage({params}:Props){const {slug}=await params;const product=getAdditionalProduct(slug);if(!product)notFound();return <ProductDetailLayout product={product}/>}
