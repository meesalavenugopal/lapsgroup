import { motion } from 'framer-motion';
import { Cpu, Sparkles, Rocket, Zap, Brain, Code } from 'lucide-react';
import { divisions } from '@/data/content';
import { Link } from 'react-router-dom';

const heroImages = [
  'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=400&q=80',
  'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=400&q=80',
  'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=400&q=80',
  'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=400&q=80',
  'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=400&q=80',
  'https://images.unsplash.com/photo-1535378917042-10a22c95931a?auto=format&fit=crop&w=400&q=80',
];

export function InnovationPage() {
  const innovations = [
    {
      icon: Cpu,
      title: 'AI-Powered Solutions',
      description: 'Leveraging artificial intelligence to create smarter, more efficient solutions across all our divisions.',
      color: 'text-purple-500',
      bgColor: 'bg-purple-500/10',
    },
    {
      icon: Sparkles,
      title: 'Design Thinking',
      description: 'Human-centered approach to problem-solving that puts user needs at the forefront of every project.',
      color: 'text-pink-500',
      bgColor: 'bg-pink-500/10',
    },
    {
      icon: Rocket,
      title: 'Rapid Prototyping',
      description: 'Fast iteration and testing cycles to bring ideas to life quickly and refine them based on real feedback.',
      color: 'text-orange-500',
      bgColor: 'bg-orange-500/10',
    },
    {
      icon: Zap,
      title: 'Automation',
      description: 'Streamlining processes through automation to improve efficiency and reduce manual workloads.',
      color: 'text-yellow-500',
      bgColor: 'bg-yellow-500/10',
    },
    {
      icon: Brain,
      title: 'Research & Development',
      description: 'Dedicated R&D teams exploring emerging technologies and industry trends to stay ahead.',
      color: 'text-blue-500',
      bgColor: 'bg-blue-500/10',
    },
    {
      icon: Code,
      title: 'Open Innovation',
      description: 'Collaborating with partners, startups, and academic institutions to drive breakthrough solutions.',
      color: 'text-green-500',
      bgColor: 'bg-green-500/10',
    },
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Innovation</h1>
            <p className="text-xl text-white/80">
              Pushing boundaries, embracing change, and pioneering solutions that shape the future 
              across architecture, technology, marketing, events, and creative services.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Innovation Philosophy */}
      <section className="py-20 bg-white">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl font-semibold text-laps-navy inline-block border-b-2 border-laps-navy pb-2 mb-6">
                Innovation is in Our DNA
              </h2>
              <p className="text-laps-slate mb-6">
                At LAPS Group, innovation isn't just about adopting new technologies—it's about 
                rethinking how things are done. We challenge conventional approaches and explore 
                new possibilities in every project we undertake.
              </p>
              <p className="text-laps-slate mb-6">
                Our multi-division structure enables cross-pollination of ideas. Insights from our 
                architecture projects inform our digital solutions, while our marketing expertise 
                enhances how we communicate technical concepts.
              </p>
              <p className="text-laps-slate">
                This integrated approach to innovation allows us to create unique solutions that 
                combine the best of multiple disciplines.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-laps-navy to-laps-blue p-12 text-white"
            >
              <div className="text-6xl font-bold text-laps-gold mb-6">01</div>
              <h3 className="text-2xl font-bold mb-4">Think Different</h3>
              <p className="text-white/80 mb-8">
                We approach every challenge with fresh eyes, questioning assumptions and exploring 
                unconventional solutions.
              </p>
              <div className="text-6xl font-bold text-laps-gold mb-6">02</div>
              <h3 className="text-2xl font-bold mb-4">Act Bold</h3>
              <p className="text-white/80">
                We're not afraid to take calculated risks and pioneer new approaches that set 
                industry standards.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Innovation Areas */}
      <section className="py-20 bg-laps-light">
        <div className="container-wide">
          <div className="mb-10">
            <h2 className="text-2xl font-semibold text-laps-navy inline-block border-b-2 border-laps-navy pb-2">
              Areas of Innovation
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {innovations.map((innovation, index) => (
              <motion.div
                key={innovation.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-8 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className={`w-14 h-14 ${innovation.bgColor} flex items-center justify-center mb-6`}>
                  <innovation.icon className={`w-7 h-7 ${innovation.color}`} />
                </div>
                <h3 className="text-xl font-bold text-laps-navy mb-3">{innovation.title}</h3>
                <p className="text-laps-slate">{innovation.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Innovation Across Divisions */}
      <section className="py-20 bg-white">
        <div className="container-wide">
          <div className="mb-10">
            <h2 className="text-2xl font-semibold text-laps-navy inline-block border-b-2 border-laps-navy pb-2">
              Innovation Across Divisions
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {divisions.slice(0, 3).map((division, index) => (
              <motion.div
                key={division.key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  to={`/${division.slug}`}
                  className="block bg-laps-light p-6 hover:shadow-lg transition-all border-l-4"
                  style={{ borderColor: division.accentColor }}
                >
                  <h3 className="text-lg font-bold text-laps-navy mb-2">{division.name}</h3>
                  <p className="text-sm text-laps-slate mb-4">{division.description}</p>
                  <span className="text-sm font-medium" style={{ color: division.accentColor }}>
                    Explore Division →
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Innovation Lab */}
      <section className="py-20 bg-laps-navy text-white">
        <div className="container-wide">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-6">LAPS Innovation Lab</h2>
              <p className="text-white/80 text-lg mb-8 leading-relaxed">
                Our dedicated innovation lab serves as a sandbox for experimentation, where our 
                teams explore emerging technologies, test new ideas, and develop prototypes that 
                could shape our future offerings.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white/10 p-6">
                  <div className="text-3xl font-bold text-laps-gold mb-2">20+</div>
                  <p className="text-white/70 text-sm">Active Experiments</p>
                </div>
                <div className="bg-white/10 p-6">
                  <div className="text-3xl font-bold text-laps-gold mb-2">5</div>
                  <p className="text-white/70 text-sm">Patents Filed</p>
                </div>
                <div className="bg-white/10 p-6">
                  <div className="text-3xl font-bold text-laps-gold mb-2">10+</div>
                  <p className="text-white/70 text-sm">Industry Partners</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-2xl font-semibold text-laps-navy inline-block border-b-2 border-laps-navy pb-2 mb-6">
              Innovate With Us
            </h2>
            <p className="text-laps-slate mb-8">
              Have an innovative idea or looking for a partner to bring your vision to life? 
              Let's explore the possibilities together.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-laps-navy text-white font-medium hover:bg-laps-gold transition-colors"
            >
              Start a Conversation
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
