"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { ArrowRight, ChevronDown, Menu, Search, X } from "lucide-react";
import { useEffect, useMemo, useRef, useState } from "react";
import { BrandLogo } from "./brand-logo";
import type { SiteSearchItem } from "@/lib/site-search";

type NavItem = {
  label: string;
  href: string;
  children?: Array<{ label: string; href: string }>;
};

const links: NavItem[] = [
  { label: "Home", href: "/" },
  {
    label: "Products",
    href: "/products",
    children: [
      {
        label: "High Speed Roll Up Door",
        href: "/products/high-speed-roll-up-door",
      },
      {
        label: "Zipper High Speed Door",
        href: "/products/zipper-high-speed-door",
      },
      {
        label: "High Speed Spiral Door",
        href: "/products/high-speed-spiral-door",
      },
      {
        label: "Industrial Sectional Door",
        href: "/products/industrial-sectional-door",
      },
    ],
  },
  { label: "Solutions", href: "/solutions", children: [
    { label: "Food & Beverage", href: "/solutions/food-beverage" },
    { label: "Pharmaceutical Cleanrooms", href: "/solutions/pharmaceutical-cleanroom" },
    { label: "Cold Chain", href: "/solutions/cold-chain" },
    { label: "Automotive Manufacturing", href: "/solutions/automotive-automated-manufacturing" },
    { label: "Logistics & Warehousing", href: "/solutions/logistics-warehousing" },
  ] },
  { label: "Project Support", href: "/project-support" },
  { label: "Blog", href: "/source/blog" },
  { label: "About", href: "/about", children: [{ label: "Quality & Certifications", href: "/quality-certifications" }] },
  { label: "Contact", href: "/contact" },
];

const dismissedDropdownKey = "seppes-dismissed-dropdown";

export function Header({ searchItems }: { searchItems: SiteSearchItem[] }) {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [scrolled, setScrolled] = useState(false);
  const [dismissedDropdown, setDismissedDropdown] = useState<string | null>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);
  const searchAreaRef = useRef<HTMLDivElement>(null);

  const searchResults = useMemo(() => {
    const terms = query.trim().toLocaleLowerCase().split(/\s+/).filter(Boolean);
    if (!terms.length) return [];
    return searchItems.filter((item) => {
      const haystack = `${item.title} ${item.category} ${item.description} ${item.terms}`.toLocaleLowerCase();
      return terms.every((term) => haystack.includes(term));
    }).slice(0, 10);
  }, [query, searchItems]);

  const closeSearch = () => {
    setSearchOpen(false);
    setQuery("");
  };

  const openSearchPage = (searchValue = query) => {
    const value = searchValue.trim();
    if (!value) return;
    router.push(`/search?q=${encodeURIComponent(value)}`);
    closeSearch();
  };

  const dismissDropdown = (href: string) => {
    setDismissedDropdown(href);
    document.documentElement.classList.add("nav-dropdown-dismissed");
    window.sessionStorage.setItem(dismissedDropdownKey, href);
  };

  const restoreDropdown = () => {
    setDismissedDropdown(null);
    document.documentElement.classList.remove("nav-dropdown-dismissed");
    window.sessionStorage.removeItem(dismissedDropdownKey);
  };

  useEffect(() => {
    const dismissed = window.sessionStorage.getItem(dismissedDropdownKey);
    setDismissedDropdown(dismissed);
    document.documentElement.classList.toggle("nav-dropdown-dismissed", Boolean(dismissed));
  }, []);

  useEffect(() => {
    if (!searchOpen) return;
    searchInputRef.current?.focus();
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeSearch();
    };
    const closeOnOutsideClick = (event: PointerEvent) => {
      if (event.target instanceof Node && !searchAreaRef.current?.contains(event.target)) closeSearch();
    };
    window.addEventListener("keydown", closeOnEscape);
    document.addEventListener("pointerdown", closeOnOutsideClick);
    return () => {
      window.removeEventListener("keydown", closeOnEscape);
      document.removeEventListener("pointerdown", closeOnOutsideClick);
    };
  }, [searchOpen]);

  useEffect(() => {
    const getPageScrollTop = () =>
      Math.max(
        window.scrollY,
        document.documentElement.scrollTop,
        document.body.scrollTop,
        document.scrollingElement?.scrollTop ?? 0,
      );

    const update = (event?: Event) => {
      const target = event?.target;
      const containerScrollTop =
        target instanceof HTMLElement && target.closest("main")
          ? target.scrollTop
          : 0;

      setScrolled(Math.max(getPageScrollTop(), containerScrollTop) > 56);
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    document.addEventListener("scroll", update, { passive: true, capture: true });

    return () => {
      window.removeEventListener("scroll", update);
      document.removeEventListener("scroll", update, { capture: true });
    };
  }, []);

  return (
    <header
      className={`site-header reference-header${scrolled ? " is-scrolled" : ""}${searchOpen ? " has-search-open" : ""}`}
    >
      <div className="container header-inner">
        <Link className="brand" href="/" aria-label="SEPPES home">
          {scrolled ? <BrandLogo light /> : <BrandLogo />}
        </Link>

        <nav className="desktop-nav" aria-label="Main navigation">
          {links.map((item) =>
            item.children ? (
              <div
                className={`nav-dropdown${dismissedDropdown === item.href ? " is-dismissed" : ""}`}
                key={item.href}
                onMouseLeave={restoreDropdown}
              >
                <Link
                  className="nav-dropdown__trigger"
                  href={item.href}
                  aria-haspopup="true"
                  onClick={(event) => {
                    event.currentTarget.blur();
                    dismissDropdown(item.href);
                  }}
                >
                  {item.label}
                  <ChevronDown aria-hidden="true" />
                </Link>
                <div
                  className="nav-dropdown__menu"
                  aria-label={`${item.label} submenu`}
                >
                  {item.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      onClick={(event) => {
                        event.currentTarget.blur();
                        dismissDropdown(item.href);
                      }}
                    >
                      <span>{child.label}</span>
                      <span aria-hidden="true">→</span>
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link key={item.href} href={item.href}>
                {item.label}
              </Link>
            ),
          )}
        </nav>

        {searchOpen ? (
          <div className="site-search__inline" ref={searchAreaRef}>
            <form className="site-search__inline-field" action="/search" method="get" onSubmit={(event) => {
              event.preventDefault();
              openSearchPage(String(new FormData(event.currentTarget).get("q") ?? ""));
            }}>
              <Search aria-hidden="true" />
              <input ref={searchInputRef} name="q" type="search" value={query} onChange={(event) => setQuery(event.target.value)} onKeyDown={(event) => { if (event.key === "Enter") { event.preventDefault(); openSearchPage(event.currentTarget.value); } }} placeholder="Search products and news" aria-label="Search products and news" />
              <button type="button" onClick={closeSearch} aria-label="Close search"><X aria-hidden="true" /></button>
            </form>
            {query.trim() && (
              <div className="site-search__inline-results" aria-live="polite">
                {!searchResults.length && <p>No matching products or news found. Try a broader keyword.</p>}
                {searchResults.map((item) => (
                  <Link href={item.href} key={`${item.type}-${item.href}`} onClick={closeSearch}>
                    <div><span>{item.type} · {item.category}</span><h3>{item.title}</h3><p>{item.description}</p></div>
                    <ArrowRight aria-hidden="true" />
                  </Link>
                ))}
              </div>
            )}
          </div>
        ) : (
          <button className="site-search__trigger" type="button" aria-label="Search products and news" aria-expanded={false} onClick={() => { setOpen(false); setSearchOpen(true); }}>
            <Search aria-hidden="true" />
          </button>
        )}

        <button
          className="menu-button"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-label="Toggle navigation"
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <nav className="mobile-nav" aria-label="Mobile navigation">
          {links.map((item) =>
            item.children ? (
              <div className="mobile-nav__group" key={item.href}>
                <Link href={item.href} onClick={() => setOpen(false)}>
                  {item.label}
                </Link>
                {item.children.map((child) => (
                  <Link
                    className="mobile-nav__child"
                    key={child.href}
                    href={child.href}
                    onClick={() => setOpen(false)}
                  >
                    {child.label}
                    <span aria-hidden="true">→</span>
                  </Link>
                ))}
              </div>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ),
          )}
        </nav>
      )}

    </header>
  );
}
