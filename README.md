
# Gue Cyber Limited Website

This project now uses React + Vite instead of a static HTML page.

## Pages (React Router)

- / (Home)
- /services
- /cbt
- /training
- /contact
- /thank-you
- /privacy
- /data-request
- /terms

## Local development

1. Install dependencies:
	npm install
2. Start the dev server:
	npm run dev
3. Open the local URL shown in your terminal.

Optional: set a production site URL for canonical and social tags.

1. Create a `.env` file in the project root.
2. Add:
   VITE_SITE_URL=https://www.guecyber.ng

Configure contact form email delivery with Web3Forms.

1. Create an access key at https://web3forms.com.
2. For local direct fallback, add to `.env`:
	VITE_WEB3FORMS_ACCESS_KEY=your_access_key
3. For production server-side proxy, set this in Vercel project environment variables:
	WEB3FORMS_ACCESS_KEY=your_access_key

The contact form includes anti-spam safeguards:

- Honeypot field for simple bot filtering
- Minimum fill time before submission
- Short cooldown between submissions
- Server-side request validation and per-IP rate limiting

Data compliance features currently implemented:

- Privacy and Terms pages covering GDPR and Nigeria NDPA/NDPR context
- Explicit consent capture in contact form before data submission
- Cookie/analytics consent banner (analytics runs only after consent)
- Consent metadata forwarding to server-side form processing
- Data Subject Request route and workflow guidance
- Cookie preference re-open control in footer

Operational retention/deletion checklist:

- Review enquiry data monthly and delete records no longer required
- Remove duplicate or stale contact data from support inbox/tools
- Restrict internal access to personal data on a least-privilege basis
- Log and track completion of Data Subject Requests

Analytics events are emitted on page views and contact form outcomes. If present,
these integrations are used automatically:

- Google Analytics (`window.gtag`)
- Google Tag Manager (`window.dataLayer`)
- Plausible (`window.plausible`)

## Build for production

1. Create production build:
	npm run build
2. Preview production build locally:
	npm run preview

## Testing

1. Run contact API smoke tests:
	npm run test:api
2. Run SEO regression checks (after build):
	npm run test:seo
3. Run route availability checks against preview server (after build):
	npm run test:routes

Route checks validate both HTTP 200 responses and required base SEO/meta tags.
They also validate `robots.txt` and `sitemap.xml` response headers and content.

CI runs API smoke tests, production build, SEO regression checks, and route checks via [.github/workflows/ci.yml](.github/workflows/ci.yml).

## Deployment on Vercel

1. Upload this folder to GitHub.
2. Create an account on https://vercel.com.
3. Import the GitHub repository.
4. Deploy (Vercel auto-detects Vite projects).

## Suggested future upgrades

- Migrate to Next.js for SEO-heavy pages.
- Add CMS integration for editable website content.
- Add online CBT registration flows.
- Add a WhatsApp chat integration.

## Project structure

- src/components (shared UI blocks)
- src/pages (route-level pages)
- src/data/siteContent.js (shared content data)
- public/social-preview.svg (social share image)
- public/sitemap.xml and public/robots.txt (SEO crawl config)
- api/contact.js (server-side form proxy for Vercel)
