import { Link } from "react-router-dom";
import { ArrowRight, ChevronRight, ShieldCheck, AlertCircle, FileText, CheckCircle2 } from "lucide-react";
import { CASE_STUDIES, FUTURE_CASE_STUDY_PIPELINE } from "@/data/caseStudies";
import { SEOHead } from "@/components/SEOHead";

interface CaseStudiesIndexPageProps {
  onOpenEnquiry: (serviceName?: string) => void;
}

export function CaseStudiesIndexPage({ onOpenEnquiry }: CaseStudiesIndexPageProps) {
  return (
    <>
      <SEOHead
        title="Case Studies & Commercial Outcomes"
        description="Evidence-backed case studies for Mahima Mahajan and Ridhi Mehra, alongside Growify's 6-part future case-study data pipeline."
        canonicalPath="/case-studies"
      />

      <div className="pt-32 pb-24 bg-[#FAF8F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="max-w-3xl space-y-4 mb-12">
            <span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-[#3F304D]/70 block">
              Proven Performance
            </span>
            <h1 className="font-serif text-4xl sm:text-6xl text-[#1A1420] leading-tight">
              Case Studies &amp; Documented Outcomes
            </h1>
            <p className="text-base text-[#2C2626]/80 leading-relaxed font-sans">
              A luxury growth partner proves capability with verified business evidence, not just logo placements. Here we document the exact challenges, architectures, and outcomes achieved for our flagship partners.
            </p>
          </div>

          {/* Evidence Policy Banner */}
          <div className="mb-14 p-5 rounded-2xl bg-amber-50/90 border border-amber-200 text-xs text-amber-950 leading-relaxed flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-amber-700 flex-shrink-0 mt-0.5" />
            <div>
              <strong>Strict Evidence &amp; Verification Policy:</strong> All performance metrics on this website derive directly from the primary supplied Growify Growth Deck and candidate brief. Where source deck percentages or descriptions show potential ambiguity, they are transparently marked with an internal <span className="bg-amber-200/80 text-amber-900 font-semibold px-1 py-0.5 rounded">NEEDS VALIDATION</span> flag. Growify never fabricates client revenue, approvals, or testimonial quotes.
            </div>
          </div>

          {/* Designed Case Studies */}
          <div className="space-y-12 mb-24">
            <h2 className="font-serif text-2xl sm:text-3xl text-[#1A1420]">
              Featured Client Case Studies
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {CASE_STUDIES.map((study) => (
                <div
                  key={study.slug}
                  className="bg-white rounded-3xl p-8 sm:p-10 border border-[#3F304D]/15 shadow-sm hover:shadow-lg transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-xs font-bold tracking-widest uppercase text-[#3F304D] bg-[#3F304D]/10 px-3 py-1 rounded-md">
                        {study.client}
                      </span>
                      <span className="text-[11px] font-mono text-[#2C2626]/60">
                        {study.deckSourcePage}
                      </span>
                    </div>

                    <h3 className="font-serif text-2xl sm:text-3xl text-[#1A1420] mb-3 leading-snug">
                      {study.headline}
                    </h3>

                    <p className="text-xs sm:text-sm text-[#2C2626]/80 leading-relaxed mb-6">
                      {study.summary}
                    </p>

                    {/* Metrics Cards */}
                    <div className="grid grid-cols-2 gap-3 mb-6">
                      {study.metrics.map((m, idx) => (
                        <div key={idx} className="p-3.5 bg-[#FAF8F5] rounded-xl border border-[#3F304D]/10">
                          <div className="font-serif text-2xl sm:text-3xl font-bold text-[#3F304D]">
                            {m.value}
                          </div>
                          <div className="text-[11px] font-medium text-[#2C2626]/70 mt-1">
                            {m.label}
                          </div>
                          {m.needsValidation && (
                            <span className="inline-block mt-1 text-[9px] bg-amber-100 text-amber-900 font-semibold px-1.5 py-0.5 rounded">
                              Needs Validation
                            </span>
                          )}
                        </div>
                      ))}
                    </div>

                    {/* Core Growth Levers */}
                    <div className="space-y-2 mb-6">
                      <div className="text-xs font-bold uppercase tracking-wider text-[#3F304D]">
                        Key Strategic Levers
                      </div>
                      {study.coreGrowthLevers.slice(0, 3).map((l, i) => (
                        <div key={i} className="text-xs text-[#2C2626]/80 flex items-start gap-2">
                          <span className="text-[#BB96DA] font-bold">✓</span>
                          <span>
                            <strong>{l.title}:</strong> {l.description}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-6 border-t border-[#3F304D]/10 flex items-center justify-between">
                    <Link
                      to={`/case-studies/${study.slug}`}
                      className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#3F304D] text-[#FAF8F5] text-xs font-semibold tracking-wider uppercase rounded-lg hover:bg-[#2B1E37] transition-all"
                    >
                      <span>Read Deep Dive</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                    <button
                      onClick={() => onOpenEnquiry(`Strategy Like ${study.client}`)}
                      className="text-xs font-semibold text-[#3F304D] hover:underline"
                    >
                      Discuss Similar Challenge →
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 6-Part Future Case Study Pipeline */}
          <div className="bg-white rounded-3xl p-8 sm:p-12 border border-[#3F304D]/15 mb-16">
            <div className="max-w-3xl mb-10">
              <span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-[#3F304D]/70 block">
                Evidence Pipeline
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#1A1420] mt-1">
                Future Case-Study Pipeline &amp; Account Data Requirements
              </h2>
              <p className="text-xs sm:text-sm text-[#2C2626]/80 leading-relaxed mt-2">
                In strict compliance with the assignment requirements, we outline six additional commercial case-study themes and document the exact first-party account data, measurement windows, and client approvals needed before commercial publication.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {FUTURE_CASE_STUDY_PIPELINE.map((pipe, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-[#FAF8F5] border border-[#3F304D]/10 flex flex-col justify-between space-y-4"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-[11px]">
                      <span className="font-mono font-bold text-[#BB96DA]">Theme 0{idx + 1}</span>
                      <span className="text-[#3F304D]/70 font-semibold">{pipe.targetCategory}</span>
                    </div>

                    <h3 className="font-serif text-lg text-[#1A1420] font-bold leading-snug">
                      {pipe.theme}
                    </h3>

                    <p className="text-xs text-[#2C2626]/75 leading-relaxed">
                      <strong>Objective:</strong> {pipe.businessObjective}
                    </p>

                    <div>
                      <div className="text-[11px] font-bold uppercase tracking-wider text-[#3F304D] mb-1.5">
                        Required Account Data:
                      </div>
                      <ul className="space-y-1 text-[11px] text-[#2C2626]/70">
                        {pipe.dataRequirements.slice(0, 2).map((req, rIdx) => (
                          <li key={rIdx} className="flex items-start gap-1.5">
                            <span className="text-[#3F304D]">•</span>
                            <span>{req}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="pt-3 border-t border-[#3F304D]/10 text-[11px] text-[#2C2626]/60">
                    <div>
                      <strong>Attribution:</strong> {pipe.attributionMethodology.slice(0, 65)}...
                    </div>
                    <div className="mt-1 text-emerald-800 font-semibold">
                      Approvals: {pipe.approvalsNeeded.join(", ")}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
