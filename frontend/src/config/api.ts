/**
 * API Configuration
 */

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8000';
const API_VERSION = '/api/v1';

export const API_ENDPOINTS = {
  // Contact
  CONTACT_SUBMIT: `${API_BASE_URL}${API_VERSION}/contact/submit`,
  CONTACT_INFO: `${API_BASE_URL}${API_VERSION}/contact/info`,
  
  // AI Assistant
  AI_ASSIST: `${API_BASE_URL}${API_VERSION}/ai/assist`,
  AI_SUBJECT_SUGGESTIONS: `${API_BASE_URL}${API_VERSION}/ai/suggestions/subjects`,
  
  // Newsletter
  NEWSLETTER_SUBSCRIBE: `${API_BASE_URL}${API_VERSION}/newsletter/subscribe`,
  
  // Jobs
  JOBS_LIST: `${API_BASE_URL}${API_VERSION}/jobs`,
  JOB_APPLY: `${API_BASE_URL}${API_VERSION}/jobs/apply`,
  
  // Divisions
  DIVISIONS_LIST: `${API_BASE_URL}${API_VERSION}/divisions`,
  
  // News
  NEWS_LIST: `${API_BASE_URL}${API_VERSION}/news`,
  
  // Projects
  PROJECTS_LIST: `${API_BASE_URL}${API_VERSION}/projects`,
};

export default API_ENDPOINTS;
