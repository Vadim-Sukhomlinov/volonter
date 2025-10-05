import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   /* config options here */
// };

// export default nextConfig;


const nextConfig = {
  output: 'export',
  trailingSlash: true,
  basePath: '/volenter',
  images: {
    unoptimized: true
  }
}

module.exports = nextConfig