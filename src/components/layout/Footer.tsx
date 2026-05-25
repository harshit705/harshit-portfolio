import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';
import { itemVariants } from '../../utils/animations';

export function Footer() {
  const links = [
    {
      icon: Github,
      href: 'https://github.com/harshit705',
      label: 'GitHub',
      color: 'hover:text-gray-300',
    },
    {
      icon: Linkedin,
      href: 'https://www.linkedin.com/in/harshit-agrawal-215146284/',
      label: 'LinkedIn',
      color: 'hover:text-blue-400',
    },
    {
      icon: Mail,
      href: 'mailto:aharshit042@gmail.com',
      label: 'Email',
      color: 'hover:text-cyan-400',
    },
  ];

  return (
    <motion.footer
      className="border-t border-gray-700/50 bg-gradient-to-b from-transparent to-gray-900/30 py-12"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <motion.div
            variants={itemVariants}
            className="text-center md:text-left"
          >
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-2">
              Harshit Agrawal
            </h3>
            <p className="text-gray-400">Software Engineer | Full-Stack Developer | AI Systems Builder</p>
          </motion.div>

          <motion.div
            className="flex items-center gap-6"
            variants={itemVariants}
          >
            {links.map((link) => (
              <motion.a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`text-gray-500 transition-colors ${link.color}`}
                whileHover={{ scale: 1.2, y: -5 }}
                whileTap={{ scale: 0.9 }}
                aria-label={link.label}
              >
                <link.icon size={24} />
              </motion.a>
            ))}
          </motion.div>
        </div>

        <motion.div
          className="mt-8 pt-8 border-t border-gray-700/30 text-center text-sm text-gray-500"
          variants={itemVariants}
        >
          <p>Built with React.js, TypeScript, Tailwind CSS, and Framer Motion • Deployed on Vercel</p>
          <p className="mt-2">© 2026 Harshit Agrawal. All rights reserved.</p>
        </motion.div>
      </div>
    </motion.footer>
  );
}
