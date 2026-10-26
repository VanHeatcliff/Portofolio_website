# Prompt for Coding Agent — Build My Static Portfolio Without Hallucinations

You are a careful senior frontend engineer. Build a polished, modern, minimal, responsive static portfolio website for Faiz Azzam Attanthowi using the repository and the two supplied source documents:

- `FAIZ AZZAM ATTANTHOWI_CV(1).pdf`
- `Faiz Azzam Attanthowi_Portofolio_Academy.pdf`

The project specification is in `requirement.md`. Read it completely before coding and treat it as binding.

## Non-negotiable anti-hallucination rules

1. Treat the supplied PDFs and `requirement.md` as the only sources of truth for personal content.
2. Never invent or infer missing details: job titles, responsibilities, technologies, dates, metrics, awards, testimonials, project features, demo links, client names, deployment status, or professional seniority.
3. Do not fabricate project screenshots or personal portraits. Use only real assets already present in the repository or assets supplied by the owner. If none exist, make a tasteful CSS-based abstract visual that cannot be mistaken for an actual screenshot or photo.
4. The CV and portfolio PDF disagree about Chloris-AI dataset size and accuracy. Do not show either numerical claim until the owner confirms the correct version. Do not silently reconcile the discrepancy.
5. Do not publish the phone number by default. Use the supplied email, GitHub, and LinkedIn links.
6. Do not invent repository/demo URLs. Use only URLs explicitly listed in `requirement.md`.
7. Do not add fake contact forms, analytics, visitor counts, testimonials, skill percentage bars, or buttons that do nothing.
8. If a requirement cannot be completed from available evidence, omit the unsupported content and report it under “Owner confirmation needed” in your final summary.
9. Do not overwrite or delete existing project files blindly. Inspect the repository first and preserve useful existing configuration.

## Workflow — follow in order

### Phase 1: Inspect before changing anything

- Inspect the current directory, package manager files, framework, source tree, and existing assets.
- Read `requirement.md` fully.
- Identify the existing stack. If the repository already has a working React/Vite or Next.js setup, keep it unless there is a concrete technical reason to change it.
- Do not assume that a command, package, file, image, or script exists. Verify it.
- Before major changes, briefly report the existing stack and the implementation plan.

### Phase 2: Plan the content and structure

Implement a single-page portfolio with these sections:

1. Header/navigation
2. Hero
3. About
4. Selected projects
5. Technical skills
6. Experience
7. Education
8. Contact
9. Footer

Use a clean dark visual direction with restrained accent colors, generous spacing, strong typography, responsive cards, and subtle motion. The result should feel custom-designed rather than like an unmodified generic template.

Keep content in a typed local data file (for example `src/data/portfolio.ts`) separate from UI components. Build reusable components for project cards and repeated content. Do not duplicate project details across many components.

### Phase 3: Implement the static website

- Keep the app frontend-only and deployable to Vercel as a static site.
- No backend, database, authentication, server actions, runtime API calls, or external CMS.
- Use the current stack when reasonable. Prefer TypeScript if supported without disruptive migration.
- Use semantic HTML, accessible navigation, clear heading hierarchy, visible keyboard focus, sufficient color contrast, and `prefers-reduced-motion`.
- Ensure project cards show essential information without hover.
- Make email a `mailto:` link and use the exact GitHub and LinkedIn URLs in the requirement.
- Use `target="_blank"` with `rel="noopener noreferrer"` for external links.
- Use only real repository assets. Do not leave broken image references or empty visual placeholders that look unfinished.
- Do not use a fake contact form. Provide direct email and social links instead.
- Do not introduce large libraries for simple visual effects.
- Include useful title and meta description.
- Keep mobile, tablet, and desktop layouts usable, with no horizontal overflow.
- All buttons and links must perform their stated action. Remove any decorative control that has no function.

### Phase 4: Verify rather than assume

- Inspect package scripts before choosing commands.
- Run the available lint/type-check/test commands if configured.
- Run the production build.
- Fix errors caused by your changes.
- If a command cannot run because a dependency or environment is missing, report the exact limitation; do not claim it passed.
- Check for dead links in local navigation, broken assets, placeholder text, console errors where tooling permits, and unsupported claims.
- Do not say “deployed” unless deployment actually happened and was confirmed.
- Do not invent a Vercel URL.

### Phase 5: Final report

When finished, provide:
1. A concise summary of what was implemented.
2. The main files created/changed.
3. The commands actually run and their actual results.
4. Any known limitations or failures.
5. Any owner-confirmation items still unresolved.

## Content checklist

Use the exact project details and links in `requirement.md` for:

- Hotel Arca System
- Chloris-AI
- NutriCare
- Clothing Store
- SAS Mental HealthClass
- Personal Web Portfolio

Use the supplied CV for:

- Laboratory Assistant — Full Teaching, Digital Technopreneur Laboratory BINUS @Malang
- Backend Member, Bina Nusantara Computer Club (BNCC)
- Education, GPA, expected graduation, scholarship statement, skills, and language proficiency

Do not add unlisted certifications or professional employment.

## Design quality checklist

- Modern minimal dark theme, not cluttered.
- Clear hero with name, role line, and meaningful CTA links.
- Consistent spacing, type scale, border radius, and card treatment.
- Responsive project grid.
- Strong readability and accessible contrast.
- Subtle interaction states; no distracting animations.
- No invented portrait, logos, screenshots, metrics, testimonials, or badges.
- No empty links, dead buttons, placeholder copy, or broken images.

Start by inspecting the repository and reading `requirement.md`. Do not begin by generating content from assumptions. Then implement, verify, and report honestly.
