/* src/app/[locale]/layout.tsx */
import type { Metadata } from 'next';
import { NextIntlClientProvider } from 'next-intl';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import '../../styles/globals.css';

export const metadata: Metadata = {
  title: 'Monumby',
  description: 'Experiencias premium y artísticas digitales.',
}; {/* Metadatos para SEO. */}

export async function generateStaticParams() {
  return [
    { locale: 'en' },
    { locale: 'es' },
  ];
} {/* Parámetros estáticos para multilenguaje. */}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const { locale } = params; // locale is a direct property, not a Promise
  let messages;
  try {
    messages = (await import(`../../messages/${locale}.json`)).default;
  } catch (error) {
    messages = (await import(`../../messages/en.json`)).default;
  }

  return (
    <html lang={locale} className="bg-numbyBlack text-white">
      <body className="min-h-screen">
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
} {/* Estructura HTML con fondo negro premium y i18n. */}