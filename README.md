# Prethul Portfolio (Next.js 14 + TypeScript + Tailwind)
## Run in VS Code
1. Install Node.js 20 LTS (nodejs.org), VS Code, Git.
2. Unzip, then `File > Open Folder` -> prethul-portfolio.
3. Terminal (Ctrl+`): `npm install` then `npm run dev` -> http://localhost:3000
4. Check production build: `npm run build`
## Deploy to Vercel
1. `git init && git add . && git commit -m "init"`; create a GitHub repo `portfolio`; `git remote add origin <url>`; `git push -u origin main`
2. vercel.com -> Add New Project -> import the repo -> Deploy (defaults are correct).
## Edit content
- Projects, skills, experience: `src/data/site.ts` (put exact repo URLs in `repo`, add `live` only for verified live apps)
- Photo: replace `public/profile.png` · CV: replace `public/resume.pdf`
