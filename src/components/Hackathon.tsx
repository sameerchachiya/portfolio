import { motion } from 'framer-motion';

const hackathons = [
  {
    company: "Verizon",
    year: "2023",
    achievement: "Top 5",
    project: "Database Anomaly Detection System",
    description: "Designed and developed a pioneering application from PoC to deployment, improving anomaly detection accuracy by 30%"
  },
  {
    company: "Oracle Cerner",
    year: "2022",
    achievement: "Winner",
    project: "CVE Vulnerability Automation",
    description: "Automated CVE vulnerability fixes, reducing engineering time from 14 hours to 30 minutes per CVE"
  }
];

const Hackathon = () => {
  return (
    <section id="hackathon" className="py-16 md:py-20 bg-secondary/5">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Hackathon Achievements</h2>
          <p className="text-foreground/70">Showcasing innovation through competitive coding challenges</p>
        </motion.div>

        <div className="space-y-8">
          {hackathons.map((hack, index) => (
            <motion.div
              key={`${hack.company}-${hack.year}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-card rounded-lg p-6 shadow-lg border border-border hover:shadow-xl transition-shadow"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-primary">{hack.project}</h3>
                  <p className="text-foreground/90">{hack.company} - {hack.year}</p>
                </div>
                <div className="mt-2 md:mt-0">
                  <span className="inline-flex items-center px-4 py-1 rounded-full text-sm font-medium bg-primary/10 text-primary">
                    {hack.achievement}
                  </span>
                </div>
              </div>
              <p className="text-foreground/70">{hack.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hackathon; 