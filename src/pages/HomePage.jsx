import React from 'react';
import { motion } from 'framer-motion';
import Hero from '../components/hero/Hero';
import Features from '../components/features/Features';
import SectionHeading from '../components/common/SectionHeading';
import ProductCard from '../components/products/ProductCard';
import { products } from '../data/products';
import { Link } from 'react-router-dom';
import { ArrowRight, Microscope, ThermometerSun, ShieldCheck } from 'lucide-react';

const HomePage = () => {
  const featuredProducts = products.slice(0, 3);

  const solutions = [
    {
      title: "Foundry & Casting",
      desc: "Specialized mullite sand and powder for high-precision investment casting.",
      icon: <Microscope className="w-8 h-8 text-[var(--color-accent)]" />,
      image: "/assets/images/foundry-usage.png"
    },
    {
      title: "Refractory Linings",
      desc: "Extreme temperature stability (1790°C) for furnace and kiln applications.",
      icon: <ThermometerSun className="w-8 h-8 text-[var(--color-accent)]" />,
      image: "/assets/images/refractory-heat.png"
    },
    {
      title: "Quality Assurance",
      desc: "Rigorous testing and ISO standards compliance for global delivery.",
      icon: <ShieldCheck className="w-8 h-8 text-[var(--color-accent)]" />,
      image: "/assets/images/lab-quality.png"
    }
  ];

  return (
    <div className="pb-0" data-component="home-page">
      <Hero />
      
      {/* Featured Products - High-End Presentation */}
      <section className="bg-white">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <SectionHeading 
              title="High-Performance Materials"
              subtitle="Precision-engineered aluminum-silicon series for demanding global industrial standards."
            />
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-16">
            {featuredProducts.map((product, idx) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <ProductCard product={product} />
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-20">
            <Link to="/products" className="btn-outline group">
              Explore Technical Catalog
            </Link>
          </div>
        </div>
      </section>

      {/* Solutions / Applications - Refined Editorial Look */}
      <section className="bg-[var(--color-bg-alt)] py-32 md:py-48 overflow-hidden relative border-y border-gray-100">
        {/* Giant Background Text for Atmosphere */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[20vw] font-black text-gray-200/20 pointer-events-none select-none tracking-tighter">
          APPLICATIONS
        </div>

        <div className="section-container relative z-10">
          <SectionHeading 
            title="Industry-Specific Solutions"
            subtitle="Tailored material processing for specialized foundry and refractory sectors."
            centered={false}
          />
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-px bg-gray-200 border border-gray-200 mt-24">
            {solutions.map((sol, index) => (
              <div 
                key={index}
                className="bg-white p-12 flex flex-col"
              >
                <div className="mb-12 flex justify-between items-start">
                  <span className="text-4xl font-black text-[var(--color-accent)]">
                    0{index + 1}
                  </span>
                  <div className="p-4 bg-[var(--color-accent)]/5 rounded-full">
                    {sol.icon}
                  </div>
                </div>

                <div className="aspect-[4/3] w-full overflow-hidden mb-12">
                  <img src={sol.image} alt={sol.title} className="w-full h-full object-cover" />
                </div>

                <h3 className="text-3xl font-black mb-6 leading-tight text-[var(--color-primary)]">
                  {sol.title}
                </h3>
                <p className="text-sm text-[var(--color-text-muted)] mb-10 leading-relaxed font-medium">
                  {sol.desc}
                </p>
                
                <div className="mt-auto">
                  <Link to="/solutions" className="inline-flex items-center text-[10px] font-black uppercase tracking-[0.3em] text-[var(--color-primary)] hover:text-[var(--color-accent)] transition-colors">
                    View Details
                    <ArrowRight className="ml-4 w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Features />
      
      {/* Call to Action - Grand Exit */}
      <section className="relative py-32 md:py-48 overflow-hidden bg-white">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-[var(--color-bg-base)] -skew-x-12 translate-x-1/4 z-0"></div>
        <div className="max-w-[1400px] mx-auto px-6 relative z-10">
          <div className="max-w-4xl">
            <h2 className="text-5xl md:text-8xl font-black text-[var(--color-primary)] mb-12 tracking-tighter leading-none">
              READY TO <br />
              <span className="text-[var(--color-accent)]">OPTIMIZE?</span>
            </h2>
            <p className="text-2xl text-[var(--color-text-muted)] mb-16 leading-relaxed max-w-2xl font-medium">
              Join leading global manufacturers who rely on Apex for stable, high-purity aluminum-silicon supply.
            </p>
            <div className="flex flex-col sm:flex-row space-y-6 sm:space-y-0 sm:space-x-8">
              <Link to="/contact" className="btn-primary !px-12 !py-6 text-sm">
                Request RFQ
              </Link>
              <Link to="/about" className="btn-outline !px-12 !py-6 text-sm">
                Our Story
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
