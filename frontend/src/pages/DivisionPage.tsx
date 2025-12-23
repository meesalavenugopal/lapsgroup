import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Building2, Code2, Megaphone, PartyPopper, Camera, CheckCircle, Quote } from 'lucide-react';
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

// Division-specific images
const divisionImages: Record<DivisionKey, string[]> = {
  architecture: [
    'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1920&q=80',
    'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1545324418-cc6a8b6347d4?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=800&q=80',
  ],
  apps: [
    'https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=1920&q=80',
    'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1504639725590-34d0984388bd?auto=format&fit=crop&w=800&q=80',
  ],
  ads: [
    'https://images.unsplash.com/photo-1557838923-2985c318be48?auto=format&fit=crop&w=1920&q=80',
    'https://images.unsplash.com/photo-1533750349088-cd871a92f312?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1559136555-9303baea8ebd?auto=format&fit=crop&w=800&q=80',
  ],
  suites: [
    'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1920&q=80',
    'https://images.unsplash.com/photo-1505236858219-8359eb29e329?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=800&q=80',
  ],
  photo: [
    'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=1920&q=80',
    'https://images.unsplash.com/photo-1554048612-b6a482bc67e5?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1542038784456-1ea8e935640e?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1471341971476-ae15ff5dd4ea?auto=format&fit=crop&w=800&q=80',
  ],
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
  const images = divisionImages[division.key];
  const divisionIndex = divisions.findIndex((d) => d.key === divisionKey);
  const prevDivision = divisions[divisionIndex - 1];
  const nextDivision = divisions[divisionIndex + 1];

  return (
    <div className="pt-20">
      {/* Hero Section - Dynamic with Background Image */}
      <section className="relative min-h-[550px] flex items-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src={images[0]} 
            alt={division.name} 
            className="w-full h-full object-cover"
          />
          <div 
            className="absolute inset-0" 
            style={{
              background: `linear-gradient(to right, ${division.accentColor}ee 0%, ${division.accentColor}aa 40%, transparent 100%)`,
            }}
          />
        </div>

        <div className="container-wide relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              {/* Breadcrumb */}
              <div className="flex items-center gap-2 text-white/60 mb-6 text-sm">
                <Link to="/" className="hover:text-white">Home</Link>
                <span>/</span>
                <span>Divisions</span>
                <span>/</span>
                <span className="text-white">{division.name}</span>
              </div>

              <div className="flex items-center gap-4 mb-6">
                <div className="p-4 bg-white/20 backdrop-blur-sm">
                  <Icon className="w-10 h-10 text-white" />
                </div>
                <div>
                  <p className="text-white/60 text-sm uppercase tracking-wider">LAPS</p>
                  <h1 className="text-4xl md:text-6xl font-bold text-white">{division.name}</h1>
                </div>
              </div>

              <p className="text-2xl text-white font-medium mb-4">{division.tagline}</p>
              <p className="text-lg text-white/80 mb-8">{division.description}</p>

              <div className="flex gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white text-laps-navy font-semibold hover:bg-laps-gold hover:text-white transition-colors"
                >
                  Get Started
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <a
                  href="#services"
                  className="inline-flex items-center gap-2 px-6 py-3 border-2 border-white text-white font-semibold hover:bg-white hover:text-laps-navy transition-colors"
                >
                  Our Services
                </a>
              </div>
            </motion.div>

            {/* Right - Quick Stats */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="hidden lg:block"
            >
              <div className="grid grid-cols-2 gap-4">
                {division.stats.map((stat, index) => (
                  <div 
                    key={stat.label} 
                    className="bg-white/10 backdrop-blur-sm p-6 border border-white/20 text-center"
                  >
                    <div className="text-4xl font-bold text-white mb-1">{stat.value}</div>
                    <p className="text-white/70 text-sm">{stat.label}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services - Bento Grid */}
      <section id="services" className="py-20 bg-laps-light">
        <div className="container-wide">
          <div className="mb-10">
            <h2 className="text-2xl font-semibold text-laps-navy inline-block border-b-2 border-laps-navy pb-2">
              Our Services
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-[200px]">
            {/* Large Featured Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="lg:col-span-2 lg:row-span-2 relative overflow-hidden group"
            >
              <img 
                src={images[1]} 
                alt={division.name} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div 
                className="absolute inset-0 flex items-end p-8"
                style={{
                  background: `linear-gradient(to top, ${division.accentColor}ee, ${division.accentColor}60, transparent)`,
                }}
              >
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">Expert Solutions</h3>
                  <p className="text-white/80">Delivering excellence across all our service offerings</p>
                </div>
              </div>
            </motion.div>

            {/* Service Cards */}
            {division.services.slice(0, 4).map((service, index) => (
              <motion.div
                key={service}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 shadow-lg hover:shadow-xl transition-all flex flex-col justify-between group hover:-translate-y-1"
              >
                <div>
                  <div 
                    className="w-12 h-12 flex items-center justify-center mb-4"
                    style={{ backgroundColor: `${division.accentColor}15` }}
                  >
                    <CheckCircle className="w-6 h-6" style={{ color: division.accentColor }} />
                  </div>
                  <h3 className="font-bold text-laps-navy text-lg mb-2">{service}</h3>
                </div>
                <p className="text-sm text-laps-slate">Expert solutions delivered with precision.</p>
              </motion.div>
            ))}

            {/* Small Image Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="relative overflow-hidden group"
            >
              <img 
                src={images[2]} 
                alt="Service" 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div 
                className="absolute inset-0"
                style={{ backgroundColor: `${division.accentColor}60` }}
              />
            </motion.div>

            {/* Remaining Services */}
            {division.services.slice(4).map((service, index) => (
              <motion.div
                key={service}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (index + 5) * 0.1 }}
                className="bg-white p-6 shadow-lg hover:shadow-xl transition-all flex flex-col justify-between group hover:-translate-y-1"
              >
                <div>
                  <div 
                    className="w-12 h-12 flex items-center justify-center mb-4"
                    style={{ backgroundColor: `${division.accentColor}15` }}
                  >
                    <CheckCircle className="w-6 h-6" style={{ color: division.accentColor }} />
                  </div>
                  <h3 className="font-bold text-laps-navy text-lg mb-2">{service}</h3>
                </div>
                <p className="text-sm text-laps-slate">Expert solutions delivered with precision.</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Work - Gallery with Hover Effects */}
      <section className="py-20 bg-white">
        <div className="container-wide">
          <div className="mb-10">
            <h2 className="text-2xl font-semibold text-laps-navy inline-block border-b-2 border-laps-navy pb-2">
              Featured Work
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'Project Alpha', category: 'Commercial', image: images[1] },
              { title: 'Project Beta', category: 'Residential', image: images[2] },
              { title: 'Project Gamma', category: 'Enterprise', image: images[3] },
            ].map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative group overflow-hidden h-[350px] cursor-pointer"
              >
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Overlay */}
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6"
                  style={{
                    background: `linear-gradient(to top, ${division.accentColor}ee, ${division.accentColor}80, transparent)`,
                  }}
                >
                  <p className="text-white/70 text-sm uppercase tracking-wider">{project.category}</p>
                  <h3 className="text-xl font-bold text-white">{project.title}</h3>
                </div>
                {/* Bottom Bar */}
                <div 
                  className="absolute bottom-0 left-0 right-0 h-1 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"
                  style={{ backgroundColor: division.accentColor }}
                />
              </motion.div>
            ))}
          </div>

          {/* View All Button */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-10"
          >
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 border-2 border-laps-navy text-laps-navy font-semibold hover:bg-laps-navy hover:text-white transition-colors"
            >
              View All Projects
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-20 bg-laps-light">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative h-[400px] overflow-hidden"
            >
              <img 
                src={images[3]} 
                alt="Client" 
                className="w-full h-full object-cover"
              />
              <div 
                className="absolute top-4 left-4 p-3"
                style={{ backgroundColor: division.accentColor }}
              >
                <Quote className="w-6 h-6 text-white" />
              </div>
            </motion.div>

            {/* Testimonial */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl font-semibold text-laps-navy inline-block border-b-2 border-laps-navy pb-2 mb-8">
                Client Testimonial
              </h2>
              <blockquote className="text-2xl text-laps-slate italic mb-6 leading-relaxed">
                "Working with {division.name} has been an exceptional experience. Their team delivered 
                beyond our expectations with unmatched professionalism and creativity."
              </blockquote>
              <div>
                <p className="font-bold text-laps-navy">Rajesh Kumar</p>
                <p className="text-laps-slate">CEO, TechVentures India</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src={images[0]} 
            alt="CTA Background" 
            className="w-full h-full object-cover"
          />
          <div 
            className="absolute inset-0"
            style={{
              background: `linear-gradient(135deg, ${division.accentColor}ee 0%, #0A1628ee 100%)`,
            }}
          />
        </div>

        <div className="container-wide relative z-10 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Ready to Work Together?
            </h2>
            <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">
              Let's discuss how {division.name} can help bring your vision to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 bg-white text-laps-navy px-8 py-4 font-semibold hover:bg-laps-gold hover:text-white transition-colors"
              >
                Get in Touch
                <ArrowRight className="w-5 h-5" />
              </Link>
              <a
                href={`tel:+919876543210`}
                className="inline-flex items-center justify-center gap-2 border-2 border-white text-white px-8 py-4 font-semibold hover:bg-white hover:text-laps-navy transition-colors"
              >
                Call Us Now
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Division Navigation - Enhanced */}
      <section className="py-8 bg-laps-navy">
        <div className="container-wide">
          <div className="flex items-center justify-between">
            {prevDivision ? (
              <Link
                to={`/${prevDivision.slug}`}
                className="flex items-center gap-3 text-white/70 hover:text-white transition-colors group"
              >
                <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                <div>
                  <p className="text-xs text-white/50 uppercase tracking-wider">Previous</p>
                  <span className="font-medium">{prevDivision.name}</span>
                </div>
              </Link>
            ) : (
              <div />
            )}

            <Link
              to="/"
              className="text-laps-gold font-medium hover:text-white transition-colors hidden sm:block"
            >
              All Divisions
            </Link>

            {nextDivision ? (
              <Link
                to={`/${nextDivision.slug}`}
                className="flex items-center gap-3 text-white/70 hover:text-white transition-colors group text-right"
              >
                <div>
                  <p className="text-xs text-white/50 uppercase tracking-wider">Next</p>
                  <span className="font-medium">{nextDivision.name}</span>
                </div>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
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
