import { motion } from 'framer-motion';
import { Target, Lightbulb, Shield, Users, Heart, Globe } from 'lucide-react';

// Bento images for values section
const valueImages = [
  'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=800&q=80',
];

export function ValuesPage() {
  const values = [
    {
      icon: Target,
      title: 'Excellence',
      description: 'We pursue the highest standards in everything we do. Our commitment to excellence drives us to continuously improve and deliver exceptional results.',
      color: 'text-blue-500',
      bgColor: 'bg-blue-500/10',
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'We embrace creativity and forward-thinking solutions. Innovation is at the heart of everything we create, pushing boundaries to shape the future.',
      color: 'text-amber-500',
      bgColor: 'bg-amber-500/10',
    },
    {
      icon: Shield,
      title: 'Integrity',
      description: 'We conduct business with honesty and transparency. Trust is the foundation of all our relationships with clients, partners, and team members.',
      color: 'text-green-500',
      bgColor: 'bg-green-500/10',
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'We believe in the power of working together. By combining diverse perspectives and expertise, we achieve more than any individual could alone.',
      color: 'text-purple-500',
      bgColor: 'bg-purple-500/10',
    },
    {
      icon: Heart,
      title: 'Passion',
      description: 'We are passionate about what we do. This passion fuels our dedication to our craft and inspires us to go above and beyond for our clients.',
      color: 'text-red-500',
      bgColor: 'bg-red-500/10',
    },
    {
      icon: Globe,
      title: 'Responsibility',
      description: 'We take responsibility for our impact on society and the environment. Sustainable practices guide our decisions and operations.',
      color: 'text-teal-500',
      bgColor: 'bg-teal-500/10',
    },
  ];

  return (
    <div>
      {/* Hero Section - Dynamic with Image */}
      <div className="relative h-[650px] overflow-hidden bg-laps-navy">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1920&q=80" 
            alt="Values" 
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
                Our <span className="text-laps-gold">Values</span> & Purpose
              </h1>
              <p className="text-xl text-white/80 leading-relaxed">
                The principles that guide everything we do and the purpose that drives us forward.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="hidden lg:block"
            >
              <div className="grid grid-cols-3 gap-3">
                {['Excellence', 'Innovation', 'Integrity', 'Collaboration', 'Passion', 'Responsibility'].map((value) => (
                  <div key={value} className="bg-white/10 backdrop-blur-sm px-4 py-3 border border-white/20 text-center">
                    <p className="text-white text-sm font-medium">{value}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Purpose Statement */}
      <section className="py-20 bg-white">
        <div className="container-wide">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl font-semibold text-laps-navy inline-block border-b-2 border-laps-navy pb-2 mb-8">
                Our Purpose
              </h2>
              <p className="text-xl text-laps-slate leading-relaxed mb-8">
                At LAPS Group, our purpose is to <span className="text-laps-gold font-semibold">empower businesses and individuals</span> through 
                innovative solutions that transform ideas into reality. We exist to create lasting value 
                for our clients, communities, and stakeholders.
              </p>
              <div className="h-1 w-24 bg-laps-gold mx-auto"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values - Bento Grid */}
      <section className="py-20 bg-laps-light">
        <div className="container-wide">
          <div className="mb-10">
            <h2 className="text-2xl font-semibold text-laps-navy inline-block border-b-2 border-laps-navy pb-2">
              Our Core Values
            </h2>
          </div>

          {/* Bento Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-[200px]">
            {/* Large Image Card */}
            {(() => {
              const FirstIcon = values[0].icon;
              return (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="md:col-span-2 lg:row-span-2 relative overflow-hidden group"
                >
                  <img 
                    src={valueImages[0]} 
                    alt="Team collaboration" 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-laps-navy/90 via-laps-navy/40 to-transparent flex items-end p-8">
                    <div>
                      <FirstIcon className="w-10 h-10 text-laps-gold mb-4" />
                      <h3 className="text-2xl font-bold text-white mb-2">{values[0].title}</h3>
                      <p className="text-white/80">{values[0].description}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })()}

            {/* Value Cards */}
            {values.slice(1, 3).map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (index + 1) * 0.1 }}
                className="bg-white p-6 shadow-lg hover:shadow-xl transition-shadow flex flex-col justify-center"
              >
                <div className={`w-12 h-12 ${value.bgColor} flex items-center justify-center mb-4`}>
                  <value.icon className={`w-6 h-6 ${value.color}`} />
                </div>
                <h3 className="text-lg font-bold text-laps-navy mb-2">{value.title}</h3>
                <p className="text-sm text-laps-slate line-clamp-3">{value.description}</p>
              </motion.div>
            ))}

            {/* Medium Image */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="relative overflow-hidden group"
            >
              <img 
                src={valueImages[1]} 
                alt="Teamwork" 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-laps-navy/60" />
            </motion.div>

            {/* Wide Card */}
            {(() => {
              const FourthIcon = values[3].icon;
              return (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                  className="lg:col-span-2 bg-laps-navy text-white p-6 flex items-center gap-6"
                >
                  <div className={`w-14 h-14 ${values[3].bgColor} flex-shrink-0 flex items-center justify-center`}>
                    <FourthIcon className={`w-7 h-7 ${values[3].color}`} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-1">{values[3].title}</h3>
                    <p className="text-sm text-white/80">{values[3].description}</p>
                  </div>
                </motion.div>
              );
            })()}

            {/* Remaining Values */}
            {values.slice(4).map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (index + 5) * 0.1 }}
                className="bg-white p-6 shadow-lg hover:shadow-xl transition-shadow flex flex-col justify-center"
              >
                <div className={`w-12 h-12 ${value.bgColor} flex items-center justify-center mb-4`}>
                  <value.icon className={`w-6 h-6 ${value.color}`} />
                </div>
                <h3 className="text-lg font-bold text-laps-navy mb-2">{value.title}</h3>
                <p className="text-sm text-laps-slate line-clamp-3">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 bg-white">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-laps-navy text-white p-12"
            >
              <h3 className="text-2xl font-bold mb-6">Our Vision</h3>
              <p className="text-white/80 text-lg leading-relaxed">
                To be the leading multi-division group in India, recognized for innovation, 
                excellence, and positive impact across architecture, technology, marketing, 
                events, and creative services.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-laps-gold p-12"
            >
              <h3 className="text-2xl font-bold text-laps-navy mb-6">Our Mission</h3>
              <p className="text-laps-navy/80 text-lg leading-relaxed">
                To deliver exceptional value through integrated solutions that combine 
                creativity, technology, and strategic thinking, while fostering a culture 
                of innovation and continuous improvement.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Value in Action */}
      <section className="py-20 bg-laps-light">
        <div className="container-wide">
          <div className="mb-10">
            <h2 className="text-2xl font-semibold text-laps-navy inline-block border-b-2 border-laps-navy pb-2">
              Values in Action
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="text-5xl font-bold text-laps-navy mb-4">100%</div>
              <p className="text-laps-slate">Client Satisfaction Focus</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-center"
            >
              <div className="text-5xl font-bold text-laps-navy mb-4">50+</div>
              <p className="text-laps-slate">Community Initiatives</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-center"
            >
              <div className="text-5xl font-bold text-laps-navy mb-4">5</div>
              <p className="text-laps-slate">Divisions United by Values</p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
