<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Ray Deck Site

`raydeck.com` is Ray Deck's public consulting site. The project is in the
graveyard phase: work lives in GitHub issues and pull requests, technical
canon lives in this repository, and strategic state lives in the Notion
Project Overview linked from `docs/OVERVIEW.md`.

repo-type: mixed
project-types: frontend
canary: required: verify the affected experience on a Netlify deploy preview before merging to production

## Knowledge homes

- Architecture: `docs/ARCHITECTURE.md`
- Decisions: `docs/DECISIONS.md`
- Canary and promotion contract: `docs/canary.md`
- Strategic/current state: `docs/OVERVIEW.md`
- Work: GitHub issues and pull requests

## Working in this repository

- Use npm and keep `package-lock.json` synchronized. Install with `npm ci`.
- Before changing Next.js behavior, read the relevant installed guide under
  `node_modules/next/dist/docs/`.
- Verify every change with `npm run lint` and `npm run build`.
- Exercise affected routes on the Netlify deploy preview at desktop and mobile
  widths before merge. Production is not the first test surface.
- Treat public copy, pricing, claims, testimonials, and imagery as
  outward-facing. Start from Ray-supplied language and edit it; do not invent
  Ray's voice, commercial terms, or factual claims.
- Preserve the static-export boundary unless an issue explicitly authorizes a
  runtime change.
- Keep the field names and form name in `public/__forms.html` synchronized with
  `src/components/contact-form.tsx`.
- A real form submission is an external side effect. Test on an authorized
  preview with disposable data; do not submit the production form as a smoke
  test.
- Verify current third-party behavior before changing Netlify, Airtable, Senja,
  email, DNS, or deployment assumptions.
- Never hand-edit `.next/` or `out/`. Treat `.firecrawl/` as disposable research
  input, not canon.
- Do not commit credentials, `.env` files, Netlify local state, or provider
  identifiers.
- Preserve prior generated visual variants; add descriptive new files instead
  of overwriting or deleting them.
