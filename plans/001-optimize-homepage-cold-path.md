# Plan 001: Make the homepage cold path independent of showcase, sponsor effects, fonts, and GitHub

> **Executor instructions**: Follow this plan in order. Run every verification
> command and confirm its expected result before continuing. Keep the before
> benchmark untouched until the final comparison. If a STOP condition occurs,
> stop and report it rather than improvising. When complete, update Plan 001 in
> `plans/README.md` to `DONE` unless a reviewer says they maintain the index.
>
> **Drift check (run first)**:
> `git diff --stat bd63771..HEAD -- AGENTS.md app/page.tsx app/themes/page.tsx app/layout.tsx app/globals.css app/retro-globals.css components/examples/component-showcase.tsx components/sponsors.tsx components/mythic-sponsor.tsx components/sponsor-claim.tsx components/site-header.tsx package.json pnpm-lock.yaml artifacts/nextjs-16-3-benchmark.md artifacts/nextjs-16-3-performance.png`
>
> If any listed file changed, compare the live code with the Current state
> section before proceeding. A behavioral mismatch is a STOP condition.

## Status

- **Priority**: P1
- **Effort**: L (six small, independently revertible commits)
- **Risk**: MED
- **Depends on**: none
- **Category**: perf
- **Planned at**: commit `bd63771`, 2026-08-05

## Why this matters

The benchmark's 5.12-second “first page response” is a cold local-development
request after deleting `.next`, not production TTFB. Diagnosis reproduced the
same shape: the homepage took 7.2 seconds with 6.1 seconds attributed to
Next.js/Turbopack, 1.03 seconds to application code, and 88 ms to `proxy.ts`.
A trivial page sharing the root layout took 3.3 seconds, the isolated sponsor
section took 4.1 seconds, and the isolated component showcase took 6.4 seconds.

The homepage statically imports a 577-line client showcase with a wide component
graph. Sponsors statically import a Three.js foil renderer and Creem checkout.
The root layout obtains Geist through `next/font/google`, and the shared header
awaits GitHub's API for the star count. This plan removes those four concerns
from the cold homepage response while preserving the rendered design, sponsor
purchase flow, `/themes` showcase, light/dark themes, and accessibility.

## Success definition

On the same machine, dependency tree, and network conditions:

- Median cold `next dev` response for `/` improves by **at least 35%** from the
  baseline captured in Step 1.
- Warm `/` p95 does not regress by more than **15%**.
- All homepage content still appears after scrolling near it; no section is
  removed, reordered, or restyled.
- `/themes` continues to render the full showcase eagerly.
- The sponsor foil effect and all three checkout tiers still work.
- The first server response no longer depends on Google Fonts or GitHub's API.

The relative gate is authoritative across machines. On the reference Apple M4,
the expected cold median is at or below roughly 3.5 seconds, but do not fail a
different machine solely on that absolute number.

## Current state

### Measured route costs

These are one-run diagnostic probes made with outbound network access. They are
evidence for prioritization, not acceptance baselines; Step 1 captures the
executor's own repeatable baseline.

| Cold route | Total | Next.js | Application | Proxy |
| --- | ---: | ---: | ---: | ---: |
| `/robots.txt` | 0.34 s | 0.20 s | 0.02 s | 0.12 s |
| `/about` | 3.3 s | 2.5 s | 0.69 s | 0.11 s |
| isolated sponsors | 4.1 s | 3.1 s | 0.87 s | 0.10 s |
| isolated showcase | 6.4 s | 4.9 s | 1.35 s | 0.15 s |
| `/` | 7.2 s | 6.1 s | 1.03 s | 0.09 s |

The cold homepage produced about 237 MB of `.next` development artifacts; the
simple `/about` page produced about 124 MB.

### Homepage imports

`app/page.tsx:1-6` currently imports both expensive sections synchronously:

```tsx
import Link from "next/link";
import ComponentShowcase from "@/components/examples/component-showcase";
import Sponsors from "@/components/sponsors";
```

The page renders `<ComponentShowcase />` before `<Sponsors />`. Preserve this
order and the surrounding separators and submit-project section.

### Showcase boundary

`components/examples/component-showcase.tsx:1-62` begins with `"use client"`
and statically imports the complete showcase graph. The JSX is one grid with
three logical columns:

- lines 101–310: first column;
- lines 311–438: center feature column with `lg:col-span-2`;
- lines 439–576: interactive column.

The component is used by both `app/page.tsx` and `app/themes/page.tsx`. The
themes page is an intentional eager showcase and must not be converted to the
deferred homepage wrapper.

The component also temporarily suppresses `Element.prototype.scrollIntoView`
while its children mount. Preserve this behavior by extracting it into a named
hook used by both the eager and deferred compositions; do not duplicate the
global patching logic.

### Sponsor boundary

`components/sponsors.tsx:5-6` statically imports:

```tsx
import MythicSponsor from "./mythic-sponsor";
import SponsorClaim from "./sponsor-claim";
```

`components/mythic-sponsor.tsx:1-5` is a Client Component with a namespace
import of `three`; the installed package occupies about 25 MB. It is used only
for the foil treatment on one mythic sponsor. `components/sponsor-claim.tsx`
is also a Client Component and statically imports `@creem_io/nextjs`; it is used
for the mythic, legendary, and regular “Be here” purchase slots.

### Fonts

`app/layout.tsx` imports `Geist` and `Geist_Mono` from `next/font/google`, then
applies `--font-geist-sans` and `--font-geist-mono` to `<body>`. The CSS tokens
in `app/globals.css` and `app/retro-globals.css` already consume those exact
variables and must not change.

Use the official `geist` package rather than manually copied build artifacts.
As of this plan, Vercel documents `geist@1.8.0` and these Next.js imports:

```tsx
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
```

The package is self-hosted and OFL-licensed. Do not copy hashed fonts from
`.next/static/media`.

### GitHub stars

`components/site-header.tsx:64-94` renders an async `StarsCount` Server
Component under Suspense. It uses `"use cache"` but a cold cache still awaits:

```tsx
const data = await fetch(
  "https://api.github.com/repos/TheOrcDev/8bitcn-ui",
  { next: { revalidate: 3600 } }
);
```

The count is decorative metadata inside a link to GitHub. It may load after
hydration, but the link must have a stable accessible name even while the count
is unavailable. A failed or slow GitHub request must not fail the header or
delay the homepage response.

### Framework constraints

Read these local Next.js 16.3 documents before coding:

- `node_modules/next/dist/docs/01-app/02-guides/lazy-loading.md`
- `node_modules/next/dist/docs/01-app/01-getting-started/13-fonts.md`
- `node_modules/next/dist/docs/01-app/01-getting-started/08-caching.md`

Important constraints from those docs:

- A Server Component dynamically importing a Client Component does not
  currently get automatic client code splitting.
- `ssr: false` must be declared inside a Client Component.
- Conditional rendering is required when a dynamic component should load only
  on demand.
- Cached async functions should pair `"use cache"` with `cacheLife(...)`.

### Repository conventions

- pnpm, Next.js App Router, React 19, TypeScript strict mode, Tailwind v4.
- Function components only; never define components inside components.
- Internal imports use `@/*`; external imports precede internal imports.
- Follow the testing structure in
  `components/ui/8bit/blocks/not-found-brick-breaker.test.tsx`: Vitest,
  Testing Library, explicit global mocks, cleanup after each test.
- Use only 8bitcn components in new visual UI. Placeholder copy must use no
  emoji and helper text remains `text-xs`.
- Do not modify registry components, `registry.json`, or block documentation;
  this work changes the website composition, not exported registry behavior.

## Commands you will need

| Purpose | Command | Expected on success |
| --- | --- | --- |
| Install | `pnpm install` | exit 0; lockfile unchanged except intentional `geist` addition |
| Tests | `pnpm test` | exit 0; all tests pass |
| Typecheck | `pnpm exec tsc --noEmit` | exit 0; no errors |
| Lint | `pnpm check` | exit 0 in a clean checkout |
| Build | `pnpm build` | exit 0 on Next.js 16.3 |
| Cold perf | `pnpm perf:cold-home -- --runs 3 --route / --output /private/tmp/8bitcn-cold-after.json` | exit 0; JSON contains three 200 responses plus median and p95 |
| UI | `pnpm dev` | homepage, themes, and sponsors routes load without console errors |

There is a pre-existing untracked `components/hello-button.tsx` in the original
operator worktree that fails `pnpm check`. It is out of scope and must not be
edited, staged, deleted, or used to justify skipping checks. In that specific
mixed worktree, run Ultracite against every in-scope TS/TSX/JSON file and record
the global-check blocker. A clean checkout or CI must still pass `pnpm check`.

## Suggested executor toolkit

- Use the `diagnose` skill if a performance gate misses; change one variable
  and rerun the harness rather than guessing.
- Use the Browser control skill for light/dark and responsive visual checks.
- Use the Shadscan pre-commit protocol before each commit if available; the
  baseline at plan creation was 92/100.

## Scope

### In scope

Existing files that may be modified:

- `AGENTS.md`
- `package.json`
- `pnpm-lock.yaml`
- `app/page.tsx`
- `app/layout.tsx`
- `components/examples/component-showcase.tsx`
- `components/sponsors.tsx`
- `components/site-header.tsx`
- `artifacts/nextjs-16-3-benchmark.md`
- `artifacts/nextjs-16-3-performance.png`
- `plans/README.md` (status only)

New files that may be created:

- `scripts/benchmark-cold-home.mjs`
- `hooks/use-near-viewport.ts`
- `hooks/use-near-viewport.test.tsx`
- `hooks/use-showcase-scroll-guard.ts`
- `components/examples/home-component-showcase.tsx`
- `components/examples/home-component-showcase.test.tsx`
- `components/examples/component-showcase/column-one.tsx`
- `components/examples/component-showcase/feature-column.tsx`
- `components/examples/component-showcase/interactive-column.tsx`
- `components/sponsors/lazy-mythic-sponsor.tsx`
- `components/sponsors/lazy-sponsor-claim.tsx`
- `components/sponsors/lazy-sponsor-integrations.test.tsx`
- `components/github-stars.tsx`
- `components/github-stars.test.tsx`
- `lib/github-stars.ts`
- `lib/github-stars.test.ts`
- `app/api/github-stars/route.ts`
- `app/api/github-stars/route.test.ts`
- `artifacts/homepage-cold-path-benchmark.md`

### Out of scope

- `app/themes/page.tsx`: verify it, but retain its eager import and output.
- `components/mythic-sponsor.tsx`: dynamically isolate it; do not rewrite the
  shader, animation loop, or Three.js implementation.
- `components/sponsor-claim.tsx`: dynamically isolate it; do not alter Creem
  product IDs, metadata, success URL, or checkout semantics.
- `proxy.ts` and Wandry analytics.
- Any exported component under `components/ui/8bit`, `registry.json`, or docs.
- Removing, reordering, or redesigning homepage content.
- Production infrastructure, Vercel settings, or GitHub credentials.
- The unrelated `.pnpm-store/` and `components/hello-button.tsx` paths.

## Git workflow

- Branch: `codex/optimize-homepage-cold-path`
- Make one commit after each successful step. Use repository conventional
  commits in this order:
  1. `test(perf): add cold homepage benchmark harness`
  2. `refactor(home): defer showcase client islands`
  3. `refactor(sponsors): defer heavy client integrations`
  4. `build(fonts): self-host Geist`
  5. `refactor(header): load GitHub stars after hydration`
  6. `docs(perf): clarify cold development benchmark`
- Do not push or open a PR unless the operator explicitly asks.

## Steps

### Step 1: Add a reproducible, cache-safe benchmark harness

Create `scripts/benchmark-cold-home.mjs` using only Node built-ins. Add:

```json
"perf:cold-home": "node scripts/benchmark-cold-home.mjs"
```

to `package.json` scripts.

The harness must:

1. Parse `--runs` (default 3), `--route` (default `/`), `--port` (default
   3210), and optional `--output`.
2. Verify `package.json` has `name: "8bitcn"` before touching `.next`.
3. Move any existing `.next` to a unique `mkdtemp` directory before the run and
   restore it in `finally`, including after SIGINT or a failed request.
4. For each cold sample, ensure the diagnostic `.next` is absent, spawn
   `pnpm exec next dev --hostname 127.0.0.1 --port <port>` with
   `NEXT_TELEMETRY_DISABLED=1`, wait for the TCP port to accept connections,
   then time one HTTP GET.
5. Record response-header time (TTFB) and complete-body time separately.
6. Make five additional warm requests and record median and p95.
7. Capture the matching Next log breakdown when it is present:
   `GET / 200 in ... (next.js: ..., proxy.ts: ..., application-code: ...)`.
8. Terminate the full spawned process tree, wait for exit, and remove only the
   diagnostic cache before the next sample.
9. Print and optionally write JSON containing environment metadata, raw samples,
   medians, p95, status codes, and parsed framework/application/proxy slices.
10. Exit non-zero if any response is not 200, cache restoration fails, the
    server exceeds a 45-second readiness timeout, or a child remains running.

Do not use shell `rm -rf` against unresolved paths. Use explicit validated
absolute paths and Node filesystem APIs. Never remove a pre-existing `.next`;
restore it byte-for-byte by renaming the original directory back.

Run the harness before optimization:

```bash
pnpm perf:cold-home -- --runs 3 --route / --output /private/tmp/8bitcn-cold-before.json
```

Commit the harness only after inspecting the JSON and confirming three 200
responses and a restored original `.next`.

**Verify**:

- `test -d .next` → succeeds if `.next` existed before the run.
- `git status --short` → shows only the harness, package script, plan files,
  lockfile if intentionally changed, and pre-existing untracked paths.
- The baseline JSON contains `runs.length === 3`, finite positive TTFB/total
  values, five warm values per run, and no failed status codes.

**Step gate**: If the harness cannot reliably restore `.next` or produces more
than 20% median spread across five repeated samples, stop and improve the
harness or environment before changing application code.

### Step 2: Defer and split the homepage showcase

First extract the three current JSX columns from
`components/examples/component-showcase.tsx` without changing markup, classes,
props, labels, or order:

- `column-one.tsx`: existing lines 101–310;
- `feature-column.tsx`: existing lines 311–438;
- `interactive-column.tsx`: existing lines 439–576.

Keep each component at module scope with a named export. Give each file only
the imports its JSX uses. Keep `components/examples/component-showcase.tsx` as
the eager grid composer used by `/themes`; it must preserve the current default
export and rendered DOM.

Extract the current mount-time `scrollIntoView` protection into
`hooks/use-showcase-scroll-guard.ts`. Both the eager composer and deferred home
composer must call the same hook; only the hook may patch and restore
`Element.prototype.scrollIntoView`.

Create `hooks/use-near-viewport.ts`. It must:

- expose a ref and `isNearViewport` boolean;
- observe once with a caller-provided `rootMargin`;
- disconnect after the first intersection;
- load immediately when `IntersectionObserver` is unavailable;
- clean up on unmount.

Create `components/examples/home-component-showcase.tsx` as a Client
Component. At module scope, use `next/dynamic` to import each extracted column
with `ssr: false`. Do not dynamically import from `app/page.tsx`; Next 16.3 does
not automatically split a Client Component imported dynamically by a Server
Component. Render the dynamic columns only when `useNearViewport` reports true,
using `rootMargin: "800px 0px"` so loading starts before the user reaches the
showcase. Before that, render a stable `min-h-[800px]` placeholder matching the
existing layout reservation. Mark the container `aria-busy` only while chunks
are loading.

Update only `app/page.tsx` to import `HomeComponentShowcase`. Leave
`app/themes/page.tsx` on the eager `ComponentShowcase` export.

Tests:

- `use-near-viewport.test.tsx`: not near initially, becomes near after the
  observer callback, disconnects once, loads immediately without observer, and
  disconnects on unmount.
- `home-component-showcase.test.tsx`: placeholder exists before intersection;
  all three columns appear after intersection; the load transition happens
  once; the section preserves the current grid classes.
- Use mocked lightweight column modules; do not render the entire showcase in
  every test.

**Verify**:

- `pnpm test -- hooks/use-near-viewport.test.tsx components/examples/home-component-showcase.test.tsx` → all tests pass.
- `pnpm exec tsc --noEmit` → exit 0.
- `pnpm perf:cold-home -- --runs 3 --route / --output /private/tmp/8bitcn-cold-after-showcase.json` → median cold total improves by at least 25% from Step 1.
- Browser: `/` initially shows hero and reserved showcase space, then renders
  the full showcase before it enters the viewport; `/themes` renders the full
  eager showcase; no scroll jump occurs.

**Step gate**: If the cold median improves by less than 20%, stop. Inspect the
route's remaining static imports and dynamic chunk requests with the diagnostic
loop; do not split more files or continue on assumption.

### Step 3: Keep Three.js and Creem out of the initial sponsor graph

Create `components/sponsors/lazy-mythic-sponsor.tsx` as a Client Component.
Declare a module-scope dynamic import of `../mythic-sponsor` with `ssr: false`.
Render it only when its fixed-size wrapper is within 600px of the viewport. The
pre-load fallback must use the sponsor's existing image, dimensions, padding,
and accessible text context so there is no layout shift.

Create `components/sponsors/lazy-sponsor-claim.tsx` similarly, dynamically
importing `../sponsor-claim`. Preserve every existing prop and all three tier
values. Before the checkout code loads, render a non-interactive placeholder
with the same dimensions and visible “Be here” text. Begin loading 600px before
intersection so an approaching keyboard or pointer user receives the real
checkout control before interaction. If IntersectionObserver is unavailable,
load immediately.

Update `components/sponsors.tsx` to import only the lightweight wrappers. Do not
change sponsor arrays, URLs, text, order, images, foil selection, empty-slot
counts, Creem metadata, or success URLs.

Tests in `components/sponsors/lazy-sponsor-integrations.test.tsx` must assert:

- neither dynamic child renders before intersection;
- the static fallback preserves dimensions and sponsor image/label;
- intersection renders the foil component once;
- all three claim tiers and their props reach the loaded checkout component;
- no-observer environments load immediately.

**Verify**:

- `pnpm test -- components/sponsors/lazy-sponsor-integrations.test.tsx` → all pass.
- `pnpm exec tsc --noEmit` → exit 0.
- `rg -n '^import .*mythic-sponsor|^import .*sponsor-claim' components/sponsors.tsx` → matches only the two lazy wrappers, never the heavy modules.
- `pnpm perf:cold-home -- --runs 3 --route / --output /private/tmp/8bitcn-cold-after-sponsors.json` → no cold regression versus Step 2 beyond 10%; record any additional improvement.
- Browser: `/` and `/sponsors` in light/dark mode show the same cards and sizes;
  the foil activates near view; mythic, legendary, and regular checkout flows
  open with their original product mapping.

**Step gate**: If Creem cannot initialize correctly after a conditional dynamic
mount, stop and leave `SponsorClaim` eager. Keep the successful Three.js split
as a separate commit and report the checkout limitation.

### Step 4: Replace compile-time Google font downloads with official self-hosted Geist

Run:

```bash
pnpm add geist@^1.8.0
```

Update `app/layout.tsx` to import `GeistSans` from `geist/font/sans` and
`GeistMono` from `geist/font/mono`. Apply their exported variables to `<body>`
while preserving the existing CSS variable names expected by
`app/globals.css` and `app/retro-globals.css`. Do not edit either CSS file unless
the official package exposes different variable names; if so, use a local
alias in `layout.tsx` or stop rather than globally renaming design tokens.

Remove `next/font/google` from the layout. Do not add manually downloaded font
files or copy generated `.next` assets.

**Verify**:

- `rg -n 'next/font/google|fonts.googleapis.com' app components` → no matches.
- `pnpm exec tsc --noEmit` and `pnpm build` → exit 0.
- Start from a cold `.next`, request `/`, and inspect server output → no Geist
  download or fallback warnings.
- Browser screenshots at 1200×800 and 390×844 in light/dark mode → headings,
  body copy, controls, and code retain their prior font family and layout.
- Perf harness → no regression versus Step 3; report the delta separately.

**STOP** if the official package changes font metrics enough to cause visible
wrapping, clipping, or a layout shift that cannot be corrected without broad
CSS changes. Do not compensate with page-specific font sizes.

### Step 5: Move GitHub stars off the server-rendered header path

Create `lib/github-stars.ts` with a cached server function:

- add `"use cache"` inside the async function;
- call `cacheLife("hours")`;
- fetch only `https://api.github.com/repos/TheOrcDev/8bitcn-ui`;
- send an explicit GitHub JSON `Accept` header;
- use an abort timeout no longer than 1500 ms;
- reject non-2xx responses;
- parse JSON as `unknown` and accept only a non-negative safe integer
  `stargazers_count`;
- throw descriptive `Error` objects; never log response bodies or secrets.

Create `app/api/github-stars/route.ts`. It calls the cached helper and returns
`{ "stars": number | null }`. On upstream failure or timeout, return
`{ "stars": null }` with HTTP 200 so the decorative count cannot fail the
header. Add public CDN cache headers compatible with a one-hour freshness and
stale-while-revalidate window. Do not add GitHub credentials in this plan.

Create `components/github-stars.tsx` as a Client Component. After hydration it
fetches `/api/github-stars`, validates the response, and renders the existing
formatted count. While loading or on error, reserve the same `w-12` space and
render visually muted text such as `—`; do not render `0`, because that is
false data. Abort the client request on unmount.

Update `components/site-header.tsx`:

- remove the React Suspense import and async `StarsCount` export;
- render `<GithubStars />` synchronously;
- give the external GitHub link a stable `aria-label` that does not depend on
  the count;
- preserve the icon, button styling, width, and target/rel attributes.

Update the stale `StarsCount` example in `AGENTS.md` to point to the cached
helper in `lib/github-stars.ts`.

Tests:

- `lib/github-stars.test.ts`: success, non-2xx, malformed JSON, negative/non-
  integer counts, timeout, and no leaked upstream payload in thrown messages.
- `app/api/github-stars/route.test.ts`: success and null fallback are HTTP 200
  with the documented JSON and cache headers.
- `components/github-stars.test.tsx`: reserved loading state, formatted values
  below and above 1000, null/error fallback, malformed endpoint response, and
  abort on unmount.

**Verify**:

- `pnpm test -- lib/github-stars.test.ts app/api/github-stars/route.test.ts components/github-stars.test.tsx` → all pass.
- `pnpm exec tsc --noEmit` → exit 0.
- A curl-only cold benchmark of `/` makes no `/api/github-stars` request and
  cannot be delayed by GitHub.
- Browser hydration requests `/api/github-stars` once, keeps the header stable,
  and preserves the accessible GitHub link when the endpoint is forced to fail.
- Perf harness → no regression versus Step 4; report application-code delta.

**STOP** if Cache Components prerenders this route in a way that reintroduces
the GitHub request into the homepage render. Prove request ordering from logs;
do not assume the Suspense boundary is sufficient.

### Step 6: Run final gates and correct the benchmark language

Run the final benchmark under the same conditions as Step 1:

```bash
pnpm perf:cold-home -- --runs 3 --route / --output /private/tmp/8bitcn-cold-after.json
```

If sample spread exceeds 20%, run five samples and use the median. Create
`artifacts/homepage-cold-path-benchmark.md` containing:

- machine, Node, pnpm, Next, and commit identifiers;
- before/after raw samples;
- TTFB, total, warm median/p95, and Next/application/proxy slices;
- relative changes;
- the exact command and cache-preservation method;
- a statement that the metric is local cold development compilation, not
  production TTFB.

In `artifacts/nextjs-16-3-benchmark.md`, rename “Development first page
response” to “Cold development first-route compile” without changing any
historical values or the Next 16.2/16.3 comparison method.

Regenerate `artifacts/nextjs-16-3-performance.png` at exactly 1200×675 using
the existing light-mode 8bitcn Card composition. Change only the metric label
from `FIRST PAGE RESPONSE` to `COLD DEV FIRST COMPILE`; preserve the value,
black borders, green result text, four-card layout, and all bottom borders.
Render real `components/ui/8bit/card` components in a temporary local route,
capture the image, visually inspect it, and delete the route. If browser capture
is unavailable, update the Markdown and stop rather than hand-editing pixels.

Run all final gates:

```bash
pnpm test
pnpm exec tsc --noEmit
pnpm check
pnpm build
pnpm dlx @shadscan/cli@next --json
```

Perform browser QA on `/`, `/themes`, and `/sponsors` at desktop/mobile in both
light and dark themes. Check browser console errors, scroll position, keyboard
navigation, loading fallbacks, sponsor checkout, and GitHub-star failure.

**Verify**: all Done criteria below hold before the documentation commit.

## Test plan

### Automated tests

- Near-viewport hook lifecycle and no-observer fallback.
- Deferred showcase loading and one-time activation.
- Eager `/themes` composer still contains all three columns.
- Lazy foil and checkout integrations preserve props and load once.
- GitHub data validation, upstream failures, timeout, route fallback/cache
  headers, client formatting, and unmount abort.
- Existing full suite remains green.

Use targeted tests after each step and `pnpm test` at the end. Avoid giant JSX
snapshots; assert roles, labels, stable grid classes, preserved dimensions, and
prop flow.

### Performance tests

- Capture `/private/tmp/8bitcn-cold-before.json` once before application edits.
- Capture a new named JSON after Steps 2–5.
- Compare medians, not the fastest sample.
- Keep the same route, run count, port strategy, machine, dependency tree, and
  network mode.
- Reject any result with non-200 responses or an unrestored `.next` cache.

### Visual and interaction tests

- `/`: hero is immediate; showcase and sponsors appear before scroll reaches
  them; no scroll jump or content reorder.
- `/themes`: eager showcase remains unchanged.
- `/sponsors`: foil and all checkout tiers work.
- Header: GitHub link remains labeled and count failure reserves width.
- Light/dark at 1200×800 and 390×844; no horizontal overflow or layout shift.

## Done criteria

All items are required:

- [ ] `pnpm test` exits 0 with all new and existing tests passing.
- [ ] `pnpm exec tsc --noEmit` exits 0.
- [ ] `pnpm check` exits 0 in a clean checkout; any mixed-worktree blocker is
      explicitly documented and is not modified.
- [ ] `pnpm build` exits 0 on Next.js 16.3.
- [ ] Final Shadscan score is numeric and at least the 92/100 baseline.
- [ ] Three valid before and after cold samples exist with the original `.next`
      restored after both runs.
- [ ] Cold `/` total median improves by at least 35%.
- [ ] Warm `/` p95 regresses by no more than 15%.
- [ ] `app/page.tsx` no longer statically imports the monolithic showcase.
- [ ] `components/sponsors.tsx` no longer statically imports
      `mythic-sponsor.tsx` or `sponsor-claim.tsx`.
- [ ] `rg -n 'next/font/google|fonts.googleapis.com' app components` returns no
      matches.
- [ ] A curl-only homepage request makes no GitHub API request.
- [ ] Browser QA passes for `/`, `/themes`, and `/sponsors` on both viewports
      and themes.
- [ ] The social PNG is exactly 1200×675 and says `COLD DEV FIRST COMPILE`.
- [ ] Historical benchmark values remain unchanged.
- [ ] `git diff --name-only` contains only files listed under In scope plus
      `plans/README.md` status.

## STOP conditions

Stop and report instead of improvising if:

- The drift check shows behavioral changes to any relevant file after
  `bd63771` that this plan does not account for.
- The baseline harness cannot preserve `.next` or produce reliable samples.
- Step 2 improves the cold median by less than 20%; the diagnosed import graph
  is no longer the active bottleneck.
- Deferred loading changes homepage content, order, scroll position, or
  accessibility.
- Creem checkout fails after conditional mounting; keep it eager and report.
- Official Geist changes line wrapping or metrics enough to require broad CSS
  compensation.
- The GitHub endpoint requires credentials, leaks rate-limit details, or is
  still awaited during homepage server rendering.
- Any verification fails twice after a reasonable in-scope correction.
- Meeting the performance target appears to require changing exported 8bitcn
  components, registry behavior, production infrastructure, or out-of-scope
  files.

## Maintenance notes

- Any new homepage Client Component should enter through the deferred showcase
  or another explicit lazy boundary; a new static import can restore the cold
  compile regression.
- Keep the performance harness cache-safe. Review every change involving path
  deletion or process termination carefully.
- If sponsor content moves above the fold, reassess the 600px intersection
  margin and keyboard readiness rather than removing lazy boundaries blindly.
- If GitHub stars becomes business-critical data, move it to a scheduled durable
  store; do not put a credentialed live API call back in the root layout.
- The social graphic documents a historical Next-version comparison. Never
  replace its numbers with the homepage-optimization results; those belong in
  `artifacts/homepage-cold-path-benchmark.md`.
