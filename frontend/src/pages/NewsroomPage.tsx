import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, ChevronLeft, ChevronRight, Pause, Play, Newspaper, Video, Mic, FileText, Download, ExternalLink } from 'lucide-react';
import { newsItems, divisions } from '@/data/content';
import clsx from 'clsx';

export function NewsroomPage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'long',
      day: 'numeric',
      year: 'numeric',
    });
  };

  const getDivisionInfo = (key: string | undefined) => {
    if (!key) return null;
    return divisions.find((d) => d.key === key);
  };

  const heroSlides = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=1920&q=80',
      tag: 'Latest News',
      subtitle: 'LAPS Group Newsroom',
      title: 'Stories That Shape Our Journey',
      description: 'Stay updated with the latest news, announcements, and insights from across all LAPS Group divisions.',
      ctaText: 'Read Featured Story',
      ctaLink: '#featured',
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1920&q=80',
      tag: 'Press Release',
      subtitle: 'Company Announcements',
      title: 'Award-Winning Excellence',
      description: 'Celebrating our recent achievements and industry recognitions across multiple divisions.',
      ctaText: 'View Press Releases',
      ctaLink: '#press',
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=1920&q=80',
      tag: 'Insights',
      subtitle: 'Industry Perspectives',
      title: 'Thought Leadership',
      description: 'Expert insights and analysis from our team leaders on emerging trends and innovations.',
      ctaText: 'Explore Insights',
      ctaLink: '#insights',
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

  const pressReleases = [
    { date: 'December 20, 2024', title: 'LAPS Group Announces Expansion into Southeast Asian Markets', division: 'Corporate' },
    { date: 'December 15, 2024', title: 'LAPS Architecture Wins National Design Award for Sustainable Project', division: 'Architecture' },
    { date: 'December 10, 2024', title: 'LAPS Apps Launches Revolutionary AI-Powered Platform', division: 'Apps' },
    { date: 'December 5, 2024', title: 'LAPS Group Partners with Leading Tech Universities', division: 'Corporate' },
  ];

  const insights = [
    { image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80', category: 'Industry Trends', title: 'The Future of Sustainable Architecture in Urban Planning', author: 'Priya Sharma', role: 'Head of Architecture' },
    { image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&q=80', category: 'Technology', title: 'How AI is Transforming Modern Software Development', author: 'Rahul Verma', role: 'CTO, LAPS Apps' },
    { image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80', category: 'Marketing', title: 'Digital Marketing Trends to Watch in 2025', author: 'Ananya Reddy', role: 'Marketing Director' },
  ];

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
                        className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight"
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

      {/* Media Categories - Bento Grid */}
      <section className="py-16 bg-laps-navy">
        <div className="container-wide">
          <div className="grid grid-cols-12 gap-4">
            {/* Large card */}
            <motion.a
              href="#"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="col-span-12 md:col-span-6 lg:col-span-5 row-span-2 relative overflow-hidden group bg-gradient-to-br from-laps-blue to-laps-blue/80 p-8 flex flex-col justify-between min-h-[300px]"
            >
              <div>
                <Newspaper className="w-12 h-12 text-white/80 mb-4" />
                <h3 className="text-2xl font-bold text-white mb-2">Press Releases</h3>
                <p className="text-white/70">Official announcements and company news</p>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-5xl font-bold text-white/20">45</span>
                <ArrowRight className="w-6 h-6 text-white group-hover:translate-x-2 transition-transform" />
              </div>
            </motion.a>

            {/* Medium cards */}
            <motion.a
              href="#"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="col-span-6 md:col-span-3 lg:col-span-4 relative overflow-hidden group bg-laps-gold p-6 flex flex-col justify-between min-h-[140px]"
            >
              <Video className="w-8 h-8 text-laps-navy/80" />
              <div>
                <h3 className="text-lg font-bold text-laps-navy">Video Updates</h3>
                <div className="flex items-center justify-between mt-2">
                  <span className="text-3xl font-bold text-laps-navy/30">28</span>
                  <ArrowRight className="w-5 h-5 text-laps-navy group-hover:translate-x-2 transition-transform" />
                </div>
              </div>
            </motion.a>

            <motion.a
              href="#"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="col-span-6 md:col-span-3 lg:col-span-3 relative overflow-hidden group bg-white/10 backdrop-blur-sm p-6 flex flex-col justify-between min-h-[140px]"
            >
              <Mic className="w-8 h-8 text-emerald-400" />
              <div>
                <h3 className="text-lg font-bold text-white">Podcasts</h3>
                <div className="flex items-center justify-between mt-2">
                  <span className="text-3xl font-bold text-white/20">12</span>
                  <ArrowRight className="w-5 h-5 text-white group-hover:translate-x-2 transition-transform" />
                </div>
              </div>
            </motion.a>

            <motion.a
              href="#"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="col-span-12 md:col-span-6 lg:col-span-7 relative overflow-hidden group bg-white/5 p-6 flex items-center justify-between"
            >
              <div className="flex items-center gap-4">
                <FileText className="w-10 h-10 text-purple-400" />
                <div>
                  <h3 className="text-xl font-bold text-white">Annual Reports & Documents</h3>
                  <p className="text-white/50 text-sm">18 publications available for download</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Download className="w-5 h-5 text-white/50" />
                <ArrowRight className="w-5 h-5 text-white group-hover:translate-x-2 transition-transform" />
              </div>
            </motion.a>
          </div>
        </div>
      </section>

      {/* Featured Article - Bento Style */}
      <section id="featured" className="py-20 bg-laps-light">
        <div className="container-wide">
          <div className="mb-10">
            <h2 className="text-2xl font-semibold text-laps-navy inline-block border-b-2 border-laps-navy pb-2">Featured Story</h2>
          </div>

          {newsItems[0] && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-12 gap-4"
            >
              {/* Main featured image */}
              <Link to={newsItems[0].link} className="col-span-12 lg:col-span-7 relative overflow-hidden group aspect-[16/10] lg:aspect-auto lg:row-span-2">
                <img src={newsItems[0].image} alt={newsItems[0].title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-laps-navy/90 via-laps-navy/30 to-transparent" />
                <div className="absolute bottom-0 left-0 w-full h-1 bg-white" />
                <div className="absolute top-6 left-6">
                  <span className="px-4 py-2 bg-laps-gold text-laps-navy text-sm font-bold">Featured</span>
                </div>
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-sm">{newsItems[0].category}</span>
                    {newsItems[0].division && (
                      <span className="px-3 py-1 bg-laps-gold/20 text-laps-gold text-sm">{getDivisionInfo(newsItems[0].division)?.name}</span>
                    )}
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-white mb-3 group-hover:text-laps-gold transition-colors">{newsItems[0].title}</h2>
                  <p className="text-white/70 mb-4 line-clamp-2">{newsItems[0].excerpt}</p>
                  <div className="flex items-center gap-2 text-white/50 text-sm">
                    <Calendar className="w-4 h-4" />
                    {formatDate(newsItems[0].date)}
                  </div>
                </div>
              </Link>

              {/* Side cards */}
              <div className="col-span-12 lg:col-span-5 grid grid-cols-2 gap-4">
                {newsItems.slice(1, 3).map((item, index) => {
                  const division = getDivisionInfo(item.division);
                  return (
                    <Link
                      key={item.id}
                      to={item.link}
                      className={clsx(
                        "relative overflow-hidden group bg-white",
                        index === 0 ? "col-span-2" : "col-span-2"
                      )}
                    >
                      <div className="flex flex-col md:flex-row h-full">
                        <div className="relative w-full md:w-2/5 aspect-video md:aspect-auto overflow-hidden">
                          <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                          <div className="absolute top-3 left-3">
                            <span className="px-2 py-1 bg-laps-navy text-white text-xs">{item.category}</span>
                          </div>
                        </div>
                        <div className="flex-1 p-5 flex flex-col justify-center">
                          {division && (
                            <div className="flex items-center gap-2 mb-2">
                              <div className="w-2 h-2" style={{ backgroundColor: division.accentColor }} />
                              <span className="text-xs text-laps-slate">{division.name}</span>
                            </div>
                          )}
                          <h3 className="font-semibold text-laps-navy group-hover:text-laps-blue transition-colors line-clamp-2 mb-2">{item.title}</h3>
                          <span className="text-xs text-laps-slate">{formatDate(item.date)}</span>
                        </div>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </motion.div>
          )}
        </div>
      </section>

      {/* Latest News - Bento Grid */}
      <section className="py-20 bg-white">
        <div className="container-wide">
          <div className="mb-10">
            <h2 className="text-2xl font-semibold text-laps-navy inline-block border-b-2 border-laps-navy pb-2">Latest News</h2>
          </div>

          <div className="grid grid-cols-12 gap-4">
            {/* Large feature card */}
            {newsItems[3] && (
              <motion.article
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="col-span-12 lg:col-span-8 row-span-2"
              >
                <Link to={newsItems[3].link} className="block relative overflow-hidden group h-full min-h-[400px]">
                  <img src={newsItems[3].image} alt={newsItems[3].title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-laps-navy via-laps-navy/50 to-transparent" />
                  <div className="absolute top-6 left-6">
                    <span className="px-3 py-1 bg-laps-blue text-white text-sm font-medium">{newsItems[3].category}</span>
                  </div>
                  <div className="absolute bottom-6 left-6 right-6">
                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-laps-gold transition-colors">{newsItems[3].title}</h3>
                    <p className="text-white/70 mb-4 line-clamp-2">{newsItems[3].excerpt}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-white/50 text-sm">{formatDate(newsItems[3].date)}</span>
                      <span className="text-laps-gold flex items-center gap-2">Read More <ArrowRight className="w-4 h-4" /></span>
                    </div>
                  </div>
                </Link>
              </motion.article>
            )}

            {/* Stack of smaller cards */}
            {newsItems.slice(4, 6).map((item, index) => {
              const division = getDivisionInfo(item.division);
              return (
                <motion.article
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="col-span-12 sm:col-span-6 lg:col-span-4 bg-laps-light overflow-hidden group"
                >
                  <Link to={item.link} className="block h-full">
                    <div className="relative aspect-[16/10] overflow-hidden">
                      <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                      <div className="absolute top-3 left-3">
                        <span className="px-2 py-1 bg-laps-navy/90 text-white text-xs">{item.category}</span>
                      </div>
                    </div>
                    <div className="p-5">
                      {division && (
                        <div className="flex items-center gap-2 mb-2">
                          <div className="w-2 h-2" style={{ backgroundColor: division.accentColor }} />
                          <span className="text-xs text-laps-slate">{division.name}</span>
                        </div>
                      )}
                      <h3 className="font-semibold text-laps-navy group-hover:text-laps-blue transition-colors line-clamp-2 mb-2">{item.title}</h3>
                      <span className="text-xs text-laps-slate">{formatDate(item.date)}</span>
                    </div>
                  </Link>
                </motion.article>
              );
            })}

            {/* More news in compact row */}
            {newsItems.slice(6).map((item, index) => {
              const division = getDivisionInfo(item.division);
              return (
                <motion.article
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="col-span-6 sm:col-span-4 lg:col-span-3 bg-white shadow-sm overflow-hidden group hover:shadow-lg transition-shadow"
                >
                  <Link to={item.link} className="block">
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    </div>
                    <div className="p-4">
                      {division && (
                        <div className="flex items-center gap-2 mb-2">
                          <div className="w-1.5 h-1.5" style={{ backgroundColor: division.accentColor }} />
                          <span className="text-xs text-laps-slate">{division.name}</span>
                        </div>
                      )}
                      <h3 className="text-sm font-semibold text-laps-navy group-hover:text-laps-blue transition-colors line-clamp-2">{item.title}</h3>
                    </div>
                  </Link>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Press Releases - Bento Style */}
      <section id="press" className="py-20 bg-laps-light">
        <div className="container-wide">
          <div className="grid grid-cols-12 gap-6">
            {/* Header Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="col-span-12 lg:col-span-4 bg-laps-navy p-8 flex flex-col justify-between min-h-[300px]"
            >
              <div>
                <FileText className="w-12 h-12 text-laps-gold mb-6" />
                <h2 className="text-3xl font-bold text-white mb-4">Press Releases</h2>
                <p className="text-white/60">Official announcements and media statements from LAPS Group.</p>
              </div>
              <Link to="#" className="inline-flex items-center gap-2 text-laps-gold hover:gap-3 transition-all">
                View All Releases <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>

            {/* Press Release List */}
            <div className="col-span-12 lg:col-span-8 grid grid-cols-1 gap-4">
              {pressReleases.map((release, index) => (
                <motion.a
                  key={index}
                  href="#"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center justify-between p-6 bg-white hover:shadow-lg transition-all group"
                >
                  <div className="flex items-start gap-6">
                    <div className="text-sm text-laps-slate whitespace-nowrap min-w-[120px]">{release.date}</div>
                    <div>
                      <span className="text-xs text-laps-blue font-medium">{release.division}</span>
                      <h3 className="font-semibold text-laps-navy group-hover:text-laps-blue transition-colors">{release.title}</h3>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <Download className="w-4 h-4 text-laps-slate" />
                    <ExternalLink className="w-4 h-4 text-laps-blue opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Insights - Bento Grid */}
      <section id="insights" className="py-20 bg-white">
        <div className="container-wide">
          <div className="mb-10">
            <h2 className="text-2xl font-semibold text-laps-navy inline-block border-b-2 border-laps-navy pb-2">Insights & Analysis</h2>
          </div>

          <div className="grid grid-cols-12 gap-4">
            {/* Featured insight - large */}
            <motion.article
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="col-span-12 lg:col-span-6 row-span-2 relative overflow-hidden group"
            >
              <div className="relative h-full min-h-[500px]">
                <img src={insights[0].image} alt={insights[0].title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-laps-navy via-laps-navy/40 to-transparent" />
                <div className="absolute top-6 left-6">
                  <span className="px-3 py-1 bg-laps-gold text-laps-navy text-xs font-bold">{insights[0].category}</span>
                </div>
                <div className="absolute bottom-6 left-6 right-6">
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-laps-gold transition-colors">{insights[0].title}</h3>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                      <span className="text-lg font-bold text-white">{insights[0].author.charAt(0)}</span>
                    </div>
                    <div>
                      <p className="font-medium text-white">{insights[0].author}</p>
                      <p className="text-sm text-white/60">{insights[0].role}</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.article>

            {/* Secondary insights */}
            {insights.slice(1).map((insight, index) => (
              <motion.article
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="col-span-12 sm:col-span-6 lg:col-span-6 bg-laps-light overflow-hidden group"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 h-full">
                  <div className="relative aspect-square overflow-hidden">
                    <img src={insight.image} alt={insight.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    <div className="absolute top-4 left-4">
                      <span className="px-2 py-1 bg-laps-gold text-laps-navy text-xs font-bold">{insight.category}</span>
                    </div>
                  </div>
                  <div className="p-6 flex flex-col justify-center">
                    <h3 className="text-lg font-bold text-laps-navy mb-4 group-hover:text-laps-blue transition-colors">{insight.title}</h3>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-laps-navy rounded-full flex items-center justify-center">
                        <span className="text-sm font-bold text-white">{insight.author.charAt(0)}</span>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-laps-navy">{insight.author}</p>
                        <p className="text-xs text-laps-slate">{insight.role}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter - Bento CTA */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1920&q=80" alt="Newsletter" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-laps-navy/90" />
        </div>
        <div className="container-wide relative z-10">
          <div className="grid grid-cols-12 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="col-span-12 lg:col-span-5 flex flex-col justify-center"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Stay in the Loop</h2>
              <p className="text-white/60 text-lg">Subscribe to our newsletter to receive the latest updates and insights from across all LAPS Group divisions.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="col-span-12 lg:col-span-7 bg-white/5 p-8"
            >
              <form className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-6 py-4 bg-white/10 border border-white/20 text-white placeholder:text-white/50 focus:ring-2 focus:ring-laps-gold focus:border-transparent"
                />
                <button
                  type="submit"
                  className="bg-laps-gold text-laps-navy px-8 py-4 font-semibold hover:bg-laps-gold/90 transition-colors whitespace-nowrap flex items-center justify-center gap-2"
                >
                  Subscribe <ArrowRight className="w-5 h-5" />
                </button>
              </form>
              <p className="text-white/40 text-sm mt-4">By subscribing, you agree to receive emails from LAPS Group. Unsubscribe anytime.</p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
