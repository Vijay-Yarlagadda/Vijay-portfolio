import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Send, Folder, MoreHorizontal, X } from "lucide-react";

function Homepage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showNav, setShowNav] = useState(false);
  const [showContent, setShowContent] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    setTimeout(() => setShowNav(true), 100);
    setTimeout(() => setShowContent(true), 700);

    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="relative w-full h-screen bg-transparent" id="home">
      
      {/* Navigation */}
      <motion.nav 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: showNav ? 1 : 0 }}
        transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed z-50 left-1/2 -translate-x-1/2 flex items-center transition-all duration-[800ms] ease-[cubic-bezier(0.16,1,0.3,1)] border border-[#333] backdrop-blur-md overflow-visible ${
          scrolled 
            ? "top-6 w-[95%] max-w-[1000px] rounded-full py-3 px-6 md:px-8 bg-[#111]/95 shadow-[0_10px_30px_rgba(0,0,0,0.5)]"
            : "top-0 w-full rounded-none py-6 px-6 md:px-8 bg-black/20 border-t-0 border-l-0 border-r-0"
        }`}
      >
        {/* Porsche GT3 RS Edge Runner Car driving along the top border line of Navbar */}
        <div className="absolute -top-[14px] left-0 w-full h-6 pointer-events-none overflow-hidden rounded-t-full">
          <motion.div
            animate={{ x: ["-10%", "105%"] }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            className="relative flex items-center"
          >
            {/* Mini Porsche 911 GT3 RS SVG */}
            <svg viewBox="0 0 120 45" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-10 h-5 drop-shadow-[0_0_8px_#D5001C]">
              {/* Headlight Beam Glow */}
              <path d="M100 28 L120 20 L120 36 Z" fill="url(#navHeadlightBeam)" opacity="0.7" />
              {/* Taillight Red Speed Trail */}
              <path d="M0 26 L15 26" stroke="#D5001C" strokeWidth="3" strokeLinecap="round" opacity="0.9" />
              {/* Porsche GT3 RS Shell */}
              <path d="M10 30 C12 25, 20 22, 35 18 C50 14, 65 14, 82 22 C92 24, 102 26, 106 30 C108 32, 104 35, 96 36 C80 37, 30 37, 10 36 C6 35, 6 32, 10 30 Z" fill="#141414" stroke="#D5001C" strokeWidth="1.5" />
              <path d="M36 18 C46 12, 62 12, 74 19 Z" fill="#2a2a2a" stroke="#444" strokeWidth="1" />
              {/* GT Wing */}
              <path d="M12 18 L6 14 M6 14 H16" stroke="#D5001C" strokeWidth="2" strokeLinecap="round" />
              {/* LED Lights */}
              <circle cx="102" cy="28" r="2" fill="#FFFFFF" />
              <path d="M12 27 H16" stroke="#D5001C" strokeWidth="2.5" />
              {/* Spinning Wheels */}
              <g className="animate-spin" style={{ transformOrigin: '28px 34px', animationDuration: '0.3s' }}>
                <circle cx="28" cy="34" r="5.5" fill="#0a0a0a" stroke="#666" strokeWidth="1.5" />
                <circle cx="28" cy="34" r="2.5" fill="#D5001C" />
              </g>
              <g className="animate-spin" style={{ transformOrigin: '84px 34px', animationDuration: '0.3s' }}>
                <circle cx="84" cy="34" r="5.5" fill="#0a0a0a" stroke="#666" strokeWidth="1.5" />
                <circle cx="84" cy="34" r="2.5" fill="#D5001C" />
              </g>
              <defs>
                <linearGradient id="navHeadlightBeam" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stop-color="#ffffff" stop-opacity="0.9"/>
                  <stop offset="100%" stop-color="#ffffff" stop-opacity="0"/>
                </linearGradient>
              </defs>
            </svg>
          </motion.div>
        </div>
        <div className="flex items-center justify-between w-full">
          {/* Left: Logo */}
          <div className="flex-shrink-0 md:pr-6">
            <div 
              className="group text-4xl cursor-pointer" 
              style={{ fontFamily: "'Alex Brush', cursive", transform: "translateY(-4px)" }}
              onClick={() => scrollTo('home')}
            >
              <span className="text-[#D5001C] group-hover:text-white transition-colors duration-300">V</span>
              <span className="text-white group-hover:text-[#D5001C] transition-colors duration-300">K</span>
            </div>
          </div>

          {/* Separator 1 (Desktop only) */}
          <div className="hidden lg:block w-[1px] h-8 border-l border-dashed border-[#555] mx-4 transition-all duration-500"></div>

          {/* Middle: Links (Desktop) */}
          <ul className="hidden lg:flex flex-grow justify-center gap-8 text-sm font-medium tracking-[0.1em] text-[#888]">
            {['About', 'Education', 'Skills', 'Projects'].map((item) => (
              <li key={item}>
                <button 
                  onClick={() => scrollTo(item.toLowerCase())}
                  className="hover:text-white transition-colors duration-300 uppercase relative group cursor-pointer pointer-events-auto"
                >
                  {item}
                  <span className="absolute -bottom-2 left-0 w-0 h-[2px] bg-[#D5001C] transition-all duration-300 group-hover:w-full" />
                </button>
              </li>
            ))}
          </ul>

          {/* Separator 2 (Desktop only) */}
          <div className="hidden lg:block w-[1px] h-8 border-l border-dashed border-[#555] mx-4 transition-all duration-500"></div>

          {/* Right: Buttons (Desktop) */}
          <div className="flex-shrink-0 md:pl-6 hidden lg:flex items-center gap-4">
            <button 
              onClick={() => scrollTo('contact')}
              className="px-5 py-2.5 border border-[#555] text-white font-medium tracking-[0.1em] uppercase text-[10px] rounded-full hover:border-white transition-colors duration-300 cursor-pointer pointer-events-auto flex items-center gap-2"
            >
              Message Me <Send className="w-3 h-3" />
            </button>
            <a 
              href="https://drive.google.com/file/d/1XnEA7Q4qsgzvTCQU04GoA2YNvELIa8Eu/view?usp=drive_link" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-5 py-2.5 bg-white text-black font-bold tracking-[0.1em] uppercase text-[10px] rounded-full hover:bg-[#D5001C] hover:text-white transition-colors duration-300 cursor-pointer pointer-events-auto flex items-center gap-2 group"
            >
              Resume <Folder className="w-3 h-3 fill-current" />
            </a>
          </div>

          {/* Mobile Menu Toggle (3 dots) */}
          <div className="lg:hidden flex items-center">
             <button 
               onClick={() => setMobileMenuOpen(true)}
               className="p-2 text-white hover:text-[#D5001C] transition-colors"
             >
               <MoreHorizontal className="w-6 h-6" />
             </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-xl flex flex-col items-center justify-center"
          >
            <button 
              onClick={() => setMobileMenuOpen(false)}
              className="absolute top-8 right-8 p-2 text-white hover:text-[#D5001C] transition-colors"
            >
              <X className="w-8 h-8" />
            </button>
            
            <ul className="flex flex-col items-center gap-8 text-2xl font-bold tracking-[0.15em] text-white uppercase">
              {['About', 'Education', 'Skills', 'Projects', 'Contact'].map((item) => (
                <li key={item}>
                  <button 
                    onClick={() => {
                      setMobileMenuOpen(false);
                      setTimeout(() => scrollTo(item.toLowerCase()), 300);
                    }}
                    className="hover:text-[#D5001C] transition-colors duration-300"
                  >
                    {item}
                  </button>
                </li>
              ))}
              <li className="mt-4">
                <a 
                  href="https://drive.google.com/file/d/1XnEA7Q4qsgzvTCQU04GoA2YNvELIa8Eu/view?usp=drive_link" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="px-8 py-3 bg-[#D5001C] text-white font-bold tracking-[0.1em] uppercase text-xs rounded-full hover:bg-white hover:text-black transition-colors duration-300 flex items-center gap-2"
                >
                  Resume <Folder className="w-4 h-4 fill-current" />
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Background PORSCHE Watermark */}
      <div className="absolute inset-0 overflow-hidden flex items-start pt-[16vh] md:items-center md:pt-0 pointer-events-none select-none z-0 w-full">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.08 }}
          transition={{ duration: 2, ease: "easeOut", delay: 0.5 }}
          className="text-[18vw] md:text-[14vw] font-bold text-white whitespace-nowrap tracking-wider flex"
          style={{ fontFamily: "'Syncopate', sans-serif" }}
        >
          <motion.div
            animate={{ x: ["-50%", "0%"] }}
            transition={{ duration: 150, repeat: Infinity, ease: "linear" }}
            className="flex w-fit"
          >
            <span className="pr-[5vw]">PORSCHE</span>
            <span className="pr-[5vw]">PORSCHE</span>
            <span className="pr-[5vw]">PORSCHE</span>
            <span className="pr-[5vw]">PORSCHE</span>
          </motion.div>
        </motion.div>
      </div>

      {/* Hero Content Overlays */}
      <div className="relative z-10 w-full h-full flex flex-col justify-center px-[8vw] md:px-[14vw] pointer-events-none">
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: showContent ? 1 : 0, y: showContent ? 0 : 30 }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col mt-[10vh]"
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-[2px] bg-[#D5001C]" />
            <p className="text-[#D5001C] font-semibold tracking-[0.3em] uppercase text-xs md:text-sm">Precision Engineering</p>
          </div>
          
          <h1 className="text-[10vw] md:text-[6vw] leading-[0.9] font-bold text-white tracking-tighter uppercase">
            <div className="flex items-baseline gap-4">
              <span>Vijay</span>
              <span className="text-transparent stroke-text" style={{ WebkitTextStroke: "2px #444", color: "transparent" }}>Kumar</span>
            </div>
            <div className="text-gradient mt-2">
              Yarlagadda
            </div>
          </h1>
          
          <motion.p 
            className="mt-8 text-base md:text-lg text-[#888] max-w-[500px] font-light leading-relaxed border-l-2 border-[#333] pl-6"
          >
            High-performance digital experiences crafted with uncompromising quality, speed, and elegance.
          </motion.p>
          
          <motion.button 
            className="mt-12 w-fit px-8 py-4 bg-black/40 backdrop-blur-md border border-[#333] hover:border-[#D5001C] text-white tracking-[0.2em] uppercase text-sm font-medium transition-all duration-500 hover:bg-[#D5001C]/20 hover:shadow-[0_0_20px_rgba(213,0,28,0.2)] pointer-events-auto"
            onClick={() => scrollTo('about')}
          >
            Explore Portfolio
          </motion.button>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: showContent ? 1 : 0 }}
        transition={{ duration: 2, delay: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 pointer-events-none"
      >
        <span className="text-xs tracking-[0.3em] uppercase text-[#666]">Scroll to explore</span>
        <motion.div 
          animate={{ y: [0, 10, 0] }} 
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="w-5 h-5 text-[#D5001C]" />
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Homepage;
