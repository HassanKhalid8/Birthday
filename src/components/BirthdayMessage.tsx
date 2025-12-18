import { useState } from "react";
import { Star, PartyPopper, Cake, Sparkles } from "lucide-react";
import PhotoGallery from "./PhotoGallery";

interface BirthdayMessageProps {
  name: string;
  message: string;
  photos: string[];
}

const BirthdayMessage = ({ name, message, photos }: BirthdayMessageProps) => {
  const [showPhotos, setShowPhotos] = useState(false);

  return (
    <div className="flex flex-col items-center gap-8 max-w-4xl mx-auto px-4">
      {/* Main greeting */}
      <div className="text-center animate-fade-in-up">
        <div className="flex items-center justify-center gap-3 mb-4">
          <PartyPopper className="w-8 h-8 text-accent animate-wiggle" />
          <Cake className="w-10 h-10 text-primary" />
          <PartyPopper className="w-8 h-8 text-accent animate-wiggle" style={{ animationDelay: "0.2s" }} />
        </div>
        
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-display text-primary mb-4 animate-scale-in">
          Happy Birthday!
        </h1>
        
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-display text-gradient-gold animate-fade-in-up delay-200">
          {name}
        </h2>
      </div>

      {/* Message card */}
      <div className="relative bg-card/80 backdrop-blur-sm rounded-3xl p-6 sm:p-8 md:p-10 shadow-xl border border-primary/20 animate-fade-in-up delay-300 max-w-2xl">
        <div className="absolute -top-3 -left-3">
          <Star className="w-8 h-8 text-accent fill-accent animate-pulse" />
        </div>
        <div className="absolute -top-3 -right-3">
          <Star className="w-8 h-8 text-accent fill-accent animate-pulse" style={{ animationDelay: "0.5s" }} />
        </div>
        <div className="absolute -bottom-3 left-1/2 -translate-x-1/2">
          <Sparkles className="w-6 h-6 text-primary" />
        </div>
        
        <p className="text-lg sm:text-xl md:text-2xl text-foreground leading-relaxed text-center font-medium">
          {message}
        </p>
      </div>

      {/* View photos button */}
      {!showPhotos && (
        <button
          onClick={() => setShowPhotos(true)}
          className="group relative px-8 py-4 bg-gradient-to-r from-primary to-primary/80 text-primary-foreground rounded-full font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 animate-fade-in-up delay-500 glow-primary"
        >
          <span className="relative z-10 flex items-center gap-2">
            View Our Memories Together
            <Sparkles className="w-5 h-5 group-hover:animate-pulse" />
          </span>
          <div className="absolute inset-0 rounded-full animate-shimmer opacity-30" />
        </button>
      )}

      {/* Photo Gallery */}
      {showPhotos && (
        <div className="w-full animate-fade-in-up">
          <PhotoGallery photos={photos} />
        </div>
      )}

      {/* Footer message */}
      <div className="text-center mt-8 animate-fade-in-up delay-700">
        <p className="text-muted-foreground text-lg flex items-center justify-center gap-2">
          Thanks me by sending me some money
        </p>
      </div>
    </div>
  );
};

export default BirthdayMessage;
