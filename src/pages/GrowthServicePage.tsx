import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2, TrendingUp, MessageSquare, Clock, Search, ShieldCheck } from "lucide-react";
import { SERVICES } from "@/data/services";
import { SEOHead } from "@/components/SEOHead";

interface GrowthServicePageProps {
  onOpenEnquiry: (serviceName?: string) => void;
}

export function GrowthServicePage({ onOpenEnquiry }: GrowthServicePageProps) {
  const growthService = SERVICES.find((s) => s.id === "growth")!;
  const retentionService = SERVICES.find((s) => s.id === "retention")!;
  const salesOpsService = SERVICES.find((s) => s.id === "sales-ops")!;
  const organicService = SERVICES.find((s) => s.id === "organic")!;

  return (
    <>
      <SEOHead
        title="Performance Marketing & Retention Growth for Luxury Brands"
        description="Full-funnel Meta & Google acquisition, WhatsApp CRM lifecycle automation, 18-hour sales concierge, and organic fashion SEO for high-AOV designer labels."
        canonicalPath="/services/growth"
      />

      <div className="pt-32 pb-24 bg-[#FAF8F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-xs text-[#2C2626]/60 mb-8">
            <Link to="/" className="hover:text-[#3F304D]">Home</Link>
            <span>/</span>
            <Link to="/services" className="hover:text-[#3F304D]">Services</Link>
            <span>/</span>
            <span className="text-[#3F304D] font-medium">Growth &amp; Retention</span>
          </div>

          {/* Hero */}
          <div className="max-w-4xl space-y-6 mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#3F304D]/10 text-[#3F304D] text-xs font-semibold tracking-wider uppercase">
              <TrendingUp className="w-3.5 h-3.5" />
              <span>Full-Funnel Demand Engine • 87% Avg Growth in FY'25</span>
            </div>

            <h1 className="font-serif text-4xl sm:text-6xl text-[#1A1420] leading-tight">
              Performance Acquisition, WhatsApp Retention &amp; 18-Hour Sales Operations
            </h1>

            <p className="text-lg text-[#2C2626]/80 leading-relaxed font-sans max-w-3xl">
              We turn visitors into buyers, and buyers into repeat patrons. A closed-loop growth stack designed specifically for high-AOV luxury fashion, couture, and fine jewellery.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={() => onOpenEnquiry("Growth & Performance Marketing")}
                className="px-7 py-3.5 bg-[#3F304D] text-[#FAF8F5] text-xs font-semibold tracking-wider uppercase rounded-xl hover:bg-[#2B1E37] transition-all shadow-md"
              >
                Discuss Your Growth Strategy
              </button>

              <Link
                to="/case-studies/ridhi-mehra"
                className="px-6 py-3.5 bg-white border border-[#3F304D]/15 text-[#1A1420] text-xs font-semibold tracking-wider uppercase rounded-xl hover:bg-zinc-50 transition-all"
              >
                See Ridhi Mehra 7-Year Growth →
              </Link>
            </div>
          </div>

          {/* 4 Pillars Grid */}
          <div className="space-y-12 mb-20">
            {/* Pillar 1: Paid Acquisition */}
            <div className="bg-white p-8 sm:p-10 rounded-3xl border border-[#3F304D]/10">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-[#3F304D]/10 text-[#3F304D] flex items-center justify-center">
                  <TrendingUp className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-mono font-bold text-[#BB96DA] uppercase">Pillar 01</span>
                  <h2 className="font-serif text-2xl text-[#1A1420]">Meta &amp; Google Performance Marketing</h2>
                </div>
              </div>
              <p className="text-xs sm:text-sm text-[#2C2626]/80 leading-relaxed mb-6">
                Targeted Advantage+ and Performance Max campaigns reaching high-net-worth bridal shoppers across India, the US, Canada, UK, and UAE. Zero discount-driven ads; 100% brand equity preservation.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-[#2C2626]/85">
                {growthService.deliverables.map((d, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span>{d}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Pillar 2: Retention & WhatsApp */}
            <div id="retention" className="bg-white p-8 sm:p-10 rounded-3xl border border-[#3F304D]/10">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-[#3F304D]/10 text-[#3F304D] flex items-center justify-center">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-mono font-bold text-[#BB96DA] uppercase">Pillar 02</span>
                  <h2 className="font-serif text-2xl text-[#1A1420]">WhatsApp CRM &amp; Lifecycle Marketing</h2>
                </div>
              </div>
              <p className="text-xs sm:text-sm text-[#2C2626]/80 leading-relaxed mb-6">
                Treating WhatsApp as a luxury boutique concierge. Automated collection drops, VIP trunk show invites, and bridal milestone nurturing driving 45–55% repeat revenue without recurring media spend.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-[#2C2626]/85">
                {retentionService.deliverables.map((d, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span>{d}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Pillar 3: 18-Hour Sales Concierge */}
            <div id="sales-ops" className="bg-white p-8 sm:p-10 rounded-3xl border border-[#3F304D]/10">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-[#3F304D]/10 text-[#3F304D] flex items-center justify-center">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-mono font-bold text-[#BB96DA] uppercase">Pillar 03</span>
                  <h2 className="font-serif text-2xl text-[#1A1420]">18+ Hour Assisted Sales Operations</h2>
                </div>
              </div>
              <p className="text-xs sm:text-sm text-[#2C2626]/80 leading-relaxed mb-6">
                Bridging time zones. Trained luxury sales specialists answering custom sizing, fabric drape, and bridal customization queries over verified WhatsApp to close ₹1,50,000+ orders with zero latency.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-[#2C2626]/85">
                {salesOpsService.deliverables.map((d, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span>{d}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Pillar 4: Organic Growth & SEO */}
            <div id="organic" className="bg-white p-8 sm:p-10 rounded-3xl border border-[#3F304D]/10">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-[#3F304D]/10 text-[#3F304D] flex items-center justify-center">
                  <Search className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-mono font-bold text-[#BB96DA] uppercase">Pillar 04</span>
                  <h2 className="font-serif text-2xl text-[#1A1420]">Fashion SEO &amp; Organic Discovery</h2>
                </div>
              </div>
              <p className="text-xs sm:text-sm text-[#2C2626]/80 leading-relaxed mb-6">
                Semantic category architectures, faceted filter canonicalization, structured product schema, and editorial journals positioning your label as the definitive authority in search and AI assistants.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-[#2C2626]/85">
                {organicService.deliverables.map((d, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span>{d}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* FAQs */}
          <div className="max-w-3xl mx-auto space-y-6">
            <h2 className="font-serif text-3xl text-[#1A1420] text-center mb-8">
              Growth Strategy FAQs
            </h2>
            <div className="space-y-4">
              {growthService.faqs.map((faq, i) => (
                <div key={i} className="bg-white p-6 rounded-xl border border-[#3F304D]/10">
                  <h3 className="font-serif text-lg text-[#1A1420] font-bold mb-2">
                    {faq.question}
                  </h3>
                  <p className="text-xs text-[#2C2626]/80 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="mt-20 text-center bg-[#3F304D] text-[#FAF8F5] p-10 rounded-3xl">
            <h2 className="font-serif text-3xl text-white mb-3">
              Scale Your Online Sales Profitably
            </h2>
            <p className="text-xs sm:text-sm text-[#FAF8F5]/80 max-w-md mx-auto mb-6">
              Book a growth diagnostic session. We analyze your paid ad efficiency, CRM touchpoints, and international expansion readiness.
            </p>
            <button
              onClick={() => onOpenEnquiry("Growth Strategy Diagnostic")}
              className="px-8 py-3.5 bg-[#BB96DA] text-[#1A1420] text-xs font-semibold tracking-wider uppercase rounded-xl hover:bg-[#a97ecf] transition-all shadow-md"
            >
              Request Growth Diagnostic
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
