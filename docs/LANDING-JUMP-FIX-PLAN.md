# Landing Refresh Jump Fix Plan (Small Resolution)

Issue: On landing page refresh (especially small screens), viewport jumps to middle content (troll card in showcase) instead of staying at top.

Goal: prevent initial auto-scroll while preserving normal component behavior after mount.

---

## Suspected Root Cause

The showcase mounts interactive components that trigger auto-focus/scroll behavior after hydration:
- `scrollIntoView` from command/menu/calendar-style internals
- delayed focus calls after first animation frame
- browser scroll restoration race on reload

Current mitigation in `components/examples/component-showcase.tsx` blocks `scrollIntoView` for one RAF, which may be too short.

---

## Phase J1 — Reproduce + Trace

### Tasks
1. Reproduce on narrow viewport (<1024px) with hard refresh.
2. Add temporary debug logs in dev:
   - first non-zero `window.scrollY` after mount
   - timestamps around showcase mount/unmount
3. Identify whether jump occurs:
   - before hydration
   - during mount
   - after first delayed effect

### Acceptance
- We can reliably trigger the issue and identify the first scroll source window.

---

## Phase J2 — Harden Initial Scroll Lock

### Tasks
1. In `component-showcase.tsx`, replace one-frame unlock with timed unlock:
   - block `Element.prototype.scrollIntoView` for ~600ms after mount
2. During lock window, if URL has no hash:
   - force top once (`window.scrollTo(0, 0)`)
3. Restore original `scrollIntoView` in cleanup safely.

### Notes
- Keep lock scoped to this component.
- Do not leave global prototype patched beyond lock window.

### Acceptance
- Refresh no longer jumps to troll card on small resolutions.

---

## Phase J3 — Remove Delayed Auto-Focus Triggers

### Tasks
1. Audit showcase children for mount-time autofocus/focus behavior.
2. Gate focus logic behind explicit user action where possible.
3. If a third-party component auto-focuses by default, disable that option in demo usage.

### Acceptance
- No component in showcase requests focus on first mount unless user interacts.

---

## Phase J4 — Scroll Restoration Policy

### Tasks
1. Add route-level protection on landing:
   - if no hash is present, ensure top on initial load.
2. Keep hash behavior intact (`#section` should still scroll intentionally).
3. Avoid global `history.scrollRestoration = "manual"` unless absolutely needed.

### Acceptance
- Default refresh starts at top.
- Hash deep-links still work.

---

## Phase J5 — QA Matrix

### Test cases
- Mobile width hard refresh
- Mobile width soft refresh
- Desktop refresh
- Navigate from other route to landing
- Landing with hash target

### Acceptance criteria
- No jump to middle cards on refresh.
- No broken keyboard navigation after initial lock period.
- No console errors.

---

## Implementation Pointers

Primary file:
- `components/examples/component-showcase.tsx`

Likely supporting checks:
- `components/examples/command.tsx`
- `components/ui/8bit/command.tsx`
- other showcase child blocks containing inputs/menus/date pickers

---

## Rollout Strategy

1. Ship J2 quick fix first (timed lock + top reset) on branch.
2. Validate with QA matrix.
3. Follow with J3 cleanup (remove root causes).
4. Keep J2 if harmless; otherwise reduce lock duration once root causes are fixed.
