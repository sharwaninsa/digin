
import React, { useState } from 'react';
import { galleryImages } from '../data/siteData';
import { X, Grid, Layers, Calendar, MapPin, Download, Share2, Heart, ChevronLeft, ChevronRight } from 'lucide-react';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [filter, setFilter] = useState('All');
  const [layout, setLayout] = useState('grid'); // 'grid' or 'masonry'
  const [likedImages, setLikedImages] = useState([]);

  const categories = ['All', ...new Set(galleryImages.map(img => img.category))];
  
  const filteredImages = filter === 'All' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === filter);

  const handleLike = (index, e) => {
    e.stopPropagation();
    if (likedImages.includes(index)) {
      setLikedImages(likedImages.filter(i => i !== index));
    } else {
      setLikedImages([...likedImages, index]);
    }
  };

  const handleDownload = async (image, e) => {
    e.stopPropagation();
    // In a real app, this would trigger a download
    alert(`Downloading ${image.title}`);
  };

  const handleShare = (image, e) => {
    e.stopPropagation();
    // In a real app, this would open share dialog
    alert(`Sharing ${image.title}`);
  };

  const nextImage = () => {
    if (selectedImage) {
      const currentIndex = galleryImages.findIndex(img => img.url === selectedImage.url);
      const nextIndex = (currentIndex + 1) % galleryImages.length;
      setSelectedImage(galleryImages[nextIndex]);
    }
  };

  const prevImage = () => {
    if (selectedImage) {
      const currentIndex = galleryImages.findIndex(img => img.url === selectedImage.url);
      const prevIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length;
      setSelectedImage(galleryImages[prevIndex]);
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
            alt="Gallery background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/95 to-slate-900/90"></div>
        </div>
        
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block px-4 py-2 bg-amber-500/20 backdrop-blur-sm rounded-full text-amber-400 text-sm font-semibold mb-6 border border-amber-500/30">
            OUR GALLERY
          </span>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 max-w-4xl mx-auto leading-tight">
            Capturing Moments of
            <span className="block text-amber-400">Impact & Change</span>
          </h1>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            A visual journey through our programs, events, and the communities we serve.
          </p>
        </div>
      </section>

      {/* Gallery Controls */}
      <section className="py-8 sticky top-24 z-30 bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border-b border-slate-200 dark:border-slate-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Category Filters */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category, index) => (
                <button
                  key={index}
                  onClick={() => setFilter(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all transform hover:scale-105 ${
                    filter === category
                      ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-white shadow-lg shadow-amber-500/30'
                      : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
                  }`}
                >
                  {category} ({category === 'All' ? galleryImages.length : galleryImages.filter(img => img.category === category).length})
                </button>
              ))}
            </div>

            {/* Layout Toggle */}
            <div className="flex items-center space-x-2 bg-slate-100 dark:bg-slate-800 p-1 rounded-lg">
              <button
                onClick={() => setLayout('grid')}
                className={`p-2 rounded-md transition-all ${
                  layout === 'grid' 
                    ? 'bg-white dark:bg-slate-700 text-amber-600 shadow-sm' 
                    : 'text-slate-600 dark:text-slate-400'
                }`}
              >
                <Grid className="w-5 h-5" />
              </button>
              <button
                onClick={() => setLayout('masonry')}
                className={`p-2 rounded-md transition-all ${
                  layout === 'masonry' 
                    ? 'bg-white dark:bg-slate-700 text-amber-600 shadow-sm' 
                    : 'text-slate-600 dark:text-slate-400'
                }`}
              >
                <Layers className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className={
            layout === 'grid' 
              ? 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'
              : 'columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-6'
          }>
            {filteredImages.map((image, index) => (
              <div
                key={index}
                onClick={() => setSelectedImage(image)}
                className={`group relative overflow-hidden rounded-2xl cursor-pointer ${
                  layout === 'grid' ? 'aspect-square' : 'mb-6 break-inside-avoid'
                }`}
              >
                <img
                  src={image.url}
                  alt={image.title}
                  className={`w-full h-full object-cover transition-transform duration-700 group-hover:scale-110`}
                  loading="lazy"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-6 group-hover:translate-y-0 transition-transform">
                    <h3 className="text-white font-bold text-lg mb-2">{image.title}</h3>
                    <p className="text-white/80 text-sm mb-3">{image.description}</p>
                    
                    {/* Meta Info */}
                    <div className="flex items-center space-x-4 text-white/60 text-xs">
                      <span className="flex items-center">
                        <MapPin className="w-3 h-3 mr-1" />
                        {image.location}
                      </span>
                      <span className="flex items-center">
                        <Calendar className="w-3 h-3 mr-1" />
                        {image.date}
                      </span>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex space-x-2 mt-4">
                      <button
                        onClick={(e) => handleLike(index, e)}
                        className={`p-2 rounded-full backdrop-blur-sm transition-all transform hover:scale-110 ${
                          likedImages.includes(index)
                            ? 'bg-amber-500 text-white'
                            : 'bg-white/20 text-white hover:bg-white/30'
                        }`}
                      >
                        <Heart className={`w-4 h-4 ${likedImages.includes(index) ? 'fill-current' : ''}`} />
                      </button>
                      <button
                        onClick={(e) => handleDownload(image, e)}
                        className="p-2 rounded-full bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 transition-all transform hover:scale-110"
                      >
                        <Download className="w-4 h-4" />
                      </button>
                      <button
                        onClick={(e) => handleShare(image, e)}
                        className="p-2 rounded-full bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 transition-all transform hover:scale-110"
                      >
                        <Share2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>

                {/* Category Badge */}
                <span className="absolute top-4 left-4 px-3 py-1 bg-amber-500/90 backdrop-blur-sm text-white text-xs rounded-full">
                  {image.category}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center"
          onClick={() => setSelectedImage(null)}
        >
          {/* Close Button */}
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors z-10"
          >
            <X className="w-8 h-8" />
          </button>

          {/* Navigation */}
          <button
            onClick={(e) => { e.stopPropagation(); prevImage(); }}
            className="absolute left-6 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all border border-white/20"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          
          <button
            onClick={(e) => { e.stopPropagation(); nextImage(); }}
            className="absolute right-6 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all border border-white/20"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Image Container */}
          <div className="max-w-6xl max-h-[90vh] px-4" onClick={e => e.stopPropagation()}>
            <img
              src={selectedImage.url}
              alt={selectedImage.title}
              className="w-full h-auto max-h-[70vh] object-contain rounded-lg shadow-2xl"
            />
            
            {/* Image Details */}
            <div className="mt-6 bg-white/10 backdrop-blur-md rounded-xl p-6 text-white">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-2xl font-bold mb-2">{selectedImage.title}</h3>
                  <p className="text-white/80">{selectedImage.description}</p>
                </div>
                <span className="px-3 py-1 bg-amber-500 rounded-full text-sm whitespace-nowrap">
                  {selectedImage.category}
                </span>
              </div>
              
              <div className="flex flex-wrap gap-6 text-white/70">
                <span className="flex items-center">
                  <MapPin className="w-4 h-4 mr-2" />
                  {selectedImage.location}
                </span>
                <span className="flex items-center">
                  <Calendar className="w-4 h-4 mr-2" />
                  {selectedImage.date}
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;