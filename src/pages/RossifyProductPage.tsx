import { Link } from "react-router-dom";
import { ArrowRight, AlertTriangle, CheckCircle2, Clock, ShieldCheck, FileCheck } from "lucide-react";
import { PRODUCTS } from "@/data/products";
import { SEOHead } from "@/components/SEOHead";

interface RossifyProductPageProps {
  onOpenEnquiry: (serviceName?: string) => void;
}

export function RossifyProductPage({ onOpenEnquiry }: RossifyProductPageProps) {
  const rossify = PRODUCTS.find((p) => p.id === "rossify")!;

  return (
    <>
      <SEOHead
        title="Rossify — Commerce Workflow & Operational Automation Suite"
        description="Product overview and development checklist for Rossify: factory-floor merchandising synchronization and luxury inquiry triage."
        canonicalPath="/products/rossify"
      />

      <div className="pt-32 pb-24 bg-[#FAF8F5]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumbs */}
          <div className="flex items-center gap-2 text-xs text-[#2C2626]/60 mb-8">
            <Link to="/" className="hover:text-[#3F304D]">Home</Link>
            <span>/</span>
            <Link to="/products" className="hover:text-[#3F304D]">Products</Link>
            <span>/</span>
            <span className="text-[#3F304D] font-medium">Rossify</span>
          </div>

          {/* Header */}
          <div className="space-y-4 mb-10">
            <div className="flex items-center gap-3">
              <span className="font-serif text-3xl font-bold text-[#1A1420]">
                Rossify
              </span>
              <span className="text-xs font-mono font-bold uppercase bg-amber-100 text-amber-900 border border-amber-300 px-2.5 py-0.5 rounded">
                Product Overview (In Development)
              </span>
            </div>

            <h1 className="font-serif text-3xl sm:text-5xl text-[#1A1420] leading-tight">
              Commerce Workflow &amp; Operational Automation Suite
            </h1>

            <p className="text-base text-[#2C2626]/80 leading-relaxed font-sans max-w-3xl">
              {rossify.description}
            </p>
          </div>

          {/* Validation Notice Banner */}
          <div className="mb-12 p-6 bg-amber-50 border border-amber-300 rounded-2xl text-xs text-amber-950 space-y-2">
            <div className="flex items-center gap-2 font-bold text-amber-900 text-sm">
              <AlertTriangle className="w-4 h-4 text-amber-700" />
              <span>Specification Notice: Features Subject to Client Confirmation</span>
            </div>
            <p className="leading-relaxed">
              In accordance with the evaluation rules, Rossify is explicitly identified as an internal operational capability currently undergoing active productization. The specifications outlined below represent proposed workflow features and require written verification from Growify product management before commercial deployment.
            </p>
          </div>

          {/* Key Proposed Capabilities */}
          <div className="bg-white rounded-3xl p-8 sm:p-10 border border-[#3F304D]/10 shadow-xs mb-12">
            <h2 className="font-serif text-2xl text-[#1A1420] mb-6">
              Proposed Workflow Architecture
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {rossify.keyCapabilities.map((cap, i) => (
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

          {/* Product Input Checklist Required for Full Launch */}
          <div className="bg-white rounded-3xl p-8 sm:p-10 border border-[#3F304D]/15 shadow-xs mb-16">
            <div className="flex items-center gap-2 mb-4">
              <FileCheck className="w-5 h-5 text-[#3F304D]" />
              <h2 className="font-serif text-2xl text-[#1A1420]">
                Product-Input Checklist (Required Before Public Launch)
              </h2>
            </div>
            <p className="text-xs text-[#2C2626]/75 leading-relaxed mb-6">
              As required by the assignment guidelines, the following deliverables must be formally validated by the product engineering lead:
            </p>

            <div className="space-y-2.5">
              {rossify.requiredProductInputs?.map((inp, idx) => (
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
              Inquire About Rossify Private Beta
            </h2>
            <p className="text-xs sm:text-sm text-[#FAF8F5]/80 max-w-md mx-auto mb-6">
              Growify enterprise partners receive early access to internal operational automation tools.
            </p>
            <button
              onClick={() => onOpenEnquiry("Rossify Beta Access")}
              className="px-8 py-3.5 bg-[#BB96DA] text-[#1A1420] text-xs font-semibold tracking-wider uppercase rounded-xl hover:bg-[#a97ecf] transition-all shadow-md"
            >
              Request Beta Briefing
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
