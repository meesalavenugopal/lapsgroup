import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar } from 'lucide-react';
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Newsroom</h1>
            <p className="text-xl text-white/80">
              Stay updated with the latest news, announcements, and insights 
              from across all LAPS Group divisions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* News Grid */}
      <section className="py-20 bg-white">
        <div className="container-wide">
          {/* Featured Article */}
          {newsItems[0] && (
            <motion.article
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <Link
                to={newsItems[0].link}
                className="grid grid-cols-1 lg:grid-cols-2 gap-8 group"
              >
                <div className="relative overflow-hidden rounded-xl aspect-video lg:aspect-[4/3]">
                  <img
                    src={newsItems[0].image}
                    alt={newsItems[0].title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-laps-blue text-white text-sm font-medium rounded-full">
                      Featured
                    </span>
                  </div>
                </div>
                <div className="flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="px-3 py-1 bg-laps-light text-laps-navy text-sm font-medium rounded-full">
                      {newsItems[0].category}
                    </span>
                    {newsItems[0].division && (
                      <span
                        className="px-3 py-1 text-sm font-medium rounded-full"
                        style={{
                          backgroundColor: `${getDivisionInfo(newsItems[0].division)?.accentColor}15`,
                          color: getDivisionInfo(newsItems[0].division)?.accentColor,
                        }}
                      >
                        {getDivisionInfo(newsItems[0].division)?.name}
                      </span>
                    )}
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-laps-navy mb-4 group-hover:text-laps-blue transition-colors">
                    {newsItems[0].title}
                  </h2>
                  <p className="text-laps-slate mb-4">{newsItems[0].excerpt}</p>
                  <div className="flex items-center gap-2 text-sm text-laps-slate">
                    <Calendar className="w-4 h-4" />
                    {formatDate(newsItems[0].date)}
                  </div>
                </div>
              </Link>
            </motion.article>
          )}

          {/* News Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {newsItems.slice(1).map((item, index) => {
              const division = getDivisionInfo(item.division);
              return (
                <motion.article
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow group"
                >
                  <Link to={item.link}>
                    <div className="relative overflow-hidden aspect-video">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 bg-laps-navy/80 text-white text-xs font-medium rounded-full">
                          {item.category}
                        </span>
                      </div>
                    </div>
                    <div className="p-6">
                      {division && (
                        <div className="flex items-center gap-2 mb-3">
                          <div
                            className="w-2 h-2 rounded-full"
                            style={{ backgroundColor: division.accentColor }}
                          />
                          <span className="text-xs text-laps-slate">{division.name}</span>
                        </div>
                      )}
                      <h3 className="text-lg font-semibold text-laps-navy mb-2 group-hover:text-laps-blue transition-colors line-clamp-2">
                        {item.title}
                      </h3>
                      <p className="text-sm text-laps-slate mb-4 line-clamp-2">
                        {item.excerpt}
                      </p>
                      <div className="flex items-center justify-between">
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
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20 bg-laps-light">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto text-center"
          >
            <h2 className="text-3xl font-bold text-laps-navy mb-4">
              Stay in the Loop
            </h2>
            <p className="text-laps-slate mb-8">
              Subscribe to our newsletter to receive the latest updates and insights 
              from across all LAPS Group divisions.
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-laps-blue focus:border-transparent"
              />
              <button type="submit" className="btn-primary whitespace-nowrap">
                Subscribe
              </button>
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
