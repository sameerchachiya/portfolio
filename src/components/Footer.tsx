import { motion } from 'framer-motion';

const Footer = () => (
  <footer className="relative z-10 border-t border-primary/10">
    <div className="glow-line opacity-30" />
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="flex flex-col md:flex-row items-center justify-between gap-4"
      >
        <div className="text-center md:text-left">
          <p className="font-display font-bold text-lg text-gradient">{'<Sameer Chachiya />'}</p>
          <p className="text-sm font-mono text-muted-foreground mt-1">
            senior_engineer.ai — full_stack
          </p>
        </div>
        <div className="flex items-center gap-6 text-sm font-mono text-muted-foreground">
          <a href="mailto:sameerchachiya11@gmail.com" className="hover:text-accent transition-colors">email</a>
          <a href="https://linkedin.com/in/sameerchachiya" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">linkedin</a>
          <a href="/projects/SameerChachiya_Resume_FullStack.pdf" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">resume</a>
        </div>
        <p className="text-xs font-mono text-muted-foreground/60">
          © {new Date().getFullYear()} · v2.0
        </p>
      </motion.div>
    </div>
  </footer>
);

export default Footer;
