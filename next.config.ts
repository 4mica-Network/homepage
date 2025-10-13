import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "readdy.ai",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "www.eigencloud.xyz",
        pathname: "/**",
      },
    ],
  },
  typescript: {
    // ignoreBuildErrors: true,
  },
};

export default nextConfig;
