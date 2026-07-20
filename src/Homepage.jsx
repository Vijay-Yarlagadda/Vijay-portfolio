import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown, Send, Folder } from "lucide-react";

function Homepage() {
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
        className={`fixed z-50 left-1/2 -translate-x-1/2 flex items-center transition-all duration-[800ms] ease-[cubic-bezier(0.16,1,0.3,1)] border border-[#333] backdrop-blur-md overflow-hidden ${
          scrolled 
            ? "top-6 w-[95%] max-w-[1000px] rounded-full py-3 px-8 bg-[#111]/95 shadow-[0_10px_30px_rgba(0,0,0,0.5)]"
            : "top-0 w-full rounded-none py-6 px-8 bg-black/20 border-t-0 border-l-0 border-r-0"
        }`}
      >
        <div className="flex items-center justify-between w-full">
          {/* Left: Logo */}
          <div className="flex-shrink-0 md:pr-6">
            <div 
              className="text-4xl text-white cursor-pointer hover:text-[#D5001C] transition-colors duration-300" 
              style={{ fontFamily: "'Alex Brush', cursive", transform: "translateY(-4px)" }}
              onClick={() => scrollTo('home')}
            >
              <span className="text-[#D5001C]">V</span>K
            </div>
          </div>

          {/* Separator 1 */}
          <div className="hidden lg:block w-[1px] h-8 border-l border-dashed border-[#555] mx-4 transition-all duration-500"></div>

          {/* Middle: Links */}
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

          {/* Separator 2 */}
          <div className="hidden lg:block w-[1px] h-8 border-l border-dashed border-[#555] mx-4 transition-all duration-500"></div>

          {/* Right: Buttons */}
          <div className="flex-shrink-0 md:pl-6 hidden md:flex items-center gap-4">
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
        </div>
      </motion.nav>

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