import { useState, useCallback } from "react";
import Countdown from "@/components/Countdown";
import GiftBox from "@/components/GiftBox";
import BirthdayMessage from "@/components/BirthdayMessage";
import Confetti from "@/components/Confetti";
import FloatingElements from "@/components/FloatingElements";

// ========================================
// CUSTOMIZE THESE VALUES FOR YOUR FRIEND!
// ========================================

// Set the birthday date and time
// For testing: 30 seconds from now. Change this to the actual birthday later!
const BIRTHDAY_DATE = new Date(2025, 11, 19, 2, 58, 0);// seconds countdown for testing

// Your friend's name
const FRIEND_NAME = "Jahil Aurat";

// Your personal birthday message
const BIRTHDAY_MESSAGE = `
Wese mujhe kela kha kar yeh sab mehnat nhi karni chaiye thi after what you did at my birthday
likin chalo khair hai. Happy Birthday to the most dumb girl i ever met(wait how can i add emojis
here). Wese i always believe in revenge and instead of writing para, tumhari tarah wish karna 
chaiye tha. wtf mei idhar bhi taunt maraha lol.
Tbh i dont exactly remember when our friendship started and it was more like a E-friendship but
it was golden time. Obviously currently its not same as it was, not gonna blame anyone but ig
its how this whole world work. May you live a happy life and erase all the hardships.May god bless
you with some braincells. Still waiting that 6k gift jo mujhe abhi bhi yaqeen nhi araha. meray se 
gift expect na karna i am poor. haan agar mujhe tumhara gift pasand aya toh kuch socha jaskta hai.
and remember i was always available for you, i am and will be. Just a text away for listening your
rant(soch raha hoon ab charge karna start karloon hehe). Once again happy birthday and here are 
some of our moments.
`;

// Add URLs to your photos together (replace these with real photo URLs)
const PHOTOS = [
  "/photos/1.jpg",
  "/photos/2.jpg",
  "/photos/3.jpg",
  "/photos/4.jpg",
  "/photos/5.jpg",
  "/photos/6.jpg",
  "/photos/7.jpg",
  "/photos/8.jpg",
  "/photos/9.jpg",
];

// ========================================

type Stage = "countdown" | "gift" | "message";

const Index = () => {
  const [stage, setStage] = useState<Stage>("countdown");
  const [showConfetti, setShowConfetti] = useState(false);

  const handleCountdownComplete = useCallback(() => {
    setStage("gift");
  }, []);

  const handleGiftOpen = useCallback(() => {
    setShowConfetti(true);
    setStage("message");
  }, []);

  // For demo: Skip to gift stage if countdown is in the past
  const isCountdownPast = BIRTHDAY_DATE.getTime() <= Date.now();
  
  return (
    <div className="min-h-screen relative overflow-hidden">
      <FloatingElements />
      {showConfetti && <Confetti />}
      
      <main className="relative z-10 min-h-screen flex items-center justify-center py-12 px-4">
        {stage === "countdown" && !isCountdownPast && (
          <Countdown targetDate={BIRTHDAY_DATE} onComplete={handleCountdownComplete} />
        )}
        
        {(stage === "gift" || (stage === "countdown" && isCountdownPast)) && (
          <GiftBox onOpen={handleGiftOpen} />
        )}
        
        {stage === "message" && (
          <BirthdayMessage
            name={FRIEND_NAME}
            message={BIRTHDAY_MESSAGE}
            photos={PHOTOS}
          />
        )}
      </main>
    </div>
  );
};

export default Index;
