import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2, AlertTriangle, ShieldCheck, TrendingUp, Clock, MessageSquare, ShoppingBag } from "lucide-react";
import { CASE_STUDIES } from "@/data/caseStudies";
import { SEOHead } from "@/components/SEOHead";

interface RidhiCaseStudyPageProps {
  onOpenEnquiry: (serviceName?: string) => void;
}

export function RidhiCaseStudyPage({ onOpenEnquiry }: RidhiCaseStudyPageProps) {
  const study = CASE_STUDIES.find((s) => s.slug === "ridhi-mehra")!;

  return (
    <>
      <SEOHead
        title="Ridhi Mehra Case Study — 7-Year Digital Commerce Journey"
        description="How Growify guided a 7-year growth partnership with Ridhi Mehra, scaling from digital launch to global couture flagship with 80%+ online revenue share."
        canonicalPath="/case-studies/ridhi-mehra"
      />

      <div className="pt-32 pb-24 bg-[#FAF8F5]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumbs */}
          <div className="flex items-center gap-2 text-xs text-[#2C2626]/60 mb-8">
            <Link to="/" className="hover:text-[#3F304D]">Home</Link>
            <span>/</span>
            <Link to="/case-studies" className="hover:text-[#3F304D]">Case Studies</Link>
            <span>/</span>
            <span className="text-[#3F304D] font-medium">Ridhi Mehra</span>
          </div>

          {/* Header */}
          <div className="space-y-4 mb-12">
            <div className="flex flex-wrap items-center gap-3">
              <span className="text-xs font-bold tracking-widest uppercase bg-[#3F304D] text-[#FAF8F5] px-3 py-1 rounded">
                Ridhi Mehra
              </span>
              <span className="text-xs text-[#3F304D]/70 font-semibold uppercase tracking-wider">
                7-Year Digital Partnership
              </span>
              <span className="text-xs text-[#2C2626]/60 font-mono ml-auto">
                Source: Growth Deck P.21–23
              </span>
            </div>

            <h1 className="font-serif text-4xl sm:text-6xl text-[#1A1420] leading-tight">
              7-Year Digital Commerce Journey: Scaling from Digital Launch to Global Couture Flagship
            </h1>

            <p className="text-base sm:text-lg text-[#2C2626]/80 leading-relaxed font-sans">
              Growify transitioned Ridhi Mehra from a domestic designer label into a globally recognized couture house through an integrated digital storefront, WhatsApp-assisted bridal sales, and repeat-retention infrastructure.
            </p>
          </div>

          {/* Metrics Strip */}
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

          {/* Data Validation Notice */}
          <div className="mb-14 p-6 bg-amber-50/90 border border-amber-300/80 rounded-2xl text-xs text-amber-950 space-y-2">
            <div className="flex items-center gap-2 font-bold text-amber-900 text-sm">
              <AlertTriangle className="w-4 h-4 text-amber-700" />
              <span>Evidence Audit &amp; Data Validation Notice (Deck Pages 22 &amp; 23)</span>
            </div>
            <p className="leading-relaxed">
              On Page 22 of the Growth Deck, the headline states <strong>'Scaled revenue by 72M over 7 years'</strong>. The deck does not specify the currency denomination (e.g., INR 72 Million / ₹7.2 Crores vs ₹72 Crores vs USD $72M). Furthermore, the chart on Slide 22 repeats the label <em>'2021'</em> four consecutive times along the horizontal axis. Following our strict non-negotiable rules, we do not invent an unverified currency unit or fix chart anomalies silently. This metric is flagged as <span className="bg-amber-200 text-amber-900 font-bold px-1 rounded">NEEDS VALIDATION</span> for client accounting sign-off.
            </p>
          </div>

          {/* Narrative Content Blocks */}
          <div className="space-y-12 bg-white p-8 sm:p-12 rounded-3xl border border-[#3F304D]/10">
            {/* 1. Seven-Year Journey Overview */}
            <section className="space-y-4">
              <h2 className="font-serif text-2xl sm:text-3xl text-[#1A1420]">
                1. The Seven-Year Digital Commerce Journey
              </h2>
              <p className="text-xs sm:text-sm text-[#2C2626]/80 leading-relaxed">
                Over a continuous 7-year partnership, Growify transitioned Ridhi Mehra from a domestic brand dependent on third-party multi-designer retail into an independent direct-to-consumer powerhouse generating 80–90% of total brand sales through its owned digital channel.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 bg-[#FAF8F5] rounded-xl border border-[#3F304D]/10 text-xs">
                  <strong className="text-[#1A1420] block mb-1">Dual Funnel Architecture:</strong>
                  Clear architectural separation between instant checkouts for contemporary pret and high-touch private consultation bookings for bespoke bridal couture.
                </div>
                <div className="p-4 bg-[#FAF8F5] rounded-xl border border-[#3F304D]/10 text-xs">
                  <strong className="text-[#1A1420] block mb-1">Diaspora Expansion:</strong>
                  Targeted penetration into Tier-2 and Tier-3 global Indian diaspora markets across North America, the UK, Europe, Australia, and Singapore.
                </div>
              </div>
            </section>

            {/* 2. Core Levers */}
            <section className="space-y-6 pt-6 border-t border-[#3F304D]/10">
              <h2 className="font-serif text-2xl sm:text-3xl text-[#1A1420]">
                2. Key Strategic Levers Engineered by Growify
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

            {/* 3. Sustainable Growth & Production Cap Context */}
            <section className="space-y-4 pt-6 border-t border-[#3F304D]/10">
              <h2 className="font-serif text-2xl sm:text-3xl text-[#1A1420]">
                3. Sustainable Growth Capped by Production Health (Deck P.24)
              </h2>
              <p className="text-xs sm:text-sm text-[#2C2626]/80 leading-relaxed">
                As recorded in Growth Deck Page 24, growth was <em>'deliberately capped by production capacity, equity, and operational health'</em>. Instead of burning margins on unsustainable discounts to force artificial top-line spikes, Growify focused on:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-center text-xs">
                <div className="p-4 bg-[#FAF8F5] rounded-xl border border-[#3F304D]/10">
                  <div className="font-serif text-2xl font-bold text-[#3F304D]">45–55%</div>
                  <div className="text-[#2C2626]/70 mt-1">Repeat Purchase Revenue</div>
                </div>
                <div className="p-4 bg-[#FAF8F5] rounded-xl border border-[#3F304D]/10">
                  <div className="font-serif text-2xl font-bold text-[#3F304D]">80–90%</div>
                  <div className="text-[#2C2626]/70 mt-1">Online Share of Brand Sales</div>
                </div>
                <div className="p-4 bg-[#FAF8F5] rounded-xl border border-[#3F304D]/10">
                  <div className="font-serif text-2xl font-bold text-[#3F304D]">69%</div>
                  <div className="text-[#2C2626]/70 mt-1">Total Sales Expansion</div>
                </div>
              </div>
            </section>

            {/* 4. Client Validation Action Items */}
            <section className="space-y-4 pt-6 border-t border-[#3F304D]/10 bg-zinc-50 p-6 rounded-2xl">
              <h2 className="font-serif text-xl text-[#1A1420]">
                Required Data Actions for Case Study Publication
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
              Build a 7-Year Compounding Growth Partnership
            </h2>
            <p className="text-xs sm:text-sm text-[#FAF8F5]/80 max-w-md mx-auto mb-6">
              Learn how Growify serves as an embedded commercial operator for ambitious fashion houses.
            </p>
            <button
              onClick={() => onOpenEnquiry("Ridhi Mehra Partnership Model")}
              className="px-8 py-3.5 bg-[#BB96DA] text-[#1A1420] text-xs font-semibold tracking-wider uppercase rounded-xl hover:bg-[#a97ecf] transition-all shadow-md"
            >
              Discuss a Long-Term Strategic Partnership
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
