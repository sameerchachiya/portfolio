import { motion } from 'framer-motion';
import SectionHeader from './SectionHeader';

const Education = () => (
  <section id="education" className="py-20 md:py-28">
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <SectionHeader
        label="Background"
        title="Education"
        subtitle="Strong CS fundamentals powering every system I build."
      />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="glass-card rounded-2xl p-8 hover:border-primary/30 transition-all"
      >
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h3 className="font-display font-bold text-xl text-gradient mb-1">
              B.E / B.Tech — Computer Science & Engineering
            </h3>
            <p className="text-foreground/80 font-medium">Visvesvaraya Technological University (VTU)</p>
            <p className="text-sm text-foreground/50 mt-1">Global Academy of Technology, Bengaluru</p>
          </div>
          <span className="text-sm font-mono text-foreground/40 bg-muted px-4 py-2 rounded-full w-fit">2017 — 2021</span>
        </div>
        <p className="text-sm text-foreground/50 mt-4 pt-4 border-t border-border">
          Languages: English (professional fluency)
        </p>
      </motion.div>
    </div>
  </section>
);

export default Education;
