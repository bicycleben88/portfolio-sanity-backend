import { defineCliConfig } from "sanity/cli";

export default defineCliConfig({
  api: {
    projectId: "j0etx6fw",
    dataset: "production",
  },
  vite: (config) => {
    return {
      ...config,
      define: {
        ...config.define,
        "process.env": {},
      },
    };
  },
});
