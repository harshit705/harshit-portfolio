import { motion } from 'framer-motion';
import { containerVariants, itemVariants } from '../../utils/animations';
import { SectionHeading } from '../ui/SectionHeading';
import { ABOUT, CAREER_OBJECTIVE, EDUCATION } from '../../utils/constants';
import { GlassCard } from '../ui/GlassCard';
import { BookOpen, Target } from 'lucide-react';

export function About() {
  return (
    <>
      {/* About Description Section */}
      <section className="py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            className="grid md:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-100px' }}
            variants={containerVariants}
          >
            {ABOUT.highlights.map((highlight) => (
              <motion.div key={highlight} variants={itemVariants}>
                <GlassCard glowColor="blue" className="p-6 text-center">
                  <p className="text-lg font-semibold text-blue-300">{highlight}</p>
                </GlassCard>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Career Objective */}
      <section className="py-8 md:py-12">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <GlassCard glowColor="blue" className="p-12 md:p-16">
              <div className="flex items-start gap-6">
                <motion.div className="p-4 bg-gradient-to-br from-blue-500/30 to-cyan-500/20 rounded-2xl flex-shrink-0 hidden md:block" whileHover={{ scale: 1.1, rotate: 5 }}>
                  <Target className="text-blue-400" size={40} />
                </motion.div>
                <div className="flex-1">
                  <h3 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-white to-blue-300 bg-clip-text text-transparent">
                    Career Objective
                  </h3>
                  <p className="text-xl text-gray-300 leading-relaxed">{CAREER_OBJECTIVE}</p>
                </div>
              </div>
            </GlassCard>
          </motion.div>
        </div>
      </section>

      {/* Education */}
      <section className="py-8 md:py-12">
        <div className="max-w-6xl mx-auto px-6">
          <SectionHeading title="Education" accentColor="blue" icon={<BookOpen size={36} />} />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <GlassCard glowColor="blue" className="p-8 md:p-10">
              <div className="flex items-start gap-4">
                <motion.div className="p-3 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-lg flex-shrink-0" whileHover={{ scale: 1.1 }}>
                  <BookOpen className="text-blue-400" size={24} />
                </motion.div>
                <div className="flex-1">
                  <h4 className="text-2xl font-bold text-white mb-2">{EDUCATION.school}</h4>
                  <p className="text-blue-400 font-semibold text-lg mb-3">{EDUCATION.degree}</p>
                  <div className="flex flex-col md:flex-row md:items-center md:gap-6">
                    <p className="text-gray-400">
                      <span className="text-cyan-400 font-bold">CGPA:</span> {EDUCATION.cgpa}
                    </p>
                    <p className="text-gray-400">
                      <span className="text-cyan-400 font-bold">Status:</span> {EDUCATION.status}
                    </p>
                  </div>
                </div>
              </div>
            </GlassCard>
          </motion.div>
        </div>
      </section>
    </>
  );
}
