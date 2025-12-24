import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Clock, ChevronLeft, ChevronRight, Pause, Play, ArrowRight, MessageCircle, HelpCircle, ExternalLink, Sparkles, Loader2, X, Check, AlignLeft, RefreshCw, Briefcase, Heart } from 'lucide-react';
import { divisions } from '@/data/content';
import { DivisionKey } from '@/types';
import { getAIAssist, AI_ACTIONS, AIAction, AIField } from '@/services/aiService';
import clsx from 'clsx';

// Icon mapping for AI actions
const AI_ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  Sparkles,
  AlignLeft,
  RefreshCw,
  Briefcase,
  Heart,
};

export function ContactPage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    division: '' as DivisionKey | '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  // AI Assistant state
  const [aiLoading, setAiLoading] = useState<AIField | null>(null);
  const [aiSuggestion, setAiSuggestion] = useState<{ field: AIField; text: string } | null>(null);
  const [aiMenuOpen, setAiMenuOpen] = useState<AIField | null>(null);
  const [aiError, setAiError] = useState<string | null>(null);

  const handleAIAssist = async (field: AIField, action: AIAction) => {
    const text = formData[field];
    const division = formData.division ? divisions.find(d => d.key === formData.division)?.name : undefined;
    
    setAiMenuOpen(null);
    setAiLoading(field);
    setAiError(null);
    setAiSuggestion(null);
    
    try {
      const response = await getAIAssist({
        text,
        action,
        field,
        context: division,
      });
      setAiSuggestion({ field, text: response.suggestion });
    } catch (error) {
      setAiError(error instanceof Error ? error.message : 'AI service unavailable');
    } finally {
      setAiLoading(null);
    }
  };

  const acceptAiSuggestion = () => {
    if (aiSuggestion) {
      setFormData(prev => ({ ...prev, [aiSuggestion.field]: aiSuggestion.text }));
      setAiSuggestion(null);
    }
  };

  const rejectAiSuggestion = () => {
    setAiSuggestion(null);
  };

  const heroSlides = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=1920&q=80',
      tag: 'Contact Us',
      subtitle: 'Get in Touch',
      title: "Let's Start a Conversation",
      description: "We'd love to hear from you. Reach out for inquiries, partnerships, or just to say hello.",
      ctaText: 'Send a Message',
      ctaLink: '#contact-form',
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&q=80',
      tag: 'Headquarters',
      subtitle: 'Visit Us',
      title: 'Based in Hyderabad',
      description: 'Our headquarters is located in the heart of Hyderabad, with satellite offices across India.',
      ctaText: 'Get Directions',
      ctaLink: '#locations',
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1920&q=80',
      tag: 'Partnership',
      subtitle: 'Work With Us',
      title: 'Collaborate on Projects',
      description: 'Looking to partner with LAPS Group? We are always open to meaningful collaborations.',
      ctaText: 'Explore Partnerships',
      ctaLink: '#partnerships',
    },
  ];

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  }, [heroSlides.length]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  }, [heroSlides.length]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(nextSlide, 8000);
    return () => clearInterval(interval);
  }, [isPlaying, nextSlide]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  // Division images for contact cards
  const divisionImages: Record<string, string> = {
    architecture: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=400&q=80',
    apps: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&q=80',
    ads: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=400&q=80',
    suites: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400&q=80',
    photo: 'https://images.unsplash.com/photo-1452587925148-ce544e77e70d?w=400&q=80',
  };

  const offices = [
    { city: 'Hyderabad', address: 'Banjara Hills, Road No. 12', type: 'Headquarters', phone: '+91 98765 43210', image: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=800&q=80' },
    { city: 'Bangalore', address: 'Koramangala, 5th Block', type: 'Regional Office', phone: '+91 98765 43211', image: 'https://images.unsplash.com/photo-1596176530529-78163a4f7af2?w=800&q=80' },
    { city: 'Mumbai', address: 'Andheri East, MIDC', type: 'Regional Office', phone: '+91 98765 43212', image: 'https://images.unsplash.com/photo-1567157577867-05ccb1388e66?w=800&q=80' },
  ];

  const faqs = [
    { q: 'How quickly can I expect a response?', a: 'We typically respond to all inquiries within 24 business hours.' },
    { q: 'Can I schedule a meeting?', a: 'Yes! Please reach out via the contact form and we will arrange a suitable time.' },
    { q: 'Do you work with international clients?', a: 'Absolutely. We have clients across 10+ countries and can accommodate different time zones.' },
    { q: 'Which division should I contact?', a: "If unsure, select 'General Inquiry' and our team will route you to the right division." },
  ];

  return (
    <div>
      {/* Hero Carousel */}
      <div className="relative min-h-[650px] max-h-[800px] overflow-hidden bg-laps-navy">
        <AnimatePresence initial={false} mode="popLayout">
          {heroSlides.map(
            (slide, index) =>
              index === currentSlide && (
                <motion.div
                  key={slide.id}
                  initial={{ x: '100%' }}
                  animate={{ x: 0 }}
                  exit={{ x: '-100%' }}
                  transition={{ duration: 0.7, ease: 'easeInOut' }}
                  className="absolute inset-0"
                >
                  <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url(${slide.image})` }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-laps-navy/90 via-laps-navy/70 to-transparent" />
                    <div 
                      className="absolute inset-0 opacity-30"
                      style={{
                        backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.15) 1px, transparent 1px)',
                        backgroundSize: '4px 4px'
                      }}
                    />
                  </div>

                  <div className="relative h-full container-wide flex items-center">
                    <div className="max-w-2xl text-white">
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="inline-block px-4 py-1.5 bg-laps-blue text-sm font-medium mb-4"
                      >
                        {slide.tag}
                      </motion.div>

                      <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="text-laps-gold text-lg font-medium mb-2"
                      >
                        {slide.subtitle}
                      </motion.p>

                      <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight whitespace-nowrap"
                      >
                        {slide.title}
                      </motion.h1>

                      <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                        className="text-lg text-white/80 mb-8 max-w-lg"
                      >
                        {slide.description}
                      </motion.p>

                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 }}
                      >
                        <a
                          href={slide.ctaLink}
                          className="inline-flex items-center gap-3 border-2 border-laps-gold text-laps-gold px-5 py-2.5 text-sm font-medium hover:bg-laps-gold hover:text-laps-navy transition-all duration-300"
                        >
                          {slide.ctaText}
                          <ArrowRight className="w-4 h-4" />
                        </a>
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              )
          )}
        </AnimatePresence>

        <button onClick={prevSlide} className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 transition-colors">
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button onClick={nextSlide} className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 transition-colors">
          <ChevronRight className="w-6 h-6" />
        </button>

        <div className="absolute bottom-8 left-0 right-0">
          <div className="container-wide flex items-center justify-between">
            <div className="flex items-center gap-4 text-white">
              <span className="text-3xl font-bold">{currentSlide + 1}</span>
              <span className="text-white/50">/</span>
              <span className="text-white/50">{heroSlides.length}</span>
            </div>

            <div className="flex items-center gap-2">
              {heroSlides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={clsx('h-0.5 transition-all duration-500', index === currentSlide ? 'bg-white w-12' : 'bg-white/30 w-8 hover:bg-white/50')}
                />
              ))}
            </div>

            <button onClick={() => setIsPlaying(!isPlaying)} className="flex items-center gap-2 text-white/80 hover:text-white transition-colors">
              {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
              <span className="text-sm">{isPlaying ? 'Pause' : 'Play'}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Quick Contact - Bento Grid */}
      <section className="py-12 bg-laps-navy">
        <div className="container-wide">
          <div className="grid grid-cols-12 gap-4">
            {/* Large email card with background image */}
            <motion.a
              href="mailto:hello@lapsgroup.com"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="col-span-12 md:col-span-6 relative overflow-hidden group min-h-[180px]"
            >
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1596524430615-b46475ddff6e?w=800&q=80)' }}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-laps-gold/95 via-laps-gold/90 to-laps-gold/80" />
              <div className="relative h-full p-8 flex items-center justify-between">
                <div>
                  <Mail className="w-10 h-10 text-laps-navy/30 mb-3" />
                  <p className="text-sm text-laps-navy/60 uppercase tracking-wider font-medium">Email Us</p>
                  <p className="text-2xl font-bold text-laps-navy">hello@lapsgroup.com</p>
                </div>
                <ArrowRight className="w-6 h-6 text-laps-navy group-hover:translate-x-2 transition-transform" />
              </div>
            </motion.a>

            {/* Phone card with background image */}
            <motion.a
              href="tel:+919876543210"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="col-span-6 md:col-span-3 relative overflow-hidden group min-h-[180px]"
            >
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=800&q=80)' }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-laps-navy/95 via-laps-navy/80 to-laps-navy/60" />
              <div className="relative h-full p-6 flex flex-col justify-end">
                <Phone className="w-8 h-8 text-laps-gold mb-3" />
                <p className="text-sm text-white/50 uppercase tracking-wider">Call Us</p>
                <p className="text-lg font-bold text-white">+91 98765 43210</p>
              </div>
            </motion.a>

            {/* Location card with background image */}
            <motion.a
              href="#locations"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="col-span-6 md:col-span-3 relative overflow-hidden group min-h-[180px]"
            >
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=800&q=80)' }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/95 via-emerald-900/80 to-emerald-900/60" />
              <div className="relative h-full p-6 flex flex-col justify-end">
                <MapPin className="w-8 h-8 text-emerald-400 mb-3" />
                <p className="text-sm text-white/50 uppercase tracking-wider">Visit Us</p>
                <p className="text-lg font-bold text-white">Hyderabad, India</p>
              </div>
            </motion.a>
          </div>
        </div>
      </section>

      {/* Contact Form & Division Contacts - Bento Layout */}
      <section id="contact-form" className="py-24 bg-laps-light">
        <div className="container-wide">
          <div className="grid grid-cols-12 gap-6">
            {/* Form - Large card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="col-span-12 lg:col-span-7 bg-white p-8 lg:p-12"
            >
              <div className="flex items-center gap-4 mb-8">
                <MessageCircle className="w-10 h-10 text-laps-blue" />
                <div>
                  <h2 className="text-2xl font-bold text-laps-navy">Send us a Message</h2>
                  <p className="text-laps-slate">We'll get back to you within 24 hours</p>
                </div>
              </div>

              {isSubmitted ? (
                <div className="bg-emerald-50 border border-emerald-200 p-12 text-center">
                  <div className="w-20 h-20 bg-emerald-100 flex items-center justify-center mx-auto mb-6">
                    <Send className="w-10 h-10 text-emerald-600" />
                  </div>
                  <h3 className="text-2xl font-semibold text-emerald-800 mb-3">Message Sent!</h3>
                  <p className="text-emerald-600 text-lg">Thank you for reaching out. We'll get back to you shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-laps-navy mb-2">Full Name *</label>
                      <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required className="w-full px-4 py-4 bg-laps-light border-0 focus:ring-2 focus:ring-laps-gold focus:bg-white transition-colors" placeholder="John Doe" />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-laps-navy mb-2">Email Address *</label>
                      <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required className="w-full px-4 py-4 bg-laps-light border-0 focus:ring-2 focus:ring-laps-gold focus:bg-white transition-colors" placeholder="john@example.com" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-laps-navy mb-2">Phone Number</label>
                      <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} className="w-full px-4 py-4 bg-laps-light border-0 focus:ring-2 focus:ring-laps-gold focus:bg-white transition-colors" placeholder="+91 98765 43210" />
                    </div>
                    <div>
                      <label htmlFor="division" className="block text-sm font-medium text-laps-navy mb-2">Select Division</label>
                      <select id="division" name="division" value={formData.division} onChange={handleChange} className="w-full px-4 py-4 bg-laps-light border-0 focus:ring-2 focus:ring-laps-gold focus:bg-white transition-colors">
                        <option value="">General Inquiry</option>
                        {divisions.map((div) => (
                          <option key={div.key} value={div.key}>{div.name}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Subject with AI Assist */}
                  <div className="relative">
                    <div className="flex items-center justify-between mb-2">
                      <label htmlFor="subject" className="block text-sm font-medium text-laps-navy">Subject *</label>
                      <div className="relative">
                        <button
                          type="button"
                          onClick={() => setAiMenuOpen(aiMenuOpen === 'subject' ? null : 'subject')}
                          disabled={aiLoading === 'subject'}
                          className={clsx(
                            "flex items-center gap-1.5 px-2.5 py-1 text-xs font-medium rounded-full transition-all",
                            aiLoading === 'subject' 
                              ? "bg-laps-gold/20 text-laps-gold cursor-wait"
                              : "bg-laps-light text-laps-blue hover:bg-laps-gold/20 hover:text-laps-gold"
                          )}
                        >
                          {aiLoading === 'subject' ? (
                            <Loader2 className="w-3.5 h-3.5 animate-spin" />
                          ) : (
                            <Sparkles className="w-3.5 h-3.5" />
                          )}
                          AI Assist
                        </button>
                        
                        {/* AI Actions Dropdown */}
                        <AnimatePresence>
                          {aiMenuOpen === 'subject' && (
                            <motion.div
                              initial={{ opacity: 0, y: -5, scale: 0.95 }}
                              animate={{ opacity: 1, y: 0, scale: 1 }}
                              exit={{ opacity: 0, y: -5, scale: 0.95 }}
                              className="absolute right-0 top-full mt-2 w-48 bg-white shadow-lg border border-gray-100 z-20"
                            >
                              {AI_ACTIONS.map((action) => {
                                const IconComponent = AI_ICONS[action.icon];
                                return (
                                  <button
                                    key={action.value}
                                    type="button"
                                    onClick={() => handleAIAssist('subject', action.value)}
                                    className="w-full px-4 py-2.5 text-left text-sm hover:bg-laps-light flex items-center gap-3 transition-colors"
                                  >
                                    {IconComponent && <IconComponent className="w-4 h-4 text-laps-gold" />}
                                    <div>
                                      <div className="font-medium text-laps-navy">{action.label}</div>
                                      <div className="text-xs text-laps-slate">{action.description}</div>
                                    </div>
                                  </button>
                                );
                              })}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    </div>
                    <input type="text" id="subject" name="subject" value={formData.subject} onChange={handleChange} required className="w-full px-4 py-4 bg-laps-light border-0 focus:ring-2 focus:ring-laps-gold focus:bg-white transition-colors" placeholder="How can we help?" />
                    
                    {/* AI Suggestion for Subject */}
                    <AnimatePresence>
                      {aiSuggestion?.field === 'subject' && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          className="mt-2 p-3 bg-laps-gold/10 border border-laps-gold/30"
                        >
                          <div className="flex items-start gap-2 mb-2">
                            <Sparkles className="w-4 h-4 text-laps-gold mt-0.5" />
                            <span className="text-xs font-medium text-laps-gold uppercase tracking-wider">AI Suggestion</span>
                          </div>
                          <p className="text-sm text-laps-navy mb-3">{aiSuggestion.text}</p>
                          <div className="flex gap-2">
                            <button
                              type="button"
                              onClick={acceptAiSuggestion}
                              className="flex items-center gap-1.5 px-3 py-1.5 bg-laps-gold text-white text-xs font-medium hover:bg-laps-gold/90 transition-colors"
                            >
                              <Check className="w-3.5 h-3.5" /> Accept
                            </button>
                            <button
                              type="button"
                              onClick={rejectAiSuggestion}
                              className="flex items-center gap-1.5 px-3 py-1.5 bg-white border border-gray-200 text-laps-slate text-xs font-medium hover:bg-gray-50 transition-colors"
                            >
                              <X className="w-3.5 h-3.5" /> Dismiss
                            </button>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Message with AI Assist */}
                  <div className="relative">
                    <div className="flex items-center justify-between mb-2">
                      <label htmlFor="message" className="block text-sm font-medium text-laps-navy">Message *</label>
                      <div className="relative">
                        <button
                          type="button"
                          onClick={() => setAiMenuOpen(aiMenuOpen === 'message' ? null : 'message')}
                          disabled={aiLoading === 'message'}
                          className={clsx(
                            "flex items-center gap-1.5 px-2.5 py-1 text-xs font-medium rounded-full transition-all",
                            aiLoading === 'message' 
                              ? "bg-laps-gold/20 text-laps-gold cursor-wait"
                              : "bg-laps-light text-laps-blue hover:bg-laps-gold/20 hover:text-laps-gold"
                          )}
                        >
                          {aiLoading === 'message' ? (
                            <Loader2 className="w-3.5 h-3.5 animate-spin" />
                          ) : (
                            <Sparkles className="w-3.5 h-3.5" />
                          )}
                          AI Assist
                        </button>
                        
                        {/* AI Actions Dropdown */}
                        <AnimatePresence>
                          {aiMenuOpen === 'message' && (
                            <motion.div
                              initial={{ opacity: 0, y: -5, scale: 0.95 }}
                              animate={{ opacity: 1, y: 0, scale: 1 }}
                              exit={{ opacity: 0, y: -5, scale: 0.95 }}
                              className="absolute right-0 top-full mt-2 w-48 bg-white shadow-lg border border-gray-100 z-20"
                            >
                              {AI_ACTIONS.map((action) => {
                                const IconComponent = AI_ICONS[action.icon];
                                return (
                                  <button
                                    key={action.value}
                                    type="button"
                                    onClick={() => handleAIAssist('message', action.value)}
                                    className="w-full px-4 py-2.5 text-left text-sm hover:bg-laps-light flex items-center gap-3 transition-colors"
                                  >
                                    {IconComponent && <IconComponent className="w-4 h-4 text-laps-gold" />}
                                    <div>
                                      <div className="font-medium text-laps-navy">{action.label}</div>
                                      <div className="text-xs text-laps-slate">{action.description}</div>
                                    </div>
                                  </button>
                                );
                              })}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    </div>
                    <textarea id="message" name="message" value={formData.message} onChange={handleChange} required rows={5} className="w-full px-4 py-4 bg-laps-light border-0 focus:ring-2 focus:ring-laps-gold focus:bg-white transition-colors resize-none" placeholder="Tell us more about your inquiry..." />
                    
                    {/* AI Suggestion for Message */}
                    <AnimatePresence>
                      {aiSuggestion?.field === 'message' && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          className="mt-2 p-3 bg-laps-gold/10 border border-laps-gold/30"
                        >
                          <div className="flex items-start gap-2 mb-2">
                            <Sparkles className="w-4 h-4 text-laps-gold mt-0.5" />
                            <span className="text-xs font-medium text-laps-gold uppercase tracking-wider">AI Suggestion</span>
                          </div>
                          <p className="text-sm text-laps-navy whitespace-pre-wrap mb-3">{aiSuggestion.text}</p>
                          <div className="flex gap-2">
                            <button
                              type="button"
                              onClick={acceptAiSuggestion}
                              className="flex items-center gap-1.5 px-3 py-1.5 bg-laps-gold text-white text-xs font-medium hover:bg-laps-gold/90 transition-colors"
                            >
                              <Check className="w-3.5 h-3.5" /> Accept
                            </button>
                            <button
                              type="button"
                              onClick={rejectAiSuggestion}
                              className="flex items-center gap-1.5 px-3 py-1.5 bg-white border border-gray-200 text-laps-slate text-xs font-medium hover:bg-gray-50 transition-colors"
                            >
                              <X className="w-3.5 h-3.5" /> Dismiss
                            </button>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* AI Error Message */}
                  <AnimatePresence>
                    {aiError && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="p-3 bg-red-50 border border-red-200 text-red-700 text-sm flex items-center justify-between"
                      >
                        <span>{aiError}</span>
                        <button type="button" onClick={() => setAiError(null)}>
                          <X className="w-4 h-4" />
                        </button>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <button type="submit" disabled={isSubmitting} className="w-full bg-laps-navy text-white py-4 font-medium hover:bg-laps-blue transition-colors flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed">
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>Send Message <Send className="w-5 h-5" /></>
                    )}
                  </button>
                </form>
              )}
            </motion.div>

            {/* Sidebar - Bento cards */}
            <div className="col-span-12 lg:col-span-5 grid grid-cols-1 gap-4">
              {/* Division Contacts - Large */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-laps-navy p-8"
              >
                <h3 className="text-xl font-bold text-white mb-6">Division Contacts</h3>
                <div className="space-y-3">
                  {divisions.map((div) => {
                    const divImage = divisionImages[div.key];
                    return (
                      <a
                        key={div.key}
                        href={`mailto:${div.slug}@lapsgroup.com`}
                        className="flex items-center gap-4 p-3 bg-white/5 hover:bg-white/10 transition-colors group relative overflow-hidden"
                      >
                        <div 
                          className="w-14 h-14 flex-shrink-0 bg-cover bg-center"
                          style={{ 
                            backgroundImage: `url(${divImage})`,
                            borderLeft: `3px solid ${div.accentColor}`
                          }}
                        />
                        <div className="flex-1 min-w-0">
                          <p className="font-medium text-white text-sm truncate">{div.name}</p>
                          <p className="text-xs text-white/50 truncate">{div.slug}@lapsgroup.com</p>
                        </div>
                        <ExternalLink className="w-4 h-4 text-laps-gold opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0" />
                      </a>
                    );
                  })}
                </div>
              </motion.div>

              {/* Office Hours - Small */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="bg-white p-6"
              >
                <div className="flex items-center gap-3 mb-4">
                  <Clock className="w-6 h-6 text-laps-blue" />
                  <h3 className="font-bold text-laps-navy">Office Hours</h3>
                </div>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="text-laps-slate">Mon - Fri</span>
                    <p className="font-semibold text-laps-navy">9:00 AM - 6:00 PM</p>
                  </div>
                  <div>
                    <span className="text-laps-slate">Saturday</span>
                    <p className="font-semibold text-laps-navy">10:00 AM - 2:00 PM</p>
                  </div>
                </div>
              </motion.div>

              {/* Global reach - With world map background */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="relative overflow-hidden"
              >
                <div 
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80)' }}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-laps-gold/95 to-laps-gold/85" />
                <div className="relative p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-laps-navy/70 uppercase tracking-wider font-medium">Global Reach</p>
                      <p className="text-3xl font-bold text-laps-navy">10+ Countries</p>
                      <p className="text-sm text-laps-navy/60 mt-1">Serving clients worldwide</p>
                    </div>
                    <div className="w-16 h-16 rounded-full bg-laps-navy/10 flex items-center justify-center">
                      <img 
                        src="https://cdn-icons-png.flaticon.com/512/921/921490.png" 
                        alt="Globe" 
                        className="w-10 h-10 opacity-80"
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Locations - Bento Grid */}
      <section id="locations" className="py-20 bg-white">
        <div className="container-wide">
          <div className="mb-10">
            <h2 className="text-2xl font-semibold text-laps-navy inline-block border-b-2 border-laps-navy pb-2">Our Offices</h2>
          </div>

          <div className="grid grid-cols-12 gap-4">
            {/* Large HQ card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="col-span-12 lg:col-span-6 row-span-2 relative overflow-hidden group"
            >
              <img src={offices[0].image} alt={offices[0].city} className="w-full h-full object-cover min-h-[400px] group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-laps-navy via-laps-navy/50 to-transparent" />
              <div className="absolute top-6 left-6">
                <span className="px-3 py-1 bg-laps-gold text-laps-navy text-sm font-bold">{offices[0].type}</span>
              </div>
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <h3 className="text-3xl font-bold mb-2">{offices[0].city}</h3>
                <p className="text-white/70 mb-2">{offices[0].address}</p>
                <p className="text-laps-gold">{offices[0].phone}</p>
              </div>
            </motion.div>

            {/* Other offices */}
            {offices.slice(1).map((office, index) => (
              <motion.div
                key={office.city}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="col-span-12 sm:col-span-6 lg:col-span-6 relative overflow-hidden group"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 h-full bg-laps-light">
                  <div className="relative aspect-square md:aspect-auto overflow-hidden">
                    <img src={office.image} alt={office.city} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div className="p-6 flex flex-col justify-center">
                    <span className="text-xs text-laps-blue font-medium mb-2">{office.type}</span>
                    <h3 className="text-2xl font-bold text-laps-navy mb-2">{office.city}</h3>
                    <p className="text-laps-slate mb-2">{office.address}</p>
                    <p className="text-sm text-laps-slate">{office.phone}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="h-[400px] bg-laps-navy relative overflow-hidden">
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.15) 1px, transparent 1px)',
            backgroundSize: '20px 20px'
          }}
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <MapPin className="w-16 h-16 text-laps-gold mx-auto mb-4" />
            <p className="text-white text-xl font-semibold mb-2">Interactive Map</p>
            <p className="text-white/50">Coming Soon</p>
          </div>
        </div>
      </section>

      {/* FAQ - Bento Style */}
      <section className="py-20 bg-laps-light">
        <div className="container-wide">
          <div className="grid grid-cols-12 gap-6">
            {/* Header Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="col-span-12 lg:col-span-4 bg-laps-navy p-8 flex flex-col justify-between min-h-[300px]"
            >
              <div>
                <HelpCircle className="w-12 h-12 text-laps-gold mb-6" />
                <h2 className="text-3xl font-bold text-white mb-4">Frequently Asked Questions</h2>
                <p className="text-white/60">Quick answers to common questions about working with LAPS Group.</p>
              </div>
              <a href="#contact-form" className="inline-flex items-center gap-2 text-laps-gold hover:gap-3 transition-all">
                Still have questions? Contact us <ArrowRight className="w-4 h-4" />
              </a>
            </motion.div>

            {/* FAQ Cards */}
            <div className="col-span-12 lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-4">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white p-6 hover:shadow-lg transition-shadow"
                >
                  <h3 className="font-bold text-laps-navy mb-3">{faq.q}</h3>
                  <p className="text-laps-slate text-sm">{faq.a}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA - Bento */}
      <section id="partnerships" className="relative py-24 overflow-hidden">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1920&q=80" alt="Partnership" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-laps-navy/80" />
        </div>
        <div className="container-wide relative z-10">
          <div className="grid grid-cols-12 gap-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="col-span-12 lg:col-span-8 bg-laps-navy p-10 lg:p-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Partner With Us?</h2>
              <p className="text-white/70 text-lg mb-8 max-w-xl">Whether you're looking for architectural services, app development, marketing solutions, event management, or professional photography - we're here to help.</p>
              <a href="#contact-form" className="inline-flex items-center gap-2 bg-laps-gold text-laps-navy px-8 py-4 font-semibold hover:bg-laps-gold/90 transition-colors">
                Start a Project <ArrowRight className="w-5 h-5" />
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="col-span-12 lg:col-span-4 bg-laps-gold p-10 flex flex-col justify-center"
            >
              <div className="text-6xl font-bold text-laps-navy/20 mb-4">24h</div>
              <p className="text-laps-navy font-semibold text-xl">Average Response Time</p>
              <p className="text-laps-navy/70">We prioritize quick and helpful responses to all inquiries.</p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
