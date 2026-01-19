import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, RefreshCw, Facebook, Instagram } from 'lucide-react';
import { newsItems } from '@/data/content';

const facts = [
  "LAPS Global's first project was completed in 2020, marking the beginning of our journey.",
  "Our Apps division has served over 100,000 users across 15+ countries.",
  "LAPS Architecture has won 8 design awards for sustainable building practices.",
  "Our Photo division has captured over 500 weddings and corporate events.",
];

const socialPosts = [
  {
    platform: 'facebook',
    content: "Excited to announce our latest project completion! LAPS Architecture delivered an award-winning sustainable office complex. Watch the full story on our channel.",
    time: '3 hours ago',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=600&q=80',
  },
  {
    platform: 'instagram',
    content: "Behind the scenes of our latest brand campaign. Creating magic with our amazing team! #LAPSGroup #Innovation #Design",
    time: '5 hours ago',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=600&q=80',
  },
];

export function NewsSection() {
  const [currentNewsSlide, setCurrentNewsSlide] = useState(0);
  const [currentFact, setCurrentFact] = useState(0);
  const [isFactLoading, setIsFactLoading] = useState(false);

  const newsCarouselItems = newsItems.slice(0, 3);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentNewsSlide((prev) => (prev + 1) % newsCarouselItems.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [newsCarouselItems.length]);

  const refreshFact = () => {
    setIsFactLoading(true);
    setTimeout(() => {
      setCurrentFact((prev) => (prev + 1) % facts.length);
      setIsFactLoading(false);
    }, 500);
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    });
  };

  return (
    <section className="py-20 bg-laps-light">
      <div className="container-wide">
        {/* Section Header */}
        <div className="mb-10">
          <h2 className="text-2xl font-semibold text-laps-navy inline-block border-b-2 border-laps-navy pb-2">In the News</h2>
        </div>

        {/* Main News Grid - 3 columns */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-10">
          {/* Left - Image Carousel */}
          <div className="relative aspect-[4/3] lg:aspect-auto lg:h-[400px] overflow-hidden bg-laps-navy">
            {newsCarouselItems.map((item, index) => (
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
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              </motion.div>
            ))}
            {/* Carousel Dots */}
            <div className="absolute bottom-4 left-4 flex items-center gap-2">
              {newsCarouselItems.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentNewsSlide(index)}
                  className={`w-2.5 h-2.5 transition-all ${
                    index === currentNewsSlide ? 'bg-white' : 'bg-white/40'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Middle - Press Release */}
          <div className="bg-white border border-gray-200 p-6 flex flex-col">
            <span className="text-laps-blue text-xs font-semibold tracking-wider uppercase mb-4">
              Press Release
            </span>
            <Link to={newsItems[0]?.link || '/newsroom'}>
              <h3 className="text-xl font-semibold text-laps-navy mb-4 leading-tight hover:text-laps-blue transition-colors">
                {newsItems[0]?.title || 'Latest News from LAPS Global'}
              </h3>
            </Link>
            <div className="flex items-start gap-2 mt-auto">
              <div className="w-1 h-full min-h-[60px] bg-laps-gold"></div>
              <p className="text-laps-slate text-sm leading-relaxed">
                {newsItems[0]?.excerpt || 'Stay tuned for updates from our various divisions.'}
              </p>
            </div>
          </div>

          {/* Right - Did You Know */}
          <div 
            className="p-6 flex flex-col text-white relative overflow-hidden"
            style={{
              background: 'linear-gradient(135deg, #0A1628 0%, #0066CC 100%)'
            }}
          >
            <span className="text-white/80 text-xs font-semibold tracking-wider uppercase mb-2">
              Facts
            </span>
            <h3 className="text-xl font-semibold mb-4">Did you know</h3>
            <p className="text-white/90 text-sm leading-relaxed flex-1">
              {facts[currentFact]}
            </p>
            <button 
              onClick={refreshFact}
              className="self-center mt-6 p-2 bg-white/20 hover:bg-white/30 transition-colors"
              aria-label="Show another fact"
            >
              <RefreshCw className={`w-5 h-5 ${isFactLoading ? 'animate-spin' : ''}`} />
            </button>
          </div>
        </div>

        {/* Social Media Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Social Post Card - Facebook Style */}
          <div className="bg-white border border-gray-200 p-5 relative hover:shadow-lg transition-shadow cursor-pointer group">
            <div className="absolute top-5 left-5">
              <div className="w-8 h-8 bg-[#1877F2] flex items-center justify-center">
                <Facebook className="w-4 h-4 text-white" />
              </div>
            </div>
            <div className="pt-12">
              <p className="text-laps-navy text-sm leading-relaxed mb-3 line-clamp-4">
                {socialPosts[0].content}
              </p>
              <span className="text-laps-slate text-xs">{socialPosts[0].time}</span>
            </div>
            <div className="absolute bottom-5 right-5">
              <ArrowRight className="w-5 h-5 text-laps-slate group-hover:text-laps-blue transition-colors" />
            </div>
          </div>

          {/* Social Post Card - Instagram Style */}
          <div className="bg-white border border-gray-200 p-5 relative hover:shadow-lg transition-shadow cursor-pointer group">
            <div className="absolute top-5 left-5">
              <div className="w-8 h-8 bg-gradient-to-br from-[#833AB4] via-[#FD1D1D] to-[#F77737] flex items-center justify-center">
                <Instagram className="w-4 h-4 text-white" />
              </div>
            </div>
            <div className="pt-12">
              <p className="text-laps-navy text-sm leading-relaxed mb-3 line-clamp-4">
                {socialPosts[1].content}
              </p>
              <span className="text-laps-slate text-xs">{socialPosts[1].time}</span>
            </div>
            <div className="absolute bottom-5 right-5">
              <ArrowRight className="w-5 h-5 text-laps-slate group-hover:text-laps-blue transition-colors" />
            </div>
          </div>

          {/* Featured Image Card */}
          <div className="relative overflow-hidden aspect-video md:aspect-auto md:h-auto cursor-pointer group">
            <img
              src={socialPosts[1].image}
              alt="Featured"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-laps-navy via-laps-navy/50 to-transparent" />
            <div className="absolute top-4 right-4">
              <div className="w-10 h-10 bg-white flex items-center justify-center">
                <span className="text-laps-navy font-bold text-sm">LAPS</span>
              </div>
            </div>
            <div className="absolute bottom-6 left-6 text-white">
              <p className="text-lg font-serif italic">The Journey of</p>
              <p className="text-xl font-bold">LAPS GLOBAL</p>
              <p className="text-sm mt-2 text-white/80">Watch the full story</p>
            </div>
            <div className="absolute bottom-6 right-6">
              <ArrowRight className="w-5 h-5 text-laps-gold" />
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
  );
}
