import clsx from 'clsx';

interface LogoProps {
  variant?: 'light' | 'dark';
  size?: 'sm' | 'md' | 'lg';
  showTagline?: boolean;
}

export function Logo({ variant = 'dark', size = 'md', showTagline = false }: LogoProps) {
  const sizeClasses = {
    sm: { 
      height: 'h-24',
      width: 'w-24'
    },
    md: { 
      height: 'h-32',
      width: 'w-32'
    },
    lg: { 
      height: 'h-40',
      width: 'w-40'
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
