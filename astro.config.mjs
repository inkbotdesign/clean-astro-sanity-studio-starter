// @ts-check
import { defineConfig } from "astro/config";
import { loadEnv } from "vite";
import tailwindcss from "@tailwindcss/vite";

import sanity from "@sanity/astro";
import react from "@astrojs/react";

import vercel from "@astrojs/vercel";

// https://astro.build/config
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");

  return {
    vite: {
      plugins: [tailwindcss()],
    },

    integrations: [
      sanity({
        projectId: env.PUBLIC_SANITY_PROJECT_ID,
        dataset: env.PUBLIC_SANITY_DATASET,
        useCdn: false,
        apiVersion: "2025-01-28",
      }),
      react(),
    ],
    adapter: vercel(),
  };
});
