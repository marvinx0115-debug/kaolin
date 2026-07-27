import React from 'react';
import { ArrowRight, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Hero = () => {
  const { t } = useTranslation();

  return (
    <section className="relative h-screen min-h-[800px] overflow-hidden flex items-center bg-[var(--color-bg-base)]" data-component="hero-industrial">
      {/* Background Image with Enhanced Readability Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/assets/images/hero-industrial.png" 
          alt="Industrial background" 
          className="w-full h-full object-cover scale-110 opacity-60"
        />
        {/* User-defined overlay: #596369 (30%) */}
        <div className="absolute inset-0 bg-[#596369]/30"></div>
        {/* Subtle gradient for text protection */}
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-bg-base)] via-transparent to-transparent"></div>
      </div>

      <div className="max-w-[1440px] mx-auto px-8 lg:px-12 relative z-10 w-full">
        <div className="max-w-5xl">
          <div className="flex items-center space-x-4 text-[var(--color-accent)] font-bold mb-10 uppercase tracking-[0.4em] text-[10px]">
            <div className="h-[1px] w-16 bg-[var(--color-accent)]"></div>
            <span>{t('hero.badge')}</span>
          </div>
          
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-black leading-[0.85] mb-12 tracking-tighter text-white drop-shadow-2xl">
            {t('hero.title').split('Refractory')[0]}
            <span className="text-[var(--color-accent)]">Technical</span><br />
            Minerals
          </h1>
          
          <p className="text-xl md:text-2xl text-[#E8ECED] mb-16 leading-relaxed max-w-2xl font-bold drop-shadow-lg">
            {t('hero.subtitle')}
          </p>
          
          <div className="flex flex-col sm:flex-row space-y-6 sm:space-y-0 sm:space-x-8">
            <Link to="/products" className="btn-primary">
              {t('hero.cta1')}
            </Link>
            <Link to="/contact" className="btn-outline !border-[var(--color-text-heavy)] !text-[var(--color-text-heavy)] hover:!bg-[var(--color-text-heavy)] hover:!text-white">
              {t('hero.cta2')}
            </Link>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center space-y-4">
        <span className="text-[10px] uppercase tracking-[0.4em] text-[var(--color-text-muted)] font-bold">Discover More</span>
        <div className="w-[1px] h-16 bg-gradient-to-b from-[var(--color-primary)]/40 to-transparent"></div>
      </div>

      {/* Quick Stats Overlay - Minimalist Editorial Style */}
      <div className="absolute bottom-0 right-0 w-full lg:w-auto bg-white border-l border-t border-[var(--color-border)] hidden lg:block">
        <div className="flex divide-x divide-[var(--color-border)]">
          {[
            { val: "1790°C", label: t('hero.stat1') },
            { val: "48.89%", label: t('hero.stat2') },
            { val: "ISO 9001", label: t('hero.stat3') }
          ].map((stat, i) => (
            <div key={i} className="px-16 py-12 text-center">
              <div className="text-4xl font-black text-[var(--color-text-heavy)] mb-2">{stat.val}</div>
              <div className="text-[10px] uppercase tracking-[0.3em] text-[var(--color-text-muted)] font-bold">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
