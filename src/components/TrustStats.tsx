import React from 'react';
import { trustMetrics } from '../data/companyData';

export const TrustStats: React.FC = () => {
  return (
    <section id="stats" className="relative z-20 -mt-6 sm:-mt-8 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-white border border-flow-border shadow-elevated p-5 sm:p-8 lg:p-10 grid grid-cols-3 gap-4 sm:gap-8 text-center divide-x divide-flow-border/80">
        {trustMetrics.map((metric, idx) => (
          <div key={idx} className="px-2 sm:px-6">
            <p className="text-2xl sm:text-3xl lg:text-5xl font-extrabold text-flow-gold tracking-tight mb-0.5 sm:mb-1">
              {metric.value}
            </p>
            <p className="text-[10px] sm:text-xs lg:text-sm font-bold tracking-widest text-flow-muted uppercase">
              {metric.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};
