import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  cacheComponents: true,
  partialPrefetching: true,
  // cacheComponents: false,
  // partialPrefetching: false,
};

export default nextConfig;
