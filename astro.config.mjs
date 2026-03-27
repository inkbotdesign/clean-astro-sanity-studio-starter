// @ts-check
import { defineConfig } from "astro/config";
import { loadEnv } from "vite";
import tailwindcss from "@tailwindcss/vite";

import sanity from "@sanity/astro";
import react from "@astrojs/react";
import { requireEnv } from "./src/lib/env";

import vercel from "@astrojs/vercel";

const { PUBLIC_SANITY_PROJECT_ID, PUBLIC_SANITY_DATASET } = loadEnv(
  process.env.NODE_ENV ?? "development",
  process.cwd(),
  "",
);

const sanityProjectId = requireEnv(
  "PUBLIC_SANITY_PROJECT_ID",
  PUBLIC_SANITY_PROJECT_ID || process.env.PUBLIC_SANITY_PROJECT_ID,
  "vsozkoub",
);
const sanityDataset = requireEnv(
  "PUBLIC_SANITY_DATASET",
  PUBLIC_SANITY_DATASET || process.env.PUBLIC_SANITY_DATASET,
  "production",
);

// https://astro.build/config
export default defineConfig({
  output: "server",
  adapter: vercel(),
  integrations: [
    sanity({
      projectId: sanityProjectId,
      dataset: sanityDataset,
      useCdn: false,
      apiVersion: "2025-01-28",
      studioBasePath: "/studio",
    }),
    react(),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
