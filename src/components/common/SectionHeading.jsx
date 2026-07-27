import React from 'react';

const SectionHeading = ({ title, subtitle, centered = true }) => {
  return (
    <div className={`mb-12 ${centered ? 'text-center' : ''}`} data-component="section-heading">
      <h2 className="text-3xl md:text-5xl font-black text-[var(--color-text-heavy)] mb-6 uppercase tracking-tighter">
        {title}
      </h2>
      {subtitle && (
        <p className="text-[var(--color-text-main)] text-lg max-w-2xl font-medium leading-relaxed">
          {subtitle}
        </p>
      )}
      <div className={`h-[1px] w-24 bg-[var(--color-primary)] mt-10 ${centered ? 'mx-auto' : ''}`}></div>
    </div>
  );
};

export default SectionHeading;
