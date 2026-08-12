import React from 'react';
import { Compass } from 'lucide-react';

export const MissionSection: React.FC = () => {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-flow-dark text-white border-b border-flow-border-dark relative overflow-hidden">
      {/* Background Graphic */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#C5A059_1px,transparent_1px)] [background-size:24px_24px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-center">

          {/* Statement Side */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center space-x-2 px-3 py-1 bg-white/5 border border-flow-gold/40 mb-4 sm:mb-6">
              <Compass className="w-3.5 h-3.5 text-flow-gold" />
              <span className="text-xs font-extrabold uppercase tracking-widest text-flow-gold">
                OUR MISSION
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-extrabold tracking-tight text-white mb-4 sm:mb-6 leading-tight">
              Redefining The Real Estate Experience.
            </h2>

            <p className="text-base sm:text-lg lg:text-xl text-flow-cream font-medium leading-relaxed mb-4 sm:mb-6 border-l-2 border-flow-gold pl-4 sm:pl-6 py-1">
              "At Flow Properties, our mission is to redefine the real estate experience by providing bespoke property solutions that prioritize our clients' goals."
            </p>

            <p className="text-sm sm:text-base text-white/70 font-light leading-relaxed">
              We believe that real estate is more than just square footage; it is about creating value, securing futures, and building enduring communities in Abuja and Lagos.
            </p>
          </div>

          {/* Visual Showcase Side */}
          <div className="lg:col-span-5">
            <div className="relative border border-flow-border-dark p-2 bg-white/5">
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=1200&q=85"
                  alt="Flow Properties Mission - Luxury Estate"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-flow-dark via-transparent to-transparent opacity-80" />
                <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 right-3 sm:right-4 p-3 sm:p-4 bg-flow-dark/90 backdrop-blur-sm border border-white/10 text-center">
                  <span className="text-[10px] sm:text-xs uppercase tracking-widest text-flow-gold font-extrabold">
                    TRUSTED ADVISORY & COMMUNITY BUILDING
                  </span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
