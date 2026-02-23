import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Youtube, 
  Mail, 
  Phone, 
  MapPin, 
  Heart,
  ArrowRight,
  Send,
  Globe,
  FileText,
  HelpCircle,
  BookOpen,
  Award
} from 'lucide-react';
import { footerLinks, socialLinks, contactInfo } from '../data/siteData';
import logo from '../assets/logo.png'

const Footer = () => {
  const currentYear = new Date().getFullYear();

  // Additional resource links
  const resourceLinks = [
    { path: '/faq', label: 'FAQ', icon: HelpCircle },
    { path: '/blog', label: 'Blog', icon: BookOpen },
    { path: '/annual-reports', label: 'Annual Reports', icon: Award },
    { path: '/privacy', label: 'Privacy Policy', icon: FileText },
    { path: '/terms', label: 'Terms of Service', icon: FileText },
    { path: '/sitemap', label: 'Sitemap', icon: Globe }
  ];

  return (
    <footer className="relative bg-slate-900 dark:bg-slate-950 text-white overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-amber-500 to-amber-600 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-br from-amber-500 to-amber-600 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Main Footer Content */}
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Brand Section - 4 columns */}
          <div className="lg:col-span-4 space-y-6">
            <div className="flex items-center space-x-3 group">
              <div className="relative">
                <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-amber-600 rounded-full cursor-pointer rotate-3 group-hover:rotate-6 transition-all duration-300 shadow-lg shadow-amber-500/30"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                 <img src={logo} alt="" className='rounded-full' />
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold bg-gradient-to-r from-amber-400 to-amber-300 bg-clip-text text-transparent">
                  DIGIN
                </h3>
                <p className="text-xs text-slate-400 tracking-wider">Dynamic Initiative for</p>
                <p className="text-xs text-slate-400 tracking-wider">Grassroot Impact Network</p>
              </div>
            </div>
            
            <p className="text-slate-300 leading-relaxed">
              Empowering communities through digital innovation, cultural preservation, and sustainable development since 2026. We believe in creating lasting change at the grassroots level.
            </p>
            
            {/* Newsletter Signup */}
            <div className="space-y-4">
              <h4 className="font-semibold text-white flex items-center">
                <Send className="w-4 h-4 mr-2 text-amber-400" />
                Subscribe to Newsletter
              </h4>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="flex-1 px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-l-xl focus:outline-none focus:border-amber-500 text-white placeholder-slate-500 transition-colors"
                />
                <button className="px-4 py-3 bg-gradient-to-r from-amber-500 to-amber-600 rounded-r-xl hover:from-amber-600 hover:to-amber-700 transition-all transform hover:scale-105">
                  <Send className="w-5 h-5" />
                </button>
              </div>
              <p className="text-xs text-slate-500">Join 5,000+ subscribers. No spam, unsubscribe anytime.</p>
            </div>
          </div>

          {/* Quick Links - 2 columns */}
          <div className="lg:col-span-2">
            <h4 className="text-lg font-semibold mb-6 text-amber-400 flex items-center">
              <ArrowRight className="w-4 h-4 mr-2" />
              Quick Links
            </h4>
            <ul className="space-y-4">
              {footerLinks.slice(0, 6).map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.path}
                    className="text-slate-300 hover:text-amber-400 transition-colors flex items-center group"
                  >
                    <span className="w-1.5 h-1.5 bg-amber-500/50 rounded-full mr-3 group-hover:bg-amber-500 transition-colors"></span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources - 2 columns */}
          <div className="lg:col-span-2">
            <h4 className="text-lg font-semibold mb-6 text-amber-400 flex items-center">
              <ArrowRight className="w-4 h-4 mr-2" />
              Resources
            </h4>
            <ul className="space-y-4">
              {resourceLinks.map((link, index) => {
                const Icon = link.icon;
                return (
                  <li key={index}>
                    <Link
                      to={link.path}
                      className="text-slate-300 hover:text-amber-400 transition-colors flex items-center group"
                    >
                      <Icon className="w-4 h-4 mr-3 text-amber-500/50 group-hover:text-amber-500 transition-colors" />
                      {link.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Contact Info - 4 columns */}
          <div className="lg:col-span-4">
            <h4 className="text-lg font-semibold mb-6 text-amber-400 flex items-center">
              <ArrowRight className="w-4 h-4 mr-2" />
              Contact Us
            </h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-4 group">
                <div className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center group-hover:bg-amber-500/20 transition-colors">
                  <MapPin className="w-5 h-5 text-amber-400" />
                </div>
                <div>
                  <p className="text-sm text-slate-400">Head Office</p>
                  <p className="text-slate-200 text-sm">{contactInfo.address}</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4 group">
                <div className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center group-hover:bg-amber-500/20 transition-colors">
                  <Phone className="w-5 h-5 text-amber-400" />
                </div>
                <div>
                  <p className="text-sm text-slate-400">Phone</p>
                  <p className="text-slate-200 text-sm">{contactInfo.phone}</p>
                  <p className="text-xs text-slate-500">Mon-Fri, 9:00 AM - 6:00 PM</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4 group">
                <div className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center group-hover:bg-amber-500/20 transition-colors">
                  <Mail className="w-5 h-5 text-amber-400" />
                </div>
                <div>
                  <p className="text-sm text-slate-400">Email</p>
                  <p className="text-slate-200 text-sm">{contactInfo.email}</p>
                  <p className="text-xs text-slate-500">Response within 24 hours</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-3 mt-8">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative group"
                    aria-label={social.name}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-amber-500 to-amber-600 rounded-lg blur-lg opacity-0 group-hover:opacity-50 transition-opacity"></div>
                    <div className="relative w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center group-hover:bg-amber-500 transition-all transform group-hover:scale-110 border border-slate-700 group-hover:border-amber-400">
                      <Icon className="w-5 h-5 text-amber-400 group-hover:text-white transition-colors" />
                    </div>
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom Bar with Copyright and Credits */}
        <div className="border-t border-slate-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-slate-400">
              &copy; {currentYear} DIGIN - Dynamic Initiative for Grassroot Impact Network. 
              <span className="mx-2">|</span>
              Registered under Indian Trust Act, 1882
            </p>
            
            <div className="flex items-center space-x-4">
              <Link to="/privacy" className="text-sm text-slate-400 hover:text-amber-400 transition-colors">
                Privacy
              </Link>
              <span className="text-slate-700">•</span>
              <Link to="/terms" className="text-sm text-slate-400 hover:text-amber-400 transition-colors">
                Terms
              </Link>
              <span className="text-slate-700">•</span>
              <Link to="/sitemap" className="text-sm text-slate-400 hover:text-amber-400 transition-colors">
                Sitemap
              </Link>
            </div>
          </div>

          {/* Developer Credit - Enhanced with red heart */}
          <div className="mt-6 pt-6 border-t border-slate-800/50 text-center">
            <p className="text-sm text-slate-500 flex items-center justify-center flex-wrap gap-1">
              Designed & Developed with 
              <span className="inline-flex items-center mx-1">
                <Heart className="w-4 h-4 text-red-500 fill-red-500 animate-pulse" />
              </span>
              by 
              <a 
                href="https://github.com/sharwaninsa" 
                target="_blank" 
                rel="noopener noreferrer"
                className="font-semibold text-amber-400 hover:text-amber-300 transition-colors ml-1"
              >
                Sharwan Kumar
              </a>
              <span className="mx-2 text-slate-700">|</span>
              <span className="text-xs">
                &copy; {currentYear} All rights reserved
              </span>
            </p>
            
            {/* Animated Heart Divider */}
            <div className="flex items-center justify-center mt-4 space-x-2">
              <div className="w-12 h-px bg-gradient-to-r from-transparent via-amber-500/50 to-transparent"></div>
              <Heart className="w-4 h-4 text-red-500 fill-red-500 animate-pulse" />
              <div className="w-12 h-px bg-gradient-to-r from-transparent via-amber-500/50 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="absolute bottom-8 right-8 w-12 h-12 bg-gradient-to-r from-amber-500 to-amber-600 rounded-full flex items-center justify-center shadow-lg hover:from-amber-600 hover:to-amber-700 transition-all transform hover:scale-110 animate-bounce-slow group"
        aria-label="Scroll to top"
      >
        <ArrowRight className="w-5 h-5 text-white rotate-[-90deg] group-hover:translate-y-[-2px] transition-transform" />
      </button>
    </footer>
  );
};

export default Footer;