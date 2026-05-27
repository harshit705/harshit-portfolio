import { motion } from 'framer-motion';
import { Download, Github, Linkedin, Cpu, Play, CheckCircle2 } from 'lucide-react';
import { containerVariants, itemVariants } from '../../utils/animations';
import { HERO } from '../../utils/constants';
import { AnimatedButton } from '../ui/AnimatedButton';
import { GlassCard } from '../ui/GlassCard';

export function Hero() {
  const focusChips = [
    'TenderSathi — AI Ingestion & Procurement Platform',
    'AI-Driven Media Processing & Audio Diarization',
    'Core Stack: React + Python + PostgreSQL + LLM Engine',
  ];

  return (
    <section
      id="hero"
      className="max-w-6xl mx-auto px-6 pt-8 pb-10 md:pt-12 md:pb-14 relative overflow-hidden"
    >
      <div className="grid lg:grid-cols-12 gap-12 md:gap-16 items-center">
        
        {/* Left Column: Branding / Content */}
        <motion.div
          className="lg:col-span-7 space-y-6 max-w-2xl"
          initial="hidden"
          animate="show"
          variants={containerVariants}
        >
          {/* Glowing Badge */}
          <motion.div variants={itemVariants} className="inline-block">
            <div className="flex items-center gap-2 px-4 py-2 border border-blue-500/35 rounded-full text-blue-300 text-xs font-semibold bg-blue-500/10 backdrop-blur-md uppercase tracking-wider shadow-sm shadow-blue-500/10">
              <Cpu size={14} className="text-cyan-400 animate-pulse" />
              AI Systems Engineer
            </div>
          </motion.div>

          {/* Heading */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight">
              <span className="bg-gradient-to-r from-white via-slate-100 to-blue-200 bg-clip-text text-transparent">
                Engineering intelligent
              </span>
              <span className="block bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-300 bg-clip-text text-transparent mt-1">
                products & AI systems.
              </span>
            </h1>
            <p className="text-base md:text-lg text-slate-350 leading-relaxed font-normal">
              Building production-grade AI platforms, autonomous automation systems, and high-throughput full-stack architectures using <span className="text-blue-300 font-semibold">React, Python, PostgreSQL, and LLM</span> technologies.
            </p>
          </motion.div>

          {/* Authority Metrics Row */}
          <motion.div 
            variants={itemVariants} 
            className="grid grid-cols-3 gap-4 border-y border-slate-800/80 py-4 my-2"
          >
            <div>
              <p className="text-2xl md:text-3xl font-extrabold text-cyan-300 font-mono tracking-tight">10+</p>
              <p className="text-[10px] md:text-xs text-slate-400 font-semibold mt-1 uppercase tracking-wider">Workflows Deployed</p>
            </div>
            <div>
              <p className="text-2xl md:text-3xl font-extrabold text-blue-300 font-mono tracking-tight">50K+</p>
              <p className="text-[10px] md:text-xs text-slate-400 font-semibold mt-1 uppercase tracking-wider">Procurement files</p>
            </div>
            <div>
              <p className="text-2xl md:text-3xl font-extrabold text-emerald-300 font-mono tracking-tight">100%</p>
              <p className="text-[10px] md:text-xs text-slate-400 font-semibold mt-1 uppercase tracking-wider">Autonomous Pipes</p>
            </div>
          </motion.div>

          {/* Social Proof Focus Chips */}
          <motion.div variants={itemVariants} className="space-y-2 border-l-2 border-slate-700/60 pl-4 py-0.5">
            {focusChips.map((chip, idx) => (
              <div key={idx} className="flex items-center gap-2 text-xs md:text-sm text-slate-400">
                <CheckCircle2 size={14} className="text-cyan-400 flex-shrink-0" />
                <span>{chip}</span>
              </div>
            ))}
          </motion.div>

          {/* CTA Buttons & Subtle Social Links */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap items-center gap-4 pt-2"
          >
            <AnimatedButton
              href="#projects"
              variant="primary"
              className="group gap-2"
            >
              <Play size={16} className="fill-white group-hover:scale-110 transition-transform" />
              View Systems
            </AnimatedButton>
            <AnimatedButton
              href={HERO.cta.resume}
              download
              variant="secondary"
              className="gap-2 border-slate-700 bg-slate-800/40 hover:bg-slate-800"
            >
              <Download size={16} />
              Resume
            </AnimatedButton>

            {/* Subtle borderless social links */}
            <div className="flex items-center gap-4 border-l border-slate-700/60 pl-4 py-1.5 ml-2">
              <motion.a
                href={HERO.cta.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-500 hover:text-cyan-400 transition-colors duration-300"
                whileHover={{ scale: 1.15 }}
                whileTap={{ scale: 0.95 }}
                aria-label="GitHub"
              >
                <Github size={20} />
              </motion.a>
              <motion.a
                href={HERO.cta.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-500 hover:text-blue-400 transition-colors duration-300"
                whileHover={{ scale: 1.15 }}
                whileTap={{ scale: 0.95 }}
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </motion.a>
            </div>
          </motion.div>
        </motion.div>

        {/* Right Column: AI Ingestion Dashboard Visual */}
        <motion.div
          className="lg:col-span-5 flex justify-center items-center w-full relative"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* Behind Glow */}
          <div className="absolute inset-0 rounded-3xl bg-blue-500/5 blur-3xl" />
          
          {/* Gentle float wrapper */}
          <motion.div
            className="w-full"
            animate={{
              y: [0, -6, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <GlassCard glowColor="blue" className="w-full max-w-md p-6 border-slate-700/60 shadow-2xl relative overflow-hidden backdrop-blur-2xl">
              {/* Header Status Bar */}
              <div className="flex items-center justify-between border-b border-slate-700/40 pb-4 mb-6">
                <div className="flex items-center gap-2">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                  </span>
                  <span className="text-xs font-mono font-bold tracking-widest text-slate-400 uppercase">System Pipeline (Active)</span>
                </div>
                <span className="text-[10px] font-mono text-cyan-400 bg-cyan-950/40 border border-cyan-800/40 px-2 py-0.5 rounded">TenderSathi Core</span>
              </div>

              {/* Ingestion Pipeline Schematic */}
              <div className="relative h-48 bg-slate-900/40 border border-slate-800/60 rounded-xl p-4 flex flex-col justify-between overflow-hidden">
                {/* Background grid */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f2937_1px,transparent_1px),linear-gradient(to_bottom,#1f2937_1px,transparent_1px)] bg-[size:1.5rem_1.5rem] opacity-20" />

                {/* Data Flow SVG Line */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 1 }}>
                  {/* Horizontal data path */}
                  <path d="M 40 40 L 180 40 L 180 140 L 320 140" fill="none" stroke="rgba(59, 130, 246, 0.2)" strokeWidth="3" />
                  <path d="M 40 40 L 180 40 L 180 140 L 320 140" fill="none" stroke="url(#lineGradient)" strokeWidth="3" strokeDasharray="8 12" className="animate-[dash_6s_linear_infinite]" />
                  
                  <defs>
                    <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#22d3ee" />
                      <stop offset="50%" stopColor="#3b82f6" />
                      <stop offset="100%" stopColor="#a855f7" />
                    </linearGradient>
                    <style>{`
                      @keyframes dash {
                        to {
                          stroke-dashoffset: -200;
                        }
                      }
                    `}</style>
                  </defs>
                </svg>

                {/* Ingestion Nodes */}
                <div className="flex justify-between items-center relative z-10 w-full">
                  {/* Node 1: Ingest Sources */}
                  <div className="bg-slate-950/80 border border-slate-700/60 px-3 py-1.5 rounded-lg text-left shadow-lg">
                    <p className="text-[10px] text-slate-500 font-mono">01. INGEST</p>
                    <p className="text-xs font-bold text-white">Scrapers / PDF</p>
                  </div>

                  {/* Node 2: LLM Processing */}
                  <div className="bg-slate-950/80 border border-blue-500/40 px-3 py-1.5 rounded-lg text-left shadow-lg">
                    <p className="text-[10px] text-blue-400 font-mono">02. PARSE (LLM)</p>
                    <p className="text-xs font-bold text-cyan-300">Whisper / API</p>
                  </div>
                </div>

                <div className="flex justify-end items-center relative z-10 w-full">
                  {/* Node 3: Storage */}
                  <div className="bg-slate-950/80 border border-purple-500/40 px-3 py-1.5 rounded-lg text-left shadow-lg mr-4">
                    <p className="text-[10px] text-purple-400 font-mono">03. INDEX</p>
                    <p className="text-xs font-bold text-purple-300">PostgreSQL Core</p>
                  </div>
                </div>
              </div>

              {/* Operator Node Area */}
              <div className="flex items-center gap-4 mt-6 pt-6 border-t border-slate-700/40">
                <div className="relative h-14 w-14 flex-shrink-0">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-cyan-500 to-blue-500 animate-spin-slow opacity-60" />
                  <div className="absolute inset-[2px] rounded-full bg-slate-950 flex items-center justify-center overflow-hidden">
                    <img
                      src="/Profile%20Image.png"
                      alt="Harshit Agrawal"
                      className="w-12 h-12 rounded-full object-cover"
                    />
                  </div>
                </div>
                <div className="flex-1">
                  <p className="text-xs font-mono text-cyan-400 uppercase tracking-widest">Active Operator</p>
                  <h4 className="text-base font-bold text-white">Harshit Agrawal</h4>
                  <p className="text-[10px] text-slate-400">Node Location: remote_india_01</p>
                </div>
              </div>

              {/* Floating Metric Badges */}
              <div className="grid grid-cols-3 gap-2 mt-4">
                <div className="bg-slate-900/50 border border-slate-800/80 rounded-lg p-2 text-center">
                  <p className="text-[9px] font-mono text-slate-500 uppercase">Extraction</p>
                  <p className="text-xs font-bold text-cyan-400">99.2% Conf</p>
                </div>
                <div className="bg-slate-900/50 border border-slate-800/80 rounded-lg p-2 text-center">
                  <p className="text-[9px] font-mono text-slate-500 uppercase">LLM Latency</p>
                  <p className="text-xs font-bold text-blue-400">12ms Vec</p>
                </div>
                <div className="bg-slate-900/50 border border-slate-800/80 rounded-lg p-2 text-center">
                  <p className="text-[9px] font-mono text-slate-500 uppercase">Sync Pipelines</p>
                  <p className="text-xs font-bold text-emerald-400">4 Core Active</p>
                </div>
              </div>

            </GlassCard>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}
