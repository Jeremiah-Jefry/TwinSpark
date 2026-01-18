# 🔥 Twinspark - Premium Web Development Agency Portfolio

A modern, high-converting agency portfolio website built for **Twinspark** - a web development team focused on creating premium commercial websites.

![Twinspark](https://img.shields.io/badge/Twinspark-Premium%20Web%20Dev-8B5CF6?style=for-the-badge)
![React](https://img.shields.io/badge/React-18-61DAFB?style=flat-square&logo=react)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.3-38B2AC?style=flat-square&logo=tailwind-css)
![Framer Motion](https://img.shields.io/badge/Framer%20Motion-10-FF0055?style=flat-square)

## ✨ Features

- **Premium Dark Theme** - Modern glassmorphism design with purple/blue neon accents
- **Fully Responsive** - Perfect on mobile, tablet, and desktop
- **Smooth Animations** - Framer Motion powered scroll and hover effects
- **High-Converting Layout** - Strategically designed CTAs and trust builders
- **Loading Animation** - Professional page loader
- **Sticky Navigation** - Smart navbar with smooth scroll
- **Contact Form** - Complete lead capture form with validation
- **SEO Ready** - Semantic HTML and proper meta tags

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. **Install dependencies:**

```bash
npm install
```

2. **Start the development server:**

```bash
npm run dev
```

3. **Open your browser:**

Navigate to `http://localhost:3000`

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## 📁 Project Structure

```
twinspark-portfolio/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Services.jsx
│   │   ├── Projects.jsx
│   │   ├── CaseStudies.jsx
│   │   ├── WhyUs.jsx
│   │   ├── Testimonials.jsx
│   │   ├── Pricing.jsx
│   │   ├── FAQ.jsx
│   │   ├── Contact.jsx
│   │   ├── Footer.jsx
│   │   ├── Loader.jsx
│   │   └── index.js
│   ├── data/
│   │   ├── caseStudies.js
│   │   ├── faq.js
│   │   ├── pricing.js
│   │   ├── projects.js
│   │   ├── services.js
│   │   ├── team.js
│   │   └── testimonials.js
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── tailwind.config.js
├── postcss.config.js
└── vite.config.js
```

## 🎨 Design System

### Colors

| Color | Hex | Usage |
|-------|-----|-------|
| Primary (Purple) | `#8B5CF6` | Main accent, CTAs, highlights |
| Accent (Blue) | `#3B82F6` | Secondary accents, gradients |
| Dark Base | `#020617` | Background |
| Dark Surface | `#0F172A` | Cards, surfaces |

### Typography

- **Display Font:** Space Grotesk (headings)
- **Body Font:** Inter (text)

### Components

- **Glass Cards:** Semi-transparent with backdrop blur
- **Buttons:** Gradient primary, outlined secondary
- **Animations:** Fade-in on scroll, hover scales, glow effects

## 📱 Sections

1. **Hero** - Bold headline, CTAs, trust indicators
2. **About** - Team introduction, agency story
3. **Services** - 8 service cards with icons
4. **Portfolio** - 6 featured project showcases
5. **Case Studies** - 2 detailed success stories
6. **Why Us** - 8 trust-building reasons
7. **Testimonials** - 4 client reviews
8. **Pricing** - 3 transparent pricing tiers
9. **FAQ** - 10 common questions
10. **Contact** - Full lead capture form + WhatsApp

## 🛠 Tech Stack

- **React 18** - UI library
- **Vite 5** - Build tool
- **Tailwind CSS 3** - Styling
- **Framer Motion 10** - Animations
- **Lucide React** - Icons

## 📝 Customization

### Update Content

All website content is stored in the `/src/data/` folder:

- `projects.js` - Portfolio projects
- `services.js` - Service offerings
- `testimonials.js` - Client reviews
- `pricing.js` - Pricing plans
- `faq.js` - FAQ items
- `team.js` - Team members
- `caseStudies.js` - Case studies

### Update Colors

Modify the color palette in `tailwind.config.js`:

```js
theme: {
  extend: {
    colors: {
      primary: { ... },
      accent: { ... },
    }
  }
}
```

### Update Contact Info

Update contact details in:
- `src/components/Contact.jsx`
- `src/components/Footer.jsx`

## 👥 Team

- **Joe Daniel A** - Full Stack Developer (Frontend + Backend)
- **Jeremiah Jefry G** - Full Stack Developer (UI + Development)

## 📄 License

MIT License - feel free to use this for your own projects!

---

**Built with ❤️ by Twinspark**

*Two Minds. One Spark. Powerful Websites.*