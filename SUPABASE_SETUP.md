# Supabase setup for the admin prototype

The admin portal stays locked until a Supabase project is configured. The browser uses only the project's public URL and publishable/anon key; never put a service-role key or database password in this site.

## 1. Create and configure Supabase

1. Create a Supabase project and keep its database credentials private.
2. Open [`supabase/migrations/20261104000000_admin_portal.sql`](./supabase/migrations/20261104000000_admin_portal.sql) in the repository, copy the entire file contents, paste the SQL into Supabase **SQL Editor**, then click **Run**. Do not paste the Markdown link itself; it is only a link to the SQL file.
3. In **Authentication → Providers**, enable Google sign-in.
4. Create a Google OAuth client. Add the Supabase callback URL shown by the Google provider settings to the OAuth client's authorized redirect URIs.
5. In **Authentication → URL Configuration**, set the site URL and add the local/Vercel website URLs as allowed redirect URLs.
6. Put the project's URL and public publishable/anon key in [`supabase-config.js`](./supabase-config.js). Keep the service-role key and database password out of the repository.
7. Deploy the site and test a proposal and candidacy from a separate browser/device. Sign in to the Admin page with Google to review them.

## Admin access and audit limitations

For this prototype, any Google account whose address ends in `@gmail.com` can administer every proposal, voting setting, and candidacy. This is intentionally broad and is **not appropriate for a real school launch**. Before production, change both the client-side check in `admin-portal.js` and `public.is_cdecc_admin()` in the SQL migration to a school-managed identity or explicit allowlist.

Audit records are append-only for application users: row-level security grants admins read access only, and a database trigger rejects updates and deletes. The Supabase project owner/database administrator can still alter the database, disable triggers, or remove records; this is not tamper-proof against project owners.

Public forms accept submissions without sign-in, and candidate images are public so approved teams can appear on the Vote page. The bucket allows JPG, PNG, and WebP files up to 50 MB. Add rate limiting/abuse controls and obtain school approval before accepting real student information or photos.

When `supabase-config.js` is left blank, admin access is locked and the public prototype continues to use its local-browser demo behavior.
