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
      <div className="section-container text-center py-40">
        <h2 className="text-2xl font-bold mb-4">Product Not Found</h2>
        <Link to="/products" className="text-[var(--color-primary)] hover:underline flex items-center justify-center">
          <ArrowLeft className="w-4 h-4 mr-2" /> Back to Catalog
        </Link>
      </div>
    );
  }

  return (
    <div className="section-container" data-component="product-detail-page">
      <Link to="/products" className="inline-flex items-center text-sm font-medium text-[var(--color-text-muted)] hover:text-[var(--color-primary)] mb-8 group">
        <ArrowLeft className="w-4 h-4 mr-2 transition-transform group-hover:-translate-x-1" />
        Back to Technical Catalog
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Product Visual */}
        <div className="space-y-6">
          <div className="aspect-square bg-white border border-[var(--color-border)] rounded-[var(--radius-base)] overflow-hidden shadow-sm">
            <img 
              src={product.image} 
              alt={product.name} 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="grid grid-cols-3 gap-4">
            <div className="aspect-square bg-[var(--color-bg-base)] rounded-[var(--radius-base)] border border-[var(--color-border)] flex items-center justify-center">
               <ShieldCheck className="w-8 h-8 text-[var(--color-primary)] opacity-20" />
            </div>
            <div className="aspect-square bg-[var(--color-bg-base)] rounded-[var(--radius-base)] border border-[var(--color-border)] flex items-center justify-center">
               <Download className="w-8 h-8 text-[var(--color-primary)] opacity-20" />
            </div>
            <div className="aspect-square bg-[var(--color-bg-base)] rounded-[var(--radius-base)] border border-[var(--color-border)] flex items-center justify-center">
               <Mail className="w-8 h-8 text-[var(--color-primary)] opacity-20" />
            </div>
          </div>
        </div>

        {/* Product Info */}
        <div className="flex flex-col">
          <div className="mb-2">
            <span className="text-xs font-bold uppercase tracking-widest text-[var(--color-accent)] bg-[var(--color-accent)]/10 px-3 py-1 rounded-full">
              {product.category} Series
            </span>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-[var(--color-primary)] mb-6 leading-tight">
            {product.name}
          </h1>
          <p className="text-lg text-[var(--color-text-main)] leading-relaxed mb-10">
            {product.description}
          </p>

          {/* Specs Table */}
          <div className="bg-white border border-[var(--color-border)] rounded-[var(--radius-base)] overflow-hidden mb-10 shadow-sm">
            <div className="bg-[var(--color-bg-base)] px-6 py-3 border-b border-[var(--color-border)] font-bold text-sm text-[var(--color-primary)]">
              Technical Specifications
            </div>
            <div className="divide-y divide-[var(--color-border)]">
              {Object.entries(product.specs).map(([key, value]) => (
                <div key={key} className="px-6 py-4 flex justify-between items-center text-sm">
                  <span className="text-[var(--color-text-muted)] font-medium capitalize">{key.replace('_', ' ')}</span>
                  <span className="text-[var(--color-text-main)] font-bold">
                    {Array.isArray(value) ? value.join(' / ') : value}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Features List */}
          {product.features && (
            <div className="mb-10">
              <h3 className="font-bold text-[var(--color-primary)] mb-4">Key Technical Features</h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-6">
                {product.features.map((feat, idx) => (
                  <li key={idx} className="flex items-start text-sm text-[var(--color-text-main)]">
                    <CheckCircle2 className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    {feat}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Action Area */}
          <div className="mt-auto pt-8 border-t border-[var(--color-border)] flex flex-col sm:flex-row gap-4">
            <Link to="/contact" className="btn-primary flex-grow text-center flex items-center justify-center">
              <Mail className="w-5 h-5 mr-2" />
              Request Technical RFQ
            </Link>
            <button className="border-2 border-[var(--color-primary)] text-[var(--color-primary)] font-bold px-8 py-3 rounded-[var(--radius-base)] hover:bg-[var(--color-primary)]/5 transition-colors flex items-center justify-center">
              <Download className="w-5 h-5 mr-2" />
              Download TDS
            </button>
          </div>
        </div>
      </div>

      {/* Applications Section */}
      {product.applications && (
        <div className="mt-32 pt-20 border-t border-[var(--color-border)]">
          <SectionHeading title="Primary Applications" subtitle="Where this material specification is essential for industrial performance." />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
            {product.applications.map((app, idx) => (
              <div key={idx} className="bg-white p-6 rounded-[var(--radius-base)] border border-[var(--color-border)] text-center shadow-sm hover:shadow-md transition-shadow">
                <div className="text-xs font-bold text-[var(--color-primary)]">{app}</div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetailPage;
