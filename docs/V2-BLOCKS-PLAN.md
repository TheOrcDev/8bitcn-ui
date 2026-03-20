# 8bitcn V2 Blocks — Execution Plan

Based on: `App Ideas/2026-03-16 — 8bitcn New Blocks Recommendations (Execution).md`

---

## Phase 1 — Conversion Core (must-have)

### 1. Hero: Retro Product Launch ⬜
- [ ] `components/ui/8bit/blocks/hero.tsx`
- [ ] Big Atari headline + subcopy + primary CTA + secondary CTA
- [ ] Optional mini badges (Open Source, Fast Setup, No BS)
- [ ] Variant: centered + split (left visual / right copy)
- [ ] Docs: `content/docs/blocks/marketing/hero.mdx`
- [ ] Registry: add to `registry.json`
- [ ] Note: Hero already started on `feat/hero-block` stash — merge that work in

### 2. Feature Grid: 8-bit Cards ⬜
- [ ] `components/ui/8bit/blocks/feature-grid.tsx`
- [ ] 3/6/9 card variants
- [ ] Icon + title + short description per card
- [ ] Optional "coming soon" badge
- [ ] Docs + registry

### 3. Social Proof Strip ⬜
- [ ] `components/ui/8bit/blocks/social-proof.tsx`
- [ ] Logo cloud / trusted-by / user counts / stars
- [ ] Optional ticker mode (horizontal scroll)
- [ ] Docs + registry

### 4. Pricing Table (Retro) ⬜
- [ ] `components/ui/8bit/blocks/pricing-table.tsx`
- [ ] 2–4 plans
- [ ] Highlighted/recommended plan state
- [ ] Monthly/yearly toggle
- [ ] FAQ link + guarantee note
- [ ] Docs + registry

### 5. FAQ Accordion (Pixel Style) ⬜
- [ ] `components/ui/8bit/blocks/faq.tsx`
- [ ] Uses existing 8bit accordion component
- [ ] Optional search input
- [ ] Compact + full variants
- [ ] Docs + registry

---

## Phase 2 — Product Depth (high value)

### 6. How It Works Timeline ⬜
- [ ] `components/ui/8bit/blocks/timeline.tsx`
- [ ] 3-step and 5-step variants
- [ ] Retro progress line / checkpoints

### 7. Comparison Block ⬜
- [ ] `components/ui/8bit/blocks/comparison.tsx`
- [ ] "Us vs alternatives" feature matrix with checks

### 8. Use Cases Grid ⬜
- [ ] `components/ui/8bit/blocks/use-cases.tsx`
- [ ] Cards by persona (founder, marketer, dev, creator)
- [ ] CTA per card

### 9. Integration Logos + Details ⬜
- [ ] `components/ui/8bit/blocks/integrations.tsx`
- [ ] Compact icon wall + expandable details

### 10. Sticky CTA Footer Bar ⬜
- [ ] `components/ui/8bit/blocks/sticky-cta.tsx`
- [ ] Appears on scroll, dismissible

---

## Phase 3 — Community & Trust

### 11. Testimonial Carousel (Pixel Frame) ⬜
- [ ] `components/ui/8bit/blocks/testimonial-carousel.tsx`
- [ ] Quote + avatar + role, arrows + dots

### 12. Case Study Preview Cards ⬜
- [ ] `components/ui/8bit/blocks/case-study.tsx`
- [ ] Outcome-first card format, KPI chips

### 13. Changelog Feed Block ⬜
- [ ] `components/ui/8bit/blocks/changelog-feed.tsx`
- [ ] Latest 3 releases, markdown excerpt + link

### 14. Founder/Team Block (Retro Portrait) ⬜
- [ ] `components/ui/8bit/blocks/team.tsx`
- [ ] Credibility for indie project pages

### 15. Roadmap / Now-Next-Later ⬜
- [ ] `components/ui/8bit/blocks/roadmap.tsx`
- [ ] Public roadmap teaser

---

## Phase 4 — Advanced / Unique 8bitcn Identity

### 16. Interactive Demo Shell ⬜
- [ ] `components/ui/8bit/blocks/demo-shell.tsx`
- [ ] Fake terminal / command run / output preview

### 17. Command Palette CTA Block ⬜
- [ ] `components/ui/8bit/blocks/command-cta.tsx`
- [ ] "Press ⌘K" style block

### 18. Retro Metrics Dashboard Block ⬜
- [ ] `components/ui/8bit/blocks/metrics.tsx`
- [ ] KPI cards with animated counters

### 19. Feature Spotlight Carousel ⬜
- [ ] `components/ui/8bit/blocks/feature-spotlight.tsx`
- [ ] One feature visible at a time + arrows

### 20. Easter-Egg Pixel Loader Block ⬜
- [ ] `components/ui/8bit/blocks/pixel-loader.tsx`
- [ ] Optional decorative transition component

---

## Design Rules

1. Preserve 8bitcn Atari vibe (palette + typography + border language)
2. Keep accessibility: contrast, focus states, keyboard nav
3. Avoid over-animation; motion should support readability
4. Every block ships with: default variant, compact variant, dark/light safe tokens
5. Include plain copy placeholders that are production-usable

## Technical Spec (per block)

- Component file in `components/ui/8bit/blocks/`
- Docs page in `content/docs/blocks/[category]/`
- Registry entry in `registry.json`
- Props: `title`, `subtitle`, `description`, `ctaPrimary`, `ctaSecondary`, `items[]`, `className`, `variant`
- Import retro CSS: `import "@/components/ui/8bit/styles/retro.css"`

## Execution Order

- **Sprint 1 (Day 1-2):** Hero + Feature Grid
- **Sprint 2 (Day 3):** Social Proof + FAQ
- **Sprint 3 (Day 4):** Pricing Table
- **Sprint 4 (Day 5):** Polish + docs + sample landing page combining Phase 1 blocks
- **Phase 2-4:** Continue after Phase 1 ships
