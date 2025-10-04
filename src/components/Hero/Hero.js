import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { gsap } from 'gsap';
import './Hero.css';
import resumePDF from '../../../src/resume/Santhoshkumar_Majji_ReactJS_Developer_Resume.pdf';

const Hero = () => {
  const heroRef = useRef(null);
  const [currentRole, setCurrentRole] = useState(0);
  const [showNotification, setShowNotification] = useState(false);
  const [showWelcome, setShowWelcome] = useState(true);
  const roles = ['Frontend Developer', 'React Developer', 'UI/UX Designer', 'Web Developer'];

  useEffect(() => {
    // Preload hero background image for faster loading
    const img = new Image();
    img.src = require('../../images/officpic.jpg');
    
    const tl = gsap.timeline({ delay: 0.3 });
    
    tl.fromTo('.hero-badge', 
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6, ease: "power2.out" }
    )
    .fromTo('.hero-title', 
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: "power2.out" },
      "-=0.4"
    )
    .fromTo('.animated-role', 
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6, ease: "power2.out" },
      "-=0.4"
    )
    .fromTo('.hero-description', 
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6, ease: "power2.out" },
      "-=0.4"
    )
    .fromTo('.hero-actions', 
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6, ease: "power2.out" },
      "-=0.3"
    );

    // Role animation
    const roleInterval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);

    // Welcome message timeout
    const welcomeTimeout = setTimeout(() => {
      setShowWelcome(false);
    }, 4000);

    return () => {
      clearInterval(roleInterval);
      clearTimeout(welcomeTimeout);
    };
  }, [roles.length]);



  return (
    <section className="hero" ref={heroRef}>
      <div className="hero-grain"></div>
      
      <div className="container">
        <div className="hero-visual"></div>
        <div className="hero-grid">
          <div className="hero-content">
            <motion.div 
              className="hero-badge"
              whileHover={{ scale: 1.05 }}
            >
              <span className="badge-dot"></span>
              Open to opportunities
            </motion.div>

            <h1 className="hero-title">
              Hi, I'm <span className="name-highlight">Santhosh</span>
            </h1>
            
            <div className="animated-role">
              <motion.span
                key={currentRole}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                {roles[currentRole]}
              </motion.span>
            </div>

            <p className="hero-description">
              Experienced Frontend Developer with 2+ years building responsive web applications using React, JavaScript, and modern frameworks. 
              Proven track record of delivering high-performance solutions that improve user engagement and business metrics.
            </p>

            <div className="hero-actions">
              <motion.button 
                className="btn-primary"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              >
                View my work
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </motion.button>
              
              <div className="download-btn-wrapper">
                <motion.a
                  href={resumePDF}
                  download="Santhosh_Majji_Resume.pdf"
                  onClick={() => {
                    setShowNotification(true);
                    setTimeout(() => setShowNotification(false), 3000);
                  }}
                  className="btn-secondary download-btn"
                  whileHover={{ 
                    scale: 1.05, 
                    y: -2,
                    boxShadow: "0 8px 25px rgba(212, 175, 55, 0.3)"
                  }}
                  whileTap={{ scale: 0.95 }}
                  aria-label="Download Resume"
                  target="_self"
                >
                  Download CV
                  <motion.svg 
                    width="16" 
                    height="16" 
                    viewBox="0 0 16 16" 
                    fill="none"
                    whileHover={{ y: 2 }}
                    transition={{ duration: 0.2 }}
                  >
                    <path d="M8 1V11M8 11L11 8M8 11L5 8M2 13H14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </motion.svg>
                </motion.a>
                <div className="tooltip">Click to download my resume (PDF)</div>
              </div>
            </div>
            
            <motion.div 
              className="hero-stats"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              <div className="stat-item">
                <span className="stat-number">2+</span>
                <span className="stat-label">Years Experience</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">4+</span>
                <span className="stat-label">Projects Delivered</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">2</span>
                <span className="stat-label">Companies</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      
      {/* Welcome Message */}
      <AnimatePresence>
        {showWelcome && (
          <motion.div
            className="welcome-message"
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -50, scale: 0.9 }}
            transition={{ duration: 0.5 }}
          >
            <div className="welcome-content">
              <span className="welcome-icon">👋</span>
              <span>Welcome to my Portfolio!</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* Download Notification */}
      <AnimatePresence>
        {showNotification && (
          <motion.div
            className="download-notification"
            initial={{ opacity: 0, x: 300 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 300 }}
            transition={{ duration: 0.3 }}
          >
            <div className="notification-content">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" fill="#22c55e"/>
              </svg>
              <span>Thanks for downloading my resume!</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Hero;