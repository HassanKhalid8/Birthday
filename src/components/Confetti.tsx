import { useEffect, useState } from "react";

interface ConfettiPiece {
  id: number;
  x: number;
  color: string;
  delay: number;
  duration: number;
  size: number;
  rotation: number;
}

const Confetti = () => {
  const [pieces, setPieces] = useState<ConfettiPiece[]>([]);

  useEffect(() => {
    const colors = [
      "hsl(340, 75%, 55%)", // primary rose
      "hsl(42, 95%, 55%)",  // gold
      "hsl(340, 80%, 70%)", // light rose
      "hsl(42, 90%, 75%)",  // light gold
      "hsl(280, 70%, 60%)", // purple
      "hsl(200, 70%, 60%)", // blue
    ];

    const newPieces: ConfettiPiece[] = [];
    for (let i = 0; i < 100; i++) {
      newPieces.push({
        id: i,
        x: Math.random() * 100,
        color: colors[Math.floor(Math.random() * colors.length)],
        delay: Math.random() * 2,
        duration: 3 + Math.random() * 2,
        size: 8 + Math.random() * 8,
        rotation: Math.random() * 360,
      });
    }
    setPieces(newPieces);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-50">
      {pieces.map((piece) => (
        <div
          key={piece.id}
          className="absolute"
          style={{
            left: `${piece.x}%`,
            top: "-20px",
            width: `${piece.size}px`,
            height: `${piece.size}px`,
            backgroundColor: piece.color,
            borderRadius: Math.random() > 0.5 ? "50%" : "2px",
            transform: `rotate(${piece.rotation}deg)`,
            animation: `confetti-fall ${piece.duration}s linear ${piece.delay}s infinite`,
          }}
        />
      ))}
    </div>
  );
};

export default Confetti;
