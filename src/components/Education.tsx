import { motion } from 'framer-motion';

const educationData = [
  {
    school: "Global Academy Of Technology",
    degree: "Bachelor of Technology - BTech, Computer Engineering",
    duration: "2017 - 2021",
    board: "Board : Visvesvaraya Technological University"
  },
  {
    school: "JAIN College",
    degree: "pre-university, Science-PCMC",
    duration: "2015 - 2017"
  },
  {
    school: "Holy Angels High School",
    degree: "X, ICSE",
    duration: "2005 - 2015"
  }
];

const Education = () => {
  return (
    <section id="education" className="py-16 md:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Education</h2>
          <p className="text-foreground/70">My academic journey and qualifications</p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 h-full w-0.5 bg-primary/20"></div>

          <div className="space-y-8">
            {educationData.map((edu, index) => (
              <motion.div
                key={edu.school}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="relative pl-16"
              >
                {/* Timeline Dot */}
                <div className="absolute left-6 top-1/2 w-4 h-4 bg-primary rounded-full transform -translate-y-1/2 z-10"></div>

                <div className="bg-card rounded-lg p-6 shadow-lg border border-border hover:shadow-xl transition-shadow">
                  <h3 className="text-xl font-semibold text-primary mb-2">{edu.school}</h3>
                  <p className="text-foreground/90 mb-2">{edu.degree}</p>
                  <p className="text-foreground/70 text-sm">{edu.duration}</p>
                  {edu.board && (
                    <p className="text-foreground/70 text-sm mt-2">{edu.board}</p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
