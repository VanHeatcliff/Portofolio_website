import type { ReactNode } from "react";

type Props = {
  id: string;
  index: string;
  eyebrow: string;
  title: ReactNode;
  intro?: string;
  children: ReactNode;
  className?: string;
};

/** Shared section wrapper: numbered eyebrow, consistent spacing, and anchor target. */
export function Section({ id, index, eyebrow, title, intro, children, className = "" }: Props) {
  const headingId = `${id}-heading`;
  return (
    <section id={id} className={`section ${className}`} aria-labelledby={headingId}>
      <div className="container">
        <header className="section__header reveal">
          <p className="eyebrow">
            <span className="eyebrow__index">{index}</span>
            <span className="eyebrow__rule" aria-hidden="true" />
            {eyebrow}
          </p>
          <h2 id={headingId} className="section__title">
            {title}
          </h2>
          {intro && <p className="section__intro">{intro}</p>}
        </header>
        {children}
      </div>
    </section>
  );
}
