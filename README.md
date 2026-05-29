# Amine Meubles Site Plan

Furniture e-commerce site built with React, TypeScript, Vite, and Sanity.

## What is included

- Sanity-powered product model with an embedded `/studio` route
- Product listing and detail pages that fall back to local sample data
- SEO metadata updates for the home, product list, and product detail pages
- Accessibility improvements for navigation and CTA links
- Image loading defaults and Vite chunk splitting for faster loads
- Vercel SPA rewrite config

## Local setup

1. Copy `.env.example` to `.env`.
2. Fill in your Sanity project values.
3. Run `npm install` if needed.
4. Start the app with `npm run dev`.
5. Start the standalone Sanity Studio with `npm run studio` if you want the classic Studio dev server.

## Sanity setup

- Create a Sanity project in the Sanity dashboard.
- Set the dataset name you want to use, typically `production`.
- Create product documents with the `product` schema from this repo.
- Add your project ID and dataset to the environment variables.

## Build

Run:

```bash
npm run build
```

## Deployment

- Push the repo to GitHub.
- Connect the GitHub repo to Vercel.
- Set the same environment variables in Vercel.
- Deploy with the default Vite build command.

