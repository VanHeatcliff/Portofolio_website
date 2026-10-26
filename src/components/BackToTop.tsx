"use client";

import { useEffect, useState } from "react";
import { ArrowUpIcon } from "./Icons";

/** Floating link back to the top, shown after scrolling past the hero. */
export function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > window.innerHeight * 1.2);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <a
      href="#top"
      className={`back-to-top ${visible ? "is-visible" : ""}`}
      aria-label="Back to top"
      tabIndex={visible ? 0 : -1}
      aria-hidden={visible ? undefined : true}
    >
      <ArrowUpIcon />
    </a>
  );
}
