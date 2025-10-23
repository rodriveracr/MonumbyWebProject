/* src/components/Hero.tsx */
'use client';
import React from 'react';
import { useTranslations } from 'next-intl';
import styles from './Hero.module.css';

export default function Hero({ locale }: { locale: 'en' | 'es' }) {
  const t = useTranslations('Hero');

  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <h1 className={styles.title}>{t('title')}</h1>
        <p className={styles.subtitle}>{t('subtitle')}</p>
        <a className={styles.cta} href="#products">{t('cta')}</a>
      </div>
    </section>
  );
} {/* Hero con estilos premium y multilenguaje. */}