import { Star, Sparkles, PartyPopper, Gift } from "lucide-react";

const FloatingElements = () => {
  const elements = [
    { Icon: Star, className: "top-[10%] left-[5%] text-primary/30", delay: "0s", size: 24 },
    { Icon: Sparkles, className: "top-[20%] right-[10%] text-accent/40", delay: "0.5s", size: 20 },
    { Icon: PartyPopper, className: "top-[60%] left-[8%] text-accent/30", delay: "1s", size: 28 },
    { Icon: Gift, className: "top-[40%] right-[5%] text-primary/25", delay: "1.5s", size: 32 },
    { Icon: Star, className: "bottom-[30%] left-[15%] text-accent/35", delay: "2s", size: 22 },
    { Icon: Sparkles, className: "bottom-[20%] right-[12%] text-primary/30", delay: "0.3s", size: 26 },
    { Icon: PartyPopper, className: "top-[75%] left-[3%] text-accent/25", delay: "0.8s", size: 18 },
    { Icon: Star, className: "top-[5%] right-[25%] text-primary/20", delay: "1.2s", size: 16 },
  ];

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {elements.map((el, index) => (
        <div
          key={index}
          className={`absolute ${el.className} ${index % 2 === 0 ? "animate-float" : "animate-float-slow"}`}
          style={{ animationDelay: el.delay }}
        >
          <el.Icon size={el.size} />
        </div>
      ))}
      
      {/* Gradient orbs */}
      <div className="absolute top-1/4 -left-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -right-20 w-72 h-72 bg-accent/10 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
    </div>
  );
};

export default FloatingElements;
