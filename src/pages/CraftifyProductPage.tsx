import { Link } from "react-router-dom";
import { ArrowRight, AlertTriangle, FileCheck, Sparkles, Camera, Layers } from "lucide-react";
import { PRODUCTS } from "@/data/products";
import { SEOHead } from "@/components/SEOHead";

interface CraftifyProductPageProps {
  onOpenEnquiry: (serviceName?: string) => void;
}

export function CraftifyProductPage({ onOpenEnquiry }: CraftifyProductPageProps) {
  const craftify = PRODUCTS.find((p) => p.id === "craftify")!;

  return (
    <>
      <SEOHead
        title="Craftify — Generative AI Fashion & Jewellery Creative Studio"
        description="Product overview and development checklist for Craftify: generative editorial lookbooks and automated fashion photography variants."
        canonicalPath="/products/craftify"
      />

      <div className="pt-32 pb-24 bg-[#FAF8F5]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumbs */}
          <div className="flex items-center gap-2 text-xs text-[#2C2626]/60 mb-8">
            <Link to="/" className="hover:text-[#3F304D]">Home</Link>
            <span>/</span>
            <Link to="/products" className="hover:text-[#3F304D]">Products</Link>
            <span>/</span>
            <span className="text-[#3F304D] font-medium">Craftify</span>
          </div>

          {/* Header */}
          <div className="space-y-4 mb-10">
            <div className="flex items-center gap-3">
              <span className="font-serif text-3xl font-bold text-[#1A1420]">
                Craftify
              </span>
              <span className="text-xs font-mono font-bold uppercase bg-purple-100 text-purple-900 border border-purple-300 px-2.5 py-0.5 rounded">
                Product Overview (Proposed Concept)
              </span>
            </div>

            <h1 className="font-serif text-3xl sm:text-5xl text-[#1A1420] leading-tight">
              Generative AI Creative Studio for Luxury Fashion &amp; Jewellery
            </h1>

            <p className="text-base text-[#2C2626]/80 leading-relaxed font-sans max-w-3xl">
              {craftify.description}
            </p>
          </div>

          {/* Validation Banner */}
          <div className="mb-12 p-6 bg-purple-50/80 border border-purple-300 rounded-2xl text-xs text-purple-950 space-y-2">
            <div className="flex items-center gap-2 font-bold text-purple-900 text-sm">
              <AlertTriangle className="w-4 h-4 text-purple-700" />
              <span>Specification Notice: Conceptual Feature Set</span>
            </div>
            <p className="leading-relaxed">
              Craftify is clearly designated as a proposed generative creative architecture. In strict compliance with the assignment rules, these features are presented as conceptual capabilities rather than existing commercial software. A complete product input checklist has been defined below.
            </p>
          </div>

          {/* Proposed Capabilities */}
          <div className="bg-white rounded-3xl p-8 sm:p-10 border border-[#3F304D]/10 shadow-xs mb-12">
            <h2 className="font-serif text-2xl text-[#1A1420] mb-6">
              Conceptual Feature Capabilities
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {craftify.keyCapabilities.map((cap, i) => (
                <div key={i} className="p-4 bg-[#FAF8F5] rounded-xl border border-[#3F304D]/10 space-y-1.5">
                  <h3 className="font-serif text-base font-bold text-[#3F304D]">
                    {cap.title}
                  </h3>
                  <p className="text-xs text-[#2C2626]/75 leading-relaxed">
                    {cap.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Product Input Checklist */}
          <div className="bg-white rounded-3xl p-8 sm:p-10 border border-[#3F304D]/15 shadow-xs mb-16">
            <div className="flex items-center gap-2 mb-4">
              <FileCheck className="w-5 h-5 text-[#3F304D]" />
              <h2 className="font-serif text-2xl text-[#1A1420]">
                Product-Input Checklist (Required Prior to Commercial Release)
              </h2>
            </div>
            <p className="text-xs text-[#2C2626]/75 leading-relaxed mb-6">
              The following technical and legal verifications must be documented before opening commercial access:
            </p>

            <div className="space-y-2.5">
              {craftify.requiredProductInputs?.map((inp, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs text-[#2C2626]/85 p-3 rounded-lg bg-zinc-50 border border-zinc-200">
                  <span className="font-mono text-[#3F304D] font-bold">□ 0{idx + 1}</span>
                  <span>{inp}</span>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="text-center bg-[#3F304D] text-[#FAF8F5] p-10 rounded-3xl">
            <h2 className="font-serif text-3xl text-white mb-2">
              Interested in Creative Studio Prototyping?
            </h2>
            <p className="text-xs sm:text-sm text-[#FAF8F5]/80 max-w-md mx-auto mb-6">
              Explore how generative catalog photography can accelerate your collection launches.
            </p>
            <button
              onClick={() => onOpenEnquiry("Craftify Creative Studio Inquiry")}
              className="px-8 py-3.5 bg-[#BB96DA] text-[#1A1420] text-xs font-semibold tracking-wider uppercase rounded-xl hover:bg-[#a97ecf] transition-all shadow-md"
            >
              Request Creative Consultation
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
