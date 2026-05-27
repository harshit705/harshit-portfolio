import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';
import { HERO, SOCIAL_LINKS } from '../../utils/constants';

const iconMap: Record<string, any> = {
  github: Github,
  linkedin: Linkedin,
  mail: Mail,
};

const colorMap: Record<string, string> = {
  github: 'hover:text-gray-305',
  linkedin: 'hover:text-blue-400',
  mail: 'hover:text-cyan-400',
};

export function Footer() {
  return (
    <footer className="relative z-10 border-t border-gray-700/50 bg-gradient-to-b from-transparent to-gray-900/30 py-8">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-2">
              {HERO.name}
            </h3>
            <p className="text-gray-400">{HERO.title}</p>
          </div>

          <div className="flex items-center gap-6">
            {SOCIAL_LINKS.map((link) => {
              const IconComponent = iconMap[link.icon] || Mail;
              const hoverColorClass = colorMap[link.icon] || 'hover:text-blue-400';
              return (
                <motion.a
                  key={link.label}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-gray-500 transition-colors ${hoverColorClass}`}
                  whileHover={{ scale: 1.2, y: -5 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label={link.label}
                >
                  <IconComponent size={24} />
                </motion.a>
              );
            })}
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-t-gray-700/30 text-center text-sm text-gray-500">
          <p>Built with React.js, TypeScript, Tailwind CSS, and Framer Motion • Deployed on Vercel</p>
          <p className="mt-2">© {new Date().getFullYear()} {HERO.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
