# Personal portfolio

A static, responsive portfolio built with React, TypeScript, Vinext and CSS.

## Content

Edit `app/content.ts` for name, role, projects, capability areas and contact URLs. Empty contact URLs display honest non-interactive placeholders. Edit `app/sections.tsx` to add verified achievements, education, timeline and biography. No personal claims or completed projects are supplied as facts.

## Development

`pnpm install`, then `pnpm dev`. Production: `pnpm build` (static output in `dist/client`).

## Design

Static original artwork in `public/images/amber.webp`. The hero opens with one orchestrated load sequence and the artwork drifts slowly against the scroll where the browser supports scroll-driven timelines; nothing loops on its own. Section entrance effects, glass highlights and hover transitions respect reduced-motion preferences, and every animated state has the resting state as its base, so the page reads correctly with motion disabled or JavaScript unavailable. The glass treatment uses layered highlights, static SVG refraction, saturation and backdrop blur with a readable dark fallback. The reference liquid-glass-js library was reviewed; its continuous WebGL/page sampling is intentionally not a dependency of this static first phase.

## Deployment

Hosted on Cloudflare Pages from the GitHub repository. Build command `pnpm build`, output directory `dist/client`, Node version pinned by `.nvmrc`. Every push to `main` publishes; other branches get preview URLs. Asset paths are absolute (`/images/...`), so the site must be served from the root of its domain, not a subpath.

## Before public launch

Replace all placeholder content and configure verified contact links. This first direction is intended for private review.

