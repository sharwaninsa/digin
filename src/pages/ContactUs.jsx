// pages/ContactUs.jsx - Enhanced Version
import React, { useState } from 'react';
import { contactInfo, contactPageInfo } from '../data/siteData';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Send, 
  Facebook, 
  Twitter, 
  Instagram, 
  Youtube,
  CheckCircle,
  AlertCircle,
  HelpCircle,
  ChevronDown
} from 'lucide-react';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [formStatus, setFormStatus] = useState({
    submitted: false,
    success: false,
    message: ''
  });

  const [activeFaq, setActiveFaq] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus({ submitted: true, success: true, message: 'Thank you for contacting us! We will get back to you within 24 hours.' });
    setTimeout(() => {
      setFormStatus({ ...formStatus, submitted: false });
    }, 5000);
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section with Map Background */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0">
          <iframe
            title="DIGIN Location Map"
            src={`https://www.google.com/maps?q=${encodeURIComponent(contactInfo.address)}&output=embed`}
            className="w-full h-full"
            style={{ filter: 'brightness(0.5)' }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/95 to-slate-900/90"></div>
        </div>
        
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block px-4 py-2 bg-amber-500/20 backdrop-blur-sm rounded-full text-amber-400 text-sm font-semibold mb-6 border border-amber-500/30">
            GET IN TOUCH
          </span>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 max-w-4xl mx-auto leading-tight">
            Let's Start a 
            <span className="block text-amber-400">Conversation</span>
          </h1>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Have questions? Want to collaborate? We'd love to hear from you.
          </p>
        </div>
      </section>

      {/* Contact Information Cards */}
      <section className="relative -mt-20 z-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-amber-500 to-amber-600 rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity"></div>
              <div className="relative bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-xl border border-slate-200 dark:border-slate-700 text-center hover:-translate-y-2 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-amber-600 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <MapPin className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-semibold mb-2 text-slate-900 dark:text-white">Visit Us</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  {contactInfo.address}
                </p>
                <a 
                  href={contactInfo.mapLocation}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-4 text-amber-600 dark:text-amber-400 text-sm font-semibold hover:underline"
                >
                  Get Directions →
                </a>
              </div>
            </div>

            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-amber-500 to-amber-600 rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity"></div>
              <div className="relative bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-xl border border-slate-200 dark:border-slate-700 text-center hover:-translate-y-2 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-amber-600 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Phone className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-semibold mb-2 text-slate-900 dark:text-white">Call Us</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  {contactInfo.phone}
                </p>
                <p className="text-xs text-slate-500 dark:text-slate-500 mt-2">
                  Mon-Fri, 9:00 AM - 6:00 PM
                </p>
                <button className="inline-block mt-4 text-amber-600 dark:text-amber-400 text-sm font-semibold hover:underline">
                  Schedule a Call →
                </button>
              </div>
            </div>

            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-amber-500 to-amber-600 rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity"></div>
              <div className="relative bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-xl border border-slate-200 dark:border-slate-700 text-center hover:-translate-y-2 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-amber-600 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Mail className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-semibold mb-2 text-slate-900 dark:text-white">Email Us</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  {contactInfo.email}
                </p>
                <p className="text-xs text-slate-500 dark:text-slate-500 mt-2">
                  Response within 24 hours
                </p>
                <button className="inline-block mt-4 text-amber-600 dark:text-amber-400 text-sm font-semibold hover:underline">
                  Send Message →
                </button>
              </div>
            </div>

            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-amber-500 to-amber-600 rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity"></div>
              <div className="relative bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-xl border border-slate-200 dark:border-slate-700 text-center hover:-translate-y-2 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-amber-600 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Clock className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-semibold mb-2 text-slate-900 dark:text-white">Office Hours</h3>
                {contactPageInfo.officeHours.map((hour, index) => (
                  <p key={index} className="text-sm text-slate-600 dark:text-slate-400">
                    {hour.day}: {hour.hours}
                  </p>
                ))}
                <button className="inline-block mt-4 text-amber-600 dark:text-amber-400 text-sm font-semibold hover:underline">
                  {/* Schedule Visit → */}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-amber-500 to-amber-600 rounded-3xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity"></div>
              <div className="relative bg-white dark:bg-slate-800 rounded-3xl shadow-xl p-8 border border-slate-200 dark:border-slate-700">
                <h2 className="text-3xl font-bold mb-2 text-slate-900 dark:text-white">Send us a Message</h2>
                <p className="text-slate-600 dark:text-slate-400 mb-8">
                  Fill out the form below and we'll get back to you as soon as possible.
                </p>

                {formStatus.submitted && (
                  <div className={`mb-6 p-4 rounded-xl flex items-center space-x-3 ${
                    formStatus.success 
                      ? 'bg-green-50 dark:bg-green-900/30 text-green-700 dark:text-green-400 border border-green-200 dark:border-green-800'
                      : 'bg-red-50 dark:bg-red-900/30 text-red-700 dark:text-red-400 border border-red-200 dark:border-red-800'
                  }`}>
                    {formStatus.success ? 
                      <CheckCircle className="w-5 h-5 flex-shrink-0" /> : 
                      <AlertCircle className="w-5 h-5 flex-shrink-0" />
                    }
                    <span className="text-sm">{formStatus.message}</span>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium mb-2 text-slate-700 dark:text-slate-300">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-amber-500 text-slate-900 dark:text-white transition-all"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2 text-slate-700 dark:text-slate-300">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-amber-500 text-slate-900 dark:text-white transition-all"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2 text-slate-700 dark:text-slate-300">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-amber-500 text-slate-900 dark:text-white transition-all"
                      placeholder="+91 98765 43210"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2 text-slate-700 dark:text-slate-300">
                      Subject *
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-amber-500 text-slate-900 dark:text-white transition-all"
                      placeholder="How can we help you?"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2 text-slate-700 dark:text-slate-300">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="5"
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-amber-500 text-slate-900 dark:text-white transition-all resize-none"
                      placeholder="Tell us about your inquiry..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-amber-500 to-amber-600 text-white px-6 py-4 rounded-xl font-semibold hover:from-amber-600 hover:to-amber-700 transition-all transform hover:scale-105 shadow-lg shadow-amber-500/30 flex items-center justify-center space-x-2 group/btn"
                  >
                    <Send className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                    <span>Send Message</span>
                  </button>
                </form>
              </div>
            </div>

            {/* Map and Additional Info */}
            <div className="space-y-8">
              {/* Map */}
              <div className="group relative h-96">
                <div className="absolute inset-0 bg-gradient-to-r from-amber-500 to-amber-600 rounded-3xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity"></div>
                <div className="relative h-full rounded-3xl overflow-hidden shadow-xl border border-slate-200 dark:border-slate-700">
                  <iframe
                    title="DIGIN Office Location"
                    src={`https://www.google.com/maps?q=${encodeURIComponent(contactInfo.address)}&output=embed`}
                    className="w-full h-full"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                  ></iframe>
                </div>
              </div>

              {/* FAQ Preview */}
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-amber-500 to-amber-600 rounded-3xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity"></div>
                <div className="relative bg-white dark:bg-slate-800 rounded-3xl shadow-xl p-8 border border-slate-200 dark:border-slate-700">
                  <div className="flex items-center space-x-3 mb-6">
                    <HelpCircle className="w-6 h-6 text-amber-600 dark:text-amber-400" />
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white">Frequently Asked Questions</h3>
                  </div>
                  
                  <div className="space-y-4">
                    {contactPageInfo.faq.map((faq, index) => (
                      <div key={index} className="border-b border-slate-200 dark:border-slate-700 last:border-0">
                        <button
                          onClick={() => setActiveFaq(activeFaq === index ? null : index)}
                          className="flex justify-between items-center w-full py-4 text-left"
                        >
                          <span className="font-medium text-slate-900 dark:text-white">{faq.question}</span>
                          <ChevronDown className={`w-5 h-5 text-slate-500 transition-transform ${activeFaq === index ? 'rotate-180' : ''}`} />
                        </button>
                        {activeFaq === index && (
                          <p className="pb-4 text-slate-600 dark:text-slate-400">{faq.answer}</p>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Media Section */}
      <section className="py-16 bg-gradient-to-br from-amber-50 to-amber-100/50 dark:from-slate-900 dark:to-slate-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4 text-slate-900 dark:text-white">Connect With Us on Social Media</h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 mb-8">
            Follow us for the latest updates, stories, and impact highlights.
          </p>
          
          <div className="flex justify-center space-x-6">
            <a
              href="https://facebook.com/digin"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-amber-500 to-amber-600 rounded-2xl blur-lg opacity-0 group-hover:opacity-50 transition-opacity"></div>
              <div className="relative w-16 h-16 bg-white dark:bg-slate-800 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-all border border-slate-200 dark:border-slate-700">
                <Facebook className="w-8 h-8 text-amber-600 dark:text-amber-400" />
              </div>
            </a>
            <a
              href="https://twitter.com/digin"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-amber-500 to-amber-600 rounded-2xl blur-lg opacity-0 group-hover:opacity-50 transition-opacity"></div>
              <div className="relative w-16 h-16 bg-white dark:bg-slate-800 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-all border border-slate-200 dark:border-slate-700">
                <Twitter className="w-8 h-8 text-amber-600 dark:text-amber-400" />
              </div>
            </a>
            <a
              href="https://instagram.com/digin"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-amber-500 to-amber-600 rounded-2xl blur-lg opacity-0 group-hover:opacity-50 transition-opacity"></div>
              <div className="relative w-16 h-16 bg-white dark:bg-slate-800 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-all border border-slate-200 dark:border-slate-700">
                <Instagram className="w-8 h-8 text-amber-600 dark:text-amber-400" />
              </div>
            </a>
            <a
              href="https://youtube.com/digin"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-amber-500 to-amber-600 rounded-2xl blur-lg opacity-0 group-hover:opacity-50 transition-opacity"></div>
              <div className="relative w-16 h-16 bg-white dark:bg-slate-800 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-all border border-slate-200 dark:border-slate-700">
                <Youtube className="w-8 h-8 text-amber-600 dark:text-amber-400" />
              </div>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;