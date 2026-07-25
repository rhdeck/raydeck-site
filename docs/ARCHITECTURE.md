# Architecture

## Purpose

`raydeck.com` is Ray Deck's public consulting site.

## Runtime shape

- Next.js 16 App Router, React 19, and TypeScript.
- `next.config.ts` sets `output: "export"` and produces a static `out/`
  directory.
- Netlify builds with Node 20 using `npm run build` and publishes `out/`, as
  declared in `netlify.toml`.
- The repository has no application server, API route, database, or
  authentication layer.

## Routes

- `/` assembles the consulting landing-page sections from `src/components/`.
- `/books` embeds Ray's public Airtable reading list.
- `/testimonials` embeds the Senja Wall of Love.
- `src/app/layout.tsx` owns metadata, font loading, and the shared document
  shell.
- `src/components/header.tsx` and `src/components/footer.tsx` provide shared
  navigation.

## Rendering and UI

- Page and section content is maintained directly in TSX.
- Tailwind CSS 4 tokens and the dark amber visual system live in
  `src/app/globals.css`.
- Framer Motion supplies client-side transitions and motion treatments.
- Static assets live under `public/`; `.next/` and `out/` are generated output.

## Contact flow

1. `public/__forms.html` declares the `contact` form for Netlify's build-time
   scanner.
2. `src/components/contact-form.tsx` collects `email` and `message`.
3. The client posts form-urlencoded data to `/` with `form-name=contact`.
4. Netlify captures the submission and handles the current external
   notification.

The detector form and client field names are one contract and must remain
synchronized.

## External dependencies

- Netlify provides hosting, deploy previews, and form capture.
- Airtable provides the public reading-list iframe.
- Senja provides the testimonial iframe and iframe-resizer script.
- `next/font/google` acquires the Inter font during the build.

Current provider behavior is mutable. Verify it from primary documentation or a
live probe before changing an integration.

## Boundaries

- Netlify Functions, transactional email, lead storage, or other server
  behavior would change the current static-only architecture.
- Public copy and visual presentation are product behavior, not incidental
  implementation detail.
- `.firecrawl/` is ignored research input, not canonical content or
  architecture.
