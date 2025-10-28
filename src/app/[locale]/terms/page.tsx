'use client';
import { useTranslations, useLocale } from 'next-intl';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function TermsPage() {
  const t = useTranslations('Terms');
  const locale = useLocale();

  return (
    <div className="legal-page">
      <div className="legal-container">
        {/* Page Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="legal-header"
        >
          <h1 className="legal-title">{t('title')}</h1>
          <p className="legal-subtitle">{t('lastUpdated')}: {t('updateDate')}</p>
        </motion.div>

        {/* Content Sections */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="legal-content"
        >
          {/* Section 1 */}
          <section className="legal-section">
            <h2 className="legal-section-title">{t('section1.title')}</h2>
            <p className="legal-text">{t('section1.p1')}</p>
            <p className="legal-text">{t('section1.p2')}</p>
          </section>

          {/* Section 2 */}
          <section className="legal-section">
            <h2 className="legal-section-title">{t('section2.title')}</h2>
            <p className="legal-text">{t('section2.p1')}</p>
            <ul className="legal-list">
              <li>{t('section2.item1')}</li>
              <li>{t('section2.item2')}</li>
              <li>{t('section2.item3')}</li>
            </ul>
          </section>

          {/* Section 3 */}
          <section className="legal-section">
            <h2 className="legal-section-title">{t('section3.title')}</h2>
            <p className="legal-text">{t('section3.p1')}</p>
          </section>

          {/* Section 4 */}
          <section className="legal-section">
            <h2 className="legal-section-title">{t('section4.title')}</h2>
            <p className="legal-text">{t('section4.p1')}</p>
          </section>

          {/* Section 5 */}
          <section className="legal-section">
            <h2 className="legal-section-title">{t('section5.title')}</h2>
            <p className="legal-text">{t('section5.p1')}</p>
          </section>

          {/* Section 6 */}
          <section className="legal-section">
            <h2 className="legal-section-title">{t('section6.title')}</h2>
            <p className="legal-text">{t('section6.p1')}</p>
          </section>

          {/* Section 7 */}
          <section className="legal-section">
            <h2 className="legal-section-title">{t('section7.title')}</h2>
            <p className="legal-text">{t('section7.p1')}</p>
          </section>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="legal-cta"
        >
          <p className="legal-cta-text">{t('questions')}</p>
          <Link href={`/${locale}/contacto`} className="legal-cta-button">
            {t('contactButton')}
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
