import clsx from 'clsx';

interface LogoProps {
  variant?: 'light' | 'dark';
  size?: 'sm' | 'md' | 'lg';
  showTagline?: boolean;
}

export function Logo({ variant = 'dark', size = 'md', showTagline = false }: LogoProps) {
  const sizeClasses = {
    sm: { 
      container: 'h-8',
      mark: 'w-8 h-8',
      text: 'text-lg',
      spacing: 'gap-2'
    },
    md: { 
      container: 'h-10',
      mark: 'w-10 h-10',
      text: 'text-xl',
      spacing: 'gap-2.5'
    },
    lg: { 
      container: 'h-12',
      mark: 'w-12 h-12',
      text: 'text-2xl',
      spacing: 'gap-3'
    },
  };

  const currentSize = sizeClasses[size];
  const isDark = variant === 'dark';

  return (
    <div className="flex flex-col">
      <div className={clsx('flex items-center', currentSize.spacing)}>
        {/* Distinctive Geometric Mark - Interlocking L+G */}
        <div
          className={clsx(
            'relative flex items-center justify-center',
            currentSize.mark
          )}
        >
          {/* Outer frame */}
          <div
            className={clsx(
              'absolute inset-0 border-2 rotate-45 rounded-sm',
              isDark ? 'border-laps-navy' : 'border-white'
            )}
          />
          {/* Inner content */}
          <div className={clsx(
            'relative z-10 font-bold font-serif',
            currentSize.text,
            isDark ? 'text-laps-navy' : 'text-white'
          )}>
            <span className="relative">L</span>
            <span className="absolute -top-0.5 -right-1.5 text-xs opacity-70">G</span>
          </div>
        </div>
        
        {/* Wordmark with professional kerning */}
        <div className="flex flex-col leading-none">
          <div
            className={clsx(
              'font-bold tracking-wide uppercase',
              currentSize.text,
              isDark ? 'text-laps-navy' : 'text-white'
            )}
          >
            LAPS
          </div>
          <div
            className={clsx(
              'text-[0.6em] font-medium tracking-[0.2em] uppercase mt-0.5',
              isDark ? 'text-laps-navy/60' : 'text-white/60'
            )}
          >
            GROUP
          </div>
        </div>
      </div>
      
      {showTagline && (
        <span
          className={clsx(
            'text-[10px] tracking-[0.15em] uppercase mt-2 font-medium',
            isDark ? 'text-laps-slate' : 'text-white/70'
          )}
        >
          Excellence Across Horizons
        </span>
      )}
    </div>
  );
}
