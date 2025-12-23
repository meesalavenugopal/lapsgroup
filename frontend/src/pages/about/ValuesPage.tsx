import { motion } from 'framer-motion';
import { Target, Lightbulb, Shield, Users, Heart, Globe } from 'lucide-react';

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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Values & Purpose</h1>
            <p className="text-xl text-white/80">
              The principles that guide everything we do and the purpose that drives us forward.
            </p>
          </motion.div>
        </div>
      </section>

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

      {/* Core Values */}
      <section className="py-20 bg-laps-light">
        <div className="container-wide">
          <div className="mb-10">
            <h2 className="text-2xl font-semibold text-laps-navy inline-block border-b-2 border-laps-navy pb-2">
              Our Core Values
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-8 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className={`w-14 h-14 ${value.bgColor} flex items-center justify-center mb-6`}>
                  <value.icon className={`w-7 h-7 ${value.color}`} />
                </div>
                <h3 className="text-xl font-bold text-laps-navy mb-3">{value.title}</h3>
                <p className="text-laps-slate">{value.description}</p>
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
