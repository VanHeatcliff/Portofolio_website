"use client";

import { useEffect, useState } from "react";
import { navItems, profile } from "@/data/portfolio";
import { GitHubIcon, MenuIcon } from "./Icons";

/** Sections that should highlight a nav item other than their own id. */
const sectionAlias: Record<string, string> = { education: "experience" };

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState<string>("");

  // Compact header background once the page is scrolled.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Active-section indicator: the section crossing the middle of the viewport wins.
  useEffect(() => {
    if (!("IntersectionObserver" in window)) return;
    const ids = [...navItems.map((n) => n.id), ...Object.keys(sectionAlias)];
    const targets = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const id = entry.target.id;
            setActive(sectionAlias[id] ?? id);
          }
        }
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    targets.forEach((t) => io.observe(t));
    // Clear the indicator when back in the hero.
    const hero = document.getElementById("hero");
    const heroIo = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setActive(""),
      { rootMargin: "-45% 0px -50% 0px" },
    );
    if (hero) heroIo.observe(hero);
    return () => {
      io.disconnect();
      heroIo.disconnect();
    };
  }, []);

  // Close the mobile menu with Escape or when the viewport grows to desktop.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    const mq = window.matchMedia("(min-width: 900px)");
    const onChange = () => mq.matches && setOpen(false);
    window.addEventListener("keydown", onKey);
    mq.addEventListener("change", onChange);
    return () => {
      window.removeEventListener("keydown", onKey);
      mq.removeEventListener("change", onChange);
    };
  }, [open]);

  return (
    <header className={`site-header ${scrolled || open ? "site-header--solid" : ""}`}>
      <div className="container site-header__inner">
        <a href="#top" className="brand" onClick={() => setOpen(false)}>
          <span className="brand__mark" aria-hidden="true">
            FA
          </span>
          <span className="brand__name">
            {profile.name}
          </span>
        </a>

        <nav id="primary-nav" aria-label="Primary" className={`nav ${open ? "nav--open" : ""}`}>
          <ul className="nav__list">
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className={`nav__link ${active === item.id ? "is-active" : ""}`}
                  aria-current={active === item.id ? "location" : undefined}
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn--ghost btn--sm nav__cta"
          >
            <GitHubIcon size={16} />
            GitHub
            <span className="sr-only"> (opens in a new tab)</span>
          </a>
        </nav>

        <button
          type="button"
          className="nav-toggle"
          aria-expanded={open}
          aria-controls="primary-nav"
          onClick={() => setOpen((v) => !v)}
        >
          <MenuIcon open={open} />
          <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
        </button>
      </div>
    </header>
  );
}
