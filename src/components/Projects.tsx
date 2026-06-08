import { motion } from 'framer-motion';
import { useState } from 'react';
import SectionHeader from './SectionHeader';

interface Project {
  title: string;
  description: string;
  technologies: string[];
  highlights: string[];
  image: string;
  featured?: boolean;
}

const projects: Project[] = [
  {
    title: 'AI Log Analyser',
    description: 'Upload production logs → AI returns root cause, potential cause, and solution using vector search + LLM inference.',
    technologies: ['Python', 'Vector Search', 'LLM', 'RAG', 'LangChain'],
    highlights: ['Semantic log retrieval pipeline', 'Intelligent root cause analysis', 'Production-ready AI diagnostics'],
    image: '/projects/ai-log-analyser.png',
    featured: true,
  },
  {
    title: 'IT Service Management System',
    description: 'Full-stack internal ticketing system streamlining IT support for employees and administrators.',
    technologies: ['Spring Boot', 'React', 'PostgreSQL', 'REST API'],
    highlights: ['Intuitive admin ticket assignment', 'End-to-end issue resolution workflow'],
    image: '/projects/itsm-system.png',
  },
  {
    title: 'Health Insurance Cost Prediction',
    description: 'ML app using Random Forest + Regression to predict insurance costs, deployed as a Flask web app.',
    technologies: ['Python', 'Flask', 'scikit-learn', 'Machine Learning'],
    highlights: ['Supervised learning model', 'User-friendly web interface'],
    image: '/projects/health-insurance.png',
  },
];

const ProjectCard = ({ project, index }: { project: Project; index: number }) => {
  const [imageError, setImageError] = useState(false);

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`project-card group ${project.featured ? 'lg:col-span-2' : ''}`}
    >
      <div className={`relative overflow-hidden bg-muted ${project.featured ? 'aspect-[21/9]' : 'aspect-video'}`}>
        {!imageError ? (
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            onError={() => setImageError(true)}
          />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center gap-2 bg-gradient-to-br from-primary/10 to-accent/10">
            <span className="text-4xl">⚡</span>
            <span className="text-sm text-foreground/40 font-mono">{project.title}</span>
          </div>
        )}
        {project.featured && (
          <div className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-semibold bg-primary text-white shadow-lg">
            Featured
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent opacity-80" />
        <div className="absolute bottom-4 left-4 right-4">
          <h3 className="font-display font-bold text-xl text-white drop-shadow-lg">{project.title}</h3>
        </div>
      </div>

      <div className="p-6">
        <p className="text-foreground/60 text-sm mb-4 leading-relaxed">{project.description}</p>
        <ul className="space-y-1.5 mb-4">
          {project.highlights.map((h, i) => (
            <li key={i} className="flex items-start gap-2 text-xs text-foreground/50">
              <span className="text-primary">▸</span>{h}
            </li>
          ))}
        </ul>
        <div className="flex flex-wrap gap-1.5">
          {project.technologies.map((tech) => (
            <span key={tech} className="skill-pill text-[11px]">{tech}</span>
          ))}
        </div>
      </div>
    </motion.article>
  );
};

const Projects = () => (
  <section id="projects" className="py-20 md:py-28">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <SectionHeader
        label="Portfolio"
        title="Projects That Solve Real Problems"
        subtitle="From AI-powered diagnostics to full-stack enterprise systems — built to perform in production."
      />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <ProjectCard key={project.title} project={project} index={index} />
        ))}
      </div>
    </div>
  </section>
);

export default Projects;
