const Footer = () => (
  <footer className="relative z-10 border-t border-border/60 bg-card/30 backdrop-blur-sm">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-center md:text-left">
          <p className="font-display font-bold text-lg text-gradient">Sameer Chachiya</p>
          <p className="text-sm text-foreground/50 mt-1">
            Senior Software Engineer · Full Stack AI Engineer
          </p>
        </div>
        <div className="flex items-center gap-6 text-sm text-foreground/60">
          <a href="mailto:sameerchachiya11@gmail.com" className="hover:text-primary transition-colors">
            Email
          </a>
          <a href="https://linkedin.com/in/sameerchachiya" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
            LinkedIn
          </a>
          <a href="/projects/SameerChachiya_Resume_FullStack.pdf" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
            Resume
          </a>
        </div>
        <p className="text-xs text-foreground/40">
          © {new Date().getFullYear()} · Built with React & Vite
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
