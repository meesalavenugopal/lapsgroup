import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { newsItems } from '@/data/content';

export function NewsSection() {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    });
  };

  return (
    <section className="py-20 bg-laps-blue">
      <div className="container-wide">
        {/* Section Header */}
        <div className="flex items-center justify-between mb-12">
          <div className="inline-block px-4 py-2 bg-white/20 rounded-lg">
            <h2 className="text-xl font-semibold text-white">In the News</h2>
          </div>
          <Link
            to="/newsroom"
            className="hidden md:flex items-center gap-2 text-white hover:text-laps-gold transition-colors"
          >
            View All News
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsItems.map((item, index) => (
            <motion.article
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-xl overflow-hidden group"
            >
              {/* Image */}
              <Link to={item.link} className="block relative overflow-hidden aspect-video">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-laps-blue text-white text-xs font-medium rounded-full">
                    {item.category}
                  </span>
                </div>
              </Link>

              {/* Content */}
              <div className="p-6">
                <Link to={item.link}>
                  <h3 className="text-lg font-semibold text-laps-navy mb-2 
                                 group-hover:text-laps-blue transition-colors line-clamp-2">
                    {item.title}
                  </h3>
                </Link>
                <p className="text-laps-slate text-sm mb-4 line-clamp-2">
                  {item.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-laps-slate">
                    {formatDate(item.date)}
                  </span>
                  <Link
                    to={item.link}
                    className="text-laps-blue text-sm font-medium hover:underline"
                  >
                    Read More
                  </Link>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Mobile View All */}
        <div className="mt-8 md:hidden text-center">
          <Link
            to="/newsroom"
            className="inline-flex items-center gap-2 text-white hover:text-laps-gold transition-colors"
          >
            View All News
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
