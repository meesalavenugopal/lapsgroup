import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Building2, Code2, Megaphone, PartyPopper, Camera, MessageSquare, Clock, Globe } from 'lucide-react';
import { divisions } from '@/data/content';
import { DivisionKey } from '@/types';

export function ContactPage() {
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

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'hello@lapsgroup.com',
      href: 'mailto:hello@lapsgroup.com',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 98765 43210',
      href: 'tel:+919876543210',
    },
    {
      icon: MapPin,
      label: 'Headquarters',
      value: 'Hyderabad, India',
      href: '#',
    },
  ];

  const iconMap = {
    architecture: Building2,
    apps: Code2,
    ads: Megaphone,
    suites: PartyPopper,
    photo: Camera,
  };

  const quickFacts = [
    { icon: Clock, label: 'Response Time', value: '< 24 Hours' },
    { icon: Globe, label: 'Global Reach', value: '10+ Countries' },
    { icon: MessageSquare, label: 'Languages', value: 'EN, HI, TE' },
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=1920&q=80"
            alt="Contact us"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-laps-navy via-laps-navy/90 to-laps-navy/70" />
        </div>

        <div className="container-wide relative z-10 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <div className="flex items-center gap-2 mb-6">
                <MessageSquare className="w-5 h-5 text-laps-gold" />
                <span className="text-laps-gold text-sm font-medium uppercase tracking-wider">Get in Touch</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Let's Connect
              </h1>
              <p className="text-xl text-white/80 mb-8 max-w-xl">
                We'd love to hear from you. Reach out to us for any inquiries, 
                partnerships, or just to say hello.
              </p>

              {/* Quick Facts */}
              <div className="grid grid-cols-3 gap-4">
                {quickFacts.map((fact, index) => (
                  <motion.div
                    key={fact.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 + index * 0.1 }}
                    className="text-center"
                  >
                    <fact.icon className="w-6 h-6 text-laps-gold mx-auto mb-2" />
                    <div className="text-lg font-bold text-white">{fact.value}</div>
                    <div className="text-xs text-white/50">{fact.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right Column - Contact Cards */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="hidden lg:block"
            >
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={info.label}
                    href={info.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    className="flex items-center gap-4 p-6 bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-colors group"
                  >
                    <div className="p-3 bg-laps-gold/20">
                      <info.icon className="w-6 h-6 text-laps-gold" />
                    </div>
                    <div>
                      <p className="text-sm text-white/50">{info.label}</p>
                      <p className="text-lg font-medium text-white group-hover:text-laps-gold transition-colors">{info.value}</p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-white">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Contact Form - Takes more space */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-3"
            >
              <h2 className="text-2xl font-semibold text-laps-navy inline-block border-b-2 border-laps-navy pb-2 mb-8">Send us a Message</h2>

              {isSubmitted ? (
                <div className="bg-green-50 border border-green-200 p-12 text-center">
                  <div className="w-20 h-20 bg-green-100 flex items-center justify-center mx-auto mb-6">
                    <Send className="w-10 h-10 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-semibold text-green-800 mb-3">
                    Message Sent!
                  </h3>
                  <p className="text-green-600 text-lg">
                    Thank you for reaching out. We'll get back to you shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-laps-navy mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-4 bg-laps-light border-0 focus:ring-2 focus:ring-laps-gold focus:bg-white transition-colors"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-laps-navy mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-4 bg-laps-light border-0 focus:ring-2 focus:ring-laps-gold focus:bg-white transition-colors"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-laps-navy mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-4 bg-laps-light border-0 focus:ring-2 focus:ring-laps-gold focus:bg-white transition-colors"
                        placeholder="+91 98765 43210"
                      />
                    </div>
                    <div>
                      <label htmlFor="division" className="block text-sm font-medium text-laps-navy mb-2">
                        Select Division
                      </label>
                      <select
                        id="division"
                        name="division"
                        value={formData.division}
                        onChange={handleChange}
                        className="w-full px-4 py-4 bg-laps-light border-0 focus:ring-2 focus:ring-laps-gold focus:bg-white transition-colors"
                      >
                        <option value="">General Inquiry</option>
                        {divisions.map((div) => (
                          <option key={div.key} value={div.key}>
                            {div.name}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-laps-navy mb-2">
                      Subject *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-4 bg-laps-light border-0 focus:ring-2 focus:ring-laps-gold focus:bg-white transition-colors"
                      placeholder="How can we help?"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-laps-navy mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-4 bg-laps-light border-0 focus:ring-2 focus:ring-laps-gold focus:bg-white transition-colors resize-none"
                      placeholder="Tell us more about your inquiry..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-laps-navy text-white py-4 font-medium hover:bg-laps-blue transition-colors flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send className="w-5 h-5" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </motion.div>

            {/* Contact Info Sidebar */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-2"
            >
              {/* Mobile Contact Info */}
              <div className="lg:hidden space-y-4 mb-8">
                {contactInfo.map((info) => (
                  <a
                    key={info.label}
                    href={info.href}
                    className="flex items-start gap-4 p-4 bg-laps-light hover:bg-gray-100 transition-colors"
                  >
                    <div className="p-3 bg-laps-blue/10">
                      <info.icon className="w-6 h-6 text-laps-blue" />
                    </div>
                    <div>
                      <p className="text-sm text-laps-slate">{info.label}</p>
                      <p className="font-medium text-laps-navy">{info.value}</p>
                    </div>
                  </a>
                ))}
              </div>

              {/* Division Contacts */}
              <div className="bg-laps-navy p-8 text-white">
                <h3 className="text-xl font-semibold mb-6">Division Contacts</h3>
                <div className="space-y-4">
                  {divisions.map((div) => {
                    const Icon = iconMap[div.key];
                    return (
                      <div
                        key={div.key}
                        className="flex items-center gap-4 p-4 bg-white/5 hover:bg-white/10 transition-colors"
                      >
                        <div
                          className="p-2"
                          style={{ backgroundColor: `${div.accentColor}20` }}
                        >
                          <Icon
                            className="w-5 h-5"
                            style={{ color: div.accentColor }}
                          />
                        </div>
                        <div className="flex-1">
                          <p className="font-medium">{div.name}</p>
                          <p className="text-sm text-white/50">{div.slug}@lapsgroup.com</p>
                        </div>
                        <a
                          href={`mailto:${div.slug}@lapsgroup.com`}
                          className="p-2 hover:bg-white/10 transition-colors"
                        >
                          <Mail className="w-4 h-4 text-laps-gold" />
                        </a>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Office Hours Card */}
              <div className="mt-6 p-6 bg-laps-light">
                <div className="flex items-center gap-3 mb-4">
                  <Clock className="w-5 h-5 text-laps-navy" />
                  <h3 className="font-semibold text-laps-navy">Office Hours</h3>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-laps-slate">Monday - Friday</span>
                    <span className="font-medium text-laps-navy">9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-laps-slate">Saturday</span>
                    <span className="font-medium text-laps-navy">10:00 AM - 2:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-laps-slate">Sunday</span>
                    <span className="font-medium text-laps-navy">Closed</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
