import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  transpilePackages: ['lucide-react'],
  images: {
    domains: ['tickets.legend.com.kh'], // Add your external hostname here
  },
};

export default nextConfig;
