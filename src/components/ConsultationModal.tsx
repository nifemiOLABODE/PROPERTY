import React, { useState } from 'react';
import { X, Calendar, Clock, CheckCircle2, MessageSquare } from 'lucide-react';
import { companyConfig } from '../data/companyData';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialPropertyTitle?: string;
}

export const ConsultationModal: React.FC<ConsultationModalProps> = ({ isOpen, onClose, initialPropertyTitle }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    consultationType: 'Investment Advisory',
    preferredDate: '',
    preferredTime: 'Morning (9:00 AM - 12:00 PM)',
    notes: initialPropertyTitle ? `Interested in: ${initialPropertyTitle}` : ''
  });

  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const whatsappMessage = encodeURIComponent(
    `Hello Flow Properties, I would like to schedule a private real estate consultation. Name: ${formData.name || 'Client'}.`
  );
  const whatsappUrl = `https://wa.me/${companyConfig.whatsappNumber}?text=${whatsappMessage}`;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 animate-fadeIn">
      <div className="relative bg-white w-full max-w-xl border border-flow-border shadow-luxury p-6 sm:p-8">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-flow-dark hover:text-flow-gold transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="py-8 text-center space-y-4">
            <div className="w-14 h-14 bg-flow-emerald/10 text-flow-emerald rounded-full flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="font-serif text-2xl font-bold text-flow-dark">
              Consultation Scheduled
            </h3>
            <p className="text-sm text-flow-muted font-light leading-relaxed">
              Thank you for booking a consultation with Flow Properties. Our representative will confirm your scheduled slot via email/phone shortly.
            </p>
            <div className="pt-4">
              <button
                onClick={() => {
                  setSubmitted(false);
                  onClose();
                }}
                className="px-6 py-3 bg-flow-dark text-white text-xs uppercase font-semibold tracking-widest"
              >
                Close Window
              </button>
            </div>
          </div>
        ) : (
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-flow-gold block mb-1">
              PRIVATE ADVISORY
            </span>
            <h2 className="font-serif text-2xl font-bold text-flow-dark mb-1">
              Book a Consultation
            </h2>
            <p className="text-xs text-flow-muted font-light mb-6">
              Schedule a personalized session with Flow Properties lead consultants for Abuja & Lagos real estate.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-[11px] uppercase font-bold tracking-wider text-flow-dark mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Your full name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-flow-sand border border-flow-border text-sm text-flow-dark focus:outline-none focus:border-flow-gold"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] uppercase font-bold tracking-wider text-flow-dark mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="name@email.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-flow-sand border border-flow-border text-sm text-flow-dark focus:outline-none focus:border-flow-gold"
                  />
                </div>

                <div>
                  <label className="block text-[11px] uppercase font-bold tracking-wider text-flow-dark mb-1">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+234 800 000 0000"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-flow-sand border border-flow-border text-sm text-flow-dark focus:outline-none focus:border-flow-gold"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] uppercase font-bold tracking-wider text-flow-dark mb-1">
                    Topic of Interest
                  </label>
                  <select
                    value={formData.consultationType}
                    onChange={(e) => setFormData({ ...formData, consultationType: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-flow-sand border border-flow-border text-sm text-flow-dark focus:outline-none focus:border-flow-gold"
                  >
                    <option value="Investment Advisory">Property Investment Advisory</option>
                    <option value="Residential Purchase">Residential Purchase (Abuja/Lagos)</option>
                    <option value="Land Opportunity">Land & Development Sourcing</option>
                    <option value="Diaspora Investment">Diaspora Property Investment</option>
                    <option value="Commercial Leasing">Commercial & Office Spaces</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[11px] uppercase font-bold tracking-wider text-flow-dark mb-1">
                    Preferred Time Slot
                  </label>
                  <select
                    value={formData.preferredTime}
                    onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-flow-sand border border-flow-border text-sm text-flow-dark focus:outline-none focus:border-flow-gold"
                  >
                    <option value="Morning (9:00 AM - 12:00 PM)">Morning (9:00 AM – 12:00 PM)</option>
                    <option value="Afternoon (1:00 PM - 4:00 PM)">Afternoon (1:00 PM – 4:00 PM)</option>
                    <option value="Evening (4:00 PM - 6:00 PM)">Evening (4:00 PM – 6:00 PM)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-[11px] uppercase font-bold tracking-wider text-flow-dark mb-1">
                  Notes / Specific Questions
                </label>
                <textarea
                  rows={3}
                  placeholder="Share any specific requirements or property references..."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-flow-sand border border-flow-border text-sm text-flow-dark focus:outline-none focus:border-flow-gold"
                ></textarea>
              </div>

              <div className="pt-2 flex flex-col gap-3">
                <button
                  type="submit"
                  className="w-full py-3 bg-flow-gold hover:bg-flow-gold-hover text-white text-xs uppercase font-semibold tracking-widest transition-all"
                >
                  Confirm Consultation Slot
                </button>

                <div className="text-center py-1">
                  <span className="text-[11px] text-flow-muted uppercase tracking-wider font-semibold">Or send us a WhatsApp message</span>
                </div>

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full px-4 py-3 bg-flow-emerald hover:bg-flow-emerald-dark text-white text-xs uppercase font-semibold tracking-widest flex items-center justify-center space-x-1"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
