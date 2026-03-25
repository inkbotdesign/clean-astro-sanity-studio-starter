// ./sanity.config.ts
import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";

const sanityProjectId = import.meta.env.PUBLIC_SANITY_PROJECT_ID;
const sanityDataset = import.meta.env.PUBLIC_SANITY_DATASET;

export default defineConfig({
  projectId: sanityProjectId,
  dataset: sanityDataset,
  plugins: [structureTool()],
  schema: {
    types: [],
  },
});
