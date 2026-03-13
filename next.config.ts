import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  // Change "yashpatel521" to your repository name
  basePath: '/yashpatel521',
  assetPrefix: '/yashpatel521',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
