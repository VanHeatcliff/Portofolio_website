# Portofolio_website

Static personal portfolio for **Faiz Azzam Attanthowi**, built with Next.js (App Router), React, and TypeScript. It is exported as plain HTML/CSS/JS with no backend, database, authentication, analytics, or runtime API calls.

Design: dark editorial layout, Plus Jakarta Sans + JetBrains Mono (self-hosted at build time via `next/font`, no runtime request to Google), one electric-blue accent, CSS-only motion plus small IntersectionObserver helpers. No animation or UI library.

## Requirements

- Node.js 20.9 or newer (developed with Node 24)
- npm

## Local development

Run all commands inside this folder (`Portofolio_website`), where `package.json` lives.

```bash
npm install
npm run dev        # http://localhost:3000
```

## Scripts

```bash
npm run lint       # ESLint (eslint-config-next)
npm run typecheck  # tsc --noEmit
npm run build      # static export to ./out
npm run images     # regenerate optimized images from assets/ into public/images/
```

`next.config.ts` sets `output: "export"`, so `npm run build` writes the complete static site to `out/`. Any static file server can serve that folder.

## Deploying to Vercel

1. Push this repository to GitHub.
2. In Vercel, choose **Add New → Project** and import the repository. If the repository root is not this folder, set **Root Directory** to `Portofolio_website`.
3. Keep the defaults Vercel detects: Framework Preset **Next.js**, Build Command `npm run build`, Install Command `npm install`.
4. No environment variables are needed.

Or use the CLI from this folder: `npx vercel` (preview) and `npx vercel --prod` (production).

## Editing content

All personal content lives in `src/data/portfolio.ts`; components only render that data. Content must come from the owner's CV and portfolio PDF (see `requirement.md`). Do not add unsupported metrics, links, or claims.

## Photos and screenshots

Images use a two-folder workflow so large originals are not shipped to visitors:

```
assets/images/            # ORIGINALS (any size, kept in git, not deployed)
  profile/PHOTO_PROFILE.jpeg
  projects/<Project>/*.png|jpg
public/images/            # OPTIMIZED WebP output (deployed, referenced by the site)
  profile/faiz-portrait.webp
  projects/<project-id>/*.webp
```

`npm run images` runs `scripts/optimize-images.mjs` (uses `sharp`), which:

- crops the portrait to 4:5 with the face in the upper third (and outside the bottom watermark), 720×900;
- resizes phone screenshots to 900 px tall and desktop screenshots to 1280 px wide;
- writes WebP at quality 80 (current files are about 10–60 KB each).

### Replace your portrait

1. Put the new photo in `assets/images/profile/` (portrait orientation works best).
2. In `scripts/optimize-images.mjs`, update the `profile/...` job's `in` filename. Adjust `top` (0–1) if the face sits too high or low in the crop.
3. Run `npm run images`.
4. If the output size changed, update `width`/`height` of `profile.photo` in `src/data/portfolio.ts`.

### Add or change project screenshots

1. Put originals in `assets/images/projects/<Project>/`.
2. Add a job to `scripts/optimize-images.mjs`, using `mode: "mobile"` for phone screens or `"desktop"` for web/desktop screens.
3. Run `npm run images`; it prints the output path and size of each file.
4. In `src/data/portfolio.ts`, add the file to that project's `media.shots` with an accurate `alt`, plus the printed `width` and `height`:

```ts
media: {
  kind: "mobile",            // phone frames; "desktop" = browser frame with thumbnails
  shots: [
    { src: "/images/projects/hotel-arca/home.webp", alt: "Hotel Arca home screen", width: 437, height: 900 },
  ],
},
```

Projects with `media` are shown as large featured rows; projects without it appear as compact cards under "More projects". Mobile layouts show up to three phones.

Notes:

- `src` starts with `/images/...` (no `public/`). Paths are case-sensitive on Vercel.
- Only use real photos and real screenshots of the project.

## Structure

```
assets/images/          # original photos (not deployed)
public/images/          # optimized WebP images (deployed)
scripts/
  optimize-images.mjs   # assets/ → public/ image pipeline
src/
  app/
    layout.tsx          # fonts, metadata (title, description, Open Graph)
    page.tsx            # single-page composition of all sections
    globals.css         # design tokens, layout, motion, reduced-motion rules
    icon.svg            # text-based "FA" favicon
  components/
    SiteHeader.tsx      # sticky nav, active-section indicator, mobile menu (client)
    Hero.tsx            # hero with portrait
    Section.tsx         # numbered section wrapper
    ProjectCard.tsx     # featured project row + compact card
    ProjectMedia.tsx    # phone frames / browser gallery (client)
    RevealObserver.tsx  # scroll reveal, progressive enhancement (client)
    CopyEmail.tsx       # copy-to-clipboard button (client)
    BackToTop.tsx       # floating back-to-top link (client)
    Icons.tsx           # inline SVG icons
  data/
    portfolio.ts        # typed portfolio content
```

## Accessibility and motion

- Content is visible in the static HTML; scroll reveal is only enabled after JavaScript confirms `IntersectionObserver` support.
- `prefers-reduced-motion: reduce` disables entrance, reveal, ambient, and hover-movement animations.
- Hover effects are limited to devices that support hover, and nothing essential depends on hover.
- Keyboard: skip link, visible focus rings, Escape closes the mobile menu, and the screenshot thumbnails are buttons with `aria-pressed`.

## Pending owner decisions

- Chloris-AI dataset size and accuracy are not shown, because the CV and portfolio PDF give different figures.
- The phone number is not published.
- No downloadable CV is included. Add the PDF to `public/` only if it should be public.
- No screenshots exist yet for SAS Mental HealthClass or Personal Web Portfolio.
