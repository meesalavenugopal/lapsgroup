import { motion } from 'framer-motion';
import { Building, Clock, Star, Award } from 'lucide-react';

const heroImages = [
  'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=400&q=80',
  'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=400&q=80',
  'https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=400&q=80',
  'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=400&q=80',
  'https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?auto=format&fit=crop&w=400&q=80',
  'https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=400&q=80',
];

export function HeritagePage() {
  const heritageHighlights = [
    {
      icon: Building,
      title: 'Founded in Hyderabad',
      description: 'Our journey began in the heart of Telangana, where we established our first office and laid the foundation for what would become a multi-division enterprise.',
    },
    {
      icon: Clock,
      title: 'Years of Excellence',
      description: 'From a small startup to a diversified group, every year has brought new challenges, learnings, and achievements that have strengthened our foundation.',
    },
    {
      icon: Star,
      title: 'Client-First Philosophy',
      description: 'Since day one, we have maintained an unwavering commitment to our clients, treating every project with the dedication it deserves.',
    },
    {
      icon: Award,
      title: 'Industry Recognition',
      description: 'Our work has been recognized across industries, earning us accolades that reflect our commitment to quality and innovation.',
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Heritage</h1>
            <p className="text-xl text-white/80">
              A legacy of excellence, innovation, and unwavering commitment to quality that defines who we are.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Heritage Story */}
      <section className="py-20 bg-white">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl font-semibold text-laps-navy inline-block border-b-2 border-laps-navy pb-2 mb-6">
                Where It All Began
              </h2>
              <p className="text-laps-slate mb-6">
                LAPS Group was born from a simple yet powerful vision: to create a company that would 
                excel in multiple domains while maintaining the highest standards of quality and integrity.
              </p>
              <p className="text-laps-slate mb-6">
                What started as a single venture in architecture has blossomed into a diversified group 
                of five divisions, each making its mark in their respective industries. Our heritage is 
                built on the principles of hard work, innovation, and a relentless pursuit of excellence.
              </p>
              <p className="text-laps-slate">
                Today, we carry forward this legacy with pride, honoring the foundation laid by our 
                founders while continuously evolving to meet the challenges of tomorrow.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <img
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80"
                alt="LAPS Heritage"
                className="w-full h-96 object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Heritage Highlights */}
      <section className="py-20 bg-laps-light">
        <div className="container-wide">
          <div className="mb-10">
            <h2 className="text-2xl font-semibold text-laps-navy inline-block border-b-2 border-laps-navy pb-2">
              Heritage Highlights
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {heritageHighlights.map((highlight, index) => (
              <motion.div
                key={highlight.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-8 shadow-lg flex gap-6"
              >
                <div className="w-14 h-14 bg-laps-gold/10 flex-shrink-0 flex items-center justify-center">
                  <highlight.icon className="w-7 h-7 text-laps-gold" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-laps-navy mb-2">{highlight.title}</h3>
                  <p className="text-laps-slate">{highlight.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Roots */}
      <section className="py-20 bg-white">
        <div className="container-wide">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <h2 className="text-2xl font-semibold text-laps-navy inline-block border-b-2 border-laps-navy pb-2 mb-6">
                Rooted in Values
              </h2>
              <p className="text-laps-slate text-lg mb-12">
                Our heritage is more than just history—it's a living testament to the values that 
                continue to guide us today. From our humble beginnings to our current standing, 
                these principles remain unchanged.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center bg-laps-navy text-white p-8"
              >
                <div className="text-4xl font-bold text-laps-gold mb-4">2020</div>
                <p className="text-white/80">Year Founded</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-center bg-laps-navy text-white p-8"
              >
                <div className="text-4xl font-bold text-laps-gold mb-4">Hyderabad</div>
                <p className="text-white/80">Headquarters</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-center bg-laps-navy text-white p-8"
              >
                <div className="text-4xl font-bold text-laps-gold mb-4">5</div>
                <p className="text-white/80">Divisions Strong</p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
