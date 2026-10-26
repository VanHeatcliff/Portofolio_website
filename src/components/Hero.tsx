import Image from "next/image";
import { education, heroStack, profile } from "@/data/portfolio";
import { ArrowDownIcon, GitHubIcon, LinkedInIcon, MailIcon } from "./Icons";

export function Hero() {
  const { photo } = profile;

  return (
    <section id="hero" className="hero" aria-labelledby="hero-heading">
      <div className="hero__ambient" aria-hidden="true" />
      <div className="container hero__grid">
        <div className="hero__lead">
          <p className="eyebrow enter" style={{ "--enter-delay": "0ms" } as React.CSSProperties}>
            <span className="eyebrow__rule" aria-hidden="true" />
            {profile.eyebrow}
          </p>
          <h1 id="hero-heading" className="hero__title enter" style={{ "--enter-delay": "80ms" } as React.CSSProperties}>
            <span className="hero__first">Faiz Azzam</span>
            <span className="hero__last">Attanthowi</span>
          </h1>
        </div>

        {photo && (
          <figure className="hero__portrait enter" style={{ "--enter-delay": "200ms" } as React.CSSProperties}>
            <div className="portrait">
              <div className="portrait__frame">
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  width={photo.width}
                  height={photo.height}
                  preload
                  sizes="(min-width: 1200px) 420px, (min-width: 900px) 36vw, (min-width: 600px) 360px, 78vw"
                  className="portrait__img"
                />
              </div>
              <figcaption className="portrait__tag">
                <span className="portrait__tag-label">Studying at</span>
                <span className="portrait__tag-value">BINUS @Malang</span>
                <span className="portrait__tag-meta">
                  {education.degree} · Expected {education.expected}
                </span>
              </figcaption>
            </div>
          </figure>
        )}

        <div className="hero__body">
          <p className="hero__headline enter" style={{ "--enter-delay": "160ms" } as React.CSSProperties}>
            {profile.headline}
          </p>
          <p className="hero__intro enter" style={{ "--enter-delay": "240ms" } as React.CSSProperties}>
            {profile.intro}
          </p>

          <div className="hero__actions enter" style={{ "--enter-delay": "320ms" } as React.CSSProperties}>
            <a href="#projects" className="btn btn--primary">
              Explore My Projects
              <ArrowDownIcon />
            </a>
            <a href="#contact" className="btn btn--ghost">
              <MailIcon />
              Contact Me
            </a>
            <div className="hero__socials">
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="icon-btn"
                aria-label="GitHub profile (opens in a new tab)"
              >
                <GitHubIcon />
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="icon-btn"
                aria-label="LinkedIn profile (opens in a new tab)"
              >
                <LinkedInIcon />
              </a>
            </div>
          </div>

          <div className="hero__stack enter" style={{ "--enter-delay": "400ms" } as React.CSSProperties}>
            <p className="hero__stack-label">Worked with</p>
            <ul className="hero__stack-list">
              {heroStack.map((tech) => (
                <li key={tech}>{tech}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <a href="#about" className="scroll-cue">
        <span className="scroll-cue__track" aria-hidden="true">
          <span className="scroll-cue__dot" />
        </span>
        <span className="scroll-cue__label">Scroll to explore</span>
      </a>
    </section>
  );
}
