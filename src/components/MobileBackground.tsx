"use client";
import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import styles from "./MobileBackground.module.css";

type MobileBackgroundProps = {
  images: string[];
  intervalMs?: number;
  transitionMs?: number;
  blur?: number;
  brightness?: number;
};

export default function MobileBackground({
  images,
  intervalMs = 6000,
  transitionMs = 2000,
  blur = 2,
  brightness = 0.4,
}: MobileBackgroundProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isClient, setIsClient] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsClient(true);
    const checkMobile = () => { setIsMobile(window.innerWidth <= 768); };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    if (!isClient || !isMobile || images.length <= 1) return;
    const timer = setInterval(() => { setCurrentIndex((prev) => (prev + 1) % images.length); }, intervalMs);
    return () => clearInterval(timer);
  }, [isClient, isMobile, images.length, intervalMs]);

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.style.setProperty("--custom-filter", `blur(${blur}px) brightness(${brightness})`);
      containerRef.current.style.setProperty("--transition-ms", `${transitionMs}ms`);
    }
  }, [blur, brightness, transitionMs]);

  if (!isClient || images.length === 0 || !isMobile) return null;

  return (
    <div
      ref={containerRef}
      className={styles.container}
      aria-hidden="true"
    >
      {images.map((src, index) => (
        <div
          key={src}
          className={`${styles.imageWrapper} ${index === currentIndex ? styles.imageWrapperVisible : ""}`}
        >
          <Image
            src={src}
            alt=""
            fill
            priority={index === 0}
            quality={90}
            sizes="100vw"
            className={styles.imageStyle}
          />
        </div>
      ))}
    </div>
  );
}
