"use client";

import { MessageCircle } from "lucide-react";
import { FormEvent } from "react";

export function HomeInquiryForm() {
  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const subject = `Industrial door inquiry from ${form.get("company") || form.get("name")}`;
    const body = [
      `Full Name: ${form.get("name")}`,
      `Company: ${form.get("company")}`,
      `Email: ${form.get("email") || "Not provided"}`,
      `Country: ${form.get("country") || "Not provided"}`,
      `Phone / WhatsApp: ${form.get("phone")}`,
      `Product Required: ${form.get("product") || "Not specified"}`,
      "",
      String(form.get("message") || ""),
    ].join("\n");
    window.location.href = `mailto:huijia@seppes.com.cn?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }

  return <section className="home-inquiry"><div className="container home-inquiry__grid"><div className="home-inquiry__intro"><p className="reference-eyebrow blue">Prepare your inquiry</p><h2>Discuss Your Industrial Door Project</h2><p>Send the details you already have and identify the decisions that are still open.</p><a className="home-inquiry__whatsapp" href="https://wa.me/8617798578460" target="_blank" rel="noreferrer"><MessageCircle size={19} /> Send Project Details on WhatsApp</a></div><form className="home-inquiry__form" onSubmit={submit}><div className="home-inquiry__fields"><label>Full Name <i>*</i><input name="name" required /></label><label>Company Name <i>*</i><input name="company" required /></label><label>Email <i>*</i><input name="email" type="email" required /></label><label>Country<input name="country" /></label><label>Phone / WhatsApp <i>*</i><input name="phone" required /></label><label>Product Required<select name="product" defaultValue=""><option value="" disabled>Select a product</option><option>High Speed Roll Up Door</option><option>High Speed Spiral Door</option><option>Industrial Sectional Door</option><option>Hydraulic Dock Leveler</option><option>Not sure yet</option></select></label><label className="full">Message <i>*</i><textarea name="message" rows={5} required /></label></div><p className="home-inquiry__privacy">Fields marked * are required. We use your details only to respond to this inquiry. Read our <a href="/privacy">Privacy Policy</a>.</p><button className="home-inquiry__submit" type="submit">Prepare Email Inquiry</button></form></div></section>;
}
