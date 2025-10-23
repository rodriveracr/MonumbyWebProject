export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white font-sans">
      <header className="flex justify-between items-center px-6 py-4 border-b border-gray-700">
        <h1 className="text-2xl font-bold">Monumby</h1>
        <nav className="space-x-6">
          <a href="#" className="hover:text-gray-400 transition">Inicio</a>
          <a href="#" className="hover:text-gray-400 transition">Productos</a>
          <a href="#" className="hover:text-gray-400 transition">Contacto</a>
        </nav>
      </header>

      <section className="flex flex-col items-center justify-center text-center px-4 py-20">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">Tattoo Care Essentials</h2>
        <p className="text-lg md:text-xl text-gray-300 max-w-xl">
          Productos profesionales para cada etapa del tatuaje. Cremas, tintas y cuidado posterior de alta calidad.
        </p>
      </section>
    </main>
  );
}
