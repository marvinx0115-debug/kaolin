import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Hero = () => {
  const { t } = useTranslation();

  return (
    <section className="relative h-[85vh] min-h-[750px] overflow-hidden flex items-center bg-white" data-component="hero-industrial">
      <div className="max-w-[1440px] mx-auto px-10 relative z-10 w-full grid grid-cols-1 lg:grid-cols-2 gap-20">
        
        {/* Left Side: Bold Corporate Messaging */}
        <div className="flex flex-col justify-center">
          <div className="inline-block bg-[var(--color-primary)] text-white px-6 py-2 text-[10px] font-black uppercase tracking-[0.3em] mb-12">
             Leading Material Precision
          </div>
          
          <h1 className="text-7xl md:text-8xl lg:text-9xl font-bold leading-[0.9] mb-12 tracking-tighter text-[var(--color-primary)]">
            WE DEFINE <br />
            <span className="text-[var(--color-secondary)]">MINERAL</span><br />
            SOLUTIONS
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-500 mb-16 leading-relaxed max-w-xl font-medium">
            Apex Kaolin & Mullite provides high-performance aluminum-silicon materials for the world's most demanding industrial sectors.
          </p>
          
          <div className="flex flex-col sm:flex-row space-y-6 sm:space-y-0 sm:space-x-8">
            <Link to="/products" className="btn-primary flex items-center justify-center">
              Explore Products
              <ArrowRight className="ml-4 w-4 h-4" />
            </Link>
            <Link to="/about" className="btn-outline">
              Company Profile
            </Link>
          </div>
        </div>

        {/* Right Side: Massive Industrial Visual */}
        <div className="relative hidden lg:block overflow-hidden">
          <div className="absolute inset-0 border-l-8 border-b-8 border-[var(--color-primary)] -z-10 translate-x-10 translate-y-10"></div>
          <img 
            src="/assets/images/hero-industrial.png" 
            alt="BASF-style industrial showcase" 
            className="w-full h-full object-cover grayscale brightness-110"
          />
        </div>
      </div>

      {/* Decorative BASF-style Bars */}
      <div className="absolute bottom-0 left-0 w-1/3 h-4 bg-[var(--color-primary)]"></div>
      <div className="absolute bottom-0 left-1/3 w-1/3 h-4 bg-[var(--color-secondary)]"></div>
      <div className="absolute bottom-0 left-2/3 w-1/3 h-4 bg-gray-100"></div>
    </section>
  );
};

export default Hero;
