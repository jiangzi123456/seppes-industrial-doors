"use client";

import Image from "next/image";
import { Play, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

const embedUrl = "https://www.youtube-nocookie.com/embed/-BywMGI9_PA?start=7&autoplay=1&rel=0";

export function FactoryVideoModal() {
  const [isOpen, setIsOpen] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsOpen(false);
    };

    document.addEventListener("keydown", closeOnEscape);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", closeOnEscape);
      triggerRef.current?.focus();
    };
  }, [isOpen]);

  return <>
    <button className="reference-source__image" type="button" onClick={() => setIsOpen(true)} ref={triggerRef} aria-haspopup="dialog" aria-label="Play the SEPPES factory video">
      <Image src="/images/home-factory-exterior.webp" alt="Exterior of the SEPPES industrial door factory in Suzhou" fill sizes="(min-width: 900px) 50vw, 100vw" style={{ objectPosition: "53% 58%" }} />
      <span className="reference-source__play"><Play size={22} fill="currentColor" /> Watch factory video</span>
    </button>
    {isOpen && typeof document !== "undefined" && createPortal(
      <div className="factory-video-modal" role="dialog" aria-modal="true" aria-label="SEPPES factory video" onMouseDown={(event) => { if (event.target === event.currentTarget) setIsOpen(false); }}>
        <div className="factory-video-modal__panel">
          <button className="factory-video-modal__close" type="button" onClick={() => setIsOpen(false)} ref={closeRef} aria-label="Close factory video"><X size={23} /></button>
          <iframe src={embedUrl} title="SEPPES factory video" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen />
        </div>
      </div>,
      document.body,
    )}
  </>;
}
