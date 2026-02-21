// pages/Privacy.jsx
import React, { useState } from 'react';
import { 
  Shield, 
  Lock, 
  Eye, 
  Database, 
  Cookie, 
  Mail,
  ChevronRight,
  CheckCircle,
  AlertCircle,
  Download,
  Printer,
  Share2
} from 'lucide-react';

const Privacy = () => {
  const [activeSection, setActiveSection] = useState('overview');
  const [expandedFaq, setExpandedFaq] = useState(null);

  const sections = [
    { id: 'overview', label: 'Overview', icon: Eye },
    { id: 'collection', label: 'Information Collection', icon: Database },
    { id: 'usage', label: 'How We Use Information', icon: Shield },
    { id: 'cookies', label: 'Cookies & Tracking', icon: Cookie },
    { id: 'rights', label: 'Your Rights', icon: Lock },
    { id: 'contact', label: 'Contact Us', icon: Mail }
  ];

  const faqs = [
    {
      question: 'What personal information does DIGIN collect?',
      answer: 'We collect information you provide directly, such as name, email, phone number, and payment information when you donate or volunteer. We also automatically collect certain information about your device and usage of our website.'
    },
    {
      question: 'How does DIGIN protect my data?',
      answer: 'We implement industry-standard security measures including encryption, secure servers, and regular security audits. Your payment information is processed through PCI-DSS compliant payment gateways.'
    },
    {
      question: 'Does DIGIN share my information with third parties?',
      answer: 'We do not sell your personal information. We may share information with trusted service providers who assist in our operations, subject to strict confidentiality agreements.'
    },
    {
      question: 'How can I access or delete my data?',
      answer: 'You can request access to, correction, or deletion of your personal data by contacting us at privacy@digin.org.in. We will respond within 30 days.'
    },
    {
      question: 'How long does DIGIN retain my information?',
      answer: 'We retain your information as long as necessary to fulfill the purposes outlined in this privacy policy, unless a longer retention period is required by law.'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1633265486064-086b219458ec?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
            alt="Privacy"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/95 to-slate-900/90"></div>
        </div>
        
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-2 bg-amber-500/20 backdrop-blur-sm rounded-full text-amber-400 text-sm font-semibold mb-6 border border-amber-500/30">
              PRIVACY POLICY
            </span>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Your Privacy
              <span className="block text-amber-400">Is Our Priority</span>
            </h1>
            <p className="text-xl text-white/80 max-w-2xl">
              Learn how we collect, use, and protect your personal information in accordance with applicable privacy laws.
            </p>
            
            {/* Last Updated */}
            <div className="flex items-center space-x-4 mt-8 text-white/60">
              <div className="flex items-center">
                <Shield className="w-4 h-4 mr-2" />
                <span className="text-sm">Last Updated: March 15, 2026</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-4 h-4 mr-2" />
                <span className="text-sm">GDPR Compliant</span>
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
                <h3 className="font-semibold text-slate-900 dark:text-white mb-4">On This Page</h3>
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
                
                {/* Action Buttons */}
                <div className="pt-6 space-y-3">
                  <button className="w-full flex items-center justify-center space-x-2 px-4 py-3 bg-slate-100 dark:bg-slate-800 rounded-xl text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors">
                    <Download className="w-4 h-4" />
                    <span className="text-sm font-medium">Download PDF</span>
                  </button>
                  <button className="w-full flex items-center justify-center space-x-2 px-4 py-3 bg-slate-100 dark:bg-slate-800 rounded-xl text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors">
                    <Printer className="w-4 h-4" />
                    <span className="text-sm font-medium">Print</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="lg:col-span-3 space-y-12">
              {/* Overview */}
              <section id="overview" className="scroll-mt-32">
                <div className="group relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-amber-500 to-amber-600 rounded-3xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity"></div>
                  <div className="relative bg-white dark:bg-slate-800 rounded-3xl shadow-xl p-8 border border-slate-200 dark:border-slate-700">
                    <div className="flex items-center space-x-4 mb-6">
                      <div className="w-14 h-14 bg-gradient-to-br from-amber-500 to-amber-600 rounded-xl flex items-center justify-center">
                        <Eye className="w-7 h-7 text-white" />
                      </div>
                      <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Privacy Policy Overview</h2>
                    </div>
                    
                    <div className="prose prose-lg max-w-none dark:prose-invert">
                      <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                        At DIGIN (Dynamic Initiative for Grassroot Impact Network), we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or interact with our services.
                      </p>
                      <p className="text-slate-700 dark:text-slate-300 leading-relaxed mt-4">
                        Please read this privacy policy carefully. By accessing or using our services, you acknowledge that you have read, understood, and agree to be bound by all the terms outlined in this privacy policy.
                      </p>
                    </div>

                    {/* Key Points */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
                      <div className="flex items-start space-x-3 p-4 bg-slate-50 dark:bg-slate-900/50 rounded-xl">
                        <Shield className="w-5 h-5 text-amber-600 dark:text-amber-400 flex-shrink-0 mt-0.5" />
                        <div>
                          <h4 className="font-semibold text-slate-900 dark:text-white mb-1">Data Protection</h4>
                          <p className="text-sm text-slate-600 dark:text-slate-400">Your data is encrypted and securely stored</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3 p-4 bg-slate-50 dark:bg-slate-900/50 rounded-xl">
                        <Lock className="w-5 h-5 text-amber-600 dark:text-amber-400 flex-shrink-0 mt-0.5" />
                        <div>
                          <h4 className="font-semibold text-slate-900 dark:text-white mb-1">No Third-Party Sharing</h4>
                          <p className="text-sm text-slate-600 dark:text-slate-400">We never sell your personal information</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Information Collection */}
              <section id="collection" className="scroll-mt-32">
                <div className="group relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-amber-500 to-amber-600 rounded-3xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity"></div>
                  <div className="relative bg-white dark:bg-slate-800 rounded-3xl shadow-xl p-8 border border-slate-200 dark:border-slate-700">
                    <div className="flex items-center space-x-4 mb-6">
                      <div className="w-14 h-14 bg-gradient-to-br from-amber-500 to-amber-600 rounded-xl flex items-center justify-center">
                        <Database className="w-7 h-7 text-white" />
                      </div>
                      <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Information We Collect</h2>
                    </div>

                    <div className="space-y-6">
                      <div>
                        <h3 className="text-xl font-semibold mb-3 text-slate-900 dark:text-white">Personal Information</h3>
                        <ul className="space-y-3">
                          <li className="flex items-start space-x-3">
                            <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" />
                            <span className="text-slate-700 dark:text-slate-300">Name, email address, phone number, and postal address</span>
                          </li>
                          <li className="flex items-start space-x-3">
                            <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" />
                            <span className="text-slate-700 dark:text-slate-300">Payment information when you make donations (processed securely through third-party payment processors)</span>
                          </li>
                          <li className="flex items-start space-x-3">
                            <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" />
                            <span className="text-slate-700 dark:text-slate-300">Professional information such as skills, experience, and areas of interest when volunteering</span>
                          </li>
                        </ul>
                      </div>

                      <div>
                        <h3 className="text-xl font-semibold mb-3 text-slate-900 dark:text-white">Automatic Information</h3>
                        <ul className="space-y-3">
                          <li className="flex items-start space-x-3">
                            <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" />
                            <span className="text-slate-700 dark:text-slate-300">IP address, browser type, and device information</span>
                          </li>
                          <li className="flex items-start space-x-3">
                            <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" />
                            <span className="text-slate-700 dark:text-slate-300">Pages visited, time spent, and navigation patterns</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* How We Use Information */}
              <section id="usage" className="scroll-mt-32">
                <div className="group relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-amber-500 to-amber-600 rounded-3xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity"></div>
                  <div className="relative bg-white dark:bg-slate-800 rounded-3xl shadow-xl p-8 border border-slate-200 dark:border-slate-700">
                    <div className="flex items-center space-x-4 mb-6">
                      <div className="w-14 h-14 bg-gradient-to-br from-amber-500 to-amber-600 rounded-xl flex items-center justify-center">
                        <Shield className="w-7 h-7 text-white" />
                      </div>
                      <h2 className="text-2xl font-bold text-slate-900 dark:text-white">How We Use Your Information</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="p-4 bg-slate-50 dark:bg-slate-900/50 rounded-xl">
                        <h4 className="font-semibold text-slate-900 dark:text-white mb-2">To Provide Services</h4>
                        <p className="text-sm text-slate-600 dark:text-slate-400">Process donations, manage volunteer registrations, and respond to inquiries</p>
                      </div>
                      <div className="p-4 bg-slate-50 dark:bg-slate-900/50 rounded-xl">
                        <h4 className="font-semibold text-slate-900 dark:text-white mb-2">To Improve Our Website</h4>
                        <p className="text-sm text-slate-600 dark:text-slate-400">Analyze usage patterns and optimize user experience</p>
                      </div>
                      <div className="p-4 bg-slate-50 dark:bg-slate-900/50 rounded-xl">
                        <h4 className="font-semibold text-slate-900 dark:text-white mb-2">To Communicate</h4>
                        <p className="text-sm text-slate-600 dark:text-slate-400">Send updates, newsletters, and information about our programs</p>
                      </div>
                      <div className="p-4 bg-slate-50 dark:bg-slate-900/50 rounded-xl">
                        <h4 className="font-semibold text-slate-900 dark:text-white mb-2">Legal Compliance</h4>
                        <p className="text-sm text-slate-600 dark:text-slate-400">Comply with applicable laws and regulations</p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Cookies & Tracking */}
              <section id="cookies" className="scroll-mt-32">
                <div className="group relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-amber-500 to-amber-600 rounded-3xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity"></div>
                  <div className="relative bg-white dark:bg-slate-800 rounded-3xl shadow-xl p-8 border border-slate-200 dark:border-slate-700">
                    <div className="flex items-center space-x-4 mb-6">
                      <div className="w-14 h-14 bg-gradient-to-br from-amber-500 to-amber-600 rounded-xl flex items-center justify-center">
                        <Cookie className="w-7 h-7 text-white" />
                      </div>
                      <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Cookies and Tracking Technologies</h2>
                    </div>

                    <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-6">
                      We use cookies and similar tracking technologies to enhance your browsing experience, analyze website traffic, and understand where our visitors come from.
                    </p>

                    <div className="space-y-4">
                      <div className="flex items-center justify-between p-4 bg-slate-50 dark:bg-slate-900/50 rounded-xl">
                        <div>
                          <h4 className="font-semibold text-slate-900 dark:text-white">Essential Cookies</h4>
                          <p className="text-sm text-slate-600 dark:text-slate-400">Required for basic website functionality</p>
                        </div>
                        <span className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded-full text-xs font-semibold">
                          Always Active
                        </span>
                      </div>
                      <div className="flex items-center justify-between p-4 bg-slate-50 dark:bg-slate-900/50 rounded-xl">
                        <div>
                          <h4 className="font-semibold text-slate-900 dark:text-white">Analytics Cookies</h4>
                          <p className="text-sm text-slate-600 dark:text-slate-400">Help us understand how visitors use our site</p>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input type="checkbox" className="sr-only peer" defaultChecked />
                          <div className="w-11 h-6 bg-slate-300 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-amber-600"></div>
                        </label>
                      </div>
                      <div className="flex items-center justify-between p-4 bg-slate-50 dark:bg-slate-900/50 rounded-xl">
                        <div>
                          <h4 className="font-semibold text-slate-900 dark:text-white">Marketing Cookies</h4>
                          <p className="text-sm text-slate-600 dark:text-slate-400">Used to deliver relevant advertisements</p>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input type="checkbox" className="sr-only peer" />
                          <div className="w-11 h-6 bg-slate-300 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-amber-600"></div>
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Your Rights */}
              <section id="rights" className="scroll-mt-32">
                <div className="group relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-amber-500 to-amber-600 rounded-3xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity"></div>
                  <div className="relative bg-white dark:bg-slate-800 rounded-3xl shadow-xl p-8 border border-slate-200 dark:border-slate-700">
                    <div className="flex items-center space-x-4 mb-6">
                      <div className="w-14 h-14 bg-gradient-to-br from-amber-500 to-amber-600 rounded-xl flex items-center justify-center">
                        <Lock className="w-7 h-7 text-white" />
                      </div>
                      <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Your Privacy Rights</h2>
                    </div>

                    <div className="space-y-4">
                      <div className="flex items-start space-x-4 p-4 bg-slate-50 dark:bg-slate-900/50 rounded-xl">
                        <div className="w-8 h-8 bg-amber-100 dark:bg-amber-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
                          <span className="text-amber-600 dark:text-amber-400 font-bold">1</span>
                        </div>
                        <div>
                          <h4 className="font-semibold text-slate-900 dark:text-white mb-1">Right to Access</h4>
                          <p className="text-sm text-slate-600 dark:text-slate-400">You can request a copy of the personal information we hold about you.</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-4 p-4 bg-slate-50 dark:bg-slate-900/50 rounded-xl">
                        <div className="w-8 h-8 bg-amber-100 dark:bg-amber-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
                          <span className="text-amber-600 dark:text-amber-400 font-bold">2</span>
                        </div>
                        <div>
                          <h4 className="font-semibold text-slate-900 dark:text-white mb-1">Right to Rectification</h4>
                          <p className="text-sm text-slate-600 dark:text-slate-400">You can request correction of inaccurate information.</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-4 p-4 bg-slate-50 dark:bg-slate-900/50 rounded-xl">
                        <div className="w-8 h-8 bg-amber-100 dark:bg-amber-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
                          <span className="text-amber-600 dark:text-amber-400 font-bold">3</span>
                        </div>
                        <div>
                          <h4 className="font-semibold text-slate-900 dark:text-white mb-1">Right to Erasure</h4>
                          <p className="text-sm text-slate-600 dark:text-slate-400">You can request deletion of your personal data in certain circumstances.</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-4 p-4 bg-slate-50 dark:bg-slate-900/50 rounded-xl">
                        <div className="w-8 h-8 bg-amber-100 dark:bg-amber-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
                          <span className="text-amber-600 dark:text-amber-400 font-bold">4</span>
                        </div>
                        <div>
                          <h4 className="font-semibold text-slate-900 dark:text-white mb-1">Right to Object</h4>
                          <p className="text-sm text-slate-600 dark:text-slate-400">You can object to processing of your personal information.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Contact Us */}
              <section id="contact" className="scroll-mt-32">
                <div className="group relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-amber-500 to-amber-600 rounded-3xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity"></div>
                  <div className="relative bg-white dark:bg-slate-800 rounded-3xl shadow-xl p-8 border border-slate-200 dark:border-slate-700">
                    <div className="flex items-center space-x-4 mb-6">
                      <div className="w-14 h-14 bg-gradient-to-br from-amber-500 to-amber-600 rounded-xl flex items-center justify-center">
                        <Mail className="w-7 h-7 text-white" />
                      </div>
                      <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Contact Us About Privacy</h2>
                    </div>

                    <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-6">
                      If you have questions or concerns about this Privacy Policy or our data practices, please contact our Data Protection Officer:
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="p-4 bg-slate-50 dark:bg-slate-900/50 rounded-xl">
                        <p className="text-sm text-slate-500 dark:text-slate-500 mb-1">Email</p>
                        <p className="font-semibold text-slate-900 dark:text-white">privacy@digin.org.in</p>
                      </div>
                      <div className="p-4 bg-slate-50 dark:bg-slate-900/50 rounded-xl">
                        <p className="text-sm text-slate-500 dark:text-slate-500 mb-1">Phone</p>
                        <p className="font-semibold text-slate-900 dark:text-white">+91 99999 99999</p>
                      </div>
                      <div className="p-4 bg-slate-50 dark:bg-slate-900/50 rounded-xl md:col-span-2">
                        <p className="text-sm text-slate-500 dark:text-slate-500 mb-1">Address</p>
                        <p className="font-semibold text-slate-900 dark:text-white">57, Kotla Village, Shamas Pur, East Delhi, Delhi - 110091</p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* FAQ Section */}
              <section className="mt-12">
                <h3 className="text-2xl font-bold mb-6 text-slate-900 dark:text-white">Frequently Asked Questions</h3>
                <div className="space-y-4">
                  {faqs.map((faq, index) => (
                    <div key={index} className="bg-white dark:bg-slate-800 rounded-xl shadow-lg border border-slate-200 dark:border-slate-700 overflow-hidden">
                      <button
                        onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                        className="flex justify-between items-center w-full p-6 text-left"
                      >
                        <span className="font-semibold text-slate-900 dark:text-white">{faq.question}</span>
                        <ChevronRight className={`w-5 h-5 text-slate-500 transition-transform ${expandedFaq === index ? 'rotate-90' : ''}`} />
                      </button>
                      {expandedFaq === index && (
                        <div className="px-6 pb-6">
                          <p className="text-slate-600 dark:text-slate-400">{faq.answer}</p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </section>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Privacy;