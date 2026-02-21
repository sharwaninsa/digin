// pages/Blog.jsx
import React, { useState } from 'react';
import { 
  BookOpen, 
  Calendar, 
  User, 
  Clock, 
  Heart,
  MessageCircle,
  Share2,
  Bookmark,
  Search,
  ChevronLeft,
  ChevronRight,
  TrendingUp,
  Eye,
  Tag
} from 'lucide-react';
import { Link } from 'react-router-dom';

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);
  const [bookmarkedPosts, setBookmarkedPosts] = useState([]);
  const postsPerPage = 6;

  // Dummy JSON data for blog posts
  const blogPosts = [
    {
      id: 1,
      title: 'Empowering Rural Youth Through Digital Literacy',
      slug: 'empowering-rural-youth-digital-literacy',
      excerpt: 'How our digital literacy program is transforming lives in rural Delhi, one student at a time. Over 500 youth have gained essential digital skills in the past year.',
      content: 'Full content here...',
      author: {
        name: 'Priya Sharma',
        avatar: 'https://images.unsplash.com/photo-1494790108777-766dab1e9c6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
        role: 'Program Coordinator'
      },
      category: 'Digital Literacy',
      tags: ['education', 'rural development', 'technology'],
      publishedAt: '2026-03-15T10:30:00Z',
      readTime: 5,
      views: 1250,
      likes: 89,
      comments: 24,
      shares: 45,
      image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      featured: true
    },
    {
      id: 2,
      title: 'Preserving India\'s Folk Art: A Digital Archive Initiative',
      slug: 'preserving-india-folk-art-digital-archive',
      excerpt: 'Documenting dying art forms and creating a digital repository for future generations. Our team has documented over 100 folk artists across 5 states.',
      content: 'Full content here...',
      author: {
        name: 'Rajesh Kumar',
        avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
        role: 'Cultural Heritage Lead'
      },
      category: 'Cultural Preservation',
      tags: ['art', 'culture', 'heritage'],
      publishedAt: '2026-03-10T14:20:00Z',
      readTime: 7,
      views: 980,
      likes: 67,
      comments: 18,
      shares: 32,
      image: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a0c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      featured: true
    },
    {
      id: 3,
      title: 'From Darkness to Light: A Story of Transformation',
      slug: 'darkness-to-light-transformation-story',
      excerpt: 'Meet Sunita, who went from being a domestic worker to running her own tailoring business with support from our skill development program.',
      content: 'Full content here...',
      author: {
        name: 'Anita Desai',
        avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
        role: 'Community Outreach'
      },
      category: 'Success Stories',
      tags: ['women empowerment', 'livelihood', 'success'],
      publishedAt: '2026-03-05T09:15:00Z',
      readTime: 6,
      views: 2100,
      likes: 156,
      comments: 42,
      shares: 89,
      image: 'https://images.unsplash.com/photo-1488521787991-1c5e3e1836c9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      featured: true
    },
    {
      id: 4,
      title: 'Youth Leadership Summit 2026: Shaping Tomorrow\'s Leaders',
      slug: 'youth-leadership-summit-2026',
      excerpt: 'Over 500 young leaders from across India gathered to discuss climate action, social justice, and digital innovation.',
      content: 'Full content here...',
      author: {
        name: 'Vikram Singh',
        avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
        role: 'Youth Programs'
      },
      category: 'Events',
      tags: ['youth', 'leadership', 'summit'],
      publishedAt: '2026-02-28T11:45:00Z',
      readTime: 4,
      views: 1560,
      likes: 98,
      comments: 31,
      shares: 67,
      image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      featured: false
    },
    {
      id: 5,
      title: 'Sustainable Farming: Training 1000+ Farmers in Organic Practices',
      slug: 'sustainable-farming-organic-practices',
      excerpt: 'Our agricultural initiative is helping farmers transition to organic methods, improving yields and soil health.',
      content: 'Full content here...',
      author: {
        name: 'Dr. Meera Reddy',
        avatar: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
        role: 'Agriculture Specialist'
      },
      category: 'Agriculture',
      tags: ['farming', 'sustainability', 'environment'],
      publishedAt: '2026-02-20T13:30:00Z',
      readTime: 8,
      views: 890,
      likes: 76,
      comments: 22,
      shares: 41,
      image: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      featured: false
    },
    {
      id: 6,
      title: 'Healthcare Camps: Reaching the Unreached',
      slug: 'healthcare-camps-reaching-unreached',
      excerpt: 'Mobile health units bringing primary healthcare to remote villages. Over 10,000 patients treated in the last quarter.',
      content: 'Full content here...',
      author: {
        name: 'Dr. Sanjay Gupta',
        avatar: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
        role: 'Health Programs'
      },
      category: 'Healthcare',
      tags: ['health', 'rural healthcare', 'camps'],
      publishedAt: '2026-02-15T10:00:00Z',
      readTime: 5,
      views: 1340,
      likes: 112,
      comments: 28,
      shares: 53,
      image: 'https://images.unsplash.com/photo-1584515933487-779824d29309?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      featured: false
    },
    {
      id: 7,
      title: 'Community Radio: Giving Voice to the Voiceless',
      slug: 'community-radio-giving-voice',
      excerpt: 'How our community radio station is empowering local voices and spreading awareness on critical issues.',
      content: 'Full content here...',
      author: {
        name: 'Farah Khan',
        avatar: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
        role: 'Media Coordinator'
      },
      category: 'Media',
      tags: ['radio', 'community media', 'awareness'],
      publishedAt: '2026-02-10T15:45:00Z',
      readTime: 6,
      views: 780,
      likes: 54,
      comments: 16,
      shares: 29,
      image: 'https://images.unsplash.com/photo-1590602847861-f3579e41b79e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      featured: false
    },
    {
      id: 8,
      title: 'Environmental Conservation: Planting 10,000 Trees',
      slug: 'environmental-conservation-planting-trees',
      excerpt: 'Our green initiative aims to plant 10,000 trees this year, engaging schools and community groups.',
      content: 'Full content here...',
      author: {
        name: 'Arjun Mehta',
        avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
        role: 'Environment Lead'
      },
      category: 'Environment',
      tags: ['environment', 'conservation', 'sustainability'],
      publishedAt: '2026-02-05T12:15:00Z',
      readTime: 4,
      views: 1120,
      likes: 134,
      comments: 37,
      shares: 72,
      image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      featured: false
    },
    {
      id: 9,
      title: 'Women Entrepreneurship: 50 Startups Launched',
      slug: 'women-entrepreneurship-startups-launched',
      excerpt: 'Supporting women entrepreneurs through mentorship, funding, and market linkages. 50 women-led startups launched this year.',
      content: 'Full content here...',
      author: {
        name: 'Kavita Sharma',
        avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
        role: 'Women Empowerment'
      },
      category: 'Women Empowerment',
      tags: ['women', 'entrepreneurship', 'livelihood'],
      publishedAt: '2026-01-28T09:30:00Z',
      readTime: 7,
      views: 1890,
      likes: 178,
      comments: 45,
      shares: 96,
      image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      featured: false
    }
  ];

  const categories = ['all', ...new Set(blogPosts.map(post => post.category))];

  // Filter posts
  const filteredPosts = blogPosts
    .filter(post => 
      (selectedCategory === 'all' || post.category === selectedCategory) &&
      (searchTerm === '' || 
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.author.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
      )
    )
    .sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt));

  // Featured posts
  const featuredPosts = filteredPosts.filter(post => post.featured);
  const regularPosts = filteredPosts.filter(post => !post.featured);

  // Pagination for regular posts
  const totalPages = Math.ceil(regularPosts.length / postsPerPage);
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentRegularPosts = regularPosts.slice(indexOfFirstPost, indexOfLastPost);

  const handleBookmark = (postId) => {
    if (bookmarkedPosts.includes(postId)) {
      setBookmarkedPosts(bookmarkedPosts.filter(id => id !== postId));
    } else {
      setBookmarkedPosts([...bookmarkedPosts, postId]);
    }
  };

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-IN', options);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
            alt="Blog"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/95 to-slate-900/90"></div>
        </div>
        
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-2 bg-amber-500/20 backdrop-blur-sm rounded-full text-amber-400 text-sm font-semibold mb-6 border border-amber-500/30">
              OUR BLOG
            </span>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Stories of
              <span className="block text-amber-400">Impact & Change</span>
            </h1>
            <p className="text-xl text-white/80 max-w-2xl">
              Read about our initiatives, success stories, and insights from the field.
            </p>

            {/* Stats */}
            <div className="flex items-center space-x-6 mt-8">
              <div className="flex items-center text-white/60">
                <BookOpen className="w-4 h-4 mr-2" />
                <span className="text-sm">{blogPosts.length} Articles</span>
              </div>
              <div className="flex items-center text-white/60">
                <Eye className="w-4 h-4 mr-2" />
                <span className="text-sm">{blogPosts.reduce((acc, post) => acc + post.views, 0).toLocaleString()}+ Views</span>
              </div>
              <div className="flex items-center text-white/60">
                <User className="w-4 h-4 mr-2" />
                <span className="text-sm">{new Set(blogPosts.map(post => post.author.name)).size} Authors</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="sticky top-24 z-40 bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border-b border-slate-200 dark:border-slate-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => {
                  setSearchTerm(e.target.value);
                  setCurrentPage(1);
                }}
                className="w-full pl-10 pr-4 py-2 rounded-lg bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-amber-500"
              />
            </div>

            {/* Category Filter */}
            <div className="flex overflow-x-auto hide-scrollbar space-x-2 pb-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => {
                    setSelectedCategory(category);
                    setCurrentPage(1);
                  }}
                  className={`px-4 py-2 rounded-full whitespace-nowrap text-sm font-medium transition-all ${
                    selectedCategory === category
                      ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-white shadow-lg shadow-amber-500/30'
                      : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
                  }`}
                >
                  {category === 'all' ? 'All Posts' : category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      {featuredPosts.length > 0 && searchTerm === '' && selectedCategory === 'all' && (
        <section className="py-12">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold mb-6 text-slate-900 dark:text-white flex items-center">
              <TrendingUp className="w-6 h-6 mr-2 text-amber-500" />
              Featured Stories
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredPosts.map((post) => (
                <div key={post.id} className="group relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-amber-500 to-amber-600 rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity"></div>
                  <div className="relative bg-white dark:bg-slate-800 rounded-2xl shadow-xl overflow-hidden border border-slate-200 dark:border-slate-700">
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>
                      <span className="absolute top-4 left-4 px-3 py-1 bg-amber-500 text-white text-xs rounded-full">
                        Featured
                      </span>
                      <button
                        onClick={() => handleBookmark(post.id)}
                        className="absolute top-4 right-4 p-2 bg-white/20 backdrop-blur-sm rounded-lg hover:bg-white/30 transition-colors"
                      >
                        <Bookmark className={`w-4 h-4 text-white ${bookmarkedPosts.includes(post.id) ? 'fill-current' : ''}`} />
                      </button>
                    </div>
                    <div className="p-6">
                      <div className="flex items-center space-x-4 text-xs text-slate-500 dark:text-slate-400 mb-3">
                        <span className="flex items-center">
                          <Calendar className="w-3 h-3 mr-1" />
                          {formatDate(post.publishedAt)}
                        </span>
                        <span className="flex items-center">
                          <Clock className="w-3 h-3 mr-1" />
                          {post.readTime} min read
                        </span>
                      </div>
                      <h3 className="text-xl font-bold mb-2 text-slate-900 dark:text-white group-hover:text-amber-600 transition-colors">
                        <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                      </h3>
                      <p className="text-sm text-slate-600 dark:text-slate-400 mb-4 line-clamp-2">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <img
                            src={post.author.avatar}
                            alt={post.author.name}
                            className="w-8 h-8 rounded-full object-cover"
                          />
                          <div>
                            <p className="text-sm font-medium text-slate-900 dark:text-white">{post.author.name}</p>
                            <p className="text-xs text-slate-500 dark:text-slate-400">{post.author.role}</p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2 text-slate-500 dark:text-slate-400">
                          <span className="flex items-center text-xs">
                            <Heart className="w-3 h-3 mr-1" />
                            {post.likes}
                          </span>
                          <span className="flex items-center text-xs">
                            <MessageCircle className="w-3 h-3 mr-1" />
                            {post.comments}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Regular Posts */}
      <section className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold mb-6 text-slate-900 dark:text-white">
            {searchTerm ? 'Search Results' : 'Latest Articles'}
          </h2>

          {filteredPosts.length > 0 ? (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {(searchTerm || selectedCategory !== 'all' ? filteredPosts : currentRegularPosts).map((post) => (
                  <div key={post.id} className="group relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-amber-500 to-amber-600 rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity"></div>
                    <div className="relative bg-white dark:bg-slate-800 rounded-2xl shadow-xl overflow-hidden border border-slate-200 dark:border-slate-700">
                      <div className="relative h-48 overflow-hidden">
                        <img
                          src={post.image}
                          alt={post.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>
                        <span className="absolute top-4 left-4 px-3 py-1 bg-amber-500/90 text-white text-xs rounded-full">
                          {post.category}
                        </span>
                        <button
                          onClick={() => handleBookmark(post.id)}
                          className="absolute top-4 right-4 p-2 bg-white/20 backdrop-blur-sm rounded-lg hover:bg-white/30 transition-colors"
                        >
                          <Bookmark className={`w-4 h-4 text-white ${bookmarkedPosts.includes(post.id) ? 'fill-current' : ''}`} />
                        </button>
                      </div>
                      <div className="p-6">
                        <div className="flex items-center space-x-4 text-xs text-slate-500 dark:text-slate-400 mb-3">
                          <span className="flex items-center">
                            <Calendar className="w-3 h-3 mr-1" />
                            {formatDate(post.publishedAt)}
                          </span>
                          <span className="flex items-center">
                            <Clock className="w-3 h-3 mr-1" />
                            {post.readTime} min read
                          </span>
                        </div>
                        <h3 className="text-xl font-bold mb-2 text-slate-900 dark:text-white group-hover:text-amber-600 transition-colors">
                          <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                        </h3>
                        <p className="text-sm text-slate-600 dark:text-slate-400 mb-4 line-clamp-2">
                          {post.excerpt}
                        </p>
                        
                        {/* Tags */}
                        <div className="flex flex-wrap gap-2 mb-4">
                          {post.tags.map((tag, index) => (
                            <span
                              key={index}
                              className="inline-flex items-center px-2 py-1 bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-400 rounded text-xs"
                            >
                              <Tag className="w-3 h-3 mr-1" />
                              {tag}
                            </span>
                          ))}
                        </div>

                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-2">
                            <img
                              src={post.author.avatar}
                              alt={post.author.name}
                              className="w-8 h-8 rounded-full object-cover"
                            />
                            <div>
                              <p className="text-sm font-medium text-slate-900 dark:text-white">{post.author.name}</p>
                              <p className="text-xs text-slate-500 dark:text-slate-400">{post.author.role}</p>
                            </div>
                          </div>
                          <div className="flex items-center space-x-2 text-slate-500 dark:text-slate-400">
                            <span className="flex items-center text-xs">
                              <Heart className="w-3 h-3 mr-1" />
                              {post.likes}
                            </span>
                            <span className="flex items-center text-xs">
                              <MessageCircle className="w-3 h-3 mr-1" />
                              {post.comments}
                            </span>
                            <span className="flex items-center text-xs">
                              <Share2 className="w-3 h-3 mr-1" />
                              {post.shares}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Pagination */}
              {!searchTerm && selectedCategory === 'all' && totalPages > 1 && (
                <div className="flex justify-center items-center space-x-4 mt-12">
                  <button
                    onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                    disabled={currentPage === 1}
                    className={`p-2 rounded-lg transition-colors ${
                      currentPage === 1
                        ? 'bg-slate-100 dark:bg-slate-800 text-slate-400 cursor-not-allowed'
                        : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
                    }`}
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  
                  <span className="text-sm text-slate-700 dark:text-slate-300">
                    Page {currentPage} of {totalPages}
                  </span>
                  
                  <button
                    onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                    disabled={currentPage === totalPages}
                    className={`p-2 rounded-lg transition-colors ${
                      currentPage === totalPages
                        ? 'bg-slate-100 dark:bg-slate-800 text-slate-400 cursor-not-allowed'
                        : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
                    }`}
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              )}
            </>
          ) : (
            <div className="text-center py-16">
              <BookOpen className="w-16 h-16 text-slate-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">No articles found</h3>
              <p className="text-slate-600 dark:text-slate-400">
                Try adjusting your search or filter criteria
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-gradient-to-br from-amber-50 to-amber-100/50 dark:from-slate-900 dark:to-slate-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4 text-slate-900 dark:text-white">Subscribe to Our Blog</h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 mb-6">
              Get the latest stories and updates delivered to your inbox.
            </p>
            <form className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-3 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-amber-500"
              />
              <button className="px-6 py-3 bg-gradient-to-r from-amber-500 to-amber-600 text-white rounded-xl font-semibold hover:from-amber-600 hover:to-amber-700 transition-all">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;