import {notFound} from 'next/navigation';
import {getRequestConfig} from 'next-intl/server';
 
// Can be imported from a shared config
const locales = ['en', 'es'];
 
export default getRequestConfig(async ({locale}) => {
  // Validate that the incoming `locale` parameter is valid.
  // Calling `notFound()` here can cause errors in the root layout during
  // development because `notFound()` is not allowed in layouts. Instead,
  // fall back to the default locale.
  const resolvedLocale = locales.includes(locale as string) ? (locale as string) : 'en';

  return {
    locale: resolvedLocale,
    messages: (await import(`../messages/${resolvedLocale}.json`)).default
  };
});