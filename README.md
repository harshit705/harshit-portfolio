# Harshit Agrawal - Portfolio

A high-performance, personal developer portfolio showcasing software engineering and AI systems pipelines. Built using modern web technologies with fluid animations, layout section isolation, and responsive styling.

---

## 🛠️ Tech Stack

- **Core**: React 18, TypeScript, Tailwind CSS 3.4
- **Animations**: Framer Motion 10+
- **Build Tool**: Vite 5.4
- **Icons**: Lucide React
- **Hosting**: Vercel

---

## ⚡ Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Development Server
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### 3. Verify Code & Type Safety
```bash
npm run typecheck
```

### 4. Build for Production
```bash
npm run build
```

---

## 🎨 Customization

All personal information, experiences, projects, and education data are managed in a single file:
- 📄 Update data: [constants.ts](file:///C:/Users/m40T/Desktop/Harshit%20Projects/harshit-portfolio/src/utils/constants.ts)

### Contact Form (EmailJS)
To configure your contact form, update the credentials in [Contact.tsx](file:///C:/Users/m40T/Desktop/Harshit%20Projects/harshit-portfolio/src/components/sections/Contact.tsx):
```typescript
emailjs.sendForm(
  'your_service_id',
  'your_template_id',
  formRef.current,
  'your_public_key'
)
```

---

## 🚀 Deployment

The site is optimized for deployment to Vercel. 
Push your repository to GitHub, import it into [Vercel](https://vercel.com), and the build settings will be automatically detected.
