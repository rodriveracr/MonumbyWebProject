'use client';
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

// Static imports for images with spaces in filenames
import product1Image from '../../../../../public/Generated Image October 24, 2025 - 11_41AM.png';
import product2Image from '../../../../../public/Generated Image October 24, 2025 - 11_43AM.png';
import product3Image from '../../../../../public/Generated Image October 24, 2025 - 11_44AM.png';

export default function CremasPage() {
  const t = useTranslations('Cremas');

  const products = [
    {
      id: 1,
      image: product1Image,
      name: t('product1.name'),
      description: t('product1.description'),
      features: [
        t('product1.feature1'),
        t('product1.feature2'),
        t('product1.feature3')
      ]
    },
    {
      id: 2,
      image: product2Image,
      name: t('product2.name'),
      description: t('product2.description'),
      features: [
        t('product2.feature1'),
        t('product2.feature2'),
        t('product2.feature3')
      ]
    },
    {
      id: 3,
      image: product3Image,
      name: t('product3.name'),
      description: t('product3.description'),
      features: [
        t('product3.feature1'),
        t('product3.feature2'),
        t('product3.feature3')
      ]
    }
  ];

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
        </motion.div>

        {/* Products Grid */}
        <div className="productos-grid">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              viewport={{ once: true }}
              className="producto-card"
            >
              <div className="producto-image-wrapper">
                <Image
                  src={product.image}
                  alt={product.name}
                  className="producto-image"
                  priority
                />
              </div>
              <div className="producto-content">
                <h2 className="producto-name">{product.name}</h2>
                <p className="producto-description">{product.description}</p>
                <ul className="producto-features">
                  {product.features.map((feature, idx) => (
                    <li key={idx} className="producto-feature">
                      <span className="feature-icon">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link href="#contacto" className="producto-cta">
                  {t('cta')}
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="productos-back"
        >
          <Link href="/" className="back-link">
            ← {t('back')}
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
