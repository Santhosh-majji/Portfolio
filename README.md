# Premium Portfolio Website

A modern, luxury portfolio website built with React, Framer Motion, and GSAP. Features premium aesthetics, smooth animations, and a clean modular architecture.

## 🚀 Features

- **Premium Design**: Luxury aesthetics with gold accents and dark theme
- **Smooth Animations**: GSAP and Framer Motion for buttery smooth interactions
- **Responsive Design**: Optimized for all devices and screen sizes
- **Modern Architecture**: Clean, modular component structure
- **Performance Optimized**: Fast loading and smooth scrolling
- **Accessibility**: WCAG compliant with proper focus management

## 🛠️ Technologies Used

- **React 19** - Latest React with modern features
- **Framer Motion** - Advanced animations and gestures
- **GSAP** - Professional-grade animations
- **CSS3** - Modern styling with custom properties
- **Inter Font** - Premium typography

## 📁 Project Structure

```
src/
├── components/
│   ├── Header/          # Navigation with glassmorphism
│   ├── Hero/            # Landing section with resume download
│   ├── About/           # About section with animated skill bars
│   ├── Skills/          # Skills showcase with categories
│   ├── Experience/      # Work experience timeline
│   ├── Projects/        # Portfolio showcase with hover effects
│   ├── Contact/         # Contact form with premium styling
│   ├── Footer/          # Footer with elegant layout
│   └── UI/              # Reusable UI components
├── App.js               # Main application component
├── App.css              # Global styles and CSS variables
└── index.js             # Application entry point

public/
├── images/              # Store your portfolio images here
├── resume/              # Store your resume PDF here
│   └── resume.pdf       # Your actual resume file
└── ...
```

## 🎨 Design System

### Colors
- **Primary Black**: `#0a0a0a`
- **Secondary Black**: `#1a1a1a`
- **Accent Gold**: `#d4af37`
- **Text White**: `#ffffff`
- **Text Gray**: `#a0a0a0`

### Typography
- **Font Family**: Inter
- **Weights**: 300, 400, 500, 600, 700, 800, 900

## 🚀 Getting Started

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Start Development Server**
   ```bash
   npm start
   ```

3. **Build for Production**
   ```bash
   npm run build
   ```

## 📱 Responsive Breakpoints

- **Desktop**: 1024px+
- **Tablet**: 768px - 1023px
- **Mobile**: 320px - 767px

## ✨ Key Components

### Header
- Fixed navigation with scroll effects
- Glassmorphism background
- Smooth hover animations

### Hero
- GSAP timeline animations
- Floating visual elements
- Premium call-to-action buttons

### About
- Personal introduction and statistics
- Animated counters and hover effects
- Responsive grid layout

### Skills
- Categorized skill showcase
- Animated skill tags with hover effects
- Frontend, Backend, and Tools sections

### Experience
- Professional timeline layout
- Animated experience cards
- Technology badges for each role

### Projects
- Staggered animations with Framer Motion
- Premium project cards
- Hover overlays and effects

### Contact
- Interactive contact form
- Animated contact information
- Social media links

## 🎯 Performance Features

- Optimized animations with `will-change`
- Lazy loading for better performance
- Smooth scrolling with `scroll-behavior`
- Efficient re-renders with React best practices

## 🔧 Customization

1. **Colors**: Update CSS variables in `App.css`
2. **Content**: Modify component data arrays
3. **Resume**: Replace `public/resume/resume.pdf` with your actual resume
4. **Images**: Add your portfolio images to `public/images/`
5. **Animations**: Adjust GSAP and Framer Motion parameters
6. **Layout**: Modify grid systems and spacing

## 📄 License

This project is licensed under the MIT License.

---

Built with ❤️ for premium digital experiences