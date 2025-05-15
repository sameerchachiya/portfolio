import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="home" className="pt-24 md:pt-32 pb-16 md:pb-20">
      <div className="flex flex-col items-center justify-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Hi, I'm{' '}
            <span className="text-gradient">
              Sameer Chachiya
            </span>
          </h1>
          <h2 className="text-2xl md:text-3xl text-foreground/80 mb-6">
            Software Engineer
          </h2>
          <p className="text-lg md:text-xl text-foreground/70 max-w-2xl mx-auto">
            Passionate about building scalable applications and creating impactful solutions.
            Currently working on enterprise-level software at Oracle Cerner.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4"
        >
          <a
            href="#contact"
            className="button-gradient px-8 py-3 rounded-full text-white font-medium hover:shadow-lg transition-all"
          >
            Get in Touch
          </a>
          <a
            href="#projects"
            className="px-8 py-3 rounded-full border border-primary text-primary hover:bg-primary/10 transition-all"
          >
            View Projects
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 flex justify-center space-x-6"
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
        </motion.div>
      </div>
    </section>
  );
};

export default Hero; 