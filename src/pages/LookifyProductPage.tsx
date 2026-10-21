import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ExternalLink, Sparkles, CheckCircle2, ShieldCheck, Play, ArrowLeftRight } from "lucide-react";
import { PRODUCTS } from "@/data/products";
import { SEOHead } from "@/components/SEOHead";

interface LookifyProductPageProps {
  onOpenEnquiry: (serviceName?: string) => void;
}

export function LookifyProductPage({ onOpenEnquiry }: LookifyProductPageProps) {
  const lookify = PRODUCTS.find((p) => p.id === "lookify")!;
  const [sliderPos, setSliderPos] = useState(50); // percentage 0-100

  return (
    <>
      <SEOHead
        title="Lookify — AI Virtual Try-On for Luxury Fashion Brands"
        description="Help online shoppers see how luxury apparel and couture look on them before they buy. 90% success rate, 100K+ try-ons across 50+ designer labels."
        canonicalPath="/products/lookify"
      />

      <div className="pt-32 pb-24 bg-[#FAF8F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumbs */}
          <div className="flex items-center gap-2 text-xs text-[#2C2626]/60 mb-8">
            <Link to="/" className="hover:text-[#3F304D]">Home</Link>
            <span>/</span>
            <Link to="/products" className="hover:text-[#3F304D]">Products</Link>
            <span>/</span>
            <span className="text-[#3F304D] font-medium">Lookify</span>
          </div>

          {/* Hero */}
          <div className="max-w-4xl space-y-6 mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-semibold tracking-wider uppercase border border-emerald-300">
              <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse" />
              <span>Live Production Product • 50+ Brands Worldwide</span>
            </div>

            <h1 className="font-serif text-4xl sm:text-6xl text-[#1A1420] leading-tight">
              The Online Fitting Room: AI Virtual Try-On for Luxury Fashion
            </h1>

            <p className="text-lg text-[#2C2626]/80 leading-relaxed font-sans max-w-3xl">
              Let shoppers see how products look on them before they buy, with a personalized try-on in seconds. Powered by proprietary neural silhouette diffusion models.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href={lookify.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#3F304D] text-[#FAF8F5] text-xs font-semibold tracking-wider uppercase rounded-xl hover:bg-[#2B1E37] transition-all shadow-md"
              >
                <span>Try Live Demo Store</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>

              <a
                href={lookify.shopifyAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-white border border-[#3F304D]/15 text-[#1A1420] text-xs font-semibold tracking-wider uppercase rounded-xl hover:bg-zinc-50 transition-all shadow-xs"
              >
                <span>View on Shopify App Store</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>

              <a
                href={lookify.officialUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs text-[#3F304D] font-semibold hover:underline px-3 py-2"
              >
                <span>Visit lookify.in</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Verified Metrics Strip */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-16">
            {lookify.verifiedMetrics?.map((m, idx) => (
              <div key={idx} className="p-6 bg-white rounded-2xl border border-[#3F304D]/15 shadow-xs text-center">
                <div className="font-serif text-3xl sm:text-4xl font-bold text-[#3F304D]">
                  {m.value}
                </div>
                <div className="text-xs uppercase tracking-wider text-[#2C2626]/70 mt-1 font-semibold">
                  {m.label}
                </div>
              </div>
            ))}
          </div>

          {/* Interactive Before & After Virtual Try-On Slider Demonstration */}
          <div className="bg-white rounded-3xl p-8 sm:p-12 border border-[#3F304D]/15 shadow-sm mb-20">
            <div className="max-w-2xl mb-8">
              <span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-[#3F304D]/70 block">
                Interactive Transformation Simulator
              </span>
              <h2 className="font-serif text-3xl text-[#1A1420] mt-1">
                Before You Buy It, Experience It
              </h2>
              <p className="text-xs sm:text-sm text-[#2C2626]/80 leading-relaxed mt-2">
                Drag the interactive slider below to see how Lookify transforms a customer's standard uploaded photo into a photorealistic tailored couture visualization.
              </p>
            </div>

            <div className="max-w-2xl mx-auto">
              <div className="relative aspect-[3/4] max-w-md mx-auto rounded-2xl overflow-hidden shadow-2xl border border-[#3F304D]/20 select-none">
                {/* AFTER: Virtual Try-On Result (Background) */}
                <div className="absolute inset-0 bg-gradient-to-b from-[#2B1E37] to-[#1A1420] flex flex-col items-center justify-center p-6 text-center text-white">
                  <div className="w-20 h-20 rounded-full bg-[#BB96DA]/20 border border-[#BB96DA] flex items-center justify-center mb-4">
                    <Sparkles className="w-10 h-10 text-[#BB96DA]" />
                  </div>
                  <span className="text-xs font-mono uppercase tracking-widest text-[#BB96DA] mb-1">
                    [ AFTER LOOKIFY ]
                  </span>
                  <h4 className="font-serif text-xl sm:text-2xl text-white font-bold">
                    Tailored Couture Visualization
                  </h4>
                  <p className="text-xs text-white/80 max-w-xs mt-2">
                    Pink Flare Lehenga (MRP ₹1,02,500) perfectly rendered to customer height, shoulders &amp; drape.
                  </p>
                  <div className="mt-4 px-3 py-1 bg-emerald-500/20 text-emerald-300 rounded-full text-[11px] font-mono">
                    ✓ 90% Fit Confidence Achieved
                  </div>
                </div>

                {/* BEFORE: Customer Photo (Clipped Overlay) */}
                <div
                  className="absolute inset-0 bg-gradient-to-b from-stone-200 to-stone-300 flex flex-col items-center justify-center p-6 text-center text-stone-800"
                  style={{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }}
                >
                  <div className="w-20 h-20 rounded-full bg-black/10 flex items-center justify-center mb-4">
                    <span className="font-serif text-2xl font-bold">Photo</span>
                  </div>
                  <span className="text-xs font-mono uppercase tracking-widest text-stone-600 mb-1">
                    [ BEFORE ]
                  </span>
                  <h4 className="font-serif text-xl sm:text-2xl text-stone-900 font-bold">
                    Raw Shopper Upload
                  </h4>
                  <p className="text-xs text-stone-700 max-w-xs mt-2">
                    Standard smartphone photo uploaded via mobile browser before neural processing.
                  </p>
                </div>

                {/* Divider Line */}
                <div
                  className="absolute top-0 bottom-0 w-1 bg-white shadow-lg pointer-events-none"
                  style={{ left: `${sliderPos}%` }}
                >
                  <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-white text-[#1A1420] shadow-md flex items-center justify-center">
                    <ArrowLeftRight className="w-4 h-4" />
                  </div>
                </div>

                {/* Range Input for dragging */}
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={sliderPos}
                  onChange={(e) => setSliderPos(Number(e.target.value))}
                  aria-label="Lookify Before and After Comparison Slider"
                  className="absolute inset-0 opacity-0 cursor-ew-resize w-full h-full z-20"
                />
              </div>

              <div className="flex items-center justify-between text-xs text-[#2C2626]/70 mt-3 max-w-md mx-auto">
                <span>← Customer Photo</span>
                <span className="font-semibold text-[#3F304D]">Drag to compare</span>
                <span>Lookify AI Result →</span>
              </div>
            </div>
          </div>

          {/* Official YouTube Demo Video Section */}
          <div className="bg-[#1A1420] text-[#FAF8F5] rounded-3xl p-8 sm:p-12 mb-20">
            <div className="max-w-2xl mb-8">
              <span className="text-[11px] font-semibold tracking-widest text-[#BB96DA] uppercase block">
                Video Walkthrough
              </span>
              <h2 className="font-serif text-3xl text-white mt-1">
                See Lookify in Action
              </h2>
              <p className="text-xs sm:text-sm text-[#FAF8F5]/70 leading-relaxed mt-2">
                Watch how shoppers interact with the virtual fitting room inside a live luxury Shopify storefront.
              </p>
            </div>

            <div className="relative aspect-video max-w-3xl mx-auto rounded-2xl overflow-hidden bg-black/60 border border-white/10 shadow-2xl flex flex-col items-center justify-center text-center p-6">
              <div className="w-16 h-16 rounded-full bg-[#BB96DA] text-[#1A1420] flex items-center justify-center mb-4 shadow-lg">
                <Play className="w-6 h-6 ml-1" />
              </div>
              <h4 className="font-serif text-xl text-white font-bold mb-2">
                Official Lookify Demonstration Video
              </h4>
              <p className="text-xs text-white/70 max-w-md mb-6">
                Direct link to verified video demonstration on YouTube.
              </p>
              <a
                href="https://www.youtube.com/watch?v=vCehbk0SZts"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white text-[#1A1420] text-xs font-semibold tracking-wider uppercase rounded-xl hover:bg-zinc-100 transition-all shadow-md"
              >
                <span>Watch on YouTube</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Technical Architecture & Deployment Details */}
          <div className="bg-white rounded-3xl p-8 sm:p-12 border border-[#3F304D]/10 mb-20">
            <h2 className="font-serif text-3xl text-[#1A1420] mb-8">
              Deployment &amp; Storefront Integration Specifications
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h3 className="text-xs font-bold uppercase tracking-wider text-[#3F304D]">
                  Integration Requirements
                </h3>
                <ul className="space-y-2.5 text-xs text-[#2C2626]/85">
                  {lookify.deploymentRequirements.map((req, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                      <span>{req}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-4">
                <h3 className="text-xs font-bold uppercase tracking-wider text-[#3F304D]">
                  Privacy &amp; Security Standards
                </h3>
                <ul className="space-y-2.5 text-xs text-[#2C2626]/85">
                  <li className="flex items-start gap-2">
                    <ShieldCheck className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span>Zero biometric persistence; customer photos deleted immediately following session render.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ShieldCheck className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span>Complete GDPR and India DPDP compliance.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ShieldCheck className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span>Edge-cached CDN delivery ensuring zero impact on Google Lighthouse scores.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center bg-[#3F304D] text-[#FAF8F5] p-10 rounded-3xl">
            <h2 className="font-serif text-3xl text-white mb-3">
              Deploy Lookify on Your Shopify Store
            </h2>
            <p className="text-xs sm:text-sm text-[#FAF8F5]/80 max-w-md mx-auto mb-6">
              Join 50+ luxury fashion labels lifting add-to-cart rates and delivering memorable virtual try-on experiences.
            </p>
            <button
              onClick={() => onOpenEnquiry("Lookify Storefront Deployment")}
              className="px-8 py-3.5 bg-[#BB96DA] text-[#1A1420] text-xs font-semibold tracking-wider uppercase rounded-xl hover:bg-[#a97ecf] transition-all shadow-md"
            >
              Request Custom Lookify Onboarding
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
