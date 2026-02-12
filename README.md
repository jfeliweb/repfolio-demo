# Repfolio Demo

A password-protected demo site for **Repfolio**, a sports training SaaS platform that connects athletes with specialized coaches (e.g., goalkeeper training). Built with Next.js 14 and the Repfolio brand system.

---

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS (with Repfolio brand colors)
- **Icons:** Font Awesome 6 (CDN)
- **Build:** Static export (`output: 'export'`) for deployment to static hosting

---

## Site Structure

### Routes

| Path | Description |
|------|-------------|
| `/` | Landing: “Repfolio Demo” with link to login |
| `/login` | Password gate; successful login redirects to `/demo/1` |
| `/demo/[id]` | Dynamic demo page (1–21). Fallback placeholder when no numbered route exists. |
| `/demo/1` … `/demo/21` | Individual demo pages (see list below). Some are full React pages (e.g. Home); others may still use the `[id]` placeholder. |

### Demo Pages (21 total)

Defined in `lib/navigation.ts` and used by `DemoNavigation` and static params:

| ID | Title |
|----|--------|
| 1 | Home |
| 2 | About |
| 3 | Features |
| 4 | Pricing |
| 5 | Dashboard |
| 6 | Coach Profile |
| 7 | Schedule |
| 8 | Sessions |
| 9 | Athletes |
| 10 | Progress |
| 11 | Payments |
| 12 | Messages |
| 13 | Settings |
| 14 | Notifications |
| 15 | Calendar |
| 16 | Reports |
| 17 | Help |
| 18 | Progress History |
| 19 | Signup |
| 20 | Forgot Password |
| 21 | Contact |

---

## Authentication

- **Purpose:** Restrict access to `/demo/*` so only people with the password can view the demo.
- **Flow:**
  1. User visits `/` or `/demo/*` without auth → middleware redirects to `/login`.
  2. User enters password on `/login`. Correct password sets:
     - Cookie: `demo-auth=true` (1 day, for middleware).
     - `localStorage`: `demo-auth` (for client-side checks when using static export).
  3. User is redirected to `/demo/1`.
- **Middleware:** `middleware.ts` protects `/demo/*` using the `demo-auth` cookie. With static export, middleware does not run on the static server; auth is enforced client-side via `RequireAuth`.
- **Client guard:** `components/RequireAuth.tsx` checks `localStorage` and redirects to `/login` if not authenticated (used on demo pages that need protection when served as static files).

**Password:** Set via the `NEXT_PUBLIC_DEMO_PASSWORD` environment variable (e.g. in `.env.local`). The login page compares the submitted password to this value.

---

## Environment Variables

| Variable | Description |
|----------|--------------|
| `NEXT_PUBLIC_DEMO_PASSWORD` | Password required to access the demo site. Create `.env.local` and set this before running the app. |

---

## Key Directories & Files

```
repfolio-demo/
├── app/
│   ├── layout.tsx          # Root layout, globals.css, Font Awesome, noindex
│   ├── page.tsx             # Home: “Repfolio Demo” + “Go to Login”
│   ├── globals.css          # Tailwind directives
│   ├── login/
│   │   └── page.tsx         # Password form, sets cookie + localStorage, redirect to /demo/1
│   └── demo/
│       ├── [id]/
│       │   ├── layout.tsx
│       │   └── page.tsx     # Generic placeholder for demo id (used when no /demo/N route)
│       └── 1/ … 21/         # Per-demo layouts and pages (e.g. demo/1 = full Home page)
├── components/
│   ├── DemoNavigation.tsx   # Floating nav (bottom-right) to jump between demo pages
│   ├── RepfolioLogo.tsx     # Logo component (primary / white / single), uses /logo/*.svg
│   ├── RequireAuth.tsx      # Client wrapper: redirect to /login if not authenticated
│   └── SkillProgressionChart.tsx
├── lib/
│   ├── brand.ts             # Repfolio color tokens (mocha, charcoal, fern, etc.)
│   └── navigation.ts        # demoPages array (id, title, path) for all 21 demos
├── logo-icons/               # Source logo SVGs + LOGO-README.md
├── public/logo/              # Logos served by app (mirror of logo-icons for web)
├── demo-site-pages/          # Standalone HTML demos (demo-1.html … demo-21.html)
├── repfolio-brand-guide.html # Full brand style guide (colors, spacing, components)
├── .env.local               # Local env (e.g. NEXT_PUBLIC_DEMO_PASSWORD); not committed
├── middleware.ts             # Protects /demo/* via demo-auth cookie
├── next.config.js            # output: 'export', unoptimized images, trailingSlash
├── tailwind.config.ts        # Repfolio palette + animations
└── package.json
```

---

## Brand & Design

- **Brand guide:** `repfolio-brand-guide.html` — color system (Mocha, Charcoal, Fern, Bright Fern, Yellow Green), spacing, radius, shadows, and UI patterns.
- **Tailwind palette:** `tailwind.config.ts` and `lib/brand.ts` define the same tokens (e.g. `mocha-50`, `charcoal-900`, `fern-600`, `yellowGreen-500`).
- **Logos:** `logo-icons/` and `public/logo/` hold SVGs (primary, dark, compact, fern, white, icon, etc.). Usage details in `logo-icons/LOGO-README.md`.
- **RepfolioLogo:** Renders `/logo/repfolio-logo-primary.svg` (or white/charcoal variant) via Next `Image`.

---

## Demo Content: Next.js vs HTML

- **Next.js demo routes:** Under `app/demo/1/` … `app/demo/21/`. Demo 1 (Home) is a full React page with header, hero, stats, features, trainers, testimonials, pricing, FAQ, CTA, footer, plus `RequireAuth` and `DemoNavigation`. Other numbered routes may still be placeholders that delegate to the `[id]` page.
- **Static HTML reference:** `demo-site-pages/demo-1.html` … `demo-21.html` are standalone Tailwind + Font Awesome pages. They mirror the same 21 screens for reference or migration; the app does not serve these files.

---

## Scripts

```bash
npm run dev    # Development server (next dev)
npm run build  # Static export to out/
npm run start  # Serve production build (next start)
npm run lint   # next lint
```

---

## Configuration Notes

- **Static export:** `next.config.js` uses `output: 'export'`. No server routes; middleware only runs in `next dev` / `next start`, not on a static file host.
- **Images:** `images: { unoptimized: true }` for static export compatibility.
- **Trailing slashes:** `trailingSlash: true` for consistent static URLs.
- **SEO:** Root layout sets `robots: 'noindex, nofollow'` so the demo is not indexed.

---

## Summary

Repfolio Demo is a static Next.js app that presents 21 password-protected demo screens for the Repfolio sports coaching platform. Access is gated by a single shared password; after login, users can move between demos via the floating navigation. Brand and layout are driven by the Repfolio style guide and shared components (logo, nav, auth wrapper).
