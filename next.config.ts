import type { NextConfig } from "next";

const repoBasePath = "/yashpatel521";
const basePath =
  process.env.BASE_PATH ??
  (process.env.NODE_ENV === "production" ? repoBasePath : "");

const nextConfig: NextConfig = {
  output: "export",
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
  ...(basePath
    ? { basePath, assetPrefix: basePath }
    : {}),
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
