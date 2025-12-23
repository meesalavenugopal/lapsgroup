import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Building2, Code2, Megaphone, PartyPopper, Camera, CheckCircle } from 'lucide-react';
import { divisions } from '@/data/content';
import { DivisionKey } from '@/types';

interface DivisionPageProps {
  division: DivisionKey;
}

const iconMap = {
  architecture: Building2,
  apps: Code2,
  ads: Megaphone,
  suites: PartyPopper,
  photo: Camera,
};

export function DivisionPage({ division: divisionKey }: DivisionPageProps) {
  const division = divisions.find((d) => d.key === divisionKey);

  if (!division) {
    return (
      <div className="pt-20 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-laps-navy mb-4">Division Not Found</h1>
          <Link to="/" className="text-laps-blue hover:underline">
            Return to Home
          </Link>
        </div>
      </div>
    );
  }

  const Icon = iconMap[division.key];
  const divisionIndex = divisions.findIndex((d) => d.key === divisionKey);
  const prevDivision = divisions[divisionIndex - 1];
  const nextDivision = divisions[divisionIndex + 1];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section
        className="relative py-24 text-white"
        style={{
          background: `linear-gradient(135deg, ${division.accentColor} 0%, #0A1628 100%)`,
        }}
      >
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-white/60 mb-6">
              <Link to="/" className="hover:text-white">Home</Link>
              <span>/</span>
              <span>Divisions</span>
              <span>/</span>
              <span className="text-white">{division.name}</span>
            </div>

            <div className="flex items-center gap-4 mb-6">
              <div
                className="p-4 rounded-xl"
                style={{ backgroundColor: 'rgba(255,255,255,0.2)' }}
              >
                <Icon className="w-10 h-10" />
              </div>
              <div>
                <p className="text-white/60 text-sm uppercase tracking-wider">LAPS</p>
                <h1 className="text-4xl md:text-5xl font-bold">{division.name}</h1>
              </div>
            </div>

            <p className="text-2xl text-white/80 mb-4">{division.tagline}</p>
            <p className="text-lg text-white/60">{division.description}</p>
          </motion.div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-12 bg-white border-b">
        <div className="container-wide">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {division.stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div
                  className="text-4xl font-bold mb-2"
                  style={{ color: division.accentColor }}
                >
                  {stat.value}
                </div>
                <div className="text-sm text-laps-slate">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-laps-light">
        <div className="container-wide">
          <div className="text-center mb-12">
            <h2 className="section-title">Our Services</h2>
            <p className="section-subtitle mx-auto">
              Comprehensive solutions tailored to your needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {division.services.map((service, index) => (
              <motion.div
                key={service}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="flex items-start gap-4">
                  <CheckCircle
                    className="w-6 h-6 flex-shrink-0 mt-1"
                    style={{ color: division.accentColor }}
                  />
                  <div>
                    <h3 className="font-semibold text-laps-navy mb-2">{service}</h3>
                    <p className="text-sm text-laps-slate">
                      Expert solutions delivered with precision and care.
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Work Placeholder */}
      <section className="py-20 bg-white">
        <div className="container-wide">
          <div className="text-center mb-12">
            <h2 className="section-title">Featured Work</h2>
            <p className="section-subtitle mx-auto">
              Showcasing our best projects and achievements
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map((item) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="relative group overflow-hidden rounded-xl aspect-[4/3]"
              >
                <div
                  className="absolute inset-0"
                  style={{
                    background: `linear-gradient(45deg, ${division.accentColor}40, ${division.accentColor}20)`,
                  }}
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <p className="text-laps-slate">Project {item}</p>
                </div>
                <div className="absolute inset-0 bg-laps-navy/80 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <button className="btn-primary">View Project</button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        className="py-20 text-white"
        style={{
          background: `linear-gradient(135deg, #0A1628 0%, ${division.accentColor} 100%)`,
        }}
      >
        <div className="container-wide text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Work Together?
            </h2>
            <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
              Let's discuss how {division.name} can help bring your vision to life.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-white text-laps-navy px-8 py-4 rounded-lg font-medium hover:bg-laps-light transition-colors"
            >
              Get in Touch
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Division Navigation */}
      <section className="py-12 bg-white border-t">
        <div className="container-wide">
          <div className="flex items-center justify-between">
            {prevDivision ? (
              <Link
                to={`/${prevDivision.slug}`}
                className="flex items-center gap-2 text-laps-slate hover:text-laps-navy transition-colors"
              >
                <ArrowLeft className="w-5 h-5" />
                <span>{prevDivision.name}</span>
              </Link>
            ) : (
              <div />
            )}

            <Link
              to="/#divisions"
              className="text-laps-blue font-medium hover:underline"
            >
              All Divisions
            </Link>

            {nextDivision ? (
              <Link
                to={`/${nextDivision.slug}`}
                className="flex items-center gap-2 text-laps-slate hover:text-laps-navy transition-colors"
              >
                <span>{nextDivision.name}</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            ) : (
              <div />
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
