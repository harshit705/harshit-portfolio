import { ReactNode, useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { AnimatedBackground } from '../ui/AnimatedBackground';

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  const [activeSection, setActiveSection] = useState('about');
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const id = entry.target.id;
            if (id) setActiveSection(id);
          }
        }
      },
      { threshold: 0.3, rootMargin: '-50px' }
    );

    const sections = document.querySelectorAll('section[id]');
    sections.forEach((section) => {
      if (observerRef.current) {
        observerRef.current.observe(section);
      }
    });

    return () => {
      if (observerRef.current) {
        sections.forEach((section) => observerRef.current?.unobserve(section));
      }
    };
  }, []);

  return (
    <div className="w-full min-h-screen bg-[#0a1833] text-gray-100 relative overflow-x-hidden">
      <AnimatedBackground />

      {/* Animated Background Gradients - Optimized */}
      <div className="fixed inset-0 z-0 pointer-events-none opacity-50">
        <motion.div
          className="absolute top-0 left-0 w-96 h-96 bg-blue-600/10 rounded-full mix-blend-multiply filter blur-3xl"
          animate={{
            x: [0, 50, -50, 0],
            y: [0, -50, 50, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
        <motion.div
          className="absolute top-0 right-0 w-96 h-96 bg-cyan-600/10 rounded-full mix-blend-multiply filter blur-3xl"
          animate={{
            x: [0, -50, 50, 0],
            y: [0, 50, -50, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
      </div>

      <Navbar activeSection={activeSection} onSectionChange={setActiveSection} />

      <main className="relative z-10">{children}</main>

      <Footer />
    </div>
  );
}
