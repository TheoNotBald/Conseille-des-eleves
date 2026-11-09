# Collège Citoyen — Conseil des élèves

Bilingual static website in French and English.

## Included
- Responsive top navigation, quick-access left sidebar, news sidebar, and mobile navigation
- French / English language toggle
- Home, how it works, representatives grouped by level, projects, candidacies, news, suggestions, settings, and administration pages
- Candidate application form, team photo, and team color preview
- Admin tabs for proposition review, voting settings, candidacies, and read-only audit logs
- Settings for color presets, light/dark mode, language, and the moving slogan
- Admin controls for a voting-form link and voting schedule
- Supabase integration scaffolding for cross-device suggestions, candidacies, candidate photos, vote settings, and audit events
- News preview and section navigation

## Important limitations
- Supabase must be configured and the migration applied before cross-device storage or Google admin sign-in works. See [`SUPABASE_SETUP.md`](./SUPABASE_SETUP.md). Until then, admin access is locked and public forms use local-browser storage.
- When configured, any Google account ending in `@gmail.com` can administer the site. This is intentionally broad and not suitable for a school launch.
- Admin audit logs are append-only for application users, but a Supabase project owner can still alter the database or disable protections.
- Without Supabase, candidate application details are stored in localStorage and team photos (up to 50 MB each) in IndexedDB on the current device. Do not enter real student information or upload real student photos.
- A configured voting link opens an external form; this site does not collect votes.
- The school must approve privacy, accessibility, roles, identity verification, election rules, and official content before production use.

## Deploy on Vercel
1. Upload `index.html` to the root of a GitHub repository, or use Vercel's project import after adding the file to the repo.
2. In Vercel, choose **Add New → Project** and import the repository.
3. Select the **Other** framework preset (static site); leave the build command empty and the output directory as `.` if prompted.
4. Deploy. The root `index.html` is the entry page.

No environment variables or server-side functions are needed for the static site.
