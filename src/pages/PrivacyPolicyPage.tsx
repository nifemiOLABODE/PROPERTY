import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { companyConfig } from '../data/companyData';

export const PrivacyPolicyPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-flow-cream">
      {/* Hero Header */}
      <div className="bg-flow-dark text-white pt-32 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            to="/"
            className="inline-flex items-center space-x-2 text-white/60 hover:text-flow-gold transition-colors text-sm mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Home</span>
          </Link>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
            Privacy Policy
          </h1>
          <p className="mt-4 text-white/60 text-sm">
            Last Updated: August 18, 2026
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="prose prose-lg max-w-none text-flow-dark/90 space-y-10">

          {/* Intro */}
          <p className="text-base leading-relaxed">
            Flow Realtor and Properties Limited ("Flow Realtor," "we," "us," or "our") respects your privacy and is committed to protecting your personal information.
          </p>
          <p className="text-base leading-relaxed">
            This Privacy Policy explains how we collect, use, store, and protect your personal information when you visit or use our website and services.
          </p>

          {/* Section 1 */}
          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-flow-dark mb-4">1. Information We Collect</h2>
            <p className="text-base leading-relaxed mb-4">
              We may collect personal information that you voluntarily provide when you use our website or contact us, including:
            </p>
            <ul className="list-disc list-inside space-y-1.5 text-base text-flow-dark/80 ml-2">
              <li>Full name</li>
              <li>Email address</li>
              <li>Phone number</li>
              <li>WhatsApp number</li>
              <li>Property preferences</li>
              <li>Preferred location</li>
              <li>Budget and property requirements</li>
              <li>Information submitted through property inquiry or contact forms</li>
              <li>Any other information you voluntarily provide to us</li>
            </ul>
            <p className="text-base leading-relaxed mt-4">
              We may also automatically collect certain technical information when you visit our website, such as your IP address, browser type, device information, pages visited, and general website usage information.
            </p>
          </section>

          {/* Section 2 */}
          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-flow-dark mb-4">2. How We Use Your Information</h2>
            <p className="text-base leading-relaxed mb-4">
              We may use the information we collect to:
            </p>
            <ul className="list-disc list-inside space-y-1.5 text-base text-flow-dark/80 ml-2">
              <li>Respond to your property inquiries</li>
              <li>Provide information about properties and real estate services</li>
              <li>Arrange property inspections and viewings</li>
              <li>Contact you regarding properties you have expressed interest in</li>
              <li>Provide customer support</li>
              <li>Improve our website and services</li>
              <li>Send relevant property updates, offers, or marketing communications where permitted</li>
              <li>Prevent fraud and unauthorized activity</li>
              <li>Comply with applicable Nigerian laws and regulations</li>
            </ul>
          </section>

          {/* Section 3 */}
          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-flow-dark mb-4">3. Property Inquiries</h2>
            <p className="text-base leading-relaxed mb-4">
              When you submit an inquiry about a property, we may use the information you provide to contact you about that property and related real estate opportunities.
            </p>
            <p className="text-base leading-relaxed">
              Where necessary to fulfill your request, we may share relevant information with property owners, landlords, developers, agents, or other parties involved in providing the requested real estate service.
            </p>
          </section>

          {/* Section 4 */}
          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-flow-dark mb-4">4. Cookies and Website Analytics</h2>
            <p className="text-base leading-relaxed mb-4">
              Our website may use cookies and similar technologies to improve your browsing experience, understand how visitors use our website, and improve our services.
            </p>
            <p className="text-base leading-relaxed mb-4">
              We may also use third-party analytics, advertising, or website tools that collect information about how visitors interact with our website.
            </p>
            <p className="text-base leading-relaxed">
              You may adjust your browser settings to control or disable cookies. Disabling certain cookies may affect some features of the website.
            </p>
          </section>

          {/* Section 5 */}
          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-flow-dark mb-4">5. How We Share Your Information</h2>
            <p className="text-base leading-relaxed mb-4">
              We do not sell your personal information.
            </p>
            <p className="text-base leading-relaxed mb-4">
              We may share your information where reasonably necessary with:
            </p>
            <ul className="list-disc list-inside space-y-1.5 text-base text-flow-dark/80 ml-2">
              <li>Property owners and landlords</li>
              <li>Real estate agents and brokers</li>
              <li>Property developers</li>
              <li>Service providers that assist us in operating our website and business</li>
              <li>Website hosting and technology providers</li>
              <li>Analytics and marketing service providers</li>
              <li>Payment providers, where applicable</li>
              <li>Government authorities or legal representatives where required by law</li>
            </ul>
            <p className="text-base leading-relaxed mt-4">
              We take reasonable steps to ensure that information shared with third parties is handled appropriately.
            </p>
          </section>

          {/* Section 6 */}
          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-flow-dark mb-4">6. Data Protection and Security</h2>
            <p className="text-base leading-relaxed mb-4">
              We take reasonable technical and organizational measures to protect your personal information against unauthorized access, loss, misuse, alteration, or disclosure.
            </p>
            <p className="text-base leading-relaxed">
              However, no method of transmitting information over the internet or storing information electronically is completely secure, and we cannot guarantee absolute security.
            </p>
          </section>

          {/* Section 7 */}
          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-flow-dark mb-4">7. Data Retention</h2>
            <p className="text-base leading-relaxed mb-4">
              We retain personal information only for as long as reasonably necessary to fulfill the purposes for which it was collected, provide our services, maintain business records, resolve disputes, and comply with applicable legal obligations.
            </p>
            <p className="text-base leading-relaxed">
              When personal information is no longer required, we may securely delete or anonymize it.
            </p>
          </section>

          {/* Section 8 */}
          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-flow-dark mb-4">8. Your Privacy Rights</h2>
            <p className="text-base leading-relaxed mb-4">
              Subject to applicable Nigerian data protection laws, you may have rights regarding your personal information, including the right to:
            </p>
            <ul className="list-disc list-inside space-y-1.5 text-base text-flow-dark/80 ml-2">
              <li>Request access to personal information we hold about you</li>
              <li>Request correction of inaccurate or incomplete information</li>
              <li>Request deletion of your personal information where legally permitted</li>
              <li>Object to or restrict certain processing of your information</li>
              <li>Withdraw consent where processing is based on consent</li>
              <li>Request information about how your personal information is being processed</li>
            </ul>
            <p className="text-base leading-relaxed mt-4">
              To exercise your rights, please contact us using the contact information provided below.
            </p>
          </section>

          {/* Section 9 */}
          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-flow-dark mb-4">9. Third-Party Links</h2>
            <p className="text-base leading-relaxed mb-4">
              Our website may contain links to third-party websites, social media platforms, or other external services.
            </p>
            <p className="text-base leading-relaxed">
              We are not responsible for the privacy practices, security, or content of third-party websites. We recommend reviewing the privacy policies of those websites before providing them with your personal information.
            </p>
          </section>

          {/* Section 10 */}
          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-flow-dark mb-4">10. Children's Privacy</h2>
            <p className="text-base leading-relaxed">
              Our services are not intended for children under the age of 13. We do not knowingly collect personal information from children.
            </p>
          </section>

          {/* Section 11 */}
          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-flow-dark mb-4">11. Changes to This Privacy Policy</h2>
            <p className="text-base leading-relaxed">
              We may update this Privacy Policy from time to time to reflect changes in our business, services, technology, or applicable laws.
            </p>
            <p className="text-base leading-relaxed mt-4">
              When we make changes, we will update the "Last Updated" date at the top of this page.
            </p>
          </section>

          {/* Section 12 */}
          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-flow-dark mb-4">12. Contact Us</h2>
            <p className="text-base leading-relaxed mb-4">
              If you have questions, concerns, or requests regarding this Privacy Policy or how we handle your personal information, please contact us:
            </p>
            <div className="bg-flow-dark/5 border border-flow-dark/10 p-6 space-y-2 text-base">
              <p className="font-bold text-flow-dark">{companyConfig.legalName}</p>
              <p>
                <span className="font-semibold">Email:</span>{' '}
                <a href={`mailto:${companyConfig.email}`} className="text-flow-emerald hover:underline">
                  {companyConfig.email}
                </a>
              </p>
              <p>
                <span className="font-semibold">Phone:</span>{' '}
                <a href={`tel:${companyConfig.phones[0]}`} className="text-flow-emerald hover:underline">
                  {companyConfig.phones[0]}
                </a>
              </p>
              {companyConfig.addresses.map((addr, idx) => (
                <p key={idx}>
                  <span className="font-semibold">Address:</span> {addr.address}
                </p>
              ))}
            </div>
          </section>

        </div>
      </div>
    </div>
  );
};
