import React from 'react';
import { ContactSection } from '../components/ContactSection';

export const ContactPage: React.FC = () => {
  return (
    <div>
      <div className="bg-flow-dark text-white py-16 sm:py-20 border-b border-flow-border-dark text-center">
        <div className="max-w-4xl mx-auto px-4">
          <span className="text-xs font-extrabold uppercase tracking-widest text-flow-gold block mb-2">
            REACH OUR CONSULTANTS
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-4">
            Contact Us
          </h1>
          <p className="text-sm sm:text-base text-white/80 font-light max-w-2xl mx-auto">
            Connect directly with Flow Properties lead consultants in Abuja & Lagos or send us your property criteria for swift assistance.
          </p>
        </div>
      </div>

      <ContactSection />
    </div>
  );
};
