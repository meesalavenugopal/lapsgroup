import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, MapPin, Users } from 'lucide-react';
import { jobOpenings, companyStats, divisions } from '@/data/content';

const careerImages = [
  'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=800&q=80',
];

export function CareersSection() {
  const [featuredJobIndex, setFeaturedJobIndex] = useState(0);
  const featuredJobs = jobOpenings.slice(0, 3);

  useEffect(() => {
    const interval = setInterval(() => {
      setFeaturedJobIndex((prev) => (prev + 1) % featuredJobs.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [featuredJobs.length]);

  const getDivisionName = (key: string) => {
    const division = divisions.find((d) => d.key === key);
    return division?.name || key;
  };

  return (
    <section className="py-20 bg-white">
      <div className="container-wide">
        {/* Section Header */}
        <div className="mb-10">
          <div className="flex items-center gap-4">
            <div className="w-1 h-8 bg-laps-blue"></div>
            <h2 className="text-2xl font-semibold text-laps-navy">Careers</h2>
          </div>
        </div>

        {/* Top Row - 2 Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          {/* Left - Image Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Link 
              to="/careers"
              className="block relative h-[320px] rounded-xl overflow-hidden group"
            >
              <img
                src={careerImages[0]}
                alt="Careers at LAPS"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              {/* Triangle accent */}
              <div 
                className="absolute bottom-0 left-8 w-0 h-0"
                style={{
                  borderLeft: '20px solid transparent',
                  borderRight: '20px solid transparent',
                  borderBottom: '20px solid white',
                }}
              />
            </Link>
          </motion.div>

          {/* Right - Green/Teal Card with Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <Link 
              to="/careers"
              className="block relative h-[320px] rounded-xl overflow-hidden group"
              style={{ backgroundColor: '#2D5016' }}
            >
              <img
                src={careerImages[1]}
                alt="Join our team"
                className="absolute right-0 top-0 w-2/3 h-full object-cover opacity-40"
              />
              <div className="absolute inset-0 p-8 flex flex-col justify-center">
                <span className="text-white/80 text-xs font-semibold tracking-wider uppercase mb-2">
                  Join Our Team
                </span>
                <h3 className="text-2xl font-bold text-white mb-3">
                  LAPS Career<br />Opportunities 2025
                </h3>
                <div className="flex items-start gap-2 max-w-sm">
                  <div className="w-1 h-full min-h-[40px] bg-white/40"></div>
                  <p className="text-white/80 text-sm leading-relaxed">
                    We're always looking for talented individuals to join our growing team. Explore opportunities across all divisions.
                  </p>
                </div>
              </div>
              <div className="absolute bottom-6 right-6">
                <ArrowRight className="w-6 h-6 text-white group-hover:translate-x-2 transition-transform" />
              </div>
            </Link>
          </motion.div>
        </div>

        {/* Bottom Row - 3 Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Card 1 - Beware of Scams */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white border border-gray-200 rounded-xl p-6 flex flex-col relative group cursor-pointer hover:shadow-lg transition-shadow"
          >
            <Link to="/careers" className="block h-full">
              <span className="text-laps-blue text-xs font-semibold tracking-wider uppercase">
                Careers
              </span>
              <h3 className="text-xl font-bold text-laps-navy mt-4 mb-4">
                Beware of Job Scams
              </h3>
              <div className="flex items-start gap-2">
                <div className="w-1 h-full min-h-[50px] bg-laps-gold"></div>
                <p className="text-laps-slate text-sm leading-relaxed">
                  We do not charge/accept any amount or security deposit from job seekers. Read disclaimer.
                </p>
              </div>
              <div className="absolute bottom-6 right-6">
                <ArrowRight className="w-5 h-5 text-laps-gold group-hover:translate-x-2 transition-transform" />
              </div>
            </Link>
          </motion.div>

          {/* Card 2 - In Numbers */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-white border border-gray-200 rounded-xl p-6 flex flex-col items-center justify-center text-center relative group cursor-pointer hover:shadow-lg transition-shadow"
          >
            <Link to="/about" className="block">
              <span className="text-laps-gold text-xs font-semibold tracking-wider uppercase">
                In Numbers
              </span>
              <div className="mt-6 mb-2">
                <Users className="w-10 h-10 text-laps-slate/50 mx-auto" />
              </div>
              <div className="text-4xl font-bold text-laps-blue">{companyStats.employees}</div>
              <p className="text-laps-slate mt-2">
                Employees at the LAPS<br />Group
              </p>
              <div className="absolute bottom-6 right-6">
                <ArrowRight className="w-5 h-5 text-laps-gold group-hover:translate-x-2 transition-transform" />
              </div>
            </Link>
          </motion.div>

          {/* Card 3 - Featured Jobs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="rounded-xl p-6 flex flex-col relative overflow-hidden"
            style={{ background: 'linear-gradient(135deg, #0A1628 0%, #0066CC 100%)' }}
          >
            <span className="text-white/80 text-xs font-semibold tracking-wider uppercase">
              Careers
            </span>
            <h3 className="text-xl font-bold text-white mt-2 mb-4">
              Featured Jobs
            </h3>
            
            <div className="flex-1 flex flex-col gap-3">
              {featuredJobs.map((job, idx) => (
                <Link
                  key={job.id}
                  to={`/careers/openings/${job.id}`}
                  className={`flex items-start gap-2 p-2 rounded transition-all ${
                    idx === featuredJobIndex ? 'bg-white/10' : 'hover:bg-white/5'
                  }`}
                >
                  <div className="w-1 h-full min-h-[30px] bg-laps-gold"></div>
                  <div>
                    <p className="text-white font-medium text-sm">{job.title}</p>
                    <p className="text-white/60 text-xs flex items-center gap-1">
                      {getDivisionName(job.division)}
                      <MapPin className="w-3 h-3 ml-1" />
                      {job.location}
                    </p>
                  </div>
                </Link>
              ))}
            </div>

            {/* Carousel Dots */}
            <div className="flex items-center justify-center gap-2 mt-4">
              {featuredJobs.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setFeaturedJobIndex(idx)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    idx === featuredJobIndex ? 'bg-white w-4' : 'bg-white/40'
                  }`}
                />
              ))}
            </div>

            <div className="absolute bottom-6 right-6">
              <ArrowRight className="w-5 h-5 text-laps-gold" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
