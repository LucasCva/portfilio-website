import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: "export",
  basePath: '/portfolio',
  assetPrefix: '/portfolio/',
  reactStrictMode: true,
  images: {
    unoptimized: true
  }
};

export default nextConfig;
