"use client";

import { FaGithub, FaLinkedin, FaEnvelope, FaArrowDown } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { Container, Row, Col } from 'react-bootstrap';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative py-20">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-900 dark:to-gray-800 -z-10"></div>
      
      <Container>
        <Row className="align-items-center">
          <Col lg={8} className="mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-6"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring", stiffness: 160 }}
                className="w-32 h-32 mx-auto mb-8 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 flex items-center justify-center text-4xl text-white font-bold"
              >
                SC
              </motion.div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 text-transparent bg-clip-text">
                Hi, I'm Sameer Chachiya
              </h1>

              <h2 className="text-xl sm:text-2xl md:text-3xl text-gray-600 dark:text-gray-300 mb-6">
                Software Engineer | Full Stack Developer
              </h2>

              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
                Results-driven software engineer with 4 years of experience in Full-Stack Development building scalable systems.
                Based in Bangalore, India.
              </p>

              <div className="flex justify-center space-x-6 mb-8">
                <motion.a
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  href="https://www.linkedin.com/in/sameerchachiya/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-2xl text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
                >
                  <FaLinkedin />
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  href="https://leetcode.com/u/sameerchachiya11"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-2xl text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
                >
                  <FaGithub />
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  href="mailto:sameerchachiya11@gmail.com"
                  className="text-2xl text-red-600 dark:text-red-400 hover:text-red-700 dark:hover:text-red-300 transition-colors"
                >
                  <FaEnvelope />
                </motion.a>
              </div>

              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="#contact"
                  className="btn btn-primary px-8 py-3 rounded-lg shadow-lg hover:shadow-xl transition-all"
                >
                  Contact Me
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="#experience"
                  className="btn btn-outline-primary px-8 py-3 rounded-lg shadow-lg hover:shadow-xl transition-all"
                >
                  View Experience
                </motion.a>
              </div>
            </motion.div>
          </Col>
        </Row>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="text-gray-400 dark:text-gray-500"
          >
            <FaArrowDown className="text-2xl" />
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
};

export default Hero; 