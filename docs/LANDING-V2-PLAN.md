# 8bitcn Landing v2 Plan (Shadcn-style, 8bitcn-native)

Goal: Build a homepage with the same clarity as shadcn, but fully in 8bitcn style.

Primary CTA: **Docs**
Secondary focus: **v2 badge** linking to new blocks showcase.

---

## Constraints (non-negotiable)

- Use **only 8bitcn components**
- Use **only 8bit icons** (no lucide/phosphor)
- No emojis
- Helper/description text defaults to `text-xs`
- Keep button groups at least `gap-4`

---

## Information Architecture

1. Header / nav
2. Hero with v2 badge
3. Quick links row
4. Featured v2 blocks preview
5. Why 8bitcn
6. Final CTA to Docs
7. Footer

---

## Section Plan

## 1) Header

### Content
- Left: logo + 8bitcn wordmark
- Center nav: Docs, Components, Blocks, Examples
- Right: Search + Docs CTA

### Behavior
- Sticky header
- Mobile drawer menu

### Notes
- Keep compact height
- Border style consistent with 8bit card frame

---

## 2) Hero (centered)

### Top badge
- Label: `v2`
- Link target: `/blocks`
- Purpose: direct users to new blocks showcase

### Main copy
- H1: `The Foundation for Retro Design Systems`
- Subtitle (`text-xs`): short value proposition for indie hackers

### CTAs
- Primary: `Open Docs` -> `/docs`
- Secondary: `Explore Blocks` -> `/blocks`

### Supporting line
- `Open source · Copy-paste · Built for indie hackers`

---

## 3) Quick Links Row

4 small cards/buttons:
- Start with Components
- Browse Blocks
- View Examples
- Read Changelog

All should be visually equal-height and keyboard-focusable.

---

## 4) Featured v2 Blocks Preview

- Grid of 6 curated block cards from v2
- Each card: title, tiny description (`text-xs`), category tag
- Top-right link: `View all v2 blocks` -> `/blocks`

Selection recommendation:
- Hero1
- Hero2
- Feature1
- Feature3
- Pricing1
- FAQ1

---

## 5) Why 8bitcn

3 core value cards:
1. Retro-first UI primitives
2. Copy-paste block workflow
3. Fast docs-driven shipping

Keep copy short and concrete.

---

## 6) Final CTA

- Heading: `Ready to build with 8bitcn?`
- Primary button: `Go to Docs`
- Secondary text link: `See v2 Blocks`

---

## 7) Footer

- Links: Docs, Components, Blocks, Changelog, GitHub
- Minimal legal row
- Keep it consistent with 8bit spacing and border language

---

## Phase Execution

## LP1 — Core frame
- Header
- Hero + v2 badge
- Primary docs CTA

## LP2 — Discovery
- Quick links row
- Featured v2 blocks section

## LP3 — Trust + finish
- Why 8bitcn
- Final CTA
- Footer
- Responsive polish

---

## Acceptance Criteria

- v2 badge visible above hero and links to `/blocks`
- Primary CTA points to `/docs`
- Visual style is clearly 8bitcn (not generic SaaS)
- No non-8bit icons
- No emoji usage
- Small helper text uses `text-xs`
- Mobile + desktop render correctly

---

## Optional Enhancements (after launch)

- Add tiny “What’s new in v2” strip under hero
- Add block category tabs in preview section
- Add keyboard shortcut hint for search
