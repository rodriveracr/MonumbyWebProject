/* Minimal root layout to satisfy Next.js App Router requirement
   Pages that live outside the `[locale]` segment need a root layout
   (or should be moved under `src/app/[locale]`). This file provides
   a simple wrapper and lets the existing localized layout handle
   translations for localized routes.
*/
import React from 'react';
import { NextIntlClientProvider } from 'next-intl';

export const metadata = {
  title: 'Monumby'
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const locale = 'en';
  const messages = (await import('../messages/en.json')).default;

  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider locale={locale} messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
