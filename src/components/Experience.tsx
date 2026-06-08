import { motion } from 'framer-motion';
import fciLogo from '../assets/FCI.jpg';
import verizonLogo from '../assets/verizon.png';
import oracleLogo from '../assets/oracle.png';
import SectionHeader from './SectionHeader';

interface ExperienceEntry {
  title: string;
  company: string;
  period: string;
  logo?: string;
  initials?: string;
  tags: string[];
  description: string[];
}

const experiences: ExperienceEntry[] = [
  {
    title: 'Software Engineer – Senior Associate',
    company: 'First Citizens India',
    period: 'Nov 2025 — Present',
    logo: fciLogo,
    tags: ['Cards & Payments', 'Risk AI', 'MCP', 'GenAI'],
    description: [
      'Building backend systems for cards & payments — risk evaluation, automated decisioning, and compliance workflows',
      'Designed risk scoring algorithms improving decision consistency in regulated financial environments',
      'Revamped real-time rule engine to 50ms execution across thousands of rules',
      'Integrated MCP protocols for LLM-powered automation and intelligent workflow orchestration',
      'Established secure GenAI firewall layer as enterprise POC with architects',
      'Optimised LLM token consumption via prompt engineering, context management, and response caching',
    ],
  },
  {
    title: 'Software Engineer II — Full Stack AI',
    company: 'Verizon',
    period: 'Aug 2023 — Nov 2025',
    logo: verizonLogo,
    tags: ['RAG', 'Agentic AI', 'Microservices', 'LLMs'],
    description: [
      'Scaled Fiber Engineering to 100K+ peak daily requests (from 40K+)',
      'Delivered AI enhancements with GPT, Claude, and agentic workflows across Java, Spring Boot, Python, and React',
      'Architected end-to-end RAG pipelines — embedding → vectorDB → retrieval → LLM inference',
      'Led multi-agent workflows increasing sprint throughput ~3× and reducing triage effort ~40%',
      'Designed 15+ microservices at sub-50ms latency for production AI inference',
      'Mentored 2 interns; improved DB performance 30%; hackathon winner for data health anomaly detection',
    ],
  },
  {
    title: 'Software Engineer I',
    company: 'Oracle Cerner',
    period: 'Oct 2021 — Aug 2023',
    logo: oracleLogo,
    tags: ['Healthcare', 'Kafka', 'CI/CD', 'Docker'],
    description: [
      'Developed 45+ secure healthcare applications across 5+ global cross-functional teams',
      'Created 10+ Kafka microservices integrating into existing monolith',
      'Automated delivery with 15+ Groovy scripts — 40% faster releases',
      '150+ unit tests, 100+ code reviews; containerised apps reducing cloud costs',
      'Hackathon winner: automated CVE fixes from 14 hours to 30 minutes per CVE',
    ],
  },
];

const Experience = () => (
  <section id="experience" className="py-20 md:py-28">
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <SectionHeader
        label="Career"
        title="Where I've Built Impact"
        subtitle="5 years shipping production systems at global enterprises — from healthcare to telecom to fintech."
      />

      <div className="relative">
        <div className="absolute left-[7px] top-2 bottom-2 w-px bg-gradient-to-b from-primary via-primary/40 to-transparent hidden md:block" />

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="relative md:pl-10"
            >
              <div className="timeline-dot hidden md:block top-8" />

              <motion.div whileHover={{ x: 4 }} className="glass-card rounded-2xl p-6 md:p-8 transition-all duration-300">
                <div className="flex flex-col sm:flex-row sm:items-start gap-4 mb-5">
                  <div className="flex-shrink-0 w-14 h-14 rounded-xl overflow-hidden bg-white p-1.5 shadow-sm border border-border flex items-center justify-center">
                    {exp.logo ? (
                      <img src={exp.logo} alt={exp.company} className="w-full h-full object-contain" />
                    ) : (
                      <span className="font-display font-bold text-primary">{exp.initials}</span>
                    )}
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-wrap items-start justify-between gap-2">
                      <div>
                        <h3 className="font-display font-bold text-lg md:text-xl">{exp.title}</h3>
                        <p className="text-primary font-medium">{exp.company}</p>
                      </div>
                      <span className="text-xs font-mono text-foreground/50 bg-muted px-3 py-1 rounded-full whitespace-nowrap">
                        {exp.period}
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-2 mt-3">
                      {exp.tags.map((tag) => (
                        <span key={tag} className="skill-pill">{tag}</span>
                      ))}
                    </div>
                  </div>
                </div>

                <ul className="space-y-2.5">
                  {exp.description.map((item, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-sm text-foreground/70">
                      <span className="text-primary mt-1 flex-shrink-0">▸</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default Experience;
