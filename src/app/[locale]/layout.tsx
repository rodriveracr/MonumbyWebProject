import type { Metadata } from 'next';
import { NextIntlClientProvider } from 'next-intl';
import Navbar from '../../components/Navbar';
import MobileBackground from '../../components/MobileBackground';
import DesktopBackground from '../../components/DesktopBackground';
import Footer from '../../components/Footer';
import '../../styles/globals.css';

export const metadata: Metadata = {
  title: 'Monumby - Productos para Tatuajes',
  description: 'Descubre tintas vibrantes, cremas premium y accesorios para elevar tu arte en la piel.',
};

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  // Await the params promise
  const resolvedParams = await params;

  let messages;
  try {
    messages = (await import(`../../messages/${resolvedParams.locale}.json`)).default;
  } catch (error) {
    messages = (await import(`../../messages/en.json`)).default;
  }

  return (
    <html lang={resolvedParams.locale} className="bg-dark text-light">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Anton&family=Open+Sans:wght@300;400&display=swap" rel="stylesheet" />
      </head>
      <body className="min-h-screen">
        <NextIntlClientProvider locale={resolvedParams.locale} messages={messages}>
          {/* Background con crossfade - Mobile y Desktop separados */}
          <MobileBackground
            images={[
            "/Mobile444.png",
            "/MobileM.png",
            "/MobileX.png"
            ]}
            intervalMs={6000}
            transitionMs={2000}
            blur={3}
            brightness={0.4}
          />
          <DesktopBackground
            images={[
            "/Desktop10.png",
            "/DesktopD.png",
            "/GeneratedX.png"
            ]}
            intervalMs={6000}
            transitionMs={2000}
            blur={3}
            brightness={0.4}
          />
          <Navbar />
          <main>{children}</main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}