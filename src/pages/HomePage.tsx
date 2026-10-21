import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  TrendingUp,
  Sparkles,
  ShoppingBag,
  Layers,
  MessageSquare,
  Search,
  Cpu,
  CheckCircle2,
  ExternalLink,
  ChevronRight,
  Shield,
  Clock,
  Globe2,
  Users,
} from "lucide-react";
import { VERIFIED_CLIENTS, COMPANY_METRICS } from "@/data/clients";
import { CASE_STUDIES } from "@/data/caseStudies";
import { SERVICES } from "@/data/services";
import { PRODUCTS } from "@/data/products";
import { INSIGHTS } from "@/data/insights";
import { SEOHead } from "@/components/SEOHead";

interface HomePageProps {
  onOpenEnquiry: (serviceName?: string) => void;
}

export function HomePage({ onOpenEnquiry }: HomePageProps) {
  // Interactive Virtual Try-On Demo State on Homepage
  const [activeSilhouette, setActiveSilhouette] = useState<"bridal" | "lehenga" | "sherwani">("lehenga");
  const [tryOnProcessing, setTryOnProcessing] = useState(false);
  const [tryOnCompleted, setTryOnCompleted] = useState(false);

  const handleSimulateTryOn = () => {
    setTryOnProcessing(true);
    setTryOnCompleted(false);
    setTimeout(() => {
      setTryOnProcessing(false);
      setTryOnCompleted(true);
    }, 1400);
  };

  return (
    <>
      <SEOHead
        title="Growify Digital — Connected Commerce & Growth Systems for Luxury Fashion Brands"
        description="Growify builds connected commerce and growth systems for ambitious fashion, couture, jewellery, and lifestyle brands. Storefronts, acquisition, retention, sales operations, and AI products."
        canonicalPath="/"
      />

      {/* 1. HERO SECTION */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-gradient-to-b from-[#F5F2EB]/60 via-[#FAF8F5] to-[#FAF8F5]">
        {/* Subtle Luxury Ambient Glows */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-[#BB96DA]/15 via-[#93DCDF]/10 to-[#EFAF86]/15 blur-3xl pointer-events-none rounded-full" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            {/* Pill Tag */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/80 border border-[#3F304D]/15 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-[#BB96DA] animate-pulse" />
              <span className="text-[11px] font-semibold tracking-[0.14em] uppercase text-[#3F304D]">
                Connected Commerce & Growth Architecture
              </span>
            </div>

            {/* Editorial Headline */}
            <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-normal tracking-tight text-[#1A1420] leading-[1.08] text-balance">
              We build connected commerce &amp; growth systems for{" "}
              <span className="italic font-serif text-[#3F304D] underline decoration-[#BB96DA]/40 decoration-wavy underline-offset-8">
                luxury &amp; couture labels
              </span>
              .
            </h1>

            {/* Strategic Value Proposition */}
            <p className="text-base sm:text-lg lg:text-xl text-[#2C2626]/80 max-w-2xl mx-auto font-sans font-normal leading-relaxed text-pretty">
              Growify unifies custom Shopify flagship storefronts, high-intent performance marketing, lifecycle WhatsApp retention, 18-hour sales operations, and proprietary AI products like Lookify.
            </p>

            {/* CTAs */}
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={() => onOpenEnquiry("Connected Commerce & Growth")}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-[#3F304D] text-[#FAF8F5] text-xs font-semibold tracking-widest uppercase rounded-xl hover:bg-[#2B1E37] transition-all shadow-md hover:shadow-lg group"
              >
                <span>Discuss Your Growth</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>

              <Link
                to="/case-studies"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 bg-white/80 hover:bg-white text-[#1A1420] text-xs font-semibold tracking-widest uppercase rounded-xl border border-[#3F304D]/15 transition-all shadow-sm"
              >
                <span>Explore Client Work</span>
              </Link>
            </div>

            {/* Proof Points Strip */}
            <div className="pt-8 flex flex-wrap items-center justify-center gap-6 text-xs text-[#2C2626]/70">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>476+ Brands Scaled</span>
              </div>
              <span className="text-zinc-300">•</span>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>87% Avg YoY Growth in FY'25</span>
              </div>
              <span className="text-zinc-300">•</span>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Lookify AI Virtual Try-On</span>
              </div>
              <span className="text-zinc-300">•</span>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>18+ Hours Sales Support</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. TRUST & VERIFIED CLIENTS MARQUEE */}
      <section className="py-12 bg-white border-y border-[#3F304D]/10 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6 text-center">
          <p className="text-[11px] font-semibold tracking-[0.2em] uppercase text-[#3F304D]/70">
            Trusted by Leading Couture Houses &amp; Designer Labels
          </p>
        </div>

        {/* Continuous Client Marquee */}
        <div className="relative w-full overflow-hidden">
          <div className="flex items-center gap-12 whitespace-nowrap animate-marquee">
            {[...VERIFIED_CLIENTS, ...VERIFIED_CLIENTS].map((client, idx) => (
              <div
                key={`${client.name}-${idx}`}
                className="flex items-center gap-3 px-6 py-2.5 rounded-lg bg-[#FAF8F5] border border-[#3F304D]/10 shadow-xs"
              >
                <span className="font-serif font-semibold text-sm sm:text-base tracking-wider text-[#1A1420]">
                  {client.logoText}
                </span>
                <span className="text-[10px] text-[#3F304D]/60 uppercase tracking-widest pl-2 border-l border-[#3F304D]/15">
                  {client.category.split(" ")[0]}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Performance Metrics Bar */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="p-4 rounded-xl bg-[#FAF8F5] border border-[#3F304D]/10">
            <div className="font-serif text-3xl sm:text-4xl font-bold text-[#3F304D]">
              {COMPANY_METRICS.brandsScaled}
            </div>
            <div className="text-xs uppercase tracking-wider text-[#2C2626]/70 mt-1 font-semibold">
              Brands Scaled
            </div>
          </div>
          <div className="p-4 rounded-xl bg-[#FAF8F5] border border-[#3F304D]/10">
            <div className="font-serif text-3xl sm:text-4xl font-bold text-[#3F304D]">
              {COMPANY_METRICS.averageYoYGrowth}
            </div>
            <div className="text-xs uppercase tracking-wider text-[#2C2626]/70 mt-1 font-semibold">
              Avg Sales Growth (FY'25)
            </div>
          </div>
          <div className="p-4 rounded-xl bg-[#FAF8F5] border border-[#3F304D]/10">
            <div className="font-serif text-3xl sm:text-4xl font-bold text-[#3F304D]">
              {COMPANY_METRICS.yearsInBusiness}
            </div>
            <div className="text-xs uppercase tracking-wider text-[#2C2626]/70 mt-1 font-semibold">
              Years in Business
            </div>
          </div>
          <div className="p-4 rounded-xl bg-[#FAF8F5] border border-[#3F304D]/10">
            <div className="font-serif text-3xl sm:text-4xl font-bold text-[#3F304D]">
              {COMPANY_METRICS.supportCoverage}
            </div>
            <div className="text-xs uppercase tracking-wider text-[#2C2626]/70 mt-1 font-semibold">
              Sales Concierge Support
            </div>
          </div>
        </div>
      </section>

      {/* 3. THE CONNECTED GROWTH SYSTEM (MATRIX SECTION) */}
      <section id="growth-system" className="py-20 lg:py-28 bg-[#FAF8F5] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-[#3F304D]/70 block">
              The Strategic Difference
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl text-[#1A1420]">
              Isolated marketing agencies fail. Connected systems compound.
            </h2>
            <p className="text-sm sm:text-base text-[#2C2626]/80 leading-relaxed font-sans">
              Scaling a luxury brand online requires seamless synchrony between digital storefront aesthetics, paid media intent, personalized retention, factory merchandising, and AI technology.
            </p>
          </div>

          {/* Connected Growth System Interactive Map */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* 1. Storefront */}
            <div className="luxury-card p-6 rounded-2xl flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-[#3F304D]/10 text-[#3F304D] flex items-center justify-center mb-4">
                  <ShoppingBag className="w-5 h-5" />
                </div>
                <div className="text-[11px] font-semibold text-[#BB96DA] uppercase tracking-wider">
                  Phase 01 • Foundation
                </div>
                <h3 className="font-serif text-xl text-[#1A1420] mt-1 mb-2">
                  Shopify &amp; Digital Flagship
                </h3>
                <p className="text-xs text-[#2C2626]/75 leading-relaxed">
                  Bespoke Liquid architecture designed for haute couture lookbooks, sub-2.5s mobile speed, and international multi-currency pricing across US, UK, and UAE markets.
                </p>
              </div>
              <div className="pt-4 border-t border-[#3F304D]/10 mt-4 flex items-center justify-between text-xs font-semibold text-[#3F304D]">
                <Link to="/services/commerce" className="hover:underline flex items-center gap-1">
                  <span>Commerce Specs</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </Link>
                <span className="text-[11px] text-[#2C2626]/50">500+ Storefronts</span>
              </div>
            </div>

            {/* 2. Acquisition */}
            <div className="luxury-card p-6 rounded-2xl flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-[#3F304D]/10 text-[#3F304D] flex items-center justify-center mb-4">
                  <TrendingUp className="w-5 h-5" />
                </div>
                <div className="text-[11px] font-semibold text-[#BB96DA] uppercase tracking-wider">
                  Phase 02 • Demand
                </div>
                <h3 className="font-serif text-xl text-[#1A1420] mt-1 mb-2">
                  High-AOV Paid Acquisition
                </h3>
                <p className="text-xs text-[#2C2626]/75 leading-relaxed">
                  Meta Advantage+ and Google Performance Max campaigns reaching high-net-worth bridal shoppers months ahead of wedding dates, maintaining brand exclusivity with zero generic discounting.
                </p>
              </div>
              <div className="pt-4 border-t border-[#3F304D]/10 mt-4 flex items-center justify-between text-xs font-semibold text-[#3F304D]">
                <Link to="/services/growth" className="hover:underline flex items-center gap-1">
                  <span>Acquisition Blueprint</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </Link>
                <span className="text-[11px] text-[#2C2626]/50">2x Industry ROAS</span>
              </div>
            </div>

            {/* 3. Retention */}
            <div className="luxury-card p-6 rounded-2xl flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-[#3F304D]/10 text-[#3F304D] flex items-center justify-center mb-4">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div className="text-[11px] font-semibold text-[#BB96DA] uppercase tracking-wider">
                  Phase 03 • Loyalty
                </div>
                <h3 className="font-serif text-xl text-[#1A1420] mt-1 mb-2">
                  WhatsApp &amp; Lifecycle CRM
                </h3>
                <p className="text-xs text-[#2C2626]/75 leading-relaxed">
                  Automated conversational journeys via LimeChat and QuickReply. Private VIP collection drops and bridal milestone triggers driving 45–55% repeat revenue without ad spend.
                </p>
              </div>
              <div className="pt-4 border-t border-[#3F304D]/10 mt-4 flex items-center justify-between text-xs font-semibold text-[#3F304D]">
                <Link to="/services/growth#retention" className="hover:underline flex items-center gap-1">
                  <span>Retention Playbook</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </Link>
                <span className="text-[11px] text-[#2C2626]/50">45-55% Repeat</span>
              </div>
            </div>

            {/* 4. Sales Ops */}
            <div className="luxury-card p-6 rounded-2xl flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-[#3F304D]/10 text-[#3F304D] flex items-center justify-center mb-4">
                  <Clock className="w-5 h-5" />
                </div>
                <div className="text-[11px] font-semibold text-[#BB96DA] uppercase tracking-wider">
                  Phase 04 • Closure
                </div>
                <h3 className="font-serif text-xl text-[#1A1420] mt-1 mb-2">
                  18+ Hour Sales Concierge
                </h3>
                <p className="text-xs text-[#2C2626]/75 leading-relaxed">
                  Trained luxury stylists handling custom measurement inquiries, fabric swatches, and assisted-checkout links across international time zones to close high-ticket couture sales.
                </p>
              </div>
              <div className="pt-4 border-t border-[#3F304D]/10 mt-4 flex items-center justify-between text-xs font-semibold text-[#3F304D]">
                <Link to="/services/growth#sales-ops" className="hover:underline flex items-center gap-1">
                  <span>Concierge Model</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </Link>
                <span className="text-[11px] text-[#2C2626]/50">18+ Hrs Coverage</span>
              </div>
            </div>

            {/* 5. AI Products */}
            <div className="luxury-card p-6 rounded-2xl flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-[#3F304D]/10 text-[#3F304D] flex items-center justify-center mb-4">
                  <Cpu className="w-5 h-5" />
                </div>
                <div className="text-[11px] font-semibold text-[#BB96DA] uppercase tracking-wider">
                  Phase 05 • Innovation
                </div>
                <h3 className="font-serif text-xl text-[#1A1420] mt-1 mb-2">
                  Lookify AI Virtual Try-On
                </h3>
                <p className="text-xs text-[#2C2626]/75 leading-relaxed">
                  Our proprietary AI fitting room. Shoppers upload a single photo to visualize themselves in bespoke couture within seconds, lifting add-to-cart by 38% and reducing fit anxiety.
                </p>
              </div>
              <div className="pt-4 border-t border-[#3F304D]/10 mt-4 flex items-center justify-between text-xs font-semibold text-[#3F304D]">
                <Link to="/products/lookify" className="hover:underline flex items-center gap-1">
                  <span>Lookify Platform</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </Link>
                <span className="text-[11px] text-emerald-700 font-mono">100K+ Try-Ons</span>
              </div>
            </div>

            {/* 6. Unified Data */}
            <div className="luxury-card p-6 rounded-2xl flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-[#3F304D]/10 text-[#3F304D] flex items-center justify-center mb-4">
                  <Layers className="w-5 h-5" />
                </div>
                <div className="text-[11px] font-semibold text-[#BB96DA] uppercase tracking-wider">
                  Phase 06 • Governance
                </div>
                <h3 className="font-serif text-xl text-[#1A1420] mt-1 mb-2">
                  Commercial Data &amp; RTS Intelligence
                </h3>
                <p className="text-xs text-[#2C2626]/75 leading-relaxed">
                  Unified commercial dashboards reconciling gateway settlements, factory-floor ready-to-ship production inventory, and net contribution margins in real time.
                </p>
              </div>
              <div className="pt-4 border-t border-[#3F304D]/10 mt-4 flex items-center justify-between text-xs font-semibold text-[#3F304D]">
                <Link to="/about" className="hover:underline flex items-center gap-1">
                  <span>Operating Model</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </Link>
                <span className="text-[11px] text-[#2C2626]/50">First-Party Truth</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. EVIDENCE-BASED CASE STUDY SPOTLIGHTS */}
      <section className="py-20 lg:py-28 bg-white border-t border-[#3F304D]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-[#3F304D]/70 block">
                Evidence &amp; Proven Outcomes
              </span>
              <h2 className="font-serif text-3xl sm:text-5xl text-[#1A1420] mt-1">
                Commercial Proof, Not Vanity Logos
              </h2>
            </div>
            <Link
              to="/case-studies"
              className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-wider uppercase text-[#3F304D] hover:underline"
            >
              <span>View All Case Studies &amp; Pipeline</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Case Studies Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {CASE_STUDIES.map((study) => (
              <div
                key={study.slug}
                className="bg-[#FAF8F5] border border-[#3F304D]/15 rounded-2xl p-8 flex flex-col justify-between hover:shadow-lg transition-shadow"
              >
                <div>
                  <div className="flex items-center justify-between gap-4 mb-4">
                    <span className="text-xs font-bold tracking-widest uppercase text-[#3F304D] bg-[#3F304D]/10 px-2.5 py-1 rounded">
                      {study.client}
                    </span>
                    <span className="text-[11px] text-[#2C2626]/60 font-mono">
                      Source: {study.deckSourcePage}
                    </span>
                  </div>

                  <h3 className="font-serif text-2xl text-[#1A1420] mb-3 leading-snug">
                    {study.headline}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#2C2626]/80 leading-relaxed mb-6">
                    {study.summary}
                  </p>

                  {/* Highlight Metrics */}
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-6">
                    {study.metrics.map((m, idx) => (
                      <div key={idx} className="p-3 bg-white rounded-xl border border-[#3F304D]/10">
                        <div className="font-serif text-2xl font-bold text-[#3F304D]">
                          {m.value}
                        </div>
                        <div className="text-[11px] font-medium text-[#2C2626]/70 mt-0.5">
                          {m.label}
                        </div>
                        {m.needsValidation && (
                          <span className="inline-block mt-1 text-[9px] bg-amber-100 text-amber-800 px-1.5 py-0.2 rounded font-semibold uppercase">
                            Needs Validation
                          </span>
                        )}
                      </div>
                    ))}
                  </div>

                  {/* Core levers preview */}
                  <div className="space-y-1.5 mb-6 text-xs text-[#2C2626]/80">
                    {study.coreGrowthLevers.slice(0, 2).map((lever, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <span className="text-[#BB96DA] font-bold">✓</span>
                        <span>
                          <strong>{lever.title}:</strong> {lever.description.slice(0, 90)}...
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-[#3F304D]/15 flex items-center justify-between">
                  <Link
                    to={`/case-studies/${study.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-wider uppercase text-[#3F304D] hover:underline"
                  >
                    <span>Read Full Case Study &amp; Data Validation</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                  <button
                    onClick={() => onOpenEnquiry(`Similar Case to ${study.client}`)}
                    className="text-xs text-[#2C2626]/70 hover:text-[#3F304D] font-medium"
                  >
                    Discuss Similar Challenge →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. PROPRIETARY PRODUCT ECOSYSTEM: LOOKIFY INTERACTIVE SHOWCASE */}
      <section className="py-20 lg:py-28 bg-[#1A1420] text-[#FAF8F5] relative overflow-hidden">
        {/* Background glow */}
        <div className="absolute top-1/2 right-1/4 w-[500px] h-[500px] bg-[#BB96DA]/10 blur-3xl rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/15">
              <Sparkles className="w-3.5 h-3.5 text-[#BB96DA]" />
              <span className="text-[11px] font-semibold tracking-widest text-[#BB96DA] uppercase">
                Proprietary AI Product Suite
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl text-[#FAF8F5]">
              Builders of Technology, Not Just Providers of Services
            </h2>
            <p className="text-sm sm:text-base text-[#FAF8F5]/70 max-w-2xl mx-auto leading-relaxed">
              Growify engineers proprietary digital products that solve the unique physical-to-digital friction points of high-ticket fashion and lifestyle commerce.
            </p>
          </div>

          {/* Lookify Interactive Try-On Demonstration Container */}
          <div className="bg-white/5 border border-white/10 rounded-3xl p-6 sm:p-10 backdrop-blur-xl mb-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Product Info */}
              <div className="lg:col-span-6 space-y-5">
                <div className="flex items-center gap-3">
                  <span className="font-serif text-3xl font-bold tracking-tight text-white">
                    Lookify
                  </span>
                  <span className="text-xs bg-emerald-500/20 text-emerald-400 font-mono px-2 py-0.5 rounded border border-emerald-500/30">
                    Live Production App
                  </span>
                </div>

                <h3 className="font-serif text-2xl sm:text-3xl text-white font-normal leading-snug">
                  AI Virtual Try-On for Luxury Couture &amp; Designer Ensembles
                </h3>

                <p className="text-xs sm:text-sm text-[#FAF8F5]/80 leading-relaxed">
                  Lookify is Growify's flagship retail intelligence platform. Embedded directly onto Shopify product pages, Lookify allows shoppers to upload a photo and visualize custom garments tailored to their silhouette in seconds.
                </p>

                {/* Verified Lookify Metrics */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
                  <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                    <div className="font-serif text-2xl font-bold text-[#BB96DA]">90%</div>
                    <div className="text-[11px] text-[#FAF8F5]/70">Try-On Success Rate</div>
                  </div>
                  <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                    <div className="font-serif text-2xl font-bold text-[#BB96DA]">100K+</div>
                    <div className="text-[11px] text-[#FAF8F5]/70">Virtual Try-Ons</div>
                  </div>
                  <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                    <div className="font-serif text-2xl font-bold text-[#BB96DA]">50+</div>
                    <div className="text-[11px] text-[#FAF8F5]/70">Brands Worldwide</div>
                  </div>
                </div>

                {/* Official Links & CTA */}
                <div className="pt-4 flex flex-wrap items-center gap-4">
                  <Link
                    to="/products/lookify"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-[#BB96DA] text-[#1A1420] text-xs font-semibold tracking-wider uppercase rounded-xl hover:bg-[#a97ecf] transition-all shadow-md font-sans"
                  >
                    <span>Discover Lookify In Detail</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>

                  <a
                    href="https://lookify-demo.myshopify.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs text-[#FAF8F5]/80 hover:text-white underline underline-offset-4"
                  >
                    <span>Try Official Demo Store</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>

                  <a
                    href="https://lookify.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs text-[#FAF8F5]/80 hover:text-white underline underline-offset-4"
                  >
                    <span>lookify.in</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              {/* Interactive Try-On Simulator */}
              <div className="lg:col-span-6 bg-black/40 border border-white/10 rounded-2xl p-6 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between pb-3 border-b border-white/10 mb-4">
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
                      <span className="text-xs font-mono tracking-wider uppercase text-white/90">
                        Interactive Lookify Simulator
                      </span>
                    </div>
                    <span className="text-[11px] text-white/50 font-mono">v2.4 Neural Core</span>
                  </div>

                  {/* Style selector */}
                  <div className="flex items-center gap-2 mb-4">
                    <button
                      onClick={() => {
                        setActiveSilhouette("lehenga");
                        setTryOnCompleted(false);
                      }}
                      className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                        activeSilhouette === "lehenga"
                          ? "bg-[#BB96DA] text-[#1A1420]"
                          : "bg-white/10 text-white/70 hover:bg-white/15"
                      }`}
                    >
                      Pink Flare Lehenga (₹1,02,500)
                    </button>
                    <button
                      onClick={() => {
                        setActiveSilhouette("bridal");
                        setTryOnCompleted(false);
                      }}
                      className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                        activeSilhouette === "bridal"
                          ? "bg-[#BB96DA] text-[#1A1420]"
                          : "bg-white/10 text-white/70 hover:bg-white/15"
                      }`}
                    >
                      Ivory Couture Anarkali
                    </button>
                  </div>

                  {/* Simulation Screen */}
                  <div className="relative aspect-video rounded-xl bg-gradient-to-br from-zinc-900 to-zinc-800 border border-white/10 flex items-center justify-center overflow-hidden">
                    {tryOnProcessing ? (
                      <div className="text-center space-y-3 p-4">
                        <div className="w-10 h-10 border-2 border-[#BB96DA] border-t-transparent rounded-full animate-spin mx-auto" />
                        <div className="text-xs text-white/80 font-mono">
                          Generating Neural Mesh &amp; Fabric Drape...
                        </div>
                      </div>
                    ) : tryOnCompleted ? (
                      <div className="text-center space-y-2 p-6 animate-fade-in">
                        <div className="inline-block px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-mono mb-1">
                          ✓ Try-On Successfully Rendered
                        </div>
                        <h4 className="font-serif text-lg text-white">
                          Silhouette Matched to Shopper Photo
                        </h4>
                        <p className="text-xs text-white/70 max-w-sm mx-auto">
                          Fabric weight, zardozi reflectivity, and shoulder drape preserved with zero distortion.
                        </p>
                      </div>
                    ) : (
                      <div className="text-center p-6 space-y-3">
                        <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mx-auto text-[#BB96DA]">
                          <Sparkles className="w-6 h-6" />
                        </div>
                        <div className="text-xs text-white/80 max-w-xs mx-auto">
                          Click below to test Lookify's real-time silhouette fitting simulation on this luxury garment.
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                <div className="pt-4 mt-4 border-t border-white/10 flex items-center justify-between">
                  <button
                    onClick={handleSimulateTryOn}
                    disabled={tryOnProcessing}
                    className="w-full py-3 bg-white/15 hover:bg-white/25 text-white text-xs font-semibold tracking-wider uppercase rounded-xl transition-all disabled:opacity-50"
                  >
                    {tryOnProcessing ? "Processing..." : tryOnCompleted ? "Render Another Silhouette" : "Simulate Shopper Virtual Try-On"}
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Rossify & Craftify Roadmap Cards (Clearly Marked Placeholders) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
              <div className="flex items-center justify-between mb-3">
                <span className="font-serif text-xl text-white">Rossify</span>
                <span className="text-[10px] bg-amber-400/20 text-amber-300 px-2 py-0.5 rounded font-mono border border-amber-400/30">
                  Product Overview (Beta)
                </span>
              </div>
              <p className="text-xs text-white/70 leading-relaxed mb-4">
                Operational suite synchronizing factory floor production with storefront ready-to-ship inventory and high-intent inquiry triage.
              </p>
              <Link
                to="/products/rossify"
                className="text-xs text-[#BB96DA] hover:underline inline-flex items-center gap-1 font-semibold"
              >
                <span>View Product Requirements &amp; Checklist</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
              <div className="flex items-center justify-between mb-3">
                <span className="font-serif text-xl text-white">Craftify</span>
                <span className="text-[10px] bg-purple-400/20 text-purple-300 px-2 py-0.5 rounded font-mono border border-purple-400/30">
                  Product Overview (Concept)
                </span>
              </div>
              <p className="text-xs text-white/70 leading-relaxed mb-4">
                Generative AI creative studio generating contextual luxury editorial backgrounds and multi-aspect ratio video lookbooks from atelier photography.
              </p>
              <Link
                to="/products/craftify"
                className="text-xs text-[#BB96DA] hover:underline inline-flex items-center gap-1 font-semibold"
              >
                <span>View Product Requirements &amp; Checklist</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 6. METHODICAL PROCESS */}
      <section className="py-20 lg:py-28 bg-[#FAF8F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-[#3F304D]/70 block">
              Execution Discipline
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl text-[#1A1420]">
              How Growify Engages
            </h2>
            <p className="text-sm sm:text-base text-[#2C2626]/80 leading-relaxed">
              From day one, our operators focus on commercial reality rather than abstract slide presentations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4">
            {[
              { num: "01", name: "Understand", desc: "Deep audit of unit economics, margins, AOV, and international target diasporas." },
              { num: "02", name: "Design", desc: "Haute couture editorial UX wireframes honoring the brand's aesthetic heritage." },
              { num: "03", name: "Build", desc: "Rigorous Shopify OS 2.0 engineering, multi-currency routing, and Lookify setup." },
              { num: "04", name: "Activate", desc: "Closed-loop Meta/Google campaigns and automated WhatsApp lifecycle flows." },
              { num: "05", name: "Measure", desc: "First-party data tracking, daily budget pacing, and actual bank settlements." },
              { num: "06", name: "Improve", desc: "Weekly commercial iterations, RTS merchandising adjustments, and scale." },
            ].map((p) => (
              <div key={p.num} className="p-5 bg-white rounded-xl border border-[#3F304D]/10 space-y-2">
                <span className="font-mono text-xs text-[#BB96DA] font-bold block">{p.num}</span>
                <h3 className="font-serif text-lg font-bold text-[#1A1420]">{p.name}</h3>
                <p className="text-xs text-[#2C2626]/75 leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. CULTURE & LIFE AT GROWIFY PREVIEW */}
      <section className="py-16 bg-white border-y border-[#3F304D]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#3F304D] text-[#FAF8F5] rounded-3xl p-8 sm:p-12 relative overflow-hidden">
            <div className="max-w-2xl relative z-10 space-y-4">
              <span className="text-[11px] font-semibold tracking-widest text-[#BB96DA] uppercase block">
                Office &amp; People • New Delhi HQ
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-white font-normal">
                Take an Interactive Tour of Our Growth Studio
              </h2>
              <p className="text-xs sm:text-sm text-[#FAF8F5]/80 leading-relaxed font-sans">
                Experience our 100+ operator studio in Chhatarpur Enclave, New Delhi. Explore the Growth Floor, Commerce Engineering Lab, Creative Studio, and 18-Hour Sales Concierge Desk.
              </p>
              <div className="pt-2">
                <Link
                  to="/life-at-growify"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#FAF8F5] text-[#3F304D] text-xs font-semibold tracking-wider uppercase rounded-xl hover:bg-white transition-all shadow-md"
                >
                  <span>Launch Interactive Office Tour</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. EDITORIAL INSIGHTS PREVIEW */}
      <section className="py-20 lg:py-28 bg-[#FAF8F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
            <div>
              <span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-[#3F304D]/70 block">
                Luxury Commerce Journal
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#1A1420] mt-1">
                Strategic Playbooks &amp; Research
              </h2>
            </div>
            <Link
              to="/insights"
              className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-wider uppercase text-[#3F304D] hover:underline"
            >
              <span>View All 8 Playbooks</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {INSIGHTS.slice(0, 3).map((item) => (
              <Link
                key={item.slug}
                to="/insights"
                className="luxury-card p-6 rounded-2xl flex flex-col justify-between group"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-[11px] text-[#2C2626]/60">
                    <span className="font-semibold text-[#3F304D]">{item.category}</span>
                    <span>{item.readTime}</span>
                  </div>
                  <h3 className="font-serif text-xl text-[#1A1420] group-hover:text-[#3F304D] transition-colors leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#2C2626]/75 leading-relaxed">
                    {item.summary}
                  </p>
                </div>
                <div className="pt-4 border-t border-[#3F304D]/10 mt-4 flex items-center gap-1 text-xs font-semibold text-[#3F304D]">
                  <span>Read Playbook</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 9. PROMINENT FINAL ENQUIRY CTA SECTION */}
      <section className="py-20 lg:py-28 bg-[#1A1420] text-[#FAF8F5] relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-[#BB96DA] block">
            Initiate Engagement
          </span>
          <h2 className="font-serif text-4xl sm:text-6xl text-white font-normal leading-tight">
            Ready to Build Your Connected Growth Engine?
          </h2>
          <p className="text-sm sm:text-base text-[#FAF8F5]/80 max-w-xl mx-auto leading-relaxed">
            Schedule a confidential 45-minute growth architecture review with Growify's leadership team. We audit your storefront, ad efficiency, and retention leakage.
          </p>
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => onOpenEnquiry("Full Growth Audit")}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#BB96DA] text-[#1A1420] text-xs font-semibold tracking-widest uppercase rounded-xl hover:bg-[#a97ecf] transition-all shadow-lg"
            >
              <span>Schedule Architecture Audit</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <Link
              to="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 bg-white/10 hover:bg-white/20 text-white text-xs font-semibold tracking-widest uppercase rounded-xl transition-all border border-white/15"
            >
              <span>Contact Details &amp; HQ</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
