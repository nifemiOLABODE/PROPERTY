import React, { useState, useEffect } from 'react';
import { X, MapPin, CheckCircle2, MessageSquare, ChevronRight, ChevronLeft, Film, Image as ImageIcon } from 'lucide-react';
import { Property } from '../types';
import { companyConfig } from '../data/companyData';

interface PropertyModalProps {
  property: Property | null;
  onClose: () => void;
  onOpenConsultationWithProperty?: (title: string) => void;
}

export const PropertyModal: React.FC<PropertyModalProps> = ({ property, onClose, onOpenConsultationWithProperty }) => {
  const [activeMediaTab, setActiveMediaTab] = useState<'video' | 'image'>('image');
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  // Sync tab state whenever the active property changes
  useEffect(() => {
    if (property) {
      const hasImages = property.galleryImages && property.galleryImages.length > 0;
      const hasVideo = !!property.videoUrl;

      if (hasVideo && !hasImages) {
        setActiveMediaTab('video');
      } else {
        setActiveMediaTab('image');
      }
      setActiveImageIndex(0);
    }
  }, [property]);

  if (!property) return null;

  // Filter out empty strings or invalid urls from slideshow images
  const slideshowImages = property.galleryImages && property.galleryImages.filter(img => !!img).length > 0
    ? property.galleryImages.filter(img => !!img)
    : property.mainImage ? [property.mainImage] : [];

  const handleNextImage = () => {
    if (slideshowImages.length === 0) return;
    setActiveImageIndex((prevIdx) => (prevIdx + 1) % slideshowImages.length);
  };

  const handlePrevImage = () => {
    if (slideshowImages.length === 0) return;
    setActiveImageIndex((prevIdx) => (prevIdx - 1 + slideshowImages.length) % slideshowImages.length);
  };

  const hasVideo = !!property.videoUrl;
  const hasImages = slideshowImages.length > 0;
  const hasMultipleImages = slideshowImages.length > 1;

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
          className="absolute top-4 right-4 z-30 p-2.5 bg-flow-dark text-white hover:bg-flow-gold transition-colors focus:outline-none"
          aria-label="Close details"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
          {/* Left Column: Media Stage (Slideshow & Video) */}
          <div className="lg:col-span-7 bg-flow-sand p-4 sm:p-6 flex flex-col justify-between">
            <div>
              {/* Media Options Tabs if both media types exist */}
              {hasVideo && hasImages && (
                <div className="flex space-x-2 mb-3">
                  <button
                    onClick={() => setActiveMediaTab('image')}
                    className={`px-4 py-2 text-xs uppercase font-extrabold tracking-wider flex items-center space-x-2 transition-all border ${
                      activeMediaTab === 'image'
                        ? 'bg-flow-gold text-white border-flow-gold'
                        : 'bg-white text-flow-dark border-flow-border hover:border-flow-gold'
                    }`}
                  >
                    <ImageIcon className="w-4 h-4" />
                    <span>Photo Slideshow</span>
                  </button>
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
                </div>
              )}

              {/* Main Media Stage */}
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-flow-dark mb-3 select-none">
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
                  <div className="relative w-full h-full group">
                    {hasImages ? (
                      <img
                        src={slideshowImages[activeImageIndex]}
                        alt={`${property.title} - View ${activeImageIndex + 1}`}
                        className="w-full h-full object-cover transition-all duration-300"
                      />
                    ) : (
                      // Fallback if no images and no video tab
                      <div className="w-full h-full bg-flow-dark flex items-center justify-center text-white/50 text-xs">
                        No image available
                      </div>
                    )}

                    {/* Slideshow Arrow Left */}
                    {hasMultipleImages && (
                      <button
                        onClick={handlePrevImage}
                        className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/70 hover:bg-flow-gold text-white p-2.5 transition-colors focus:outline-none z-10"
                        aria-label="Previous image"
                      >
                        <ChevronLeft className="w-5 h-5" />
                      </button>
                    )}

                    {/* Slideshow Arrow Right */}
                    {hasMultipleImages && (
                      <button
                        onClick={handleNextImage}
                        className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/70 hover:bg-flow-gold text-white p-2.5 transition-colors focus:outline-none z-10"
                        aria-label="Next image"
                      >
                        <ChevronRight className="w-5 h-5" />
                      </button>
                    )}

                    {/* Index Indicator Pill */}
                    {hasMultipleImages && (
                      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 bg-black/70 text-white text-[11px] font-bold px-3.5 py-1.5 rounded-none z-10">
                        {activeImageIndex + 1} / {slideshowImages.length}
                      </div>
                    )}
                  </div>
                )}

                <span className="absolute top-3 left-3 bg-flow-gold text-white text-[10px] uppercase font-bold tracking-widest px-3 py-1 z-20">
                  {property.status}
                </span>
              </div>

              {/* Thumbnails Row under Slideshow for easy jump-to-index */}
              {activeMediaTab === 'image' && hasMultipleImages && (
                <div className="flex space-x-2 overflow-x-auto py-1 scrollbar-thin">
                  {slideshowImages.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveImageIndex(idx)}
                      className={`relative w-16 h-12 flex-shrink-0 overflow-hidden border-2 transition-all ${
                        activeImageIndex === idx ? 'border-flow-gold opacity-100 scale-102' : 'border-transparent opacity-60 hover:opacity-100'
                      }`}
                    >
                      <img src={img} alt="" className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Quick Specs Pill */}
            <div className="mt-4 pt-4 border-t border-flow-border grid grid-cols-3 gap-2 text-center bg-white p-4">
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
                <span className="text-xs uppercase font-medium text-flow-muted block">Price</span>
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
