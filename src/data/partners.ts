export interface PartnerIntegration {
  name: string;
  category: "Conversational Commerce" | "Payments & Checkout" | "Commerce Platform" | "Lifecycle CRM" | "Paid Advertising";
  relationshipType: "Verified Product Integration" | "Ecosystem Technology Partner" | "Platform Compatibility";
  description: string;
  customerValue: string;
  verifiedCapabilities: string[];
  statusNote: string;
}

export const PARTNERS: PartnerIntegration[] = [
  {
    name: "LimeChat",
    category: "Conversational Commerce",
    relationshipType: "Verified Product Integration",
    description: "AI-driven WhatsApp commerce engine enabling two-way customer support, automated order tracking, and live agent chat handoffs.",
    customerValue: "Reduces response latency for international luxury shoppers, converting high-value bridal inquiries directly inside WhatsApp.",
    verifiedCapabilities: [
      "Automated WhatsApp catalog browsing & order status lookups",
      "Human stylist routing for high-AOV bridal couture questions",
      "Unified omnichannel inbox across WhatsApp, Instagram DM, and web chat",
      "Post-purchase milestone updates & shipping dispatch notifications",
    ],
    statusNote: "Verified product integration across active Growify luxury clients. Official relationship confirmed.",
  },
  {
    name: "QuickReply",
    category: "Conversational Commerce",
    relationshipType: "Verified Product Integration",
    description: "WhatsApp marketing automation platform for targeted broadcasts, abandoned cart recovery, and promotional campaigns.",
    customerValue: "Drives 45%+ repeat customer revenue through personalized festive and seasonal bridal WhatsApp broadcasts with 90%+ open rates.",
    verifiedCapabilities: [
      "Targeted WhatsApp broadcast campaigns with rich media catalogs",
      "Automated high-ticket abandoned checkout recovery messages",
      "Back-in-stock alerts for high-demand ready-to-ship sizes",
      "Customer segment synchronization directly with Shopify buyer lists",
    ],
    statusNote: "Verified product integration across Growify client marketing stacks. Official relationship confirmed.",
  },
  {
    name: "Razorpay",
    category: "Payments & Checkout",
    relationshipType: "Verified Product Integration",
    description: "Premier Indian payment infrastructure provider powering domestic UPI, cards, netbanking, and international payment acceptance.",
    customerValue: "Maximizes checkout success rates, supports local Indian payment methods, and provides seamless international credit card settlement.",
    verifiedCapabilities: [
      "Frictionless UPI, credit card, debit card, and netbanking processing",
      "Razorpay Magic Checkout for accelerated 1-click address autofill",
      "International multi-currency payment acceptance (USD, GBP, EUR, AED)",
      "Automated fraud risk scoring for high-ticket jewellery and couture orders",
    ],
    statusNote: "Verified payment gateway integration across Growify e-commerce deployments.",
  },
  {
    name: "Shopify Plus",
    category: "Commerce Platform",
    relationshipType: "Ecosystem Technology Partner",
    description: "Global enterprise commerce platform powering high-volume storefronts, international multi-currency, and robust checkout customization.",
    customerValue: "Provides enterprise-grade 99.99% uptime, infinite elasticity during high-traffic festive drops, and native internationalization.",
    verifiedCapabilities: [
      "Shopify Markets multi-currency, localized pricing, and duty calculation",
      "Custom Checkout extensibility without legacy theme fragility",
      "Advanced scripting for tiered promotional pricing and VIP trunk shows",
      "Robust ecosystem of enterprise logistics and ERP connections",
    ],
    statusNote: "Primary commerce platform utilized for Growify client architectures.",
  },
  {
    name: "Klaviyo",
    category: "Lifecycle CRM",
    relationshipType: "Platform Compatibility",
    description: "Intelligent marketing automation for luxury email segmentation, predictive analytics, and personalized customer journeys.",
    customerValue: "Nurtures high-consideration bridal clients over months with elegant, high-deliverability editorial email communications.",
    verifiedCapabilities: [
      "Predictive analytics for customer lifetime value and churn risk",
      "Automated VIP tier segmentation based on cumulative spend",
      "Dynamic product recommendations powered by past purchase affinity",
      "Rich HTML editorial newsletters with zero rendering glitches across mobile clients",
    ],
    statusNote: "Standard CRM platform implemented across Growify retention mandates.",
  },
  {
    name: "Meta Business",
    category: "Paid Advertising",
    relationshipType: "Platform Compatibility",
    description: "Advertising infrastructure across Instagram and Facebook featuring Advantage+ Shopping Campaigns and Conversions API.",
    customerValue: "Drives high-intent global fashion and bridal discovery with precise demographic and interest-based visual targeting.",
    verifiedCapabilities: [
      "Server-side Conversions API (CAPI) for resilient post-iOS14 tracking",
      "Dynamic Product Ads (DPA) synced with live Shopify catalog feeds",
      "Reels and Stories video campaign optimization for luxury lookbooks",
    ],
    statusNote: "Primary paid media acquisition channel across managed brand portfolios.",
  },
];
