import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // Note: cacheComponents (formerly experimental.ppr) is disabled due to compatibility
  // issues with dynamic pages that require authentication and database access.
  // This can be re-enabled once the pages are refactored to work with Suspense boundaries.
  // cacheComponents: true,
  images: {
    remotePatterns: [
      {
        hostname: 'avatar.vercel.sh',
      },
    ],
  },
};

export default nextConfig;
