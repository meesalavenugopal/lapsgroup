import { Division, HeroSlide, NewsItem, TimelineEvent, JobOpening } from '@/types';

// Division data
export const divisions: Division[] = [
  {
    key: 'architecture',
    name: 'Architecture & Planning',
    fullName: 'Landscape + Architecture + Planning Studios',
    tagline: 'Designing Tomorrow\'s Spaces',
    description: 'Creating innovative architectural solutions and urban landscapes that blend functionality with aesthetic excellence.',
    slug: 'architecture-planning',
    icon: 'building-2',
    accentColor: '#2D5016',
    services: [
      'Architectural Design',
      'Urban Planning',
      'Landscape Architecture',
      'Interior Design',
      'Sustainable Design',
      'Project Management',
    ],
    stats: [
      { label: 'Projects Completed', value: '50+' },
      { label: 'Cities', value: '12' },
      { label: 'Awards', value: '8' },
      { label: 'Team Members', value: '25' },
    ],
  },
  {
    key: 'apps',
    name: 'Apps & Platforms',
    fullName: 'Launchpad for Applications & Platforms',
    tagline: 'Building Digital Futures',
    description: 'Developing cutting-edge software solutions, SaaS products, and digital platforms that drive innovation.',
    slug: 'apps-platforms',
    icon: 'code-2',
    accentColor: '#7C3AED',
    services: [
      'Custom Software Development',
      'Mobile App Development',
      'SaaS Products',
      'Cloud Solutions',
      'API Development',
      'UI/UX Design',
    ],
    stats: [
      { label: 'Apps Launched', value: '30+' },
      { label: 'Users Served', value: '100K+' },
      { label: 'Technologies', value: '20+' },
      { label: 'Team Members', value: '40' },
    ],
  },
  {
    key: 'ads',
    name: 'Ads & Services',
    fullName: 'Launchpad for Ads & Services',
    tagline: 'Amplifying Your Voice',
    description: 'Strategic digital marketing, brand building, and advertising solutions that connect brands with their audience.',
    slug: 'ads-services',
    icon: 'megaphone',
    accentColor: '#DC2626',
    services: [
      'Digital Marketing',
      'Brand Strategy',
      'Social Media Management',
      'Content Marketing',
      'SEO & SEM',
      'Performance Marketing',
    ],
    stats: [
      { label: 'Campaigns Run', value: '200+' },
      { label: 'Brands Served', value: '75' },
      { label: 'Reach Generated', value: '50M+' },
      { label: 'Team Members', value: '20' },
    ],
  },
  {
    key: 'suites',
    name: 'Party Suites',
    fullName: 'Living and Party Suites',
    tagline: 'Curating Unforgettable Moments',
    description: 'Premium event management and hospitality services that transform occasions into extraordinary experiences.',
    slug: 'suites',
    icon: 'party-popper',
    accentColor: '#F59E0B',
    services: [
      'Event Planning',
      'Venue Management',
      'Corporate Events',
      'Wedding Planning',
      'Hospitality Services',
      'Catering Coordination',
    ],
    stats: [
      { label: 'Events Hosted', value: '500+' },
      { label: 'Happy Clients', value: '2K+' },
      { label: 'Venues', value: '15' },
      { label: 'Team Members', value: '30' },
    ],
  },
  {
    key: 'photo',
    name: 'Photo Studios',
    fullName: 'Lifestyle and Photography Studios',
    tagline: 'Capturing Life\'s Canvas',
    description: 'Professional photography and creative visual storytelling that brings moments and brands to life.',
    slug: 'photography-studios',
    icon: 'camera',
    accentColor: '#0891B2',
    services: [
      'Commercial Photography',
      'Event Photography',
      'Product Photography',
      'Portrait Sessions',
      'Video Production',
      'Photo Editing',
    ],
    stats: [
      { label: 'Shoots Completed', value: '1000+' },
      { label: 'Photos Delivered', value: '100K+' },
      { label: 'Studios', value: '3' },
      { label: 'Team Members', value: '15' },
    ],
  },
];

// Hero slides data
export const heroSlides: HeroSlide[] = [
  {
    id: '1',
    title: 'When Excellence Meets Vision',
    subtitle: 'LAPS Group',
    description: 'A multi-division company driving innovation across architecture, technology, marketing, events, and photography.',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1920&q=80',
    ctaText: 'Explore Our Divisions',
    ctaLink: '/#divisions',
    tag: 'Master Brand',
  },
  {
    id: '2',
    title: 'Designing Tomorrow\'s Spaces',
    subtitle: 'LAPS Architecture & Planning',
    description: 'Award-winning architectural design and urban planning that shapes the future of how we live and work.',
    image: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&w=1920&q=80',
    ctaText: 'View Projects',
    ctaLink: '/architecture-planning',
    tag: 'Architecture',
  },
  {
    id: '3',
    title: 'Building Digital Futures',
    subtitle: 'LAPS Apps & Platforms',
    description: 'Cutting-edge software solutions and digital platforms that power the next generation of businesses.',
    image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1920&q=80',
    ctaText: 'See Our Products',
    ctaLink: '/apps-platforms',
    tag: 'Technology',
  },
  {
    id: '4',
    title: 'Curating Unforgettable Moments',
    subtitle: 'LAPS Party Suites',
    description: 'Premium event experiences and hospitality services that transform celebrations into cherished memories.',
    image: 'https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?auto=format&fit=crop&w=1920&q=80',
    ctaText: 'Plan Your Event',
    ctaLink: '/suites',
    tag: 'Events',
  },
];

// News items
export const newsItems: NewsItem[] = [
  {
    id: '1',
    title: 'LAPS Architecture Wins National Design Award',
    excerpt: 'Our sustainable urban planning project in Hyderabad recognized for innovation in green architecture.',
    category: 'SPOTLIGHT',
    date: '2024-12-20',
    image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=800&q=80',
    link: '/newsroom/architecture-award',
    division: 'architecture',
  },
  {
    id: '2',
    title: 'LAPS Apps Launches AI-Powered Platform',
    excerpt: 'Revolutionary new SaaS product helps businesses automate workflows with intelligent automation.',
    category: 'TECHNOLOGY',
    date: '2024-12-18',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=80',
    link: '/newsroom/ai-platform-launch',
    division: 'apps',
  },
  {
    id: '3',
    title: 'Did You Know?',
    excerpt: 'LAPS Group now operates across 5 divisions, serving clients in 15+ cities across India.',
    category: 'FACTS',
    date: '2024-12-15',
    image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=800&q=80',
    link: '/about',
  },
];

// Timeline events
export const timelineEvents: TimelineEvent[] = [
  {
    year: '2020',
    title: 'The Beginning',
    description: 'LAPS was founded with a vision to create excellence across multiple domains.',
  },
  {
    year: '2021',
    title: 'Architecture Division Launch',
    description: 'Launched our first division focusing on landscape and architectural design.',
  },
  {
    year: '2022',
    title: 'Technology Expansion',
    description: 'Apps & Platforms division established to drive digital innovation.',
  },
  {
    year: '2023',
    title: 'Multi-Division Growth',
    description: 'Ads & Services and Photo Studios divisions launched, completing our creative ecosystem.',
  },
  {
    year: '2024',
    title: 'Party Suites & Expansion',
    description: 'Events division launched, marking our entry into premium hospitality.',
  },
];

// Job openings
export const jobOpenings: JobOpening[] = [
  {
    id: '1',
    title: 'Senior Software Manager',
    division: 'apps',
    location: 'Hyderabad',
    type: 'full-time',
    experience: '5+ years',
    posted: '2024-12-15',
  },
  {
    id: '2',
    title: 'Digital Marketing Manager',
    division: 'ads',
    location: 'Hyderabad',
    type: 'full-time',
    experience: '3+ years',
    posted: '2024-12-18',
  },
  {
    id: '3',
    title: 'Architectural Designer',
    division: 'architecture',
    location: 'Bangalore',
    type: 'full-time',
    experience: '2+ years',
    posted: '2024-12-20',
  },
];

// Company stats
export const companyStats = {
  employees: '1,028,000',
  divisions: 5,
  cities: 15,
  yearsActive: 4,
};

// Founder info
export const founderInfo = {
  name: 'Venugopal Meesala',
  title: 'Founder & Chairman',
  quote: 'LAPS was born from the belief that excellence knows no boundaries. We aim to create value across every domain we enter.',
  linkedin: 'https://linkedin.com/in/venugopalmeesala',
};
