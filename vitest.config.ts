import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

import { defineConfig } from "vitest/config";

const projectRoot = dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  resolve: {
    alias: [
      {
        find: "@/components/ui/8bit/styles/retro.css",
        replacement: resolve(projectRoot, "test/empty-css.ts"),
      },
      {
        find: "@",
        replacement: resolve(projectRoot),
      },
    ],
  },
  test: {
    css: false,
    environment: "jsdom",
  },
});
