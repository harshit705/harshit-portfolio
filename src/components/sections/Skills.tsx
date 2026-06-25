import { Code2 } from 'lucide-react';
import { motion } from 'framer-motion';
import { SectionHeading } from '../ui/SectionHeading';
import { SkillCard } from '../ui/SkillCard';
import { SKILLS } from '../../utils/constants';
import { sectionRevealVariants } from '../../utils/animations';

export function Skills() {
  return (
    <section id="skills" className="min-h-[85vh] bg-gradient-to-b from-transparent via-blue-950/10 to-transparent py-16 md:py-24 flex flex-col justify-center">
      <motion.div
        initial="initial"
        whileInView="whileInView"
        viewport={{ once: true, margin: "-100px" }}
        variants={sectionRevealVariants}
        className="max-w-6xl mx-auto px-6"
      >
        <SectionHeading
          title="Technical Skills"
          accentColor="blue"
          icon={<Code2 size={36} />}
        />

        <div className="grid md:grid-cols-2 gap-6">
          {SKILLS.map((skill) => (
            <SkillCard
              key={skill.category}
              category={skill.category}
              items={skill.items}
              icon={skill.icon || Code2}
              accentColor={['Frontend', 'Backend', 'AI / ML'].includes(skill.category) ? 'blue' : 'cyan'}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
}
