
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Split, 
  Home, 
  Users, 
  Target, 
  Camera, 
  Newspaper, 
  Mail, 
  Heart,
  ChevronRight,
  Search,
  Download,
  Printer,
  Globe,
  FileText,
  Shield,
  BookOpen,
  ExternalLink
} from 'lucide-react';

const Sitemap = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [expandedSections, setExpandedSections] = useState(['main', 'legal', 'resources']);

  const toggleSection = (section) => {
    setExpandedSections(prev =>
      prev.includes(section)
        ? prev.filter(s => s !== section)
        : [...prev, section]
    );
  };

  const pages = [
    {
      category: 'main',
      title: 'Main Pages',
      icon: Home,
      color: 'from-blue-500 to-blue-600',
      links: [
        { path: '/', label: 'Home', description: 'Welcome to DIGIN - Our homepage featuring latest updates and impact stories', icon: Home },
        { path: '/about', label: 'About Us', description: 'Learn about our mission, vision, team, and journey', icon: Users },
        { path: '/mission', label: 'Our Mission', description: 'Detailed overview of our objectives and impact areas', icon: Target },
        { path: '/gallery', label: 'Gallery', description: 'Photo gallery showcasing our programs and events', icon: Camera },
        { path: '/press-release', label: 'Press Releases', description: 'Latest news, updates, and media coverage', icon: Newspaper },
        { path: '/contact', label: 'Contact Us', description: 'Get in touch with our team', icon: Mail },
        { path: '/get-involved', label: 'Get Involved', description: 'Donate, volunteer, or partner with us', icon: Heart }
      ]
    },
    {
      category: 'legal',
      title: 'Legal Pages',
      icon: Shield,
      color: 'from-purple-500 to-purple-600',
      links: [
        { path: '/privacy', label: 'Privacy Policy', description: 'How we collect and protect your personal information', icon: FileText },
        { path: '/terms', label: 'Terms of Service', description: 'Terms and conditions for using our website', icon: BookOpen },
        { path: '/sitemap', label: 'Sitemap', description: 'Complete site structure and page index', icon: Split }
      ]
    },
    {
      category: 'resources',
      title: 'Resources',
      icon: Globe,
      color: 'from-green-500 to-green-600',
      links: [
        { path: '/faq', label: 'FAQ', description: 'Frequently asked questions', icon: Search },
        { path: '/annual-reports', label: 'Annual Reports', description: 'Our yearly impact and financial reports', icon: FileText },
        { path: '/blog', label: 'Blog', description: 'Stories, updates, and insights from the field', icon: BookOpen }
      ]
    }
  ];

  const filteredPages = pages.map(category => ({
    ...category,
    links: category.links.filter(link =>
      link.label.toLowerCase().includes(searchTerm.toLowerCase()) ||
      link.description.toLowerCase().includes(searchTerm.toLowerCase())
    )
  })).filter(category => category.links.length > 0);

  const allLinks = pages.flatMap(category => category.links);
  const totalPages = allLinks.length;

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
            alt="Sitemap"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/95 to-slate-900/90"></div>
        </div>
        
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-2 bg-amber-500/20 backdrop-blur-sm rounded-full text-amber-400 text-sm font-semibold mb-6 border border-amber-500/30">
              SITE MAP
            </span>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Website
              <span className="block text-amber-400">Sitemap</span>
            </h1>
            <p className="text-xl text-white/80 max-w-2xl">
              Navigate through all pages and resources available on our website.
            </p>

            {/* Stats */}
            <div className="flex items-center space-x-6 mt-8">
              <div className="flex items-center text-white/60">
                <Split className="w-4 h-4 mr-2" />
                <span className="text-sm">{totalPages} Pages</span>
              </div>
              <div className="flex items-center text-white/60">
                <Globe className="w-4 h-4 mr-2" />
                <span className="text-sm">{pages.length} Categories</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Search Section */}
      <section className="py-8 bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border-b border-slate-200 dark:border-slate-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
              <input
                type="text"
                placeholder="Search pages..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-4 rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-amber-500 text-slate-900 dark:text-white"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Sitemap Content */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Overview Card */}
            <div className="lg:col-span-1">
              <div className="sticky top-40 space-y-6">
                <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6 border border-slate-200 dark:border-slate-700">
                  <h3 className="font-semibold text-slate-900 dark:text-white mb-4">Quick Overview</h3>
                  <div className="space-y-3">
                    {pages.map((category) => {
                      const Icon = category.icon;
                      const isExpanded = expandedSections.includes(category.category);
                      return (
                        <button
                          key={category.category}
                          onClick={() => toggleSection(category.category)}
                          className="flex items-center justify-between w-full px-3 py-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
                        >
                          <div className="flex items-center space-x-3">
                            <div className={`w-8 h-8 bg-gradient-to-br ${category.color} rounded-lg flex items-center justify-center`}>
                              <Icon className="w-4 h-4 text-white" />
                            </div>
                            <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                              {category.title}
                            </span>
                          </div>
                          <ChevronRight className={`w-4 h-4 text-slate-400 transition-transform ${isExpanded ? 'rotate-90' : ''}`} />
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="space-y-3">
                  <button className="w-full flex items-center justify-center space-x-2 px-4 py-3 bg-slate-100 dark:bg-slate-800 rounded-xl text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors">
                    <Download className="w-4 h-4" />
                    <span className="text-sm font-medium">Download Sitemap</span>
                  </button>
                  <button className="w-full flex items-center justify-center space-x-2 px-4 py-3 bg-slate-100 dark:bg-slate-800 rounded-xl text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors">
                    <Printer className="w-4 h-4" />
                    <span className="text-sm font-medium">Print</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Sitemap Grid */}
            <div className="lg:col-span-3">
              <div className="space-y-8">
                {filteredPages.map((category) => {
                  const Icon = category.icon;
                  const isExpanded = expandedSections.includes(category.category);
                  
                  if (!isExpanded) return null;

                  return (
                    <div key={category.category} className="group relative">
                      <div className="absolute inset-0 bg-gradient-to-r from-amber-500 to-amber-600 rounded-3xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity"></div>
                      <div className="relative bg-white dark:bg-slate-800 rounded-3xl shadow-xl p-8 border border-slate-200 dark:border-slate-700">
                        {/* Category Header */}
                        <div className="flex items-center space-x-4 mb-6">
                          <div className={`w-14 h-14 bg-gradient-to-br ${category.color} rounded-xl flex items-center justify-center`}>
                            <Icon className="w-7 h-7 text-white" />
                          </div>
                          <div>
                            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">{category.title}</h2>
                            <p className="text-sm text-slate-600 dark:text-slate-400">
                              {category.links.length} pages in this section
                            </p>
                          </div>
                        </div>

                        {/* Links Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {category.links.map((link, index) => {
                            const LinkIcon = link.icon;
                            return (
                              <Link
                                key={index}
                                to={link.path}
                                className="group/link p-4 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-all border border-transparent hover:border-slate-200 dark:hover:border-slate-600"
                              >
                                <div className="flex items-start space-x-3">
                                  <div className="w-10 h-10 bg-gradient-to-br from-amber-500 to-amber-600 rounded-lg flex items-center justify-center flex-shrink-0 group-hover/link:scale-110 transition-transform">
                                    <LinkIcon className="w-5 h-5 text-white" />
                                  </div>
                                  <div className="flex-1">
                                    <div className="flex items-center justify-between">
                                      <h3 className="font-semibold text-slate-900 dark:text-white group-hover/link:text-amber-600 dark:group-hover/link:text-amber-400 transition-colors">
                                        {link.label}
                                      </h3>
                                      <ExternalLink className="w-4 h-4 text-slate-400 opacity-0 group-hover/link:opacity-100 transition-opacity" />
                                    </div>
                                    <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
                                      {link.description}
                                    </p>
                                    <p className="text-xs text-amber-600 dark:text-amber-400 mt-2">
                                      {link.path}
                                    </p>
                                  </div>
                                </div>
                              </Link>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  );
                })}

                {searchTerm && filteredPages.length === 0 && (
                  <div className="text-center py-16">
                    <Search className="w-16 h-16 text-slate-400 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">No pages found</h3>
                    <p className="text-slate-600 dark:text-slate-400">
                      No pages match your search term "{searchTerm}"
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Visual Site Structure */}
      <section className="py-16 bg-gradient-to-br from-amber-50 to-amber-100/50 dark:from-slate-900 dark:to-slate-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-slate-900 dark:text-white">
            Site <span className="text-amber-600 dark:text-amber-400">Structure</span>
          </h2>

          <div className="max-w-4xl mx-auto">
            {/* Visual Tree */}
            <div className="relative">
              {/* Root */}
              <div className="text-center mb-8">
                <div className="inline-block px-6 py-3 bg-gradient-to-r from-amber-500 to-amber-600 text-white rounded-xl font-semibold shadow-xl">
                  DIGIN Home
                </div>
              </div>

              {/* Branches */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Main Branch */}
                <div className="relative">
                  <div className="text-center mb-4">
                    <div className="inline-block px-4 py-2 bg-blue-500 text-white rounded-lg text-sm font-semibold">
                      Main
                    </div>
                  </div>
                  <div className="space-y-2">
                    {pages[0].links.map((link, index) => (
                      <div key={index} className="text-center">
                        <Link
                          to={link.path}
                          className="inline-block px-3 py-2 bg-white dark:bg-slate-800 rounded-lg text-sm text-slate-700 dark:text-slate-300 hover:bg-blue-50 dark:hover:bg-blue-900/30 transition-colors border border-slate-200 dark:border-slate-700"
                        >
                          {link.label}
                        </Link>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Legal Branch */}
                <div className="relative">
                  <div className="text-center mb-4">
                    <div className="inline-block px-4 py-2 bg-purple-500 text-white rounded-lg text-sm font-semibold">
                      Legal
                    </div>
                  </div>
                  <div className="space-y-2">
                    {pages[1].links.map((link, index) => (
                      <div key={index} className="text-center">
                        <Link
                          to={link.path}
                          className="inline-block px-3 py-2 bg-white dark:bg-slate-800 rounded-lg text-sm text-slate-700 dark:text-slate-300 hover:bg-purple-50 dark:hover:bg-purple-900/30 transition-colors border border-slate-200 dark:border-slate-700"
                        >
                          {link.label}
                        </Link>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Resources Branch */}
                <div className="relative">
                  <div className="text-center mb-4">
                    <div className="inline-block px-4 py-2 bg-green-500 text-white rounded-lg text-sm font-semibold">
                      Resources
                    </div>
                  </div>
                  <div className="space-y-2">
                    {pages[2].links.map((link, index) => (
                      <div key={index} className="text-center">
                        <Link
                          to={link.path}
                          className="inline-block px-3 py-2 bg-white dark:bg-slate-800 rounded-lg text-sm text-slate-700 dark:text-slate-300 hover:bg-green-50 dark:hover:bg-green-900/30 transition-colors border border-slate-200 dark:border-slate-700"
                        >
                          {link.label}
                        </Link>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Connecting Lines (decorative) */}
              <svg className="absolute top-0 left-0 w-full h-full pointer-events-none" style={{ zIndex: -1 }}>
                <line x1="50%" y1="10%" x2="16.67%" y2="30%" stroke="#94a3b8" strokeWidth="2" strokeDasharray="4 4" className="opacity-30" />
                <line x1="50%" y1="10%" x2="50%" y2="30%" stroke="#94a3b8" strokeWidth="2" strokeDasharray="4 4" className="opacity-30" />
                <line x1="50%" y1="10%" x2="83.33%" y2="30%" stroke="#94a3b8" strokeWidth="2" strokeDasharray="4 4" className="opacity-30" />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-4 text-slate-900 dark:text-white">Can't Find What You're Looking For?</h2>
            <p className="text-slate-600 dark:text-slate-400 mb-6">
              Try our search or contact us for assistance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/search"
                className="px-6 py-3 bg-gradient-to-r from-amber-500 to-amber-600 text-white rounded-xl font-semibold hover:from-amber-600 hover:to-amber-700 transition-all"
              >
                Advanced Search
              </Link>
              <Link
                to="/contact"
                className="px-6 py-3 border-2 border-amber-500 text-amber-600 dark:text-amber-400 rounded-xl font-semibold hover:bg-amber-50 dark:hover:bg-amber-900/30 transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Sitemap;