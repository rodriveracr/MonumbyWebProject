'use client';
import { useTranslations, useLocale } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faWhatsapp, faTiktok } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

export default function Footer() {
  const t = useTranslations('Footer');
  const locale = useLocale();

  return (
    <footer className="footer-premium">
      <div className="footer-premium-container">
        {/* Grid de contenido */}
        <div className="footer-content-grid">
          {/* Social Links */}
          <div className="footer-column">
            <h3 className="footer-column-title">Síguenos</h3>
            <div className="footer-premium-social">
                <a 
                  href="https://www.instagram.com/numbycream/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="footer-social-link"
                aria-label="Instagram"
              >
                <FontAwesomeIcon icon={faInstagram} />
              </a>
                <a 
                  href="https://www.tiktok.com/@nopaingel" 
                target="_blank" 
                rel="noopener noreferrer"
                className="footer-social-link"
                aria-label="TikTok"
              >
                <FontAwesomeIcon icon={faTiktok} />
              </a>
              <a 
                href="mailto:info@monumby.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="footer-social-link"
                aria-label="Email"
              >
                <FontAwesomeIcon icon={faEnvelope} />
              </a>
                <a 
                  href="https://wa.me/50683151806" 
                target="_blank" 
                rel="noopener noreferrer"
                className="footer-social-link footer-whatsapp"
                aria-label="WhatsApp"
              >
                <FontAwesomeIcon icon={faWhatsapp} />
              </a>
            </div>
          </div>

          {/* Links Column */}
          <div className="footer-column">
            <h3 className="footer-column-title">{t('links')}</h3>
            <nav className="footer-nav">
              <Link href={`/${locale}/contacto`} className="footer-link">{t('contact')}</Link>
              <Link href={`/${locale}/faq`} className="footer-link">{t('faq')}</Link>
              <Link href={`/${locale}/nosotros`} className="footer-link">{t('about')}</Link>
            </nav>
          </div>

          {/* Legal Column */}
          <div className="footer-column">
            <h3 className="footer-column-title">{t('legal')}</h3>
            <nav className="footer-nav">
                <Link href={`/${locale}/privacy`} className="footer-link">{t('privacy')}</Link>
                <Link href={`/${locale}/terms`} className="footer-link">{t('terms')}</Link>
            </nav>
          </div>
        </div>

        {/* Copyright & Credits */}
        <div className="footer-bottom-section">
          <p className="footer-premium-copyright">
            © {new Date().getFullYear()} Monumby. {t('rights')}
          </p>
          <div className="footer-credits">
            <a
              href="https://rodcr.carrd.co"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-credit-link"
            >
              <span>{t('madeWith')}</span>
              <span className="footer-heart">❤️</span>
              <span>{t('inCostaRica')}</span>
              <Image
                src="/Screenshot 2025-10-20 204524.png"
                alt="Rivera's Industries"
                width={40}
                height={40}
                className="footer-credit-logo"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
