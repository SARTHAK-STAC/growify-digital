export interface ServiceCapability {
  id: string;
  title: string;
  subtitle: string;
  category: "Storefront" | "Acquisition" | "Retention" | "Sales Operations" | "Organic" | "Intelligence";
  signatureService: boolean;
  slug: string;
  problem: string;
  approach: string;
  deliverables: string[];
  process: {
    step: string;
    title: string;
    desc: string;
  }[];
  evidence: {
    metric: string;
    context: string;
  }[];
  faqs: {
    question: string;
    answer: string;
  }[];
  cta: string;
}

export const SERVICES: ServiceCapability[] = [
  {
    id: "commerce",
    title: "Commerce & Shopify Architecture",
    subtitle: "High-performance digital flagship storefronts engineered for luxury storytelling and seamless conversion.",
    category: "Storefront",
    signatureService: true,
    slug: "commerce",
    problem:
      "Most luxury brands struggle on standard templates that look generic, load sluggishly under heavy high-res fashion photography, fail to handle international multi-currency pricing, and create high checkout abandonment.",
    approach:
      "We build custom, bespoke Shopify Plus experiences that pair haute couture editorial aesthetics with micro-optimized code architectures. Every layout is crafted for tactile luxury feel while maintaining sub-2.5s global load speeds.",
    deliverables: [
      "Bespoke Shopify Plus theme design & custom Liquid engineering",
      "Headless / API-driven commerce integrations",
      "Shopify Markets internationalization (multi-currency, duties, geo-IP routing)",
      "Made-to-Order & Custom Measurement intake forms",
      "Private VIP trunk show & gated client shopping portals",
      "Speed, Core Web Vitals, and mobile responsiveness audits",
    ],
    process: [
      { step: "01", title: "Brand & Architecture Audit", desc: "Analysis of catalog complexity, custom sizing rules, international requirements, and legacy technical debt." },
      { step: "02", title: "Editorial UX/UI Design", desc: "Crafting bespoke mobile-first wireframes inspired by global luxury fashion houses." },
      { step: "03", title: "Rigorous Engineering", desc: "Hand-coded, semantic Shopify OS 2.0 sections with zero third-party app bloat." },
      { step: "04", title: "Stress Testing & Launch", desc: "Comprehensive testing across 15+ devices, international checkout currencies, and automated backups." },
    ],
    evidence: [
      { metric: "500+", context: "Commerce websites engineered and launched for Indian & global brands." },
      { metric: "2.54x", context: "Online revenue scale achieved for flagship couture client Mahima Mahajan." },
      { metric: "Sub-2.5s", context: "Average global mobile LCP maintained even with high-res editorial lookbooks." },
    ],
    faqs: [
      {
        question: "Do you build on Shopify Plus or standard Shopify?",
        answer: "We develop on both Shopify Plus and Advanced Shopify, choosing the architecture that matches your brand scale, multi-currency needs, and checkout customization requirements.",
      },
      {
        question: "How do you handle made-to-order couture vs ready-to-ship pret?",
        answer: "We design dual-inventory routing into product detail pages, enabling custom sizing fields, dispatch lead times, and bridal stylist appointment bookings alongside instant RTS checkouts.",
      },
      {
        question: "Can we integrate our existing ERP, POS, and inventory software?",
        answer: "Yes. We have integrated ERPs including SAP, Microsoft Dynamics, Logic ERP, and custom warehouse management systems via custom Shopify private apps.",
      },
    ],
    cta: "Discuss Your Commerce Architecture",
  },
  {
    id: "growth",
    title: "Performance Marketing & Customer Acquisition",
    subtitle: "Closed-loop, high-intent paid acquisition engines across Meta, Google, and premium channels.",
    category: "Acquisition",
    signatureService: true,
    slug: "growth",
    problem:
      "Luxury fashion brands often waste significant media budget on generic broad-audience ads that bring low-intent traffic, dilute prestige image, and fail to generate profitable return on ad spend (ROAS).",
    approach:
      "We design precision performance marketing frameworks tailored specifically for high-AOV fashion and fine jewellery. We segment audiences by aesthetic taste, diaspora geography, and wedding timelines to capture high-intent purchasers.",
    deliverables: [
      "Meta Advantage+ Shopping & bespoke luxury video creative testing",
      "Google Search, Performance Max, and YouTube High-Intent campaigns",
      "Global diaspora acquisition (US, Canada, UK, UAE, Australia)",
      "Dynamic budget reallocation across best-converting international territories",
      "Server-side Conversions API (CAPI) and GA4 first-party measurement",
      "Creative direction and editorial asset adaptation for paid ads",
    ],
    process: [
      { step: "01", title: "Audience & Category Blueprint", desc: "Mapping customer acquisition costs against average order values and margin thresholds." },
      { step: "02", title: "Full-Funnel Campaign Architecture", desc: "Structuring prospect awareness, middle-funnel consideration, and high-urgency checkout." },
      { step: "03", title: "Creative Experimentation", desc: "Testing editorial lookbook stills vs behind-the-scenes atelier video assets." },
      { step: "04", title: "Daily Pacing & Margin Defense", desc: "Real-time budget management prioritizing profitable margin over vanity ad spend." },
    ],
    evidence: [
      { metric: "87%", context: "Average sales revenue growth across managed partner accounts in FY'25." },
      { metric: "2x", context: "Return on Ad Spend (ROAS) compared to standard luxury fashion industry benchmarks." },
      { metric: "81%", context: "Sustained year-over-year online growth driven for flagship international couture brand." },
    ],
    faqs: [
      {
        question: "How do you preserve brand exclusivity while running performance ads?",
        answer: "We never run discount-heavy or coupon-driven ads. All creative assets follow strict editorial guidelines, typography hierarchy, and luxury art direction that elevate the brand while driving direct sales.",
      },
      {
        question: "What is your approach to international customer acquisition?",
        answer: "We create dedicated market clusters (North America diaspora, GCC high-net-worth, UK bridal) with localized messaging, currency references, and delivery timeline guarantees.",
      },
      {
        question: "How do you measure attribution in high-consideration purchases?",
        answer: "We combine server-side Meta CAPI, Google Enhanced Conversions, and first-party GA4 data-driven models, verified against actual settled Shopify revenue.",
      },
    ],
    cta: "Accelerate Your Customer Acquisition",
  },
  {
    id: "retention",
    title: "Retention & CRM Lifecycle Marketing",
    subtitle: "Turning one-time buyers into lifetime patrons through WhatsApp conversational journeys and personalized email automation.",
    category: "Retention",
    signatureService: true,
    slug: "growth#retention",
    problem:
      "High acquisition costs make relying purely on new customers unprofitable. Luxury brands frequently fail to re-engage past buyers through impersonal, generic bulk newsletters that hurt deliverability.",
    approach:
      "We build deeply personalized, milestone-driven lifecycle journeys. From automated WhatsApp concierge updates to VIP bridal styling nurture series, we treat retention as an intimate extension of the luxury boutique experience.",
    deliverables: [
      "Automated WhatsApp customer journeys via QuickReply & LimeChat",
      "Klaviyo email architecture: VIP tiers, replenishment, bridal follow-ups",
      "Cart, checkout, and browse abandonment recovery with high-touch styling offers",
      "VIP trunk show previews and private pre-access drops",
      "Customer lifetime value (LTV) cohort analysis and churn prevention",
    ],
    process: [
      { step: "01", title: "Cohort & RFM Analysis", desc: "Segmenting customer database by recency, frequency, and monetary order value." },
      { step: "02", title: "Channel Orchestration", desc: "Determining optimal touchpoints between WhatsApp, email, and private SMS." },
      { step: "03", title: "Copywriting & Styling Assets", desc: "Drafting conversational concierge scripts that feel human, attentive, and refined." },
      { step: "04", title: "Continuous Flow Optimization", desc: "A/B testing timing delays, subject lines, and stylist introduction hooks." },
    ],
    evidence: [
      { metric: "45–55%", context: "Repeat purchase contribution achieved across mature retained brand accounts." },
      { metric: "80–90%", context: "Proportion of total brand revenue generated online via combined acquisition and push retention." },
    ],
    faqs: [
      {
        question: "Is WhatsApp marketing intrusive for a luxury brand?",
        answer: "Not when executed properly. We avoid spam broadcasts and focus strictly on opt-in transactional updates, bespoke stylist introductions, and private seasonal invitations with 90%+ read rates.",
      },
      {
        question: "Which platforms do you integrate with?",
        answer: "We are deeply experienced with Klaviyo, LimeChat, QuickReply, Omnisend, and custom Shopify webhooks.",
      },
    ],
    cta: "Build Your Retention Engine",
  },
  {
    id: "sales-ops",
    title: "Sales Operations & Concierge Enablement",
    subtitle: "18+ hours of live sales consultation closing high-ticket couture inquiries across international time zones.",
    category: "Sales Operations",
    signatureService: false,
    slug: "growth#sales-ops",
    problem:
      "A bride in New York or Dubai browsing a ₹2,00,000 lehenga at 11 PM local time needs immediate sizing advice, fabric details, and delivery confirmations. When no one responds, the sale is lost to an offline competitor.",
    approach:
      "We provide structured sales handling and assisted conversions. Our luxury sales operators act as an informed extension of your boutique team across 18+ daily hours, converting uncertain inquiries into completed orders.",
    deliverables: [
      "18+ hours daily WhatsApp & live chat concierge desk",
      "Time-zone aligned coverage for North America, UK, Middle East, and APAC",
      "Bridal customization and bespoke measurement intake protocols",
      "Direct assisted-checkout creation and payment link generation",
      "Offline boutique appointment scheduling and cross-channel attribution",
    ],
    process: [
      { step: "01", title: "Stylist Knowledge Transfer", desc: "Immersing sales operators in collection details, fabrics, silhouette drapes, and production lead times." },
      { step: "02", title: "Routing & Triage Logic", desc: "Directing casual queries to automated flows while routing high-AOV bridal shoppers to senior stylists." },
      { step: "03", title: "Assisted Cart Execution", desc: "Generating pre-filled custom payment orders sent directly to client chat." },
      { step: "04", title: "Post-Sale Delight", desc: "Tracking production milestones and updating clients proactively until final doorstep delivery." },
    ],
    evidence: [
      { metric: "18+ Hours", context: "Daily CRM and sales concierge coverage across international time zones." },
      { metric: "35%+", context: "Increase in high-ticket inquiry-to-order conversion rate with assisted sales desks." },
    ],
    faqs: [
      {
        question: "Can your sales team understand intricate couture craftsmanship?",
        answer: "Yes. Our team undergoes detailed training with your atelier and merchandising heads, learning fabric specifics, embroidery terminology, and custom fitting nuances.",
      },
    ],
    cta: "Enable Assisted Sales Conversion",
  },
  {
    id: "organic",
    title: "Organic Growth & Fashion SEO",
    subtitle: "Enduring authority, category visibility, and AI-assistant discovery for luxury labels.",
    category: "Organic",
    signatureService: false,
    slug: "growth#organic",
    problem:
      "Fashion e-commerce sites frequently have thin category pages, duplicate faceted URLs from filters, poor image alt descriptions, and zero content capturing high-intent bridal and eveningwear searches.",
    approach:
      "We execute strategic technical SEO, semantic category taxonomies, and rich editorial guides that establish search dominance for high-intent queries and optimize discovery across Google and emerging AI search engines.",
    deliverables: [
      "Faceted filter canonicalization and index control",
      "High-intent keyword and search-intent architecture",
      "Category copy and editorial luxury journal development",
      "Product schema, Organization schema, and BreadcrumbList JSON-LD",
      "Image SEO and fast WebP / AVIF responsive delivery",
      "AI engine discoverability (ChatGPT, Perplexity, Gemini citations)",
    ],
    process: [
      { step: "01", title: "Technical Crawl Audit", desc: "Eliminating crawl bloat, faceted URL duplicates, and 404 redirect chains." },
      { step: "02", title: "Intent & Category Mapping", desc: "Structuring collections around actual buyer search terms (e.g. 'contemporary pre-draped saree')." },
      { step: "03", title: "Editorial Content Creation", desc: "Publishing trend forecasts, bridal styling guides, and designer craftsmanship narratives." },
      { step: "04", title: "Schema & Knowledge Graph", desc: "Embedding rich structured data for instant Google snippet indexing." },
    ],
    evidence: [
      { metric: "Top 3", context: "Google search placements achieved for core non-branded designer fashion queries." },
      { metric: "+140%", context: "Average 12-month organic non-branded search session growth across portfolio." },
    ],
    faqs: [
      {
        question: "How long does SEO take to produce revenue for a fashion label?",
        answer: "Technical fixes and category optimization typically show measurable organic traffic growth within 90–120 days, compounding into sustainable, media-cost-free revenue over 12–24 months.",
      },
    ],
    cta: "Elevate Your Organic Search Visibility",
  },
  {
    id: "data-ai",
    title: "Data Intelligence & AI Operations",
    subtitle: "Unified commercial visibility, automated reporting, and proprietary AI commerce products.",
    category: "Intelligence",
    signatureService: false,
    slug: "products",
    problem:
      "Brand leaders navigate fragmented data across Shopify, Meta ad accounts, Google Analytics, inventory warehouses, and offline stores, making timely commercial decisions almost impossible.",
    approach:
      "We unify commercial reporting into actionable dashboards and build proprietary AI tools—including our flagship virtual try-on platform Lookify—that directly improve digital customer experience and operating efficiency.",
    deliverables: [
      "Unified executive dashboards (Blended ROAS, CAC, LTV, Contribution Margin)",
      "Automated stock & RTS replenishment alerting models",
      "Lookify AI Virtual Try-On integration and custom widget deployment",
      "Custom analytics pipelines reconciling gateway settlements with bank accounts",
    ],
    process: [
      { step: "01", title: "Data Audit & Tracking Validation", desc: "Verifying tracking fidelity across all touchpoints and server events." },
      { step: "02", title: "Dashboard Architecture", desc: "Building executive-ready visualizations focused on net margin and unit economics." },
      { step: "03", title: "AI Tool Integration", desc: "Deploying Lookify virtual try-on on high-consideration product pages." },
    ],
    evidence: [
      { metric: "100K+", context: "Virtual try-ons processed across brands powered by Lookify." },
      { metric: "90%", context: "Visual try-on generation success rate on Lookify AI engine." },
    ],
    faqs: [
      {
        question: "What is Lookify?",
        answer: "Lookify is Growify's proprietary AI virtual try-on platform that enables shoppers to upload a photo and visualize themselves in luxury outfits within seconds before ordering.",
      },
    ],
    cta: "Explore Our Technology Ecosystem",
  },
];
