import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Header.css';
import logo from '../../images/mine.png';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [isDark, setIsDark] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const navItems = useMemo(() => [
    { 
      name: 'Home', 
      id: 'hero', 
      icon: (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
          <polyline points="9,22 9,12 15,12 15,22"/>
        </svg>
      )
    },
    { 
      name: 'About', 
      id: 'about', 
      icon: (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
          <circle cx="12" cy="7" r="4"/>
        </svg>
      )
    },
    { 
      name: 'Skills', 
      id: 'skills', 
      icon: (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <polygon points="13,2 3,14 12,14 11,22 21,10 12,10"/>
        </svg>
      )
    },
    { 
      name: 'Experience', 
      id: 'experience', 
      icon: (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
          <line x1="8" y1="21" x2="16" y2="21"/>
          <line x1="12" y1="17" x2="12" y2="21"/>
        </svg>
      )
    },
    { 
      name: 'Projects', 
      id: 'projects', 
      icon: (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/>
          <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
        </svg>
      )
    },
    { 
      name: 'Contact', 
      id: 'contact', 
      icon: (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
          <polyline points="22,6 12,13 2,6"/>
        </svg>
      )
    }
  ], []);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Header visibility logic
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      setLastScrollY(currentScrollY);
      
      // Scrolled state
      setIsScrolled(currentScrollY > 20);
      
      // Active section detection
      const sections = navItems.map(item => document.getElementById(item.id));
      const scrollPos = currentScrollY + 100;
      
      sections.forEach((section, index) => {
        if (section && scrollPos >= section.offsetTop && scrollPos < section.offsetTop + section.offsetHeight) {
          setActiveSection(navItems[index].id);
        }
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY, navItems]);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light');
  }, [isDark]);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  return (
    <AnimatePresence>
      <motion.header 
        className={`header-main ${isScrolled ? 'header-scrolled' : ''} ${!isVisible ? 'header-hidden' : ''}`}
        initial={{ y: -100, opacity: 0 }}
        animate={{ 
          y: isVisible ? 0 : -100, 
          opacity: isVisible ? 1 : 0 
        }}
        transition={{ 
          duration: 0.3, 
          type: "spring", 
          stiffness: 100 
        }}
      >
        {/* Background blur effect */}
        <div className="header-backdrop" />
        
        {/* Progress indicator */}
        <motion.div 
          className="header-progress"
          style={{
            scaleX: Math.min(window.scrollY / (document.documentElement.scrollHeight - window.innerHeight), 1)
          }}
        />
        
        <div className="container">
          <div className="header-wrapper">
            {/* Enhanced Logo */}
            <motion.div 
              className="header-logo"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection('hero')}
            >
              <div className="logo-container">
                <div className="logo-icon">
                  <img src={logo} alt="Santhosh" />
                </div>
                <div className="logo-text">
                  <span className="logo-name">Santhosh</span>
                  <span className="logo-title">Frontend Dev</span>
                </div>
              </div>
            </motion.div>
            
            <div className="header-nav-container">
              {/* Enhanced Navigation */}
              <nav className={`header-nav ${isMobileMenuOpen ? 'header-nav-open' : ''}`}>
                <div className="nav-background" />
                {navItems.map((item, index) => (
                  <motion.button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`header-nav-link ${activeSection === item.id ? 'header-nav-active' : ''}`}
                    whileHover={{ 
                      y: -3,
                      scale: 1.05
                    }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <span className="header-nav-icon">{item.icon}</span>
                    <span className="header-nav-text">{item.name}</span>
                    {activeSection === item.id && (
                      <motion.div
                        className="nav-indicator"
                        layoutId="activeIndicator"
                        transition={{
                          type: "spring",
                          stiffness: 300,
                          damping: 30
                        }}
                      />
                    )}
                  </motion.button>
                ))}
              </nav>

              {/* Enhanced Actions */}
              <div className="header-actions">
                {/* Theme Toggle */}
                <div className="theme-toggle-wrapper">
                  <motion.button 
                    className="header-theme-toggle"
                    onClick={() => setIsDark(!isDark)}
                    whileHover={{ scale: 1.1, rotate: 180 }}
                    whileTap={{ scale: 0.9 }}
                    aria-label="Toggle theme"
                  >
                    <div className="theme-toggle-container">
                      <motion.div 
                        className="theme-icon"
                        animate={{ rotate: isDark ? 0 : 180 }}
                        transition={{ duration: 0.5 }}
                      >
                        {isDark ? (
                          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
                          </svg>
                        ) : (
                          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <circle cx="12" cy="12" r="5"/>
                            <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/>
                          </svg>
                        )}
                      </motion.div>
                    </div>
                  </motion.button>
                  <div className="theme-tooltip">{isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}</div>
                </div>

                {/* CTA Button */}
                <motion.a
                  href="#contact"
                  className="header-cta-btn"
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: "0 8px 25px rgba(212, 175, 55, 0.3)"
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span>Let's Talk</span>
                  <div className="cta-icon">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
                    </svg>
                  </div>
                </motion.a>

                {/* Mobile Menu Toggle */}
                <motion.button 
                  className="header-mobile-toggle"
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  whileTap={{ scale: 0.9 }}
                  aria-label="Toggle menu"
                >
                  <div className={`hamburger ${isMobileMenuOpen ? 'hamburger-open' : ''}`}>
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </motion.button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              className="mobile-overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
            />
          )}
        </AnimatePresence>
      </motion.header>
    </AnimatePresence>
  );
};

export default Header;