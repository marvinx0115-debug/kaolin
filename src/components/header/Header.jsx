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
    <header className="bg-[var(--color-primary)] sticky top-0 z-50 shadow-md" data-component="site-header">
      <div className="max-w-[1440px] mx-auto px-8 lg:px-12">
        <div className="flex justify-between items-center h-24">
          {/* Logo */}
          <Link to="/" className="flex items-center group">
            <div className="w-12 h-12 bg-white rounded-[var(--radius-base)] flex items-center justify-center mr-4">
              <span className="text-[var(--color-primary)] font-bold text-2xl">{t('common.brand').charAt(0)}</span>
            </div>
            <div>
              <span className="block text-white font-black text-2xl leading-none tracking-tighter">{t('common.brand')}</span>
              <span className="block text-gray-300 text-[10px] tracking-[0.2em] uppercase font-bold mt-1">{t('common.brandSubtitle')}</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex space-x-12">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `text-xs font-bold uppercase tracking-widest transition-colors relative hover:text-white ${
                    isActive ? 'text-white after:content-[""] after:absolute after:bottom-[-8px] after:left-0 after:w-full after:h-[2px] after:bg-white' : 'text-gray-300'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </nav>

          {/* Actions */}
          <div className="hidden lg:flex items-center space-x-8">
            {/* Language Switcher */}
            <div className="relative">
              <button 
                onClick={() => setShowLang(!showLang)}
                className="flex items-center text-sm text-gray-300 font-medium hover:text-white"
              >
                <Globe className="w-4 h-4 mr-2" />
                {languages.find(l => l.code === i18n.language.split('-')[0])?.name || 'English'}
                <ChevronDown className="w-3 h-3 ml-1" />
              </button>
              
              {showLang && (
                <div className="absolute right-0 mt-2 w-40 bg-white border border-[var(--color-border)] shadow-xl overflow-hidden">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => changeLanguage(lang.code)}
                      className="block w-full text-left px-4 py-3 text-xs font-bold uppercase tracking-widest text-[var(--color-primary)] hover:bg-[var(--color-bg-card)]"
                    >
                      {lang.name}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <Link to="/contact" className="bg-white text-[var(--color-primary)] px-8 py-3 text-[10px] font-black uppercase tracking-[0.2em] hover:bg-gray-100">
              {t('common.inquiry')}
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-[var(--color-primary)] border-t border-white/10">
          <div className="px-6 pt-2 pb-6 space-y-4">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `block py-3 text-xs font-bold uppercase tracking-widest ${
                    isActive ? 'text-white' : 'text-gray-300'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
            <Link
              to="/contact"
              onClick={() => setIsOpen(false)}
              className="block w-full text-center bg-white text-[var(--color-primary)] py-4 text-[10px] font-black uppercase tracking-[0.2em]"
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
