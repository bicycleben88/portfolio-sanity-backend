import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "./schemas";

const isBrowser = typeof window !== "undefined";

export default defineConfig({
  name: "default",
  title: "Benny Boi's Backend",
  projectId: "j0etx6fw",
  dataset: "production",

  plugins: [
    structureTool(),
    visionTool(),
    ...(isBrowser
      ? [
          (() => {
            try {
              const stealthRequire = new Function("m", "return require(m)");
              return stealthRequire("sanity-plugin-markdown").markdownSchema();
            } catch (e) {
              console.warn("Markdown UI skipped");
              return null;
            }
          })(),
        ].filter(Boolean)
      : []),
  ],

  schema: {
    types: [
      ...schemaTypes,
      {
        name: "markdown",
        type: "string",
        title: "Markdown Content",
      },
    ],
  },
});
