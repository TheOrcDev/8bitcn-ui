import { createMDX } from "fumadocs-mdx/next";
import type { NextConfig } from "next";

const withMDX = createMDX();

const nextConfig: NextConfig = {
  cacheComponents: true,
  outputFileTracingIncludes: {
    "/docs/**/*": ["./content/docs/**/*"],
  },
};

export default withMDX(nextConfig);
