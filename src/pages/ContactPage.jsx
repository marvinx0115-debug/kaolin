import React, { useState } from 'react';
import SectionHeading from '../components/common/SectionHeading';
import { Send, Mail, Globe, ShieldCheck } from 'lucide-react';

const ContactPage = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    // Cloudflare Workers would handle the actual submission
  };

  return (
    <div className="section-container" data-component="contact-page">
      <SectionHeading 
        title="Technical RFQ & Inquiry"
        subtitle="Request a quote, technical data sheets, or samples for your industrial application. Our specialists respond within 24 hours."
      />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 mt-16">
        {/* Contact Info Sidebar */}
        <div className="lg:col-span-1 space-y-12">
          <div>
            <h3 className="text-xl font-bold mb-6 text-[var(--color-primary)]">Global Trade Support</h3>
            <div className="space-y-6">
              <div className="flex items-start">
                <Mail className="w-6 h-6 text-[var(--color-accent)] mr-4" />
                <div>
                  <div className="font-bold">Sales & Technical</div>
                  <div className="text-sm text-[var(--color-text-muted)]">sales@apex-minerals.com</div>
                </div>
              </div>
              <div className="flex items-start">
                <Globe className="w-6 h-6 text-[var(--color-accent)] mr-4" />
                <div>
                  <div className="font-bold">Logistics & Export</div>
                  <div className="text-sm text-[var(--color-text-muted)]">Global Distribution Hub</div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-[var(--color-bg-base)] p-8 rounded-[var(--radius-base)] border border-[var(--color-border)]">
            <h3 className="font-bold mb-4 flex items-center">
              <ShieldCheck className="w-5 h-5 text-green-600 mr-2" />
              Quality Guarantee
            </h3>
            <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">
              All RFQ responses include a technical certificate of analysis (COA) matching the requested specification.
            </p>
          </div>
        </div>

        {/* RFQ Form */}
        <div className="lg:col-span-2">
          {submitted ? (
            <div className="bg-green-50 border border-green-200 p-12 rounded-[var(--radius-base)] text-center">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Send className="text-white w-8 h-8" />
              </div>
              <h2 className="text-2xl font-bold text-green-800 mb-4">Inquiry Received</h2>
              <p className="text-green-700 max-w-md mx-auto">
                Thank you for your technical inquiry. Our engineering team is reviewing your requirements and will contact you with a formal quote shortly.
              </p>
              <button 
                onClick={() => setSubmitted(false)}
                className="mt-8 text-green-600 font-bold hover:underline"
              >
                Send another inquiry
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-white p-10 rounded-[var(--radius-base)] border border-[var(--color-border)] shadow-sm space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-[var(--color-primary)] mb-2">Company Name</label>
                  <input type="text" required className="w-full px-4 py-3 border border-gray-300 rounded-[var(--radius-base)] focus:ring-2 focus:ring-[var(--color-primary)] outline-none" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-[var(--color-primary)] mb-2">Professional Email</label>
                  <input type="email" required className="w-full px-4 py-3 border border-gray-300 rounded-[var(--radius-base)] focus:ring-2 focus:ring-[var(--color-primary)] outline-none" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-[var(--color-primary)] mb-2">Target Product</label>
                  <select className="w-full px-4 py-3 border border-gray-300 rounded-[var(--radius-base)] focus:ring-2 focus:ring-[var(--color-primary)] outline-none bg-white">
                    <option>Calcined Kaolin Granules</option>
                    <option>Calcined Kaolin Powder</option>
                    <option>Foundry Mullite Sand</option>
                    <option>Mullite Powder</option>
                    <option>Other / Custom</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-bold text-[var(--color-primary)] mb-2">Estimated Volume (Tons)</label>
                  <input type="number" className="w-full px-4 py-3 border border-gray-300 rounded-[var(--radius-base)] focus:ring-2 focus:ring-[var(--color-primary)] outline-none" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-[var(--color-primary)] mb-2">Technical Requirements / Application Details</label>
                <textarea rows="5" required className="w-full px-4 py-3 border border-gray-300 rounded-[var(--radius-base)] focus:ring-2 focus:ring-[var(--color-primary)] outline-none"></textarea>
              </div>

              <div className="flex items-center">
                <input type="checkbox" required className="h-4 w-4 text-[var(--color-accent)] focus:ring-[var(--color-accent)] border-gray-300 rounded" />
                <label className="ml-3 text-sm text-[var(--color-text-muted)]">
                  I accept the <a href="#" className="underline">Technical Service Terms</a> and privacy policy.
                </label>
              </div>

              <button type="submit" className="w-full btn-primary flex items-center justify-center space-x-2 py-4">
                <span>Submit Technical RFQ</span>
                <Send className="w-5 h-5" />
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
