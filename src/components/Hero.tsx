import { motion } from 'framer-motion';
import { useState, useRef, useEffect } from 'react';
import Typed from 'typed.js';
import profilePhoto from '../assets/sam_pic.png';

const roles = [
  'Full Stack AI Engineer',
  'Senior Software Engineer',
  'Agentic AI Builder',
  'RAG Pipeline Architect',
];

const socialLinks = [
  { label: 'GitHub', href: 'https://github.com/sameerchachiya', icon: 'M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z' },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/sameerchachiya', icon: 'M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z' },
  { label: 'Email', href: 'mailto:sameerchachiya11@gmail.com', icon: 'M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z', stroke: true },
];

const Hero = () => {
  const [imageError, setImageError] = useState(false);
  const roleRef = useRef(null);

  useEffect(() => {
    const typed = new Typed(roleRef.current, {
      strings: roles,
      typeSpeed: 45,
      backSpeed: 30,
      backDelay: 2000,
      loop: true,
      cursorChar: '|',
    });
    return () => typed.destroy();
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 pb-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="order-2 lg:order-1"
          >
            <div className="availability-pulse mb-6 w-fit mx-auto lg:mx-0">
              Available for hire — Global · Remote · Relocation
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold tracking-tight text-center lg:text-left mb-4">
              Hi, I'm{' '}
              <span className="text-gradient-warm">Sameer</span>
              <br />
              <span className="text-gradient-warm">Chachiya</span>
            </h1>

            <div className="text-lg md:text-xl text-foreground/70 mb-6 text-center lg:text-left h-8">
              <span ref={roleRef} className="text-primary font-semibold" />
            </div>

            <p className="text-foreground/60 leading-relaxed mb-4 text-center lg:text-left max-w-xl mx-auto lg:mx-0">
              I build production-grade AI systems that enterprises trust — from agentic workflows
              and RAG pipelines to sub-50ms microservices handling 100K+ daily requests.
            </p>

            <p className="text-sm text-foreground/50 mb-8 text-center lg:text-left max-w-xl mx-auto lg:mx-0">
              📍 Bengaluru, India · Open worldwide — UAE, Dubai, Singapore, USA, UK, Australia & beyond
            </p>

            <div className="flex flex-wrap justify-center lg:justify-start gap-3 mb-8">
              <a href="#contact" className="btn-primary">
                Let's Work Together
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a href="/projects/SameerChachiya_Resume_FullStack.pdf" target="_blank" rel="noopener noreferrer" className="btn-secondary">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Resume
              </a>
              <a href="#projects" className="btn-secondary">Projects</a>
            </div>

            <div className="flex justify-center lg:justify-start gap-3">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith('http') ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  className="w-10 h-10 rounded-xl glass-card flex items-center justify-center text-foreground/60 hover:text-primary hover:border-primary/40 transition-all"
                >
                  <svg className="w-5 h-5" fill={link.stroke ? 'none' : 'currentColor'} stroke={link.stroke ? 'currentColor' : undefined} viewBox="0 0 24 24">
                    {link.stroke ? (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={link.icon} />
                    ) : (
                      <path fillRule="evenodd" d={link.icon} clipRule="evenodd" />
                    )}
                  </svg>
                </a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="order-1 lg:order-2 flex flex-col items-center"
          >
            <div className="relative">
              <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-primary/25 to-accent/25 blur-2xl" />
              <div className="relative w-[260px] sm:w-[300px] lg:w-[340px] aspect-[585/1024] rounded-[1.75rem] overflow-hidden border border-border/80 shadow-2xl shadow-primary/10 ring-1 ring-primary/10 bg-card">
                <img
                  src={profilePhoto}
                  alt="Sameer Chachiya — Senior Software Engineer"
                  className="w-full h-full object-cover object-[50%_18%] scale-[1.02]"
                  onError={() => setImageError(true)}
                />
                {imageError && (
                  <div className="w-full h-full bg-muted flex items-center justify-center text-sm text-muted-foreground">
                    Photo unavailable
                  </div>
                )}
              </div>
            </div>
            <div className="mt-5 glass-card rounded-2xl px-5 py-3 shadow-lg text-center">
              <p className="text-xs text-foreground/50">Currently at</p>
              <p className="font-display font-bold text-sm text-gradient">First Citizens India</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
