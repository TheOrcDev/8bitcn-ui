# NOT-FOUND3-UNDEAD-PLAN.md

## Goal
Create a third 404 block variant for 8bitcn using the new image:
- `public/images/8bit-undead.png`

This block should sit alongside the existing **ogre** and **dwarf** 404 variants and expand the fantasy/game-style set with an **undead / cursed** tone.

---

## Block Name
- **Component:** `not-found3`
- **Docs slug:** `not-found3`
- **Image:** `/images/8bit-undead.png`

---

## Design Intent
This variant should feel:
- cursed
- playful
- game-inspired
- readable and usable
- visually consistent with existing 404 blocks

It should **not** become horror-themed or visually noisy.
The tone should be more:
- "wrong portal"
- "graveyard glitch"
- "raised from the wrong route"

than dark/edgy for the sake of it.

---

## Layout Direction
### Core structure
- centered full-page 404 layout
- oversized `404` above the character
- `8bit-undead` image as the main visual anchor
- short 1–2 line copy below
- two CTA buttons

### Suggested order
1. small badge / label
2. giant `404`
3. undead image
4. heading
5. supporting copy
6. CTA row

### Responsive behavior
- desktop: buttons side-by-side
- mobile: buttons stacked or wrapped cleanly
- image remains the focus without causing overflow

---

## Content Direction
### Badge ideas
Pick one:
- `CURSED ROUTE`
- `UNDEAD PAGE`
- `GRAVEYARD ERROR`

### Main heading ideas
Pick one strong option:
- **404 — This page should have stayed buried**
- **404 — Raised from the wrong route**
- **404 — Lost in the graveyard**

### Supporting copy ideas
Keep it short and playful:
- `Looks like this page crawled out of the crypt and vanished again.`
- `There’s nothing alive here — let’s get you back to safer ground.`
- `This route is gone, cursed, or both.`

### CTA buttons
Recommended:
- Primary: `Return Home`
- Secondary: `Browse Blocks`

Alternative secondary:
- `Open Docs`

---

## Visual Styling Rules
### Must do
- use only existing 8bitcn component primitives
- use theme tokens only
- keep image pixelated/crisp
- maintain strong readability in both light and dark themes
- preserve the same overall visual family as other 404 variants

### Avoid
- hardcoded spooky colors
- random gradients that break theme support
- too much decorative noise
- overly long copy
- excessive animation

---

## Recommended Styling Choices
### Typography
- giant `404` should be the hero element
- heading should be bold but secondary to the number
- supporting copy should stay concise and muted

### Character presentation
- image centered
- enough breathing room so the undead sprite feels featured
- optional subtle shadow or token-based background panel if needed

### Optional micro-polish
If desired, add **very subtle** cursed flavor using tokens only:
- faint dotted/ghosted panel background
- tiny accent badge
- slight image float or pulse only if it matches existing variants

Do not make it more animated than the ogre/dwarf variants unless all 404 variants are aligned later.

---

## Implementation Files
### Component
- `components/ui/8bit/blocks/not-found3.tsx`

### Docs
- `content/docs/blocks/404/not-found3.mdx`

### Registry
- `registry.json`

### Optional docs index updates
If there is a 404 section listing/index, update it to include the new variant.

---

## Registry Requirements
Ensure registry entry includes:
- block file path
- all required component files used in the block
- proper `registryDependencies`

Expected likely dependencies:
- `button`
- `badge` (if badge used)
- `card` only if actually used

Do **not** repeat the earlier mistake of missing used files from registry.

---

## Implementation Notes
### Match existing 404 variants
Before building:
- inspect ogre and dwarf 404 blocks
- match spacing rhythm
- match CTA treatment
- match docs/registry patterns

### Keep this block simple
This is a variant, not a whole new pattern system.
The main difference should come from:
- character
- copy tone
- slight atmosphere

not from reinventing layout structure.

---

## QA Checklist
- [ ] component renders correctly
- [ ] no overflow on mobile
- [ ] image path works: `/images/8bit-undead.png`
- [ ] buttons align well on small screens
- [ ] light mode looks good
- [ ] dark mode looks good
- [ ] no hardcoded colors
- [ ] docs page added and visible
- [ ] registry entry complete
- [ ] install from registry works
- [ ] `pnpm check` passes

---

## Suggested Final Direction
### Recommended final copy set
**Badge:** `CURSED ROUTE`

**Heading:**
`404 — This page should have stayed buried`

**Supporting copy:**
`Looks like this route crawled out of the crypt and disappeared again.`

**Buttons:**
- `Return Home`
- `Browse Blocks`

This gives the new undead variant a distinct personality while still fitting the 8bitcn tone.
