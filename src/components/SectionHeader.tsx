import { motion } from 'framer-motion';

interface SectionHeaderProps {
  label: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
}

const SectionHeader = ({ label, title, subtitle, align = 'center' }: SectionHeaderProps) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
    className={`mb-12 md:mb-16 ${align === 'center' ? 'text-center' : ''}`}
  >
    <span className="section-label">{label}</span>
    <h2 className="section-title mb-4">{title}</h2>
    {subtitle && (
      <p className={`section-subtitle ${align === 'center' ? 'mx-auto' : ''}`}>{subtitle}</p>
    )}
  </motion.div>
);

export default SectionHeader;
