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
        className="absolute top-0 right-6 md:right-20 z-20 origin-top pointer-events-auto cursor-pointer group"
        title="The Amazing Spider-Man: Catching Gwen"
      >
        {/* Smooth Pendulum Sway */}
        <motion.div
          animate={{ rotate: [-4, 4, -4] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="origin-top flex flex-col items-center"
        >
          {/* Exact Artwork SVG: Spidey hanging up top, web shooting down catching falling arched Gwen */}
          <svg width="110" height="235" viewBox="0 0 110 235" fill="none" xmlns="http://www.w3.org/2000/svg" className="drop-shadow-[0_10px_25px_rgba(213,0,28,0.4)]">
            {/* Top Web Strand going up */}
            <line x1="50" y1="0" x2="48" y2="22" stroke="white" strokeWidth="2.5" />
            <path d="M48 22 Q46 12 50 0" stroke="white" strokeWidth="1.5" opacity="0.7" />

            {/* SPIDER-MAN (UPPER POSITION) */}
            {/* Extended Arm holding top web */}
            <path d="M48 22 L42 42" stroke="#D5001C" strokeWidth="5.5" strokeLinecap="round" />
            <path d="M48 22 L42 42" stroke="#0055FF" strokeWidth="2.5" strokeLinecap="round" opacity="0.7" />

            {/* Spidey Head */}
            <ellipse cx="44" cy="46" rx="9" ry="11" fill="#D5001C" stroke="#080808" strokeWidth="1.5" />
            {/* White Spidey Eyes */}
            <path d="M41 45 C38 41 43 39 45 44 C43 47 42 48 41 45 Z" fill="white" stroke="#080808" strokeWidth="1.2" />

            {/* Torso & Bent Athletic Body */}
            <path d="M38 48 C32 54 36 70 48 72 C60 74 68 64 64 54 C60 48 44 46 38 48 Z" fill="#D5001C" stroke="#080808" strokeWidth="1.5" />
            {/* Blue Suit Accents */}
            <path d="M42 54 C36 60 40 68 46 68 C52 68 56 60 52 54 Z" fill="#0055FF" opacity="0.9" />
            {/* Bent Legs */}
            <path d="M52 64 C62 62 70 52 74 58 C78 64 68 76 60 74" fill="#0055FF" stroke="#080808" strokeWidth="1.2" />
            <path d="M46 68 C50 78 56 92 60 98" stroke="#D5001C" strokeWidth="5" strokeLinecap="round" />
            <path d="M46 68 C50 78 56 92 60 98" stroke="#0055FF" strokeWidth="2.5" strokeLinecap="round" />

            {/* Lower Arm shooting web straight down */}
            <path d="M42 54 L46 82" stroke="#D5001C" strokeWidth="5" strokeLinecap="round" />

            {/* MIDDLE LONG WEB LINE SHOOTING DOWN */}
            <line x1="46" y1="82" x2="48" y2="155" stroke="white" strokeWidth="2.5" />
            <path d="M44 86 L48 155 M48 82 L46 155" stroke="white" strokeWidth="1" opacity="0.6" />
            {/* Web Splatters along line */}
            <path d="M43 100 L49 105 M48 120 L44 125 M45 140 L50 144" stroke="white" strokeWidth="1.2" />

            {/* WEB CATCHING HAND / MESH AT BOTTOM */}
            <path d="M48 155 C38 160 30 168 25 174 M48 155 C58 160 66 168 72 174 M48 155 L48 175 M42 165 L54 165" stroke="white" strokeWidth="1.8" />

            {/* GWEN STACY (BOTTOM POSITION - FALLING ARCHED BACKWARDS) */}
            {/* Arched Body */}
            <path d="M25 174 C30 162 48 160 65 168 C76 174 85 186 78 200 C72 212 55 210 45 204 C35 198 22 188 25 174 Z" fill="#FFE0BD" stroke="#080808" strokeWidth="1.5" />
            {/* Gwen's Jacket / Outfit (Yellow & Green) */}
            <path d="M30 170 C40 164 56 164 68 172 C74 178 72 192 64 196 C54 200 38 194 30 186 Z" fill="#FFDF00" stroke="#080808" strokeWidth="1.5" />
            <path d="M42 176 C48 174 58 178 60 188 C52 192 40 188 38 182 Z" fill="#10B981" />

            {/* Gwen's Head & Long Flowing Blonde Hair falling downwards */}
            <ellipse cx="28" cy="184" rx="7" ry="8" fill="#FFE0BD" stroke="#080808" strokeWidth="1" />
            {/* Flowing Hair strands falling down */}
            <path d="M26 186 C22 192 18 204 15 215 C14 220 20 224 24 216 C26 208 28 198 30 190 Z" fill="#FFE555" stroke="#080808" strokeWidth="1" />
            <path d="M22 188 C18 198 12 210 10 220 C18 215 22 205 25 194 Z" fill="#FFD700" opacity="0.9" />

            {/* Gwen's Legs & Arms */}
            <path d="M68 184 C76 192 84 204 88 214 M60 190 C66 198 72 208 76 218" stroke="#080808" strokeWidth="3" strokeLinecap="round" />
            <path d="M68 184 C76 192 84 204 88 214 M60 190 C66 198 72 208 76 218" stroke="#FFE0BD" strokeWidth="1.8" strokeLinecap="round" />
          </svg>

          {/* Interactive Tag */}
          <span className="bg-[#D5001C] text-white text-[8px] font-mono tracking-widest px-2 py-0.5 rounded-full uppercase shadow-md group-hover:bg-white group-hover:text-black transition-colors -mt-2">
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