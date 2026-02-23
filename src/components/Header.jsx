// components/Header.jsx
import React, { useState, useEffect, useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Sun, Moon, ChevronDown, Heart } from 'lucide-react';
import { navigationLinks } from '../data/siteData';
import { ThemeContext } from '../App';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const location = useLocation();
  const { darkMode, setDarkMode } = useContext(ThemeContext);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed w-full z-50 transition-all duration-500 ${
      scrolled 
        ? 'bg-white/90 dark:bg-slate-900/90 backdrop-blur-xl shadow-2xl shadow-amber-500/10 dark:shadow-amber-500/5' 
        : 'bg-transparent'
    }`}>
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          {/* Logo with enhanced design */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="relative">
              <div className="w-18 h-18 bg-gradient-to-br from-amber-500 to-amber-600 rounded-full flex items-center justify-center rotate-3 group-hover:rotate-6 transition-all duration-300 shadow-lg shadow-amber-500/30">
              {/*<div className="absolute inset-0 flex items-center justify-center">
                <Heart className="w-6 h-6 text-white" />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-black bg-gradient-to-r from-amber-600 to-amber-500 dark:from-amber-400 dark:to-amber-300 bg-clip-text text-transparent">
                DIGIN
              </span>
              <span className="text-xs font-medium text-slate-600 dark:text-slate-400 tracking-wider">
                GRASSROOT IMPACT NETWORK
              </span> */}

                <img src="src/assets/logo.png" className='w-16 h-16 rounded-full' alt="" />
                </div>

            </div>
          </Link>

          {/* Desktop Navigation with enhanced styling */}
          <div className="hidden md:flex items-center space-x-1">
            {navigationLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 group ${
                  location.pathname === link.path
                    ? 'text-amber-600 dark:text-amber-400'
                    : 'text-slate-700 dark:text-slate-300 hover:text-amber-600 dark:hover:text-amber-400'
                }`}
              >
                {link.label}
                <span className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-amber-500 to-amber-600 transition-all duration-300 group-hover:w-full ${
                  location.pathname === link.path ? 'w-full' : ''
                }`}></span>
              </Link>
            ))}
            
            {/* CTA Button */}
            <Link
              to="/get-involved"
              className="ml-4 relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-amber-500 to-amber-600 rounded-full blur-lg group-hover:blur-xl transition-all opacity-75"></div>
              <div className="relative px-6 py-2.5 bg-gradient-to-r from-amber-500 to-amber-600 text-white rounded-full font-semibold hover:from-amber-600 hover:to-amber-700 transition-all transform hover:scale-105 flex items-center space-x-2">
                <span>Get Involved</span>
                <ChevronDown className="w-4 h-4 group-hover:rotate-180 transition-transform" />
              </div>
            </Link>

            {/* Theme Toggle with enhanced design */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="ml-4 p-2.5 rounded-full bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition-all transform hover:scale-110 relative group"
              aria-label="Toggle theme"
            >
              <div className="absolute inset-0 rounded-full bg-amber-500/20 blur-md opacity-0 group-hover:opacity-100 transition-opacity"></div>
              {darkMode ? 
                <Sun className="w-5 h-5 text-amber-500" /> : 
                <Moon className="w-5 h-5 text-slate-700" />
              }
            </button>
          </div>

          {/* Mobile menu button with enhanced design */}
          <div className="md:hidden flex items-center space-x-3">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2.5 rounded-full bg-slate-100 dark:bg-slate-800"
            >
              {darkMode ? 
                <Sun className="w-5 h-5 text-amber-500" /> : 
                <Moon className="w-5 h-5 text-slate-700" />
              }
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 text-white"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation with enhanced design */}
        {isOpen && (
          <div className="md:hidden py-6 px-4 bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl rounded-2xl shadow-2xl mt-4 border border-amber-500/20">
            {navigationLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block py-3 px-4 text-base font-medium rounded-xl transition-all mb-1 ${
                  location.pathname === link.path
                    ? 'bg-gradient-to-r from-amber-50 to-amber-100 dark:from-amber-900/30 dark:to-amber-800/30 text-amber-600 dark:text-amber-400'
                    : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/get-involved"
              onClick={() => setIsOpen(false)}
              className="block mt-4 bg-gradient-to-r from-amber-500 to-amber-600 text-white px-6 py-3 rounded-xl text-center font-semibold hover:from-amber-600 hover:to-amber-700 transition-all transform hover:scale-105 shadow-lg shadow-amber-500/30"
            >
              Get Involved
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;