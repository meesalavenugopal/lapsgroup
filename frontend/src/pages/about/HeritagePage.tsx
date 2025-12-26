import { motion } from 'framer-motion';
import { Building, Clock, Star, Award } from 'lucide-react';

// Bento images for heritage
const heritageImages = [
  'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?auto=format&fit=crop&w=800&q=80',
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
    <div>
      {/* Hero Section - Dynamic with Image */}
      <div className="relative h-[650px] overflow-hidden bg-laps-navy">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1920&q=80" 
            alt="Heritage" 
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
                Our <span className="text-laps-gold">Heritage</span>
              </h1>
              <p className="text-xl text-white/80 leading-relaxed">
                A legacy of excellence, innovation, and unwavering commitment to quality that defines who we are.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="hidden lg:flex items-center justify-end"
            >
              <div className="bg-white/10 backdrop-blur-sm p-8 border border-white/20">
                <div className="text-6xl font-bold text-laps-gold mb-2">2020</div>
                <p className="text-white/80 text-lg">Where it all began</p>
                <p className="text-white/60 text-sm mt-2">Founded in Hyderabad, India</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>


      <section className="py-20 bg-white">
        <div className="container-wide">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-[200px]">
            {/* Large Story Card */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-2 lg:row-span-2 bg-laps-light p-8 flex flex-col justify-center"
            >
              <h2 className="text-2xl font-semibold text-laps-navy inline-block border-b-2 border-laps-navy pb-2 mb-6 w-fit">
                Where It All Began
              </h2>
              <p className="text-laps-slate mb-4">
                LAPS Group was born from a simple yet powerful vision: to create a company that would 
                excel in multiple domains while maintaining the highest standards of quality and integrity.
              </p>
              <p className="text-laps-slate mb-4">
                What started as a single venture in architecture has blossomed into a diversified group 
                of five divisions, each making its mark in their respective industries. Our heritage is 
                built on the principles of hard work, innovation, and a relentless pursuit of excellence.
              </p>
              <p className="text-laps-slate">
                Today, we carry forward this legacy with pride, honoring the foundation laid by our 
                founders while continuously evolving to meet the challenges of tomorrow.
              </p>
            </motion.div>

            {/* Image Cards */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative overflow-hidden group"
            >
              <img 
                src={heritageImages[0]} 
                alt="LAPS Architecture" 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-laps-navy/40" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="relative overflow-hidden group"
            >
              <img 
                src={heritageImages[1]} 
                alt="Office space" 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-laps-navy/40" />
            </motion.div>

            {heritageHighlights.map((highlight, index) => (
              <motion.div
                key={highlight.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`p-6 flex flex-col justify-center ${index === 0 ? 'bg-laps-navy text-white' : 'bg-laps-light'}`}
              >
                <div className={`w-12 h-12 ${index === 0 ? 'bg-white/20' : 'bg-laps-gold/10'} flex items-center justify-center mb-4`}>
                  <highlight.icon className={`w-6 h-6 ${index === 0 ? 'text-laps-gold' : 'text-laps-gold'}`} />
                </div>
                <h3 className={`text-lg font-bold mb-2 ${index === 0 ? 'text-white' : 'text-laps-navy'}`}>{highlight.title}</h3>
                <p className={`text-sm ${index === 0 ? 'text-white/80' : 'text-laps-slate'} line-clamp-3`}>{highlight.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

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
