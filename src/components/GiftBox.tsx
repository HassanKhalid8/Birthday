import { useState } from "react";
import { Gift } from "lucide-react";

interface GiftBoxProps {
  onOpen: () => void;
}

const GiftBox = ({ onOpen }: GiftBoxProps) => {
  const [isOpening, setIsOpening] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleClick = () => {
    setIsOpening(true);
    setTimeout(() => {
      onOpen();
    }, 800);
  };

  return (
    <div className="flex flex-col items-center gap-6 animate-bounce-in">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-display text-primary animate-fade-in-up">
        You have a gift! 🎉
      </h2>
      <p className="text-muted-foreground text-lg animate-fade-in-up delay-200">
        Click to open your surprise!
      </p>
      
      <button
        onClick={handleClick}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className={`relative cursor-pointer transition-all duration-300 ${
          isHovered && !isOpening ? "animate-gift-shake" : ""
        } ${isOpening ? "pointer-events-none" : ""}`}
        disabled={isOpening}
      >
        {/* Gift Box */}
        <div className="relative">
          {/* Lid */}
          <div
            className={`absolute -top-8 left-1/2 -translate-x-1/2 w-44 h-12 bg-gradient-to-b from-primary to-primary/90 rounded-t-xl shadow-lg z-10 ${
              isOpening ? "animate-lid-open" : ""
            }`}
          >
            {/* Bow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-6 bg-accent rounded-full" />
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 flex gap-1">
              <div className="w-6 h-8 bg-accent rounded-full -rotate-45 origin-bottom-right" />
              <div className="w-6 h-8 bg-accent rounded-full rotate-45 origin-bottom-left" />
            </div>
          </div>
          
          {/* Box Body */}
          <div className="w-40 h-32 bg-gradient-to-b from-primary to-primary/80 rounded-xl shadow-2xl flex items-center justify-center glow-primary">
            {/* Ribbon vertical */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-8 h-full bg-accent/80" />
            {/* Ribbon horizontal */}
            <div className="absolute top-1/2 left-0 -translate-y-1/2 w-full h-8 bg-accent/80" />
            
            <Gift className="w-12 h-12 text-primary-foreground relative z-10" />
          </div>
          
          {/* Sparkles around gift */}
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="absolute w-3 h-3 bg-accent rounded-full animate-sparkle"
              style={{
                top: `${Math.random() * 100 - 50}%`,
                left: `${Math.random() * 100 + (i % 2 === 0 ? -30 : 100)}%`,
                animationDelay: `${i * 0.3}s`,
              }}
            />
          ))}
        </div>
      </button>
      
      <p className="text-sm text-muted-foreground animate-pulse mt-4">
        Tap the gift to reveal your surprise ✨
      </p>
    </div>
  );
};

export default GiftBox;
