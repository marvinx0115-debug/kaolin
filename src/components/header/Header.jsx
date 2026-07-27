import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X, Globe, ChevronDown, Mountain } from 'lucide-react';
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
    <header className="bg-[var(--color-bg-base)] border-b border-[var(--color-border)] sticky top-0 z-50 shadow-sm" data-component="site-header">
      <div className="max-w-[1440px] mx-auto px-10">
        <div className="flex justify-between items-center h-24">
          {/* Natural Heritage Logo */}
          <Link to="/" className="flex items-center space-x-4">
            <div className="flex items-center justify-center text-[var(--color-accent)]">
               <Mountain className="w-10 h-10" />
            </div>
            <div className="flex flex-col">
              <span className="text-[var(--color-primary)] font-bold text-2xl tracking-tighter leading-none">{t('common.brand')}</span>
              <span className="text-[var(--color-accent)] text-[9px] font-black uppercase tracking-[0.3em] mt-1.5">{t('common.brandSubtitle')}</span>
            </div>
          </Link>

          {/* Desktop Nav: Elegant & Spaced */}
          <nav className="hidden lg:flex space-x-12">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `text-[11px] font-black uppercase tracking-[0.2em] transition-colors hover:text-[var(--color-accent)] ${
                    isActive ? 'text-[var(--color-accent)]' : 'text-[var(--color-text-main)]'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </nav>

          {/* Tools */}
          <div className="hidden lg:flex items-center space-x-8">
            <div className="relative">
              <button 
                onClick={() => setShowLang(!showLang)}
                className="flex items-center text-[10px] font-black uppercase tracking-widest text-[var(--color-text-muted)] hover:text-[var(--color-primary)]"
              >
                <Globe className="w-4 h-4 mr-2" />
                {languages.find(l => l.code === i18n.language.split('-')[0])?.name || 'English'}
                <ChevronDown className="w-3 h-3 ml-2" />
              </button>
              
              {showLang && (
                <div className="absolute right-0 mt-4 w-48 bg-white border border-[var(--color-border)] shadow-xl overflow-hidden rounded-[var(--radius-base)]">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => changeLanguage(lang.code)}
                      className="block w-full text-left px-6 py-4 text-[10px] font-black uppercase tracking-widest text-gray-700 hover:bg-[var(--color-bg-alt)] transition-colors"
                    >
                      {lang.name}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <Link to="/contact" className="btn-primary">
              {t('common.inquiry')}
            </Link>
          </div>

          <div className="lg:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-[var(--color-primary)]">
              {isOpen ? <X className="h-8 w-8" /> : <Menu className="h-8 w-8" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="lg:hidden bg-white border-t border-[var(--color-border)]">
          <div className="px-10 py-10 space-y-6">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `block text-sm font-black uppercase tracking-widest ${
                    isActive ? 'text-[var(--color-accent)]' : 'text-[var(--color-text-main)]'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
