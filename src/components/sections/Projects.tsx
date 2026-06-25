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
          title="Intelligent Systems & Projects"
          subtitle="A comprehensive showcase of production-grade AI platforms, data ingestion engines, and high-performance full-stack architectures."
          accentColor="cyan"
          icon={<Database size={36} />}
        />

        {/* Featured Project: TenderSathi */}
        {tenderSathi && (
          <div className="space-y-6">
            <div className="inline-block px-3 py-1 bg-cyan-500/10 border border-cyan-500/30 rounded-lg text-[10px] font-mono text-cyan-400 uppercase tracking-widest font-semibold">
              Featured Project
            </div>
            
            <GlassCard glowColor="cyan" className="p-6 md:p-10 border-slate-700/60 relative overflow-hidden bg-slate-950/40 backdrop-blur-xl">
              <div className="grid lg:grid-cols-12 gap-12 items-center">
                
                {/* Left Column: Product Story */}
                <div className="lg:col-span-7 space-y-6">
                  <div className="flex justify-between items-center text-xs font-mono border-b border-slate-800 pb-4">
                    <div className="flex items-center gap-2">
                      <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
                      </span>
                      <span className="text-slate-400 tracking-wider font-bold">SYSTEM INSTANCE: TENDERSATHI</span>
                    </div>
                    <span className="text-cyan-400 bg-cyan-950/40 border border-cyan-800/40 px-2 py-0.5 rounded uppercase font-bold text-[10px]">
                      Production Ready
                    </span>
                  </div>

                  <div>
                    <h4 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-white via-slate-100 to-cyan-200 bg-clip-text text-transparent leading-snug">
                      {tenderSathi.title}
                    </h4>
                    <p className="text-sm font-semibold text-blue-400 font-mono mt-1">
                      {tenderSathi.description}
                    </p>
                  </div>

                  <p className="text-slate-355 leading-relaxed text-base">
                    {tenderSathi.longDescription}
                  </p>

                  {/* Operational Case-Study Fields */}
                  <div className="grid md:grid-cols-2 gap-6 pt-4 border-t border-slate-850">
                    {tenderSathi.problemSolved && (
                      <div className="space-y-1.5">
                        <div className="flex items-center gap-2 text-red-400 text-xs font-bold font-mono uppercase tracking-wider">
                          <Activity size={14} />
                          Operational Bottleneck
                        </div>
                        <p className="text-xs text-slate-400 leading-relaxed">
                          {tenderSathi.problemSolved}
                        </p>
                      </div>
                    )}
                    
                    {tenderSathi.impact && (
                      <div className="space-y-1.5">
                        <div className="flex items-center gap-2 text-emerald-400 text-xs font-bold font-mono uppercase tracking-wider">
                          <Target size={14} />
                          Engineering Outcome
                        </div>
                        <p className="text-xs text-slate-400 leading-relaxed">
                          {tenderSathi.impact}
                        </p>
                      </div>
                    )}
                  </div>

                  {/* CTAs */}
                  <div className="flex gap-4 pt-4">
                    {tenderSathi.github && (
                      <motion.a
                        href={tenderSathi.github}
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
                    {tenderSathi.link && (
                      <motion.a
                        href={tenderSathi.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-2 py-2.5 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white rounded-lg transition-all duration-300 shadow-md shadow-blue-500/10 font-mono text-xs"
                        whileHover={{ y: -2 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <ExternalLink size={16} />
                        Live Platform
                      </motion.a>
                    )}
                  </div>
                </div>

                {/* Right Column: Interactive System Dashboard Mock */}
                <div className="lg:col-span-5 w-full">
                  <div className="p-6 border border-slate-800 bg-slate-950/60 rounded-2xl relative shadow-inner">
                    {/* Dashboard Top bar */}
                    <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-4">
                      <div className="flex items-center gap-2">
                        <div className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />
                        <span className="text-xs font-mono text-slate-400 uppercase tracking-widest font-bold">Ingestion Analytics</span>
                      </div>
                      <span className="text-[10px] font-mono text-slate-500 flex items-center gap-1">
                        <RefreshCw size={10} className="animate-spin-slow" />
                        Live Sync
                      </span>
                    </div>

                    {/* In-Memory Connection Pool Stats */}
                    <div className="space-y-4">
                      <div>
                        <div className="flex justify-between text-xs font-mono mb-1.5">
                          <span className="text-slate-400">DB Connection Pool Efficiency</span>
                          <span className="text-cyan-400 font-bold">98% (Active)</span>
                        </div>
                        <div className="w-full bg-slate-900 h-2.5 rounded-full overflow-hidden border border-slate-800/80">
                          <div className="bg-gradient-to-r from-blue-500 to-cyan-400 h-full rounded-full w-[98%]" />
                        </div>
                      </div>

                      {/* Queue Throughput Visualizer */}
                      <div className="bg-slate-950/80 border border-slate-850 rounded-xl p-4 space-y-3 font-mono text-[11px] text-slate-400">
                        <div className="flex justify-between text-[10px] text-slate-500 border-b border-slate-900 pb-2">
                          <span>ASYNC PIPELINE MONITOR</span>
                          <span>STATUS: OK</span>
                        </div>
                        
                        {/* Console Logs Mock */}
                        <div className="space-y-2 leading-relaxed">
                          <div className="flex items-start gap-2">
                            <span className="text-slate-600">[10:15:32]</span>
                            <p className="text-slate-355">
                              <span className="text-cyan-400">INGEST:</span> Fetched 8 tender files from state-NIC
                            </p>
                          </div>
                          <div className="flex items-start gap-2">
                            <span className="text-slate-600">[10:15:33]</span>
                            <p className="text-slate-355">
                              <span className="text-blue-400">LLM-PIPE:</span> Structural schemas validated (conf: 99.4%)
                            </p>
                          </div>
                          <div className="flex items-start gap-2">
                            <span className="text-slate-600">[10:15:34]</span>
                            <p className="text-slate-355">
                              <span className="text-purple-400">SYS-DB:</span> Composite GIN index hit (sub-10ms)
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Automation Workflow indicators */}
                      <div className="border border-slate-800 rounded-xl p-3 flex justify-between items-center bg-slate-950/20">
                        <div className="flex items-center gap-2">
                          <Zap size={16} className="text-amber-400" />
                          <div>
                            <p className="text-xs font-bold text-white">Ingestion Workers</p>
                            <p className="text-[10px] text-slate-500">Multithreaded async scrapers</p>
                          </div>
                        </div>
                        <span className="px-2.5 py-0.5 rounded-full text-[9px] font-mono bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-bold uppercase">
                          100% Auto
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

              </div>

              {/* Bottom Tech Tags */}
              <div className="flex flex-wrap gap-2 pt-6 mt-6 border-t border-slate-800/40">
                {tenderSathi.tags.map((tag, idx) => (
                  <motion.span
                    key={idx}
                    className="px-3 py-1.5 bg-slate-900/60 text-slate-350 rounded-lg text-xs font-medium border border-slate-855 font-mono hover:border-cyan-500/30 hover:text-cyan-300 transition-colors duration-300"
                    whileHover={{ scale: 1.03 }}
                  >
                    {tag}
                  </motion.span>
                ))}
              </div>
            </GlassCard>
          </div>
        )}

        {/* Other Projects Heading */}
        <div className="pt-12">
          <h4 className="text-lg font-bold text-slate-400 mb-6 uppercase tracking-wider border-b border-slate-800 pb-2">
            Other Notable Systems
          </h4>
          <div className="grid md:grid-cols-2 gap-6">
            {otherProjects.map((project) => (
              <GlassCard key={project.id} glowColor="cyan" className="p-6 flex flex-col justify-between border-slate-700/60 bg-slate-950/40 backdrop-blur-xl">
                <div className="space-y-4">
                  <div className="flex justify-between items-center text-xs font-mono border-b border-slate-800 pb-3">
                    <span className="text-slate-400 tracking-wider font-bold">{project.id.toUpperCase()}</span>
                    <span className="text-cyan-400 bg-cyan-950/40 border border-cyan-800/40 px-2 py-0.5 rounded uppercase font-bold text-[9px]">
                      Operational
                    </span>
                  </div>
                  <div>
                    <h5 className="text-xl font-bold text-white hover:text-cyan-300 transition-colors">
                      {project.title}
                    </h5>
                    <p className="text-xs font-semibold text-blue-400 font-mono mt-1">
                      {project.description}
                    </p>
                  </div>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    {project.longDescription}
                  </p>

                  <div className="space-y-2 pt-3 border-t border-slate-900">
                    {project.problemSolved && (
                      <div className="space-y-0.5">
                        <span className="text-[10px] text-red-400 font-bold font-mono uppercase tracking-wider block">Bottleneck</span>
                        <p className="text-xs text-slate-400 leading-relaxed">{project.problemSolved}</p>
                      </div>
                    )}
                    {project.impact && (
                      <div className="space-y-0.5">
                        <span className="text-[10px] text-emerald-400 font-bold font-mono uppercase tracking-wider block">Outcome</span>
                        <p className="text-xs text-slate-400 leading-relaxed">{project.impact}</p>
                      </div>
                    )}
                  </div>
                </div>

                <div className="mt-6 space-y-4">
                  {/* Metrics Box */}
                  {project.metrics && project.metrics.length > 0 && (
                    <div className="bg-slate-900/30 border border-slate-900 rounded-lg p-3 space-y-2">
                      <div className="space-y-1.5 font-mono text-[10px]">
                        {project.metrics.map((metric, idx) => (
                          <div key={idx} className="flex justify-between items-center">
                            <span className="text-slate-500">{metric.label}</span>
                            <span className="text-cyan-400 font-bold">{metric.value}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* CTAs */}
                  <div className="flex gap-2">
                    {project.github && (
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-1.5 py-2 bg-slate-900 hover:bg-slate-800 border border-slate-800 hover:border-slate-700 rounded-lg text-slate-400 hover:text-white transition-all duration-300 font-mono text-[11px]"
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
                        className="flex-1 flex items-center justify-center gap-1.5 py-2 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white rounded-lg transition-all duration-300 font-mono text-[11px]"
                        whileHover={{ y: -1 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <ExternalLink size={12} />
                        Live Link
                      </motion.a>
                    )}
                  </div>

                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-3 border-t border-slate-900">
                    {project.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-0.5 bg-slate-900/40 text-slate-400 rounded text-[10px] border border-slate-850 font-mono"
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
