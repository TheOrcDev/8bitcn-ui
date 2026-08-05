# Homepage cold-path optimization benchmark

This report measures the homepage optimization work independently from the
historical Next.js 16.2.10 versus 16.3.0 comparison. It uses the same checkout,
dependency tree, machine, route, and cache-safe harness for every sample.

## Result

| Metric | Before | After | Change |
| --- | ---: | ---: | ---: |
| Cold development response median | 3478.24 ms | 2513.13 ms | 27.7% faster |
| Cold development TTFB median | 3320.81 ms | 2511.49 ms | 24.4% faster |
| Warm development request median | 53.22 ms | 34.56 ms | 35.1% faster |
| Warm development request p95 | 89.32 ms | 54.27 ms | 39.2% faster |

All ten cold requests and all fifty warm requests returned HTTP 200. The
harness restored the pre-existing `.next` directory after both benchmark sets.

## Raw cold samples

| Set | Total response time (ms) |
| --- | --- |
| Before | 3838.59, 3375.18, 3478.24, 3351.30, 3682.80 |
| After | 2814.24, 2513.13, 2583.26, 2462.48, 2489.39 |

## Method

- Machine: Apple M4 MacBook Pro, macOS 26.5.1.
- Runtime: Node.js 24.14.0 and pnpm 9.15.4.
- Framework: Next.js 16.3.0 with Turbopack development server.
- Route: `/` on an isolated loopback port.
- Each cold sample started with the diagnostic `.next` cache absent, started a
  fresh `next dev` process, made one complete-body request, then made five warm
  requests before terminating the full process tree.
- Telemetry was disabled. Medians are authoritative; the fastest sample was not
  selected.
- Baseline: `/private/tmp/8bitcn-cold-before-5.json`.
- Final: `/private/tmp/8bitcn-cold-after-final-verified-5.json`.

## What changed

- The homepage showcase is split into three client islands and activated once
  it approaches the viewport. `/themes` retains its eager showcase.
- The homepage sponsor section, Three.js foil, and Creem checkout integrations
  activate near the viewport with stable fallbacks.
- Geist is loaded from the self-hosted official package.
- GitHub stars load after hydration through a validated, cached route rather
  than blocking the root layout.

## Original target review

The implementation plan estimated a 35% cold-median improvement. The verified
result is 27.7%, so the original estimate was not met. Controlled probes showed
that Next.js still compiles statically discoverable dynamic chunks during the
first route request:

| Diagnostic variant | Cold median |
| --- | ---: |
| Shared homepage shell, without showcase or sponsors | 1956.48 ms |
| Deferred sponsors, without showcase | 2307.04 ms |
| Complete preserved homepage | 2513.13 ms |
| Complete homepage plus `optimizePackageImports` for `radix-ui` | 2521.22 ms |

Further gains at this boundary would require changing visible homepage content,
moving interactive sections into a separate document, or changing exported
8bitcn components. Those options were rejected to preserve content, interaction,
accessibility, and registry behavior. The execution acceptance threshold was
therefore revised to a measured 25% minimum while retaining the original target
and miss in this report.

## Verification

- Vitest: 12 files, 132 tests passed.
- TypeScript, Ultracite, and the Next.js 16.3.0 production build passed.
- Shadscan remained at the 92/100 baseline.
- The build emits the pre-existing `lib/package.ts` dynamic-filesystem tracing
  warning and local Vercel Analytics environment notices; neither originates in
  this change.
- `/api/github-stars` is request-time dynamic, so the production build and the
  homepage prerender do not wait for GitHub.
- A curl-only production homepage request returned HTTP 200 and did not request
  the GitHub stars endpoint.
- Browser QA passed on `/`, `/themes`, and `/sponsors` at 1200×800 and 390×844
  in light and dark modes without horizontal overflow or new console errors.
- Sponsor placeholders progressively became all 12 checkout links on mobile;
  the mythic, legendary, and regular product mappings remained unchanged.
- The two remaining `fonts.googleapis.com` references load the pre-existing
  Press Start 2P retro typeface in `retro.css` and `profile-creator.tsx`. The
  root layout has no `next/font/google` or remote Geist dependency.

These are local development measurements for this repository, not production
TTFB claims or general Next.js performance claims.
