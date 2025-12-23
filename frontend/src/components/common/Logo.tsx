import clsx from 'clsx';

interface LogoProps {
  variant?: 'light' | 'dark';
  size?: 'sm' | 'md' | 'lg';
  showTagline?: boolean;
}

export function Logo({ variant = 'dark', size = 'md', showTagline = false }: LogoProps) {
  const sizeClasses = {
    sm: 'text-xl',
    md: 'text-2xl',
    lg: 'text-3xl',
  };

  return (
    <div className="flex flex-col">
      <div className="flex items-center gap-2">
        {/* Logo Mark */}
        <div
          className={clsx(
            'font-bold tracking-tight',
            sizeClasses[size],
            variant === 'light' ? 'text-white' : 'text-laps-navy'
          )}
        >
          <span className="font-serif">L</span>
          <span>APS</span>
        </div>
        
        {/* Group Badge */}
        <div
          className={clsx(
            'px-2 py-0.5 rounded text-xs font-medium uppercase tracking-wider',
            variant === 'light'
              ? 'bg-white/20 text-white'
              : 'bg-laps-navy/10 text-laps-navy'
          )}
        >
          Group
        </div>
      </div>
      
      {showTagline && (
        <span
          className={clsx(
            'text-xs tracking-widest uppercase mt-1',
            variant === 'light' ? 'text-white/70' : 'text-laps-slate'
          )}
        >
          Excellence Across Horizons
        </span>
      )}
    </div>
  );
}
