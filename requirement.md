# Portfolio Website Requirements — Faiz Azzam Attanthowi

## 1. Project Overview

Build a modern, minimal, responsive, static personal portfolio website for **Faiz Azzam Attanthowi**. The website presents his profile, education, technical skills, selected projects, experience, and contact links for recruiters, internship opportunities, and collaborators.

The website must be deployable to **Vercel as a static frontend**. It must not require a backend, database, authentication, server-side API, or paid external service.

## 2. Source of Truth and Anti-Hallucination Rules

The only approved sources for personal/professional content are the two supplied files:

1. `FAIZ AZZAM ATTANTHOWI_CV(1).pdf`
2. `Faiz Azzam Attanthowi_Portofolio_Academy.pdf`

Rules:

- Treat the supplied CV and portfolio PDF as the source of truth.
- Do not invent employers, job titles, dates, degrees, awards, certifications, metrics, project features, technologies, responsibilities, or outcomes.
- Do not claim that a project is deployed or publicly usable unless a source explicitly confirms it.
- Do not invent project demo URLs. Only use repository and social URLs explicitly listed below.
- If information is missing or conflicting, omit it or mark it for owner review in a TODO list. Do not silently guess.
- Keep factual claims appropriately scoped. Do not turn a class assignment into a commercial product or an individual contribution into a team-wide achievement.
- Do not fabricate project screenshots. Use real assets supplied in the repository; if none exist, create restrained CSS-based visual placeholders that are clearly illustrative and not presented as actual product screenshots.
- Keep claims and metrics consistent with their source. In particular, the CV and portfolio PDF report different dataset/accuracy figures for Chloris-AI. Do not combine or choose between these figures silently. Use a neutral description without a numerical dataset size or accuracy, or leave a clearly documented TODO for the owner to resolve.
- The CV says Hotel Arca integrated 52 API endpoints; retain this only if useful and present it as work described in the CV, not as an independently verified production metric.
- Do not expose the phone number on the public website by default. Use email, GitHub, and LinkedIn as primary contact methods. The phone number is present in the CV but should be omitted unless the owner explicitly asks to publish it.
- Do not add fake testimonials, client logos, customer counts, visitor counters, skill percentage bars, ratings, or animated terminal output that implies real activity.
- Do not use lorem ipsum or fabricated placeholder content in the finished UI.

## 3. Personal Content

### Identity

- Name: Faiz Azzam Attanthowi
- Professional positioning from CV: Mobile Development | Full-Stack Web Development | Backend Engineering
- Short role line from portfolio: Computer Science Student | Mobile & Backend Developer | Tech Enthusiast
- University: Bina Nusantara University (BINUS) @Malang
- Degree: Bachelor of Computer Science
- Study period: September 2024 – Present
- Expected completion: 2028
- Current semester in supplied CV: 5th semester
- GPA: 3.76 / 4.00
- Scholarship recipient, as stated in CV

### About summary

Use a concise, professional paraphrase of the supplied portfolio introduction. It may say that Faiz is a Computer Science student at BINUS Malang who enjoys turning technical ideas into usable digital products and has worked on mobile, backend, web, and AI-integrated class projects. Do not add unsupported claims about years of professional experience or expert-level mastery.

### Contact and social links

- Email: `azzam.attan873@gmail.com`
- GitHub: `https://github.com/VanHeatcliff`
- LinkedIn: `https://www.linkedin.com/in/faiz-azzam-attanthowi`

Use valid external links with `target="_blank"` and `rel="noopener noreferrer"` where appropriate. Email must use `mailto:`. Do not invent other links.

### Technical skills from CV

Group skills in clear categories without rating them or assigning proficiency percentages.

- Programming languages: Golang, Java, PHP, Python
- Mobile and web frameworks: Flutter, Expo Go (React Native), Laravel
- Database and infrastructure: MySQL (Master-Slave Replication), Backend Infrastructure
- AI and API integrations: YOLOv8 (Object Detection), Gemini API Integration
- Tools and version control: Git / Version Control, Maven
- Languages: Indonesian (Native), English (Working Proficiency)

Do not add technologies just because they are commonly used alongside the listed stack.

## 4. Projects

Create reusable project data objects and display project cards with a detail section or modal/page. Each project should show title, type/category, date if available, role, tools, summary, contribution/learning, and repository link only when explicitly provided. Do not imply every repository is owned by Faiz; preserve the supplied repository URL as given.

### 4.1 Hotel Arca System

- Date: May 2026 (CV); portfolio describes it as 2026
- Type: Class assignment / group project; mobile app
- Tools: Expo Go, Golang, Gemini API
- Role: Mobile Front-End Developer
- Summary: A mobile-based hotel reservation platform with an AI-driven room recommendation feature. Users describe their ideal room in natural language; Gemini API processes the description to extract keywords and match preferences with available room inventory.
- Contribution/learning: Worked with a team of three under a three-week timeline according to the CV. The portfolio describes learning microservice architecture and using ngrok to expose a teammate's locally hosted backend for frontend integration.
- Repository: `https://github.com/VanHeatcliff/FE_mobile_hotelArca.git`
- CV claim: integrated 52 API endpoints. This may be included with careful attribution to the project experience described in the CV.
- Do not claim production deployment or commercial use.

### 4.2 Chloris-AI

- Date: October – December 2025 (CV); portfolio describes 2025
- Type: Class assignment / group project; mobile app
- Tools: Flutter, YOLOv8, deep learning; portfolio also mentions Roboflow and TensorFlow Lite
- Role: Mobile Developer (frontend and backend mobile implementation), as described in portfolio/CV
- Summary: An agricultural mobile application designed to help identify crop diseases. The portfolio names tomatoes, rice, lettuce, strawberries, and cucumbers as example crops.
- Contribution/learning: Custom model training/integration, model deployment challenges, format conversion, and edge-AI/mobile architecture learning.
- Repository: `https://github.com/Hyphen-14/Chloris-ai.git`
- Important: CV and portfolio PDF contain differing dataset-size and accuracy figures. Do not display either number until the owner confirms the correct figure.

### 4.3 NutriCare

- Date: December 2025
- Type: Class assignment / group project; desktop/web app
- Tools: Java, Maven, Gemini API
- Role: Backend Developer
- Summary: A health application that generates personalized dietary recommendations based on user-provided symptoms and medical history, and adjusts recommendations when users provide follow-up updates.
- Contribution/learning: Backend data processing for cases involving multiple simultaneous diseases and overlapping dietary restrictions; strengthened algorithm design and object-oriented programming skills.
- Repository: `https://github.com/Raynerqt/food-recomendation.git`
- Do not present its output as medical advice or claim clinical validation.

### 4.4 Clothing Store

- Date: November – December 2025
- Type: Class assignment / group project; web system
- Tools: Laravel, MySQL, PHP
- Role: Full-Stack Developer (portfolio); CV describes collaborative work in a three-person team
- Summary: E-commerce and database management system with shopping cart, product filtering, admin dashboard, inventory, user data, and transaction workflows.
- Contribution/learning: Database design and relational data handling. Portfolio describes addressing an N+1 query issue using Laravel Eloquent relationships and eager loading.
- Repository: `https://github.com/VanHeatcliff/LABDatabase_Finpro.git`
- CV states the database architecture has 16 relational tables. Include only if useful and retain the claim as project-specific.

### 4.5 SAS Mental HealthClass

- Date: April – May 2026
- Type: Class assignment / group project
- Role: Scrum Master
- Tools explicitly mentioned in CV: Jira; Agile/Scrum workflow
- Summary: Coordinated a four-person Agile team to develop a mental health application.
- Contribution: Managed workflows and facilitated one-week sprints, supported collaboration, resolved bottlenecks, and coordinated feature delivery.
- No repository URL is provided in the supplied files. Do not invent one.
- Do not infer a specific production feature set or claim the application provides professional medical care.

### 4.6 Personal Web Portfolio

- Date: May 2026 (as shown in portfolio PDF)
- Type: Web system; class assignment and self-initiated project
- Tools: Laravel, MySQL
- Role: Full-Stack Developer
- Summary: A personal portfolio website intended to showcase software projects and allow visitors to send inquiries through an email feature.
- Contribution/learning: Learned to align architecture choices with project scale and explored caching for a framework-heavy landing page.
- Repository: `https://github.com/VanHeatcliff/PROFILEPAGE_UTS.git`
- This project may be displayed as a previous project; do not imply the new static site is the same implementation.

## 5. Experience

### Laboratory Assistant — Full Teaching

- Organization: Digital Technopreneur Laboratory, BINUS @Malang
- Dates: August 2026 – Present (as stated in CV)
- Summary: Led practical teaching sessions for eight laboratory classes and mentored/evaluated 140+ students.
- Subjects: Database Technology, Computer Network, Computational Physics
- Keep numbers and claims as stated in the CV; do not add further responsibilities.

### Backend Member

- Organization: Bina Nusantara Computer Club (BNCC)
- Dates: October 2024 – August 2025
- Summary: Participated in peer collaboration, backend software architecture discussions, technical development, and technology-driven campus initiatives.
- Do not invent a leadership title or project outcomes.

## 6. Site Structure and UX

Use a single-page layout with anchor navigation by default.

1. Header/navigation
2. Hero
3. About
4. Selected projects
5. Skills
6. Experience
7. Education
8. Contact
9. Footer

Requirements:

- Responsive on mobile, tablet, and desktop.
- Sticky or compact navigation is acceptable, but it must not obscure anchor targets.
- Strong typographic hierarchy, generous whitespace, consistent spacing, restrained accent colors, and clean cards.
- Modern dark visual direction with high contrast and a restrained accent color.
- Project cards must remain readable and not depend on hover to reveal essential information.
- Provide visible focus states and keyboard-accessible navigation.
- Respect `prefers-reduced-motion`.
- Use subtle transitions only; avoid excessive parallax, cursor effects, heavy animations, and decorative clutter.
- Use a real portrait only if supplied by the owner. Otherwise do not generate a fake personal photo; use a typographic hero or abstract CSS visual.
- Add a clear “View Project” or “View Repository” link only where a real URL is provided.
- Contact section should provide email and social links, not a fake contact form. A form would require a real service/backend and is out of scope.
- Avoid skill progress bars and unsupported claims like “expert,” “10x developer,” or “X years of experience.”

## 7. Technical Requirements

Preferred implementation:

- Framework: Next.js with App Router, using static-friendly features; alternatively use Vite + React if the existing repository already uses it and migration would add unnecessary complexity.
- Language: TypeScript preferred.
- Styling: CSS Modules or a small, maintainable global CSS system. Tailwind is acceptable only if already configured or if setup remains simple.
- Icons: use a lightweight icon library only if needed; avoid large dependencies for decorative icons.
- Content: store portfolio data in a typed local data file, e.g. `src/data/portfolio.ts`.
- Components: reusable sections and project cards; keep content separate from presentation.
- No database, server actions, authentication, analytics, backend endpoints, or runtime API calls.
- No secret environment variables are required for core functionality.
- External links must be valid and only use the supplied URLs.
- Use semantic HTML, accessible labels, descriptive link text, and meaningful page metadata.
- Add favicon/OG metadata only from available assets or safe text-based defaults; do not invent logos or portraits.
- Ensure no broken image paths or console errors.
- Avoid unnecessary dependencies and avoid adding a UI component library unless the existing project already uses one.

## 8. Static Deployment and Vercel

- The project must build and deploy on Vercel without requiring a custom backend.
- If Next.js is selected, use features compatible with static rendering. Do not add API routes, server actions, database calls, or dynamic server-only features.
- If a static export is configured, confirm the app builds with that configuration and that all routes/assets work.
- If Vite is retained, ensure the Vercel build command and output directory match the project configuration.
- Document exact local development, build, and deployment commands in the README.
- Do not claim deployment succeeded unless a build/deploy command or Vercel result confirms it.
- Do not invent a live deployment URL.

## 9. SEO, Performance, and Accessibility

- Page title: `Faiz Azzam Attanthowi | Software Developer Portfolio`
- Meta description should accurately summarize the student/developer profile.
- Use one clear H1, logical heading levels, semantic landmarks, and descriptive anchor text.
- Optimize images and avoid large media assets.
- Use accessible color contrast, visible focus styles, keyboard support, and reduced-motion preferences.
- Ensure mobile navigation is usable without horizontal overflow.
- Do not load external fonts or scripts unnecessarily. If a web font is used, provide a sensible system fallback.
- Add Open Graph metadata only with available and truthful assets/content.

## 10. Out of Scope

- Backend/API development
- Database or CMS
- Authentication/admin dashboard
- Functional contact form requiring a third-party service
- Blog/CMS unless specifically requested later
- Fake analytics, fake availability status, fake testimonials
- AI chat widget
- Automatic scraping of GitHub/LinkedIn
- Invented project demos or screenshots

## 11. Acceptance Criteria

The work is complete only when:

- [ ] All content is supported by the supplied CV or portfolio PDF.
- [ ] Conflicting Chloris-AI dataset/accuracy figures are omitted pending confirmation.
- [ ] Phone number is not publicly displayed by default.
- [ ] No invented metrics, skills, awards, testimonials, project links, or deployment claims appear.
- [ ] All six projects are represented accurately, with repository links only where supplied.
- [ ] Experience and education are accurate to the supplied CV.
- [ ] Layout works at mobile, tablet, and desktop widths.
- [ ] Navigation, project links, email link, GitHub, and LinkedIn work.
- [ ] Keyboard focus is visible and essential content does not depend on hover.
- [ ] No broken images, dead buttons, fake contact form, or console errors.
- [ ] Dependencies are minimal and the app does not require a backend.
- [ ] Production build completes successfully.
- [ ] README contains accurate setup/build/deployment instructions.
- [ ] Final response lists changed files, commands run, build result, and any remaining TODOs without claiming tests that were not run.

## 12. Owner Confirmation TODOs

Do not block the initial implementation on these items; use the conservative rules above until confirmed.

- Confirm which Chloris-AI dataset size and accuracy figure, if any, should be published.
- Confirm whether to publish the phone number.
- Provide a real portrait, project screenshots, or custom logo if desired.
- Confirm whether the site should use a downloadable CV PDF; only add this feature if the actual CV file is intentionally placed in the website's public assets.
