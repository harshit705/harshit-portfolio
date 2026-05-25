import { motion } from 'framer-motion';
import { Download, Github, Linkedin } from 'lucide-react';
import { containerVariants, itemVariants } from '../../utils/animations';
import { HERO } from '../../utils/constants';
import { AnimatedButton } from '../ui/AnimatedButton';

export function Hero() {
  return (
    <section
      id="about"
      className="max-w-6xl mx-auto px-6 py-16 md:py-24 flex flex-col md:flex-row items-center justify-between gap-12 md:gap-16 relative"
    >
      {/* Left Content */}
      <motion.div
        className="space-y-8 flex-1 max-w-2xl"
        initial="hidden"
        animate="show"
        variants={containerVariants}
      >
        {/* Badge */}
        <motion.div variants={itemVariants} className="inline-block">
          <div className="px-4 py-2 border border-blue-500/40 rounded-full text-blue-300 text-sm font-medium bg-blue-500/10 backdrop-blur-sm">
            ✨ Full-Stack & AI Engineer
          </div>
        </motion.div>

        {/* Heading */}
        <motion.div variants={itemVariants}>
          <div>
            <motion.h1
              className="text-5xl md:text-6xl font-bold mb-6 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <span className="bg-gradient-to-r from-white via-blue-200 to-blue-300 bg-clip-text text-transparent">
                Harshit
              </span>
              <span className="block bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mt-2">
                Agrawal
              </span>
            </motion.h1>
            <motion.p
              className="text-lg md:text-xl text-gray-400 leading-relaxed max-w-lg mb-8 font-semibold"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              {HERO.title}
            </motion.p>
            <motion.p
              className="text-lg text-gray-300 leading-relaxed max-w-lg mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              {HERO.subtitle}
            </motion.p>
          </div>
        </motion.div>

        {/* Availability Badge */}
        <motion.div
          variants={itemVariants}
          className="inline-block px-4 py-2 bg-green-500/20 border border-green-500/40 rounded-lg text-green-300 text-sm font-medium"
        >
          🟢 {HERO.availability}
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-wrap gap-4 pt-4"
        >
          <AnimatedButton
            href={HERO.cta.resume}
            download
            variant="primary"
          >
            <Download size={20} />
            Download Resume
          </AnimatedButton>
          <AnimatedButton
            href={HERO.cta.github}
            target="_blank"
            rel="noopener noreferrer"
            variant="secondary"
          >
            <Github size={20} />
            GitHub
          </AnimatedButton>
          <AnimatedButton
            href={HERO.cta.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            variant="secondary"
          >
            <Linkedin size={20} />
            LinkedIn
          </AnimatedButton>
        </motion.div>
      </motion.div>

      {/* Right Image */}
      <motion.div
        className="flex-1 flex justify-center items-center w-full md:w-auto"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <div className="relative w-72 h-72 md:w-96 md:h-96 flex items-center justify-center flex-shrink-0">
          <motion.div
            className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-500/30 to-cyan-500/30 blur-3xl opacity-70"
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.7, 0.9, 0.7],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
            }}
          />
          <div className="absolute inset-0 rounded-full border-4 border-blue-500/60 shadow-2xl shadow-blue-500/40" />
          <img
            src="/Profile%20Image.png"
            alt="Profile"
            className="w-64 h-64 md:w-80 md:h-80 rounded-full object-cover border-4 border-blue-400/60 shadow-xl shadow-blue-500/40 bg-[#101a2b]"
            loading="lazy"
          />
        </div>
      </motion.div>
    </section>
  );
}
