import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, ArrowRight } from 'lucide-react';

interface HeroProps {
  onOpenConsultation: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenConsultation }) => {
  return (
    <section id="hero" className="relative min-h-[85vh] sm:min-h-[90vh] flex items-center justify-center py-16 sm:py-24 overflow-hidden bg-flow-dark text-white">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=2000&q=90"
          alt="Luxury Property - Flow Properties"
          className="w-full h-full object-cover object-center scale-105 opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-flow-dark via-flow-dark/60 to-flow-dark/80" />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center my-auto">
        {/* Main Headline */}
        <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight mb-4 sm:mb-6">
          Find Property. Build Wealth.<br className="hidden sm:inline" />
          <span className="font-extrabold text-flow-gold"> Invest With Confidence.</span>
        </h1>

        {/* Supporting Paragraph */}
        <p className="max-w-3xl mx-auto text-sm sm:text-base lg:text-lg text-white/80 leading-relaxed font-light mb-8 sm:mb-10 px-2">
          Flow Properties connects buyers, sellers, and investors with premium residential and commercial properties across Abuja and Lagos, providing trusted guidance and seamless real-estate solutions.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6">
          <Link
            to="/properties"
            className="w-full sm:w-auto px-6 sm:px-8 py-3.5 sm:py-4 bg-flow-gold hover:bg-flow-gold-hover text-white text-xs uppercase tracking-widest font-extrabold transition-all shadow-luxury flex items-center justify-center space-x-3 group"
          >
            <span>Explore Properties</span>
            <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
          </Link>

          <button
            onClick={onOpenConsultation}
            className="w-full sm:w-auto px-6 sm:px-8 py-3.5 sm:py-4 border border-white/40 hover:border-flow-gold hover:bg-white/10 text-white text-xs uppercase tracking-widest font-extrabold transition-all flex items-center justify-center"
          >
            Book a Consultation
          </button>
        </div>
      </div>

      {/* Subtle Scroll Indicator */}
      <div className="absolute bottom-4 sm:bottom-6 left-1/2 transform -translate-x-1/2 z-10 flex flex-col items-center opacity-70 hover:opacity-100 transition-opacity">
        <span className="mb-1.5 text-[10px] text-white/60 tracking-widest uppercase">Scroll</span>
        <ChevronDown className="w-4 h-4 animate-bounce text-flow-gold" />
      </div>
    </section>
  );
};
