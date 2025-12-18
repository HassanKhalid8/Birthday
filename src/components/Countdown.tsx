import { useState, useEffect } from "react";

interface CountdownProps {
  targetDate: Date;
  onComplete: () => void;
}

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const CountdownUnit = ({ value, label, delay }: { value: number; label: string; delay: string }) => (
  <div className={`flex flex-col items-center animate-bounce-in ${delay}`}>
    <div className="relative">
      <div className="w-20 h-24 sm:w-28 sm:h-32 md:w-32 md:h-36 bg-card rounded-2xl shadow-lg flex items-center justify-center border-2 border-primary/20 overflow-hidden group hover:scale-105 transition-transform duration-300">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />
        <span className="text-4xl sm:text-5xl md:text-6xl font-bold text-primary relative z-10 font-body">
          {value.toString().padStart(2, "0")}
        </span>
        <div className="absolute inset-0 animate-shimmer opacity-50" />
      </div>
      <div className="absolute -top-2 -right-2 w-4 h-4 bg-accent rounded-full animate-sparkle" />
      <div className="absolute -bottom-1 -left-1 w-3 h-3 bg-primary rounded-full animate-sparkle delay-500" />
    </div>
    <span className="mt-3 text-sm sm:text-base font-semibold text-muted-foreground uppercase tracking-wider">
      {label}
    </span>
  </div>
);

const Countdown = ({ targetDate, onComplete }: CountdownProps) => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = targetDate.getTime() - new Date().getTime();

      if (difference <= 0) {
        setIsComplete(true);
        onComplete();
        return { days: 0, hours: 0, minutes: 0, seconds: 0 };
      }

      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    };

    setTimeLeft(calculateTimeLeft());
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate, onComplete]);

  if (isComplete) return null;

  return (
    <div className="flex flex-col items-center gap-8">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-display text-primary animate-fade-in-up">
        Something special is coming...
      </h2>
      <div className="flex gap-3 sm:gap-4 md:gap-6 flex-wrap justify-center">
        <CountdownUnit value={timeLeft.days} label="Days" delay="delay-100" />
        <CountdownUnit value={timeLeft.hours} label="Hours" delay="delay-200" />
        <CountdownUnit value={timeLeft.minutes} label="Minutes" delay="delay-300" />
        <CountdownUnit value={timeLeft.seconds} label="Seconds" delay="delay-400" />
      </div>
    </div>
  );
};

export default Countdown;
