import Hero from '../../components/Hero';

// Definimos Home como una función asíncrona para compatibilidad con generateStaticParams
export default async function Home({ params }: { params: Promise<{ locale: string }> }) {
  // Await params to unwrap the Promise
  const { locale } = await params;
  
  // El layout en src/app/[locale]/layout.tsx ya incluye Navbar y <main>.
  // Solo devolvemos el contenido del Hero.
  return (
    <>
      <Hero locale={locale} />
    </>
  );
}

export async function generateStaticParams() {
  return [
    { locale: 'en' },
    { locale: 'es' },
  ];
}