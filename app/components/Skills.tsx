"use client";

import { motion } from 'framer-motion';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FaCode, FaCloud, FaDatabase, FaTools, FaBrain, FaRobot } from 'react-icons/fa';

const skillCategories = [
  {
    title: 'Languages & Frameworks',
    icon: <FaCode />,
    skills: ['Java', 'Spring Boot', 'ReactJS', 'AngularJS', 'JavaScript', 'Groovy', 'HTML', 'CSS']
  },
  {
    title: 'Cloud & Infrastructure',
    icon: <FaCloud />,
    skills: ['AWS', 'Docker', 'Kafka', 'Microservices', 'Jenkins', 'Splunk']
  },
  {
    title: 'Databases',
    icon: <FaDatabase />,
    skills: ['PostgresSQL', 'MySQL', 'NoSQL']
  },
  {
    title: 'Tools & Methodologies',
    icon: <FaTools />,
    skills: ['Git', 'Maven', 'Gradle', 'REST API', 'Jira', 'Agile']
  },
  {
    title: 'Core Competencies',
    icon: <FaBrain />,
    skills: ['Data Structures', 'Algorithm Design', 'Problem Solving', 'Critical thinking', 'Design Patterns']
  },
  {
    title: 'Modern Tech',
    icon: <FaRobot />,
    skills: ['Artificial Intelligence AI', 'Generative AI', 'LeetCode', 'Googling']
  }
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-gray-800"></div>
      
      <Container className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Technical Skills</h2>
          <p className="text-gray-600 dark:text-gray-300">Technologies and tools I work with</p>
        </motion.div>

        <Row className="g-4">
          {skillCategories.map((category, index) => (
            <Col key={index} md={6} lg={4}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-100 border-0 shadow-lg hover:shadow-xl transition-all bg-white/80 backdrop-blur-sm dark:bg-gray-900/80">
                  <Card.Body className="p-6">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-12 h-12 rounded-lg bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center text-blue-600 dark:text-blue-400 text-2xl">
                        {category.icon}
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                        {category.title}
                      </h3>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill, i) => (
                        <motion.span
                          key={i}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.3, delay: i * 0.05 }}
                          viewport={{ once: true }}
                          whileHover={{ scale: 1.05 }}
                          className="px-3 py-1 rounded-full text-sm font-medium bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/30 dark:to-indigo-900/30 border border-blue-100 dark:border-blue-800 text-blue-800 dark:text-blue-200"
                        >
                          {skill}
                        </motion.span>
                      ))}
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

export default Skills; 