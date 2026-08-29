# AGENTS.md

## Cursor Cloud specific instructions

This repo is a single Next.js 15 (App Router) app with **Payload CMS 3 embedded in the same app** (admin at `/admin`, REST at `/api/[...slug]`, GraphQL at `/api/graphql`). Package manager is **npm** (`.npmrc` sets `legacy-peer-deps=true`). Standard scripts live in `package.json`.

### Services

- **Next.js dev server** (`npm run dev`, port 3000) — serves both the public marketing site and the embedded Payload admin/API. This is the only app process.
- **MongoDB** (required for CMS features: `/admin`, insights, `SiteSettings`, seeding). Payload connects via `DATABASE_URI` (falls back to `mongodb://127.0.0.1/adnan-studios`). The public site degrades gracefully when the DB is absent (see `isCmsEnabled()` in `lib/payload.ts`), so you must have Mongo running to exercise CMS flows.

### Startup caveats (non-obvious)

- **MongoDB is not auto-started and there is no systemd.** Start it manually each session, e.g.:
  `mongod --dbpath /var/lib/mongodb --bind_ip 127.0.0.1 --port 27017 --logpath /var/log/mongodb/mongod.log --fork`
  (the `mongodb` server binary is installed at the snapshot level, not via the update script).
- **A local `.env` is required and is gitignored** (never commit it). Minimum for local dev:
  `DATABASE_URI=mongodb://127.0.0.1:27017/adnan-studios`, `PAYLOAD_SECRET=<any string>`. `npm run seed:cms` reads `.env` via `--env-file`, so it must exist for seeding.
- **First admin user:** there is no default login. Create one at `/admin/create-first-user` before you can log into the CMS.
- **Seed content:** `npm run seed:cms` populates `SiteSettings` and 8 insight articles into MongoDB. Requires Mongo up and `.env` present.

### Lint / type-check gotchas

- **`npm run lint` (`next lint`) is NOT usable out of the box** — there is no ESLint config and no `eslint`/`eslint-config-next` dependency, so it drops into an interactive setup prompt. Do not add ESLint unless asked. Use `npx tsc --noEmit` for static type checking (passes clean).
- **`npm run generate:importmap` / `generate:types` fail on Node 22** with `ERR_REQUIRE_ASYNC_MODULE`. This does not block running the app: a committed `app/(payload)/admin/importMap.js` already exists and is used at runtime.

### Optional integrations

- Contact form (`app/api/contact/route.ts`) uses **Resend** and needs `RESEND_API_KEY`, `RESEND_EMAIL_FROM`, `RESEND_AUIDIENCE_ID` (note the misspelling in the var name). Not required for general dev; the endpoint throws only when hit without a key.
- Media uploads are stored on the local filesystem under `/media` (gitignored) — no cloud storage service needed.
