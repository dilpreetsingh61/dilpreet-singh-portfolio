# 💻 Personal Portfolio - Dilpreet Singh

A modern, responsive portfolio website showcasing my skills as a Full-Stack Developer with a focus on backend systems, DSA, and modern web technologies.

![Portfolio Preview](https://img.shields.io/badge/Status-Live-success?style=for-the-badge)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)

## ✨ Features

- **🎨 Modern Glassmorphism Design** - Beautiful glass effect UI with smooth animations
- **📱 Fully Responsive** - Optimized for all devices (mobile, tablet, desktop)
- **🔄 Auto-Updating LeetCode Stats** - Real-time problem-solving statistics
- **⚡ Fast & Lightweight** - No heavy frameworks, pure vanilla JavaScript
- **🌊 Smooth Animations** - Reveal animations using Intersection Observer API
- **🎯 Interactive Navigation** - Active state tracking and smooth scrolling
- **📧 Copy Email Feature** - One-click email copy with toast notification
- **🎭 Mobile Menu** - Smooth slide-in mobile navigation

## 🚀 Live Demo

**[View Live Portfolio →](https://dilpreetsingh61.github.io/dilpreet-singh-portfolio/)**  


## 📸 Screenshots

### Desktop View
![Desktop Screenshot](./assets/desktop-preview.png)  


### Mobile View
![Mobile Screenshot](./assets/mobile-preview.png)  


## 🛠️ Technologies Used

- **HTML5** - Semantic markup structure
- **CSS3** - Custom styles with modern features
- **JavaScript (ES6+)** - Dynamic functionality and API integration
- **Tailwind CSS** - Utility-first CSS framework via CDN
- **Font Awesome** - Icon library
- **LeetCode Stats API** - Auto-updating problem-solving statistics

## 📂 Project Structure

```
Portfolio/
│
├── index.html          # Main HTML file
├── styles.css          # Custom CSS styles
├── script.js           # JavaScript functionality
└── README.md           # Project documentation
```

## 🎯 Key Sections

1. **About** - Introduction and current focus areas
2. **Education** - Academic background with CGPA
3. **Skills** - Technical skills with proficiency indicators
4. **Projects** - Featured projects with live demos and GitHub links
5. **DSA** - LeetCode statistics (auto-updating)
6. **Contact** - Multiple ways to connect

## 🔧 Setup & Installation

### Option 1: Direct Use
Simply open `index.html` in your browser - no build process required!

### Option 2: Local Development Server
```bash
# Using Python
python -m http.server 8000

# Using Node.js http-server
npx http-server

# Using VS Code Live Server extension
# Right-click index.html → "Open with Live Server"
```

Then visit: `http://localhost:8000`

## 🎨 Customization Guide

### 1. Update Personal Information

**In `index.html`:**
- Replace name in navbar and hero section
- Update education details (lines ~250-290)
- Modify project details (lines ~360-550)
- Change contact information (footer section)

### 2. Update LeetCode Username

**In `script.js` (line ~120):**
```javascript
const username = 'your-leetcode-username'; // Change this
```

### 3. Modify Colors

**In `index.html` (Tailwind config, lines ~19-27):**
```javascript
tailwind.config = {
  theme: {
    extend: {
      colors: {
        bg: "#0b1120",      // Background color
        accent: "#38bdf8"    // Accent color (links, highlights)
      }
    }
  }
}
```

### 4. Add/Remove Sections

Each section has an `id` attribute. Update navigation links in the navbar to match any new sections you add.

## 📱 Deployment Options

### GitHub Pages (Recommended)
1. Create a GitHub repository
2. Push your code
3. Go to Settings → Pages
4. Select branch `main` and folder `/root`
5. Your site will be live at `https://username.github.io/repository-name`

### Netlify
1. Drag and drop your folder to [Netlify](https://app.netlify.com/)
2. Your site is live instantly with a custom URL

### Vercel
```bash
npm i -g vercel
vercel
```

## ⚡ Performance Features

- ✅ Lazy loading with Intersection Observer
- ✅ Optimized animations with CSS transforms
- ✅ Minimal JavaScript bundle (< 5KB)
- ✅ CDN-loaded external libraries
- ✅ Efficient DOM manipulation
- ✅ Responsive images and icons

## 🐛 Known Issues & Solutions

### LeetCode Stats Not Updating?
- Check browser console for errors (F12)
- Verify your LeetCode username in `script.js`
- The API might be temporarily down (stats will show fallback values)

### Mobile Menu Not Working?
- Clear browser cache
- Check that all JavaScript is loaded
- Ensure no ad blockers are interfering

## 🤝 Contributing

This is a personal portfolio, but if you:
- Find bugs → Open an issue
- Have suggestions → Open a discussion
- Want to use this template → Feel free to fork!

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 📬 Contact

- **Email:** dilpreetsinghtha382@gmail.com
- **LinkedIn:** [linkedin.com/in/dilpreet-singh-2b4b68259](https://linkedin.com/in/dilpreet-singh-2b4b68259)
- **GitHub:** [github.com/dilpreet61](https://github.com/dilpreet61)
- **LeetCode:** [leetcode.com/dilpreetsingh61](https://leetcode.com/dilpreetsingh61)

## 💡 Credits & Inspiration

- Design inspiration from modern portfolio trends
- Glassmorphism effects from [glassmorphism.com](https://glassmorphism.com/)
- Icons by [Font Awesome](https://fontawesome.com/)
- CSS framework by [Tailwind CSS](https://tailwindcss.com/)

---

<div align="center">
  <p>⭐ Star this repo if you found it helpful!</p>
  <p>Made with ❤️ by Dilpreet Singh</p>
  <p><sub>Last updated: February 2026</sub></p>
</div>
