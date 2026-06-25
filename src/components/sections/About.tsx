import { motion } from 'framer-motion';
import { SectionHeading } from '../ui/SectionHeading';
import { ABOUT, CAREER_OBJECTIVE, EDUCATION } from '../../utils/constants';
import { GlassCard } from '../ui/GlassCard';
import { BookOpen, Target, Sparkles } from 'lucide-react';
import { sectionRevealVariants } from '../../utils/animations';

export function About() {
  return (
    <section id="about" className="min-h-[85vh] py-16 md:py-24 relative overflow-hidden flex flex-col justify-center">
      <motion.div
        initial="initial"
        whileInView="whileInView"
        viewport={{ once: true, margin: "-100px" }}
        variants={sectionRevealVariants}
        className="max-w-6xl mx-auto px-6 space-y-16"
      >
        {/* Bio Description Section */}
        <div className="flex flex-col lg:flex-row gap-12 items-start">
          {/* Left Column: Biography */}
          <div className="lg:w-2/3 space-y-6">
            <SectionHeading
              title="About Me"
              accentColor="blue"
              icon={<Sparkles size={36} />}
            />
            <p className="text-xl md:text-2xl text-blue-300 font-semibold leading-relaxed">
              {ABOUT.intro}
            </p>
            <div className="text-gray-300 leading-relaxed text-lg space-y-4 whitespace-pre-line">
              {ABOUT.description}
            </div>
          </div>

          {/* Right Column: Highlights Cards */}
          <div className="lg:w-1/3 w-full space-y-4 lg:mt-16">
            <h4 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-4">
              Core Focus
            </h4>
            <div className="grid grid-cols-1 gap-4">
              {ABOUT.highlights.map((highlight) => (
                <GlassCard key={highlight} glowColor="blue" className="p-5 flex items-center justify-between hover:scale-[1.02] transition-transform duration-300">
                  <p className="text-base font-semibold text-blue-300">{highlight}</p>
                  <span className="text-cyan-400">⚡</span>
                </GlassCard>
              ))}
            </div>
          </div>
        </div>

        {/* Career Objective */}
        <div className="pt-8">
          <GlassCard glowColor="blue" className="p-8 md:p-12">
            <div className="flex items-start gap-6">
              <motion.div
                className="p-4 bg-gradient-to-br from-blue-500/30 to-cyan-500/20 rounded-2xl flex-shrink-0 hidden md:block"
                whileHover={{ scale: 1.1, rotate: 5 }}
              >
                <Target className="text-blue-400" size={40} />
              </motion.div>
              <div className="flex-1">
                <h3 className="text-2xl md:text-3xl font-bold mb-4 bg-gradient-to-r from-white to-blue-300 bg-clip-text text-transparent">
                  Career Objective
                </h3>
                <p className="text-lg text-gray-300 leading-relaxed">{CAREER_OBJECTIVE}</p>
              </div>
            </div>
          </GlassCard>
        </div>

        {/* Education */}
        <div className="pt-8">
          <SectionHeading
            title="Education"
            accentColor="blue"
            icon={<BookOpen size={36} />}
          />
          <GlassCard glowColor="blue" className="p-8 md:p-10">
            <div className="flex items-start gap-4">
              <motion.div
                className="p-3 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-lg flex-shrink-0"
                whileHover={{ scale: 1.1 }}
              >
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
        </div>
      </motion.div>
    </section>
  );
}
