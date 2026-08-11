import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronRight } from 'lucide-react';

interface NavbarProps {
  onOpenConsultation: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenConsultation }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Properties', path: '/properties' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className="absolute top-0 left-0 right-0 z-50 bg-flow-cream border-b border-flow-border/80 py-3">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo & Name */}
        <Link to="/" className="flex items-center space-x-3 group">
          {/* Logo container bg strictly matches solid bg-flow-cream navbar */}
          <div className="h-11 w-11 sm:h-13 sm:w-13 bg-flow-cream flex items-center justify-center overflow-hidden flex-shrink-0">
            <img
              src="/logo.jpg"
              alt="FLOW REALTOR & Properties Limited Logo"
              className="h-full w-full object-contain mix-blend-multiply block"
            />
          </div>

          <div className="flex flex-col">
            <span className="text-base sm:text-lg md:text-xl font-extrabold tracking-wider uppercase leading-none text-flow-dark">
              FLOW REALTOR
            </span>
            <span className="text-[10px] sm:text-xs tracking-widest uppercase font-bold mt-1 leading-none text-flow-gold">
              & PROPERTIES LIMITED
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center space-x-8">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link
                key={link.name}
                to={link.path}
                className={`text-sm tracking-wide font-bold transition-colors hover:text-flow-gold relative py-1 uppercase ${
                  isActive ? 'text-flow-gold' : 'text-flow-dark'
                }`}
              >
                {link.name}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-flow-gold rounded-full" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center">
          <button
            onClick={onOpenConsultation}
            className="px-5 py-2.5 bg-flow-gold hover:bg-flow-gold-hover text-white text-xs uppercase tracking-widest font-extrabold rounded-none transition-all shadow-sm hover:shadow-md flex items-center space-x-2"
          >
            <span>Book a Consultation</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Mobile / Tablet Hamburger Toggle */}
        <div className="flex lg:hidden items-center">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-flow-dark focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile / Tablet Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-flow-dark text-white border-b border-flow-border-dark animate-fadeIn">
          <div className="px-6 pt-4 pb-6 space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className={`block text-base font-bold uppercase tracking-wider py-2.5 border-b border-white/10 transition-colors ${
                  location.pathname === link.path ? 'text-flow-gold' : 'hover:text-flow-gold'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenConsultation();
                }}
                className="w-full py-3.5 bg-flow-gold text-white text-xs uppercase tracking-widest font-extrabold flex items-center justify-center space-x-2"
              >
                <span>Book a Consultation</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
