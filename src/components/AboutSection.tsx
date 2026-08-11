import React from 'react';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import { companyConfig } from '../data/companyData';

interface AboutSectionProps {
  onOpenConsultation: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenConsultation }) => {
  const valuePoints = [
    "Abuja & Lagos Expertise",
    "Tailored Property Solutions",
    "Integrity & Transparency",
    "Seamless Client Experience"
  ];

  return (
    <section id="about" className="py-16 sm:py-20 lg:py-24 bg-white border-b border-flow-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-16 items-center">

          {/* Left Column: Official CAC Certificate Document */}
          <div className="lg:col-span-6 relative order-2 lg:order-1">
            <div className="relative w-full max-w-md mx-auto lg:max-w-none bg-white p-3 sm:p-5 border border-flow-border shadow-elevated">
              <img
                src="/cac-certificate.jpg"
                alt="FLOW REALTOR AND PROPERTY LIMITED - Certificate of Incorporation - RC 9618247"
                className="w-full h-auto object-contain block border border-flow-border/40"
              />
            </div>

            {/* Overlay Badge */}
            <div className="absolute -bottom-4 -right-2 sm:-bottom-6 sm:-right-6 hidden sm:block bg-flow-dark text-white p-4 sm:p-6 border border-flow-gold/40 shadow-luxury max-w-[240px] sm:max-w-xs z-10">
              <p className="text-sm sm:text-base font-extrabold text-flow-gold mb-1">
                {companyConfig.legalName}
              </p>
              <p className="text-[10px] sm:text-xs text-white/70">
                {companyConfig.rcNumber} — CAC Registered
              </p>
            </div>
          </div>

          {/* Right Column: Copy Content */}
          <div className="lg:col-span-6 order-1 lg:order-2">
            <span className="text-xs font-extrabold uppercase tracking-widest text-flow-gold block mb-2">
              ABOUT FLOW PROPERTIES
            </span>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-extrabold text-flow-dark tracking-tight leading-tight mb-6">
              Real Estate Decisions Backed By Knowledge.
            </h2>

            <div className="space-y-4 text-sm sm:text-base text-flow-muted leading-relaxed font-light mb-8">
              <p>
                Welcome to Flow Properties, your trusted partner in navigating the vibrant real estate landscape of Abuja and Lagos. Founded on the principles of integrity, transparency, and a deep understanding of the local market, Flow Properties is dedicated to helping individuals and businesses find their perfect space in Nigeria's capital city and financial hub.
              </p>
              <p>
                Whether clients are looking for a dream family home, a high-yield investment property, or a strategic commercial space, Flow Properties works to make the process as seamless and rewarding as possible.
              </p>
              <p>
                Managed by experienced property consultants, Flow Properties leverages deep market insight and modern digital marketing to provide seamless, transparent, and trusted real estate transactions for both local clients across Nigeria and international clients in the diaspora.
              </p>
            </div>

            {/* 4 Value Points */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8 pt-4 border-t border-flow-border">
              {valuePoints.map((point, idx) => (
                <div key={idx} className="flex items-center space-x-2.5 text-xs sm:text-sm font-bold text-flow-dark">
                  <CheckCircle2 className="w-4 h-4 text-flow-gold flex-shrink-0" />
                  <span>{point}</span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div>
              <button
                onClick={onOpenConsultation}
                className="inline-flex items-center space-x-3 px-6 sm:px-8 py-3.5 sm:py-4 bg-flow-gold hover:bg-flow-gold-hover text-white text-xs uppercase font-extrabold tracking-widest transition-all shadow-subtle"
              >
                <span>Discover Our Story</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
