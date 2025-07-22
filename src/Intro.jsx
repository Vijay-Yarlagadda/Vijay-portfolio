import React from "react";
import { useEffect, useState } from "react";

const Intro = () => {
  const [showHomepage, setShowHomepage] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowHomepage(true);
    }, 1000); // Animation duration + buffer

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* Slide reveal keyframes as inline <style> */}
      <style>
        {`
          @keyframes slideReveal {
            0% {
              left: 0%;
              width: 100%;
            }
            100% {
              left: 100%;
              width: 0%;
            }
          }
        `}
      </style>

      {!showHomepage ? (
        <div className="flex justify-center items-center h-screen bg-[#0B0B2D]">
          <div className="relative inline-block">
            <h1 className="text-[36px] font-normal z-10 relative px-2" style={{ fontFamily: 'Space Grotesk, sans-serif', color: '#c6c3c3' }}>
              portfolio
            </h1>
            <div
              className="absolute top-0 left-0 h-full w-full bg-[#FB983D] rounded-sm z-20"
              style={{
                animation: "slideReveal 0.8s ease forwards",
              }}
            ></div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Intro;
