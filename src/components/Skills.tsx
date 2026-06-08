import { motion } from 'framer-motion';
import { FaJava, FaReact, FaJs, FaAws, FaDocker, FaJenkins, FaGitAlt, FaDatabase, FaPython, FaCogs, FaBrain, FaProjectDiagram, FaTools } from 'react-icons/fa';
import { SiSpring, SiPostgresql, SiMysql, SiApachekafka, SiSplunk, SiTypescript, SiFastapi, SiRedis, SiKubernetes } from 'react-icons/si';
import { MdOutlineApi } from 'react-icons/md';

const skills = [
  {
    category: 'AI',
    items: [
      'LangChain',
      'LlamaIndex',
      'LangGraph',
      'HuggingFace',
      'RAG',
      'Vector Databases',
      'Prompt Engineering',
      'Agentic AI',
      'MCP',
      'AI Safety',
    ],
  },
  {
    category: 'Languages & Frameworks',
    items: [
      'Java',
      'Python',
      'JavaScript',
      'TypeScript',
      'Spring Boot',
      'React',
      'FastAPI',
      'REST API',
      'WebSockets',
      'Redis',
    ],
  },
  {
    category: 'Cloud & DevOps',
    items: [
      'AWS',
      'AWS Bedrock',
      'Kafka',
      'Docker',
      'Kubernetes',
      'Git',
      'Jenkins',
      'Splunk',
    ],
  },
  {
    category: 'Databases',
    items: [
      'PostgreSQL',
      'MySQL',
      'NoSQL',
      'Qdrant',
      'Pinecone',
      'Chroma',
    ],
  },
  {
    category: 'Architecture',
    items: [
      'Microservices',
      'Distributed Systems',
      'System Design (HLD/LLD)',
      'Design Patterns',
      'Data Structures',
      'Algorithm Design',
    ],
  },
  {
    category: 'Core Competencies',
    items: [
      'Problem Solving',
      'Critical Thinking',
      'Agile',
      'Technical Leading',
      'Vibe Coding',
    ],
  },
];

const skillIcons: { [key: string]: JSX.Element } = {
  Java: <FaJava className="w-5 h-5 mr-2 text-primary" />,
  Python: <FaPython className="w-5 h-5 mr-2 text-primary" />,
  JavaScript: <FaJs className="w-5 h-5 mr-2 text-primary" />,
  TypeScript: <SiTypescript className="w-5 h-5 mr-2 text-primary" />,
  'Spring Boot': <SiSpring className="w-5 h-5 mr-2 text-primary" />,
  React: <FaReact className="w-5 h-5 mr-2 text-primary" />,
  FastAPI: <SiFastapi className="w-5 h-5 mr-2 text-primary" />,
  'REST API': <MdOutlineApi className="w-5 h-5 mr-2 text-primary" />,
  Redis: <SiRedis className="w-5 h-5 mr-2 text-primary" />,
  AWS: <FaAws className="w-5 h-5 mr-2 text-primary" />,
  Kafka: <SiApachekafka className="w-5 h-5 mr-2 text-primary" />,
  Docker: <FaDocker className="w-5 h-5 mr-2 text-primary" />,
  Kubernetes: <SiKubernetes className="w-5 h-5 mr-2 text-primary" />,
  Git: <FaGitAlt className="w-5 h-5 mr-2 text-primary" />,
  Jenkins: <FaJenkins className="w-5 h-5 mr-2 text-primary" />,
  Splunk: <SiSplunk className="w-5 h-5 mr-2 text-primary" />,
  PostgreSQL: <SiPostgresql className="w-5 h-5 mr-2 text-primary" />,
  MySQL: <SiMysql className="w-5 h-5 mr-2 text-primary" />,
  NoSQL: <FaDatabase className="w-5 h-5 mr-2 text-primary" />,
  Microservices: <FaCogs className="w-5 h-5 mr-2 text-primary" />,
  'Distributed Systems': <FaProjectDiagram className="w-5 h-5 mr-2 text-primary" />,
  'System Design (HLD/LLD)': <FaProjectDiagram className="w-5 h-5 mr-2 text-primary" />,
  'Design Patterns': <FaProjectDiagram className="w-5 h-5 mr-2 text-primary" />,
  'Data Structures': <FaProjectDiagram className="w-5 h-5 mr-2 text-primary" />,
  'Algorithm Design': <FaProjectDiagram className="w-5 h-5 mr-2 text-primary" />,
  'Problem Solving': <FaBrain className="w-5 h-5 mr-2 text-primary" />,
  'Critical Thinking': <FaBrain className="w-5 h-5 mr-2 text-primary" />,
  Agile: <FaCogs className="w-5 h-5 mr-2 text-primary" />,
  'Technical Leading': <FaBrain className="w-5 h-5 mr-2 text-primary" />,
  LangChain: <FaBrain className="w-5 h-5 mr-2 text-primary" />,
  LlamaIndex: <FaBrain className="w-5 h-5 mr-2 text-primary" />,
  LangGraph: <FaBrain className="w-5 h-5 mr-2 text-primary" />,
  HuggingFace: <FaBrain className="w-5 h-5 mr-2 text-primary" />,
  RAG: <FaBrain className="w-5 h-5 mr-2 text-primary" />,
  'Vector Databases': <FaDatabase className="w-5 h-5 mr-2 text-primary" />,
  'Prompt Engineering': <FaBrain className="w-5 h-5 mr-2 text-primary" />,
  'Agentic AI': <FaBrain className="w-5 h-5 mr-2 text-primary" />,
  MCP: <FaBrain className="w-5 h-5 mr-2 text-primary" />,
  'AI Safety': <FaBrain className="w-5 h-5 mr-2 text-primary" />,
  Qdrant: <FaDatabase className="w-5 h-5 mr-2 text-primary" />,
  Pinecone: <FaDatabase className="w-5 h-5 mr-2 text-primary" />,
  Chroma: <FaDatabase className="w-5 h-5 mr-2 text-primary" />,
  'AWS Bedrock': <FaAws className="w-5 h-5 mr-2 text-primary" />,
  WebSockets: <MdOutlineApi className="w-5 h-5 mr-2 text-primary" />,
  'Vibe Coding': <FaBrain className="w-5 h-5 mr-2 text-primary" />,
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Core Skills</h2>
          <p className="text-foreground/70 max-w-2xl mx-auto">
            AI, full-stack engineering, cloud infrastructure, and enterprise architecture expertise.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
                    transition={{ duration: 0.3, delay: index * 0.1 + i * 0.05 }}
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
