# DUEL-BLOCK-MOBILE-POLISH-PLAN.md

## Goal
Improve the new duel block on mobile so it feels intentional, readable, and game-like instead of becoming a compressed desktop layout.

Desktop and mobile should not try to solve the duel UI in the same way.

### Rule
- **Desktop:** side-by-side duel scene
- **Mobile:** stacked turn-based arena layout

---

## Problem Summary
The current duel block works better on desktop, but mobile likely suffers from:
- characters becoming too small
- center controls competing for space
- too much happening in one horizontal row
- names / stats / action area feeling cramped
- battle log pushing or destabilizing the layout
- poor visual hierarchy on small screens

The fix is not just “make it smaller.”
The fix is a **different mobile layout strategy**.

---

## Mobile Design Direction
### Recommended direction
Turn the duel block into a **stacked arena flow** on mobile.

Instead of:
- left fighter / center action / right fighter

Use:
1. Paladin block
2. battle action block
3. Orc block
4. battle log

This makes the duel feel more like a turn-based battle card sequence.

---

## Phase 1 — Layout Restructure for Mobile

### 1.1 Switch mobile from horizontal duel to vertical battle flow
#### Desktop
Keep current structure:
- paladin
- center controls
- orc

#### Mobile
Use vertical order:
- paladin card
- VS + action block
- orc card
- fight log

### Why
This removes the cramped 3-column compression problem and gives each element breathing room.

---

### 1.2 Breakpoint strategy
Use a clear breakpoint split:
- **mobile:** stacked layout
- **md+ or lg+:** current desktop duel layout

Avoid trying to preserve the same arrangement at all widths.

---

## Phase 2 — Fighter Panel Improvements

### 2.1 Keep HP bars above characters
This is already the right move and should stay.

Each fighter block should flow like this:
1. HP bar
2. character image
3. fighter name
4. subtitle / class label

### Why
This creates consistent battle-card rhythm and keeps health as the first read.

---

### 2.2 Use explicit mobile image sizing
Do **not** rely on passive shrinking.

Define mobile-friendly sprite sizes so both characters:
- stay readable
- feel equally important
- do not crowd surrounding UI

### Goal
- preserve visual weight
- keep both fighters balanced
- avoid tiny or awkward sprites

---

### 2.3 Normalize fighter panel spacing
Each fighter area should have:
- same vertical spacing rhythm
- centered alignment
- stable min-height if needed

This helps avoid visual wobble between the two sides.

---

## Phase 3 — Center Action Area Redesign

### 3.1 Make center controls more dominant on mobile
On desktop, the center can stay compact.
On mobile, the center should feel like the main interaction zone.

### Mobile center area should include
- small `VS`
- one strong full-width action button
- one short status line below

### Why
The action needs to feel obvious and tappable.
A tiny middle button between two squeezed characters does not work well on small screens.

---

### 3.2 Full-width primary action button
Button should become:
- full width on mobile
- visually stronger than desktop
- easy thumb target

Suggested labels stay simple:
- `Hit`
- `Attack`
- `Strike`

---

### 3.3 Reduce noise in center block
If the center contains too much copy, it competes with the fighters.

On mobile, keep only:
- `VS`
- button
- short round/status text

Everything else should move elsewhere or be removed.

---

## Phase 4 — Battle Log Stability

### 4.1 Keep fight messages below the whole duel block
This is correct and should remain.
Do not reintroduce inline message areas that affect the fighter row.

### 4.2 Give battle log a stable footprint
Use a consistent log area with:
- full width
- stable spacing from the duel block
- optional min-height so layout does not jump each round

### Why
Even when the message changes, the main duel visuals should stay stable.

---

### 4.3 One-message model stays
Continue using:
- latest message only
- no stacking
- log replaces prior message cleanly

That is better for mobile than accumulating alerts.

---

## Phase 5 — Visual Hierarchy Improvements

### 5.1 Make each section feel intentional
Mobile order should read like:
- fighter
- conflict
- fighter
- result

That creates a game-like narrative flow.

### 5.2 Emphasize the battle action over decorative elements
The key reads should be:
1. who is fighting
2. current health
3. main action button
4. battle result/log

Everything else is secondary.

---

### 5.3 Use spacing as the main polish tool
Rather than adding extra effects, improve:
- section gaps
- panel rhythm
- button prominence
- cleaner alignment

This will improve perceived polish more than decoration.

---

## Recommended Mobile Layout Structure

### Final suggested mobile order
#### Paladin block
- HP bar
- image
- name
- subtitle

#### Center action block
- small badge or `VS`
- full-width action button
- round/status line

#### Orc block
- HP bar
- image
- name
- subtitle

#### Battle log
- Alert-based result area
- full width
- stable min-height

---

## Optional Polishes
### A) Add a tiny arena badge above the center block
Examples:
- `ARENA MODE`
- `ROUND 1`
- `BATTLE READY`

Keep it subtle.

### B) Keep alert area visually connected
Use spacing/border treatment so the battle log feels like part of the duel system, not an unrelated footer.

### C) Preserve symmetry on desktop, clarity on mobile
Do not try to force identical visual behavior across breakpoints.

---

## Implementation Tasks
1. Detect current duel mobile layout issues in real viewport
2. Change outer layout to stacked mobile / horizontal desktop
3. Increase center action prominence on mobile
4. Add explicit mobile sprite sizing
5. Ensure HP bars remain above images
6. Keep names/subtitles below images
7. Set battle log min-height/stable spacing
8. Test long log messages on mobile
9. Verify no overflow or cramped spacing
10. Run `pnpm check`

---

## Success Criteria
The mobile duel block should feel like a deliberate mobile battle UI.

It is successful if:
- fighters are readable
- HP bars are easy to scan
- action button is obvious and easy to tap
- messages don’t push the fighters around
- no horizontal compression feeling remains
- the block still feels fun and game-like

---

## QA Checklist
- [ ] no overflow on narrow mobile widths
- [ ] paladin block looks balanced
- [ ] orc block looks balanced
- [ ] center action area feels prominent
- [ ] button is full-width and easy to tap
- [ ] status text stays short and readable
- [ ] long battle messages do not move fighter panels
- [ ] alert/log area has stable height
- [ ] desktop layout still looks good
- [ ] `pnpm check` passes

---

## Final Recommendation
The key move is:
### **Treat mobile as a different duel experience, not a scaled-down desktop one.**

That means:
- stacked structure
- stronger action block
- stable log below
- explicit sprite sizing

This will make the duel block feel much more polished on mobile without changing its overall concept.
