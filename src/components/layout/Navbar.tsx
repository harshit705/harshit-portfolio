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
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled ? 'border-b border-blue-700/60 bg-[#0a1833]/80 backdrop-blur-xl' : 'bg-[#0a1833]/60 backdrop-blur-md'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <nav className="max-w-6xl mx-auto px-6 py-5 flex items-center justify-between">
        <motion.a
          href="#about"
          className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          HA
        </motion.a>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8">
          {NAV_ITEMS.map((item) => (
            <motion.a
              key={item.id}
              href={`#${item.id}`}
              onClick={() => onSectionChange(item.id)}
              className={`text-sm font-medium transition-all duration-300 pb-2 border-b-2 ${
                activeSection === item.id
                  ? 'text-blue-400 border-blue-400'
                  : 'text-gray-400 border-transparent hover:text-blue-400'
              }`}
              whileHover={{ y: -2 }}
            >
              {item.label}
            </motion.a>
          ))}
        </div>

        <AnimatedButton href="/resume.pdf" download variant="primary" className="hidden md:flex">
          <Download size={16} />
          Resume
        </AnimatedButton>

        {/* Mobile Menu Button */}
        <motion.button
          className="md:hidden text-gray-400 hover:text-blue-400 transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          whileTap={{ scale: 0.95 }}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </motion.button>
      </nav>

      {/* Mobile Menu */}
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{ opacity: mobileMenuOpen ? 1 : 0, height: mobileMenuOpen ? 'auto' : 0 }}
        transition={{ duration: 0.3 }}
        className={`md:hidden overflow-hidden bg-[#0a1833]/90 backdrop-blur-md ${mobileMenuOpen ? 'border-b border-blue-700/60' : ''}`}
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
              className={`block text-sm font-medium py-2 transition-colors ${
                activeSection === item.id ? 'text-blue-400' : 'text-gray-400 hover:text-blue-400'
              }`}
            >
              {item.label}
            </motion.a>
          ))}
          <AnimatedButton href="/resume.pdf" download variant="primary" className="w-full mt-4">
            <Download size={16} />
            Resume
          </AnimatedButton>
        </div>
      </motion.div>
    </motion.header>
  );
}
