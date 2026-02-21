// pages/NotFound.jsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Home, 
  Search, 
  Map, 
  Compass, 
  ArrowLeft,
  Heart,
  AlertTriangle,
  RefreshCw,
  HelpCircle,
  Mail
} from 'lucide-react';

const NotFound = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [glitch, setGlitch] = useState(false);

  // Parallax effect on mouse move
  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 20;
      const y = (e.clientY / window.innerHeight - 0.5) * 20;
      setPosition({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Glitch effect interval
  useEffect(() => {
    const interval = setInterval(() => {
      setGlitch(true);
      setTimeout(() => setGlitch(false), 200);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const suggestions = [
    { icon: Home, text: 'Return to Homepage', path: '/' },
    { icon: Map, text: 'Explore Our Mission', path: '/mission' },
    { icon: Compass, text: 'Take a Site Tour', path: '/sitemap' },
    { icon: HelpCircle, text: 'Visit FAQ', path: '/faq' },
    { icon: Search, text: 'Browse Gallery', path: '/gallery' },
    { icon: Mail, text: 'Contact Support', path: '/contact' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-amber-50 dark:from-slate-900 dark:via-slate-800 dark:to-amber-900/20 overflow-hidden relative">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating Numbers */}
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute text-slate-200 dark:text-slate-800 font-mono text-4xl font-bold animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${5 + Math.random() * 10}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`,
              transform: `rotate(${Math.random() * 360}deg)`,
              opacity: 0.1
            }}
          >
            {Math.floor(Math.random() * 10)}
          </div>
        ))}

        {/* Grid Pattern */}
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, rgb(203 213 225 / 0.1) 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }}></div>

        {/* Gradient Orbs */}
        <div className="absolute top-20 left-20 w-72 h-72 bg-amber-500/10 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-amber-600/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="max-w-4xl mx-auto">
          {/* 404 Number with Parallax */}
          <div 
            className="text-center mb-12"
            style={{
              transform: `translate(${position.x}px, ${position.y}px)`
            }}
          >
            <div className="relative inline-block">
              {/* Glitch Effect */}
              <div className={`text-[12rem] md:text-[18rem] font-black leading-none select-none transition-all duration-200 ${
                glitch ? 'opacity-90' : ''
              }`}>
                <span className="relative inline-block">
                  <span className="absolute inset-0 text-amber-500/30 dark:text-amber-400/30 animate-pulse" 
                        style={{ clipPath: 'inset(0 0 0 0)', transform: 'translate(2px, 2px)' }}>
                    404
                  </span>
                  <span className="absolute inset-0 text-amber-600/30 dark:text-amber-500/30 animate-pulse" 
                        style={{ clipPath: 'inset(0 0 0 0)', transform: 'translate(-2px, -2px)' }}>
                    404
                  </span>
                  <span className="relative bg-gradient-to-r from-amber-600 to-amber-500 dark:from-amber-400 dark:to-amber-300 bg-clip-text text-transparent">
                    404
                  </span>
                </span>
              </div>
              
              {/* Broken Chain Icon */}
              <div className="absolute -top-20 -right-20 md:-top-32 md:-right-32 animate-bounce-slow">
                <div className="relative">
                  <div className="absolute inset-0 bg-amber-500/20 rounded-full blur-xl animate-pulse"></div>
                  <div className="relative w-24 h-24 md:w-32 md:h-32 bg-gradient-to-br from-amber-500 to-amber-600 rounded-2xl rotate-12 flex items-center justify-center shadow-2xl">
                    <AlertTriangle className="w-12 h-12 md:w-16 md:h-16 text-white" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Message */}
          <div className="text-center mb-16 space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white">
              Looks Like You're
              <span className="block text-amber-600 dark:text-amber-400 mt-2">Lost in Cyberspace</span>
            </h1>
            
            <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              The page you're looking for doesn't exist or has been moved. 
              Even the best explorers sometimes lose their way!
            </p>

            {/* Broken Path Animation */}
            <div className="flex justify-center items-center space-x-4 mt-8">
              <div className="w-16 h-16 bg-slate-200 dark:bg-slate-700 rounded-xl flex items-center justify-center animate-pulse">
                <span className="text-2xl">📍</span>
              </div>
              <div className="w-24 h-1 bg-gradient-to-r from-amber-500 to-amber-600 rounded-full animate-pulse-slow"></div>
              <div className="w-16 h-16 bg-slate-200 dark:bg-slate-700 rounded-xl flex items-center justify-center opacity-50">
                <span className="text-2xl">❓</span>
              </div>
              <div className="w-24 h-1 bg-slate-300 dark:bg-slate-600 rounded-full"></div>
              <div className="w-16 h-16 bg-slate-200 dark:bg-slate-700 rounded-xl flex items-center justify-center opacity-30">
                <span className="text-2xl">🏁</span>
              </div>
            </div>
          </div>

          {/* Suggestions Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {suggestions.map((suggestion, index) => {
              const Icon = suggestion.icon;
              return (
                <Link
                  key={index}
                  to={suggestion.path}
                  className="group relative"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-amber-500 to-amber-600 rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity"></div>
                  <div className="relative bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-200 dark:border-slate-700 hover:-translate-y-1">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-amber-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-slate-900 dark:text-white group-hover:text-amber-600 transition-colors">
                          {suggestion.text}
                        </h3>
                        <p className="text-sm text-slate-500 dark:text-slate-400">
                          {suggestion.path === '/' ? 'Go back home' : `Visit ${suggestion.path.replace('/', '')}`}
                        </p>
                      </div>
                      <ArrowLeft className="w-5 h-5 text-amber-500 ml-auto opacity-0 group-hover:opacity-100 group-hover:translate-x-[-4px] transition-all" />
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>

          {/* Help Section */}
          <div className="text-center bg-gradient-to-r from-amber-500 to-amber-600 rounded-3xl p-8 shadow-2xl">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <Heart className="w-6 h-6 text-white fill-current animate-pulse" />
              <h2 className="text-2xl font-bold text-white">Don't Worry, We're Here to Help!</h2>
              <Heart className="w-6 h-6 text-white fill-current animate-pulse" />
            </div>
            
            <p className="text-white/90 mb-6 max-w-2xl mx-auto">
              If you believe this is a broken link or you need assistance finding what you're looking for, 
              our team is just a click away.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/"
                className="inline-flex items-center justify-center space-x-2 px-6 py-3 bg-white text-amber-600 rounded-xl font-semibold hover:bg-slate-100 transition-all transform hover:scale-105 shadow-lg"
              >
                <Home className="w-5 h-5" />
                <span>Back to Home</span>
              </Link>
              
              <Link
                to="/contact"
                className="inline-flex items-center justify-center space-x-2 px-6 py-3 bg-white/20 backdrop-blur-sm text-white rounded-xl font-semibold hover:bg-white/30 transition-all transform hover:scale-105 border border-white/30"
              >
                <Mail className="w-5 h-5" />
                <span>Contact Support</span>
              </Link>

              <button
                onClick={() => window.location.reload()}
                className="inline-flex items-center justify-center space-x-2 px-6 py-3 bg-white/10 backdrop-blur-sm text-white rounded-xl font-semibold hover:bg-white/20 transition-all transform hover:scale-105 border border-white/20"
              >
                <RefreshCw className="w-5 h-5" />
                <span>Refresh Page</span>
              </button>
            </div>
          </div>

          {/* Easter Egg */}
          <div className="text-center mt-8">
            <p className="text-sm text-slate-500 dark:text-slate-500">
              🕵️‍♂️ Hint: Try typing 
              <button 
                onClick={() => alert('🎉 You found the secret! Keep exploring!')}
                className="mx-1 text-amber-600 dark:text-amber-400 hover:underline font-mono"
              >
                /secret
              </button>
              if you're feeling adventurous!
            </p>
          </div>
        </div>
      </div>

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
        
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animate-bounce-slow {
          animation: bounce-slow 3s ease-in-out infinite;
        }
        
        .animate-pulse-slow {
          animation: pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
      `}</style>
    </div>
  );
};

export default NotFound;