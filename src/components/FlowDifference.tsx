import React from 'react';
import { flowDifferenceSteps } from '../data/companyData';

export const FlowDifference: React.FC = () => {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-flow-sand/70 border-b border-flow-border relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="max-w-3xl mb-10 sm:mb-16">
          <span className="text-xs font-extrabold uppercase tracking-widest text-flow-gold block mb-2">
            BRAND PHILOSOPHY
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-extrabold text-flow-dark tracking-tight mb-3 sm:mb-4">
            The Flow Difference
          </h2>
          <p className="text-sm sm:text-base text-flow-dark font-medium leading-relaxed">
            "Our business is built on the 'flow' — the smooth, efficient, and natural progression from finding a property to closing the deal. We are committed to fostering long-term relationships with our clients, acting not just as agents, but as trusted advisors throughout every stage of their real-estate journey."
          </p>
        </div>

        {/* Process Timeline */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {flowDifferenceSteps.map((step) => (
            <div
              key={step.number}
              className="bg-white p-5 sm:p-6 border border-flow-border shadow-subtle relative flex flex-col justify-between group hover:border-flow-gold transition-colors"
            >
              <div>
                <div className="flex items-center justify-between mb-3 sm:mb-4">
                  <span className="text-2xl sm:text-3xl font-extrabold text-flow-gold">
                    {step.number}
                  </span>
                  <div className="h-0.5 w-6 sm:w-8 bg-flow-border group-hover:bg-flow-gold transition-colors" />
                </div>
                <h3 className="text-lg sm:text-xl font-extrabold text-flow-dark mb-1.5 sm:mb-2">
                  {step.title}
                </h3>
                <p className="text-xs text-flow-muted leading-relaxed font-light">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
