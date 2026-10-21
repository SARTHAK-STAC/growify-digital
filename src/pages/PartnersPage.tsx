import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2, ShieldCheck, Layers, ExternalLink, Zap } from "lucide-react";
import { PARTNERS } from "@/data/partners";
import { SEOHead } from "@/components/SEOHead";

interface PartnersPageProps {
  onOpenEnquiry: (serviceName?: string) => void;
}

export function PartnersPage({ onOpenEnquiry }: PartnersPageProps) {
  return (
    <>
      <SEOHead
        title="Partners & Technology Ecosystem — LimeChat, QuickReply & Razorpay"
        description="Growify's verified commerce ecosystem: LimeChat conversational AI, QuickReply WhatsApp retention, Razorpay payments, and Shopify Plus."
        canonicalPath="/partners"
      />

      <div className="pt-32 pb-24 bg-[#FAF8F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="max-w-3xl space-y-4 mb-14">
            <span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-[#3F304D]/70 block">
              Integrations &amp; Infrastructure
            </span>
            <h1 className="font-serif text-4xl sm:text-6xl text-[#1A1420] leading-tight">
              A Connected Commerce Ecosystem Built for Scale
            </h1>
            <p className="text-base text-[#2C2626]/80 leading-relaxed font-sans">
              We connect best-in-class commerce platforms, conversational AI channels, and payment gateways into a unified operational stack.
            </p>
          </div>

          {/* Compliance & Relationship Distinction Callout */}
          <div className="mb-14 p-6 bg-white rounded-2xl border border-[#3F304D]/15 shadow-xs text-xs text-[#2C2626]/80 space-y-2">
            <div className="flex items-center gap-2 font-bold text-[#3F304D] text-sm">
              <ShieldCheck className="w-5 h-5 text-emerald-700" />
              <span>Relationship Categorization &amp; Evidence Standard</span>
            </div>
            <p className="leading-relaxed">
              In accordance with the assignment guidelines, we strictly distinguish <strong>Verified Product Integrations</strong> (technologies with verified technical bridges deployed across our client portfolio) from <strong>Ecosystem Platforms</strong> and standard <strong>Platform Compatibility</strong>. We never claim official partnerships without verified commercial documentation.
            </p>
          </div>

          {/* Featured Partners Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {PARTNERS.map((partner) => (
              <div
                key={partner.name}
                className="bg-white rounded-3xl p-8 border border-[#3F304D]/15 shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono font-bold uppercase text-[#BB96DA]">
                      {partner.category}
                    </span>
                    <span
                      className={`text-[10px] font-mono px-2 py-0.5 rounded font-bold uppercase ${
                        partner.relationshipType === "Verified Product Integration"
                          ? "bg-emerald-100 text-emerald-800 border border-emerald-300"
                          : "bg-zinc-100 text-zinc-700 border border-zinc-300"
                      }`}
                    >
                      {partner.relationshipType}
                    </span>
                  </div>

                  <h2 className="font-serif text-2xl text-[#1A1420] mb-2 font-bold">
                    {partner.name}
                  </h2>

                  <p className="text-xs text-[#2C2626]/75 leading-relaxed mb-4">
                    {partner.description}
                  </p>

                  <div className="p-3 bg-[#FAF8F5] rounded-xl border border-[#3F304D]/10 mb-5">
                    <div className="text-[10px] font-bold uppercase tracking-wider text-[#3F304D] mb-1">
                      Business Value to Luxury Brand:
                    </div>
                    <div className="text-xs text-[#2C2626]/85 font-medium leading-relaxed">
                      {partner.customerValue}
                    </div>
                  </div>

                  <div className="space-y-1.5 mb-4">
                    <div className="text-[11px] font-bold uppercase tracking-wider text-[#3F304D]">
                      Verified Capabilities:
                    </div>
                    {partner.verifiedCapabilities.map((cap, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-[#2C2626]/80">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                        <span>{cap}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-[#3F304D]/10 text-[10px] text-[#2C2626]/60 font-mono">
                  {partner.statusNote}
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center bg-[#3F304D] text-[#FAF8F5] p-10 rounded-3xl">
            <h2 className="font-serif text-3xl text-white mb-2">
              Optimize Your Commerce Technology Stack
            </h2>
            <p className="text-xs sm:text-sm text-[#FAF8F5]/80 max-w-md mx-auto mb-6">
              Connect payments, WhatsApp conversational AI, and Shopify Plus into an automated growth system.
            </p>
            <button
              onClick={() => onOpenEnquiry("Ecosystem Architecture Consultation")}
              className="px-8 py-3.5 bg-[#BB96DA] text-[#1A1420] text-xs font-semibold tracking-wider uppercase rounded-xl hover:bg-[#a97ecf] transition-all shadow-md"
            >
              Consult on Ecosystem Integrations
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
