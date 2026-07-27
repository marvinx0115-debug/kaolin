import React from 'react';
import { ArrowRight, Leaf } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Hero = () => {
  const { t } = useTranslation();

  return (
    <section className="relative h-[90vh] min-h-[800px] overflow-hidden flex items-center bg-[var(--color-bg-base)]" data-component="hero-industrial">
      
      {/* Visual Side (Earthy Tone) */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/assets/images/hero-industrial.png" 
          alt="Natural mineral processing" 
          className="w-full h-full object-cover grayscale opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-bg-base)] via-[var(--color-bg-base)]/80 to-transparent"></div>
      </div>

      <div className="max-w-[1440px] mx-auto px-10 relative z-10 w-full">
        <div className="max-w-4xl">
          <div className="flex items-center space-x-3 text-[var(--color-accent)] font-bold mb-10 uppercase tracking-[0.4em] text-[9px]">
            <Leaf className="w-4 h-4" />
            <span>Preserving Natural Excellence</span>
          </div>
          
          <h1 className="text-7xl md:text-9xl font-medium leading-[0.85] mb-12 tracking-tighter text-[var(--color-primary)]">
            FROM EARTH <br />
            <span className="text-[var(--color-accent-warm)]">TO INDUSTRY</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-[var(--color-text-main)] mb-16 leading-relaxed max-w-2xl font-medium opacity-80">
            Apex Kaolin & Mullite bridges the gap between premium natural mineral resources and high-end industrial engineering.
          </p>
          
          <div className="flex flex-col sm:flex-row space-y-6 sm:space-y-0 sm:space-x-8">
            <Link to="/products" className="btn-primary">
               View Heritage Collection
            </Link>
            <Link to="/about" className="btn-outline">
               Our Geologic Origin
            </Link>
          </div>
        </div>
      </div>

      {/* Decorative Natural Pattern Overlay (Simulated) */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-[var(--color-primary)] clip-path-natural-slant hidden lg:block opacity-[0.02] pointer-events-none"></div>

      {/* Quick Stats - Earthy Edition */}
      <div className="absolute bottom-0 right-0 bg-[var(--color-primary)] text-white hidden lg:block">
        <div className="flex">
          {[
            { val: "1790°C", label: "Pure Stability" },
            { val: "48.89%", label: "Alumina Grade" },
            { val: "Zero", label: "Synthetic Additives" }
          ].map((stat, i) => (
            <div key={i} className="px-16 py-12 border-l border-white/10 text-center">
              <div className="text-4xl font-medium tracking-tighter mb-2">{stat.val}</div>
              <div className="text-[9px] uppercase tracking-[0.3em] text-white/40 font-black">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
