import React, { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronDown } from "lucide-react";

function Homepage() {
  const { scrollY } = useScroll();
  
  // 3D Parallax effects
  const y1 = useTransform(scrollY, [0, 1000], [0, 400]);
  const y2 = useTransform(scrollY, [0, 1000], [0, -200]);
  const scale1 = useTransform(scrollY, [0, 500], [1, 1.2]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  const [showNav, setShowNav] = useState(false);

  useEffect(() => {
    setTimeout(() => setShowNav(true), 500);
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="relative w-full min-h-screen overflow-hidden bg-[#0a0a0a]" id="home">
      {/* Dynamic Background */}
      <motion.div 
        className="absolute inset-0 z-0 opacity-40 pointer-events-none"
        style={{ y: y1, scale: scale1 }}
      >
        <div className="absolute top-1/4 left-1/4 w-[40vw] h-[40vw] bg-[#D5001C] rounded-full blur-[150px] opacity-20 mix-blend-screen" />
        <div className="absolute bottom-1/4 right-1/4 w-[50vw] h-[50vw] bg-[#ffffff] rounded-full blur-[180px] opacity-10 mix-blend-overlay" />
      </motion.div>

      {/* Grid Overlay for technical feel */}
      <div className="absolute inset-0 z-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

      {/* Navigation */}
      <motion.nav 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: showNav ? 1 : 0 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-0 left-0 w-full z-50 px-8 py-6 flex justify-between items-center glass-panel border-t-0 border-l-0 border-r-0 rounded-none"
      >
        <div className="text-xl font-bold tracking-[0.2em] uppercase text-white">
          <span className="text-[#D5001C]">V</span>ijay.
        </div>
        <ul className="hidden md:flex gap-10 text-sm font-medium tracking-[0.1em] text-[#888]">
          {['Home', 'About', 'Education', 'Skills', 'Contact'].map((item) => (
            <li key={item}>
              <button 
                onClick={() => scrollTo(item.toLowerCase())}
                className="hover:text-white transition-colors duration-300 uppercase relative group"
              >
                {item}
                <span className="absolute -bottom-2 left-0 w-0 h-[2px] bg-[#D5001C] transition-all duration-300 group-hover:w-full" />
              </button>
            </li>
          ))}
        </ul>
      </motion.nav>

      {/* Hero Content */}
      <div className="relative z-10 w-full h-screen flex flex-col justify-center px-[8vw] md:px-[14vw]">
        <motion.div 
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col"
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-[2px] bg-[#D5001C]" />
            <p className="text-[#D5001C] font-semibold tracking-[0.2em] uppercase text-sm">Design & Engineering</p>
          </div>
          
          <h1 className="text-[12vw] md:text-[8vw] leading-[0.9] font-bold text-white tracking-tighter uppercase" style={{ perspective: "1000px" }}>
            <motion.div
              initial={{ rotateX: 45, opacity: 0 }}
              animate={{ rotateX: 0, opacity: 1 }}
              transition={{ duration: 1.5, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            >
              Vijay <span className="text-transparent stroke-text" style={{ WebkitTextStroke: "2px #333", color: "transparent" }}>Kumar</span>
            </motion.div>
            <motion.div
              initial={{ rotateX: -45, opacity: 0, y: 50 }}
              animate={{ rotateX: 0, opacity: 1, y: 0 }}
              transition={{ duration: 1.5, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="text-gradient"
            >
              Yarlagadda
            </motion.div>
          </h1>
          
          <motion.p 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 1, ease: "easeOut" }}
            className="mt-8 text-lg md:text-xl text-[#888] max-w-[600px] font-light leading-relaxed border-l-2 border-[#333] pl-6"
          >
            Precision engineering meets high-performance design. 
            Crafting digital experiences with uncompromising quality and speed.
          </motion.p>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        style={{ opacity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
      >
        <span className="text-xs tracking-[0.3em] uppercase text-[#666]">Scroll</span>
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