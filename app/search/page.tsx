import Link from "next/link";
import { ArrowRight, Search } from "lucide-react";
import { Breadcrumb } from "@/components/breadcrumb";
import { createPageMetadata } from "@/lib/seo";
import { filterSiteSearchItems, suggestedSearches } from "@/lib/site-search";
import "./search.css";

export const metadata = createPageMetadata({
  title: "Search Products and News",
  description: "Search SEPPES industrial door products and technical news.",
  path: "/search",
  robots: { index: false, follow: true },
});

type SearchPageProps = {
  searchParams: Promise<{ q?: string | string[] }>;
};

export default async function SearchPage({ searchParams }: SearchPageProps) {
  const rawQuery = (await searchParams).q;
  const query = (Array.isArray(rawQuery) ? rawQuery[0] : rawQuery ?? "").trim();
  const results = filterSiteSearchItems(query);
  const products = results.filter((item) => item.type === "Product");
  const news = results.filter((item) => item.type === "News");
  const recommendations = suggestedSearches.filter((keyword) => keyword.toLocaleLowerCase() !== query.toLocaleLowerCase()).slice(0, 8);

  return <main className="search-page">
    <section className="search-page__hero"><div className="container">
      <span>Site search</span>
      <h1>{query ? `Results for “${query}”` : "Search Products and News"}</h1>
      <form className="search-page__form" action="/search" method="get">
        <Search aria-hidden="true" />
        <input type="search" name="q" defaultValue={query} placeholder="Search products, applications or technical topics" aria-label="Search products and news" required />
        <button type="submit">Search</button>
      </form>
    </div></section>
    <Breadcrumb currentPath="/search" items={[{ label: "Home", href: "/" }, { label: "Search" }]} />
    <section className="search-page__content"><div className="container">
      {query && <p className="search-page__count">{results.length} {results.length === 1 ? "result" : "results"} found</p>}
      {!query && <div className="search-page__empty"><h2>What are you looking for?</h2><p>Enter a product, application or technical topic to search the SEPPES product and news library.</p></div>}
      {query && !results.length && <div className="search-page__empty"><h2>No matching results</h2><p>Try a broader product name, application or technical keyword.</p></div>}
      {!!products.length && <section className="search-page__group"><header><span>Products</span><h2>Recommended products</h2></header><div className="search-page__product-grid">{products.map((item) => <Link href={item.href} key={item.href}><span>{item.category}</span><h3>{item.title}</h3><p>{item.description}</p><strong>View product <ArrowRight aria-hidden="true" /></strong></Link>)}</div></section>}
      {!!news.length && <section className="search-page__group"><header><span>News</span><h2>Related articles and guides</h2></header><div className="search-page__news-list">{news.map((item) => <Link href={item.href} key={item.href}><div><span>{item.category}</span><h3>{item.title}</h3><p>{item.description}</p></div><ArrowRight aria-hidden="true" /></Link>)}</div></section>}
      <section className="search-page__suggestions"><span>Related searches</span><h2>Explore more keywords</h2><div>{recommendations.map((keyword) => <Link href={`/search?q=${encodeURIComponent(keyword)}`} key={keyword}>{keyword}</Link>)}</div></section>
    </div></section>
  </main>;
}
