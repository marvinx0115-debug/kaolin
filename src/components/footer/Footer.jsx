import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Linkedin, Globe, Shield } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { t } = useTranslation();

  return (
    <footer className="bg-[var(--color-bg-alt)] text-[var(--color-text-main)] pt-24 pb-12 border-t border-gray-100" data-component="site-footer">
      <div className="max-w-[1440px] mx-auto px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          {/* Brand Col */}
          <div className="space-y-8">
            <Link to="/" className="flex items-center group">
              <div className="w-12 h-12 bg-[var(--color-primary)] rounded-[var(--radius-base)] flex items-center justify-center mr-4">
                <span className="text-white font-bold text-2xl">{t('common.brand').charAt(0)}</span>
              </div>
              <div>
                <span className="block text-[var(--color-primary)] font-black text-2xl leading-none tracking-tighter">{t('common.brand')}</span>
                <span className="block text-[var(--color-text-muted)] text-[10px] tracking-[0.2em] uppercase font-bold mt-1">{t('common.brandSubtitle')}</span>
              </div>
            </Link>
            <p className="text-[var(--color-text-muted)] text-sm leading-relaxed font-medium">
              {t('footer.desc')}
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 border border-[var(--color-border)] rounded-full flex items-center justify-center text-[var(--color-primary)] hover:bg-[var(--color-primary)] hover:text-white transition-colors">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 border border-[var(--color-border)] rounded-full flex items-center justify-center text-[var(--color-primary)] hover:bg-[var(--color-primary)] hover:text-white transition-colors">
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xs font-black uppercase tracking-[0.3em] text-[var(--color-primary)] mb-10">{t('nav.products')}</h3>
            <ul className="space-y-4 text-sm font-bold text-[var(--color-text-muted)]">
              <li><Link to="/products" className="hover:text-[var(--color-accent)] transition-colors">{t('common.allProducts')}</Link></li>
              <li><Link to="/solutions" className="hover:text-[var(--color-accent)] transition-colors">{t('nav.solutions')}</Link></li>
              <li><Link to="/blog" className="hover:text-[var(--color-accent)] transition-colors">{t('nav.blog')}</Link></li>
              <li><Link to="/about" className="hover:text-[var(--color-accent)] transition-colors">{t('nav.about')}</Link></li>
            </ul>
          </div>

          {/* Technical Center */}
          <div>
            <h3 className="text-xs font-black uppercase tracking-[0.3em] text-[var(--color-primary)] mb-10">{t('footer.techCenter')}</h3>
            <div className="mb-6">
              <p className="text-xs text-[var(--color-text-muted)] leading-relaxed mb-6 font-medium">
                {t('footer.techDesc')}
              </p>
              <button className="btn-primary !py-3 !px-6 !text-[9px] w-full lg:w-auto">
                {t('footer.downloadBtn')}
              </button>
            </div>
            <ul className="space-y-4 text-sm font-bold text-[var(--color-text-muted)] mt-10">
              <li><Link to="/contact" className="hover:text-[var(--color-accent)] transition-colors">{t('common.requestQuote')}</Link></li>
              <li><a href="#" className="hover:text-[var(--color-accent)] transition-colors">Logistics Hub</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xs font-black uppercase tracking-[0.3em] text-[var(--color-primary)] mb-10">{t('footer.contactUs')}</h3>
            <div className="space-y-6 text-sm font-bold text-[var(--color-text-muted)]">
              <div className="flex items-start">
                <Globe className="w-5 h-5 mr-4 mt-0.5 text-[var(--color-accent)]" />
                <span>{t('footer.hq')}<br />International Trade Center</span>
              </div>
              <div className="flex items-center">
                <Mail className="w-5 h-5 mr-4 text-[var(--color-accent)]" />
                <span>sales@apex-minerals.com</span>
              </div>
              <div className="flex items-center">
                <Shield className="w-5 h-5 mr-4 text-[var(--color-accent)]" />
                <span>Verified B2B Supplier</span>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center text-[10px] font-black uppercase tracking-[0.2em] text-gray-400">
          <p>© {currentYear} {t('common.brand')} {t('common.brandSubtitle')} Solutions. {t('footer.rights')}</p>
          <div className="mt-6 md:mt-0 space-x-8">
            <a href="#" className="hover:text-[var(--color-primary)] transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-[var(--color-primary)] transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
