# Little Heart Space — official website

Static Astro site for **littleheartspace.com** — the official website of
Little Heart Space, a family & art therapy practice run by Jenny
(`jenny@littleheartspace.com`).

## Quick start

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # production build → dist/
```

## Deployments

| Branch    | Where it goes | URL |
| --------- | ------------- | --- |
| `preview` | GitHub Pages (staging) | `https://<user>.github.io/<repo>/` |
| `main`    | Cloudflare Pages (production) | `https://littleheartspace.com` |

Every push to `preview` or `main` builds and deploys automatically via
GitHub Actions (`.github/workflows/`). One-time setup checklists live at the
top of each workflow file — including the Cloudflare account, API token,
and custom-domain steps.

**To publish:** merge to `main` and push. That's it.

## Project layout

- `src/pages/` — all pages (home, about, services, FAQ, contact)
- `src/components/` — header, footer, icons, FAQ accordion, section headings
- `src/layouts/BaseLayout.astro` — head tags, fonts, SEO, scroll-reveal script
- `src/styles/tokens.css` — design tokens (three-layer, per ui-ux-pro-max skill)
- `src/config.ts` — site name, email, nav
- `docs/design-system.md` — design-system brief

See `AGENTS.md` for agent conventions (design rules, content rules, contact
form notes).
