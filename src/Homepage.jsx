import React, { useEffect, useState } from "react";
import { motion, useScroll } from "framer-motion";
import { Canvas } from "@react-three/fiber";
import { ReactLenis } from 'lenis/react';
import CarRevealScene from "./components/CarRevealScene";
import { FaGithub, FaLinkedinIn, FaInstagram, FaTwitter } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { ChevronDown } from "lucide-react";

function Homepage() {
  const { scrollYProgress } = useScroll();
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    // Show content slightly after mount to allow 3D lights to blink on
    setTimeout(() => setShowContent(true), 1500);
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <ReactLenis root>
      <div className="relative w-full min-h-[200vh] bg-[#050505]" id="home">
        
        {/* Fixed 3D Canvas Background (The Wings & Porsche Eyes) */}
        <div className="fixed inset-0 z-0 pointer-events-none">
          <Canvas shadows gl={{ antialias: false }}>
            <CarRevealScene scrollProgress={scrollYProgress} />
          </Canvas>
        </div>

        {/* Navigation Layer */}
        <motion.nav 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="fixed top-0 left-0 w-full z-50 px-8 py-8 flex justify-between items-center"
        >
          <div className="text-xl font-bold tracking-tight text-white font-syncopate lowercase">
            portfolio.
          </div>
          
          <ul className="hidden md:flex gap-10 text-base font-medium text-white">
            {['Education', 'Skills', 'Contact'].map((item) => (
              <li key={item}>
                <button 
                  onClick={() => scrollTo(item.toLowerCase())}
                  className="hover:text-[#00e5ff] transition-colors duration-300 pointer-events-auto"
                >
                  {item}
                </button>
              </li>
            ))}
          </ul>
        </motion.nav>

        {/* Hero Content Overlay (Text & Socials) */}
        <div className="relative z-10 w-full h-screen flex flex-col items-center justify-center pointer-events-none pt-[5vh]">
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: showContent ? 1 : 0, scale: showContent ? 1 : 0.95 }}
            transition={{ duration: 2, ease: "easeOut" }}
            className="flex flex-col items-center text-center"
          >
            
            {/* Title */}
            <h1 className="font-syncopate font-bold leading-tight flex flex-col items-center">
              <span className="text-[12vw] md:text-[7vw] text-gradient-metallic tracking-wider drop-shadow-lg">
                YARLAGADDA
              </span>
              <span className="text-[8vw] md:text-[5vw] text-[#dcdcdc] tracking-widest mt-[-1vw] drop-shadow-md">
                VIJAY KUMAR
              </span>
            </h1>
            
            <p className="mt-4 font-syncopate text-[#aaaaaa] tracking-[0.3em] text-sm md:text-base font-bold">
              UI UX DESI
            </p>

            {/* Social Pill */}
            <motion.div 
              className="mt-10 social-pill px-10 py-4 flex items-center gap-8 pointer-events-auto border border-[#802a66]"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <a href="#" className="flex flex-col items-center group">
                <div className="w-10 h-10 rounded-full bg-[#1db954] flex items-center justify-center text-black text-xl mb-1 shadow-[0_0_15px_rgba(29,185,84,0.5)]">
                  <FaGithub />
                </div>
                <span className="text-[10px] text-white opacity-0 group-hover:opacity-100 transition-opacity absolute -bottom-4">Github</span>
              </a>
              <a href="#" className="text-[#a07490] hover:text-white text-2xl transition-colors"><FaLinkedinIn /></a>
              <a href="#" className="text-[#a07490] hover:text-white text-3xl transition-colors"><MdEmail /></a>
              <a href="#" className="text-[#a07490] hover:text-white text-2xl transition-colors"><FaInstagram /></a>
              <a href="#" className="text-[#a07490] hover:text-white text-2xl transition-colors"><FaTwitter /></a>
            </motion.div>

          </motion.div>

        </div>

        {/* Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: showContent ? 1 : 0 }}
          transition={{ duration: 2, delay: 1 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center pointer-events-none"
        >
          <motion.div 
            animate={{ y: [0, 8, 0] }} 
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center"
          >
            <ChevronDown className="w-5 h-5 text-white mb-[-8px] opacity-70" />
            <ChevronDown className="w-5 h-5 text-white" />
          </motion.div>
          <span className="text-xs tracking-widest text-[#aaaaaa] mt-2 lowercase">scroll</span>
        </motion.div>

      </div>
    </ReactLenis>
  );
}

export default Homepage;