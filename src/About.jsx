import React from "react";

// Import Space Grotesk font from Google Fonts
if (typeof document !== 'undefined' && !document.getElementById('space-grotesk-font')) {
  const link = document.createElement('link');
  link.id = 'space-grotesk-font';
  link.rel = 'stylesheet';
  link.href = 'https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;700&display=swap';
  document.head.appendChild(link);
}


import { useEffect, useRef, useState } from "react";

function About() {
  const [show, setShow] = useState(false);
  const [showResume, setShowResume] = useState(false);
  const [showParas, setShowParas] = useState([false, false]);
  const sectionRef = useRef(null);

  useEffect(() => {
    function onScroll() {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      if (rect.top < window.innerHeight * 0.7) {
        setShow(true);
        setTimeout(() => setShowResume(true), 80);
        setTimeout(() => setShowParas([true, false]), 120);
        setTimeout(() => setShowParas([true, true]), 160);
        window.removeEventListener('scroll', onScroll);
      }
    }
    window.addEventListener('scroll', onScroll);
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="w-full min-h-screen flex flex-col items-center justify-start pt-[12vh] bg-transparent"
      style={{ textAlign: 'center' }}
    >
      <h2
        style={{
          fontFamily: 'Mera Pro',
          fontWeight: 400,
          fontSize: '3.7rem',
          background: 'linear-gradient(to bottom, #FFD700, #F5C542, #7A5B1F)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          color: 'transparent',
          letterSpacing: '0.03em',
          marginBottom: '1.0rem',
          opacity: show ? 1 : 0,
          transform: show ? 'translateY(0)' : 'translateY(40px)',
          transition: 'opacity 0.5s cubic-bezier(0.77,0,0.175,1), transform 0.5s cubic-bezier(0.77,0,0.175,1)'
        }}
        className="mx-auto"
      >
        About Me
      </h2>
      <div className="w-full max-w-[1200px] mx-auto flex justify-end">
        <a
          href="https://drive.google.com/file/d/1XnEA7Q4qsgzvTCQU04GoA2YNvELIa8Eu/view?usp=drive_link"
          target="_blank"
          rel="noopener noreferrer"
          className="group mt-2 mb-2 px-8 py-2 rounded-full border border-[#3a3552] bg-[#101018] text-[#FFD700] font-bold tracking-wider text-lg inline-block transition-all duration-200 shadow-md hover:border-[#FFD700] focus:outline-none transform hover:scale-110"
          style={{
            fontFamily: 'Space Grotesk, sans-serif',
            letterSpacing: '0.08em',
            boxShadow: '0 0 0 1.5px #2a2740, 0 2px 12px 0 rgba(0,0,0,0.13)',
            opacity: showResume ? 1 : 0,
            transform: showResume ? 'translateX(0)' : 'translateX(60px)',
            transition: 'opacity 0.5s 0.09s cubic-bezier(0.77,0,0.175,1), transform 0.5s 0.09s cubic-bezier(0.77,0,0.175,1)'
          }}
        >
          RESUME
        </a>
      </div>
      <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center', marginTop: '3.2rem', display: 'flex', flexDirection: 'column', gap: '4.5rem' }}>
        <p
          style={{
            fontFamily: 'Space Grotesk, sans-serif',
            fontWeight: 400,
            fontSize: '1.35rem',
            color: '#c6c3c3',
            margin: 0,
            textAlign: 'center',
            lineHeight: 1.6,
            letterSpacing: '0.01em',
            opacity: showParas[0] ? 1 : 0,
            transform: showParas[0] ? 'translateY(0)' : 'translateY(40px)',
            transition: 'opacity 0.5s 0.08s cubic-bezier(0.77,0,0.175,1), transform 0.5s 0.08s cubic-bezier(0.77,0,0.175,1)'
          }}
        >
          I’m passionate about crafting intuitive UI/UX designs and engaging visuals<br/>
          through creative editing.<br/>
          Designing clean, user-friendly interfaces is something I truly enjoy and constantly explore.
        </p>
        <p
          style={{
            fontFamily: 'Space Grotesk, sans-serif',
            fontWeight: 400,
            fontSize: '1.35rem',
            color: '#c6c3c3',
            margin: 0,
            textAlign: 'center',
            lineHeight: 1.6,
            letterSpacing: '0.01em',
            opacity: showParas[1] ? 1 : 0,
            transform: showParas[1] ? 'translateY(0)' : 'translateY(40px)',
            transition: 'opacity 0.5s 0.11s cubic-bezier(0.77,0,0.175,1), transform 0.5s 0.11s cubic-bezier(0.77,0,0.175,1)'
          }}
        >
          I love bringing ideas to life through logic, structure, and well-written code.<br/>
          Solving problems and building seamless digital experiences keeps me motivated every day.
        </p>
      </div>
    </section>
  );
}

export default About;