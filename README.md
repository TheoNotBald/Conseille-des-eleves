# Collège Citoyen — Assemblée citoyenne (prototype)

Bilingual static website demo in French and English. This is a front-end prototype only.

## Included
- Responsive top navigation, quick-access left sidebar, news sidebar, and mobile navigation
- French / English language toggle
- Home, how it works, representatives grouped by level, projects, candidacies, news, suggestions, settings, and mock administration pages
- Candidate application form, team photo, and team color preview
- Settings for color presets, light/dark mode, language, and the moving slogan
- Admin controls for a voting-form link and voting schedule
- Fictional sample representatives and clearly labelled fictional election results
- Suggestions and candidate applications are stored in the current browser only; they are not sent to the school or shared across devices
- Simulated admin news preview and section navigation

## Important limitations
- No backend, authentication, database, analytics, or email sending is implemented. A configured voting link opens an external form; this site does not collect votes.
- Admin controls are not protected. Voting links, schedules, and appearance settings are saved in the current browser only, not published for other visitors.
- Candidate applications are also stored only in the current browser. Do not enter real student information or upload real student photos.
- Names and election examples are fictional. The school must approve privacy, accessibility, roles, identity verification, election rules, and official content before production use.
- The school must approve privacy, accessibility, roles, identity verification, election rules, and official content before production use.

## Test on Vercel
1. Upload `index.html` to the root of a GitHub repository, or use Vercel's project import after adding the file to the repo.
2. In Vercel, choose **Add New → Project** and import the repository.
3. Select the **Other** framework preset (static site); leave the build command empty and the output directory as `.` if prompted.
4. Deploy. The root `index.html` is the entry page.

No environment variables or server-side functions are needed for this demo.
