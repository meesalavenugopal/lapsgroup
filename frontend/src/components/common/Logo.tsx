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
      barWidth: 'w-1',
      thinBarWidth: 'w-[2px]',
      barHeight: 'h-7',
      spacing: 'gap-2.5'
    },
    md: { 
      logo: 'text-2xl',
      barWidth: 'w-1.5',
      thinBarWidth: 'w-[3px]',
      barHeight: 'h-9',
      spacing: 'gap-3'
    },
    lg: { 
      logo: 'text-3xl',
      barWidth: 'w-2',
      thinBarWidth: 'w-[4px]',
      barHeight: 'h-11',
      spacing: 'gap-4'
    },
  };

  const currentSize = sizeClasses[size];
  const isDark = variant === 'dark';

  return (
    <div className="flex flex-col">
      <div className={clsx('flex items-center', currentSize.spacing)}>
        {/* Bars with Netflix-style thin accent lines */}
        <div className="flex items-center gap-1.5">
          {/* First bar group - White/Navy */}
          <div className="flex items-center gap-0.5">
            <div 
              className={clsx(
                currentSize.barHeight,
                currentSize.barWidth,
                isDark ? 'bg-laps-navy' : 'bg-white'
              )}
            />
            <div 
              className={clsx(
                currentSize.barHeight,
                currentSize.thinBarWidth,
                isDark ? 'bg-laps-navy/30' : 'bg-white/30'
              )}
            />
          </div>
          
          {/* Second bar group - Gold */}
          <div className="flex items-center gap-0.5">
            <div 
              className={clsx(
                currentSize.barHeight,
                currentSize.barWidth,
                'bg-laps-gold'
              )}
            />
            <div 
              className={clsx(
                currentSize.barHeight,
                currentSize.thinBarWidth,
                'bg-laps-gold/30'
              )}
            />
          </div>
        </div>
        
        {/* Wordmark */}
        <div className="flex flex-col">
          <div className="flex items-baseline">
            <span
              className={clsx(
                'font-bold tracking-wider leading-none',
                currentSize.logo,
                isDark ? 'text-laps-navy' : 'text-white'
              )}
            >
              LAPS
            </span>
            <span 
              className={clsx('text-laps-gold font-bold leading-none', currentSize.logo)}
            >
              .
            </span>
          </div>
          <span
            className={clsx(
              'font-medium tracking-[0.3em] leading-none mt-1',
              size === 'sm' ? 'text-[8px]' : size === 'md' ? 'text-[9px]' : 'text-[10px]',
              isDark ? 'text-laps-slate/60' : 'text-white/50'
            )}
          >
            GLOBAL
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
