import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2, Briefcase, MapPin, Sparkles, Clock } from "lucide-react";
import { SEOHead } from "@/components/SEOHead";

interface CareersPageProps {
  onOpenEnquiry: (serviceName?: string) => void;
}

export function CareersPage({ onOpenEnquiry }: CareersPageProps) {
  const openRoles = [
    {
      title: "AI Generalist & Product Builder",
      department: "Technology & AI Lab",
      location: "New Delhi HQ / Hybrid",
      type: "Full-Time",
      description: "Hands-on builder who moves from business problems to working digital prototypes using generative AI, modern frontend frameworks, and automated workflows.",
      requirements: ["Proficiency in React/TypeScript, AI APIs & prompt architectures", "Product intuition for luxury and high-AOV commerce", "Autonomous problem-solving and rapid prototyping speed"],
    },
    {
      title: "Senior Shopify Plus Architect",
      department: "Commerce Engineering",
      location: "New Delhi HQ",
      type: "Full-Time",
      description: "Lead liquid engineer responsible for bespoke theme architectures, Shopify Markets internationalization, and Core Web Vitals optimization across 40+ active client flagships.",
      requirements: ["5+ years bespoke Shopify OS 2.0 & Liquid engineering", "Deep expertise in mobile performance & headless APIs", "Experience with ERP/inventory integrations"],
    },
    {
      title: "Luxury Performance Growth Lead",
      department: "Growth & Acquisition",
      location: "New Delhi HQ",
      type: "Full-Time",
      description: "Manage 7-figure monthly paid media budgets across Meta and Google, scaling high-AOV designer labels with strict contribution margin discipline.",
      requirements: ["Track record scaling luxury fashion accounts past ₹1Cr/mo GMV", "Expertise in first-party attribution & CAPI modeling", "Aesthetic reverence for luxury art direction"],
    },
    {
      title: "Luxury Sales Concierge Specialist (18-Hour Desk)",
      department: "Sales Operations",
      location: "New Delhi HQ (Staggered Shifts)",
      type: "Full-Time",
      description: "Interface directly with overseas bridal and couture clients across North America, UK, and UAE time zones, closing custom orders over WhatsApp.",
      requirements: ["Flawless written communication & high empathy", "Familiarity with Indian couture, bridal silhouettes & sizing", "Experience with luxury retail or VIP styling"],
    },
  ];

  return (
    <>
      <SEOHead
        title="Careers at Growify — We're Hiring Builders & Operators"
        description="Join Growify Digital's 100+ member team in New Delhi. Open roles for AI Generalists, Shopify Architects, Performance Growth Leads, and Luxury Concierge Specialists."
        canonicalPath="/careers"
      />

      <div className="pt-32 pb-24 bg-[#FAF8F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumbs */}
          <div className="flex items-center gap-2 text-xs text-[#2C2626]/60 mb-8">
            <Link to="/" className="hover:text-[#3F304D]">Home</Link>
            <span>/</span>
            <span className="text-[#3F304D] font-medium">Careers</span>
          </div>

          {/* Header */}
          <div className="max-w-3xl space-y-4 mb-14">
            <span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-[#3F304D]/70 block">
              Join the Team
            </span>
            <h1 className="font-serif text-4xl sm:text-6xl text-[#1A1420] leading-tight">
              Build the Future of Luxury Commerce
            </h1>
            <p className="text-base text-[#2C2626]/80 leading-relaxed font-sans">
              Growify is built by operators who take extreme ownership. We offer high autonomy, direct commercial impact, and the opportunity to work alongside India's most celebrated couture houses.
            </p>
          </div>

          {/* Open Positions Grid */}
          <div className="space-y-6 mb-20">
            <h2 className="font-serif text-2xl sm:text-3xl text-[#1A1420]">
              Current Open Roles (New Delhi HQ)
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {openRoles.map((role, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-3xl p-8 border border-[#3F304D]/10 shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between"
                >
                  <div className="space-y-4">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <span className="text-xs font-mono font-bold text-[#BB96DA] uppercase">
                        {role.department}
                      </span>
                      <span className="text-[11px] bg-[#FAF8F5] text-[#3F304D] px-2.5 py-0.5 rounded-full border border-[#3F304D]/10 font-semibold">
                        {role.type}
                      </span>
                    </div>

                    <h3 className="font-serif text-2xl text-[#1A1420] font-bold">
                      {role.title}
                    </h3>

                    <p className="text-xs text-[#2C2626]/80 leading-relaxed">
                      {role.description}
                    </p>

                    <div>
                      <div className="text-[11px] font-bold uppercase tracking-wider text-[#3F304D] mb-1.5">
                        Requirements:
                      </div>
                      <ul className="space-y-1 text-xs text-[#2C2626]/75">
                        {role.requirements.map((req, rIdx) => (
                          <li key={rIdx} className="flex items-start gap-1.5">
                            <span className="text-[#3F304D] font-bold">•</span>
                            <span>{req}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="pt-6 border-t border-[#3F304D]/10 mt-6 flex items-center justify-between">
                    <span className="text-xs text-[#2C2626]/60 flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5" />
                      <span>{role.location}</span>
                    </span>
                    <button
                      onClick={() => onOpenEnquiry(`Application for ${role.title}`)}
                      className="px-4 py-2 bg-[#3F304D] text-[#FAF8F5] text-xs font-semibold tracking-wider uppercase rounded-lg hover:bg-[#2B1E37] transition-all"
                    >
                      Apply Now
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Culture CTA */}
          <div className="text-center bg-[#3F304D] text-[#FAF8F5] p-10 rounded-3xl">
            <h2 className="font-serif text-3xl text-white mb-2">
              Don't See Your Role?
            </h2>
            <p className="text-xs sm:text-sm text-[#FAF8F5]/80 max-w-md mx-auto mb-6">
              We are always looking for exceptional generalists, engineers, and luxury marketers. Send your resume and portfolio directly to our founders.
            </p>
            <a
              href="mailto:careers@growify.in"
              className="inline-block px-8 py-3.5 bg-[#BB96DA] text-[#1A1420] text-xs font-semibold tracking-wider uppercase rounded-xl hover:bg-[#a97ecf] transition-all shadow-md"
            >
              Email careers@growify.in
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
