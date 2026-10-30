# Novabia EIP — Investor & Economic Portal

**Live:** https://eip.novabia.dev/  
**Repository:** https://github.com/aalhany-dev/EIP-Novabia  
**Purpose:** Transparent, supporting information for prospective Novabia investors and partners. The presentation stays concise; this portal houses deeper product, market, economic, roadmap, diligence and production documentation.

## Responsibilities and boundaries

| Domain | Repository | Responsible for |
| --- | --- | --- |
| `novabia.dev` | `aalhany-dev/Novabia` | Public game identity, narrative, gameplay, origins, companions, legal pages, player acquisition |
| `play.novabia.dev` | `aalhany-dev/Play-Novabia` | Playable Godot browser prototype |
| `eip.novabia.dev` | `aalhany-dev/EIP-Novabia` | Investor thesis, opportunities, caveats, budget, proposed financing, risks and supporting diligence |

**Investor email:** `invest.in@novabia.dev`. Do not restore the prior personal email.  
**Audience-facing support:** `support@novabia.dev`.

The portal is **not** a guaranteed return, securities offer, audited sales report or proof of product-market fit. Current business status: **pre-revenue** with a **playable development prototype**.

## Portal navigation

The current site uses seven tabs; the URL fragments are deep links for investors, **not independent sitemap entries**:

- https://eip.novabia.dev/#overview — investment thesis and project positioning
- https://eip.novabia.dev/#product — game mechanics and the **Ahmed persona** (not in Market)
- https://eip.novabia.dev/#market — curated comparables, buyer hypotheses and market caveats
- https://eip.novabia.dev/#economics — interactive scenario calculations, waterfall and use-of-funds
- https://eip.novabia.dev/#roadmap — 18-month milestones, measurable outputs and optionality
- https://eip.novabia.dev/#tools — production toolkit, creative direction and AI provenance plans
- https://eip.novabia.dev/#investors — investor opportunity, contact, returns, diligence and risk matrix

Nested anchor links work via the client router: `#comparable-basket`, `#market-methodology`, `#validation-gates`, `#ai-transparency`, `#return-scenarios`, `#risk-register`.

**QR rule:** For detailed investor information, route QR codes to the relevant EIP tab; the final investor/contact call-to-action should use `https://eip.novabia.dev/#investors`. Do not label `play.novabia.dev` as the investor-information destination.

## Editorial and financial accuracy

- **Player problem:** the working Ahmed persona seeks an emotionally memorable companion relationship, compelling gameplay and stories. He is a *hypothesis*, not a surveyed representative sample.
- **Differentiator:** Heir/Tutor Stage 3 mechanics; the Heir retains identity while a Tutor from a different provincial branch transfers learned adaptation. Avoid describing this as physical fusion.
- **Market comparables:** a deliberately curated basket of ten adjacent indie Steam titles. VGI/Sensor Tower *estimated Steam paid units* are not audited publisher results. The ~77.7K basket median is **not a market median or Novabia forecast**. Do not mix Cassette Beasts' reported 1.1M+ cross-platform milestone into Steam-only figures.
- **Working pricing:** **$19.99** Standard US list-price hypothesis; roughly **$24.99** Supporter hypothesis, with non-pay-to-win extras. Selected-basket price average $20.49 and median $19.99. Regional pricing and discounts may change achieved revenue.
- **Planned architecture:** 37 roads, 132 companions, 8 wider-design character roles (**6 selectable origin avatars, 2 non-selectable Fantasy story roles**). Do not imply all are already playable.
- **External metrics:** no externally validated completion, retention, wishlist-to-sale conversion, paid-user acquisition cost or willingness-to-pay metrics yet. Never fabricate traction or testimonials.

### Funding and illustrations

Up to **$100,000** for an approximately **18-month** staged program:
- Core team and coworking $24,300.
- Incorporation/setup $10,000.
- Marketing and commercial validation $25,000.
- Specialist visual/audio/UI/animation work $10,000.
- Company-owned hardware, tools and accounts $11,500.
- QA, research and localization $5,000.
- Legal, accounting and compliance $2,500.
- Working-capital and commercialization reserve $11,700.

Preferred *negotiable* starting point: **50% of contractually-defined Net Receipts** until cumulative investor distributions equal **2×** invested capital; then **20%** until cumulative distributions reach **5×**. It is not equity ownership or a guaranteed return.

With $100K invested, $19.99 list price, 5% refunds, 30% platform share and **excluding** discounts, regional pricing, taxes, operating costs and additional deductions:
- 30K units → approximately $199.4K distributed (**~2×**).
- ~78K units (selected peer-basket median) → about $327.4K (**~3.3×**).
- 150K units → capped at $500K (**5×**).
- The approximate exact thresholds are 30,091 paid units for 2× and 142,929 for 5× in this simplified model.

These are illustrative investment calculations, **not sales forecasts**. Additional financing, future projects and preferred negotiation opportunities require separately agreed terms.

## Measurement gates and risks

The roadmap intentionally establishes baselines before selecting specific conversion targets:
- Months 0–3: instrumented end-to-end slice, recruitment and production workflow.
- Months 3–6: early external player cohort and friction/attachment report.
- Months 6–9: Steam presence, acquisition experiments and attributed wishlist cost.
- Months 9–12: production-velocity and content cost data; concentrate on strongest evidence.
- Month 12: updated data room and financing discussion ahead of remaining runway.
- Months 12–18: QA, localization, community building and launch-readiness decision.

Risks disclosed: Steam discoverability, differentiated player attachment, founder dependency, production economics, AI-generated asset rights, commercial conversion and financing runway. A risk response is a mitigation plan, not evidence the risk has disappeared.

### AI-assisted production

This project combines human-led creative work and AI-assisted workflows. Responsible personnel must track intended commercial assets, licenses, sources, use conditions and third-party rights; replace material that cannot be cleared and comply with storefront disclosure rules. **Do not describe a comprehensive asset audit as complete until one actually is.**

Preserve player-facing origin symbols:
- Elemental: `icon-water.png`
- Kinetic: `icon-fist.png`
- Landscape: `icon-landscape.png`

A province emblem and an Honor Medal reward are **not** the same thing as these origin identity symbols. The explanatory HTML comment lives above the origin cards in `index.html`.

## Source files

- `index.html`: Seven-tab investor content, scenarios, risk register and contact.
- `styles.css`: Base design system.
- `revision.css`: Subsequent updates and responsive layouts.
- `script.js`: Tab/deep-link routing, illustrative economy calculator, evolution prototype and print action.
- `robots.txt`, `sitemap.xml`: Crawl discovery for **eip.novabia.dev only**.
- `CNAME`: Host binding for GitHub Pages.
- `favicon.png`: Brand icon.

The EIP site uses one static HTML document; its `#` fragments share the same canonical URL. Do not add fragment URLs to the sitemap. A future conversion to independent pages would need separately rendered HTML and metadata, just as the main site now has.

## Publishing and change checklist

1. Back up the current `main` branch before significant edits.
2. Update all repeated values consistently (price, unit labels, salary and fund allocation, contact information).
3. Keep the **10-slide live pitch** separate from this longer investor portal and its optional five supporting slides.
4. Confirm the ten-title basket appears once, price basket appears once, correct artwork loads, and the waterfall matches the assumptions.
5. Test direct `/#... ` URLs, deep links, mobile and interactive calculator values; distinguish the published website from the Godot build.
6. Submit `https://eip.novabia.dev/sitemap.xml` independently through Search Console as appropriate; a Domain Property can cover the subdomain.
7. Do not silently upgrade planned concepts, projected reach or scenario figures into factual traction.

**Backup examples:** `backup/pre-major-eip-revision-2026-10-27`, `backup/pre-investor-diligence-update-2026-10-30`, `backup/pre-persona-and-return-rebalance-2026-10-30`.

© 2026 Novabia. All rights reserved.
