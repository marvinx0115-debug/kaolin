import React from 'react';
import Hero from '../components/hero/Hero';
import Features from '../components/features/Features';
import SectionHeading from '../components/common/SectionHeading';
import ProductCard from '../components/products/ProductCard';
import { products } from '../data/products';
import { Link } from 'react-router-dom';
import { ArrowRight, Microscope, ThermometerSun, ShieldCheck, Box } from 'lucide-react';

const HomePage = () => {
  const featuredProducts = products.slice(0, 3);

  const solutions = [
    {
      title: "Foundry & Casting",
      desc: "Specialized mullite sand and powder for high-precision investment casting.",
      icon: <Box className="w-8 h-8 text-white" />,
      image: "/assets/images/foundry-usage.png"
    },
    {
      title: "Refractory Linings",
      desc: "Extreme temperature stability (1790°C) for furnace and kiln applications.",
      icon: <ThermometerSun className="w-8 h-8 text-white" />,
      image: "/assets/images/refractory-heat.png"
    },
    {
      title: "Science & Lab",
      desc: "Rigorous testing and ISO standards compliance for global delivery.",
      icon: <Microscope className="w-8 h-8 text-white" />,
      image: "/assets/images/lab-quality.png"
    }
  ];

  return (
    <div className="pb-0" data-component="home-page">
      <Hero />
      
      {/* BASF Sector-style Featured Section */}
      <section className="bg-[var(--color-bg-alt)] border-y border-gray-200">
        <div className="section-container">
          <SectionHeading 
            title="Portfolio Highlights"
            subtitle="Explore our key material series engineered for global industrial leadership."
            centered={false}
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-gray-300 border border-gray-300 mt-20">
            {featuredProducts.map((product) => (
              <div key={product.id} className="bg-white">
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions / Applications - Massive Block Grid */}
      <section className="bg-white overflow-hidden relative">
        <div className="max-w-[1440px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-0 border-b border-gray-200">
            {solutions.map((sol, index) => (
              <div 
                key={index}
                className="relative group aspect-[1/1] overflow-hidden flex flex-col border-r border-gray-200 first:border-l"
              >
                {/* Image Background */}
                <div className="absolute inset-0 z-0 bg-gray-900">
                   <img src={sol.image} alt={sol.title} className="w-full h-full object-cover opacity-60 transition-transform duration-1000 group-hover:scale-105" />
                </div>

                {/* Content Overlay */}
                <div className="relative z-10 p-16 h-full flex flex-col justify-end text-white">
                  <div className="w-16 h-1 bg-[var(--color-secondary)] mb-10 transition-all group-hover:w-full"></div>
                  <h3 className="text-4xl font-bold mb-6 leading-none uppercase tracking-tighter">{sol.title}</h3>
                  <p className="text-sm text-gray-300 mb-10 font-medium leading-relaxed max-w-xs group-hover:text-white">
                    {sol.desc}
                  </p>
                  <Link to="/solutions" className="inline-flex items-center text-[10px] font-black uppercase tracking-[0.3em] text-[var(--color-secondary)] group-hover:text-white">
                    Learn More
                    <ArrowRight className="ml-4 w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Features />
      
      {/* Global Call to Action - Bold BASF Blue Block */}
      <section className="bg-[var(--color-primary)] py-40">
        <div className="max-w-[1440px] mx-auto px-10 flex flex-col lg:flex-row items-center justify-between">
          <div className="max-w-4xl text-center lg:text-left mb-20 lg:mb-0">
            <h2 className="text-5xl md:text-8xl font-bold text-white mb-10 tracking-tighter leading-[0.9]">
              WE CREATE <br />
              <span className="text-[var(--color-secondary)] uppercase">RELIABILITY.</span>
            </h2>
            <p className="text-2xl text-gray-300 leading-relaxed max-w-2xl font-medium">
              Join leading global manufacturers who rely on Apex for stable, high-purity aluminum-silicon supply.
            </p>
          </div>
          <div className="flex flex-col space-y-6 w-full lg:w-auto">
            <Link to="/contact" className="bg-white text-[var(--color-primary)] px-16 py-6 text-xs font-black uppercase tracking-widest text-center hover:bg-[var(--color-secondary)] hover:text-white transition-all">
              Request Technical RFQ
            </Link>
            <Link to="/about" className="border-2 border-white text-white px-16 py-6 text-xs font-black uppercase tracking-widest text-center hover:bg-white/10 transition-all">
               Global Footprint
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
