import { motion } from 'framer-motion';
import { Award, Briefcase } from 'lucide-react';
import { SectionHeading } from '../ui/SectionHeading';
import { GlassCard } from '../ui/GlassCard';
import { EXPERIENCES } from '../../utils/constants';
import { sectionRevealVariants } from '../../utils/animations';

export function Experience() {
  return (
    <section id="experience" className="min-h-[85vh] bg-gradient-to-b from-transparent via-blue-950/10 to-transparent py-16 md:py-24 flex flex-col justify-center">
      <motion.div
        initial="initial"
        whileInView="whileInView"
        viewport={{ once: true, margin: "-100px" }}
        variants={sectionRevealVariants}
        className="max-w-6xl mx-auto px-6"
      >
        <SectionHeading
          title="Experience & Timeline"
          accentColor="blue"
          icon={<Award size={36} />}
        />

        <div className="space-y-6">
          {/* Timeline */}
          <div className="relative">
            {/* Vertical Timeline Line */}
            <div className="hidden md:block absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500/50 via-cyan-500/50 to-blue-500/0" />

            {/* Experience Cards */}
            <div className="space-y-6">
              {EXPERIENCES.map((exp) => (
                <div key={exp.id}>
                  <div className="flex gap-6 md:gap-8">
                    {/* Timeline Dot */}
                    <div className="hidden md:flex flex-shrink-0">
                      <motion.div
                        className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-600 to-cyan-600 shadow-lg shadow-blue-500/50 flex items-center justify-center border-4 border-[#0a1833] relative z-10"
                        whileHover={{ scale: 1.1 }}
                      >
                        {exp.icon ? <exp.icon size={24} className="text-white" /> : <Briefcase size={24} className="text-white" />}
                      </motion.div>
                    </div>

                    {/* Card Content */}
                    <GlassCard className="flex-1 p-6 md:p-8" glowColor="blue">
                      <div>
                        <div className="flex items-start justify-between mb-3">
                          <div>
                            <h4 className="text-2xl font-bold text-white mb-1">{exp.role}</h4>
                            <p className="text-blue-400 font-semibold">{exp.company}</p>
                            {exp.location && <p className="text-gray-400 text-sm">{exp.location}</p>}
                          </div>
                        </div>
                        <p className="text-sm text-cyan-400/80 font-medium mb-4">
                          {exp.startDate} → {exp.endDate}
                        </p>
                        <p className="text-gray-300 mb-4">{exp.description}</p>

                        {/* Highlights */}
                        <ul className="space-y-2">
                          {exp.highlights.map((highlight, idx) => (
                            <li
                              key={idx}
                              className="flex items-start gap-2 text-gray-400 text-sm"
                            >
                              <span className="text-cyan-400 font-bold mt-1">›</span>
                              <span>{highlight}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </GlassCard>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
