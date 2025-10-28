const withNextIntl = require('next-intl/plugin')('./src/app/i18n.ts');

/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: false,
  images: {
    // Allow Next.js to optimize images normally.
    // For images with spaces/special chars in filenames, use static imports in components.
    remotePatterns: [],
  }
};

module.exports = withNextIntl(nextConfig);