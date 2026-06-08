import { motion } from 'framer-motion';

const stats = [
  { value: '5+', label: 'Years Experience', sub: 'Enterprise & AI' },
  { value: '100K+', label: 'Daily Requests', sub: 'Production scale' },
  { value: '15+', label: 'Microservices', sub: 'Designed & scaled' },
  { value: '<50ms', label: 'Latency', sub: 'AI inference' },
  { value: '2×', label: 'Hackathon Winner', sub: 'Innovation driven' },
  { value: '3×', label: 'Sprint Throughput', sub: 'With agentic AI' },
];

const Stats = () => (
  <section className="relative z-10 py-12 md:py-16">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
            className="stat-card"
          >
            <div className="text-2xl md:text-3xl font-bold font-display text-gradient mb-1">
              {stat.value}
            </div>
            <div className="text-sm font-semibold text-foreground/90">{stat.label}</div>
            <div className="text-xs text-foreground/50 mt-0.5">{stat.sub}</div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Stats;
