// App.jsx - Updated with better dark mode handling
import React, { useState, useEffect, createContext } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import OurMission from './pages/OurMission';
import Gallery from './pages/Gallery';
import PressRelease from './pages/PressRelease';
import ContactUs from './pages/ContactUs';
import GetInvolved from './pages/GetInvolved';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import Sitemap from './pages/Sitemap';
import FAQ from './pages/FAQ';
import AnnualReports from './pages/AnnualReports';
import Blog from './pages/Blog';
import ScrollToTop from './components/ScrollToTop';
import './index.css';
import NotFound from './pages/NotFound';

export const ThemeContext = createContext();

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    // Check localStorage first
    const savedTheme = localStorage.getItem('theme');
    // Check system preference if no saved theme
    if (savedTheme) {
      return savedTheme === 'dark';
    }
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  useEffect(() => {
    // Update class on document element
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  // Listen for system theme changes
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (e) => {
      // Only update if there's no saved preference
      if (!localStorage.getItem('theme')) {
        setDarkMode(e.matches);
      }
    };
    
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  return (
    <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
      <Router>
        <ScrollToTop />
        <div className={`min-h-screen bg-white dark:bg-slate-900 transition-colors duration-300`}>
          <Header />
          <main className="pt-24">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<AboutUs />} />
              <Route path="/mission" element={<OurMission />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/press-release" element={<PressRelease />} />
              <Route path="/contact" element={<ContactUs />} />
              <Route path="/get-involved" element={<GetInvolved />} />
              <Route path="/privacy" element={<Privacy />} />
              <Route path="/terms" element={<Terms />} />
              <Route path="/sitemap" element={<Sitemap />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/annual-reports" element={<AnnualReports />} />
              <Route path="/blog" element={<Blog />} />
              <Route path='*' element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </ThemeContext.Provider>
  );
}

export default App;