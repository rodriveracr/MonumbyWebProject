'use client';
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';

// Static imports for images with spaces in filenames
import product1Image from '../../public/GeneratedX.png';
import product2Image from '../../public/DesktopD4.png';
import product3Image from '../../public/MobileM2.png';
import product4Image from '../../public/MobileM.png';
import product5Image from '../../public/Desktop10.png';
import product6Image from '../../public/Screenshot 2025-10-27 165250.png';
import product7Image from '../../public/Generated Image October 26, 2025 - 2_24PM 1.png';
import product8Image from '../../public/Firefly 20251026164004.png';
import product9Image from '../../public/Generated Image October 26, 2025 - 4_10PM.png';
import product10Image from '../../public/Generated Image October 26, 2025 - 2_25PM.png';
import product11Image from '../../public/Generated Image October 26, 2025 - 2_24PM.png';
import product12Image from '../../public/Generated Image October 25, 2025 - 6_21PM.png';
import product13Image from '../../public/Generated Image October 26, 2025 - 2_50PM (2).png';
import product14Image from '../../public/Generated Image October 26, 2025 - 2_50PM (4).png';

export default function Hero({ locale }: { locale: string }) {
  const t = useTranslations('Hero');
  const [currentSlide, setCurrentSlide] = useState(0);
  const [activeVideoModal, setActiveVideoModal] = useState<number | null>(null);
  const modalVideoRef = useRef<HTMLVideoElement>(null);

  const videoCarousel = [
    {
      id: 1,
      title: t('videoTitle'),
      description: t('videoParagraph1'),
      description2: t('videoParagraph2'),
      videoSrc: "/MotherofNumby.mp4",
      poster: "/_V8A8062-26.jpg"
    },
    {
      id: 2,
      title: t('videoTitle2'),
      description: t('videoParagraph2_1'),
      description2: t('videoParagraph2_2'),
      videoSrc: "/anesthesiaform.mp4",
      poster: "/_V8A8155-47.jpg"
    },
    {
      id: 3,
      title: t('videoTitle3'),
      description: t('videoParagraph3_1'),
      description2: t('videoParagraph3_2'),
      videoSrc: "/monumbyvideo.mp4",
      poster: "/_V8A8043-1.jpg"
    }
  ];

  const products = [
    {
      image: product1Image,
      name: t('product1.name'),
      description: t('carouselText1')
    },
    {
      image: product2Image,
      name: t('product6.name'),
      description: t('carouselText2')
    },
    {
      image: product3Image,
      name: t('product2.name'),
      description: t('carouselText3')
    },
    {
      image: product4Image,
      name: t('product4.name'),
      description: t('carouselText4')
    },
    {
      image: product5Image,
      name: t('product2.name'),
      description: t('carouselText5')
    },
    {
      image: product6Image,
      name: t('product7.name'),
      description: t('carouselText6')
    },
    {
      image: product7Image,
      name: t('product2.name'),
      description: t('carouselText7')
    },
    {
      image: product8Image,
      name: t('product2.name'),
      description: t('carouselText8')
    },
    {
      image: product9Image,
      name: t('product3.name'),
      description: t('carouselText9')
    },
    {
      image: product2Image,
      name: t('product6.name'),
      description: t('carouselText10')
    },
    {
      image: product8Image,
      name: t('product3.name'),
      description: t('carouselText11')
    },
    {
      image: product9Image,
      name: t('product3.name'),
      description: t('carouselText12')
    },
    {
      image: product10Image,
      name: t('product5.name'),
      description: t('carouselText13')
    },
    {
      image: product11Image,
      name: t('product1.name'),
      description: t('carouselText14')
    },
    {
      image: product12Image,
      name: t('product2.name'),
      description: t('carouselText15')
    },
    {
      image: product13Image,
      name: t('product3.name'),
      description: t('carouselText16')
    },
    {
      image: product14Image,
      name: t('product4.name'),
      description: t('product4.description')
    },
  ];

  // Auto-advance video carousel (only when not playing a video)
  useEffect(() => {
    if (activeVideoModal !== null) return;
    
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % videoCarousel.length);
    }, 10000);
    return () => clearInterval(timer);
  }, [activeVideoModal, videoCarousel.length]);

  // Auto-advance product carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentProductSlide((prev) => (prev + 1) % products.length);
    }, 10000);
    return () => clearInterval(timer);
  }, [products.length]);

  const [currentProductSlide, setCurrentProductSlide] = useState(0);

  const nextVideoSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % videoCarousel.length);
  };

  const prevVideoSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + videoCarousel.length) % videoCarousel.length);
  };

  const nextProductSlide = () => {
    setCurrentProductSlide((prev) => (prev + 1) % products.length);
  };

  const prevProductSlide = () => {
    setCurrentProductSlide((prev) => (prev - 1 + products.length) % products.length);
  };

  // Handle video play
  const handleVideoPlay = (videoId: number) => {
    setActiveVideoModal(videoId);
  };

  // Handle video close
  const handleVideoClose = () => {
    if (modalVideoRef.current) {
      modalVideoRef.current.pause();
      modalVideoRef.current.currentTime = 0;
    }
    setActiveVideoModal(null);
  };

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
            <h1 className="hero-main-title font-franklin text-h1">{t('title')}</h1>
            <p className="hero-main-description text-body">{t('slogan')}</p>
          </div>
        </div>
      </section>

      {/* Section 2: Video Carousel - Play to Overlay */}
      <section className="hero-video-section">
        <div className="video-carousel-container">
          {/* Video Carousel */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="video-carousel-main"
          >
            {/* Video Card */}
            <div className="video-carousel-card">
              <div className="video-carousel-wrapper">
                <video
                  className="video-carousel-preview"
                  loop
                  muted
                  playsInline
                  preload="metadata"
                  poster={videoCarousel[currentSlide].poster}
                  onClick={() => handleVideoPlay(videoCarousel[currentSlide].id)}
                >
                  <source src={videoCarousel[currentSlide].videoSrc} type="video/mp4" />
                </video>
                {/* Play button overlay */}
                <button
                  onClick={() => handleVideoPlay(videoCarousel[currentSlide].id)}
                  className="video-play-button"
                  aria-label="Play video"
                >
                  <svg className="play-icon" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </button>
              </div>

              {/* Text and Navigation */}
              <div className="video-carousel-info">
                <h2 className="video-carousel-title font-franklin text-h2">
                  {videoCarousel[currentSlide].title}
                </h2>
                <p className="video-carousel-text text-body">
                  {videoCarousel[currentSlide].description}
                </p>
                <p className="video-carousel-text text-body">
                  {videoCarousel[currentSlide].description2}
                </p>

                {/* Navigation Dots */}
                <div className="video-carousel-dots">
                  {videoCarousel.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentSlide(idx)}
                      className={`dot ${idx === currentSlide ? 'active' : ''}`}
                      aria-label={`Go to video ${idx + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Video Modal Overlay */}
        {activeVideoModal !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleVideoClose}
            className="video-modal-overlay"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="video-modal-content"
            >
              <button
                onClick={handleVideoClose}
                className="video-modal-close"
                aria-label="Close video"
              >
                ✕
              </button>
              <video
                ref={modalVideoRef}
                key={activeVideoModal}
                className="video-modal-player"
                controls
                autoPlay
                playsInline
                onEnded={handleVideoClose}
              >
                <source src={videoCarousel.find(v => v.id === activeVideoModal)?.videoSrc} type="video/mp4" />
              </video>
            </motion.div>
          </motion.div>
        )}
      </section>

      {/* Section 3: Product Carousel - Galería Interactiva */}
      <section className="hero-video-section">
        <div className="video-carousel-container">
          {/* Product Carousel */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="video-carousel-main"
          >
            {/* Product Card */}
            <div className="video-carousel-card">
              <div className="video-carousel-wrapper">
                <Image
                  src={products[currentProductSlide].image}
                  alt={products[currentProductSlide].name}
                  className="product-carousel-image"
                  priority
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>

              {/* Text and Navigation */}
              <div className="video-carousel-info">
                <h2 className="video-carousel-title font-franklin text-h2">
                  {products[currentProductSlide].name}
                </h2>
                <p className="video-carousel-text text-body">
                  {products[currentProductSlide].description}
                </p>

                {/* Navigation Dots */}
                <div className="video-carousel-dots">
                  {products.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentProductSlide(idx)}
                      className={`dot ${idx === currentProductSlide ? 'active' : ''}`}
                      aria-label={`Go to product ${idx + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}