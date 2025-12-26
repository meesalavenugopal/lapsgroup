import { motion } from 'framer-motion';
import { Linkedin, Mail } from 'lucide-react';
import { founderInfo } from '@/data/content';

export function LeadershipPage() {
  const leaders = [
    {
      name: founderInfo.name,
      title: founderInfo.title,
      initials: 'VM',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80',
      linkedin: founderInfo.linkedin,
      quote: founderInfo.quote,
      bio: 'Visionary leader with expertise in architecture, technology, and business strategy. Founded LAPS Group to create excellence across multiple domains.',
    },
    {
      name: 'Rahul Sharma',
      title: 'Chief Technology Officer',
      initials: 'RS',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&q=80',
      linkedin: '#',
      bio: 'Leading our technology initiatives with 15+ years of experience in software development and digital transformation.',
    },
    {
      name: 'Priya Patel',
      title: 'Chief Creative Officer',
      initials: 'PP',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80',
      linkedin: '#',
      bio: 'Award-winning creative director bringing innovative design thinking to all LAPS Group divisions.',
    },
    {
      name: 'Amit Kumar',
      title: 'Chief Operations Officer',
      initials: 'AK',
      image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=400&q=80',
      linkedin: '#',
      bio: 'Operations expert ensuring seamless delivery across all business units and client engagements.',
    },
  ];

  return (
    <div>
      {/* Hero Section - Dynamic with Image */}
      <div className="relative h-[650px] overflow-hidden bg-laps-navy">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=1920&q=80" 
            alt="Leadership" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-laps-navy/90 via-laps-navy/70 to-transparent" />
          <div 
            className="absolute inset-0 opacity-30"
            style={{
              backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.15) 1px, transparent 1px)',
              backgroundSize: '4px 4px'
            }}
          />
        </div>

        <div className="relative h-full container-wide flex items-center">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-laps-gold text-sm font-medium tracking-wider uppercase mb-4">
                About LAPS Group
              </p>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Visionary <span className="text-laps-gold">Leadership</span>
              </h1>
              <p className="text-xl text-white/80 leading-relaxed">
                Meet the visionary leaders driving innovation and excellence across the LAPS Group.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="hidden lg:flex items-center justify-end gap-6"
            >
              <div className="bg-white/10 backdrop-blur-sm p-8 border border-white/20 text-center">
                <div className="text-5xl font-bold text-laps-gold mb-2">4+</div>
                <p className="text-white/80">Senior Leaders</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-8 border border-white/20 text-center">
                <div className="text-5xl font-bold text-laps-gold mb-2">50+</div>
                <p className="text-white/80">Years Combined</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Founder Spotlight */}
      <section className="py-20 bg-white">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative overflow-hidden">
                <img 
                  src={leaders[0].image}
                  alt={founderInfo.name}
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-laps-navy to-transparent p-8">
                  <h2 className="text-3xl font-bold text-white mb-1">{founderInfo.name}</h2>
                  <p className="text-laps-gold text-lg">{founderInfo.title}</p>
                </div>
              </div>
              <a
                href={founderInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute top-4 right-4 bg-white p-3 shadow-lg hover:bg-laps-gold transition-colors group"
              >
                <Linkedin className="w-5 h-5 text-laps-navy group-hover:text-white" />
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-semibold text-laps-navy inline-block border-b-2 border-laps-navy pb-2 mb-6">Founder's Vision</h3>
              <blockquote className="text-xl text-laps-slate italic mb-6 border-l-4 border-laps-gold pl-6">
                "{founderInfo.quote}"
              </blockquote>
              <p className="text-laps-slate mb-4">
                {leaders[0].bio}
              </p>
              <p className="text-laps-slate">
                Under his leadership, LAPS Group has grown from a single venture into a diversified 
                conglomerate spanning five distinct divisions, each leading in their respective industries.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20 bg-laps-light">
        <div className="container-wide">
          <div className="mb-10">
            <h2 className="text-2xl font-semibold text-laps-navy inline-block border-b-2 border-laps-navy pb-2">
              Leadership Team
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {leaders.slice(1).map((leader, index) => (
              <motion.div
                key={leader.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white overflow-hidden shadow-lg hover:shadow-xl transition-shadow group"
              >
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={leader.image} 
                    alt={leader.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-laps-navy/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold text-laps-navy mb-1">{leader.name}</h3>
                  <p className="text-laps-gold text-sm font-medium mb-4">{leader.title}</p>
                  <p className="text-laps-slate text-sm mb-6">{leader.bio}</p>
                  <div className="flex items-center justify-center gap-4">
                    <a
                      href={leader.linkedin}
                      className="p-2 text-laps-slate hover:text-laps-gold transition-colors"
                    >
                      <Linkedin className="w-5 h-5" />
                    </a>
                    <a
                      href="#"
                      className="p-2 text-laps-slate hover:text-laps-gold transition-colors"
                    >
                      <Mail className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Leadership */}
      <section className="py-20 bg-white">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-2xl font-semibold text-laps-navy inline-block border-b-2 border-laps-navy pb-2 mb-6">
              Join Our Leadership
            </h2>
            <p className="text-laps-slate mb-8">
              We're always looking for exceptional leaders to join our growing team. 
              If you're passionate about innovation and excellence, we'd love to hear from you.
            </p>
            <a
              href="/careers"
              className="inline-flex items-center gap-2 px-6 py-3 bg-laps-navy text-white font-medium hover:bg-laps-gold transition-colors"
            >
              View Open Positions
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
