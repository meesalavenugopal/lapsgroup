import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:8000';

const apiClient = axios.create({
  baseURL: `${API_BASE_URL}/api/v1`,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Response interceptor for error handling
apiClient.interceptors.response.use(
  (response) => response.data,
  (error) => {
    console.error('API Error:', error.response?.data || error.message);
    return Promise.reject(error);
  }
);

// Public API
export const publicApi = {
  getHeroSlides: () => apiClient.get('/public/hero-slides'),
  getTimeline: () => apiClient.get('/public/timeline'),
  getCompanyStats: () => apiClient.get('/public/company-stats'),
  getFounder: () => apiClient.get('/public/founder'),
  getSiteConfig: () => apiClient.get('/public/site-config'),
};

// Divisions API
export const divisionsApi = {
  getAll: () => apiClient.get('/divisions'),
  getBySlug: (slug: string) => apiClient.get(`/divisions/${slug}`),
  getServices: (slug: string) => apiClient.get(`/divisions/${slug}/services`),
  getStats: (slug: string) => apiClient.get(`/divisions/${slug}/stats`),
};

// News API
export const newsApi = {
  getAll: (params?: { division?: string; category?: string; featured?: boolean; page?: number; page_size?: number }) =>
    apiClient.get('/news', { params }),
  getFeatured: () => apiClient.get('/news/featured'),
  getCategories: () => apiClient.get('/news/categories'),
  getBySlug: (slug: string) => apiClient.get(`/news/${slug}`),
};

// Jobs API
export const jobsApi = {
  getAll: (params?: { division?: string; location?: string; job_type?: string; page?: number; page_size?: number }) =>
    apiClient.get('/jobs', { params }),
  getFeatured: () => apiClient.get('/jobs/featured'),
  getLocations: () => apiClient.get('/jobs/locations'),
  getDivisions: () => apiClient.get('/jobs/divisions'),
  getBySlug: (slug: string) => apiClient.get(`/jobs/${slug}`),
  apply: (jobId: string, application: {
    name: string;
    email: string;
    phone?: string;
    cover_letter?: string;
    linkedin_url?: string;
    portfolio_url?: string;
  }) => apiClient.post(`/jobs/${jobId}/apply`, application),
};

// Projects API
export const projectsApi = {
  getAll: (params?: { division?: string; featured?: boolean; year?: number; page?: number; page_size?: number }) =>
    apiClient.get('/projects', { params }),
  getFeatured: () => apiClient.get('/projects/featured'),
  getBySlug: (slug: string) => apiClient.get(`/projects/${slug}`),
};

// Contact API
export const contactApi = {
  submit: (data: {
    name: string;
    email: string;
    phone?: string;
    division?: string;
    subject: string;
    message: string;
  }) => apiClient.post('/contact/submit', data),
  getInfo: () => apiClient.get('/contact/info'),
};

// Newsletter API
export const newsletterApi = {
  subscribe: (email: string) => apiClient.post('/newsletter/subscribe', { email }),
  unsubscribe: (email: string) => apiClient.post('/newsletter/unsubscribe', { email }),
};

export default apiClient;
