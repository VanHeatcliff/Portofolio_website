import type { Project } from "@/data/portfolio";
import { ArrowUpRightIcon, GitHubIcon } from "./Icons";
import { ProjectMedia } from "./ProjectMedia";

function RepoLink({ project }: { project: Project }) {
  if (!project.repository) return null;
  return (
    <a
      href={project.repository.href}
      target="_blank"
      rel="noopener noreferrer"
      className="repo-link"
      aria-label={`View ${project.title} repository on GitHub: ${project.repository.label} (opens in a new tab)`}
    >
      <GitHubIcon size={16} />
      <span className="repo-link__text">
        <span className="repo-link__cta">View repository</span>
        <span className="repo-link__path">{project.repository.label}</span>
      </span>
      <ArrowUpRightIcon />
    </a>
  );
}

function ProjectFacts({ project }: { project: Project }) {
  return (
    <dl className="project__facts">
      <div>
        <dt>Role</dt>
        <dd>{project.role}</dd>
      </div>
      <div>
        <dt>Type</dt>
        <dd>{project.context}</dd>
      </div>
    </dl>
  );
}

function Tools({ project }: { project: Project }) {
  return (
    <ul className="tags" aria-label={`Tools used in ${project.title}`}>
      {project.tools.map((tool) => (
        <li key={tool} className="tag">
          {tool}
        </li>
      ))}
    </ul>
  );
}

function Details({ project }: { project: Project }) {
  return (
    <details className="project__details">
      <summary>
        <span>My contribution &amp; learning</span>
        <span className="project__details-icon" aria-hidden="true" />
      </summary>
      <ul className="bullets">
        {project.contributions.map((c) => (
          <li key={c}>{c}</li>
        ))}
      </ul>
      {project.note && <p className="project__note">{project.note}</p>}
    </details>
  );
}

/** Large alternating row for projects that have real screenshots. */
export function ProjectFeature({ project, index, flip }: { project: Project; index: number; flip: boolean }) {
  const titleId = `project-${project.id}-title`;
  return (
    <article className={`feature reveal ${flip ? "feature--flip" : ""}`} aria-labelledby={titleId}>
      <div className="feature__media">{project.media && <ProjectMedia media={project.media} title={project.title} />}</div>

      <div className="feature__content">
        <p className="project__meta">
          <span className="project__index">{String(index).padStart(2, "0")}</span>
          <span>{project.category}</span>
          <span className="dot" aria-hidden="true" />
          <span>{project.period}</span>
        </p>
        <h3 id={titleId} className="feature__title">
          {project.title}
        </h3>
        <p className="project__summary">{project.summary}</p>
        <ProjectFacts project={project} />
        <Tools project={project} />
        <Details project={project} />
        <RepoLink project={project} />
      </div>
    </article>
  );
}

/** Compact card for projects without screenshots. */
export function ProjectCard({ project, index }: { project: Project; index: number }) {
  const titleId = `project-${project.id}-title`;
  return (
    <article className="project-card reveal" aria-labelledby={titleId}>
      <p className="project__meta">
        <span className="project__index">{String(index).padStart(2, "0")}</span>
        <span>{project.category}</span>
        <span className="dot" aria-hidden="true" />
        <span>{project.period}</span>
      </p>
      <h3 id={titleId} className="project-card__title">
        {project.title}
      </h3>
      <p className="project__summary">{project.summary}</p>
      <ProjectFacts project={project} />
      <Tools project={project} />
      <Details project={project} />
      <RepoLink project={project} />
    </article>
  );
}
