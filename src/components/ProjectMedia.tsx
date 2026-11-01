"use client";

import Image from "next/image";
import { useLayoutEffect, useRef } from "react";
import type { ImageData, ProjectMedia as Media } from "@/data/portfolio";
import { PauseIcon, PlayIcon } from "./Icons";
import { SLIDE_INTERVAL_MS, useSlideshow } from "./useSlideshow";

type Slideshow = ReturnType<typeof useSlideshow>;

const pad = (n: number) => String(n).padStart(2, "0");

/**
 * Real project screenshots with an animated slideshow.
 * - mobile: phone frames that rotate positions (side phone moves to the front).
 * - desktop: a browser frame that cross-fades between screens, with thumbnails.
 */
export function ProjectMedia({ media, title }: { media: Media; title: string }) {
  return media.kind === "mobile" ? (
    <PhoneCarousel shots={media.shots.slice(0, 3)} title={title} />
  ) : (
    <BrowserGallery shots={media.shots} title={title} />
  );
}

/** Progress bar on the active control; finishing it advances the slide. */
function Progress({ show }: { show: Slideshow }) {
  if (!show.autoplay) return null;
  return (
    <span
      key={show.index}
      className="slide-progress"
      aria-hidden="true"
      style={{
        // The CSS variable lets the reduced-motion stylesheet keep the real duration.
        ["--slide-duration" as string]: `${SLIDE_INTERVAL_MS}ms`,
        animationDuration: `${SLIDE_INTERVAL_MS}ms`,
        animationPlayState: show.running ? "running" : "paused",
      }}
      onAnimationEnd={show.next}
    />
  );
}

function PauseButton({ show, title }: { show: Slideshow; title: string }) {
  if (!show.autoplay) return null;
  return (
    <button
      type="button"
      className="slide-pause"
      aria-pressed={show.userPaused}
      aria-label={show.userPaused ? `Play ${title} slideshow` : `Pause ${title} slideshow`}
      onClick={show.togglePause}
    >
      {show.userPaused ? <PlayIcon /> : <PauseIcon />}
    </button>
  );
}

/** Announces manual changes only; silent while autoplaying to avoid noise. */
function LiveStatus({ show, shots }: { show: Slideshow; shots: ImageData[] }) {
  return (
    <span className="sr-only" aria-live={show.running ? "off" : "polite"}>
      {`Screenshot ${show.index + 1} of ${shots.length}: ${shots[show.index].alt}`}
    </span>
  );
}

const SLOTS: Record<number, string[]> = {
  1: ["center"],
  2: ["front", "back"],
  3: ["center", "right", "left"],
};

function PhoneCarousel({ shots, title }: { shots: ImageData[]; title: string }) {
  const show = useSlideshow(shots.length);
  const slots = SLOTS[shots.length];

  return (
    <div className={`media media--mobile media--count-${shots.length}`} {...show.stageProps}>
      <div className="phones">
        {shots.map((shot, i) => {
          const slot = slots[(i - show.index + shots.length) % shots.length];
          const isFront = slot === "center" || slot === "front";
          return (
            <div
              key={shot.src}
              className="phone"
              data-slot={slot}
              data-dir={show.dir}
              onClick={isFront ? undefined : () => show.go(i)}
            >
              <Image
                src={shot.src}
                alt={shot.alt}
                width={shot.width}
                height={shot.height}
                sizes="(min-width: 900px) 220px, 40vw"
                className="phone__img"
              />
            </div>
          );
        })}
      </div>

      {shots.length > 1 && (
        <div className="slide-nav">
          <div className="slide-dots" role="group" aria-label={`${title} screenshots`}>
            {shots.map((shot, i) => (
              <button
                key={shot.src}
                type="button"
                className={`slide-dot ${i === show.index ? "is-current" : ""} ${show.autoplay ? "" : "is-static"}`}
                aria-pressed={i === show.index}
                aria-label={`Show screenshot ${i + 1} of ${shots.length}: ${shot.alt}`}
                onClick={() => show.go(i)}
              >
                <span className="slide-dot__bar">{i === show.index && <Progress show={show} />}</span>
              </button>
            ))}
          </div>
          <PauseButton show={show} title={title} />
        </div>
      )}
      <LiveStatus show={show} shots={shots} />
    </div>
  );
}

/** Easing for the browser slide: slow start, fast middle, soft landing. */
const SLIDE_EASE = "cubic-bezier(0.77, 0, 0.175, 1)";
const SLIDE_MS = 1000;

/**
 * Directional "wipe + parallax" between screenshots (Web Animations API):
 * the incoming screen is revealed with a clip-path wipe while drifting in and
 * settling from a slight zoom; the outgoing screen slides away more slowly and dims.
 * Reduced motion gets a short cross-fade with no movement.
 */
function useBrowserTransition(show: Slideshow) {
  const imgs = useRef<(HTMLImageElement | null)[]>([]);
  const animated = useRef(show.index);
  const { index, prevIndex, dir, reduced } = show;

  useLayoutEffect(() => {
    if (animated.current === index || prevIndex < 0) return;
    animated.current = index;
    const incoming = imgs.current[index];
    const outgoing = imgs.current[prevIndex];
    if (!incoming || !outgoing || typeof incoming.animate !== "function") return;
    imgs.current.forEach((el) => el?.getAnimations().forEach((a) => a.cancel()));

    if (reduced) {
      const opts = { duration: 380, easing: "ease" };
      incoming.animate([{ opacity: 0 }, { opacity: 1 }], opts);
      outgoing.animate([{ visibility: "visible" }, { visibility: "visible" }], opts);
      return;
    }

    const opts = { duration: SLIDE_MS, easing: SLIDE_EASE };
    incoming.animate(
      [
        { clipPath: dir > 0 ? "inset(0 0 0 100%)" : "inset(0 100% 0 0)", transform: `translateX(${dir * 18}%) scale(1.1)` },
        { clipPath: "inset(0 0 0 0)", transform: "translateX(0) scale(1)" },
      ],
      opts,
    );
    outgoing.animate(
      [
        { visibility: "visible", transform: "translateX(0) scale(1)", filter: "brightness(1)" },
        { visibility: "visible", transform: `translateX(${-dir * 22}%) scale(0.94)`, filter: "brightness(0.35)" },
      ],
      opts,
    );
  }, [index, prevIndex, dir, reduced]);

  return imgs;
}

function BrowserGallery({ shots, title }: { shots: ImageData[]; title: string }) {
  const show = useSlideshow(shots.length);
  const imgs = useBrowserTransition(show);

  return (
    <div className="media media--desktop" {...show.stageProps}>
      <div className="browser">
        <div className="browser__bar" aria-hidden="true">
          <span className="browser__dots">
            <i />
            <i />
            <i />
          </span>
          <span className="browser__title">{title}</span>
          <span className="browser__count">
            <span key={show.index} className="browser__count-num" data-dir={show.dir}>
              {pad(show.index + 1)}
            </span>{" "}
            / {pad(shots.length)}
          </span>
        </div>
        <div className="browser__view">
          {shots.map((shot, i) => (
            <Image
              key={shot.src}
              ref={(el) => {
                imgs.current[i] = el;
              }}
              src={shot.src}
              alt={i === show.index ? shot.alt : ""}
              aria-hidden={i === show.index ? undefined : true}
              width={shot.width}
              height={shot.height}
              sizes="(min-width: 1200px) 640px, (min-width: 900px) 55vw, 92vw"
              className={`browser__img ${i === show.index ? "is-current" : ""}`}
            />
          ))}
        </div>
      </div>

      {shots.length > 1 && (
        <div className="slide-nav">
          <div className="thumbs" role="group" aria-label={`${title} screenshots`}>
            {shots.map((shot, i) => (
              <button
                key={shot.src}
                type="button"
                className={`thumb ${i === show.index ? "is-current" : ""}`}
                aria-pressed={i === show.index}
                aria-label={`Show screenshot ${i + 1} of ${shots.length}: ${shot.alt}`}
                onClick={() => show.go(i)}
              >
                <Image src={shot.src} alt="" width={shot.width} height={shot.height} sizes="96px" className="thumb__img" />
                {i === show.index && <Progress show={show} />}
              </button>
            ))}
          </div>
          <PauseButton show={show} title={title} />
        </div>
      )}
      <LiveStatus show={show} shots={shots} />
    </div>
  );
}
