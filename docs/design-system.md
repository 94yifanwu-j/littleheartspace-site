# Design system brief — Little Heart Space

Generated following the **ui-ux-pro-max** design-system skill
(three-layer tokens in `src/styles/tokens.css`).

## Target

Little Heart Space — family & art therapy practice. Audience: parents,
families, and individuals seeking warm, trustworthy therapeutic care.
Emotional goal: *safety, calm, hope*.

## Pattern

**Hero-centric + trust building.** Generous hero with clear consultation CTA,
followed by services, a simple 3-step "how it works", practitioner intro,
FAQ, and a strong closing CTA. Trust is built through warmth and clarity —
testimonials are intentionally omitted (therapy ethics).

## Style

**Soft UI Evolution** — soft shadows, organic blob shapes, rounded cards,
calming whitespace, premium-but-gentle feel.

## Colors

| Role | Token | Value | Notes |
| ---- | ----- | ----- | ----- |
| Background | `--color-background` | `#fdfaf4` warm cream | calm, non-clinical |
| Primary | `--color-brand` | `#38655a` deep eucalyptus | growth, trust; ≥ 4.5:1 on cream |
| Primary deep | `--color-brand-deep` | `#234239` | hover states, footer |
| Accent | `--color-accent` | `#c07338` soft clay | warmth, creativity highlights |
| Text | `--color-text` | `#221d16` warm charcoal | ≥ 4.5:1 on all surfaces |

## Typography

- **Display:** Fraunces (warm editorial serif) — headings
- **Body:** Inter — UI and body text
- Scale: 0.78 / 0.9 / 1.05 / 1.25 / 1.6 / 2.1 / 2.9 / 3.9 rem

## Effects

- Gentle scroll reveal (IntersectionObserver, staggered ≤ 210ms)
- Soft hover lift on cards (`translateY(-6px)` + deeper shadow)
- CTA glow shadow on primary buttons
- Organic blob shapes in hero and decorative spots

## Anti-patterns (avoided)

Neon colors, harsh/fast animations, dark mode, purple-blue gradients,
emojis as icons, stock-photo clichés, fake testimonials.

## Accessibility checklist

- [x] Body text contrast ≥ 4.5:1
- [x] Visible `:focus-visible` ring
- [x] `prefers-reduced-motion` disables reveals/transitions
- [x] Semantic landmarks, labeled navs, real `<button>`/`<summary>` controls
- [x] Icons are `aria-hidden`; decorative art has `aria-hidden="true"`
- [ ] Re-verify at 375px / 768px / 1024px / 1440px after layout changes
