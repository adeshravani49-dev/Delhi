import React, { useState } from 'react';
import { GALLERY_IMAGES, GYM_DETAILS } from '../data/gymData';
import { GalleryImage } from '../types';
import { Eye, X, ChevronLeft, ChevronRight, ExternalLink, Image as ImageIcon } from 'lucide-react';

export const GallerySection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeImage, setActiveImage] = useState<GalleryImage | null>(null);

  const categories = [
    { id: 'all', label: 'All Photos' },
    { id: 'equipment', label: 'Heavy Machines' },
    { id: 'cardio', label: 'Cardio Deck' },
    { id: 'turf', label: 'Turf & Free Weights' },
    { id: 'facility', label: 'Facility & Signboard' },
  ];

  const filteredImages =
    selectedCategory === 'all'
      ? GALLERY_IMAGES
      : GALLERY_IMAGES.filter((img) => img.category === selectedCategory);

  const handleNext = () => {
    if (!activeImage) return;
    const currentIndex = filteredImages.findIndex((img) => img.id === activeImage.id);
    const nextIndex = (currentIndex + 1) % filteredImages.length;
    setActiveImage(filteredImages[nextIndex]);
  };

  const handlePrev = () => {
    if (!activeImage) return;
    const currentIndex = filteredImages.findIndex((img) => img.id === activeImage.id);
    const prevIndex = (currentIndex - 1 + filteredImages.length) % filteredImages.length;
    setActiveImage(filteredImages[prevIndex]);
  };

  return (
    <section id="gallery" className="py-20 bg-neutral-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10">
          <div>
            <span className="text-amber-400 text-xs uppercase tracking-widest font-bold">
              Visual Tour
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display uppercase tracking-wide font-bold text-white mt-1">
              Inside <span className="text-amber-400">Delhi gay gym</span>
            </h2>
            <p className="text-neutral-400 text-sm sm:text-base max-w-xl mt-2">
              Explore our workout floors, commercial machines, cardio stations, and the iconic "Reach Your Potential" atmosphere.
            </p>
          </div>

          <div className="mt-4 md:mt-0">
            <a
              id="gallery-view-maps-photos-btn"
              href={GYM_DETAILS.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold text-neutral-300 bg-neutral-900 border border-neutral-700/80 hover:text-amber-400 hover:border-amber-400/40 transition-all"
            >
              <ImageIcon className="w-4 h-4 text-amber-400" />
              <span>See 20+ Member Photos on Google Maps</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Banner highlighting Google Maps listing images */}
        <div className="mb-8 p-4 rounded-2xl bg-neutral-900/90 border border-amber-500/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-lg">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-amber-400/10 text-amber-400 flex-shrink-0">
              <ImageIcon className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-bold text-white flex items-center gap-2">
                <span>Photos from Google Maps Listing</span>
                <span className="px-2 py-0.5 rounded-full text-[10px] font-mono bg-amber-400/20 text-amber-300 font-semibold">
                  105+ Reviews
                </span>
              </div>
              <p className="text-xs text-neutral-400 mt-0.5">
                Featuring the illuminated "Reach Your Potential" sign, heavy plate-loaded press machinery, Elite Fitness cables, cardio deck, and green turf area.
              </p>
            </div>
          </div>

          <a
            id="gallery-google-maps-url-link"
            href={GYM_DETAILS.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-4 py-2 rounded-xl text-xs font-bold text-neutral-950 bg-amber-400 hover:bg-amber-300 transition-all flex items-center justify-center gap-1.5 flex-shrink-0 shadow"
          >
            <span>Open Photos on Google Maps</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Categories Bar */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all whitespace-nowrap ${
                selectedCategory === cat.id
                  ? 'bg-amber-400 text-neutral-950 font-bold shadow-md shadow-amber-400/20'
                  : 'bg-neutral-900 text-neutral-400 hover:text-white hover:bg-neutral-800 border border-neutral-800'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {filteredImages.map((img) => (
            <div
              key={img.id}
              onClick={() => setActiveImage(img)}
              className="group relative h-64 rounded-2xl overflow-hidden cursor-pointer bg-neutral-900 border border-neutral-800/80 hover:border-amber-500/50 transition-all shadow-md"
            >
              <img
                src={img.imageUrl}
                alt={img.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-500 brightness-90 group-hover:brightness-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/90 via-neutral-950/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

              <div className="absolute inset-0 flex flex-col justify-end p-4 text-left">
                <span className="text-[10px] uppercase font-bold text-amber-400 tracking-wider">
                  {img.category}
                </span>
                <h4 className="text-sm font-bold text-white leading-snug group-hover:text-amber-200 transition-colors">
                  {img.title}
                </h4>
                <p className="text-xs text-neutral-300/80 line-clamp-2 mt-1">
                  {img.description}
                </p>
              </div>

              <div className="absolute top-3 right-3 p-2 rounded-full bg-neutral-950/60 backdrop-blur-md text-white opacity-0 group-hover:opacity-100 transition-opacity">
                <Eye className="w-4 h-4" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {activeImage && (
        <div
          id="gallery-lightbox-modal"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8 bg-neutral-950/90 backdrop-blur-lg animate-in fade-in duration-200"
          onClick={() => setActiveImage(null)}
        >
          <div
            className="relative max-w-4xl w-full bg-neutral-900 rounded-2xl overflow-hidden border border-neutral-800 shadow-2xl flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top Modal Bar */}
            <div className="flex items-center justify-between p-4 border-b border-neutral-800 bg-neutral-950/80">
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-0.5 rounded text-[10px] font-bold uppercase bg-amber-500/20 text-amber-300 border border-amber-500/30">
                  {activeImage.category}
                </span>
                <h3 className="text-sm sm:text-base font-bold text-white">
                  {activeImage.title}
                </h3>
              </div>
              <button
                onClick={() => setActiveImage(null)}
                className="p-1.5 rounded-lg text-neutral-400 hover:text-white hover:bg-neutral-800"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Image Display */}
            <div className="relative max-h-[65vh] overflow-hidden flex items-center justify-center bg-black">
              <img
                src={activeImage.imageUrl}
                alt={activeImage.title}
                referrerPolicy="no-referrer"
                className="w-full h-auto max-h-[65vh] object-contain"
              />

              {/* Prev / Next controls */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handlePrev();
                }}
                className="absolute left-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-neutral-950/70 hover:bg-neutral-900 text-white border border-neutral-700 backdrop-blur-md transition-all"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleNext();
                }}
                className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-neutral-950/70 hover:bg-neutral-900 text-white border border-neutral-700 backdrop-blur-md transition-all"
                aria-label="Next image"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            {/* Bottom Caption */}
            <div className="p-4 bg-neutral-950 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 border-t border-neutral-800">
              <p className="text-xs sm:text-sm text-neutral-300">
                {activeImage.description}
              </p>

              <a
                href={GYM_DETAILS.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-amber-400 hover:text-amber-300 whitespace-nowrap"
              >
                <span>View on Google Maps Listing</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
