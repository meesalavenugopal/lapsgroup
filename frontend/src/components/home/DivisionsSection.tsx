import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Building2, Code2, Megaphone, PartyPopper, Camera } from 'lucide-react';
import { divisions } from '@/data/content';

const iconMap = {
  architecture: Building2,
  apps: Code2,
  ads: Megaphone,
  suites: PartyPopper,
  photo: Camera,
};

export function DivisionsSection() {
  return (
    <section className="py-20 bg-white" id="divisions">
      <div className="container-wide">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-title"
          >
            Our Divisions
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="section-subtitle mx-auto"
          >
            Five specialized verticals, one unified vision. Each division brings 
            unique expertise while sharing our commitment to excellence.
          </motion.p>
        </div>

        {/* Divisions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {divisions.map((division, index) => {
            const Icon = iconMap[division.key];
            return (
              <motion.div
                key={division.key}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`card card-hover p-8 ${
                  index === 0 ? 'md:col-span-2 lg:col-span-1' : ''
                }`}
              >
                <Link to={`/${division.slug}`} className="block h-full">
                  {/* Icon */}
                  <div
                    className="w-14 h-14 rounded-xl flex items-center justify-center mb-6"
                    style={{ backgroundColor: `${division.accentColor}15` }}
                  >
                    <Icon
                      className="w-7 h-7"
                      style={{ color: division.accentColor }}
                    />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-laps-navy mb-2">
                    {division.name}
                  </h3>
                  <p className="text-laps-gold text-sm font-medium mb-3">
                    {division.tagline}
                  </p>
                  <p className="text-laps-slate text-sm mb-6 line-clamp-3">
                    {division.description}
                  </p>

                  {/* Stats Preview */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    {division.stats.slice(0, 2).map((stat) => (
                      <div key={stat.label}>
                        <div className="text-xl font-bold text-laps-navy">
                          {stat.value}
                        </div>
                        <div className="text-xs text-laps-slate">{stat.label}</div>
                      </div>
                    ))}
                  </div>

                  {/* CTA */}
                  <div
                    className="flex items-center gap-2 text-sm font-medium transition-colors"
                    style={{ color: division.accentColor }}
                  >
                    Explore Division
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
