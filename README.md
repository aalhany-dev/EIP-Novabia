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

## Canonical URLs, QR codes and indexing

All seven sections are now **separate HTML pages**, not JavaScript hash tabs.

| Section | Canonical URL | Source |
| --- | --- | --- |
| Investor Overview | https://eip.novabia.dev/ | `index.html` |
| The Game / Ahmed persona | https://eip.novabia.dev/product/ | `product/index.html` |
| Market & comparables | https://eip.novabia.dev/market/ | `market/index.html` |
| Economics / interactive calculator | https://eip.novabia.dev/economics/ | `economics/index.html` |
| Milestones / roadmap | https://eip.novabia.dev/roadmap/ | `roadmap/index.html` |
| Tools & AI transparency | https://eip.novabia.dev/tools/ | `tools/index.html` |
| Investor Room / return illustrations / risks | https://eip.novabia.dev/investors/ | `investors/index.html` |

**Print/QR policy:** Use the canonical HTTPS URL with a final slash and **no `#` tab fragment**. The previous `#product`, `#market`, `#economics`, etc. routes have deliberately not been preserved because no EIP QR codes were submitted or printed before this migration. Investor/contact QR codes should point to `https://eip.novabia.dev/investors/`. QR codes for the playable build belong at `https://play.novabia.dev/`.

Real content is in each page's HTML, with its own title, description, canonical URL and navigation. `#main` remains only as an accessibility skip-link target, not an EIP route.

- `sitemap.xml` contains the seven real URLs on `eip.novabia.dev`.
- `robots.txt` points to the canonical EIP sitemap.
- The Search Console `novabia.dev` Domain Property covers the subdomain; submit `https://eip.novabia.dev/sitemap.xml`.
- Each new EIP page needs a direct URL, indexable HTML, unique metadata, sitemap entry and navigation link.
- Do not publish phantom URLs, stale hash-route links, invented business performance, fake release dates or unverified structured-data ratings.

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

## Source files and responsibilities

- `index.html`: Investor overview and navigation; not a container for the other six sections.
- `product/index.html`: The game, Ahmed persona, origins and interactive Heir/Tutor example.
- `market/index.html`: Third-party comparables, market figures, methodology and research measurements.
- `economics/index.html`: Budget, investor waterfall, interactive assumptions, financial scenarios and allocations.
- `roadmap/index.html`: Production timeline, measurable gates and planned content architecture.
- `tools/index.html`: Toolkit and human-led AI/asset provenance disclosures.
- `investors/index.html`: Investor returns, partnership options, diligence checklists and risk matrix.
- `styles.css`: Shared visual system, mobile layout and printing.
- `revision.css`: Refinements, risk matrix, illustrations and response styling.
- `script.js`: Mobile navigation, **page-scoped** evolution example, **page-scoped** calculator, and Investor Room print control; it does **not** implement tab routing.
- `robots.txt`, `sitemap.xml`: Crawl discovery for EIP host only.
- `CNAME`, `favicon.png`: GitHub Pages custom domain and brand icon.

The EIP site has independent pages. Always edit the section's own `index.html` rather than adding content to a hidden homepage tab.

