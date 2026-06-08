import { motion } from 'framer-motion';
import SectionHeader from './SectionHeader';

const openToLocations = [
  'Bengaluru', 'Remote', 'UAE', 'Dubai', 'Abu Dhabi', 'Qatar',
  'Singapore', 'Australia', 'USA', 'UK', 'Riyadh', 'Beyond',
];

const contactLinks = [
  { label: 'Email', value: 'sameerchachiya11@gmail.com', href: 'mailto:sameerchachiya11@gmail.com' },
  { label: 'Phone', value: '+91-9741923904', href: 'tel:+919741923904' },
  { label: 'LinkedIn', value: 'linkedin.com/in/sameerchachiya', href: 'https://linkedin.com/in/sameerchachiya' },
  { label: 'Website', value: 'sameerchachiya.tech', href: 'https://sameerchachiya.tech' },
];

const Contact = () => (
  <section id="contact" className="py-20 md:py-28 relative">
    <div className="absolute inset-0 bg-gradient-to-t from-primary/8 via-transparent to-transparent pointer-events-none" />
    <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <SectionHeader
        label="Let's Connect"
        title="Ready to Build Something Great?"
        subtitle="I'm actively looking for senior AI, Full Stack, and Backend roles — remote, on-site, or relocation. Let's talk."
      />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="glass-card p-8 md:p-12 text-center relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 pointer-events-none" />

        <div className="relative">
          <div className="availability-pulse mx-auto mb-8 w-fit">
            Open to opportunities worldwide
          </div>

          <p className="text-foreground/50 text-sm mb-6">
            Based in Bengaluru, India
          </p>

          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {openToLocations.map((loc) => (
              <span key={loc} className="skill-pill">{loc}</span>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
            {contactLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith('http') ? '_blank' : undefined}
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-4 rounded-lg border border-border/80 bg-background/50 hover:border-primary/40 hover:bg-primary/5 transition-all text-left group"
              >
                <div className="w-10 h-10 rounded-md bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary/20 transition-colors">
                  <span className="text-sm font-bold">{link.label[0]}</span>
                </div>
                <div>
                  <p className="text-xs text-foreground/40">{link.label}</p>
                  <p className="text-sm font-medium text-foreground/80 group-hover:text-primary transition-colors">{link.value}</p>
                </div>
              </a>
            ))}
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            <a href="mailto:sameerchachiya11@gmail.com" className="btn-primary">
              Send Me an Email
            </a>
            <a
              href="/projects/SameerChachiya_Resume_FullStack.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              Download Resume
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

export default Contact;
