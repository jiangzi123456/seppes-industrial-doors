"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Clock3, Search } from "lucide-react";
import { FormEvent, useMemo, useState } from "react";
import { Breadcrumb } from "@/components/breadcrumb";
import { InquirySubmitState, submitInquiry } from "@/components/inquiry-submit";

const categories = ["All", "Product News", "Solutions", "Project Stories", "Buying Guides"];
const posts = [
  { slug: "new-generation-high-speed-roll-up-door", category: "Product News", date: "Aug 19, 2026", title: "New-Generation High-Speed Roll-Up Door for Busy Production Areas", excerpt: "See how a SEPPES rapid PVC door improves traffic flow, zone separation and automatic access in busy production areas.", read: "8 min", image: "/images/high-speed-roll-up-door-product.jpg", tone: "blue" },
  { slug: "control-dust-and-airflow-between-production-zones", category: "Solutions", date: "Aug 18, 2026", title: "How to Control Dust and Airflow Between Production Zones", excerpt: "A practical rapid-door solution for facilities that need fast traffic flow without sacrificing environmental separation.", read: "8 min", image: "/images/hero-industrial-door.jpg", tone: "red" },
  { slug: "faster-loading-route-modern-logistics-center", category: "Project Stories", date: "Aug 17, 2026", title: "A Faster Loading Route for a Modern Logistics Center", excerpt: "See how coordinated sectional doors and dock equipment improved vehicle access and loading-bay efficiency.", read: "5 min", image: "/images/logistics-door.jpg", tone: "gold" },
  { slug: undefined, category: "Solutions", date: "Aug 8, 2026", title: "Clean Access Solutions for Food and Pharmaceutical Facilities", excerpt: "Key considerations for hygiene, sealing, pressure control and safe automated access in controlled environments.", read: "7 min", image: "/images/cleanroom-door.jpg", tone: "green" },
  { slug: undefined, category: "Buying Guides", date: "Aug 7, 2026", title: "12 Questions to Ask Before Ordering an Industrial Door", excerpt: "Use this specification checklist to clarify opening size, traffic, controls, safety devices and installation conditions.", read: "9 min", image: "/images/factory-proof-grid.png", tone: "navy" },
  { slug: undefined, category: "Product News", date: "Aug 6, 2026", title: "Inside the Factory: How SEPPES Tests Every Door Before Delivery", excerpt: "From component inspection to complete function testing, discover the checks behind a reliable export-ready door system.", read: "4 min", image: "/images/factory-doors.jpg", tone: "purple" },
];

export function GeoNewsFeed() {
  const [category, setCategory] = useState("All");
  const [query, setQuery] = useState("");
  const [newsletterState, setNewsletterState] = useState<InquirySubmitState>("idle");
  const [newsletterFeedback, setNewsletterFeedback] = useState("");
  const visible = useMemo(() => posts.filter((post) => (category === "All" || post.category === category) && `${post.title} ${post.excerpt}`.toLowerCase().includes(query.toLowerCase())), [category, query]);
  const subscribe = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    setNewsletterState("submitting");
    setNewsletterFeedback("");
    try {
      const result = await submitInquiry(form, "Blog newsletter");
      form.reset();
      setNewsletterState("success");
      setNewsletterFeedback(result.message || "Thank you. Your update request has been sent.");
    } catch (error) {
      setNewsletterState("error");
      setNewsletterFeedback(error instanceof Error ? error.message : "We could not send your request. Please try again.");
    }
  };

  return <div className="geo-blog">
    <section className="geo-hero"><Image className="geo-hero__image" src="/images/factory-doors.jpg" alt="SEPPES industrial door solutions inside a modern production facility" fill priority sizes="100vw" /><div className="geo-grid" aria-hidden="true" /><div className="container geo-hero__inner">
      <div><p className="geo-kicker">Products · Solutions · Projects</p><h1>News<br /><em>& Insights</em></h1></div>
      <div className="geo-hero__aside"><p>Explore new industrial door products, application solutions and real project knowledge from the SEPPES manufacturing team.</p><div className="geo-pulse"><span /><b>Fresh industry updates</b><small>From Suzhou to global projects</small></div></div>
    </div></section>
    <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Blog" }]} />

    <section className="geo-featured"><div className="container"><div className="geo-section-label"><b>Today’s briefing</b></div>
      <article className="geo-lead"><div className="geo-lead__image"><Image src="/images/high-speed-roll-up-door-product.jpg" alt="SEPPES high-speed roll-up door for an industrial opening" fill priority sizes="(min-width: 900px) 55vw, 100vw" /><span>Featured</span></div>
        <div className="geo-lead__copy"><p className="geo-meta"><span>Product News</span> August 19, 2026 · 8 min read</p><h2>New-Generation High-Speed Roll-Up Door for Busy Production Areas</h2><p>See how rapid operation, safety sensing and configurable access help busy facilities move efficiently while maintaining reliable separation.</p><Link href="/source/blog/new-generation-high-speed-roll-up-door">Read the product update <ArrowUpRight size={18} /></Link><div className="geo-lead__number">01 <span>/ Featured</span></div></div>
      </article></div></section>

    <section className="geo-latest" id="latest"><div className="container"><div className="geo-section-label"><b>Latest intelligence</b></div>
      <div className="geo-tools"><div className="geo-tabs" role="group" aria-label="Filter news by category">{categories.map((item) => <button key={item} className={category === item ? "active" : ""} onClick={() => setCategory(item)}>{item}</button>)}</div><label className="geo-search"><Search size={17} /><span className="sr-only">Search articles</span><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search insights" /></label></div>
      {visible.length ? <div className="geo-card-grid">{visible.map((post) => <article className="geo-card" key={post.title}><div className={`geo-card__visual tone-${post.tone}`}><Image src={post.image} alt={`${post.title} — ${post.category}`} fill sizes="(min-width: 1100px) 33vw, (min-width: 650px) 50vw, 100vw" /><span>0{posts.indexOf(post) + 1}</span><b>{post.category}</b></div>
        <div className="geo-card__body"><p className="geo-meta">{post.date} <span>·</span> <Clock3 size={13} /> {post.read}</p><h3>{post.title}</h3><p>{post.excerpt}</p><Link href={post.slug ? `/source/blog/${post.slug}` : "#newsletter"} aria-label={`Read ${post.title}`}>Read insight <ArrowRight size={16} /></Link></div></article>)}</div> : <div className="geo-empty"><h3>No briefings found.</h3><p>Try another topic or clear your search.</p></div>}
    </div></section>

    <section className="geo-newsletter" id="newsletter"><div className="container geo-newsletter__inner"><div><p className="geo-kicker">SEPPES Industry Updates</p><h2>New products.<br />Practical solutions.</h2></div><div><p>Receive selected product releases, application advice and industrial project stories from our manufacturing team.</p><form onSubmit={subscribe}><div className="inquiry-honeypot" aria-hidden="true"><label>Website<input name="website" tabIndex={-1} autoComplete="off" /></label></div><label><span className="sr-only">Work email</span><input required name="email" type="email" autoComplete="email" placeholder="Work email address" /></label><button type="submit" disabled={newsletterState === "submitting"}>{newsletterState === "submitting" ? "Sending…" : "Request Updates"} <ArrowRight size={17} /></button></form><small>Your request will be sent directly to our team.</small>{newsletterFeedback && <p className={`inquiry-feedback is-${newsletterState}`} role="status" aria-live="polite">{newsletterFeedback}</p>}</div></div></section>
  </div>;
}
