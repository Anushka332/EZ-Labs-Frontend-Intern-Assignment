# EZ_TaskAssignment — TravelDreams (Vite + React)

This is a small React (Vite) single-page app that reproduces the provided landing page and includes a contact form wired to the API endpoint:

POST https://vernanbackend.ezlab.in/api/contact-us/

Features
- Responsive landing page (Hero, About, Destinations, Packages, Gallery)
- Contact form with front-end validation (required fields, simple email validation)
- Submits to the provided API; shows "Form Submitted" on successful (200) response

How to run (Windows PowerShell)

1. Install dependencies

```powershell
npm install
```

2. Run dev server

```powershell
npm run dev
```

Open the link printed by Vite (usually http://localhost:5173)

Notes
- Images referenced are expected at `images/` (e.g. `images/paris.jpg`). Copy your assets into `d:/EZ_TaskAssignment/images/`.
- If you want a production build: `npm run build` then `npm run preview` to serve the built files.
