import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2, ShoppingBag, ShieldCheck, Zap, Globe, Sparkles } from "lucide-react";
import { SERVICES } from "@/data/services";
import { SEOHead } from "@/components/SEOHead";

interface CommerceServicePageProps {
  onOpenEnquiry: (serviceName?: string) => void;
}

export function CommerceServicePage({ onOpenEnquiry }: CommerceServicePageProps) {
  const service = SERVICES.find((s) => s.id === "commerce")!;

  return (
    <>
      <SEOHead
        title="Commerce & Shopify Development for Luxury Brands"
        description="Bespoke Shopify Plus development, custom Liquid engineering, international multi-currency pricing, and Core Web Vitals optimization for designer fashion and fine jewellery."
        canonicalPath="/services/commerce"
      />

      <div className="pt-32 pb-24 bg-[#FAF8F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-xs text-[#2C2626]/60 mb-8">
            <Link to="/" className="hover:text-[#3F304D]">Home</Link>
            <span>/</span>
            <Link to="/services" className="hover:text-[#3F304D]">Services</Link>
            <span>/</span>
            <span className="text-[#3F304D] font-medium">Commerce &amp; Shopify</span>
          </div>

          {/* Hero */}
          <div className="max-w-4xl space-y-6 mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#3F304D]/10 text-[#3F304D] text-xs font-semibold tracking-wider uppercase">
              <ShoppingBag className="w-3.5 h-3.5" />
              <span>Signature Capability • 500+ Storefronts</span>
            </div>

            <h1 className="font-serif text-4xl sm:text-6xl text-[#1A1420] leading-tight">
              Bespoke Shopify Plus Architecture for Haute Couture &amp; Luxury Commerce
            </h1>

            <p className="text-lg text-[#2C2626]/80 leading-relaxed font-sans max-w-3xl">
              We engineer digital flagships that honor the craftsmanship of haute couture. Fast, tactile, accessible, and optimized for global multi-currency checkouts.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={() => onOpenEnquiry("Shopify Flagship Architecture")}
                className="px-7 py-3.5 bg-[#3F304D] text-[#FAF8F5] text-xs font-semibold tracking-wider uppercase rounded-xl hover:bg-[#2B1E37] transition-all shadow-md"
              >
                Discuss Your Storefront Build
              </button>

              <Link
                to="/case-studies/mahima-mahajan"
                className="px-6 py-3.5 bg-white border border-[#3F304D]/15 text-[#1A1420] text-xs font-semibold tracking-wider uppercase rounded-xl hover:bg-zinc-50 transition-all"
              >
                See Mahima Mahajan Architecture →
              </Link>
            </div>
          </div>

          {/* Three Tier Engineering Model */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
            <div className="bg-white p-6 rounded-2xl border border-[#3F304D]/10 shadow-xs">
              <span className="text-xs font-mono font-bold text-[#BB96DA]">01 • Bespoke Tier</span>
              <h3 className="font-serif text-xl text-[#1A1420] mt-1 mb-2">Fully Custom Architecture</h3>
              <p className="text-xs text-[#2C2626]/75 leading-relaxed">
                Hand-coded Liquid from scratch. Ground-up responsive styling, bespoke animations, and unique brand storytelling layouts for heritage couture houses.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-[#3F304D]/10 shadow-xs">
              <span className="text-xs font-mono font-bold text-[#BB96DA]">02 • Hybrid Tier</span>
              <h3 className="font-serif text-xl text-[#1A1420] mt-1 mb-2">Semi-Custom Flagship</h3>
              <p className="text-xs text-[#2C2626]/75 leading-relaxed">
                Tested architectural foundations extended with custom bespoke UI modules, custom checkout logic, and international multi-currency pricing.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-[#3F304D]/10 shadow-xs">
              <span className="text-xs font-mono font-bold text-[#BB96DA]">03 • Speed Tier</span>
              <h3 className="font-serif text-xl text-[#1A1420] mt-1 mb-2">Pre-Engineered Luxury</h3>
              <p className="text-xs text-[#2C2626]/75 leading-relaxed">
                Curated high-converting layout foundations customized with brand typography and palettes, designed for rapid 30-day go-to-market speed.
              </p>
            </div>
          </div>

          {/* Technical Scope Matrix */}
          <div className="bg-white rounded-3xl p-8 sm:p-12 border border-[#3F304D]/10 mb-20">
            <h2 className="font-serif text-3xl text-[#1A1420] mb-8">
              Technical Specifications &amp; Deliverables
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h3 className="text-xs font-bold uppercase tracking-wider text-[#3F304D]">
                  Storefront &amp; UX Capabilities
                </h3>
                <ul className="space-y-2.5 text-xs text-[#2C2626]/85">
                  {service.deliverables.slice(0, 4).map((d, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                      <span>{d}</span>
                    </li>
                  ))}
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span>Lookify AI Virtual Try-On SDK integration for silhouette preview</span>
                  </li>
                </ul>
              </div>

              <div className="space-y-4">
                <h3 className="text-xs font-bold uppercase tracking-wider text-[#3F304D]">
                  Cross-Border &amp; Performance Standards
                </h3>
                <ul className="space-y-2.5 text-xs text-[#2C2626]/85">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span>Shopify Markets multi-currency with automatic IP geolocation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span>Sub-2.5s global Largest Contentful Paint (LCP) performance benchmark</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span>Strict compliance with WCAG 2.1 AA accessibility guidelines</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span>Automated zero-downtime deployment pipelines with continuous backups</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* FAQs */}
          <div className="max-w-3xl mx-auto space-y-6">
            <h2 className="font-serif text-3xl text-[#1A1420] text-center mb-8">
              Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              {service.faqs.map((faq, i) => (
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

          {/* Final CTA */}
          <div className="mt-20 text-center bg-[#3F304D] text-[#FAF8F5] p-10 rounded-3xl">
            <h2 className="font-serif text-3xl text-white mb-3">
              Upgrade Your Brand's Digital Flagship
            </h2>
            <p className="text-xs sm:text-sm text-[#FAF8F5]/80 max-w-md mx-auto mb-6">
              Share your current Shopify URL. We will provide a comprehensive technical and UX audit highlighting conversion leaks.
            </p>
            <button
              onClick={() => onOpenEnquiry("Shopify Storefront Audit")}
              className="px-8 py-3.5 bg-[#BB96DA] text-[#1A1420] text-xs font-semibold tracking-wider uppercase rounded-xl hover:bg-[#a97ecf] transition-all shadow-md"
            >
              Request Free Storefront Audit
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
