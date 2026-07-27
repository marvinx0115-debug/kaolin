import React from 'react';
import SectionHeading from '../components/common/SectionHeading';
import { Microscope, ThermometerSun, ShieldCheck, Layers } from 'lucide-react';

const SolutionsPage = () => {
  const industries = [
    {
      title: "Precision Foundry & Casting",
      icon: <Microscope className="w-12 h-12 text-[var(--color-accent)]" />,
      desc: "Our mullite sand and powder are engineered for high-precision investment casting. With low thermal expansion and high shell strength, we enable the creation of complex, high-tolerance metal components.",
      features: ["Optimized Particle Distribution", "High Shell Permeability", "Reduced Casting Defects", "Superior Surface Finish"]
    },
    {
      title: "High-Temperature Refractories",
      icon: <ThermometerSun className="w-12 h-12 text-[var(--color-accent)]" />,
      desc: "Designed for environments up to 1790°C, our calcined kaolin and mullite are core components for furnace linings, kiln furniture, and monolithic refractory materials. We provide stability under extreme thermal cycling.",
      features: ["1790°C Refractoriness", "Excellent Spalling Resistance", "High Chemical Purity", "Stable Phase Transformation"]
    },
    {
      title: "Advanced Ceramics & Glass",
      icon: <Layers className="w-12 h-12 text-[var(--color-accent)]" />,
      desc: "Supplying high-purity raw materials for the production of kiln furniture, sanitary ware, and industrial glass. Our materials ensure structural integrity and consistent thermal performance.",
      features: ["Controlled Alumina Content", "Low Iron & Titania", "Uniform Whiteness", "Precise Mesh Specifications"]
    }
  ];

  return (
    <div className="section-container" data-component="solutions-page">
      <SectionHeading 
        title="Industrial Applications"
        subtitle="Custom material solutions tailored for the world's most demanding heat management and casting challenges."
      />

      <div className="space-y-24 mt-20">
        {industries.map((ind, index) => (
          <div key={index} className={`flex flex-col lg:flex-row items-center gap-16 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
            <div className="lg:w-1/2">
              <div className="mb-6">{ind.icon}</div>
              <h3 className="text-3xl font-bold mb-6 text-[var(--color-primary)]">{ind.title}</h3>
              <p className="text-[var(--color-text-main)] text-lg leading-relaxed mb-8">
                {ind.desc}
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {ind.features.map((feat, i) => (
                  <li key={i} className="flex items-center text-sm font-medium text-[var(--color-text-muted)]">
                    <ShieldCheck className="w-5 h-5 mr-3 text-green-600" />
                    {feat}
                  </li>
                ))}
              </ul>
            </div>
            <div className="lg:w-1/2 w-full aspect-video bg-gray-200 rounded-[var(--radius-base)] overflow-hidden shadow-xl">
               <img 
                 src={`/assets/images/${index === 0 ? 'foundry-usage.png' : index === 1 ? 'refractory-heat.png' : 'hero-industrial.png'}`} 
                 alt={ind.title} 
                 className="w-full h-full object-cover"
               />
            </div>
          </div>
        ))}
      </div>
      
      {/* Support Section */}
      <div className="mt-32 p-12 bg-[var(--color-bg-base)] rounded-[var(--radius-base)] border border-[var(--color-border)] text-center">
        <h3 className="text-2xl font-bold mb-4">Technical Consultancy</h3>
        <p className="max-w-2xl mx-auto text-[var(--color-text-muted)] mb-8">
          Not sure which specification fits your process? Our application engineers are available to review your technical requirements and recommend the optimal material matrix.
        </p>
        <button className="btn-primary">Talk to an Engineer</button>
      </div>
    </div>
  );
};

export default SolutionsPage;
