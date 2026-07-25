# Canary and promotion contract

## Stance

Canary required. Every pull request that changes the rendered site, form
behavior, build, or deployment configuration must receive a successful Netlify
deploy preview before merge.

The Notion Project Overview is the authoritative portfolio-level canary
declaration. The `canary:` line in `AGENTS.md` mirrors it for cold agents.

## Observation surface

Netlify deploy previews are the isolated channel for this static site. Before
merge:

1. Confirm the preview status belongs to the pull request's current head SHA.
2. Open the preview rather than relying only on the build status.
3. Exercise each affected route at desktop and mobile widths.
4. For form work, use disposable data and an authorized preview. Do not submit
   the production form merely to prove the UI works.
5. Record the tested preview URL and result in the pull request.

If the preview integration is absent, stale, or points at another SHA, the
change is not eligible to merge.

## Production

`https://raydeck.com` is the production surface. After merge, verify the
affected public route and record any regression as a GitHub issue. A production
check confirms promotion; it does not replace the pre-merge preview.
