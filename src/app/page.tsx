import { BackToTop } from "@/components/BackToTop";
import { CopyEmail } from "@/components/CopyEmail";
import { Hero } from "@/components/Hero";
import { ArrowUpRightIcon, GitHubIcon, LinkedInIcon, MailIcon } from "@/components/Icons";
import { ProjectCard, ProjectFeature } from "@/components/ProjectCard";
import { RevealObserver } from "@/components/RevealObserver";
import { Section } from "@/components/Section";
import { SiteHeader } from "@/components/SiteHeader";
import {
  education,
  experiences,
  focusAreas,
  highlights,
  profile,
  projects,
  skillGroups,
} from "@/data/portfolio";

export default function Home() {
  const year = new Date().getFullYear();
  const featured = projects.filter((p) => p.media);
  const more = projects.filter((p) => !p.media);

  return (
    <>
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <SiteHeader />
      <RevealObserver />

      <main id="main" tabIndex={-1}>
        <Hero />

        {/* 01 — About */}
        <Section
          id="about"
          index="01"
          eyebrow="About"
          title={
            <>
              Turning technical ideas into <em>usable</em> digital products.
            </>
          }
        >
          <div className="about">
            <div className="about__copy reveal">
              {profile.about.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>

            <div className="about__side">
              <ul className="focus reveal" aria-label="Focus areas">
                {focusAreas.map((area, i) => (
                  <li key={area.title} className="focus__item">
                    <span className="focus__num" aria-hidden="true">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="focus__title">{area.title}</span>
                    <span className="focus__stack">{area.stack}</span>
                  </li>
                ))}
              </ul>

              <dl className="stats reveal">
                {highlights.map((h) => (
                  <div key={h.label} className="stats__item">
                    <dt>{h.label}</dt>
                    <dd>{h.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </Section>

        {/* 02 — Projects */}
        <Section
          id="projects"
          index="02"
          eyebrow="Selected projects"
          title="Things I've built with my teams."
          intro="Class and self-initiated projects from my studies. Screenshots are from the actual apps. Open “My contribution & learning” on any project for details of my part in the work."
          className="section--projects"
        >
          <div className="features">
            {featured.map((project, i) => (
              <ProjectFeature key={project.id} project={project} index={i + 1} flip={i % 2 === 1} />
            ))}
          </div>

          {more.length > 0 && (
            <div className="more">
              <h3 className="more__title reveal">More projects</h3>
              <div className="more__grid">
                {more.map((project, i) => (
                  <ProjectCard key={project.id} project={project} index={featured.length + i + 1} />
                ))}
              </div>
            </div>
          )}
        </Section>

        {/* 03 — Skills */}
        <Section
          id="skills"
          index="03"
          eyebrow="Skills"
          title="Technical toolkit."
          intro="Grouped from my CV. No ratings or percentages, just what I've worked with."
        >
          <div className="skills">
            {skillGroups.map((group, i) => (
              <div key={group.title} className={`skill reveal skill--${i + 1}`}>
                <h3 className="skill__title">
                  <span className="skill__num" aria-hidden="true">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {group.title}
                </h3>
                <ul className="tags">
                  {group.items.map((item) => (
                    <li key={item} className="tag">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Section>

        {/* 04 — Experience & Education */}
        <Section id="experience" index="04" eyebrow="Experience & Education" title="Where I've been learning and teaching.">
          <div className="career">
            <div className="career__col">
              <h3 className="career__heading reveal">Organizational &amp; leadership</h3>
              <ol className="timeline">
                {experiences.map((exp) => (
                  <li key={exp.role} className="timeline__item reveal">
                    <div className="timeline__head">
                      <p className="timeline__period">{exp.period}</p>
                      <h4 className="timeline__role">{exp.role}</h4>
                      <p className="timeline__org">{exp.organization}</p>
                    </div>
                    <ul className="bullets">
                      {exp.points.map((point) => (
                        <li key={point}>{point}</li>
                      ))}
                    </ul>
                  </li>
                ))}
              </ol>
            </div>

            <div className="career__col">
              <h3 className="career__heading reveal">Education</h3>
              <article id="education" className="edu reveal" aria-labelledby="education-title">
                <p className="timeline__period">{education.period}</p>
                <h4 id="education-title" className="timeline__role">
                  {education.degree}
                </h4>
                <p className="timeline__org">{education.institution}</p>

                <dl className="edu__stats">
                  <div>
                    <dt>GPA</dt>
                    <dd>{education.gpa}</dd>
                  </div>
                  <div>
                    <dt>Semester</dt>
                    <dd>{education.semester}</dd>
                  </div>
                  <div>
                    <dt>Expected</dt>
                    <dd>{education.expected}</dd>
                  </div>
                </dl>
                <p className="edu__badge">{education.scholarship}</p>

                <p className="edu__subhead">Related coursework</p>
                <ul className="tags">
                  {education.coursework.map((course) => (
                    <li key={course} className="tag">
                      {course}
                    </li>
                  ))}
                </ul>
              </article>
            </div>
          </div>
        </Section>

        {/* 05 — Contact */}
        <Section
          id="contact"
          index="05"
          eyebrow="Contact"
          title={
            <>
              Let&rsquo;s <em>talk.</em>
            </>
          }
          intro="For internships, collaboration, or questions about my projects, email is the best way to reach me."
          className="section--contact"
        >
          <div className="contact reveal">
            <a href={`mailto:${profile.email}`} className="contact__email">
              <MailIcon size={22} />
              <span>{profile.email}</span>
              <ArrowUpRightIcon size={20} />
            </a>
            <div className="contact__actions">
              <a href={`mailto:${profile.email}`} className="btn btn--primary">
                <MailIcon />
                Send an email
              </a>
              <CopyEmail email={profile.email} />
            </div>
            <ul className="contact__links">
              <li>
                <a href={profile.github} target="_blank" rel="noopener noreferrer" className="social">
                  <GitHubIcon />
                  <span className="social__text">
                    <span className="social__name">GitHub</span>
                    <span className="social__handle">github.com/VanHeatcliff</span>
                  </span>
                  <ArrowUpRightIcon />
                  <span className="sr-only"> (opens in a new tab)</span>
                </a>
              </li>
              <li>
                <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="social">
                  <LinkedInIcon />
                  <span className="social__text">
                    <span className="social__name">LinkedIn</span>
                    <span className="social__handle">in/faiz-azzam-attanthowi</span>
                  </span>
                  <ArrowUpRightIcon />
                  <span className="sr-only"> (opens in a new tab)</span>
                </a>
              </li>
            </ul>
          </div>
        </Section>
      </main>

      <footer className="site-footer">
        <div className="container site-footer__inner">
          <p className="site-footer__name">
            <span className="brand__mark" aria-hidden="true">
              FA
            </span>
            © {year} {profile.name}
          </p>
          <p className="site-footer__note">Built with Next.js · Static site</p>
        </div>
      </footer>

      <BackToTop />
    </>
  );
}
