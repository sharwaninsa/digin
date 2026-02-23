import React, { useState, useEffect, createContext } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
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
import NotFound from './pages/NotFound';
import ScrollToTop from './components/ScrollToTop';
import './index.css';

export const ThemeContext = createContext();


const routeTitles = {
  '/': 'Home | DIGIN - Dynamic Initiative for Grassroot Impact Network',
  '/about': 'About Us | DIGIN - Our Story & Mission',
  '/mission': 'Our Mission | DIGIN - Objectives & Impact Areas',
  '/gallery': 'Gallery | DIGIN - Moments of Impact',
  '/press-release': 'Press Releases | DIGIN - News & Updates',
  '/contact': 'Contact Us | DIGIN - Get in Touch',
  '/get-involved': 'Get Involved | DIGIN - Donate & Volunteer',
  '/privacy': 'Privacy Policy | DIGIN - Your Data Protection',
  '/terms': 'Terms of Service | DIGIN - Legal Information',
  '/sitemap': 'Sitemap | DIGIN - Website Navigation',
  '/faq': 'FAQ | DIGIN - Frequently Asked Questions',
  '/annual-reports': 'Annual Reports | DIGIN - Transparency & Accountability',
  '/blog': 'Blog | DIGIN - Stories of Impact',
  '/404': 'Page Not Found | DIGIN - Lost in Cyberspace'
};


const DynamicTitle = () => {
  const location = useLocation();
  
  useEffect(() => {
    const getTitle = () => {
 
      if (routeTitles[location.pathname]) {
        return routeTitles[location.pathname];
      }
      
  
      if (location.pathname.startsWith('/blog/')) {
        return 'Blog Post | DIGIN - Stories of Impact';
      }
      
     
      return routeTitles['/404'];
    };

    document.title = getTitle();
    
   
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.name = 'description';
      document.head.appendChild(metaDescription);
    }
    
   
    const descriptions = {
      '/': 'DIGIN (Dynamic Initiative for Grassroot Impact Network) is a public charitable trust working towards creating sustainable social impact through digital media, education, and community engagement.',
      '/about': 'Learn about DIGIN\'s journey, vision, mission, and the dedicated team working to create positive change in communities across India.',
      '/mission': 'Discover DIGIN\'s comprehensive objectives in digital literacy, cultural preservation, community development, and social welfare.',
      '/gallery': 'Browse through our photo gallery showcasing impactful moments, events, and community engagement activities.',
      '/press-release': 'Stay updated with the latest news, press releases, and media coverage about DIGIN\'s initiatives and achievements.',
      '/contact': 'Get in touch with DIGIN. We\'re here to answer your questions and discuss collaboration opportunities.',
      '/get-involved': 'Support DIGIN through donations, volunteering, or partnerships. Every contribution helps create lasting impact.',
      '/privacy': 'Read DIGIN\'s privacy policy to understand how we collect, use, and protect your personal information.',
      '/terms': 'Review DIGIN\'s terms of service and conditions for using our website and services.',
      '/sitemap': 'Navigate through all pages and resources available on the DIGIN website with our comprehensive sitemap.',
      '/faq': 'Find answers to frequently asked questions about DIGIN, donations, volunteering, programs, and partnerships.',
      '/annual-reports': 'Access DIGIN\'s annual reports, financial statements, and impact assessments for complete transparency.',
      '/blog': 'Read inspiring stories, updates, and insights from DIGIN\'s work in communities across India.',
      '/404': 'The page you\'re looking for doesn\'t exist. Navigate back to our homepage or explore other sections.'
    };
    
    metaDescription.content = descriptions[location.pathname] || descriptions['/404'];
    
    
    let ogTitle = document.querySelector('meta[property="og:title"]');
    let ogDescription = document.querySelector('meta[property="og:description"]');
    let ogUrl = document.querySelector('meta[property="og:url"]');
    
    if (!ogTitle) {
      ogTitle = document.createElement('meta');
      ogTitle.setAttribute('property', 'og:title');
      document.head.appendChild(ogTitle);
    }
    
    if (!ogDescription) {
      ogDescription = document.createElement('meta');
      ogDescription.setAttribute('property', 'og:description');
      document.head.appendChild(ogDescription);
    }
    
    if (!ogUrl) {
      ogUrl = document.createElement('meta');
      ogUrl.setAttribute('property', 'og:url');
      document.head.appendChild(ogUrl);
    }
    
    ogTitle.content = getTitle();
    ogDescription.content = descriptions[location.pathname] || descriptions['/404'];
    ogUrl.content = `https://digin.org${location.pathname}`;
    
  }, [location]);

  return null;
};

function AppContent() {
  const [darkMode, setDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme ? savedTheme === 'dark' : false;
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  return (
    <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
      <DynamicTitle />
      <ScrollToTop />
      <div className={`min-h-screen bg-gradient-to-br from-slate-50 via-white to-amber-50 dark:from-slate-900 dark:via-slate-800 dark:to-amber-900/20 transition-all duration-700`}>
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
          
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </ThemeContext.Provider>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;