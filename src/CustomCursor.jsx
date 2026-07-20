import React, { useEffect, useRef } from 'react';

const CustomCursor = () => {
  const cursorRef = useRef(null);

  useEffect(() => {
    let mouseX = -100;
    let mouseY = -100;
    let currentX = -100;
    let currentY = -100;
    let requestRef;

    const onMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const animate = () => {
      // Lerp (Linear Interpolation) smooths out mouse polling judder
      // This guarantees ultra-smooth movement regardless of mouse refresh rate
      currentX += (mouseX - currentX) * 0.4;
      currentY += (mouseY - currentY) * 0.4;

      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${currentX}px, ${currentY}px, 0) translate(-50%, -50%)`;
      }

      requestRef = requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    requestRef = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      cancelAnimationFrame(requestRef);
    };
  }, []);

  return (
    <div 
      ref={cursorRef}
      className="fixed top-0 left-0 pointer-events-none z-[99999]"
      style={{
        width: '32px',
        height: '32px',
        transform: 'translate(-100px, -100px)' // Start hidden
      }}
    >
      <style>
        {`
          @keyframes spinTireInfinite {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `}
      </style>
      
      {/* Brake Caliper (Static Layer) */}
      <svg className="absolute inset-0 w-full h-full" viewBox='0 0 32 32'>
        <path d='M27 9A12 12 0 0 1 30 16H27A9 9 0 0 0 24 10Z' fill='#D5001C'/>
      </svg>
      
      {/* Tire, Rim, and Spokes (Rotating Layer) */}
      <svg 
        className="absolute inset-0 w-full h-full" 
        viewBox='0 0 32 32'
        style={{ animation: 'spinTireInfinite 2.5s linear infinite' }}
      >
        <circle cx='16' cy='16' r='15' fill='#0a0a0a' stroke='#222' strokeWidth='2'/>
        <circle cx='16' cy='16' r='12' fill='none' stroke='#555' strokeWidth='1.5'/>
        <g stroke='#e0e0e0' strokeWidth='3' strokeLinecap='round'>
          <line x1='16' y1='16' x2='16' y2='5'/>
          <line x1='16' y1='16' x2='26.4' y2='12.6'/>
          <line x1='16' y1='16' x2='22.4' y2='24.9'/>
          <line x1='16' y1='16' x2='9.6' y2='24.9'/>
          <line x1='16' y1='16' x2='5.6' y2='12.6'/>
        </g>
        <circle cx='16' cy='16' r='4' fill='#111'/>
        <circle cx='16' cy='16' r='2' fill='#e2b007'/>
      </svg>
    </div>
  );
};

export default CustomCursor;
