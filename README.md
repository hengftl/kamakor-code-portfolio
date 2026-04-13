# Kamakor Code — Portfolio Website

Personal portfolio website for **Kamakor Code**, a full-stack web developer based in Phnom Penh, Cambodia, specialising in Angular, AngularJS, and MS SQL Server 2016.

Live site: [www.loemheng.com](https://www.loemheng.com)

---

## Table of Contents

- [Overview](#overview)
- [Project Structure](#project-structure)
- [Tech Stack](#tech-stack)
- [SEO Implementation](#seo-implementation)
- [Sections](#sections)
- [Assets to Prepare](#assets-to-prepare)
- [Getting Started](#getting-started)
- [Deployment](#deployment)
- [License](#license)

---

## Overview

A single-page portfolio built with vanilla HTML, CSS, and JavaScript. Designed to be fast, lightweight, and highly optimised for search engines. No frameworks, no build tools required — just open and serve.

---

## Project Structure

```
/
├── index.html          # Main HTML file (SEO-enhanced)
├── css/
│   └── style.css       # All styles
├── js/
│   └── script.js       # Scroll reveal and interactions
├── images/
│   ├── og-cover.jpg    # Open Graph cover image (1200×630 px)
│   └── kamakor-code.jpg# Profile photo for structured data
├── favicon-32x32.png
├── favicon-16x16.png
├── apple-touch-icon.png
└── site.webmanifest
```

---

## Tech Stack

| Layer      | Technology                              |
|------------|-----------------------------------------|
| Markup     | HTML5 (semantic, accessible)            |
| Styling    | CSS3 / SCSS                             |
| Scripting  | Vanilla JavaScript (ES6+)               |
| Fonts      | Google Fonts — Syne + DM Mono          |
| Hosting    | Any static host (Netlify, Vercel, etc.) |

---

## SEO Implementation

### Primary Meta

| Tag | Purpose |
|-----|---------|
| `<title>` | Keyword-rich page title including role, stack, and location |
| `meta description` | 155-character summary for SERP snippet |
| `meta keywords` | Supplementary keyword hints |
| `meta robots` | `index, follow` — tells crawlers to index and follow links |
| `link canonical` | Prevents duplicate-content penalties |

### Open Graph (Facebook · LinkedIn · Discord)

All required OG tags are present: `og:type`, `og:url`, `og:title`, `og:description`, `og:image` (with dimensions and alt text), `og:locale`, `og:site_name`.

### Twitter / X Card

Card type set to `summary_large_image` for maximum visual impact when links are shared on X/Twitter.

### Geo Tags

`geo.region`, `geo.placename`, `geo.position`, and `ICBM` tags are included to strengthen local/regional search relevance for Phnom Penh, Cambodia.

### Structured Data (JSON-LD)

Three Schema.org schemas are embedded in the `<head>`:

```
Person        → name, jobTitle, email, address, knowsAbout, sameAs
WebSite       → SiteLinks eligibility
ItemList      → Marks up the three portfolio projects for rich results
```

### Semantic HTML

- `<article>` wraps each project card
- Proper heading hierarchy: `h1` → `h2` → `h3`
- `aria-labelledby` on every `<section>`
- `aria-label` on all interactive and navigational elements
- `aria-hidden="true"` on decorative emoji icons

### Performance

- `dns-prefetch` added for Google Fonts
- `<script>` tag uses `defer` to eliminate render-blocking JavaScript

---

## Sections

| ID | Content |
|----|---------|
| `#hero` | Name, tagline, CTA buttons, stat counters |
| `#about` | Bio text and profile JSON card |
| `#skills` | Four skill cards: Frontend, Database, Backend, Tools |
| `#projects` | Three featured project articles |
| `#contact` | Email link and social links |

---

## Assets to Prepare

Before going live, create and upload the following files:

### `images/og-cover.jpg`
- **Dimensions:** 1200 × 630 px
- **Purpose:** Shown when the site URL is shared on social media
- **Tips:** Include your name, role, and a clean background. Keep text large and legible at small sizes.

### `images/kamakor-code.jpg`
- **Dimensions:** 400 × 400 px minimum, square
- **Purpose:** Referenced in the `Person` structured data schema for Google's Knowledge Panel

### Favicons
Generate all sizes from [favicon.io](https://favicon.io) or [realfavicongenerator.net](https://realfavicongenerator.net):

```
favicon-16x16.png
favicon-32x32.png
apple-touch-icon.png   (180×180 px)
site.webmanifest
```

---

## Getting Started

No build step required. Clone and open locally:

```bash
git clone https://github.com/kamakorcode/portfolio.git
cd portfolio

# Open directly in browser
open index.html

# Or serve with a local dev server (recommended for correct MIME types)
npx serve .
# or
python -m http.server 8080
```

---

## Deployment

The site is a static HTML file — deploy to any static host:

### Netlify (recommended)
1. Push to GitHub
2. Connect the repo in Netlify dashboard
3. Set publish directory to `/` (root)
4. Done — auto-deploys on every push

### Vercel
```bash
npm i -g vercel
vercel
```

### Manual / cPanel
Upload all files via FTP to your `public_html` directory. Ensure `index.html` is at the root.

### Post-Deployment Checklist

- [ ] Submit `sitemap.xml` to [Google Search Console](https://search.google.com/search-console)
- [ ] Verify Open Graph tags with [Meta Sharing Debugger](https://developers.facebook.com/tools/debug/)
- [ ] Validate structured data with [Google Rich Results Test](https://search.google.com/test/rich-results)
- [ ] Check Twitter Card with [Card Validator](https://cards-dev.twitter.com/validator)
- [ ] Run Lighthouse audit (target: 90+ on all categories)
- [ ] Update all placeholder social URLs (`github.com/kamakorcode`, etc.) with real links

---

## License

© 2026 Kamakor Code. All rights reserved.  
Designed and built by Kamakor Code · Phnom Penh, Cambodia.