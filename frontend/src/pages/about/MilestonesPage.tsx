import { motion } from 'framer-motion';
import { timelineEvents } from '@/data/content';
import { Calendar, Award, Users, Building2 } from 'lucide-react';

// Bento images for milestones
const milestoneImages = [
  'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80',
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
      {/* Hero Section - Dynamic with Image */}
      <section className="relative min-h-[450px] flex items-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1920&q=80" 
            alt="Milestones" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-laps-navy via-laps-navy/90 to-laps-navy/60" />
        </div>

        <div className="container-wide relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-laps-gold text-sm font-medium tracking-wider uppercase mb-4">
                About LAPS Group
              </p>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Our <span className="text-laps-gold">Milestones</span>
              </h1>
              <p className="text-xl text-white/80 leading-relaxed">
                A journey of growth, innovation, and achievements that have shaped LAPS Group into what it is today.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="hidden lg:block"
            >
              <div className="flex items-center gap-4">
                <div className="bg-laps-gold text-laps-navy p-6 text-center">
                  <div className="text-4xl font-bold">2020</div>
                  <p className="text-sm font-medium">Founded</p>
                </div>
                <div className="h-1 w-12 bg-white/30" />
                <div className="bg-white/10 backdrop-blur-sm p-6 border border-white/20 text-center">
                  <div className="text-4xl font-bold text-laps-gold">5</div>
                  <p className="text-white/80 text-sm">Divisions</p>
                </div>
                <div className="h-1 w-12 bg-white/30" />
                <div className="bg-white/10 backdrop-blur-sm p-6 border border-white/20 text-center">
                  <div className="text-4xl font-bold text-laps-gold">25+</div>
                  <p className="text-white/80 text-sm">Awards</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Achievement Stats - Bento Style */}
      <section className="py-20 bg-white">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left - Large Feature Card */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative overflow-hidden group h-[450px]"
            >
              <img 
                src={milestoneImages[0]} 
                alt="Business growth" 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-laps-navy via-laps-navy/50 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <div className="text-6xl font-bold text-laps-gold mb-4">2020</div>
                <h3 className="text-2xl font-bold text-white mb-2">Building Excellence</h3>
                <p className="text-white/80">
                  From a vision to a multi-division enterprise, our journey has been defined by 
                  relentless pursuit of quality and innovation.
                </p>
              </div>
            </motion.div>

            {/* Right - Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={achievement.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-laps-light p-8 flex flex-col justify-center hover:shadow-lg transition-shadow"
                >
                  <div className="w-14 h-14 bg-laps-gold/10 flex items-center justify-center mb-4">
                    <achievement.icon className="w-7 h-7 text-laps-gold" />
                  </div>
                  <div className="text-4xl font-bold text-laps-navy mb-2">{achievement.value}</div>
                  <p className="text-laps-slate">{achievement.label}</p>
                </motion.div>
              ))}
            </div>
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
