"use client";

import { usePathname } from "next/navigation";
import { products } from "@/data/site";

export function InquiryProductSelect() {
  const pathname = usePathname();
  const product = products.find((item) => pathname === `/products/${item.slug}`);
  return <select key={pathname} name="product" defaultValue={product?.name ?? ""}>
    <option value="">Select a product</option>
    {products.map((item) => <option key={item.slug} value={item.name}>{item.name}</option>)}
    <option>Not sure yet</option>
  </select>;
}
