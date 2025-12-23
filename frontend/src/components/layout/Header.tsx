import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Search, ChevronDown } from 'lucide-react';
import { divisions } from '@/data/content';
import { Logo } from '@components/common/Logo';
import clsx from 'clsx';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDivisionsOpen, setIsDivisionsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsDivisionsOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Divisions', href: '#', hasDropdown: true },
    { name: 'About Us', href: '/about' },
    { name: 'Newsroom', href: '/newsroom' },
    { name: 'Careers', href: '/careers' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <header
      className={clsx(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled
          ? 'bg-white shadow-md py-2'
          : 'bg-laps-navy/90 backdrop-blur-sm py-4'
      )}
    >
      <div className="container-wide">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <Logo variant={isScrolled ? 'dark' : 'light'} />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <div key={link.name} className="relative">
                {link.hasDropdown ? (
                  <button
                    onMouseEnter={() => setIsDivisionsOpen(true)}
                    onMouseLeave={() => setIsDivisionsOpen(false)}
                    className={clsx(
                      'flex items-center gap-1 font-medium transition-colors',
                      isScrolled
                        ? 'text-laps-navy hover:text-laps-blue'
                        : 'text-white hover:text-laps-gold'
                    )}
                  >
                    {link.name}
                    <ChevronDown className="w-4 h-4" />
                  </button>
                ) : (
                  <Link
                    to={link.href}
                    className={clsx(
                      'font-medium transition-colors',
                      isScrolled
                        ? 'text-laps-navy hover:text-laps-blue'
                        : 'text-white hover:text-laps-gold'
                    )}
                  >
                    {link.name}
                  </Link>
                )}

                {/* Divisions Dropdown */}
                {link.hasDropdown && (
                  <AnimatePresence>
                    {isDivisionsOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        onMouseEnter={() => setIsDivisionsOpen(true)}
                        onMouseLeave={() => setIsDivisionsOpen(false)}
                        className="absolute top-full left-0 mt-2 w-72 bg-white rounded-xl shadow-xl overflow-hidden"
                      >
                        <div className="p-2">
                          {divisions.map((division) => (
                            <Link
                              key={division.key}
                              to={`/${division.slug}`}
                              className="flex items-start gap-3 p-3 rounded-lg hover:bg-laps-light transition-colors group"
                            >
                              <div
                                className="w-2 h-2 rounded-full mt-2"
                                style={{ backgroundColor: division.accentColor }}
                              />
                              <div>
                                <div className="font-medium text-laps-navy group-hover:text-laps-blue">
                                  {division.name}
                                </div>
                                <div className="text-sm text-laps-slate">
                                  {division.tagline}
                                </div>
                              </div>
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            ))}
          </nav>

          {/* Right side actions */}
          <div className="flex items-center gap-4">
            <button
              className={clsx(
                'p-2 rounded-full transition-colors',
                isScrolled
                  ? 'text-laps-navy hover:bg-laps-light'
                  : 'text-white hover:bg-white/10'
              )}
            >
              <Search className="w-5 h-5" />
            </button>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={clsx(
                'lg:hidden p-2 rounded-full transition-colors',
                isScrolled
                  ? 'text-laps-navy hover:bg-laps-light'
                  : 'text-white hover:bg-white/10'
              )}
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t"
          >
            <div className="container-wide py-4">
              <nav className="flex flex-col gap-2">
                {navLinks.map((link) => (
                  <div key={link.name}>
                    {link.hasDropdown ? (
                      <>
                        <button
                          onClick={() => setIsDivisionsOpen(!isDivisionsOpen)}
                          className="flex items-center justify-between w-full py-3 text-laps-navy font-medium"
                        >
                          {link.name}
                          <ChevronDown
                            className={clsx(
                              'w-5 h-5 transition-transform',
                              isDivisionsOpen && 'rotate-180'
                            )}
                          />
                        </button>
                        <AnimatePresence>
                          {isDivisionsOpen && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              exit={{ opacity: 0, height: 0 }}
                              className="pl-4 border-l-2 border-laps-light"
                            >
                              {divisions.map((division) => (
                                <Link
                                  key={division.key}
                                  to={`/${division.slug}`}
                                  className="block py-2 text-laps-slate hover:text-laps-blue"
                                >
                                  {division.name}
                                </Link>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </>
                    ) : (
                      <Link
                        to={link.href}
                        className="block py-3 text-laps-navy font-medium hover:text-laps-blue"
                      >
                        {link.name}
                      </Link>
                    )}
                  </div>
                ))}
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
