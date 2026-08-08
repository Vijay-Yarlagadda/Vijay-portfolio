# 🏎️ Vijay Yarlagadda's Personal Portfolio
### *Where Precision Engineering Meets Web Mechanics (Porsche x Spider-Man)*

Welcome to the repository of a highly interactive, performance-optimized, and premium personal portfolio. This project blends the sleek, high-precision aesthetic of **Porsche (911 GT3 RS)** with the interactive, web-slinging action of **Spider-Man**, creating a stunning first-impression user experience.

---

## 🎨 Dual Theme Concept

This portfolio features a hybrid theme designed to amaze users:

### 1. 🏎️ The Porsche 911 GT3 RS Theme
Engineered with absolute precision, honoring the legendary German sports car brand:
- **Ignition Sequence (Intro Screen):** On load, users are greeted with an interactive pulsing "Engine Start" button, a glowing red outline, and the official Porsche crest. Upon engine startup, a progress bar tracks the "System Initialization" before transitioning into the homepage.
- **3D WebGL Car Reveal:** Fixed behind the content is a full-featured 3D canvas (built with [React Three Fiber](https://r3f.docs.pmnd.rs/)) animating a sports car reveal synced directly with the user's scroll position.
- **The Navigation Cruiser:** A miniature Porsche 911 GT3 RS cruises back and forth across the navbar. 
  - **Hovering** over the car makes it rumble faster and brightens its taillights/red underglow neon.
  - **Clicking** the car triggers a turbo-boost speed run across the screen, honks its horn, and spawns a random speech bubble phrase (e.g., `"VROOM!"`, `"BEEP BEEP!"`, `"911 GT3 RS!"`, `"PRECISION!"`).
- **Brand Aesthetics:** Built with a custom PorscheNext font, bold uppercase lettering, a continuous marquee background banner reading `PORSCHE`, and the signature **Porsche Red** (`#D5001C`) accents.

---

### 2. 🕸️ The Spider-Man & Spider-Verse Theme
Hidden across the site are interactive, physics-driven Spider-Man Easter eggs:
- **Web-Slinger Scroll-to-Top Widget (`SpidermanWidget.jsx`):**
  - A custom floating action button in the bottom-right corner styled with Spider-Man's mask.
  - Clicking the mask triggers a web-shooting animation (a glowing white/red vertical laser beam extending to the top of the page).
  - This instantly shoots a web thread to smooth-scroll the viewport to the top, showing a custom `"🕸️ Web-Slung to Top!"` Spider-Sense toast notification.
- **Interactive Contact Form Auto-Filler (`Contact.jsx`):**
  - An upside-down hanging Spidey swings gently on a web thread at the top of the Contact section.
  - Clicking Spidey triggers a rapid pendulum swing and shoots a web to automatically auto-fill a collaboration message into the contact form and focus the textarea.
- **Spidey & Gwen Stacy Tribute (`Footer.jsx`):**
  - Hanging from a web thread connected to the Porsche taillight glowing border is a sleek framed card displaying the iconic **Spider-Man Catching Gwen Stacy artwork** (`public/spidey_gwen.png`).
  - The card sways like a pendulum, scale-zooms on hover, and lights up with a red border and a small `"Spidey & Gwen"` label.

---

## 🛠️ The Tech Stack

The application leverages a cutting-edge web development stack to achieve 60+ FPS animations and interactive 3D rendering:

### **Graphics & 3D Rendering**
- **[Three.js](https://threejs.org/)** & **[@react-three/fiber](https://github.com/pmndrs/react-three-fiber)** – Powering the global 3D background canvas and car model reveals.
- **[@react-three/drei](https://github.com/pmndrs/drei)** – Provides helper utilities for camera controls, lights, and textures in the Three.js viewport.
- **[@react-three/postprocessing](https://github.com/pmndrs/postprocessing)** – Renders cinematic ambient occlusion, blooms, and glows.

### **Animation Engines**
- **[Framer Motion](https://www.framer.com/motion/)** – Powers complex physics-based pendulum swings, UI transitions, state triggers, and page slide-ins.
- **[GSAP (GreenSock)](https://gsap.com/)** – Drives micro-interactions and synchronized scroll timelines.
- **[Lenis](https://lenis.darkroom.engineering/)** – Custom smooth-scrolling wrapper that overrides the browser default for buttery-smooth scrolling physics, crucial for aligning web-based timelines.

### **Frontend Core**
- **React 19** (Vite-powered) – Hot module replacement (HMR), component architecture, and lightning fast load times.
- **Tailwind CSS v4** & **Vanilla CSS** – Implements a curated glassmorphic, ultra-dark visual layout with crisp Porsche-themed layouts and responsive variables.
- **Lucide React & React Icons** – Provides clean, minimal vector graphics.

---

## 📂 Key Assets

- **`/public/spidey_gwen.png`** - The Spider-Man catching Gwen Stacy artwork hanging in the footer.
- **`/public/porsche_nav_car.png`** - The side profile cutout of the Porsche 911 GT3 RS running in the navbar.
- **`/public/porsche.png`** - High-fidelity Porsche shield used in the preloader screen.
- **`/public/porsche_transparent_cutout.png`** / **`porsche_final_complete.png`** - Pre-processed image components for background masks.
- **`make_final_baked_porsche.cjs`** / **`make_transparent_car.cjs`** - NodeJS pixel-manipulation scripts to process transparent alpha maps of the assets.

---

## 🚀 Getting Started

### 1. Installation
Clone the repository and install all node packages:
```bash
git clone https://github.com/Vijay-Yarlagadda/Vijay-portfolio.git
cd Vijay-portfolio
npm install
```

### 2. Development Server
Start the Vite developer server:
```bash
npm run dev
```

### 3. Production Build
Compile optimized static files for deployment:
```bash
npm run build
```

---

*All Systems Operational. Developed by [Vijay Yarlagadda](https://github.com/Vijay-Yarlagadda).*
