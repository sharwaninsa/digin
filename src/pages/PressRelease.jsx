
import React, { useState } from 'react';
import { pressReleases } from '../data/siteData';
import { 
  Calendar, 
  Newspaper, 
  ArrowRight, 
  X, 
  Clock, 
  User,
  Share2,
  Bookmark,
  Download,
  ChevronLeft,
  ChevronRight,
  TrendingUp
} from 'lucide-react';

const PressRelease = () => {
  const [selectedRelease, setSelectedRelease] = useState(null);
  const [bookmarked, setBookmarked] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const releasesPerPage = 4;

  const handleBookmark = (id, e) => {
    e.stopPropagation();
    if (bookmarked.includes(id)) {
      setBookmarked(bookmarked.filter(bookmarkId => bookmarkId !== id));
    } else {
      setBookmarked([...bookmarked, id]);
    }
  };

  const handleShare = (release, e) => {
    e.stopPropagation();
    // In a real app, this would open share dialog
    alert(`Sharing: ${release.title}`);
  };

  // Pagination
  const indexOfLastRelease = currentPage * releasesPerPage;
  const indexOfFirstRelease = indexOfLastRelease - releasesPerPage;
  const currentReleases = pressReleases.slice(indexOfFirstRelease, indexOfLastRelease);
  const totalPages = Math.ceil(pressReleases.length / releasesPerPage);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1504711434969-e33886168f5c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
            alt="Press releases"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/95 to-slate-900/90"></div>
        </div>
        
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block px-4 py-2 bg-amber-500/20 backdrop-blur-sm rounded-full text-amber-400 text-sm font-semibold mb-6 border border-amber-500/30">
            MEDIA CENTER
          </span>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 max-w-4xl mx-auto leading-tight">
            Press Releases & 
            <span className="block text-amber-400">Media Updates</span>
          </h1>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Stay informed about our latest initiatives, achievements, and impact stories.
          </p>
        </div>
      </section>

      {/* Featured Stats */}
      <section className="py-12 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-amber-600 dark:text-amber-400 mb-2">50+</div>
              <div className="text-sm text-slate-600 dark:text-slate-400">Press Releases</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-amber-600 dark:text-amber-400 mb-2">25+</div>
              <div className="text-sm text-slate-600 dark:text-slate-400">Media Features</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-amber-600 dark:text-amber-400 mb-2">15+</div>
              <div className="text-sm text-slate-600 dark:text-slate-400">Awards</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-amber-600 dark:text-amber-400 mb-2">100K+</div>
              <div className="text-sm text-slate-600 dark:text-slate-400">Media Reach</div>
            </div>
          </div>
        </div>
      </section>

      {/* Press Releases Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {currentReleases.map((release) => (
              <article
                key={release.id}
                className="group relative bg-white dark:bg-slate-800 rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-amber-500 to-amber-600 opacity-0 group-hover:opacity-10 transition-opacity"></div>
                
                {/* Image Section */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={release.image}
                    alt={release.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>
                  
                  {/* Category Badge */}
                  <span className="absolute top-4 left-4 px-4 py-2 bg-gradient-to-r from-amber-500 to-amber-600 text-white rounded-full text-sm font-semibold shadow-lg">
                    {release.category}
                  </span>
                  
                  {/* Action Buttons */}
                  <div className="absolute top-4 right-4 flex space-x-2">
                    <button
                      onClick={(e) => handleBookmark(release.id, e)}
                      className={`p-2 rounded-full backdrop-blur-sm transition-all transform hover:scale-110 ${
                        bookmarked.includes(release.id)
                          ? 'bg-amber-500 text-white'
                          : 'bg-white/20 text-white hover:bg-white/30'
                      }`}
                    >
                      <Bookmark className={`w-4 h-4 ${bookmarked.includes(release.id) ? 'fill-current' : ''}`} />
                    </button>
                    <button
                      onClick={(e) => handleShare(release, e)}
                      className="p-2 rounded-full bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 transition-all transform hover:scale-110"
                    >
                      <Share2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-8">
                  {/* Meta Info */}
                  <div className="flex items-center space-x-4 text-sm text-slate-600 dark:text-slate-400 mb-4">
                    <span className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      {release.date}
                    </span>
                    <span className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {release.readTime}
                    </span>
                    <span className="flex items-center">
                      <User className="w-4 h-4 mr-1" />
                      {release.author}
                    </span>
                  </div>

                  {/* Title */}
                  <h2 className="text-2xl font-bold mb-4 text-slate-900 dark:text-white group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors">
                    {release.title}
                  </h2>

                  {/* Summary */}
                  <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
                    {release.summary}
                  </p>

                  {/* Read More Button */}
                  <button
                    onClick={() => setSelectedRelease(release)}
                    className="inline-flex items-center text-amber-600 dark:text-amber-400 font-semibold group/btn"
                  >
                    Read Full Article
                    <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-2 transition-transform" />
                  </button>
                </div>
              </article>
            ))}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex justify-center items-center space-x-4 mt-12">
              <button
                onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
                className={`p-3 rounded-full transition-all ${
                  currentPage === 1
                    ? 'bg-slate-100 dark:bg-slate-800 text-slate-400 cursor-not-allowed'
                    : 'bg-amber-100 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400 hover:bg-amber-200 dark:hover:bg-amber-900/50'
                }`}
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              
              <span className="text-slate-700 dark:text-slate-300">
                Page {currentPage} of {totalPages}
              </span>
              
              <button
                onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                disabled={currentPage === totalPages}
                className={`p-3 rounded-full transition-all ${
                  currentPage === totalPages
                    ? 'bg-slate-100 dark:bg-slate-800 text-slate-400 cursor-not-allowed'
                    : 'bg-amber-100 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400 hover:bg-amber-200 dark:hover:bg-amber-900/50'
                }`}
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-24 bg-gradient-to-br from-amber-50 to-amber-100/50 dark:from-slate-900 dark:to-slate-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-block p-4 bg-amber-500/10 rounded-2xl mb-6">
              <Newspaper className="w-12 h-12 text-amber-600 dark:text-amber-400" />
            </div>
            <h2 className="text-4xl font-bold mb-4 text-slate-900 dark:text-white">
              Stay Updated with Our Latest News
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-400 mb-8">
              Subscribe to our newsletter and never miss an update about our programs and impact.
            </p>
            
            <form className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-6 py-4 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-amber-500 text-slate-900 dark:text-white"
              />
              <button
                type="submit"
                className="px-8 py-4 bg-gradient-to-r from-amber-500 to-amber-600 text-white rounded-xl font-semibold hover:from-amber-600 hover:to-amber-700 transition-all transform hover:scale-105 shadow-lg shadow-amber-500/30"
              >
                Subscribe
              </button>
            </form>
            
            <p className="text-sm text-slate-500 dark:text-slate-500 mt-4">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </section>

      {/* Press Release Modal */}
      {selectedRelease && (
        <div
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4 overflow-y-auto"
          onClick={() => setSelectedRelease(null)}
        >
          <div
            className="relative bg-white dark:bg-slate-900 rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            onClick={e => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedRelease(null)}
              className="absolute top-6 right-6 text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200 z-10"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Image */}
            <div className="relative h-96">
              <img
                src={selectedRelease.image}
                alt={selectedRelease.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>
              
              {/* Category Badge */}
              <span className="absolute top-6 left-6 px-4 py-2 bg-gradient-to-r from-amber-500 to-amber-600 text-white rounded-full text-sm font-semibold">
                {selectedRelease.category}
              </span>
            </div>

            {/* Content */}
            <div className="p-8 md:p-12">
              {/* Meta Info */}
              <div className="flex flex-wrap items-center gap-4 text-sm text-slate-600 dark:text-slate-400 mb-6">
                <span className="flex items-center">
                  <Calendar className="w-4 h-4 mr-1" />
                  {selectedRelease.date}
                </span>
                <span className="flex items-center">
                  <Clock className="w-4 h-4 mr-1" />
                  {selectedRelease.readTime}
                </span>
                <span className="flex items-center">
                  <User className="w-4 h-4 mr-1" />
                  {selectedRelease.author}
                </span>
              </div>

              {/* Title */}
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slate-900 dark:text-white">
                {selectedRelease.title}
              </h2>

              {/* Summary */}
              <p className="text-xl text-slate-700 dark:text-slate-300 mb-8 font-light italic border-l-4 border-amber-500 pl-6">
                {selectedRelease.summary}
              </p>

              {/* Full Content */}
              <div className="prose prose-lg max-w-none dark:prose-invert">
                <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-6">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-6">
                  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
                <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-6">
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                </p>
              </div>

              {/* Share Buttons */}
              <div className="flex items-center space-x-4 mt-8 pt-8 border-t border-slate-200 dark:border-slate-800">
                <span className="text-slate-700 dark:text-slate-300 font-semibold">Share this article:</span>
                <button className="p-2 bg-slate-100 dark:bg-slate-800 rounded-lg hover:bg-amber-500 hover:text-white transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/></svg>
                </button>
                <button className="p-2 bg-slate-100 dark:bg-slate-800 rounded-lg hover:bg-amber-500 hover:text-white transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"/></svg>
                </button>
                <button className="p-2 bg-slate-100 dark:bg-slate-800 rounded-lg hover:bg-amber-500 hover:text-white transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.03-2.682-.103-.253-.447-1.27.098-2.646 0 0 .84-.269 2.75 1.025.8-.223 1.65-.334 2.5-.334.85 0 1.7.111 2.5.334 1.91-1.294 2.75-1.025 2.75-1.025.545 1.376.201 2.393.099 2.646.64.698 1.03 1.591 1.03 2.682 0 3.841-2.337 4.687-4.565 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.161 22 16.418 22 12c0-5.523-4.477-10-10-10z"/></svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PressRelease;