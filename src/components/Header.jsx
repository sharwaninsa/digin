// components/Header.jsx - Updated with Accessibility and Language Toggle
import React, { useState, useEffect, useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Menu, 
  X, 
  Sun, 
  Moon, 
  ChevronDown, 
  Heart,
  Accessibility,
  Type,
  Contrast,
  Globe,
  MinusCircle,
  PlusCircle,
  RotateCcw
} from 'lucide-react';
import { navigationLinks } from '../data/siteData';
import { ThemeContext } from '../App';
import { useApp } from '../context/AppContext';
import { useTranslation } from '../hooks/useTranslation';
import logo from '../../src/assets/logo.png'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showAccessibility, setShowAccessibility] = useState(false);
  const location = useLocation();
  const { darkMode, setDarkMode } = useContext(ThemeContext);
  const { 
    increaseFontSize, 
    decreaseFontSize, 
    resetFontSize, 
    toggleContrast,
    contrast,
    fontSize
  } = useApp();
  const { t, language } = useTranslation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close accessibility menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!e.target.closest('.accessibility-menu') && !e.target.closest('.accessibility-button')) {
        setShowAccessibility(false);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  return (
    <header className={`fixed w-full z-50 transition-all duration-500 ${
      scrolled 
        ? 'bg-white/90 dark:bg-slate-900/90 backdrop-blur-xl shadow-2xl shadow-amber-500/10 dark:shadow-amber-500/5' 
        : 'bg-transparent'
    }`}>
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="relative">
              <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-amber-600 rounded-full rotate-3 group-hover:rotate-6 transition-all duration-300 shadow-lg shadow-amber-500/30"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <img src={logo} alt="" className='rounded-full h-14 w-14'/>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-black bg-gradient-to-r from-amber-600 to-amber-500 dark:from-amber-400 dark:to-amber-300 bg-clip-text text-transparent">
                DIGIN
              </span>
              <span className="text-xs font-medium text-slate-600 dark:text-slate-400 tracking-wider">
                {t('footer.quickLinks')}
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
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
                {t(link.labelKey || `nav.${link.label.toLowerCase().replace(/\s+/g, '')}`)}
                <span className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-amber-500 to-amber-600 transition-all duration-300 group-hover:w-full ${
                  location.pathname === link.path ? 'w-full' : ''
                }`}></span>
              </Link>
            ))}

            {/* Accessibility Button */}
            <div className="relative ml-2">
              <button
                onClick={() => setShowAccessibility(!showAccessibility)}
                className="accessibility-button p-2.5 rounded-full bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition-all transform hover:scale-110 relative group"
                aria-label="Accessibility options"
              >
                <Accessibility className="w-5 h-5 text-slate-700 dark:text-slate-300" />
                {contrast && (
                  <span className="absolute -top-1 -right-1 w-3 h-3 bg-amber-500 rounded-full animate-pulse"></span>
                )}
              </button>

              {/* Accessibility Menu */}
              {showAccessibility && (
                <div className="accessibility-menu absolute right-0 mt-3 w-72 bg-white dark:bg-slate-800 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-700 overflow-hidden animate-fadeIn">
                  <div className="p-4 bg-gradient-to-r from-amber-500 to-amber-600">
                    <h3 className="text-white font-semibold flex items-center">
                      <Accessibility className="w-4 h-4 mr-2" />
                      {t('accessibility.title')}
                    </h3>
                  </div>
                  
                  <div className="p-4 space-y-4">
                    {/* Font Size Controls */}
                    <div>
                      <p className="text-sm font-medium text-slate-700 dark:text-slate-300 mb-2 flex items-center">
                        <Type className="w-4 h-4 mr-2 text-amber-500" />
                        Text Size ({fontSize}%)
                      </p>
                      <div className="flex items-center space-x-2">
                        <button
                          onClick={decreaseFontSize}
                          className="flex-1 p-2 bg-slate-100 dark:bg-slate-700 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-600 transition-colors flex items-center justify-center"
                          aria-label="Decrease text size"
                        >
                          <MinusCircle className="w-4 h-4 text-slate-700 dark:text-slate-300" />
                        </button>
                        <button
                          onClick={resetFontSize}
                          className="flex-1 p-2 bg-slate-100 dark:bg-slate-700 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-600 transition-colors flex items-center justify-center"
                          aria-label="Reset text size"
                        >
                          <RotateCcw className="w-4 h-4 text-slate-700 dark:text-slate-300" />
                        </button>
                        <button
                          onClick={increaseFontSize}
                          className="flex-1 p-2 bg-slate-100 dark:bg-slate-700 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-600 transition-colors flex items-center justify-center"
                          aria-label="Increase text size"
                        >
                          <PlusCircle className="w-4 h-4 text-slate-700 dark:text-slate-300" />
                        </button>
                      </div>
                    </div>

                    {/* Contrast Toggle */}
                    <div>
                      <button
                        onClick={toggleContrast}
                        className={`w-full p-3 rounded-lg flex items-center justify-between transition-colors ${
                          contrast 
                            ? 'bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400' 
                            : 'bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-600'
                        }`}
                      >
                        <span className="flex items-center">
                          <Contrast className="w-4 h-4 mr-2" />
                          {t('accessibility.contrast')}
                        </span>
                        <div className={`w-10 h-5 rounded-full transition-colors ${
                          contrast ? 'bg-amber-500' : 'bg-slate-300 dark:bg-slate-600'
                        }`}>
                          <div className={`w-4 h-4 rounded-full bg-white transform transition-transform mt-0.5 ${
                            contrast ? 'translate-x-5' : 'translate-x-1'
                          }`}></div>
                        </div>
                      </button>
                    </div>

                    {/* Language Toggle */}
                    <div>
                      <button
                        onClick={() => {
                          // This will be connected to your language toggle function
                          // You'll need to add this to your context
                          if (window.toggleLanguage) window.toggleLanguage();
                        }}
                        className="w-full p-3 bg-slate-100 dark:bg-slate-700 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-600 transition-colors flex items-center justify-between"
                      >
                        <span className="flex items-center text-slate-700 dark:text-slate-300">
                          <Globe className="w-4 h-4 mr-2" />
                          {language === 'en' ? 'हिन्दी में बदलें' : 'Switch to English'}
                        </span>
                        <span className="px-2 py-1 bg-amber-500 text-white rounded text-xs font-bold">
                          {language === 'en' ? 'HI' : 'EN'}
                        </span>
                      </button>
                    </div>

                    {/* Current Settings Indicator */}
                    <div className="pt-2 text-xs text-slate-500 dark:text-slate-500 text-center border-t border-slate-200 dark:border-slate-700">
                      {contrast && <span className="inline-block mr-2">🔵 High Contrast</span>}
                      {fontSize !== 100 && <span className="inline-block">🔤 {fontSize}%</span>}
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Language Toggle Quick Button */}
            <button
              onClick={() => {
                // This will be connected to your language toggle function
                if (window.toggleLanguage) window.toggleLanguage();
              }}
              className="ml-2 px-3 py-1.5 bg-slate-100 dark:bg-slate-800 rounded-full text-sm font-medium hover:bg-slate-200 dark:hover:bg-slate-700 transition-all border border-slate-200 dark:border-slate-700"
              aria-label="Toggle language"
            >
              {language === 'en' ? 'हिन्दी' : 'English'}
            </button>

            {/* Theme Toggle */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="ml-2 p-2.5 rounded-full bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition-all transform hover:scale-110 relative group"
              aria-label="Toggle theme"
            >
              {darkMode ? 
                <Sun className="w-5 h-5 text-amber-500" /> : 
                <Moon className="w-5 h-5 text-slate-700" />
              }
            </button>

            {/* CTA Button */}
            <Link
              to="/get-involved"
              className="ml-4 relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-amber-500 to-amber-600 rounded-full blur-lg group-hover:blur-xl transition-all opacity-75"></div>
              <div className="relative px-6 py-2.5 bg-gradient-to-r from-amber-500 to-amber-600 text-white rounded-full font-semibold hover:from-amber-600 hover:to-amber-700 transition-all transform hover:scale-105 flex items-center space-x-2">
                <span>{t('nav.getInvolved')}</span>
                <ChevronDown className="w-4 h-4 group-hover:rotate-180 transition-transform" />
              </div>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-3">
            {/* Language Toggle Mobile */}
            <button
              onClick={() => {
                if (window.toggleLanguage) window.toggleLanguage();
              }}
              className="px-2 py-1 bg-slate-100 dark:bg-slate-800 rounded-full text-xs font-medium"
            >
              {language === 'en' ? 'हिन्दी' : 'EN'}
            </button>

            {/* Accessibility Mobile */}
            <button
              onClick={() => setShowAccessibility(!showAccessibility)}
              className="p-2 rounded-full bg-slate-100 dark:bg-slate-800 relative"
            >
              <Accessibility className="w-5 h-5 text-slate-700 dark:text-slate-300" />
              {contrast && (
                <span className="absolute -top-1 -right-1 w-2 h-2 bg-amber-500 rounded-full animate-pulse"></span>
              )}
            </button>

            {/* Theme Toggle Mobile */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-full bg-slate-100 dark:bg-slate-800"
            >
              {darkMode ? 
                <Sun className="w-5 h-5 text-amber-500" /> : 
                <Moon className="w-5 h-5 text-slate-700" />
              }
            </button>

            {/* Menu Toggle */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 text-white"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
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
                {t(link.labelKey || `nav.${link.label.toLowerCase().replace(/\s+/g, '')}`)}
              </Link>
            ))}
            
            {/* Mobile Accessibility Options */}
            <div className="mt-4 p-4 bg-slate-50 dark:bg-slate-800 rounded-xl space-y-3">
              <p className="text-sm font-semibold text-slate-700 dark:text-slate-300 flex items-center">
                <Accessibility className="w-4 h-4 mr-2 text-amber-500" />
                {t('accessibility.title')}
              </p>
              
              <div className="flex items-center justify-between">
                <span className="text-sm text-slate-600 dark:text-slate-400">Text Size</span>
                <div className="flex items-center space-x-2">
                  <button onClick={decreaseFontSize} className="p-1.5 bg-white dark:bg-slate-700 rounded">
                    <MinusCircle className="w-4 h-4" />
                  </button>
                  <span className="text-sm w-12 text-center">{fontSize}%</span>
                  <button onClick={increaseFontSize} className="p-1.5 bg-white dark:bg-slate-700 rounded">
                    <PlusCircle className="w-4 h-4" />
                  </button>
                  <button onClick={resetFontSize} className="p-1.5 bg-white dark:bg-slate-700 rounded">
                    <RotateCcw className="w-4 h-4" />
                  </button>
                </div>
              </div>

              <button
                onClick={toggleContrast}
                className="w-full flex items-center justify-between p-2 bg-white dark:bg-slate-700 rounded"
              >
                <span className="text-sm">{t('accessibility.contrast')}</span>
                <div className={`w-8 h-4 rounded-full transition-colors ${
                  contrast ? 'bg-amber-500' : 'bg-slate-300'
                }`}>
                  <div className={`w-3 h-3 rounded-full bg-white transform transition-transform mt-0.5 ${
                    contrast ? 'translate-x-4' : 'translate-x-1'
                  }`}></div>
                </div>
              </button>
            </div>

            <Link
              to="/get-involved"
              onClick={() => setIsOpen(false)}
              className="block mt-4 bg-gradient-to-r from-amber-500 to-amber-600 text-white px-6 py-3 rounded-xl text-center font-semibold hover:from-amber-600 hover:to-amber-700 transition-all transform hover:scale-105 shadow-lg shadow-amber-500/30"
            >
              {t('nav.getInvolved')}
            </Link>
          </div>
        )}
      </nav>

      {/* Add CSS for animations */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.2s ease-out;
        }
      `}</style>
    </header>
  );
};

export default Header;