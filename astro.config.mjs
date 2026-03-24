// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

import sanity from "@sanity/astro";
import react from "@astrojs/react";

import vercel from "@astrojs/vercel";

// https://astro.build/config
export default defineConfig({
  output: "server",
  adapter: vercel(),
  integrations: [
    sanity({
      projectId: "q2wicvrz",
      dataset: "production",
      useCdn: false,
      apiVersion: "2025-01-28",
      studioBasePath: "/studio",
    }),
    react(),
  ],
  vite: {
    // @ts-expect-error Astro validates against its bundled Vite types, but
    // @tailwindcss/vite returns plugin types from the workspace Vite package.
    plugins: [tailwindcss()],
  },
});
