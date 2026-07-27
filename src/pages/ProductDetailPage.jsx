import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { products } from '../data/products';
import { ArrowLeft, ShieldCheck, Download, Mail, CheckCircle2 } from 'lucide-react';
import SectionHeading from '../components/common/SectionHeading';

const ProductDetailPage = () => {
  const { id } = useParams();
  const product = products.find(p => p.id === parseInt(id));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!product) {
    return (
      <div className="section-container text-center py-40 bg-[var(--color-bg-base)]">
        <h2 className="text-2xl font-black mb-4 uppercase">Product Not Found</h2>
        <Link to="/products" className="text-[var(--color-primary)] font-black uppercase tracking-widest text-xs hover:underline flex items-center justify-center">
          <ArrowLeft className="w-4 h-4 mr-2" /> Back to Catalog
        </Link>
      </div>
    );
  }

  return (
    <div className="pb-0 bg-[var(--color-bg-base)]" data-component="product-detail-page">
      <div className="bg-white border-b border-[var(--color-border)]">
        <div className="section-container !py-12">
          <Link to="/products" className="inline-flex items-center text-[10px] font-black uppercase tracking-[0.3em] text-[var(--color-text-muted)] hover:text-[var(--color-primary)] mb-12">
            <ArrowLeft className="w-4 h-4 mr-3" />
            Back to Technical Catalog
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
            {/* Product Visual */}
            <div className="space-y-10">
              <div className="aspect-square bg-[#F5F7F8] border border-[var(--color-border)] overflow-hidden shadow-2xl">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="grid grid-cols-3 gap-6">
                {[ShieldCheck, Download, Mail].map((Icon, idx) => (
                  <div key={idx} className="aspect-square bg-white border border-[var(--color-border)] flex items-center justify-center hover:border-[var(--color-primary)] transition-colors">
                     <Icon className="w-8 h-8 text-[var(--color-primary)] opacity-40" />
                  </div>
                ))}
              </div>
            </div>

            {/* Product Info */}
            <div className="flex flex-col pt-10">
              <div className="mb-6">
                <span className="text-[10px] font-black uppercase tracking-[0.4em] text-[var(--color-primary)] border-b-2 border-[var(--color-primary)] pb-1">
                  {product.category}
                </span>
              </div>
              <h1 className="text-4xl md:text-7xl font-black text-[var(--color-text-heavy)] mb-10 leading-[0.9] tracking-tighter uppercase">
                {product.name}
              </h1>
              <p className="text-xl text-[var(--color-text-main)] leading-relaxed mb-16 font-medium">
                {product.description}
              </p>

              {/* Specs Table - User Defined Grid Style */}
              <div className="border border-[var(--color-border)] mb-16">
                <div className="bg-[var(--color-primary)] px-8 py-5 font-black text-[10px] uppercase tracking-[0.3em] text-white">
                  Technical Specifications
                </div>
                <div className="divide-y divide-[var(--color-border)]">
                  {Object.entries(product.specs).map(([key, value], idx) => (
                    <div key={key} className={`px-8 py-6 flex justify-between items-center text-sm ${idx % 2 === 1 ? 'bg-[#F9FAFB]' : 'bg-white'}`}>
                      <span className="text-[var(--color-text-muted)] font-black uppercase tracking-widest text-[10px]">{key.replace('_', ' ')}</span>
                      <span className="text-[var(--color-text-heavy)] font-black">
                        {Array.isArray(value) ? value.join(' / ') : value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Area */}
              <div className="mt-auto flex flex-col sm:flex-row gap-6">
                <Link to="/contact" className="btn-primary !py-6 flex-grow text-center flex items-center justify-center">
                  <Mail className="w-4 h-4 mr-3" />
                  Request Technical RFQ
                </Link>
                <button className="btn-outline !py-6 px-12 flex items-center justify-center">
                  <Download className="w-4 h-4 mr-3" />
                  Download TDS
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Applications Section */}
      {product.applications && (
        <div className="section-container !py-32">
          <SectionHeading title="Primary Applications" subtitle="Where this material specification is essential for industrial performance." />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-[var(--color-border)] border border-[var(--color-border)] mt-20">
            {product.applications.map((app, idx) => (
              <div key={idx} className="bg-white p-12 text-center group hover:bg-[var(--color-bg-card)] transition-colors">
                <div className="text-[10px] font-black uppercase tracking-[0.3em] text-[var(--color-text-heavy)]">{app}</div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetailPage;
