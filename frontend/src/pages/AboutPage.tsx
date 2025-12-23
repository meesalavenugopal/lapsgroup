import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Users, Target, Clock, Leaf, Lightbulb, Building } from 'lucide-react';
import { divisions } from '@/data/content';

export function AboutPage() {
  const aboutLinks = [
    { name: 'Leadership', href: '/about/leadership', description: 'Meet our visionary leaders', icon: Users },
    { name: 'Values & Purpose', href: '/about/values', description: 'What drives us forward', icon: Target },
    { name: 'Milestones', href: '/about/milestones', description: 'Our journey of growth', icon: Clock },
    { name: 'Heritage', href: '/about/heritage', description: 'Where it all began', icon: Building },
    { name: 'Sustainability', href: '/about/sustainability', description: 'Building a greener future', icon: Leaf },
    { name: 'Innovation', href: '/about/innovation', description: 'Pioneering solutions', icon: Lightbulb },
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
            <p className="text-laps-gold text-sm font-medium tracking-wider uppercase mb-4">
              The LAPS Group
            </p>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About Us</h1>
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
              <p className="text-laps-slate mb-8">
                Today, LAPS Group stands as a testament to the power of diversified excellence, 
                serving clients across India and beyond.
              </p>
              <Link
                to="/about/heritage"
                className="inline-flex items-center gap-2 text-laps-gold font-medium hover:gap-3 transition-all"
              >
                Explore Our Heritage
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-laps-light p-8"
            >
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80"
                alt="LAPS Team"
                className="w-full h-64 object-cover mb-6"
              />
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-white">
                  <div className="text-3xl font-bold text-laps-navy">5</div>
                  <div className="text-sm text-laps-slate">Divisions</div>
                </div>
                <div className="text-center p-4 bg-white">
                  <div className="text-3xl font-bold text-laps-navy">15+</div>
                  <div className="text-sm text-laps-slate">Cities</div>
                </div>
                <div className="text-center p-4 bg-white">
                  <div className="text-3xl font-bold text-laps-navy">100+</div>
                  <div className="text-sm text-laps-slate">Team Members</div>
                </div>
                <div className="text-center p-4 bg-white">
                  <div className="text-3xl font-bold text-laps-navy">4+</div>
                  <div className="text-sm text-laps-slate">Years</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Explore About Pages */}
      <section className="py-20 bg-laps-light">
        <div className="container-wide">
          <div className="text-center mb-12">
            <h2 className="section-title">Explore LAPS Group</h2>
            <p className="section-subtitle mx-auto">
              Learn more about who we are and what we stand for
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {aboutLinks.map((link, index) => (
              <motion.div
                key={link.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  to={link.href}
                  className="block bg-white p-8 shadow-lg hover:shadow-xl transition-all group border-l-4 border-laps-gold/50 hover:border-laps-gold"
                >
                  <div className="w-12 h-12 bg-laps-gold/10 flex items-center justify-center mb-4 group-hover:bg-laps-gold/20 transition-colors">
                    <link.icon className="w-6 h-6 text-laps-gold" />
                  </div>
                  <h3 className="text-xl font-semibold text-laps-navy mb-2">{link.name}</h3>
                  <p className="text-laps-slate mb-4">{link.description}</p>
                  <span className="flex items-center gap-2 text-laps-gold font-medium group-hover:gap-3 transition-all">
                    Learn More
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Divisions */}
      <section className="py-20 bg-white">
        <div className="container-wide">
          <div className="text-center mb-12">
            <h2 className="section-title">Our Divisions</h2>
            <p className="section-subtitle mx-auto">
              Five specialized verticals delivering excellence
            </p>
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
                  className="block bg-laps-light p-6 hover:shadow-lg transition-shadow border-l-4"
                  style={{ borderColor: division.accentColor }}
                >
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

      {/* CTA Section */}
      <section className="py-20 bg-laps-navy text-white">
        <div className="container-wide">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-6">Ready to Work Together?</h2>
              <p className="text-white/80 text-lg mb-8">
                Whether you need architectural excellence, digital solutions, marketing expertise, 
                event management, or creative photography—we're here to help.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-laps-gold text-laps-navy font-medium hover:bg-white transition-colors"
                >
                  Get in Touch
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  to="/careers"
                  className="inline-flex items-center gap-2 px-6 py-3 border-2 border-white text-white font-medium hover:bg-white hover:text-laps-navy transition-colors"
                >
                  Join Our Team
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
