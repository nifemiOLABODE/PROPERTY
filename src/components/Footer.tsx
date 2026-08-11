import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Facebook, Instagram, Youtube, Linkedin, ArrowUp } from 'lucide-react';
import { companyConfig } from '../data/companyData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-flow-dark text-white border-t border-flow-border-dark pt-16 pb-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          
          {/* Brand Info Column */}
          <div className="lg:col-span-4 space-y-4">
            <Link to="/" className="flex items-center space-x-3.5 group">
              {/* Image Logo */}
              <div className="h-12 w-12 sm:h-14 sm:w-14 bg-white p-1 flex items-center justify-center overflow-hidden flex-shrink-0 shadow-md">
                <img 
                  src="/logo.jpg" 
                  alt="FLOW REALTOR & Properties Limited Logo" 
                  className="h-full w-full object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-xl sm:text-2xl font-extrabold text-white tracking-wider uppercase leading-none">
                  FLOW REALTOR
                </span>
                <span className="text-[10px] sm:text-xs tracking-widest uppercase font-bold text-flow-gold mt-1 leading-none">
                  & PROPERTIES LIMITED
                </span>
              </div>
            </Link>

            <p className="text-xs text-white/70 font-light leading-relaxed">
              Flow Realtor & Properties Limited is a premier real estate consultancy firm connecting buyers, sellers and investors with premium residential and commercial properties across Abuja and Lagos.
            </p>

            <div className="pt-2">
              <p className="text-xs font-bold text-flow-cream">
                {companyConfig.legalName}
              </p>
              <p className="text-[11px] text-flow-gold uppercase font-semibold tracking-wider">
                {companyConfig.rcNumber}
              </p>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-extrabold text-flow-gold uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs font-medium">
              <li>
                <Link to="/" className="text-white/80 hover:text-flow-gold transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/properties" className="text-white/80 hover:text-flow-gold transition-colors">
                  Properties
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-white/80 hover:text-flow-gold transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-white/80 hover:text-flow-gold transition-colors">
                  Our Services
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-white/80 hover:text-flow-gold transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Services Column */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-extrabold text-flow-gold uppercase tracking-wider">
              Our Services
            </h4>
            <ul className="space-y-2 text-xs text-white/80 font-light">
              <li>Property Sales (Abuja & Lagos)</li>
              <li>Property Investment Advisory</li>
              <li>Property & Land Sourcing</li>
              <li>Land & Development Opportunities</li>
              <li>Property Management</li>
              <li>Real Estate Consulting</li>
            </ul>
          </div>

          {/* Contact Info Column */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-extrabold text-flow-gold uppercase tracking-wider">
              Abuja Offices
            </h4>
            <div className="space-y-3 text-xs text-white/80">
              {companyConfig.addresses.map((addr, idx) => (
                <div key={idx} className="flex items-start space-x-2">
                  <MapPin className="w-3.5 h-3.5 text-flow-gold mt-0.5 flex-shrink-0" />
                  <span>{addr.address}</span>
                </div>
              ))}

              <div className="pt-2 space-y-1.5 text-xs">
                <div className="flex items-center space-x-2">
                  <Phone className="w-3.5 h-3.5 text-flow-gold flex-shrink-0" />
                  <span>{companyConfig.phones.join(' • ')}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="w-3.5 h-3.5 text-flow-gold flex-shrink-0" />
                  <a href={`mailto:${companyConfig.email}`} className="hover:text-flow-gold transition-colors">
                    {companyConfig.email}
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Sub-Footer: Social Media & Copyright */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-white/60 space-y-4 md:space-y-0">
          <div>
            © Flow Realtor & Properties Limited. All rights reserved.
          </div>

          {/* Social Links */}
          <div className="flex items-center space-x-4">
            <a
              href={companyConfig.socialLinks.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-white/5 hover:bg-flow-gold hover:text-white transition-colors"
              aria-label="Facebook — Flow Property Ltd"
            >
              <Facebook className="w-4 h-4" />
            </a>

            <a
              href={companyConfig.socialLinks.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-white/5 hover:bg-flow-gold hover:text-white transition-colors"
              aria-label="Instagram — @flowproperty"
            >
              <Instagram className="w-4 h-4" />
            </a>

            <a
              href={companyConfig.socialLinks.tiktok}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-white/5 hover:bg-flow-gold hover:text-white transition-colors"
              aria-label="TikTok — @flowproperty"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.29 0 .56.04.83.1v-3.6a6.34 6.34 0 0 0-.83-.06A6.49 6.49 0 0 0 3 15.6a6.49 6.49 0 0 0 11.04 4.59V11.2a8.27 8.27 0 0 0 5.55 2.15v-3.45a4.85 4.85 0 0 1-3-.76z"/>
              </svg>
            </a>

            <a
              href={companyConfig.socialLinks.youtube}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-white/5 hover:bg-flow-gold hover:text-white transition-colors"
              aria-label="YouTube — Flow Property"
            >
              <Youtube className="w-4 h-4" />
            </a>

            <a
              href={companyConfig.socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-white/5 hover:bg-flow-gold hover:text-white transition-colors"
              aria-label="LinkedIn — Flow Property"
            >
              <Linkedin className="w-4 h-4" />
            </a>
          </div>

          {/* Back to Top */}
          <button
            onClick={scrollToTop}
            className="flex items-center space-x-1.5 text-white/70 hover:text-flow-gold transition-colors"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};
