import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { markdownSchema } from "sanity-plugin-markdown";
import { schemaTypes } from "./schemas";
import { visionTool } from "@sanity/vision";

export default defineConfig({
  name: "default",
  title: "Benny Boi's Backend",

  projectId: "j0etx6fw",
  dataset: "production",

  plugins: [deskTool(), visionTool(), markdownSchema()],

  schema: {
    types: schemaTypes,
  },
});
