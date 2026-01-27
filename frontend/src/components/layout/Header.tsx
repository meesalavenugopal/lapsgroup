import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Search, ChevronDown, ArrowRight } from 'lucide-react';
import { divisions } from '@/data/content';
import { Logo } from '@components/common/Logo';
import { SearchModal } from '@components/common/SearchModal';
import clsx from 'clsx';

const divisionImages: Record<string, string> = {
  architecture: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&w=200&q=80',
  apps: 'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=200&q=80',
  ads: 'https://images.unsplash.com/photo-1557838923-2985c318be48?auto=format&fit=crop&w=200&q=80',
  suites: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=200&q=80',
  photo: 'https://images.unsplash.com/photo-1542038784456-1ea8e935640e?auto=format&fit=crop&w=200&q=80',
};

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDivisionsOpen, setIsDivisionsOpen] = useState(false);
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const location = useLocation();
  
  // Pages that have hero carousels (should have transparent navbar at top)
  const pagesWithHero = ['/', '/about', '/newsroom', '/careers', '/contact', '/architecture-planning', '/apps-platforms', '/ads-services', '/suites', '/photography-studios'];
  // Allow transparent navbar for all /about/* pages and division pages
  const hasHeroSection = pagesWithHero.some(path => {
    if (path === '/about') {
      return location.pathname === path || location.pathname.startsWith(path + '/');
    }
    if (path === '/newsroom' || path === '/careers' || path === '/contact') {
      return location.pathname === path;
    }
    return location.pathname === path || location.pathname.startsWith(path + '/');
  });

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
    setIsAboutOpen(false);
  }, [location]);

  // Reset accordions when mobile menu closes
  useEffect(() => {
    if (!isMobileMenuOpen) {
      setIsDivisionsOpen(false);
      setIsAboutOpen(false);
    }
  }, [isMobileMenuOpen]);

  const navLinks = [
    { name: 'Divisions', href: '#', hasDropdown: 'divisions' },
    { name: 'About Us', href: '#', hasDropdown: 'about' },
    { name: 'Newsroom', href: '/newsroom' },
    { name: 'Careers', href: '/careers' },
    { name: 'Contact', href: '/contact' },
  ];

  const aboutLinks = {
    company: [
      { name: 'Our Story', href: '/about' },
      { name: 'Leadership', href: '/about/leadership' },
      { name: 'Values & Purpose', href: '/about/values' },
      { name: 'Milestones', href: '/about/milestones' },
    ],
    more: [
      { name: 'Heritage', href: '/about/heritage' },
      { name: 'Sustainability', href: '/about/sustainability' },
      { name: 'Innovation', href: '/about/innovation' },
    ],
  };
  
  // Use dark variant (white bg) when scrolled OR when page doesn't have hero
  const useDarkHeader = isScrolled || !hasHeroSection;

  return (
    <>
      <header
        className={clsx(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
          useDarkHeader
            ? 'bg-white py-7'
            : 'bg-transparent py-9'
        )}
      >
        <div className="container-wide">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center">
              <Logo variant={useDarkHeader ? 'dark' : 'light'} />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-10">
              {navLinks.map((link) => (
                <div key={link.name} className="relative">
                  {link.hasDropdown ? (
                    <button
                      onMouseEnter={() => {
                        if (link.hasDropdown === 'divisions') {
                          setIsDivisionsOpen(true);
                          setIsAboutOpen(false);
                        } else if (link.hasDropdown === 'about') {
                          setIsAboutOpen(true);
                          setIsDivisionsOpen(false);
                        }
                      }}
                      onClick={() => {
                        if (link.hasDropdown === 'divisions') {
                          setIsDivisionsOpen(!isDivisionsOpen);
                          setIsAboutOpen(false);
                        } else if (link.hasDropdown === 'about') {
                          setIsAboutOpen(!isAboutOpen);
                          setIsDivisionsOpen(false);
                        }
                      }}
                      className={clsx(
                        'flex items-center gap-1.5 text-sm font-medium tracking-wide transition-colors',
                        useDarkHeader
                          ? 'text-laps-navy hover:text-laps-gold'
                          : 'text-white hover:text-laps-gold'
                      )}
                    >
                      {link.name}
                      <ChevronDown className={clsx(
                        'w-4 h-4 transition-transform duration-200',
                        (link.hasDropdown === 'divisions' && isDivisionsOpen) || 
                        (link.hasDropdown === 'about' && isAboutOpen) ? 'rotate-180' : ''
                      )} />
                    </button>
                  ) : (
                    <Link
                      to={link.href}
                      className={clsx(
                        'text-sm font-medium tracking-wide transition-colors relative group',
                        useDarkHeader
                          ? location.pathname === link.href 
                            ? 'text-laps-gold' 
                            : 'text-laps-navy hover:text-laps-gold'
                          : location.pathname === link.href 
                            ? 'text-laps-gold' 
                            : 'text-white hover:text-laps-gold'
                      )}
                    >
                      {link.name}
                      <span className={clsx(
                        'absolute -bottom-1 left-0 h-0.5 transition-all duration-300 bg-laps-gold',
                        location.pathname === link.href ? 'w-full' : 'w-0 group-hover:w-full'
                      )} />
                    </Link>
                  )}
                </div>
              ))}
            </nav>

            {/* Right side actions */}
            <div className="flex items-center gap-3">
              <button
                onClick={() => setIsSearchOpen(true)}
                className={clsx(
                  'hidden sm:flex p-2.5 rounded-full transition-colors',
                  useDarkHeader
                    ? 'text-laps-navy hover:bg-laps-light'
                    : 'text-white hover:bg-white/10'
                )}
                aria-label="Open search"
              >
                <Search className="w-5 h-5" />
              </button>

              {/* CTA Button */}
              <Link
                to="/contact"
                className={clsx(
                  'hidden md:flex items-center gap-1.5 px-4 py-2 text-xs font-medium border-2 transition-all duration-300',
                  useDarkHeader
                    ? 'border-laps-navy text-laps-navy hover:bg-laps-navy hover:text-white'
                    : 'border-white text-white hover:bg-white hover:text-laps-navy'
                )}
              >
                Get in Touch
              </Link>

              {/* Mobile menu button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className={clsx(
                  'lg:hidden p-2.5 rounded-full transition-colors',
                  useDarkHeader
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
      </header>

      {/* Full-Width Mega Menu */}
      <AnimatePresence>
        {isDivisionsOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsDivisionsOpen(false)}
              className="fixed inset-0 bg-black/20 z-40 backdrop-blur-sm"
            />
            
            {/* Mega Menu */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              onMouseLeave={() => setIsDivisionsOpen(false)}
              className={clsx(
                'fixed left-0 right-0 z-50 bg-white shadow-2xl',
                useDarkHeader ? 'top-[88px]' : 'top-[112px]'
              )}
            >
              <div className="container-wide py-10">
                <div className="grid grid-cols-12 gap-8">
                  {/* Left: Title & Description */}
                  <div className="col-span-3">
                    <h3 className="text-2xl font-bold text-laps-navy mb-3">
                      Our Divisions
                    </h3>
                    <p className="text-laps-slate text-sm leading-relaxed mb-6">
                      Five specialized verticals delivering excellence across architecture, 
                      technology, marketing, events, and photography.
                    </p>
                    <Link
                      to="/about"
                      onClick={() => setIsDivisionsOpen(false)}
                      className="inline-flex items-center gap-2 text-laps-blue text-sm font-medium hover:gap-3 transition-all"
                    >
                      Learn About LAPS Global
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>

                  {/* Right: Division Cards Grid */}
                  <div className="col-span-9">
                    <div className="grid grid-cols-3 gap-5">
                      {divisions.map((division) => (
                        <Link
                          key={division.key}
                          to={`/${division.slug}`}
                          onClick={() => setIsDivisionsOpen(false)}
                          className="group p-5 border-t border-gray-200 hover:bg-laps-light/50 transition-all duration-300"
                        >
                          {/* Image */}
                          <div className="w-14 h-14 rounded-lg overflow-hidden mb-4">
                            <img
                              src={divisionImages[division.key]}
                              alt={division.name}
                              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                            />
                          </div>

                          {/* Content */}
                          <h4 className="font-semibold text-laps-navy mb-1 group-hover:text-laps-blue transition-colors">
                            {division.name}
                          </h4>
                          <p className="text-xs text-laps-gold font-medium mb-2">
                            {division.tagline}
                          </p>
                          <p className="text-sm text-laps-slate line-clamp-2">
                            {division.description}
                          </p>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Bottom Stats Bar - Bento Style */}
                <div className="mt-10 pt-8 border-t border-gray-100">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="flex items-center gap-3 pr-12">
                        <span className="text-3xl font-bold text-laps-navy">5</span>
                        <span className="text-xs text-laps-slate uppercase tracking-[0.15em]">Divisions</span>
                      </div>
                      <div className="w-px h-8 bg-laps-gold/40" />
                      <div className="flex items-center gap-3 px-12">
                        <span className="text-3xl font-bold text-laps-navy">15+</span>
                        <span className="text-xs text-laps-slate uppercase tracking-[0.15em]">Services</span>
                      </div>
                      <div className="w-px h-8 bg-laps-gold/40" />
                      <div className="flex items-center gap-3 pl-12">
                        <span className="text-3xl font-bold text-laps-navy">100+</span>
                        <span className="text-xs text-laps-slate uppercase tracking-[0.15em]">Projects</span>
                      </div>
                    </div>
                    <Link
                      to="/careers"
                      onClick={() => setIsDivisionsOpen(false)}
                      className="flex items-center gap-2 px-5 py-2.5 border-2 border-laps-gold text-laps-gold text-sm font-medium hover:bg-laps-gold hover:text-white transition-all duration-300"
                    >
                      Join Our Team
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* About Us Mega Menu */}
      <AnimatePresence>
        {isAboutOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsAboutOpen(false)}
              className="fixed inset-0 bg-black/60 z-40"
            />
            
            {/* About Mega Menu */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              onMouseLeave={() => setIsAboutOpen(false)}
              className={clsx(
                'fixed left-0 right-0 z-50 bg-white shadow-2xl',
                useDarkHeader ? 'top-[88px]' : 'top-[112px]'
              )}
            >
              <div className="container-wide py-12">
                <div className="grid grid-cols-12 gap-12">
                  {/* Left: Main Title */}
                  <div className="col-span-4">
                    <h3 className="text-3xl font-bold text-laps-navy mb-6">
                      The LAPS Global
                    </h3>
                    
                    {/* About the Group Section */}
                    <div className="mb-8">
                      <h4 className="text-sm font-semibold text-laps-slate mb-4 pb-2 border-b border-gray-200">
                        About the LAPS Global
                      </h4>
                      <div className="grid grid-cols-2 gap-x-8 gap-y-3">
                        {aboutLinks.company.map((link) => (
                          <Link
                            key={link.name}
                            to={link.href}
                            onClick={() => setIsAboutOpen(false)}
                            className="text-laps-slate text-sm hover:text-laps-gold transition-colors"
                          >
                            {link.name}
                          </Link>
                        ))}
                      </div>
                    </div>

                    {/* More Links */}
                    <div>
                      <div className="grid grid-cols-2 gap-x-8 gap-y-3">
                        {aboutLinks.more.map((link) => (
                          <Link
                            key={link.name}
                            to={link.href}
                            onClick={() => setIsAboutOpen(false)}
                            className="text-laps-slate text-sm hover:text-laps-gold transition-colors"
                          >
                            {link.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Right: Divisions Quick Access */}
                  <div className="col-span-8">
                    <h4 className="text-sm font-semibold text-laps-slate mb-4 pb-2 border-b border-gray-200">
                      Our Divisions
                    </h4>
                    <div className="grid grid-cols-3 gap-4">
                      {divisions.map((division) => (
                        <Link
                          key={division.key}
                          to={`/${division.slug}`}
                          onClick={() => setIsAboutOpen(false)}
                          className="flex items-center gap-3 p-3 border-l-2 border-laps-gold/50 hover:border-laps-gold hover:bg-laps-light/50 transition-all"
                        >
                          <div>
                            <p className="text-laps-navy text-sm font-medium">
                              {division.name}
                            </p>
                            <p className="text-laps-slate text-xs">
                              {division.tagline}
                            </p>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="fixed inset-0 z-50 bg-white lg:hidden"
          >
            {/* Mobile Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b">
              <Logo variant="dark" />
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-2 text-laps-navy"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Mobile Nav */}
            <div className="px-6 py-6 overflow-y-auto h-[calc(100vh-80px)]">
              <nav className="flex flex-col gap-1">
                {/* Divisions Accordion */}
                <div>
                  <button
                    onClick={() => setIsDivisionsOpen(!isDivisionsOpen)}
                    className="flex items-center justify-between w-full py-4 text-lg font-semibold text-laps-navy"
                  >
                    Divisions
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
                        className="overflow-hidden"
                      >
                        <div className="pb-4 space-y-2">
                          {divisions.map((division) => (
                            <Link
                              key={division.key}
                              to={`/${division.slug}`}
                              onClick={() => setIsMobileMenuOpen(false)}
                              className="flex items-center gap-3 p-3 rounded-lg bg-laps-light"
                            >
                              <div className="w-10 h-10 rounded-lg overflow-hidden">
                                <img
                                  src={divisionImages[division.key]}
                                  alt={division.name}
                                  className="w-full h-full object-cover"
                                />
                              </div>
                              <div>
                                <div className="font-medium text-laps-navy">{division.name}</div>
                                <div className="text-xs text-laps-slate">{division.tagline}</div>
                              </div>
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* About Us Accordion */}
                <div>
                  <button
                    onClick={() => setIsAboutOpen(!isAboutOpen)}
                    className="flex items-center justify-between w-full py-4 text-lg font-semibold text-laps-navy border-t border-gray-100"
                  >
                    About Us
                    <ChevronDown
                      className={clsx(
                        'w-5 h-5 transition-transform',
                        isAboutOpen && 'rotate-180'
                      )}
                    />
                  </button>
                  <AnimatePresence>
                    {isAboutOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="overflow-hidden"
                      >
                        <div className="pb-4 space-y-1">
                          <div className="text-xs font-semibold text-laps-slate mb-2 px-3">
                            About the Group
                          </div>
                          {aboutLinks.company.map((link) => (
                            <Link
                              key={link.name}
                              to={link.href}
                              onClick={() => setIsMobileMenuOpen(false)}
                              className="block px-3 py-2 text-sm text-laps-navy hover:bg-laps-light rounded"
                            >
                              {link.name}
                            </Link>
                          ))}
                          <div className="text-xs font-semibold text-laps-slate mt-3 mb-2 px-3">
                            More
                          </div>
                          {aboutLinks.more.map((link) => (
                            <Link
                              key={link.name}
                              to={link.href}
                              onClick={() => setIsMobileMenuOpen(false)}
                              className="block px-3 py-2 text-sm text-laps-navy hover:bg-laps-light rounded"
                            >
                              {link.name}
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Other Links */}
                {navLinks.filter(l => !l.hasDropdown).map((link) => (
                  <Link
                    key={link.name}
                    to={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="py-4 text-lg font-semibold text-laps-navy border-t border-gray-100"
                  >
                    {link.name}
                  </Link>
                ))}
              </nav>

              {/* Mobile CTA */}
              <div className="mt-8">
                <Link
                  to="/contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center justify-center gap-2 w-full py-4 bg-laps-navy text-white font-medium"
                >
                  Get in Touch
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              {/* Mobile Stats */}
              <div className="mt-8 pt-8 border-t border-gray-100">
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-laps-navy">5</div>
                    <div className="text-xs text-laps-slate">Divisions</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-laps-navy">15+</div>
                    <div className="text-xs text-laps-slate">Services</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-laps-navy">100+</div>
                    <div className="text-xs text-laps-slate">Projects</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Search Modal */}
      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </>
  );
}
