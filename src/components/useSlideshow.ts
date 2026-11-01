"use client";

import { useCallback, useEffect, useRef, useState, useSyncExternalStore } from "react";
import type { FocusEvent, PointerEvent } from "react";

/** Time each screenshot stays on screen while autoplaying. */
export const SLIDE_INTERVAL_MS = 3000;

const REDUCED_QUERY = "(prefers-reduced-motion: reduce)";

function subscribeReduced(onChange: () => void) {
  const mq = window.matchMedia(REDUCED_QUERY);
  mq.addEventListener("change", onChange);
  return () => mq.removeEventListener("change", onChange);
}

const noopSubscribe = () => () => {};

function subscribeHidden(onChange: () => void) {
  document.addEventListener("visibilitychange", onChange);
  return () => document.removeEventListener("visibilitychange", onChange);
}

/**
 * Slideshow state shared by the phone and browser galleries.
 *
 * Autoplay is driven by a CSS progress animation: when the bar finishes,
 * `onAnimationEnd` advances the slide. Pausing simply sets
 * `animation-play-state: paused`, so the bar and the slide change never drift.
 *
 * Autoplay is paused while the gallery is hovered, keyboard-focused, off-screen,
 * in a background tab, or paused by the user (pause button).
 *
 * With prefers-reduced-motion, autoplay still runs but screens swap instantly
 * (the global reduced-motion CSS removes the slide/fade transitions); `reduced`
 * is returned so components can adapt if needed.
 */
export function useSlideshow(count: number) {
  // `prev` = slide that is leaving (-1 before the first change); `dir` = 1 forward, -1 backward.
  const [slide, setSlide] = useState<{ index: number; prev: number; dir: 1 | -1 }>({ index: 0, prev: -1, dir: 1 });
  const [hovered, setHovered] = useState(false);
  const [focused, setFocused] = useState(false);
  const [inView, setInView] = useState(false);
  const [userPaused, setUserPaused] = useState(false);

  // Server snapshots assume "no autoplay" so the static HTML never contains a running bar.
  const reduced = useSyncExternalStore(subscribeReduced, () => window.matchMedia(REDUCED_QUERY).matches, () => true);
  const hidden = useSyncExternalStore(subscribeHidden, () => document.hidden, () => true);

  const ref = useRef<HTMLDivElement>(null);
  const pointerStartX = useRef<number | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || !("IntersectionObserver" in window)) return;
    const io = new IntersectionObserver(([entry]) => setInView(entry.isIntersecting), { threshold: 0.35 });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const go = useCallback(
    (i: number) =>
      setSlide((s) => {
        const n = ((i % count) + count) % count;
        return n === s.index ? s : { index: n, prev: s.index, dir: n > s.index ? 1 : -1 };
      }),
    [count],
  );
  const next = useCallback(() => setSlide((s) => ({ index: (s.index + 1) % count, prev: s.index, dir: 1 })), [count]);
  const prev = useCallback(
    () => setSlide((s) => ({ index: (s.index - 1 + count) % count, prev: s.index, dir: -1 })),
    [count],
  );

  // `mounted` is false during SSR/hydration (server snapshot) so the static HTML has no running timer.
  const mounted = useSyncExternalStore(noopSubscribe, () => true, () => false);
  const autoplay = count > 1 && mounted;
  const running = autoplay && inView && !hovered && !focused && !userPaused && !hidden;

  const stageProps = {
    ref,
    onMouseEnter: () => setHovered(true),
    onMouseLeave: () => setHovered(false),
    // Only keyboard focus pauses; a mouse click on a thumbnail should not freeze the slideshow.
    onFocus: (e: FocusEvent<HTMLDivElement>) => {
      if ((e.target as HTMLElement).matches(":focus-visible")) setFocused(true);
    },
    onBlur: (e: FocusEvent<HTMLDivElement>) => {
      if (!e.currentTarget.contains(e.relatedTarget as Node | null)) setFocused(false);
    },
    // Touch swipe left/right.
    onPointerDown: (e: PointerEvent<HTMLDivElement>) => {
      pointerStartX.current = e.pointerType === "mouse" ? null : e.clientX;
    },
    onPointerUp: (e: PointerEvent<HTMLDivElement>) => {
      const start = pointerStartX.current;
      pointerStartX.current = null;
      if (start === null || count < 2) return;
      const dx = e.clientX - start;
      if (Math.abs(dx) > 40) {
        if (dx < 0) next();
        else prev();
      }
    },
  };

  return {
    index: slide.index,
    prevIndex: slide.prev,
    dir: slide.dir,
    go,
    next,
    autoplay,
    reduced,
    running,
    userPaused,
    togglePause: () => setUserPaused((p) => !p),
    stageProps,
  };
}
