# Novabia EIP — Investor & Economic Portal

A responsive, static website for **https://eip.novabia.dev/**, built for GitHub Pages. It shares the Novabia visual language (orange N seal, navy/gold palette, Cinzel and Inter typography) and uses **one `index.html`** with hash-based, JavaScript-switched sections.

## Site contents

- **Overview:** the investment thesis and the connected province-world framework.
- **The Game:** documented player origins and the interactive Stage 3 Hound evolution example.
- **Audience:** working player persona and a test-and-learn acquisition framework.
- **Economics:** clearly illustrative sales calculator and financing diligence gaps; no invented performance or budget.
- **Milestones:** proposed validation sequence and a link to the 5YLW calendar subdomain.
- **Tools & Workflow:** all 19 creator-reported tools, arranged into five functional groups, with an investor-appropriate process/provenance disclaimer. Product descriptions are categorical and are not claims about any specific tool's individual contribution.
- **Investor Room:** inquiry email, public evidence checklist, ecosystem links, print/save-as-PDF option.

The site also links to the existing official Novabia website, planned Play and Calendar subdomains, and the published Google Form survey.

## Deployment on GitHub Pages

1. Make a **new repository** (for example `novabia-eip`) and upload the files **at the repository root**.
2. In **Settings → Pages**, deploy from `main` / root (or configure GitHub Actions).
3. In **Settings → Pages → Custom domain**, enter `eip.novabia.dev`.
4. In the DNS provider for `novabia.dev`, set `eip` as a CNAME pointing to your GitHub Pages account host (`aalhany-dev.github.io`, if that remains your active Pages account). **Do not point the DNS CNAME to `novabia.dev`.**
5. Enable **Enforce HTTPS** once certificate provisioning completes.
6. Test `https://eip.novabia.dev/#economics`, `#investors`, mobile navigation, and the contact CTA.

The included `CNAME` file contains `eip.novabia.dev`. GitHub Pages may also manage it automatically in Settings.

## Editing the website

- Main text, links, contact email: `index.html`.
- Visual language, mobile breakpoints and print view: `styles.css`.
- Tab switching, Stage 3 demo and economic calculator: `script.js`.
- Brand seal: `favicon.png` (copied from existing Novabia files).

**Current contact:** `hany-45@hotmail.com`, copied from your main site's JavaScript config. Replace the `mailto:` links in `index.html` if you prefer a business-only investor email.

## Content integrity and outstanding questions

This site draws its game mechanics, narrative, brand language and audience thesis from the supplied Novabia project documents and currently shared website files. It does not claim independently verified sales, a funding round, release dates, market size, signed partnerships or profitability.

- Figures in the **Economics** calculator (1,000 units, $24 sample price, 5% sample refunds, 30% sample platform share) are **hypothetical demonstration inputs**. They are not Novabia targets, prices, forecasts, or validated third-party averages.
- The starting target audience (18–34; English-speaking PC gamers) is an **internal project persona**, not measured demand.
- The project design mentions possible in-game purchases and VIP features. Their final commercial form, price and compliance decisions are undecided.
- The Milestones tab presents a **proposed validation sequence**, not the dated 5YLW calendar.
- `play.novabia.dev` and `calendar.novabia.dev` are linked as planned destinations; this package does not deploy those sites.
- Main-site screenshots are linked rather than copied, because its `assets/` directory wasn't uploaded.
- The Stage 3 demo illustrates a valid two-branch Hound configuration only and omits rarity probabilities and the full feature/moves logic.
- A polished financial forecast requires your operating costs, launch plan, pricing, market evidence, funding target and terms.

This portal is not an offer to sell securities. Specific offers should be reviewed by qualified legal/financial advisers for the relevant jurisdictions.

© 2026 Novabia. All rights reserved.

## Updating the used-tools tab

The **Tools & Workflow** tab lives in the `index.html` section with `id="tools"`; its layout is styled in `styles.css`. `script.js` includes the `tools` hash route and sets the correct browser title.

The tab records these 19 user-supplied names (standardized for clarity): ChatGPT, Codex, Gemini, Antigravity, Claude, Meta AI, DeepSeek, Microsoft Paint, Adobe Photoshop, Inkscape, Aseprite, LibreSprite, Godot, Audacity, Grammarly, GitHub, Microsoft Word, Microsoft Excel, and **Muse**. Muse is listed alongside Meta AI as a Meta-related app, based on the creator’s clarification. Its exact function is intentionally not asserted.

To link directly to this tab, share `https://eip.novabia.dev/#tools`.
