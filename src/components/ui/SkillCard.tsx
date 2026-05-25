import { motion } from 'framer-motion';
import { itemVariants } from '../../utils/animations';
import { LucideIcon } from 'lucide-react';

interface SkillCardProps {
  category: string;
  items: string[];
  icon: LucideIcon;
  accentColor?: 'blue' | 'cyan';
}

export function SkillCard({ category, items, icon: Icon, accentColor = 'blue' }: SkillCardProps) {
  const bgClass = accentColor === 'cyan'
    ? 'hover:border-cyan-500/50 hover:shadow-cyan-500/20'
    : 'hover:border-blue-500/50 hover:shadow-blue-500/20';

  const iconColorClass = accentColor === 'cyan'
    ? 'text-cyan-400 group-hover:text-blue-400'
    : 'text-blue-400 group-hover:text-cyan-400';

  const textColorClass = accentColor === 'cyan'
    ? 'text-cyan-300 group-hover:text-blue-300'
    : 'text-blue-300 group-hover:text-cyan-300';

  return (
    <motion.div
      variants={itemVariants}
      className={`group bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-8 rounded-2xl border border-gray-700/50 transition-all duration-300 ${bgClass} hover:shadow-xl transform hover:-translate-y-2 cursor-pointer`}
    >
      <div className="flex items-center gap-3 mb-4">
        <div className="p-3 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-lg group-hover:from-blue-500/40 group-hover:to-cyan-500/40 transition-colors duration-300">
          <Icon className={`${iconColorClass} transition-colors`} size={24} />
        </div>
        <h4 className={`text-xl font-bold ${textColorClass} transition-colors`}>
          {category}
        </h4>
      </div>
      <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">
        {items.join(', ')}
      </p>
    </motion.div>
  );
}
