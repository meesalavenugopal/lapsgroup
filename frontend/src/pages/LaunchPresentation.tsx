import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Building2, Target, Rocket, TrendingUp, Users, DollarSign, Calendar, Award, MapPin, Check, Leaf, Link2, Cpu, UserCheck, Star, Globe, Mail, Megaphone, BarChart3, Briefcase, Home, Landmark } from 'lucide-react';

interface Slide {
  id: number;
  title: string;
  subtitle?: string;
  content: React.ReactNode;
  background?: string;
  theme?: 'dark' | 'light' | 'accent';
}

export function LaunchPresentation() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides: Slide[] = [
    // Slide 1: Title
    {
      id: 1,
      title: 'LAPS Architecture & Planning',
      subtitle: 'Division Launch Presentation',
      theme: 'dark',
      content: (
        <div className="text-center space-y-8">
          <div className="inline-block">
            <Building2 className="w-32 h-32 text-laps-gold mx-auto mb-6" strokeWidth={1} />
          </div>
          <h1 className="text-7xl font-bold text-white mb-4">
            Designing Tomorrow's Spaces
          </h1>
          <p className="text-3xl text-white/80">
            Landscape + Architecture + Planning Studios
          </p>
          <div className="pt-12 text-xl text-white/60">
            Q1 2026 Launch Strategy
          </div>
        </div>
      ),
    },

    // Slide 2: Vision & Mission
    {
      id: 2,
      title: 'Our Vision',
      theme: 'light',
      content: (
        <div className="space-y-12">
          <div className="bg-laps-navy text-white p-12">
            <div className="flex items-start gap-6">
              <Target className="w-16 h-16 text-laps-gold flex-shrink-0 mt-2" />
              <div>
                <h3 className="text-3xl font-bold mb-4">Vision</h3>
                <p className="text-2xl leading-relaxed text-white/90">
                  To establish LAPS Architecture & Planning as India's premier architectural studio,
                  recognized for innovative sustainable design and transformative urban solutions.
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-6">
            <div className="bg-[#2D5016] text-white p-8 text-center">
              <div className="text-5xl font-bold mb-2">50+</div>
              <div className="text-lg">Projects Ready</div>
            </div>
            <div className="bg-[#2D5016] text-white p-8 text-center">
              <div className="text-5xl font-bold mb-2">25</div>
              <div className="text-lg">Expert Team</div>
            </div>
            <div className="bg-[#2D5016] text-white p-8 text-center">
              <div className="text-5xl font-bold mb-2">12</div>
              <div className="text-lg">Cities Coverage</div>
            </div>
          </div>
        </div>
      ),
    },

    // Slide 3: Services
    {
      id: 3,
      title: 'Comprehensive Services',
      theme: 'light',
      content: (
        <div className="grid grid-cols-2 gap-8">
          {[
            { name: 'Architectural Design', desc: 'Residential & Commercial Excellence', img: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80' },
            { name: 'Urban Planning', desc: 'Smart City Solutions', img: 'https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?auto=format&fit=crop&w=800&q=80' },
            { name: 'Landscape Architecture', desc: 'Sustainable Outdoor Spaces', img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800&q=80' },
            { name: 'Interior Design', desc: 'Luxury & Functionality', img: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=800&q=80' },
            { name: 'Sustainable Design', desc: 'LEED Certified Approach', img: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80' },
            { name: 'Project Management', desc: 'End-to-End Execution', img: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80' },
          ].map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="relative overflow-hidden bg-laps-navy text-white group"
            >
              <div className="absolute inset-0">
                <img src={service.img} alt={service.name} className="w-full h-full object-cover opacity-20 group-hover:opacity-30 transition-opacity" />
              </div>
              <div className="relative p-8">
                <div className="flex items-center gap-4 mb-3">
                  <Check className="w-8 h-8 text-laps-gold" />
                  <h3 className="text-2xl font-bold">{service.name}</h3>
                </div>
                <p className="text-lg text-white/80">{service.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      ),
    },

    // Slide 4: Market Position
    {
      id: 4,
      title: 'Market Positioning',
      theme: 'accent',
      content: (
        <div className="space-y-8">
          <div className="bg-white/10 backdrop-blur-sm p-10 border border-white/20">
            <h3 className="text-3xl font-bold text-white mb-6">Unique Value Proposition</h3>
            <p className="text-2xl text-white/90 leading-relaxed">
              "LAPS Architecture combines international design excellence with deep understanding
              of Indian contexts, delivering sustainable, innovative spaces that transform how
              people live, work, and connect."
            </p>
          </div>

          <div className="grid grid-cols-5 gap-4">
            {[
              { icon: Leaf, text: 'Sustainability First', color: 'text-green-400' },
              { icon: Link2, text: 'Integrated Approach', color: 'text-blue-400' },
              { icon: Cpu, text: 'Tech-Driven Design', color: 'text-purple-400' },
              { icon: UserCheck, text: 'Multi-Division Synergy', color: 'text-orange-400' },
              { icon: Star, text: 'Client-Centric', color: 'text-yellow-400' },
            ].map((point, idx) => {
              const IconComponent = point.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-white/10 backdrop-blur-sm p-6 border border-white/20 text-center"
                >
                  <IconComponent className={`w-12 h-12 ${point.color} mx-auto mb-3`} />
                  <div className="text-white font-semibold text-sm">{point.text}</div>
                </motion.div>
              );
            })}
          </div>
        </div>
      ),
    },

    // Slide 5: Target Clients
    {
      id: 5,
      title: 'Target Client Segments',
      theme: 'light',
      content: (
        <div className="grid grid-cols-2 gap-8">
          {[
            { segment: 'Real Estate Developers', percentage: '40%', desc: 'Luxury residential, commercial complexes, mixed-use developments', color: 'from-[#2D5016] to-[#3d6b1f]', icon: Building2, img: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80' },
            { segment: 'Corporate Clients', percentage: '30%', desc: 'Office spaces, campus planning, retail environments', color: 'from-laps-navy to-laps-blue', icon: Briefcase, img: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80' },
            { segment: 'Government & Municipal', percentage: '20%', desc: 'Urban planning, public spaces, infrastructure', color: 'from-laps-blue to-[#0052a3]', icon: Landmark, img: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?auto=format&fit=crop&w=800&q=80' },
            { segment: 'Individual Clients', percentage: '10%', desc: 'Custom luxury homes, renovations, landscapes', color: 'from-laps-gold to-[#b8911f]', icon: Home, img: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80' },
          ].map((client, idx) => {
            const IconComponent = client.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: idx * 0.15 }}
                className={`relative overflow-hidden bg-gradient-to-br ${client.color} text-white p-8`}
              >
                <div className="absolute inset-0 opacity-10">
                  <img src={client.img} alt={client.segment} className="w-full h-full object-cover" />
                </div>
                <div className="relative">
                  <IconComponent className="w-12 h-12 mb-4 text-white/80" />
                  <div className="text-6xl font-bold mb-4">{client.percentage}</div>
                  <h3 className="text-2xl font-bold mb-3">{client.segment}</h3>
                  <p className="text-lg text-white/90">{client.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      ),
    },

    // Slide 6: Launch Timeline
    {
      id: 6,
      title: 'Launch Timeline',
      theme: 'dark',
      content: (
        <div className="space-y-6">
          {[
            { phase: 'Pre-Launch', duration: 'Weeks 1-8', activities: ['Brand finalization', 'Website & digital presence', 'Portfolio development', 'Team assembly'], color: 'bg-laps-gold' },
            { phase: 'Launch', duration: 'Weeks 9-12', activities: ['Grand launch event', 'Digital campaign blitz', 'Media & PR push', 'Client outreach'], color: 'bg-[#2D5016]' },
            { phase: 'Momentum', duration: 'Months 2-3', activities: ['Content marketing', 'Lead generation', 'First projects delivery', 'Team expansion'], color: 'bg-laps-blue' },
            { phase: 'Scaling', duration: 'Months 4-12', activities: ['Market expansion', 'Portfolio growth', 'Strategic partnerships', 'Profitability'], color: 'bg-laps-navy' },
          ].map((timeline, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.15 }}
              className="flex items-start gap-6"
            >
              <div className={`${timeline.color} text-white px-6 py-4 min-w-[280px]`}>
                <div className="text-2xl font-bold">{timeline.phase}</div>
                <div className="text-white/80">{timeline.duration}</div>
              </div>
              <div className="flex-1 bg-white/10 backdrop-blur-sm p-6 border border-white/20">
                <div className="grid grid-cols-2 gap-3">
                  {timeline.activities.map((activity, i) => (
                    <div key={i} className="flex items-center gap-2 text-white">
                      <Check className="w-5 h-5 text-laps-gold" />
                      <span>{activity}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      ),
    },

    // Slide 7: Marketing Strategy
    {
      id: 7,
      title: 'Marketing Strategy',
      theme: 'light',
      content: (
        <div className="space-y-8">
          <div className="grid grid-cols-4 gap-6">
            {[
              { channel: 'Website & SEO', effort: '30%', target: '5K visits/mo', icon: Globe },
              { channel: 'Social Media', effort: '35%', target: '10K followers', icon: Users },
              { channel: 'Email Marketing', effort: '15%', target: '2K subscribers', icon: Mail },
              { channel: 'Paid Ads', effort: '20%', target: '₹3.5L/mo', icon: Megaphone },
            ].map((channel, idx) => {
              const IconComponent = channel.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-gradient-to-br from-laps-navy to-laps-blue text-white p-6 text-center"
                >
                  <IconComponent className="w-12 h-12 mx-auto mb-4 text-laps-gold" />
                  <h3 className="text-xl font-bold mb-2">{channel.channel}</h3>
                  <div className="text-3xl font-bold text-laps-gold mb-2">{channel.effort}</div>
                  <div className="text-sm text-white/80">{channel.target}</div>
                </motion.div>
              );
            })}
          </div>

          <div className="bg-[#2D5016] text-white p-8">
            <h3 className="text-2xl font-bold mb-6">Content Pillars</h3>
            <div className="grid grid-cols-5 gap-4">
              {['Sustainable Design', 'Urban Innovation', 'Design Trends', 'Client Stories', 'Behind the Scenes'].map((pillar, idx) => (
                <div key={idx} className="bg-white/10 backdrop-blur-sm p-4 text-center border border-white/20">
                  {pillar}
                </div>
              ))}
            </div>
          </div>
        </div>
      ),
    },

    // Slide 8: Financial Projections
    {
      id: 8,
      title: 'Financial Projections - Year 1',
      theme: 'light',
      content: (
        <div className="space-y-8">
          <div className="grid grid-cols-4 gap-6">
            {[
              { quarter: 'Q1', projects: '8-12', revenue: '₹1.2-1.8 Cr', color: 'from-[#2D5016] to-[#3d6b1f]' },
              { quarter: 'Q2', projects: '15-20', revenue: '₹2.7-3.6 Cr', color: 'from-laps-blue to-[#0052a3]' },
              { quarter: 'Q3', projects: '20-25', revenue: '₹4-5 Cr', color: 'from-laps-gold to-[#b8911f]' },
              { quarter: 'Q4', projects: '25-30', revenue: '₹5.5-6.6 Cr', color: 'from-laps-navy to-[#0a1628]' },
            ].map((quarter, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.15 }}
                className={`bg-gradient-to-br ${quarter.color} text-white p-8 `}
              >
                <div className="text-3xl font-bold mb-4">{quarter.quarter}</div>
                <div className="space-y-3">
                  <div>
                    <div className="text-white/70 text-sm mb-1">Projects</div>
                    <div className="text-2xl font-semibold">{quarter.projects}</div>
                  </div>
                  <div>
                    <div className="text-white/70 text-sm mb-1">Revenue</div>
                    <div className="text-2xl font-semibold">{quarter.revenue}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="bg-laps-navy text-white p-8">
              <DollarSign className="w-12 h-12 text-laps-gold mb-4" />
              <div className="text-xl mb-2">Year 1 Total Revenue</div>
              <div className="text-5xl font-bold">₹13-17 Cr</div>
            </div>
            <div className="bg-[#2D5016] text-white p-8">
              <TrendingUp className="w-12 h-12 text-laps-gold mb-4" />
              <div className="text-xl mb-2">Profit Margin (by Q4)</div>
              <div className="text-5xl font-bold">15-20%</div>
            </div>
          </div>
        </div>
      ),
    },

    // Slide 9: Launch Event
    {
      id: 9,
      title: 'Grand Launch Event',
      theme: 'accent',
      content: (
        <div className="space-y-8">
          <div className="bg-white/10 backdrop-blur-sm p-10  border border-white/20">
            <div className="grid grid-cols-3 gap-8 mb-8">
              <div className="text-center">
                <Calendar className="w-16 h-16 text-laps-gold mx-auto mb-4" />
                <div className="text-white/70 mb-2">Date</div>
                <div className="text-2xl font-bold text-white">First Saturday</div>
                <div className="text-white/70">Launch Month</div>
              </div>
              <div className="text-center">
                <Users className="w-16 h-16 text-laps-gold mx-auto mb-4" />
                <div className="text-white/70 mb-2">Attendees</div>
                <div className="text-2xl font-bold text-white">150-200</div>
                <div className="text-white/70">VIP Guests</div>
              </div>
              <div className="text-center">
                <MapPin className="w-16 h-16 text-laps-gold mx-auto mb-4" />
                <div className="text-white/70 mb-2">Venue</div>
                <div className="text-2xl font-bold text-white">Premium</div>
                <div className="text-white/70">Hotel/HQ</div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="bg-white/10 backdrop-blur-sm p-6  border border-white/20">
              <h3 className="text-xl font-bold text-white mb-4">Guest Categories</h3>
              <ul className="space-y-2 text-white/90">
                <li className="flex items-center gap-2"><Check className="w-5 h-5 text-laps-gold" /> Potential clients (developers)</li>
                <li className="flex items-center gap-2"><Check className="w-5 h-5 text-laps-gold" /> Industry influencers</li>
                <li className="flex items-center gap-2"><Check className="w-5 h-5 text-laps-gold" /> Media representatives</li>
                <li className="flex items-center gap-2"><Check className="w-5 h-5 text-laps-gold" /> Government officials</li>
              </ul>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6  border border-white/20">
              <h3 className="text-xl font-bold text-white mb-4">Event Highlights</h3>
              <ul className="space-y-2 text-white/90">
                <li className="flex items-center gap-2"><Check className="w-5 h-5 text-laps-gold" /> Division unveiling presentation</li>
                <li className="flex items-center gap-2"><Check className="w-5 h-5 text-laps-gold" /> Project showcase gallery</li>
                <li className="flex items-center gap-2"><Check className="w-5 h-5 text-laps-gold" /> Panel: "Future of Urban India"</li>
                <li className="flex items-center gap-2"><Check className="w-5 h-5 text-laps-gold" /> Networking dinner</li>
              </ul>
            </div>
          </div>
        </div>
      ),
    },

    // Slide 10: Success Metrics
    {
      id: 10,
      title: 'Success Metrics & KPIs',
      theme: 'light',
      content: (
        <div className="grid grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-bold text-laps-navy mb-6">Launch Phase (Months 1-3)</h3>
            <div className="space-y-4">
              {[
                { metric: 'Website Traffic', target: '5K visits/month', icon: Globe },
                { metric: 'Social Followers', target: '5K Instagram, 3K LinkedIn', icon: Users },
                { metric: 'Media Coverage', target: '10+ articles', icon: Award },
                { metric: 'Projects Won', target: '8-15 projects', icon: Target },
                { metric: 'Contract Value', target: '₹1.2-2.5 Cr', icon: DollarSign },
              ].map((kpi, idx) => {
                const IconComponent = kpi.icon;
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    className="bg-gradient-to-r from-laps-navy to-laps-blue text-white p-4 flex items-center gap-4"
                  >
                    <IconComponent className="w-8 h-8 text-laps-gold flex-shrink-0" />
                    <div className="flex-1">
                      <div className="font-semibold">{kpi.metric}</div>
                      <div className="text-sm text-white/80">{kpi.target}</div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-laps-navy mb-6">Growth Phase (Months 4-12)</h3>
            <div className="space-y-4">
              {[
                { metric: 'Monthly Inquiries', target: '100+', icon: Mail },
                { metric: 'Project Pipeline', target: '₹10 Cr+', icon: BarChart3 },
                { metric: 'Client Retention', target: '70%+', icon: UserCheck },
                { metric: 'Team Size', target: '25-30', icon: Users },
                { metric: 'Profit Margin', target: '15-20%', icon: TrendingUp },
              ].map((kpi, idx) => {
                const IconComponent = kpi.icon;
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    className="bg-gradient-to-r from-[#2D5016] to-[#3d6b1f] text-white p-4 flex items-center gap-4"
                  >
                    <IconComponent className="w-8 h-8 text-laps-gold flex-shrink-0" />
                    <div className="flex-1">
                      <div className="font-semibold">{kpi.metric}</div>
                      <div className="text-sm text-white/80">{kpi.target}</div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      ),
    },

    // Slide 11: Investment & ROI
    {
      id: 11,
      title: 'Launch Investment',
      theme: 'dark',
      content: (
        <div className="space-y-8">
          <div className="grid grid-cols-3 gap-6">
            {[
              { category: 'Pre-Launch', amount: '₹26L', items: ['Brand development', 'Portfolio creation', 'Software & tech'] },
              { category: 'Launch Event', amount: '₹15L', items: ['Venue & catering', 'AV & production', 'Materials'] },
              { category: 'Marketing (M1-3)', amount: '₹25.5L', items: ['Digital ads', 'Content', 'PR & media'] },
            ].map((investment, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.15 }}
                className="bg-white/10 backdrop-blur-sm p-6  border border-white/20"
              >
                <div className="text-xl text-white/70 mb-2">{investment.category}</div>
                <div className="text-4xl font-bold text-laps-gold mb-4">{investment.amount}</div>
                <ul className="space-y-1 text-white/80 text-sm">
                  {investment.items.map((item, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-laps-gold "></div>
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          <div className="bg-gradient-to-r from-laps-gold to-[#b8911f] text-laps-navy p-12">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-2xl font-semibold mb-2">Total Launch Investment</div>
                <div className="text-6xl font-bold">₹66.5 Lakhs</div>
              </div>
              <div className="text-right">
                <div className="text-2xl font-semibold mb-2">Expected Year 1 Revenue</div>
                <div className="text-6xl font-bold">₹13-17 Cr</div>
              </div>
            </div>
            <div className="mt-6 pt-6 border-t-2 border-laps-navy/20 text-center">
              <div className="text-xl font-semibold">ROI: 20-25x within 12 months</div>
            </div>
          </div>
        </div>
      ),
    },

    // Slide 12: Call to Action
    {
      id: 12,
      title: 'Next Steps',
      theme: 'accent',
      content: (
        <div className="space-y-8">
          <div className="bg-white/10 backdrop-blur-sm p-10  border border-white/20">
            <Rocket className="w-20 h-20 text-laps-gold mx-auto mb-6" />
            <h2 className="text-4xl font-bold text-white text-center mb-8">
              Ready to Launch!
            </h2>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {[
              { step: '1', action: 'Approve launch plan and budget', status: 'Pending Review' },
              { step: '2', action: 'Finalize launch event date & venue', status: 'In Progress' },
              { step: '3', action: 'Begin pre-launch activities', status: 'Ready to Start' },
              { step: '4', action: 'Kickoff marketing campaigns', status: 'Ready to Start' },
              { step: '5', action: 'Schedule stakeholder meetings', status: 'This Week' },
              { step: '6', action: 'Launch countdown begins', status: 'T-8 Weeks' },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white/10 backdrop-blur-sm p-6 border border-white/20 flex items-start gap-4"
              >
                <div className="w-12 h-12 bg-laps-gold text-laps-navy flex items-center justify-center font-bold text-xl flex-shrink-0">
                  {item.step}
                </div>
                <div className="flex-1">
                  <div className="text-white font-semibold mb-2">{item.action}</div>
                  <div className="text-sm text-laps-gold">{item.status}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      ),
    },

    // Slide 13: Thank You
    {
      id: 13,
      title: 'Thank You',
      theme: 'dark',
      content: (
        <div className="text-center space-y-12">
          <div className="inline-block">
            <Award className="w-32 h-32 text-laps-gold mx-auto mb-6" strokeWidth={1} />
          </div>
          <h1 className="text-6xl font-bold text-white mb-4">
            Let's Build the Future Together
          </h1>
          <p className="text-3xl text-white/80 mb-12">
            LAPS Architecture & Planning
          </p>
          <div className="space-y-4 text-xl text-white/60">
            <p>Questions & Discussion</p>
            <p className="text-laps-gold">www.lapsgroup.com/architecture-planning</p>
          </div>
        </div>
      ),
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const currentSlideData = slides[currentSlide];
  const themeClasses = {
    dark: 'bg-laps-navy',
    light: 'bg-laps-light',
    accent: 'bg-gradient-to-br from-[#2D5016] to-[#3d6b1f]',
  };

  return (
    <div className="min-h-screen bg-black">
      {/* Presentation Container */}
      <div className="relative h-screen flex items-center justify-center p-8">
        {/* Main Slide */}
        <div className="w-full max-w-[1400px] h-[800px] relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.3 }}
              className={`w-full h-full shadow-2xl p-16 ${themeClasses[currentSlideData.theme || 'light']}`}
            >
              {/* Slide Header */}
              <div className="mb-12">
                <h2 className={`text-4xl font-bold ${currentSlideData.theme === 'light' ? 'text-laps-navy' : 'text-white'} mb-3`}>
                  {currentSlideData.title}
                </h2>
                {currentSlideData.subtitle && (
                  <p className={`text-xl ${currentSlideData.theme === 'light' ? 'text-laps-slate' : 'text-white/70'}`}>
                    {currentSlideData.subtitle}
                  </p>
                )}
              </div>

              {/* Slide Content */}
              <div className="h-[calc(100%-140px)]">
                {currentSlideData.content}
              </div>

              {/* Slide Footer */}
              <div className="absolute bottom-8 right-8">
                <div className={`text-sm ${currentSlideData.theme === 'light' ? 'text-laps-slate' : 'text-white/50'}`}>
                  {currentSlide + 1} / {slides.length}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={prevSlide}
          disabled={currentSlide === 0}
          className="absolute left-4 top-1/2 -translate-y-1/2 p-4 bg-white/10 backdrop-blur-sm  text-white hover:bg-white/20 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
        >
          <ChevronLeft className="w-8 h-8" />
        </button>
        <button
          onClick={nextSlide}
          disabled={currentSlide === slides.length - 1}
          className="absolute right-4 top-1/2 -translate-y-1/2 p-4 bg-white/10 backdrop-blur-sm  text-white hover:bg-white/20 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
        >
          <ChevronRight className="w-8 h-8" />
        </button>
      </div>

      {/* Slide Thumbnails */}
      <div className="fixed bottom-0 left-0 right-0 bg-black/90 backdrop-blur-sm p-4 overflow-x-auto">
        <div className="flex gap-2 justify-center">
          {slides.map((slide, index) => (
            <button
              key={slide.id}
              onClick={() => goToSlide(index)}
              className={`
                px-4 py-2 text-sm transition-all
                ${index === currentSlide
                  ? 'bg-laps-gold text-laps-navy font-semibold scale-110'
                  : 'bg-white/10 text-white/70 hover:bg-white/20'
                }
              `}
            >
              {index + 1}
            </button>
          ))}
        </div>
      </div>

      {/* Keyboard Navigation Hint */}
      <div className="fixed top-4 right-4 bg-black/50 backdrop-blur-sm text-white/70 px-4 py-2 text-sm">
        Use ← → arrows or click thumbnails to navigate
      </div>
    </div>
  );
}
