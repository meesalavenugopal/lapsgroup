import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { MapPin, Clock, Briefcase, ArrowRight, Users, Heart, Zap, ChevronLeft, ChevronRight, Pause, Play, GraduationCap, Coffee, Laptop, Star, Quote } from 'lucide-react';
import { jobOpenings, divisions } from '@/data/content';
import clsx from 'clsx';

export function CareersPage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [selectedDivision, setSelectedDivision] = useState<string | null>(null);

  const getDivisionInfo = (key: string) => {
    return divisions.find((d) => d.key === key);
  };

  const heroSlides = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1920&q=80',
      tag: 'We Are Hiring',
      subtitle: 'Join LAPS Group',
      title: 'Build Your Future With Us',
      description: 'Be part of a dynamic team driving excellence across architecture, technology, marketing, events, and photography.',
      ctaText: 'View Open Positions',
      ctaLink: '#openings',
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1920&q=80',
      tag: 'Culture',
      subtitle: 'Life at LAPS',
      title: 'Where Passion Meets Purpose',
      description: 'Join a workplace that values creativity, collaboration, and continuous growth across all our divisions.',
      ctaText: 'Explore Our Culture',
      ctaLink: '#culture',
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=1920&q=80',
      tag: 'Growth',
      subtitle: 'Career Development',
      title: 'Grow With Every Project',
      description: 'Access mentorship programs, learning opportunities, and cross-division projects to accelerate your career.',
      ctaText: 'Learn More',
      ctaLink: '#benefits',
    },
  ];

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  }, [heroSlides.length]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  }, [heroSlides.length]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(nextSlide, 8000);
    return () => clearInterval(interval);
  }, [isPlaying, nextSlide]);

  const benefits = [
    { 
      icon: Heart, 
      title: 'Health & Wellness', 
      description: 'Comprehensive health insurance covering you and your family, mental health support, gym memberships, and wellness programs.',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&q=80'
    },
    { 
      icon: Users, 
      title: 'Collaborative Culture', 
      description: 'Work with talented people across all our divisions on exciting projects.',
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80'
    },
    { 
      icon: Zap, 
      title: 'Growth Opportunities', 
      description: 'Continuous learning and career development programs.',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80'
    },
    { 
      icon: GraduationCap, 
      title: 'Learning Budget', 
      description: 'Annual budget for courses, certifications, and conferences.',
      image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&q=80'
    },
    { 
      icon: Coffee, 
      title: 'Work-Life Balance', 
      description: 'Flexible hours and remote work options available.',
      image: 'https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?w=800&q=80'
    },
    { 
      icon: Laptop, 
      title: 'Best Tools', 
      description: 'Top-tier equipment and software to do your best work.',
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&q=80'
    },
  ];

  const testimonials = [
    {
      quote: "LAPS Group gave me the opportunity to work on projects that truly challenge and inspire me. The cross-division collaboration is unlike anything I've experienced.",
      author: 'Priya Sharma',
      role: 'Senior Architect',
      division: 'Architecture',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80',
    },
    {
      quote: "The learning culture here is incredible. I've grown more in 2 years at LAPS than I did in 5 years elsewhere. They truly invest in their people.",
      author: 'Rahul Verma',
      role: 'Lead Developer',
      division: 'Apps',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80',
    },
  ];

  const lifeImages = [
    'https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=600&q=80',
    'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&q=80',
    'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=600&q=80',
    'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=600&q=80',
    'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=600&q=80',
    'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=600&q=80',
  ];

  const hiringSteps = [
    { step: '01', title: 'Apply', description: 'Submit your application through our portal with your resume and portfolio.' },
    { step: '02', title: 'Review', description: 'Our team reviews your application and assesses your fit for the role.' },
    { step: '03', title: 'Interview', description: 'Meet with our team through video calls and technical assessments.' },
    { step: '04', title: 'Offer', description: 'Receive your offer and begin your journey with LAPS Group.' },
  ];

  const filteredJobs = selectedDivision 
    ? jobOpenings.filter(job => job.division === selectedDivision)
    : jobOpenings;

  return (
    <div>
      {/* Hero Carousel */}
      <div className="relative min-h-[650px] max-h-[800px] overflow-hidden bg-laps-navy">
        <AnimatePresence initial={false} mode="popLayout">
          {heroSlides.map(
            (slide, index) =>
              index === currentSlide && (
                <motion.div
                  key={slide.id}
                  initial={{ x: '100%' }}
                  animate={{ x: 0 }}
                  exit={{ x: '-100%' }}
                  transition={{ duration: 0.7, ease: 'easeInOut' }}
                  className="absolute inset-0"
                >
                  <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url(${slide.image})` }}
                  >
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
                    <div className="max-w-2xl text-white">
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="inline-block px-4 py-1.5 bg-laps-blue text-sm font-medium mb-4"
                      >
                        {slide.tag}
                      </motion.div>

                      <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="text-laps-gold text-lg font-medium mb-2"
                      >
                        {slide.subtitle}
                      </motion.p>

                      <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight whitespace-nowrap"
                      >
                        {slide.title}
                      </motion.h1>

                      <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                        className="text-lg text-white/80 mb-8 max-w-lg"
                      >
                        {slide.description}
                      </motion.p>

                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 }}
                      >
                        <a
                          href={slide.ctaLink}
                          className="inline-flex items-center gap-3 border-2 border-laps-gold text-laps-gold px-5 py-2.5 text-sm font-medium hover:bg-laps-gold hover:text-laps-navy transition-all duration-300"
                        >
                          {slide.ctaText}
                          <ArrowRight className="w-4 h-4" />
                        </a>
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              )
          )}
        </AnimatePresence>

        <button onClick={prevSlide} className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 transition-colors">
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button onClick={nextSlide} className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 transition-colors">
          <ChevronRight className="w-6 h-6" />
        </button>

        <div className="absolute bottom-8 left-0 right-0">
          <div className="container-wide flex items-center justify-between">
            <div className="flex items-center gap-4 text-white">
              <span className="text-3xl font-bold">{currentSlide + 1}</span>
              <span className="text-white/50">/</span>
              <span className="text-white/50">{heroSlides.length}</span>
            </div>

            <div className="flex items-center gap-2">
              {heroSlides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={clsx('h-0.5 transition-all duration-500', index === currentSlide ? 'bg-white w-12' : 'bg-white/30 w-8 hover:bg-white/50')}
                />
              ))}
            </div>

            <button onClick={() => setIsPlaying(!isPlaying)} className="flex items-center gap-2 text-white/80 hover:text-white transition-colors">
              {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
              <span className="text-sm">{isPlaying ? 'Pause' : 'Play'}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Stats - Bento Grid */}
      <section className="py-16 bg-laps-navy">
        <div className="container-wide">
          <div className="grid grid-cols-12 gap-4">
            {/* Large stat - Team Members */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="col-span-12 md:col-span-6 lg:col-span-4 bg-laps-gold p-8 min-h-[200px] flex flex-col justify-between"
            >
              <Users className="w-10 h-10 text-laps-navy/30" />
              <div>
                <div className="text-6xl font-bold text-laps-navy mb-2">200+</div>
                <div className="text-laps-navy/70 text-lg">Team Members</div>
              </div>
            </motion.div>

            {/* Divisions stat */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="col-span-6 md:col-span-3 lg:col-span-2 bg-laps-navy border border-white/10 p-6 min-h-[200px] flex flex-col justify-between"
            >
              <Briefcase className="w-8 h-8 text-laps-gold/50" />
              <div>
                <div className="text-5xl font-bold text-white">5</div>
                <div className="text-white/60">Divisions</div>
              </div>
            </motion.div>

            {/* Retention stat */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="col-span-6 md:col-span-3 lg:col-span-3 bg-laps-navy border border-white/10 p-6 min-h-[200px] flex flex-col justify-between"
            >
              <Heart className="w-8 h-8 text-rose-400/50" />
              <div>
                <div className="text-5xl font-bold text-laps-gold">95%</div>
                <div className="text-white/60">Retention Rate</div>
              </div>
            </motion.div>

            {/* Glassdoor stat */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="col-span-12 md:col-span-12 lg:col-span-3 bg-emerald-500 p-6 min-h-[200px] flex items-center justify-between"
            >
              <div>
                <div className="text-5xl font-bold text-white">4.8</div>
                <div className="text-white/90">Glassdoor Rating</div>
              </div>
              <div className="flex flex-col items-center gap-1">
                <div className="flex gap-0.5">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} className={clsx("w-5 h-5", i <= 4 ? "text-white fill-white" : "text-white/40")} />
                  ))}
                </div>
                <span className="text-xs text-white/70">Based on 150+ reviews</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Join Us - Bento Benefits Grid */}
      <section id="benefits" className="py-24 bg-white">
        <div className="container-wide">
          <div className="mb-10">
            <h2 className="text-2xl font-semibold text-laps-navy inline-block border-b-2 border-laps-navy pb-2">Why Join LAPS Group?</h2>
          </div>

          <div className="grid grid-cols-12 gap-4">
            {/* Featured benefit - large with image background */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="col-span-12 lg:col-span-6 row-span-2 relative overflow-hidden min-h-[450px] group"
            >
              <img 
                src={benefits[0].image}
                alt={benefits[0].title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-laps-navy via-laps-navy/60 to-transparent" />
              <div className="relative h-full p-10 flex flex-col justify-end">
                <Heart className="w-12 h-12 text-laps-gold mb-4" />
                <h3 className="text-3xl font-bold text-white mb-3">{benefits[0].title}</h3>
                <p className="text-white/80 text-lg max-w-md">{benefits[0].description}</p>
              </div>
            </motion.div>

            {/* Other benefits - clean cards with images */}
            {benefits.slice(1).map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="col-span-12 sm:col-span-6 lg:col-span-3 bg-laps-navy overflow-hidden group"
              >
                <div className="relative h-28 overflow-hidden">
                  <img 
                    src={benefit.image}
                    alt={benefit.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-laps-navy to-transparent" />
                </div>
                <div className="p-6">
                  <benefit.icon className="w-8 h-8 text-laps-gold mb-3" />
                  <h3 className="text-lg font-semibold text-white mb-2">{benefit.title}</h3>
                  <p className="text-white/60 text-sm">{benefit.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Life at LAPS - Bento Photo Grid */}
      <section id="culture" className="py-20 bg-laps-light">
        <div className="container-wide">
          <div className="mb-10">
            <h2 className="text-2xl font-semibold text-laps-navy inline-block border-b-2 border-laps-navy pb-2">Life at LAPS</h2>
          </div>

          <div className="grid grid-cols-12 gap-4">
            {/* Large image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="col-span-12 md:col-span-8 row-span-2 relative overflow-hidden group"
            >
              <img src={lifeImages[0]} alt="Life at LAPS" className="w-full h-full object-cover min-h-[400px] group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-laps-navy/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="absolute bottom-6 left-6 opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="text-white font-semibold text-lg">Team Collaboration</span>
              </div>
            </motion.div>

            {/* Small images */}
            {lifeImages.slice(1, 3).map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="col-span-6 md:col-span-4 relative overflow-hidden group aspect-square"
              >
                <img src={image} alt={`Life at LAPS ${index + 2}`} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </motion.div>
            ))}

            {/* Bottom row */}
            {lifeImages.slice(3).map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="col-span-6 md:col-span-4 relative overflow-hidden group aspect-video"
              >
                <img src={image} alt={`Life at LAPS ${index + 4}`} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials - Bento Style */}
      <section className="py-20 bg-white">
        <div className="container-wide">
          <div className="mb-10">
            <h2 className="text-2xl font-semibold text-laps-navy inline-block border-b-2 border-laps-navy pb-2">What Our Team Says</h2>
          </div>

          <div className="grid grid-cols-12 gap-4">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={clsx(
                  "relative overflow-hidden group",
                  index === 0 ? "col-span-12 lg:col-span-7 bg-laps-navy p-10" : "col-span-12 lg:col-span-5 bg-laps-light p-10"
                )}
              >
                <Quote className={clsx("w-12 h-12 mb-6", index === 0 ? "text-laps-gold/30" : "text-laps-blue/20")} />
                <p className={clsx("text-xl mb-8 leading-relaxed", index === 0 ? "text-white" : "text-laps-navy")}>
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center gap-4">
                  <img src={testimonial.image} alt={testimonial.author} className="w-14 h-14 rounded-full object-cover" />
                  <div>
                    <p className={clsx("font-semibold", index === 0 ? "text-white" : "text-laps-navy")}>{testimonial.author}</p>
                    <p className={clsx("text-sm", index === 0 ? "text-white/60" : "text-laps-slate")}>{testimonial.role} • {testimonial.division}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions - Bento Style */}
      <section id="openings" className="py-24 bg-laps-light">
        <div className="container-wide">
          <div className="grid grid-cols-12 gap-6">
            {/* Sidebar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="col-span-12 lg:col-span-4"
            >
              <div className="bg-laps-navy p-8 sticky top-24">
                <Briefcase className="w-12 h-12 text-laps-gold mb-6" />
                <h2 className="text-3xl font-bold text-white mb-4">Open Positions</h2>
                <p className="text-white/60 mb-8">Explore current opportunities across all our divisions.</p>

                <div className="space-y-2">
                  <button
                    onClick={() => setSelectedDivision(null)}
                    className={clsx(
                      "w-full text-left px-4 py-3 text-sm font-medium transition-colors",
                      !selectedDivision ? "bg-laps-gold text-laps-navy" : "bg-white/10 text-white hover:bg-white/20"
                    )}
                  >
                    All Divisions
                  </button>
                  {divisions.map((div) => (
                    <button
                      key={div.key}
                      onClick={() => setSelectedDivision(div.key)}
                      className={clsx(
                        "w-full text-left px-4 py-3 text-sm font-medium transition-colors",
                        selectedDivision === div.key ? "bg-laps-gold text-laps-navy" : "bg-white/10 text-white hover:bg-white/20"
                      )}
                    >
                      {div.name.split(' ').pop()}
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Job Listings */}
            <div className="col-span-12 lg:col-span-8 space-y-4">
              {filteredJobs.map((job, index) => {
                const division = getDivisionInfo(job.division);
                return (
                  <motion.div
                    key={job.id}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white p-6 shadow-sm hover:shadow-lg transition-all group"
                  >
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                      <div className="flex gap-4">
                        <div className="w-1 self-stretch hidden sm:block" style={{ backgroundColor: division?.accentColor }} />
                        <div>
                          <div className="flex items-center gap-3 mb-2">
                            <span className="px-3 py-1 text-sm font-medium" style={{ backgroundColor: `${division?.accentColor}15`, color: division?.accentColor }}>
                              {division?.name}
                            </span>
                          </div>
                          <h3 className="text-xl font-semibold text-laps-navy group-hover:text-laps-blue transition-colors">{job.title}</h3>
                          <div className="flex flex-wrap items-center gap-4 mt-3 text-sm text-laps-slate">
                            <span className="flex items-center gap-1"><MapPin className="w-4 h-4" />{job.location}</span>
                            <span className="flex items-center gap-1"><Briefcase className="w-4 h-4" />{job.type}</span>
                            <span className="flex items-center gap-1"><Clock className="w-4 h-4" />{job.experience}</span>
                          </div>
                        </div>
                      </div>
                      <Link to={`/careers/openings/${job.id}`} className="inline-flex items-center gap-2 bg-laps-navy text-white px-6 py-3 font-medium hover:bg-laps-blue transition-colors whitespace-nowrap">
                        Apply Now <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </motion.div>
                );
              })}

              {filteredJobs.length === 0 && (
                <div className="text-center py-12 bg-white">
                  <Briefcase className="w-12 h-12 text-laps-slate/30 mx-auto mb-4" />
                  <p className="text-laps-slate">No open positions in this division. Check back later!</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Hiring Process - Bento Timeline */}
      <section className="py-20 bg-white">
        <div className="container-wide">
          <div className="mb-10">
            <h2 className="text-2xl font-semibold text-laps-navy inline-block border-b-2 border-laps-navy pb-2">Our Hiring Process</h2>
          </div>

          <div className="grid grid-cols-12 gap-4">
            {hiringSteps.map((process, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={clsx(
                  "relative p-8",
                  index === 0 ? "col-span-12 md:col-span-6 lg:col-span-4 bg-laps-navy text-white min-h-[250px]" :
                  index === 1 ? "col-span-12 md:col-span-6 lg:col-span-4 bg-laps-gold text-laps-navy min-h-[250px]" :
                  index === 2 ? "col-span-12 md:col-span-6 lg:col-span-4 bg-laps-light text-laps-navy min-h-[250px]" :
                  "col-span-12 md:col-span-6 lg:col-span-12 bg-laps-blue text-white"
                )}
              >
                <div className="text-6xl font-bold opacity-20 mb-4">{process.step}</div>
                <h3 className="text-2xl font-bold mb-3">{process.title}</h3>
                <p className={clsx("text-lg", index === 2 ? "text-laps-slate" : index === 1 ? "text-laps-navy/70" : "text-white/70")}>{process.description}</p>
                {index < 3 && (
                  <div className="absolute top-1/2 -right-2 w-4 h-4 bg-laps-gold hidden lg:block transform -translate-y-1/2 rotate-45" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA - Bento */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1920&q=80" alt="Team" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-laps-navy/90" />
        </div>
        <div className="container-wide relative z-10">
          <div className="grid grid-cols-12 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="col-span-12 lg:col-span-7"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Don't See the Right Role?</h2>
              <p className="text-xl text-white/70">We're always interested in hearing from talented individuals. Send us your resume and we'll keep you in mind.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="col-span-12 lg:col-span-5 flex flex-col sm:flex-row gap-4 lg:justify-end lg:items-center"
            >
              <Link to="/contact" className="inline-flex items-center justify-center gap-2 bg-laps-gold text-laps-navy px-8 py-4 font-medium hover:bg-laps-gold/90 transition-colors">
                Send Your Resume <ArrowRight className="w-5 h-5" />
              </Link>
              <Link to="/about" className="inline-flex items-center justify-center gap-2 border-2 border-white/30 text-white px-8 py-4 font-medium hover:bg-white/10 transition-colors">
                Learn About Us
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
