# Ray Deck Site

The source for [raydeck.com](https://raydeck.com), Ray Deck's public consulting
site.

## Local development

This project uses Next.js 16, React 19, TypeScript, and npm.

```bash
npm ci
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

Before changing Next.js behavior, read the relevant installed guide under
`node_modules/next/dist/docs/`; this version includes behavior that may differ
from older Next.js conventions.

## Verification

```bash
npm run lint
npm run build
```

The build creates a static export in `out/`. Netlify builds with Node 20 and
publishes that directory. Pull requests receive Netlify deploy previews; the
preview for the current head must be exercised before merge.

## Project canon

- Agent instructions: [`AGENTS.md`](AGENTS.md)
- Architecture: [`docs/ARCHITECTURE.md`](docs/ARCHITECTURE.md)
- Decisions: [`docs/DECISIONS.md`](docs/DECISIONS.md)
- Canary contract: [`docs/canary.md`](docs/canary.md)
- Strategic state: [`docs/OVERVIEW.md`](docs/OVERVIEW.md)
- Work queue: [GitHub issues](https://github.com/rhdeck/raydeck-site/issues)
