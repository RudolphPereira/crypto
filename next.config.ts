import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https", // or 'http'
        hostname: "coin-images.coingecko.com", // Replace with your image domain
      },
    ],
  },
};

export default nextConfig;
