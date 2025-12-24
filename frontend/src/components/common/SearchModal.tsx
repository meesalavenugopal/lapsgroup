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
}

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

        {/* Search Modal */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="relative w-full max-w-2xl bg-white rounded-lg shadow-2xl overflow-hidden"
        >
          {/* Search Input */}
          <div className="flex items-center gap-4 p-6 border-b">
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
              className="p-2 hover:bg-laps-light rounded-full transition-colors"
              aria-label="Close search"
            >
              <X className="w-5 h-5 text-laps-slate" />
            </button>
          </div>

          {/* Search Results */}
          <div className="max-h-[60vh] overflow-y-auto">
            {query && results.length === 0 ? (
              <div className="p-8 text-center">
                <p className="text-laps-slate">No results found for "{query}"</p>
              </div>
            ) : results.length > 0 ? (
              <div className="py-2">
                {results.map((result, index) => (
                  <Link
                    key={index}
                    to={result.link}
                    onClick={handleResultClick}
                    className="flex items-start gap-4 px-6 py-4 hover:bg-laps-light transition-colors group"
                  >
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        {result.category && (
                          <span className="text-xs font-medium text-laps-blue">
                            {result.category}
                          </span>
                        )}
                      </div>
                      <h3 className="text-base font-semibold text-laps-navy mb-1 group-hover:text-laps-gold transition-colors">
                        {result.title}
                      </h3>
                      <p className="text-sm text-laps-slate line-clamp-1">
                        {result.description}
                      </p>
                    </div>
                    <ArrowRight className="w-5 h-5 text-laps-slate group-hover:text-laps-gold transition-colors flex-shrink-0 mt-1" />
                  </Link>
                ))}
              </div>
            ) : (
              <div className="p-8 text-center">
                <Search className="w-12 h-12 text-laps-slate/30 mx-auto mb-3" />
                <p className="text-laps-slate">Start typing to search...</p>
              </div>
            )}
          </div>

          {/* Quick Tips */}
          {!query && (
            <div className="border-t bg-laps-light/30 px-6 py-4">
              <p className="text-sm text-laps-slate">
                <span className="font-medium">Quick tips:</span> Search for divisions, pages, news, or services
              </p>
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
