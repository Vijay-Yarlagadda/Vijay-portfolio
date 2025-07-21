import React, { useEffect, useRef, useState } from "react";
import { Code, MonitorSmartphone, Cpu, ScissorsSquareDashedBottom } from "lucide-react";

const cardBg = '#14162C';
const gray = '#c6c3c3';
const neonOrange = '#FB983D';

const skills = [
  {
    icon: <Code color={neonOrange} size={38} strokeWidth={1.6} style={{ display: 'block', margin: '0 auto' }} />, // Frontend Development
    title: 'Frontend\nDevelopment',
    desc: `I bring ideas to life by designing clean, functional layouts with smooth interactions.\nFor me, frontend is the space where creativity takes shape through structure and detail.`
  },
  {
    icon: <MonitorSmartphone color={neonOrange} size={38} strokeWidth={1.6} style={{ display: 'block', margin: '0 auto' }} />, // UI/UX Designing
    title: 'UI/UX\nDESIGNING',
    desc: `I find the most joy in crafting intuitive and visually engaging user experiences.\nUI/UX design lets me blend creativity with purpose to shape how people interact with digital products.`
  },
  {
    icon: <Cpu color={neonOrange} size={38} strokeWidth={1.6} style={{ display: 'block', margin: '0 auto' }} />, // Programming (changed icon)
    title: 'PROGRAMMING',
    desc: `I enjoy exploring the logic behind code and solving complex patterns with precision.\nLanguages like Java and Python help me turn challenges into structured, efficient solutions.`
  },
  {
    icon: <ScissorsSquareDashedBottom color={neonOrange} size={38} strokeWidth={1.6} style={{ display: 'block', margin: '0 auto' }} />, // Editing
    title: 'EDITING',
    desc: `Editing is something I truly love — it lets me shape emotion, pace, and storytelling.\nI especially enjoy crafting title animations and enhancing the overall feel of a short film.`
  },
];

export default function Skills() {
  const [showHeading, setShowHeading] = useState(false);
  const [showCards, setShowCards] = useState([false, false, false, false]);
  const sectionRef = useRef(null);

  useEffect(() => {
    function onScroll() {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      if (rect.top < window.innerHeight * 0.7) {
        setShowHeading(true);
        setTimeout(() => setShowCards([true, false, false, false]), 120);
        setTimeout(() => setShowCards([true, true, false, false]), 240);
        setTimeout(() => setShowCards([true, true, true, false]), 360);
        setTimeout(() => setShowCards([true, true, true, true]), 480);
        window.removeEventListener('scroll', onScroll);
      }
    }
    window.addEventListener('scroll', onScroll);
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <section id="skills" ref={sectionRef} className="w-full min-h-screen flex flex-col items-center justify-start px-[5vw] pt-[4vh] pb-[8vh] bg-transparent">
      {/* Heading */}
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
          marginTop: '4.2rem',
          textAlign: 'center',
          width: '100%',
          textTransform: 'uppercase',
          opacity: showHeading ? 1 : 0,
          transform: showHeading ? 'translateY(0)' : 'translateY(40px)',
          transition: 'opacity 0.5s cubic-bezier(0.77,0,0.175,1), transform 0.5s cubic-bezier(0.77,0,0.175,1)'
        }}
      >
        MY <span style={{ fontWeight: 700, letterSpacing: '0.01em', fontFamily: 'Mera Pro' }}>SKILLSET</span>
      </h1>
      <div style={{
        color: gray,
        fontFamily: 'Space Grotesk, sans-serif',
        fontSize: '0.9rem',
        marginBottom: '4rem',
        marginLeft: '4px',
        textAlign: 'center',
        fontWeight: 400,
        width: '100%',
        maxWidth: 700,
        opacity: showHeading ? 1 : 0,
        transform: showHeading ? 'translateY(0)' : 'translateY(40px)',
        transition: 'opacity 0.5s 0.08s cubic-bezier(0.77,0,0.175,1), transform 0.5s 0.08s cubic-bezier(0.77,0,0.175,1)'
      }}>
        Turning imagination into real, responsive, and refined creations.
      </div>
      {/* Skill Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 w-full max-w-[1200px]" style={{ marginTop: '1rem' }}>
        {skills.map((skill, i) => (
          <div
            key={i}
            className="flex flex-col items-center justify-between relative overflow-visible group skill-card-glow skill-card-hover"
            style={{
              background: cardBg,
              borderRadius: '32px',
              padding: '1.1rem 2.2rem 0.7rem 2.2rem',
              boxShadow: '0 2px 16px 0 rgba(0,0,0,0.13)',
              textAlign: 'center',
              border: `2.5px solid ${neonOrange}`,
              boxSizing: 'border-box',
              minWidth: 270,
              maxWidth: 320,
              width: '100%',
              height: 'auto',
              minHeight: '210px',
              opacity: showCards[i] ? 1 : 0,
              transform: showCards[i] ? 'translateY(0)' : 'translateY(40px)',
              transition: `opacity 0.85s ${0.18 + i * 0.13}s cubic-bezier(0.77,0,0.175,1), transform 0.85s ${0.18 + i * 0.13}s cubic-bezier(0.77,0,0.175,1)`,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}
          >
            {/* Animated border object */}
            <span className="moving-dot-skill" />
            <span style={{ marginBottom: 12, display: 'flex', justifyContent: 'center', width: '100%' }}>{skill.icon}</span>
            <div style={{
              fontFamily: 'LemonMilk, Space Grotesk, sans-serif',
              fontWeight: 700,
              fontSize: '1.18rem',
              color: '#fff',
              letterSpacing: '0.01em',
              marginBottom: '0.5rem',
              textAlign: 'center',
              whiteSpace: 'pre-line',
              textTransform: 'uppercase',
            }}>{skill.title}</div>
            <div style={{
              fontFamily: 'Space Grotesk, sans-serif',
              color: '#e2bdb3',
              fontSize: '0.93rem',
              fontWeight: 400,
              marginTop: '0.05rem',
              lineHeight: 1.45,
              textAlign: 'center',
              whiteSpace: 'pre-line',
            }}>{skill.desc}</div>
            <style>{`
              .skill-card-hover {
                transition: transform 0.22s cubic-bezier(0.34,1.56,0.64,1) !important;
              }
              .skill-card-hover:hover {
                transform: scale(1.055) !important;
                transition: transform 0.22s cubic-bezier(0.34,1.56,0.64,1) !important;
              }
              .skill-card-glow {
                box-shadow: 0 0 0 2px #FB983D44, 0 0 18px 2px #FB983D55;
                position: relative;
              }
              .skill-card-glow,
              .skill-card-glow[style*='border'] {
                border: 2.5px solid rgba(251, 152, 61, 0.18) !important;
              }
              .moving-dot-skill {
                position: absolute;
                width: 24px;
                height: 2px;
                border-radius: 6px;
                background: #FB983D;
                z-index: 10;
                box-shadow: 0 0 8px 2px #FB983D99;
                animation: move-dot-skill 5s linear infinite;
                offset-path: inset(0 round 32px);
                top: 0;
                left: 0;
              }
              @keyframes move-dot-skill {
                0%   { offset-distance: 0%; }
                100% { offset-distance: 100%; }
              }
            `}</style>
          </div>
        ))}
      </div>
    </section>
  );
}
