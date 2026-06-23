# LAVIJACK ENTERPRISES LTD Website

A modern, locally crafted website for LAVIJACK ENTERPRISES LTD — a bookshop and stationery store in Kisumu, Kenya.

## Local development

1. Copy the environment example:
   ```bash
   cp .env.example .env
   ```
2. Update `.env` with your Supabase project values:
   - `SUPABASE_URL`
   - `SUPABASE_SERVICE_ROLE_KEY`
3. Install dependencies and start the app:
   ```bash
   npm install
   npm run dev
   ```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Supabase setup

1. Create a Supabase project.
2. Add a `contacts` table with columns:
   - `id` (uuid or bigint, primary key)
   - `name` (text)
   - `email` (text)
   - `phone` (text)
   - `message` (text)
   - `created_at` (timestamp with time zone, default now())
3. Use the service role key for `SUPABASE_SERVICE_ROLE_KEY` in `.env`.

## Key files

- `src/app/page.tsx` — homepage layout and content.
- `src/components/ContactForm.tsx` — contact form component.
- `src/app/api/contact/route.ts` — API route to store form submissions.
- `src/lib/supabaseClient.ts` — Supabase admin client wrapper.
- `src/app/globals.css` — global theme and styling.

## Notes

- The map section uses a placeholder until a mapping integration is added.
- The pricing shown is a starter list; you can replace it with the exact data when available.
