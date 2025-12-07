'use client';
/* eslint-disable jsx-a11y/aria-proptypes */
import { useTranslations, useLocale } from 'next-intl';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';

export default function FAQPage() {
  const t = useTranslations('FAQ');
  const locale = useLocale();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqCategories = [
    {
      title: t('monumby.title'),
      questions: [
        { q: t('monumby.q1'), a: t('monumby.a1') },
        { q: t('monumby.q2'), a: t('monumby.a2') },
        { q: t('monumby.q3'), a: t('monumby.a3') },
        { q: t('monumby.q4'), a: t('monumby.a4') },
        { q: t('monumby.q5'), a: t('monumby.a5') },
      ],
    },
    {
      title: t('cremas.title'),
      questions: [
        { q: t('cremas.q1'), a: t('cremas.a1') },
        { q: t('cremas.q2'), a: t('cremas.a2') },
        { q: t('cremas.q3'), a: t('cremas.a3') },
        { q: t('cremas.q4'), a: t('cremas.a4') },
      ],
    },
  ];

  let questionIndex = 0;

  return (
    <div className="faq-page">
      <div className="faq-container">
        {/* Page Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="faq-header"
        >
          <h1 className="faq-title">{t('pageTitle')}</h1>
          <p className="faq-subtitle">{t('pageDescription')}</p>
        </motion.div>

        {/* FAQ Categories */}
        <div className="faq-categories">
          {faqCategories.map((category, catIndex) => (
            <motion.section
              key={catIndex}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: catIndex * 0.1 }}
              viewport={{ once: true }}
              className="faq-category"
            >
              <h2 className="faq-category-title">{category.title}</h2>
              <div className="faq-questions">
                {category.questions.map((item, qIndex) => {
                  const currentIndex = questionIndex++;
                  const isOpen = openIndex === currentIndex;
                  return (
                    <div
                      key={qIndex}
                      className={`faq-item ${openIndex === currentIndex ? 'faq-item-open' : ''}`}
                    >
                      <button
                        type="button"
                        onClick={() => toggleQuestion(currentIndex)}
                        className="faq-question-button"
                        id={`faq-button-${currentIndex}`}
                        aria-expanded={isOpen ? 'true' : 'false'}
                        aria-controls={`faq-panel-${currentIndex}`}
                      >
                        <span className="faq-question-text">{item.q}</span>
                        <span className="faq-toggle-icon">
                          {openIndex === currentIndex ? '−' : '+'}
                        </span>
                      </button>
                      <motion.div
                        initial={false}
                        animate={{
                          height: openIndex === currentIndex ? 'auto' : 0,
                          opacity: openIndex === currentIndex ? 1 : 0,
                        }}
                        transition={{ duration: 0.3 }}
                        className="faq-answer-wrapper"
                        id={`faq-panel-${currentIndex}`}
                        role="region"
                        aria-labelledby={`faq-button-${currentIndex}`}
                      >
                        <p className="faq-answer">{item.a}</p>
                      </motion.div>
                    </div>
                  );
                })}
              </div>
            </motion.section>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="faq-cta"
        >
          <h3 className="faq-cta-title">{t('ctaTitle')}</h3>
          <p className="faq-cta-text">{t('ctaText')}</p>
          <Link href={`/${locale}/contacto`} className="faq-cta-button">
            {t('ctaButton')}
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
