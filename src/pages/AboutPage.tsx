import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2, ShieldCheck, Heart, Target, Users, MapPin, Sparkles } from "lucide-react";
import { COMPANY_METRICS } from "@/data/clients";
import { SEOHead } from "@/components/SEOHead";

interface AboutPageProps {
  onOpenEnquiry: (serviceName?: string) => void;
}

export function AboutPage({ onOpenEnquiry }: AboutPageProps) {
  return (
    <>
      <SEOHead
        title="About Growify Digital — Founders, Philosophy & Approach"
        description="Founded in 2019 by Rishab Mehra & Disha Bhatnagar, Growify Digital is a 100+ member e-commerce growth company scaling luxury, fashion, and lifestyle brands."
        canonicalPath="/about"
      />

      <div className="pt-32 pb-24 bg-[#FAF8F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-xs text-[#2C2626]/60 mb-8">
            <Link to="/" className="hover:text-[#3F304D]">Home</Link>
            <span>/</span>
            <span className="text-[#3F304D] font-medium">About</span>
          </div>

          {/* Header */}
          <div className="max-w-4xl space-y-4 mb-16">
            <span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-[#3F304D]/70 block">
              Company &amp; Leadership
            </span>
            <h1 className="font-serif text-4xl sm:text-6xl text-[#1A1420] leading-tight">
              Built by Operators Who Solve Commercial Problems End-to-End
            </h1>
            <p className="text-base sm:text-lg text-[#2C2626]/80 leading-relaxed font-sans max-w-3xl">
              Growify Digital LLP is a New Delhi-based, technology-enabled e-commerce growth company founded in 2019. We help fashion, couture, jewellery, and lifestyle brands build, operate, and scale their digital businesses.
            </p>
          </div>

          {/* Company Philosophy Banner */}
          <div className="bg-[#3F304D] text-[#FAF8F5] rounded-3xl p-8 sm:p-12 mb-16 relative overflow-hidden">
            <div className="max-w-2xl space-y-4 relative z-10">
              <span className="text-xs font-mono font-bold uppercase text-[#BB96DA]">
                Our Guiding Philosophy
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-white font-normal leading-snug">
                “We grow when you grow.”
              </h2>
              <p className="text-xs sm:text-sm text-[#FAF8F5]/80 leading-relaxed">
                We did not start as a conventional pitch-and-switch agency. We started with intent. What began as a small, curious team solving complex commercial hurdles for designer friends has evolved into a 100+ member multidisciplinary growth studio.
              </p>
            </div>
          </div>

          {/* Founders Spotlight */}
          <div className="bg-white rounded-3xl p-8 sm:p-12 border border-[#3F304D]/10 shadow-xs mb-16">
            <div className="max-w-2xl mb-8">
              <span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-[#3F304D]/70 block">
                Founding Leadership
              </span>
              <h2 className="font-serif text-3xl text-[#1A1420] mt-1">
                Founded by Rishab Mehra &amp; Disha Bhatnagar
              </h2>
              <p className="text-xs sm:text-sm text-[#2C2626]/75 mt-2 leading-relaxed">
                As recorded in Growth Deck Slide 05, Growify is led by operators who design performance-led growth architectures, deeply understanding both the creative reverence of fashion and the numerical discipline of commerce.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-6 rounded-2xl bg-[#FAF8F5] border border-[#3F304D]/10 space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="font-serif text-xl font-bold text-[#1A1420]">Rishab Mehra</h3>
                  <span className="text-xs font-mono text-[#3F304D]/70">Co-Founder</span>
                </div>
                <p className="text-xs text-[#2C2626]/80 leading-relaxed">
                  Oversees commerce architecture, performance marketing infrastructure, and commercial expansion. Focuses on unit economics, international conversion optimization, and technological systems that allow couture labels to scale without compromising operational health.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-[#FAF8F5] border border-[#3F304D]/10 space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="font-serif text-xl font-bold text-[#1A1420]">Disha Bhatnagar</h3>
                  <span className="text-xs font-mono text-[#3F304D]/70">Co-Founder</span>
                </div>
                <p className="text-xs text-[#2C2626]/80 leading-relaxed">
                  Leads brand storytelling, client success strategy, and luxury creative direction. Ensures every digital touchpoint—from mobile lookbooks to private bridal WhatsApp concierge scripts—maintains the highest editorial standards of prestige fashion.
                </p>
              </div>
            </div>
          </div>

          {/* Verified Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20 text-center">
            <div className="p-6 bg-white rounded-2xl border border-[#3F304D]/10">
              <div className="font-serif text-4xl font-bold text-[#3F304D]">{COMPANY_METRICS.brandsScaled}</div>
              <div className="text-xs uppercase tracking-wider text-[#2C2626]/70 mt-1 font-semibold">Brands Scaled</div>
            </div>
            <div className="p-6 bg-white rounded-2xl border border-[#3F304D]/10">
              <div className="font-serif text-4xl font-bold text-[#3F304D]">{COMPANY_METRICS.averageYoYGrowth}</div>
              <div className="text-xs uppercase tracking-wider text-[#2C2626]/70 mt-1 font-semibold">Avg Sales Growth (FY'25)</div>
            </div>
            <div className="p-6 bg-white rounded-2xl border border-[#3F304D]/10">
              <div className="font-serif text-4xl font-bold text-[#3F304D]">{COMPANY_METRICS.teamMembers}</div>
              <div className="text-xs uppercase tracking-wider text-[#2C2626]/70 mt-1 font-semibold">Team Members</div>
            </div>
            <div className="p-6 bg-white rounded-2xl border border-[#3F304D]/10">
              <div className="font-serif text-4xl font-bold text-[#3F304D]">{COMPANY_METRICS.supportCoverage}</div>
              <div className="text-xs uppercase tracking-wider text-[#2C2626]/70 mt-1 font-semibold">Daily Sales Coverage</div>
            </div>
          </div>

          {/* Values Grid */}
          <div className="bg-white rounded-3xl p-8 sm:p-12 border border-[#3F304D]/10 mb-16">
            <h2 className="font-serif text-3xl text-[#1A1420] mb-8 text-center">
              Our Core Operating Tenets
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-5 bg-[#FAF8F5] rounded-2xl border border-[#3F304D]/10 space-y-2">
                <span className="font-mono text-xs font-bold text-[#BB96DA]">01</span>
                <h3 className="font-serif text-lg font-bold text-[#1A1420]">No Vanity Marketing</h3>
                <p className="text-xs text-[#2C2626]/75 leading-relaxed">
                  We don't celebrate meaningless impressions or video views. We measure success by gross settled revenue, contribution margin, and long-term customer equity.
                </p>
              </div>

              <div className="p-5 bg-[#FAF8F5] rounded-2xl border border-[#3F304D]/10 space-y-2">
                <span className="font-mono text-xs font-bold text-[#BB96DA]">02</span>
                <h3 className="font-serif text-lg font-bold text-[#1A1420]">True Business Partnership</h3>
                <p className="text-xs text-[#2C2626]/75 leading-relaxed">
                  We don't act like detached vendors sending weekly tickets. We place merchandisers at factories and run 18-hour sales desks across global time zones.
                </p>
              </div>

              <div className="p-5 bg-[#FAF8F5] rounded-2xl border border-[#3F304D]/10 space-y-2">
                <span className="font-mono text-xs font-bold text-[#BB96DA]">03</span>
                <h3 className="font-serif text-lg font-bold text-[#1A1420]">Technology Builders</h3>
                <p className="text-xs text-[#2C2626]/75 leading-relaxed">
                  Where existing tools fall short, we build proprietary software—from Lookify's virtual try-on to automated merchandising workflows.
                </p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center bg-[#3F304D] text-[#FAF8F5] p-10 rounded-3xl">
            <h2 className="font-serif text-3xl text-white mb-2">
              Work with Growify Digital
            </h2>
            <p className="text-xs sm:text-sm text-[#FAF8F5]/80 max-w-md mx-auto mb-6">
              Connect with our founders and senior strategists to discuss your brand's growth goals.
            </p>
            <button
              onClick={() => onOpenEnquiry("Founders Consultation")}
              className="px-8 py-3.5 bg-[#BB96DA] text-[#1A1420] text-xs font-semibold tracking-wider uppercase rounded-xl hover:bg-[#a97ecf] transition-all shadow-md"
            >
              Connect with Leadership Team
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
