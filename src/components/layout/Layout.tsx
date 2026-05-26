import { ReactNode, useState, useEffect, useRef } from 'react';
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

      <Navbar activeSection={activeSection} onSectionChange={setActiveSection} />

      <main className="relative z-10">{children}</main>

      <Footer />
    </div>
  );
}
