import { motion } from 'framer-motion';
import { Database, Github, ExternalLink, Activity, Target, Zap, RefreshCw } from 'lucide-react';
import { SectionHeading } from '../ui/SectionHeading';
import { GlassCard } from '../ui/GlassCard';
import { PROJECTS } from '../../utils/constants';
import { sectionRevealVariants } from '../../utils/animations';

export function Projects() {
  const tenderSathi = PROJECTS.find((p) => p.id === 'tenderSathi');
  const otherProjects = PROJECTS.filter((p) => p.id !== 'tenderSathi');

  return (
    <section id="projects" className="min-h-[85vh] py-16 md:py-24 flex flex-col justify-center">
      <motion.div
        initial="initial"
        whileInView="whileInView"
        viewport={{ once: true, margin: "-100px" }}
        variants={sectionRevealVariants}
        className="max-w-6xl mx-auto px-6"
      >
        {/* Section Heading */}
        <SectionHeading
          title="Projects"
          subtitle="Production-grade AI platforms, data ingestion engines, and full-stack architectures built for real-world impact."
          accentColor="cyan"
          icon={<Database size={36} />}
        />

        {/* Featured Project: TenderSathi */}
        {tenderSathi && (
          <div className="space-y-5">
            {/* Featured Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-cyan-500/10 border border-cyan-500/30 rounded-full text-xs font-semibold text-cyan-400 tracking-wide">
              ⭐ Featured Project
            </div>

            <GlassCard glowColor="cyan" className="p-6 md:p-10 border-slate-700/60 relative overflow-hidden bg-slate-950/40 backdrop-blur-xl">
              <div className="grid lg:grid-cols-12 gap-10 items-start">

                {/* Left Column: Project Details */}
                <div className="lg:col-span-7 space-y-5">
                  {/* Status Bar */}
                  <div className="flex justify-between items-center border-b border-slate-800 pb-4">
                    <div className="flex items-center gap-2">
                      <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                      </span>
                      <span className="text-xs font-medium text-slate-400">Live & Active</span>
                    </div>
                    <span className="text-cyan-400 bg-cyan-950/40 border border-cyan-800/40 px-2.5 py-0.5 rounded-full text-xs font-semibold">
                      Production Ready
                    </span>
                  </div>

                  {/* Title */}
                  <div>
                    <h4 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-white via-slate-100 to-cyan-200 bg-clip-text text-transparent leading-snug">
                      {tenderSathi.title}
                    </h4>
                    <p className="text-sm font-medium text-cyan-400 mt-1.5">
                      {tenderSathi.description}
                    </p>
                  </div>

                  {/* Description */}
                  <p className="text-slate-300 leading-relaxed text-sm md:text-base">
                    {tenderSathi.longDescription}
                  </p>

                  {/* Problem & Impact */}
                  <div className="grid md:grid-cols-2 gap-5 pt-4 border-t border-slate-800/60">
                    {tenderSathi.problemSolved && (
                      <div className="space-y-2">
                        <div className="flex items-center gap-1.5 text-red-400 text-xs font-semibold uppercase tracking-wide">
                          <Activity size={13} />
                          Problem Solved
                        </div>
                        <p className="text-sm text-slate-400 leading-relaxed">
                          {tenderSathi.problemSolved}
                        </p>
                      </div>
                    )}
                    {tenderSathi.impact && (
                      <div className="space-y-2">
                        <div className="flex items-center gap-1.5 text-emerald-400 text-xs font-semibold uppercase tracking-wide">
                          <Target size={13} />
                          Impact
                        </div>
                        <p className="text-sm text-slate-400 leading-relaxed">
                          {tenderSathi.impact}
                        </p>
                      </div>
                    )}
                  </div>

                  {/* CTA Buttons */}
                  <div className="flex gap-3 pt-2">
                    {tenderSathi.github && (
                      <motion.a
                        href={tenderSathi.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-2 py-2.5 bg-slate-900 hover:bg-slate-800 border border-slate-700 hover:border-slate-500 rounded-lg text-slate-300 hover:text-white transition-all duration-300 text-sm font-medium"
                        whileHover={{ y: -2 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <Github size={15} />
                        Source Code
                      </motion.a>
                    )}
                    {tenderSathi.link && (
                      <motion.a
                        href={tenderSathi.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-2 py-2.5 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white rounded-lg transition-all duration-300 shadow-md shadow-blue-500/20 text-sm font-medium"
                        whileHover={{ y: -2 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <ExternalLink size={15} />
                        Live Platform
                      </motion.a>
                    )}
                  </div>
                </div>

                {/* Right Column: Live Dashboard Mockup */}
                <div className="lg:col-span-5 w-full">
                  <div className="p-5 border border-slate-800 bg-slate-950/70 rounded-2xl shadow-inner space-y-4">
                    {/* Dashboard Header */}
                    <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                      <div className="flex items-center gap-2">
                        <div className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />
                        <span className="text-xs font-semibold text-slate-300">Ingestion Analytics</span>
                      </div>
                      <span className="text-[10px] font-mono text-slate-500 flex items-center gap-1">
                        <RefreshCw size={9} className="animate-spin-slow" />
                        Live Sync
                      </span>
                    </div>

                    {/* Connection Pool Bar */}
                    <div>
                      <div className="flex justify-between text-xs mb-1.5">
                        <span className="text-slate-400 font-medium">DB Connection Pool</span>
                        <span className="text-cyan-400 font-semibold">98% Active</span>
                      </div>
                      <div className="w-full bg-slate-900 h-2 rounded-full overflow-hidden border border-slate-800">
                        <div className="bg-gradient-to-r from-blue-500 to-cyan-400 h-full rounded-full w-[98%]" />
                      </div>
                    </div>

                    {/* Console Log */}
                    <div className="bg-slate-950 border border-slate-800/80 rounded-xl p-4 space-y-2.5 font-mono text-[11px] text-slate-400">
                      <div className="flex justify-between text-[10px] text-slate-600 border-b border-slate-900 pb-2 mb-1">
                        <span>PIPELINE MONITOR</span>
                        <span className="text-emerald-500">● OK</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="text-slate-600 shrink-0">[10:15:32]</span>
                        <p><span className="text-cyan-400">INGEST:</span> Fetched 8 tender files from state-NIC</p>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="text-slate-600 shrink-0">[10:15:33]</span>
                        <p><span className="text-blue-400">LLM:</span> Schemas validated — conf: 99.4%</p>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="text-slate-600 shrink-0">[10:15:34]</span>
                        <p><span className="text-purple-400">DB:</span> GIN index hit — sub-10ms query</p>
                      </div>
                    </div>

                    {/* Worker Status */}
                    <div className="border border-slate-800 rounded-xl p-3 flex justify-between items-center">
                      <div className="flex items-center gap-2">
                        <Zap size={15} className="text-amber-400" />
                        <div>
                          <p className="text-xs font-semibold text-white">Ingestion Workers</p>
                          <p className="text-[10px] text-slate-500 font-mono">Multithreaded async scrapers</p>
                        </div>
                      </div>
                      <span className="px-2.5 py-0.5 rounded-full text-[9px] font-mono bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-semibold uppercase tracking-wide">
                        100% Auto
                      </span>
                    </div>
                  </div>
                </div>

              </div>

              {/* Tech Tags */}
              <div className="flex flex-wrap gap-2 pt-6 mt-6 border-t border-slate-800/40">
                {tenderSathi.tags.map((tag, idx) => (
                  <motion.span
                    key={idx}
                    className="px-3 py-1 bg-slate-900/60 text-slate-400 rounded-full text-xs font-medium border border-slate-800 hover:border-cyan-500/40 hover:text-cyan-300 transition-colors duration-300"
                    whileHover={{ scale: 1.04 }}
                  >
                    {tag}
                  </motion.span>
                ))}
              </div>
            </GlassCard>
          </div>
        )}

        {/* Other Projects */}
        <div className="pt-12">
          <h4 className="text-sm font-semibold text-slate-500 mb-6 uppercase tracking-widest border-b border-slate-800 pb-3">
            Other Notable Projects
          </h4>
          <div className="grid md:grid-cols-2 gap-6">
            {otherProjects.map((project) => (
              <GlassCard key={project.id} glowColor="cyan" className="p-6 flex flex-col justify-between border-slate-700/60 bg-slate-950/40 backdrop-blur-xl">
                <div className="space-y-4">
                  {/* Card Header */}
                  <div className="flex justify-between items-center border-b border-slate-800 pb-3">
                    <span className="text-xs font-semibold text-slate-500 uppercase tracking-wide">{project.id}</span>
                    <span className="text-emerald-400 bg-emerald-950/30 border border-emerald-800/40 px-2 py-0.5 rounded-full text-[10px] font-semibold">
                      Active
                    </span>
                  </div>

                  {/* Title */}
                  <div>
                    <h5 className="text-lg font-bold text-white hover:text-cyan-300 transition-colors leading-snug">
                      {project.title}
                    </h5>
                    <p className="text-xs font-medium text-cyan-400 mt-1">
                      {project.description}
                    </p>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-slate-300 leading-relaxed">
                    {project.longDescription}
                  </p>

                  {/* Problem / Impact */}
                  <div className="space-y-3 pt-3 border-t border-slate-800/60">
                    {project.problemSolved && (
                      <div className="space-y-1">
                        <span className="text-[10px] text-red-400 font-semibold uppercase tracking-wide block">Problem</span>
                        <p className="text-xs text-slate-400 leading-relaxed">{project.problemSolved}</p>
                      </div>
                    )}
                    {project.impact && (
                      <div className="space-y-1">
                        <span className="text-[10px] text-emerald-400 font-semibold uppercase tracking-wide block">Impact</span>
                        <p className="text-xs text-slate-400 leading-relaxed">{project.impact}</p>
                      </div>
                    )}
                  </div>
                </div>

                <div className="mt-5 space-y-4">
                  {/* Metrics */}
                  {project.metrics && project.metrics.length > 0 && (
                    <div className="bg-slate-900/40 border border-slate-800 rounded-xl p-3 space-y-2">
                      {project.metrics.map((metric, idx) => (
                        <div key={idx} className="flex justify-between items-center text-xs">
                          <span className="text-slate-500 font-medium">{metric.label}</span>
                          <span className="text-cyan-400 font-bold font-mono">{metric.value}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* CTAs */}
                  <div className="flex gap-2">
                    {project.github && (
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-1.5 py-2 bg-slate-900 hover:bg-slate-800 border border-slate-800 hover:border-slate-600 rounded-lg text-slate-400 hover:text-white transition-all duration-300 text-xs font-medium"
                        whileHover={{ y: -1 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <Github size={12} />
                        Source
                      </motion.a>
                    )}
                    {project.link && (
                      <motion.a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-1.5 py-2 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white rounded-lg transition-all duration-300 text-xs font-medium"
                        whileHover={{ y: -1 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <ExternalLink size={12} />
                        Live Link
                      </motion.a>
                    )}
                  </div>

                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-3 border-t border-slate-800/40">
                    {project.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-0.5 bg-slate-900/60 text-slate-400 rounded-full text-[10px] font-medium border border-slate-800 hover:border-cyan-500/30 hover:text-cyan-300 transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </GlassCard>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
