import React from 'react';
import { ServicesSection } from '../components/ServicesSection';
import { FlowDifference } from '../components/FlowDifference';
import { InvestmentCTA } from '../components/InvestmentCTA';

interface ServicesPageProps {
  onOpenConsultation: () => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({ onOpenConsultation }) => {
  return (
    <div>
      <div className="bg-flow-dark text-white py-16 sm:py-20 border-b border-flow-border-dark text-center">
        <div className="max-w-4xl mx-auto px-4">
          <span className="text-xs font-extrabold uppercase tracking-widest text-flow-gold block mb-2">
            TAILORED PROPERTY SOLUTIONS
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-4">
            Our Services
          </h1>
          <p className="text-sm sm:text-base text-white/80 font-light max-w-2xl mx-auto">
            Comprehensive real estate consultancy, sales, land sourcing, asset management, and investment advisory for buyers, sellers, and diaspora investors.
          </p>
        </div>
      </div>

      <ServicesSection onOpenConsultation={onOpenConsultation} />
      <FlowDifference />
      <InvestmentCTA onOpenConsultation={onOpenConsultation} />
    </div>
  );
};
