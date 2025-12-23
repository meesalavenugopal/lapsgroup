import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, RefreshCw, Facebook, Instagram, ExternalLink } from 'lucide-react';
import { divisions } from '@/data/content';

const facts = [
  {
    title: "LAPS Group's first project was completed in 2020, marking the beginning of our journey.",
    source: "Our History"
  },
  {
    title: "Our Apps division has served over 100,000 users across 15+ countries.",
    source: "LAPS Apps"
  },
  {
    title: "LAPS Architecture has won 8 design awards for sustainable building practices.",
    source: "LAPS Architecture"
  },
  {
    title: "Our Photo division has captured over 500 weddings and corporate events.",
    source: "LAPS Studios"
  },
];

const newsItems = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1560179707-f14e90ef3623?auto=format&fit=crop&w=800&q=80',
    title: 'LAPS Group Expands Operations',
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80',
    title: 'New Architecture Project Launch',
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80',
    title: 'Innovation Lab Opening',
  },
];

const socialPosts = [
  {
    platform: 'facebook',
    title: 'The Journey of',
    brand: 'LAPS GROUP',
    content: "It started with a vision in 2020. Today, it has become a growing enterprise that offers diverse services! Watch the full video to discover LAPS Group's amazing journey here: https://www.youtube...",
    time: '6 hours ago',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=600&q=80',
    cta: 'Watch the full story on Youtube',
  },
  {
    platform: 'instagram',
    title: 'The Journey of',
    brand: 'LAPS GROUP',
    content: "It started with a vision in 2020. Today, it has become a growing enterprise that offers diverse services! Watch the full video to discover LAPS Group's amazing journey here. Link in bio. #ThisIsLAPS...",
    time: '6 hours ago',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=600&q=80',
    cta: 'Watch the full story on Youtube',
  },
];

export function AboutPage() {
  const [currentNewsSlide, setCurrentNewsSlide] = useState(0);
  const [currentFact, setCurrentFact] = useState(0);
  const [isFactLoading, setIsFactLoading] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentNewsSlide((prev) => (prev + 1) % newsItems.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFact((prev) => (prev + 1) % facts.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const refreshFact = () => {
    setIsFactLoading(true);
    setTimeout(() => {
      setCurrentFact((prev) => (prev + 1) % facts.length);
      setIsFactLoading(false);
    }, 500);
  };

  const aboutLinks = [
    { 
      name: 'Leadership', 
      href: '/about/leadership', 
      description: 'Meet our visionary leaders driving LAPS Group forward',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=600&q=80'
    },
    { 
      name: 'Values & Purpose', 
      href: '/about/values', 
      description: 'The principles and purpose that guide everything we do',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=600&q=80'
    },
    { 
      name: 'Milestones', 
      href: '/about/milestones', 
      description: 'Key moments in our journey of growth and achievement',
      image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=600&q=80'
    },
    { 
      name: 'Heritage', 
      href: '/about/heritage', 
      description: 'Where it all began and the legacy we continue to build',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=600&q=80'
    },
    { 
      name: 'Sustainability', 
      href: '/about/sustainability', 
      description: 'Our commitment to building a greener, sustainable future',
      image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=600&q=80'
    },
    { 
      name: 'Innovation', 
      href: '/about/innovation', 
      description: 'Pioneering solutions that shape the future of industries',
      image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=600&q=80'
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
              <h2 className="section-title">Our Story</h2>
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

      {/* In the News - Bento Grid */}
      <section className="py-20 bg-laps-light">
        <div className="container-wide">
          {/* Section Header - Underlined like Tata */}
          <div className="mb-10">
            <h2 className="text-2xl font-semibold text-laps-navy inline-block border-b-2 border-laps-navy pb-2">
              In the News
            </h2>
          </div>

          {/* Main News Grid - Bento Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 mb-6">
            {/* Left - Image Carousel (spans 5 columns) */}
            <div className="lg:col-span-5 relative aspect-[4/3] lg:aspect-auto lg:h-[380px] overflow-hidden bg-laps-navy">
              {newsItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: index === currentNewsSlide ? 1 : 0 }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                </motion.div>
              ))}
              {/* Carousel Dots - Square like Tata */}
              <div className="absolute bottom-4 left-4 flex items-center gap-2">
                {newsItems.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentNewsSlide(index)}
                    className={`w-2 h-2 transition-all ${
                      index === currentNewsSlide ? 'bg-white' : 'bg-white/40'
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Middle - Press Release (spans 4 columns) */}
            <div className="lg:col-span-4 bg-white p-8 flex flex-col h-auto lg:h-[380px]">
              <span className="text-laps-blue text-xs font-semibold tracking-wider uppercase mb-6">
                PRESS RELEASE
              </span>
              <Link to="/newsroom" className="group">
                <h3 className="text-xl font-semibold text-laps-navy mb-6 leading-snug group-hover:text-laps-blue transition-colors">
                  LAPS Group Announces Strategic Expansion into New Markets Across India
                </h3>
              </Link>
              <div className="flex items-start gap-3 mt-auto">
                <div className="w-1 bg-laps-gold self-stretch"></div>
                <p className="text-laps-slate text-sm leading-relaxed">
                  Marks a significant step towards establishing LAPS as a leading multi-division enterprise in the region.
                </p>
              </div>
            </div>

            {/* Right - Did You Know (spans 3 columns) - Bright Blue like Tata */}
            <div className="lg:col-span-3 bg-[#00A3E0] p-6 flex flex-col text-white h-auto lg:h-[380px]">
              <span className="bg-white/20 text-white text-[10px] font-bold tracking-wider uppercase px-3 py-1.5 inline-block mb-4 w-fit">
                FACTS
              </span>
              <h3 className="text-xl font-bold mb-4">Did you know</h3>
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentFact}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="flex-1"
                >
                  <div className="flex items-start gap-3">
                    <div className="w-1 bg-white/50 self-stretch min-h-[60px]"></div>
                    <p className="text-white text-sm leading-relaxed">
                      {facts[currentFact].title}
                    </p>
                  </div>
                  <p className="text-white/80 text-xs mt-4 font-medium">
                    {facts[currentFact].source}
                  </p>
                </motion.div>
              </AnimatePresence>
              <button 
                onClick={refreshFact}
                className="self-end mt-auto p-2 hover:bg-white/10 transition-colors"
                aria-label="Show another fact"
              >
                <RefreshCw className={`w-5 h-5 ${isFactLoading ? 'animate-spin' : ''}`} />
              </button>
            </div>
          </div>

          {/* Social Media Section - 2 columns with image overlay */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {/* Facebook Card */}
            <div 
              className="relative h-[280px] overflow-hidden group cursor-pointer"
              style={{
                background: 'linear-gradient(135deg, #1877F2 0%, #0D47A1 100%)'
              }}
            >
              {/* Background Image - Right Side */}
              <div className="absolute right-0 top-0 w-1/2 h-full opacity-30">
                <img
                  src={socialPosts[0].image}
                  alt=""
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#1877F2] to-transparent" />
              </div>
              
              {/* Facebook Icon */}
              <div className="absolute top-5 left-5">
                <Facebook className="w-5 h-5 text-white/80" />
              </div>

              {/* Content */}
              <div className="absolute inset-0 p-6 pt-14 flex flex-col">
                <div className="flex-1">
                  <p className="text-white/90 font-serif italic text-lg mb-1">{socialPosts[0].title}</p>
                  <p className="text-white font-bold text-2xl mb-4">{socialPosts[0].brand}</p>
                  <div className="flex items-start gap-2 max-w-[70%]">
                    <div className="w-1 bg-white/30 self-stretch min-h-[80px]"></div>
                    <div>
                      <p className="text-white/90 text-sm leading-relaxed line-clamp-4">
                        {socialPosts[0].content}
                      </p>
                      <p className="text-white/60 text-xs mt-2">{socialPosts[0].time}</p>
                    </div>
                  </div>
                </div>
                
                {/* CTA */}
                <div className="flex items-center justify-between mt-4">
                  <span className="text-white/80 text-sm font-medium">{socialPosts[0].cta}</span>
                  <ExternalLink className="w-4 h-4 text-white/60 group-hover:text-white transition-colors" />
                </div>
              </div>
            </div>

            {/* Instagram Card */}
            <div 
              className="relative h-[280px] overflow-hidden group cursor-pointer"
              style={{
                background: 'linear-gradient(135deg, #F77737 0%, #E91E63 50%, #833AB4 100%)'
              }}
            >
              {/* Background Image - Right Side with Logo */}
              <div className="absolute right-0 top-0 w-1/2 h-full">
                <img
                  src={socialPosts[1].image}
                  alt=""
                  className="w-full h-full object-cover opacity-40"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#F77737] via-transparent to-transparent" />
                {/* LAPS Logo overlay */}
                <div className="absolute top-4 right-4 bg-white px-3 py-2">
                  <span className="text-laps-navy font-bold text-sm">LAPS</span>
                </div>
                {/* Decorative text */}
                <div className="absolute bottom-8 right-6 text-right">
                  <p className="text-white/60 font-serif italic text-lg">{socialPosts[1].title}</p>
                  <p className="text-white/40 font-bold text-xl">{socialPosts[1].brand}</p>
                  <p className="text-white/40 text-sm mt-2">{socialPosts[1].cta}</p>
                </div>
              </div>
              
              {/* Instagram Icon */}
              <div className="absolute top-5 left-5">
                <Instagram className="w-5 h-5 text-white/80" />
              </div>

              {/* Content */}
              <div className="absolute inset-0 p-6 pt-14 flex flex-col">
                <div className="flex-1 max-w-[55%]">
                  <div className="flex items-start gap-2">
                    <div className="w-1 bg-white/30 self-stretch min-h-[100px]"></div>
                    <div>
                      <p className="text-white/90 text-sm leading-relaxed line-clamp-5">
                        {socialPosts[1].content}
                      </p>
                      <p className="text-white/60 text-xs mt-2">{socialPosts[1].time}</p>
                    </div>
                  </div>
                </div>
                
                {/* CTA */}
                <div className="flex items-center justify-between mt-4">
                  <span className="text-white/80 text-sm font-medium">{socialPosts[1].cta}</span>
                  <ExternalLink className="w-4 h-4 text-white/60 group-hover:text-white transition-colors" />
                </div>
              </div>
            </div>
          </div>

          {/* View All Link */}
          <div className="mt-10 text-center">
            <Link
              to="/newsroom"
              className="inline-flex items-center gap-2 text-laps-navy hover:text-laps-gold font-medium transition-colors"
            >
              View All News
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Explore About Pages */}
      <section className="py-20 bg-white">
        <div className="container-wide">
          <div className="mb-10">
            <h2 className="text-2xl font-semibold text-laps-navy inline-block border-b-2 border-laps-navy pb-2">
              Explore LAPS Group
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {aboutLinks.map((link, index) => (
              <motion.div
                key={link.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  to={link.href}
                  className="block bg-white shadow-lg hover:shadow-xl transition-all group overflow-hidden"
                >
                  {/* Image */}
                  <div className="h-48 overflow-hidden">
                    <img
                      src={link.image}
                      alt={link.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  {/* Content */}
                  <div className="p-6 border-t-4 border-laps-gold">
                    <h3 className="text-xl font-semibold text-laps-navy mb-2">{link.name}</h3>
                    <p className="text-laps-slate text-sm mb-4">{link.description}</p>
                    <span className="flex items-center gap-2 text-laps-gold font-medium group-hover:gap-3 transition-all">
                      Learn More
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Divisions */}
      <section className="py-20 bg-laps-light">
        <div className="container-wide">
          <div className="mb-10">
            <h2 className="text-2xl font-semibold text-laps-navy inline-block border-b-2 border-laps-navy pb-2">
              Our Divisions
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {divisions.map((division, index) => (
              <motion.div
                key={division.key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  to={`/${division.slug}`}
                  className="block bg-laps-light p-6 hover:shadow-lg transition-shadow border-l-4"
                  style={{ borderColor: division.accentColor }}
                >
                  <h3 className="text-lg font-semibold text-laps-navy mb-2">
                    {division.name}
                  </h3>
                  <p className="text-sm text-laps-slate mb-4">{division.tagline}</p>
                  <span
                    className="flex items-center gap-2 text-sm font-medium"
                    style={{ color: division.accentColor }}
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </Link>
              </motion.div>
            ))}
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
