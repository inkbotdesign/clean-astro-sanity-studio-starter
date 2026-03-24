# Personal Website

This repository currently serves as the working project for following the Astro + Sanity blog tutorial. Over time, it will evolve into my personal website.

## Included

- Astro
- Tailwind CSS v4 via `@tailwindcss/vite`
- Prettier with `prettier-plugin-astro`
- ESLint with `eslint-plugin-astro`
- Astro accessibility lint rules
- A minimal shared `BaseLayout`
- Bun-based scripts and lockfile

## Current Structure

The project is still intentionally lightweight. It currently includes:

- a minimal Astro page in `src/pages/`
- a reusable layout in `src/layouts/BaseLayout.astro`
- global Tailwind styles in `src/styles/global.css`
- formatting and linting config for Astro files

It does not yet include:

- component libraries
- CMS integration
- authentication
- testing frameworks
- deployment configuration

## Direction

The immediate goal is to complete the tutorial cleanly and understand the Astro setup before adding Sanity and blog functionality.

After that, this project will gradually become my personal website.

## Scripts

Install dependencies:

```sh
bun install
```

Start the local development server:

```sh
bun run dev
```

Build the site:

```sh
bun run build
```

Preview the production build locally:

```sh
bun run preview
```

Run ESLint:

```sh
bun run lint
```

Check formatting:

```sh
bun run prettier:check
```

Format files:

```sh
bun run prettier:format
```

## Conventions

- Use Conventional Commit syntax for commit messages.
- Keep shared document markup in `BaseLayout`.
- Keep formatter and linting configuration close to Astro defaults unless there is a clear project need.
- Use Bun for dependency management and scripts in this project.

Examples:

- `feat: add blog post card component`
- `fix: correct layout metadata handling`
- `docs: update personal website README`
