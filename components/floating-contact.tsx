"use client";

import dynamic from "next/dynamic";
import { useState } from "react";
import { MessageCircle, Send } from "lucide-react";

const FloatingInquiryPanel = dynamic(
  () => import("./floating-inquiry-panel").then((module) => module.FloatingInquiryPanel),
  { loading: () => <div className="floating-inquiry__panel" aria-busy="true"><p>Loading inquiry form…</p></div> },
);

const whatsappUrl = "https://wa.me/8617798578460?text=Hello%2C%20I%20would%20like%20to%20discuss%20an%20industrial%20door%20project%20with%20SEPPES.";

export function FloatingContact() {
  const [open, setOpen] = useState(false);

  return <>
    <aside className={`floating-inquiry${open ? " is-open" : ""}`} aria-label="Send project requirements">
      {open ? <FloatingInquiryPanel onClose={() => setOpen(false)} /> : <button className="floating-inquiry__trigger" type="button" onClick={() => setOpen(true)} aria-expanded="false"><Send /><span>Send Requirements</span></button>}
    </aside>
    <a className="floating-whatsapp" href={whatsappUrl} target="_blank" rel="noreferrer" aria-label="Chat with SEPPES on WhatsApp" title="Chat on WhatsApp"><MessageCircle /></a>
  </>;
}
