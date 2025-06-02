import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: 'export',
  basePath: '/portfilio-website',
  assetPrefix: '/portfilio-website/',
  reactStrictMode: true,
  images: {
    unoptimized: true
  }
};

export default nextConfig;
