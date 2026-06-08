import { motion } from 'framer-motion';
import SectionHeader from './SectionHeader';

const hackathons = [
  {
    company: 'Verizon',
    year: '2024',
    achievement: '🏆 Winner',
    project: 'Data Source Health & Anomaly Detection',
    impact: '+30% detection accuracy',
    description: 'Pioneering application from PoC to deployment assessing data source health across production systems.',
  },
  {
    company: 'Oracle Cerner',
    year: '2022',
    achievement: '🏆 Winner',
    project: 'CVE Vulnerability Automation',
    impact: '14h → 30min per CVE',
    description: 'Automated CVE vulnerability fixes, dramatically reducing engineering time and security response lag.',
  },
];

const Hackathon = () => (
  <section id="hackathon" className="py-20 md:py-28 relative">
    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/5 to-transparent pointer-events-none" />
    <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <SectionHeader
        label="Recognition"
        title="Hackathon Wins"
        subtitle="Consistent winner — I ship fast, think creatively, and deliver under pressure."
      />

      <div className="grid md:grid-cols-2 gap-6">
        {hackathons.map((hack, index) => (
          <motion.div
            key={hack.project}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
            whileHover={{ y: -6, scale: 1.02 }}
            className="glass-card rounded-2xl p-6 transition-all duration-300 relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-700" />
            <div className="relative">
              <div className="flex items-center justify-between mb-4">
                <span className="text-2xl">{hack.achievement}</span>
                <span className="text-xs font-mono text-foreground/40">{hack.company} · {hack.year}</span>
              </div>
              <h3 className="font-display font-bold text-lg mb-1">{hack.project}</h3>
              <p className="text-sm font-semibold text-primary mb-3">{hack.impact}</p>
              <p className="text-sm text-foreground/60 leading-relaxed">{hack.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Hackathon;
