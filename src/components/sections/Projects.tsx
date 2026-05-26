import { motion } from 'framer-motion';
import { Database, Github, ExternalLink } from 'lucide-react';
import { SectionHeading } from '../ui/SectionHeading';
import { GlassCard } from '../ui/GlassCard';
import { PROJECTS } from '../../utils/constants';

export function Projects() {
  return (
    <section id="projects" className="py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading
          title="Featured Projects"
          accentColor="cyan"
          icon={<Database size={36} />}
        />

        <div className="space-y-6">
          {PROJECTS.filter((p) => p.featured).map((project) => (
            <div key={project.id}>
              <GlassCard glowColor="cyan" className="p-6 md:p-10">
                <div className="flex flex-col md:flex-row items-start justify-between gap-6 mb-6">
                  <div className="flex-1">
                    <motion.h4
                      className="text-2xl md:text-3xl font-bold text-cyan-300 mb-3 leading-tight"
                      whileHover={{ x: 4 }}
                      transition={{ duration: 0.3 }}
                    >
                      {project.title}
                    </motion.h4>
                    <p className="text-gray-400 text-sm font-semibold text-blue-400 mb-4">
                      {project.description}
                    </p>
                    <p className="text-gray-300 leading-relaxed mb-4 text-base">
                      {project.longDescription}
                    </p>
                  </div>

                  {/* Project Links */}
                  <div className="flex gap-3 flex-shrink-0">
                    {project.github && (
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 hover:from-cyan-500/40 hover:to-blue-500/40 rounded-lg transition-all duration-300"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        aria-label="GitHub"
                      >
                        <Github size={24} className="text-cyan-400" />
                      </motion.a>
                    )}
                    {project.link && (
                      <motion.a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 hover:from-cyan-500/40 hover:to-blue-500/40 rounded-lg transition-all duration-300"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        aria-label="Live Demo"
                      >
                        <ExternalLink size={24} className="text-cyan-400" />
                      </motion.a>
                    )}
                  </div>
                </div>

                {/* Key Metrics */}
                {project.metrics && project.metrics.length > 0 && (
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6 py-6 border-y border-gray-700/50">
                    {project.metrics.map((metric, idx) => (
                      <div key={idx} className="text-center">
                        <p className="text-cyan-400 font-bold text-lg md:text-2xl">
                          {metric.value}
                        </p>
                        <p className="text-gray-400 text-sm">{metric.label}</p>
                      </div>
                    ))}
                  </div>
                )}

                {/* Tech Stack Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, idx) => (
                    <motion.span
                      key={idx}
                      className="px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 text-cyan-300 rounded-full text-sm font-medium border border-cyan-500/30 hover:border-cyan-400/50 transition-colors duration-300"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {tag}
                    </motion.span>
                  ))}
                </div>
              </GlassCard>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
