import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <section id="contact" className="py-16 md:py-20 bg-secondary/5">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-3">Contact Me</h2>
          <p className="text-foreground/70 max-w-md mx-auto text-sm">
            Feel free to reach out! I'd love to hear from you.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-card rounded-lg p-6 shadow-lg border border-border text-center"
        >
          <p className="text-foreground/70 text-sm mb-4">Get in touch via email:</p>
          <a
            href="mailto:sameerchachiya11@gmail.com"
            className="text-primary hover:underline text-lg inline-flex items-center justify-center"
          >
            <svg 
              className="w-6 h-6 mr-2" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" 
              />
            </svg>
            sameerchachiya11@gmail.com
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact; 