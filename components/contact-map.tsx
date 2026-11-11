"use client";

import { useEffect, useState } from "react";
import { MapPin } from "lucide-react";

const address = {
  zh: "苏州市吴中区木渎镇走马塘路59号4幢",
  en: "Building 4, No. 59 Zoumatang Road, Mudu Town, Wuzhong District, Suzhou, Jiangsu, China",
};

const company = {
  zh: "西朗门业（苏州）有限公司",
  en: "Seppes Door Industry (Suzhou) Co., Ltd.",
};

function mapQuery(language: string) {
  return language.startsWith("zh")
    ? `${company.zh}，${address.zh}`
    : `${company.en}, ${address.en}`;
}

function embedUrl(query: string, language: string) {
  return `https://www.google.com/maps?q=${encodeURIComponent(query)}&output=embed&hl=${encodeURIComponent(language)}&z=16`;
}

function mapsUrl(query: string) {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
}

function mapLanguage(locale: string) {
  const normalized = locale.toLowerCase();
  if (normalized.startsWith("zh")) return normalized.includes("tw") || normalized.includes("hk") ? "zh-TW" : "zh-CN";
  return locale.split("-")[0] || "en";
}

export function ContactMap() {
  const [language, setLanguage] = useState("en");
  const query = mapQuery(language);

  useEffect(() => {
    const locale = navigator.language || "en";
    setLanguage(mapLanguage(locale));
  }, []);

  return <div className="contact-map">
    <iframe title="SEPPES manufacturing location on Google Maps" src={embedUrl(query, language)} loading="lazy" allowFullScreen referrerPolicy="no-referrer-when-downgrade" />
    <div className="contact-map__marker">
      <span><MapPin size={20} aria-hidden="true" /></span>
      <div><strong>SEPPES Door Industry</strong><small>No. 59 Zoumatang Road · Building 4</small></div>
      <a href={mapsUrl(query)} target="_blank" rel="noreferrer">Open in Google Maps</a>
    </div>
  </div>;
}
