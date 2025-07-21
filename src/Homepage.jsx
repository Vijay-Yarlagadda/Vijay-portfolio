import React from "react";


import { useEffect, useRef, useState } from "react";

function Homepage() {
  const [showName, setShowName] = React.useState(false);
  const [showHello, setShowHello] = React.useState(false);
  const [showNav, setShowNav] = React.useState(false);
  const [showAbout, setShowAbout] = React.useState(false);

  React.useEffect(() => {
    setTimeout(() => setShowName(true), 100);
    setTimeout(() => setShowHello(true), 250);
    setTimeout(() => setShowNav(true), 400);
    setTimeout(() => setShowAbout(true), 600);
  }, []);

  // Keyframes for fadeUpName and fadeUpAbout
  React.useEffect(() => {
    if (typeof window !== 'undefined' && !document.getElementById('fadeup-keyframes')) {
      const style = document.createElement('style');
      style.id = 'fadeup-keyframes';
      style.innerHTML = `
        @keyframes fadeUpName {
          0% { opacity: 0; transform: translateY(60px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeUpAbout {
          0% { opacity: 0; transform: translateY(40px); }
          100% { opacity: 1; transform: translateY(0); }
        }
      `;
      document.head.appendChild(style);
    }
  }, []);

  // Smart animate navigation to About section
  function handleScrollToAbout(e) {
    e.preventDefault();
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.classList.add('animate-fadeUpSection');
      const aboutHeading = aboutSection.querySelector('h2');
      const aboutParas = aboutSection.querySelectorAll('p');
      if (aboutHeading) aboutHeading.classList.add('animate-fadeUpSection');
      aboutParas.forEach(function(p) { p.classList.add('animate-fadeUpSection'); });
      aboutSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setTimeout(function() {
        aboutSection.classList.remove('animate-fadeUpSection');
        if (aboutHeading) aboutHeading.classList.remove('animate-fadeUpSection');
        aboutParas.forEach(function(p) { p.classList.remove('animate-fadeUpSection'); });
        window.location.hash = '#about';
      }, 700);
    }
  }

  // Smart animate navigation to Home section
  function handleScrollToHome(e) {
    e.preventDefault();
    const mainSection = document.querySelector('.name-block');
    if (mainSection) {
      mainSection.classList.add('animate-fadeUpSection');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      setTimeout(function() {
        mainSection.classList.remove('animate-fadeUpSection');
        window.location.hash = '';
      }, 700);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      window.location.hash = '';
    }
  }

  // Smart animate for nav links
  function handleScrollToEducation(e) {
    e.preventDefault();
    const eduSection = document.getElementById('education');
    if (eduSection) {
      eduSection.classList.add('animate-fadeUpSection');
      const eduHeading = eduSection.querySelector('h1');
      if (eduHeading) eduHeading.classList.add('animate-fadeUpSection');
      eduSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setTimeout(function() {
        eduSection.classList.remove('animate-fadeUpSection');
        if (eduHeading) eduHeading.classList.remove('animate-fadeUpSection');
        window.location.hash = '#education';
      }, 700);
    }
  }

  // Smart animate for nav links
  function handleScrollToSkills(e) {
    e.preventDefault();
    const skillsSection = document.getElementById('skills');
    if (skillsSection) {
      skillsSection.classList.add('animate-fadeUpSection');
      const skillsHeading = skillsSection.querySelector('h1');
      if (skillsHeading) skillsHeading.classList.add('animate-fadeUpSection');
      skillsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setTimeout(function() {
        skillsSection.classList.remove('animate-fadeUpSection');
        if (skillsHeading) skillsHeading.classList.remove('animate-fadeUpSection');
        window.location.hash = '#skills';
      }, 700);
    }
  }

  function handleNavClick(e, href) {
    if (href === '#about') {
      handleScrollToAbout(e);
    } else if (href === '#home') {
      handleScrollToHome(e);
    } else if (href === '#education') {
      handleScrollToEducation(e);
    } else if (href === '#skills') {
      handleScrollToSkills(e);
    } else {
      e.preventDefault();
      window.location.hash = href;
    }
  }

  return (
    <>
      {/* Navbar (animated) */}
      <nav
        className={`w-full flex items-center justify-between px-8 py-4 fixed top-0 left-0 z-50 bg-transparent transition-opacity duration-700 ${showNav ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
      >
        <span
          className="text-2xl font-bold"
          style={{
            fontFamily: 'Goldman, sans-serif',
            background: 'linear-gradient(to bottom, #FFE27A, #E5B300, #6B5314)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            color: 'transparent',
            display: 'inline-block',
            transition: 'opacity 0.7s',
            opacity: showNav ? 1 : 0
          }}
        >
          portfolio.
        </span>
        <ul className="flex gap-8 text-[#9d9c97] text-lg font-thin">
          {[
            { href: "#home", label: "Home" },
            { href: "#about", label: "About" },
            { href: "#education", label: "Education" },
            { href: "#skills", label: "Skills" },
            { href: "#contact", label: "Contact" },
          ].map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="transition-colors duration-300"
                style={{ fontFamily: 'Goldman, sans-serif', fontWeight: 300, color: '#9d9c97', opacity: showNav ? 1 : 0, transition: 'opacity 0.7s' }}
                onClick={e => handleNavClick(e, item.href)}
                onMouseEnter={e => {
                  e.target.style.background = 'linear-gradient(to bottom, #FFE27A, #E5B300, #6B5314)';
                  e.target.style.WebkitBackgroundClip = 'text';
                  e.target.style.WebkitTextFillColor = 'transparent';
                  e.target.style.backgroundClip = 'text';
                  e.target.style.color = 'transparent';
                }}
                onMouseLeave={e => {
                  e.target.style.background = '';
                  e.target.style.WebkitBackgroundClip = '';
                  e.target.style.WebkitTextFillColor = '';
                  e.target.style.backgroundClip = '';
                  e.target.style.color = '#9d9c97';
                  e.target.style.transition = 'none';
                }}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Main Name Block */}
      <div className="name-block flex flex-col items-start pl-[14vw] w-full h-screen bg-transparent z-10 m-0" style={{ paddingTop: '17vh' }}>
        {/* Animated Hello Words (inline with name) */}
        {/* I'M text and HelloWords above name title (positions of both hello words and texts are here)*/}
        <div style={{ width: '100%', display: 'flex', flexDirection: 'row', alignItems: 'flex-end', marginBottom: '-1.2rem', position: 'relative', minHeight: '2.2rem', opacity: showHello ? 1 : 0, transition: 'opacity 0.7s' }}>
          <span style={{ display: 'inline-block', marginBottom: '2.2rem' }}>
            <HelloWords />
          </span>
          {/* I'M text, positioned to the right of HelloWords, on the same line */}
          <span
            style={{
              fontFamily: 'Space Grotesk, sans-serif',
              fontWeight: 700,
              fontSize: '1.18rem',
              color: '#FB983D',
              letterSpacing: '0.04em',
              marginLeft: '0rem',
              marginBottom: '0.18rem',
              opacity: showName ? 1 : 0,
              transform: showName ? 'translateY(0)' : 'translateY(30px)',
              transition: 'opacity 0.6s 0.08s cubic-bezier(0.77,0,0.175,1), transform 0.6s 0.08s cubic-bezier(0.77,0,0.175,1)',
              display: 'inline-block',
              zIndex: 2,
              position: 'relative',
            }}
          >
            I'M
          </span>
        </div>
        <span
          className="first-name"
          style={{
            fontFamily: 'Cinzel, serif',
            fontSize: '8.2rem',
            fontWeight: 400,
            background: 'linear-gradient(to bottom, #FFD700, #F5C542, #7A5B1F)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            color: 'transparent',
            textShadow: '1px 1px 0 #B8860B, 2px 2px 3px #000000',
            animation: showName ? 'fadeUpName 1s 0.1s both cubic-bezier(0.77,0,0.175,1)' : 'none',
            opacity: showName ? 1 : 0,
            transition: 'opacity 0.5s',
            lineHeight: 1.05
          }}
        >
          Vijay Kumar
        </span>
        <span
          className="surname"
          style={{
            fontFamily: 'Cinzel, serif',
            fontSize: '4rem',
            fontWeight: 400,
            marginLeft: '48px',
            marginTop: '12px', // medium gap
            marginBottom: '2.2rem', // add gap under surname
            background: 'linear-gradient(to bottom, #FFD700, #F5C542, #7A5B1F)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            color: 'transparent',
            textShadow: '1px 1px 0 #B8860B, 2px 2px 3px #000000',
            animation: showName ? 'fadeUpName 1s 0.3s both cubic-bezier(0.77,0,0.175,1)' : 'none',
            opacity: showName ? 1 : 0,
            transition: 'opacity 0.5s',
            lineHeight: 1
          }}
        >
          Yarlagadda
        </span>
        {/* Animated About */}
        <div style={{ marginTop: '1.7rem', marginLeft: '77px', opacity: showAbout ? 1 : 0, transition: 'opacity 0.7s' }}>
          <span
            style={{
              fontFamily: 'Space Grotesk, sans-serif',
              fontSize: '1.45rem',
              color: '#c6c3c3',
              display: 'block',
              maxWidth: '700px',
              lineHeight: 1.5,
              animation: showAbout ? 'fadeUpAbout 1s 0.1s both cubic-bezier(0.77,0,0.175,1)' : 'none'
            }}
          >
            I’m a passionate and driven tech enthusiast, shaping ideas into powerful digital experiences.<br/>
            With a bold vision and relentless curiosity, I craft code that speaks with impact — just like a masterpiece.
          </span>
        </div>
      {/* Scroll Down Arrow Button (animated, fade up, continuous bounce, only on home section, not fixed) */}
      <div className="flex justify-center mt-8 ml-[500px] max-w-[740px]">
        <a
          href="#about"
          className={`flex flex-col items-center cursor-pointer transition-opacity duration-300 ${showAbout ? 'opacity-100 pointer-events-auto animate-fadeUpArrow' : 'opacity-0 pointer-events-none'}`}
          style={{ textDecoration: 'none', animationDelay: '2.7s', animationFillMode: 'both' }}
          onClick={handleScrollToAbout}
        >
          <span className="block w-10 h-10 mb-1 relative">
            {/* Down chevron icon, more modern and bold, with bounce animation */}
            <span className="inline-block animate-bounce" style={{animationDuration: '1.2s', animationTimingFunction: 'cubic-bezier(0.77,0,0.175,1)'}}>
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <polyline points="10,16 20,28 30,16" stroke="#FFD700" strokeWidth="4.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
              </svg>
            </span>
          </span>
          <span className="font-[Space Grotesk] text-[1.1rem] text-[#FFD700] tracking-wider mt-0 select-none drop-shadow-[0_1px_2px_rgba(0,0,0,0.13)]">
            Scroll
          </span>
        </a>
      </div>
    </div>
    </>
  );
// Inject keyframes for bounceArrow if not present
if (typeof window !== 'undefined' && !document.getElementById('arrow-keyframes')) {
  const style = document.createElement('style');
  style.id = 'arrow-keyframes';
  style.innerHTML = `@keyframes bounceArrow {0%{transform:translateY(0);}50%{transform:translateY(16px);}100%{transform:translateY(0);}} .animate-bounceArrow{animation:bounceArrow 1.2s infinite cubic-bezier(0.77,0,0.175,1);}`;
  document.head.appendChild(style);
}
// Inject keyframes for bounceArrow if not present
if (typeof window !== 'undefined' && !document.getElementById('arrow-keyframes')) {
  const style = document.createElement('style');
  style.id = 'arrow-keyframes';
  style.appendChild(document.createTextNode(`
    @keyframes bounceArrow {
      0% { transform: translateY(0); }
      50% { transform: translateY(16px); }
      100% { transform: translateY(0); }
    }
    .animate-bounceArrow { animation: bounceArrow 1.2s infinite cubic-bezier(0.77,0,0.175,1); }
  `));
  document.head.appendChild(style);
}
}

// Animated HelloWords component
function HelloWords() {
  const words = [ 'നമസ്കാരം','Hello', 'నమస్తే', 'नमस्ते', 'வணக்கம்', 'ನಮಸ್ಕಾರ'];
  const [activeIdx, setActiveIdx] = useState(0);
  const timeoutRef = useRef();

  useEffect(() => {
    timeoutRef.current = setTimeout(() => {
      setActiveIdx((prev) => (prev + 1) % words.length);
    }, 900);
    return () => clearTimeout(timeoutRef.current);
  }, [activeIdx, words.length]);

  return (
    <div className="hello-words flex flex-col items-start min-h-[1.4rem] mb-0 relative" style={{height: '1.4rem'}}>
      {words.map((word, idx) => (
        <span
          key={word}
          className="hello-word"
          style={{
            fontFamily: 'Mera Pro',
            fontSize: '1.1rem',
            fontWeight: 700,
            color: '#FB983D',
            letterSpacing: '1px',
            lineHeight: 1.05,
            opacity: idx === activeIdx ? 1 : 0,
            transform: idx === activeIdx ? 'translateY(0) scale(1)' : 'translateY(20px) scale(0.95)',
            transition: 'opacity 0.3s, transform 0.3s',
            position: 'absolute',
            left: 0,
            top: 0,
          }}
        >
          {word}
        </span>
      ))}
    </div>
  );
}

export default Homepage;