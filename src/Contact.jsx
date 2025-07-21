import React from "react";
import { Linkedin, Github, Instagram, X } from "lucide-react";

export default function Contact() {
  return (
    <section className="w-full min-h-screen flex flex-col items-center justify-center px-[5vw] py-[6vh]" id="contact">
      <div className="flex flex-col md:flex-row w-full max-w-[1100px] gap-8 md:gap-12 items-stretch">
        {/* Left: Contact Form */}
        <div className="flex-1 rounded-3xl border-2 border-[#444] p-8 md:p-12 flex flex-col justify-start shadow-lg" style={{ minWidth: 320, maxWidth: 650, background: 'transparent' }}>
          <h2 style={{
            fontFamily: 'Space Grotesk, Montserrat, sans-serif',
            fontWeight: 800,
            fontSize: '2.6rem',
            color: '#fff',
            marginBottom: '-0.2rem',
            lineHeight: 1.1,
            letterSpacing: '-1px',
          }}>
            Let's create something <br />
            <span style={{
              color: '#F5C76A',
              fontFamily: 'Pacifico, cursive',
              fontWeight: 700,
              fontSize: '2.2rem',
              display: 'inline-block',
              marginTop: '0.2rem',
            }}>extraordinary together.</span>
          </h2>
          <form className="flex flex-col gap-5 mt-8">
            <div className="flex flex-col sm:flex-row gap-4">
              <input type="text" placeholder="Your Name" className="flex-1 bg-[#14162C] rounded-xl px-5 py-4 text-lg text-[#c6c3c3] font-semibold placeholder-[#aaa] outline-none border border-[1.7px] border-[#FB983D33]" />
              <input type="email" placeholder="Email Address" className="flex-1 bg-[#14162C] rounded-xl px-5 py-4 text-lg text-[#c6c3c3] font-semibold placeholder-[#aaa] outline-none border border-[1.7px] border-[#FB983D33]" />
            </div>
            <textarea placeholder="Message" rows={6} className="bg-[#14162C] rounded-xl px-5 py-4 text-lg text-[#c6c3c3] font-semibold placeholder-[#aaa] outline-none border border-[1.7px] border-[#FB983D33] resize-none" />
            <button type="submit" className="mt-2 bg-[#FB4D19] hover:bg-[#ff6a36] transition-colors text-white font-bold text-lg rounded-xl py-3 shadow-md" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>Send Message</button>
          </form>
        </div>
        {/* Right: Socials */}
        <div className="flex flex-col rounded-xl border-2 border-[#444] p-7 md:p-8 w-full max-w-[340px] shadow-lg justify-start" style={{ background: 'transparent', height: 'fit-content', minHeight: 'unset' }}>
          <h3 style={{
            fontFamily: 'Space Grotesk, Montserrat, sans-serif',
            fontWeight: 700,
            fontSize: '1.45rem',
            color: '#fff',
            marginBottom: '1.2rem',
          }}>My Socials</h3>
          <div className="flex flex-col gap-5 w-full">
            <style>{`
              .contact-social-icon {
                transition: transform 0.22s cubic-bezier(0.34,1.56,0.64,1);
                display: inline-flex;
              }
              .contact-social-link:hover .contact-social-icon {
                transform: scale(1.18);
              }
            `}</style>
            <a href="https://github.com/Vijay-Yarlagadda" target="_blank" rel="noopener noreferrer" className="contact-social-link flex items-center gap-4 rounded-xl px-5 py-3 font-semibold text-lg text-[#c6c3c3] border border-[1.7px] border-[#FB983D33]" style={{ background: '#14162C' }}>
              <span className="flex items-center justify-center w-10 h-10 rounded-lg bg-[#18191C] contact-social-icon">
                <Github size={24} />
              </span>
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/yarlagaddavijay" target="_blank" rel="noopener noreferrer" className="contact-social-link flex items-center gap-4 rounded-xl px-5 py-3 font-semibold text-lg text-[#c6c3c3] border border-[1.7px] border-[#FB983D33]" style={{ background: '#14162C' }}>
              <span className="flex items-center justify-center w-10 h-10 rounded-lg bg-[#18191C] contact-social-icon">
                <Linkedin size={24} />
              </span>
              LinkedIn
            </a>
            <a href="https://www.instagram.com/vijay_yarlagadda_?igsh=ejIyaXNmbXlldHhq" target="_blank" rel="noopener noreferrer" className="contact-social-link flex items-center gap-4 rounded-xl px-5 py-3 font-semibold text-lg text-[#c6c3c3] border border-[1.7px] border-[#FB983D33]" style={{ background: '#14162C' }}>
              <span className="flex items-center justify-center w-10 h-10 rounded-lg bg-[#18191C] contact-social-icon">
                <Instagram size={24} />
              </span>
              Instagram
            </a>
            <a href="https://x.com/YarlagaddaVija7?t=SogLof6sKKsi4cCAqYxJEg&s=09" target="_blank" rel="noopener noreferrer" className="contact-social-link flex items-center gap-4 rounded-xl px-5 py-3 font-semibold text-lg text-[#c6c3c3] border border-[1.7px] border-[#FB983D33]" style={{ background: '#14162C' }}>
              <span className="flex items-center justify-center w-10 h-10 rounded-lg bg-[#18191C] contact-social-icon">
                {/* Twitter SVG icon with #c6c3c3 color */}
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#c6c3c3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M23 3a10.9 10.9 0 01-3.14 1.53A4.48 4.48 0 0022.4.36a9.09 9.09 0 01-2.88 1.1A4.52 4.52 0 0016.11 0c-2.5 0-4.52 2.02-4.52 4.52 0 .35.04.7.11 1.03C7.69 5.4 4.07 3.7 1.64 1.15c-.38.65-.6 1.4-.6 2.2 0 1.52.77 2.86 1.94 3.65A4.48 4.48 0 01.96 6v.06c0 2.13 1.52 3.91 3.54 4.31-.37.1-.76.16-1.16.16-.28 0-.55-.03-.81-.08.55 1.72 2.16 2.97 4.07 3A9.05 9.05 0 010 21.54a12.8 12.8 0 006.92 2.03c8.3 0 12.85-6.88 12.85-12.85 0-.2 0-.39-.01-.58A9.22 9.22 0 0023 3z"/></svg>
              </span>
                Twitter
            </a>
          </div>
        </div>
      </div> {/* close socials/form flex row */}
      {/* Contact Me Directly (top right, above the right socials rectangle) */}
      <div style={{
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        marginTop: '-5.5rem',
      }}>
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-end',
          marginRight: 'calc((100vw - 1100px)/2)',
        }}>
          <div style={{
            fontFamily: 'Space Grotesk, Montserrat, sans-serif',
            fontWeight: 700,
            fontSize: '1.32rem',
            color: '#fff',
            textAlign: 'right',
            marginBottom: '0.7rem',
          }}>Contact Me Directly</div>
          <a
            href="mailto:yarlagaddavijay859@gmail.com"
            style={{
              display: 'flex',
              alignItems: 'center',
              background: '#14162C',
              border: '1.7px solid #FB983D33',
              borderRadius: '12px',
              padding: '0.85rem 1.2rem',
              gap: '1.1rem',
              width: 'fit-content',
              minWidth: 320,
              maxWidth: 480,
              marginRight: '-5rem',
              textDecoration: 'none',
            }}
          >
            <span style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#FB983D" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="4"/><path d="m4 6 8 7 8-7"/></svg>
            </span>
            <span style={{
              fontFamily: 'Space Grotesk, Montserrat, sans-serif',
              fontWeight: 700,
              fontSize: '1.08rem',
              color: '#c6c3c3',
              letterSpacing: '0.04em',
              display: 'block',
              textAlign: 'right',
            }}>yarlagaddavijay859@gmail.com</span>
          </a>
        </div>
      </div>
    </section>
  );
}
