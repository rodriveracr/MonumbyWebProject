import type { NextRequest } from 'next/server';
import createMiddleware from 'next-intl/middleware';

// Create the handler using next-intl's middleware factory
const handler = createMiddleware({
  // A list of all locales that are supported
  locales: ['en', 'es'],
  defaultLocale: 'en',
  // Force locale prefix for all routes
  localePrefix: 'always'
});

// Export a named `proxy` function as required by Next.js 16
export function proxy(request: NextRequest) {
  return handler(request);
}

// Configure matchers to control where the proxy runs
export const config = {
  matcher: ['/', '/(en|es)/:path*']
};
