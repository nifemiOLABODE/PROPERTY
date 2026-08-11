import React from 'react';
import { whyChoosePoints } from '../data/companyData';

export const WhyChooseUs: React.FC = () => {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-white border-b border-flow-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="max-w-2xl mb-10 sm:mb-16">
          <span className="text-xs font-extrabold uppercase tracking-widest text-flow-gold block mb-2">
            OUR ADVANTAGE
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-extrabold text-flow-dark tracking-tight">
            Why Choose Flow Properties?
          </h2>
        </div>

        {/* Numbered Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 lg:gap-x-12 gap-y-8 sm:gap-y-12">
          {whyChoosePoints.map((point) => (
            <div key={point.number} className="flex items-start space-x-4 sm:space-x-6 pb-6 sm:pb-8 border-b border-flow-border/80">
              <span className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-flow-gold flex-shrink-0 pt-1">
                {point.number}
              </span>
              <div>
                <h3 className="text-lg sm:text-xl lg:text-2xl font-extrabold text-flow-dark mb-1.5 sm:mb-2">
                  {point.title}
                </h3>
                <p className="text-xs sm:text-sm text-flow-muted leading-relaxed font-light">
                  {point.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
