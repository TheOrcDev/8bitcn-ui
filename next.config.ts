import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    // Ensure these native deps and assets are available in serverless bundle
    serverComponentsExternalPackages: ["@sparticuz/chromium", "puppeteer-core"],
  },
};

export default nextConfig;
