# 8bitcn v2 — Game Blocks Expansion Plan

Goal: add a playful “game UI” block pack on top of existing v2 blocks, then integrate these into the v2 launch page.

Current v2 count: **27 blocks**
Planned new game blocks: **10**
New total after this plan: **37 blocks**

---

## Non-negotiable rules

- Use only `8bitcn` components
- Use only approved 8bit icons
- No Lucide/Phosphor/Heroicons
- No emojis
- Helper/description text defaults to `text-xs`
- Keep button groups at least `gap-4`

---

## New Game Blocks (10)

## 1) `game-hero1` — Health Bar Hero
- Standard hero + progress/health bar under CTA
- Use cases: launch pages, product progress

## 2) `game-hero2` — XP Progress Hero
- Hero with XP meter and level milestone badges
- Use cases: product evolution story

## 3) `game-cta1` — Boss Fight CTA
- Problem vs solution framing (“boss” vs “power-up”)
- Strong dual CTA

## 4) `game-roadmap1` — Quest Roadmap Timeline
- Roadmap shown as quest log
- states: completed / in-progress / locked

## 5) `game-team1` — Party Grid
- Team/member cards as “party members” with role + level

## 6) `game-pricing1` — Loot Tier Pricing
- Pricing tiers styled as rarity classes (without using “loot” copy repeatedly)
- Keep pricing semantics normal (plan/price/features)

## 7) `game-features1` — Skill Tree Features
- Feature unlock map / skill-tree style layout

## 8) `game-stats1` — Match Stats Social Proof
- KPI strip styled like match-end stats

## 9) `game-integrations1` — Inventory Grid
- Integrations/tools shown as inventory slots

## 10) `game-faq1` — Checkpoint FAQ
- FAQ rendered as checkpoint progression

---

## Implementation Phases

## Phase G1 — Core Launch-Ready (high impact first)
Build these first:
1. `game-hero1`
2. `game-roadmap1`
3. `game-pricing1`
4. `game-stats1`

Acceptance:
- Each block is copy-paste ready
- Works in dark mode
- Passes lint/build

## Phase G2 — Expansion Set
Build next:
5. `game-hero2`
6. `game-cta1`
7. `game-features1`
8. `game-team1`

Acceptance:
- Consistent spacing/token usage
- No custom icon hacks

## Phase G3 — Utility & Completion
Finish with:
9. `game-integrations1`
10. `game-faq1`

Acceptance:
- Complete 10-block game pack
- Docs examples render cleanly

---

## Docs + Registry work

For each block add:
- Component file under `components/ui/8bit/blocks/`
- MDX docs page under `content/docs/blocks/game/`
- `index.mdx` for game category
- Registry entry updates (`registry.json`)

Naming format:
- `game-hero1`, `game-roadmap1`, etc. in docs titles
- File names can remain `gameHero1.tsx` or `game-hero1.tsx` as long as consistent with existing conventions

---

## Required updates to v2 launch page (`/blocks`)

After blocks are added, update launch page content:

1. Replace all mentions of **27 blocks** with **37 blocks**
2. Add a dedicated section: **“New Game UI Pack”**
3. In Featured Showcase, include at least:
   - `game-hero1`
   - `game-roadmap1`
   - `game-pricing1`
4. Add category summary card for **Game Blocks (10)**
5. Update metadata/summary text to mention game-inspired blocks

---

## Suggested rollout order

1. Ship G1 first (core visible wins)
2. Update `/blocks` page count and featured cards immediately after G1
3. Ship G2 + G3
4. Final pass: spacing consistency, docs QA, screenshots

---

## QA checklist

- [ ] `pnpm check` green
- [ ] `pnpm build` green
- [ ] No non-8bit icons imported
- [ ] No emojis in block copy
- [ ] Helper text is `text-xs`
- [ ] Button groups use `gap-4+`
- [ ] `/blocks` page shows **37** total blocks
- [ ] Game blocks are visible in featured showcase

---

## Definition of done

- 10 new game blocks implemented and documented
- Registry updated correctly
- `/blocks` launch page updated to new count and showcases game pack
- Branch is lint/build clean and ready for review
