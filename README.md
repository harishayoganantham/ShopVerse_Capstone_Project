# ShopVerse — E-commerce Catalog Capstone

A responsive product-catalog storefront built with modular HTML, CSS, and vanilla JavaScript. No build step or framework is required.

## Features
- Modular architecture: `data.js`, `store.js`, `router.js`, and `app.js`
- Client-side hash routing (`#/`, `#/shop`, `#/cart`, `#/about`)
- Product catalog with category filters, search, and price sorting
- Add-to-bag, quantity controls, remove item, and cart persistence via `localStorage`
- Responsive layout, semantic landmarks, accessible labels, lazy-loaded product imagery
- Demo checkout interaction (no real payments)

## Run locally
Because JavaScript modules are used, serve the folder over HTTP rather than opening `index.html` directly.

**Option A — VS Code:** install the Live Server extension, right-click `index.html`, choose **Open with Live Server**.

**Option B — Python:**
```bash
python -m http.server 8000
```
Then visit http://localhost:8000.

## Deploy to Vercel
1. Extract this ZIP.
2. Create a GitHub repository and upload the contents of this folder (the `index.html` file must be at the repository root).
3. Sign in to Vercel and choose **Add New → Project**.
4. Import your GitHub repository.
5. Framework preset: **Other**. Build command: leave empty. Output directory: `.` (root).
6. Deploy. Vercel will provide a public URL.

## Deploy to Netlify
1. Sign in to Netlify.
2. Choose **Add new site → Deploy manually**.
3. Drag the extracted project folder into the deploy area (or connect the GitHub repository).
4. Netlify publishes the site and provides a public URL.

## Before calling it production-ready
This is a polished frontend capstone prototype, not a complete commercial full-stack store. To accept real orders, add a backend/API, database, authentication, inventory management, server-side validation, payment provider integration, order emails, privacy/terms pages, and security controls. Replace demo products and remote sample images with your own licensed assets. Add image optimization and production analytics as needed.

## Suggested submission description
ShopVerse is a responsive e-commerce product catalog featuring modular JavaScript architecture, client-side routing, searchable and filterable products, sorting, and a persistent shopping bag. The project is deployed as a static web application and demonstrates modern frontend development and deployment workflow.
