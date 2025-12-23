import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, Newspaper, TrendingUp, Globe, Rss } from 'lucide-react';
import { newsItems, divisions } from '@/data/content';

export function NewsroomPage() {
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

  const newsStats = [
    { icon: Newspaper, label: 'Articles', value: '150+' },
    { icon: TrendingUp, label: 'Monthly Readers', value: '50K+' },
    { icon: Globe, label: 'Coverage', value: 'Global' },
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=1920&q=80"
            alt="Newsroom"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-laps-navy via-laps-navy/90 to-laps-navy/70" />
        </div>

        <div className="container-wide relative z-10 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <div className="flex items-center gap-2 mb-6">
                <Rss className="w-5 h-5 text-laps-gold" />
                <span className="text-laps-gold text-sm font-medium uppercase tracking-wider">Latest Updates</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Newsroom
              </h1>
              <p className="text-xl text-white/80 mb-8 max-w-xl">
                Stay updated with the latest news, announcements, and insights 
                from across all LAPS Group divisions.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="#featured"
                  className="inline-flex items-center gap-2 bg-laps-gold text-laps-navy px-8 py-4 font-medium hover:bg-laps-gold/90 transition-colors"
                >
                  Read Latest
                  <ArrowRight className="w-5 h-5" />
                </a>
                <a
                  href="#newsletter"
                  className="inline-flex items-center gap-2 border-2 border-white/30 text-white px-8 py-4 font-medium hover:bg-white/10 transition-colors"
                >
                  Subscribe
                </a>
              </div>
            </motion.div>

            {/* Right Column - Stats */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="hidden lg:block"
            >
              <div className="grid grid-cols-1 gap-4">
                {newsStats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    className="bg-white/10 backdrop-blur-sm border border-white/20 p-6 flex items-center gap-4"
                  >
                    <div className="p-3 bg-laps-gold/20">
                      <stat.icon className="w-6 h-6 text-laps-gold" />
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-white">{stat.value}</div>
                      <div className="text-white/60 text-sm">{stat.label}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Article - Bento Layout */}
      <section id="featured" className="py-20 bg-white">
        <div className="container-wide">
          <div className="mb-10">
            <h2 className="text-2xl font-semibold text-laps-navy inline-block border-b-2 border-laps-navy pb-2">
              Featured Story
            </h2>
          </div>

          {/* Featured Article */}
          {newsItems[0] && (
            <motion.article
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-16"
            >
              <Link
                to={newsItems[0].link}
                className="grid grid-cols-1 lg:grid-cols-5 gap-0 group overflow-hidden bg-laps-navy"
              >
                <div className="relative overflow-hidden lg:col-span-3 aspect-video lg:aspect-auto lg:min-h-[400px]">
                  <img
                    src={newsItems[0].image}
                    alt={newsItems[0].title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-4 py-2 bg-laps-gold text-laps-navy text-sm font-bold">
                      Featured
                    </span>
                  </div>
                  {/* White bottom bar */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-white" />
                </div>
                <div className="lg:col-span-2 flex flex-col justify-center p-8 lg:p-12 text-white">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="px-3 py-1 bg-white/10 text-white/90 text-sm font-medium">
                      {newsItems[0].category}
                    </span>
                    {newsItems[0].division && (
                      <span className="px-3 py-1 text-sm font-medium bg-laps-gold/20 text-laps-gold">
                        {getDivisionInfo(newsItems[0].division)?.name}
                      </span>
                    )}
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold mb-4 group-hover:text-laps-gold transition-colors">
                    {newsItems[0].title}
                  </h2>
                  <p className="text-white/70 mb-6">{newsItems[0].excerpt}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-sm text-white/50">
                      <Calendar className="w-4 h-4" />
                      {formatDate(newsItems[0].date)}
                    </div>
                    <span className="text-laps-gold text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                      Read Full Story
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </Link>
            </motion.article>
          )}

          {/* Latest News Header */}
          <div className="mb-10">
            <h2 className="text-2xl font-semibold text-laps-navy inline-block border-b-2 border-laps-navy pb-2">
              Latest News
            </h2>
          </div>
          {/* Bento News Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {newsItems.slice(1, 4).map((item, index) => {
              const division = getDivisionInfo(item.division);
              const isLarge = index === 0;
              return (
                <motion.article
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`bg-white overflow-hidden shadow-lg hover:shadow-xl transition-all group ${
                    isLarge ? 'md:col-span-2 lg:col-span-2' : ''
                  }`}
                >
                  <Link to={item.link} className={isLarge ? 'grid grid-cols-1 md:grid-cols-2 h-full' : 'h-full flex flex-col'}>
                    <div className={`relative overflow-hidden ${isLarge ? 'aspect-square md:aspect-auto' : 'aspect-video'}`}>
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 bg-laps-navy text-white text-xs font-medium">
                          {item.category}
                        </span>
                      </div>
                    </div>
                    <div className={`p-6 flex flex-col ${isLarge ? 'justify-center' : 'flex-1'}`}>
                      {division && (
                        <div className="flex items-center gap-2 mb-3">
                          <div
                            className="w-2 h-2"
                            style={{ backgroundColor: division.accentColor }}
                          />
                          <span className="text-xs text-laps-slate">{division.name}</span>
                        </div>
                      )}
                      <h3 className={`font-semibold text-laps-navy mb-2 group-hover:text-laps-blue transition-colors ${isLarge ? 'text-xl' : 'text-lg'}`}>
                        {item.title}
                      </h3>
                      <p className="text-sm text-laps-slate mb-4 line-clamp-2">
                        {item.excerpt}
                      </p>
                      <div className={`flex items-center justify-between ${isLarge ? '' : 'mt-auto'}`}>
                        <span className="text-xs text-laps-slate">
                          {formatDate(item.date)}
                        </span>
                        <span className="text-laps-blue text-sm font-medium flex items-center gap-1">
                          Read More
                          <ArrowRight className="w-4 h-4" />
                        </span>
                      </div>
                    </div>
                  </Link>
                </motion.article>
              );
            })}
          </div>

          {/* More News Grid */}
          {newsItems.length > 4 && (
            <div className="mt-12">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {newsItems.slice(4).map((item, index) => {
                  const division = getDivisionInfo(item.division);
                  return (
                    <motion.article
                      key={item.id}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.05 }}
                      className="bg-white overflow-hidden shadow-lg hover:shadow-xl transition-all group"
                    >
                      <Link to={item.link}>
                        <div className="relative overflow-hidden aspect-[4/3]">
                          <img
                            src={item.image}
                            alt={item.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                          <div className="absolute top-3 left-3">
                            <span className="px-2 py-1 bg-laps-navy/80 text-white text-xs font-medium">
                              {item.category}
                            </span>
                          </div>
                        </div>
                        <div className="p-4">
                          {division && (
                            <div className="flex items-center gap-2 mb-2">
                              <div
                                className="w-1.5 h-1.5"
                                style={{ backgroundColor: division.accentColor }}
                              />
                              <span className="text-xs text-laps-slate">{division.name}</span>
                            </div>
                          )}
                          <h3 className="text-sm font-semibold text-laps-navy mb-2 group-hover:text-laps-blue transition-colors line-clamp-2">
                            {item.title}
                          </h3>
                          <span className="text-xs text-laps-slate">
                            {formatDate(item.date)}
                          </span>
                        </div>
                      </Link>
                    </motion.article>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter CTA */}
      <section id="newsletter" className="relative py-24">
        {/* Background */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1920&q=80"
            alt="Newsletter"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-laps-navy/90" />
        </div>

        <div className="container-wide relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Stay in the Loop
              </h2>
              <p className="text-white/70 text-lg">
                Subscribe to our newsletter to receive the latest updates and insights 
                from across all LAPS Group divisions.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <form className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-6 py-4 bg-white/10 border border-white/20 text-white placeholder:text-white/50 focus:ring-2 focus:ring-laps-gold focus:border-transparent"
                />
                <button type="submit" className="bg-laps-gold text-laps-navy px-8 py-4 font-semibold hover:bg-laps-gold/90 transition-colors whitespace-nowrap flex items-center justify-center gap-2">
                  Subscribe
                  <ArrowRight className="w-5 h-5" />
                </button>
              </form>
              <p className="text-white/50 text-sm mt-4">
                By subscribing, you agree to receive emails from LAPS Group. Unsubscribe anytime.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
