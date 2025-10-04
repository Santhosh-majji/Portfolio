import React from 'react';
import { motion } from 'framer-motion';
import profileImage from '../../images/hero.jpg';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import './About.css';

const About = () => {
  const { ref, fadeInUp, slideInLeft, slideInRight } = useScrollAnimation();
  
  return (
    <motion.section id="about" className="about-main" ref={ref} {...fadeInUp}>
      <div className="about-container">
        <motion.div 
          className="about-header"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="about-badge">
            <span className="about-badge-dot"></span>
            <span>Get to Know Me</span>
          </div>
          <h2 className="about-title">
            <span className="about-title-line">About</span>
            <span className="about-title-line gradient-text">Me</span>
          </h2>
        </motion.div>

        <div className="about-content">
          <motion.div 
            className="about-left"
            {...slideInLeft}
          >
            <div className="profile-image">
              <img src={profileImage} alt="Santhosh Majji" />
              <div className="image-glow"></div>
            </div>
            
            <div className="profile-info">
              <h3 className="profile-name">Santhosh Majji</h3>
              <p className="profile-role">Frontend Developer</p>
              <div className="profile-stats">
                <div className="stat">
                  <span className="stat-number">2+</span>
                  <span className="stat-label">Years Experience</span>
                </div>
                <div className="stat">
                  <span className="stat-number">2</span>
                  <span className="stat-label">Companies</span>
                </div>
              </div>
            </div>
            
            <div className="interests-section">
              <h4 className="interests-title">What I Enjoy</h4>
              <div className="interests-tags">
                <div className="interest-tag">
                  <span className="interest-emoji">🏏</span>
                  <span>Cricket</span>
                </div>
                <div className="interest-tag">
                  <span className="interest-emoji">🎵</span>
                  <span>Music</span>
                </div>
                <div className="interest-tag">
                  <span className="interest-emoji">✈️</span>
                  <span>Travel</span>
                </div>
                <div className="interest-tag">
                  <span className="interest-emoji">💪</span>
                  <span>Fitness</span>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            className="about-right"
            {...slideInRight}
          >
            <div className="about-text">
              <p className="about-intro">
                I'm a passionate <span className="highlight">Frontend Developer</span> who loves creating 
                beautiful, responsive, and user-friendly web applications. My journey in web development 
                started with curiosity and has grown into a deep passion for crafting digital experiences.
              </p>
              
              <p className="about-description">
                With expertise in <span className="highlight">React.js, Material-UI, and modern CSS</span>, 
                I specialize in building interactive interfaces that not only look great but also provide 
                seamless user experiences. I believe in writing clean, maintainable code and staying 
                updated with the latest web technologies.
              </p>
              
              <p className="about-passion">
                When I'm not coding, you'll find me exploring new technologies, contributing to open-source 
                projects, playing cricket, listening to music, or planning my next travel adventure. I'm always 
                excited to take on new challenges and collaborate on innovative projects.
              </p>
            </div>

            <div className="skills-section">
              <h4 className="skills-title">What I Do Best</h4>
              <div className="skills-tags">
                <div className="skill-tag">
                  <span className="skill-emoji">⚛️</span>
                  <span>React.js</span>
                </div>
                <div className="skill-tag">
                  <span className="skill-emoji">📱</span>
                  <span>Responsive Design</span>
                </div>
                <div className="skill-tag">
                  <span className="skill-emoji">🎨</span>
                  <span>UI/UX</span>
                </div>
                <div className="skill-tag">
                  <span className="skill-emoji">⚡</span>
                  <span>JavaScript</span>
                </div>
                <div className="skill-tag">
                  <span className="skill-emoji">🛠️</span>
                  <span>Modern Tools</span>
                </div>
                <div className="skill-tag">
                  <span className="skill-emoji">💻</span>
                  <span>CSS3</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;