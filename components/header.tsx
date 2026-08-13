"use client";

import Link from "next/link";
import { ChevronDown, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { BrandLogo } from "./brand-logo";

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
    ],
  },
  { label: "Solutions", href: "/solutions" },
  { label: "Project Support", href: "/project-support" },
  { label: "Blog", href: "/source/blog" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 56);
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  return (
    <header
      className={`site-header reference-header${scrolled ? " is-scrolled" : ""}`}
    >
      <div className="container header-inner">
        <Link className="brand" href="/" aria-label="SEPPES home">
          {scrolled ? <BrandLogo light /> : <BrandLogo />}
        </Link>

        <nav className="desktop-nav" aria-label="Main navigation">
          {links.map((item) =>
            item.children ? (
              <div className="nav-dropdown" key={item.href}>
                <Link
                  className="nav-dropdown__trigger"
                  href={item.href}
                  aria-haspopup="true"
                >
                  {item.label}
                  <ChevronDown aria-hidden="true" />
                </Link>
                <div
                  className="nav-dropdown__menu"
                  aria-label={`${item.label} submenu`}
                >
                  {item.children.map((child) => (
                    <Link key={child.href} href={child.href}>
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
