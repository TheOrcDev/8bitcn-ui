# 8bitcn Theme Expansion Plan (v2)

Planned new themes:
- Dungeon Torch
- Space Station
- Pixel Forest
- Ice Cavern
- Lava Core
- Glitch Mode
- Dwarven Vault
- Dragon Hoard
- Ancient Runes

Goal: add distinctive, production-usable themes with strong 8bit identity and consistent token mapping.

---

## Theme Architecture Rules

Each theme must provide full token coverage:
- `--background`
- `--foreground`
- `--card`
- `--card-foreground`
- `--popover`
- `--popover-foreground`
- `--primary`
- `--primary-foreground`
- `--secondary`
- `--secondary-foreground`
- `--muted`
- `--muted-foreground`
- `--accent`
- `--accent-foreground`
- `--destructive`
- `--border`
- `--input`
- `--ring`

Additional 8bit tokens:
- `--pixel-shadow`
- `--scanline-opacity`
- `--hud-success`
- `--hud-warning`
- `--hud-danger`

---

## Theme Specs

## 1) Dungeon Torch

Mood: dark dungeon lit by warm torches.

Palette direction:
- background: charcoal/stone
- primary: torch amber
- accent: ember orange
- muted: soot gray

Use cases:
- RPG-style landing sections
- roadmap/quest UI

Do:
- keep high contrast for text
- subtle warm highlights

---

## 2) Space Station

Mood: steel corridors, control panels, warning indicators.

Palette direction:
- background: cold deep gray/blue
- primary: cyan/ice blue
- accent: warning orange
- muted: metallic gray

Use cases:
- dashboards
- control panel components

Do:
- strong ring/focus colors for controls

---

## 3) Pixel Forest

Mood: retro wilderness/adventure map.

Palette direction:
- background: dark moss green
- primary: leafy green
- accent: bark brown / sunlight yellow
- muted: earthy gray-green

Use cases:
- game blocks
- organic themed pages

Do:
- avoid oversaturation; keep readability first

---

## 4) Ice Cavern

Mood: frozen crystal cave.

Palette direction:
- background: deep navy-blue
- primary: ice cyan
- accent: frosty white-blue
- muted: slate blue-gray

Use cases:
- light/calm product pages
- stat-heavy layouts

Do:
- maintain sufficient contrast for small text (`text-[9px]`)

---

## 5) Lava Core

Mood: magma chamber / high energy.

Palette direction:
- background: near-black volcanic
- primary: lava red/orange
- accent: molten yellow
- muted: ash gray

Use cases:
- announcement/CTA-heavy sections
- boss/final state UIs

Do:
- limit red to accents to avoid eye fatigue

---

## 6) Glitch Mode

Mood: retro cyber interference.

Palette direction:
- background: black
- primary: neon cyan
- accent: magenta/violet
- muted: graphite

FX notes:
- optional subtle chromatic split for headings only
- keep body text clean (no heavy effects)

Use cases:
- hero sections
- launch pages

---

## 7) Dwarven Vault

Mood: carved stone + forged metal + gold trims.

Palette direction:
- background: dark stone gray
- primary: forge gold
- accent: copper/iron
- muted: slate

Use cases:
- pricing/comparison
- trust sections

Do:
- emphasize premium but readable style

---

## 8) Dragon Hoard

Mood: treasure vault + dragon fire.

Palette direction:
- background: obsidian black
- primary: ruby red
- accent: gold
- muted: dark bronze

Use cases:
- premium package pages
- spotlight blocks

Do:
- keep primary/action contrast accessible

---

## 9) Ancient Runes

Mood: mystical temple inscriptions.

Palette direction:
- background: ancient stone
- primary: rune cyan/teal
- accent: faded parchment gold
- muted: weathered gray

Use cases:
- docs/changelog/story pages
- lore-like content sections

Do:
- clean typography over decorative effects

---

## Implementation Phases

## Phase T1 — Core Token Setup

Tasks:
- Add all 9 themes to theme token map
- Ensure each theme has complete token set
- Validate button/input/card/badge states in each theme

Acceptance:
- theme switcher can apply each theme with no missing tokens

---

## Phase T2 — UI Validation Matrix

For each theme validate:
- buttons (default/outline/secondary/destructive)
- badges
- card borders + card backgrounds
- input, select, textarea focus states
- dialogs/popovers
- timeline and progress bars

Acceptance:
- no unreadable states
- no invisible borders/rings

---

## Phase T3 — Block Showcase Integration

Update `/themes` and `/blocks` demos:
- include quick preview chips for all 9 themes
- ensure game blocks look intentional in each theme

Acceptance:
- users can preview themes across representative blocks

---

## Phase T4 — Accessibility Pass

Per theme:
- verify contrast ratio for body and helper text
- verify `text-[9px]` readability with retro font
- keyboard focus ring visibility

Acceptance:
- all themes meet practical readability standards

---

## Phase T5 — Release Packaging

- Add changelog entry for new theme pack
- Add docs page section for each theme description
- Add recommended use-cases for each theme

Acceptance:
- themes are documented and launch-ready

---

## Suggested Order of Build

1. Dungeon Torch
2. Dwarven Vault
3. Space Station
4. Ice Cavern
5. Pixel Forest
6. Lava Core
7. Dragon Hoard
8. Ancient Runes
9. Glitch Mode (last due to effect complexity)

---

## Definition of Done

- 9 themes added with complete token coverage
- all critical components validated per theme
- docs updated with previews + use-cases
- no theme breaks existing block layouts
