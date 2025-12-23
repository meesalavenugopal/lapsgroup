import { motion } from 'framer-motion';
import { timelineEvents } from '@/data/content';
import { Calendar, Award, Users, Building2 } from 'lucide-react';

const heroImages = [
  'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=400&q=80',
  'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=400&q=80',
  'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=400&q=80',
  'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=400&q=80',
  'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=400&q=80',
  'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=400&q=80',
];

export function MilestonesPage() {
  const achievements = [
    { icon: Building2, value: '5', label: 'Divisions Established' },
    { icon: Users, value: '100+', label: 'Team Members' },
    { icon: Award, value: '25+', label: 'Awards Won' },
    { icon: Calendar, value: '4+', label: 'Years of Excellence' },
  ];

  return (
    <div className="pt-20">
      {/* Hero Section with Tilted Image Grid */}
      <section className="py-20 bg-laps-navy text-white relative overflow-hidden min-h-[350px]">
        <div className="absolute inset-0 overflow-hidden">
          <div 
            className="absolute flex gap-3"
            style={{ 
              transform: 'rotate(-12deg) scale(1.5)',
              transformOrigin: 'center center',
              top: '-30%',
              right: '-20%',
              width: '70%',
              height: '160%'
            }}
          >
            <div className="flex flex-col gap-3 animate-scroll-up" style={{ animationDuration: '60s' }}>
              {[...heroImages.slice(0, 3), ...heroImages.slice(0, 3)].map((img, i) => (
                <div key={`col1-${i}`} className="w-36 h-48 overflow-hidden shadow-lg flex-shrink-0">
                  <img src={img} alt="" className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
            <div className="flex flex-col gap-3 animate-scroll-down" style={{ animationDuration: '55s', marginTop: '-60px' }}>
              {[...heroImages.slice(3, 6), ...heroImages.slice(3, 6)].map((img, i) => (
                <div key={`col2-${i}`} className="w-36 h-48 overflow-hidden shadow-lg flex-shrink-0">
                  <img src={img} alt="" className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-laps-navy via-laps-navy/90 to-laps-navy/40" />
        </div>

        <div className="container-wide relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <p className="text-laps-gold text-sm font-medium tracking-wider uppercase mb-4">
              About LAPS Group
            </p>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Milestones</h1>
            <p className="text-xl text-white/80">
              A journey of growth, innovation, and achievements that have shaped LAPS Group into what it is today.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Achievement Stats */}
      <section className="py-16 bg-white border-b border-gray-100">
        <div className="container-wide">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-14 h-14 bg-laps-gold/10 flex items-center justify-center mx-auto mb-4">
                  <achievement.icon className="w-7 h-7 text-laps-gold" />
                </div>
                <div className="text-4xl font-bold text-laps-navy mb-2">{achievement.value}</div>
                <p className="text-sm text-laps-slate">{achievement.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-laps-light">
        <div className="container-wide">
          <div className="mb-10">
            <h2 className="text-2xl font-semibold text-laps-navy inline-block border-b-2 border-laps-navy pb-2">
              Our Journey
            </h2>
          </div>

          <div className="max-w-4xl mx-auto">
            {timelineEvents.map((event, index) => (
              <motion.div
                key={event.year}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative flex gap-8 mb-12 last:mb-0"
              >
                {/* Year Badge */}
                <div className="flex-shrink-0 w-24">
                  <div className="bg-laps-navy text-white px-4 py-2 text-center font-bold">
                    {event.year}
                  </div>
                </div>

                {/* Timeline Line */}
                <div className="relative flex-shrink-0">
                  <div className="w-4 h-4 bg-laps-gold border-4 border-white shadow-md"></div>
                  {index !== timelineEvents.length - 1 && (
                    <div className="absolute top-4 left-1/2 -translate-x-1/2 w-0.5 h-full bg-laps-gold/30"></div>
                  )}
                </div>

                {/* Content */}
                <div className="flex-1 bg-white p-6 shadow-lg hover:shadow-xl transition-shadow">
                  <h3 className="text-xl font-bold text-laps-navy mb-2">{event.title}</h3>
                  <p className="text-laps-slate">{event.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Future Vision */}
      <section className="py-20 bg-white">
        <div className="container-wide">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-laps-navy text-white p-12 text-center"
            >
              <h2 className="text-3xl font-bold mb-6">Looking Ahead</h2>
              <p className="text-white/80 text-lg mb-8 leading-relaxed">
                As we continue to grow, our focus remains on innovation, excellence, and creating 
                lasting value for our clients and communities. The milestones ahead are even more 
                exciting than those behind us.
              </p>
              <div className="flex flex-wrap justify-center gap-6">
                <div className="bg-white/10 px-6 py-4">
                  <div className="text-2xl font-bold text-laps-gold mb-1">2025</div>
                  <p className="text-sm text-white/70">International Expansion</p>
                </div>
                <div className="bg-white/10 px-6 py-4">
                  <div className="text-2xl font-bold text-laps-gold mb-1">2026</div>
                  <p className="text-sm text-white/70">New Division Launch</p>
                </div>
                <div className="bg-white/10 px-6 py-4">
                  <div className="text-2xl font-bold text-laps-gold mb-1">2027</div>
                  <p className="text-sm text-white/70">500+ Team Members</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
