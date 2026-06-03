import type { NextConfig } from "next";
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./src/i18n/request.ts');

const nextConfig: NextConfig = {
  output: 'export',
  // Change "yashpatel521" to your repository name
  basePath: '/yashpatel521',
  assetPrefix: '/yashpatel521',
  images: {
    unoptimized: true,
  },
};

export default withNextIntl(nextConfig);
