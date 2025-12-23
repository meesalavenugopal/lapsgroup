import { Link } from 'react-router-dom';
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin, 
  Youtube,
  ArrowRight
} from 'lucide-react';
import { divisions, founderInfo } from '@/data/content';
import { Logo } from '@components/common/Logo';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    divisions: divisions.map((d) => ({
      name: d.name,
      href: `/${d.slug}`,
    })),
    company: [
      { name: 'Our Story', href: '/about/our-story' },
      { name: 'Leadership', href: '/about/leadership' },
      { name: 'Values', href: '/about/values' },
      { name: 'Milestones', href: '/about/milestones' },
    ],
    resources: [
      { name: 'Newsroom', href: '/newsroom' },
      { name: 'Careers', href: '/careers' },
      { name: 'Contact', href: '/contact' },
    ],
    legal: [
      { name: 'Privacy Policy', href: '/legal/privacy' },
      { name: 'Terms of Service', href: '/legal/terms' },
      { name: 'Cookie Policy', href: '/legal/cookies' },
    ],
  };

  const socialLinks = [
    { icon: Facebook, href: 'https://facebook.com/lapsgroup', label: 'Facebook' },
    { icon: Twitter, href: 'https://twitter.com/lapsgroup', label: 'Twitter' },
    { icon: Instagram, href: 'https://instagram.com/lapsgroup', label: 'Instagram' },
    { icon: Linkedin, href: 'https://linkedin.com/company/lapsgroup', label: 'LinkedIn' },
    { icon: Youtube, href: 'https://youtube.com/@lapsgroup', label: 'YouTube' },
  ];

  return (
    <footer className="bg-laps-navy text-white">
      {/* Main Footer Content */}
      <div className="container-wide py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Logo and Description */}
          <div className="lg:col-span-2">
            <Logo variant="light" size="lg" />
            <p className="mt-4 text-laps-slate text-sm max-w-xs">
              Excellence across horizons. A multi-division company driving 
              innovation in architecture, technology, marketing, events, and photography.
            </p>
            
            {/* Newsletter Signup */}
            <div className="mt-6">
              <p className="text-sm font-medium mb-2">Stay Updated</p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 bg-white/10 border border-white/20 
                             text-white placeholder:text-laps-slate text-sm
                             focus:outline-none focus:border-laps-gold"
                />
                <button className="px-4 py-2 border-2 border-laps-gold text-laps-gold hover:bg-laps-gold hover:text-laps-navy transition-all duration-300 flex items-center gap-2">
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-3 mt-6">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 border border-white/20 hover:border-laps-gold hover:text-laps-gold transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Divisions Links */}
          <div>
            <h4 className="font-semibold mb-4">Divisions</h4>
            <ul className="space-y-2">
              {footerLinks.divisions.map((link) => (
                <li key={link.name}>
                  <Link to={link.href} className="footer-link text-sm">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link to={link.href} className="footer-link text-sm">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <Link to={link.href} className="footer-link text-sm">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <Link to={link.href} className="footer-link text-sm">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container-wide py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-laps-slate">
              © {currentYear} LAPS Group. All Rights Reserved.
            </p>
            <p className="text-sm text-laps-slate">
              Founded by{' '}
              <a
                href={founderInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-laps-gold transition-colors"
              >
                {founderInfo.name}
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
