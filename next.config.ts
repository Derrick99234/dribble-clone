import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        hostname: "miro.medium.com",
        pathname: "/v2/**",
        protocol: "https",
      },
      {
        hostname: "cdn.dribbble.com",
        pathname: "/**",
        protocol: "https",
      },
      {
        hostname: "encrypted-tbn0.gstatic.com",
        pathname: "/**",
        protocol: "https",
      }
    ]
  },
  experimental: {
    serverComponentsExternalPackages: ['swiper'],
  },
};

export default nextConfig;
