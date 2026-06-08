import { motion } from 'framer-motion';
import { useState, useRef, useEffect } from 'react';
import Typed from 'typed.js';

const Hero = () => {
  const [imageError, setImageError] = useState(false);
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Sameer Chachiya"],
      typeSpeed: 50,
      backSpeed: 50,
      cursorChar: '|',
      loop: false
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center overflow-hidden">
      <div className="container mx-auto px-4 py-8 md:py-12">
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="md:w-5/12"
          >
            <div className="w-64 h-64 md:w-[400px] md:h-[400px] lg:w-[450px] lg:h-[450px] rounded-full overflow-hidden border-4 border-primary/20 shadow-xl mx-auto">
              <img 
                src={new URL('../assets/sam_pic_converted.jpg', import.meta.url).href}
                alt="Sameer Chachiya" 
                className="w-full h-full object-cover"
                onError={(e) => {
                  console.error('Image failed to load:', e);
                  setImageError(true);
                }}
              />
              {imageError && (
                <div className="w-full h-full bg-gray-200 flex items-center justify-center text-sm text-gray-500">
                  Image failed to load
                </div>
              )}
            </div>
          </motion.div>

          <div className="flex flex-col md:text-left text-center md:w-7/12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mb-6"
            >
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-3">
                <span className="text-foreground">Hi, I'm </span>
                <span ref={el} className="text-primary inline-flex items-center"></span>
              </h1>
              <h2 className="text-xl md:text-2xl lg:text-3xl text-foreground/80 mb-2">
                Senior Software Engineer • Full Stack AI Engineer
              </h2>
              <p className="text-sm md:text-base text-foreground/60 mb-4">
                📍 Bengaluru, India
              </p>
              <p className="text-sm md:text-base lg:text-lg text-foreground/70 max-w-2xl leading-relaxed mb-3">
                Results-driven AI Full Stack Developer with ~5 years of experience delivering scalable systems,
                optimising performance, and building agentic AI systems for global enterprises. Proven ability to
                bridge cutting-edge AI capabilities with enterprise-grade Java/Spring Boot, Python, and React architectures.
              </p>
              <p className="text-sm md:text-base text-foreground/60 max-w-2xl leading-relaxed">
                Consistent hackathon winner with a track record of streamlining workflows, reducing overhead, and
                delivering high-quality solutions. Open to senior AI / Full Stack / Backend roles in Bengaluru · Remote.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-wrap md:justify-start justify-center gap-3 md:gap-4"
            >
              <a
                href="#contact"
                className="button-gradient px-6 py-2.5 rounded-full text-white font-medium hover:shadow-lg transition-all text-sm md:text-base"
              >
                Get in Touch
              </a>
              <a
                href="#projects"
                className="px-6 py-2.5 rounded-full border border-primary text-primary hover:bg-primary/10 transition-all text-sm md:text-base"
              >
                View Projects
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="mt-8 flex justify-center md:justify-start space-x-6"
            >
              <a
                href="https://github.com/sameerchachiya"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/70 hover:text-primary transition-colors"
              >
                <span className="sr-only">GitHub</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path
                    fillRule="evenodd"
                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
              <a
                href="https://linkedin.com/in/sameerchachiya"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/70 hover:text-primary transition-colors"
              >
                <span className="sr-only">LinkedIn</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path
                    fillRule="evenodd"
                    d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
              <a
                href="https://sameerchachiya.tech"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/70 hover:text-primary transition-colors"
              >
                <span className="sr-only">Website</span>
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
              </a>
              <a
                href="mailto:sameerchachiya11@gmail.com"
                className="text-foreground/70 hover:text-primary transition-colors"
              >
                <span className="sr-only">Email</span>
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 