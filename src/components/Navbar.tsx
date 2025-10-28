'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useState, Suspense } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import LanguageSwitcher from './LanguageSwitcher';

export default function Navbar() {
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const locale = useLocale();
  const t = useTranslations('Navbar');

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <Link href={`/${locale}`} className="navbar-logo">
          <Image 
            src="/logope.png" 
            alt="Monumby Logo" 
            width={50} 
            height={50}
            className="navbar-logo-image"
            priority
          />
        </Link>

        {/* Hamburger Button (Mobile Only) */}
        <button 
          className="hamburger-btn"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`hamburger-line ${isMobileMenuOpen ? 'open' : ''}`}></span>
          <span className={`hamburger-line ${isMobileMenuOpen ? 'open' : ''}`}></span>
          <span className={`hamburger-line ${isMobileMenuOpen ? 'open' : ''}`}></span>
        </button>

        {/* Navigation Links */}
        <ul className={`navbar-menu ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
          <li className="navbar-item">
            <Link href={`/${locale}`} className="navbar-link" onClick={() => setIsMobileMenuOpen(false)}>
              {t('home')}
            </Link>
          </li>
          
          {/* Productos Dropdown */}
          <li className="navbar-item navbar-dropdown">
            <button
              className="navbar-link navbar-dropdown-toggle"
              onClick={() => setIsProductsOpen(!isProductsOpen)}
              onBlur={() => setTimeout(() => setIsProductsOpen(false), 200)}
            >
              {t('products')}
              <span className={`dropdown-arrow ${isProductsOpen ? 'open' : ''}`}>▼</span>
            </button>
            {isProductsOpen && (
              <ul className="navbar-dropdown-menu">
                <li>
                  <Link href={`/${locale}/productos/tintas`} className="navbar-dropdown-link" onClick={() => setIsMobileMenuOpen(false)}>
                    {t('inks')}
                  </Link>
                </li>
                <li>
                  <Link href={`/${locale}/productos/monumby-products`} className="navbar-dropdown-link" onClick={() => setIsMobileMenuOpen(false)}>
                    {t('monumbyProducts')}
                  </Link>
                </li>
                <li>
                  <Link href={`/${locale}/productos/accesorios`} className="navbar-dropdown-link" onClick={() => setIsMobileMenuOpen(false)}>
                    {t('accessories')}
                  </Link>
                </li>
              </ul>
            )}
          </li>

          <li className="navbar-item">
            <Link href={`/${locale}/nosotros`} className="navbar-link" onClick={() => setIsMobileMenuOpen(false)}>
              {t('about')}
            </Link>
          </li>

          <li className="navbar-item">
            <Link href={`/${locale}/contacto`} className="navbar-link" onClick={() => setIsMobileMenuOpen(false)}>
              {t('contact')}
            </Link>
          </li>

          {/* Language Switcher */}
          <li className="navbar-item lang-switcher">
            <Suspense fallback={<div className="text-white text-sm">ES | EN</div>}>
              <LanguageSwitcher small />
            </Suspense>
          </li>
        </ul>
      </div>
    </nav>
  );
}