import type { NextConfig } from "next";

import { createMDX } from "fumadocs-mdx/next";

const withMDX = createMDX();

const nextConfig: NextConfig = {
  cacheComponents: true,
};

export default withMDX(nextConfig);
