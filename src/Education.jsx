import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const educationData = [
  {
    year: "2023 - 2027",
    institution: "VISHNU INSTITUTE OF TECHNOLOGY",
    degree: "B.TECH IN INFORMATION TECHNOLOGY",
    description: "I’ve built a strong foundation in data structures, algorithms, and software development through consistent learning. With a strong academic record, I’ve maintained a CGPA of 9.2 so far."
  },
  {
    year: "2021 - 2023",
    institution: "CAREER POINT JR COLLEGE",
    degree: "INTERMEDIATE (MPC)",
    description: "Developed a strong foundation in Mathematics, Physics, and Chemistry through consistent academic effort. Maintained an academic score of 956, reflecting both subject mastery and disciplined learning."
  },
  {
    year: "~2021",
    institution: "BHASHYAM E.M SCHOOL",
    degree: "SCHOOLING",
    description: "My school journey was filled with joyful learning, balanced with discipline and dedication. I maintained a 100% academic record and scored a perfect 10/10 GPA."
  }
];

export default function Education() {
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.05]);

  return (
    <section id="education" className="relative w-full min-h-screen bg-transparent py-24 px-8 overflow-hidden">
      
      {/* Background Track Line */}
      <div className="absolute top-0 left-[20%] md:left-1/2 w-[1px] h-full bg-gradient-to-b from-transparent via-[#333] to-transparent z-0" />

      <div className="max-w-6xl mx-auto relative z-10 flex flex-col md:flex-row gap-16 md:gap-0">
        
        {/* Left Sticky Header */}
        <div className="w-full md:w-1/2 md:pr-16 md:sticky md:top-1/3 h-fit z-10">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="w-8 h-[2px] bg-[#D5001C]" />
              <p className="text-[#D5001C] font-semibold tracking-[0.2em] uppercase text-xs">03 // Background</p>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-white uppercase tracking-tight leading-none mb-6">
              My <span className="text-transparent stroke-text" style={{ WebkitTextStroke: "1px #555" }}>Track</span><br/> Record
            </h2>
            <p className="text-[#888] font-light max-w-sm">
              A glimpse into my educational path and the places that shaped my learning and performance.
            </p>
          </motion.div>
        </div>

        {/* Right Timeline Cards */}
        <div className="w-full md:w-1/2 flex flex-col gap-12 pt-10">
          {educationData.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50, rotateX: 10 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: i * 0.15, ease: "easeOut" }}
              style={{ perspective: '1000px' }}
              className="relative group"
            >
              {/* Node indicator */}
              <div className="absolute -left-10 md:-left-[calc(100%+3px)] top-8 w-4 h-4 rounded-full border-2 border-[#D5001C] bg-[#0a0a0a] z-10 group-hover:bg-[#D5001C] transition-colors duration-300 shadow-[0_0_10px_rgba(213,0,28,0.5)]" />
              <div className="absolute -left-10 md:-left-[calc(100%+2px)] top-8 w-6 h-[1px] bg-[#333] z-0" />

              <motion.div 
                whileHover={{ x: 10, scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="glass-panel p-8 md:p-10 rounded-r-2xl rounded-bl-2xl border-l-2 border-l-[#D5001C] bg-gradient-to-br from-[#111] to-[#0a0a0a]"
              >
                <div className="text-sm font-mono text-[#D5001C] mb-2">{item.year}</div>
                <h3 className="text-xl md:text-2xl font-bold text-white uppercase tracking-wider mb-1">
                  {item.institution}
                </h3>
                <h4 className="text-sm text-[#888] font-medium tracking-[0.1em] mb-4 uppercase">
                  {item.degree}
                </h4>
                <p className="text-[#666] font-light text-sm leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </div>
        
      </div>
    </section>
  );
}
