// @ts-nocheck
import { browser } from "fumadocs-mdx/runtime/browser";

import type * as Config from "../source.config";

const create = browser<
  typeof Config,
  import("fumadocs-mdx/runtime/types").InternalTypeConfig & {
    DocData: {};
  }
>();
const browserCollections = {
  docs: create.doc("docs", {
    "index.mdx": () => import("../content/docs/index.mdx?collection=docs"),
    "components/components.mdx": () =>
      import("../content/docs/components/components.mdx?collection=docs"),
    "components/test.mdx": () =>
      import("../content/docs/components/test.mdx?collection=docs"),
  }),
};
export default browserCollections;
