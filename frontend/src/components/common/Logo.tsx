import clsx from 'clsx';

interface LogoProps {
  variant?: 'light' | 'dark';
  size?: 'sm' | 'md' | 'lg';
  showTagline?: boolean;
}

export function Logo({ variant = 'dark', size = 'md', showTagline = false }: LogoProps) {
  const sizeClasses = {
    sm: { 
      height: 'h-10',
      width: 'w-10'
    },
    md: { 
      height: 'h-12',
      width: 'w-12'
    },
    lg: { 
      height: 'h-16',
      width: 'w-16'
    },
  };

  const currentSize = sizeClasses[size];

  return (
    <div className="flex items-center">
      <img 
        src="/meesala-logo-vertical-transparent.svg" 
        alt="Meesala" 
        className={clsx(currentSize.height, currentSize.width, 'object-contain')}
      />
    </div>
  );
}
