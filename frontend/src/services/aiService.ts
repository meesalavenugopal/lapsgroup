/**
 * AI Assistant Service for Contact Form
 */
import API_ENDPOINTS from '@/config/api';

export type AIAction = 'suggest' | 'concise' | 'rephrase' | 'formal' | 'friendly';
export type AIField = 'subject' | 'message';

export interface AIAssistRequest {
  text: string;
  action: AIAction;
  field: AIField;
  context?: string;
}

export interface AIAssistResponse {
  original: string;
  suggestion: string;
  action: string;
}

export interface SubjectSuggestions {
  suggestions: string[];
}

/**
 * Get AI-powered text assistance
 */
export async function getAIAssist(request: AIAssistRequest): Promise<AIAssistResponse> {
  const response = await fetch(API_ENDPOINTS.AI_ASSIST, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(request),
  });

  if (!response.ok) {
    const error = await response.json().catch(() => ({ detail: 'AI service unavailable' }));
    throw new Error(error.detail || 'Failed to get AI assistance');
  }

  return response.json();
}

/**
 * Get pre-defined subject suggestions
 */
export async function getSubjectSuggestions(): Promise<SubjectSuggestions> {
  const response = await fetch(API_ENDPOINTS.AI_SUBJECT_SUGGESTIONS);

  if (!response.ok) {
    throw new Error('Failed to get subject suggestions');
  }

  return response.json();
}

/**
 * AI Action Labels for UI - icons are Lucide icon names
 */
export const AI_ACTIONS: { value: AIAction; label: string; icon: string; description: string }[] = [
  { value: 'suggest', label: 'Suggest', icon: 'Sparkles', description: 'Generate a suggestion' },
  { value: 'concise', label: 'Concise', icon: 'AlignLeft', description: 'Make it shorter' },
  { value: 'rephrase', label: 'Rephrase', icon: 'RefreshCw', description: 'Reword it' },
  { value: 'formal', label: 'Formal', icon: 'Briefcase', description: 'More professional' },
  { value: 'friendly', label: 'Friendly', icon: 'Heart', description: 'More approachable' },
];
