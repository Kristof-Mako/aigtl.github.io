# aigtl.github.io

This repository publishes the AIGTL organizational website to
[https://aigtl.github.io](https://aigtl.github.io) using GitHub Pages.

## Structure

- `aigtl/` — SvelteKit + TailwindCSS source of the site.
- `.github/workflows/deploy.yml` — CI workflow that builds the site from `aigtl/`
  and publishes the static output to GitHub Pages.

## Local development

```bash
cd aigtl
npm install
npm run dev
```

## Production build

```bash
cd aigtl
npm run build     # writes static output to aigtl/build/
npm run preview   # optional local preview of the built site
```

## Deployment

1. In the GitHub repository, go to **Settings → Pages** and set the source to
   **GitHub Actions**.
2. Push to `main`. The workflow in `.github/workflows/deploy.yml` builds
   `aigtl/` and deploys `aigtl/build/` to GitHub Pages.

## Pages

- `/` — Homepage with the three‑pillar overview.
- `/eu-ai-act/` — Pillar 1: EU AI Act &amp; governance.
- `/kozepvezetoi-workshop/` — Pillar 2: Middle‑manager workshop.
- `/ai-alapvizsga/` — Pillar 3: Corporate AI literacy for HR.
- `/tudastar/` — Knowledge base.
- `/rolunk/`, `/kapcsolat/`, `/adatkezeles/` — About, contact, privacy notice.

Content copy and design brief live one level up in the workspace (`content.md`,
`style.md`, `howtobuild.md`).
