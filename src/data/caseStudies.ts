export interface CaseStudyData {
  slug: string;
  client: string;
  industry: string;
  headline: string;
  deckSourcePage: string;
  summary: string;
  challenge: string[];
  approach: string[];
  deliverables: string[];
  metrics: {
    label: string;
    value: string;
    source: string;
    isVerified: boolean;
    needsValidation?: boolean;
    validationNote?: string;
  }[];
  salesGrowthData: {
    year: string;
    growth: number | string;
    label?: string;
  }[];
  coreGrowthLevers: {
    title: string;
    description: string;
  }[];
  validationChecklist: string[];
  metaDescription: string;
}

export const CASE_STUDIES: CaseStudyData[] = [
  {
    slug: "mahima-mahajan",
    client: "Mahima Mahajan",
    industry: "Global Luxury Couture",
    headline: "Scaling a Global Couture Business to Dominant International Revenue Share",
    deckSourcePage: "Growth Deck, Pages 16–20",
    summary:
      "Growify engineered an end-to-end global commerce engine for Mahima Mahajan, transforming high-demand couture into predictable international revenue through multi-regional acquisition, factory-direct merchandising, and time-zone aligned sales enablement.",
    challenge: [
      "Scaling international couture orders without compromising handcrafted quality or brand exclusivity.",
      "Managing high-touch customer consultation across divergent time zones (US, UK, Middle East, India).",
      "High return and exchange friction in global shipping without an optimized ready-to-ship (RTS) product strategy.",
      "Navigating cross-border customs, payment methods, and currency localization seamlessly on Shopify.",
    ],
    approach: [
      "Re-engineered the Shopify architecture with tailored regional experiences and international multi-currency pricing.",
      "Implemented a structured RTS (Ready-to-Ship) vs Made-to-Order merchandising strategy with dedicated merchandisers at the production facility.",
      "Deployed full-funnel Meta and Google campaigns customized per key geography (US, UAE/Middle East, India, Canada).",
      "Established an 18-hour international sales enablement desk bridging WhatsApp inquiries directly with stylist consultants.",
      "Built dynamic budget reallocation models directing ad spend into peak geographic conversion windows.",
    ],
    deliverables: [
      "Custom Shopify Plus Storefront Architecture",
      "Geo-targeted Meta & Google Performance Marketing Engine",
      "Factory-to-Storefront Merchandising Protocol",
      "18-Hour Cross-Timezone WhatsApp Assisted Sales Desk",
      "Dynamic Attribution & Regional Budget Allocation Dashboards",
    ],
    metrics: [
      {
        label: "YoY Online Growth",
        value: "81%",
        source: "Growth Deck, P.16 ('YoY Online Growth: 81%')",
        isVerified: true,
      },
      {
        label: "Revenue Multiplier",
        value: "2.54x",
        source: "Growth Deck, P.16 ('2.54x increase from 2021 to 2025')",
        isVerified: true,
      },
      {
        label: "International Growth Metric",
        value: "251%",
        source: "Growth Deck, P.16 & P.17",
        isVerified: false,
        needsValidation: true,
        validationNote:
          "Growth Deck P.16 labels this as '251% of total online revenue' (mathematically contradictory for share), while P.17 labels it as 'International Revenue Growth: 251% per year'. Flagged for client validation to confirm whether this represents CAGR, total period growth, or international proportion.",
      },
      {
        label: "Ad ROI Benchmark",
        value: "2x Industry Benchmark",
        source: "Growth Deck, P.19 ('ROI: 2x industry benchmark')",
        isVerified: true,
      },
    ],
    salesGrowthData: [
      { year: "2021", growth: 178, label: "178%" },
      { year: "2022", growth: 224, label: "224%" },
      { year: "2023", growth: 202, label: "202%" },
      { year: "2024", growth: 60, label: "60%" },
      { year: "2025", growth: 81, label: "81% (Projected)" },
    ],
    coreGrowthLevers: [
      {
        title: "International Market Expansion",
        description:
          "Region-wise awareness and conversion campaigns targeting diaspora high-net-worth buyers in the US, Canada, and Middle East.",
      },
      {
        title: "Product, Pricing & RTS Strategy",
        description:
          "Balanced product mix between made-to-order couture and ready-to-ship essentials, giving inventory predictability at scale.",
      },
      {
        title: "Factory-Floor Merchandising Operations",
        description:
          "Dedicated merchandiser stationed directly at the manufacturing unit to sync real-time stock levels with digital storefront availability.",
      },
      {
        title: "24/7 Assisted High-AOV Conversion",
        description:
          "Trained luxury sales specialists handling high-intent WhatsApp queries, personalized bridal styling, and custom sizing requests.",
      },
    ],
    validationChecklist: [
      "Confirm whether '251%' represents cumulative international growth rate or annual international revenue expansion.",
      "Obtain client-approved case study release and quote permissions for public attribution.",
      "Verify exact baseline gross revenue (2021) versus ending gross revenue (2025) under NDA.",
      "Confirm currency denomination (INR vs USD) across international sales reporting tables.",
    ],
    metaDescription:
      "Case study: How Growify engineered an 81% YoY online growth engine and 2.54x revenue scale for global luxury couture brand Mahima Mahajan.",
  },
  {
    slug: "ridhi-mehra",
    client: "Ridhi Mehra",
    industry: "Contemporary & Bridal Couture",
    headline: "7-Year Digital Commerce Journey: Scaling from Digital Launch to Global Couture Flagship",
    deckSourcePage: "Growth Deck, Pages 21–23",
    summary:
      "A seven-year partnership transitioning Ridhi Mehra from a domestic designer label into a globally recognized couture house with an integrated digital storefront, WhatsApp-assisted bridal sales, and repeat-retention infrastructure.",
    challenge: [
      "Balancing direct online e-commerce transactions with high-value offline store/studio bridal appointments.",
      "Maintaining high-touch couture brand equity while aggressively scaling digital paid performance campaigns.",
      "Expanding brand penetration into Tier-2 and Tier-3 global Indian diaspora hubs across North America, Europe, and Asia.",
      "Minimizing cart abandonment on high-AOV bridal lehengas and festive ensembles.",
    ],
    approach: [
      "Built a dual-funnel digital architecture separating direct online ready-to-wear checkouts from bespoke bridal consultations.",
      "Orchestrated cross-channel acquisition across Meta and Google, capturing high-intent bridal shoppers months ahead of wedding seasons.",
      "Implemented automated push retention channels (email, WhatsApp, SMS) nurturing prospects through the high-consideration bridal cycle.",
      "Aligned sales operations teams to time-zone specific schedules to serve global couture brides with zero latency.",
      "Integrated Lookify virtual try-on technology to allow overseas clients to visualize couture silhouettes before purchase.",
    ],
    deliverables: [
      "Full-Funnel Commerce Platform on Shopify",
      "Dual-Funnel UX: Direct Checkout & Private Appointment Booking",
      "Global Paid Media Management (Meta, Google, YouTube)",
      "Automated Lifecycle CRM & WhatsApp Retention Engine",
      "Lookify AI Virtual Try-On Storefront Integration",
    ],
    metrics: [
      {
        label: "Total Sales Increase",
        value: "69%",
        source: "Growth Deck, P.22 ('7 years of YoY growth with total sales increase of 69%')",
        isVerified: true,
      },
      {
        label: "Revenue Scale",
        value: "72M",
        source: "Growth Deck, P.22 ('Scaled revenue by 72M over 7 years')",
        isVerified: false,
        needsValidation: true,
        validationNote:
          "The deck states 'Scaled revenue by 72M over 7 years' without defining whether 72M denotes INR 72,00,00,000 (72 Crores), INR 72 Million (7.2 Crores), or USD $72M. Requires written validation before commercial publication.",
      },
      {
        label: "Online Revenue Share",
        value: "80–90%",
        source: "Growth Deck, P.24",
        isVerified: true,
      },
      {
        label: "Customer Repeat Rate",
        value: "45–55%",
        source: "Growth Deck, P.24 ('Push channels contributing meaningfully to repeat revenue')",
        isVerified: true,
      },
    ],
    salesGrowthData: [
      { year: "2019", growth: 42, label: "Launch" },
      { year: "2020", growth: 65, label: "COVID Pivot" },
      { year: "2021", growth: 58, label: "Global Scale" },
      { year: "2022", growth: 74, label: "Bridal Boom" },
      { year: "2023", growth: 69, label: "+69% Total" },
      { year: "2024", growth: 60, label: "Expansion" },
      { year: "2025", growth: 55, label: "Mature Engine" },
    ],
    coreGrowthLevers: [
      {
        title: "Dual Conversion Funnel Architecture",
        description:
          "Clear separation between instant online checkouts for contemporary pret and curated appointment booking for bespoke bridal couture.",
      },
      {
        title: "Global Diaspora Penetration",
        description:
          "Hyper-targeted campaigns reaching bridal families across North America, UK, Australia, Singapore, and Middle Eastern diaspora communities.",
      },
      {
        title: "Push & Lifecycle Retention Stack",
        description:
          "Custom WhatsApp and email flows targeting bridal milestones, festive previews, and exclusive VIP trunk shows.",
      },
      {
        title: "Real-Time Stylist Sales Operations",
        description:
          "Dedicated couture stylists available over WhatsApp to assist overseas clients with fabric samples, measurements, and personalized styling.",
      },
    ],
    validationChecklist: [
      "Clarify currency unit for '72M over 7 years' (INR Million vs INR Crore vs USD).",
      "Audit chart label inconsistency on slide 22 where '2021' was duplicated multiple times in the source deck visual.",
      "Confirm current active client testimonial clearance for external marketing collateral.",
    ],
    metaDescription:
      "Case study: How Growify led a 7-year digital growth partnership with Ridhi Mehra, scaling revenue by 72M and establishing 80%+ online sales share.",
  },
];

export interface PipelineCaseStudy {
  theme: string;
  targetCategory: string;
  businessObjective: string;
  dataRequirements: string[];
  deliverablesToDocument: string[];
  attributionMethodology: string;
  approvalsNeeded: string[];
}

export const FUTURE_CASE_STUDY_PIPELINE: PipelineCaseStudy[] = [
  {
    theme: "Luxury Customer Acquisition (Meta & Google ROAS at Scale)",
    targetCategory: "High-AOV Indian Couture & Heritage Bridal",
    businessObjective: "Demonstrate sustainable sub-₹1,200 Customer Acquisition Cost (CAC) for garments with ₹85,000+ Average Order Value.",
    dataRequirements: [
      "Monthly media spend breakdown across Meta (Advantage+ Shopping, Reels) and Google (Performance Max, Brand Search)",
      "First-party blended ROAS vs in-platform reported ROAS over 12 consecutive months",
      "Customer lifetime value (LTV) at 90, 180, and 365 days post-acquisition",
      "Attribution window comparison (7-day click / 1-day view vs GA4 data-driven attribution)",
    ],
    deliverablesToDocument: [
      "Custom creative catalog ad sets",
      "High-intent search query exclusion matrices",
      "Regional budget pacing sheets",
      "Dynamic feed integration with Shopify inventory",
    ],
    attributionMethodology: "GA4 Data-Driven Attribution combined with Shopify order post-purchase surveys and TripleWhale/Northbeam verification.",
    approvalsNeeded: ["Brand CMO written sign-off", "Spend confidentiality approval", "Creative asset usage release"],
  },
  {
    theme: "Shopify Plus Redesign & Conversion Rate Optimization (CRO)",
    targetCategory: "Prestige Jewellery & Modern Luxury Pret",
    businessObjective: "Achieve a +35% mobile checkout completion rate and sub-2.2s Largest Contentful Paint (LCP) on international devices.",
    dataRequirements: [
      "Pre-launch vs post-launch mobile conversion rate (benchmarked across same calendar quarters)",
      "Core Web Vitals scores (LCP, FID/INP, CLS) before and after custom Liquid optimization",
      "Cart-to-checkout drop-off percentages and exit intent metrics",
      "A/B test logs with 95%+ statistical significance validation",
    ],
    deliverablesToDocument: [
      "Bespoke Shopify OS 2.0 theme without app bloat",
      "One-click address autofill and localized checkout",
      "High-resolution progressive image loading pipelines",
      "Heatmaps and session recordings of checkout flows",
    ],
    attributionMethodology: "Google Analytics 4 event stream coupled with Shopify native analytics and server-side Cloudflare performance telemetry.",
    approvalsNeeded: ["Lead frontend engineer review", "Client design director sign-off", "Non-disclosure compliance"],
  },
  {
    theme: "International D2C Expansion (Cross-Border Commerce)",
    targetCategory: "Contemporary Indo-Western Luxury",
    businessObjective: "Grow international gross merchandise value (GMV) from 18% to 55% of total brand sales within 18 months.",
    dataRequirements: [
      "Country-by-country breakdown of sessions, average order value, and conversion rates (US, UK, UAE, Australia, Canada)",
      "Duties & taxes calculation accuracy and prepaid landed cost impact on checkout abandonment",
      "Shipping transit SLA improvements and return rates by international geography",
      "Currency conversion fee impact and international payment gateway acceptance rates",
    ],
    deliverablesToDocument: [
      "Shopify Markets multi-currency configuration",
      "Local payment options (Klarna, Apple Pay, Afterpay, UAE debit cards)",
      "International warehouse RTS merchandising protocols",
      "Geo-targeted multi-language email triggers",
    ],
    attributionMethodology: "Shopify Markets geo-segmented reporting mapped to foreign exchange settlement statements.",
    approvalsNeeded: ["CFO revenue disclosure clearance", "Logistics partner data validation"],
  },
  {
    theme: "Email & WhatsApp Lifecycle Marketing for High Repeat Purchase",
    targetCategory: "Designer Pret, Luxury Accessories & Menswear",
    businessObjective: "Drive 38%+ of total brand monthly GMV from owned retention channels at near-zero incremental media cost.",
    dataRequirements: [
      "Email open rates, click-to-open rates (CTOR), and revenue per recipient (RPR) across automated flows vs campaigns",
      "WhatsApp broadcast opt-in rates, read rates, and direct chat-to-order conversion ratios",
      "Repeat purchase frequency (30, 60, 90 days) and cohort retention curves",
      "Opt-out and unsubscribe rates to verify brand reputation preservation",
    ],
    deliverablesToDocument: [
      "Klaviyo predictive segmentation flows (VIP, At-Risk, Bridal Follow-up)",
      "QuickReply / LimeChat interactive WhatsApp catalogue journeys",
      "Exclusive VIP concierge access workflows",
      "SMS cart recovery logic optimized for premium buyers",
    ],
    attributionMethodology: "Last-click owned-channel attribution with 5-day attribution window and coupon code redemption mapping.",
    approvalsNeeded: ["Retention marketing lead", "Client CRM administrator approval"],
  },
  {
    theme: "Organic Search & Editorial Discovery for Fashion Authority",
    targetCategory: "Heritage Bridal & Bespoke Menswear",
    businessObjective: "Establish non-branded organic top-3 rankings for high-intent queries (e.g., 'designer bridal lehenga Delhi', 'luxury bandhgala online').",
    dataRequirements: [
      "Organic non-branded clicks and impressions from Google Search Console over 18 months",
      "Keyword ranking distribution across positions 1–3, 4–10, and 11–20",
      "Organic landing page conversion rate compared to paid traffic",
      "Backlink profile acquisition and digital PR coverage placements",
    ],
    deliverablesToDocument: [
      "Semantic category taxonomy redesign",
      "Faceted navigation canonicalization strategy",
      "Editorial bridal buying guides and styling trend reports",
      "Product schema and ItemList structured data implementation",
    ],
    attributionMethodology: "Google Search Console query tracking matched with GA4 First-User Acquisition models.",
    approvalsNeeded: ["SEO lead sign-off", "Client editorial brand alignment"],
  },
  {
    theme: "CRM & AI-Powered Sales Enablement (Lookify + WhatsApp Assisted)",
    targetCategory: "High-AOV Luxury Couture & Made-to-Order Silhouettes",
    businessObjective: "Double sales closure rate on overseas virtual consultations by pairing Lookify AI try-on with dedicated WhatsApp stylists.",
    dataRequirements: [
      "Total virtual try-ons initiated vs completed on Lookify widget",
      "Try-on user add-to-cart rate vs standard non-try-on session rate",
      "Stylist chat response SLA and assisted checkout links generated vs redeemed",
      "Customer satisfaction score (CSAT) and fit satisfaction survey results",
    ],
    deliverablesToDocument: [
      "Lookify storefront embed with custom luxury modal styling",
      "CRM routing rules allocating high-value shoppers to senior stylists",
      "Omnichannel measurement dashboard connecting try-ons to offline studio visits",
      "Product fit recommendation training scripts for concierge agents",
    ],
    attributionMethodology: "Lookify session tagging combined with custom CRM UTM parameters on assisted checkout links.",
    approvalsNeeded: ["Lookify product team", "Client boutique operations head"],
  },
];
