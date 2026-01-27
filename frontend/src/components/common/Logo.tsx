import clsx from 'clsx';

interface LogoProps {
  variant?: 'light' | 'dark';
  size?: 'sm' | 'md' | 'lg';
  showTagline?: boolean;
}

export function Logo({ variant = 'dark', size = 'md', showTagline = false }: LogoProps) {
  const sizeClasses = {
    sm: { 
      width: 'w-28'
    },
    md: { 
      width: 'w-36'
    },
    lg: { 
      width: 'w-44'
    },
  };

  const currentSize = sizeClasses[size];
  
  // Use dark logo on white background, light logo on dark background
  const logoSrc = variant === 'dark' 
    ? '/meesala-logo-vertical-dark.svg' 
    : '/meesala-logo-vertical-transparent.svg';

  return (
    <div className="flex items-center">
      <img 
        src={logoSrc} 
        alt="Meesala" 
        className={clsx(currentSize.width, 'object-contain')}
      />
    </div>
  );
}
