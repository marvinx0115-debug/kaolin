import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Linkedin, Globe, Shield } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { t } = useTranslation();

  return (
    <footer className="bg-[var(--color-primary)] text-white pt-20 pb-10" data-component="site-footer">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Col */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center">
              <div className="w-10 h-10 bg-white rounded-[var(--radius-base)] flex items-center justify-center mr-3">
                <span className="text-[var(--color-primary)] font-bold text-xl">{t('common.brand').charAt(0)}</span>
              </div>
              <div>
                <span className="block font-bold text-xl leading-tight">{t('common.brand')}</span>
                <span className="block text-blue-200 text-[10px] tracking-widest uppercase font-medium">{t('common.brandSubtitle')}</span>
              </div>
            </Link>
            <p className="text-blue-100 text-sm leading-relaxed opacity-80">
              {t('footer.desc')}
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-[var(--color-accent)] transition-colors">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-[var(--color-accent)] transition-colors">
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6 border-b border-white/10 pb-2">{t('nav.products')}</h3>
            <ul className="space-y-4 text-sm text-blue-100 opacity-80">
              <li><Link to="/products" className="hover:text-[var(--color-accent)] transition-colors">{t('common.allProducts')}</Link></li>
              <li><Link to="/solutions" className="hover:text-[var(--color-accent)] transition-colors">{t('nav.solutions')}</Link></li>
              <li><Link to="/blog" className="hover:text-[var(--color-accent)] transition-colors">{t('nav.blog')}</Link></li>
              <li><Link to="/about" className="hover:text-[var(--color-accent)] transition-colors">{t('nav.about')}</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-bold mb-6 border-b border-white/10 pb-2">{t('footer.techCenter')}</h3>
            <div className="mb-4">
              <p className="text-xs text-blue-100 opacity-70 leading-relaxed mb-4">
                {t('footer.techDesc')}
              </p>
              <button className="w-full bg-[var(--color-accent)] text-white py-2 px-4 rounded-[var(--radius-base)] text-xs font-bold hover:opacity-90 transition-opacity">
                {t('footer.downloadBtn')}
              </button>
            </div>
            <ul className="space-y-4 text-sm text-blue-100 opacity-80 mt-6">
              <li><Link to="/contact" className="hover:text-[var(--color-accent)] transition-colors">{t('common.requestQuote')}</Link></li>
              <li><a href="#" className="hover:text-[var(--color-accent)] transition-colors">Logistics</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-6 border-b border-white/10 pb-2">{t('footer.contactUs')}</h3>
            <div className="space-y-4 text-sm text-blue-100 opacity-80">
              <div className="flex items-start">
                <Globe className="w-5 h-5 mr-3 mt-0.5 text-[var(--color-accent)]" />
                <span>{t('footer.hq')}<br />International Trade Center</span>
              </div>
              <div className="flex items-center">
                <Mail className="w-5 h-5 mr-3 text-[var(--color-accent)]" />
                <span>sales@apex-minerals.com</span>
              </div>
              <div className="flex items-center">
                <Shield className="w-5 h-5 mr-3 text-[var(--color-accent)]" />
                <span>Verified B2B Supplier</span>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-10 border-t border-white/10 text-center md:text-left md:flex justify-between items-center text-xs text-blue-200/50">
          <p>© {currentYear} {t('common.brand')} {t('common.brandSubtitle')} Solutions. {t('footer.rights')}</p>
          <div className="mt-4 md:mt-0 space-x-6">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
