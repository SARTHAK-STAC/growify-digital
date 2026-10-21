import { Link } from "react-router-dom";
import { ArrowRight, ChevronRight, CheckCircle2, ShoppingBag, TrendingUp, MessageSquare, Clock, Search, Cpu } from "lucide-react";
import { SERVICES } from "@/data/services";
import { SEOHead } from "@/components/SEOHead";

interface ServicesPageProps {
  onOpenEnquiry: (serviceName?: string) => void;
}

export function ServicesPage({ onOpenEnquiry }: ServicesPageProps) {
  return (
    <>
      <SEOHead
        title="Connected Commerce & Growth Services"
        description="Explore Growify's connected capabilities: bespoke Shopify Plus development, full-funnel Meta & Google performance marketing, WhatsApp CRM retention, and 18-hour sales concierge."
        canonicalPath="/services"
      />

      <div className="pt-32 pb-20 bg-[#FAF8F5]">
        {/* Header */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="max-w-3xl space-y-4">
            <span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-[#3F304D]/70 block">
              Core Capabilities
            </span>
            <h1 className="font-serif text-4xl sm:text-6xl text-[#1A1420] leading-tight">
              A Connected Growth Engine for Luxury Brands
            </h1>
            <p className="text-base text-[#2C2626]/80 leading-relaxed font-sans">
              We reject fragmented agency silos. Growify brings storefront design, paid customer acquisition, retention marketing, factory merchandising, and AI technology together under a single accountable team.
            </p>
          </div>
        </div>

        {/* Services List */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {SERVICES.map((service, index) => (
            <div
              key={service.id}
              id={service.id}
              className="bg-white border border-[#3F304D]/10 rounded-3xl p-8 sm:p-12 shadow-xs hover:shadow-md transition-shadow"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                <div className="lg:col-span-5 space-y-4">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono font-bold text-[#BB96DA]">
                      0{index + 1}
                    </span>
                    <span className="text-xs font-semibold uppercase tracking-wider text-[#3F304D]/70 border-l border-[#3F304D]/15 pl-2">
                      {service.category}
                    </span>
                    {service.signatureService && (
                      <span className="text-[10px] font-bold uppercase bg-[#3F304D] text-[#FAF8F5] px-2 py-0.5 rounded ml-auto">
                        Signature Service
                      </span>
                    )}
                  </div>

                  <h2 className="font-serif text-3xl sm:text-4xl text-[#1A1420] leading-snug">
                    {service.title}
                  </h2>

                  <p className="text-sm font-medium text-[#3F304D] leading-relaxed">
                    {service.subtitle}
                  </p>

                  <div className="pt-2">
                    <h3 className="text-xs font-bold uppercase tracking-wider text-[#2C2626] mb-1">
                      The Business Problem Solved
                    </h3>
                    <p className="text-xs text-[#2C2626]/80 leading-relaxed">
                      {service.problem}
                    </p>
                  </div>

                  <div className="pt-4 flex items-center gap-4">
                    <button
                      onClick={() => onOpenEnquiry(service.title)}
                      className="px-5 py-2.5 bg-[#3F304D] text-[#FAF8F5] text-xs font-semibold tracking-wider uppercase rounded-lg hover:bg-[#2B1E37] transition-all"
                    >
                      {service.cta}
                    </button>
                    {service.id === "commerce" && (
                      <Link
                        to="/services/commerce"
                        className="text-xs font-semibold text-[#3F304D] hover:underline inline-flex items-center gap-1"
                      >
                        <span>Deep Dive Specs</span>
                        <ChevronRight className="w-3.5 h-3.5" />
                      </Link>
                    )}
                    {service.id === "growth" && (
                      <Link
                        to="/services/growth"
                        className="text-xs font-semibold text-[#3F304D] hover:underline inline-flex items-center gap-1"
                      >
                        <span>Deep Dive Specs</span>
                        <ChevronRight className="w-3.5 h-3.5" />
                      </Link>
                    )}
                  </div>
                </div>

                {/* Deliverables & Evidence */}
                <div className="lg:col-span-7 bg-[#FAF8F5] rounded-2xl p-6 sm:p-8 border border-[#3F304D]/10 space-y-6">
                  <div>
                    <h3 className="text-xs font-bold uppercase tracking-wider text-[#3F304D] mb-3">
                      Core Scope &amp; Deliverables
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {service.deliverables.map((item, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-xs text-[#2C2626]/85">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Evidence Row */}
                  <div className="pt-4 border-t border-[#3F304D]/10">
                    <h3 className="text-xs font-bold uppercase tracking-wider text-[#3F304D] mb-3">
                      Demonstrated Performance Benchmarks
                    </h3>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                      {service.evidence.map((ev, idx) => (
                        <div key={idx} className="p-3 bg-white rounded-xl border border-[#3F304D]/10">
                          <div className="font-serif text-2xl font-bold text-[#3F304D]">
                            {ev.metric}
                          </div>
                          <div className="text-[11px] text-[#2C2626]/70 mt-1 leading-snug">
                            {ev.context}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Process Steps */}
                  <div className="pt-4 border-t border-[#3F304D]/10">
                    <h3 className="text-xs font-bold uppercase tracking-wider text-[#3F304D] mb-2">
                      Four-Stage Engagement Process
                    </h3>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs">
                      {service.process.map((step) => (
                        <div key={step.step} className="p-2.5 bg-white/70 rounded-lg border border-[#3F304D]/5">
                          <div className="font-mono text-[10px] text-[#BB96DA] font-bold">{step.step}</div>
                          <div className="font-semibold text-[#1A1420] text-[11px] mt-0.5">{step.title}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
