import { Link } from "react-router-dom";
import { ArrowRight, ChevronRight, Sparkles, Cpu, Layers, ExternalLink, CheckCircle2 } from "lucide-react";
import { PRODUCTS } from "@/data/products";
import { SEOHead } from "@/components/SEOHead";

interface ProductsPageProps {
  onOpenEnquiry: (serviceName?: string) => void;
}

export function ProductsPage({ onOpenEnquiry }: ProductsPageProps) {
  return (
    <>
      <SEOHead
        title="Proprietary Technology Products & AI Retail Tools"
        description="Growify's proprietary software suite: Lookify AI virtual try-on, Rossify commerce workflow automation, and Craftify generative creative studio."
        canonicalPath="/products"
      />

      <div className="pt-32 pb-24 bg-[#FAF8F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="max-w-3xl space-y-4 mb-16">
            <span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-[#3F304D]/70 block">
              Technology &amp; Software
            </span>
            <h1 className="font-serif text-4xl sm:text-6xl text-[#1A1420] leading-tight">
              Software Engineered for Luxury Digital Commerce
            </h1>
            <p className="text-base text-[#2C2626]/80 leading-relaxed font-sans">
              Growify is both a growth consultancy and a technology builder. We engineer proprietary software products that directly solve the unique visual, fit, and operational friction of selling luxury fashion online.
            </p>
          </div>

          {/* Product Cards Grid */}
          <div className="space-y-12 mb-20">
            {PRODUCTS.map((prod) => (
              <div
                key={prod.id}
                id={prod.id}
                className="bg-white rounded-3xl p-8 sm:p-12 border border-[#3F304D]/10 shadow-xs hover:shadow-md transition-shadow"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  <div className="lg:col-span-5 space-y-4">
                    <div className="flex items-center gap-3">
                      <span className="font-serif text-3xl font-bold text-[#1A1420]">
                        {prod.name}
                      </span>
                      <span
                        className={`text-[10px] font-mono px-2 py-0.5 rounded font-bold uppercase ${
                          prod.status === "Live & Deployed"
                            ? "bg-emerald-100 text-emerald-800 border border-emerald-300"
                            : prod.status.includes("Development")
                            ? "bg-amber-100 text-amber-800 border border-amber-300"
                            : "bg-purple-100 text-purple-800 border border-purple-300"
                        }`}
                      >
                        {prod.status}
                      </span>
                    </div>

                    <h2 className="font-serif text-2xl text-[#1A1420] leading-snug">
                      {prod.headline}
                    </h2>

                    <p className="text-xs sm:text-sm text-[#2C2626]/80 leading-relaxed">
                      {prod.description}
                    </p>

                    {prod.verifiedMetrics && (
                      <div className="grid grid-cols-2 gap-3 pt-2">
                        {prod.verifiedMetrics.map((vm, i) => (
                          <div key={i} className="p-3 bg-[#FAF8F5] rounded-xl border border-[#3F304D]/10">
                            <div className="font-serif text-2xl font-bold text-[#3F304D]">
                              {vm.value}
                            </div>
                            <div className="text-[11px] text-[#2C2626]/70 mt-0.5">
                              {vm.label}
                            </div>
                          </div>
                        ))}
                      </div>
                    )}

                    <div className="pt-4 flex flex-wrap items-center gap-4">
                      <Link
                        to={`/products/${prod.id}`}
                        className="px-5 py-2.5 bg-[#3F304D] text-[#FAF8F5] text-xs font-semibold tracking-wider uppercase rounded-lg hover:bg-[#2B1E37] transition-all"
                      >
                        Explore {prod.name} Specifications
                      </Link>

                      {prod.demoUrl && (
                        <a
                          href={prod.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-xs text-[#3F304D] font-semibold hover:underline"
                        >
                          <span>Live Demo Store</span>
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Capabilities List */}
                  <div className="lg:col-span-7 bg-[#FAF8F5] p-6 sm:p-8 rounded-2xl border border-[#3F304D]/10 space-y-5">
                    <h3 className="text-xs font-bold uppercase tracking-wider text-[#3F304D]">
                      Key Technical Capabilities
                    </h3>

                    <div className="space-y-3">
                      {prod.keyCapabilities.map((cap, i) => (
                        <div key={i} className="p-3.5 bg-white rounded-xl border border-[#3F304D]/5 space-y-1">
                          <div className="text-xs font-bold text-[#1A1420] flex items-center gap-2">
                            <Sparkles className="w-3.5 h-3.5 text-[#BB96DA]" />
                            <span>{cap.title}</span>
                          </div>
                          <p className="text-xs text-[#2C2626]/75 leading-relaxed pl-5">
                            {cap.desc}
                          </p>
                        </div>
                      ))}
                    </div>

                    <div className="pt-3 border-t border-[#3F304D]/10 flex flex-wrap items-center justify-between text-xs text-[#2C2626]/70 gap-2">
                      <span><strong>Commercial Model:</strong> {prod.commercialModel}</span>
                      <span className="font-mono text-[11px] text-[#3F304D]/70">{prod.roadmapStage}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center bg-[#3F304D] text-[#FAF8F5] p-10 rounded-3xl">
            <h2 className="font-serif text-3xl text-white mb-3">
              Deploy Lookify on Your Shopify Storefront
            </h2>
            <p className="text-xs sm:text-sm text-[#FAF8F5]/80 max-w-md mx-auto mb-6">
              Experience the online fitting room that has delivered 100K+ virtual try-ons for leading Indian and global designer labels.
            </p>
            <button
              onClick={() => onOpenEnquiry("Lookify Deployment")}
              className="px-8 py-3.5 bg-[#BB96DA] text-[#1A1420] text-xs font-semibold tracking-wider uppercase rounded-xl hover:bg-[#a97ecf] transition-all shadow-md"
            >
              Request Lookify Integration Demo
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
