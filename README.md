# Dibyajyoti Pradhan — Personal Portfolio

A personal portfolio website built with React, showcasing 6+ years of software engineering experience across HubSpot, Meta, and Amazon. Designed with a focus on performance, clean aesthetics, and thoughtful UX.

**Live:** [dibyojyoti-pradhan.github.io/my-portfolio](https://dibyojyoti-pradhan.github.io/my-portfolio)

---

## About

This portfolio presents my work, background, and interests as a Senior Software Engineer based in London. It covers my professional experience in payments, advertising infrastructure, and AI-powered CRM — along with selected open-source projects, certifications, and academic background.

---

## Tech Stack

| Layer | Technologies |
|---|---|
| Framework | React 18 |
| Styling | Styled Components, CSS-in-JS |
| Animation | Framer Motion |
| Routing | React Router v6 |
| 3D / Canvas | Three.js, @react-three/fiber |
| Particles | @tsparticles/react |
| Icons | React Icons |
| Deployment | GitHub Pages (`gh-pages`) |

---

## Features

- **Dark / Light theme** — system-aware toggle with persistent preference
- **Smooth section animations** — scroll-triggered fade-ins via Intersection Observer
- **Interactive particle background** — canvas-based with mouse interaction
- **Game Mode** — optional gamified browsing experience with achievements and level progression
- **Fully responsive** — optimised for desktop, tablet, and mobile
- **Accessible navigation** — semantic HTML, keyboard navigable

---

## Sections

- **About** — Introduction, current role, and brief bio
- **Experience** — HubSpot · Meta · Amazon (2018 – Present)
- **Projects** — Open-source and academic projects including Imperial College London capstone work
- **Skills** — Languages, frameworks, AI tooling, databases, and infrastructure
- **Achievements** — Hackathon wins, awards, and scholarship recognition
- **Certifications** — Professional Certificate in ML & AI, Imperial College London (In Progress)
- **Education** — Jadavpur University, B.E. in Electronics and Telecommunication Engineering
- **Contact** — Direct email and social links

---

## Getting Started

### Prerequisites

- Node.js v14 or higher
- npm

### Installation

```bash
git clone https://github.com/Dibyajyoti-Pradhan/my-portfolio.git
cd my-portfolio
npm install
npm start
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Available Scripts

```bash
npm start          # Start development server
npm run build      # Build optimised production bundle
npm run deploy     # Build and deploy to GitHub Pages
npm test           # Run test suite
```

---

## Project Structure

```
src/
├── components/        # UI components (About, Experience, Projects, Skills, ...)
│   └── common/        # Shared primitives (Button, Card, ThemeToggle)
├── context/           # React context (ThemeContext)
├── data/              # Static content and copy (data.js)
├── styles/            # Global styles and theme configuration
│   ├── GlobalStyle.js
│   └── theme.js
├── hooks/             # Custom React hooks
├── pages/             # Page-level components
└── App.js             # Application root
```

---

## Deployment

The site is hosted on GitHub Pages. Deployment is automated via the `gh-pages` package:

```bash
npm run deploy
```

This runs `npm run build` (via `predeploy`) and then publishes the `build/` directory to the `gh-pages` branch.

---

## Contact

**Dibyajyoti Pradhan**
- Email: [dibyojyotipradhan@gmail.com](mailto:dibyojyotipradhan@gmail.com)
- LinkedIn: [dibyajyoti-pradhan-83a649146](https://www.linkedin.com/in/dibyajyoti-pradhan-83a649146/)
- GitHub: [Dibyajyoti-Pradhan](https://github.com/Dibyajyoti-Pradhan)
- LeetCode: [dibyojyotipradhan](https://leetcode.com/u/dibyojyotipradhan/)

---

## License

MIT
