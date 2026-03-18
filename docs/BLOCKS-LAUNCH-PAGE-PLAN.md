# Blocks Launch Page Plan (`/blocks`)

Goal: turn `/blocks` from a plain card wall into a **v2 launch story page** (blog/editorial style) that explains rebrand + new logo + new landing + 27 new blocks, while still letting users browse blocks.

---

## Core Narrative

`/blocks` should answer:
1. What did 8bitcn v2 ship?
2. Why was it rebuilt/rebranded?
3. What can I use right now?
4. What’s next on roadmap?

---

## Information Architecture (top → bottom)

## 1) Launch Hero

### Content
- Eyebrow badge: `v2` (links to this page itself or changelog)
- Title: launch headline (playful, gamified)
- Subtitle: short summary of rebrand + 27 blocks
- Metadata row: release date, version, block count
- CTA primary: `Open Docs`
- CTA secondary: `Browse All Blocks`

### Visual notes
- Centered editorial hero
- Keep helper copy `text-xs`
- Use 8bitcn components only

---

## 2) “What’s New in v2” Strip

A compact highlight section with 4–6 launch bullets:
- rebranding + new logo
- refreshed landing page
- 27 new blocks
- improved docs/navigation
- quality pass / consistency

Use simple row/list cards, not huge blocks.

---

## 3) Story Section (Blog-style)

Two-column editorial section:
- **Left:** “Why we rebuilt 8bitcn”
- **Right:** “How v2 improves shipping speed”

This gives context and makes page feel intentional, not just a component catalog.

---

## 4) Featured Block Showcase (Curated)

Show 4–6 “best of v2” blocks with larger previews and short use-case copy:
- Split Hero
- Centered Hero
- Feature Carousel
- Pricing
- FAQ
- Roadmap/Timeline component

Each card includes:
- block name
- one-liner “best for”
- `View docs` link

Important: keep this curated; don’t dump all 27 here.

---

## 5) Category Snapshot (with counts)

Show category tiles with counts + links:
- Hero (3)
- Features (3)
- Pricing (3)
- FAQ (3)
- Social Proof (3)
- Team (3)
- Timeline (3)
- CTA/Layout (remaining)

This replaces the giant raw grid and improves scannability.

---

## 6) “Built to Ship” Principles

3 short principle cards:
- copy-paste ready
- 8bitcn-only components
- playful retro, production usable

Keep this practical and concise.

---

## 7) Roadmap Spotlight

Dedicated section for roadmap component + “what’s next”:
- icon pack (future)
- new advanced sections
- templates/examples expansion

Add CTA: `See roadmap` or `Follow updates`.

---

## 8) Final CTA

End with simple conversion block:
- Headline: “Ready to build with 8bitcn?”
- Buttons: `Go to Docs` + `Explore Blocks`

---

## Layout & Style Rules

- 8bitcn components only
- 8bit icons only
- no emoji
- helper text = `text-xs`
- button groups min `gap-4`
- editorial spacing rhythm (more whitespace between major sections)
- avoid giant uniform card walls

---

## Component Plan (for implementation)

Create section-level building blocks:
- `BlocksLaunchHero`
- `WhatsNewV2Strip`
- `V2StorySection`
- `FeaturedBlocksShowcase`
- `BlocksCategorySnapshot`
- `BuiltToShipSection`
- `RoadmapSpotlight`
- `BlocksFinalCta`

Then compose them in `app/blocks/page.tsx`.

---

## Execution Phases

## Phase BL1 — Structure + Story
- Build Hero
- Build What’s New strip
- Build Story section
- Build Final CTA

## Phase BL2 — Showcase + Categories
- Add curated Featured Blocks section
- Add category snapshot with counts/links

## Phase BL3 — Trust + Future
- Add Built to Ship principles
- Add Roadmap spotlight
- Final spacing/typography polish

---

## Acceptance Criteria

- `/blocks` reads like a launch post, not a raw card list
- Rebrand/new logo/new landing/27 blocks clearly communicated
- Split Hero + Roadmap are visibly showcased
- User can still navigate quickly to docs and categories
- Page feels clean on mobile and desktop

---

## Out of Scope (for this pass)

- New block creation
- New icon library integration
- Major docs IA rewrite

This pass is strictly presentation + narrative quality for v2 launch impact.
