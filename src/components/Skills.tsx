import { motion } from 'framer-motion';

const skills = [
  {
    category: 'Languages & Frameworks',
    items: [
      'Java',
      'Spring Boot',
      'ReactJS',
      'AngularJS',
      'JavaScript',
      'Groovy',
      'HTML',
      'CSS'
    ],
  },
  {
    category: 'Cloud & DevOps',
    items: [
      'AWS',
      'Docker',
      'Jenkins',
      'Git',
      'Maven',
      'Gradle',
      'Microservices',
      'REST API'
    ],
  },
  {
    category: 'Databases & Tools',
    items: [
      'PostgreSQL',
      'MySQL',
      'NoSQL',
      'Kafka',
      'Splunk',
      'Jira',
      'LeetCode',
      'Generative AI'
    ],
  },
  {
    category: 'Core Competencies',
    items: [
      'Data Structures',
      'Algorithm Design',
      'Design Patterns',
      'Problem Solving',
      'Critical Thinking',
      'Agile',
      'Artificial Intelligence',
      'System Design'
    ],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-16 md:py-20 bg-secondary/5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Technical Skills</h2>
          <p className="text-foreground/70 max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise and core competencies.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skillGroup, index) => (
            <motion.div
              key={skillGroup.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card rounded-lg p-6 shadow-lg border border-border hover:shadow-xl transition-shadow duration-300"
            >
              <h3 className="text-xl font-semibold mb-4 text-primary">
                {skillGroup.category}
              </h3>
              <ul className="space-y-2">
                {skillGroup.items.map((skill, i) => (
                  <motion.li
                    key={skill}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.1 + i * 0.1 }}
                    className="flex items-center text-foreground/70 hover:text-primary transition-colors duration-200"
                  >
                    <svg
                      className="w-4 h-4 mr-2 text-primary"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4"
                      />
                    </svg>
                    {skill}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills; 