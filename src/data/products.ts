export interface ProductInfo {
  id: string;
  name: string;
  status: "Live & Deployed" | "Product Overview (In Development)" | "Product Overview (Proposed Concept)";
  headline: string;
  tagline: string;
  description: string;
  officialUrl?: string;
  shopifyAppUrl?: string;
  demoUrl?: string;
  videoUrl?: string;
  verifiedMetrics?: { label: string; value: string }[];
  keyCapabilities: { title: string; desc: string }[];
  deploymentRequirements: string[];
  commercialModel: string;
  requiredProductInputs?: string[];
  roadmapStage: string;
}

export const PRODUCTS: ProductInfo[] = [
  {
    id: "lookify",
    name: "Lookify",
    status: "Live & Deployed",
    headline: "The Online Fitting Room: AI Virtual Try-On for Luxury Fashion Brands",
    tagline: "Let shoppers see how couture and designer outfits look on them before they buy, with a personalized try-on in seconds.",
    description:
      "Lookify is Growify Digital's proprietary AI virtual try-on and retail intelligence platform built specifically for high-end fashion, couture, and designer labels. Embedded directly into Shopify product pages or deployed as in-store digital mirrors, Lookify bridges the tactile gap of luxury e-commerce by generating photorealistic try-on visualizations from a single shopper photo.",
    officialUrl: "https://lookify.in",
    shopifyAppUrl: "https://apps.shopify.com/lookify",
    demoUrl: "https://lookify-demo.myshopify.com/",
    videoUrl: "https://www.youtube.com/watch?v=vCehbk0SZts",
    verifiedMetrics: [
      { label: "Visual Try-On Success Rate", value: "90%" },
      { label: "Personalized Try-Ons Delivered", value: "100K+" },
      { label: "Designer Brands Worldwide", value: "50+" },
      { label: "Average Try-On Generation Time", value: "< 5 Seconds" },
    ],
    keyCapabilities: [
      {
        title: "Photorealistic Silhouette & Drape Matching",
        desc: "Advanced neural diffusion models respect fabric weights, intricate zardozi embroideries, sheer dupattas, and tailored trouser cuts on varied body types.",
      },
      {
        title: "Zero-Latency Storefront Embed",
        desc: "Lightweight, async JavaScript SDK (<45KB) that loads without impacting Google Core Web Vitals or mobile page speed.",
      },
      {
        title: "One-Click Photo Upload & Privacy Protection",
        desc: "Shoppers upload a quick selfie or full-body photo; images are processed ephemerally with zero biometric retention, respecting international GDPR & DPDP standards.",
      },
      {
        title: "Omnichannel In-Store Digital Mirror Integration",
        desc: "Interactive kiosk mode for designer flagship stores and multi-brand boutiques allowing clients to sample styles not currently physically in stock.",
      },
    ],
    deploymentRequirements: [
      "Active Shopify / Shopify Plus storefront",
      "High-resolution ghost mannequin or flat-lay product catalog imagery on neutral background",
      "Lookify Shopify App installation or custom embed snippet via Growify engineering",
      "Catalog synchronization via automated Lookify API pipeline",
    ],
    commercialModel: "SaaS monthly subscription with usage-based try-on tiers and enterprise customization support.",
    roadmapStage: "Version 2.4 — Live in production across 50+ luxury fashion storefronts.",
  },
  {
    id: "rossify",
    name: "Rossify",
    status: "Product Overview (In Development)",
    headline: "Commerce Workflow & Operational Automation Suite",
    tagline: "Synchronizing atelier production, ready-to-ship inventory, and multi-channel customer inquiries into an automated operational heartbeat.",
    description:
      "Rossify is a proprietary operational intelligence concept engineered to eliminate manual communication bottlenecks between luxury fashion factories, merchandising directors, and digital customer support teams. Designed to provide real-time inventory visibility and automated order triage.",
    keyCapabilities: [
      {
        title: "Factory-Floor Merchandising Bridge",
        desc: "Real-time sync between factory floor production stages (cutting, embroidery, finishing) and storefront estimated dispatch dates.",
      },
      {
        title: "Intelligent Inquiry Triage",
        desc: "Automated parsing of WhatsApp and email customer queries into structured fulfillment tickets prioritized by customer lifetime value.",
      },
      {
        title: "Stock Depletion & Reorder Alerts",
        desc: "Predictive alerting for ready-to-ship fabrics and best-selling sizes ahead of seasonal wedding campaigns.",
      },
      {
        title: "Cross-Border Tax & Duty Estimation",
        desc: "Automated calculations of destination duties for luxury couture shipments to North America, UK, and the GCC.",
      },
    ],
    deploymentRequirements: [
      "Shopify Plus API access and warehouse inventory system API/CSV bridge",
      "Dedicated operational team training on triage dashboard",
    ],
    commercialModel: "Proprietary internal platform available exclusively to Growify managed enterprise growth partners.",
    requiredProductInputs: [
      "Official product roadmap confirmation and external branding guidelines",
      "Target release date for standalone beta onboarding",
      "Verified product UI screenshots or interactive demonstration sandbox",
      "Confirmation of commercial pricing structure and licensing parameters",
      "API documentation and ERP integration compatibility matrix",
    ],
    roadmapStage: "Private Beta / Operational Prototyping — Details subject to formal client validation.",
  },
  {
    id: "craftify",
    name: "Craftify",
    status: "Product Overview (Proposed Concept)",
    headline: "AI Creative Studio for Luxury Fashion & Fine Jewellery Catalogs",
    tagline: "Transforming standard atelier garment photography into high-fashion editorial lookbooks and multi-channel ad variants.",
    description:
      "Craftify represents Growify's proposed generative creative suite designed to solve the high cost and turnaround friction of luxury fashion photography. By generating contextual background staging, diverse model variations, and dynamic video reels, Craftify aims to accelerate collection time-to-market.",
    keyCapabilities: [
      {
        title: "Editorial Background Synthesis",
        desc: "Place studio-shot garments into photorealistic architectural, heritage palace, or modern minimalist editorial environments without reshooting.",
      },
      {
        title: "Multi-Model Diversity Styling",
        desc: "Showcase how garments drape across varied heights, skin tones, and regional aesthetics to improve international conversion.",
      },
      {
        title: "Automated Social Ad Aspect Ratio Scaling",
        desc: "Instantly reformat collection lookbooks into 9:16 vertical video stories, 1:1 square feeds, and 16:9 banner displays.",
      },
      {
        title: "Jewellery Luster & Macro Reflection Enhancement",
        desc: "High-fidelity rendering of gemstone facets, gold specular highlights, and diamond brilliance for fine jewellery e-commerce.",
      },
    ],
    deploymentRequirements: [
      "High-resolution raw TIFF/PNG studio photography with isolated transparency",
      "Cloud rendering credit allocation and brand style reference guide",
    ],
    commercialModel: "Usage-based asset generation credits with enterprise brand licensing.",
    requiredProductInputs: [
      "Official product status confirmation and formal release timeline",
      "Approved test outputs or certified side-by-side model comparisons",
      "Model intellectual property and likeness rights legal guidelines",
      "GPU infrastructure specifications and rendering latency SLA",
      "Design partner pilot case studies and performance validation data",
    ],
    roadmapStage: "Conceptual & Early Architecture — Clearly marked as requiring client confirmation before commercial deployment.",
  },
];
