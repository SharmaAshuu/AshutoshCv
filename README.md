# Ashutosh Sharma — Portfolio

A personal portfolio site built with Next.js, Tailwind CSS, and Framer Motion —
showcasing data analytics & data science projects, dashboards, skills,
education, and certifications.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Editing content

Almost everything on the site (bio, projects, skills, education,
certifications, links) lives in one file:

```
data/portfolio.js
```

Edit the text, links, or image paths there — you don't need to touch any
component code for normal content updates.

## Images

- Profile photo: `public/images/profile.jpg`
- Project screenshots: `public/images/projects/`
- Certificate images: `public/images/certs/`

To swap an image, replace the file (keep the same name) or update the path
in `data/portfolio.js`.

## Adding a new project

Add a new object to the `projects` array in `data/portfolio.js`:

```js
{
  id: "my-new-project",
  title: "Project Title",
  tags: ["Python", "SQL"],
  description: "What it does and the impact it had.",
  images: ["/images/projects/my-screenshot.png"], // or `image: null`
  links: {
    github: "https://github.com/...",
    live: "https://...",       // optional
    youtube: "https://youtu.be/...", // optional, auto-embeds
  },
},
```

## Deploying

### Option A — Vercel (simplest)

1. Push this project to a GitHub repository.
2. Go to vercel.com → **New Project** → import the repo.
3. Click **Deploy**. No configuration needed.

Every time you push to the repo, Vercel redeploys automatically.

### Option B — GitHub Pages (free, hosted directly on GitHub)

This project is already configured for GitHub Pages via
`.github/workflows/deploy.yml`, which builds and deploys automatically on
every push to `main`.

1. **Set your repo name** in `next.config.mjs` — change the `REPO_NAME`
   constant to match your actual GitHub repository name (e.g. if your repo
   is `github.com/yourname/portfolio`, `REPO_NAME` should be `"portfolio"`).
   Skip this step if your repo actually is named `portfolio`.
2. Push the project to GitHub (see steps above).
3. In your repo on GitHub, go to **Settings → Pages**.
4. Under **Build and deployment → Source**, select **GitHub Actions**.
5. Push any commit (or go to the **Actions** tab and run the "Deploy to
   GitHub Pages" workflow manually) — it will build and deploy the site.
6. Your site will be live at:
   `https://YOUR_USERNAME.github.io/REPO_NAME/`

Note: unlike Vercel, GitHub Pages only serves static files, so this project
uses Next.js static export (`output: "export"`) — that's already set up for
you in `next.config.mjs`.

## Tech stack

- **Next.js 16** (App Router)
- **Tailwind CSS 4**
- **Framer Motion** for scroll/entry animations
- **lucide-react** for icons
