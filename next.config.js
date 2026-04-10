const withNextIntl = require('next-intl/plugin')('./src/app/i18n.ts');

/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: false,
  images: {
    // Allow Next.js to optimize images normally.
    // For images with spaces/special chars in filenames, use static imports in components.
    remotePatterns: [],
  },
  staticPageGenerationTimeout: 300,
  experimental: {
    serverComponentsExternalPackages: [],
  },
  // Video streaming support
  headers: async () => {
    return [
      {
        source: '/(.*).(mp4|webm|ogg)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
          {
            key: 'Content-Type',
            value: 'video/mp4',
          },
        ],
      },
    ];
  },
};

module.exports = withNextIntl(nextConfig);