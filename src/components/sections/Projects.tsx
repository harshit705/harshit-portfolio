import { motion } from 'framer-motion';
import { Database, Github, ExternalLink, Activity, Target } from 'lucide-react';
import { SectionHeading } from '../ui/SectionHeading';
import { GlassCard } from '../ui/GlassCard';
import { PROJECTS } from '../../utils/constants';
import { sectionRevealVariants } from '../../utils/animations';

export function Projects() {
  return (
    <section id="projects" className="py-16 md:py-24">
      <motion.div
        initial="initial"
        whileInView="whileInView"
        viewport={{ once: true, margin: "-100px" }}
        variants={sectionRevealVariants}
        className="max-w-6xl mx-auto px-6"
      >
        {/* Section Heading */}
        <SectionHeading
          title="Intelligent Systems & Products"
          subtitle="A comprehensive showcase of production-grade AI platforms, data ingestion engines, and high-performance full-stack architectures."
          accentColor="cyan"
          icon={<Database size={36} />}
        />

        {/* Product Cards Stack */}
        <div className="space-y-12">
          {PROJECTS.filter((p) => p.featured).map((project) => (
            <div key={project.id}>
              <GlassCard glowColor="cyan" className="p-6 md:p-10 border-slate-700/60 relative overflow-hidden bg-slate-950/40 backdrop-blur-xl">
                
                {/* Visual Top Status Indicator */}
                <div className="flex justify-between items-center mb-6 text-xs font-mono border-b border-slate-800 pb-4">
                  <div className="flex items-center gap-2">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
                    </span>
                    <span className="text-slate-400 tracking-wider font-bold">SYSTEM INSTANCE: {project.id.toUpperCase()}</span>
                  </div>
                  <span className="text-cyan-400 bg-cyan-950/40 border border-cyan-800/40 px-2 py-0.5 rounded uppercase font-bold text-[10px]">
                    Production Ready
                  </span>
                </div>

                <div className="flex flex-col lg:flex-row items-start justify-between gap-8 mb-6">
                  
                  {/* Left Column: Product Narrative */}
                  <div className="flex-1 space-y-4">
                    <div>
                      <h4 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-white via-slate-100 to-cyan-200 bg-clip-text text-transparent leading-snug">
                        {project.title}
                      </h4>
                      <p className="text-sm font-semibold text-blue-400 font-mono mt-1">
                        {project.description}
                      </p>
                    </div>

                    <p className="text-slate-300 leading-relaxed text-base">
                      {project.longDescription}
                    </p>

                    {/* Operational Case-Study Fields */}
                    <div className="grid md:grid-cols-2 gap-6 pt-4 border-t border-slate-850">
                      {project.problemSolved && (
                        <div className="space-y-1.5">
                          <div className="flex items-center gap-2 text-red-400 text-xs font-bold font-mono uppercase tracking-wider">
                            <Activity size={14} />
                            Operational Bottleneck
                          </div>
                          <p className="text-xs text-slate-400 leading-relaxed">
                            {project.problemSolved}
                          </p>
                        </div>
                      )}
                      
                      {project.impact && (
                        <div className="space-y-1.5">
                          <div className="flex items-center gap-2 text-emerald-400 text-xs font-bold font-mono uppercase tracking-wider">
                            <Target size={14} />
                            Engineering Outcome
                          </div>
                          <p className="text-xs text-slate-405 leading-relaxed">
                            {project.impact}
                          </p>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Right Column: Key Metrics & CTAs */}
                  <div className="w-full lg:w-72 flex flex-col justify-between gap-6 flex-shrink-0">
                    
                    {/* Metrics Box */}
                    {project.metrics && project.metrics.length > 0 && (
                      <div className="bg-slate-900/40 border border-slate-800 rounded-xl p-4 space-y-3 shadow-inner">
                        <p className="text-[10px] font-mono text-slate-500 tracking-wider uppercase border-b border-slate-850 pb-2 font-bold">SYSTEM METRICS</p>
                        <div className="space-y-3 font-mono">
                          {project.metrics.map((metric, idx) => (
                            <div key={idx} className="flex justify-between items-center text-xs">
                              <span className="text-slate-450">{metric.label}</span>
                              <span className="text-cyan-400 font-bold">{metric.value}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* CTAs */}
                    <div className="flex gap-3">
                      {project.github && (
                        <motion.a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 flex items-center justify-center gap-2 py-2.5 bg-slate-900 hover:bg-slate-800 border border-slate-700/80 hover:border-slate-500 rounded-lg text-slate-300 hover:text-white transition-all duration-300 font-mono text-xs"
                          whileHover={{ y: -2 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <Github size={16} />
                          Source Code
                        </motion.a>
                      )}
                      {project.link && (
                        <motion.a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 flex items-center justify-center gap-2 py-2.5 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white rounded-lg transition-all duration-300 shadow-md shadow-blue-500/10 font-mono text-xs"
                          whileHover={{ y: -2 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <ExternalLink size={16} />
                          Live Ingestion
                        </motion.a>
                      )}
                    </div>
                  </div>
                </div>

                {/* Bottom Tech Tags */}
                <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-800/40">
                  {project.tags.map((tag, idx) => (
                    <motion.span
                      key={idx}
                      className="px-3 py-1.5 bg-slate-900/60 text-slate-350 rounded-lg text-xs font-medium border border-slate-850 font-mono hover:border-cyan-500/30 hover:text-cyan-300 transition-colors duration-300"
                      whileHover={{ scale: 1.03 }}
                    >
                      {tag}
                    </motion.span>
                  ))}
                </div>

              </GlassCard>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
