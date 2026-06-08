import { motion } from 'framer-motion';

const traces = [
  { top: '18%', width: '36%', delay: 0 },
  { top: '48%', width: '28%', delay: 1.8 },
  { top: '72%', width: '42%', delay: 3.2 },
];

const TechBackground = () => (
  <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none" aria-hidden="true">
    <div className="cyber-grid" />
    <div className="scanline" />

    {traces.map((trace, i) => (
      <motion.div
        key={i}
        className="absolute right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent"
        style={{ top: trace.top, width: trace.width }}
        animate={{
          x: ['30%', '-120%'],
          opacity: [0, 1, 0],
        }}
        transition={{ duration: 9 + i * 2, repeat: Infinity, ease: 'easeInOut', delay: trace.delay }}
      />
    ))}

    <svg className="absolute inset-0 w-full h-full opacity-[0.03]" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id="dots" x="0" y="0" width="24" height="24" patternUnits="userSpaceOnUse">
          <circle cx="1" cy="1" r="1" fill="currentColor" className="text-primary" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#dots)" />
    </svg>
  </div>
);

export default TechBackground;
