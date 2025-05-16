import { motion } from 'framer-motion';
import verizonLogo from '../assets/verizon.png';
import oracleLogo from '../assets/oracle.png';

const experiences = [
  {
    title: 'Software Engineer 2',
    company: 'Verizon',
    period: 'Aug 2023 — Present',
    logo: verizonLogo,
    description: [
      'Primarily contributed to the Fiber Engineering microservice, scaling it to handle peak traffic of 100K+/day (from 40K+/day)',
      'Revamped real-time fiber visibility functionalities, optimizing thousands of rule evaluations to ensure a 50ms execution time',
      'Developed and maintained 15+ microservices and full-stack applications using Spring Boot and React.js',
      'Led a team of 2 developers as a secondary lead, assisting in 5+ code reviews and 2+ key feature deliveries per sprint',
      'Resolved 50+ UI-related bugs and maintained 10+ backend services, reducing UI load times by 20%',
      'Migrated an existing application from Angular to React.js, currently 60% complete',
      'Optimized SQL queries, improving database performance by 30% through referential integrity enforcement'
    ],
  },
  {
    title: 'Software Engineer 1',
    company: 'Oracle Cerner',
    period: 'Oct 2021 — Aug 2023',
    logo: oracleLogo,
    description: [
      'Developed and modified 45+ efficient and secure software apps using Java, Ruby on Rails, Spring Boot, and React JS',
      'Created and implemented 10+ microservices to seamlessly integrate Kafka into an existing Monolith',
      'Automated software delivery process with 15+ Java Groovy Scripts, increasing delivery speed by 40%',
      'Identified and resolved 25+ bottlenecks and bugs, ensuring smooth operation and optimal performance',
      'Actively participated in 100+ code reviews to ensure code quality and system stability',
      'Provided Tier 2 support for 8+ applications (break fixes and data changes)',
      'Containerized applications into Docker images, optimizing server utilization and reducing cloud costs',
      'Developed 150+ unit test cases and utilized Postman for comprehensive API testing'
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
                <div className="hidden md:block md:col-span-3">
                  <div className="sticky top-20 text-right">
                    <span className="text-lg font-semibold text-primary whitespace-nowrap">
                      {exp.period}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="md:col-span-9">
                  <div className="relative bg-card rounded-lg p-6 shadow-lg border border-border">
                    {/* Mobile Period */}
                    <div className="md:hidden mb-4 text-primary font-semibold whitespace-nowrap">
                      {exp.period}
                    </div>

                    <div className="flex items-center gap-6 mb-6">
                      <div className="flex-shrink-0 w-20 h-20 md:w-24 md:h-24 rounded-xl overflow-hidden bg-white p-2 shadow-sm">
                        <img 
                          src={exp.logo} 
                          alt={`${exp.company} logo`} 
                          className="w-full h-full object-contain"
                        />
                      </div>
                      <div>
                        <h3 className="text-xl md:text-2xl font-bold mb-1">{exp.title}</h3>
                        <h4 className="text-lg md:text-xl text-foreground/80">{exp.company}</h4>
                      </div>
                    </div>

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