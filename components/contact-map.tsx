"use client";

import { useEffect, useState } from "react";

const address = {
  zh: "苏州市吴中区木渎镇走马塘路59号4幢",
  en: "Building 4, No. 59 Zoumatang Road, Mudu Town, Wuzhong District, Suzhou, Jiangsu, China",
};

function mapLanguage(locale: string) {
  const normalized = locale.toLowerCase();
  if (normalized.startsWith("zh")) return normalized.includes("tw") || normalized.includes("hk") ? "zh-TW" : "zh-CN";
  return locale.split("-")[0] || "en";
}

export function ContactMap() {
  const [src, setSrc] = useState(() => `https://www.google.com/maps?q=${encodeURIComponent(address.en)}&output=embed&hl=en`);

  useEffect(() => {
    const locale = navigator.language || "en";
    const language = mapLanguage(locale);
    const query = language.startsWith("zh") ? address.zh : address.en;
    setSrc(`https://www.google.com/maps?q=${encodeURIComponent(query)}&output=embed&hl=${encodeURIComponent(language)}`);
  }, []);

  return <iframe title="SEPPES manufacturing location on Google Maps" src={src} loading="lazy" allowFullScreen referrerPolicy="no-referrer-when-downgrade" />;
}
