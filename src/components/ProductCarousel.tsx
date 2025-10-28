"use client";
import { useState } from "react";

// Puedes editar este array para agregar/quitar productos
const products = [
  {
    image: "/product1.jpg",
    title: "Mother of Numby",
    subtitle: "Ultra-concentrated anesthetic cream",
    link: "Learn More"
  },
  {
    image: "/product2.jpg",
    title: "Healing Serum",
    subtitle: "Premium skin recovery",
    link: "Learn More"
  },
  {
    image: "/product3.jpg",
    title: "Witch Hazel Tonic",
    subtitle: "Professional cleansing",
    link: "Learn More"
  }
];

export default function ProductCarousel() {
  const [current, setCurrent] = useState(0);
  const total = products.length;

  const prev = () => setCurrent((c) => (c - 1 + total) % total);
  const next = () => setCurrent((c) => (c + 1) % total);

  return (
    <section className="w-full flex flex-col items-center py-16">
      <div className="relative w-full max-w-4xl flex items-center justify-center">
        {/* Left Arrow */}
        <button
          className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/80 rounded-full p-2 shadow hover:bg-white"
          onClick={prev}
          aria-label="Previous"
        >
          <span className="text-2xl">&#8592;</span>
        </button>

        {/* Image */}
        <div className="w-full aspect-[4/5] flex items-center justify-center overflow-hidden">
          <img
            src={products[current].image}
            alt={products[current].title}
            className="object-cover w-full h-full rounded-lg shadow-lg"
          />
        </div>

        {/* Right Arrow */}
        <button
          className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/80 rounded-full p-2 shadow hover:bg-white"
          onClick={next}
          aria-label="Next"
        >
          <span className="text-2xl">&#8594;</span>
        </button>
      </div>

      {/* Text Area */}
      <div className="mt-8 text-center">
        <h3 className="text-2xl font-semibold mb-2">{products[current].title}</h3>
        <p className="text-lg text-gray-600 mb-2">{products[current].subtitle}</p>
        {products[current].link && (
          <a href="#" className="text-blue-500 text-sm underline">{products[current].link}</a>
        )}
      </div>
    </section>
  );
}
