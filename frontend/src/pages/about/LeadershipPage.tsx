import { motion } from 'framer-motion';
import { Linkedin, Mail } from 'lucide-react';
import { founderInfo } from '@/data/content';

const heroImages = [
  'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=80',
  'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80',
  'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=400&q=80',
  'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80',
  'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&q=80',
  'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80',
];

export function LeadershipPage() {
  const leaders = [
    {
      name: founderInfo.name,
      title: founderInfo.title,
      initials: 'VM',
      linkedin: founderInfo.linkedin,
      quote: founderInfo.quote,
      bio: 'Visionary leader with expertise in architecture, technology, and business strategy. Founded LAPS Group to create excellence across multiple domains.',
    },
    {
      name: 'Rahul Sharma',
      title: 'Chief Technology Officer',
      initials: 'RS',
      linkedin: '#',
      bio: 'Leading our technology initiatives with 15+ years of experience in software development and digital transformation.',
    },
    {
      name: 'Priya Patel',
      title: 'Chief Creative Officer',
      initials: 'PP',
      linkedin: '#',
      bio: 'Award-winning creative director bringing innovative design thinking to all LAPS Group divisions.',
    },
    {
      name: 'Amit Kumar',
      title: 'Chief Operations Officer',
      initials: 'AK',
      linkedin: '#',
      bio: 'Operations expert ensuring seamless delivery across all business units and client engagements.',
    },
  ];

  return (
    <div className="pt-20">
      {/* Hero Section with Tilted Image Grid */}
      <section className="py-20 bg-laps-navy text-white relative overflow-hidden min-h-[350px]">
        {/* Tilted Image Grid Background */}
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Leadership</h1>
            <p className="text-xl text-white/80">
              Meet the visionary leaders driving innovation and excellence across the LAPS Group.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Founder Spotlight */}
      <section className="py-20 bg-white">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-laps-navy text-white p-12"
            >
              <div className="w-32 h-32 bg-white/20 rounded-full mx-auto mb-8 flex items-center justify-center">
                <span className="text-5xl font-bold">VM</span>
              </div>
              <div className="text-center">
                <h2 className="text-3xl font-bold mb-2">{founderInfo.name}</h2>
                <p className="text-laps-gold text-lg mb-6">{founderInfo.title}</p>
                <a
                  href={founderInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-white hover:text-laps-gold transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                  Connect on LinkedIn
                </a>
              </div>
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
                className="bg-white p-8 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="w-20 h-20 bg-laps-navy mx-auto mb-6 flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">{leader.initials}</span>
                </div>
                <div className="text-center">
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
