import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
  trailingSlash: true,
  // Relative URLs so CSS/JS work on GitHub Pages (/repo/) and on the GoDaddy domain (/).
  assetPrefix: ".",
}

export default nextConfig
