import React from "react";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="w-full bg-transparent border-t border-[#333] py-12 px-8 relative overflow-hidden">
      {/* Porsche Taillight Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[4px] bg-gradient-to-r from-transparent via-[#D5001C] to-transparent shadow-[0_0_20px_#D5001C,0_0_40px_#D5001C]" />
      
      {/* Spider-Man holding Gwen Stacy Hanging Easter Egg */}
      <motion.div 
        initial={{ y: -30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="absolute top-0 right-10 md:right-24 z-20 origin-top pointer-events-auto cursor-pointer group"
        title="Spider-Man & Gwen Stacy"
      >
        {/* Smooth Pendulum Sway */}
        <motion.div
          animate={{ rotate: [-6, 6, -6] }}
          transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
          className="origin-top flex flex-col items-center"
        >
          {/* Colorful SVG Illustration: Spidey holding Gwen */}
          <svg width="84" height="105" viewBox="0 0 84 105" fill="none" xmlns="http://www.w3.org/2000/svg" className="drop-shadow-[0_10px_20px_rgba(213,0,28,0.3)]">
            {/* Web Strand */}
            <line x1="42" y1="0" x2="42" y2="30" stroke="white" strokeWidth="2" strokeDasharray="4 2" opacity="0.9" />

            {/* Spider-Man upside down head */}
            <ellipse cx="42" cy="42" rx="14" ry="16" fill="#D5001C" stroke="#080808" strokeWidth="2" />
            <path d="M42 26V58M28 42H56M32 32L52 52M32 52L52 32" stroke="#080808" strokeWidth="1" opacity="0.5"/>
            {/* Spidey White Eyes */}
            <path d="M34 40C31 35 37 32 40 38C38 41 36 43 34 40Z" fill="white" stroke="#080808" strokeWidth="1.8"/>
            <path d="M50 40C53 35 47 32 44 38C46 41 48 43 50 40Z" fill="white" stroke="#080808" strokeWidth="1.8"/>

            {/* Spidey Torso & Blue Arms holding Gwen */}
            <path d="M30 54C22 60 20 74 30 82C42 86 54 82 56 70C56 60 46 54 38 54Z" fill="#D5001C" stroke="#080808" strokeWidth="1.5"/>
            <path d="M24 62C18 68 16 76 24 80" stroke="#0055FF" strokeWidth="4.5" strokeLinecap="round" />
            <path d="M58 62C64 68 66 76 58 80" stroke="#0055FF" strokeWidth="4.5" strokeLinecap="round" />

            {/* Gwen Stacy (Held safely in Spidey's arms) */}
            {/* Gwen's Blonde Hair */}
            <path d="M30 68C24 64 18 68 16 76C14 84 20 92 28 94C30 86 28 78 30 68Z" fill="#FFE555" stroke="#080808" strokeWidth="1.2" />
            {/* Gwen's Face */}
            <ellipse cx="38" cy="74" rx="8" ry="9" fill="#FFE0BD" stroke="#080808" strokeWidth="1.2"/>
            {/* Eyes & Smile */}
            <circle cx="35" cy="73" r="1.2" fill="#080808" />
            <circle cx="41" cy="73" r="1.2" fill="#080808" />
            <path d="M35 77C37 79 40 79 41 77" stroke="#D5001C" strokeWidth="1.2" strokeLinecap="round" />

            {/* Spider-Gwen Hood & Outfit (White, Pink & Teal Accents) */}
            <path d="M26 78C20 84 22 98 36 98C48 98 50 86 44 78Z" fill="#FFFFFF" stroke="#080808" strokeWidth="1.8"/>
            <path d="M30 82C27 88 30 92 36 93C42 92 45 88 42 82" fill="#FF66B2" opacity="0.9" />
            <path d="M32 90C30 94 40 94 38 90" stroke="#00E5FF" strokeWidth="2.5" strokeLinecap="round" />
          </svg>

          {/* Interactive Tag */}
          <span className="bg-[#D5001C] text-white text-[8px] font-mono tracking-widest px-2 py-0.5 rounded-full uppercase shadow-md group-hover:bg-white group-hover:text-black transition-colors -mt-1">
            Spidey & Gwen
          </span>
        </motion.div>
      </motion.div>

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8 pt-8">
        
        <div className="flex flex-col items-center md:items-start gap-2">
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
          <p className="text-[#666] font-mono text-xs uppercase tracking-widest">
            Performance & Precision Engineering
          </p>
        </div>

        <div className="flex items-center gap-6">
          <motion.a 
            whileHover={{ y: -2 }}
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="text-[#888] hover:text-white font-mono text-sm tracking-widest uppercase transition-colors"
          >
            Back to Top
          </motion.a>
        </div>

      </div>

      <div className="mt-12 text-center text-[#444] font-mono text-[10px] tracking-[0.3em] uppercase">
        © {new Date().getFullYear()} Vijay Yarlagadda. All Systems Operational.
      </div>
    </footer>
  );
};

export default Footer;