# Leo Leung Portfolio Website

<p align="center">
  Personal portfolio platform for showcasing consulting work, technical delivery, and project spotlight case studies.
</p>

<p align="center">
  <a href="https://leoleung.co.uk"><strong>Live Site</strong></a>
  ·
  <a href="#features">Features</a>
  ·
  <a href="#tech-stack">Tech Stack</a>
  ·
  <a href="#architecture">Architecture</a>
  ·
  <a href="#quick-start">Quick Start</a>
</p>

<p align="center">
  <img alt="Next.js" src="https://img.shields.io/badge/Next.js-14.2.5-black?logo=nextdotjs" />
  <img alt="React" src="https://img.shields.io/badge/React-18.3.1-20232a?logo=react" />
  <img alt="Tailwind CSS" src="https://img.shields.io/badge/Tailwind_CSS-3.4.10-06B6D4?logo=tailwindcss&logoColor=white" />
  <img alt="Font Awesome" src="https://img.shields.io/badge/Font_Awesome-6.6.0-528DD7?logo=fontawesome&logoColor=white" />
  <img alt="Deploy" src="https://img.shields.io/badge/Deploy-Vercel-black?logo=vercel" />
</p>

## Overview

This repository is the production codebase for [leoleung.co.uk](https://leoleung.co.uk), built to position consulting work around:

- Power Platform and Dynamics-focused delivery.
- Full-stack web development capability.
- Credible project storytelling with live and GitHub-linked portfolio entries.

The site includes a project spotlight section covering four flagship repositories:

- `portfolio` (this repo)
- `Manchester-Gents`
- `lcwk-reports`
- `manchester-gents-gallery`

## Why this project is strong for portfolio review

| Portfolio Signal | Evidence in This Repository |
| --- | --- |
| Product positioning | Structured sections for skills, project spotlight, community work, and contact CTA. |
| Frontend delivery | Next.js App Router implementation with reusable UI components and responsive layouts. |
| Content architecture | Data-driven spotlight cards and clear information hierarchy for fast recruiter/client scanning. |
| SEO readiness | Metadata API, Open Graph tags, Twitter tags, favicon/manifest setup, and `Person` JSON-LD. |
| UX practicality | Persisted theme toggle with pre-hydration script to reduce visual mismatch and flashing. |

## Features

### Public portfolio experience

- Hero section framing consulting focus and primary capabilities.
- Dedicated skills section covering:
  - Power Platform (`Power Apps`, `Power Automate`, `Dataverse`)
  - `Dynamics 365`
  - React/Next.js engineering
  - Data/CMS and delivery tooling
- Four-project spotlight cards with live links and GitHub links.
- Community section and direct contact paths.

### CV route

- Dedicated `/cv` page with profile, experience, education, and additional details.
- Shared navigation and consistent styling with the homepage.

### Platform capabilities

- Global dark/light theme support with localStorage persistence.
- Reusable layout and section components.
- Static-optimized Next.js output for fast page delivery.

## Tech Stack

| Layer | Technologies |
| --- | --- |
| Framework | Next.js 14.2.5 (App Router) |
| UI | React 18.3.1 |
| Styling | Tailwind CSS + custom global CSS |
| Icons | Font Awesome React |
| Fonts | `next/font` (`Inter`) |
| SEO & metadata | Next.js Metadata API, Open Graph, Twitter card tags, JSON-LD |
| Tooling | ESLint, PostCSS, Autoprefixer |
| Deployment target | Vercel |

## Architecture

```mermaid
flowchart LR
  Browser[User Browser] --> App[Next.js App Router]
  App --> Home[/app/page.js]
  App --> CV[/app/cv/page.js]
  App --> Shared[Reusable Components]
  Shared --> Header[components/Header.jsx]
  Shared --> SectionTitle[components/SectionTitle.jsx]
  App --> Layout[/app/layout.js]
  Layout --> SEO[Metadata + JSON-LD + OG tags]
  App --> Styles[/app/globals.css + Tailwind]
```

## SEO and metadata highlights

- Canonical portfolio metadata in `app/layout.js`.
- Open Graph and Twitter preview tags.
- Favicon and web manifest support.
- JSON-LD `Person` structured data for search engines.

## Quick Start

```bash
npm install
npm run dev
```

Application runs at `http://localhost:3000`.

Production build and start:

```bash
npm run build
npm run start
```

## Available Scripts

| Script | Command | Description |
| --- | --- | --- |
| `dev` | `next dev` | Start local development server. |
| `build` | `next build` | Create production build. |
| `start` | `next start` | Run production server from built output. |
| `lint` | `next lint` | Run ESLint checks. |

## Project Structure

```text
.
├── app/
│   ├── layout.js
│   ├── page.js
│   ├── cv/page.js
│   └── globals.css
├── components/
│   ├── Header.jsx
│   └── SectionTitle.jsx
├── public/
│   ├── OG.png
│   └── favicon/*
├── package.json
└── tailwind.config.js
```

## Deployment

The project is configured for Vercel deployment.

1. Import repository to Vercel.
2. Use default Next.js build settings.
3. Deploy and map domain if required.

## Contact

- Email: [hello@leoleung.co.uk](mailto:hello@leoleung.co.uk)
- Website: [https://leoleung.co.uk](https://leoleung.co.uk)
