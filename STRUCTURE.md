# 📁 Project Structure - Quick Reference

## Core Files
```
index.html      → Entry HTML (SEO meta, fonts, Tailwind)
index.tsx       → React entry point
App.tsx         → Main app with routing
index.css       → Global styles & animations
constants.ts    → All data (projects, links, certifications)
types.ts        → TypeScript definitions
```

## Components (components/)
```
📁 Navbar/
   ├── index.tsx           → Navbar wrapper
   ├── DesktopNav.tsx      → Floating glass navbar
   └── MobileBottomNav.tsx → Bottom tab bar (mobile)

BackgroundGrid.tsx  → Animated code particle background
CustomCursor.tsx    → Custom cursor (desktop)
GlitchText.tsx      → Glitch effect text
ShatteredCard.tsx   → Interactive card with shatter
NeuralCore.tsx      → 3D core animation
SkillsSection.tsx   → Skills with typing animation
Testimonials.tsx    → LinkedIn testimonials
Timeline.tsx        → Experience timeline
Footer.tsx          → Site footer
```

## Pages (views/)
```
Home.tsx        → Landing/Hero
About.tsx       → About + Skills + Certifications
Projects.tsx    → Project showcase
Experience.tsx  → Work experience
Contact.tsx     → Contact form (Web3Forms)
Resources.tsx   → Learning resources
Admin.tsx       → Admin panel
NotFound.tsx    → 404 page
```

## Other Folders
```
contexts/       → React contexts (ThemeContext)
hooks/          → Custom hooks (useScrollDirection)
services/       → API services (aiService)
public/         → Static assets (images, CV PDF)
```

## Adding Content

### New Project → Edit `constants.ts` → PROJECTS_DATA
### New Testimonial → Edit `components/Testimonials.tsx`
### New Page → Create in `views/` → Add to `types.ts` → Add to `App.tsx`
