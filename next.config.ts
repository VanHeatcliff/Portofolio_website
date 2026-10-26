import type { NextConfig } from "next";

// Fully static export: `next build` writes plain HTML/CSS/JS to `out/`.
// No API routes, server actions, or runtime server features are used.
const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
  trailingSlash: false,
};

export default nextConfig;
