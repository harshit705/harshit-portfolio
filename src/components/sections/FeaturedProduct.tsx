import { motion } from 'framer-motion';
import { Database, ShieldCheck, Zap, RefreshCw, Cpu } from 'lucide-react';
import { SectionHeading } from '../ui/SectionHeading';
import { GlassCard } from '../ui/GlassCard';
import { sectionRevealVariants } from '../../utils/animations';

export function FeaturedProduct() {
  const systemMetrics = [
    { label: 'Ingested Documents', value: '12,000+ Daily', desc: 'Auto-scraped government portals' },
    { label: 'Ingestion Latency', value: '< 1.8s', desc: 'From portal scrape to index' },
    { label: 'Extraction Confidence', value: '98.6%', desc: 'LLM structural schema validation' },
  ];

  return (
    <section id="projects" className="py-16 md:py-24 bg-gradient-to-b from-blue-950/5 via-transparent to-transparent">
      <motion.div
        initial="initial"
        whileInView="whileInView"
        viewport={{ once: true, margin: "-100px" }}
        variants={sectionRevealVariants}
        className="max-w-6xl mx-auto px-6 space-y-12"
      >
        {/* Section Header */}
        <SectionHeading
          title="Featured Platform"
          subtitle="SaaS case study: High-throughput AI aggregation systems built for enterprise operational demands."
          accentColor="cyan"
          icon={<Cpu size={36} />}
        />

        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Product Story */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-block px-3 py-1 bg-cyan-500/10 border border-cyan-500/30 rounded-lg text-[10px] font-mono text-cyan-400 uppercase tracking-widest">
              Platform Profile: TenderSathi
            </div>
            
            <h3 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent leading-snug">
              Autonomous Ingestion & Procurement Intelligence
            </h3>

            <p className="text-slate-350 text-lg leading-relaxed">
              TenderSathi aggregates fragmented, disorganized government procurement notices. The platform runs a multi-threaded scraping architecture that parallelizes document downloads, structures raw PDF schemas via LLMs, and indexes searchable records.
            </p>

            {/* Architecture Highlights */}
            <div className="grid md:grid-cols-2 gap-6 pt-2">
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-cyan-400 font-semibold">
                  <Database size={18} />
                  <h4>PostgreSQL Optimization</h4>
                </div>
                <p className="text-sm text-slate-400">
                  Custom connection pooling, composite GIN indices, and optimized JSONB query plans handle sub-10ms search retrieval.
                </p>
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-2 text-blue-400 font-semibold">
                  <ShieldCheck size={18} />
                  <h4>Strict Schema Validation</h4>
                </div>
                <p className="text-sm text-slate-400">
                  Integrates LLM JSON output validation with local validation guards to enforce 98.6% structure accuracy.
                </p>
              </div>
            </div>

            {/* Performance Stats Cards */}
            <div className="grid grid-cols-3 gap-4 pt-4 border-t border-slate-800/60">
              {systemMetrics.map((metric) => (
                <div key={metric.label}>
                  <p className="text-xl md:text-2xl font-bold text-cyan-300 font-mono tracking-tight">{metric.value}</p>
                  <p className="text-xs font-semibold text-slate-200 mt-1">{metric.label}</p>
                  <p className="text-[10px] text-slate-500 mt-0.5">{metric.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Interactive System Dashboard Mock */}
          <div className="lg:col-span-5 w-full">
            <GlassCard glowColor="cyan" className="p-6 border-slate-700/60 shadow-2xl relative bg-slate-950/60 backdrop-blur-xl">
              
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
                <div className="bg-slate-950/80 border border-slate-800/80 rounded-xl p-4 space-y-3 font-mono text-[11px] text-slate-400">
                  <div className="flex justify-between text-[10px] text-slate-500 border-b border-slate-900 pb-2">
                    <span>ASYNC PIPELINE MONITOR</span>
                    <span>STATUS: OK</span>
                  </div>
                  
                  {/* Console Logs Mock */}
                  <div className="space-y-2 leading-relaxed">
                    <div className="flex items-start gap-2">
                      <span className="text-slate-600">[10:15:32]</span>
                      <p className="text-slate-350">
                        <span className="text-cyan-400">INGEST:</span> Fetched 8 tender files from state-NIC
                      </p>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-slate-600">[10:15:33]</span>
                      <p className="text-slate-350">
                        <span className="text-blue-400">LLM-PIPE:</span> Structural schemas validated (conf: 99.4%)
                      </p>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-slate-600">[10:15:34]</span>
                      <p className="text-slate-350">
                        <span className="text-purple-400">SYS-DB:</span> Composite indices refreshed (sub-10ms ready)
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
                      <p className="text-[10px] text-slate-500">Multithreaded async queues</p>
                    </div>
                  </div>
                  <span className="px-2.5 py-0.5 rounded-full text-[9px] font-mono bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-bold uppercase">
                    100% Auto
                  </span>
                </div>
              </div>

            </GlassCard>
          </div>

        </div>
      </motion.div>
    </section>
  );
}
