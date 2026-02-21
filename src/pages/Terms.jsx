// pages/Terms.jsx
import React, { useState } from 'react';
import { 
  FileText, 
  Scale, 
  AlertCircle, 
  Shield, 
  Globe, 
  Mail,
  ChevronRight,
  CheckCircle,
  XCircle,
  BookOpen,
  Gavel
} from 'lucide-react';

const Terms = () => {
  const [activeSection, setActiveSection] = useState('introduction');
  const [accepted, setAccepted] = useState(false);

  const sections = [
    { id: 'introduction', label: 'Introduction', icon: BookOpen },
    { id: 'eligibility', label: 'Eligibility', icon: CheckCircle },
    { id: 'donations', label: 'Donations', icon: Scale },
    { id: 'volunteer', label: 'Volunteer Terms', icon: Gavel },
    { id: 'intellectual', label: 'Intellectual Property', icon: Shield },
    { id: 'limitations', label: 'Limitations', icon: AlertCircle },
    { id: 'governing', label: 'Governing Law', icon: Globe },
    { id: 'contact', label: 'Contact', icon: Mail }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
            alt="Terms of Service"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/95 to-slate-900/90"></div>
        </div>
        
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-2 bg-amber-500/20 backdrop-blur-sm rounded-full text-amber-400 text-sm font-semibold mb-6 border border-amber-500/30">
              TERMS OF SERVICE
            </span>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Terms and
              <span className="block text-amber-400">Conditions</span>
            </h1>
            <p className="text-xl text-white/80 max-w-2xl">
              Please read these terms carefully before using our website or services.
            </p>
            
            {/* Last Updated */}
            <div className="flex items-center space-x-4 mt-8 text-white/60">
              <div className="flex items-center">
                <FileText className="w-4 h-4 mr-2" />
                <span className="text-sm">Last Updated: March 15, 2026</span>
              </div>
              <div className="flex items-center">
                <Scale className="w-4 h-4 mr-2" />
                <span className="text-sm">Version 2.0</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Navigation */}
      <section className="sticky top-24 z-40 bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border-b border-slate-200 dark:border-slate-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex overflow-x-auto hide-scrollbar py-4 space-x-2">
            {sections.map((section) => {
              const Icon = section.icon;
              return (
                <button
                  key={section.id}
                  onClick={() => {
                    setActiveSection(section.id);
                    document.getElementById(section.id)?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-full whitespace-nowrap transition-all ${
                    activeSection === section.id
                      ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-white shadow-lg shadow-amber-500/30'
                      : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span className="text-sm font-medium">{section.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-40 space-y-4">
                <h3 className="font-semibold text-slate-900 dark:text-white mb-4">Legal Sections</h3>
                {sections.map((section) => (
                  <button
                    key={section.id}
                    onClick={() => {
                      setActiveSection(section.id);
                      document.getElementById(section.id)?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className={`block w-full text-left px-4 py-2 rounded-lg transition-all ${
                      activeSection === section.id
                        ? 'bg-amber-50 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400 font-semibold border-l-4 border-amber-500'
                        : 'text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800'
                    }`}
                  >
                    {section.label}
                  </button>
                ))}

                {/* Acceptance Toggle */}
                <div className="pt-6 mt-6 border-t border-slate-200 dark:border-slate-800">
                  <label className="flex items-center space-x-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={accepted}
                      onChange={(e) => setAccepted(e.target.checked)}
                      className="w-5 h-5 rounded border-slate-300 text-amber-600 focus:ring-amber-500"
                    />
                    <span className="text-sm text-slate-700 dark:text-slate-300">
                      I accept the Terms of Service
                    </span>
                  </label>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="lg:col-span-3 space-y-12">
              {/* Introduction */}
              <section id="introduction" className="scroll-mt-32">
                <div className="group relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-amber-500 to-amber-600 rounded-3xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity"></div>
                  <div className="relative bg-white dark:bg-slate-800 rounded-3xl shadow-xl p-8 border border-slate-200 dark:border-slate-700">
                    <div className="flex items-center space-x-4 mb-6">
                      <div className="w-14 h-14 bg-gradient-to-br from-amber-500 to-amber-600 rounded-xl flex items-center justify-center">
                        <BookOpen className="w-7 h-7 text-white" />
                      </div>
                      <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Introduction</h2>
                    </div>
                    
                    <div className="prose prose-lg max-w-none dark:prose-invert">
                      <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                        Welcome to DIGIN (Dynamic Initiative for Grassroot Impact Network). By accessing or using our website, services, or applications, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
                      </p>
                      <p className="text-slate-700 dark:text-slate-300 leading-relaxed mt-4">
                        These terms constitute a legally binding agreement between you and DIGIN regarding your use of our website and services.
                      </p>
                    </div>

                    {/* Important Notice */}
                    <div className="mt-6 p-4 bg-amber-50 dark:bg-amber-900/30 rounded-xl border border-amber-200 dark:border-amber-800">
                      <div className="flex items-start space-x-3">
                        <AlertCircle className="w-5 h-5 text-amber-600 dark:text-amber-400 flex-shrink-0 mt-0.5" />
                        <p className="text-sm text-amber-800 dark:text-amber-300">
                          These terms contain important information about your legal rights, including limitations of liability and dispute resolution procedures.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Eligibility */}
              <section id="eligibility" className="scroll-mt-32">
                <div className="group relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-amber-500 to-amber-600 rounded-3xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity"></div>
                  <div className="relative bg-white dark:bg-slate-800 rounded-3xl shadow-xl p-8 border border-slate-200 dark:border-slate-700">
                    <div className="flex items-center space-x-4 mb-6">
                      <div className="w-14 h-14 bg-gradient-to-br from-amber-500 to-amber-600 rounded-xl flex items-center justify-center">
                        <CheckCircle className="w-7 h-7 text-white" />
                      </div>
                      <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Eligibility</h2>
                    </div>

                    <div className="space-y-4">
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" />
                        <span className="text-slate-700 dark:text-slate-300">You must be at least 18 years old to use our services</span>
                      </div>
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" />
                        <span className="text-slate-700 dark:text-slate-300">You must provide accurate and complete information</span>
                      </div>
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" />
                        <span className="text-slate-700 dark:text-slate-300">You must not be located in a country that is subject to sanctions</span>
                      </div>
                      <div className="flex items-start space-x-3">
                        <XCircle className="w-5 h-5 text-red-600 dark:text-red-400 flex-shrink-0 mt-0.5" />
                        <span className="text-slate-700 dark:text-slate-300">You must not use our services for any illegal purposes</span>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Donations */}
              <section id="donations" className="scroll-mt-32">
                <div className="group relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-amber-500 to-amber-600 rounded-3xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity"></div>
                  <div className="relative bg-white dark:bg-slate-800 rounded-3xl shadow-xl p-8 border border-slate-200 dark:border-slate-700">
                    <div className="flex items-center space-x-4 mb-6">
                      <div className="w-14 h-14 bg-gradient-to-br from-amber-500 to-amber-600 rounded-xl flex items-center justify-center">
                        <Scale className="w-7 h-7 text-white" />
                      </div>
                      <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Donations and Payments</h2>
                    </div>

                    <div className="space-y-6">
                      <div>
                        <h3 className="text-lg font-semibold mb-3 text-slate-900 dark:text-white">Donation Policy</h3>
                        <ul className="space-y-2">
                          <li className="flex items-start space-x-3">
                            <ChevronRight className="w-4 h-4 text-amber-600 dark:text-amber-400 flex-shrink-0 mt-1" />
                            <span className="text-slate-700 dark:text-slate-300">All donations are final and non-refundable</span>
                          </li>
                          <li className="flex items-start space-x-3">
                            <ChevronRight className="w-4 h-4 text-amber-600 dark:text-amber-400 flex-shrink-0 mt-1" />
                            <span className="text-slate-700 dark:text-slate-300">Donations are processed through secure third-party payment gateways</span>
                          </li>
                          <li className="flex items-start space-x-3">
                            <ChevronRight className="w-4 h-4 text-amber-600 dark:text-amber-400 flex-shrink-0 mt-1" />
                            <span className="text-slate-700 dark:text-slate-300">Tax exemption certificates will be provided for eligible donations</span>
                          </li>
                        </ul>
                      </div>

                      <div className="p-4 bg-slate-50 dark:bg-slate-900/50 rounded-xl">
                        <h4 className="font-semibold text-slate-900 dark:text-white mb-2">Payment Security</h4>
                        <p className="text-sm text-slate-600 dark:text-slate-400">
                          We use industry-standard encryption and comply with PCI-DSS requirements to ensure your payment information is secure. We do not store your complete payment details on our servers.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Volunteer Terms */}
              <section id="volunteer" className="scroll-mt-32">
                <div className="group relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-amber-500 to-amber-600 rounded-3xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity"></div>
                  <div className="relative bg-white dark:bg-slate-800 rounded-3xl shadow-xl p-8 border border-slate-200 dark:border-slate-700">
                    <div className="flex items-center space-x-4 mb-6">
                      <div className="w-14 h-14 bg-gradient-to-br from-amber-500 to-amber-600 rounded-xl flex items-center justify-center">
                        <Gavel className="w-7 h-7 text-white" />
                      </div>
                      <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Volunteer Terms</h2>
                    </div>

                    <div className="space-y-4">
                      <p className="text-slate-700 dark:text-slate-300">
                        When you volunteer with DIGIN, you agree to:
                      </p>
                      <ul className="space-y-3">
                        <li className="flex items-start space-x-3">
                          <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" />
                          <span className="text-slate-700 dark:text-slate-300">Represent DIGIN in a professional and ethical manner</span>
                        </li>
                        <li className="flex items-start space-x-3">
                          <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" />
                          <span className="text-slate-700 dark:text-slate-300">Maintain confidentiality of sensitive information</span>
                        </li>
                        <li className="flex items-start space-x-3">
                          <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" />
                          <span className="text-slate-700 dark:text-slate-300">Comply with all applicable laws and organizational policies</span>
                        </li>
                        <li className="flex items-start space-x-3">
                          <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" />
                          <span className="text-slate-700 dark:text-slate-300">Communicate any concerns or conflicts promptly</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              {/* Intellectual Property */}
              <section id="intellectual" className="scroll-mt-32">
                <div className="group relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-amber-500 to-amber-600 rounded-3xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity"></div>
                  <div className="relative bg-white dark:bg-slate-800 rounded-3xl shadow-xl p-8 border border-slate-200 dark:border-slate-700">
                    <div className="flex items-center space-x-4 mb-6">
                      <div className="w-14 h-14 bg-gradient-to-br from-amber-500 to-amber-600 rounded-xl flex items-center justify-center">
                        <Shield className="w-7 h-7 text-white" />
                      </div>
                      <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Intellectual Property Rights</h2>
                    </div>

                    <div className="space-y-4">
                      <p className="text-slate-700 dark:text-slate-300">
                        All content on this website, including but not limited to text, graphics, logos, images, and software, is the property of DIGIN and is protected by copyright and other intellectual property laws.
                      </p>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                        <div className="p-4 bg-slate-50 dark:bg-slate-900/50 rounded-xl">
                          <h4 className="font-semibold text-slate-900 dark:text-white mb-2">You May:</h4>
                          <ul className="space-y-1">
                            <li className="text-sm text-slate-600 dark:text-slate-400">✓ View and download for personal use</li>
                            <li className="text-sm text-slate-600 dark:text-slate-400">✓ Share with attribution</li>
                            <li className="text-sm text-slate-600 dark:text-slate-400">✓ Link to our content</li>
                          </ul>
                        </div>
                        <div className="p-4 bg-slate-50 dark:bg-slate-900/50 rounded-xl">
                          <h4 className="font-semibold text-slate-900 dark:text-white mb-2">You May Not:</h4>
                          <ul className="space-y-1">
                            <li className="text-sm text-slate-600 dark:text-slate-400">✗ Modify or reproduce commercially</li>
                            <li className="text-sm text-slate-600 dark:text-slate-400">✗ Remove copyright notices</li>
                            <li className="text-sm text-slate-600 dark:text-slate-400">✗ Use for misleading purposes</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Limitations */}
              <section id="limitations" className="scroll-mt-32">
                <div className="group relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-amber-500 to-amber-600 rounded-3xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity"></div>
                  <div className="relative bg-white dark:bg-slate-800 rounded-3xl shadow-xl p-8 border border-slate-200 dark:border-slate-700">
                    <div className="flex items-center space-x-4 mb-6">
                      <div className="w-14 h-14 bg-gradient-to-br from-amber-500 to-amber-600 rounded-xl flex items-center justify-center">
                        <AlertCircle className="w-7 h-7 text-white" />
                      </div>
                      <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Limitations of Liability</h2>
                    </div>

                    <div className="prose prose-lg max-w-none dark:prose-invert">
                      <p className="text-slate-700 dark:text-slate-300">
                        To the maximum extent permitted by law, DIGIN shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from:
                      </p>
                      <ul className="list-disc pl-6 mt-4 space-y-2 text-slate-700 dark:text-slate-300">
                        <li>Your use or inability to use our services</li>
                        <li>Any conduct or content of any third party</li>
                        <li>Unauthorized access to or alteration of your transmissions or data</li>
                        <li>Statements or conduct of any third party</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              {/* Governing Law */}
              <section id="governing" className="scroll-mt-32">
                <div className="group relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-amber-500 to-amber-600 rounded-3xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity"></div>
                  <div className="relative bg-white dark:bg-slate-800 rounded-3xl shadow-xl p-8 border border-slate-200 dark:border-slate-700">
                    <div className="flex items-center space-x-4 mb-6">
                      <div className="w-14 h-14 bg-gradient-to-br from-amber-500 to-amber-600 rounded-xl flex items-center justify-center">
                        <Globe className="w-7 h-7 text-white" />
                      </div>
                      <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Governing Law</h2>
                    </div>

                    <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                      These Terms shall be governed and construed in accordance with the laws of India, without regard to its conflict of law provisions. Any disputes arising under these Terms shall be subject to the exclusive jurisdiction of the courts in Delhi, India.
                    </p>

                    <div className="mt-6 p-4 bg-slate-50 dark:bg-slate-900/50 rounded-xl">
                      <h4 className="font-semibold text-slate-900 dark:text-white mb-2">Dispute Resolution</h4>
                      <p className="text-sm text-slate-600 dark:text-slate-400">
                        Any dispute arising out of or relating to these Terms shall first be attempted to be resolved through good faith negotiations. If the dispute cannot be resolved within 30 days, it shall be referred to arbitration in accordance with the Arbitration and Conciliation Act, 1996.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Contact */}
              <section id="contact" className="scroll-mt-32">
                <div className="group relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-amber-500 to-amber-600 rounded-3xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity"></div>
                  <div className="relative bg-white dark:bg-slate-800 rounded-3xl shadow-xl p-8 border border-slate-200 dark:border-slate-700">
                    <div className="flex items-center space-x-4 mb-6">
                      <div className="w-14 h-14 bg-gradient-to-br from-amber-500 to-amber-600 rounded-xl flex items-center justify-center">
                        <Mail className="w-7 h-7 text-white" />
                      </div>
                      <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Contact Information</h2>
                    </div>

                    <p className="text-slate-700 dark:text-slate-300 mb-6">
                      If you have any questions about these Terms, please contact us at:
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="p-4 bg-slate-50 dark:bg-slate-900/50 rounded-xl">
                        <p className="text-sm text-slate-500 dark:text-slate-500 mb-1">Email</p>
                        <p className="font-semibold text-slate-900 dark:text-white">legal@digin.org</p>
                      </div>
                      <div className="p-4 bg-slate-50 dark:bg-slate-900/50 rounded-xl">
                        <p className="text-sm text-slate-500 dark:text-slate-500 mb-1">Phone</p>
                        <p className="font-semibold text-slate-900 dark:text-white">+91 1234567890</p>
                      </div>
                      <div className="p-4 bg-slate-50 dark:bg-slate-900/50 rounded-xl md:col-span-2">
                        <p className="text-sm text-slate-500 dark:text-slate-500 mb-1">Address</p>
                        <p className="font-semibold text-slate-900 dark:text-white">57, Kotla Village, Shamas Pur, East Delhi, Delhi - 110091</p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </section>

      {/* Acceptance Banner */}
      {!accepted && (
        <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50">
          <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-2xl p-4 border border-amber-500/20">
            <div className="flex items-center space-x-4">
              <AlertCircle className="w-5 h-5 text-amber-600 dark:text-amber-400" />
              <p className="text-sm text-slate-700 dark:text-slate-300">
                Please accept the Terms of Service to continue
              </p>
              <button
                onClick={() => setAccepted(true)}
                className="px-4 py-2 bg-gradient-to-r from-amber-500 to-amber-600 text-white rounded-xl text-sm font-semibold hover:from-amber-600 hover:to-amber-700"
              >
                Accept Terms
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Terms;