import React from 'react';
import { AboutSection } from '../components/AboutSection';
import { MissionSection } from '../components/MissionSection';
import { WhyChooseUs } from '../components/WhyChooseUs';
import { FlowDifference } from '../components/FlowDifference';
import { InvestmentCTA } from '../components/InvestmentCTA';

interface AboutPageProps {
  onOpenConsultation: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onOpenConsultation }) => {
  return (
    <div>
      <div className="bg-flow-dark text-white py-16 sm:py-20 border-b border-flow-border-dark text-center">
        <div className="max-w-4xl mx-auto px-4">
          <span className="text-xs font-bold uppercase tracking-widest text-flow-gold block mb-2">
            CORPORATE PROFILE
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-4">
            About Flow Realtor & Properties Limited
          </h1>
          <p className="text-sm sm:text-base text-white/80 font-light max-w-2xl mx-auto">
            Headquartered in Abuja with operations extending to Lagos, providing trusted property consultancy, verified investment sourcing, and high-yield real estate solutions.
          </p>
        </div>
      </div>

      <AboutSection onOpenConsultation={onOpenConsultation} />
      <MissionSection />
      <WhyChooseUs />
      <FlowDifference />
      <InvestmentCTA onOpenConsultation={onOpenConsultation} />
    </div>
  );
};
