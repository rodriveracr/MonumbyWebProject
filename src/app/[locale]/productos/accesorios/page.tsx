'use client';
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';

export default function AccesoriosPage() {
  const t = useTranslations('Accesorios');

  return (
    <div className="productos-page">
      <div className="productos-container">
        {/* Page Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="productos-header"
        >
          <h1 className="productos-title">{t('title')}</h1>
          <p className="productos-subtitle">{t('subtitle')}</p>
          <div className="coming-soon-badge">
            {t('comingSoon')}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
