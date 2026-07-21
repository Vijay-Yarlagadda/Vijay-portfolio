import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function SpidermanWidget() {
  const [shootingWeb, setShootingWeb] = useState(false);
  const [showToast, setShowToast] = useState(false);

  const triggerWebSling = () => {
    if (shootingWeb) return;
    setShootingWeb(true);
    setShowToast(true);

    // Smooth scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });

    setTimeout(() => {
      setShootingWeb(false);
    }, 1200);

    setTimeout(() => {
      setShowToast(false);
    }, 3000);
  };

  return (
    <>
      {/* Web Shooting Beam Animation Overlay */}
      <AnimatePresence>
        {shootingWeb && (
          <motion.div
            initial={{ scaleY: 0, opacity: 1 }}
            animate={{ scaleY: 1, opacity: [1, 0.8, 0] }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="fixed bottom-12 right-10 z-[99999] w-[3px] h-[100vh] bg-gradient-to-t from-white via-red-500 to-white origin-bottom pointer-events-none shadow-[0_0_15px_#fff,0_0_30px_#D5001C]"
          />
        )}
      </AnimatePresence>

      {/* Spider-Sense Toast Notification */}
      <AnimatePresence>
        {showToast && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.9 }}
            className="fixed bottom-24 right-6 z-[99999] bg-[#0c0c0c] border border-[#D5001C] text-white px-4 py-2.5 rounded-full shadow-[0_10px_30px_rgba(213,0,28,0.4)] flex items-center gap-2.5 pointer-events-none text-xs font-mono tracking-wider uppercase"
          >
            <span className="w-2 h-2 rounded-full bg-[#D5001C] animate-ping" />
            <span>🕸️ Web-Slung to Top!</span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Spiderman Action Button */}
      <motion.button
        onClick={triggerWebSling}
        whileHover={{ scale: 1.1, rotate: [0, -5, 5, 0] }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-6 right-6 z-[9999] p-3 rounded-full bg-[#0d0d0d] border border-[#D5001C]/80 shadow-[0_0_20px_rgba(213,0,28,0.4)] hover:shadow-[0_0_35px_rgba(213,0,28,0.8)] transition-all duration-300 group cursor-pointer pointer-events-auto"
        title="Spider-Man Web-Sling: Click to shoot web and launch to top!"
      >
        {/* Pulsing Spider-Sense Aura */}
        <div className="absolute inset-0 rounded-full bg-[#D5001C]/20 animate-ping pointer-events-none opacity-40" />

        {/* Spiderman Mask SVG */}
        <div className="relative w-9 h-11 flex items-center justify-center">
          <svg viewBox="0 0 40 50" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full drop-shadow-md">
            {/* Spidey Head */}
            <path d="M20 5C11 5 5 12 5 23C5 34 11 44 20 44C29 44 35 34 35 23C35 12 29 5 20 5Z" fill="#D5001C" stroke="#050505" strokeWidth="2.5"/>
            {/* Web Pattern lines */}
            <path d="M20 5V44M5 23H35M8 13L32 33M8 33L32 13" stroke="#050505" strokeWidth="1" opacity="0.6"/>
            {/* Web Rings */}
            <circle cx="20" cy="23" r="6" stroke="#050505" strokeWidth="0.8" fill="none" opacity="0.5" />
            <circle cx="20" cy="23" r="12" stroke="#050505" strokeWidth="0.8" fill="none" opacity="0.5" />
            {/* Left Eye */}
            <path d="M12 22C10 15 15 11 18 18C16 22 14 23 12 22Z" fill="white" stroke="#050505" strokeWidth="2.2"/>
            {/* Right Eye */}
            <path d="M28 22C30 15 25 11 22 18C24 22 26 23 28 22Z" fill="white" stroke="#050505" strokeWidth="2.2"/>
          </svg>
        </div>

        {/* Floating Spidey Tag */}
        <span className="absolute -top-2 -left-2 bg-[#D5001C] text-black text-[9px] font-extrabold px-1.5 py-0.5 rounded-full uppercase tracking-tighter opacity-0 group-hover:opacity-100 transition-opacity">
          WEB
        </span>
      </motion.button>
    </>
  );
}
