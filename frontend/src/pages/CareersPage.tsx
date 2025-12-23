import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { MapPin, Clock, Briefcase, ArrowRight, Users, Heart, Zap, Target, Award, Building2 } from 'lucide-react';
import { jobOpenings, divisions } from '@/data/content';

export function CareersPage() {
  const getDivisionInfo = (key: string) => {
    return divisions.find((d) => d.key === key);
  };

  const benefits = [
    {
      icon: Heart,
      title: 'Health & Wellness',
      description: 'Comprehensive health insurance for you and your family.',
    },
    {
      icon: Users,
      title: 'Collaborative Culture',
      description: 'Work with talented people across all our divisions.',
    },
    {
      icon: Zap,
      title: 'Growth Opportunities',
      description: 'Continuous learning and career development programs.',
    },
  ];

  const stats = [
    { value: '200+', label: 'Team Members' },
    { value: '5', label: 'Divisions' },
    { value: '95%', label: 'Retention Rate' },
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1920&q=80"
            alt="Team collaboration"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-laps-navy via-laps-navy/90 to-laps-navy/70" />
        </div>

        <div className="container-wide relative z-10 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <div className="flex items-center gap-2 mb-6">
                <Target className="w-5 h-5 text-laps-gold" />
                <span className="text-laps-gold text-sm font-medium uppercase tracking-wider">Careers</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Join Our Team
              </h1>
              <p className="text-xl text-white/80 mb-8 max-w-xl">
                Be part of a dynamic team driving excellence across multiple industries. 
                We're always looking for talented individuals who share our passion for innovation.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="#openings"
                  className="inline-flex items-center gap-2 bg-laps-gold text-laps-navy px-8 py-4 font-medium hover:bg-laps-gold/90 transition-colors"
                >
                  View Open Positions
                  <ArrowRight className="w-5 h-5" />
                </a>
                <a
                  href="#culture"
                  className="inline-flex items-center gap-2 border-2 border-white/30 text-white px-8 py-4 font-medium hover:bg-white/10 transition-colors"
                >
                  Our Culture
                </a>
              </div>
            </motion.div>

            {/* Right Column - Stats & Image */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="hidden lg:block"
            >
              <div className="relative">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80"
                    alt="Team at work"
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Stats Overlay */}
                <div className="absolute -bottom-8 left-0 right-0 mx-4">
                  <div className="grid grid-cols-3 gap-2">
                    {stats.map((stat, index) => (
                      <motion.div
                        key={stat.label}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 + index * 0.1 }}
                        className="bg-white p-4 text-center shadow-lg"
                      >
                        <div className="text-2xl font-bold text-laps-navy">{stat.value}</div>
                        <div className="text-xs text-laps-slate">{stat.label}</div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Join Us - Bento Grid */}
      <section id="culture" className="py-24 bg-white">
        <div className="container-wide">
          <div className="mb-10">
            <h2 className="text-2xl font-semibold text-laps-navy inline-block border-b-2 border-laps-navy pb-2">
              Why Join LAPS Group?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {/* Large Feature Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="md:col-span-2 relative overflow-hidden min-h-[300px]"
            >
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80"
                alt="Team collaboration"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-laps-navy via-laps-navy/60 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <div className="flex items-center gap-2 mb-3">
                  <Award className="w-5 h-5 text-laps-gold" />
                  <span className="text-laps-gold text-sm font-medium">Culture First</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Build Your Career Here</h3>
                <p className="text-white/70">Join a team that values growth, creativity, and work-life balance.</p>
              </div>
            </motion.div>

            {/* Benefit Cards */}
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-8 bg-laps-light hover:bg-laps-navy hover:text-white transition-all duration-300 group"
              >
                <div className="w-14 h-14 bg-laps-blue/10 group-hover:bg-white/10 flex items-center justify-center mb-6 transition-colors">
                  <benefit.icon className="w-7 h-7 text-laps-blue group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-semibold text-laps-navy group-hover:text-white mb-3 transition-colors">{benefit.title}</h3>
                <p className="text-laps-slate group-hover:text-white/70 transition-colors">{benefit.description}</p>
              </motion.div>
            ))}

            {/* Division Diversity Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="p-8 bg-laps-navy text-white"
            >
              <Building2 className="w-10 h-10 text-laps-gold mb-6" />
              <h3 className="text-xl font-semibold mb-3">5 Unique Divisions</h3>
              <p className="text-white/70 mb-4">Find your perfect fit across our diverse business verticals.</p>
              <div className="flex flex-wrap gap-2">
                {divisions.slice(0, 3).map((div) => (
                  <span
                    key={div.key}
                    className="px-2 py-1 text-xs"
                    style={{ backgroundColor: `${div.accentColor}20`, color: div.accentColor }}
                  >
                    {div.name.split(' ').pop()}
                  </span>
                ))}
                <span className="px-2 py-1 text-xs bg-white/10 text-white/60">+2 more</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section id="openings" className="py-24 bg-laps-light">
        <div className="container-wide">
          <div className="mb-10">
            <h2 className="text-2xl font-semibold text-laps-navy inline-block border-b-2 border-laps-navy pb-2">
              Open Positions
            </h2>
            <p className="text-laps-slate mt-4 max-w-2xl">
              Explore current opportunities across all our divisions. We're looking for passionate individuals ready to make an impact.
            </p>
          </div>

          <div className="space-y-4">
            {jobOpenings.map((job, index) => {
              const division = getDivisionInfo(job.division);
              return (
                <motion.div
                  key={job.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white p-6 shadow-lg hover:shadow-xl transition-all group hover:-translate-y-1"
                >
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                    <div className="flex gap-4">
                      {/* Division Color Bar */}
                      <div
                        className="w-1 self-stretch hidden sm:block"
                        style={{ backgroundColor: division?.accentColor }}
                      />
                      <div>
                        <div className="flex items-center gap-3 mb-2">
                          <span
                            className="px-3 py-1 text-sm font-medium"
                            style={{
                              backgroundColor: `${division?.accentColor}15`,
                              color: division?.accentColor,
                            }}
                          >
                            {division?.name}
                          </span>
                        </div>
                        <h3 className="text-xl font-semibold text-laps-navy group-hover:text-laps-blue transition-colors">{job.title}</h3>
                        <div className="flex flex-wrap items-center gap-4 mt-3 text-sm text-laps-slate">
                          <span className="flex items-center gap-1">
                            <MapPin className="w-4 h-4" />
                            {job.location}
                          </span>
                          <span className="flex items-center gap-1">
                            <Briefcase className="w-4 h-4" />
                            {job.type}
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            {job.experience}
                          </span>
                        </div>
                      </div>
                    </div>
                    <Link
                      to={`/careers/openings/${job.id}`}
                      className="inline-flex items-center gap-2 bg-laps-navy text-white px-6 py-3 font-medium hover:bg-laps-blue transition-colors whitespace-nowrap"
                    >
                      Apply Now
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {jobOpenings.length === 0 && (
            <div className="text-center py-12 bg-white">
              <Briefcase className="w-12 h-12 text-laps-slate/30 mx-auto mb-4" />
              <p className="text-laps-slate">No open positions at the moment. Check back later!</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24">
        {/* Background */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1920&q=80"
            alt="Team meeting"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-laps-navy/90" />
        </div>

        <div className="container-wide relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Don't See the Right Role?
              </h2>
              <p className="text-xl text-white/70">
                We're always interested in hearing from talented individuals. 
                Send us your resume and we'll keep you in mind for future opportunities.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="flex flex-col sm:flex-row gap-4 lg:justify-end"
            >
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 bg-laps-gold text-laps-navy px-8 py-4 font-medium hover:bg-laps-gold/90 transition-colors"
              >
                Send Your Resume
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/about"
                className="inline-flex items-center justify-center gap-2 border-2 border-white/30 text-white px-8 py-4 font-medium hover:bg-white/10 transition-colors"
              >
                Learn About Us
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
