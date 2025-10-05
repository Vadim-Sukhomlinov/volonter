import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  // Для App Router важно указать distDir
  distDir: 'out',
  // Убедитесь, что basePath отключен для GitHub Pages
  basePath: '',
  assetPrefix: '',
}

export default nextConfig;
// module.exports = nextConfig