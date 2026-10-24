# AGENTS.md — littleheartspace-site

AI-agent conventions for this repo (Muse, OpenCode, or any other). Follow on every change.

## Project overview

Official website for **Little Heart Space** — a family & art therapy practice
run by Jenny (`jenny@littleheartspace.com`).

- Framework: **Astro**, static output, TypeScript.
- Domain: `https://littleheartspace.com` (see `astro.config.mjs` → `site`).
- Design tokens: `src/styles/tokens.css` (three-layer: primitive → semantic →
  component; brief in `docs/design-system.md`).
- Contact form posts to FormSubmit → `jenny@littleheartspace.com`
  (see "Contact form" below).

## Deployments (dual pipeline)

| Branch    | Target                              | Workflow                              |
| --------- | ----------------------------------- | ------------------------------------- |
| `preview` | GitHub Pages (staging/testing)      | `.github/workflows/preview.yml`       |
| `main`    | Cloudflare Pages → littleheartspace.com | `.github/workflows/production.yml` |

- Push to `preview` → builds with `SITE_BASE=/<repo-name>` and deploys to
  `https://<user>.github.io/<repo-name>/`.
- Push to `main` → builds with base `/` and deploys to Cloudflare Pages
  project `littleheartspace` (production branch `main`), which serves the
  custom domain.
- Canonical URLs always point at `littleheartspace.com` (see
  `src/layouts/BaseLayout.astro`), so preview builds never create
  duplicate-content SEO issues.
- Production deploy needs repo secrets `CLOUDFLARE_API_TOKEN` and
  `CLOUDFLARE_ACCOUNT_ID` (one-time setup documented in `production.yml`).

## Editing pages

- Shared chrome: `src/layouts/BaseLayout.astro` (head, fonts, SEO, reveal
  script), `src/components/Header.astro`, `src/components/Footer.astro`.
- Site-wide facts (name, email, nav): `src/config.ts`.
- Pages: `src/pages/` — `index.astro` (home), `about.astro`,
  `services/index.astro`, `services/family-therapy.astro`,
  `services/art-therapy.astro`, `faq.astro`, `contact.astro`,
  `contact/thanks.astro`.
- Reusable bits: `SectionHeading`, `FaqItem` (accessible accordion),
  `Icon` (stroke SVG set — add new icons there), all in `src/components/`.

## Contact form

- The form in `src/pages/contact.astro` posts to FormSubmit
  (`https://formsubmit.co/jenny@littleheartspace.com`).
- **First submission triggers a FormSubmit activation email** to Jenny —
  she must click it once, or messages won't deliver.
- On success the visitor lands on `/contact/thanks/` (the `_next` field).
  If the production domain isn't live yet, FormSubmit still redirects to the
  absolute `https://littleheartspace.com/contact/thanks/` URL — fine once DNS
  is cut over.
- Honeypot field `_honey` is included for spam protection.

## Design rules

- **Always use design tokens** from `src/styles/tokens.css`
  (`var(--color-brand)`, `var(--card-radius)`, …). Never hardcode hex colors,
  font families, or spacing in components — run a quick grep for `#` in new
  CSS if unsure.
- No emojis as icons — use `src/components/Icon.astro` (inline SVG).
- Contrast ≥ 4.5:1 for body text; visible `:focus-visible` states (global).
- `prefers-reduced-motion` is respected globally — don't add animations that
  bypass it.
- Responsive: check 375px and 1440px when changing layouts.

## Content rules

- Warm, plain-language tone. No clinical jargon without explanation.
- **Content still to confirm with Jenny** (don't invent these on the site):
  - Full professional name, credentials, license type/number
  - Session fees, insurance/superbill policy
  - Office address (currently "in person & online" with no address)
  - Phone number (currently email-only contact)
  - Languages offered, if beyond English
- The 988 crisis line appears in the footer, FAQ, and contact page — keep it
  on any page that discusses getting help.
- Testimonials are intentionally **not** used (therapy ethics) — don't add
  fake reviews.

## Commands

```bash
npm install   # install dependencies
npm run dev   # local dev server (http://localhost:4321)
npm run build # production build → dist/ (must pass before push)
npm run preview # preview the production build locally
```
