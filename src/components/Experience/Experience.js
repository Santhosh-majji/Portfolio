import React, { useState, useRef } from "react";
import { motion, useScroll, useInView } from "framer-motion";
import "./Experience.css";

// Simple SVG icons
const BriefcaseIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M10 2L14 6V8H20C21.11 8 22 8.89 22 10V19C22 20.11 21.11 21 20 21H4C2.89 21 2 20.11 2 19V10C2 8.89 2.89 8 4 8H10V2M12 4V6H10V8H14V6H12V4Z"/>
  </svg>
);

const CalendarIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
    <path d="M19 3H18V1H16V3H8V1H6V3H5C3.89 3 3 3.9 3 5V19C3 20.1 3.89 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3M19 19H5V8H19V19Z"/>
  </svg>
);

const LocationIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C8.13 2 5 5.13 5 9C5 14.25 12 22 12 22S19 14.25 19 9C19 5.13 15.87 2 12 2M12 11.5C10.62 11.5 9.5 10.38 9.5 9S10.62 6.5 12 6.5 14.5 7.62 14.5 9 13.38 11.5 12 11.5Z"/>
  </svg>
);

const ChevronDownIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M7.41 8.58L12 13.17L16.59 8.58L18 10L12 16L6 10L7.41 8.58Z"/>
  </svg>
);

// Map for tech stack icons - using proper names
const techIcons = {
  "React.js": "React",
  "React": "React",
  "TypeScript": "TS",
  "Next.js": "Next",
  "JavaScript": "JS",
  "HTML5": "HTML",
  "CSS3": "CSS",
  "Tailwind CSS": "Tailwind",
  "Material-UI": "MUI",
  "Redux": "Redux",
  "Context API": "Context",
  "REST APIs": "REST",
  "MySQL": "MySQL",
  "Git": "Git",
  "Webpack": "Webpack",
  "Framer Motion": "Framer",
  "GSAP": "GSAP",
  "SEO": "SEO",
  "Responsive Design": "RWD",
  "Performance Optimization": "Perf"
};

const ExperienceCard = ({ job, index }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: false, amount: 0.2 });
  
  // Determine if card should be on left or right side of timeline
  const isEven = index % 2 === 0;
  
  // Animation variants
  const cardVariants = {
    hidden: { 
      opacity: 0, 
      x: isEven ? -30 : 30,
      y: 20
    },
    visible: { 
      opacity: 1, 
      x: 0,
      y: 0,
      transition: { 
        duration: 0.5, 
        ease: [0.25, 0.1, 0.25, 1],
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const contentVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <motion.div 
      ref={cardRef}
      className={`experience-card ${isEven ? 'card-left' : 'card-right'} ${isExpanded ? 'expanded' : ''}`}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={cardVariants}
      whileHover={{ scale: 1.01 }}
      transition={{ scale: { duration: 0.3 } }}
    >
      {/* Timeline connector and dot */}
      <div className="timeline-marker">
        <div className="timeline-dot">
          <BriefcaseIcon />
        </div>
      </div>
      
      {/* Card content */}
      <motion.div 
        className="card-content"
        variants={contentVariants}
      >
        {/* Card header with company and position */}
        <motion.div className="card-header" variants={itemVariants}>
          <div className="position-title">{job.position}</div>
          <div className="role-summary">{job.summary}</div>
          <div className="company-name">{job.company}</div>
          <div className="company-description">{job.companyDesc}</div>
        </motion.div>
        
        {/* Card metadata */}
        <motion.div className="card-meta" variants={itemVariants}>
          <div className="meta-item">
            <CalendarIcon />
            <span>{job.year}</span>
          </div>
          <div className="meta-item">
            <LocationIcon />
            <span>{job.location}</span>
          </div>
        </motion.div>
        
        {/* Tech stack preview (only show 5 when collapsed) */}
        <motion.div className="tech-stack-preview" variants={itemVariants}>
          <div className="tech-icons-preview">
            {job.skills.slice(0, 5).map((skill, i) => (
              <motion.div 
                key={i} 
                className="tech-icon"
                whileHover={{ 
                  scale: 1.2,
                  y: -5,
                  transition: { type: "spring", stiffness: 300 }
                }}
                title={skill}
              >
                {techIcons[skill] || skill}
              </motion.div>
            ))}
            {job.skills.length > 5 && !isExpanded && (
              <div className="more-tech">+{job.skills.length - 5}</div>
            )}
          </div>
        </motion.div>
        
        {/* Expandable content */}
        <motion.div 
          className="expandable-content"
          initial={{ height: 0, opacity: 0 }}
          animate={{ 
            height: isExpanded ? "auto" : 0,
            opacity: isExpanded ? 1 : 0,
            marginTop: isExpanded ? "1rem" : 0
          }}
          transition={{ duration: 0.3 }}
        >
          {/* Full tech stack */}
          {job.skills.length > 5 && (
            <motion.div className="tech-stack" variants={itemVariants}>
              <h4>Technologies</h4>
              <div className="tech-icons">
                {job.skills.map((skill, i) => (
                  <motion.div 
                    key={i} 
                    className="tech-icon"
                    whileHover={{ 
                      scale: 1.2,
                      y: -5,
                      transition: { type: "spring", stiffness: 300 }
                    }}
                    title={skill}
                  >
                    {techIcons[skill] || skill}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
          
          {/* Key achievements */}
          <motion.div className="achievements" variants={itemVariants}>
            <h4>Key Achievements</h4>
            <ul>
              {job.accomplishments.map((item, i) => (
                <motion.li 
                  key={i}
                  variants={itemVariants}
                  whileHover={{ x: 5 }}
                >
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </motion.div>
        
        {/* Toggle button */}
        <button className="toggle-button" onClick={toggleExpand}>
          <span>{isExpanded ? "Show Less" : "Show More"}</span>
          <motion.div
            animate={{ rotate: isExpanded ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <ChevronDownIcon />
          </motion.div>
        </button>
      </motion.div>
      
      {/* Decorative blob */}
      <div className="blob-decoration"></div>
    </motion.div>
  );
};

const Experience = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.1 });
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const jobs = [
    {
      year: "2022 - 2025",
      position: "Junior Software Developer",
      summary: "Building modern web applications with React.js and Material-UI",
      company: "Yatayati Info Solutions Pvt Ltd",
      companyDesc: "Developed comprehensive HRMS and PMIT platforms with modern React architecture. Focused on creating responsive dashboards and SEO-optimized web applications that significantly improved user engagement and operational efficiency.",
      location: "Hyderabad, India",
      accomplishments: [
        "Developed comprehensive HRMS using React.js and Material-UI with employee attendance, leave tracking, and performance management modules",
        "Led PMIT platform development, streamlining B2B and B2C interactions with responsive dashboard that increased operational efficiency by 30%",
        "Designed SEO-optimized responsive web pages that improved user engagement by 50% through modern UI/UX implementations",
        "Enhanced client satisfaction by 40% through innovative software solutions and cross-functional team collaboration",
        "Implemented real-time data visualization dashboards using Chart.js and D3.js for business analytics",
        "Optimized application performance resulting in 25% faster load times and improved user experience"
      ],
      skills: ["React.js", "JavaScript", "Material-UI", "Redux", "HTML5", "CSS3", "REST APIs", "MySQL", "Git", "Responsive Design", "SEO"]
    },
    {
      year: "2025 - Present",
      position: "Frontend Developer",
      summary: "Creating high-performance React applications with advanced animations",
      company: "Framkrate",
      companyDesc: "Leading frontend development with modern React ecosystem and advanced animation libraries. Building scalable component libraries and mentoring development teams while implementing cutting-edge UI/UX solutions.",
      location: "Visakhapatnam, India",
      accomplishments: [
        "Developing high-performance web applications using React, Redux, and Context API with 60% improved loading speeds",
        "Implementing advanced animations and interactive UI components with Framer Motion and GSAP for enhanced user engagement",
        "Leading migration of legacy applications to modern React ecosystem, resulting in 35% improvement in code maintainability",
        "Collaborating with UX designers to create intuitive, accessible interfaces that increased user satisfaction scores by 45%",
        "Building reusable component libraries and design systems for consistent UI across multiple projects",
        "Mentoring junior developers and conducting code reviews to maintain high code quality standards"
      ],
      skills: ["React", "TypeScript", "Next.js", "JavaScript", "Material-UI", "Tailwind CSS", "Redux", "Context API", "Framer Motion", "GSAP", "Webpack", "Performance Optimization"]
    }
  ];

  return (
    <section id="experience" className="experience-section" ref={sectionRef}>
      {/* Background elements */}
      <div className="bg-blob blob-1"></div>
      <div className="bg-blob blob-2"></div>
      <div className="bg-blob blob-3"></div>
      
      <div className="experience-container">
        {/* Section header */}
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: -30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -30 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
        >
          <motion.h2 
            className="section-title"
            initial={{ opacity: 0, y: -20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Work Experience
          </motion.h2>
          <motion.div 
            className="title-underline"
            initial={{ width: 0 }}
            animate={isInView ? { width: "80px" } : { width: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          />
        </motion.div>
        
        {/* Timeline container */}
        <div className="timeline-container">
          {/* Central timeline line */}
          <motion.div 
            className="timeline-line"
            initial={{ height: 0 }}
            animate={isInView ? { height: "100%" } : { height: 0 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          />
          
          {/* Experience cards */}
          <div className="timeline-cards">
            {jobs.map((job, index) => (
              <ExperienceCard 
                key={index}
                job={job} 
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;