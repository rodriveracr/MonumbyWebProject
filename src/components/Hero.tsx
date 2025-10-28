'use client';
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';

// Static imports for images with spaces in filenames
import product1Image from '../../public/Firefly 20251026164004.png';
import product2Image from '../../public/Generated Image October 24, 2025 - 6_10PM (1).png';
import product3Image from '../../public/Generated Image October 26, 2025 - 2_58PM.png';
import product4Image from '../../public/Generated Image October 26, 2025 - 3_02PM.png';
import product5Image from '../../public/Generated Image October 26, 2025 - 2_26PM.png';
import product6Image from '../../public/Generated Image October 26, 2025 - 2_50PM (2).png';
import product7Image from '../../public/Generated Image October 26, 2025 - 2_24PM 1.png';
import product8Image from '../../public/Generated Image October 26, 2025 - 2_50PM (1).png';
import product9Image from '../../public/Generated Image October 26, 2025 - 2_50PM (3).png';
import product10Image from '../../public/_V8A8175-60 1.png';
import product11Image from '../../public/_V8A8062-26.jpg';
import product12Image from '../../public/_V8A8155-47.jpg';
import product13Image from '../../public/_V8A8043-1.jpg';
import product14Image from '../../public/Screenshot 2025-10-27 165250.png';

export default function Hero({ locale }: { locale: string }) {
  const t = useTranslations('Hero');
  const [currentSlide, setCurrentSlide] = useState(0);
  // If the video isn't available in production (e.g., excluded from repo), show an image fallback
  const [videoOk, setVideoOk] = useState(true);

  const products = [
    {
      image: product1Image,
      name: t('product6.name'),
      description: t('product6.description')
    },
    {
      image: product2Image,
      name: t('product7.name'),
      description: t('product7.description')
    },
    {
      image: product3Image,
      name: t('product3.name'),
      description: t('product3.description')
    },
    {
      image: product4Image,
      name: t('product3.name'),
      description: t('product3.description')
    },
    {
      image: product2Image,
      name: t('product3.name'),
      description: t('product3.description')
    },
    {
      image: product2Image,
      name: t('product3.name'),
      description: t('product3.description')
    },
    {
      image: product5Image,
      name: t('product3.name'),
      description: t('product3.description')
    },
    {
      image: product6Image,
      name: t('product3.name'),
      description: t('product3.description')
    },
    {
      image: product7Image,
      name: t('product3.name'),
      description: t('product3.description')
    },
    {
      image: product2Image,
      name: t('product3.name'),
      description: t('product3.description')
    },
    {
      image: product8Image,
      name: t('product3.name'),
      description: t('product3.description')
    },
    {
      image: product9Image,
      name: t('product3.name'),
      description: t('product3.description')
    },
    {
      image: product10Image,
      name: t('product5.name'),
      description: t('product5.description')
    },
    {
      image: product11Image,
      name: t('product3.name'),
      description: t('product3.description')
    },
    {
      image: product12Image,
      name: t('product3.name'),
      description: t('product3.description')
    },
    {
      image: product13Image,
      name: t('product3.name'),
      description: t('product3.description')
    },
    {
      image: product14Image,
      name: t('product4.name'),
      description: t('product4.description')
    },
  ];

  // Auto-advance carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % products.length);
    }, 10000); // más lento: 10 segundos por imagen
    return () => clearInterval(timer);
  }, [products.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % products.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + products.length) % products.length);
  };

  // responsive visible count for the product strip (3 desktop, 2 tablet, 1 mobile)
  const [visible, setVisible] = useState(3);
  useEffect(() => {
    const calc = () => {
      const w = typeof window !== 'undefined' ? window.innerWidth : 1920;
      if (w < 768) setVisible(1);
      else if (w < 1024) setVisible(2);
      else setVisible(3);
    };
    calc();
    window.addEventListener('resize', calc);
    return () => window.removeEventListener('resize', calc);
  }, []);

  // Eliminado: tira de 3 columnas; ahora usamos viewport tipo video

  return (
    <>
      {/* Section 1: Hero Premium - Woman with Product */}
      <section className="hero-mother-section">
        <div className="hero-premium-showcase">
          <div className="hero-woman-container">
            <Image
              src="/frontmother-removebg-preview.png"
              alt="Monumby Premium Experience"
              width={1000}
              height={1000}
              className="hero-woman-image"
              priority
            />
          </div>
          <div className="hero-text-content">
            <h1 className="hero-main-title">{t('title')}</h1>
            <p className="hero-main-description">{t('slogan')}</p>
          </div>
        </div>
      </section>

      {/* Section 2: Video Section - Between image and carousel */}
      <section className="hero-video-section">
        <div className="hero-video-content">
          {/* Video on the left */}
          <div className="video-wrapper aspect-video">
            {videoOk ? (
              <video
                className="hero-video w-full h-full object-cover"
                controls
                loop
                playsInline
                preload="metadata"
                poster="/_V8A8062-26.jpg"
                onError={() => setVideoOk(false)}
              >
                <source src="/NOPAIN COMERCIAL.mp4" type="video/mp4" />
                {t('videoNotSupported')}
              </video>
            ) : (
              <Image
                src={product11Image}
                alt="Monumby video placeholder"
                className="hero-video w-full h-full object-cover"
                priority
              />
            )}
          </div>

          {/* Text on the right */}
          <div className="video-description">
            <h2 className="video-title">{t('videoTitle')}</h2>
            <p className="video-text">
              {t('videoParagraph1')}
            </p>
            <p className="video-text">
              {t('videoParagraph2')}
            </p>
          </div>
        </div>
      </section>

      {/* Section 3: Product strip carousel (style like screenshot) */}
      <section className="hero-video-section">
        <div className="hero-video-content">
          {/* Viewport con tamaño como el video */}
          <div className="video-wrapper relative aspect-[9/16]">
            {/* Imagen actual */}
            <Image
              src={products[currentSlide].image}
              alt={products[currentSlide].name}
              className="hero-video w-full h-full object-cover"
              priority
            />
          </div>

          {/* Texto centrado verticalmente a la mitad de la altura de la foto */}
          <div className="flex-1 max-w-[600px] self-center text-left md:text-left">
            <div>
              <h3 className="text-2xl md:text-3xl font-anton tracking-wide">
                {products[currentSlide].name}
              </h3>
              <p className="text-sm text-cyan-300/80">
                {products[currentSlide].description}
              </p>
              {/* Dots de navegación debajo del texto */}
              <div className="mt-4 flex items-center gap-2">
                {products.map((_, idx) => (
                  <button
                    key={idx}
                    aria-label={`Ir a imagen ${idx + 1}`}
                    onClick={() => setCurrentSlide(idx)}
                    className={
                      idx === currentSlide
                        ? 'w-2.5 h-2.5 rounded-full bg-white shadow-[0_0_6px_rgba(0,0,0,0.6)]'
                        : 'w-2 h-2 rounded-full bg-white/40 hover:bg-white/70 transition-colors'
                    }
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}