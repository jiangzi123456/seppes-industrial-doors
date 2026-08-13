import Image from "next/image";

export function BrandLogo({ light = false }: { light?: boolean }) {
  if (light) return <span className="brand-logo-white"><Image src="/seppes-logo-white-cropped.png" alt="SEPPES" width={2411} height={714} priority /></span>;
  return <span className="brand-logo-crop"><Image src="/seppes-logo-cropped.png" alt="SEPPES" width={2411} height={714} priority /></span>;
}
