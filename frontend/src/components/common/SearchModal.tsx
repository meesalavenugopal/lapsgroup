import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, X, ArrowRight } from 'lucide-react';
import { divisions, newsItems } from '@/data/content';
import clsx from 'clsx';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface SearchResult {
  type: 'division' | 'page' | 'news';
  title: string;
  description: string;
  link: string;
  category?: string;
  image?: string;
  accentColor?: string;
}

const divisionImages: Record<string, string> = {
  architecture: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&w=200&q=80',
  apps: 'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=200&q=80',
  ads: 'https://images.unsplash.com/photo-1557838923-2985c318be48?auto=format&fit=crop&w=200&q=80',
  suites: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=200&q=80',
  photo: 'https://images.unsplash.com/photo-1542038784456-1ea8e935640e?auto=format&fit=crop&w=200&q=80',
};

const pageImages: Record<string, string> = {
  '/about': 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=200&q=80',
  '/newsroom': 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&w=200&q=80',
  '/careers': 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=200&q=80',
  '/contact': 'https://images.unsplash.com/photo-1423666639041-f56000c27a9a?auto=format&fit=crop&w=200&q=80',
};

const staticPages = [
  { title: 'About Us', description: 'Learn about LAPS Group and our mission', link: '/about' },
  { title: 'Newsroom', description: 'Latest news and updates from LAPS Group', link: '/newsroom' },
  { title: 'Careers', description: 'Join our team and grow with us', link: '/careers' },
  { title: 'Contact', description: 'Get in touch with our team', link: '/contact' },
];

export function SearchModal({ isOpen, onClose }: SearchModalProps) {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  useEffect(() => {
    if (!query.trim()) {
      setResults([]);
      return;
    }

    const searchQuery = query.toLowerCase();
    const searchResults: SearchResult[] = [];

    // Search divisions
    divisions.forEach((division) => {
      if (
        division.name.toLowerCase().includes(searchQuery) ||
        division.description.toLowerCase().includes(searchQuery) ||
        division.tagline.toLowerCase().includes(searchQuery) ||
        division.services.some(service => service.toLowerCase().includes(searchQuery))
      ) {
        searchResults.push({
          type: 'division',
          title: division.name,
          description: division.tagline,
          link: `/${division.slug}`,
          category: 'Division',
          image: divisionImages[division.key],
          accentColor: division.accentColor,
        });
      }
    });

    // Search static pages
    staticPages.forEach((page) => {
      if (
        page.title.toLowerCase().includes(searchQuery) ||
        page.description.toLowerCase().includes(searchQuery)
      ) {
        searchResults.push({
          type: 'page',
          title: page.title,
          description: page.description,
          link: page.link,
          category: 'Page',
          image: pageImages[page.link],
        });
      }
    });

    // Search news items
    newsItems.forEach((news) => {
      if (
        news.title.toLowerCase().includes(searchQuery) ||
        news.excerpt.toLowerCase().includes(searchQuery) ||
        news.category.toLowerCase().includes(searchQuery)
      ) {
        searchResults.push({
          type: 'news',
          title: news.title,
          description: news.excerpt,
          link: `/newsroom/${news.id}`,
          category: news.category,
          image: news.image,
        });
      }
    });

    setResults(searchResults.slice(0, 8)); // Limit to 8 results
  }, [query]);

  const handleResultClick = () => {
    setQuery('');
    setResults([]);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        />

        {/* Search Modal - Bento Style */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="relative w-full max-w-4xl bg-white shadow-2xl overflow-hidden"
        >
          {/* Search Input */}
          <div className="flex items-center gap-4 p-6 border-b border-gray-200">
            <Search className="w-6 h-6 text-laps-slate flex-shrink-0" />
            <input
              ref={inputRef}
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search for divisions, pages, or news..."
              className="flex-1 text-lg outline-none text-laps-navy placeholder:text-laps-slate/50"
            />
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 transition-colors"
              aria-label="Close search"
            >
              <X className="w-5 h-5 text-laps-slate" />
            </button>
          </div>

          {/* Search Results - List with images on left */}
          <div className="max-h-[70vh] overflow-y-auto p-4">
            {query && results.length === 0 ? (
              <div className="p-12 text-center">
                <p className="text-laps-slate">No results found for "{query}"</p>
              </div>
            ) : results.length > 0 ? (
              <div className="flex flex-col gap-2">
                {results.map((result, index) => (
                  <Link
                    key={index}
                    to={result.link}
                    onClick={handleResultClick}
                    className="group flex items-center gap-4 bg-white border border-gray-200 hover:border-laps-gold transition-all duration-300 overflow-hidden"
                  >
                    {/* Image on Left */}
                    {result.image && (
                      <div className="relative w-32 h-24 flex-shrink-0 overflow-hidden">
                        <img
                          src={result.image}
                          alt={result.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent" />
                        {result.category && (
                          <div 
                            className="absolute top-2 left-2 px-2 py-0.5 text-xs font-medium text-white"
                            style={{ backgroundColor: result.accentColor || '#0066CC' }}
                          >
                            {result.category}
                          </div>
                        )}
                      </div>
                    )}

                    {/* Content */}
                    <div className="flex-1 py-3 pr-4">
                      <div className="flex items-start justify-between gap-2 mb-1">
                        <h3 className="text-base font-semibold text-laps-navy group-hover:text-laps-gold transition-colors">
                          {result.title}
                        </h3>
                        <ArrowRight className="w-4 h-4 text-laps-slate group-hover:text-laps-gold transition-colors flex-shrink-0 mt-0.5" />
                      </div>
                      <p className="text-sm text-laps-slate line-clamp-2">
                        {result.description}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            ) : (
              <div className="p-12 text-center">
                <Search className="w-16 h-16 text-laps-slate/20 mx-auto mb-4" />
                <p className="text-laps-slate text-lg mb-2">Start typing to search...</p>
                <p className="text-sm text-laps-slate/70">Search for divisions, pages, news, or services</p>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
