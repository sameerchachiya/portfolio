import { motion } from 'framer-motion';
import fciLogo from '../assets/FCI.jpg';
import verizonLogo from '../assets/verizon.png';
import oracleLogo from '../assets/oracle.png';

interface ExperienceEntry {
  title: string;
  company: string;
  period: string;
  logo?: string;
  initials?: string;
  description: string[];
}

const experiences: ExperienceEntry[] = [
  {
    title: 'Software Engineer – Senior Associate',
    company: 'First Citizens India',
    period: 'Nov 2025 — Present',
    logo: fciLogo,
    description: [
      'Primarily building backend systems for cards & payments, focusing on risk evaluation, automated decisioning, and compliance-driven workflows',
      'Designed risk scoring algorithms improving decision consistency in compliance-driven financial workflows',
      'Delivering low-latency, high-reliability systems under strict correctness constraints in a regulated environment',
      'Revamped real-time functionalities, optimising thousands of rules to achieve 50ms execution time',
      'Integrated internal applications with AI using MCP protocols, enabling services to leverage LLM-powered automation and intelligent workflow orchestration',
      'Established a secure firewall layer for Generative AI systems with architects, using the application as a POC before scaling across the enterprise',
      'Optimised LLM token consumption through prompt engineering, context management, and response caching, reducing inference costs while maintaining quality',
    ],
  },
  {
    title: 'Software Engineer II — Full Stack AI',
    company: 'Verizon',
    period: 'Aug 2023 — Nov 2025',
    logo: verizonLogo,
    description: [
      'Primarily contributed to the Fiber Engineering space, scaling it to handle peak traffic of 100K+/day (from 40K+/day)',
      'Delivered AI-powered enhancements integrating LLMs (GPT, Claude) and agentic workflows into Java, Spring Boot, Python, and React',
      'Designed and scaled 15+ microservices handling 100K+ daily requests at sub-50ms latency for production-grade AI inference',
      'Architected end-to-end RAG pipelines (embedding → vectorDB → retrieval → LLM inference) for context-aware production AI responses',
      'Led agentic AI adoption — multi-agent workflows for autonomous task execution, increasing sprint throughput by ~3× and reducing debugging/triage effort by ~40%',
      'Resolved 50+ UI-related bugs and maintained 10+ backend services, resulting in a 20% reduction in UI load times',
      'Mentored 2 interns on AI integration strategies and microservice design; assisted with 5+ code reviews and 2+ key feature deliveries per sprint',
      'Improved database query performance by 30% through referential integrity enforcement',
      'Hackathon Winner: Pioneering data source health application from PoC to deployment, improving anomaly detection accuracy by 30%',
    ],
  },
  {
    title: 'Software Engineer I',
    company: 'Oracle Cerner',
    period: 'Oct 2021 — Aug 2023',
    logo: oracleLogo,
    description: [
      'Primarily contributed to Healthcare space — developed/modified 45+ secure applications in Java, Spring Boot, and React JS across 5+ cross-functional global teams',
      'Automated software delivery with 15+ Java Groovy scripts achieving CI/CD, increasing delivery speed by 40%',
      'Developed 150+ unit test cases; participated in 100+ code reviews ensuring code quality and system stability',
      'Containerised applications into Docker images, optimising server utilisation and reducing cloud costs',
      'Provided Tier 1 support for 8+ applications (break fixes and data changes)',
      'Created 10+ microservices integrating Kafka into an existing Monolith',
      'Contributed to Angular-to-React migration',
      'Hackathon Winner: Automated CVE fixes, cutting engineering time from 14 hours to 30 minutes per CVE',
    ],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-16 md:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Professional Experience
          </h2>
        </motion.div>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="relative pl-8 md:pl-0"
            >
              <div className="md:grid md:grid-cols-12 md:gap-8">
                <div className="hidden md:block md:col-span-3">
                  <div className="sticky top-20 text-right">
                    <span className="text-lg font-semibold text-primary whitespace-nowrap">
                      {exp.period}
                    </span>
                  </div>
                </div>

                <div className="md:col-span-9">
                  <div className="relative bg-card rounded-lg p-6 shadow-lg border border-border">
                    <div className="md:hidden mb-4 text-primary font-semibold whitespace-nowrap">
                      {exp.period}
                    </div>

                    <div className="flex items-center gap-6 mb-6">
                      <div className="flex-shrink-0 w-20 h-20 md:w-24 md:h-24 rounded-xl overflow-hidden bg-white p-2 shadow-sm flex items-center justify-center">
                        {exp.logo ? (
                          <img
                            src={exp.logo}
                            alt={`${exp.company} logo`}
                            className="w-full h-full object-contain"
                          />
                        ) : (
                          <span className="text-2xl font-bold text-primary">{exp.initials}</span>
                        )}
                      </div>
                      <div>
                        <h3 className="text-xl md:text-2xl font-bold mb-1">{exp.title}</h3>
                        <h4 className="text-lg md:text-xl text-foreground/80">{exp.company}</h4>
                      </div>
                    </div>

                    <ul className="space-y-3">
                      {exp.description.map((item, i) => (
                        <li key={i} className="flex items-start">
                          <span className="text-primary mr-2">•</span>
                          <span className="text-foreground/70">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
