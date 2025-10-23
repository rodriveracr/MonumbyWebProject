const withNextIntl = require('next-intl/plugin')('./src/app/i18n.ts');

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Ensure trailingSlash is a boolean to satisfy Next.js config validation
  trailingSlash: false
};

module.exports = withNextIntl(nextConfig);