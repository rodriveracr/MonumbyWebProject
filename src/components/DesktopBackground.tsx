"use client";
import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import styles from "./DesktopBackground.module.css";

type DesktopBackgroundProps = {
  images: string[];
  intervalMs?: number;
  transitionMs?: number;
  blur?: number;
  brightness?: number;
};

export default function DesktopBackground({
  images,
  intervalMs = 6000,
  transitionMs = 2000,
  blur = 3,
  brightness = 0.4,
}: DesktopBackgroundProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isClient, setIsClient] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsClient(true);
    const checkDesktop = () => { setIsDesktop(window.innerWidth > 768); };
    checkDesktop();
    window.addEventListener("resize", checkDesktop);
    return () => window.removeEventListener("resize", checkDesktop);
  }, []);

  useEffect(() => {
    if (!isClient || !isDesktop || images.length <= 1) return;
    const timer = setInterval(() => { setCurrentIndex((prev) => (prev + 1) % images.length); }, intervalMs);
    return () => clearInterval(timer);
  }, [isClient, isDesktop, images.length, intervalMs]);

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.style.setProperty("--custom-filter", `blur(${blur}px) brightness(${brightness})`);
      containerRef.current.style.setProperty("--transition-ms", `${transitionMs}ms`);
    }
  }, [blur, brightness, transitionMs]);

  if (!isClient || images.length === 0 || !isDesktop) return null;

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
