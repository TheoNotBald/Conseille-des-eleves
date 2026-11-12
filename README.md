# Collège Citoyen — Conseil des élèves

Bilingual static website in French and English.

## Included
- Responsive top navigation, quick-access left sidebar, news sidebar, and mobile navigation
- French / English language toggle
- Home, how it works, representatives grouped by level, projects, candidacies, news, suggestions, settings, and administration pages
- Candidate application form, team photo, and team color preview
- Admin tabs for proposition review, voting settings, candidacies, member profiles, and technical controls
- Settings for color presets, light/dark mode, language, and the moving slogan
- Admin controls for a voting-form link and voting schedule
- Supabase integration for cross-device suggestions, candidacies, member profiles, voting settings, role-based access, and audit events
- Technical Panel controls for site visuals, submission locks, account roles, technical logs, and scheduled app-data backups
- News preview and section navigation

## Important limitations
- Supabase must be configured and the migration applied before cross-device storage or Google admin sign-in works. See [`SUPABASE_SETUP.md`](./SUPABASE_SETUP.md). Until then, admin access is locked and public forms use local-browser storage.
- Admin and Technical Panel access require a Google account explicitly allowlisted in Supabase; the initial technical administrator must be bootstrapped in Supabase SQL Editor.
- Technical backups require the Supabase migration, the `technical-backup` Edge Function, and server-side Vault secrets. They include app data and managed photo storage, not source code or deployment configuration.
- Regular admin logs omit sign-in events and IP addresses; technical logs are restricted to technical administrators and retained for 90 days. See [`SUPABASE_SETUP.md`](./SUPABASE_SETUP.md) for setup and privacy limitations.
- Without Supabase, candidate application details are stored in localStorage and team photos (up to 50 MB each) in IndexedDB on the current device. Do not enter real student information or upload real student photos.
- A configured voting link opens an external form; this site does not collect votes.
- The school must approve privacy, accessibility, roles, identity verification, election rules, and official content before production use.

## Deploy on Vercel
1. Upload `index.html` to the root of a GitHub repository, or use Vercel's project import after adding the file to the repo.
2. In Vercel, choose **Add New → Project** and import the repository.
3. Select the **Other** framework preset (static site); leave the build command empty and the output directory as `.` if prompted.
4. Deploy. The root `index.html` is the entry page.

The public pages are static. Supabase Edge Functions and Vault secrets are required for scheduled backups and restores.
