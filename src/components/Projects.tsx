import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Healthcare Management System',
    description: 'A comprehensive healthcare management system built with Spring Boot and React. Features include patient records management, appointment scheduling, and billing integration.',
    technologies: ['Java', 'Spring Boot', 'React', 'PostgreSQL', 'Docker'],
    image: '/projects/healthcare.jpg',
    github: 'https://github.com/sameerchachiya/healthcare-system',
    demo: 'https://healthcare-demo.sameerchachiya.com',
  },
  {
    title: 'E-commerce Platform',
    description: 'A modern e-commerce platform with features like product catalog, shopping cart, user authentication, and payment integration using Stripe.',
    technologies: ['Next.js', 'TypeScript', 'Node.js', 'MongoDB', 'Stripe'],
    image: '/projects/ecommerce.jpg',
    github: 'https://github.com/sameerchachiya/ecommerce-platform',
    demo: 'https://ecommerce.sameerchachiya.com',
  },
  {
    title: 'Task Management App',
    description: 'A real-time task management application with collaborative features, drag-and-drop interface, and team management capabilities.',
    technologies: ['React', 'Redux', 'Node.js', 'Socket.io', 'MongoDB'],
    image: '/projects/taskmanager.jpg',
    github: 'https://github.com/sameerchachiya/task-manager',
    demo: 'https://tasks.sameerchachiya.com',
  },
];

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
            A selection of my recent work and personal projects.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card rounded-lg overflow-hidden shadow-lg border border-border"
            >
              <div className="aspect-w-16 aspect-h-9 bg-secondary/20">
                {/* Add actual images later */}
                <div className="w-full h-48 bg-gradient-to-br from-primary/20 to-secondary/20" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-foreground/70 mb-4">{project.description}</p>
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
                    className="flex items-center text-foreground/70 hover:text-primary transition-colors"
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
                    className="flex items-center text-foreground/70 hover:text-primary transition-colors"
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
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects; 