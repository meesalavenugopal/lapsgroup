import { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Pause, Play, ArrowRight, Building2, Code2, Megaphone, PartyPopper, Camera } from 'lucide-react';
import { Division } from '@/types';
import clsx from 'clsx';

interface DivisionHeroCarouselProps {
  division: Division;
  images: string[];
}

const iconMap = {
  architecture: Building2,
  apps: Code2,
  ads: Megaphone,
  suites: PartyPopper,
  photo: Camera,
};

export function DivisionHeroCarousel({ division, images }: DivisionHeroCarouselProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const Icon = iconMap[division.key];

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % images.length);
  }, [images.length]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);
  }, [images.length]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  useEffect(() => {
    if (!isPlaying) return;

    const interval = setInterval(nextSlide, 10000);
    return () => clearInterval(interval);
  }, [isPlaying, nextSlide]);

  // Slide content data
  const slides = [
    {
      tag: 'Welcome',
      title: division.name,
      subtitle: division.tagline,
      description: division.description,
    },
    {
      tag: 'Our Expertise',
      title: 'Excellence in Every Detail',
      subtitle: `${division.stats[0]?.value || ''} ${division.stats[0]?.label || ''}`,
      description: `We deliver exceptional ${division.name.toLowerCase()} solutions with a focus on quality and innovation.`,
    },
    {
      tag: 'Services',
      title: 'Comprehensive Solutions',
      subtitle: 'End-to-End Services',
      description: division.services.slice(0, 2).join(', ') + ' and more.',
    },
    {
      tag: 'Get Started',
      title: 'Partner With Us',
      subtitle: 'Transform Your Vision',
      description: 'Let us help you achieve your goals with our expertise and dedication.',
    },
  ];

  return (
    <div className="relative min-h-[650px] max-h-[850px] overflow-hidden" style={{ backgroundColor: division.accentColor }}>
      {/* Slides */}
      <AnimatePresence initial={false} mode="popLayout">
        {images.map(
          (image, index) =>
            index === currentSlide && (
              <motion.div
                key={index}
                initial={{ x: '100%' }}
                animate={{ x: 0 }}
                exit={{ x: '-100%' }}
                transition={{ duration: 0.7, ease: 'easeInOut' }}
                className="absolute inset-0"
              >
                {/* Background Image */}
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url(${image})` }}
                >
                  {/* Gradient Overlay */}
                  <div 
                    className="absolute inset-0" 
                    style={{
                      background: `linear-gradient(to right, ${division.accentColor}ee 0%, ${division.accentColor}aa 40%, transparent 100%)`,
                    }}
                  />
                  {/* Dotted Pattern Overlay */}
                  <div 
                    className="absolute inset-0 opacity-30"
                    style={{
                      backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.15) 1px, transparent 1px)',
                      backgroundSize: '4px 4px'
                    }}
                  />
                </div>

                {/* Content */}
                <div className="relative h-full container-wide flex items-center pt-20">
                  <div className="max-w-2xl text-white">
                    {/* Breadcrumb */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 }}
                      className="flex items-center gap-2 text-white/60 mb-6 text-sm"
                    >
                      <Link to="/" className="hover:text-white">Home</Link>
                      <span>/</span>
                      <span>Divisions</span>
                      <span>/</span>
                      <span className="text-white">{division.name}</span>
                    </motion.div>

                    {/* Tag */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                      className="inline-block px-4 py-1.5 bg-white/20 backdrop-blur-sm text-sm font-medium mb-4"
                    >
                      {slides[index]?.tag || 'Discover'}
                    </motion.div>

                    {/* Icon + Title */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                      className="flex items-center gap-4 mb-4"
                    >
                      <div className="p-3 bg-white/20 backdrop-blur-sm flex-shrink-0">
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight whitespace-nowrap">
                        {slides[index]?.title || division.name}
                      </h1>
                    </motion.div>

                    {/* Subtitle */}
                    <motion.p
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 }}
                      className="text-laps-gold text-xl font-medium mb-2"
                    >
                      {slides[index]?.subtitle || division.tagline}
                    </motion.p>

                    {/* Description */}
                    <motion.p
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 }}
                      className="text-lg text-white/80 mb-8 max-w-lg"
                    >
                      {slides[index]?.description || division.description}
                    </motion.p>

                    {/* CTA Buttons */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.6 }}
                      className="flex gap-4"
                    >
                      <Link
                        to="/contact"
                        className="inline-flex items-center gap-3 border-2 border-laps-gold text-laps-gold 
                                   px-5 py-2.5 text-sm font-medium hover:bg-laps-gold hover:text-laps-navy transition-all duration-300"
                      >
                        Get Started
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                      <a
                        href="#services"
                        className="inline-flex items-center gap-3 border-2 border-white text-white 
                                   px-5 py-2.5 text-sm font-medium hover:bg-white hover:text-laps-navy transition-all duration-300"
                      >
                        Our Services
                      </a>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            )
        )}
      </AnimatePresence>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-8 top-1/2 -translate-y-1/2 p-3 rounded-full 
                   bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 transition-colors z-20"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-8 top-1/2 -translate-y-1/2 p-3 rounded-full 
                   bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 transition-colors z-20"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Bottom Controls */}
      <div className="absolute bottom-8 left-0 right-0 z-20">
        <div className="container-wide flex items-center justify-between">
          {/* Slide Counter */}
          <div className="flex items-center gap-4 text-white">
            <span className="text-3xl font-bold">{currentSlide + 1}</span>
            <span className="text-white/50">/</span>
            <span className="text-white/50">{images.length}</span>
          </div>

          {/* Line Navigation */}
          <div className="flex items-center gap-2">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={clsx(
                  'h-0.5 transition-all duration-500',
                  index === currentSlide
                    ? 'bg-white w-12'
                    : 'bg-white/30 w-8 hover:bg-white/50'
                )}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          {/* Play/Pause */}
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="flex items-center gap-2 text-white/80 hover:text-white transition-colors"
          >
            {isPlaying ? (
              <>
                <Pause className="w-4 h-4" />
                <span className="text-sm">Pause</span>
              </>
            ) : (
              <>
                <Play className="w-4 h-4" />
                <span className="text-sm">Play</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
