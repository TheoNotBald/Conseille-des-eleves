# Collège Citoyen — Assemblée citoyenne (prototype)

Bilingual static website demo in French and English. This is a front-end prototype only.

## Included
- Responsive top navigation, quick-access left sidebar, news sidebar, and mobile navigation
- French / English language toggle
- Home, how it works, representatives, projects, elections, news, suggestions, and mock administration pages
- Fictional sample representatives and clearly labelled fictional election results
- Identified and anonymous suggestion-form modes; submission is local-only and does not send or save data
- Simulated admin news preview and section navigation

## Important limitations
- No backend, authentication, database, analytics, email sending, or real voting is implemented.
- The admin page is not protected. It is only a visual mockup.
- Do not enter real student information. Names and election results are fictional.
- The school must approve privacy, accessibility, roles, identity verification, election rules, and official content before production use.

## Test on Vercel
1. Upload `index.html` to the root of a GitHub repository, or use Vercel's project import after adding the file to the repo.
2. In Vercel, choose **Add New → Project** and import the repository.
3. Select the **Other** framework preset (static site); leave the build command empty and the output directory as `.` if prompted.
4. Deploy. The root `index.html` is the entry page.

No environment variables or server-side functions are needed for this demo.
