import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, ArrowRight } from 'lucide-react';

const ProductCard = ({ product }) => {
  return (
    <div className="card-premium flex flex-col h-full" data-component="product-card">
      <Link to={`/products/${product.id}`} className="block aspect-square w-full overflow-hidden mb-6 bg-gray-50 group">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 grayscale hover:grayscale-0"
        />
      </Link>
      
      <div className="flex-grow">
        <Link to={`/products/${product.id}`} className="group">
          <h3 className="text-xl font-black mb-3 text-[var(--color-primary)] hover:text-[var(--color-accent)] transition-colors leading-tight">
            {product.name}
          </h3>
        </Link>
        <Link to={`/products/${product.id}`} className="block mb-6">
          <p className="text-[var(--color-text-muted)] text-xs leading-relaxed line-clamp-2 uppercase tracking-wide">
            {product.description}
          </p>
        </Link>
        
        <div className="grid grid-cols-2 gap-px bg-[var(--color-border)] border border-[var(--color-border)] mb-6">
          <div className="bg-white p-4">
            <span className="block text-[10px] uppercase tracking-widest text-gray-400 font-bold mb-1">Al₂O₃</span>
            <span className="font-black text-sm text-[var(--color-primary)]">{product.specs.al2o3}</span>
          </div>
          <div className="bg-white p-4">
            <span className="block text-[10px] uppercase tracking-widest text-gray-400 font-bold mb-1">Temp</span>
            <span className="font-black text-sm text-[var(--color-primary)]">{product.specs.refractoriness}</span>
          </div>
        </div>

        {product.specs.mesh_sizes && (
          <div className="mb-6">
            <div className="flex flex-wrap gap-2">
              {product.specs.mesh_sizes.map((size, idx) => (
                <span key={idx} className="inline-block bg-[var(--color-bg-alt)] border border-[var(--color-border)] text-[9px] font-black uppercase tracking-tighter px-2 py-1 text-[var(--color-text-main)]">
                  {size.split(' ')[0]}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
      
      <div className="flex items-center justify-between mt-6 pt-6 border-t border-gray-100">
        <div className="flex items-center text-[9px] font-black uppercase tracking-[0.2em] text-gray-400">
          <ShieldCheck className="w-3 h-3 mr-2 text-[var(--color-accent)]" />
          Certified
        </div>
        <Link 
          to={`/products/${product.id}`} 
          className="text-[var(--color-primary)] font-black flex items-center text-[10px] uppercase tracking-[0.2em] hover:text-[var(--color-accent)] transition-colors"
        >
          View Specs
          <ArrowRight className="w-3 h-3 ml-2" />
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
