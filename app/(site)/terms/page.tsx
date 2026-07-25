'use client';

import { motion } from 'motion/react';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="border-b border-gray-200 px-4 sm:px-6 lg:px-12 py-6">
        <Link href="/" className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors">
          <ArrowLeft className="w-4 h-4" />
          <span className="text-base">Back to home</span>
        </Link>
      </nav>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">Terms of Service</h1>
          <p className="text-gray-600 mb-8">Last updated: January 2026</p>

          <div className="prose prose-lg max-w-none space-y-8">
            <section>
              <h2 className="text-2xl sm:text-3xl font-semibold mb-4">Agreement to Terms</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl sm:text-3xl font-semibold mb-4">Use License</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Permission is granted to temporarily view the materials on the Adnan Studios website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>Modify or copy the materials</li>
                <li>Use the materials for any commercial purpose or for any public display</li>
                <li>Attempt to decompile or reverse engineer any software contained on the website</li>
                <li>Remove any copyright or other proprietary notations from the materials</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl sm:text-3xl font-semibold mb-4">Services</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Adnan Studios provides product design, UX strategy, and full-stack development services. All services are provided subject to separate service agreements that will be executed prior to the commencement of work.
              </p>
            </section>

            <section>
              <h2 className="text-2xl sm:text-3xl font-semibold mb-4">Intellectual Property</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                The website and its original content, features, and functionality are owned by Adnan Studios and are protected by international copyright, trademark, patent, trade secret, and other intellectual property laws.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Client work displayed on this website remains the intellectual property of the respective clients and is shown with permission for studio showcase purposes only.
              </p>
            </section>

            <section>
              <h2 className="text-2xl sm:text-3xl font-semibold mb-4">User Accounts</h2>
              <p className="text-gray-700 leading-relaxed">
                When you create an account with us or schedule a call, you must provide information that is accurate, complete, and current at all times. You are responsible for safeguarding any passwords and for all activities that occur under your account.
              </p>
            </section>

            <section>
              <h2 className="text-2xl sm:text-3xl font-semibold mb-4">Prohibited Uses</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                You may not use our website:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>In any way that violates any applicable national or international law or regulation</li>
                <li>To transmit, or procure the sending of, any advertising or promotional material without our prior written consent</li>
                <li>To impersonate or attempt to impersonate the company, a company employee, another user, or any other person or entity</li>
                <li>In any way that infringes upon the rights of others, or in any way is illegal, threatening, fraudulent, or harmful</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl sm:text-3xl font-semibold mb-4">Disclaimer</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                The materials on the Adnan Studios website are provided on an 'as is' basis. Adnan Studios makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
              </p>
            </section>

            <section>
              <h2 className="text-2xl sm:text-3xl font-semibold mb-4">Limitations of Liability</h2>
              <p className="text-gray-700 leading-relaxed">
                In no event shall Adnan Studios or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on this website, even if Adnan Studios or an authorized representative has been notified orally or in writing of the possibility of such damage.
              </p>
            </section>

            <section>
              <h2 className="text-2xl sm:text-3xl font-semibold mb-4">Revisions and Errata</h2>
              <p className="text-gray-700 leading-relaxed">
                The materials appearing on the Adnan Studios website could include technical, typographical, or photographic errors. Adnan Studios does not warrant that any of the materials on its website are accurate, complete, or current. Adnan Studios may make changes to the materials contained on its website at any time without notice.
              </p>
            </section>

            <section>
              <h2 className="text-2xl sm:text-3xl font-semibold mb-4">Links to Third-Party Sites</h2>
              <p className="text-gray-700 leading-relaxed">
                Our website may contain links to third-party websites or services that are not owned or controlled by Adnan Studios. We have no control over, and assume no responsibility for, the content, privacy policies, or practices of any third-party websites or services. You acknowledge and agree that Adnan Studios shall not be responsible or liable for any damage or loss caused by or in connection with the use of any such content, goods, or services available on or through any such websites or services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl sm:text-3xl font-semibold mb-4">Governing Law</h2>
              <p className="text-gray-700 leading-relaxed">
                These terms and conditions are governed by and construed in accordance with applicable laws. Any disputes relating to these terms will be subject to the exclusive jurisdiction of the courts in the applicable jurisdiction.
              </p>
            </section>

            <section>
              <h2 className="text-2xl sm:text-3xl font-semibold mb-4">Changes to Terms</h2>
              <p className="text-gray-700 leading-relaxed">
                We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material, we will provide at least 30 days notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.
              </p>
            </section>

            <section>
              <h2 className="text-2xl sm:text-3xl font-semibold mb-4">Contact Information</h2>
              <p className="text-gray-700 leading-relaxed">
                If you have any questions about these Terms of Service, please contact us through the contact form on our website or via the contact information provided.
              </p>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
