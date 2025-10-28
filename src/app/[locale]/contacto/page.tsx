'use client';
import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';

export default function ContactoPage() {
  const t = useTranslations('Contacto');

  // Estado del formulario
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    mensaje: '',
    newsletter: false,
  });

  const [status, setStatus] = useState<null | 'sending' | 'ok' | 'error'>(null);
  const [message, setMessage] = useState<string | null>(null);

  // Manejo de inputs
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, type, value, checked } = e.target as HTMLInputElement;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  // Envío del formulario
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setStatus('sending');
    setMessage(null);

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const json = await res.json().catch(() => ({}));

      if (res.ok && json?.success) {
        setStatus('ok');
        setMessage(t('submitMessage'));
        setFormData({ nombre: '', email: '', mensaje: '', newsletter: false });
        setTimeout(() => {
          setStatus(null);
          setMessage(null);
        }, 4000);
      } else {
        const err = json?.error || t('errorMessage');
        setStatus('error');
        setMessage(err);
        setTimeout(() => {
          setStatus(null);
          setMessage(null);
        }, 5000);
      }
    } catch (err) {
      console.error('Error en fetch /api/contact:', err);
      setStatus('error');
      setMessage(t('errorMessage'));
      setTimeout(() => {
        setStatus(null);
        setMessage(null);
      }, 5000);
    }
  };

  return (
    <div className="contacto-page">
      <div className="contacto-container">
        {/* Page Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="contacto-header"
        >
          <h1 className="contacto-title">{t('title')}</h1>
          <p className="contacto-subtitle">{t('description')}</p>
        </motion.div>

        {/* Contact Cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="contacto-cards"
        >
          {/* Email Card */}
          <div className="contacto-card">
            <FontAwesomeIcon icon={faEnvelope} className="contacto-icon" />
            <h3 className="contacto-card-title">{t('emailTitle')}</h3>
            <a
              href="mailto:customercare@monumby.com"
              className="contacto-link"
            >
              customercare@monumby.com
            </a>
          </div>

          {/* Instagram Card */}
          <div className="contacto-card">
            <FontAwesomeIcon icon={faInstagram} className="contacto-icon" />
            <h3 className="contacto-card-title">{t('instagramTitle')}</h3>
            <a
              href="https://www.instagram.com/monumby"
              target="_blank"
              rel="noopener noreferrer"
              className="contacto-link"
            >
              @monumby
            </a>
          </div>

          {/* WhatsApp Card */}
          <div className="contacto-card">
            <a
              href="https://wa.me/50683151806"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="+506 8315 1806"
              className="contacto-whatsapp-link"
            >
              <FontAwesomeIcon icon={faWhatsapp} className="contacto-whatsapp-icon" />
              <h3 className="contacto-card-title">{t('whatsappTitle')}</h3>
              <span className="contacto-link">+506 8315 1806</span>
            </a>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="contacto-form-wrapper"
        >
          <form onSubmit={handleSubmit} className="contacto-form" method="post">
            <input
              type="text"
              name="nombre"
              value={formData.nombre}
              onChange={handleChange}
              placeholder={t('namePlaceholder')}
              className="contacto-input"
              required
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder={t('emailPlaceholder')}
              className="contacto-input"
              required
            />
            <textarea
              name="mensaje"
              value={formData.mensaje}
              onChange={handleChange}
              placeholder={t('messagePlaceholder')}
              className="contacto-textarea"
              required
            />

            <label className="contacto-checkbox-label">
              <input
                type="checkbox"
                name="newsletter"
                checked={formData.newsletter}
                onChange={handleChange}
                className="contacto-checkbox"
              />
              <span>{t('newsletterOptIn')}</span>
            </label>

            <button
              type="submit"
              className="contacto-submit"
              disabled={status === 'sending'}
            >
              {status === 'sending' ? t('sending') : t('submit')}
            </button>
          </form>

          {message && (
            <div
              className={`contacto-message ${
                status === 'ok' ? 'contacto-message-success' : 'contacto-message-error'
              }`}
              role="status"
            >
              {message}
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
}
