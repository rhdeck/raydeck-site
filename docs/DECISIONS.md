# Decisions

Newest decisions appear first.

## 2026-07-25 — Externalize the project for graveyard operation

The repo uses GitHub issues and pull requests for work, repository docs for
technical canon, and the Notion Project Overview for human-facing strategic
state. This keeps the project cold-resumable without relying on chat history or
local agent memory.

## 2026-07-25 — Require a Netlify deploy preview before production merge

Public UI and copy need a felt test on the running artifact. Netlify deploy
previews provide the isolated observation surface; `main` is reserved for work
that has already passed that preview check. The full contract lives in
`docs/canary.md`.

## 2026-04-10 — Register the contact form with static HTML

Netlify did not reliably detect the React-rendered form during its build scan.
`public/__forms.html` therefore declares the form, while
`src/components/contact-form.tsx` owns the visitor-facing experience and posts
the matching URL-encoded fields.

## 2026-04-10 — Deploy a static Next.js export on Netlify

The consulting site is a presentation surface and does not require an
application server. `next.config.ts` exports static output and `netlify.toml`
publishes it from `out/`.

## 2026-04-10 — Keep third-party collections embedded

Airtable remains the source for the long reading list and Senja remains the
source for the complete testimonial wall. The site presents those collections
without duplicating their data into this repository.
