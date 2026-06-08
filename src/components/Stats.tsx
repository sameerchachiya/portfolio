import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const stats = [
  { value: '5+', label: 'Years', sub: 'Enterprise & AI' },
  { value: '100K+', label: 'Req/Day', sub: 'Production scale' },
  { value: '15+', label: 'Services', sub: 'Microservices' },
  { value: '<50ms', label: 'Latency', sub: 'AI inference' },
  { value: '2×', label: 'Hackathons', sub: 'Winner' },
  { value: '3×', label: 'Throughput', sub: 'Agentic AI' },
];

const Stats = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section ref={ref} className="relative z-10 py-12 md:py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ scale: 1.05, y: -4 }}
              className="stat-card group"
            >
              <motion.div
                className="text-2xl md:text-3xl font-bold font-display text-gradient mb-1"
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ delay: 0.3 + i * 0.1 }}
              >
                {stat.value}
              </motion.div>
              <div className="text-sm font-semibold text-foreground/90">{stat.label}</div>
              <div className="text-xs font-mono text-muted-foreground mt-0.5 group-hover:text-accent transition-colors">
                {stat.sub}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
