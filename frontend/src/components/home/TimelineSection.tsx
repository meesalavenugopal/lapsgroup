import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { timelineEvents } from '@/data/content';

export function TimelineSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextEvent = () => {
    setActiveIndex((prev) => (prev + 1) % timelineEvents.length);
  };

  const prevEvent = () => {
    setActiveIndex((prev) => (prev - 1 + timelineEvents.length) % timelineEvents.length);
  };

  return (
    <section className="py-20 bg-laps-light">
      <div className="container-wide">
        {/* Section Header */}
        <div className="mb-10">
          <div className="flex items-center gap-4">
            <div className="w-1 h-8 bg-laps-blue"></div>
            <h2 className="text-2xl font-semibold text-laps-navy">Our Journey</h2>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left - Large Timeline Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 relative rounded-xl overflow-hidden"
            style={{ background: 'linear-gradient(135deg, #0A1628 0%, #1a2d4a 100%)' }}
          >
            <div className="p-8 md:p-10 min-h-[400px] flex flex-col">
              {/* Year Display */}
              <div className="flex items-center gap-4 mb-6">
                <span className="text-6xl md:text-8xl font-bold text-white/20">
                  {timelineEvents[activeIndex].year}
                </span>
              </div>

              {/* Event Content */}
              <div className="flex-1">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <span className="text-laps-gold text-sm font-medium">
                    {timelineEvents[activeIndex].year}
                  </span>
                  <h3 className="text-2xl md:text-3xl font-bold text-white mt-2 mb-4">
                    {timelineEvents[activeIndex].title}
                  </h3>
                  <div className="flex items-start gap-3">
                    <div className="w-1 h-full min-h-[60px] bg-laps-gold"></div>
                    <p className="text-white/70 text-base leading-relaxed max-w-lg">
                      {timelineEvents[activeIndex].description}
                    </p>
                  </div>
                </motion.div>
              </div>

              {/* Navigation */}
              <div className="flex items-center justify-between mt-8">
                <div className="flex items-center gap-4">
                  <button
                    onClick={prevEvent}
                    className="p-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={nextEvent}
                    className="p-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>

                {/* Progress Dots */}
                <div className="flex items-center gap-2">
                  {timelineEvents.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveIndex(idx)}
                      className={`h-1.5 rounded-full transition-all ${
                        idx === activeIndex 
                          ? 'bg-laps-gold w-6' 
                          : 'bg-white/30 w-3 hover:bg-white/50'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column - 2 Stacked Cards */}
          <div className="flex flex-col gap-6">
            {/* Stats Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white border border-gray-200 rounded-xl p-6 flex-1"
            >
              <span className="text-laps-gold text-xs font-semibold tracking-wider uppercase">
                In Numbers
              </span>
              <div className="mt-6 grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-laps-blue">4+</div>
                  <p className="text-laps-slate text-xs mt-1">Years</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-laps-blue">5</div>
                  <p className="text-laps-slate text-xs mt-1">Divisions</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-laps-blue">15+</div>
                  <p className="text-laps-slate text-xs mt-1">Cities</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-laps-blue">100+</div>
                  <p className="text-laps-slate text-xs mt-1">Team</p>
                </div>
              </div>
            </motion.div>

            {/* About Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white border border-gray-200 rounded-xl p-6 flex-1 relative group cursor-pointer hover:shadow-lg transition-shadow"
            >
              <Link to="/about" className="block h-full">
                <span className="text-laps-blue text-xs font-semibold tracking-wider uppercase">
                  About Us
                </span>
                <h3 className="text-xl font-bold text-laps-navy mt-4 mb-4">
                  Our Story
                </h3>
                <div className="flex items-start gap-2">
                  <div className="w-1 h-full min-h-[50px] bg-laps-gold"></div>
                  <p className="text-laps-slate text-sm leading-relaxed">
                    Founded over 4 years ago, LAPS Group embodies the story of entrepreneurship and innovation.
                  </p>
                </div>
                <div className="absolute bottom-6 right-6">
                  <ArrowRight className="w-5 h-5 text-laps-gold group-hover:translate-x-2 transition-transform" />
                </div>
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Bottom Timeline Markers */}
        <div className="mt-10 hidden md:block">
          <div className="relative">
            <div className="absolute left-0 right-0 top-1/2 h-px bg-gray-300" />
            <div className="flex justify-between relative">
              {timelineEvents.map((event, idx) => (
                <button
                  key={event.year}
                  onClick={() => setActiveIndex(idx)}
                  className="flex flex-col items-center group"
                >
                  <div 
                    className={`w-4 h-4 rounded-full border-2 transition-all ${
                      idx === activeIndex 
                        ? 'bg-laps-gold border-laps-gold scale-125' 
                        : 'bg-white border-gray-300 group-hover:border-laps-blue'
                    }`}
                  />
                  <span 
                    className={`mt-3 text-sm font-medium transition-colors ${
                      idx === activeIndex ? 'text-laps-navy' : 'text-laps-slate group-hover:text-laps-blue'
                    }`}
                  >
                    {event.year}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
