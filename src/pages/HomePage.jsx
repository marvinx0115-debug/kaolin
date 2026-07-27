import React from 'react';
import Hero from '../components/hero/Hero';
import Features from '../components/features/Features';
import SectionHeading from '../components/common/SectionHeading';
import ProductCard from '../components/products/ProductCard';
import { products } from '../data/products';
import { Link } from 'react-router-dom';
import { ArrowRight, Mountain, Flame, Shovel } from 'lucide-react';

const HomePage = () => {
  const featuredProducts = products.slice(0, 3);

  const solutions = [
    {
      title: "Geologic Precision",
      desc: "Harnessing deep-earth coal-series kaolin for specialized industrial fillers.",
      icon: <Shovel className="w-8 h-8 text-[var(--color-accent)]" />,
      image: "/assets/images/foundry-usage.png"
    },
    {
      title: "Thermal Legacy",
      desc: "Extreme temperature stability (1790°C) rooted in natural mineral purity.",
      icon: <Flame className="w-8 h-8 text-[var(--color-accent)]" />,
      image: "/assets/images/refractory-heat.png"
    },
    {
      title: "Technical Heritage",
      desc: "Preserving mineral integrity through advanced R&D and ISO standards.",
      icon: <Mountain className="w-8 h-8 text-[var(--color-accent)]" />,
      image: "/assets/images/lab-quality.png"
    }
  ];

  return (
    <div className="pb-0 bg-[var(--color-bg-base)]" data-component="home-page">
      <Hero />
      
      {/* Featured Collection - Gallery Style */}
      <section className="bg-white py-32 border-b border-[var(--color-border)]">
        <div className="section-container !py-0">
          <SectionHeading 
            title="The Heritage Collection"
            subtitle="Explore our selection of high-purity aluminum-silicon materials, directly sourced and precisely refined."
            centered={false}
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[var(--color-border)] border border-[var(--color-border)] mt-24">
            {featuredProducts.map((product) => (
              <div key={product.id} className="bg-white">
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions / Applications - Natural Palette Grid */}
      <section className="bg-[var(--color-bg-alt)] py-32 md:py-48 overflow-hidden relative border-b border-[var(--color-border)]">
        <div className="section-container !py-0 relative z-10">
          <SectionHeading 
            title="Sourced for Industry"
            subtitle="Tailored material processing that honors the natural properties of raw minerals."
            centered={false}
          />
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mt-24">
            {solutions.map((sol, index) => (
              <div 
                key={index}
                className="bg-white p-12 border border-[var(--color-border)] shadow-sm flex flex-col rounded-[var(--radius-base)]"
              >
                <div className="mb-10 flex justify-between items-center">
                   <div className="p-4 bg-[var(--color-bg-alt)] rounded-full text-[var(--color-accent)]">
                    {sol.icon}
                  </div>
                  <span className="text-4xl font-serif italic text-[var(--color-border)]">
                    0{index + 1}
                  </span>
                </div>

                <div className="aspect-video w-full overflow-hidden mb-10 rounded-[var(--radius-base)]">
                  <img src={sol.image} alt={sol.title} className="w-full h-full object-cover sepia-[0.3] hover:sepia-0 transition-all duration-700" />
                </div>

                <h3 className="text-3xl font-medium mb-6 leading-tight text-[var(--color-primary)]">
                  {sol.title}
                </h3>
                <p className="text-sm text-[var(--color-text-muted)] mb-10 leading-relaxed font-medium">
                  {sol.desc}
                </p>
                
                <div className="mt-auto">
                  <Link to="/solutions" className="inline-flex items-center text-[10px] font-black uppercase tracking-[0.3em] text-[var(--color-accent)] hover:text-[var(--color-accent-warm)]">
                    Explore Solutions
                    <ArrowRight className="ml-4 w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Features />
      
      {/* Call to Action - Earthy & Bold */}
      <section className="bg-[var(--color-primary)] py-40 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-10">
           <img src="/assets/images/hero-industrial.png" alt="Earthy background" className="w-full h-full object-cover" />
        </div>
        <div className="max-w-[1440px] mx-auto px-10 relative z-10 text-center lg:text-left flex flex-col lg:flex-row items-center justify-between">
          <div className="max-w-3xl mb-20 lg:mb-0">
            <h2 className="text-5xl md:text-8xl font-medium text-white mb-10 tracking-tighter leading-[0.9]">
              NATURAL ORIGIN. <br />
              <span className="text-[var(--color-accent-warm)] uppercase">INDUSTRIAL GRADE.</span>
            </h2>
            <p className="text-2xl text-stone-400 leading-relaxed max-w-2xl font-medium">
              Secure your supply of high-purity aluminum-silicon materials from stable geologic deposits.
            </p>
          </div>
          <div className="flex flex-col space-y-6 w-full lg:w-auto">
            <Link to="/contact" className="bg-[var(--color-accent)] text-white px-16 py-6 text-xs font-black uppercase tracking-widest text-center hover:bg-[var(--color-accent-warm)] transition-all">
              Initiate RFQ
            </Link>
            <Link to="/about" className="border border-white/20 text-white px-16 py-6 text-xs font-black uppercase tracking-widest text-center hover:bg-white/5 transition-all">
               Our Heritage
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
