# 8bitcn v2 Blocks — Hygiene Patch Plan

Purpose: clean up current hero/feature block implementation before continuing with more sections (FAQ, social proof, etc.).

Scope: only stability/consistency fixes. No visual redesign.

> Note: badge text size is intentionally custom and should NOT be changed.

---

## Goals

1. Remove API inconsistencies and dead props
2. Stabilize carousel card layout/border behavior
3. Ensure card heights behave predictably with fixed heights
4. Keep code clean and ready for next block phases

---

## Phase H1 — API Cleanup

### H1.1 Hero action API consistency
Current issue:
- `HeroAction` type includes `href`, but implementation only uses `onClick`.

Decision (pick one and apply consistently):
- **Option A (preferred):** support both `href` and `onClick` in hero actions
- **Option B:** remove `href` from type and keep buttons-only API

Execution:
- Update `hero1.tsx`, `hero2.tsx`, `hero3.tsx`
- Keep the same action shape across all three heroes
- If supporting `href`, render an anchor-compatible button wrapper

Acceptance:
- No dead props in public block API
- Action behavior consistent across all hero blocks

---

## Phase H2 — Feature Carousel Layout Hardening

### H2.1 Remove stacked spacing layers in `feature3`
Current issue:
- Multiple nested paddings/margins (`CarouselItem` + inner wrapper + card frame) cause border clipping and inconsistent visible cards.

Execution:
- Keep a single spacing responsibility level
- Simplify structure inside each `CarouselItem`
- Ensure first/last card borders remain fully visible

Acceptance:
- Left and right borders are always visible
- No accidental 4th card peeking in 3-card desktop layout

### H2.2 Equal height cards in carousel
Execution:
- Ensure `CarouselItem` chain uses `h-full`
- Ensure card and content stretch consistently
- Verify long/short descriptions still produce equal card heights

Acceptance:
- All feature cards in carousel have matching height

---

## Phase H3 — Card Primitive Consistency

### H3.1 Keep the card-only patch branch changes
Required behavior in `components/ui/8bit/card.tsx`:
- Inner card stretches (`h-full flex flex-col`)
- Content can grow (`flex-1`)
- No overflow clipping that kills side borders
- Background integration remains stable

Acceptance:
- Applying `h-96` increases true card body height (not just pushes border)
- No background seam between wrapper and inner card

---

## Phase H4 — Structural Cleanup

### H4.1 Formatting and readability
Execution:
- Normalize indentation/spacing in updated files
- Keep imports consistent
- Remove obvious dead code/comments from temporary debugging

Files in scope:
- `components/ui/8bit/blocks/hero1.tsx`
- `components/ui/8bit/blocks/hero2.tsx`
- `components/ui/8bit/blocks/hero3.tsx`
- `components/ui/8bit/blocks/feature3.tsx`
- `components/ui/8bit/card.tsx`

Acceptance:
- Clean diffs and consistent code style

---

## Phase H5 — Validation

### Checklist
- [ ] `pnpm check` passes (or document known unrelated repo-wide blockers)
- [ ] Hero actions behave consistently in all 3 hero blocks
- [ ] Carousel first/last card borders visible on desktop and mobile
- [ ] No extra card peeking in desktop width
- [ ] Third card height matches others
- [ ] Card `h-96` behaves correctly

---

## Delivery Strategy

1. Patch on v2 working branch (or dedicated hygiene branch)
2. Keep commits scoped by phase where possible
3. After H1–H5 pass, continue with next block categories (FAQ, social proof)

---

## Out of Scope (for this patch)

- New block creation
- Icon library replacement
- Badge text size changes (intentional — leave as-is)
- Major style redesign
