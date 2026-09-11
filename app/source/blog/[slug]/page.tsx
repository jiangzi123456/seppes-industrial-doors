import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CalendarDays, Check, Clock3 } from "lucide-react";
import { notFound } from "next/navigation";
import { Breadcrumb } from "@/components/breadcrumb";
import { blogPosts, getBlogPost } from "@/data/blog-posts";
import "../article.css";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return blogPosts.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = getBlogPost((await params).slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
    keywords: post.slug === "high-speed-roll-up-door-food-material-access"
      ? ["high-speed roll-up door for food processing", "food production high-speed door", "raw material access door", "dust control door", "rapid roll door for food factory"]
      : post.slug === "control-dust-and-airflow-between-production-zones"
        ? ["high-speed door for dust control", "airflow control between production zones", "industrial rapid door", "production zone separation", "PVC high-speed roll-up door"]
        : ["high-speed roll-up door", "industrial rapid door", "PVC rapid door", "automatic industrial door"],
    alternates: { canonical: `/source/blog/${post.slug}` },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.excerpt,
      publishedTime: post.dateISO,
      images: [{ url: post.image, alt: post.imageAlt }],
    },
  };
}

export default async function BlogArticlePage({ params }: Props) {
  const post = getBlogPost((await params).slug);
  if (!post) notFound();
  const isRapidDoorArticle = post.slug === "new-generation-high-speed-roll-up-door";
  const isAirflowArticle = post.slug === "control-dust-and-airflow-between-production-zones";
  const isFoodArticle = post.slug === "high-speed-roll-up-door-food-material-access";
  const hasGeoAnswer = isRapidDoorArticle || isAirflowArticle || isFoodArticle;
  const rapidDoorFacts = [
    ["Opening speed", "0.6–1.5 m/s"],
    ["Maximum size", "5.8 × 6.0 m"],
    ["Standard safety", "Infrared photocell"],
    ["Control options", "I/O + RS-485"],
  ];
  const rapidDoorFaqs = [
    ["What is a high-speed roll-up door?", "It is a rapid industrial door with a flexible curtain, designed for frequent opening and closing at production, warehouse and logistics passages."],
    ["Is it suitable for forklift traffic?", "Yes. The opening size, activation method, detection zone, visibility and safety devices must be selected around the forklift route and site conditions."],
    ["How fast does the SEPPES door open?", "The product reference range is 0.6–1.5 m/s. Final operating speed is confirmed according to door size, traffic pattern and project configuration."],
    ["Can it connect with an AGV or production line?", "The control design reserves I/O terminals and RS-485 communication for agreed automation interfaces. Signal logic should be confirmed before production."],
    ["What is needed for a quotation?", "Send the opening width and height, quantity, application, traffic type, operating frequency, project location, controls and available photos or drawings."],
  ];
  const airflowFacts = [
    ["Primary function", "Shorter open time"],
    ["Traffic fit", "People, forklifts & AGVs"],
    ["Control focus", "Activation + closing logic"],
    ["System boundary", "Supports HVAC & extraction"],
  ];
  const airflowFaqs = [
    ["Can a high-speed door completely stop dust?", "No door should be presented as a complete dust-control system. A high-speed door helps reduce transfer by shortening open time and improving doorway separation, while extraction, filtration and pressure control address the wider air-management requirement."],
    ["Is a high-speed roll-up door suitable for forklift traffic?", "Yes, when the opening size, activation method, detection zone, visibility and safety devices are configured around the actual forklift route and site conditions."],
    ["Can the door work with an air curtain?", "Yes. The rapid door and air curtain can be coordinated where the application requires additional airflow management. Their operating sequence should be confirmed during project design."],
    ["Can two rapid doors be interlocked?", "Yes. Interlocking can help prevent two controlled boundaries from remaining open at the same time. The sequence, safety release and fault response must be defined for the site."],
    ["What project information is needed?", "Provide the opening dimensions, quantity, traffic type, operating frequency, environmental objective, pressure or temperature difference, control requirements and available site photos or drawings."],
  ];
  const foodFacts = [
    ["Primary objective", "Dust-transfer control"],
    ["Traffic fit", "People, forklifts & AGVs"],
    ["Control focus", "Activation + closing logic"],
    ["System boundary", "Supports facility hygiene"],
  ];
  const foodFaqs = [
    ["Can a high-speed roll-up door completely prevent dust?", "No. It can help reduce dust transfer by shortening the open interval and improving doorway separation. Extraction, filtration, pressure management and cleaning procedures must address the wider environmental-control requirement."],
    ["Is this door suitable for forklift traffic?", "Yes, provided that the opening size, activation method, detection zone, visibility and safety devices are configured around the forklift route."],
    ["Can personnel and forklifts use the same entrance?", "They can, but mixed traffic may require separate detection methods, warning devices, barriers or route-management measures following a site-specific safety assessment."],
    ["Can the door connect with an AGV or conveyor?", "Yes. Reserved control interfaces can support agreed signals from AGVs, conveyors and production equipment. The communication method and operating logic should be confirmed before production."],
    ["What information is needed for a proposal?", "Provide the opening width and height, quantity, application, traffic type, operating frequency, environmental objective, required controls, project location and available photos or drawings."],
  ];
  const quickFacts = isFoodArticle ? foodFacts : isAirflowArticle ? airflowFacts : rapidDoorFacts;
  const faqs = isFoodArticle ? foodFaqs : isAirflowArticle ? airflowFaqs : rapidDoorFaqs;
  const quickQuestion = isFoodArticle
    ? "How can a high-speed roll-up door improve a food material entrance?"
    : isAirflowArticle
      ? "How can a factory control dust and airflow between production zones?"
      : "Is a high-speed roll-up door right for a busy production area?";
  const quickAnswer = isFoodArticle
    ? "A correctly configured high-speed roll-up door shortens the time a raw-material entrance remains open, helps limit dust transfer between zones and reduces waiting for people, forklifts and AGVs. Its sealing, activation and safety configuration should be coordinated with the facility's wider hygiene and air-management systems."
    : isAirflowArticle
      ? "Use a correctly sized high-speed roll-up door to shorten the time adjacent zones remain openly connected, then coordinate its seals, activation zone and closing delay with the facility's extraction, filtration and pressure-control systems. The door supports environmental separation; it does not replace those systems."
      : "Yes—when frequent access, shorter waiting time and controlled separation are the priorities. Final speed, size, safety devices and controls should be configured around the verified opening and traffic pattern.";
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    image: `https://www.seppesde.com${post.image}`,
    datePublished: post.dateISO,
    dateModified: isFoodArticle ? "2026-09-11" : isAirflowArticle ? "2026-09-09" : isRapidDoorArticle ? "2026-09-07" : post.dateISO,
    author: { "@type": "Organization", name: "SEPPES" },
    publisher: { "@type": "Organization", name: "SEPPES" },
    mainEntityOfPage: `https://www.seppesde.com/source/blog/${post.slug}`,
  };
  const schemaData = hasGeoAnswer ? {
    "@context": "https://schema.org",
    "@graph": [schema, { "@type": "FAQPage", mainEntity: faqs.map(([question, answer]) => ({ "@type": "Question", name: question, acceptedAnswer: { "@type": "Answer", text: answer } })) }],
  } : schema;

  return <div className="blog-post">
    <section className="blog-post__hero">
      <Image src={post.image} alt={post.imageAlt} fill priority sizes="100vw" />
      <div className="blog-post__shade" />
      <div className="container blog-post__hero-content">
        <p className="reference-eyebrow">{post.category}</p>
        <h1>{post.title}</h1>
        <p className="blog-post__dek">{post.excerpt}</p>
        <div className="blog-post__meta"><span><CalendarDays /> <time dateTime={post.dateISO}>{post.date}</time></span><span><Clock3 /> {post.readTime}</span></div>
      </div>
    </section>
    <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Blog", href: "/source/blog" }, { label: post.title }]} />

    <article className="container blog-post__layout">
      <aside className="blog-post__aside">
        <p>In this article</p>
        <ol>{post.sections.map((section, index) => <li key={section.heading}><a href={`#section-${index + 1}`}>{section.heading}</a></li>)}</ol>
        <div className="blog-post__aside-cta"><strong>Planning an industrial entrance?</strong><p>Send the opening size, application, quantity and available drawings.</p><Link href="/contact">Discuss your project <ArrowRight /></Link></div>
      </aside>
      <div className="blog-post__body">
        <p className="blog-post__intro">{post.intro}</p>
        {hasGeoAnswer && <><section className="blog-post__answer" aria-labelledby="quick-answer-title"><p>Quick answer</p><h2 id="quick-answer-title">{quickQuestion}</h2><strong>{quickAnswer}</strong></section><dl className="blog-post__facts" aria-label={isFoodArticle ? "Food material entrance decision points" : isAirflowArticle ? "Environmental separation decision points" : "Product reference data"}>{quickFacts.map(([label, value]) => <div key={label}><dt><Check />{label}</dt><dd>{value}</dd></div>)}</dl></>}
        {post.leadImage && <figure className="blog-post__figure blog-post__lead-figure"><div><Image src={post.leadImage} alt={post.leadImageAlt ?? ""} fill sizes="(min-width: 900px) 760px, 100vw" /></div>{post.leadImageCaption && <figcaption>{post.leadImageCaption}</figcaption>}</figure>}
        {post.sections.map((section, index) => <section id={`section-${index + 1}`} key={section.heading}>
          <span>0{index + 1}</span>
          <h2>{section.heading}</h2>
          {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          {section.bullets && <ul>{section.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul>}
          {section.numberedItems && <ol className="blog-post__numbered">{section.numberedItems.map((item) => <li key={item}>{item}</li>)}</ol>}
          {section.subsections?.map((subsection) => <div className="blog-post__subsection" key={subsection.heading}><h3>{subsection.heading}</h3>{subsection.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}{subsection.image && <figure className="blog-post__figure"><div><Image src={subsection.image} alt={subsection.imageAlt ?? ""} fill sizes="(min-width: 900px) 760px, 100vw" /></div>{subsection.imageCaption && <figcaption>{subsection.imageCaption}</figcaption>}</figure>}</div>)}
          {section.image && <figure className="blog-post__figure"><div><Image src={section.image} alt={section.imageAlt ?? ""} fill sizes="(min-width: 900px) 760px, 100vw" /></div>{section.imageCaption && <figcaption>{section.imageCaption}</figcaption>}</figure>}
        </section>)}
        {hasGeoAnswer && <section className="blog-post__faq" id="frequently-asked-questions"><span>FAQ</span><h2>{isFoodArticle ? "Food Material Access Questions" : isAirflowArticle ? "Dust and Airflow Control Questions" : "High-Speed Roll-Up Door Questions"}</h2><div>{faqs.map(([question, answer]) => <details key={question}><summary>{question}</summary><p>{answer}</p></details>)}</div></section>}
        <div className="blog-post__next">
          <div><p className="reference-eyebrow blue">Related solution</p><h2>Continue Your Project Research</h2></div>
          <Link className="reference-button reference-button--red" href={post.relatedHref}>{post.relatedLabel} <ArrowRight /></Link>
        </div>
      </div>
    </article>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData).replace(/</g, "\\u003c") }} />
  </div>;
}
