import { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Pause, Play, ArrowRight } from 'lucide-react';
import { heroSlides } from '@/data/content';
import clsx from 'clsx';

export function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  useEffect(() => {
    if (!isPlaying) return;

    const interval = setInterval(nextSlide, 10000);
    return () => clearInterval(interval);
  }, [isPlaying, nextSlide]);

  return (
    <div className="relative h-screen min-h-[600px] max-h-[900px] overflow-hidden bg-laps-navy">
      {/* Slides */}
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
                {/* Background Image */}
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url(${slide.image})` }}
                >
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-r from-laps-navy/90 via-laps-navy/70 to-transparent" />
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
                <div className="relative h-full container-wide flex items-center">
                  <div className="max-w-2xl text-white">
                    {/* Tag */}
                    {slide.tag && (
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="inline-block px-4 py-1.5 bg-laps-gold text-laps-navy text-sm font-medium mb-4"
                      >
                        {slide.tag}
                      </motion.div>
                    )}

                    {/* Subtitle */}
                    <motion.p
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                      className="text-laps-gold text-lg font-medium mb-2"
                    >
                      {slide.subtitle}
                    </motion.p>

                    {/* Title */}
                    <motion.h1
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 }}
                      className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight"
                    >
                      {slide.title}
                    </motion.h1>

                    {/* Description */}
                    <motion.p
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 }}
                      className="text-lg text-white/80 mb-8 max-w-lg"
                    >
                      {slide.description}
                    </motion.p>

                    {/* CTA Button */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.6 }}
                    >
                      <Link
                        to={slide.ctaLink}
                        className="inline-flex items-center gap-3 border-2 border-laps-gold text-laps-gold 
                                   px-5 py-2.5 text-sm font-medium hover:bg-laps-gold hover:text-laps-navy transition-all duration-300"
                      >
                        {slide.ctaText}
                        <ArrowRight className="w-4 h-4" />
                      </Link>
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
        className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full 
                   bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 transition-colors"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full 
                   bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 transition-colors"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Bottom Controls */}
      <div className="absolute bottom-8 left-0 right-0">
        <div className="container-wide flex items-center justify-between">
          {/* Slide Counter */}
          <div className="flex items-center gap-4 text-white">
            <span className="text-3xl font-bold">{currentSlide + 1}</span>
            <span className="text-white/50">/</span>
            <span className="text-white/50">{heroSlides.length}</span>
          </div>

          {/* Line Navigation */}
          <div className="flex items-center gap-2">
            {heroSlides.map((_, index) => (
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
