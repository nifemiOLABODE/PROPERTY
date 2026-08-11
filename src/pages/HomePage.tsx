import React from 'react';
import { Hero } from '../components/Hero';
import { TrustStats } from '../components/TrustStats';
import { FeaturedProperties } from '../components/FeaturedProperties';
import { MissionSection } from '../components/MissionSection';
import { ServicesSection } from '../components/ServicesSection';
import { WhyChooseUs } from '../components/WhyChooseUs';
import { FlowDifference } from '../components/FlowDifference';
import { InvestmentCTA } from '../components/InvestmentCTA';
import { Property } from '../types';

interface HomePageProps {
  onSelectProperty: (property: Property) => void;
  onOpenConsultation: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onSelectProperty, onOpenConsultation }) => {
  return (
    <main>
      <Hero onOpenConsultation={onOpenConsultation} />
      <TrustStats />
      <FeaturedProperties onSelectProperty={onSelectProperty} />
      <MissionSection />
      <ServicesSection onOpenConsultation={onOpenConsultation} />
      <WhyChooseUs />
      <FlowDifference />
      <InvestmentCTA onOpenConsultation={onOpenConsultation} />
    </main>
  );
};
