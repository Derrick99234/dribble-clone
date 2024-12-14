import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        hostname: "miro.medium.com",
        pathname: "/v2/**",
        protocol: "https",
      }
    ]
  }
};

export default nextConfig;
