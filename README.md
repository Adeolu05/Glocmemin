# GLOCMEMIN - Global Christ Message Ministry

Official website for **Global Christ Message Ministry (GLOCMEMIN)**, church arm **End Time Christ Army**.

## Develop

```bash
npm install
cp .env.example .env.local
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Content

Editable ministry copy lives in `src/content/ministry.ts`.

## Deploy (Vercel)

1. Push this repo to GitHub.
2. Import the project in [Vercel](https://vercel.com/new).
3. Set environment variable:
   - `NEXT_PUBLIC_SITE_URL` = your live domain (e.g. `https://glocmemin.org`)
4. Deploy. HTTPS and Vercel Analytics are included.

Custom domain: Project → Settings → Domains.

## Launch features

- SEO: favicon, Open Graph image, sitemap, robots, Church JSON-LD
- This-week schedule highlights on Home and Programs
- Contact prayer/visit form (opens WhatsApp with a prefilled message)
- Google Maps embed + directions for the Odogbolu venue
- Brand marks: SVG emblem + letterhead scan on About
