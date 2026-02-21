// components/Carousel.jsx
import React, { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight, Pause, Play } from 'lucide-react';
import { carouselImages } from '../data/siteData';

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  const minSwipeDistance = 50;

  const goToNext = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselImages.length);
  }, []);

  const goToPrevious = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + carouselImages.length) % carouselImages.length);
  }, []);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    let interval;
    if (isAutoPlaying) {
      interval = setInterval(goToNext, 5000);
    }
    return () => clearInterval(interval);
  }, [isAutoPlaying, goToNext]);

  const onTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    
    if (isLeftSwipe) goToNext();
    if (isRightSwipe) goToPrevious();
  };

  return (
    <div className="relative w-full h-[600px] lg:h-[700px] overflow-hidden rounded-3xl shadow-2xl group">
      {/* Images */}
      {carouselImages.map((image, index) => (
        <div
          key={index}
          className={`absolute w-full h-full transition-all duration-1000 ease-out ${
            index === currentIndex 
              ? 'opacity-100 scale-100' 
              : 'opacity-0 scale-110'
          }`}
        >
          <img
            src={image.url}
            alt={image.alt}
            className="w-full h-full object-cover"
            loading={index === 0 ? 'eager' : 'lazy'}
          />
          
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent"></div>
          
          {/* Content */}
          <div className="absolute bottom-0 left-0 right-0 p-8 lg:p-16 text-white transform transition-all duration-1000 delay-500">
            <div className={`max-w-3xl ${index === currentIndex ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <span className="inline-block px-4 py-2 bg-amber-500/20 backdrop-blur-sm rounded-full text-amber-400 text-sm font-semibold mb-4 border border-amber-500/30">
                {image.category}
              </span>
              <h2 className="text-3xl lg:text-5xl font-bold mb-4 leading-tight">
                {image.title}
              </h2>
              <p className="text-lg lg:text-xl text-white/80 mb-6 max-w-2xl">
                {image.description}
              </p>
              <button className="px-8 py-3 bg-gradient-to-r from-amber-500 to-amber-600 rounded-full font-semibold hover:from-amber-600 hover:to-amber-700 transition-all transform hover:scale-105 shadow-lg shadow-amber-500/30">
                Learn More
              </button>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Controls */}
      <div className="absolute inset-0 flex items-center justify-between p-4 opacity-0 group-hover:opacity-100 transition-opacity">
        <button
          onClick={goToPrevious}
          className="w-12 h-12 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-white/20 transition-all transform hover:scale-110 border border-white/20"
        >
          <ChevronLeft className="w-6 h-6 text-white" />
        </button>
        <button
          onClick={goToNext}
          className="w-12 h-12 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-white/20 transition-all transform hover:scale-110 border border-white/20"
        >
          <ChevronRight className="w-6 h-6 text-white" />
        </button>
      </div>

      {/* Bottom Controls */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex items-center space-x-4">
        {/* Indicators */}
        <div className="flex space-x-2">
          {carouselImages.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                index === currentIndex 
                  ? 'w-8 bg-amber-500' 
                  : 'w-1.5 bg-white/50 hover:bg-white/75'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Play/Pause Button */}
        <button
          onClick={() => setIsAutoPlaying(!isAutoPlaying)}
          className="w-8 h-8 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-white/20 transition-all border border-white/20"
        >
          {isAutoPlaying ? 
            <Pause className="w-4 h-4 text-white" /> : 
            <Play className="w-4 h-4 text-white" />
          }
        </button>
      </div>

      {/* Slide Counter */}
      <div className="absolute top-4 right-4 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full text-white text-sm border border-white/20">
        {String(currentIndex + 1).padStart(2, '0')} / {String(carouselImages.length).padStart(2, '0')}
      </div>
    </div>
  );
};

export default Carousel;