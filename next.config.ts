import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Allow external image hosts used in demo images
    domains: ["ui.aceternity.com", "images.unsplash.com", "www.morningside.nz"],
  },
};

export default nextConfig;
