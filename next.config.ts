import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./src/i18n/request.ts");

const repoBasePath = "/yashpatel521";
const basePath =
  process.env.BASE_PATH ??
  (process.env.NODE_ENV === "production" ? repoBasePath : "");

const nextConfig: NextConfig = {
  output: "export",
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
  ...(basePath ? { basePath, assetPrefix: basePath } : {}),
  images: {
    unoptimized: true,
  },
};

export default withNextIntl(nextConfig);
