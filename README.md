# michalgiat.co.il

Website for Michal Giat. Same stack as tomgiat-website: Next.js (App Router)
+ Tailwind CSS, exported as a static site (`next build` → `out/`).

## Development

```bash
npm install
npm run dev
```

## Deploy (Cloudflare Pages)

Connected to this GitHub repo; every push to `main` deploys automatically.

- Framework preset: Next.js (Static HTML Export)
- Build command: `npm run build`
- Build output directory: `out`
