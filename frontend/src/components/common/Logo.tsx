import clsx from 'clsx';

interface LogoProps {
  variant?: 'light' | 'dark';
  size?: 'sm' | 'md' | 'lg';
  showTagline?: boolean;
}

export function Logo({ variant = 'dark', size = 'md', showTagline = false }: LogoProps) {
  const sizeClasses = {
    sm: { 
      logo: 'text-xl',
      dot: 'w-1 h-1',
      spacing: 'gap-1.5'
    },
    md: { 
      logo: 'text-2xl',
      dot: 'w-1.5 h-1.5',
      spacing: 'gap-2'
    },
    lg: { 
      logo: 'text-3xl',
      dot: 'w-2 h-2',
      spacing: 'gap-2.5'
    },
  };

  const currentSize = sizeClasses[size];
  const isDark = variant === 'dark';

  return (
    <div className="flex flex-col">
      <div className={clsx('flex items-center', currentSize.spacing)}>
        {/* Minimalist Symbol - Four Elements */}
        <div className="relative flex items-center justify-center">
          <svg
            width={size === 'sm' ? '28' : size === 'md' ? '32' : '40'}
            height={size === 'sm' ? '28' : size === 'md' ? '32' : '40'}
            viewBox="0 0 32 32"
            fill="none"
          >
            {/* Four squares with gold color at varying opacity */}
            <rect x="2" y="2" width="12" height="12" rx="1" fill="rgb(201 162 39)" />
            <rect x="18" y="2" width="12" height="12" rx="1" fill="rgb(201 162 39)" opacity="0.75" />
            <rect x="2" y="18" width="12" height="12" rx="1" fill="rgb(201 162 39)" opacity="0.5" />
            <rect x="18" y="18" width="12" height="12" rx="1" fill="rgb(201 162 39)" opacity="0.25" />
          </svg>
        </div>
        
        {/* Enterprise Wordmark */}
        <div className="flex flex-col">
          <span
            className={clsx(
              'font-bold tracking-tight leading-none',
              currentSize.logo,
              isDark ? 'text-laps-navy' : 'text-white'
            )}
          >
            LAPS
          </span>
          <span
            className={clsx(
              'font-medium tracking-[0.3em] leading-none mt-0.5',
              size === 'sm' ? 'text-[7px]' : size === 'md' ? 'text-[8px]' : 'text-[9px]',
              isDark ? 'text-laps-navy/40' : 'text-white/40'
            )}
          >
            GROUP
          </span>
        </div>
      </div>
      
      {showTagline && (
        <span
          className={clsx(
            'text-[10px] tracking-[0.2em] uppercase mt-2 font-medium',
            isDark ? 'text-laps-slate' : 'text-white/70'
          )}
        >
          Excellence Across Horizons
        </span>
      )}
    </div>
  );
}
