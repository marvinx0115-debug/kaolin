import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X, Globe, ChevronDown } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showLang, setShowLang] = useState(false);
  const { t, i18n } = useTranslation();

  const navLinks = [
    { name: t('nav.home'), path: '/' },
    { name: t('nav.products'), path: '/products' },
    { name: t('nav.solutions'), path: '/solutions' },
    { name: t('nav.blog'), path: '/blog' },
    { name: t('nav.about'), path: '/about' },
  ];

  const languages = [
    { code: 'en', name: 'English' },
    { code: 'es', name: 'Español' },
    { code: 'pt', name: 'Português' },
    { code: 'fr', name: 'Français' },
  ];

  const changeLanguage = (code) => {
    i18n.changeLanguage(code);
    setShowLang(false);
  };

  return (
    <header className="glass-header shadow-sm" data-component="site-header">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <div className="flex justify-between items-center h-24">
          {/* Logo */}
          <Link to="/" className="flex items-center group">
            <div className="w-12 h-12 bg-[var(--color-primary)] rounded-[var(--radius-base)] flex items-center justify-center mr-4 transition-transform group-hover:rotate-12">
              <span className="text-white font-bold text-2xl">{t('common.brand').charAt(0)}</span>
            </div>
            <div>
              <span className="block text-[var(--color-primary)] font-black text-2xl leading-none tracking-tighter">{t('common.brand')}</span>
              <span className="block text-[var(--color-text-muted)] text-[10px] tracking-[0.2em] uppercase font-bold mt-1">{t('common.brandSubtitle')}</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex space-x-12">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `text-xs font-bold uppercase tracking-widest transition-all hover:text-[var(--color-accent)] relative after:content-[''] after:absolute after:bottom-[-8px] after:left-0 after:w-full after:h-[2px] after:bg-[var(--color-accent)] after:scale-x-0 after:transition-transform hover:after:scale-x-100 ${
                    isActive ? 'text-[var(--color-primary)] after:scale-x-100' : 'text-[var(--color-text-main)]'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </nav>

          {/* Actions */}
          <div className="hidden lg:flex items-center space-x-6">
            {/* Language Switcher */}
            <div className="relative">
              <button 
                onClick={() => setShowLang(!showLang)}
                className="flex items-center text-sm text-[var(--color-text-main)] font-medium hover:text-[var(--color-primary)]"
              >
                <Globe className="w-4 h-4 mr-2" />
                {languages.find(l => l.code === i18n.language.split('-')[0])?.name || 'English'}
                <ChevronDown className="w-3 h-3 ml-1" />
              </button>
              
              {showLang && (
                <div className="absolute right-0 mt-2 w-40 bg-white border border-[var(--color-border)] rounded-[var(--radius-base)] shadow-xl overflow-hidden">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => changeLanguage(lang.code)}
                      className="block w-full text-left px-4 py-2 text-sm hover:bg-[var(--color-bg-base)] transition-colors"
                    >
                      {lang.name}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <Link to="/contact" className="btn-primary py-2 px-5 text-sm">
              {t('common.inquiry')}
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-[var(--color-text-main)] hover:text-[var(--color-primary)] focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-[var(--color-border)]">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `block px-3 py-2 rounded-md text-base font-medium ${
                    isActive ? 'bg-blue-50 text-[var(--color-accent)]' : 'text-[var(--color-text-main)]'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
            <Link
              to="/contact"
              onClick={() => setIsOpen(false)}
              className="block w-full text-center btn-primary mt-4"
            >
              Request Quote
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
