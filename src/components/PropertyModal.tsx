import React, { useState } from 'react';
import { X, MapPin, Bed, Bath, Maximize2, CheckCircle2, MessageSquare, ChevronRight, Play, Film } from 'lucide-react';
import { Property } from '../types';
import { companyConfig } from '../data/companyData';

interface PropertyModalProps {
  property: Property | null;
  onClose: () => void;
  onOpenConsultationWithProperty?: (title: string) => void;
}

export const PropertyModal: React.FC<PropertyModalProps> = ({ property, onClose, onOpenConsultationWithProperty }) => {
  const [activeMediaTab, setActiveMediaTab] = useState<'video' | 'image'>('video');
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  if (!property) return null;

  const currentImage = property.galleryImages[activeImageIndex] || property.mainImage;

  const whatsappMessage = encodeURIComponent(
    `Hello Flow Properties, I am interested in reviewing details for "${property.title}" located in ${property.location} (Listed at ${property.price}). Please share further information.`
  );
  const whatsappUrl = `https://wa.me/${companyConfig.whatsappNumber}?text=${whatsappMessage}`;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 animate-fadeIn">
      <div className="relative bg-white w-full max-w-5xl max-h-[92vh] overflow-y-auto border border-flow-border shadow-luxury">
        {/* Sticky Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2.5 bg-flow-dark text-white hover:bg-flow-gold transition-colors focus:outline-none"
          aria-label="Close details"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
          {/* Left Column: Video & Image Showcase */}
          <div className="lg:col-span-7 bg-flow-sand p-4 sm:p-6 flex flex-col justify-between">
            <div>
              {/* Media Mode Tabs */}
              {property.videoUrl && (
                <div className="flex space-x-2 mb-3">
                  <button
                    onClick={() => setActiveMediaTab('video')}
                    className={`px-4 py-2 text-xs uppercase font-extrabold tracking-wider flex items-center space-x-2 transition-all border ${
                      activeMediaTab === 'video'
                        ? 'bg-flow-gold text-white border-flow-gold'
                        : 'bg-white text-flow-dark border-flow-border hover:border-flow-gold'
                    }`}
                  >
                    <Film className="w-4 h-4" />
                    <span>Video Tour</span>
                  </button>
                  <button
                    onClick={() => setActiveMediaTab('image')}
                    className={`px-4 py-2 text-xs uppercase font-extrabold tracking-wider flex items-center space-x-2 transition-all border ${
                      activeMediaTab === 'image'
                        ? 'bg-flow-gold text-white border-flow-gold'
                        : 'bg-white text-flow-dark border-flow-border hover:border-flow-gold'
                    }`}
                  >
                    <Play className="w-4 h-4" />
                    <span>Photo Gallery</span>
                  </button>
                </div>
              )}

              {/* Main Media Stage */}
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-flow-dark mb-3">
                {activeMediaTab === 'video' && property.videoUrl ? (
                  <video
                    src={property.videoUrl}
                    controls
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <img
                    src={currentImage}
                    alt={property.title}
                    className="w-full h-full object-cover transition-all duration-500"
                  />
                )}

                <span className="absolute top-3 left-3 bg-flow-gold text-white text-[10px] uppercase font-bold tracking-widest px-3 py-1 z-10">
                  {property.status}
                </span>
              </div>

              {/* Gallery Thumbnails */}
              {activeMediaTab === 'image' && property.galleryImages && property.galleryImages.length > 1 && (
                <div className="grid grid-cols-4 gap-2">
                  {property.galleryImages.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveImageIndex(idx)}
                      className={`relative aspect-[4/3] overflow-hidden border-2 transition-all ${
                        activeImageIndex === idx ? 'border-flow-gold opacity-100 scale-102' : 'border-transparent opacity-70 hover:opacity-100'
                      }`}
                    >
                      <img src={img} alt="" className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Quick Specs Pill */}
            <div className="mt-6 pt-6 border-t border-flow-border grid grid-cols-3 gap-2 text-center bg-white p-4">
              {property.bedrooms && (
                <div>
                  <span className="block text-xs uppercase font-medium text-flow-muted">Bedrooms</span>
                  <span className="text-lg font-bold text-flow-dark">{property.bedrooms} Beds</span>
                </div>
              )}
              {property.bathrooms && (
                <div>
                  <span className="block text-xs uppercase font-medium text-flow-muted">Bathrooms</span>
                  <span className="text-lg font-bold text-flow-dark">{property.bathrooms} Baths</span>
                </div>
              )}
              <div>
                <span className="block text-xs uppercase font-medium text-flow-muted">Property Size</span>
                <span className="text-lg font-bold text-flow-dark">{property.size}</span>
              </div>
            </div>
          </div>

          {/* Right Column: Property Details & Captions */}
          <div className="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center space-x-2 text-xs font-semibold uppercase tracking-widest text-flow-gold mb-2">
                <span>{property.type}</span>
                <span>•</span>
                <span>{property.city}</span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-extrabold text-flow-dark leading-tight mb-2">
                {property.title}
              </h2>

              <div className="flex items-center text-sm text-flow-muted mb-4">
                <MapPin className="w-4 h-4 text-flow-gold mr-1 flex-shrink-0" />
                <span>{property.location}</span>
              </div>

              <div className="mb-6 p-3.5 bg-flow-sand/80 border-l-2 border-flow-gold">
                <span className="text-xs uppercase font-medium text-flow-muted block">Asking Price</span>
                <span className="text-2xl sm:text-3xl font-bold text-flow-dark">
                  {property.price}
                </span>
              </div>

              <div className="mb-6">
                <h3 className="text-xs uppercase font-bold tracking-wider text-flow-dark mb-2">Property Description</h3>
                <p className="text-sm text-flow-muted leading-relaxed font-light whitespace-pre-line">
                  {property.description}
                </p>
              </div>

              {/* Key Features */}
              {property.features && property.features.length > 0 && (
                <div className="mb-6">
                  <h3 className="text-xs uppercase font-bold tracking-wider text-flow-dark mb-3">Key Highlights</h3>
                  <ul className="grid grid-cols-1 gap-2">
                    {property.features.map((feat, idx) => (
                      <li key={idx} className="flex items-start text-xs text-flow-dark">
                        <CheckCircle2 className="w-3.5 h-3.5 text-flow-gold mr-2 mt-0.5 flex-shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* Action Buttons */}
            <div className="space-y-3 pt-4 border-t border-flow-border">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 bg-[#25D366] hover:bg-[#1ebe57] text-white text-xs uppercase font-extrabold tracking-widest flex items-center justify-center space-x-2 transition-all shadow-sm"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Inquire via WhatsApp</span>
              </a>

              <button
                onClick={() => {
                  onClose();
                  if (onOpenConsultationWithProperty) {
                    onOpenConsultationWithProperty(property.title);
                  }
                }}
                className="w-full py-3.5 bg-flow-dark hover:bg-flow-gold text-white text-xs uppercase font-extrabold tracking-widest flex items-center justify-center space-x-2 transition-all"
              >
                <span>Request Private Inspection</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
