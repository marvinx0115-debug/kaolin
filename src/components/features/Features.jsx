import React from 'react';
import { ShieldCheck, Factory, Award, FlaskConical } from 'lucide-react';
import SectionHeading from '../common/SectionHeading';

const Features = () => {
  const trustItems = [
    {
      icon: <Factory className="w-10 h-10 text-[var(--color-accent)]" />,
      title: "Massive Production Scale",
      description: "Equipped with state-of-the-art calcination lines ensuring stable supply for global volume orders."
    },
    {
      icon: <FlaskConical className="w-10 h-10 text-[var(--color-accent)]" />,
      title: "Advanced R&D Lab",
      description: "Rigorous testing of chemical composition and physical properties to ensure batch-to-batch consistency."
    },
    {
      icon: <ShieldCheck className="w-10 h-10 text-[var(--color-accent)]" />,
      title: "ISO Standard Compliance",
      description: "Manufacturing processes certified to ISO 9001 and ISO 14001 international quality standards."
    },
    {
      icon: <Award className="w-10 h-10 text-[var(--color-accent)]" />,
      title: "Technical Expertise",
      description: "Deep industry knowledge in aluminum-silicon materials for precision foundry and heat management."
    }
  ];

  return (
    <section className="bg-white py-24" data-component="features-section">
      <div className="max-w-7xl mx-auto px-4">
        <SectionHeading 
          title="Engineered for Performance"
          subtitle="We combine natural mineral resources with precision processing technology to deliver world-class refractory materials."
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {trustItems.map((item, index) => (
            <div key={index} className="flex flex-col items-center text-center p-6 rounded-[var(--radius-base)] border border-transparent hover:border-[var(--color-border)] hover:bg-[var(--color-bg-base)] transition-all">
              <div className="mb-6 bg-[var(--color-bg-base)] p-4 rounded-full">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-[var(--color-primary)]">
                {item.title}
              </h3>
              <p className="text-[var(--color-text-muted)] text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
