# Dexa Scan Finder

This repository is a single Next.js App Router application structured from the project root.

## Structure

The layout follows the current Next.js project structure guidance:

```text
.
├── app/
│   ├── _components/   # Colocated non-route UI components
│   ├── _lib/          # Colocated route-private data and helpers
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── public/            # Static assets
├── next.config.ts
├── package.json
└── tsconfig.json
```

The `app` directory contains the route tree, while private folders like `app/_components` and `app/_lib` keep implementation details colocated without creating routes.

## Common Commands

Run these from the repository root:

```bash
npm install
npm run dev
npm run build
npm run typecheck
npm run start
```

## Vercel

This project should deploy directly from the repository root as a single Next.js app.
