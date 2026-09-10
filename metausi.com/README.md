# MetaUSI — metausi.com

Static portfolio for MetaUSI / Manuel (Shanghai). Dark, minimal, mobile-first.

## Local run

```bash
python3 -m http.server 5173 --directory .
```

Open http://localhost:5173 — no build step; HTML/CSS/JS are the production output.

## Deploy on Vercel

1. Push this repo to GitHub (gates0426/metausi.com).
2. Vercel → Add New Project → import the repo.
3. Framework Preset: Other. Build Command: empty. Output Directory: `.` (root).
4. Deploy.

CLI: `npx vercel` then `npx vercel --prod`.

## Custom domain (www.metausi.com)

In Vercel → Settings → Domains, add www.metausi.com.

DNS for www:

| Type  | Name | Value                |
|-------|------|----------------------|
| CNAME | www  | cname.vercel-dns.com |

For apex metausi.com, use the A/ALIAS values Vercel shows. HTTPS is automatic after DNS propagates.

## Contact

hello@metausi.com

Repo: https://github.com/gates0426/metausi.com
