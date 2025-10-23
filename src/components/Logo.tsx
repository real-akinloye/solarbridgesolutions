import React from 'react';

type Props = {
  width?: number;
  height?: number;
  roundedClass?: string;
  bgClass?: string;
  textClass?: string;
  title?: string;
};

const Logo: React.FC<Props> = ({
  width = 128,
  height = 56,
  roundedClass = 'rounded-none',
  bgClass = 'bg-transparent',
  textClass = 'font-[Space Grotesk] text-[#0A1F44] text-[20px] font-semibold tracking-tight transition-all duration-300',
  title = 'Solar Bridge Solution',
}) => {
  const widthClass = `w-[${width}px]`;
  const heightClass = `h-[${height}px]`;

  return (
    <div className={`${roundedClass} overflow-hidden ${bgClass} p-0 flex items-center justify-center ${widthClass} ${heightClass}`}>
      <span className={`${textClass} select-none`}>
        {title.split(' ').slice(0, 2).join(' ')} <span className="text-accent">{title.split(' ').slice(2).join(' ')}</span>
      </span>
    </div>
  );
};

export default Logo;
