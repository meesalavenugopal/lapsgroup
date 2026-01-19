import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { timelineEvents } from '@/data/content';

// Background images for the tilted grid
const bgImages = [
  'https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&w=400&q=80', // Architecture
  'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=400&q=80', // Apps/Tech
  'https://images.unsplash.com/photo-1557838923-2985c318be48?auto=format&fit=crop&w=400&q=80', // Marketing/Ads
  'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=400&q=80', // Events/Suites
  'https://images.unsplash.com/photo-1542038784456-1ea8e935640e?auto=format&fit=crop&w=400&q=80', // Photography
  'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=400&q=80', // Office
  'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=400&q=80', // Team
  'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=400&q=80', // Analytics
  'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=400&q=80', // Workspace
  'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=400&q=80', // Meeting
  'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=400&q=80', // Collaboration
  'https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=400&q=80', // Design
];

export function TimelineSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextEvent = () => {
    setActiveIndex((prev) => (prev + 1) % timelineEvents.length);
  };

  const prevEvent = () => {
    setActiveIndex((prev) => (prev - 1 + timelineEvents.length) % timelineEvents.length);
  };

  return (
    <section className="py-20 relative overflow-hidden min-h-[700px]">
      {/* Tilted Image Grid Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div 
          className="absolute inset-0 flex gap-4"
          style={{ 
            transform: 'rotate(-12deg) scale(1.5)',
            transformOrigin: 'center center',
            top: '-20%',
            left: '-10%',
            width: '120%',
            height: '140%'
          }}
        >
          {/* Column 1 */}
          <div className="flex flex-col gap-4 animate-scroll-up" style={{ animationDuration: '60s' }}>
            {[...bgImages.slice(0, 4), ...bgImages.slice(0, 4)].map((img, i) => (
              <div key={`col1-${i}`} className="w-48 h-64 overflow-hidden shadow-lg flex-shrink-0">
                <img src={img} alt="" className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
          {/* Column 2 */}
          <div className="flex flex-col gap-4 animate-scroll-down" style={{ animationDuration: '70s', marginTop: '-100px' }}>
            {[...bgImages.slice(4, 8), ...bgImages.slice(4, 8)].map((img, i) => (
              <div key={`col2-${i}`} className="w-48 h-64 overflow-hidden shadow-lg flex-shrink-0">
                <img src={img} alt="" className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
          {/* Column 3 */}
          <div className="flex flex-col gap-4 animate-scroll-up" style={{ animationDuration: '55s', marginTop: '-50px' }}>
            {[...bgImages.slice(8, 12), ...bgImages.slice(8, 12)].map((img, i) => (
              <div key={`col3-${i}`} className="w-48 h-64 overflow-hidden shadow-lg flex-shrink-0">
                <img src={img} alt="" className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
          {/* Column 4 */}
          <div className="flex flex-col gap-4 animate-scroll-down" style={{ animationDuration: '65s', marginTop: '-150px' }}>
            {[...bgImages.slice(0, 4), ...bgImages.slice(0, 4)].map((img, i) => (
              <div key={`col4-${i}`} className="w-48 h-64 overflow-hidden shadow-lg flex-shrink-0">
                <img src={img} alt="" className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
          {/* Column 5 */}
          <div className="flex flex-col gap-4 animate-scroll-up" style={{ animationDuration: '52s', marginTop: '-80px' }}>
            {[...bgImages.slice(4, 8), ...bgImages.slice(4, 8)].map((img, i) => (
              <div key={`col5-${i}`} className="w-48 h-64 overflow-hidden shadow-lg flex-shrink-0">
                <img src={img} alt="" className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
          {/* Column 6 */}
          <div className="flex flex-col gap-4 animate-scroll-down" style={{ animationDuration: '68s', marginTop: '-120px' }}>
            {[...bgImages.slice(8, 12), ...bgImages.slice(8, 12)].map((img, i) => (
              <div key={`col6-${i}`} className="w-48 h-64 overflow-hidden shadow-lg flex-shrink-0">
                <img src={img} alt="" className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
          {/* Column 7 */}
          <div className="flex flex-col gap-4 animate-scroll-up" style={{ animationDuration: '58s', marginTop: '-40px' }}>
            {[...bgImages.slice(0, 4), ...bgImages.slice(0, 4)].map((img, i) => (
              <div key={`col7-${i}`} className="w-48 h-64 overflow-hidden shadow-lg flex-shrink-0">
                <img src={img} alt="" className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
          {/* Column 8 */}
          <div className="flex flex-col gap-4 animate-scroll-down" style={{ animationDuration: '62s', marginTop: '-90px' }}>
            {[...bgImages.slice(4, 8), ...bgImages.slice(4, 8)].map((img, i) => (
              <div key={`col8-${i}`} className="w-48 h-64 overflow-hidden shadow-lg flex-shrink-0">
                <img src={img} alt="" className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
        </div>
        {/* Colored overlay for content readability */}
        <div className="absolute inset-0 bg-laps-navy/60" />
        {/* Dotted Pattern Overlay */}
        <div 
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.15) 1px, transparent 1px)',
            backgroundSize: '4px 4px'
          }}
        />
      </div>

      <div className="container-wide relative z-10">
        {/* Section Header */}
        <div className="mb-10">
          <h2 className="text-2xl font-semibold text-white inline-block border-b-2 border-laps-gold pb-2">
            Our Journey
          </h2>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          {/* Left - Large Timeline Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 relative overflow-hidden"
            style={{ background: 'linear-gradient(135deg, #0066CC 0%, #004999 100%)' }}
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
                    className="p-2 bg-white/10 text-white hover:bg-white/20 transition-colors"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={nextEvent}
                    className="p-2 bg-white/10 text-white hover:bg-white/20 transition-colors"
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
                      className={`h-1.5 transition-all ${
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
              className="relative overflow-visible bg-laps-blue"
            >
              <div className="p-6">
                <span className="text-white/80 text-xs font-semibold tracking-wider uppercase">
                  Did you know
                </span>
                <h3 className="text-lg font-bold text-white mt-2 mb-3">
                  LAPS Global Impact
                </h3>
                <div className="flex items-start gap-3">
                  <div className="w-1 min-h-[50px] bg-laps-gold flex-shrink-0"></div>
                  <p className="text-white/80 text-sm leading-relaxed">
                    With 5 thriving divisions and 100+ team members, LAPS Global has expanded to 15+ cities in just 4 years.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* About Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="relative p-6 min-h-[200px] overflow-hidden group cursor-pointer"
            >
              {/* Background Image */}
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=600&q=80)' }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-laps-navy via-laps-navy/80 to-laps-navy/40" />
              <Link to="/about" className="relative block h-full z-10">
                <span className="text-laps-gold text-xs font-semibold tracking-wider uppercase">
                  About Us
                </span>
                <h3 className="text-xl font-bold text-white mt-4 mb-4">
                  Our Story
                </h3>
                <div className="flex items-start gap-2">
                  <div className="w-1 h-full min-h-[50px] bg-laps-gold"></div>
                  <p className="text-white/80 text-sm leading-relaxed">
                    Founded over 4 years ago, LAPS Global embodies the story of entrepreneurship and innovation.
                  </p>
                </div>
                <div className="absolute bottom-0 right-0">
                  <ArrowRight className="w-5 h-5 text-laps-gold group-hover:translate-x-2 transition-transform" />
                </div>
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Bottom Timeline Markers */}
        <div className="mt-10 hidden md:block">
          <div className="relative py-6">
            <div className="absolute left-0 right-0 top-1/2 h-px bg-white/30" />
            <div className="flex justify-between relative">
              {timelineEvents.map((event, idx) => (
                <button
                  key={event.year}
                  onClick={() => setActiveIndex(idx)}
                  className="flex flex-col items-center group"
                >
                  <div 
                    className={`w-4 h-4 border-2 transition-all ${
                      idx === activeIndex 
                        ? 'bg-laps-gold border-laps-gold scale-125' 
                        : 'bg-white/20 border-white/50 group-hover:border-laps-gold'
                    }`}
                  />
                  <span 
                    className={`mt-3 text-sm font-medium transition-colors ${
                      idx === activeIndex ? 'text-white' : 'text-white/70 group-hover:text-laps-gold'
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
