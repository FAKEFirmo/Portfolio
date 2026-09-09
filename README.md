# Personal portfolio

A static, responsive portfolio built with React, TypeScript, Vinext and CSS.

## Content

Edit `app/content.ts` for name, role, projects, capability areas and contact URLs. Empty contact URLs display honest non-interactive placeholders. Edit `app/sections.tsx` to add verified achievements, education, timeline and biography. No personal claims or completed projects are supplied as facts.

## Development

`pnpm install`, then `pnpm dev`. Production: `pnpm build` (static output in `dist/client`).

## Design

Static original artwork in `public/images/amber.webp`. Background never animates. Section entrance effects and hover transitions respect reduced-motion preferences. The glass treatment uses layered highlights, static SVG refraction, saturation and backdrop blur with a readable dark fallback. The reference liquid-glass-js library was reviewed; its continuous WebGL/page sampling is intentionally not a dependency of this static first phase.

## Before public launch

Replace all placeholder content and configure verified contact links. This first direction is intended for private review.

