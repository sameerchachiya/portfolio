import { motion } from 'framer-motion';
import { FaJava, FaReact, FaAngular, FaJs, FaHtml5, FaCss3Alt, FaAws, FaDocker, FaJenkins, FaGitAlt, FaDatabase, FaPython, FaNodeJs, FaCloud, FaTools, FaCogs, FaBrain, FaProjectDiagram } from 'react-icons/fa';
import { SiSpring, SiMan, SiGradle, SiPostgresql, SiMysql, SiApachekafka, SiSplunk, SiJira, SiLeetcode, SiRubyonrails } from 'react-icons/si';
import { MdOutlineApi } from 'react-icons/md';

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

const skillIcons: { [key: string]: JSX.Element } = {
  Java: <FaJava className="w-5 h-5 mr-2 text-primary" />,
  'Spring Boot': <SiSpring className="w-5 h-5 mr-2 text-primary" />,
  ReactJS: <FaReact className="w-5 h-5 mr-2 text-primary" />,
  AngularJS: <FaAngular className="w-5 h-5 mr-2 text-primary" />,
  JavaScript: <FaJs className="w-5 h-5 mr-2 text-primary" />,
  Groovy: <FaTools className="w-5 h-5 mr-2 text-primary" />,
  HTML: <FaHtml5 className="w-5 h-5 mr-2 text-primary" />,
  CSS: <FaCss3Alt className="w-5 h-5 mr-2 text-primary" />,
  AWS: <FaAws className="w-5 h-5 mr-2 text-primary" />,
  Docker: <FaDocker className="w-5 h-5 mr-2 text-primary" />,
  Jenkins: <FaJenkins className="w-5 h-5 mr-2 text-primary" />,
  Git: <FaGitAlt className="w-5 h-5 mr-2 text-primary" />,
  Maven: <SiMan className="w-5 h-5 mr-2 text-primary" />,
  Gradle: <SiGradle className="w-5 h-5 mr-2 text-primary" />,
  Microservices: <FaCogs className="w-5 h-5 mr-2 text-primary" />,
  'REST API': <MdOutlineApi className="w-5 h-5 mr-2 text-primary" />,
  PostgreSQL: <SiPostgresql className="w-5 h-5 mr-2 text-primary" />,
  MySQL: <SiMysql className="w-5 h-5 mr-2 text-primary" />,
  NoSQL: <FaDatabase className="w-5 h-5 mr-2 text-primary" />,
  Kafka: <SiApachekafka className="w-5 h-5 mr-2 text-primary" />,
  Splunk: <SiSplunk className="w-5 h-5 mr-2 text-primary" />,
  Jira: <SiJira className="w-5 h-5 mr-2 text-primary" />,
  LeetCode: <SiLeetcode className="w-5 h-5 mr-2 text-primary" />,
  'Generative AI': <FaBrain className="w-5 h-5 mr-2 text-primary" />,
  'Data Structures': <FaProjectDiagram className="w-5 h-5 mr-2 text-primary" />,
  'Algorithm Design': <FaProjectDiagram className="w-5 h-5 mr-2 text-primary" />,
  'Design Patterns': <FaProjectDiagram className="w-5 h-5 mr-2 text-primary" />,
  'Problem Solving': <FaBrain className="w-5 h-5 mr-2 text-primary" />,
  'Critical Thinking': <FaBrain className="w-5 h-5 mr-2 text-primary" />,
  Agile: <FaCogs className="w-5 h-5 mr-2 text-primary" />,
  'Artificial Intelligence': <FaBrain className="w-5 h-5 mr-2 text-primary" />,
  'System Design': <FaProjectDiagram className="w-5 h-5 mr-2 text-primary" />,
};

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
                    {skillIcons[skill] || <FaTools className="w-5 h-5 mr-2 text-primary" />}
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