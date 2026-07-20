import React from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

const projects = [
  {
    id: 1,
    title: 'D-Portfolio',
    description: 'A highly interactive, performance-optimized personal portfolio featuring complex 3D WebGL rendering, custom framer-motion physics, and a premium aesthetic designed to showcase high-end engineering capabilities.',
    website: 'https://vijayportfolio-gilt.vercel.app/',
    repo: 'https://github.com/Vijay-Yarlagadda/Vijay-portfolio.git',
    tech: ['React', 'WebGL', 'Framer Motion', 'TailwindCSS']
  },
  {
    id: 2,
    title: 'DFlex',
    description: 'An AI-powered fitness platform that generates personalized diet plans and workout guidance based on users\' goals, body metrics, and preferences.',
    website: 'https://dflex.vercel.app/',
    repo: 'https://github.com/Vijay-Yarlagadda/DFlex.git',
    tech: ['React', 'Node.js', 'AI/ML', 'MongoDB']
  },
  {
    id: 3,
    title: 'DocEase',
    description: 'A secure healthcare platform that enables hospitals, doctors, and patients to manage appointments and medical records with role-based access control.',
    website: 'https://mydocease.vercel.app/',
    repo: 'https://github.com/Vijay-Yarlagadda/DocEase.git',
    tech: ['Next.js', 'PostgreSQL', 'Prisma', 'Tailwind']
  },
  {
    id: 4,
    title: 'DSwap',
    description: 'A campus-based cash exchange platform that helps students quickly find others to exchange small currency denominations within their college.',
    website: 'https://d-swap.vercel.app/',
    repo: 'https://github.com/Vijay-Yarlagadda/DSwap.git',
    tech: ['React', 'Firebase', 'WebSockets', 'CSS Modules']
  }
];

const smoothTransition = { duration: 0.8, ease: [0.16, 1, 0.3, 1] };

const TiltMockup = ({ project }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 40 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 40 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ['12deg', '-12deg']);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ['-12deg', '12deg']);

  const gradients = {
    1: 'from-[#D5001C] to-black',
    2: 'from-[#00e5ff] to-black',
    3: 'from-[#10b981] to-black',
    4: 'from-[#8b5cf6] to-black'
  };
  const gradient = gradients[project.id] || 'from-gray-800 to-black';

  return (
    <motion.div
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;
        x.set(mouseX / width - 0.5);
        y.set(mouseY / height - 0.5);
      }}
      onMouseLeave={() => {
        x.set(0);
        y.set(0);
      }}
      style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
      className="relative w-full aspect-[4/3] rounded-2xl border border-[#333] bg-[#111]/80 backdrop-blur-xl shadow-[0_30px_60px_rgba(0,0,0,0.6)] overflow-hidden flex flex-col cursor-crosshair group"
    >
      <div className="h-10 border-b border-[#333] flex items-center px-4 gap-2 bg-[#0a0a0a]" style={{ transform: 'translateZ(10px)' }}>
        <div className="w-3 h-3 rounded-full bg-red-500/80" />
        <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
        <div className="w-3 h-3 rounded-full bg-green-500/80" />
        <div className="flex-1 ml-4 h-5 bg-white/5 rounded-full flex items-center px-3">
          <span className="text-[9px] font-mono text-[#555] tracking-widest">{new URL(project.website).hostname}</span>
        </div>
      </div>

      <div className={`flex-1 bg-gradient-to-br ${gradient} p-8 flex items-center justify-center relative overflow-hidden`} style={{ transform: 'translateZ(20px)' }}>
        <motion.div style={{ transform: 'translateZ(60px)' }} className="absolute w-48 h-48 border border-white/20 rounded-full" />
        <motion.div style={{ transform: 'translateZ(80px)' }} className="absolute w-24 h-24 bg-white/10 backdrop-blur-md border border-white/30 rounded-xl rotate-12 group-hover:rotate-[24deg] transition-transform duration-700" />
        <h3 style={{ transform: 'translateZ(120px)' }} className="text-3xl lg:text-4xl font-bold text-white drop-shadow-2xl z-10 text-center leading-tight tracking-tight">
          {project.title}
        </h3>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="relative w-full min-h-screen bg-transparent py-24 px-6 md:px-8 overflow-hidden z-10">
      <div className="max-w-7xl mx-auto flex flex-col h-full justify-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={smoothTransition}
          className="mb-10"
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-[2px] bg-[#D5001C]" />
            <h2 className="text-[#D5001C] font-semibold tracking-[0.3em] uppercase text-sm">Case Studies</h2>
          </div>
          <h3 className="text-4xl md:text-6xl font-bold text-white uppercase tracking-tighter">Featured Projects</h3>
        </motion.div>

        <div className="relative">
          <div className="overflow-x-auto pb-4 snap-x snap-mandatory">
            <div className="flex gap-4 md:gap-6 min-w-max pr-2">
              {projects.map((project) => (
                <motion.article
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={smoothTransition}
                  whileHover={{ y: -6, scale: 1.01 }}
                  className="group relative w-[85vw] sm:w-[72vw] lg:w-[420px] min-h-[540px] rounded-[2rem] border border-[#333] bg-[#080808]/90 backdrop-blur-xl p-6 md:p-8 flex flex-col justify-between snap-start shadow-[0_20px_60px_rgba(0,0,0,0.35)]"
                >
                  <div>
                    <div className="flex items-start justify-between gap-4 mb-6">
                      <span className="text-5xl md:text-6xl font-bold text-[#D5001C] leading-none">{project.id}</span>
                      <div className="w-10 h-10 rounded-full border border-[#333] flex items-center justify-center text-[#aaa] text-xs font-mono uppercase tracking-[0.2em]">
                        0{project.id}
                      </div>
                    </div>

                    <h4 className="text-2xl md:text-3xl font-bold text-white leading-tight mb-4">{project.title}</h4>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.map((t) => (
                        <span key={t} className="px-3 py-1 bg-[#111] border border-[#333] text-[#aaa] text-xs font-mono uppercase tracking-widest rounded-full">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  <p className="text-base md:text-lg text-[#aaa] font-medium leading-relaxed mb-8">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-3 mb-8">
                    {project.website && (
                      <a href={project.website} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-white text-black font-bold uppercase tracking-widest text-[10px] rounded-full hover:bg-[#D5001C] hover:text-white transition-colors duration-300">
                        Live Site
                      </a>
                    )}
                    {project.repo && (
                      <a href={project.repo} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-transparent border border-[#555] text-white font-bold uppercase tracking-widest text-[10px] rounded-full hover:border-white hover:bg-white/10 transition-colors duration-300">
                        GitHub Repo
                      </a>
                    )}
                  </div>

                  <div className="mt-auto">
                    <TiltMockup project={project} />
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
