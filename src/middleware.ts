import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
  // A list of all locales that are supported
  locales: ['en', 'es'],
  defaultLocale: 'en',
  // Force locale prefix for all routes
  localePrefix: 'always'
});
 
export const config = {
  matcher: ['/', '/(en|es)/:path*']
};
