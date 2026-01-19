import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';

export const TermsOfServicePage = () => {
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
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">Terms of Service</h1>
            <p className="text-xl text-blue-100">Please read these terms carefully before using our services</p>
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
                <h2 className="text-2xl font-bold text-laps-navy m-0">Acceptance of Terms</h2>
              </div>
              <p className="text-gray-700 leading-relaxed">
                By accessing and using the LAPS Global website and services, you accept and agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
              </p>
            </section>

            <section className="mb-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-laps-blue/10  flex items-center justify-center text-laps-blue font-bold text-lg">
                  2
                </div>
                <h2 className="text-2xl font-bold text-laps-navy m-0">Services Description</h2>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">
                LAPS Global provides integrated solutions across multiple divisions:
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-laps-blue mr-2">•</span>
                  <span>Architecture & Planning services</span>
                </li>
                <li className="flex items-start">
                  <span className="text-laps-blue mr-2">•</span>
                  <span>Apps & Platforms development</span>
                </li>
                <li className="flex items-start">
                  <span className="text-laps-blue mr-2">•</span>
                  <span>Ads & Services marketing solutions</span>
                </li>
                <li className="flex items-start">
                  <span className="text-laps-blue mr-2">•</span>
                  <span>Suites hospitality management</span>
                </li>
                <li className="flex items-start">
                  <span className="text-laps-blue mr-2">•</span>
                  <span>Photography & Studios creative services</span>
                </li>
              </ul>
            </section>

            <section className="mb-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-laps-blue/10  flex items-center justify-center text-laps-blue font-bold text-lg">
                  3
                </div>
                <h2 className="text-2xl font-bold text-laps-navy m-0">User Responsibilities</h2>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">
                You agree to:
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-laps-blue mr-2">•</span>
                  <span>Provide accurate and complete information when using our services</span>
                </li>
                <li className="flex items-start">
                  <span className="text-laps-blue mr-2">•</span>
                  <span>Maintain the confidentiality of any account credentials</span>
                </li>
                <li className="flex items-start">
                  <span className="text-laps-blue mr-2">•</span>
                  <span>Use our services only for lawful purposes</span>
                </li>
                <li className="flex items-start">
                  <span className="text-laps-blue mr-2">•</span>
                  <span>Not interfere with or disrupt our services or servers</span>
                </li>
                <li className="flex items-start">
                  <span className="text-laps-blue mr-2">•</span>
                  <span>Not attempt to gain unauthorized access to any part of our services</span>
                </li>
              </ul>
            </section>

            <section className="mb-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-laps-blue/10  flex items-center justify-center text-laps-blue font-bold text-lg">
                  4
                </div>
                <h2 className="text-2xl font-bold text-laps-navy m-0">Intellectual Property</h2>
              </div>
              <p className="text-gray-700 leading-relaxed">
                All content on this website, including text, graphics, logos, images, and software, is the property of LAPS Global or its licensors and is protected by copyright, trademark, and other intellectual property laws.
              </p>
            </section>

            <section className="mb-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-laps-blue/10  flex items-center justify-center text-laps-blue font-bold text-lg">
                  5
                </div>
                <h2 className="text-2xl font-bold text-laps-navy m-0">Service Modifications</h2>
              </div>
              <p className="text-gray-700 leading-relaxed">
                We reserve the right to modify, suspend, or discontinue any part of our services at any time without prior notice. We will not be liable to you or any third party for any modification, suspension, or discontinuation.
              </p>
            </section>

            <section className="mb-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-laps-blue/10  flex items-center justify-center text-laps-blue font-bold text-lg">
                  6
                </div>
                <h2 className="text-2xl font-bold text-laps-navy m-0">Limitation of Liability</h2>
              </div>
              <p className="text-gray-700 leading-relaxed">
                LAPS Global shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of or inability to use our services.
              </p>
            </section>

            <section className="mb-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-laps-blue/10  flex items-center justify-center text-laps-blue font-bold text-lg">
                  7
                </div>
                <h2 className="text-2xl font-bold text-laps-navy m-0">Indemnification</h2>
              </div>
              <p className="text-gray-700 leading-relaxed">
                You agree to indemnify and hold LAPS Global harmless from any claims, losses, damages, liabilities, and expenses arising out of your use of our services or violation of these Terms.
              </p>
            </section>

            <section className="mb-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-laps-blue/10  flex items-center justify-center text-laps-blue font-bold text-lg">
                  8
                </div>
                <h2 className="text-2xl font-bold text-laps-navy m-0">Governing Law</h2>
              </div>
              <p className="text-gray-700 leading-relaxed">
                These Terms shall be governed by and construed in accordance with the laws of India, without regard to its conflict of law provisions.
              </p>
            </section>

            <section className="mb-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-laps-blue/10  flex items-center justify-center text-laps-blue font-bold text-lg">
                  9
                </div>
                <h2 className="text-2xl font-bold text-laps-navy m-0">Dispute Resolution</h2>
              </div>
              <p className="text-gray-700 leading-relaxed">
                Any disputes arising out of or relating to these Terms shall be resolved through binding arbitration in Hyderabad, India, in accordance with the Arbitration and Conciliation Act, 1996.
              </p>
            </section>

            <section className="mb-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-laps-blue/10  flex items-center justify-center text-laps-blue font-bold text-lg">
                  10
                </div>
                <h2 className="text-2xl font-bold text-laps-navy m-0">Changes to Terms</h2>
              </div>
              <p className="text-gray-700 leading-relaxed">
                We reserve the right to update these Terms at any time. Your continued use of our services after any changes constitutes acceptance of the new Terms.
              </p>
            </section>

            <section className="mb-0">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-laps-blue/10  flex items-center justify-center text-laps-blue font-bold text-lg">
                  11
                </div>
                <h2 className="text-2xl font-bold text-laps-navy m-0">Contact Information</h2>
              </div>
              <p className="text-gray-700 leading-relaxed mb-6">
                For questions about these Terms of Service, please contact us at:
              </p>
              
              {/* Bento Contact Cards */}
              <div className="grid grid-cols-12 gap-4">
                {/* Email Card */}
                <motion.a
                  href="mailto:legal@lapsgroup.com"
                  whileHover={{ scale: 1.02 }}
                  className="col-span-12 md:col-span-6 bg-gradient-to-br from-laps-blue to-laps-navy text-white p-6 group cursor-pointer transition-all duration-300 hover:shadow-xl"
                >
                  <Mail className="w-8 h-8 mb-3 opacity-80" />
                  <p className="text-sm opacity-80 mb-1">Email Us</p>
                  <p className="text-lg font-semibold">legal@lapsgroup.com</p>
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
