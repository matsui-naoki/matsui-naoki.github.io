# Deploying

The site is a static export (`npm run build` → `out/`). The same build is published in two places:

| Host | How | URL |
|---|---|---|
| GitHub Pages | `.github/workflows/deploy.yml` on every push to `main` | https://matsui-naoki.github.io |
| Cloudflare Pages | Cloudflare's Git integration, also on every push to `main` | https://naokimatsui.com (planned) |

## Canonical URL

`NEXT_PUBLIC_SITE_URL` sets the canonical origin used in `<link rel="canonical">`, hreflang, Open Graph,
`sitemap.xml` and `robots.txt` (see `src/lib/seo.ts`). Unset, it is `https://matsui-naoki.github.io`.
Once the custom domain works, set it to `https://naokimatsui.com` in **both** builds (the GitHub
workflow's build step and the Cloudflare project's environment variables), so search engines treat the
custom domain as the one canonical copy and the github.io copy as a duplicate of it.

## Cloudflare Pages setup (one time, in the Cloudflare dashboard)

1. Workers & Pages → Create → Pages → Connect to Git → choose `matsui-naoki/matsui-naoki.github.io`.
2. Build settings:
   - Framework preset: None (or Next.js (Static HTML Export))
   - Build command: `npm run build`
   - Build output directory: `out`
   - Environment variables: `NODE_VERSION` = `20`, `NEXT_PUBLIC_SITE_URL` = `https://naokimatsui.com`
3. Save and deploy. The site appears at `https://<project>.pages.dev`.
4. Custom domains → add `naokimatsui.com` (and `www.naokimatsui.com`, redirected to the apex).

## Cloudflare-only files

- `public/_headers` — security headers (CSP, HSTS, nosniff, frame-ancestors) and cache lifetimes.
- `public/_redirects` — 301s from `/` and the old unprefixed paths to `/ja/...`.

GitHub Pages ignores both files (it cannot set response headers).
