"use client";

import { FormEvent, useState } from "react";
import { MessageCircle, Send, X } from "lucide-react";
import { InquirySubmitState, submitInquiry } from "./inquiry-submit";

const whatsappUrl = "https://wa.me/8617798578460?text=Hello%2C%20I%20would%20like%20to%20discuss%20an%20industrial%20door%20project%20with%20SEPPES.";

export function FloatingContact() {
  const [open, setOpen] = useState(false);
  const [state, setState] = useState<InquirySubmitState>("idle");
  const [feedback, setFeedback] = useState("");

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    setState("submitting");
    setFeedback("");

    try {
      const result = await submitInquiry(form, "Floating website inquiry form");
      form.reset();
      setState("success");
      setFeedback(result.message || "Thank you. Your inquiry has been sent.");
    } catch (error) {
      setState("error");
      setFeedback(error instanceof Error ? error.message : "We could not send your inquiry. Please try again.");
    }
  }

  return <>
    <aside className={`floating-inquiry${open ? " is-open" : ""}`} aria-label="Send project requirements">
      {open ? <div className="floating-inquiry__panel">
        <header><div><span>Project inquiry</span><h2>Send Your Requirements</h2></div><button type="button" onClick={() => setOpen(false)} aria-label="Close inquiry form"><X /></button></header>
        <p>Share the basic project information. Your inquiry will be emailed directly to our sales team.</p>
        <form onSubmit={submit}>
          <div className="inquiry-honeypot" aria-hidden="true"><label>Website<input name="website" tabIndex={-1} autoComplete="off" /></label></div>
          <div className="floating-inquiry__fields">
            <label><span>Full Name <i>*</i></span><input name="name" required autoComplete="name" /></label>
            <label><span>Company</span><input name="company" autoComplete="organization" /></label>
            <label><span>Email</span><input name="email" type="email" autoComplete="email" /></label>
            <label><span>Phone / WhatsApp <i>*</i></span><input name="phone" required autoComplete="tel" /></label>
            <label className="full">Product Required<select name="product" defaultValue=""><option value="">Select a product</option><option>High Speed Roll Up Door</option><option>High Speed Spiral Door</option><option>Industrial Sectional Door</option><option>Hydraulic Dock Leveler</option><option>Not sure yet</option></select></label>
            <label className="full"><span>Message <i>*</i></span><textarea name="message" rows={3} required /></label>
          </div>
          <button className="floating-inquiry__submit" type="submit" disabled={state === "submitting"}><Send /> {state === "submitting" ? "Sending…" : "Send Inquiry"}</button>
          {feedback && <p className={`inquiry-feedback is-${state}`} role="status" aria-live="polite">{feedback}</p>}
        </form>
      </div> : <button className="floating-inquiry__trigger" type="button" onClick={() => setOpen(true)} aria-expanded="false"><Send /><span>Send Requirements</span></button>}
    </aside>
    <a className="floating-whatsapp" href={whatsappUrl} target="_blank" rel="noreferrer" aria-label="Chat with SEPPES on WhatsApp" title="Chat on WhatsApp"><MessageCircle /></a>
  </>;
}
