export interface OfficeZone {
  id: string;
  name: string;
  floor: string;
  focus: string;
  teamSize: string;
  description: string;
  keyActivities: string[];
  hotspots: {
    title: string;
    description: string;
    coordinate: { x: number; y: number };
  }[];
  prototypeAssetRequired: string;
  culturePillar: string;
}

export const OFFICE_ZONES: OfficeZone[] = [
  {
    id: "growth-floor",
    name: "Growth & Performance Strategy Floor",
    floor: "3rd Floor — North Wing",
    focus: "Meta, Google, and Global Acquisition Warfare",
    teamSize: "35+ Performance Marketers & Media Buyers",
    description:
      "The pulsating heart of Growify's daily revenue operations. Real-time media spend monitors track live blended ROAS, margin pacing, and multi-regional campaign performance across North America, Europe, and the Middle East.",
    keyActivities: [
      "Live ad spend pacing and international budget reallocation",
      "Dynamic creative asset split-testing and hook rate analysis",
      "First-party attribution telemetry and CAPI monitoring",
    ],
    hotspots: [
      {
        title: "Live Command Wall",
        description: "Monitors displaying consolidated global gross merchandise value and active spend across 470+ partner stores.",
        coordinate: { x: 30, y: 40 },
      },
      {
        title: "International Time-Zone Pod",
        description: "Specialized workstations configured for Pacific, Eastern, and Gulf Standard working hours.",
        coordinate: { x: 70, y: 55 },
      },
    ],
    prototypeAssetRequired: "High-definition 1080p pan video showing open-plan desks, live dashboard monitors, and team sync pod.",
    culturePillar: "Ruthless accountability for client commercial growth.",
  },
  {
    id: "commerce-lab",
    name: "Commerce Architecture & Engineering Lab",
    floor: "3rd Floor — Central Atelier",
    focus: "Shopify Plus, Headless Systems & Lookify AI Integration",
    teamSize: "25+ Frontend Engineers & Shopify Developers",
    description:
      "Where high-couture aesthetics meet clean, modular Liquid engineering. Code reviews focus on sub-2s mobile load times, checkout accessibility, and zero-defect deployments for high-volume festive drops.",
    keyActivities: [
      "Custom Shopify OS 2.0 theme architecture & Liquid development",
      "Lookify AI virtual try-on SDK updates and performance benchmarking",
      "Cross-browser device lab testing on 20+ physical iOS and Android smartphones",
    ],
    hotspots: [
      {
        title: "Device Emulation Bench",
        description: "Physical testing rack with varying screen densities, foldables, and older global devices.",
        coordinate: { x: 45, y: 35 },
      },
      {
        title: "Lookify Neural Testing Sandbox",
        description: "Dedicated workstation calibrating fabric diffusion models against intricate bridal embroidery swatches.",
        coordinate: { x: 80, y: 65 },
      },
    ],
    prototypeAssetRequired: "Close-up workstation video showing code editor, Figma designs side-by-side, and phone testing.",
    culturePillar: "Craftsmanship in every line of code.",
  },
  {
    id: "creative-studio",
    name: "Creative & Luxury Storytelling Studio",
    floor: "3rd Floor — Natural Light Gallery",
    focus: "Editorial Art Direction, Video Editing & Lookbook Curation",
    teamSize: "20+ Designers, Video Editors & Copywriters",
    description:
      "Bathed in natural daylight, the creative floor translates runway majesty into digital commerce formats. From vertical video lookbooks to typographic ad creatives that preserve brand exclusivity.",
    keyActivities: [
      "Editorial lookbook styling and typography art direction",
      "Short-form fashion video editing optimized for mobile engagement",
      "Conversational copy development for luxury WhatsApp and email newsletters",
    ],
    hotspots: [
      {
        title: "Fabric & Moodboard Wall",
        description: "Physical swatch boards displaying current seasonal silks, velvets, and hand-woven organzas from client ateliers.",
        coordinate: { x: 25, y: 50 },
      },
      {
        title: "Color Grading Suite",
        description: "Color-calibrated reference displays ensuring outfit hues appear true-to-life on digital screens.",
        coordinate: { x: 65, y: 30 },
      },
    ],
    prototypeAssetRequired: "Slow tracking camera shot moving past moodboards, color swatches, and editing timelines.",
    culturePillar: "Aesthetic reverence for the designers we represent.",
  },
  {
    id: "concierge-hub",
    name: "Client Success & 18-Hour Sales Desk",
    floor: "3rd Floor — South Wing",
    focus: "High-Touch Stylist Assistance & International Bride Consultation",
    teamSize: "20+ Dedicated Luxury Sales Specialists",
    description:
      "Operating across staggered shifts spanning 18+ hours daily, our concierge team interfaces directly with overseas bridal clients, closing custom measurement couture orders over verified WhatsApp business channels.",
    keyActivities: [
      "Real-time WhatsApp assisted checkout creation and measurement intake",
      "Bridal consultation scheduling and fabric swatch dispatch coordination",
      "Post-purchase milestone tracking from embroidery to doorstep arrival",
    ],
    hotspots: [
      {
        title: "Concierge Station",
        description: "Quiet pods equipped with multi-device WhatsApp enterprise terminals and digital measurement calipers.",
        coordinate: { x: 35, y: 60 },
      },
      {
        title: "Atelier Hotline",
        description: "Direct real-time communication line to partner factory floor production heads in Delhi, Mumbai, and Jaipur.",
        coordinate: { x: 75, y: 45 },
      },
    ],
    prototypeAssetRequired: "Warm ambient shot of sales operators consulting over headsets with fabric charts.",
    culturePillar: "Empathy, discretion, and relentless follow-through.",
  },
  {
    id: "townhall-cafe",
    name: "Atrium, Town Hall & Collaborative Cafe",
    floor: "3rd Floor — Gathering Space",
    focus: "Cross-Pollination, Weekly Demo Days & Community",
    teamSize: "All 100+ Team Members",
    description:
      "Where strategists, engineers, and marketers convene. Weekly Friday demo days showcase live client growth charts, new AI experimentations, and collective retrospectives.",
    keyActivities: [
      "Weekly company-wide 'Wins & Lessons' growth review",
      "Open pair-programming and cross-functional brainstorming over artisanal coffee",
      "Guest sessions with leading fashion designers and e-commerce leaders",
    ],
    hotspots: [
      {
        title: "Townhall Amphitheater",
        description: "Stepped wooden seating area for company-wide presentations and knowledge-sharing sessions.",
        coordinate: { x: 50, y: 50 },
      },
    ],
    prototypeAssetRequired: "Wide lens establishing shot of the community cafe area and presentation screen.",
    culturePillar: "Curiosity, transparency, and continuous learning.",
  },
];
