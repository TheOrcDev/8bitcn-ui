# PORTAL-TRANSITION-BLOCK-PLAN.md

## Goal
Create a new interactive 8bitcn block built around the new portal asset:
- `public/images/8bit-portal.png`

This block should feel like a **clickable transition / fast-travel moment** where the user is about to pass into another realm, page, or state.

The portal should not be just decorative — it should feel like the core mechanic of the block.

---

## Proposed Block
- **Name:** `portal-transition1`
- **Category:** CTA / Interactive / Game-inspired
- **Core fantasy:** fast travel, teleportation, entering the next realm

---

## Concept
This block is a CTA that feels like a game transition screen.

Instead of a normal button-only CTA, the user is invited to:
- click the portal
- click the action button
- trigger a small “traveling” state
- then transition to the destination

The portal is the centerpiece, not an accessory.

---

## Use Cases
This block could be used for:
- CTA to another landing page section
- link to pricing/docs/themes/blocks
- onboarding next-step moment
- interactive game page transition
- loading/redirect page concept later

---

## Core UX
### Primary experience
The user sees:
- a short badge/status label
- a big headline
- a short supporting line
- a large portal image in the center
- one strong CTA button
- optional secondary action

### Interaction idea
When user clicks:
1. portal/button enters a temporary active state
2. text changes to something like `Traveling...`
3. optional short delay (300–900ms)
4. navigate to destination

If no real navigation is wired yet, keep it as a visual interaction demo state.

---

## Layout Direction
### Structure
1. badge/status label
2. headline
3. short supporting copy
4. centered portal image
5. CTA row
6. optional helper line below

### Recommended composition
- vertically centered, cinematic feel
- generous spacing around the portal
- text should feel like a game transition, not marketing fluff

### Responsive
- desktop: centered with side breathing room
- mobile: portal remains large but not oversized
- CTA buttons stack or wrap cleanly on small screens

---

## Content Direction
### Badge ideas
- `FAST TRAVEL`
- `PORTAL READY`
- `NEXT REALM`
- `TELEPORT ONLINE`

### Heading ideas
Pick one strong option:
- **Click to go through the portal**
- **Your next realm is ready**
- **Fast travel unlocked**
- **Enter the next world**

### Supporting copy ideas
Keep it short:
- `Step through the portal and continue your adventure.`
- `One click and you’re in the next realm.`
- `The gate is open. Your next build starts here.`

### CTA ideas
Primary:
- `Enter Portal`
- `Travel Now`
- `Open Portal`

Secondary:
- `Choose Destination`
- `Stay Here`
- `View Realms`

### Small helper text
Optional:
- `No cooldown required.`
- `Fast travel active.`
- `Destination locked in.`

---

## Interaction States
### Default
- portal visible and inviting
- button says `Enter Portal`

### Hover
- slight scale/focus emphasis
- optional token-based shadow or glow treatment

### Active / clicked
- portal slightly scales/pulses
- label or CTA changes to:
  - `Traveling...`
  - `Opening gateway...`
  - `Warping...`

### Complete
- trigger callback / navigate / reset state

---

## Styling Rules
### Must do
- use only existing 8bitcn component primitives
- use theme tokens only
- image must stay pixelated/crisp
- keep light/dark theme compatibility
- keep it readable and clean

### Avoid
- hardcoded neon glows
- overcomplicated loading animation
- random sci-fi gradients disconnected from theme system
- too much text

---

## Recommended Styling Direction
### Visual feel
- dark-mode especially should feel strong
- portal should be the brightest/focal element
- overall shell should remain minimal so the portal stands out

### Suggested accents
- a subtle panel/card wrapper if needed
- small token-based border/shadow
- badge above headline for game feel

### Optional extra polish
- simple pulse state on interaction
- subtle floating helper text or status line
- tiny particles only if already consistent with other game blocks

---

## Implementation Strategy
### Version 1 (recommended)
Build as a reusable CTA block with local interaction state only.

That means:
- no full router transition logic required initially
- just visual “traveling” state + callback-friendly structure
- easier to document and reuse

### Version 2 (later)
Extend into a true transition page or full-screen redirect experience.

---

## Suggested Component API
Potential props later:
- `title`
- `description`
- `primaryActionLabel`
- `secondaryActionLabel`
- `onEnter`
- `href`
- `travelingText`

But first implementation can be hardcoded demo content, consistent with 8bitcn block style.

---

## Files to Create / Update
### Component
- `components/ui/8bit/blocks/portal-transition1.tsx`

### Docs
- `content/docs/blocks/game/portal-transition1.mdx`
  - or another category if you want it outside `game`

### Registry
- `registry.json`

### Optional docs listing updates
- game blocks index if needed
- blocks listing page if needed

---

## Registry Requirements
Include all used component files.

Likely dependencies:
- `button`
- `badge` (if used)
- `card` only if actually used

Do not miss used component files in registry entry.

---

## QA Checklist
- [ ] portal image path works
- [ ] image is crisp/pixelated
- [ ] no layout overflow on mobile
- [ ] CTA row behaves well on mobile
- [ ] hover/click state feels good
- [ ] light mode looks clean
- [ ] dark mode looks strong
- [ ] no hardcoded colors
- [ ] docs preview works
- [ ] registry entry complete
- [ ] install from registry works
- [ ] `pnpm check` passes

---

## Recommended Final Copy Set
### Badge
`FAST TRAVEL`

### Heading
`Click to go through the portal`

### Supporting copy
`The gateway is open. One step and you’re in the next realm.`

### Buttons
- `Enter Portal`
- `Choose Destination`

### Traveling state
`Traveling...`

This gives the block a clear and original identity while staying flexible enough for multiple product contexts.

---

## Recommendation
Build this first as a **centered interactive CTA block**.

That gives you:
- a unique new block type
- a strong use for the portal art
- a memorable gamified interaction
- a reusable pattern for future “transition” or “realm” concepts
