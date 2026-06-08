import { motion } from 'framer-motion';

const orbs = [
  { color: 'bg-primary/20', size: 'w-[500px] h-[500px]', x: '10%', y: '5%', delay: 0 },
  { color: 'bg-accent/15', size: 'w-[400px] h-[400px]', x: '70%', y: '60%', delay: 2 },
  { color: 'bg-purple-500/10', size: 'w-[350px] h-[350px]', x: '50%', y: '30%', delay: 4 },
];

const TechBackground = () => (
  <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none" aria-hidden="true">
    <div className="cyber-grid" />
    <div className="scanline" />

    {orbs.map((orb, i) => (
      <motion.div
        key={i}
        className={`absolute rounded-full blur-[100px] ${orb.color} ${orb.size}`}
        style={{ left: orb.x, top: orb.y }}
        animate={{
          x: [0, 40, -20, 0],
          y: [0, -30, 20, 0],
          scale: [1, 1.1, 0.95, 1],
        }}
        transition={{ duration: 18 + i * 4, repeat: Infinity, ease: 'easeInOut', delay: orb.delay }}
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
