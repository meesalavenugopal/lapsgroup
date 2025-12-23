import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Linkedin, ArrowRight } from 'lucide-react';
import { founderInfo, timelineEvents, divisions } from '@/data/content';

export function AboutPage() {
  const values = [
    {
      title: 'Excellence',
      description: 'We pursue the highest standards in everything we do.',
    },
    {
      title: 'Innovation',
      description: 'We embrace creativity and forward-thinking solutions.',
    },
    {
      title: 'Integrity',
      description: 'We conduct business with honesty and transparency.',
    },
    {
      title: 'Collaboration',
      description: 'We believe in the power of working together.',
    },
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-laps-navy text-white">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About LAPS Group</h1>
            <p className="text-xl text-white/80">
              A multi-division company driving innovation across architecture, 
              technology, marketing, events, and photography.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="section-title">Our Story</h2>
              <p className="text-laps-slate mb-6">
                LAPS Group was founded with a vision to create excellence across multiple domains. 
                What started as a single venture has grown into a diversified group of companies, 
                each contributing uniquely to their respective industries.
              </p>
              <p className="text-laps-slate mb-6">
                The name LAPS represents our commitment to leading in every lap of the journey. 
                Each division operates independently while sharing common values of innovation, 
                quality, and customer-centricity.
              </p>
              <p className="text-laps-slate">
                Today, LAPS Group stands as a testament to the power of diversified excellence, 
                serving clients across India and beyond.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-laps-light rounded-2xl p-8"
            >
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80"
                alt="LAPS Team"
                className="w-full h-64 object-cover rounded-xl mb-6"
              />
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-white rounded-lg">
                  <div className="text-3xl font-bold text-laps-navy">5</div>
                  <div className="text-sm text-laps-slate">Divisions</div>
                </div>
                <div className="text-center p-4 bg-white rounded-lg">
                  <div className="text-3xl font-bold text-laps-navy">15+</div>
                  <div className="text-sm text-laps-slate">Cities</div>
                </div>
                <div className="text-center p-4 bg-white rounded-lg">
                  <div className="text-3xl font-bold text-laps-navy">100+</div>
                  <div className="text-sm text-laps-slate">Team Members</div>
                </div>
                <div className="text-center p-4 bg-white rounded-lg">
                  <div className="text-3xl font-bold text-laps-navy">4+</div>
                  <div className="text-sm text-laps-slate">Years</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-laps-light">
        <div className="container-wide">
          <div className="text-center mb-12">
            <h2 className="section-title">Our Values</h2>
            <p className="section-subtitle mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-lg"
              >
                <div className="w-12 h-12 bg-laps-blue/10 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-xl font-bold text-laps-blue">{index + 1}</span>
                </div>
                <h3 className="text-lg font-semibold text-laps-navy mb-2">{value.title}</h3>
                <p className="text-sm text-laps-slate">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-20 bg-white">
        <div className="container-wide">
          <div className="text-center mb-12">
            <h2 className="section-title">Leadership</h2>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto bg-laps-navy text-white rounded-2xl p-8 text-center"
          >
            <div className="w-24 h-24 bg-white/20 rounded-full mx-auto mb-6 flex items-center justify-center">
              <span className="text-3xl font-bold">VM</span>
            </div>
            <h3 className="text-2xl font-bold mb-2">{founderInfo.name}</h3>
            <p className="text-laps-gold mb-6">{founderInfo.title}</p>
            <blockquote className="text-white/80 italic mb-6">
              "{founderInfo.quote}"
            </blockquote>
            <a
              href={founderInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-white hover:text-laps-gold transition-colors"
            >
              <Linkedin className="w-5 h-5" />
              Connect on LinkedIn
            </a>
          </motion.div>
        </div>
      </section>

      {/* Our Divisions */}
      <section className="py-20 bg-laps-light">
        <div className="container-wide">
          <div className="text-center mb-12">
            <h2 className="section-title">Our Divisions</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {divisions.map((division, index) => (
              <motion.div
                key={division.key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  to={`/${division.slug}`}
                  className="block bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
                >
                  <div
                    className="w-2 h-12 rounded-full mb-4"
                    style={{ backgroundColor: division.accentColor }}
                  />
                  <h3 className="text-lg font-semibold text-laps-navy mb-2">
                    {division.name}
                  </h3>
                  <p className="text-sm text-laps-slate mb-4">{division.tagline}</p>
                  <span
                    className="flex items-center gap-2 text-sm font-medium"
                    style={{ color: division.accentColor }}
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Milestones Timeline */}
      <section className="py-20 bg-white">
        <div className="container-wide">
          <div className="text-center mb-12">
            <h2 className="section-title">Our Milestones</h2>
          </div>

          <div className="max-w-3xl mx-auto">
            {timelineEvents.map((event, index) => (
              <motion.div
                key={event.year}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex gap-6 mb-8"
              >
                <div className="w-20 flex-shrink-0 text-right">
                  <span className="text-2xl font-bold text-laps-blue">{event.year}</span>
                </div>
                <div className="relative pl-6 border-l-2 border-laps-light pb-8">
                  <div className="absolute left-[-9px] top-1 w-4 h-4 bg-laps-blue rounded-full" />
                  <h3 className="text-lg font-semibold text-laps-navy mb-2">{event.title}</h3>
                  <p className="text-laps-slate">{event.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
