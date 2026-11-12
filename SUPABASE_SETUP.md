# Supabase setup for site administration

The admin portal stays locked until a Supabase project is configured. The browser uses only the project's public URL and publishable/anon key; never put a service-role key or database password in this site.

## 1. Create and configure Supabase

1. Create a Supabase project and keep its database credentials private.
2. Open each SQL file in [`supabase/migrations/`](./supabase/migrations/) in timestamp order, copy its entire contents, paste it into Supabase **SQL Editor**, then click **Run**. Run `20261104000000_admin_portal.sql`, `20261105000000_project_publishing.sql`, `20261105010000_remove_ideas_placement.sql`, `20261105020000_preserve_original_project_images.sql`, `20261105030000_project_presentation_copy.sql`, `20261109000000_allow_longer_suggestion_titles.sql`, `20261110000000_add_suggestion_grade.sql`, `20261110010000_private_audit_ips.sql`, `20261110020000_audit_log_display_view.sql`, `20261110030000_use_forwarded_ip.sql`, `20261112000000_expand_suggestion_language_filter.sql`, `20261113000000_member_profiles.sql`, `20261113010000_technical_control_panel.sql`, `20261113020000_technical_portal_separation.sql`, then `20261113030000_technical_backup_readiness.sql`. The final project-presentation migration defensively adds the project image and presentation columns and reloads PostgREST's schema cache, so it can also repair missing-column errors when rerun. If the project editor reports that `update_suggestion_presentation` is missing, run the entire final project-presentation migration in SQL Editor and wait briefly for the cache reload before saving again; do not rerun an earlier project-publishing migration afterward, because it replaces the function with an older signature. If a later migration fails, run any earlier migration that was skipped successfully, then rerun the failed migration. Do not paste the Markdown link itself; it is only a link to the SQL files.
3. In **Authentication → Sign In / Providers**, enable Google sign-in.
4. In **Authentication → Settings → User Signups**, enable **Allow new users to sign up**. Without this, Google sign-in for a Gmail account that has not used the project before returns `signup_disabled`.
5. Create a Google OAuth client. Add the Supabase callback URL shown by the Google provider settings to the OAuth client's authorized redirect URIs.
6. In **Authentication → URL Configuration**, set the site URL and allow the website URL for both portals. For example, if the site is `https://example.com/`, allow both `https://example.com/` and `https://example.com/?portal=technical`; add the equivalent local and Vercel URLs you use.
7. Put the project's URL and public publishable/anon key in [`supabase-config.js`](./supabase-config.js). Keep the service-role key and database password out of the repository.
8. Deploy the site and test a proposal and candidacy from a separate browser/device. Sign in to the Admin page with Google to review them.

## Admin access and technical access

After applying both technical migrations, bootstrap the first technical administrator in Supabase SQL Editor. Replace the placeholder with the exact Google account email that should have initial access; do not put this address in browser code:

```sql
insert into public.technical_access_control (email, role)
values (lower('YOUR_GOOGLE_ACCOUNT_EMAIL'), 'technical')
on conflict (email) do update set role = 'technical';
```

Only allowlisted Google accounts can sign in. The **Version admin / Admin version** and **Panneau technique / Technical Panel** are separate portals with separate sign-in sessions and roles. Use the `technical` role for the Technical Panel and the `admin` role for the regular admin portal; a technical role does not grant admin-portal access. The Technical Panel's access page can manage both roles. Regular administrators cannot view technical logs, IP addresses, technical access changes, or sign-in events. Do not use a shared browser password; a password embedded in a static site would not be secret.

The regular **Journaux / Logs** tab reads `public.admin_audit_logs_display`, which excludes authentication and technical-control events and never returns IP addresses. The Technical Panel reads a separate restricted RPC that combines admin and technical events and includes request IPs when Supabase supplies them. The system filters logs to 90 days and prunes old rows as new events arrive and during scheduled runs. IPs and account emails are personal information; obtain school/privacy approval before production use. Forwarded IP headers are not proof of identity, and Supabase project owners can still change or remove database records.

## Technical backups and settings

The Technical Panel can change the site's core colors, logo and hero image URLs, slogan, and global idea/candidacy open switches. Per-person daily/weekly/monthly submission caps are intentionally not enabled while public submissions have no verified student identity; the switches are enforced by database triggers. Backups restore app data and managed candidate, project, and member photos—not website source files, deployment configuration, or access-control allowlists. A restore replaces current app records and managed files and creates a pre-restore safety backup.

To enable secure manual and scheduled backups:

1. Apply `20261113030000_technical_backup_readiness.sql` after the technical control panel migration. It updates the status checks and schedule dispatcher.
2. In your Supabase account, create an access token from **Account → Access Tokens**. In the GitHub repository, open **Settings → Secrets and variables → Actions → New repository secret** and add it as `SUPABASE_ACCESS_TOKEN`. This is a separate credential from both Vault secrets; never put it in the website or share it. The repository workflow targets the Supabase project `ogrlkjqwkukaxkngexpr`.
3. In Supabase **Vault**, create non-empty secrets named `supabase_project_url` and `supabase_service_role_key`. Store the project URL and the service-role key as secret values; never add either value to this repository, browser code, or a chat message.
4. To deploy without a terminal, open **État technique** in the Technical Panel and click **Ouvrir le déploiement dans GitHub**. Sign in to GitHub, select **Run workflow**, and confirm. The workflow also deploys automatically when changes to the backup function are pushed to `main`.
5. Open the Technical Panel and verify that **Fonction de sauvegarde sécurisée** and **Secrets de planification dans Vault** both show **Configuré**. The function check verifies its server-side access to the backup tables and all required storage buckets.
6. In **Réglages du site**, choose a backup frequency and time, keep at least 10 backups (the default), and enable scheduled backups. Save the settings and verify the status tab shows the schedule as configured. The database checks the selected time in `America/Toronto`, including daylight-saving changes; weekly runs are Sundays and monthly runs are on the first day of the month.
7. The private `technical-backups` Storage bucket stores archived photos; set Supabase storage/database quotas and billing alerts appropriate for the retained copies. The retention control permits 10–100 backups and each stored photo is copied once per backup.

The scheduled job uses the service-role key only from Vault and the Edge Function's server-side environment. The Technical Panel does not collect or store the service-role key. If the migration, function, storage buckets, or Vault secrets are missing, backup actions remain unavailable and the status view explains which setup step is needed. Scheduled backups are disabled until a technical administrator enables them. Supabase plan-level project backups remain separate from this app-data restore feature.

Public forms accept submissions without sign-in. Candidate and project images are public so approved teams and projects can appear on the site; both buckets allow JPG, PNG, and WebP files up to 50 MB. Add rate limiting/abuse controls and obtain school approval before accepting real student information or photos.

Suggestion language screening checks the title and details for a curated set of profanity and slurs. It normalizes accents, common lookalike characters, leetspeak, punctuation, short letter-by-letter splits, and a single masked or omitted character in longer terms before automatically assigning the red review priority. It does not block submissions and cannot detect every offensive phrase or evasion; administrators should still review all submissions. Apply `20261112000000_expand_suggestion_language_filter.sql` to keep database-assigned priorities aligned with the browser's local screening.

The admin portal's **Members** tab manages individual photos, display names, and group labels for Assembly members, Secondary 1–5 representatives, and five class-representative slots per level. These profiles are stored in `public.member_profiles`; public visitors can read them, while only admins can change them. The `member-photos` bucket is public-read and admin-write. Apply `20261113000000_member_profiles.sql` before editing or publishing member profiles.

Approved proposals appear in the home page's completed-project section by default. In the admin proposal review, choose a placement for each approved project: the single featured home item, the home completed-project cards, or no public page. Set the display title and description separately from the original submitted proposal. Project images are optional, public JPG/PNG/WebP files up to 50 MB. The image editor previews the selected home placement; drag the image to reposition it or drag a corner to resize the crop. Completed-project cards use a wide, 4:1 image crop. New uploads retain the original image separately, so the crop can be adjusted later without progressively zooming in. Images saved before the original-image migration cannot recover image detail that was already cropped away. The Ideas page is for submitting proposals.

When `supabase-config.js` is left blank, admin access is locked and public forms save data only in the current browser.
