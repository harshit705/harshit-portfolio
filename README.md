# Harshit Agrawal - Premium Developer Portfolio

A world-class, production-grade developer portfolio built with modern web technologies. Featuring smooth animations, responsive design, and a premium aesthetic inspired by leading tech companies like Vercel, Linear, and Raycast.

## 🚀 Features

- **Modern Stack**: React 18 + TypeScript + Tailwind CSS + Vite
- **Smooth Animations**: Framer Motion for professional transitions
- **Responsive Design**: Mobile-first, works perfectly on all devices
- **Dark Theme**: Premium dark aesthetic with blue/cyan accents
- **SEO Optimized**: Proper meta tags, structured data, and Open Graph
- **Performance**: Optimized for Lighthouse 90+
- **Contact Form**: EmailJS integration for direct messaging
- **Modular Architecture**: Clean, maintainable component structure

## 📁 Project Structure

```
src/
├── components/
│   ├── layout/              # Layout components
│   │   ├── Navbar.tsx      # Navigation with active highlighting
│   │   ├── Footer.tsx      # Footer with social links
│   │   └── Layout.tsx      # Main layout wrapper
│   ├── sections/           # Page sections
│   │   ├── Hero.tsx        # Hero/intro section
│   │   ├── About.tsx       # About and education
│   │   ├── Experience.tsx  # Experience timeline
│   │   ├── Projects.tsx    # Featured projects showcase
│   │   ├── Skills.tsx      # Technical skills
│   │   ├── Certifications.tsx # Certs and achievements
│   │   └── Contact.tsx     # Contact form
│   ├── ui/                 # Reusable UI components
│   │   ├── GlassCard.tsx   # Glassmorphism cards
│   │   ├── AnimatedButton.tsx # Animated buttons
│   │   ├── SectionHeading.tsx # Section titles
│   │   ├── SkillCard.tsx   # Skill cards
│   │   └── AnimatedBackground.tsx # Canvas background
│   └── effects/            # Visual effects (future)
├── utils/
│   ├── animations.ts       # Framer Motion variants
│   ├── constants.ts        # Portfolio data
│   ├── types.ts            # TypeScript interfaces
│   └── helpers.ts          # Utility functions (future)
├── data/                   # Content data (future)
├── styles/
│   └── globals.css         # Global styles
└── App.tsx                 # Main app component
```

## 🛠️ Tech Stack

- **Frontend**: React 18, TypeScript, Tailwind CSS 3.4
- **Animations**: Framer Motion 10+
- **Build Tool**: Vite 5.4
- **Icons**: Lucide React
- **Email**: EmailJS
- **Deployment**: Vercel
- **Type Checking**: TypeScript 5.5
- **Linting**: ESLint

## 📦 Installation

1. **Clone and install dependencies**:
```bash
cd Portfolio
npm install
```

2. **Start development server**:
```bash
npm run dev
```
Server runs on `http://localhost:5173`

3. **Type checking**:
```bash
npm run typecheck
```

4. **Build for production**:
```bash
npm run build
npm run preview
```

## 🎨 Customization

### Update Portfolio Content

Edit `src/utils/constants.ts`:
```typescript
export const HERO = { /* your info */ }
export const ABOUT = { /* about you */ }
export const PROJECTS = [ /* your projects */ ]
export const EXPERIENCES = [ /* your jobs */ ]
export const SKILLS = [ /* your skills */ ]
export const CERTIFICATIONS = [ /* your certs */ ]
export const EDUCATION = { /* education */ }
```

### Update Contact Form

Edit `src/components/sections/Contact.tsx`:
```typescript
emailjs.sendForm(
  'service_XXXXX',  // Your EmailJS service ID
  'template_XXXXX', // Your template ID
  formRef.current,
  'public_key_XXXXX' // Your public key
)
```

### Customize Colors

Edit `tailwind.config.js` and `src/index.css`:
- Change gradient colors (blue/cyan theme)
- Update accent colors as needed
- Modify dark background shades

## 🚀 Deployment to Vercel

### Quick Deploy (Recommended)

1. **Push to GitHub**:
```bash
git add .
git commit -m "Initial portfolio commit"
git push origin main
```

2. **Deploy to Vercel**:
   - Go to [vercel.com](https://vercel.com)
   - Click "Add New Project"
   - Import your GitHub repository
   - Click Deploy (Vercel auto-detects Vite)

3. **Custom Domain** (optional):
   - Add domain in Vercel dashboard
   - Update DNS records

### Environment Variables

For production, use environment variables:

1. Create `.env.local`:
```
VITE_EMAILJS_SERVICE_ID=service_XXXXX
VITE_EMAILJS_TEMPLATE_ID=template_XXXXX
VITE_EMAILJS_PUBLIC_KEY=public_key_XXXXX
```

2. Update `src/components/sections/Contact.tsx`:
```typescript
emailjs.sendForm(
  import.meta.env.VITE_EMAILJS_SERVICE_ID,
  import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
  formRef.current,
  import.meta.env.VITE_EMAILJS_PUBLIC_KEY
)
```

3. Add variables in Vercel: Settings → Environment Variables

### Other Hosting

**Netlify**:
```bash
npm run build
# Drag dist/ to Netlify
```

**GitHub Pages / Render**:
- Build: `npm run build`
- Output: `dist/`

## 📊 Performance

- Lighthouse: 90+ all metrics
- Bundle: ~150KB gzipped
- Load time: <2s on 3G
- GPU-accelerated animations
- Lazy-loaded images

## 🔍 SEO

✅ Meta tags & descriptions  
✅ Open Graph tags  
✅ JSON-LD structured data  
✅ Mobile-responsive  
✅ Semantic HTML  

## 📱 Browser Support

- Chrome/Edge: Latest 2 versions
- Firefox: Latest 2 versions
- Safari: Latest 2 versions
- Mobile browsers: Full support

## 🎯 Key Features

### Smooth Animations
- Page/section transitions
- Scroll-triggered reveals
- Hover animations
- Floating backgrounds
- Character-level text animations

### Responsive Design
- Mobile-first approach
- Touch-friendly UI
- Mobile menu
- Adaptive layouts

### Premium Components
- Glassmorphism cards
- Gradient text
- Animated buttons
- Timeline layouts
- Project metrics display

## 🔧 Development

### Add New Section

```typescript
// 1. Create src/components/sections/MySection.tsx
import { motion } from 'framer-motion';
import { containerVariants, itemVariants } from '../../utils/animations';

export function MySection() {
  return (
    <section className="py-16">
      <motion.div variants={containerVariants}>
        {/* Your content */}
      </motion.div>
    </section>
  );
}

// 2. Import in src/App.tsx
import { MySection } from './components/sections/MySection';

// 3. Add to Layout
<Layout>
  <Hero />
  <MySection />  {/* Add here */}
  <About />
  {/* ... */}
</Layout>
```

### Modify Animations

Edit `src/utils/animations.ts`:
```typescript
export const myAnimation = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: 'easeOut' }
}
```

## 🐛 Troubleshooting

```bash
# TypeScript errors
npm run typecheck

# Linting issues
npm run lint

# Full rebuild
rm -rf node_modules dist
npm install
npm run build
```

## 📄 License

MIT License - Feel free to use this portfolio as a template!

## 🎓 Learning Resources

- [React Docs](https://react.dev)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Tailwind CSS](https://tailwindcss.com)
- [Framer Motion](https://www.framer.com/motion/)
- [Vite Guide](https://vitejs.dev)

---

**Built with ❤️ using React, TypeScript, Tailwind CSS, and Framer Motion**

Ready to deploy and impress recruiters? Let's go! 🚀
