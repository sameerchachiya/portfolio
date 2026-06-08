import { motion } from 'framer-motion';

interface SectionHeaderProps {
  label: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
}

const SectionHeader = ({ label, title, subtitle, align = 'center' }: SectionHeaderProps) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-60px' }}
    transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    className={`mb-12 md:mb-16 ${align === 'center' ? 'text-center' : ''}`}
  >
    <motion.span
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.1 }}
      className="section-label"
    >
      {label}
    </motion.span>
    <h2 className="section-title mb-4">
      <span className="text-gradient">{title}</span>
    </h2>
    {subtitle && (
      <p className={`section-subtitle ${align === 'center' ? 'mx-auto' : ''}`}>{subtitle}</p>
    )}
    <div className="glow-line mt-6 max-w-xs mx-auto opacity-50" />
  </motion.div>
);

export default SectionHeader;
