import React from 'react';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import './Contact.css';

const Contact = () => {
  const { ref, isInView, fadeInUp } = useScrollAnimation();

  const contactMethods = [
    {
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
          <polyline points="22,6 12,13 2,6"/>
        </svg>
      ),
      title: 'Email Me',
      subtitle: 'Quick Response',
      value: 'majjisanthosh2490@gmail.com',
      link: 'mailto:majjisanthosh2490@gmail.com',
      type: 'email'
    },
    {
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
          <rect x="2" y="9" width="4" height="12"/>
          <circle cx="4" cy="4" r="2"/>
        </svg>
      ),
      title: 'LinkedIn',
      subtitle: 'Professional',
      value: 'Connect with me',
      link: 'https://www.linkedin.com/in/santhoshkumar-majji-68b294217',
      type: 'linkedin'
    },
    {
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
        </svg>
      ),
      title: 'GitHub',
      subtitle: 'Code Portfolio',
      value: 'View Projects',
      link: 'https://github.com/Santhosh-majji',
      type: 'github'
    },
    {
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"/>
        </svg>
      ),
      title: 'Twitter/X',
      subtitle: 'Follow Me',
      value: '@Santhosh_249',
      link: 'https://x.com/Santhosh_249',
      type: 'twitter'
    },
    {
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
        </svg>
      ),
      title: 'Instagram',
      subtitle: 'Visual Updates',
      value: '@santhu_249',
      link: 'https://www.instagram.com/santhu_249?igsh=MWtsMnQ5ODR0c2Jmag%3D%3D',
      type: 'instagram'
    }
  ];



  return (
    <motion.section id="contact" className="contact-main" ref={ref} {...fadeInUp}>
      <div className="contact-container">
        <div className="contact-hero">
          <motion.div 
            className="contact-hero-left"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
          >
            <motion.div 
              className="contact-badge"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <span className="contact-badge-dot"></span>
              <span>Available for New Opportunities</span>
            </motion.div>
            
            <motion.h1 
              className="contact-main-title"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <span className="contact-title-line">Let's Create</span>
              <span className="contact-title-line">Something Epic</span>
            </motion.h1>
            
            <motion.p 
              className="contact-subtitle"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              Ready to turn your vision into reality? I'm actively seeking exciting opportunities 
              to collaborate with innovative teams and forward-thinking companies.
            </motion.p>
            
            <motion.a 
              href="mailto:majjisanthosh2490@gmail.com"
              className="contact-cta-button"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.7 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Start a Project</span>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </motion.a>
          </motion.div>

          <motion.div 
            className="contact-hero-right"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.4, 0, 0.2, 1] }}
          >
            {contactMethods.map((method, index) => (
              <motion.div
                key={method.title}
                className="contact-method"
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{ 
                  duration: 0.6, 
                  delay: 0.6 + index * 0.1,
                  ease: [0.4, 0, 0.2, 1]
                }}
              >
                <motion.a
                  href={method.link}
                  target={method.type === 'email' || method.type === 'commitment' ? '_self' : '_blank'}
                  rel={method.type === 'email' || method.type === 'commitment' ? '' : 'noopener noreferrer'}
                  className="contact-method-link"
                  onClick={method.type === 'commitment' ? (e) => e.preventDefault() : undefined}
                  whileHover={{ 
                    scale: 1.02,
                    transition: { duration: 0.3 }
                  }}
                >
                  <div className={`contact-method-icon ${method.type}`}>
                    {method.icon}
                  </div>
                  
                  <div className="contact-method-info">
                    <span className="contact-method-subtitle">{method.subtitle}</span>
                    <h3 className="contact-method-title">{method.title}</h3>
                    <div className="contact-method-value">{method.value}</div>
                  </div>
                </motion.a>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <motion.div 
          className="contact-stats"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <motion.div 
            className="contact-stat"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <span className="contact-stat-number">24h</span>
            <span className="contact-stat-label">Response Time</span>
          </motion.div>
          
          <motion.div 
            className="contact-stat"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <span className="contact-stat-number">2+</span>
            <span className="contact-stat-label">Years Experience</span>
          </motion.div>
          
          <motion.div 
            className="contact-stat"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <span className="contact-stat-number">100%</span>
            <span className="contact-stat-label">Commitment</span>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Contact;