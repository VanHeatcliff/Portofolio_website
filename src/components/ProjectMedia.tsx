"use client";

import Image from "next/image";
import { useState } from "react";
import type { ProjectMedia as Media } from "@/data/portfolio";

/**
 * Real project screenshots.
 * - mobile: up to three phone frames, fanned out.
 * - desktop: a browser frame with thumbnail buttons to switch screens.
 */
export function ProjectMedia({ media, title }: { media: Media; title: string }) {
  if (media.kind === "mobile") {
    const shots = media.shots.slice(0, 3);
    return (
      <div className={`media media--mobile media--count-${shots.length}`}>
        {shots.map((shot, i) => (
          <div key={shot.src} className={`phone phone--${i + 1}`}>
            <Image
              src={shot.src}
              alt={shot.alt}
              width={shot.width}
              height={shot.height}
              sizes="(min-width: 900px) 200px, 34vw"
              className="phone__img"
            />
          </div>
        ))}
      </div>
    );
  }

  return <DesktopGallery media={media} title={title} />;
}

function DesktopGallery({ media, title }: { media: Media; title: string }) {
  const [index, setIndex] = useState(0);
  const current = media.shots[index];

  return (
    <div className="media media--desktop">
      <div className="browser">
        <div className="browser__bar" aria-hidden="true">
          <span className="browser__dots">
            <i />
            <i />
            <i />
          </span>
          <span className="browser__title">{title}</span>
        </div>
        <div className="browser__view">
          {media.shots.map((shot, i) => (
            <Image
              key={shot.src}
              src={shot.src}
              alt={i === index ? shot.alt : ""}
              aria-hidden={i === index ? undefined : true}
              width={shot.width}
              height={shot.height}
              sizes="(min-width: 1200px) 640px, (min-width: 900px) 55vw, 92vw"
              className={`browser__img ${i === index ? "is-current" : ""}`}
            />
          ))}
        </div>
      </div>

      {media.shots.length > 1 && (
        <div className="thumbs" role="group" aria-label={`${title} screenshots`}>
          {media.shots.map((shot, i) => (
            <button
              key={shot.src}
              type="button"
              className={`thumb ${i === index ? "is-current" : ""}`}
              aria-pressed={i === index}
              aria-label={`Show screenshot ${i + 1} of ${media.shots.length}: ${shot.alt}`}
              onClick={() => setIndex(i)}
            >
              <Image src={shot.src} alt="" width={shot.width} height={shot.height} sizes="96px" className="thumb__img" />
            </button>
          ))}
        </div>
      )}
      <span className="sr-only" aria-live="polite">
        {`Showing: ${current.alt}`}
      </span>
    </div>
  );
}
