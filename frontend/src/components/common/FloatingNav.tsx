import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import clsx from 'clsx';

interface Section {
  id: string;
  label: string;
}

const sections: Section[] = [
  { id: 'hero', label: 'Home' },
  { id: 'news', label: 'News' },
  { id: 'divisions', label: 'Divisions' },
  { id: 'journey', label: 'Our Journey' },
  { id: 'careers', label: 'Careers' },
];

export function FloatingNav() {
  const [activeSection, setActiveSection] = useState('hero');
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show floating nav after scrolling past hero
      setIsVisible(window.scrollY > 300);

      // Determine active section
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i].id);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsExpanded(false);
  };

  const currentSection = sections.find(s => s.id === activeSection);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 50 }}
          className="fixed right-6 top-1/2 -translate-y-1/2 z-40 hidden lg:block"
        >
          {/* Main floating container */}
          <div 
            className="relative"
            onMouseEnter={() => setIsExpanded(true)}
            onMouseLeave={() => setIsExpanded(false)}
          >
            {/* Current section label */}
            <motion.button
              onClick={() => setIsExpanded(!isExpanded)}
              className="flex items-center gap-3 bg-laps-navy/90 backdrop-blur-sm border border-white/20 
                         px-4 py-3 text-white text-sm font-medium shadow-lg"
            >
              <span>{currentSection?.label}</span>
              <div className="w-1 h-6 bg-laps-gold rounded-full"></div>
            </motion.button>

            {/* Vertical line with dots */}
            <div className="absolute left-1/2 -translate-x-1/2 top-full pt-4">
              <div className="relative">
                {/* Vertical dashed line */}
                <div 
                  className="absolute left-1/2 -translate-x-1/2 w-0.5 h-48"
                  style={{
                    background: 'repeating-linear-gradient(to bottom, rgba(201,162,39,0.6) 0px, rgba(201,162,39,0.6) 4px, transparent 4px, transparent 8px)'
                  }}
                ></div>
                
                {/* Section dots */}
                <div className="relative flex flex-col items-center gap-8 pt-4">
                  {sections.slice(1).map((section, index) => (
                    <button
                      key={section.id}
                      onClick={() => scrollToSection(section.id)}
                      className="relative z-10 h-3 flex items-center"
                    >
                      <div 
                        className={clsx(
                          'w-3 h-3 rounded-full border-2 transition-all duration-300',
                          activeSection === section.id
                            ? 'bg-laps-gold border-laps-gold scale-125'
                            : 'bg-white border-gray-400 hover:border-laps-gold'
                        )}
                      />
                      {/* Tooltip */}
                      <AnimatePresence>
                        {isExpanded && (
                          <motion.span
                            initial={{ opacity: 0, x: 10 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 10 }}
                            transition={{ delay: index * 0.05 }}
                            className="absolute right-5 whitespace-nowrap 
                                       bg-laps-navy text-white text-xs px-3 py-1.5 shadow-lg"
                          >
                            {section.label}
                          </motion.span>
                        )}
                      </AnimatePresence>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
