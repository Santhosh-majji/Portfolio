import React from 'react';
import { motion } from 'framer-motion';
import './Footer.css';
import logo from '../../images/mine.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialPlatforms = [
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/santhoshkumar-majji-68b294217',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
          <rect x="2" y="9" width="4" height="12"/>
          <circle cx="4" cy="4" r="2"/>
        </svg>
      )
    },
    {
      name: 'GitHub',
      url: 'https://github.com/santhu249',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
        </svg>
      )
    },
    {
      name: 'Twitter/X',
      url: 'https://x.com/Santhosh_249',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"/>
        </svg>
      )
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/santhu_249?igsh=MWtsMnQ5ODR0c2Jmag%3D%3D',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
        </svg>
      )
    },
    {
      name: 'Email',
      url: 'mailto:majjisanthosh2490@gmail.com',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
          <polyline points="22,6 12,13 2,6"/>
        </svg>
      )
    }
  ];

  const navigationItems = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Experience', href: '#experience' },
    { label: 'Contact', href: '#contact' }
  ];

  const expertiseAreas = [
    'Web Development',
    'React & Next.js',
    'UI/UX Design',
    'Performance Optimization',
    'Responsive Design'
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <footer className="footer-main">
      {/* Animated Background Elements */}
      <div className="footer-bg-grid"></div>
      <div className="footer-gradient-orb footer-gradient-orb-1"></div>
      <div className="footer-gradient-orb footer-gradient-orb-2"></div>

      <div className="footer-container">


        {/* Main Content Grid */}
        <motion.div 
          className="footer-content"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Brand Section */}
          <motion.div className="footer-brand-section" variants={itemVariants}>
            <div className="footer-brand">
              <div className="footer-logo">
                <img src={logo} alt="Santhosh Majji" className="footer-logo-img" />
              </div>
              <h3 className="footer-brand-name">Santhosh Majji</h3>
              <p className="footer-brand-title">Frontend Developer & UI Engineer</p>
              <p className="footer-brand-desc">
                Crafting pixel-perfect, high-performance web experiences with React, Next.js, and modern web technologies. Passionate about clean code and innovative design solutions.
              </p>
              
              {/* Social Links */}
              <div className="footer-social-section">
                <p className="footer-social-label">Connect With Me</p>
                <div className="footer-social">
                  {socialPlatforms.map((platform, index) => (
                    <motion.a
                      key={platform.name}
                      href={platform.url}
                      className="footer-social-btn"
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1, y: -3 }}
                      whileTap={{ scale: 0.95 }}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      aria-label={platform.name}
                    >
                      {platform.icon}
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div className="footer-links-section" variants={itemVariants}>
            <h4 className="footer-section-title">Quick Links</h4>
            <ul className="footer-links">
              {navigationItems.map((item, index) => (
                <motion.li 
                  key={item.label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <a href={item.href} className="footer-link">
                    <span className="footer-link-icon">→</span>
                    <span>{item.label}</span>
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div className="footer-links-section" variants={itemVariants}>
            <h4 className="footer-section-title">Expertise</h4>
            <ul className="footer-services-list">
              {expertiseAreas.map((area, index) => (
                <motion.li 
                  key={area}
                  className="footer-service-item"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="footer-service-icon">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                  </div>
                  <span className="footer-service">{area}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div className="footer-links-section" variants={itemVariants}>
            <h4 className="footer-section-title">Get in Touch</h4>
            <div className="footer-contact">
              <div className="footer-contact-item">
                <div className="footer-contact-icon">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                    <polyline points="22,6 12,13 2,6"/>
                  </svg>
                </div>
                <div className="footer-contact-details">
                  <span className="footer-contact-label">Email</span>
                  <a href="mailto:majjisanthosh2490@gmail.com" className="footer-contact-value">
                    majjisanthosh2490@gmail.com
                  </a>
                </div>
              </div>

              <div className="footer-contact-item">
                <div className="footer-contact-icon">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                    <circle cx="12" cy="10" r="3"/>
                  </svg>
                </div>
                <div className="footer-contact-details">
                  <span className="footer-contact-label">Location</span>
                  <span className="footer-contact-value">Visakhapatnam, India</span>
                </div>
              </div>

              <div className="footer-status-card">
                <div className="footer-status">
                  <span className="footer-status-dot"></span>
                  <span className="footer-status-text">Available for freelance</span>
                </div>
                <p className="footer-status-desc">Open to new opportunities</p>
              </div>
              
              <motion.a
                href="#contact"
                className="footer-cta-btn"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Let's Work Together</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </motion.a>
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom Section */}
        <motion.div 
          className="footer-bottom"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="footer-divider"></div>
          <div className="footer-bottom-content">
            <div className="footer-bottom-left">
              <p className="footer-copyright">
                © {currentYear} <span className="footer-copyright-name">Santhosh Majji</span>. All rights reserved.
              </p>
            </div>
            <div className="footer-bottom-right">
              <p className="footer-credits">
                Designed & Developed with 
                <motion.span 
                  className="footer-heart"
                  animate={{ scale: [1, 1.3, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                >
                  ❤️
                </motion.span> 
                in India
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;