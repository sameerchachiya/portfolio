import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

const menuItems = [
  { title: 'Experience', href: '#experience' },
  { title: 'Skills', href: '#skills' },
  { title: 'Projects', href: '#projects' },
  { title: 'Contact', href: '#contact' },
  { title: 'Resume', href: '/projects/SameerChachiya_Resume_FullStack.pdf', external: true },
];

const ThemeIcon = ({ theme }: { theme: string }) =>
  theme === 'light' ? (
    <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
  ) : (
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
  );

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 glass-nav transition-all duration-300 ${scrolled ? 'scrolled' : ''}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#home" className="font-display font-bold text-xl text-gradient">
            SC
          </a>

          <div className="hidden md:flex items-center gap-1">
            {menuItems.map((item) => (
              <a
                key={item.title}
                href={item.href}
                target={item.external ? '_blank' : undefined}
                rel={item.external ? 'noopener noreferrer' : undefined}
                className="px-3 py-2 text-sm font-medium text-foreground/70 hover:text-primary rounded-lg hover:bg-primary/5 transition-colors"
              >
                {item.title}
              </a>
            ))}
            <button onClick={toggleTheme} className="p-2 rounded-lg hover:bg-primary/10 transition-colors ml-1" aria-label="Toggle theme">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                <ThemeIcon theme={theme} />
              </svg>
            </button>
            <a href="#contact" className="btn-primary !py-2 !px-4 !text-sm ml-2">
              Hire Me
            </a>
          </div>

          <div className="md:hidden flex items-center gap-2">
            <button onClick={toggleTheme} className="p-2 rounded-lg hover:bg-primary/10" aria-label="Toggle theme">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                <ThemeIcon theme={theme} />
              </svg>
            </button>
            <button onClick={() => setIsOpen(!isOpen)} className="p-2 rounded-lg hover:bg-primary/10" aria-label="Menu">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-border/60 bg-background/95 backdrop-blur-xl overflow-hidden"
          >
            <div className="px-4 py-4 space-y-1">
              {menuItems.map((item) => (
                <a
                  key={item.title}
                  href={item.href}
                  target={item.external ? '_blank' : undefined}
                  rel={item.external ? 'noopener noreferrer' : undefined}
                  onClick={() => setIsOpen(false)}
                  className="block px-4 py-3 rounded-lg text-foreground/80 hover:bg-primary/5 hover:text-primary font-medium"
                >
                  {item.title}
                </a>
              ))}
              <a href="#contact" onClick={() => setIsOpen(false)} className="block btn-primary text-center mt-2">
                Hire Me
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
