# Harshit Agrawal - Portfolio

A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS. Showcasing full-stack development and AI/ML projects with smooth animations and professional design.

## Features

- 🎨 **Modern Design** - Dark glassmorphism theme with smooth gradients
- ✨ **Smooth Animations** - Fade-in, float, and hover effects
- 📱 **Fully Responsive** - Works perfectly on all devices
- 🎯 **Active Navigation** - Highlights current section while scrolling
- 📧 **Contact Form** - Fully functional email integration
- 🔗 **Social Links** - GitHub, LinkedIn, and email connections
- ⚡ **Fast Performance** - Built with Vite for lightning-fast builds
- 🎭 **Smooth Scroll** - Native smooth scrolling throughout

## Tech Stack

- **Frontend**: React 18.3, TypeScript, Tailwind CSS 3.4
- **Build Tool**: Vite
- **Icons**: Lucide React
- **Animations**: Custom CSS with Tailwind

## Getting Started

### Prerequisites

- Node.js 16+ 
- npm or yarn

### Installation

```bash
# Clone or download the project
cd project

# Install dependencies
npm install

# Start development server
npm run dev
```

The site will open at `http://localhost:5173`

### Build for Production

```bash
npm run build
npm run preview
```

## Configuration

### Update Social Links

Edit `src/App.tsx` and update these URLs:

- **GitHub**: Line ~103 (hero button) and line ~443 (footer)
- **LinkedIn**: Line ~111 (hero button) and line ~450 (footer)
- **Email**: Line ~20 (contact form), line ~419 (contact section), and line ~457 (footer)

### Add Resume

1. Create your resume as PDF
2. Save it as `resume.pdf`
3. Place it in the `public/` folder
4. The download button will work automatically

### Customize Colors

Replace color names in `src/App.tsx`:
- `blue` → `purple`, `pink`, `green`, `orange`, etc.
- `cyan` → Your accent color

Update `tailwind.config.js` for custom animations and extensions.

## Project Structure


```
src/
  ├── abhyas/           # First section/folder (customize as needed)
  ├── psai/             # Second section/folder (customize as needed)
  ├── auto/             # Third section/folder (customize as needed)
  ├── App.tsx           # Main component with all sections
  ├── index.css         # Custom animations and styles
  └── main.tsx          # React entry point

public/
  └── resume.pdf        # Your resume (add this)

index.html             # HTML template
tailwind.config.js     # Tailwind CSS configuration
vite.config.ts         # Vite configuration
```

> **Note:** The folders are ordered as: `abhyas`, `psai`, then `auto` as requested. Add your files to each as needed.

## Sections

1. **Navigation** - Sticky header with active section highlighting
2. **Hero** - Introduction with call-to-action buttons
3. **Skills** - Technical skills with icons
4. **Projects** - Featured projects with descriptions
5. **Experience** - Professional experience and achievements
6. **Contact** - Contact form and social links
7. **Footer** - Social media and copyright

## Deployment

### Vercel (Recommended)

```bash
npm i -g vercel
vercel login
vercel
```

### Netlify

1. Push code to GitHub
2. Connect repo to Netlify
3. Build command: `npm run build`
4. Publish directory: `dist`

### GitHub Pages

1. Push to GitHub
2. Enable Pages in repository settings
3. Select `gh-pages` branch

## Performance

- ✅ GPU-accelerated animations
- ✅ Optimized CSS with Tailwind
- ✅ Lazy-loadable components
- ✅ Mobile-first responsive design
- ✅ Fast Vite build system

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers

## License

MIT License - Feel free to use this template for your portfolio

## Contact

- **Email**: aharshit042@gmail.com
- **GitHub**: https://github.com/harshit705
- **LinkedIn**: https://www.linkedin.com/in/harshit-agrawal-215146284/

---

Made with ❤️ using React & Tailwind CSS
