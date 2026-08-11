import React from 'react';
import { PhoneCall, Calendar } from 'lucide-react';
import { companyConfig } from '../data/companyData';

interface InvestmentCTAProps {
  onOpenConsultation: () => void;
}

export const InvestmentCTA: React.FC<InvestmentCTAProps> = ({ onOpenConsultation }) => {
  const scrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.querySelector('#contact');
    if (element) {
      const offsetTop = element.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({ top: offsetTop, behavior: 'smooth' });
    }
  };

  return (
    <section className="relative py-16 sm:py-20 lg:py-24 bg-flow-dark text-white overflow-hidden border-b border-flow-border-dark">
      {/* Background Image */}
      <div className="absolute inset-0 z-0 opacity-40">
        <img
          src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=2000&q=90"
          alt="Luxury Property Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-flow-dark via-flow-dark/80 to-flow-dark/95" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span className="text-xs font-extrabold uppercase tracking-widest text-flow-gold block mb-2 sm:mb-3">
          START YOUR JOURNEY
        </span>

        <h2 className="text-2xl sm:text-3xl lg:text-5xl font-extrabold tracking-tight text-white mb-4 sm:mb-6">
          Let's Find Your Place In Abuja.
        </h2>

        <p className="max-w-2xl mx-auto text-sm sm:text-base lg:text-lg text-white/80 font-light leading-relaxed mb-8 sm:mb-10 px-2">
          Whether you are a first-time buyer, an experienced investor, a property owner, or searching for the ideal rental, Flow Properties is ready to help you navigate your next real-estate move.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6">
          <button
            onClick={onOpenConsultation}
            className="w-full sm:w-auto px-6 sm:px-8 py-3.5 sm:py-4 bg-flow-gold hover:bg-flow-gold-hover text-white text-xs uppercase tracking-widest font-extrabold transition-all shadow-luxury flex items-center justify-center space-x-2"
          >
            <Calendar className="w-4 h-4" />
            <span>Book a Consultation</span>
          </button>

          <a
            href="#contact"
            onClick={scrollToContact}
            className="w-full sm:w-auto px-6 sm:px-8 py-3.5 sm:py-4 border border-white/40 hover:border-flow-gold hover:bg-white/10 text-white text-xs uppercase tracking-widest font-extrabold transition-all flex items-center justify-center space-x-2"
          >
            <PhoneCall className="w-4 h-4" />
            <span>Speak With Us</span>
          </a>
        </div>
      </div>
    </section>
  );
};
