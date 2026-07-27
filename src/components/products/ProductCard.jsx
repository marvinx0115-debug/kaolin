import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, ArrowRight } from 'lucide-react';

const ProductCard = ({ product }) => {
  return (
    <div className="bg-white border border-[var(--color-border)] p-10 flex flex-col h-full hover:border-[var(--color-primary)] transition-colors group" data-component="product-card">
      <Link to={`/products/${product.id}`} className="block aspect-square w-full overflow-hidden mb-10 bg-[#F5F7F8]">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
        />
      </Link>
      
      <div className="flex-grow">
        <Link to={`/products/${product.id}`}>
          <h3 className="text-xl font-black mb-4 text-[var(--color-text-heavy)] group-hover:text-[var(--color-primary)] transition-colors leading-tight uppercase tracking-tight">
            {product.name}
          </h3>
        </Link>
        <Link to={`/products/${product.id}`} className="block mb-8">
          <p className="text-xs text-[var(--color-text-main)] leading-relaxed line-clamp-3 font-medium">
            {product.description}
          </p>
        </Link>
        
        <div className="grid grid-cols-2 gap-px bg-[var(--color-border)] border border-[var(--color-border)] mb-10">
          <div className="bg-white p-5">
            <span className="block text-[9px] uppercase tracking-[0.2em] text-[var(--color-text-muted)] font-black mb-2">Al₂O₃ Purity</span>
            <span className="font-black text-sm text-[var(--color-text-heavy)]">{product.specs.al2o3}</span>
          </div>
          <div className="bg-white p-5">
            <span className="block text-[9px] uppercase tracking-[0.2em] text-[var(--color-text-muted)] font-black mb-2">Refractoriness</span>
            <span className="font-black text-sm text-[var(--color-text-heavy)]">{product.specs.refractoriness}</span>
          </div>
        </div>

        {product.specs.mesh_sizes && (
          <div className="mb-10">
            <div className="flex flex-wrap gap-2">
              {product.specs.mesh_sizes.map((size, idx) => (
                <span key={idx} className="inline-block bg-[var(--color-bg-base)] border border-[var(--color-border)] text-[9px] font-black uppercase tracking-tighter px-3 py-1.5 text-[var(--color-text-heavy)]">
                  {size.split(' ')[0]}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
      
      <div className="flex items-center justify-between mt-auto pt-8 border-t border-gray-100">
        <div className="flex items-center text-[9px] font-black uppercase tracking-[0.3em] text-[var(--color-text-muted)]">
          <ShieldCheck className="w-3.5 h-3.5 mr-2 text-[var(--color-primary)]" />
          ISO Standard
        </div>
        <Link 
          to={`/products/${product.id}`} 
          className="text-[var(--color-text-heavy)] font-black flex items-center text-[10px] uppercase tracking-[0.3em] hover:text-[var(--color-primary)] transition-colors"
        >
          View Specs
          <ArrowRight className="w-3.5 h-3.5 ml-2" />
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
