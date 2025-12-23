import { Link } from 'react-router-dom';
import { divisions } from '@/data/content';
import { 
  Building2, 
  Code2, 
  Megaphone, 
  PartyPopper, 
  Camera 
} from 'lucide-react';

const iconMap = {
  architecture: Building2,
  apps: Code2,
  ads: Megaphone,
  suites: PartyPopper,
  photo: Camera,
};

export function BrandCarousel() {
  // Duplicate divisions for seamless loop
  const items = [...divisions, ...divisions];

  return (
    <div className="relative overflow-hidden bg-laps-navy/50 py-6">
      <div className="flex animate-carousel hover:[animation-play-state:paused]">
        {items.map((division, index) => {
          const Icon = iconMap[division.key];
          return (
            <Link
              key={`${division.key}-${index}`}
              to={`/${division.slug}`}
              className="flex items-center gap-3 px-8 py-2 min-w-max group"
            >
              <div
                className="p-2 rounded-lg transition-colors"
                style={{ backgroundColor: `${division.accentColor}30` }}
              >
                <Icon
                  className="w-5 h-5 transition-colors"
                  style={{ color: division.accentColor }}
                />
              </div>
              <span className="text-white font-medium group-hover:text-laps-gold transition-colors">
                {division.name}
              </span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
