<div align="center">

# SUMIT PANCHAL | MANUAL QA ENGINEER - The QA Series

### A cinematic portfolio showcasing my software quality assurance experience, testing approach, and project case studies.

[![Portfolio](https://img.shields.io/badge/Portfolio-The%20QA%20Series-e5132b?style=for-the-badge&logo=github&logoColor=white)](https://lifeofthecoders.github.io/Portfolio_Series/)
[![React](https://img.shields.io/badge/React-18-20232a?style=flat-square&logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8-3178C6?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-6-646CFF?style=flat-square&logo=vite&logoColor=white)](https://vite.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-4-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)

**Designed, developed, and maintained by Sumit Panchal.**

[Overview](#-overview) · [Features](#-portfolio-highlights) · [QA Focus](#-manual-qa-focus) · [Technology](#-technology-stack) · [Setup](#-getting-started) · [Structure](#-project-structure) · [Deployment](#-deployment) · [Ownership](#-authorship--ownership)

</div>

---

## 🎯 Overview

**The QA Series** is my personal portfolio as a **Manual QA Engineer / Quality Assurance Analyst**. I built it to present my professional background, software testing capabilities, project experience, QA contributions, certifications, and resume through a cinematic, responsive web experience.

The portfolio is based on a streaming-inspired visual presentation, with an opening sequence, profile selection, animated content sections, project case studies, and dedicated project detail pages. The design is supported by a dark visual system, crimson accents, custom cursor interactions, a particle trail, and a mouse-follow spotlight.

The portfolio content is focused on my quality assurance role and the work represented in my resume and project reference materials. It is not a generic software development or full-stack developer portfolio.

> **Quality is a mindset. Not just a process.**

## ✨ Portfolio Highlights

| Area | What it provides |
|---|---|
| Personal introduction | Profile, Manual QA role, professional summary, and contact links |
| Cinematic opening | Animated opening sequence and viewer profile selection |
| Hero section | Professional introduction, primary actions, and resume access |
| About | QA philosophy, professional focus, and background |
| Experience | Quality Assurance Analyst experience and responsibilities |
| Project case studies | Six project showcases with dedicated detail pages |
| Project details | Clean banner, project title, overview, platforms, testing coverage, image gallery, QA contributions, and workflows |
| QA skills | Manual testing, test design, defect management, web/mobile testing, and QA practices |
| Achievements | Practical quality contributions and professional highlights |
| Certifications | Certificates and learning credentials |
| Resume | In-portfolio resume viewer and resume PDF |
| Interactive visuals | Custom cursor, crimson particle trail, mouse-follow spotlight, and motion effects |
| Responsive layout | Layouts designed for desktop, tablet, and mobile screens |
| Accessibility preferences | Reduced-motion and fine-pointer handling for interactive effects |

## 🧪 Manual QA Focus

My portfolio presents the following areas of manual quality assurance:

### Manual Testing
- Functional Testing
- Regression Testing
- Smoke Testing
- Sanity Testing
- Exploratory Testing
- Retesting
- Web and mobile application validation
- Usability and compatibility checks

### Test Design and Documentation
- Requirement Analysis
- Test Planning
- Test Scenario Design
- Test Case Design
- Test Data Preparation
- Requirement Traceability Matrix (RTM)
- Test execution and result documentation

### Defect Management
- Bug Reporting and Reproduction
- Defect Lifecycle Management
- Severity and Priority Assessment
- Retesting and Regression Verification
- Root Cause Analysis support
- Clear evidence and reproducible steps

### QA Delivery Practices
- Risk-based testing
- Critical user journey validation
- Cross-platform testing
- Release-focused validation
- Requirement clarification
- Structured QA documentation

## 🗂️ Project Case Studies

The portfolio contains six project case studies. Each project detail page presents its available overview, platforms, testing coverage, visual references, QA contributions, and key user workflows.

| Project | Domain / Application |
|---|---|
| **LYMÜV** | Taxi Booking Application |
| **Dap Me** | Professional Networking Application |
| **Kinzwin** | Multiplayer Gaming Platform |
| **Bunny Books** | Photo Book E-Commerce Application |
| **Health-E** | Digital Health & Medical Records App |
| **reGive** | Community Sharing & Gift Transaction Application |

Project descriptions and testing details are presented as portfolio case-study material. They should not be interpreted as independently audited product specifications or claims about production ownership of the referenced applications.

## 🧰 Technology Stack

### Frontend
- **React 18** — component-based user interface.
- **TypeScript 5.8** — typed application logic and component contracts.
- **Vite 6** — local development server and production bundler.
- **Tailwind CSS 4** — utility-first styling.
- **Framer Motion 11** — page transitions and interface animations.

### Interaction and scrolling
- **Lenis** — smooth scrolling.
- **HTML Canvas** — pointer particle trail and ambient spotlight.
- **SVG and CSS** — vector artwork and visual effects.
- **Custom React cursor** — pointer-following cursor and contextual hover labels.

### Build and quality tooling
- **TypeScript compiler** — project type checking.
- **Vite production build** — optimized static site output.
- **Sharp** — image processing utility used by the image build script.

## 📁 Project Structure

```text
Portfolio_Series/
├── .github/
│   └── workflows/
│       └── deploy.yml              # GitHub Pages build and deployment
├── public/
│   ├── favicon.svg                 # SP browser icon
│   ├── favicon.ico                 # Multi-size browser icon
│   ├── favicon-32.png              # PNG browser / touch icon
│   ├── assets/
│   │   ├── Sumit_Panchal_Resume.pdf
│   │   ├── portrait-420.webp
│   │   ├── portrait-720.webp
│   │   ├── portrait-1100.webp
│   │   └── og-image.jpg
│   ├── certificates/               # Certificate preview images
│   └── project/                    # Project banners and gallery images
├── scripts/
│   └── build-images.mjs            # Image asset processing
├── src/
│   ├── components/
│   │   ├── About.tsx
│   │   ├── Achievements.tsx
│   │   ├── ContinueWatching.tsx
│   │   ├── CustomCursor.tsx
│   │   ├── EpisodeCard.tsx
│   │   ├── FinalCTA.tsx
│   │   ├── Hero.tsx
│   │   ├── InteractiveCanvas.tsx
│   │   ├── Navbar.tsx
│   │   ├── OpeningSequence.tsx
│   │   ├── Originals.tsx
│   │   ├── PlayIntro.tsx
│   │   ├── Poster.tsx
│   │   ├── ProfileSelector.tsx
│   │   ├── ProjectCard.tsx
│   │   ├── ProjectModal.tsx         # Dedicated project detail page
│   │   ├── Rail.tsx
│   │   ├── ResumeModal.tsx
│   │   ├── ResumeViewer.tsx
│   │   ├── Scene.tsx
│   │   ├── Seasons.tsx
│   │   ├── Skills.tsx
│   │   ├── TopPicks.tsx
│   │   └── fx.tsx
│   ├── data/
│   │   └── portfolio.ts             # Profile, experience, skills, and project data
│   ├── hooks/
│   │   ├── sectionProgress.ts
│   │   ├── smoothScroll.tsx
│   │   └── useMedia.ts
│   ├── App.tsx
│   ├── index.css
│   └── main.tsx
├── index.html
├── package.json
├── package-lock.json
├── tsconfig.json
├── tsconfig.app.json
├── tsconfig.node.json
├── vite.config.ts
└── README.md
```

## ⚙️ Getting Started

### Prerequisites

- **Node.js:** Node.js 20.19+ or 22.12+ recommended for current Vite tooling.
- **npm:** Included with Node.js.
- **Git:** Required to clone the repository.

### 1. Clone the repository

```bash
git clone https://github.com/lifeofthecoders/Portfolio_Series.git
cd Portfolio_Series
```

### 2. Install dependencies

```bash
npm ci
```

Use `npm install` only when you intentionally need to update or regenerate the dependency lockfile.

### 3. Start the development server

```bash
npm run dev
```

Open the local URL shown in the terminal. Vite normally uses:

```text
http://localhost:5173/Portfolio_Series/
```

### 4. Build and preview

```bash
npm run build
npm run preview
```

The production site is generated in the `dist/` directory.

### Available scripts

| Command | Purpose |
|---|---|
| `npm run dev` | Start the local Vite development server |
| `npm run build` | Run TypeScript project builds and create the production bundle |
| `npm run preview` | Preview the production bundle locally |
| `npm run images` | Run the repository image-processing script |

## 🔎 Project Navigation

Project details open as dedicated pages rather than pop-up dialogs. The selected project is represented in the URL query string.

Example:

```text
/Portfolio_Series/?project=lymuv
/Portfolio_Series/?project=dap-me
```

The exact project identifier is defined in `src/data/portfolio.ts`.

- Selecting a project opens its dedicated detail view.
- The **Back** control returns to the main portfolio.
- Browser Back and Forward navigation synchronize with the selected project.
- Related project cards navigate to their respective detail pages.
- Project screenshots open their full-size image in a separate browser tab.

## 🚀 Deployment

This repository is configured for **GitHub Pages** with the Vite base path:

```ts
base: '/Portfolio_Series/'
```

A GitHub Actions workflow is located at:

```text
.github/workflows/deploy.yml
```

The workflow installs dependencies with `npm ci`, runs `npm run build`, and deploys the generated `dist/` directory to GitHub Pages.

### Deployment steps

1. Push the latest source changes to the repository's `main` branch.
2. Open the repository on GitHub.
3. Go to **Settings → Pages** and confirm GitHub Actions is selected as the build and deployment source.
4. Check the **Actions** tab for the deployment workflow.
5. Open the published website and verify the home page, project detail URLs, images, resume, and browser icon.

The configured public URL is:

[https://lifeofthecoders.github.io/Portfolio_Series/](https://lifeofthecoders.github.io/Portfolio_Series/)

If the favicon appears unchanged immediately after deployment, perform a hard refresh (`Ctrl + Shift + R`) or clear the browser's cached site icon. Browser favicon caches can persist independently of the page cache.

## 🧭 Main Code Reference

| Area | Main file |
|---|---|
| Application composition and project URL state | `src/App.tsx` |
| Profile, experience, education, skills, and projects | `src/data/portfolio.ts` |
| Project cards | `src/components/ProjectCard.tsx` |
| Project detail page and gallery | `src/components/ProjectModal.tsx` |
| Custom pointer cursor | `src/components/CustomCursor.tsx` |
| Particle trail and spotlight | `src/components/InteractiveCanvas.tsx` |
| Resume presentation | `src/components/ResumeViewer.tsx` and `src/components/ResumeModal.tsx` |
| Global styling and design tokens | `src/index.css` |
| Browser title, metadata, and favicon references | `index.html` |
| Vite base path and build configuration | `vite.config.ts` |
| GitHub Pages deployment | `.github/workflows/deploy.yml` |

## ♿ Accessibility and Performance

- Pointer-only visual effects are enabled only for fine-pointer devices.
- Reduced-motion preferences are respected by interactive visual effects.
- The particle canvas does not capture pointer events or block page controls.
- Project gallery images use fixed aspect-ratio containers to maintain consistent card dimensions.
- Project images are lazy-loaded in the gallery.
- The application uses lazy loading for selected on-demand screens and overlays.

## 🔐 Privacy and Security

- The portfolio is a static frontend application; no Supabase CMS or server-side account system is configured in this project.
- Do not add private credentials, access tokens, or personal secrets to frontend source files.
- Keep local environment files and private configuration out of Git.
- Review third-party package and asset licenses before redistributing the project.

## 🧑‍💻 Authorship & Ownership

This is **my personal Manual QA Engineer portfolio**, designed and developed by **Sumit Panchal** to present my own professional profile, experience, skills, project case studies, certifications, and resume.

The portfolio source code, page composition, custom styling, project navigation, responsive presentation, and project-specific implementation are maintained as my personal portfolio project. Names, logos, trademarks, and product visuals appearing within individual case studies are used to identify the referenced applications and do not imply that I own those third-party products.

React, TypeScript, Vite, Tailwind CSS, Framer Motion, Lenis, Sharp, and other third-party packages remain the property of their respective authors and are governed by their own licenses. Any third-party media or materials remain subject to the rights of their respective owners.

No other portfolio subject, client identity, or unrelated developer name is presented as the owner of this Manual QA portfolio.

## 📜 License

The custom portfolio source and design implementation are maintained by **Sumit Panchal**. Unless a separate license is included with a specific asset or dependency, permission is not granted to reproduce or redistribute the custom portfolio implementation as someone else's work. Third-party libraries, fonts, icons, and media remain subject to their respective license terms.

## 📬 Contact

- **Name:** Sumit Panchal
- **Role:** Manual QA Engineer | Quality Assurance Analyst
- **Location:** Ahmedabad, Gujarat, India
- **Email:** [sumitpanchal5225@gmail.com](mailto:sumitpanchal5225@gmail.com)
- **LinkedIn:** [Sumit Panchal](https://www.linkedin.com/in/sumit-panchal-b790a8236/)
- **GitHub:** [lifeofthecoders](https://github.com/lifeofthecoders)

---

<div align="center">

**Designed and developed by Sumit Panchal.**

**PRECISION. QUALITY. TRUST. DELIVERED.**

© 2026 Sumit Panchal. All rights reserved for the custom portfolio implementation, subject to the notices above.

</div>
