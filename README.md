# Clean Astro Sanity Studio Starter

Astro starter template with an embedded Sanity Studio, Tailwind CSS v4, and Vercel-ready server output.

This workspace is Bun-first. Use `bun install` and `bun run ...` for local development.

## Includes

- Astro 6 with `output: "server"`
- `@astrojs/vercel` adapter
- `@sanity/astro` with embedded Studio at `/studio`
- React support for the embedded Studio
- Tailwind CSS v4 via `@tailwindcss/vite`
- ESLint and Prettier for Astro projects
- Starter Sanity schema with `post`

## Quick Start

1. Install dependencies:

```sh
bun install
```

2. Create your local env file:

```sh
cp .env.example .env
```

3. Set these values in `.env`:

```sh
PUBLIC_SANITY_PROJECT_ID="your-project-id"
PUBLIC_SANITY_DATASET="production"
```

4. Start the app:

```sh
bun run dev
```

5. Open:

- `http://localhost:4321`
- `http://localhost:4321/studio`

6. When Sanity prompts you, add `http://localhost:4321` as a CORS origin with credentials enabled so the embedded Studio can authenticate in the browser.

## Starter Shape

- `astro.config.mjs` configures Astro, Vercel, Tailwind, and the embedded Sanity Studio route.
- `sanity.config.ts` configures the Studio workspace and uses the same Sanity env variable names as the Astro integration.
- `sanity/schemaTypes/` contains optional starter document types you can wire into the Studio.
- `src/pages/index.astro` is a minimal landing page that explains the starter setup.

## Sanity Notes

- The embedded Studio is served by your Astro app. It is not a separate hosted Studio.
- The current Studio config is intentionally minimal. Add document types when you are ready to model content.
- The Sanity project ID and dataset use one shared env contract by name: `PUBLIC_SANITY_PROJECT_ID` and `PUBLIC_SANITY_DATASET`.
- The access API is intentionally different by runtime: `astro.config.mjs` uses `loadEnv(...)` for config-time server/runtime code, while `sanity.config.ts` uses `import.meta.env` to stay aligned with the embedded Studio's Vite runtime.

## Scripts

```sh
bun run dev
bun run build
bun run preview
bun run lint
bun run prettier:check
bun run prettier:format
```

## Deploying

This starter is configured for Vercel server output. Before deploying, add your production domain as an authenticated CORS origin in Sanity if you plan to keep the Studio embedded in the deployed app.
