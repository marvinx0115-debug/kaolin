import React from 'react';

const SectionHeading = ({ title, subtitle, centered = true }) => {
  return (
    <div className={`mb-12 ${centered ? 'text-center' : ''}`} data-component="section-heading">
      <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-primary)] mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-[var(--color-text-muted)] text-lg max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
      <div className={`h-1 w-20 bg-[var(--color-accent)] mt-6 ${centered ? 'mx-auto' : ''}`}></div>
    </div>
  );
};

export default SectionHeading;
