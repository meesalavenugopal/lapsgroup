import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, MapPin, Users, AlertTriangle } from 'lucide-react';
import { jobOpenings, companyStats, divisions } from '@/data/content';

export function CareersSection() {
  const getDivisionName = (key: string) => {
    const division = divisions.find((d) => d.key === key);
    return division?.name || key;
  };

  return (
    <section className="py-20 bg-laps-light">
      <div className="container-wide">
        {/* Section Header */}
        <div className="flex items-center justify-between mb-12">
          <div className="inline-block px-4 py-2 bg-laps-navy rounded-lg">
            <h2 className="text-xl font-semibold text-white">Careers</h2>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Beware of Scams Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-xl p-6 shadow-lg"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-red-100 rounded-lg">
                <AlertTriangle className="w-5 h-5 text-red-600" />
              </div>
              <h3 className="font-semibold text-laps-navy">Beware of Job Scams</h3>
            </div>
            <p className="text-sm text-laps-slate mb-4">
              We do not charge any amount for our recruitment process. Beware of fraudulent emails and calls.
            </p>
            <Link to="/careers" className="text-laps-blue text-sm font-medium hover:underline">
              Read Guidelines
            </Link>
          </motion.div>

          {/* Stats Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-white rounded-xl p-6 shadow-lg flex flex-col items-center justify-center text-center"
          >
            <Users className="w-12 h-12 text-laps-blue mb-4" />
            <div className="text-4xl font-bold text-laps-navy mb-2">
              {companyStats.employees}
            </div>
            <p className="text-laps-slate">Employees at the LAPS Group</p>
          </motion.div>

          {/* Featured Jobs Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-laps-blue rounded-xl p-6 text-white"
          >
            <h3 className="font-semibold mb-4">Featured Jobs</h3>
            <div className="space-y-4">
              {jobOpenings.slice(0, 3).map((job) => (
                <Link
                  key={job.id}
                  to={`/careers/openings/${job.id}`}
                  className="block p-3 bg-white/10 rounded-lg hover:bg-white/20 transition-colors"
                >
                  <div className="font-medium text-sm">{job.title}</div>
                  <div className="flex items-center gap-2 text-xs text-white/70 mt-1">
                    <span>{getDivisionName(job.division)}</span>
                    <span>•</span>
                    <div className="flex items-center gap-1">
                      <MapPin className="w-3 h-3" />
                      {job.location}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
            <Link
              to="/careers/openings"
              className="flex items-center gap-2 text-sm font-medium mt-4 hover:text-laps-gold transition-colors"
            >
              View All Openings
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
