# Deepak Menan — Portfolio

Personal portfolio of **Deepak Menan**, Software Engineer focused on backend systems and AI-powered applications.

**Live site:** [deepakmenan.dev](https://deepakmenan.dev) *(update once deployed)*  
**LinkedIn:** [linkedin.com/in/deepakmenan2012](https://www.linkedin.com/in/deepakmenan2012/)  
**GitHub:** [github.com/Deepak-Menan-R](https://github.com/Deepak-Menan-R)

---

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **Font:** Geist Sans + Geist Mono

---

## Project Structure

```
data/
  profile.ts       ← name, headline, bio, links, core tech, education
  experience.ts    ← work history
  projects.ts      ← all projects (featured flag controls card size)
  skills.ts        ← skill groups

components/        ← one file per section
app/
  page.tsx         ← assembles all sections
  layout.tsx       ← metadata + fonts
  globals.css      ← base styles + hero animation
```

---

## Running Locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

---

## Updating Content

All content lives in `data/`. No component changes needed for routine updates.

| What to update | File |
|---|---|
| Name, email, links, headline | `data/profile.ts` |
| Work experience | `data/experience.ts` |
| Projects | `data/projects.ts` |
| Skills | `data/skills.ts` |
| Bio + education | `data/profile.ts` → `bio` and `education` fields |

**Adding a new project:** append an object to `data/projects.ts`.  
Set `featured: true` for a large card in the Projects section, or `false` for the compact Other Projects row.

**Resume:** place your PDF at `public/resume.pdf`. The Resume button is already wired to `/resume.pdf`.

---

## Deploying to Vercel (Recommended)

The fastest way to deploy a Next.js site.

### Option A — Vercel CLI

```bash
npm install -g vercel
vercel
```

Follow the prompts. Vercel auto-detects Next.js — no configuration needed.  
Every `git push` to `main` will trigger a new deployment automatically.

### Option B — Vercel Dashboard

1. Push this repository to GitHub.
2. Go to [vercel.com/new](https://vercel.com/new) and import the repo.
3. Leave all settings at their defaults and click **Deploy**.
4. Done — Vercel assigns a `.vercel.app` URL instantly.

To add a custom domain, go to **Project → Settings → Domains** in the Vercel dashboard.

---

## Deploying to Other Platforms

### Netlify

```bash
npm run build
```

Point Netlify to the repo, set build command to `npm run build` and publish directory to `.next`.

### Self-hosted (Node.js)

```bash
npm run build
npm start        # starts on port 3000
```

Use a reverse proxy (nginx, Caddy) to serve it on port 80/443.

### Static Export (no server needed)

Add to `next.config.ts`:

```ts
const nextConfig = {
  output: "export",
};
```

Then run:

```bash
npm run build    # generates the /out folder
```

Upload the contents of `/out` to any static host (GitHub Pages, Cloudflare Pages, S3, etc.).

---

## License

MIT
