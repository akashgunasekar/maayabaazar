import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Production-grade performance & security optimizations
  reactStrictMode: true,
  poweredByHeader: false,
  compress: true,

  // Image optimization with modern AVIF and WebP delivery & 1-year immutable cache
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 31536000, // 1 year cache for optimized images
  },

  // HTTP Response Headers for High-Traffic Cloudflare CDN Edge Caching & Security
  async headers() {
    return [
      {
        // Immutable cache for static images
        source: "/images/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        // Global headers for all public routes: Security & Cloudflare Edge CDN Caching
        source: "/:path*",
        headers: [
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "X-Frame-Options",
            value: "SAMEORIGIN",
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=(), payment=()",
          },
          // Direct Cloudflare Edge CDN instructions for pre-rendered marketing pages
          {
            key: "CDN-Cache-Control",
            value: "public, max-age=86400, stale-while-revalidate=604800",
          },
          {
            key: "Cloudflare-CDN-Cache-Control",
            value: "public, max-age=86400, stale-while-revalidate=604800",
          },
        ],
      },
    ];
  },
};

export default nextConfig;

