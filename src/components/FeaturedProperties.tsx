import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Bed, Bath, Maximize2, ArrowRight, Play, Image as ImageIcon } from 'lucide-react';
import { sampleProperties } from '../data/propertiesData';
import { Property } from '../types';

interface FeaturedPropertiesProps {
  onSelectProperty: (property: Property) => void;
}

// Sub-component for Property Card to handle individual hover states cleanly
const FeaturedPropertyCard: React.FC<{
  property: Property;
  onSelectProperty: (property: Property) => void;
}> = ({ property, onSelectProperty }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group bg-white border border-flow-border hover:border-flow-gold transition-all duration-300 shadow-subtle hover:shadow-elevated flex flex-col justify-between"
    >
      <div>
        {/* Media Stage / Preview */}
        <div
          onClick={() => onSelectProperty(property)}
          className="relative aspect-[4/3] w-full overflow-hidden bg-flow-dark cursor-pointer"
        >
          {property.videoUrl ? (
            isHovered ? (
              <video
                src={property.videoUrl}
                muted
                loop
                playsInline
                autoPlay
                className="w-full h-full object-cover"
              />
            ) : (
              // Premium placeholder gradient with a play icon when not hovered to avoid black boxes and network lag
              <div className="w-full h-full bg-gradient-to-br from-flow-dark via-[#1e2229] to-flow-dark flex flex-col items-center justify-center text-center p-6 transition-all duration-300">
                <div className="w-14 h-14 rounded-full bg-flow-gold/10 border border-flow-gold/40 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300">
                  <Play className="w-6 h-6 text-flow-gold fill-flow-gold/20 ml-0.5" />
                </div>
                <span className="text-xs uppercase font-extrabold tracking-widest text-flow-gold">
                  Play Video Tour
                </span>
                <span className="text-[10px] text-white/50 mt-1">
                  Hover to view property video
                </span>
              </div>
            )
          ) : (
            <img
              src={property.mainImage}
              alt={property.title}
              className="w-full h-full object-cover img-zoom"
            />
          )}

          <span className="absolute top-4 left-4 bg-flow-dark/90 text-white text-[10px] uppercase font-bold tracking-widest px-3 py-1.5 backdrop-blur-sm border border-white/10">
            {property.status}
          </span>

          {property.videoUrl ? (
            <span className="absolute top-4 right-4 bg-flow-gold text-white text-[10px] uppercase font-extrabold tracking-widest px-2.5 py-1.5 flex items-center space-x-1 shadow-md">
              <Play className="w-3 h-3 fill-current" />
              <span>Video Tour</span>
            </span>
          ) : (
            <span className="absolute top-4 right-4 bg-flow-gold text-white text-[10px] uppercase font-extrabold tracking-widest px-2.5 py-1.5 flex items-center space-x-1 shadow-md">
              <ImageIcon className="w-3 h-3" />
              <span>Image Tour</span>
            </span>
          )}

          <span className="absolute bottom-4 right-4 bg-flow-gold text-white text-[11px] uppercase font-bold tracking-wider px-3 py-1">
            {property.type}
          </span>
        </div>

        {/* Card Content */}
        <div className="p-6">
          <div className="flex items-center text-xs text-flow-muted mb-2">
            <MapPin className="w-3.5 h-3.5 text-flow-gold mr-1 flex-shrink-0" />
            <span>{property.location}</span>
          </div>

          <h3 className="text-xl font-bold text-flow-dark mb-3 line-clamp-2 group-hover:text-flow-gold transition-colors">
            {property.title}
          </h3>

          {/* Property Specs */}
          <div className="flex items-center justify-between py-3 border-y border-flow-border/60 text-xs text-flow-muted mb-4">
            {property.bedrooms !== undefined && (
              <div className="flex items-center space-x-1">
                <Bed className="w-4 h-4 text-flow-dark" />
                <span>{property.bedrooms} Beds</span>
              </div>
            )}
            {property.bathrooms !== undefined && (
              <div className="flex items-center space-x-1">
                <Bath className="w-4 h-4 text-flow-dark" />
                <span>{property.bathrooms} Baths</span>
              </div>
            )}
            <div className="flex items-center space-x-1">
              <Maximize2 className="w-3.5 h-3.5 text-flow-dark" />
              <span>{property.size}</span>
            </div>
          </div>

          {/* Price */}
          <div className="flex items-baseline justify-between">
            <span className="text-[11px] uppercase tracking-wider text-flow-muted">Price</span>
            <span className="text-xl font-bold text-flow-dark">
              {property.price}
            </span>
          </div>
        </div>
      </div>

      {/* View Property CTA */}
      <div className="p-6 pt-0">
        <button
          onClick={() => onSelectProperty(property)}
          className="w-full py-3 bg-flow-sand hover:bg-flow-dark text-flow-dark hover:text-white text-xs uppercase font-semibold tracking-widest transition-all flex items-center justify-center space-x-2 group-hover:border-transparent"
        >
          <span>{property.videoUrl ? 'View Details & Video Tour' : 'View Details & Image Tour'}</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
};

export const FeaturedProperties: React.FC<FeaturedPropertiesProps> = ({ onSelectProperty }) => {
  const [activeFilter, setActiveFilter] = useState<'All' | 'Abuja' | 'Lagos' | 'Residential' | 'Land'>('All');

  // Home page strictly shows at most 6 properties that have images
  const filteredProperties = sampleProperties
    .filter((item) => {
      // Must have images and NO video
      const hasImages = !!item.mainImage || (item.galleryImages && item.galleryImages.length > 0);
      const hasVideo = !!item.videoUrl;
      if (!hasImages || hasVideo) return false;

      if (activeFilter === 'All') return true;
      if (activeFilter === 'Abuja') return item.city === 'Abuja';
      if (activeFilter === 'Lagos') return item.city === 'Lagos';
      if (activeFilter === 'Residential') return item.type === 'Residential' || item.type === 'Luxury Residence';
      if (activeFilter === 'Land') return item.type === 'Land';
      return true;
    })
    .slice(0, 6);

  return (
    <section id="properties" className="py-24 bg-flow-cream border-b border-flow-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-flow-gold block mb-2">
              CURATED PORTFOLIO
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-flow-dark tracking-tight">
              Selected Properties
            </h2>
            <p className="mt-3 max-w-xl text-sm sm:text-base text-flow-muted font-light">
              A curated collection of properties selected for quality, location, lifestyle and investment potential.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="mt-6 md:mt-0 flex flex-wrap gap-2">
            {(['All', 'Abuja', 'Lagos', 'Residential', 'Land'] as const).map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-4 py-2 text-xs font-semibold tracking-wider uppercase transition-all border ${
                  activeFilter === filter
                    ? 'bg-flow-dark text-white border-flow-dark'
                    : 'bg-white text-flow-dark border-flow-border hover:border-flow-gold'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* Property Grid (Max 6) */}
        {filteredProperties.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProperties.map((property) => (
              <FeaturedPropertyCard
                key={property.id}
                property={property}
                onSelectProperty={onSelectProperty}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-12 bg-white border border-flow-border/80">
            <span className="text-xs text-flow-muted uppercase tracking-wider font-semibold">
              No featured properties with photo catalogs found in this category
            </span>
          </div>
        )}

        {/* View All Properties Bottom Action — Links to /properties */}
        <div className="mt-16 text-center">
          <Link
            to="/properties"
            className="inline-flex items-center space-x-3 px-8 py-4 bg-flow-dark hover:bg-flow-gold text-white text-xs uppercase font-semibold tracking-widest transition-all shadow-subtle"
          >
            <span>Explore All Properties</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};
