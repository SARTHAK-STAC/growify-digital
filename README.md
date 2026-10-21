# Growify Digital — Connected Commerce & Growth Systems
**AI Generalist Practical Assignment | Production Application & Strategic Documentation**

> **Strategic Positioning:** Growify builds connected commerce and growth systems for ambitious fashion, couture, jewellery, and lifestyle brands. Connecting digital storefronts, performance acquisition, conversion rate optimization, customer retention, sales operations, data intelligence, and AI-enabled commerce products.

---

## 1. Project Overview & Architecture

This repository contains the complete production-ready web application and strategic positioning suite for **Growify Digital LLP** (founded 2019, New Delhi; Founders: Rishab Mehra & Disha Bhatnagar). The implementation reimagines Growify from an isolated marketing agency into a full-funnel connected commerce partner for luxury and lifestyle brands.

- **Live Production Deployment:** [https://growify-digital.vercel.app](https://growify-digital.vercel.app)
- **GitHub Repository:** [https://github.com/SARTHAK-STAC/growify-digital](https://github.com/SARTHAK-STAC/growify-digital)
- **Factual Integrity:** Built strictly using the primary *Growify Growth Deck* and *Candidate Assignment Brief*. All claims are attributed to verified data points; inconsistencies in source materials (such as Mahima Mahajan's 251% revenue metric and Ridhi Mehra's unspecified 72M unit) are explicitly preserved and tagged with `NEEDS VALIDATION` rather than artificially fabricated.
- **Production Completeness:** 18 fully developed routes with editorial typography, custom fashion imagery, Radix UI primitives, dynamic SEO metadata, and zero dead links.

---

## 2. Technology Stack

- **Framework:** React 18.3.1 with TypeScript 5.8
- **Bundler & Tooling:** Vite 5.4.19 (`@vitejs/plugin-react-swc`)
- **Routing:** React Router DOM v6.30 (SPA with automatic scroll restoration via `ScrollToTop`)
- **Styling:** Tailwind CSS 3.4.17 with `tailwindcss-animate` and `@tailwindcss/typography`
- **UI Primitives:** Radix UI (`@radix-ui/react-accordion`, `@radix-ui/react-dialog`)
- **Icons:** Lucide React
- **Typography:** Cormorant Garamond (Editorial Luxury Serif), Montserrat (Modern Geometric Sans)
- **Production Bundle:** Total JavaScript payload ~112 kB gzipped; global CSS ~7.5 kB gzipped.

---

## 3. Local Setup & Execution Instructions

### Prerequisites
- Node.js 18+ (Node.js 20+ LTS recommended)
- npm, yarn, or pnpm

### Quick Start
```bash
# 1. Clone the repository
git clone https://github.com/SARTHAK-STAC/growify-digital.git
cd growify-digital

# 2. Install dependencies
npm install

# 3. Start local development server (with Hot Module Replacement)
npm run dev
# Accessible at: http://localhost:5173/

# 4. Run TypeScript validation
npx tsc --noEmit

# 5. Build for production
npm run build

# 6. Preview the production build locally
npm run preview
# Accessible at: http://127.0.0.1:3000/
```

---

## 4. Complete Route Inventory (18 Routes Implemented)

| Route | Name | Page Component | Focus & Function |
| :--- | :--- | :--- | :--- |
| `/` | **Homepage** | [`HomePage.tsx`](src/pages/HomePage.tsx) | 13-section narrative, Lookify simulator, verified brand marquee, enquiry anchor |
| `/services` | **Connected Services** | [`ServicesPage.tsx`](src/pages/ServicesPage.tsx) | Full growth engine: Storefront, Acquisition, Retention, Sales Ops, Data |
| `/services/commerce` | **Commerce & Shopify** | [`CommerceServicePage.tsx`](src/pages/CommerceServicePage.tsx) | 3-tier Shopify Plus architecture, bespoke Liquid, Core Web Vitals |
| `/services/growth` | **Growth & Retention** | [`GrowthServicePage.tsx`](src/pages/GrowthServicePage.tsx) | Meta/Google Ads, WhatsApp CRM, 18-hour sales concierge, fashion SEO |
| `/industries` | **Industry Expertise** | [`IndustriesPage.tsx`](src/pages/IndustriesPage.tsx) | Couture & Bridal, Fine Jewellery, Contemporary Pret, Luxury Lifestyle |
| `/case-studies` | **Case Studies Index** | [`CaseStudiesIndexPage.tsx`](src/pages/CaseStudiesIndexPage.tsx) | Proof index, evidence standards, 6-part future case-study pipeline checklist |
| `/case-studies/mahima-mahajan` | **Mahima Mahajan** | [`MahimaCaseStudyPage.tsx`](src/pages/MahimaCaseStudyPage.tsx) | 81% YoY online scale, RTS factory merchandising, 251% discrepancy badge |
| `/case-studies/ridhi-mehra` | **Ridhi Mehra** | [`RidhiCaseStudyPage.tsx`](src/pages/RidhiCaseStudyPage.tsx) | 7-year brand journey, WhatsApp assisted sales, 72M currency audit notice |
| `/products` | **Technology Overview** | [`ProductsPage.tsx`](src/pages/ProductsPage.tsx) | Software ecosystem connecting service capabilities with scalable software |
| `/products/lookify` | **Lookify** | [`LookifyProductPage.tsx`](src/pages/LookifyProductPage.tsx) | Flagship virtual try-on, before/after slider, 90% success rate, verified links |
| `/products/rossify` | **Rossify** | [`RossifyProductPage.tsx`](src/pages/RossifyProductPage.tsx) | Workflow automation platform labeled **Beta** with operational checklist |
| `/products/craftify` | **Craftify** | [`CraftifyProductPage.tsx`](src/pages/CraftifyProductPage.tsx) | AI creative studio labeled **Concept** with legal/IP compliance checklist |
| `/partners` | **Partners & Ecosystem** | [`PartnersPage.tsx`](src/pages/PartnersPage.tsx) | LimeChat, QuickReply, Razorpay, Shopify Plus, Klaviyo (Pagey/Clocal excluded) |
| `/about` | **About & Leadership** | [`AboutPage.tsx`](src/pages/AboutPage.tsx) | 2019 Delhi origin, Rishab Mehra, Disha Bhatnagar, 100+ team, philosophy |
| `/life-at-growify` | **Interactive Office Tour**| [`LifeAtGrowifyPage.tsx`](src/pages/LifeAtGrowifyPage.tsx) | **Interactive Feature:** 5 spatial zones (Growth, Lab, Studio, Concierge, Town Hall) |
| `/insights` | **Editorial Journal** | [`InsightsPage.tsx`](src/pages/InsightsPage.tsx) | 8 comprehensive playbooks with keyword intent, search tags, internal links |
| `/careers` | **Careers** | [`CareersPage.tsx`](src/pages/CareersPage.tsx) | 4 open specifications (AI Generalist, Shopify Architect, Growth Lead, Concierge) |
| `/contact` | **Contact & Enquiry** | [`ContactPage.tsx`](src/pages/ContactPage.tsx) | Validated project brief form with transparent client-side demo state |

---

## 5. Key Interactive & Editorial Features

1. **Editorial Luxury Design Language:**
   - Palette inspired by luxury couture: warm white (`#FAF8F5`), deep plum/charcoal (`#1A1420` / `#3F304D`), restrained lavender silk (`#BB96DA`), and soft mint accents (`#93DCDF`).
   - Elegant 1px linear divider rules (`.editorial-rule`) and generous whitespace evoke physical luxury lookbooks.
2. **Lookify Before/After Interactive Comparison:**
   - Real-time interactive drag slider demonstrating AI virtual drape over model photography on `/products/lookify` and `/`.
3. **5-Zone Interactive Spatial Office Tour:**
   - Dynamic floorplan on `/life-at-growify` featuring interactive hotspot pins that update department narratives, active team roles, and real-time operations.
4. **Transparent Form Validation & Demo State:**
   - Complete input validation (required fields, regex email syntax).
   - Both `EnquiryModal.tsx` and `ContactPage.tsx` display an honest demo state banner informing the user that no remote API endpoint is connected, completely preventing misleading "success" messages.
5. **Technical SEO Infrastructure:**
   - Dynamic `<title>`, `<meta name="description">`, and `<link rel="canonical">` powered by `SEOHead.tsx`.
   - Single `<h1>` per route with structured semantic heading hierarchy.
   - Zero missing image `alt` attributes.
   - `public/robots.txt` and `public/sitemap.xml` covering all 18 routes.
   - Single-page application rewrites via `vercel.json` and `public/_redirects`.

---

## 6. Strategic Documentation Index

All detailed strategic analysis, technical architecture, and verification records are maintained in the [`docs/`](docs/) directory:

- [`docs/strategy.md`](docs/strategy.md) — Current-site audit (`growify.in`), luxury positioning, audience profiles, and competitive differentiation.
- [`docs/sitemap.md`](docs/sitemap.md) — 18-route information architecture, target audience segments, and primary conversion CTAs.
- [`docs/case-study-validation.md`](docs/case-study-validation.md) — Source audit of Mahima Mahajan and Ridhi Mehra decks, discrepancy reconciliation, and a 6-part future case-study intake protocol.
- [`docs/seo-plan.md`](docs/seo-plan.md) — 9 luxury fashion keyword clusters, technical SEO audits, and 8 fully authored editorial playbooks.
- [`docs/measurement-plan.md`](docs/measurement-plan.md) — GA4 / GTM event tracking architecture, data layer specifications, and e-commerce conversion triggers.
- [`docs/ai-workflow.md`](docs/ai-workflow.md) — Record of agentic AI prompts, Python stream parsing of the 186MB deck, and fact-checking protocols.
- [`docs/implementation-report.md`](docs/implementation-report.md) — Full technical handover report, build sizes, test matrices, and hosting setups.
- [`docs/submission-summary.md`](docs/submission-summary.md) — Concise executive summary of strategy, technical deliverables, and verification results.
- [`docs/walkthrough-script.md`](docs/walkthrough-script.md) — 2–3 minute video presentation walkthrough plan with exact Windows recording instructions.

---

## 7. Known Limitations & Demo Functionality

- **Demo Enquiry State:** Contact forms capture submissions client-side for demonstration purposes and present a clear disclaimer. In production, configure an authenticated CRM webhook (e.g., HubSpot, Klaviyo, or Slack webhook).
- **Source Discrepancies Preserved:**
  - *Mahima Mahajan:* Slide 16 of the Growth Deck reports "251% of total online revenue", which conflicts with Slide 17 ("251% per year"). Documented as requiring client audit.
  - *Ridhi Mehra:* Slide 22 states "Scaled revenue by 72M over 7 years" with no currency denomination (INR Crores vs INR Millions). Tagged for financial clarification.
- **Product Tiers:** Rossify is designated as **Beta** and Craftify as an **Architectural Concept**, reflecting their respective maturity levels in the assignment brief.
