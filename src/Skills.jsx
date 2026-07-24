import React from "react";
import { motion } from "framer-motion";
import { Code, MonitorSmartphone, Cpu, ScissorsSquareDashedBottom } from "lucide-react";

const skills = [
  {
    icon: <Code size={32} strokeWidth={1.5} />,
    title: 'Frontend\nDevelopment',
    desc: `I bring ideas to life by designing clean, functional layouts with smooth interactions. For me, frontend is the space where creativity takes shape through structure and detail.`
  },
  {
    icon: <MonitorSmartphone size={32} strokeWidth={1.5} />,
    title: 'UI/UX\nDesigning',
    desc: `I find the most joy in crafting intuitive and visually engaging user experiences. UI/UX design lets me blend creativity with purpose to shape how people interact with digital products.`
  },
  {
    icon: <Cpu size={32} strokeWidth={1.5} />,
    title: 'Programming',
    desc: `I enjoy exploring the logic behind code and solving complex patterns with precision. Languages like Java and Python help me turn challenges into structured, efficient solutions.`
  },
  {
    icon: <ScissorsSquareDashedBottom size={32} strokeWidth={1.5} />,
    title: 'Editing',
    desc: `Editing is something I truly love — it lets me shape emotion, pace, and storytelling. I especially enjoy crafting title animations and enhancing the overall feel of a short film.`
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

const itemVariants = {
  hidden: { y: 50, opacity: 0, rotateX: -20 },
  visible: {
    y: 0, opacity: 1, rotateX: 0,
    transition: { duration: 0.8, ease: "easeOut" }
  }
};

export default function Skills() {
  return (
    <section id="skills" className="relative w-full flex flex-col items-center justify-center py-12 md:py-16 px-8 bg-transparent overflow-hidden" style={{ perspective: '1200px' }}>
      
      {/* Background accents */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] bg-[#D5001C] rounded-full blur-[200px] opacity-[0.03] pointer-events-none" />

      <motion.div 
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full max-w-[1200px] flex flex-col items-center mb-16"
      >
        <div className="flex items-center gap-4 mb-4">
          <div className="w-8 h-[2px] bg-[#D5001C]" />
          <p className="text-[#D5001C] font-semibold tracking-[0.2em] uppercase text-xs">03 // Capabilities</p>
          <div className="w-8 h-[2px] bg-[#D5001C]" />
        </div>
        <h2 className="text-4xl md:text-6xl font-bold text-white uppercase tracking-tight text-center">
          Performance <span className="text-transparent stroke-text" style={{ WebkitTextStroke: "1px #555" }}>Specs</span>
        </h2>
        <p className="text-[#888] mt-6 max-w-2xl text-center text-lg font-light">
          Turning imagination into real, responsive, and refined creations.
        </p>
      </motion.div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-[1200px] z-10"
      >
        {skills.map((skill, i) => (
          <motion.div
            key={i}
            variants={itemVariants}
            whileHover={{ y: -10, transition: { duration: 0.3 } }}
            className="group relative flex flex-col items-start p-8 glass-panel rounded-xl overflow-hidden border border-[#222] hover:border-[#D5001C] transition-colors duration-500 bg-gradient-to-b from-[#111] to-[#0a0a0a]"
          >
            {/* Animated Hover Line */}
            <div className="absolute top-0 left-0 w-full h-[2px] bg-[#D5001C] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            
            <div className="text-[#888] group-hover:text-[#D5001C] transition-colors duration-500 mb-6">
              {skill.icon}
            </div>
            
            <h3 className="text-xl font-bold text-white uppercase tracking-wider mb-4 whitespace-pre-line group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-[#D5001C] transition-all duration-300">
              {skill.title}
            </h3>
            
            <p className="text-[#666] text-sm leading-relaxed font-light group-hover:text-[#aaa] transition-colors duration-300">
              {skill.desc}
            </p>

            {/* Tech Decoration */}
            <div className="absolute bottom-4 right-4 opacity-10 font-mono text-[10px] text-white">
              {`// MOD_${(i+1).toString().padStart(2, '0')}`}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
