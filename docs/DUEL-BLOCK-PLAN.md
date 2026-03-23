# DUEL-BLOCK-PLAN.md

## Goal
Create a new gamified duel block for 8bitcn using:
- `public/images/8bit-paladin.png`
- `public/images/8bit-orc-warrior.png`

The block should present a **versus / combat interaction** with:
- paladin on the left
- orc warrior on the right
- a central action button (`Hit`, `Attack`, or similar)

This should feel like a compact arcade-style battle UI, not a full game screen.

---

## Block Name
### Recommended component name
- `duel-block`

### Optional internal variant naming
If later needed, this can become:
- `duel1`
- `duel2`

But for now, keep it simple and reusable:
- **`duel-block`**

---

## Core Concept
A small interactive duel widget where two fantasy characters face off.

### Layout idea
- **Left:** Paladin fighter panel
- **Center:** `VS` / action area / attack button
- **Right:** Orc fighter panel

The central area should feel like the player is triggering the clash.

---

## UX Intent
The block should feel:
- playful
- game-inspired
- clear at first glance
- exciting but not visually overloaded
- usable as both a showcase block and an interactive CTA-like widget

It should communicate immediately:
- who is fighting
- what action can be taken
- what the state of the duel is

---

## Layout Structure
### Main row
1. Paladin panel
2. Center interaction column
3. Orc panel

### Each fighter panel should include
- character image
- fighter name
- class/faction label
- HP bar
- optional small stat line or level label

### Center column should include
- `VS` mark or battle badge
- primary button
- status text / turn text / action feedback

---

## Content Direction
### Suggested labels
#### Left fighter
- `Paladin`
- subtitle: `Holy Vanguard`

#### Right fighter
- `Orc Warrior`
- subtitle: `Arena Berserker`

### Center labels
#### Badge ideas
- `ARENA MODE`
- `DUEL READY`
- `BATTLE START`

#### Main button ideas
- `Hit`
- `Attack`
- `Clash`
- `Strike`

### Status text ideas
- `Round 1`
- `Paladin's turn`
- `Critical hit ready`
- `The arena is set`

### Result text ideas (if interactive)
- `Critical strike!`
- `Blocked!`
- `Holy damage!`
- `Orc smash!`
- `Combo x2`

---

## Interaction Options
### Version 1 (recommended)
**Light interactivity only**

Clicking the center button should:
- trigger a small state change
- update a status label
- optionally reduce a displayed HP number/bar
- keep the interaction demo-like and fun

This is ideal for docs/showcase because it feels alive without turning into game logic complexity.

### Version 2 (optional later)
Add richer duel loop:
- random damage
- alternating turns
- health depletion
- winner state
- reset button

Not necessary for first implementation.

---

## Recommended First Implementation
### State model
Keep it simple:
- two displayed HP values
- one button press updates one side or alternates damage
- status text changes after each click

Example flow:
1. initial state: `Round 1`
2. click `Hit`
3. orc loses HP
4. status: `Holy strike landed!`
5. next click can change target or continue simple loop

This gives motion/feedback without overengineering.

---

## Visual Styling Rules
### Must do
- use only existing 8bitcn primitives
- use theme tokens only
- keep images pixelated/crisp
- preserve light + dark mode compatibility
- emphasize battle framing without making it noisy

### Avoid
- hardcoded fantasy colors
- overly complex animation
- giant text walls
- too much UI clutter around fighters

---

## Recommended Styling Direction
### Fighter panels
- compact but clearly separated
- enough room for image + HP + identity
- should feel symmetrical

### Center action area
- strongest focal point after the characters
- clear `VS` hierarchy
- big satisfying button

### Optional embellishments
Use sparingly:
- crossed divider / battle line
- subtle ring or glow around center button
- tiny `+XP` or reward line after action

---

## Strong UI Ideas
### Option A — Classic Duel Layout (recommended)
- paladin panel
- center `VS` + `Hit` button
- orc panel
- HP bars visible for both
- status text under button

### Option B — Turn-based card style
- each side more card-like
- center has battle command area
- slightly more RPG-ish

### Option C — Arena scoreboard style
- top shows `Paladin vs Orc Warrior`
- center shows round and button
- fighters below with HP bars

### Best choice
**Option A** is strongest for a first block:
- clear
- iconic
- easy to scan
- very reusable

---

## Suggested Content Set
### Badge
`ARENA MODE`

### Left fighter
- `Paladin`
- `Holy Vanguard`

### Right fighter
- `Orc Warrior`
- `Arena Berserker`

### Center
- `VS`
- button: `Hit`
- status: `Round 1`

### Post-click examples
- `Critical strike!`
- `Shield block!`
- `Orc smash!`
- `Holy damage!`

---

## Implementation Files
### Component
- `components/ui/8bit/blocks/duel-block.tsx`

### Docs
- place under game-oriented docs, likely:
  - `content/docs/blocks/game/duel-block.mdx`

### Registry
- `registry.json`

### Optional docs listing updates
- add to `/docs/blocks/game` if needed
- include in blocks listing if that page is manually curated

---

## Likely Component Dependencies
Depending on final implementation:
- `button`
- `badge`
- `card` (if fighter panels use cards)
- `progress` or existing custom bars if reused
- `separator` if used

Make sure registry entry includes:
- block file
- all component files actually used
- correct dependencies

---

## QA Checklist
- [ ] paladin image path works
- [ ] orc image path works
- [ ] no overflow on mobile
- [ ] center button remains prominent on small screens
- [ ] HP bars are readable
- [ ] interaction feels responsive
- [ ] light mode looks good
- [ ] dark mode looks good
- [ ] no hardcoded colors
- [ ] docs preview works
- [ ] registry entry complete
- [ ] install from registry works
- [ ] `pnpm check` passes

---

## Recommendation
Build this first as a **compact, lightly interactive duel widget**.

That gives you:
- a unique gamified block
- strong use of the paladin + orc assets
- interactivity without full game complexity
- something highly memorable for 8bitcn docs/showcase

---

## Final Recommended Direction
### Best first version
- `duel-block`
- side-by-side fighter layout
- visible HP bars
- center `Hit` button
- status text changes after click
- small arena badge above

This is the cleanest and strongest version for initial execution.
