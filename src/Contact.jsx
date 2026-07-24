import React from "react";
import { motion } from "framer-motion";
import { Linkedin, Github, Instagram, Mail } from "lucide-react";

export default function Contact() {
  const [message, setMessage] = React.useState("");
  const [webShot, setWebShot] = React.useState(false);
  const messageInputRef = React.useRef(null);

  const handleSpideyClick = () => {
    setWebShot(true);
    setMessage("Hey Vijay! I just explored your projects. Let's collaborate on building a high-performance web project together!");
    
    if (messageInputRef.current) {
      messageInputRef.current.focus();
    }

    setTimeout(() => {
      setWebShot(false);
    }, 1200);
  };

  return (
    <section id="contact" className="relative w-full bg-transparent flex flex-col items-center justify-center py-12 md:py-16 px-8 overflow-hidden">
      {/* Spider-Man Interactive Web Auto-Filler */}
      <motion.div 
        initial={{ y: -80, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeOut" }}
        onClick={handleSpideyClick}
        className="absolute top-0 right-8 md:right-16 z-20 pointer-events-auto cursor-pointer group flex flex-col items-center origin-top"
        title="Tap Spidey to Auto-fill Message!"
      >
        {/* Smooth Pendulum Swinging Wrapper (Web + Spidey together from top ceiling anchor) */}
        <motion.div
          animate={webShot ? { scale: [1, 1.3, 1], rotate: [0, -15, 15, 0] } : { rotate: [-7, 7, -7] }}
          transition={{
            duration: webShot ? 0.6 : 5,
            repeat: webShot ? 0 : Infinity,
            ease: "easeInOut"
          }}
          className="origin-top flex flex-col items-center"
        >
          {/* Web String */}
          <div className="w-[1.5px] h-20 md:h-28 bg-gradient-to-b from-white/90 via-white/40 to-white/80 mx-auto" />
          
          {/* Spidey hanging upside down */}
          <div className="relative -mt-1 transform transition-transform duration-300 group-hover:scale-125">
            <svg width="44" height="56" viewBox="0 0 40 52" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M20 6C12 6 6 12 6 22C6 32 12 40 20 40C28 40 34 32 34 22C34 12 28 6 20 6Z" fill="#D5001C" stroke="#0a0a0a" strokeWidth="2"/>
              <path d="M10 22C10 30 14 36 20 36C26 36 30 30 30 22" fill="#0055FF" opacity="0.85"/>
              <path d="M20 6V40M6 22H34M9 14L31 30M9 30L31 14" stroke="#111" strokeWidth="1" opacity="0.6"/>
              <path d="M12 20C10 14 15 10 18 16C16 20 14 21 12 20Z" fill="white" stroke="#0a0a0a" strokeWidth="2"/>
              <path d="M28 20C30 14 25 10 22 16C24 20 26 21 28 20Z" fill="white" stroke="#0a0a0a" strokeWidth="2"/>
              <ellipse cx="20" cy="26" rx="2.5" ry="3.5" fill="#0a0a0a"/>
            </svg>

            {/* Interactive Tag */}
            <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 whitespace-nowrap bg-[#D5001C] text-white text-[9px] font-mono tracking-widest px-2 py-0.5 rounded-full uppercase shadow-lg group-hover:bg-white group-hover:text-black transition-colors">
              Tap Spidey
            </span>
          </div>
        </motion.div>
      </motion.div>

      {/* Background accents */}
      <div className="absolute top-0 right-0 w-[40vw] h-[40vw] bg-[#D5001C] rounded-full blur-[250px] opacity-[0.05] pointer-events-none" />

      <div className="max-w-7xl w-full flex flex-col md:flex-row gap-16 relative z-10">
        
        {/* Left: Contact Info & Form */}
        <div className="w-full md:w-[60%] flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="w-8 h-[2px] bg-[#D5001C]" />
              <p className="text-[#D5001C] font-semibold tracking-[0.2em] uppercase text-xs">05 // Connect</p>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-white uppercase tracking-tight leading-[1.1] mb-8">
              Let's build something <br/>
              <span className="text-transparent stroke-text" style={{ WebkitTextStroke: "1px #555" }}>Extraordinary.</span>
            </h2>
          </motion.div>

          <motion.form 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="flex flex-col gap-6 mt-4" 
            action="https://formspree.io/f/mqalljon" 
            method="POST"
          >
            <input type="hidden" name="_captcha" value="false" />
            
            <div className="flex flex-col sm:flex-row gap-6">
              <div className="relative flex-1 group">
                <input type="text" name="name" required placeholder="Your Name" className="w-full bg-[#111] rounded-none px-4 py-4 text-white font-mono placeholder-[#666] outline-none border border-[#333] focus:border-[#D5001C] transition-colors peer" />
                <div className="absolute bottom-0 left-0 w-full h-[2px] bg-[#D5001C] scale-x-0 peer-focus:scale-x-100 transition-transform duration-300 origin-left" />
              </div>
              <div className="relative flex-1 group">
                <input type="email" name="email" required placeholder="Email Address" className="w-full bg-[#111] rounded-none px-4 py-4 text-white font-mono placeholder-[#666] outline-none border border-[#333] focus:border-[#D5001C] transition-colors peer" />
                <div className="absolute bottom-0 left-0 w-full h-[2px] bg-[#D5001C] scale-x-0 peer-focus:scale-x-100 transition-transform duration-300 origin-left" />
              </div>
            </div>

            <div className="relative group">
              <textarea 
                ref={messageInputRef}
                name="message" 
                required 
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Ignition Sequence (Message)" 
                rows={5} 
                className="w-full bg-[#111] rounded-none px-4 py-4 text-white font-mono placeholder-[#666] outline-none border border-[#333] focus:border-[#D5001C] transition-colors resize-none peer" 
              />
              <div className="absolute bottom-1 left-0 w-full h-[2px] bg-[#D5001C] scale-x-0 peer-focus:scale-x-100 transition-transform duration-300 origin-left" />
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="mt-4 bg-[#D5001C] text-white font-bold tracking-[0.2em] uppercase text-sm py-5 px-8 w-fit hover:bg-white hover:text-[#0a0a0a] transition-colors duration-300 relative overflow-hidden group border border-[#D5001C]"
            >
              <span className="relative z-10 flex items-center gap-4">
                Deploy Message 
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square" className="group-hover:translate-x-2 transition-transform">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </span>
            </motion.button>
          </motion.form>
        </div>

        {/* Right: Socials & Direct Contact */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="w-full md:w-[40%] flex flex-col gap-8"
        >
          <div className="glass-panel p-8 md:p-12 border-t-4 border-t-[#D5001C] bg-gradient-to-br from-[#111] to-[#0a0a0a]">
            <h3 className="font-bold text-xl text-white uppercase tracking-wider mb-8">Telemetry (Socials)</h3>
            <div className="flex flex-col gap-4">
              {[
                { name: 'GitHub', icon: <Github size={20} />, link: 'https://github.com/Vijay-Yarlagadda' },
                { name: 'LinkedIn', icon: <Linkedin size={20} />, link: 'https://www.linkedin.com/in/yarlagaddavijay' },
                { name: 'Instagram', icon: <Instagram size={20} />, link: 'https://www.instagram.com/vijay_yarlagadda_?igsh=ejIyaXNmbXlldHhq' },
                { name: 'X / Twitter', icon: (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M4 4l16 16m0-16L4 20"/></svg>
                ), link: 'https://x.com/YarlagaddaVija7' }
              ].map((social) => (
                <a 
                  key={social.name}
                  href={social.link} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center gap-4 group p-4 border border-[#333] hover:border-[#D5001C] transition-colors bg-[#0a0a0a]"
                >
                  <div className="text-[#666] group-hover:text-[#D5001C] transition-colors">
                    {social.icon}
                  </div>
                  <span className="font-mono text-sm text-[#888] group-hover:text-white transition-colors uppercase tracking-widest">
                    {social.name}
                  </span>
                  <div className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#D5001C" strokeWidth="2"><path d="M7 17l9.2-9.2M17 17V7H7"/></svg>
                  </div>
                </a>
              ))}
            </div>
          </div>

          <div className="glass-panel p-8 border border-[#333] flex flex-col gap-4">
            <h3 className="font-bold text-sm text-white uppercase tracking-wider">Direct Link</h3>
            <a href="mailto:yarlagaddavijay859@gmail.com" className="flex items-center gap-4 group cursor-pointer">
              <Mail className="text-[#D5001C]" size={24} />
              <span className="font-mono text-sm text-[#888] group-hover:text-white transition-colors">
                yarlagaddavijay859@gmail.com
              </span>
            </a>
          </div>

        </motion.div>

      </div> 
    </section>
  );
}
