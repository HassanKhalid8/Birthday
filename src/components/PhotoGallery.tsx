import { useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

interface PhotoGalleryProps {
  photos: string[];
}

const PhotoGallery = ({ photos }: PhotoGalleryProps) => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => setSelectedIndex(index);
  const closeLightbox = () => setSelectedIndex(null);
  
  const goNext = () => {
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex + 1) % photos.length);
    }
  };
  
  const goPrev = () => {
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex - 1 + photos.length) % photos.length);
    }
  };

  return (
    <div className="w-full">
      <h3 className="text-2xl sm:text-3xl font-display text-primary text-center mb-6">
        Our Cherished Moments ✨
      </h3>
      
      {/* Photo Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {photos.map((photo, index) => (
          <div
            key={index}
            onClick={() => openLightbox(index)}
            className="relative group cursor-pointer overflow-hidden rounded-2xl aspect-square animate-fade-in-up shadow-lg hover:shadow-xl transition-all duration-300"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <img
              src={photo}
              alt={`Memory ${index + 1}`}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span className="text-primary-foreground font-semibold text-lg">View</span>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {selectedIndex !== null && (
        <div 
          className="fixed inset-0 bg-foreground/90 backdrop-blur-md z-50 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 text-background hover:text-primary transition-colors z-10"
          >
            <X className="w-8 h-8" />
          </button>
          
          <button
            onClick={(e) => { e.stopPropagation(); goPrev(); }}
            className="absolute left-4 text-background hover:text-primary transition-colors z-10"
          >
            <ChevronLeft className="w-10 h-10" />
          </button>
          
          <button
            onClick={(e) => { e.stopPropagation(); goNext(); }}
            className="absolute right-4 text-background hover:text-primary transition-colors z-10"
          >
            <ChevronRight className="w-10 h-10" />
          </button>
          
          <img
            src={photos[selectedIndex]}
            alt={`Memory ${selectedIndex + 1}`}
            className="max-w-full max-h-[85vh] object-contain rounded-2xl shadow-2xl animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          />
          
          <div className="absolute bottom-4 text-background text-sm">
            {selectedIndex + 1} / {photos.length}
          </div>
        </div>
      )}
    </div>
  );
};

export default PhotoGallery;
