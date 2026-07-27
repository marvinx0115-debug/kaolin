import React from 'react';
import SectionHeading from '../components/common/SectionHeading';
import { ShieldCheck, ClipboardCheck, Microscope, FlaskConical, Globe } from 'lucide-react';

const QualityPage = () => {
  return (
    <div className="section-container" data-component="quality-page">
      <SectionHeading 
        title="Quality & Lab Control"
        subtitle="Global consistency starts in our laboratory. We maintain ISO-certified quality management across all calcination and processing phases."
      />

      {/* ISO Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mt-16 mb-32">
        <div className="order-2 md:order-1">
          <img 
            src="assets/images/lab-quality.png" 
            alt="Quality Lab" 
            className="rounded-[var(--radius-base)] shadow-lg"
          />
        </div>
        <div className="order-1 md:order-2">
          <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-blue-50 text-[var(--color-primary)] text-sm font-bold mb-6">
            <Globe className="w-4 h-4 mr-2" />
            Global Compliance
          </div>
          <h2 className="text-3xl font-bold mb-6 text-[var(--color-primary)]">Rigorous Testing Protocol</h2>
          <p className="text-[var(--color-text-main)] mb-8 leading-relaxed">
            Every batch of Apex Kaolin and Mullite undergoes a multi-stage testing sequence. Our lab specialists verify chemical purity via XRF analysis and physical properties through advanced laser particle size distribution (PSD) tests.
          </p>
          <div className="space-y-6">
            <div className="flex items-start">
              <div className="p-2 bg-green-50 rounded-lg mr-4 mt-1">
                <ShieldCheck className="w-5 h-5 text-green-600" />
              </div>
              <div>
                <h4 className="font-bold text-[var(--color-primary)]">ISO 9001:2015</h4>
                <p className="text-sm text-[var(--color-text-muted)]">Standardized quality management systems for production consistency.</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="p-2 bg-green-50 rounded-lg mr-4 mt-1">
                <ShieldCheck className="w-5 h-5 text-green-600" />
              </div>
              <div>
                <h4 className="font-bold text-[var(--color-primary)]">ISO 14001:2015</h4>
                <p className="text-sm text-[var(--color-text-muted)]">Environmental management commitments in our processing facilities.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Lab Highlights */}
      <div className="bg-white rounded-[var(--radius-base)] border border-[var(--color-border)] p-12 mb-32 shadow-sm">
        <h3 className="text-2xl font-bold text-center mb-12">Laboratory Capabilities</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          <div className="text-center">
            <ClipboardCheck className="w-10 h-10 mx-auto mb-6 text-[var(--color-accent)]" />
            <h4 className="font-bold mb-3">Chemical Analysis</h4>
            <p className="text-sm text-[var(--color-text-muted)]">Precision XRF/ICP testing for Al₂O₃, Fe₂O₃, and TiO₂ content levels.</p>
          </div>
          <div className="text-center">
            <Microscope className="w-10 h-10 mx-auto mb-6 text-[var(--color-accent)]" />
            <h4 className="font-bold mb-3">Mineralogical Check</h4>
            <p className="text-sm text-[var(--color-text-muted)]">XRD analysis to confirm stable mullite phase and calcination completion.</p>
          </div>
          <div className="text-center">
            <FlaskConical className="w-10 h-10 mx-auto mb-6 text-[var(--color-accent)]" />
            <h4 className="font-bold mb-3">Physical Testing</h4>
            <p className="text-sm text-[var(--color-text-muted)]">True density, apparent porosity, and spalling resistance verification.</p>
          </div>
        </div>
      </div>
      
      {/* Cert Badges */}
      <div className="flex justify-center space-x-12 opacity-80">
        <img src="assets/images/iso-badges.png" alt="ISO Certification" className="h-24 object-contain" />
      </div>
    </div>
  );
};

export default QualityPage;
