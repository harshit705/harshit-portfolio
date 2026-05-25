import { motion } from 'framer-motion';
import { buttonVariants } from '../../utils/animations';
import { ReactNode } from 'react';

interface AnimatedButtonProps {
  children: ReactNode;
  onClick?: () => void;
  href?: string;
  target?: string;
  rel?: string;
  download?: boolean | string;
  variant?: 'primary' | 'secondary' | 'outline';
  className?: string;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
}

export function AnimatedButton({
  children,
  variant = 'primary',
  className = '',
  ...props
}: AnimatedButtonProps) {
  const variantStyles = {
    primary:
      'bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50',
    secondary: 'bg-gray-800/60 hover:bg-gray-800 border border-gray-700 text-white hover:border-blue-500/50',
    outline: 'border border-gray-700 hover:border-blue-500/50 text-white hover:bg-gray-800/30',
  };

  const Tag = props.href ? 'a' : 'button';

  return (
    <motion.div
      className={`inline-block`}
      variants={buttonVariants}
      initial="rest"
      whileHover="hover"
      whileTap="tap"
    >
      {/* @ts-ignore */}
      <Tag
        className={`flex items-center justify-center gap-2 px-6 py-3 md:px-8 md:py-4 rounded-lg font-semibold transition-all duration-300 ${variantStyles[variant]} ${className}`}
        {...(props.href ? { href: props.href, target: props.target, rel: props.rel } : {})}
        {...(props.type && !props.href ? { type: props.type } : {})}
        {...(!props.href && props.onClick ? { onClick: props.onClick } : {})}
        {...(props.download ? { download: props.download } : {})}
        {...(props.disabled ? { disabled: props.disabled } : {})}
      >
        {children}
      </Tag>
    </motion.div>
  );
}
