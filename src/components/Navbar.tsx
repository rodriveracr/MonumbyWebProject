/* src/components/Navbar.tsx */
'use client';
import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false); {/* Control de menú móvil. */}
  const [showOverview, setShowOverview] = useState(false); {/* Control del dropdown Overview. */}
  const navItems = ['Home', 'Services', 'About', 'Contact']; {/* Items principales de navegación. */}

  return (
    <header className="w-full bg-white shadow-md">
      <div className="flex items-center justify-between h-16 max-w-7xl mx-auto px-4">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-black" aria-label="Home">
          NØ.
        </Link>
        
        {/* Navegación desktop */}
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <Link
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-sm font-medium text-gray-700 hover:text-black transition-colors"
              aria-label={item}
            >
              {item}
            </Link>
          ))}
          {/* Dropdown Overview */}
          <div className="relative">
            <button
              type="button"
              onClick={() => setShowOverview(!showOverview)}
              className="text-sm font-medium text-gray-700 hover:text-black transition-colors flex items-center gap-1"
              aria-label="Toggle product overview"
            >
              Overview
              <svg className={`w-4 h-4 transition-transform ${showOverview ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {showOverview && (
              <div className="absolute top-full left-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-10">
                <div className="py-2">
                  <Link href="/product1" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" aria-label="Product 1">
                    Product 1
                  </Link>
                  <Link href="/product2" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" aria-label="Product 2">
                    Product 2
                  </Link>
                  <Link href="/product3" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" aria-label="Product 3">
                    Product 3
                  </Link>
                </div>
              </div>
            )}
          </div>
        </nav>

        {/* Botón hamburguesa móvil */}
        <div className="flex items-center">
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-600 hover:text-gray-900"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      {/* Menú móvil */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <nav className="flex flex-col space-y-4 px-4 py-4">
            {navItems.map((item) => (
              <Link
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-sm text-gray-700 hover:text-black"
                onClick={() => setIsOpen(false)}
                aria-label={item}
              >
                {item}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
} {/* Navbar con dropdown para productos y selector de idioma. */}