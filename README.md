# Chirag Koyande - Portfolio Website

> **Builder + Breaker** | Full-Stack Developer × Security Engineer

A modern, cyberpunk-themed personal portfolio built with React, TypeScript, and Tailwind CSS.

---

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

---

## 📁 Project Structure

```
chirag-portfolio-web/
│
├── 📄 index.html          # Entry HTML with meta tags, fonts, and Tailwind config
├── 📄 index.tsx           # React entry point
├── 📄 App.tsx             # Main app component with routing logic
├── 📄 index.css           # Global styles and animations
│
├── 📄 constants.ts        # App-wide constants (social links, projects, certifications)
├── 📄 types.ts            # TypeScript type definitions
│
├── 📁 components/         # Reusable UI Components
│   ├── 📁 Navbar/         # Navigation (Desktop + Mobile Bottom Nav)
│   │   ├── index.tsx      # Main navbar wrapper
│   │   ├── DesktopNav.tsx # Floating glassmorphism navbar
│   │   └── MobileBottomNav.tsx # App-like bottom tab bar
│   │
│   ├── BackgroundGrid.tsx # Animated canvas background with code particles
│   ├── CustomCursor.tsx   # Custom cursor effect (desktop only)
│   ├── GlitchText.tsx     # Glitch animation text component
│   ├── ShatteredCard.tsx  # Interactive card with shatter effect
│   ├── NeuralCore.tsx     # 3D spinning core animation (Home page)
│   ├── SkillsSection.tsx  # Skills display with typing animation
│   ├── Testimonials.tsx   # Testimonials from LinkedIn connections
│   ├── Timeline.tsx       # Timeline component for experience
│   ├── Footer.tsx         # Site footer
│   ├── ScrollProgress.tsx # Scroll progress indicator
│   ├── PageTransition.tsx # Page transition wrapper
│   ├── GuiOverlay.tsx     # HUD-style overlay elements
│   └── BlogSection.tsx    # Blog/articles section
│
├── 📁 views/              # Page Components
│   ├── Home.tsx           # Landing page with hero section
│   ├── About.tsx          # About me, skills, certifications
│   ├── Projects.tsx       # Project showcase
│   ├── Experience.tsx     # Work experience timeline
│   ├── Contact.tsx        # Contact form (Web3Forms API)
│   ├── Resources.tsx      # Learning resources
│   ├── Admin.tsx          # Admin panel (protected)
│   └── NotFound.tsx       # 404 page
│
├── 📁 contexts/           # React Context Providers
│   └── ThemeContext.tsx   # Dark/Light theme management
│
├── 📁 hooks/              # Custom React Hooks
│   └── useScrollDirection.ts # Detect scroll direction for navbar
│
├── 📁 services/           # API Services
│   └── aiService.ts       # Gemini AI integration
│
├── 📁 public/             # Static Assets
│   ├── images/            # Images and profile photos
│   │   ├── chirag-profile.jpg
│   │   ├── testimonials/  # Testimonial profile photos
│   │   └── projects/      # Project screenshots
│   └── chiragk_cv.pdf     # Downloadable resume
│
└── 📄 vite.config.ts      # Vite configuration
```

---

## 🏗️ Architecture Overview

### **Component Categories**

| Category | Purpose | Examples |
|----------|---------|----------|
| **Layout** | App structure & navigation | `Navbar`, `Footer` |
| **Effects** | Visual enhancements | `BackgroundGrid`, `CustomCursor`, `GlitchText` |
| **Sections** | Page content blocks | `Testimonials`, `SkillsSection`, `Timeline` |
| **Common** | Reusable UI elements | `ShatteredCard`, `PageTransition` |

### **State Management**
- `useState` for local component state
- `Context API` for theme (dark/light mode)
- No external state library needed (simple app)

### **Routing**
- Custom view-based routing via `ViewState` enum
- No react-router (single-page app with section navigation)

---

## ✨ Key Features

### 1. **Cyberpunk Design System**
- Glassmorphism effects
- Neon green accent color (#22c55e)
- Matrix-style animated background
- Custom cursor with trail effect

### 2. **Mobile-First Responsive**
- Bottom tab bar navigation on mobile (app-like UX)
- Floating navbar on desktop
- Touch-optimized interactions
- Performance-optimized animations on mobile

### 3. **Contact Form (Web3Forms)**
- Direct email delivery (no mailto redirect)
- Encrypted-style loading animation
- Error handling with visual feedback

### 4. **Real Testimonials**
- LinkedIn connections with actual photos
- Professional endorsements from industry leaders

---

## 🛠️ Tech Stack

| Technology | Purpose |
|------------|---------|
| **React 19** | UI Framework |
| **TypeScript** | Type Safety |
| **Tailwind CSS** | Styling |
| **Vite** | Build Tool |
| **Web3Forms** | Contact Form API |
| **Lucide React** | Icons |

---

## 📝 How to Add/Modify Content

### Add a New Project
Edit `constants.ts`:
```typescript
export const PROJECTS_DATA = [
  {
    id: 'new-project',
    title: 'Project Name',
    description: 'Description...',
    tech: ['React', 'Node.js'],
    github: 'https://github.com/...',
    live: 'https://...',
  },
  // ...
];
```

### Add a New Testimonial
Edit `components/Testimonials.tsx`:
```typescript
const testimonials = [
  {
    id: '4',
    name: 'New Person',
    role: 'Title',
    company: 'Company',
    content: 'Testimonial text...',
    linkedinUrl: 'https://linkedin.com/in/...',
    avatar: '/images/testimonials/name.jpg',
  },
  // ...
];
```

### Add a New Page
1. Create `views/NewPage.tsx`
2. Add to `ViewState` enum in `types.ts`
3. Add case in `App.tsx` renderView()
4. Add nav item in `constants.ts` NAV_ITEMS

---

## 🚀 Deployment

### Vercel (Recommended)
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Manual Build
```bash
npm run build
# Output in /dist folder
```

---

## 📞 Contact

- **Email**: chiragk.dev@gmail.com
- **LinkedIn**: [linkedin.com/in/chiragkoyande](https://linkedin.com/in/chiragkoyande)
- **GitHub**: [github.com/chiragkoyande](https://github.com/chiragkoyande)

---

**Built with 💚 by Chirag Koyande**
