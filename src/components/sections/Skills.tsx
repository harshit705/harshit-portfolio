import { Code2 } from 'lucide-react';
import { SectionHeading } from '../ui/SectionHeading';
import { SkillCard } from '../ui/SkillCard';
import { SKILLS } from '../../utils/constants';

export function Skills() {
  return (
    <section className="bg-gradient-to-b from-transparent via-blue-950/10 to-transparent py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-6">
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
      </div>
    </section>
  );
}
