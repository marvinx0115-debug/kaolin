import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Linkedin, Globe, Shield } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { t } = useTranslation();

  return (
    <footer className="bg-[#22272A] text-[#B0B9BE] pt-24 pb-12" data-component="site-footer">
      <div className="max-w-[1440px] mx-auto px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          {/* Brand Col */}
          <div className="space-y-8">
            <Link to="/" className="flex items-center group">
              <div className="w-12 h-12 bg-white rounded-[var(--radius-base)] flex items-center justify-center mr-4">
                <span className="text-[#22272A] font-bold text-2xl">{t('common.brand').charAt(0)}</span>
              </div>
              <div>
                <span className="block text-white font-black text-2xl leading-none tracking-tighter">{t('common.brand')}</span>
                <span className="block text-gray-500 text-[10px] tracking-[0.2em] uppercase font-bold mt-1">{t('common.brandSubtitle')}</span>
              </div>
            </Link>
            <p className="text-[#9CA6AB] text-sm leading-relaxed font-medium">
              {t('footer.desc')}
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 border border-gray-700 rounded-full flex items-center justify-center text-white hover:bg-[var(--color-primary)] hover:border-[var(--color-primary)] transition-colors">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 border border-gray-700 rounded-full flex items-center justify-center text-white hover:bg-[var(--color-primary)] hover:border-[var(--color-primary)] transition-colors">
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-white mb-10">{t('nav.products')}</h3>
            <ul className="space-y-4 text-sm font-bold text-[#9CA6AB]">
              <li><Link to="/products" className="hover:text-white transition-colors">{t('common.allProducts')}</Link></li>
              <li><Link to="/solutions" className="hover:text-white transition-colors">{t('nav.solutions')}</Link></li>
              <li><Link to="/blog" className="hover:text-white transition-colors">{t('nav.blog')}</Link></li>
              <li><Link to="/about" className="hover:text-white transition-colors">{t('nav.about')}</Link></li>
            </ul>
          </div>

          {/* Technical Center */}
          <div>
            <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-white mb-10">{t('footer.techCenter')}</h3>
            <div className="mb-6">
              <p className="text-xs text-[#9CA6AB] leading-relaxed mb-6 font-medium">
                {t('footer.techDesc')}
              </p>
              <button className="bg-[var(--color-primary)] text-white !py-3 !px-6 !text-[9px] w-full lg:w-auto font-black uppercase tracking-widest hover:bg-[#434C51]">
                {t('footer.downloadBtn')}
              </button>
            </div>
            <ul className="space-y-4 text-sm font-bold text-[#9CA6AB] mt-10">
              <li><Link to="/contact" className="hover:text-white transition-colors">{t('common.requestQuote')}</Link></li>
              <li><a href="#" className="hover:text-white transition-colors">Logistics Hub</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-white mb-10">{t('footer.contactUs')}</h3>
            <div className="space-y-6 text-sm font-bold text-[#9CA6AB]">
              <div className="flex items-start">
                <Globe className="w-5 h-5 mr-4 mt-0.5 text-[var(--color-primary)]" />
                <span className="text-white">{t('footer.hq')}<br /><span className="text-[#9CA6AB]">International Trade Center</span></span>
              </div>
              <div className="flex items-center">
                <Mail className="w-5 h-5 mr-4 text-[var(--color-primary)]" />
                <span className="text-white">sales@apex-minerals.com</span>
              </div>
              <div className="flex items-center">
                <Shield className="w-5 h-5 mr-4 text-[var(--color-primary)]" />
                <span className="text-white">Verified B2B Supplier</span>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center text-[9px] font-black uppercase tracking-[0.2em] text-gray-600">
          <p>© {currentYear} {t('common.brand')} {t('common.brandSubtitle')} Solutions. {t('footer.rights')}</p>
          <div className="mt-6 md:mt-0 space-x-8">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
