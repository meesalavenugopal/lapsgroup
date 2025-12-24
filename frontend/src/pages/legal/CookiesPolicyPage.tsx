import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';

export const CookiesPolicyPage = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative min-h-[500px] overflow-hidden bg-laps-navy">
        <div className="absolute inset-0 bg-gradient-to-r from-laps-navy via-laps-navy/95 to-laps-blue/80" />
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px)',
            backgroundSize: '4px 4px'
          }}
        />
        <div className="relative container-wide h-full flex items-center min-h-[500px] py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <div className="inline-block px-4 py-1.5 bg-laps-blue text-sm font-medium mb-4">
              Legal
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">Cookies Policy</h1>
            <p className="text-xl text-blue-100">How we use cookies to enhance your experience</p>
          </motion.div>
        </div>
      </div>

      {/* Content - Bento Style */}
      <div className="container-wide py-12">
        <div className="grid grid-cols-12 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="col-span-12 bg-white shadow-lg p-8 md:p-12"
          >
          <div className="mb-8 pb-6 border-b border-gray-200">
            <p className="text-sm text-gray-500">
              <strong className="text-laps-navy">Last Updated:</strong> December 24, 2025
            </p>
          </div>
          
          <div className="prose prose-lg prose-slate max-w-none">
            <section className="mb-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-laps-blue/10 flex items-center justify-center text-laps-blue font-bold text-lg">
                  1
                </div>
                <h2 className="text-2xl font-bold text-laps-navy m-0">What Are Cookies</h2>
              </div>
              <p className="text-gray-700 leading-relaxed">
                Cookies are small text files that are placed on your computer or mobile device when you visit a website. They are widely used to make websites work more efficiently and provide information to website owners.
              </p>
            </section>

            <section className="mb-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-laps-blue/10 flex items-center justify-center text-laps-blue font-bold text-lg">
                  2
                </div>
                <h2 className="text-2xl font-bold text-laps-navy m-0">How We Use Cookies</h2>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">
                LAPS Group uses cookies for the following purposes:
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-laps-blue mr-2">•</span>
                  <span>To remember your preferences and settings</span>
                </li>
                <li className="flex items-start">
                  <span className="text-laps-blue mr-2">•</span>
                  <span>To understand how you use our website and improve your experience</span>
                </li>
                <li className="flex items-start">
                  <span className="text-laps-blue mr-2">•</span>
                  <span>To provide personalized content and recommendations</span>
                </li>
                <li className="flex items-start">
                  <span className="text-laps-blue mr-2">•</span>
                  <span>To analyze website traffic and performance</span>
                </li>
                <li className="flex items-start">
                  <span className="text-laps-blue mr-2">•</span>
                  <span>To enable certain website functionalities</span>
                </li>
              </ul>
            </section>

            <section className="mb-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-laps-blue/10 flex items-center justify-center text-laps-blue font-bold text-lg">
                  3
                </div>
                <h2 className="text-2xl font-bold text-laps-navy m-0">Types of Cookies We Use</h2>
              </div>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-laps-navy mb-2">Essential Cookies</h3>
                  <p className="text-gray-700 leading-relaxed">
                    These cookies are necessary for the website to function properly. They enable basic features like page navigation and access to secure areas of the website.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-laps-navy mb-2">Analytics Cookies</h3>
                  <p className="text-gray-700 leading-relaxed">
                    These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously. This helps us improve our website and services.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-laps-navy mb-2">Functionality Cookies</h3>
                  <p className="text-gray-700 leading-relaxed">
                    These cookies allow the website to remember choices you make (such as your language or region) and provide enhanced, more personalized features.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-laps-navy mb-2">Marketing Cookies</h3>
                  <p className="text-gray-700 leading-relaxed">
                    These cookies are used to track visitors across websites to display ads that are relevant and engaging for individual users.
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-laps-blue/10 flex items-center justify-center text-laps-blue font-bold text-lg">
                  4
                </div>
                <h2 className="text-2xl font-bold text-laps-navy m-0">Third-Party Cookies</h2>
              </div>
              <p className="text-gray-700 leading-relaxed">
                In some cases, we use cookies provided by trusted third parties. Our website may use third-party analytics tools such as Google Analytics to help us measure traffic and usage trends for the service.
              </p>
            </section>

            <section className="mb-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-laps-blue/10 flex items-center justify-center text-laps-blue font-bold text-lg">
                  5
                </div>
                <h2 className="text-2xl font-bold text-laps-navy m-0">Managing Cookies</h2>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">
                You can control and manage cookies in various ways:
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-laps-blue mr-2">•</span>
                  <span>Most browsers allow you to refuse or accept cookies through their settings</span>
                </li>
                <li className="flex items-start">
                  <span className="text-laps-blue mr-2">•</span>
                  <span>You can delete cookies that are already on your device</span>
                </li>
                <li className="flex items-start">
                  <span className="text-laps-blue mr-2">•</span>
                  <span>You can set your browser to notify you when you receive a cookie</span>
                </li>
                <li className="flex items-start">
                  <span className="text-laps-blue mr-2">•</span>
                  <span>Please note that blocking all cookies may impact your experience on our website</span>
                </li>
              </ul>
            </section>

            <section className="mb-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-laps-blue/10 flex items-center justify-center text-laps-blue font-bold text-lg">
                  6
                </div>
                <h2 className="text-2xl font-bold text-laps-navy m-0">Cookie Duration</h2>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">
                We use both session and persistent cookies:
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-laps-blue mr-2">•</span>
                  <span><strong>Session Cookies:</strong> Temporary cookies that expire when you close your browser</span>
                </li>
                <li className="flex items-start">
                  <span className="text-laps-blue mr-2">•</span>
                  <span><strong>Persistent Cookies:</strong> Cookies that remain on your device until they expire or you delete them</span>
                </li>
              </ul>
            </section>

            <section className="mb-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-laps-blue/10 flex items-center justify-center text-laps-blue font-bold text-lg">
                  7
                </div>
                <h2 className="text-2xl font-bold text-laps-navy m-0">Changes to This Policy</h2>
              </div>
              <p className="text-gray-700 leading-relaxed">
                We may update this Cookies Policy from time to time. Any changes will be posted on this page with an updated revision date. We encourage you to review this policy periodically.
              </p>
            </section>

            <section className="mb-0">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-laps-blue/10 flex items-center justify-center text-laps-blue font-bold text-lg">
                  8
                </div>
                <h2 className="text-2xl font-bold text-laps-navy m-0">Contact Us</h2>
              </div>
              <p className="text-gray-700 leading-relaxed mb-6">
                If you have any questions about our use of cookies, please contact us at:
              </p>
              
              {/* Bento Contact Cards */}
              <div className="grid grid-cols-12 gap-4">
                {/* Email Card */}
                <motion.a
                  href="mailto:privacy@lapsgroup.com"
                  whileHover={{ scale: 1.02 }}
                  className="col-span-12 md:col-span-6 bg-gradient-to-br from-laps-blue to-laps-navy text-white p-6 group cursor-pointer transition-all duration-300 hover:shadow-xl"
                >
                  <Mail className="w-8 h-8 mb-3 opacity-80" />
                  <p className="text-sm opacity-80 mb-1">Email Us</p>
                  <p className="text-lg font-semibold">privacy@lapsgroup.com</p>
                </motion.a>

                {/* Phone Card */}
                <motion.a
                  href="tel:+919876543210"
                  whileHover={{ scale: 1.02 }}
                  className="col-span-12 md:col-span-6 bg-gradient-to-br from-laps-gold to-amber-500 text-laps-navy p-6 group cursor-pointer transition-all duration-300 hover:shadow-xl"
                >
                  <Phone className="w-8 h-8 mb-3 opacity-80" />
                  <p className="text-sm opacity-80 mb-1">Call Us</p>
                  <p className="text-lg font-semibold">+91 98765 43210</p>
                </motion.a>

                {/* Address Card */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="col-span-12 bg-white border-2 border-laps-navy/10 p-6 transition-all duration-300 hover:shadow-xl hover:border-laps-navy/30"
                >
                  <MapPin className="w-8 h-8 mb-3 text-laps-blue" />
                  <p className="text-sm text-gray-600 mb-1">Visit Us</p>
                  <p className="text-lg font-semibold text-laps-navy">LAPS Group Headquarters, Hyderabad, Telangana 500001, India</p>
                </motion.div>
              </div>
            </section>
          </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
