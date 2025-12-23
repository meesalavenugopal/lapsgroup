import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Users } from 'lucide-react';
import { divisions } from '@/data/content';

const divisionImages: Record<string, string> = {
  architecture: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&w=800&q=80',
  apps: 'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=800&q=80',
  ads: 'https://images.unsplash.com/photo-1557838923-2985c318be48?auto=format&fit=crop&w=800&q=80',
  suites: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=800&q=80',
  photo: 'https://images.unsplash.com/photo-1542038784456-1ea8e935640e?auto=format&fit=crop&w=800&q=80',
};

export function DivisionsSection() {
  const [featuredIndex, setFeaturedIndex] = useState(0);
  const featuredDivisions = divisions.slice(0, 3);

  useEffect(() => {
    const interval = setInterval(() => {
      setFeaturedIndex((prev) => (prev + 1) % featuredDivisions.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [featuredDivisions.length]);

  return (
    <section className="py-20 bg-white" id="divisions">
      <div className="container-wide">
        {/* Section Header */}
        <div className="mb-10">
          <h2 className="text-2xl font-semibold text-laps-navy inline-block border-b-2 border-laps-navy pb-2">
            Our Divisions
          </h2>
        </div>

        {/* Top Row - 2 Image Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mb-5">
          {/* Left - Large Image Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Link 
              to={`/${divisions[0].slug}`}
              className="block relative h-[320px] overflow-hidden group"
            >
              <img
                src={divisionImages[divisions[0].key]}
                alt={divisions[0].name}
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

          {/* Right - Colored Card with Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <Link 
              to={`/${divisions[1].slug}`}
              className="block relative h-[320px] overflow-hidden group"
            >
              {/* Full width background image */}
              <img
                src={divisionImages[divisions[1].key]}
                alt={divisions[1].name}
                className="absolute inset-0 w-full h-full object-cover"
              />
              {/* Color gradient overlay that blends from left to right */}
              <div 
                className="absolute inset-0"
                style={{ 
                  background: `linear-gradient(to right, ${divisions[1].accentColor} 0%, ${divisions[1].accentColor} 30%, ${divisions[1].accentColor}99 50%, transparent 100%)` 
                }}
              />
              <div className="absolute inset-0 p-8 flex flex-col justify-center">
                <span className="text-white/80 text-xs font-semibold tracking-wider uppercase mb-2">
                  {divisions[1].tagline}
                </span>
                <h3 className="text-2xl font-bold text-white mb-3">
                  {divisions[1].name}
                </h3>
                <div className="flex items-start gap-2 max-w-sm">
                  <div className="w-1 h-full min-h-[40px] bg-white/40"></div>
                  <p className="text-white/80 text-sm leading-relaxed">
                    {divisions[1].description}
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {/* Card 1 - Division Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white border border-gray-200 p-6 flex flex-col relative group cursor-pointer hover:shadow-lg transition-shadow"
          >
            <Link to={`/${divisions[2].slug}`} className="block h-full">
              <span className="text-laps-blue text-xs font-semibold tracking-wider uppercase">
                Division
              </span>
              <h3 className="text-xl font-bold text-laps-navy mt-4 mb-4">
                {divisions[2].name}
              </h3>
              <div className="flex items-start gap-2">
                <div className="w-1 h-full min-h-[50px] bg-laps-gold"></div>
                <p className="text-laps-slate text-sm leading-relaxed">
                  {divisions[2].description}
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
            className="bg-white border border-gray-200 p-6 flex flex-col items-center justify-center text-center relative group cursor-pointer hover:shadow-lg transition-shadow"
          >
            <Link to="/about" className="block">
              <span className="text-laps-gold text-xs font-semibold tracking-wider uppercase">
                In Numbers
              </span>
              <div className="mt-6 mb-2">
                <Users className="w-10 h-10 text-laps-slate/50 mx-auto" />
              </div>
              <div className="text-4xl font-bold text-laps-blue">100+</div>
              <p className="text-laps-slate mt-2">
                Team Members across<br />all divisions
              </p>
              <div className="absolute bottom-6 right-6">
                <ArrowRight className="w-5 h-5 text-laps-gold group-hover:translate-x-2 transition-transform" />
              </div>
            </Link>
          </motion.div>

          {/* Card 3 - Featured Divisions Carousel */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="p-6 flex flex-col relative overflow-hidden"
            style={{ background: 'linear-gradient(135deg, #0A1628 0%, #0066CC 100%)' }}
          >
            <span className="text-white/80 text-xs font-semibold tracking-wider uppercase">
              Explore
            </span>
            <h3 className="text-xl font-bold text-white mt-2 mb-4">
              Featured Divisions
            </h3>
            
            <div className="flex-1 flex flex-col gap-3">
              {featuredDivisions.map((division, idx) => (
                <Link
                  key={division.key}
                  to={`/${division.slug}`}
                  className={`flex items-start gap-2 p-2 transition-all ${
                    idx === featuredIndex ? 'bg-white/10' : 'hover:bg-white/5'
                  }`}
                >
                  <div className="w-1 h-full min-h-[30px] bg-laps-gold"></div>
                  <div>
                    <p className="text-white font-medium text-sm">{division.name}</p>
                    <p className="text-white/60 text-xs">{division.tagline}</p>
                  </div>
                </Link>
              ))}
            </div>

            {/* Carousel Dots */}
            <div className="flex items-center justify-center gap-2 mt-4">
              {featuredDivisions.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setFeaturedIndex(idx)}
                  className={`w-2 h-2 transition-all ${
                    idx === featuredIndex ? 'bg-white w-4' : 'bg-white/40'
                  }`}
                />
              ))}
            </div>

            <div className="absolute bottom-6 right-6">
              <ArrowRight className="w-5 h-5 text-laps-gold" />
            </div>
          </motion.div>
        </div>

        {/* Remaining Divisions - Small Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mt-5">
          {divisions.slice(3).map((division, index) => (
            <motion.div
              key={division.key}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Link 
                to={`/${division.slug}`}
                className="block relative h-[150px] overflow-hidden group"
              >
                <img
                  src={divisionImages[division.key]}
                  alt={division.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-laps-navy via-laps-navy/40 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <h4 className="text-white font-semibold text-sm">{division.name}</h4>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
