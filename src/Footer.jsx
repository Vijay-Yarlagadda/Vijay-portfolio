import React from "react";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="w-full bg-transparent border-t border-[#333] pt-10 pb-24 md:pb-20 md:pt-14 px-6 md:px-12 relative overflow-hidden">
      {/* Porsche Taillight Glow Line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[4px] bg-gradient-to-r from-transparent via-[#D5001C] to-transparent shadow-[0_0_20px_#D5001C,0_0_40px_#D5001C]" />
      
      {/* Spider-Man holding Gwen Stacy Hanging Easter Egg (Attached to top-0 red line) */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="absolute top-0 right-4 sm:right-10 md:right-32 z-20 origin-top pointer-events-auto cursor-pointer group"
        title="The Amazing Spider-Man: Catching Gwen"
      >
        {/* Smooth Pendulum Sway attached directly at top-0 line */}
        <motion.div
          animate={{ rotate: [-3, 3, -3] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="origin-top flex flex-col items-center"
        >
          {/* Top Web Thread connecting directly to top-0 red line */}
          <div className="w-[2px] h-10 md:h-14 bg-gradient-to-b from-[#D5001C] via-white to-white/80 mx-auto drop-shadow-[0_0_6px_#fff]" />

          {/* Sleek Framed Card hanging below the red line */}
          <div className="relative w-20 sm:w-24 md:w-32 rounded-xl border border-[#333] bg-[#0c0c0c]/95 p-1.5 md:p-2 backdrop-blur-md shadow-[0_15px_35px_rgba(0,0,0,0.9)] group-hover:border-[#D5001C] transition-colors overflow-hidden">
            <img 
              src="/spidey_gwen.png" 
              alt="Spider-Man Catching Gwen Stacy Artwork" 
              className="w-full h-auto object-contain rounded-lg filter invert opacity-90 transition-all duration-300 group-hover:opacity-100 group-hover:scale-105"
            />
          </div>

          {/* Interactive Tag */}
          <span className="mt-1.5 bg-[#D5001C] text-white text-[7px] sm:text-[8px] font-mono tracking-widest px-2 py-0.5 rounded-full uppercase shadow-md group-hover:bg-white group-hover:text-black transition-colors whitespace-nowrap">
            Spidey & Gwen
          </span>
        </motion.div>
      </motion.div>

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-8 pt-2">
        
        {/* Left Aligned Text (No overlap on mobile) */}
        <div className="flex flex-col items-start gap-2 max-w-[55%] sm:max-w-[65%] md:max-w-none">
          <div 
            className="group text-4xl cursor-pointer"
            style={{ fontFamily: "'Alex Brush', cursive", transform: "translateY(-4px)" }}
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          >
            <span className="text-[#D5001C] group-hover:text-white transition-colors duration-300">V</span>
            <span className="text-white group-hover:text-[#D5001C] transition-colors duration-300">K</span>
          </div>
          <p className="text-[#666] font-mono text-[10px] sm:text-xs uppercase tracking-widest leading-relaxed">
            Performance & Precision Engineering
          </p>
        </div>

      </div>

      {/* Copyright Footer Notice with spacious clearance */}
      <div className="mt-20 md:mt-16 text-center text-[#444] font-mono text-[9px] sm:text-[10px] tracking-[0.3em] uppercase">
        © {new Date().getFullYear()} Vijay Yarlagadda. All Systems Operational.
      </div>
    </footer>
  );
};

export default Footer;