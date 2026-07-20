import React, { useEffect, useState } from 'react';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    let currentRotation = 0;
    
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
      
      // Calculate movement to determine rotation
      // Moving right/down spins clockwise, left/up spins counter-clockwise
      const distance = e.movementX + e.movementY;
      currentRotation += distance * 1.5; // Multiplier for spin speed
      
      setRotation(currentRotation);
    };

    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div 
      className="fixed top-0 left-0 pointer-events-none z-[99999]"
      style={{
        transform: `translate(${position.x}px, ${position.y}px) translate(-50%, -50%)`,
        width: '32px',
        height: '32px'
      }}
    >
      {/* Brake Caliper (Static Layer) */}
      <svg className="absolute inset-0 w-full h-full" viewBox='0 0 32 32'>
        <path d='M27 9A12 12 0 0 1 30 16H27A9 9 0 0 0 24 10Z' fill='#D5001C'/>
      </svg>
      
      {/* Tire, Rim, and Spokes (Rotating Layer) */}
      <svg 
        className="absolute inset-0 w-full h-full" 
        viewBox='0 0 32 32'
        style={{ 
          transform: `rotate(${rotation}deg)`, 
          transition: 'transform 0.05s linear' 
        }}
      >
        {/* Outer Tire */}
        <circle cx='16' cy='16' r='15' fill='#0a0a0a' stroke='#222' strokeWidth='2'/>
        {/* Rim Outer Edge */}
        <circle cx='16' cy='16' r='12' fill='none' stroke='#555' strokeWidth='1.5'/>
        {/* 5 Spokes */}
        <g stroke='#e0e0e0' strokeWidth='3' strokeLinecap='round'>
          <line x1='16' y1='16' x2='16' y2='5'/>
          <line x1='16' y1='16' x2='26.4' y2='12.6'/>
          <line x1='16' y1='16' x2='22.4' y2='24.9'/>
          <line x1='16' y1='16' x2='9.6' y2='24.9'/>
          <line x1='16' y1='16' x2='5.6' y2='12.6'/>
        </g>
        {/* Center Cap */}
        <circle cx='16' cy='16' r='4' fill='#111'/>
        <circle cx='16' cy='16' r='2' fill='#e2b007'/>
      </svg>
    </div>
  );
};

export default CustomCursor;
