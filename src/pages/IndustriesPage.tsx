import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2, Sparkles, Gem, Shirt, Crown, Clock } from "lucide-react";
import { SEOHead } from "@/components/SEOHead";

interface IndustriesPageProps {
  onOpenEnquiry: (serviceName?: string) => void;
}

export function IndustriesPage({ onOpenEnquiry }: IndustriesPageProps) {
  const industries = [
    {
      id: "couture",
      title: "Haute Couture & Designer Bridal",
      subtitle: "High-AOV lehengas, sarees, and bespoke bridal ensembles with ₹85,000 to ₹4,00,000+ price points.",
      icon: Crown,
      challenges: [
        "Extended 4 to 8 week made-to-order production lead times creating buyer drop-off.",
        "High fit anxiety among international diaspora brides ordering without in-person trial.",
        "Complex multi-regional wedding dates requiring strict guaranteed delivery SLAs.",
      ],
      solutions: [
        "Lookify AI Virtual Try-On embedded on product pages to preview silhouette drape.",
        "18-hour WhatsApp sales concierge providing live measurement and video styling consultations.",
        "RTS (Ready-to-Ship) merchandising protocols stationing dedicated merchandisers at atelier units.",
      ],
      representativeClients: "Tarun Tahiliani, Gaurav Gupta, Mahima Mahajan, Ridhi Mehra, Torani",
      cta: "Explore Couture Growth Stack",
    },
    {
      id: "jewellery",
      title: "Fine Jewellery & Precious Heirlooms",
      subtitle: "High-trust digital storefronts for certified diamonds, polki, gold, and heritage bridal jewellery.",
      icon: Gem,
      challenges: [
        "Overcoming consumer hesitation regarding authenticity and high financial commitment online.",
        "Complex insurance, secure armored transit logistics, and hallmarking requirements.",
        "Capturing detailed diamond luster and specular reflections accurately on mobile displays.",
      ],
      solutions: [
        "Certified authenticity badge integration and secure video consultation booking flows.",
        "Razorpay high-value fraud screening and insured doorstep courier tracking.",
        "Craftify high-definition gemstone color grading and macro video zoom galleries.",
      ],
      representativeClients: "Hazoorilal Legacy, Anmol Jewellers",
      cta: "Explore Fine Jewellery Stack",
    },
    {
      id: "pret",
      title: "Contemporary Pret & Indo-Western",
      subtitle: "Rapid-velocity fashion, festive co-ord sets, and ready-to-wear silhouettes.",
      icon: Shirt,
      challenges: [
        "High seasonal return and size exchange rates eating into gross margins.",
        "Fierce competitive landscape on Meta advertising requiring constant creative refreshes.",
        "Fast-turn inventory management and sudden stockouts during holiday peaks.",
      ],
      solutions: [
        "Size recommendation calculators and instant pre-purchase silhouette visualization.",
        "Advantage+ catalog ads dynamically synced with real-time warehouse inventory.",
        "QuickReply WhatsApp back-in-stock alerts generating instant re-engagement.",
      ],
      representativeClients: "House of Masaba, Drzya by Ridhiiee Suuri, Aisha Rao",
      cta: "Explore Pret Growth Stack",
    },
    {
      id: "lifestyle",
      title: "Luxury Lifestyle, Decor & Accessories",
      subtitle: "Artisanal home decor, luxury footwear, fine leather goods, and premium gifting.",
      icon: Sparkles,
      challenges: [
        "Volumetric shipping weights and fragile handling during international transit.",
        "Seasonality spikes during Diwali, festive gifting, and wedding favors.",
        "Building repeat purchasing loops for non-apparel lifestyle artifacts.",
      ],
      solutions: [
        "Curated corporate and bridal gifting portals with custom engraving options.",
        "Shopify Markets landed-cost duty calculation for fragile international parcels.",
        "Automated seasonal replenishment and anniversary reminder flows via email and WhatsApp.",
      ],
      representativeClients: "Curated Indian Design Labels & Contemporary Ateliers",
      cta: "Explore Lifestyle Growth Stack",
    },
  ];

  return (
    <>
      <SEOHead
        title="Industry Expertise — Fashion, Luxury Couture & Fine Jewellery"
        description="Growify's specialized commerce and growth systems for Indian couture, bridal fashion, fine jewellery, and luxury lifestyle brands."
        canonicalPath="/industries"
      />

      <div className="pt-32 pb-24 bg-[#FAF8F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="max-w-3xl space-y-4 mb-16">
            <span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-[#3F304D]/70 block">
              Vertical Specialization
            </span>
            <h1 className="font-serif text-4xl sm:text-6xl text-[#1A1420] leading-tight">
              Deep Domain Expertise in Luxury &amp; High-AOV Commerce
            </h1>
            <p className="text-base text-[#2C2626]/80 leading-relaxed font-sans">
              We do not build generic D2C stores. Every workflow, ad creative, and code optimization is tailored to the nuances of haute couture, precious metals, bridal timelines, and luxury consumer psychology.
            </p>
          </div>

          {/* Industry Cards */}
          <div className="space-y-12 mb-20">
            {industries.map((ind, i) => {
              const Icon = ind.icon;
              return (
                <div
                  key={ind.id}
                  className="bg-white rounded-3xl p-8 sm:p-12 border border-[#3F304D]/10 shadow-xs hover:shadow-md transition-shadow"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                    <div className="lg:col-span-5 space-y-4">
                      <div className="w-12 h-12 rounded-2xl bg-[#3F304D]/10 text-[#3F304D] flex items-center justify-center">
                        <Icon className="w-6 h-6" />
                      </div>
                      <h2 className="font-serif text-3xl text-[#1A1420]">
                        {ind.title}
                      </h2>
                      <p className="text-sm font-medium text-[#3F304D] leading-relaxed">
                        {ind.subtitle}
                      </p>
                      <div className="pt-2 text-xs text-[#2C2626]/70">
                        <strong className="text-[#1A1420]">Representative Work:</strong> {ind.representativeClients}
                      </div>
                      <div className="pt-4">
                        <button
                          onClick={() => onOpenEnquiry(ind.title)}
                          className="px-6 py-3 bg-[#3F304D] text-[#FAF8F5] text-xs font-semibold tracking-wider uppercase rounded-xl hover:bg-[#2B1E37] transition-all"
                        >
                          {ind.cta}
                        </button>
                      </div>
                    </div>

                    <div className="lg:col-span-7 bg-[#FAF8F5] p-6 sm:p-8 rounded-2xl border border-[#3F304D]/10 space-y-6">
                      <div>
                        <h3 className="text-xs font-bold uppercase tracking-wider text-rose-800 mb-2">
                          Industry Specific Commercial Friction
                        </h3>
                        <ul className="space-y-2 text-xs text-[#2C2626]/80">
                          {ind.challenges.map((c, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                              <span className="text-rose-600 font-bold">•</span>
                              <span>{c}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="pt-4 border-t border-[#3F304D]/10">
                        <h3 className="text-xs font-bold uppercase tracking-wider text-emerald-800 mb-2">
                          Growify Engineered Solutions
                        </h3>
                        <ul className="space-y-2 text-xs text-[#2C2626]/80">
                          {ind.solutions.map((s, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                              <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                              <span>{s}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* CTA */}
          <div className="text-center bg-[#3F304D] text-[#FAF8F5] p-10 rounded-3xl">
            <h2 className="font-serif text-3xl text-white mb-3">
              Consult on Your Brand's Category Challenges
            </h2>
            <p className="text-xs sm:text-sm text-[#FAF8F5]/80 max-w-md mx-auto mb-6">
              Our industry strategists have solved commercial scaling bottlenecks for 476+ luxury labels.
            </p>
            <button
              onClick={() => onOpenEnquiry("Industry Strategy Consultation")}
              className="px-8 py-3.5 bg-[#BB96DA] text-[#1A1420] text-xs font-semibold tracking-wider uppercase rounded-xl hover:bg-[#a97ecf] transition-all shadow-md"
            >
              Book Industry Strategy Session
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
