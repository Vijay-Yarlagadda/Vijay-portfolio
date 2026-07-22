import React, { useState, useRef } from "react";

export default function NavbarCar({ scrolled }) {
  const [isHovered, setIsHovered] = useState(false);
  const [isBoosted, setIsBoosted] = useState(false);
  const [showSpeech, setShowSpeech] = useState(false);
  const [speechText, setSpeechText] = useState("VROOM!");
  const [boostStartLeft, setBoostStartLeft] = useState("20%");
  
  const carRef = useRef(null);

  // Speech bubble phrases
  const phrases = ["BEEP BEEP!", "VROOM!", "PORSCHE!", "911 GT3 RS", "FAST!", "PRECISION!"];

  const handleCarClick = (e) => {
    e.stopPropagation(); // Avoid triggering any nav links
    if (isBoosted) return;

    // Capture the current left position of the car to start the boost from there
    if (carRef.current) {
      const parentRect = carRef.current.offsetParent?.getBoundingClientRect();
      const carRect = carRef.current.getBoundingClientRect();
      if (parentRect && carRect) {
        const leftPercent = ((carRect.left - parentRect.left) / parentRect.width) * 100;
        setBoostStartLeft(`${leftPercent}%`);
      }
    }

    // Choose a random phrase
    const randomPhrase = phrases[Math.floor(Math.random() * phrases.length)];
    setSpeechText(randomPhrase);
    setShowSpeech(true);
    setIsBoosted(true);

    // Fade out speech bubble after 1.2s
    setTimeout(() => {
      setShowSpeech(false);
    }, 1200);

    // Reset boost state after animation completes
    setTimeout(() => {
      setIsBoosted(false);
    }, 2000);
  };

  const animStyle = {
    "--boost-start": boostStartLeft,
    animation: isBoosted 
      ? "boost-across 1.8s cubic-bezier(0.15, 0.85, 0.35, 1) forwards"
      : "drive-across 20s linear infinite"
  };

  const rumbleStyle = {
    animation: isHovered 
      ? "rumble-high 0.08s linear infinite" 
      : "rumble-low 0.15s linear infinite"
  };

  return (
    <>
      {/* 1. CLIPPED CONTAINER (For the car body, underglow, lights) */}
      <div 
        className={`absolute inset-0 overflow-hidden pointer-events-none z-10 ${
          scrolled ? "rounded-full" : "rounded-none"
        }`}
      >
        <div
          ref={carRef}
          className="absolute bottom-[-1px] md:bottom-[-2px] h-[15px] md:h-[18px] w-[55px] md:w-[66px] pointer-events-auto cursor-pointer group"
          onClick={handleCarClick}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          style={animStyle}
        >
          {/* Car Image and Wrapper with Engine Rumble */}
          <div className="relative w-full h-full" style={rumbleStyle}>
            {/* Taillight glow */}
            <div 
              className="absolute left-[0px] top-[4px] md:top-[5px] w-[3px] h-[2px] bg-[#D5001C] rounded-full transition-transform duration-300"
              style={{
                boxShadow: isHovered ? "0 0 10px #ff0000, 0 0 15px #ff0000" : "0 0 5px #ff0000"
              }}
            />

            {/* Underglow (Red neon) */}
            <div 
              className="absolute left-[8px] bottom-[1px] w-[38px] md:w-[46px] h-[2px] bg-[#D5001C]/80 blur-[1.5px] rounded-full transition-all duration-300"
              style={{
                opacity: isHovered ? 1 : 0.6,
                background: isHovered ? "#ff0000" : "#D5001C"
              }}
            />

            {/* The flipped Porsche cutout */}
            <img 
              src="/porsche_nav_car.png" 
              alt="Porsche 911 GT3 RS" 
              className="w-full h-full object-contain pointer-events-none select-none"
            />
          </div>
        </div>
      </div>

      {/* 2. UNCLIPPED CONTAINER (For the speech bubble/honk text) */}
      <div className="absolute inset-0 overflow-visible pointer-events-none z-20">
        <div
          className="absolute bottom-[-1px] md:bottom-[-2px] h-[15px] md:h-[18px] w-[55px] md:w-[66px]"
          style={animStyle}
        >
          {/* Synchronized movement wrapper */}
          <div className="relative w-full h-full" style={rumbleStyle}>
            {/* Speech Bubble / Honk Text */}
            {showSpeech && (
              <div 
                className="absolute top-[-32px] left-1/2 -translate-x-1/2 bg-white text-black px-2 py-0.5 rounded text-[8px] md:text-[9px] font-bold uppercase tracking-wider shadow-[0_4px_12px_rgba(0,0,0,0.25)] border border-black/10 select-none"
                style={{
                  animation: "animate-bubble 1.2s ease-out forwards"
                }}
              >
                {speechText}
                <div className="absolute bottom-[-4px] left-1/2 -translate-x-1/2 w-0 h-0 border-l-[4px] border-l-transparent border-r-[4px] border-r-transparent border-t-[4px] border-t-white" />
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Styled keyframe injections for performance and consistency */}
      <style>{`
        @keyframes drive-across {
          0% {
            left: -80px;
          }
          /* Drives across the screen in 14s (70% of 20s) */
          70% {
            left: 100%;
          }
          /* Pauses off-screen for 6s (30% of 20s) */
          100% {
            left: 100%;
          }
        }

        @keyframes boost-across {
          0% {
            left: var(--boost-start, 0%);
          }
          100% {
            left: 105%;
          }
        }

        @keyframes rumble-low {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-0.4px); }
        }

        @keyframes rumble-high {
          0%, 100% { transform: translateY(0) rotate(0.2deg); }
          25% { transform: translateY(-0.8px) rotate(-0.2deg); }
          75% { transform: translateY(-0.4px) rotate(0.2deg); }
        }

        @keyframes animate-bubble {
          0% { opacity: 0; transform: translate(-50%, 5px) scale(0.8); }
          15% { opacity: 1; transform: translate(-50%, 0) scale(1); }
          85% { opacity: 1; transform: translate(-50%, 0) scale(1); }
          100% { opacity: 0; transform: translate(-50%, -5px) scale(0.9); }
        }
      `}</style>
    </>
  );
}
