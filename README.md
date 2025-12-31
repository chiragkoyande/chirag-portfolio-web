<div align="center">

# 🛡️ CHIRAG KOYANDE | Builder + Breaker

### A Cyberpunk-Themed Developer Portfolio

[![Live Demo](https://img.shields.io/badge/🌐_Live_Demo-Click_Here-00ff00?style=for-the-badge)](https://chirag-portfolio-web.vercel.app)
[![GitHub](https://img.shields.io/badge/GitHub-chiragkoyande-181717?style=for-the-badge&logo=github)](https://github.com/chiragkoyande)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-chiragkoyande-0A66C2?style=for-the-badge&logo=linkedin)](https://www.linkedin.com/in/chiragkoyande)

<img src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" alt="Portfolio Banner" width="100%"/>

</div>

---

## 📋 Overview

A **futuristic, cyberpunk-styled** developer portfolio designed to showcase projects, certifications, and skills with an immersive hacker/security aesthetic. Built with React, TypeScript, and Vite, featuring interactive terminal commands, glitch effects, and AI-powered chat.

---

## ✨ Features

| Feature | Description |
|---------|-------------|
| 🖥️ **Interactive Terminal** | Type commands like `help`, `projects`, `about`, `contact` to navigate |
| 🤖 **AI-Powered Chat** | Integrated Gemini AI for intelligent conversations about the portfolio |
| 🎮 **Cyberpunk UI** | Glitch effects, scanlines, neon colors, and shattered card animations |
| 📁 **Project Showcase** | Dynamic project cards with security status indicators and tech stacks |
| 📜 **Certifications Display** | Professional credentials with level badges |
| 📄 **Resume Download** | One-click CV download functionality |
| 🔗 **Resource Hub** | Curated security/dev resources with admin management |
| 📱 **Fully Responsive** | Optimized for desktop, tablet, and mobile devices |

---

## 🏗️ Architecture

```
┌─────────────────────────────────────────────────────────────────┐
│                         FRONTEND (React + TypeScript)           │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────────────────┐  │
│  │   App.tsx   │  │  Terminal   │  │      Views              │  │
│  │  (Router)   │──│  Component  │──│  - Home.tsx             │  │
│  │             │  │             │  │  - Projects.tsx         │  │
│  └─────────────┘  └─────────────┘  │  - About.tsx            │  │
│         │                          │  - Contact.tsx          │  │
│         ▼                          │  - Resources.tsx        │  │
│  ┌─────────────────────────────┐   │  - Admin.tsx            │  │
│  │      State Management       │   └─────────────────────────┘  │
│  │  (React useState/useEffect) │                                │
│  └─────────────────────────────┘                                │
│         │                                                       │
│         ▼                                                       │
│  ┌─────────────────────────────────────────────────────────┐    │
│  │                    UI Components                         │    │
│  │  ┌───────────────┐ ┌───────────────┐ ┌───────────────┐  │    │
│  │  │ ShatteredCard │ │  GlitchText   │ │ BackgroundGrid│  │    │
│  │  └───────────────┘ └───────────────┘ └───────────────┘  │    │
│  │  ┌───────────────┐ ┌───────────────┐ ┌───────────────┐  │    │
│  │  │   NeuralCore  │ │  GuiOverlay   │ │   Terminal    │  │    │
│  │  └───────────────┘ └───────────────┘ └───────────────┘  │    │
│  └─────────────────────────────────────────────────────────┘    │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
         │
         ▼
┌─────────────────────────────────────────────────────────────────┐
│                      EXTERNAL SERVICES                          │
├─────────────────────────────────────────────────────────────────┤
│  ┌─────────────────────┐     ┌─────────────────────────────┐    │
│  │    Gemini AI API    │     │      Static Assets          │    │
│  │  (geminiService.ts) │     │  - Project Images           │    │
│  │  - Chat responses   │     │  - Resume PDF               │    │
│  │  - Command parsing  │     │  - Fonts (Google Fonts)     │    │
│  └─────────────────────┘     └─────────────────────────────┘    │
└─────────────────────────────────────────────────────────────────┘
```

---

## 📁 Project Structure

```
chirag-portfolio-web/
├── 📂 components/           # Reusable UI components
│   ├── BackgroundGrid.tsx   # Animated grid background
│   ├── GlitchText.tsx       # Text with glitch animation
│   ├── GuiOverlay.tsx       # HUD-style overlay elements
│   ├── NeuralCore.tsx       # AI chat interface
│   ├── ShatteredCard.tsx    # Animated card component
│   └── Terminal.tsx         # Interactive terminal
├── 📂 views/                # Page components
│   ├── Home.tsx             # Landing page
│   ├── Projects.tsx         # Project showcase
│   ├── About.tsx            # Bio & certifications
│   ├── Contact.tsx          # Contact form
│   ├── Resources.tsx        # Resource library
│   └── Admin.tsx            # Admin panel
├── 📂 services/             # External service integrations
│   └── geminiService.ts     # Gemini AI integration
├── 📂 public/               # Static assets
│   ├── images/projects/     # Project screenshots
│   └── Chirag_Koyande_Resume.pdf
├── App.tsx                  # Main application component
├── constants.ts             # Project data & configurations
├── types.ts                 # TypeScript interfaces
├── index.tsx                # Entry point
├── index.html               # HTML template
├── vite.config.ts           # Vite configuration
└── package.json             # Dependencies
```

---

## 🛠️ Tech Stack

| Category | Technologies |
|----------|-------------|
| **Frontend** | React 19, TypeScript |
| **Build Tool** | Vite 6 |
| **Styling** | TailwindCSS, Custom CSS |
| **Icons** | Lucide React |
| **AI Integration** | Google Gemini API |
| **Fonts** | JetBrains Mono, Orbitron |

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v18+)
- npm or yarn
- Gemini API Key (optional, for AI features)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/chiragkoyande/chirag-portfolio-web.git
   cd chirag-portfolio-web
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   # Create .env.local file
   echo "GEMINI_API_KEY=your_api_key_here" > .env.local
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open in browser**
   ```
   http://localhost:3000
   ```

---

## 🎮 Terminal Commands

| Command | Action |
|---------|--------|
| `help` | Show available commands |
| `projects` | Navigate to projects section |
| `about` | View profile & certifications |
| `contact` | Open contact form |
| `resources` | Browse curated resources |
| `clear` | Clear terminal output |
| `echo [text]` | Echo back text |

---

## 📸 Featured Projects

### 🔹 Opportune
Real-time aggregator for hackathons and internships with 40% reduced data fetch latency using Supabase Edge Functions.

### 🔹 LinkSniff
Forensic security tool analyzing PDFs to detect embedded phishing links using heuristic risk scoring.

### 🔹 SentinelWatch
Custom-built SIEM system simulating SOC workflows with brute-force attack detection.

---

## 🔒 Security Features

- Environment variables for API keys (`.env.local`)
- No sensitive data in client-side code
- Secure external link handling (`rel="noopener noreferrer"`)
- Input sanitization in terminal commands

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

## 📬 Contact

**Chirag Koyande**
- 📧 Email: chiragk.dev@gmail.com
- 💼 LinkedIn: [chiragkoyande](https://www.linkedin.com/in/chiragkoyande)
- 🐙 GitHub: [chiragkoyande](https://github.com/chiragkoyande)

---

<div align="center">

### ⚡ Built with passion by a Builder + Breaker ⚡

</div>
