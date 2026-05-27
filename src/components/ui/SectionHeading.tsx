import { ReactNode } from 'react';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  icon?: ReactNode;
  accentColor?: 'blue' | 'cyan' | 'purple';
}

export function SectionHeading({ title, subtitle, icon, accentColor = 'blue' }: SectionHeadingProps) {
  const colorMap = {
    blue: 'from-white to-blue-300 via-blue-200 border-blue-400',
    cyan: 'from-white to-cyan-300 via-cyan-200 border-cyan-400',
    purple: 'from-white to-purple-300 via-purple-200 border-purple-400',
  };

  const iconColorMap = {
    blue: 'text-blue-400',
    cyan: 'text-cyan-400',
    purple: 'text-purple-400',
  };

  return (
    <div className="mb-8">
      <div className="flex items-center gap-3 mb-4">
        {icon && <div className={iconColorMap[accentColor]}>{icon}</div>}
        <h3 className={`text-4xl md:text-5xl font-bold bg-gradient-to-r ${colorMap[accentColor]} bg-clip-text text-transparent`}>
          {title}
        </h3>
      </div>
      {subtitle && <p className="text-gray-400 text-lg mb-4">{subtitle}</p>}
      <div className={`w-16 h-1 bg-gradient-to-r ${colorMap[accentColor]} rounded-full`} />
    </div>
  );
}
