import React, { useState } from 'react';
import { products, categories } from '../data/products';
import ProductCard from '../components/products/ProductCard';
import SectionHeading from '../components/common/SectionHeading';
import { useTranslation } from 'react-i18next';

const ProductsPage = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const { t } = useTranslation();

  const filteredProducts = activeCategory === 'all' 
    ? products 
    : products.filter(p => p.category.toLowerCase() === activeCategory.toLowerCase());

  return (
    <div className="pb-0 bg-[var(--color-bg-base)]" data-component="products-page">
      <div className="bg-white border-b border-[var(--color-border)]">
        <div className="section-container !py-24">
          <SectionHeading 
            title="Technical Catalog"
            subtitle="Precision-engineered aluminum-silicon materials verified for global industrial standards."
            centered={false}
          />
        </div>
      </div>

      <div className="section-container !py-24">
        {/* Horizontal Category Tabs - Premium Minimalist */}
        <div className="flex flex-wrap gap-px bg-[var(--color-border)] border border-[var(--color-border)] mb-16">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-10 py-5 text-[10px] font-black uppercase tracking-[0.2em] transition-colors flex-grow sm:flex-grow-0 ${
                activeCategory === cat.id 
                  ? 'bg-[var(--color-primary)] text-white shadow-xl' 
                  : 'bg-white text-[var(--color-text-main)] hover:bg-[var(--color-bg-card)]'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        <div className="w-full">
          <div className="flex justify-between items-center mb-16 border-b border-[var(--color-border)] pb-8">
            <div className="text-[10px] font-black uppercase tracking-[0.3em] text-[var(--color-text-muted)]">
              Inventory: <span className="text-[var(--color-text-heavy)]">{filteredProducts.length}</span> Specs Verified
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[var(--color-border)] border border-[var(--color-border)]">
            {filteredProducts.map(product => (
              <div key={product.id} className="bg-white">
                <ProductCard product={product} />
              </div>
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-40 bg-white border border-[var(--color-border)]">
              <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[var(--color-text-muted)]">No specifications found matching your criteria.</p>
            </div>
          )}
          
          {/* Inquiry Banner - High Contrast */}
          <div className="mt-32 bg-[var(--color-primary)] p-16 text-white flex flex-col md:flex-row items-center justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32"></div>
            <div className="relative z-10 text-center md:text-left mb-10 md:mb-0">
              <h3 className="text-3xl font-black mb-4 tracking-tighter text-white uppercase">Need Custom Specs?</h3>
              <p className="text-gray-300 font-bold max-w-md">Our technical team can adjust particle size and purity for your specific industrial application.</p>
            </div>
            <button className="bg-white text-[var(--color-primary)] px-10 py-5 text-[10px] font-black uppercase tracking-widest relative z-10 hover:bg-gray-100 transition-colors">
              Technical Inquiry
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;
