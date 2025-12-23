import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Building2, Code2, Megaphone, PartyPopper, Camera } from 'lucide-react';
import { divisions } from '@/data/content';

const divisionIcons = {
  architecture: Building2,
  apps: Code2,
  ads: Megaphone,
  suites: PartyPopper,
  photo: Camera,
};

export function AboutPage() {
  const aboutLinks = [
    { 
      name: 'Leadership', 
      href: '/about/leadership', 
      description: 'Meet our visionary leaders driving LAPS Group forward',
      longDescription: 'Our leadership team brings decades of combined experience across architecture, technology, marketing, and creative industries. Their vision shapes our path to excellence.',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=600&q=80'
    },
    { 
      name: 'Values & Purpose', 
      href: '/about/values', 
      description: 'The principles and purpose that guide everything we do',
      longDescription: 'At LAPS Group, we believe in integrity, innovation, and impact. Our core values drive every decision, every project, and every relationship we build. We are committed to creating lasting value for our clients, employees, and communities.',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=600&q=80'
    },
    { 
      name: 'Milestones', 
      href: '/about/milestones', 
      description: 'Key moments in our journey of growth and achievement',
      longDescription: 'From our founding in 2020 to becoming a multi-division enterprise, every milestone marks a step forward in our mission. Explore the pivotal moments that have defined LAPS Group and shaped our vision for the future.',
      image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=600&q=80'
    },
    { 
      name: 'Heritage', 
      href: '/about/heritage', 
      description: 'Where it all began and the legacy we continue to build',
      longDescription: 'Every great enterprise has a story. Discover the origins of LAPS Group, the challenges we overcame, and the legacy we are building for future generations.',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=600&q=80'
    },
    { 
      name: 'Sustainability', 
      href: '/about/sustainability', 
      description: 'Our commitment to building a greener, sustainable future',
      longDescription: 'Environmental responsibility is woven into our business practices. From eco-friendly architecture to sustainable operations, we are dedicated to protecting our planet.',
      image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=600&q=80'
    },
    { 
      name: 'Innovation', 
      href: '/about/innovation', 
      description: 'Pioneering solutions that shape the future of industries',
      longDescription: 'Innovation is in our DNA. We invest in cutting-edge technologies and creative solutions that transform industries and create new possibilities for our clients.',
      image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=600&q=80'
    },
  ];

  return (
    <div className="pt-20">
      {/* Hero Section - Clean and Simple */}
      <section className="py-20 bg-laps-navy text-white min-h-[350px] flex items-center">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <p className="text-laps-gold text-sm font-medium tracking-wider uppercase mb-4">
              The LAPS Group
            </p>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About Us</h1>
            <p className="text-xl text-white/80">
              A multi-division company driving innovation across architecture, 
              technology, marketing, events, and photography.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl font-semibold text-laps-navy inline-block border-b-2 border-laps-navy pb-2 mb-6">
                Our Story
              </h2>
              <p className="text-laps-slate mb-6">
                LAPS Group was founded with a vision to create excellence across multiple domains. 
                What started as a single venture has grown into a diversified group of companies, 
                each contributing uniquely to their respective industries.
              </p>
              <p className="text-laps-slate mb-6">
                The name LAPS represents our commitment to leading in every lap of the journey. 
                Each division operates independently while sharing common values of innovation, 
                quality, and customer-centricity.
              </p>
              <p className="text-laps-slate mb-8">
                Today, LAPS Group stands as a testament to the power of diversified excellence, 
                serving clients across India and beyond.
              </p>
              <Link
                to="/about/heritage"
                className="inline-flex items-center gap-2 text-laps-gold font-medium hover:gap-3 transition-all"
              >
                Explore Our Heritage
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-laps-light p-8"
            >
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80"
                alt="LAPS Team"
                className="w-full h-64 object-cover mb-6"
              />
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-white">
                  <div className="text-3xl font-bold text-laps-navy">5</div>
                  <div className="text-sm text-laps-slate">Divisions</div>
                </div>
                <div className="text-center p-4 bg-white">
                  <div className="text-3xl font-bold text-laps-navy">15+</div>
                  <div className="text-sm text-laps-slate">Cities</div>
                </div>
                <div className="text-center p-4 bg-white">
                  <div className="text-3xl font-bold text-laps-navy">100+</div>
                  <div className="text-sm text-laps-slate">Team Members</div>
                </div>
                <div className="text-center p-4 bg-white">
                  <div className="text-3xl font-bold text-laps-navy">4+</div>
                  <div className="text-sm text-laps-slate">Years</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Explore LAPS Group - Bento Grid Layout */}
      <section className="py-20 bg-laps-light">
        <div className="container-wide">
          {/* Section Header - Underlined like Tata */}
          <div className="mb-10">
            <h2 className="text-2xl font-semibold text-laps-navy inline-block border-b-2 border-laps-navy pb-2">
              Explore LAPS Group
            </h2>
          </div>

          {/* Bento Grid - Row 1: Large + 2 Small */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 mb-5">
            {/* Leadership - Large Card (spans 5 columns) */}
            <Link 
              to={aboutLinks[0].href}
              className="lg:col-span-5 relative h-[320px] overflow-hidden group"
            >
              <img
                src={aboutLinks[0].image}
                alt={aboutLinks[0].name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-laps-navy via-laps-navy/30 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-2xl font-bold text-white mb-2">{aboutLinks[0].name}</h3>
                <p className="text-white/80 text-sm mb-3">{aboutLinks[0].description}</p>
                <span className="inline-flex items-center gap-2 text-laps-gold font-medium group-hover:gap-3 transition-all">
                  Learn More
                  <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </Link>

            {/* Values - Medium Card (spans 4 columns) */}
            <Link 
              to={aboutLinks[1].href}
              className="lg:col-span-4 bg-white p-6 flex flex-col h-[320px] group hover:shadow-lg transition-shadow"
            >
              <span className="text-laps-blue text-xs font-semibold tracking-wider uppercase mb-3">
                CORE VALUES
              </span>
              <h3 className="text-xl font-semibold text-laps-navy mb-3 group-hover:text-laps-blue transition-colors">
                {aboutLinks[1].name}
              </h3>
              <div className="flex items-start gap-3 flex-1">
                <div className="w-1 bg-laps-gold self-stretch"></div>
                <p className="text-laps-slate text-sm leading-relaxed">
                  {aboutLinks[1].longDescription}
                </p>
              </div>
              <span className="inline-flex items-center gap-2 text-laps-gold font-medium group-hover:gap-3 transition-all mt-4">
                Learn More
                <ArrowRight className="w-4 h-4" />
              </span>
            </Link>

            {/* Milestones - Accent Card (spans 3 columns) */}
            <Link 
              to={aboutLinks[2].href}
              className="lg:col-span-3 bg-[#00A3E0] p-6 flex flex-col text-white h-[320px] group"
            >
              <span className="bg-white/20 text-white text-[10px] font-bold tracking-wider uppercase px-3 py-1.5 inline-block mb-3 w-fit">
                TIMELINE
              </span>
              <h3 className="text-xl font-bold mb-3">{aboutLinks[2].name}</h3>
              <div className="flex items-start gap-3 flex-1">
                <div className="w-1 bg-white/50 self-stretch"></div>
                <p className="text-white/90 text-sm leading-relaxed">
                  {aboutLinks[2].longDescription}
                </p>
              </div>
              <span className="inline-flex items-center gap-2 text-white font-medium group-hover:gap-3 transition-all mt-4">
                Learn More
                <ArrowRight className="w-4 h-4" />
              </span>
            </Link>
          </div>

          {/* Bento Grid - Row 2: 3 Equal Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {/* Heritage Card */}
            <Link 
              to={aboutLinks[3].href}
              className="relative h-[240px] overflow-hidden group"
            >
              <img
                src={aboutLinks[3].image}
                alt={aboutLinks[3].name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-laps-navy via-laps-navy/60 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <h3 className="text-lg font-bold text-white mb-2">{aboutLinks[3].name}</h3>
                <p className="text-white/80 text-sm mb-3 line-clamp-3">{aboutLinks[3].longDescription}</p>
                <span className="inline-flex items-center gap-2 text-laps-gold text-sm font-medium group-hover:gap-3 transition-all">
                  Learn More
                  <ArrowRight className="w-3 h-3" />
                </span>
              </div>
            </Link>

            {/* Sustainability Card */}
            <Link 
              to={aboutLinks[4].href}
              className="relative h-[240px] overflow-hidden group"
              style={{
                background: 'linear-gradient(135deg, #2E7D32 0%, #1B5E20 100%)'
              }}
            >
              <div className="absolute right-0 top-0 w-1/2 h-full opacity-30">
                <img
                  src={aboutLinks[4].image}
                  alt=""
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#2E7D32] to-transparent" />
              </div>
              <div className="absolute inset-0 p-5 flex flex-col">
                <span className="bg-white/20 text-white text-[10px] font-bold tracking-wider uppercase px-2 py-1 inline-block mb-2 w-fit">
                  GREEN INITIATIVE
                </span>
                <h3 className="text-lg font-bold text-white mb-2">{aboutLinks[4].name}</h3>
                <div className="flex items-start gap-2 flex-1">
                  <div className="w-1 bg-white/30 self-stretch"></div>
                  <p className="text-white/90 text-sm leading-relaxed line-clamp-4">
                    {aboutLinks[4].longDescription}
                  </p>
                </div>
                <span className="inline-flex items-center gap-2 text-white text-sm font-medium group-hover:gap-3 transition-all mt-2">
                  Learn More
                  <ArrowRight className="w-3 h-3" />
                </span>
              </div>
            </Link>

            {/* Innovation Card */}
            <Link 
              to={aboutLinks[5].href}
              className="relative h-[240px] overflow-hidden group"
              style={{
                background: 'linear-gradient(135deg, #7B1FA2 0%, #4A148C 100%)'
              }}
            >
              <div className="absolute right-0 top-0 w-1/2 h-full opacity-30">
                <img
                  src={aboutLinks[5].image}
                  alt=""
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#7B1FA2] to-transparent" />
              </div>
              <div className="absolute inset-0 p-5 flex flex-col">
                <span className="bg-white/20 text-white text-[10px] font-bold tracking-wider uppercase px-2 py-1 inline-block mb-2 w-fit">
                  TECHNOLOGY
                </span>
                <h3 className="text-lg font-bold text-white mb-2">{aboutLinks[5].name}</h3>
                <div className="flex items-start gap-2 flex-1">
                  <div className="w-1 bg-white/30 self-stretch"></div>
                  <p className="text-white/90 text-sm leading-relaxed line-clamp-4">
                    {aboutLinks[5].longDescription}
                  </p>
                </div>
                <span className="inline-flex items-center gap-2 text-white text-sm font-medium group-hover:gap-3 transition-all mt-2">
                  Learn More
                  <ArrowRight className="w-3 h-3" />
                </span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Our Divisions - Bento Grid Layout */}
      <section className="py-20 bg-white">
        <div className="container-wide">
          <div className="mb-10">
            <h2 className="text-2xl font-semibold text-laps-navy inline-block border-b-2 border-laps-navy pb-2">
              Our Divisions
            </h2>
          </div>

          {/* Bento Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
            {/* Architecture - Large Card */}
            <Link
              to={`/${divisions[0].slug}`}
              className="lg:col-span-5 relative h-[300px] overflow-hidden group"
            >
              <img
                src="https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&w=800&q=80"
                alt={divisions[0].name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-laps-navy via-laps-navy/40 to-transparent" />
              <div className="absolute top-4 left-4">
                <div 
                  className="w-12 h-12 flex items-center justify-center"
                  style={{ backgroundColor: divisions[0].accentColor }}
                >
                  <Building2 className="w-6 h-6 text-white" />
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-2xl font-bold text-white mb-2">{divisions[0].name}</h3>
                <p className="text-white/80 text-sm mb-3">{divisions[0].tagline}</p>
                <span 
                  className="inline-flex items-center gap-2 font-medium group-hover:gap-3 transition-all"
                  style={{ color: divisions[0].accentColor }}
                >
                  Explore Division
                  <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </Link>

            {/* Apps - Medium Card */}
            <Link
              to={`/${divisions[1].slug}`}
              className="lg:col-span-4 p-6 flex flex-col h-[300px] group hover:shadow-lg transition-shadow"
              style={{ backgroundColor: divisions[1].accentColor }}
            >
              <div className="w-12 h-12 bg-white/20 flex items-center justify-center mb-4">
                <Code2 className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{divisions[1].name}</h3>
              <p className="text-white/80 text-sm mb-3">{divisions[1].tagline}</p>
              <div className="flex items-start gap-3 flex-1">
                <div className="w-1 bg-white/30 self-stretch"></div>
                <p className="text-white/70 text-sm leading-relaxed">
                  {divisions[1].description}
                </p>
              </div>
              <span className="inline-flex items-center gap-2 text-white font-medium group-hover:gap-3 transition-all mt-4">
                Explore Division
                <ArrowRight className="w-4 h-4" />
              </span>
            </Link>

            {/* Ads - Accent Card */}
            <Link
              to={`/${divisions[2].slug}`}
              className="lg:col-span-3 bg-laps-light p-6 flex flex-col h-[300px] group hover:shadow-lg transition-shadow border-l-4"
              style={{ borderColor: divisions[2].accentColor }}
            >
              <div 
                className="w-12 h-12 flex items-center justify-center mb-4"
                style={{ backgroundColor: `${divisions[2].accentColor}20` }}
              >
                <Megaphone className="w-6 h-6" style={{ color: divisions[2].accentColor }} />
              </div>
              <h3 className="text-xl font-bold text-laps-navy mb-2">{divisions[2].name}</h3>
              <p className="text-laps-slate text-sm mb-3">{divisions[2].tagline}</p>
              <p className="text-laps-slate/70 text-sm leading-relaxed flex-1">
                {divisions[2].description}
              </p>
              <span 
                className="inline-flex items-center gap-2 font-medium group-hover:gap-3 transition-all mt-4"
                style={{ color: divisions[2].accentColor }}
              >
                Explore Division
                <ArrowRight className="w-4 h-4" />
              </span>
            </Link>
          </div>

          {/* Second Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-5">
            {/* Suites Card */}
            <Link
              to={`/${divisions[3].slug}`}
              className="relative h-[240px] overflow-hidden group"
            >
              <img
                src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=800&q=80"
                alt={divisions[3].name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-laps-navy via-laps-navy/60 to-transparent" />
              <div className="absolute top-4 left-4">
                <div 
                  className="w-10 h-10 flex items-center justify-center"
                  style={{ backgroundColor: divisions[3].accentColor }}
                >
                  <PartyPopper className="w-5 h-5 text-white" />
                </div>
              </div>
              <div className="absolute bottom-0 left-0 p-6 max-w-md">
                <h3 className="text-xl font-bold text-white mb-2">{divisions[3].name}</h3>
                <p className="text-white/80 text-sm mb-3">{divisions[3].tagline}</p>
                <span 
                  className="inline-flex items-center gap-2 font-medium group-hover:gap-3 transition-all"
                  style={{ color: divisions[3].accentColor }}
                >
                  Explore Division
                  <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </Link>

            {/* Photo Studios Card */}
            <Link
              to={`/${divisions[4].slug}`}
              className="relative h-[240px] overflow-hidden group"
            >
              <img
                src="https://images.unsplash.com/photo-1542038784456-1ea8e935640e?auto=format&fit=crop&w=800&q=80"
                alt={divisions[4].name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-l from-laps-navy via-laps-navy/60 to-transparent" />
              <div className="absolute top-4 right-4">
                <div 
                  className="w-10 h-10 flex items-center justify-center"
                  style={{ backgroundColor: divisions[4].accentColor }}
                >
                  <Camera className="w-5 h-5 text-white" />
                </div>
              </div>
              <div className="absolute bottom-0 right-0 p-6 text-right max-w-md">
                <h3 className="text-xl font-bold text-white mb-2">{divisions[4].name}</h3>
                <p className="text-white/80 text-sm mb-3">{divisions[4].tagline}</p>
                <span 
                  className="inline-flex items-center gap-2 font-medium group-hover:gap-3 transition-all justify-end"
                  style={{ color: divisions[4].accentColor }}
                >
                  Explore Division
                  <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-laps-navy text-white">
        <div className="container-wide">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-6">Ready to Work Together?</h2>
              <p className="text-white/80 text-lg mb-8">
                Whether you need architectural excellence, digital solutions, marketing expertise, 
                event management, or creative photography—we're here to help.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-laps-gold text-laps-navy font-medium hover:bg-white transition-colors"
                >
                  Get in Touch
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  to="/careers"
                  className="inline-flex items-center gap-2 px-6 py-3 border-2 border-white text-white font-medium hover:bg-white hover:text-laps-navy transition-colors"
                >
                  Join Our Team
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
