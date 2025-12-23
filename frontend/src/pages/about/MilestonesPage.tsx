import { motion } from 'framer-motion';
import { timelineEvents } from '@/data/content';
import { Calendar, Award, Users, Building2 } from 'lucide-react';

export function MilestonesPage() {
  const achievements = [
    { icon: Building2, value: '5', label: 'Divisions Established' },
    { icon: Users, value: '100+', label: 'Team Members' },
    { icon: Award, value: '25+', label: 'Awards Won' },
    { icon: Calendar, value: '4+', label: 'Years of Excellence' },
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
