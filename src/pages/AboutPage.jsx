import React from 'react';
import SectionHeading from '../components/common/SectionHeading';
import { Factory, Globe, Users, Trophy } from 'lucide-react';

const AboutPage = () => {
  const stats = [
    { label: "Annual Capacity", value: "300,000+ Tons", icon: <Factory className="w-5 h-5" /> },
    { label: "Export Markets", value: "30+ Countries", icon: <Globe className="w-5 h-5" /> },
    { label: "Technical Staff", value: "50+ Specialists", icon: <Users className="w-5 h-5" /> },
    { label: "Years Experience", value: "12+ Years", icon: <Trophy className="w-5 h-5" /> }
  ];

  return (
    <div className="pb-0" data-component="about-page">
      <div className="bg-[var(--color-bg-alt)] border-b border-gray-100">
        <div className="section-container !py-24">
          <SectionHeading 
            title="Industrial Excellence"
            subtitle="Powering the global precision foundry and refractory industries with stable, high-performance mineral solutions."
            centered={false}
          />
        </div>
      </div>

      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div className="space-y-12">
            <h2 className="text-4xl md:text-6xl font-black text-[var(--color-primary)] leading-[0.9] tracking-tighter">
              A GLOBAL HUB FOR <br />
              <span className="text-[var(--color-accent)]">HIGH-ALUMINA</span> <br />
              MATERIALS
            </h2>
            <p className="text-xl text-[var(--color-text-main)] leading-relaxed font-medium">
              Founded with a vision to streamline the global supply of premium aluminum-silicon materials, Apex Kaolin & Mullite has grown into a leading strategic partner for industrial manufacturers worldwide.
            </p>
            <p className="text-base text-[var(--color-text-muted)] leading-relaxed">
              We focus exclusively on the deep processing of coal-series kaolin, transforming natural resources into specialized mullite sand and powder that meet the stringent requirements of high-precision casting and extreme-heat management.
            </p>
            
            <div className="grid grid-cols-2 gap-px bg-gray-100 border border-gray-100">
              {stats.map((stat, i) => (
                <div key={i} className="bg-white p-8 flex flex-col items-center text-center group hover:bg-[var(--color-bg-alt)]">
                  <div className="text-[var(--color-accent)] mb-4">{stat.icon}</div>
                  <div className="text-2xl font-black text-[var(--color-primary)] tracking-tighter">{stat.value}</div>
                  <div className="text-[9px] uppercase tracking-[0.3em] text-[var(--color-text-muted)] font-black mt-2">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative group">
            <div className="absolute inset-0 bg-[var(--color-accent)] translate-x-6 translate-y-6 -z-10"></div>
            <img src="/assets/images/hero-industrial.png" alt="Production Facility" className="w-full grayscale group-hover:grayscale-0" />
          </div>
        </div>
      </div>

      {/* Philosophy Section - High Contrast Grid */}
      <div className="bg-[var(--color-primary)] text-white">
        <div className="section-container !py-0 grid grid-cols-1 lg:grid-cols-3 divide-y lg:divide-y-0 lg:divide-x divide-white/5">
          {[
            { 
              title: "Our Mission", 
              content: "To be the most reliable link in the global refractory supply chain, delivering precision-engineered materials that enhance efficiency." 
            },
            { 
              title: "Quality First", 
              content: "We believe technical data should speak for itself. Every gram is backed by verified chemical analysis from our in-house laboratories." 
            },
            { 
              title: "Global Logistics", 
              content: "With dedicated teams for international trade compliance, we ensure seamless delivery to ports across Europe and the Americas." 
            }
          ].map((item, idx) => (
            <div key={idx} className="py-24 px-12 group hover:bg-white/5">
              <h3 className="text-xs uppercase tracking-[0.4em] text-[var(--color-accent)] font-black mb-8">{item.title}</h3>
              <p className="text-lg leading-relaxed text-slate-300 font-medium">{item.content}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
