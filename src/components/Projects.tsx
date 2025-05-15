import { motion } from 'framer-motion';
import { useState } from 'react';

interface Project {
  title: string;
  description: string;
  technologies: string[];
  highlights: string[];
  image: string;
  github: string;
  demo: string;
}

interface ProjectCardProps {
  project: Project;
  index: number;
}

const projects: Project[] = [
  {
    title: 'IT Service Management System',
    description: 'A comprehensive internal ticketing system that streamlines IT support processes. Employees can create tickets for technical issues, while administrators can efficiently manage and assign them to service engineers.',
    technologies: ['Spring Boot', 'ReactJS', 'PostgreSQL', 'REST API', 'Docker'],
    highlights: [
      'Spearheaded full-stack development of an internal IT service management system',
      'Enhanced UI with intuitive interface for ticket management',
      'Implemented seamless ticket assignment system for administrators',
      'Improved operational efficiency through streamlined issue resolution process'
    ],
    image: '/projects/itsm-system.png',
    github: 'https://github.com/sameerchachiya/itsm-system',
    demo: 'https://itsm-demo.sameerchachiya.com'
  },
  {
    title: 'Health Insurance Cost Prediction',
    description: 'A machine learning application that predicts health insurance costs using supervised learning techniques. The system employs Random Forest and Regression strategies for accurate cost estimation.',
    technologies: ['Python', 'Flask', 'Machine Learning', 'Random Forest', 'Regression', 'scikit-learn'],
    highlights: [
      'Developed a Supervised Learning model for insurance cost prediction',
      'Implemented Random Forest model and Regression strategy for enhanced accuracy',
      'Created a web application using Flask framework',
      'Integrated ML model with user-friendly interface'
    ],
    image: '/projects/health-insurance.png',
    github: 'https://github.com/sameerchachiya/health-insurance-predictor',
    demo: 'https://insurance-predictor.sameerchachiya.com'
  },
  {
    title: 'Portfolio Website',
    description: 'A modern, responsive portfolio website built with React and Tailwind CSS. Features dark/light mode, smooth animations, and a clean, professional design.',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Vite'],
    highlights: [
      'Implemented responsive design with modern UI/UX principles',
      'Created smooth animations and transitions using Framer Motion',
      'Integrated dark/light mode with theme persistence',
      'Optimized performance and accessibility'
    ],
    image: '/projects/portfolio.png',
    github: 'https://github.com/sameerchachiya/portfolio',
    demo: 'https://sameerchachiya.com'
  }
];

const ProjectCard = ({ project, index }: ProjectCardProps) => {
  const [imageError, setImageError] = useState(false);

  return (
    <motion.div
      key={project.title}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-card rounded-lg overflow-hidden shadow-lg border border-border hover:shadow-xl transition-all duration-300 group"
    >
      <div className="relative overflow-hidden aspect-video bg-gray-100">
        {!imageError ? (
          <img
            src={project.image}
            alt={`${project.title} preview`}
            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
            onError={() => setImageError(true)}
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-gray-400">
            <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-3">{project.title}</h3>
        <p className="text-foreground/70 mb-4">{project.description}</p>
        
        <div className="mb-4">
          <h4 className="text-sm font-semibold text-primary mb-2">Key Highlights:</h4>
          <ul className="space-y-2">
            {project.highlights.map((highlight, i) => (
              <li key={i} className="flex items-start text-sm text-foreground/70">
                <span className="text-primary mr-2">•</span>
                <span>{highlight}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mb-4">
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 text-sm rounded-full bg-primary/10 text-primary"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="flex space-x-4">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-foreground/40 cursor-not-allowed"
            onClick={(e) => e.preventDefault()}
          >
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
              <path
                fillRule="evenodd"
                d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                clipRule="evenodd"
              />
            </svg>
            Code
          </a>
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-foreground/40 cursor-not-allowed"
            onClick={(e) => e.preventDefault()}
          >
            <svg
              className="w-5 h-5 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
            Demo
          </a>
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="py-16 md:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
          <p className="text-foreground/70 max-w-2xl mx-auto">
            Showcase of my key projects demonstrating technical expertise and problem-solving abilities.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects; 