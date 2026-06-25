import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Download, Menu, X } from 'lucide-react';
import { NAV_ITEMS } from '../../utils/constants';
import { AnimatedButton } from '../ui/AnimatedButton';

interface NavbarProps {
  activeSection: string;
  onSectionChange: (sectionId: string) => void;
}

export function Navbar({ activeSection, onSectionChange }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'border-b border-slate-800/80 bg-[#030712]/75 backdrop-blur-xl shadow-md shadow-cyan-950/5' 
          : 'bg-[#030712]/30 backdrop-blur-sm border-b border-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Brand Logo */}
        <motion.a
          href="#hero"
          className="text-2xl font-bold bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-300 bg-clip-text text-transparent tracking-tight flex items-center gap-1.5"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <span className="text-cyan-400">&lt;</span>
          <span>HA</span>
          <span className="text-cyan-400">/&gt;</span>
        </motion.a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-2 bg-slate-900/40 border border-slate-800/50 p-1.5 rounded-full backdrop-blur-2xl">
          {NAV_ITEMS.map((item) => (
            <motion.a
              key={item.id}
              href={`#${item.id}`}
              onClick={() => onSectionChange(item.id)}
              className={`text-xs font-semibold px-4 py-2 rounded-full relative transition-colors duration-300 ${
                activeSection === item.id
                  ? 'text-cyan-300'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <span className="relative z-10">{item.label}</span>
              {activeSection === item.id && (
                <motion.span
                  layoutId="activePill"
                  className="absolute inset-0 bg-blue-500/10 border border-blue-500/20 rounded-full shadow-sm shadow-blue-500/5"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  style={{ zIndex: 0 }}
                />
              )}
            </motion.a>
          ))}
        </div>

        {/* Resume Button */}
        <AnimatedButton
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          variant="primary"
          className="hidden md:flex py-1.5 px-5 text-xs"
        >
          <Download size={14} />
          View Resume
        </AnimatedButton>

        {/* Mobile Menu Button */}
        <motion.button
          className="md:hidden text-slate-400 hover:text-cyan-400 transition-colors p-1"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          whileTap={{ scale: 0.95 }}
          aria-label="Toggle Menu"
        >
          {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </motion.button>
      </nav>

      {/* Mobile Menu */}
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{ opacity: mobileMenuOpen ? 1 : 0, height: mobileMenuOpen ? 'auto' : 0 }}
        transition={{ duration: 0.2 }}
        className={`md:hidden overflow-hidden bg-[#030712]/95 backdrop-blur-xl ${mobileMenuOpen ? 'border-b border-slate-800' : ''}`}
      >
        <div className="px-6 py-4 space-y-3">
          {NAV_ITEMS.map((item) => (
            <motion.a
              key={item.id}
              href={`#${item.id}`}
              onClick={() => {
                onSectionChange(item.id);
                setMobileMenuOpen(false);
              }}
              className={`block text-sm font-semibold py-2 px-3 rounded-lg transition-colors ${
                activeSection === item.id 
                  ? 'text-cyan-300 bg-blue-500/10 border border-blue-500/20' 
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900/30'
              }`}
            >
              {item.label}
            </motion.a>
          ))}
          <AnimatedButton
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            variant="primary"
            className="w-full mt-4 py-2.5 text-sm"
          >
            <Download size={16} />
            View Resume
          </AnimatedButton>
        </div>
      </motion.div>
    </motion.header>
  );
}
