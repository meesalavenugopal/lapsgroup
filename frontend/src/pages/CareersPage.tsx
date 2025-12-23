import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { MapPin, Clock, Briefcase, ArrowRight, Users, Heart, Zap } from 'lucide-react';
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Join Our Team</h1>
            <p className="text-xl text-white/80 mb-8">
              Be part of a dynamic team driving excellence across multiple industries. 
              We're always looking for talented individuals who share our passion for innovation.
            </p>
            <a
              href="#openings"
              className="inline-flex items-center gap-2 bg-laps-blue text-white px-8 py-4 rounded-lg font-medium hover:bg-blue-600 transition-colors"
            >
              View Open Positions
              <ArrowRight className="w-5 h-5" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="py-20 bg-white">
        <div className="container-wide">
          <div className="text-center mb-12">
            <h2 className="section-title">Why Join LAPS Group?</h2>
            <p className="section-subtitle mx-auto">
              We offer more than just jobs—we offer careers that matter.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-8 bg-laps-light rounded-xl"
              >
                <div className="w-16 h-16 bg-laps-blue/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <benefit.icon className="w-8 h-8 text-laps-blue" />
                </div>
                <h3 className="text-xl font-semibold text-laps-navy mb-3">{benefit.title}</h3>
                <p className="text-laps-slate">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section id="openings" className="py-20 bg-laps-light">
        <div className="container-wide">
          <div className="text-center mb-12">
            <h2 className="section-title">Open Positions</h2>
            <p className="section-subtitle mx-auto">
              Find your next opportunity at LAPS Group
            </p>
          </div>

          <div className="space-y-4 max-w-4xl mx-auto">
            {jobOpenings.map((job, index) => {
              const division = getDivisionInfo(job.division);
              return (
                <motion.div
                  key={job.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <div
                          className="w-2 h-2 rounded-full"
                          style={{ backgroundColor: division?.accentColor }}
                        />
                        <span className="text-sm text-laps-slate">{division?.name}</span>
                      </div>
                      <h3 className="text-xl font-semibold text-laps-navy">{job.title}</h3>
                      <div className="flex flex-wrap items-center gap-4 mt-2 text-sm text-laps-slate">
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
                    <Link
                      to={`/careers/openings/${job.id}`}
                      className="btn-primary whitespace-nowrap"
                    >
                      Apply Now
                    </Link>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {jobOpenings.length === 0 && (
            <div className="text-center py-12">
              <p className="text-laps-slate">No open positions at the moment. Check back later!</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-laps-navy text-white">
        <div className="container-wide text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Don't See the Right Role?
            </h2>
            <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
              We're always interested in hearing from talented individuals. 
              Send us your resume and we'll keep you in mind for future opportunities.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-white text-laps-navy px-8 py-4 rounded-lg font-medium hover:bg-laps-light transition-colors"
            >
              Send Your Resume
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
