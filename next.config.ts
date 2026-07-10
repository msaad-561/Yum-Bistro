import type {NextConfig} from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: false,
  },
  images: {
    // Enable modern image formats for automatic conversion
    formats: ['image/avif', 'image/webp'],
    // Optimised breakpoints matching the product-card grid (2-col → 3-col → 4-col)
    deviceSizes: [640, 768, 1024, 1280, 1536],
    imageSizes: [128, 256, 384],
    // Declare allowed quality values (required in Next.js 16+)
    qualities: [75, 85, 90, 100],
    // Aggressive browser-side caching: 1 year for optimized images
    minimumCacheTTL: 31536000,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'picsum.photos',
        port: '',
        pathname: '/**',
      },
    ],
  },
  // Removed 'motion' from transpilePackages - it is not used in this project
  // and was adding unnecessary transpilation overhead on every build.
  async headers() {
    return [
      {
        // Cache all static public assets aggressively (images, fonts, etc.)
        source: '/:path((?!api).*)',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
        ],
      },
      {
        // Long-term caching for all images in /images/*
        source: '/images/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        // Cache background PNG for a year
        source: '/site-bg.png',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },
  output: 'standalone',
  webpack: (config, {dev}) => {
    // HMR is disabled in AI Studio via DISABLE_HMR env var.
    if (dev && process.env.DISABLE_HMR === 'true') {
      config.watchOptions = {
        ignored: /.*/,
      };
    }
    return config;
  },
};

export default nextConfig;
