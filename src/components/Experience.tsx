import { motion } from 'framer-motion';

const experiences = [
  {
    title: 'Software Engineer',
    company: 'Oracle Cerner',
    period: '2022 - Present',
    description: [
      'Developing and maintaining healthcare software solutions using Java, Spring Boot, and React',
      'Implementing RESTful APIs and microservices architecture',
      'Collaborating with cross-functional teams to deliver high-quality software',
      'Contributing to code reviews and mentoring junior developers',
    ],
  },
  {
    title: 'Software Engineer',
    company: 'Verizon',
    period: '2020 - 2022',
    description: [
      'Developed scalable web applications using React, Node.js, and TypeScript',
      'Implemented CI/CD pipelines and automated testing workflows',
      'Optimized application performance and reduced load times by 40%',
      'Collaborated with UX designers to implement responsive designs',
    ],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-16 md:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Professional Experience
          </h2>
        </motion.div>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="relative pl-8 md:pl-0"
            >
              <div className="md:grid md:grid-cols-12 md:gap-8">
                {/* Timeline Line */}
                <div className="hidden md:block md:col-span-3 text-right">
                  <div className="sticky top-20">
                    <span className="text-lg font-semibold text-primary">
                      {exp.period}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="md:col-span-9">
                  <div className="relative bg-card rounded-lg p-6 shadow-lg border border-border">
                    {/* Mobile Period */}
                    <div className="md:hidden mb-4 text-primary font-semibold">
                      {exp.period}
                    </div>

                    <h3 className="text-xl font-bold mb-2">{exp.title}</h3>
                    <h4 className="text-lg text-foreground/80 mb-4">{exp.company}</h4>
                    <ul className="space-y-3">
                      {exp.description.map((item, i) => (
                        <li key={i} className="flex items-start">
                          <span className="text-primary mr-2">•</span>
                          <span className="text-foreground/70">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience; 