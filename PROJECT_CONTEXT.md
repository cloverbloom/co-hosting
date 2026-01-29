# Project Context — co-hosting

Use this page as the single spot to capture durable context for the project. Keep it current so new contributors can ramp quickly.

- **Last updated:** 2025-02-10

## Product & Users
- **One-liner:** Public marketing site for Cloverbloom co-hosting (full-service Airbnb property management).
- **Primary users:** Property owners who are considering or partnering with Cloverbloom.
- **Problems it solves:** Communicates services, differentiators, and how to get started.
- **Top user flows:** Visit landing page → learn about services → contact or inquiry.
- **Non-goals / out of scope:** _mark if we exclude payments, messaging, or guest-facing features_

## Design & Flow
- **Reference layout:** Inspired by acquisition.com/about-alex structure; use original copy and assets.
- **Overall style:** Minimal, high-contrast, editorial; confident and premium; generous whitespace.
- **Components source:** Stage 1 uses custom components only (no third-party UI libs). Stage 2 swaps to 21st.dev (shadcn-based) components.
- **Staged approach:** Stage 1 builds a 1:1 layout using simple, custom elements (basic buttons, light hover). Stage 2 modernizes the same layout using 21st.dev components.
- **Sections:**
  1) Announcement bar (thin, full-width)
  2) Global navbar (logo left, nav center/right, secondary links far right, mobile menu)
  3) Hero (split layout: large all-caps H1 + short subhead + single CTA; editorial image)
  4) “Meet [Brand]” (text + portrait image, pull-quote line)
  5) About (intro paragraph + 3 value props)
  6) CTA grid (4 cards, 2x2 desktop)
  7) Footer (mini nav, long disclaimer, utility links)
- **Typography:** Strong weight contrast; H1 very large uppercase with tight tracking; body max line length ~65ch.
- **Color system:** Monochrome base with one restrained accent for links/CTAs; AA contrast.
- **Motion:** Subtle transitions only (150–250ms); light hover states; optional gentle reveal.
- **Accessibility:** Semantic landmarks; keyboard focus for all interactive elements.
- **Layout rules:** Max width 1120–1200px with 20–24px side padding; hero is two-column on desktop (image ~40–50% width) and stacked on mobile.
- **Type scale:** H1 44–64px desktop / 34–40px mobile, uppercase, tight tracking; H2 24–32px, uppercase; body 16–18px with muted copy.
- **Buttons:** Primary = black background/white text (44–48px height), secondary = transparent with border; no gradients.
- **Cards:** 1px border, subtle radius, 20–28px padding, minimal/no shadow; use badge/pill for tags.
- **Tokens:** Use CSS variables for colors/spacing/typography; single accent `#2154D6` only for links, focus rings, small highlights (no large fills).
- **Typography:** System font stack only (no external font fetching).
- **Images:** Use local placeholder SVGs under `public/placeholders/*` (original assets only).
- **Routing:** Use `app/(marketing)/about/page.tsx` as the composed landing page with a marketing route group layout.
- **Component locations:** `src/components/marketing/*` for Stage 1; data from `src/lib/site-config.ts`.

## Stack & Deployment
- **Frontend:** Next.js 16.0.7 (App Router), Tailwind v4, Geist fonts.
- **Runtime/Hosting:** Cloudflare Workers via OpenNext; Cloudflare handles domain + static asset delivery.
- **Assets:** Served from `.open-next/assets` (bound as `ASSETS` in `wrangler.jsonc`).
- **Environments:** _list (dev/preview/prod) and domains_; target domain `cloverbloom.co`.
- **Tooling:** TypeScript, ESLint; `opennextjs-cloudflare` for build/deploy.
- **UI components:** Use 21st.dev (shadcn-based) components. Keep shared primitives under `src/components/ui/*` and feature-specific wrappers under `src/components/<feature>/*`; import examples directly from 21st.dev to stay consistent with their patterns.

## Integrations & Data
- **APIs/services:** _external systems, auth, payments, etc._
- **State & storage:** _where data lives (KV, R2, D1, external DB), schema highlights_
- **Secrets/config:** _env vars per env, how injected_

## Quality & Operations
- **Performance/SLOs:** _targets for latency, availability, bundle size, etc._
- **Monitoring/alerts:** _how to observe (logs, tracing, dashboards)_
- **Security/Privacy:** _requirements, data handling rules_

## Risks, Constraints, Decisions
- **Risks/assumptions:** _list current risks and dependencies_
- **Known constraints:** _limits from platform, budget, timeline_
- **Decision log:** capture key choices with date/context.

| Date | Decision | Context / Tradeoffs |
| --- | --- | --- |
| 2025-02-10 | Use Supabase for user accounts (auth) | Need authenticated dashboard; Supabase fits quickly with Next.js. |
| 2025-02-10 | Prefer a single service for auth + file storage (likely Supabase) | Simplifies ops and mental load; fallback is Supabase auth + Cloudflare R2 if storage needs outgrow Supabase. |

## Open Questions
- _Add anything we need to clarify or research._
