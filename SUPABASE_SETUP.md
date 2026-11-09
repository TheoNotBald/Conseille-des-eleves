# Supabase setup for site administration

The admin portal stays locked until a Supabase project is configured. The browser uses only the project's public URL and publishable/anon key; never put a service-role key or database password in this site.

## 1. Create and configure Supabase

1. Create a Supabase project and keep its database credentials private.
2. Open each SQL file in [`supabase/migrations/`](./supabase/migrations/) in timestamp order, copy its entire contents, paste it into Supabase **SQL Editor**, then click **Run**. Run `20261104000000_admin_portal.sql`, `20261105000000_project_publishing.sql`, `20261105010000_remove_ideas_placement.sql`, `20261105020000_preserve_original_project_images.sql`, then `20261105030000_project_presentation_copy.sql`. The final migration defensively adds the project image and presentation columns and reloads PostgREST's schema cache, so it can also repair missing-column errors when rerun. If the project editor reports that `update_suggestion_presentation` is missing, run the entire final migration in SQL Editor and wait briefly for the cache reload before saving again; do not rerun an earlier project-publishing migration afterward, because it replaces the function with an older signature. If a later migration fails, run any earlier migration that was skipped successfully, then rerun the failed migration. Do not paste the Markdown link itself; it is only a link to the SQL files.
3. In **Authentication → Sign In / Providers**, enable Google sign-in.
4. In **Authentication → Settings → User Signups**, enable **Allow new users to sign up**. Without this, Google sign-in for a Gmail account that has not used the project before returns `signup_disabled`.
5. Create a Google OAuth client. Add the Supabase callback URL shown by the Google provider settings to the OAuth client's authorized redirect URIs.
6. In **Authentication → URL Configuration**, set the site URL and add the local/Vercel website URLs as allowed redirect URLs.
7. Put the project's URL and public publishable/anon key in [`supabase-config.js`](./supabase-config.js). Keep the service-role key and database password out of the repository.
8. Deploy the site and test a proposal and candidacy from a separate browser/device. Sign in to the Admin page with Google to review them.

## Admin access and audit limitations

Any Google account whose address ends in `@gmail.com` can administer every proposal, voting setting, and candidacy. This is intentionally broad and is **not appropriate for a real school launch**. Change both the client-side check in `admin-portal.js` and `public.is_cdecc_admin()` in the SQL migration to a school-managed identity or explicit allowlist.

Audit records are append-only for application users: row-level security grants admins read access only, and a database trigger rejects updates and deletes. The Supabase project owner/database administrator can still alter the database, disable triggers, or remove records; this is not tamper-proof against project owners.

Public forms accept submissions without sign-in. Candidate and project images are public so approved teams and projects can appear on the site; both buckets allow JPG, PNG, and WebP files up to 50 MB. Add rate limiting/abuse controls and obtain school approval before accepting real student information or photos.

Approved proposals appear in the home page's completed-project section by default. In the admin proposal review, choose a placement for each approved project: the single featured home item, the home completed-project cards, or no public page. Set the display title and description separately from the original submitted proposal. Project images are optional, public JPG/PNG/WebP files up to 50 MB. The image editor previews the selected home placement; drag the image to reposition it or drag a corner to resize the crop. Completed-project cards use a wide, 4:1 image crop. New uploads retain the original image separately, so the crop can be adjusted later without progressively zooming in. Images saved before the original-image migration cannot recover image detail that was already cropped away. The Ideas page is for submitting proposals.

When `supabase-config.js` is left blank, admin access is locked and public forms save data only in the current browser.
