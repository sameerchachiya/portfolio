"use client";

import { motion } from 'framer-motion';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FaCode, FaRobot, FaCheckCircle } from 'react-icons/fa';

const projects = [
  {
    title: 'IT Service Management System',
    category: 'Full Stack',
    icon: <FaCode />,
    description: 'An internal IT service management system that empowers employees to create tickets for technical issues. Features an intuitive interface for admins to assign tickets to service engineers.',
    highlights: [
      'Streamlined ticket creation process',
      'Intuitive admin interface',
      'Efficient ticket assignment system',
      'Improved operational efficiency'
    ],
    technologies: ['React', 'Spring Boot', 'PostgreSQL']
  },
  {
    title: 'Health Insurance Cost Prediction',
    category: 'Machine Learning',
    icon: <FaRobot />,
    description: 'Developed a Supervised Learning model to predict health insurance costs using Random Forest model and Regression strategy.',
    highlights: [
      'Implemented Random Forest model',
      'Used Regression strategy',
      'Created web interface using Flask',
      'High prediction accuracy'
    ],
    technologies: ['Python', 'Flask', 'Scikit-learn', 'Random Forest']
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 to-blue-50 dark:from-gray-900 dark:to-gray-800"></div>
      
      <Container className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Featured Projects</h2>
          <p className="text-gray-600 dark:text-gray-300">Some of my notable work</p>
        </motion.div>

        <Row className="g-4">
          {projects.map((project, index) => (
            <Col key={index} lg={6}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-100 border-0 shadow-lg hover:shadow-xl transition-all bg-white/80 backdrop-blur-sm dark:bg-gray-900/80">
                  <Card.Body className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 rounded-lg bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center text-blue-600 dark:text-blue-400 text-2xl">
                          {project.icon}
                        </div>
                      </div>
                      <div className="flex-grow">
                        <div className="flex flex-wrap items-start justify-between gap-2 mb-4">
                          <div>
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                              {project.title}
                            </h3>
                            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 dark:bg-blue-900/50 text-blue-800 dark:text-blue-200">
                              {project.category}
                            </span>
                          </div>
                        </div>
                        <p className="text-gray-600 dark:text-gray-300 mb-4">
                          {project.description}
                        </p>
                        <div className="mb-4">
                          <h4 className="font-semibold mb-3 text-gray-900 dark:text-white">Key Highlights:</h4>
                          <ul className="space-y-2">
                            {project.highlights.map((highlight, i) => (
                              <motion.li
                                key={i}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.3, delay: i * 0.1 }}
                                viewport={{ once: true }}
                                className="flex items-start gap-2 text-gray-600 dark:text-gray-300"
                              >
                                <FaCheckCircle className="mt-1 text-green-500 dark:text-green-400 flex-shrink-0" />
                                <span>{highlight}</span>
                              </motion.li>
                            ))}
                          </ul>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech, i) => (
                            <motion.span
                              key={i}
                              initial={{ opacity: 0, scale: 0.8 }}
                              whileInView={{ opacity: 1, scale: 1 }}
                              transition={{ duration: 0.3, delay: i * 0.05 }}
                              viewport={{ once: true }}
                              whileHover={{ scale: 1.05 }}
                              className="px-3 py-1 rounded-full text-sm font-medium bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-800/50 dark:to-gray-700/50 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300"
                            >
                              {tech}
                            </motion.span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </Card.Body>
                </Card>
              </motion.div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Projects; 