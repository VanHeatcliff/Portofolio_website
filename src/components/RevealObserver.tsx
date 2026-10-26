"use client";

import { useEffect } from "react";

/**
 * Progressive scroll reveal. Content is fully visible in the server HTML; this
 * component only opts the page into the hidden-until-visible state once
 * IntersectionObserver is confirmed to work, and skips it entirely for
 * prefers-reduced-motion. If JavaScript fails, nothing stays hidden.
 */
export function RevealObserver() {
  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced || !("IntersectionObserver" in window)) return;

    const root = document.documentElement;
    const els = Array.from(document.querySelectorAll<HTMLElement>(".reveal"));

    // Anything already on screen is marked visible first, so it never flickers.
    const limit = window.innerHeight * 0.92;
    els.forEach((el) => {
      if (el.getBoundingClientRect().top < limit) el.classList.add("is-visible");
    });
    root.classList.add("reveal-on");

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 },
    );
    els.forEach((el) => !el.classList.contains("is-visible") && io.observe(el));

    return () => {
      io.disconnect();
      root.classList.remove("reveal-on");
    };
  }, []);

  return null;
}
