import React from "react";

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
      <div style={{ width: '100vw', height: '36px', overflow: 'hidden' }}>
        <svg
          width="100%"
          height="36"
          viewBox="0 0 1440 36"
          style={{ display: 'block' }}
          className="footer-wave-svg"
        >
          <g>
            <g>
              <g id="waveGroup">
                {/* Render enough wave segments to cover 2x the width for seamless looping */}
                {Array.from({ length: 48 }).map((_, i) => (
                  <path
                    key={i}
                    d={`M${-64 + i * 64} 18 Q ${-48 + i * 64} 0 ${-32 + i * 64} 18 T ${i * 64} 18`}
                    fill="none"
                    stroke="#f6f5e6"
                    strokeWidth="4"
                  />
                ))}
              </g>
              <animateTransform
                xlinkHref="#waveGroup"
                attributeName="transform"
                type="translate"
                from="0 0"
                to="-64 0"
                dur="2.5s"
                repeatCount="indefinite"
              />
            </g>
          </g>
        </svg>
      </div>
      <div style={{
        width: '100vw',
        textAlign: 'left',
        fontFamily: 'Space Grotesk, sans-serif',
        color: '#f6f5e6',
        fontSize: '1.18rem',
        fontWeight: 400,
        letterSpacing: '0.01em',
        marginTop: '0.2rem',
        marginLeft: '3vw',
        textShadow: '0 1px 6px #000a',
        pointerEvents: 'auto',
        userSelect: 'none',
      }}>
        Designed & Built by <span style={{ fontWeight: 700, color: '#fff' }}>Vijay Yarlagadda</span>
      </div>
    </footer>
  );
};

export default Footer;
