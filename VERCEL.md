# Deploying to Vercel

This project is a Vite + React app. Use the following steps to deploy to Vercel.

1. Push your branch to GitHub (or the repo host connected to Vercel).
2. In the Vercel dashboard, create a new project and import the repository.
3. Set the following build settings if Vercel doesn't auto-detect them:
   - Framework: Other (Vite)
   - Build Command: npm run build
   - Output Directory: dist

4. A `vercel.json` config is included which tells Vercel to serve the `dist` directory and route all paths to `index.html`.

Notes
- Local `npm run build` produces `dist/` which is the folder Vercel will serve.
- The local build shows `Duplicate "className" attribute` warnings in `src/pages/FindInstaller.tsx` and `src/components/Products.tsx` — these won't break the build now but should be cleaned up to avoid potential runtime issues and lint errors.
