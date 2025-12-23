// Division types
export type DivisionKey = 'architecture' | 'apps' | 'ads' | 'suites' | 'photo';

export interface Division {
  key: DivisionKey;
  name: string;
  fullName: string;
  tagline: string;
  description: string;
  slug: string;
  icon: string;
  accentColor: string;
  services: string[];
  stats: DivisionStat[];
}

export interface DivisionStat {
  label: string;
  value: string;
}

// Hero slide types
export interface HeroSlide {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  ctaText: string;
  ctaLink: string;
  tag?: string;
}

// News types
export interface NewsItem {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  image: string;
  link: string;
  division?: DivisionKey;
}

// Career types
export interface JobOpening {
  id: string;
  title: string;
  division: DivisionKey;
  location: string;
  type: 'full-time' | 'part-time' | 'contract' | 'internship';
  experience: string;
  posted: string;
}

// Timeline types
export interface TimelineEvent {
  year: string;
  title: string;
  description: string;
  image?: string;
}

// Team member types
export interface TeamMember {
  id: string;
  name: string;
  role: string;
  division?: DivisionKey;
  image: string;
  bio: string;
  linkedin?: string;
}

// Contact types
export interface ContactForm {
  name: string;
  email: string;
  phone?: string;
  division?: DivisionKey;
  subject: string;
  message: string;
}

// API Response types
export interface ApiResponse<T> {
  success: boolean;
  data: T;
  message?: string;
}

export interface PaginatedResponse<T> {
  items: T[];
  total: number;
  page: number;
  pageSize: number;
  totalPages: number;
}
