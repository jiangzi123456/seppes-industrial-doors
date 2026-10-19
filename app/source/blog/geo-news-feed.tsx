"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Clock3, Search } from "lucide-react";
import { FormEvent, useMemo, useState } from "react";
import { Breadcrumb } from "@/components/breadcrumb";
import { InquirySubmitState, submitInquiry } from "@/components/inquiry-submit";

const categories = ["All", "Product News", "Solutions", "Project Stories", "Buying Guides"];
const posts = [
  {
    slug: "high-speed-door-safety-sensors-photocell-light-curtain-safety-edge",
    category: "Buying Guides",
    date: "Oct 19, 2026",
    title: "High-Speed Door Safety Sensors: Photocell vs Light Curtain vs Safety Edge",
    excerpt: "Compare three protective devices by detection coverage, response role and traffic risk before configuring a high-speed door.",
    read: "9 min",
    image: "/images/blog/high-speed-door-safety-sensors-comparison.webp",
    tone: "red",
  },
  {
    slug: "how-to-choose-hydraulic-dock-leveler",
    category: "Buying Guides",
    date: "Oct 15, 2026",
    title: "How to Choose a Hydraulic Dock Leveler: Pit, Traffic and Trailer Fit",
    excerpt: "Match the leveler to the pit, trailer range, forklift traffic, lip reach and complete loading-bay safety sequence.",
    read: "10 min",
    image: "/images/blog/hydraulic-dock-leveler-selection.webp",
    tone: "navy",
  },
  {
    slug: "high-speed-door-vs-industrial-sectional-door",
    category: "Buying Guides",
    date: "Oct 12, 2026",
    title: "High-Speed Door vs Industrial Sectional Door: How to Choose",
    excerpt:
      "Compare traffic frequency, insulation, security, installation space and controls before choosing the right industrial entrance.",
    read: "10 min",
    image: "/images/blog/high-speed-vs-sectional-door-comparison.webp",
    tone: "navy",
  },
  {
    slug: "zipper-high-speed-door-for-cleanrooms",
    category: "Solutions",
    date: "Oct 9, 2026",
    title: "Zipper High-Speed Doors for Cleanrooms: Selection Guide",
    excerpt:
      "Learn how to evaluate doorway pressure, cleaning, safety and recovery needs when selecting a zipper high-speed door for a cleanroom boundary.",
    read: "9 min",
    image: "/images/blog/cleanroom-zipper-door-yellow-window-crop.webp",
    tone: "green",
  },
  { slug: "high-speed-door-for-industrial-equipment-integration", category: "Solutions", date: "Oct 9, 2026", title: "High-Speed Doors for Industrial Equipment and Automated Lines", excerpt: "Integrate a high-speed door with conveyors, machines, AGVs and robot cells by defining signals, safety zones and fault logic before production.", read: "8 min", image: "/images/blog/rapid-door-production-line.jpg", tone: "red" },
  { slug: "zipper-vs-brush-sealed-high-speed-doors", category: "Buying Guides", date: "Sep 23, 2026", title: "Zipper vs Brush-Sealed High-Speed Doors: How to Choose", excerpt: "Compare side-guide sealing, traffic fit, wear parts and impact recovery before choosing a high-speed door.", read: "9 min", image: "/images/blog/zipper-vs-brush-cleanroom-case-crop.webp", tone: "blue" },
  { slug: "new-generation-high-speed-roll-up-door", category: "Product News", date: "Aug 19, 2026", title: "New-Generation High-Speed Roll-Up Door for Busy Production Areas", excerpt: "See how a SEPPES rapid PVC door improves traffic flow, zone separation and automatic access in busy production areas.", read: "8 min", image: "/images/high-speed-roll-up-door-product.jpg", tone: "blue" },
  { slug: "control-dust-and-airflow-between-production-zones", category: "Solutions", date: "Aug 18, 2026", title: "How to Control Dust and Airflow Between Production Zones", excerpt: "A practical rapid-door solution for facilities that need fast traffic flow without sacrificing environmental separation.", read: "8 min", image: "/images/hero-industrial-door.jpg", tone: "red" },
  { slug: "high-speed-roll-up-door-food-material-access", category: "Solutions", date: "Aug 17, 2026", title: "High-Speed Roll-Up Doors for Food Material Access", excerpt: "Reduce dust transfer, shorten waiting time and improve raw-material traffic in food production areas.", read: "8 min", image: "/images/cleanroom-door.jpg", tone: "green" },
  {"slug":"cleanroom-door-solutions-food-pharmaceutical","category":"Solutions","date":"Sep 20, 2026","title":"Clean Access Solutions for Food and Pharmaceutical Facilities","excerpt":"Specify clean-area doors around pressure, cleaning methods, traffic and interlocks. A practical selection and validation guide for project teams.","read":"8 min","image":"/images/blog/clean-access-pharma-case.webp","tone":"green"},
  {"slug":"industrial-door-buyer-checklist-12-questions","category":"Buying Guides","date":"Sep 20, 2026","title":"12 Questions to Ask Before Ordering an Industrial Door","excerpt":"A buyer's checklist for duty, site conditions, safety, materials, controls and support—with useful answers and the gaps worth questioning.","read":"8 min","image":"/images/blog/industrial-door-selection-case.webp","tone":"navy"},
  {"slug":"industrial-door-pre-delivery-inspection","category":"Product News","date":"Sep 20, 2026","title":"Inside the Factory: Industrial Door Testing Before Delivery","excerpt":"Separate design validation, equipment checks and site acceptance. A practical guide to inspection scope, safety functions and handover records.","read":"8 min","image":"/images/blog/industrial-door-factory-inspection.webp","tone":"purple"},
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
    <Breadcrumb currentPath="/source/blog" items={[{ label: "Home", href: "/" }, { label: "Blog" }]} />

    <section className="geo-featured"><div className="container"><div className="geo-section-label"><b>Today’s briefing</b></div>
      <article className="geo-lead"><div className="geo-lead__image"><Image src="/images/blog/high-speed-door-safety-sensors-comparison.webp" alt="SEPPES high-speed door photocell, safety light curtain and safety edge shown side by side" fill priority sizes="(min-width: 900px) 55vw, 100vw" /><span>Featured</span></div>
        <div className="geo-lead__copy"><p className="geo-meta"><span>Buying Guides</span> October 19, 2026 · 9 min read</p><h2>High-Speed Door Safety Sensors: Photocell vs Light Curtain vs Safety Edge</h2><p>Compare three protective devices by detection coverage, response role and traffic risk before configuring a high-speed door.</p><Link href="/source/blog/high-speed-door-safety-sensors-photocell-light-curtain-safety-edge">Read the safety guide <ArrowUpRight size={18} /></Link><div className="geo-lead__number">01 <span>/ Featured</span></div></div>
      </article></div></section>

    <section className="geo-latest" id="latest"><div className="container"><div className="geo-section-label"><b>Latest intelligence</b></div>
      <div className="geo-tools"><div className="geo-tabs" role="group" aria-label="Filter news by category">{categories.map((item) => <button key={item} className={category === item ? "active" : ""} onClick={() => setCategory(item)}>{item}</button>)}</div><label className="geo-search"><Search size={17} /><span className="sr-only">Search articles</span><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search insights" /></label></div>
      {visible.length ? <div className="geo-card-grid">{visible.map((post) => <article className="geo-card" key={post.title}><div className={`geo-card__visual tone-${post.tone}`}><Image src={post.image} alt={`${post.title} — ${post.category}`} fill sizes="(min-width: 1100px) 33vw, (min-width: 650px) 50vw, 100vw" /><span>0{posts.indexOf(post) + 1}</span><b>{post.category}</b></div>
        <div className="geo-card__body"><p className="geo-meta">{post.date} <span>·</span> <Clock3 size={13} /> {post.read}</p><h3>{post.title}</h3><p>{post.excerpt}</p><Link href={`/source/blog/${post.slug}`} aria-label={`Read ${post.title}`}>Read insight <ArrowRight size={16} /></Link></div></article>)}</div> : <div className="geo-empty"><h3>No briefings found.</h3><p>Try another topic or clear your search.</p></div>}
    </div></section>

    <section className="geo-newsletter" id="newsletter"><div className="container geo-newsletter__inner"><div><p className="geo-kicker">SEPPES Industry Updates</p><h2>New products.<br />Practical solutions.</h2></div><div><p>Receive selected product releases, application advice and industrial project stories from our manufacturing team.</p><form onSubmit={subscribe}><div className="inquiry-honeypot" aria-hidden="true"><label>Website<input name="website" tabIndex={-1} autoComplete="off" /></label></div><label><span className="sr-only">Work email</span><input required name="email" type="email" autoComplete="email" placeholder="Work email address" /></label><button type="submit" disabled={newsletterState === "submitting"}>{newsletterState === "submitting" ? "Sending…" : "Request Updates"} <ArrowRight size={17} /></button></form><small>Your request will be sent directly to our team.</small>{newsletterFeedback && <p className={`inquiry-feedback is-${newsletterState}`} role="status" aria-live="polite">{newsletterFeedback}</p>}</div></div></section>
  </div>;
}
