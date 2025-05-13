"use client";

import { motion } from 'framer-motion';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FaBriefcase, FaTrophy } from 'react-icons/fa';

const experiences = [
  {
    title: 'Software Engineer 2',
    company: 'Verizon',
    period: 'Aug 2023 — Present',
    achievements: [
      'Primarily contributed to the Fiber Engineering microservice, scaling it to handle peak traffic of 100K+/day (from 40K+/day).',
      'Revamped real-time fiber visibility functionalities, optimizing thousands of rule evaluations to ensure a 50ms execution time.',
      'Developed and maintained 15+ microservices and full-stack applications using Spring Boot and React.js.',
      'Led a team of 2 developers as a secondary lead, assisting in 5+ code reviews and 2+ key feature deliveries per sprint.',
      'Resolved 50+ UI-related bugs and maintained 10+ backend services.',
      'Migrated an existing application from Angular to React.js, currently 60% complete.',
      'Optimized SQL queries, improving database performance by 30%.',
      'Hackathon: Designed and developed a pioneering application from PoC to deployment, improving anomaly detection accuracy by 30%.'
    ]
  },
  {
    title: 'Software Engineer 1',
    company: 'Oracle Cerner',
    period: 'Oct 2021 — Aug 2023',
    achievements: [
      'Developed and modified 45+ efficient and secure software apps using Java, Ruby on Rails, Spring Boot, and React JS.',
      'Created and implemented 10+ microservices to seamlessly integrate Kafka into an existing Monolith.',
      'Automated the software delivery process by writing 15+ Java Groovy Scripts, achieving 40% increase in delivery speed.',
      'Identified and resolved 25+ bottlenecks and bugs, ensuring smooth operation.',
      'Actively participated in 100+ code reviews to ensure code quality.',
      'Provided Tier 2 support for 8+ applications (break fixes and data changes).',
      'Containerized applications into Docker images, optimizing server utilization.',
      'Developed 150+ unit test cases and utilized Postman for comprehensive API testing.',
      'Won hackathon: Automated CVE vulnerability fixes, reducing engineering time from 14 hours to 30 minutes per CVE.'
    ]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-800 relative">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-indigo-50/50 dark:from-gray-900/50 dark:to-gray-800/50"></div>
      
      <Container className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Professional Experience</h2>
          <p className="text-gray-600 dark:text-gray-300">My journey in software development</p>
        </motion.div>
        
        <Row className="justify-content-center">
          <Col lg={10}>
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow bg-white/80 backdrop-blur-sm dark:bg-gray-900/80">
                    <Card.Body className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0">
                          <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center">
                            <FaBriefcase className="text-blue-600 dark:text-blue-400 text-xl" />
                          </div>
                        </div>
                        <div className="flex-grow">
                          <div className="flex flex-wrap items-center justify-between mb-4">
                            <div>
                              <h3 className="text-xl font-bold text-gray-900 dark:text-white">{exp.title}</h3>
                              <p className="text-blue-600 dark:text-blue-400 font-medium">{exp.company}</p>
                              <p className="text-gray-500 dark:text-gray-400">{exp.period}</p>
                            </div>
                            {exp.achievements.some(a => a.toLowerCase().includes('hackathon')) && (
                              <div className="flex items-center gap-2 text-yellow-600 dark:text-yellow-400">
                                <FaTrophy />
                                <span className="text-sm font-medium">Hackathon Winner</span>
                              </div>
                            )}
                          </div>
                          <ul className="space-y-3">
                            {exp.achievements.map((achievement, i) => (
                              <motion.li
                                key={i}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, delay: i * 0.05 }}
                                viewport={{ once: true }}
                                className="flex items-start gap-2 text-gray-600 dark:text-gray-300"
                              >
                                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-600 dark:bg-blue-400 flex-shrink-0"></span>
                                <span>{achievement}</span>
                              </motion.li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </Card.Body>
                  </Card>
                </motion.div>
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Experience; 