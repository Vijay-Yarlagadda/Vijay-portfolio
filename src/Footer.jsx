import React from "react";
import TicTacToe from "./TicTacToe";

const Footer = () => {
  return (
    <footer style={{
      width: '100vw',
      padding: '0 0 0.5rem 0',
      position: 'relative',
      minHeight: '70px',
      border: 'none',
      boxShadow: 'none',
      marginTop: '0',
      zIndex: 2,
      overflow: 'visible',
    }}>
      <div style={{ width: '100vw', height: '14px', overflow: 'hidden' }}>
        <svg
          width="100%"
          height="14"
          viewBox="0 0 1440 14"
          style={{ display: 'block' }}
          className="footer-wave-svg"
        >
          <defs>
            <filter id="wave-glow" x="-20%" y="-50%" width="140%" height="200%">
              <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
              <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>
          <g>
            <g>
              <g id="waveGroup">
                {/* Render enough wave segments to cover 2x the width for seamless looping, with smaller wavelength and height */}
                {Array.from({ length: 96 }).map((_, i) => (
                  <path
                    key={i}
                    d={`M${-32 + i * 32} 7 Q ${-24 + i * 32} 0 ${-16 + i * 32} 7 T ${i * 32} 7`}
                    fill="none"
                    stroke="#00ffe7"
                    strokeWidth="2.2"
                    filter="url(#wave-glow)"
                  />
                ))}
              </g>
              <animateTransform
                xlinkHref="#waveGroup"
                attributeName="transform"
                type="translate"
                from="0 0"
                to="-32 0"
                dur="4.5s"
                repeatCount="indefinite"
              />
            </g>
          </g>
        </svg>
      </div>
      <div style={{
        width: '100vw',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'space-between',
        fontFamily: 'Space Grotesk, sans-serif',
        color: '#f6f5e6',
        fontSize: '1.18rem',
        fontWeight: 400,
        letterSpacing: '0.01em',
        marginTop: '0.2rem',
        marginLeft: 0,
        textShadow: '0 1px 6px #000a',
        pointerEvents: 'auto',
        userSelect: 'none',
        position: 'relative',
        zIndex: 2
      }}>
        <div style={{ marginLeft: '3vw', textAlign: 'left' }}>
          Designed & Built by<br />
          <span style={{ fontWeight: 700, color: '#fff' }}>Vijay Yarlagadda</span>
        </div>
        <TicTacToe />
      </div>
    </footer>
  );
};

export default Footer;