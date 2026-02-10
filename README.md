# ⚡ Twinspark — Digital Studio Portfolio

> **Two Minds. One Spark.** The combined expertise of Jeremiah Jefry & Joe Daniel.

A high-conversion portfolio website for **Twinspark** — a boutique digital studio specializing in modern web applications and AI automation solutions.

![Twinspark](https://img.shields.io/badge/Twinspark-Digital%20Studio-4f46e5?style=for-the-badge)
![React](https://img.shields.io/badge/React-18-61DAFB?style=flat-square&logo=react)
![Vite](https://img.shields.io/badge/Vite-5-646CFF?style=flat-square&logo=vite)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.3-38B2AC?style=flat-square&logo=tailwind-css)
![Framer Motion](https://img.shields.io/badge/Framer%20Motion-10-FF0055?style=flat-square)

---

## 🎯 What We Do

| Service | Description | Tech Stack |
|---------|-------------|------------|
| **Custom Web Application** | High-performance React/Next.js apps | React, Next.js, Vite, Tailwind |
| **AI Integration & Automation** | Chatbots, OpenAI API, workflow automation | OpenAI, Python, n8n, APIs |
| **UI/UX & Modernization** | Transform outdated sites into modern experiences | Figma, Tailwind, Framer Motion |

---

## ✨ Features

### Design & UX
- **Swiss-Style Minimalism** — Clean "Paper & Ink" design with white canvas and deep indigo accents
- **Premium Loader Animation** — 1.8s smooth entrance experience with AnimatePresence
- **Scroll Reveal System** — IntersectionObserver-powered `.reveal-on-scroll` animations
- **Aurora Background** — Subtle, atmospheric background system
- **Fully Responsive** — Mobile-first, perfect on all devices

### Functionality
- **Smooth Animations** — Framer Motion powered reveals throughout
- **SaaS-Style Pricing** — Clean tiered pricing with "Most Popular" highlight
- **Trust Center FAQ** — Collapsible accordion with rotating icons
- **Project Showcase** — Detailed project cards with industry tags and results
- **Case Studies** — In-depth project showcases with metrics
- **Why Us Section** — Competitive differentiators and value proposition
- **Contact Form** — Complete lead capture with validation
- **Client Testimonials** — Social proof with ratings

### Performance
- **90+ Lighthouse Score** — Optimized for Core Web Vitals
- **Instant Load Feel** — Vite-powered fast HMR and builds
- **SEO Ready** — Semantic HTML, proper meta structure, Open Graph tags

---

## 🚀 Quick Start

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

### Production Build

```bash
# Build for production
npm run build

# Preview production build
npm run preview
```

---

## 📁 Project Structure

```
twinspark/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx        # Slim navigation bar
│   │   ├── Hero.jsx          # Power Duo headline + availability badge
│   │   ├── About.jsx         # Founders + partnership story
│   │   ├── Services.jsx      # 3 focused service offerings
│   │   ├── Projects.jsx      # Project showcase grid
│   │   ├── CaseStudies.jsx   # Detailed project case studies
│   │   ├── WhyUs.jsx         # Value proposition & differentiators
│   │   ├── Testimonials.jsx  # Client reviews with ratings
│   │   ├── Pricing.jsx       # SaaS-style pricing tiers
│   │   ├── FAQ.jsx           # Trust Center accordion
│   │   ├── Contact.jsx       # Lead capture form
│   │   ├── Footer.jsx        # Footer + links
│   │   ├── Loader.jsx        # Premium entrance animation
│   │   └── index.js          # Barrel exports for all components
│   ├── data/
│   │   ├── services.js       # Web, AI & UI/UX services
│   │   ├── pricing.js        # MVP, Growth, Enterprise plans
│   │   ├── faq.js            # 8 FAQ entries (AI, support, timelines)
│   │   ├── team.js           # Jeremiah + Joe founder profiles
│   │   ├── projects.js       # 6 project showcase entries
│   │   ├── caseStudies.js    # Detailed case study data
│   │   └── testimonials.js   # Client review data
│   ├── App.jsx               # Main app + loader logic + scroll observer
│   ├── main.jsx              # React entry point
│   └── index.css             # Global styles + design system + aurora bg
├── public/
├── index.html                # SEO meta tags + Google Fonts (Inter)
├── tailwind.config.js        # Swiss-style design tokens
├── postcss.config.js
├── vite.config.js
├── jsconfig.json
└── package.json
```

---

## 🎨 Design System

The site follows a **Swiss-style "Paper & Ink"** design philosophy — minimalist, clean, and professional with generous whitespace.

### Color Palette

| Token | Value | Usage |
|-------|-------|-------|
| `canvas` | `#ffffff` | Primary backgrounds |
| `canvas-subtle` | `#f9fafb` | Section differentiation |
| `ink` | `#111111` | Jet Black — Headlines |
| `ink-body` | `#475569` | Slate Gray — Body text |
| `ink-muted` | `#64748b` | Secondary text |
| `accent` | `#4f46e5` | Deep Indigo — CTAs, buttons |
| `accent-hover` | `#4338ca` | Darker indigo on hover |
| `accent-light` | `#eef2ff` | Subtle background tint |

### Typography

| Scale | Size | Usage |
|-------|------|-------|
| `display-xl` | 4.5rem | Hero headlines |
| `display-lg` | 3.75rem | Major section titles |
| `heading` | 1.875rem | Section headings |
| `subheading` | 1.25rem | Subsection headings |
| `body` | 1rem | Body copy |
| `small` | 0.875rem | Captions, labels |

- **Font Family:** Inter (sans-serif), JetBrains Mono (monospace)
- **Headlines:** Semibold, tight letter-spacing (`-0.02em`)

### Shadows

| Token | Description |
|-------|-------------|
| `soft` | Barely visible, for subtle depth |
| `card` | Default card shadow |
| `lifted` | Hover state elevation |
| `elevated` | Prominent floating elements |

### Animations

| Animation | Duration | Description |
|-----------|----------|-------------|
| `fade-up` | 0.6s | Element fades in from below |
| `fade-in` | 0.4s | Simple opacity transition |
| `slide-up` | 0.5s | Smaller upward motion |

---

## 📱 Site Sections

| Section | Component | Description |
|---------|-----------|-------------|
| **Hero** | `Hero.jsx` | Power Duo headline, availability badge, founder names |
| **About** | `About.jsx` | Partnership story, founder cards, benefits grid |
| **Services** | `Services.jsx` | 3 focused offerings with tech stacks and features |
| **Case Studies** | `CaseStudies.jsx` | Detailed project showcases with metrics |
| **Testimonials** | `Testimonials.jsx` | Client reviews with ratings |
| **Pricing** | `Pricing.jsx` | MVP Build, Growth Scale, Enterprise AI tiers |
| **FAQ** | `FAQ.jsx` | 8 questions covering AI, support, timelines, revisions |
| **Contact** | `Contact.jsx` | Full lead capture form with validation |

> Additional components `Projects.jsx` and `WhyUs.jsx` are available and exported but currently not rendered in the main app flow.

---

## 🛠 Tech Stack

| Technology | Version | Purpose |
|------------|---------|---------|
| **React** | 18.2 | UI library |
| **Vite** | 5 | Build tool + dev server |
| **Tailwind CSS** | 3.3 | Utility-first styling |
| **Framer Motion** | 10 | Page transitions & animations |
| **Lucide React** | 0.294 | Icon library |
| **React Router DOM** | 6 | Client-side routing |

---

## ⚙️ Customization

### Update Content

All site content is data-driven and lives in `/src/data/`:

```
services.js      → Service offerings (title, features, tech)
pricing.js       → Pricing tiers (MVP $1,499 / Growth $3,999 / Enterprise $9,999+)
faq.js           → FAQ questions and answers
team.js          → Founder profiles (name, role, skills, social links)
projects.js      → Project showcase entries (6 projects across industries)
caseStudies.js   → Detailed case study data
testimonials.js  → Client review data
```

### Update Styling

**Global styles** → `src/index.css`
- Design tokens, component classes, animation utilities, aurora background

**Tailwind config** → `tailwind.config.js`
- Swiss-style color palette (canvas, ink, accent, border)
- Typography scale (display-xl through small)
- Custom shadows (soft, card, lifted, elevated)
- Animation keyframes

### Update Contact Info

- `src/components/Contact.jsx` — Form recipient and fields
- `src/components/Footer.jsx` — Footer links and branding

---

## 👥 The Team

### Jeremiah Jefry G
**Lead Developer & AI Specialist** — Engineering Lead

Architects scalable systems and builds intelligent AI integrations. React, Next.js, Node.js, Python, OpenAI, n8n.

### Joe Daniel A
**Lead Designer & Creative Strategist** — Creative Lead

Transforms ideas into stunning visual experiences. UI/UX Design, Figma, Tailwind CSS, Framer Motion, Branding, Webflow.

---

## 📈 Pricing Model

| Plan | Price | Timeline | Best For |
|------|-------|----------|----------|
| **MVP Build** | $1,499 | 7-10 days | Launching fast |
| **Growth Scale** | $3,999 | 14-21 days | Scaling with AI |
| **Enterprise AI** | $9,999+ | 4-6 weeks | Custom solutions |

---

## 📄 License

Licensed under the **Apache License 2.0** — see the [LICENSE](LICENSE) file for details.

---

<div align="center">

**Built with ❤️ by Twinspark**

*Two Minds. One Spark. Powerful Digital Products.*

[View Live Demo](#) · [Contact Us](#contact)

</div>