'use client';
import { useTranslations, useLocale } from 'next-intl';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function NosotrosPage() {
  const t = useTranslations('Nosotros');
  const locale = useLocale();

  return (
    <div className="nosotros-page">
      <div className="nosotros-container">
        {/* Page Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="nosotros-header"
        >
          <h1 className="nosotros-title">{t('title')}</h1>
          <p className="nosotros-subtitle">{t('subtitle')}</p>
        </motion.div>

        {/* Origin Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="nosotros-section"
        >
          <h2 className="section-title">{t('originTitle')}</h2>
          <div className="section-content">
            <p className="section-paragraph">{t('originParagraph1')}</p>
            <p className="section-paragraph">{t('originParagraph2')}</p>
          </div>
        </motion.section>

        {/* No Pain Relationship Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="nosotros-section nosotros-highlight"
        >
          <h2 className="section-title">{t('nopainTitle')}</h2>
          <div className="section-content">
            <p className="section-paragraph">{t('nopainParagraph1')}</p>
            <p className="section-paragraph">{t('nopainParagraph2')}</p>
            <p className="section-paragraph">{t('nopainParagraph3')}</p>
          </div>
        </motion.section>

        {/* Mission Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="nosotros-section"
        >
          <h2 className="section-title">{t('missionTitle')}</h2>
          <div className="section-content">
            <p className="section-paragraph">{t('missionParagraph1')}</p>
            <p className="section-paragraph">{t('missionParagraph2')}</p>
            <ul className="mission-features">
              <li className="mission-feature">
                <span className="feature-icon">✓</span>
                {t('missionFeature1')}
              </li>
              <li className="mission-feature">
                <span className="feature-icon">✓</span>
                {t('missionFeature2')}
              </li>
              <li className="mission-feature">
                <span className="feature-icon">✓</span>
                {t('missionFeature3')}
              </li>
              <li className="mission-feature">
                <span className="feature-icon">✓</span>
                {t('missionFeature4')}
              </li>
            </ul>
          </div>
        </motion.section>

        {/* Values Grid */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="nosotros-section"
        >
          <h2 className="section-title">{t('valuesTitle')}</h2>
          <div className="values-grid">
            <div className="value-card">
              <div className="value-icon">⭐</div>
              <h3 className="value-title">{t('value1Title')}</h3>
              <p className="value-description">{t('value1Description')}</p>
            </div>
            <div className="value-card">
              <div className="value-icon">🚀</div>
              <h3 className="value-title">{t('value2Title')}</h3>
              <p className="value-description">{t('value2Description')}</p>
            </div>
            <div className="value-card">
              <div className="value-icon">🛡️</div>
              <h3 className="value-title">{t('value3Title')}</h3>
              <p className="value-description">{t('value3Description')}</p>
            </div>
            <div className="value-card">
              <div className="value-icon">🤝</div>
              <h3 className="value-title">{t('value4Title')}</h3>
              <p className="value-description">{t('value4Description')}</p>
            </div>
          </div>
        </motion.section>

        {/* Closing Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="nosotros-section nosotros-closing"
        >
          <h2 className="section-title">{t('closingTitle')}</h2>
          <p className="section-paragraph closing-paragraph">{t('closingParagraph')}</p>
          <Link href={`/${locale}/productos/monumby-products`} className="nosotros-cta">
            {t('cta')}
          </Link>
        </motion.section>

        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="nosotros-back"
        >
          <Link href={`/${locale}`} className="back-link">
            ← {locale === 'en' ? 'Back to home' : 'Volver al inicio'}
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
