import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';
import { SectionHeading } from '../ui/SectionHeading';
import { GlassCard } from '../ui/GlassCard';
import { CERTIFICATIONS } from '../../utils/constants';
import { sectionRevealVariants } from '../../utils/animations';

export function Certifications() {
  return (
    <section id="certifications" className="min-h-[85vh] bg-gradient-to-b from-transparent via-cyan-950/10 to-transparent py-16 md:py-24 flex flex-col justify-center">
      <motion.div
        initial="initial"
        whileInView="whileInView"
        viewport={{ once: true, margin: "-100px" }}
        variants={sectionRevealVariants}
        className="max-w-6xl mx-auto px-6"
      >
        <SectionHeading
          title="Certifications & Achievements"
          accentColor="cyan"
          icon={<CheckCircle size={36} />}
        />

        <div className="grid md:grid-cols-3 gap-6">
          {CERTIFICATIONS.map((cert) => (
            <div key={cert.id}>
              <GlassCard glowColor="cyan" className="p-8 flex flex-col h-full">
                <div className="flex items-start gap-3 mb-4">
                  <motion.div whileHover={{ scale: 1.2, rotate: 10 }}>
                    <CheckCircle className="text-cyan-400 flex-shrink-0 mt-1" size={24} />
                  </motion.div>
                  <div>
                    <h4 className="text-lg font-bold text-cyan-300 mb-1">{cert.title}</h4>
                    <p className="text-sm text-gray-400">{cert.issuer}</p>
                  </div>
                </div>
                <p className="text-cyan-400/70 text-sm font-medium mb-3">{cert.date}</p>
                <p className="text-gray-400 text-sm flex-grow">{cert.description}</p>
              </GlassCard>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
