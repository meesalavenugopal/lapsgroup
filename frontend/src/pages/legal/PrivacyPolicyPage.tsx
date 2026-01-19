import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';

export const PrivacyPolicyPage = () => {
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
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">Privacy Policy</h1>
            <p className="text-xl text-blue-100">Your privacy is important to us</p>
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
                <div className="w-10 h-10 bg-laps-blue/10  flex items-center justify-center text-laps-blue font-bold text-lg">
                  1
                </div>
                <h2 className="text-2xl font-bold text-laps-navy m-0">Information We Collect</h2>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">
                At LAPS Global, we collect information that you provide directly to us, including:
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-laps-blue mr-2">•</span>
                  <span>Name and contact information (email, phone number)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-laps-blue mr-2">•</span>
                  <span>Company name and professional details</span>
                </li>
                <li className="flex items-start">
                  <span className="text-laps-blue mr-2">•</span>
                  <span>Messages and inquiries submitted through our contact forms</span>
                </li>
                <li className="flex items-start">
                  <span className="text-laps-blue mr-2">•</span>
                  <span>Job application materials (resumes, cover letters, portfolios)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-laps-blue mr-2">•</span>
                  <span>Newsletter subscription preferences</span>
                </li>
              </ul>
            </section>

            <section className="mb-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-laps-blue/10  flex items-center justify-center text-laps-blue font-bold text-lg">
                  2
                </div>
                <h2 className="text-2xl font-bold text-laps-navy m-0">How We Use Your Information</h2>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">
                We use the information we collect to:
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-laps-blue mr-2">•</span>
                  <span>Respond to your inquiries and provide customer support</span>
                </li>
                <li className="flex items-start">
                  <span className="text-laps-blue mr-2">•</span>
                  <span>Process job applications and recruitment activities</span>
                </li>
                <li className="flex items-start">
                  <span className="text-laps-blue mr-2">•</span>
                  <span>Send newsletters and marketing communications (with your consent)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-laps-blue mr-2">•</span>
                  <span>Improve our services and website functionality</span>
                </li>
                <li className="flex items-start">
                  <span className="text-laps-blue mr-2">•</span>
                  <span>Comply with legal obligations and protect our rights</span>
                </li>
              </ul>
            </section>

            <section className="mb-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-laps-blue/10  flex items-center justify-center text-laps-blue font-bold text-lg">
                  3
                </div>
                <h2 className="text-2xl font-bold text-laps-navy m-0">Information Sharing</h2>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">
                We do not sell, trade, or rent your personal information to third parties. We may share your information with:
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-laps-blue mr-2">•</span>
                  <span>Service providers who assist in our operations (email services, cloud hosting)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-laps-blue mr-2">•</span>
                  <span>Professional advisors (lawyers, accountants, auditors)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-laps-blue mr-2">•</span>
                  <span>Law enforcement or regulatory authorities when required by law</span>
                </li>
              </ul>
            </section>

            <section className="mb-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-laps-blue/10  flex items-center justify-center text-laps-blue font-bold text-lg">
                  4
                </div>
                <h2 className="text-2xl font-bold text-laps-navy m-0">Data Security</h2>
              </div>
              <p className="text-gray-700 leading-relaxed">
                We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet is 100% secure.
              </p>
            </section>

            <section className="mb-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-laps-blue/10  flex items-center justify-center text-laps-blue font-bold text-lg">
                  5
                </div>
                <h2 className="text-2xl font-bold text-laps-navy m-0">Your Rights</h2>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">
                You have the right to:
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-laps-blue mr-2">•</span>
                  <span>Access and obtain a copy of your personal information</span>
                </li>
                <li className="flex items-start">
                  <span className="text-laps-blue mr-2">•</span>
                  <span>Correct inaccurate or incomplete information</span>
                </li>
                <li className="flex items-start">
                  <span className="text-laps-blue mr-2">•</span>
                  <span>Request deletion of your personal information</span>
                </li>
                <li className="flex items-start">
                  <span className="text-laps-blue mr-2">•</span>
                  <span>Opt-out of marketing communications at any time</span>
                </li>
                <li className="flex items-start">
                  <span className="text-laps-blue mr-2">•</span>
                  <span>Lodge a complaint with a data protection authority</span>
                </li>
              </ul>
            </section>

            <section className="mb-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-laps-blue/10  flex items-center justify-center text-laps-blue font-bold text-lg">
                  6
                </div>
                <h2 className="text-2xl font-bold text-laps-navy m-0">Cookies and Tracking</h2>
              </div>
              <p className="text-gray-700 leading-relaxed">
                We use cookies and similar tracking technologies to enhance your browsing experience, analyze site traffic, and understand user preferences. You can control cookies through your browser settings.
              </p>
            </section>

            <section className="mb-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-laps-blue/10  flex items-center justify-center text-laps-blue font-bold text-lg">
                  7
                </div>
                <h2 className="text-2xl font-bold text-laps-navy m-0">Children's Privacy</h2>
              </div>
              <p className="text-gray-700 leading-relaxed">
                Our services are not directed to children under 13 years of age. We do not knowingly collect personal information from children under 13.
              </p>
            </section>

            <section className="mb-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-laps-blue/10  flex items-center justify-center text-laps-blue font-bold text-lg">
                  8
                </div>
                <h2 className="text-2xl font-bold text-laps-navy m-0">Changes to This Policy</h2>
              </div>
              <p className="text-gray-700 leading-relaxed">
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new policy on this page and updating the "Last Updated" date.
              </p>
            </section>

            <section className="mb-0">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-laps-blue/10  flex items-center justify-center text-laps-blue font-bold text-lg">
                  9
                </div>
                <h2 className="text-2xl font-bold text-laps-navy m-0">Contact Us</h2>
              </div>
              <p className="text-gray-700 leading-relaxed mb-6">
                If you have any questions about this Privacy Policy, please contact us at:
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
                  <p className="text-lg font-semibold text-laps-navy">LAPS Global Headquarters, Hyderabad, Telangana 500001, India</p>
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
