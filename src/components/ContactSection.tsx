import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, MessageSquare, Send, CheckCircle2 } from 'lucide-react';
import { companyConfig } from '../data/companyData';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    lookingFor: 'Buy Residential Property',
    budget: '',
    preferredLocation: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch('https://formspree.io/f/xqpzbpgg', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setSubmitted(true);
      } else {
        alert('Oops! There was a problem submitting your form. Please try again.');
      }
    } catch (error) {
      alert('Oops! There was a network error. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const whatsappMessage = encodeURIComponent(
    `Hello Flow Properties, I would like to make an inquiry regarding real estate opportunities in Abuja/Lagos.`
  );
  const whatsappUrl = `https://wa.me/${companyConfig.whatsappNumber}?text=${whatsappMessage}`;

  return (
    <section id="contact" className="py-24 bg-white border-b border-flow-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-flow-gold block mb-2">
            GET IN TOUCH
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-flow-dark tracking-tight mb-4">
            Let's Find Your Next Property.
          </h2>
          <p className="text-sm sm:text-base text-flow-muted font-light leading-relaxed">
            Tell us what you're looking for and our property consultants will help you explore the right opportunities.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Left Column: Contact Cards & Info */}
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-flow-sand p-8 border border-flow-border space-y-6">
              <h3 className="font-serif text-xl font-bold text-flow-dark pb-3 border-b border-flow-border">
                Headquarters & Offices
              </h3>

              {/* Office Addresses */}
              <div className="space-y-4">
                {companyConfig.addresses.map((addr, idx) => (
                  <div key={idx} className="flex items-start space-x-3">
                    <MapPin className="w-5 h-5 text-flow-gold mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="text-xs font-bold uppercase tracking-wider text-flow-dark block">
                        {addr.label}
                      </span>
                      <span className="text-xs text-flow-muted leading-relaxed block">
                        {addr.address}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Phone & Email */}
              <div className="pt-4 border-t border-flow-border space-y-3 text-xs">
                <div className="flex items-center space-x-3">
                  <Phone className="w-4 h-4 text-flow-gold flex-shrink-0" />
                  <div className="text-flow-dark">
                    {companyConfig.phones.join(' • ')}
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <Mail className="w-4 h-4 text-flow-gold flex-shrink-0" />
                  <a href={`mailto:${companyConfig.email}`} className="text-flow-dark hover:text-flow-gold transition-colors">
                    {companyConfig.email}
                  </a>
                </div>

                <div className="flex items-center space-x-3">
                  <Clock className="w-4 h-4 text-flow-gold flex-shrink-0" />
                  <span className="text-flow-muted">
                    {companyConfig.businessHours}
                  </span>
                </div>
              </div>
            </div>

            {/* Direct WhatsApp Box */}
            <div className="p-6 bg-flow-dark text-white border border-flow-border-dark flex flex-col justify-between">
              <div>
                <span className="text-xs uppercase font-bold text-flow-gold tracking-widest block mb-2">
                  INSTANT ADVISORY
                </span>
                <h4 className="font-serif text-lg font-bold mb-2">
                  Speak Directly via WhatsApp
                </h4>
                <p className="text-xs text-white/70 font-light mb-4">
                  Connect instantly with our lead consultants for confidential property inquiries and swift responses.
                </p>
              </div>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 bg-flow-emerald hover:bg-flow-emerald-dark text-white text-xs uppercase font-bold tracking-widest flex items-center justify-center space-x-2 transition-all shadow-subtle"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7 bg-white p-8 sm:p-10 border border-flow-border shadow-subtle">
            {submitted ? (
              <div className="py-16 text-center space-y-4">
                <div className="w-16 h-16 bg-flow-emerald/10 text-flow-emerald rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-flow-dark">
                  Enquiry Received
                </h3>
                <p className="max-w-md mx-auto text-sm text-flow-muted font-light">
                  Thank you for contacting Flow Properties. One of our property consultants will review your preferences and contact you shortly.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-6 py-2.5 bg-flow-dark text-white text-xs uppercase tracking-widest font-semibold mt-4"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs uppercase font-bold tracking-wider text-flow-dark mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Chief Alexander Okonkwo"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full px-4 py-3 bg-flow-cream border border-flow-border text-sm text-flow-dark focus:outline-none focus:border-flow-gold"
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase font-bold tracking-wider text-flow-dark mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="name@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 bg-flow-cream border border-flow-border text-sm text-flow-dark focus:outline-none focus:border-flow-gold"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs uppercase font-bold tracking-wider text-flow-dark mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+234 800 000 0000"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 bg-flow-cream border border-flow-border text-sm text-flow-dark focus:outline-none focus:border-flow-gold"
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase font-bold tracking-wider text-flow-dark mb-2">
                      What are you looking for? *
                    </label>
                    <select
                      value={formData.lookingFor}
                      onChange={(e) => setFormData({ ...formData, lookingFor: e.target.value })}
                      className="w-full px-4 py-3 bg-flow-cream border border-flow-border text-sm text-flow-dark focus:outline-none focus:border-flow-gold"
                    >
                      <option value="Buy Residential Property">Buy Residential Property</option>
                      <option value="Commercial Space">Commercial Space / Office Suite</option>
                      <option value="Land Investment">Land Investment Opportunity</option>
                      <option value="Property Investment Advisory">Property Investment Advisory</option>
                      <option value="Property Sourcing">Property Sourcing</option>
                      <option value="Property Management">Property Management</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs uppercase font-bold tracking-wider text-flow-dark mb-2">
                      Budget Range (Optional)
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. ₦150M – ₦300M"
                      value={formData.budget}
                      onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                      className="w-full px-4 py-3 bg-flow-cream border border-flow-border text-sm text-flow-dark focus:outline-none focus:border-flow-gold"
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase font-bold tracking-wider text-flow-dark mb-2">
                      Preferred Location
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Maitama, Guzape, Asokoro, Ikoyi"
                      value={formData.preferredLocation}
                      onChange={(e) => setFormData({ ...formData, preferredLocation: e.target.value })}
                      className="w-full px-4 py-3 bg-flow-cream border border-flow-border text-sm text-flow-dark focus:outline-none focus:border-flow-gold"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs uppercase font-bold tracking-wider text-flow-dark mb-2">
                    Message / Specific Requirements
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Describe your ideal property criteria, timing, or investment objective..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 bg-flow-cream border border-flow-border text-sm text-flow-dark focus:outline-none focus:border-flow-gold"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-4 bg-flow-gold hover:bg-flow-gold-hover text-white text-xs uppercase font-semibold tracking-widest transition-all flex items-center justify-center space-x-2"
                >
                  {loading ? (
                    <span>Sending Enquiry...</span>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Send Enquiry</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};
