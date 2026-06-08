import { motion } from 'framer-motion';
import SectionHeader from './SectionHeader';

const skills = [
  {
    category: 'AI & ML',
    highlight: true,
    items: ['LangChain', 'LlamaIndex', 'LangGraph', 'HuggingFace', 'RAG', 'Vector DBs', 'Prompt Engineering', 'Agentic AI', 'MCP', 'AI Safety'],
  },
  {
    category: 'Languages',
    items: ['Java', 'Python', 'JavaScript', 'TypeScript'],
  },
  {
    category: 'Frameworks',
    items: ['Spring Boot', 'React', 'FastAPI', 'REST API', 'WebSockets', 'Redis'],
  },
  {
    category: 'Cloud & DevOps',
    items: ['AWS', 'AWS Bedrock', 'Kafka', 'Docker', 'Kubernetes', 'Git', 'Jenkins', 'Splunk'],
  },
  {
    category: 'Databases',
    items: ['PostgreSQL', 'MySQL', 'NoSQL', 'Qdrant', 'Pinecone', 'Chroma'],
  },
  {
    category: 'Architecture',
    items: ['Microservices', 'Distributed Systems', 'System Design', 'Design Patterns', 'DSA'],
  },
];

const Skills = () => (
  <section id="skills" className="py-20 md:py-28 bg-secondary/30">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <SectionHeader
        label="Expertise"
        title="Skills That Ship"
        subtitle="From agentic AI and RAG pipelines to enterprise microservices — the full stack, production-ready."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {skills.map((group, index) => (
          <motion.div
            key={group.category}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.08 }}
            className={`glass-card rounded-2xl p-6 hover:border-primary/30 transition-all duration-300 ${
              group.highlight ? 'md:col-span-2 lg:col-span-1 ring-1 ring-primary/20' : ''
            }`}
          >
            <h3 className="font-display font-bold text-base mb-4 flex items-center gap-2">
              {group.highlight && <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />}
              <span className={group.highlight ? 'text-gradient' : 'text-foreground'}>{group.category}</span>
            </h3>
            <div className="flex flex-wrap gap-2">
              {group.items.map((skill) => (
                <span key={skill} className="skill-pill">{skill}</span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Skills;
