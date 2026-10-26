"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, ArrowUpRight, Clock3, Search } from "lucide-react";
import { FormEvent, useMemo, useState } from "react";
import { Breadcrumb } from "@/components/breadcrumb";
import { InquirySubmitState, submitInquiry } from "@/components/inquiry-submit";

const categories = ["All", "Product News", "Solutions", "Project Stories", "Buying Guides"];
const tones = ["red", "navy", "green", "purple", "gold", "blue"];
const pageSize = 6;

export type NewsFeedPost = {
  slug: string;
  category: string;
  date: string;
  dateISO: string;
  title: string;
  excerpt: string;
  readTime: string;
  image: string;
  imageAlt: string;
};

export function GeoNewsFeed({ posts }: { posts: NewsFeedPost[] }) {
  const [category, setCategory] = useState("All");
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [newsletterState, setNewsletterState] = useState<InquirySubmitState>("idle");
  const [newsletterFeedback, setNewsletterFeedback] = useState("");
  const filteredPosts = useMemo(() => posts.filter((post) => (category === "All" || post.category === category) && `${post.title} ${post.excerpt}`.toLowerCase().includes(query.toLowerCase())), [category, posts, query]);
  const pageCount = Math.max(1, Math.ceil(filteredPosts.length / pageSize));
  const pageStart = (page - 1) * pageSize;
  const visiblePosts = filteredPosts.slice(pageStart, pageStart + pageSize);
  const featuredPost = posts[0];
  const changePage = (nextPage: number) => {
    setPage(nextPage);
    document.getElementById("latest")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };
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

    {featuredPost && <section className="geo-featured"><div className="container"><div className="geo-section-label"><b>Today’s briefing</b></div>
      <article className="geo-lead"><Link className="geo-lead__image" href={`/source/blog/${featuredPost.slug}`} aria-label={`Read ${featuredPost.title}`}><Image src={featuredPost.image} alt={featuredPost.imageAlt} fill sizes="(min-width: 900px) 55vw, 100vw" /><span>Featured</span></Link>
        <div className="geo-lead__copy"><p className="geo-meta"><span>{featuredPost.category}</span> {featuredPost.date} · {featuredPost.readTime}</p><h2><Link href={`/source/blog/${featuredPost.slug}`}>{featuredPost.title}</Link></h2><p>{featuredPost.excerpt}</p><Link href={`/source/blog/${featuredPost.slug}`}>Read the latest insight <ArrowUpRight size={18} /></Link><div className="geo-lead__number">01 <span>/ Featured</span></div></div>
      </article></div></section>}

    <section className="geo-latest" id="latest"><div className="container"><div className="geo-section-label"><b>Latest intelligence</b></div>
      <div className="geo-tools"><div className="geo-tabs" role="group" aria-label="Filter news by category">{categories.map((item) => <button key={item} className={category === item ? "active" : ""} onClick={() => { setCategory(item); setPage(1); }}>{item}</button>)}</div><label className="geo-search"><Search size={17} /><span className="sr-only">Search articles</span><input value={query} onChange={(event) => { setQuery(event.target.value); setPage(1); }} placeholder="Search insights" /></label></div>
      {visiblePosts.length ? <><div className="geo-card-grid">{visiblePosts.map((post, index) => <article className="geo-card" key={post.slug}><Link className={`geo-card__visual tone-${tones[(pageStart + index) % tones.length]}`} href={`/source/blog/${post.slug}`} aria-label={`Read ${post.title}`}><Image src={post.image} alt={post.imageAlt} fill sizes="(min-width: 1100px) 33vw, (min-width: 650px) 50vw, 100vw" /><span>{String(pageStart + index + 1).padStart(2, "0")}</span><b>{post.category}</b></Link>
        <div className="geo-card__body"><p className="geo-meta">{post.date} <span>·</span> <Clock3 size={13} /> {post.readTime}</p><h3><Link href={`/source/blog/${post.slug}`}>{post.title}</Link></h3><p>{post.excerpt}</p><Link href={`/source/blog/${post.slug}`} aria-label={`Read ${post.title}`}>Read insight <ArrowRight size={16} /></Link></div></article>)}</div>
        {pageCount > 1 && <nav className="geo-pagination" aria-label="News pages"><button type="button" onClick={() => changePage(page - 1)} disabled={page === 1} aria-label="Previous news page"><ArrowLeft size={17} />Previous</button><div>{Array.from({ length: pageCount }, (_, index) => index + 1).map((pageNumber) => <button type="button" className={pageNumber === page ? "is-current" : ""} aria-current={pageNumber === page ? "page" : undefined} aria-label={`News page ${pageNumber}`} onClick={() => changePage(pageNumber)} key={pageNumber}>{pageNumber}</button>)}</div><button type="button" onClick={() => changePage(page + 1)} disabled={page === pageCount} aria-label="Next news page">Next<ArrowRight size={17} /></button></nav>}</> : <div className="geo-empty"><h3>No briefings found.</h3><p>Try another topic or clear your search.</p></div>}
    </div></section>

    <section className="geo-newsletter" id="newsletter"><div className="container geo-newsletter__inner"><div><p className="geo-kicker">SEPPES Industry Updates</p><h2>New products.<br />Practical solutions.</h2></div><div><p>Receive selected product releases, application advice and industrial project stories from our manufacturing team.</p><form onSubmit={subscribe}><div className="inquiry-honeypot" aria-hidden="true"><label>Website<input name="website" tabIndex={-1} autoComplete="off" /></label></div><label><span className="sr-only">Work email</span><input required name="email" type="email" autoComplete="email" placeholder="Work email address" /></label><button type="submit" disabled={newsletterState === "submitting"}>{newsletterState === "submitting" ? "Sending…" : "Request Updates"} <ArrowRight size={17} /></button></form><small>Your request will be sent directly to our team.</small>{newsletterFeedback && <p className={`inquiry-feedback is-${newsletterState}`} role="status" aria-live="polite">{newsletterFeedback}</p>}</div></div></section>
  </div>;
}
