"use client";

import { Send } from "lucide-react";
import { FormEvent, useState } from "react";
import { InquirySubmitState, submitInquiry } from "./inquiry-submit";

export function HomeInquiryForm() {
  const [state, setState] = useState<InquirySubmitState>("idle");
  const [feedback, setFeedback] = useState("");

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    setState("submitting");
    setFeedback("");

    try {
      const result = await submitInquiry(form, "Main website inquiry form");
      form.reset();
      setState("success");
      setFeedback(result.message || "Thank you. Your inquiry has been sent to our sales team.");
    } catch (error) {
      setState("error");
      setFeedback(error instanceof Error ? error.message : "We could not send your inquiry. Please try again.");
    }
  }

  return <section className="home-inquiry"><div className="container home-inquiry__grid"><div className="home-inquiry__intro"><p className="reference-eyebrow blue">Prepare your inquiry</p><h2>Discuss Your Industrial Door Project</h2><p>Send the details you already have and identify the decisions that are still open.</p><a className="home-inquiry__whatsapp" href="https://wa.me/8617798578460" target="_blank" rel="noreferrer">Continue on WhatsApp</a></div><form className="home-inquiry__form" onSubmit={submit}><div className="inquiry-honeypot" aria-hidden="true"><label>Website<input name="website" tabIndex={-1} autoComplete="off" /></label></div><div className="home-inquiry__fields"><label><span>Full Name <i>*</i></span><input name="name" required autoComplete="name" /></label><label><span>Company Name</span><input name="company" autoComplete="organization" /></label><label><span>Email</span><input name="email" type="email" autoComplete="email" /></label><label><span>Country</span><input name="country" autoComplete="country-name" /></label><label><span>Phone / WhatsApp <i>*</i></span><input name="phone" required autoComplete="tel" /></label><label><span>Product Required</span><select name="product" defaultValue=""><option value="">Select a product</option><option>High Speed Roll Up Door</option><option>High Speed Spiral Door</option><option>Industrial Sectional Door</option><option>Hydraulic Dock Leveler</option><option>Not sure yet</option></select></label><label className="full"><span>Message <i>*</i></span><textarea name="message" rows={5} required /></label></div><p className="home-inquiry__privacy">Fields marked * are required. Your inquiry will be sent directly to our sales team. Read our <a href="/privacy">Privacy Policy</a>.</p><button className="home-inquiry__submit" type="submit" disabled={state === "submitting"}><Send size={17} /> {state === "submitting" ? "Sending…" : "Send Inquiry"}</button>{feedback && <p className={`inquiry-feedback is-${state}`} role="status" aria-live="polite">{feedback}</p>}</form></div></section>;
}
