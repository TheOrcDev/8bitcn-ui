import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Ensure these native deps are kept as externals and shipped in the serverless bundle
  serverExternalPackages: ["@sparticuz/chromium", "puppeteer-core"],
};

export default nextConfig;
