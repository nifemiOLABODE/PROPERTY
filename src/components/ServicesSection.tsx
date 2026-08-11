import React from 'react';
import { Home, TrendingUp, Search, MapPin, ShieldCheck, Compass, ArrowRight } from 'lucide-react';
import { companyServices } from '../data/companyData';

interface ServicesSectionProps {
  onOpenConsultation: () => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onOpenConsultation }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Home':
        return <Home className="w-5 h-5 sm:w-6 sm:h-6 text-flow-gold" />;
      case 'TrendingUp':
        return <TrendingUp className="w-5 h-5 sm:w-6 sm:h-6 text-flow-gold" />;
      case 'Search':
        return <Search className="w-5 h-5 sm:w-6 sm:h-6 text-flow-gold" />;
      case 'MapPin':
        return <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-flow-gold" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-5 h-5 sm:w-6 sm:h-6 text-flow-gold" />;
      default:
        return <Compass className="w-5 h-5 sm:w-6 sm:h-6 text-flow-gold" />;
    }
  };

  return (
    <section id="services" className="py-16 sm:py-20 lg:py-24 bg-flow-sand/60 border-b border-flow-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
          <span className="text-xs font-extrabold uppercase tracking-widest text-flow-gold block mb-2">
            OUR EXPERTISE
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-extrabold text-flow-dark tracking-tight mb-3 sm:mb-4">
            What We Do
          </h2>
          <p className="text-sm sm:text-base text-flow-muted font-light leading-relaxed px-2">
            From finding the right property to navigating the complexities of ownership and investment, Flow Properties provides tailored real-estate solutions designed around each client's goals.
          </p>
        </div>

        {/* 6 Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-8">
          {companyServices.map((service) => (
            <div
              key={service.id}
              className="group bg-white p-6 sm:p-8 border border-flow-border hover:border-flow-gold transition-all duration-300 shadow-subtle hover:shadow-elevated flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4 sm:mb-6">
                  <div className="p-2.5 sm:p-3 bg-flow-sand rounded-none group-hover:bg-flow-gold/10 transition-colors">
                    {getIcon(service.iconName)}
                  </div>
                  <span className="text-xl sm:text-2xl font-extrabold text-flow-border group-hover:text-flow-gold transition-colors">
                    {service.number}
                  </span>
                </div>

                <h3 className="text-lg sm:text-xl font-extrabold text-flow-dark mb-2 sm:mb-3 group-hover:text-flow-gold transition-colors">
                  {service.title}
                </h3>

                <p className="text-xs sm:text-sm text-flow-muted leading-relaxed font-light mb-4 sm:mb-6">
                  {service.description}
                </p>
              </div>

              <div>
                <button
                  onClick={onOpenConsultation}
                  className="inline-flex items-center text-xs font-bold uppercase tracking-wider text-flow-dark group-hover:text-flow-gold transition-colors"
                >
                  <span className="mr-2">Inquire Service</span>
                  <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
