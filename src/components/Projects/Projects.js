import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import './Projects.css';
import Ecom from '../../images/farm.png';
import hasini from '../../images/hasini.png';
import Hrms from '../../images/hrdash.png';
import pmit from '../../images/pmit.png';
const Projects = () => {
  const { ref, isInView, fadeInUp } = useScrollAnimation();
  const [filter, setFilter] = useState('All');

  const projects = [
    {
      id: 1,
      title: "Hasini Info Tech",
      subtitle: "Official Website",
      description: "Official website for IT training startup with modern animations and responsive design.",
      technologies: ["React.js", "CSS", "Framer Motion", "GSAP"],
      liveUrl: "https://hasiniinfotech.in/",
      githubUrl: "https://github.com/Santhosh-majji",
      status: "Live",
      featured: true,
      category: "Frontend",
      image: hasini
    },
    {
      id: 2,
      title: "E-Commerce Platform",
      subtitle: "User & Admin Management",
      description: "Full-stack eCommerce platform with separate user and admin interfaces, real-time search, cart management, and secure payment integration.",
      technologies: ["React.js", "Material-UI", "Axios", "REST APIs"],
      liveUrl: "https://ecommerce-demo.netlify.app/",
      githubUrl: "https://github.com/Santhosh-majji",
      status: "Live",
      featured: true,
      category: "Full-Stack",
      image: Ecom
    },
    {
      id: 3,
      title: "HRMS Dashboard",
      subtitle: "Human Resource System",
      description: "Comprehensive HRMS with attendance tracking, leave management, and performance evaluation dashboards.",
      technologies: ["React.js", "Node.js", "MySQL", "Chart.js"],
      liveUrl: "https://hrms-demo.netlify.app/",
      githubUrl: "https://github.com/Santhosh-majji",
      status: "Live",
      featured: false,
      category: "Full-Stack",
      image: Hrms
    },
    {
      id: 4,
      title: "PMIT Network",
      subtitle: "Business Platform",
      description: "B2B/B2C networking platform with pixel-perfect Figma to code conversion and modular architecture.",
      technologies: ["React.js", "Material-UI", "Figma to Code"],
      liveUrl: "https://pmit-demo.netlify.app/",
      githubUrl: "https://github.com/Santhosh-majji",
      status: "Live",
      featured: false,
      category: "Frontend",
      image: pmit
    }
  ];

  const categories = ['All', 'Frontend', 'Full-Stack'];
  const filteredProjects = filter === 'All' ? projects : projects.filter(p => p.category === filter);

  return (
    <motion.section id="projects" className="projects-main" ref={ref} {...fadeInUp}>
      <div className="projects-container">
        <motion.div 
          className="projects-header"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="projects-badge">
            <span className="projects-badge-dot"></span>
            <span>Portfolio Showcase</span>
          </div>
          <h2 className="projects-main-title">
            <span className="projects-title-line">Featured</span>
            <span className="projects-title-line gradient-text">Projects</span>
          </h2>
          <p className="projects-subtitle">
            Crafting digital experiences with cutting-edge technology and innovative design solutions
          </p>
          
          <div className="projects-filter">
            {categories.map((category) => (
              <button
                key={category}
                className={`filter-btn ${filter === category ? 'active' : ''}`}
                onClick={() => setFilter(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </motion.div>

        <div className="projects-grid">
          {filteredProjects.sort((a, b) => b.featured - a.featured).map((project, index) => (
            <motion.div
              key={project.id}
              className={`project-card ${project.featured ? 'featured' : ''}`}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
            >
              <div className="card-header">
                <div className="project-image">
                  <img src={project.image} alt={project.title} />
                  <div className="image-overlay">
                    <div className="overlay-content">
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="overlay-btn">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                          <polyline points="15,3 21,3 21,9"/>
                          <line x1="10" y1="14" x2="21" y2="3"/>
                        </svg>
                      </a>
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="overlay-btn">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
                        </svg>
                      </a>
                    </div>
                  </div>
                  {project.featured && <div className="featured-tag">★</div>}
                  <div className="status-badge">
                    <span className="status-dot"></span>
                    <span>{project.status}</span>
                  </div>
                </div>
              </div>
              
              <div className="card-content">
                <div className="project-info">
                  <span className="project-category">{project.category}</span>
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-subtitle">{project.subtitle}</p>
                  <p className="project-description">{project.description}</p>
                </div>
                
                <div className="project-tech">
                  {project.technologies.slice(0, 4).map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">{tech}</span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className="tech-more">+{project.technologies.length - 4}</span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="projects-cta"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <div className="cta-content">
            <h3>Ready to Start Your Project?</h3>
            <p>Let's collaborate and bring your vision to life with cutting-edge technology</p>
            <a href="#contact" className="cta-button">
              <span>Get In Touch</span>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </a>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Projects;