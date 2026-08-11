import React, { useState } from 'react';
import { Search, MapPin, Bed, Bath, Maximize2, ArrowRight, Filter, RotateCcw } from 'lucide-react';
import { sampleProperties } from '../data/propertiesData';
import { Property } from '../types';

interface PropertiesPageProps {
  onSelectProperty: (property: Property) => void;
}

export const PropertiesPage: React.FC<PropertiesPageProps> = ({ onSelectProperty }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCity, setSelectedCity] = useState<string>('All');
  const [selectedType, setSelectedType] = useState<string>('All');
  const [activeCategory, setActiveCategory] = useState<'All' | 'Abuja' | 'Lagos' | 'Residential' | 'Land'>('All');

  const filteredProperties = sampleProperties.filter((property) => {
    // Category pill filter
    if (activeCategory === 'Abuja' && property.city !== 'Abuja') return false;
    if (activeCategory === 'Lagos' && property.city !== 'Lagos') return false;
    if (activeCategory === 'Residential' && property.type !== 'Residential' && property.type !== 'Luxury Residence') return false;
    if (activeCategory === 'Land' && property.type !== 'Land') return false;

    // Search bar filter
    if (searchTerm.trim() !== '') {
      const term = searchTerm.toLowerCase();
      const matchTitle = property.title.toLowerCase().includes(term);
      const matchLocation = property.location.toLowerCase().includes(term);
      const matchDescription = property.description.toLowerCase().includes(term);
      const matchType = property.type.toLowerCase().includes(term);
      if (!matchTitle && !matchLocation && !matchDescription && !matchType) return false;
    }

    // City dropdown
    if (selectedCity !== 'All' && property.city !== selectedCity) return false;

    // Type dropdown
    if (selectedType !== 'All' && property.type !== selectedType) return false;

    return true;
  });

  const handleResetFilters = () => {
    setSearchTerm('');
    setSelectedCity('All');
    setSelectedType('All');
    setActiveCategory('All');
  };

  return (
    <div className="pt-28 pb-24 bg-flow-cream min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Banner Header */}
        <div className="mb-12 text-center max-w-3xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-widest text-flow-gold block mb-2">
            PREMIUM REAL ESTATE PORTFOLIO
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold text-flow-dark tracking-tight mb-4">
            Abuja & Lagos Properties
          </h1>
          <p className="text-sm sm:text-base text-flow-muted font-light leading-relaxed">
            Browse our verified collection of luxury duplexes, contemporary apartments, high-yield land parcels, and commercial spaces across prime districts.
          </p>
        </div>

        {/* Search Bar & Filter Controls Box */}
        <div className="bg-white p-6 sm:p-8 border border-flow-border shadow-elevated mb-12 space-y-6">
          
          {/* Main Search Input */}
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-flow-gold" />
            </div>
            <input
              type="text"
              placeholder="Search by neighborhood, property title, or keyword (e.g. Maitama, Ikoyi, Duplex, Land)..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-4 bg-flow-sand/80 border border-flow-border text-sm text-flow-dark placeholder-flow-muted/70 focus:outline-none focus:border-flow-gold transition-colors font-medium"
            />
          </div>

          {/* Secondary Dropdowns & Quick Categories */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2 border-t border-flow-border/60">
            <div>
              <label className="block text-[11px] uppercase font-bold tracking-wider text-flow-dark mb-1.5">
                City / Region
              </label>
              <select
                value={selectedCity}
                onChange={(e) => setSelectedCity(e.target.value)}
                className="w-full px-3.5 py-2.5 bg-flow-cream border border-flow-border text-xs text-flow-dark font-medium focus:outline-none focus:border-flow-gold"
              >
                <option value="All">All Cities (Abuja & Lagos)</option>
                <option value="Abuja">Abuja Properties</option>
                <option value="Lagos">Lagos Properties</option>
              </select>
            </div>

            <div>
              <label className="block text-[11px] uppercase font-bold tracking-wider text-flow-dark mb-1.5">
                Property Category
              </label>
              <select
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
                className="w-full px-3.5 py-2.5 bg-flow-cream border border-flow-border text-xs text-flow-dark font-medium focus:outline-none focus:border-flow-gold"
              >
                <option value="All">All Property Types</option>
                <option value="Luxury Residence">Luxury Residences</option>
                <option value="Residential">Residential Apartments</option>
                <option value="Land">Land & Development Sites</option>
                <option value="Commercial">Commercial High-Rise</option>
              </select>
            </div>

            <div className="flex items-end">
              <button
                onClick={handleResetFilters}
                className="w-full py-2.5 px-4 bg-flow-sand hover:bg-flow-dark text-flow-dark hover:text-white text-xs font-semibold uppercase tracking-wider transition-colors flex items-center justify-center space-x-2 border border-flow-border"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Reset Filters</span>
              </button>
            </div>
          </div>

          {/* Quick Category Pills */}
          <div className="flex flex-wrap gap-2 pt-2">
            {(['All', 'Abuja', 'Lagos', 'Residential', 'Land'] as const).map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveCategory(filter)}
                className={`px-4 py-1.5 text-xs font-semibold tracking-wider uppercase transition-all border ${
                  activeCategory === filter
                    ? 'bg-flow-dark text-white border-flow-dark'
                    : 'bg-white text-flow-dark border-flow-border hover:border-flow-gold'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>

        </div>

        {/* Results Counter Bar */}
        <div className="flex items-center justify-between mb-8 pb-4 border-b border-flow-border">
          <p className="text-xs sm:text-sm text-flow-muted font-medium">
            Showing <span className="font-bold text-flow-dark">{filteredProperties.length}</span> {filteredProperties.length === 1 ? 'property' : 'properties'}
          </p>

          {(searchTerm || selectedCity !== 'All' || selectedType !== 'All' || activeCategory !== 'All') && (
            <span className="text-xs text-flow-gold font-semibold">
              Filtered View
            </span>
          )}
        </div>

        {/* Property Grid */}
        {filteredProperties.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProperties.map((property) => (
              <div
                key={property.id}
                className="group bg-white border border-flow-border hover:border-flow-gold transition-all duration-300 shadow-subtle hover:shadow-elevated flex flex-col justify-between"
              >
                <div>
                  {/* Image Box */}
                  <div className="relative aspect-[4/3] w-full overflow-hidden bg-flow-dark">
                    <img
                      src={property.mainImage}
                      alt={property.title}
                      className="w-full h-full object-cover img-zoom"
                    />
                    <span className="absolute top-4 left-4 bg-flow-dark/90 text-white text-[10px] uppercase font-bold tracking-widest px-3 py-1.5 backdrop-blur-sm border border-white/10">
                      {property.status}
                    </span>
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

                    <h3 className="font-serif text-xl font-bold text-flow-dark mb-3 line-clamp-2 group-hover:text-flow-gold transition-colors">
                      {property.title}
                    </h3>

                    {/* Specs */}
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
                      <span className="text-[11px] uppercase tracking-wider text-flow-muted">Guide Price</span>
                      <span className="font-serif text-xl font-bold text-flow-dark">
                        {property.price}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Button */}
                <div className="p-6 pt-0">
                  <button
                    onClick={() => onSelectProperty(property)}
                    className="w-full py-3 bg-flow-sand hover:bg-flow-dark text-flow-dark hover:text-white text-xs uppercase font-semibold tracking-widest transition-all flex items-center justify-center space-x-2"
                  >
                    <span>View Property</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-white border border-flow-border p-8">
            <Filter className="w-10 h-10 text-flow-muted mx-auto mb-4 opacity-50" />
            <h3 className="font-serif text-2xl font-bold text-flow-dark mb-2">No Matching Properties Found</h3>
            <p className="text-xs sm:text-sm text-flow-muted max-w-md mx-auto mb-6">
              We couldn't find any properties matching your current search parameters. Try adjusting your keyword or clearing filters.
            </p>
            <button
              onClick={handleResetFilters}
              className="px-6 py-3 bg-flow-gold text-white text-xs font-semibold uppercase tracking-widest"
            >
              Reset Search & Show All
            </button>
          </div>
        )}

      </div>
    </div>
  );
};
