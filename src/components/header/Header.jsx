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
    <header className="bg-white border-b-4 border-[var(--color-primary)] sticky top-0 z-50 shadow-sm" data-component="site-header">
      <div className="max-w-[1440px] mx-auto px-10">
        <div className="flex justify-between items-center h-28">
          {/* BASF-style Logo Layout */}
          <Link to="/" className="flex items-center space-x-6">
            <div className="w-16 h-16 bg-[var(--color-primary)] flex items-center justify-center">
              <span className="text-white font-black text-4xl">A</span>
            </div>
            <div className="border-l border-gray-300 pl-6 py-1">
              <span className="block text-[var(--color-primary)] font-bold text-3xl leading-none tracking-tighter uppercase">{t('common.brand')}</span>
              <span className="block text-[var(--color-secondary)] text-[10px] tracking-[0.2em] font-black mt-2 uppercase">{t('common.brandSubtitle')}</span>
            </div>
          </Link>

          {/* Desktop Nav: Clean & Bold */}
          <nav className="hidden lg:flex space-x-12">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `text-sm font-bold uppercase tracking-widest transition-colors hover:text-[var(--color-primary)] ${
                    isActive ? 'text-[var(--color-primary)]' : 'text-gray-500'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </nav>

          {/* Corporate Tools */}
          <div className="hidden lg:flex items-center space-x-10">
            {/* Language Switcher */}
            <div className="relative">
              <button 
                onClick={() => setShowLang(!showLang)}
                className="flex items-center text-xs text-gray-500 font-bold uppercase tracking-widest hover:text-[var(--color-primary)]"
              >
                <Globe className="w-4 h-4 mr-2" />
                {languages.find(l => l.code === i18n.language.split('-')[0])?.name || 'English'}
                <ChevronDown className="w-3 h-3 ml-2" />
              </button>
              
              {showLang && (
                <div className="absolute right-0 mt-4 w-48 bg-white border-2 border-[var(--color-primary)] shadow-2xl overflow-hidden">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => changeLanguage(lang.code)}
                      className="block w-full text-left px-6 py-4 text-xs font-bold uppercase tracking-widest text-gray-700 hover:bg-gray-100 transition-colors"
                    >
                      {lang.name}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <Link to="/contact" className="btn-primary !px-12 !py-4 shadow-none">
              {t('common.inquiry')}
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-[var(--color-primary)]">
              {isOpen ? <X className="h-8 w-8" /> : <Menu className="h-8 w-8" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 shadow-2xl">
          <div className="px-10 py-10 space-y-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `block text-lg font-bold uppercase tracking-widest ${
                    isActive ? 'text-[var(--color-primary)]' : 'text-gray-500'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
            <Link
              to="/contact"
              onClick={() => setIsOpen(false)}
              className="block w-full text-center btn-primary py-6"
            >
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
