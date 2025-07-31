// Import Sen font from Google Fonts
if (typeof document !== 'undefined' && !document.getElementById('sen-font')) {
  const link = document.createElement('link');
  link.id = 'sen-font';
  link.rel = 'stylesheet';
  link.href = 'https://fonts.googleapis.com/css2?family=Sen:wght@400&display=swap';
  document.head.appendChild(link);
}
import React from "react";

// Import LemonMilk font from local fonts folder
if (typeof document !== 'undefined' && !document.getElementById('lemonmilk-font')) {
  const link = document.createElement('link');
  link.id = 'lemonmilk-font';
  link.rel = 'stylesheet';
  link.href = '/fonts/LEMONMILK-Regular.woff2'; // Adjust path if needed
  document.head.appendChild(link);
}
// Import Mera Pro font from local fonts folder
if (typeof document !== 'undefined' && !document.getElementById('mera-pro-font')) {
  const link = document.createElement('link');
  link.id = 'mera-pro-font';
  link.rel = 'stylesheet';
  link.href = '/fonts/MeraPro-Regular.woff2'; // Adjust path if needed
  document.head.appendChild(link);
}

const cardBg = '#14162C';
const gold = '#FFD700';
const gray = '#c6c3c3';

import { useEffect, useRef, useState } from "react";

function Education() {
  const [showHeading, setShowHeading] = useState(false);
  const [showCards, setShowCards] = useState([false, false, false]);
  const [stickyMode, setStickyMode] = useState('sticky'); // 'sticky' or 'absolute'
  const sectionRef = useRef(null);
  const cardRefs = [useRef(null), useRef(null), useRef(null)];
  const stickyRef = useRef(null);

  useEffect(() => {
    function onScroll() {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      if (rect.top < window.innerHeight * 0.7) {
        setShowHeading(true);
      }
      cardRefs.forEach((ref, idx) => {
        if (!ref.current) return;
        const cardRect = ref.current.getBoundingClientRect();
        if (cardRect.top < window.innerHeight * 0.82) {
          setShowCards(prev => prev[idx] ? prev : prev.map((v, i) => i === idx ? true : v));
        }
      });
      // Sticky/absolute logic for left column
      if (stickyRef.current && cardRefs[2].current && sectionRef.current) {
        const stickyBox = stickyRef.current.getBoundingClientRect();
        const lastCard = cardRefs[2].current.getBoundingClientRect();
        const sectionRect = sectionRef.current.getBoundingClientRect();
        // If sticky box would go below last card, pin to bottom of section (absolute)
        if (stickyBox.top + stickyBox.height > lastCard.bottom) {
          setStickyMode('absolute');
        } else {
          setStickyMode('sticky');
        }
      }
    }
    window.addEventListener('scroll', onScroll);
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <section id="education" ref={sectionRef} className="w-full min-h-screen flex flex-row items-center justify-start px-[5vw] pt-[4vh] pb-[8vh] bg-transparent relative">
      {/* Sticky Heading+Caption (side-by-side, vertically centered) */}
      <div
        ref={stickyRef}
        style={{
          position: stickyMode === 'sticky' ? 'sticky' : 'absolute',
          top: stickyMode === 'sticky' ? '50%' : stickyMode === 'absolute' ? 'auto' : undefined,
          bottom: stickyMode === 'absolute' ? 0 : undefined,
          left: stickyMode === 'absolute' ? 0 : undefined,
          transform: stickyMode === 'sticky' ? 'translateY(-50%)' : 'none',
          alignSelf: 'flex-start',
          minWidth: '270px',
          maxWidth: '340px',
          marginRight: '4vw',
          marginLeft: '10vw',
          zIndex: 2,
          display: 'flex',
          flexDirection: 'column',
          gap: '0.7rem',
          height: 'fit-content',
        }}
      >
        <h1
          style={{
            fontFamily: 'Mera Pro',
            fontWeight: 400,
            fontSize: '2rem',
            background: 'linear-gradient(to bottom, #FFD700, #F5C542, #7A5B1F)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            color: 'transparent',
            letterSpacing: '0.01em',
            marginBottom: '0.1rem',
            marginTop: '3.4rem',
            textAlign: 'left',
            opacity: showHeading ? 1 : 0,
            transform: showHeading ? 'translateX(0)' : 'translateX(-60px)',
            transition: 'opacity 0.5s cubic-bezier(0.77,0,0.175,1), transform 0.5s cubic-bezier(0.77,0,0.175,1)'
          }}
        >
          MY EDUCATION
        </h1>
        <div style={{
          color: gray,
          fontFamily: 'Space Grotesk, sans-serif',
          fontSize: '0.6rem',
          marginBottom: '2.1rem',
          marginLeft: '4px',
          textAlign: 'left',
          fontWeight: 400,
          opacity: showHeading ? 1 : 0,
          transform: showHeading ? 'translateX(0)' : 'translateX(-60px)',
          transition: 'opacity 0.5s 0.08s cubic-bezier(0.77,0,0.175,1), transform 0.5s 0.08s cubic-bezier(0.77,0,0.175,1)'
        }}>
          A glimpse into my educational path and the places that shaped my learning.
        </div>
      </div>

      {/* Education Cards */}
      <div className="flex flex-col gap-10 w-[65%] ml-auto mr-0">
        {/* Card 1 */}
        <div ref={cardRefs[0]} className="w-full flex flex-col items-center relative overflow-visible group edu-card-glow edu-card-hover" style={{
          background: cardBg,
          borderRadius: '22px',
          padding: '1.7rem 1.7rem 1.3rem 1.7rem',
          boxShadow: '0 2px 16px 0 rgba(0,0,0,0.13)',
          textAlign: 'center',
          border: '2px solid #FB983D',
          boxSizing: 'border-box',
          opacity: showCards[0] ? 1 : 0,
          transform: showCards[0] ? 'translateY(0)' : 'translateY(40px)',
          transition: 'opacity 0.85s 0.18s cubic-bezier(0.77,0,0.175,1), transform 0.85s 0.18s cubic-bezier(0.77,0,0.175,1)'
        }}>
          {/* Animated border object */}
          <span className="moving-dot" />
          <style>{`
            .edu-card-hover {
              transition: transform 0.22s cubic-bezier(0.34,1.56,0.64,1) !important;
            }
            .edu-card-hover:hover {
              transform: scale(1.055) !important;
              transition: transform 0.22s cubic-bezier(0.34,1.56,0.64,1) !important;
            }
            .edu-card-glow {
              box-shadow: 0 0 0 2px #FB983D44, 0 0 12px 2px #FB983D55;
              position: relative;
            }
            .edu-card-glow,
            .edu-card-glow[style*='border'] {
              border: 2px solid rgba(251, 152, 61, 0.18) !important;
            }
            .moving-dot {
              position: absolute;
              width: 24px;
              height: 1px;
              border-radius: 6px;
              background: #FB983D;
              z-index: 10;
              box-shadow: 0 0 8px 2px #FB983D99;
              animation: move-dot 8s linear infinite;
              /* The following makes the dot move along the border using percentages and border-radius */
              offset-path: inset(0 round 22px);
              top: 0;
              left: 0;
            }
            @keyframes move-dot {
              0%   { offset-distance: 0%; }
              100% { offset-distance: 100%; }
            }
          `}</style>
          <span style={{ position: 'absolute', top: '1.3rem', right: '1.7rem', color: gray, fontFamily: 'Space Grotesk, sans-serif', fontWeight: 400, fontSize: '0.92rem' }}>2023 - 2027</span>
          <div style={{
            fontFamily: 'Space Grotesk, sans-serif',
            fontWeight: 700,
            fontSize: '1.35rem',
            color: '#F5C76A',
            letterSpacing: '0.01em',
            marginBottom: '0.18rem',
            textAlign: 'left',
            width: '100%'
          }}>VISHNU INSTITUTE OF TECHNOLOGY</div>
          <div style={{
            fontFamily: 'Sen, sans-serif',
            fontWeight: 400,
            fontSize: '0.95rem',
            color: '#FB983D',
            marginBottom: '0.4rem',
            letterSpacing: '0.01em',
            textAlign: 'center',
            width: '100%'
          }}>B.TECH IN INFORMATION TECHNOLOGY</div>
          <div style={{ fontFamily: 'Space Grotesk, sans-serif', color: gray, fontSize: '0.82rem', fontWeight: 400, marginTop: '0.05rem', lineHeight: 1.45, textAlign: 'center' }}>
            I’ve built a strong foundation in data structures, algorithms, and software development through consistent learning.<br/>
            With a strong academic record, I’ve maintained a CGPA of 9.2 so far.
          </div>
        </div>

        {/* Card 2 */}
        <div ref={cardRefs[1]} className="w-full flex flex-col items-center relative overflow-visible group edu-card-glow edu-card-hover" style={{
          background: cardBg,
          borderRadius: '22px',
          padding: '1.7rem 1.7rem 1.3rem 1.7rem',
          boxShadow: '0 2px 16px 0 rgba(0,0,0,0.13)',
          textAlign: 'center',
          border: '2px solid #FB983D',
          boxSizing: 'border-box',
          opacity: showCards[1] ? 1 : 0,
          transform: showCards[1] ? 'translateY(0)' : 'translateY(40px)',
          transition: 'opacity 0.85s 0.31s cubic-bezier(0.77,0,0.175,1), transform 0.85s 0.31s cubic-bezier(0.77,0,0.175,1)'
        }}>
          <span className="moving-dot" />
          <span style={{ position: 'absolute', top: '1.3rem', right: '1.7rem', color: gray, fontFamily: 'Space Grotesk, sans-serif', fontWeight: 400, fontSize: '0.92rem' }}>2021 - 2023</span>
          <div style={{
            fontFamily: 'Space Grotesk, sans-serif',
            fontWeight: 700,
            fontSize: '1.35rem',
            color: '#F5C76A',
            letterSpacing: '0.01em',
            marginBottom: '0.18rem',
            textAlign: 'left',
            width: '100%'
          }}>CAREER POINT JR COLLEGE</div>
          <div style={{
            fontFamily: 'Sen, sans-serif',
            fontWeight: 400,
            fontSize: '0.95rem',
            color: '#FB983D',
            marginBottom: '0.4rem',
            letterSpacing: '0.01em',
            textAlign: 'center',
            width: '100%'
          }}>INTERMEDIATE (MPC)</div>
          <div style={{ fontFamily: 'Space Grotesk, sans-serif', color: gray, fontSize: '0.82rem', fontWeight: 400, marginTop: '0.05rem', lineHeight: 1.45, textAlign: 'center' }}>
            Developed a strong foundation in Mathematics, Physics, and Chemistry through consistent academic effort.<br/>
            Maintained an academic score of 956, reflecting both subject mastery and disciplined learning.
          </div>
        </div>

        {/* Card 3 */}
        <div ref={cardRefs[2]} className="w-full flex flex-col items-center relative overflow-visible group edu-card-glow edu-card-hover" style={{
          background: cardBg,
          borderRadius: '22px',
          padding: '1.7rem 1.7rem 1.3rem 1.7rem',
          boxShadow: '0 2px 16px 0 rgba(0,0,0,0.13)',
          textAlign: 'center',
          border: '2px solid #FB983D',
          boxSizing: 'border-box',
          opacity: showCards[2] ? 1 : 0,
          transform: showCards[2] ? 'translateY(0)' : 'translateY(40px)',
          transition: 'opacity 0.85s 0.44s cubic-bezier(0.77,0,0.175,1), transform 0.85s 0.44s cubic-bezier(0.77,0,0.175,1)'
        }}>
          <span className="moving-dot" />
          <span style={{ position: 'absolute', top: '1.3rem', right: '1.7rem', color: gray, fontFamily: 'Space Grotesk, sans-serif', fontWeight: 400, fontSize: '0.92rem' }}>~2021</span>
          <div style={{
            fontFamily: 'Space Grotesk, sans-serif',
            fontWeight: 700,
            fontSize: '1.35rem',
            color: '#F5C76A',
            letterSpacing: '0.01em',
            marginBottom: '0.18rem',
            textAlign: 'left',
            width: '100%'
          }}>BHASHYAM E.M SCHOOL</div>
          <div style={{
            fontFamily: 'Sen, sans-serif',
            fontWeight: 400,
            fontSize: '0.95rem',
            color: '#FB983D',
            marginBottom: '0.4rem',
            letterSpacing: '0.01em',
            textAlign: 'center',
            width: '100%'
          }}>SCHOOLING</div>
          <div style={{ fontFamily: 'Space Grotesk, sans-serif', color: gray, fontSize: '0.82rem', fontWeight: 400, marginTop: '0.05rem', lineHeight: 1.45, textAlign: 'center' }}>
            My school journey was filled with joyful learning, balanced with discipline and dedication.<br/>
            I maintained a 100% academic record and scored a perfect 10/10 GPA.
          </div>
        </div>
      </div>
    </section>
  );
}

export default Education;
