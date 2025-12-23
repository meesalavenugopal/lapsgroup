import { motion } from 'framer-motion';
import { Leaf, Recycle, Sun, Droplets, Building2, Users } from 'lucide-react';

export function SustainabilityPage() {
  const initiatives = [
    {
      icon: Leaf,
      title: 'Green Architecture',
      description: 'Our architecture division prioritizes sustainable design, using eco-friendly materials and energy-efficient solutions in every project.',
      color: 'text-green-500',
      bgColor: 'bg-green-500/10',
    },
    {
      icon: Recycle,
      title: 'Waste Reduction',
      description: 'We implement comprehensive waste management practices across all offices and project sites to minimize environmental impact.',
      color: 'text-emerald-500',
      bgColor: 'bg-emerald-500/10',
    },
    {
      icon: Sun,
      title: 'Renewable Energy',
      description: 'Our facilities are transitioning to renewable energy sources, with solar panels and energy-efficient systems.',
      color: 'text-amber-500',
      bgColor: 'bg-amber-500/10',
    },
    {
      icon: Droplets,
      title: 'Water Conservation',
      description: 'Water-saving technologies and rainwater harvesting systems are integrated into our operations and designs.',
      color: 'text-blue-500',
      bgColor: 'bg-blue-500/10',
    },
    {
      icon: Building2,
      title: 'Sustainable Events',
      description: 'LAPS Suites hosts eco-conscious events, minimizing single-use plastics and promoting sustainable practices.',
      color: 'text-teal-500',
      bgColor: 'bg-teal-500/10',
    },
    {
      icon: Users,
      title: 'Community Engagement',
      description: 'We partner with local communities on environmental initiatives, from tree planting to clean-up drives.',
      color: 'text-purple-500',
      bgColor: 'bg-purple-500/10',
    },
  ];

  const goals = [
    { target: '50%', description: 'Carbon footprint reduction by 2027' },
    { target: '100%', description: 'Renewable energy in offices by 2026' },
    { target: 'Zero', description: 'Single-use plastics in operations' },
    { target: '10K+', description: 'Trees planted annually' },
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Sustainability</h1>
            <p className="text-xl text-white/80">
              Building a sustainable future through responsible practices, innovative solutions, 
              and a commitment to environmental stewardship.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Commitment Statement */}
      <section className="py-20 bg-white">
        <div className="container-wide">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-laps-navy mb-8">
                Our Commitment
              </h2>
              <p className="text-xl text-laps-slate leading-relaxed mb-8">
                At LAPS Group, sustainability isn't just a buzzword—it's a core principle that 
                guides our decisions. We believe that business success and environmental responsibility 
                go hand in hand, and we're committed to <span className="text-green-600 font-semibold">reducing our ecological footprint</span> while 
                delivering exceptional value to our clients.
              </p>
              <div className="h-1 w-24 bg-green-500 mx-auto"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Sustainability Goals */}
      <section className="py-16 bg-laps-light">
        <div className="container-wide">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {goals.map((goal, index) => (
              <motion.div
                key={goal.description}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 text-center shadow-lg"
              >
                <div className="text-3xl font-bold text-green-600 mb-2">{goal.target}</div>
                <p className="text-sm text-laps-slate">{goal.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Initiatives */}
      <section className="py-20 bg-white">
        <div className="container-wide">
          <div className="text-center mb-16">
            <h2 className="section-title">Our Initiatives</h2>
            <p className="section-subtitle mx-auto">
              Concrete actions we're taking for a greener tomorrow
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {initiatives.map((initiative, index) => (
              <motion.div
                key={initiative.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-laps-light p-8 hover:shadow-lg transition-shadow"
              >
                <div className={`w-14 h-14 ${initiative.bgColor} rounded-lg flex items-center justify-center mb-6`}>
                  <initiative.icon className={`w-7 h-7 ${initiative.color}`} />
                </div>
                <h3 className="text-xl font-bold text-laps-navy mb-3">{initiative.title}</h3>
                <p className="text-laps-slate">{initiative.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-20 bg-green-600 text-white">
        <div className="container-wide">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-6">Our Impact So Far</h2>
              <p className="text-white/80 text-lg mb-12">
                Through our sustainability initiatives, we've made significant progress 
                in reducing our environmental impact while inspiring others to do the same.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-white/10 p-8">
                  <div className="text-4xl font-bold mb-2">30%</div>
                  <p className="text-white/70">Energy Reduction Achieved</p>
                </div>
                <div className="bg-white/10 p-8">
                  <div className="text-4xl font-bold mb-2">5,000+</div>
                  <p className="text-white/70">Trees Planted</p>
                </div>
                <div className="bg-white/10 p-8">
                  <div className="text-4xl font-bold mb-2">15+</div>
                  <p className="text-white/70">Green Projects Completed</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Join Us */}
      <section className="py-20 bg-white">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="section-title">Join Our Green Journey</h2>
            <p className="text-laps-slate mb-8">
              Sustainability is a shared responsibility. Partner with us on projects that 
              prioritize environmental consciousness without compromising on quality.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-green-600 text-white font-medium hover:bg-green-700 transition-colors"
            >
              Start a Sustainable Project
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
