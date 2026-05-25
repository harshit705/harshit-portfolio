import { motion, MotionProps } from 'framer-motion';
import { cardHoverVariants } from '../../utils/animations';
import { ReactNode } from 'react';

interface GlassCardProps extends MotionProps {
  children: ReactNode;
  className?: string;
  glowColor?: 'blue' | 'cyan' | 'purple';
}

export function GlassCard({ children, className = '', glowColor = 'blue', ...props }: GlassCardProps) {
  const glowMap = {
    blue: 'hover:shadow-blue-500/20 hover:border-blue-500/50',
    cyan: 'hover:shadow-cyan-500/20 hover:border-cyan-500/50',
    purple: 'hover:shadow-purple-500/20 hover:border-purple-500/50',
  };

  return (
    <motion.div
      variants={cardHoverVariants}
      initial="rest"
      whileHover="hover"
      className={`bg-gradient-to-br from-gray-800/40 via-gray-800/20 to-gray-900/40 rounded-2xl border border-gray-700/50 transition-all duration-200 backdrop-blur-sm ${glowMap[glowColor]} ${className}`}
      {...props}
    >
      {children}
    </motion.div>
  );
}
