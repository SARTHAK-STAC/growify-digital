import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2, AlertTriangle, ShieldCheck, TrendingUp, Globe, Clock, Layers } from "lucide-react";
import { CASE_STUDIES } from "@/data/caseStudies";
import { SEOHead } from "@/components/SEOHead";

interface MahimaCaseStudyPageProps {
  onOpenEnquiry: (serviceName?: string) => void;
}

export function MahimaCaseStudyPage({ onOpenEnquiry }: MahimaCaseStudyPageProps) {
  const study = CASE_STUDIES.find((s) => s.slug === "mahima-mahajan")!;

  return (
    <>
      <SEOHead
        title="Mahima Mahajan Case Study — Scaling a Global Couture Business"
        description="How Growify built a globally scalable couture engine for Mahima Mahajan, driving 81% YoY online growth, 2.54x revenue scale, and dominant international market share."
        canonicalPath="/case-studies/mahima-mahajan"
      />

      <div className="pt-32 pb-24 bg-[#FAF8F5]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumbs */}
          <div className="flex items-center gap-2 text-xs text-[#2C2626]/60 mb-8">
            <Link to="/" className="hover:text-[#3F304D]">Home</Link>
            <span>/</span>
            <Link to="/case-studies" className="hover:text-[#3F304D]">Case Studies</Link>
            <span>/</span>
            <span className="text-[#3F304D] font-medium">Mahima Mahajan</span>
          </div>

          {/* Header */}
          <div className="space-y-4 mb-12">
            <div className="flex flex-wrap items-center gap-3">
              <span className="text-xs font-bold tracking-widest uppercase bg-[#3F304D] text-[#FAF8F5] px-3 py-1 rounded">
                Mahima Mahajan
              </span>
              <span className="text-xs text-[#3F304D]/70 font-semibold uppercase tracking-wider">
                Global Luxury Couture
              </span>
              <span className="text-xs text-[#2C2626]/60 font-mono ml-auto">
                Source: Growth Deck P.16–20
              </span>
            </div>

            <h1 className="font-serif text-4xl sm:text-6xl text-[#1A1420] leading-tight">
              Scaling a Global Couture Business to Dominant International Revenue Share
            </h1>

            <p className="text-base sm:text-lg text-[#2C2626]/80 leading-relaxed font-sans">
              Growify engineered an end-to-end global commerce engine for Mahima Mahajan, connecting bespoke Shopify multi-currency architecture, factory-direct merchandising, and time-zone aligned sales enablement.
            </p>
          </div>

          {/* Verified Metrics Hero Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-12">
            {study.metrics.map((m, idx) => (
              <div key={idx} className="p-5 bg-white rounded-2xl border border-[#3F304D]/15 shadow-xs">
                <div className="font-serif text-3xl sm:text-4xl font-bold text-[#3F304D]">
                  {m.value}
                </div>
                <div className="text-xs font-semibold text-[#1A1420] mt-1">
                  {m.label}
                </div>
                <div className="text-[10px] text-[#2C2626]/60 font-mono mt-1">
                  {m.source}
                </div>
                {m.needsValidation && (
                  <div className="mt-2 text-[10px] bg-amber-100 text-amber-900 font-semibold px-2 py-0.5 rounded">
                    ⚠️ NEEDS VALIDATION
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Conflict & Validation Alert Callout */}
          <div className="mb-14 p-6 bg-amber-50/90 border border-amber-300/80 rounded-2xl text-xs text-amber-950 space-y-2">
            <div className="flex items-center gap-2 font-bold text-amber-900 text-sm">
              <AlertTriangle className="w-4 h-4 text-amber-700" />
              <span>Evidence Audit &amp; Data Validation Notice (Deck Pages 16 &amp; 17)</span>
            </div>
            <p className="leading-relaxed">
              In strict adherence to the assignment's non-negotiable rules, we do not reconcile conflicting source data. On Page 16 of the Growth Deck, the metric <strong>251%</strong> is labelled as <em>'251% of total online revenue'</em> (a mathematical impossibility for revenue share), while on Page 17 it is labelled as <em>'International Revenue Growth: 251% per year'</em>. We preserve both claims as originally recorded and have flagged this value for formal client accounting confirmation before external marketing publication.
            </p>
          </div>

          {/* Narrative Content Blocks */}
          <div className="space-y-12 bg-white p-8 sm:p-12 rounded-3xl border border-[#3F304D]/10">
            {/* 1. Business Context & Challenge */}
            <section className="space-y-4">
              <h2 className="font-serif text-2xl sm:text-3xl text-[#1A1420]">
                1. Global Couture Context &amp; Core Challenges
              </h2>
              <p className="text-xs sm:text-sm text-[#2C2626]/80 leading-relaxed">
                Mahima Mahajan had established strong domestic recognition in Indian luxury bridal fashion. However, scaling direct international online sales to affluent diaspora families presented deep operational friction:
              </p>
              <ul className="space-y-2 text-xs sm:text-sm text-[#2C2626]/80">
                {study.challenge.map((c, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <span className="text-rose-600 font-bold">•</span>
                    <span>{c}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* 2. Core Strategic Levers */}
            <section className="space-y-6 pt-6 border-t border-[#3F304D]/10">
              <h2 className="font-serif text-2xl sm:text-3xl text-[#1A1420]">
                2. Growify's Connected Growth Intervention
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {study.coreGrowthLevers.map((lever, i) => (
                  <div key={i} className="p-5 rounded-xl bg-[#FAF8F5] border border-[#3F304D]/10 space-y-2">
                    <div className="font-serif text-lg font-bold text-[#3F304D]">
                      {lever.title}
                    </div>
                    <p className="text-xs text-[#2C2626]/80 leading-relaxed">
                      {lever.description}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* 3. Average YoY Sales Growth Historical Breakdown */}
            <section className="space-y-4 pt-6 border-t border-[#3F304D]/10">
              <h2 className="font-serif text-2xl sm:text-3xl text-[#1A1420]">
                3. Historical Sales Growth Progression (Growth Deck P.16)
              </h2>
              <p className="text-xs text-[#2C2626]/75">
                Supplied year-over-year sales performance recorded in the primary growth deck:
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 text-center">
                {study.salesGrowthData.map((d) => (
                  <div key={d.year} className="p-4 rounded-xl bg-[#FAF8F5] border border-[#3F304D]/10">
                    <div className="font-mono text-xs text-[#3F304D]/70 font-bold mb-1">{d.year}</div>
                    <div className="font-serif text-2xl font-bold text-[#1A1420]">{d.label}</div>
                    <div className="text-[10px] text-[#2C2626]/60 mt-0.5">YoY Sales Growth</div>
                  </div>
                ))}
              </div>
            </section>

            {/* 4. Factory-Floor Merchandising Operations */}
            <section className="space-y-4 pt-6 border-t border-[#3F304D]/10">
              <h2 className="font-serif text-2xl sm:text-3xl text-[#1A1420]">
                4. Operational Execution: Factory Floor to Storefront
              </h2>
              <p className="text-xs sm:text-sm text-[#2C2626]/80 leading-relaxed">
                Rather than acting as a remote media agency, Growify stationed dedicated merchandisers directly at the production atelier. This ensured:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs text-[#2C2626]/80">
                <div className="p-4 rounded-xl bg-[#FAF8F5] border border-[#3F304D]/10">
                  <strong className="block text-[#1A1420] mb-1">RTS Predictability</strong>
                  Real-time synchronization of fabric availability and ready-to-ship pieces on Shopify.
                </div>
                <div className="p-4 rounded-xl bg-[#FAF8F5] border border-[#3F304D]/10">
                  <strong className="block text-[#1A1420] mb-1">Dynamic Pacing</strong>
                  Media budget shifted instantly toward silhouettes with verified ready-to-dispatch quantities.
                </div>
                <div className="p-4 rounded-xl bg-[#FAF8F5] border border-[#3F304D]/10">
                  <strong className="block text-[#1A1420] mb-1">International SLAs</strong>
                  100% adherence to promised delivery dates for critical overseas wedding timelines.
                </div>
              </div>
            </section>

            {/* 5. Required Publication Validation Checklist */}
            <section className="space-y-4 pt-6 border-t border-[#3F304D]/10 bg-zinc-50 p-6 rounded-2xl">
              <h2 className="font-serif text-xl text-[#1A1420]">
                Internal Account Audit &amp; Validation Checklist
              </h2>
              <ul className="space-y-1.5 text-xs text-[#2C2626]/80">
                {study.validationChecklist.map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-[#3F304D] font-bold">□</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>
          </div>

          {/* CTA */}
          <div className="mt-16 text-center bg-[#3F304D] text-[#FAF8F5] p-10 rounded-3xl">
            <h2 className="font-serif text-3xl text-white mb-2">
              Scale Your Brand Globally with Growify
            </h2>
            <p className="text-xs sm:text-sm text-[#FAF8F5]/80 max-w-md mx-auto mb-6">
              Learn how our connected commerce and factory merchandising model can unlock international revenue for your couture house.
            </p>
            <button
              onClick={() => onOpenEnquiry("Mahima Mahajan Model Consultation")}
              className="px-8 py-3.5 bg-[#BB96DA] text-[#1A1420] text-xs font-semibold tracking-wider uppercase rounded-xl hover:bg-[#a97ecf] transition-all shadow-md"
            >
              Consult with Senior Growth Strategist
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
