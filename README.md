# Anmol Lamba — Portfolio

A minimal, responsive portfolio built with Next.js, React, and Tailwind CSS. A compact engineering profile with a personal introduction, expandable company rows, visible results, and a small toolkit. Monochrome typography and a restrained green accent keep the focus on the content.

## Run locally

```bash
npm ci
npm run dev
```

Open the local URL printed by Next.js.

## Validate

```bash
npx tsc --noEmit
npm run build
```

If Turbopack is restricted by the execution environment, use `npm run build -- --webpack` for the production build.

## Content and design

- Update personal details, social links, career entries, and toolkit in `src/config/portfolio.ts`.
- Homepage sections are in `src/components/sections/`.
- The sticky header keeps the email action and theme control visible in `src/components/layout/navbar.tsx`.
- Colors, layout, responsive rules, and reduced-motion support are in `src/app/globals.css`.
- `/llms.txt` derives its public career summary from the same portfolio config.

The design uses locally hosted Manrope with system monospace captions. The font and its OFL license are in `src/app/fonts/`; no font requests are made to a third party at runtime. Company rows use native disclosure elements and remain keyboard accessible. Results stay visible while notes are collapsed. Dark mode follows the visitor’s system preference on a first visit and can be changed in the header.

Visual research: [P.CV](https://p.cv/) for its compact structure and [Bobby Giangeruso](https://www.bobby.so/) for its personal introduction and chronological work history. The implementation and layout are original to this portfolio.

## Icons and sharing previews

- `src/app/icon.svg` and `favicon.ico` provide the AL browser icon.
- `src/app/apple-icon.png` and `public/icons/` provide matching mobile icons.
- `src/app/opengraph-image.png` and `twitter-image.png` are matching 1200×630 cards rendered with the local Manrope font. Their accompanying `.alt.txt` files supply accessible descriptions.
- Next.js discovers the icons and sharing images through its file conventions. The web manifest is served from `public/site.webmanifest`.

Regenerate the committed assets with `python3 scripts/generate_brand_assets.py` (requires Pillow). Website builds use the generated files directly.

For a custom deployment domain, set `NEXT_PUBLIC_SITE_URL` to the public origin, including `https://`, so sharing-image URLs use that domain. Without it, Vercel deployment URLs are detected automatically, with localhost used for local development.
