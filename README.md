# AbdrahmanDev Portfolio (Frontend)

A fast, responsive **developer portfolio website** built with **React + TypeScript + Vite**.  
It highlights my background, featured projects, skills, services, and ways to contact me — in a clean single-page layout.

## What this project does

- **Landing sections**: Navbar, Hero, About, Projects, Skills, Services, Contact, Footer
- **Featured GitHub projects**: fetches repo details from the GitHub API and displays them (stars, language, topics, etc.)
- **Contact**: EmailJS (client-side) + social links (GitHub, LinkedIn, WhatsApp, Email)
- **Data-driven content**: portfolio content is centralized in `src/data/portfolioData.ts`

## Tech used

- **React** + **TypeScript**
- **Vite** (dev server + build)
- **React Router** (`BrowserRouter`)
- **EmailJS** (`@emailjs/browser`)
- **CSS** (component-level styles)
- **ESLint**

## Run locally

### Install

```bash
npm install
```

### Development

```bash
npm run dev
```

### Production build

```bash
npm run build
npm run preview
```

## Folder structure

```txt
Abdrahmandev-portfolio/
  public/
    Myresume.pdf
  src/
    components/
      About/
      Contact/
      Footer/
      GitProjects/
      Hero/
      Navbar/
      Services/
      Skills/
    data/
      portfolioData.ts
    hook/
      useGitRepos.ts
    App.tsx
    main.tsx
    App.css
    index.css
  package.json
  vite.config.ts
```

## Customize content

- **Main content** (name/title/bio/about/skills/services/contact links/featured repos): `src/data/portfolioData.ts`
- **GitHub projects fetch**: `src/hook/useGitRepos.ts` (uses `GITHUB_USERNAME` + `featuredRepos`)

## Scripts

- **`npm run dev`**: start dev server
- **`npm run build`**: typecheck + production build
- **`npm run preview`**: preview production build
- **`npm run lint`**: run ESLint
