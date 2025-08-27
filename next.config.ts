import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  reactStrictMode: true,
  basePath: '/demo-ext-bodhi-browser',
  assetPrefix: '/demo-ext-bodhi-browser/',
};

export default nextConfig;
