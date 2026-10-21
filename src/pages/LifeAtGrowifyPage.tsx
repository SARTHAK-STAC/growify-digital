import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, MapPin, Users, Compass, ChevronRight, CheckCircle2, AlertCircle, Camera, Sparkles } from "lucide-react";
import { OFFICE_ZONES } from "@/data/office";
import { SEOHead } from "@/components/SEOHead";

interface LifeAtGrowifyPageProps {
  onOpenEnquiry: (serviceName?: string) => void;
}

export function LifeAtGrowifyPage({ onOpenEnquiry }: LifeAtGrowifyPageProps) {
  const [activeZoneId, setActiveZoneId] = useState(OFFICE_ZONES[0].id);
  const activeZone = OFFICE_ZONES.find((z) => z.id === activeZoneId)!;
  const [activeHotspotIndex, setActiveHotspotIndex] = useState(0);

  return (
    <>
      <SEOHead
        title="Life at Growify — Interactive Delhi HQ Office Tour"
        description="Experience Growify's 100+ member studio in New Delhi: explore the Growth Floor, Commerce Engineering Lab, Creative Studio, and 18-Hour Sales Concierge Desk."
        canonicalPath="/life-at-growify"
      />

      <div className="pt-32 pb-24 bg-[#FAF8F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumbs */}
          <div className="flex items-center gap-2 text-xs text-[#2C2626]/60 mb-8">
            <Link to="/" className="hover:text-[#3F304D]">Home</Link>
            <span>/</span>
            <span className="text-[#3F304D] font-medium">Life at Growify</span>
          </div>

          {/* Header */}
          <div className="max-w-4xl space-y-4 mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#BB96DA]/20 text-[#3F304D] text-xs font-semibold tracking-wider uppercase border border-[#BB96DA]/30">
              <Sparkles className="w-3.5 h-3.5 text-[#3F304D]" />
              <span>Interactive Office Experience • Bonus Challenge</span>
            </div>

            <h1 className="font-serif text-4xl sm:text-6xl text-[#1A1420] leading-tight">
              Inside Our Growth Studio: New Delhi HQ
            </h1>

            <p className="text-base text-[#2C2626]/80 leading-relaxed font-sans max-w-3xl">
              Located in Chhatarpur Enclave, New Delhi, Growify's studio brings together 100+ growth marketers, Shopify engineers, luxury fashion designers, and 18-hour concierge operators. Navigate our interactive floor journey below.
            </p>
          </div>

          {/* Prototype Disclosure Banner */}
          <div className="mb-12 p-5 bg-zinc-100 rounded-2xl border border-zinc-300 text-xs text-zinc-800 flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-zinc-600 flex-shrink-0 mt-0.5" />
            <div>
              <strong>Interactive Prototype Note:</strong> In compliance with the assignment rules, this experience is structured as an interactive spatial journey showcasing the real departments and workflows of Growify Digital LLP. Video transition layers are configured to accept final 4K footage from the internal production team upon asset supply.
            </div>
          </div>

          {/* Department Navigation Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar">
            {OFFICE_ZONES.map((zone) => (
              <button
                key={zone.id}
                onClick={() => {
                  setActiveZoneId(zone.id);
                  setActiveHotspotIndex(0);
                }}
                className={`px-4 py-2.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
                  activeZoneId === zone.id
                    ? "bg-[#3F304D] text-[#FAF8F5] shadow-sm"
                    : "bg-white text-[#2C2626]/80 hover:bg-zinc-100 border border-[#3F304D]/10"
                }`}
              >
                {zone.name.split(" ")[0]} ({zone.floor.split("—")[1]?.trim() || "Zone"})
              </button>
            ))}
          </div>

          {/* Interactive Spatial Explorer Container */}
          <div className="bg-white rounded-3xl p-6 sm:p-10 border border-[#3F304D]/15 shadow-sm mb-16">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Left Column: Interactive Floor Map / Hotspot Stage */}
              <div className="lg:col-span-7 space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Compass className="w-4 h-4 text-[#BB96DA]" />
                    <span className="text-xs font-mono font-bold uppercase text-[#3F304D]">
                      {activeZone.floor}
                    </span>
                  </div>
                  <span className="text-xs text-[#2C2626]/60 font-mono">
                    {activeZone.teamSize}
                  </span>
                </div>

                {/* Simulated 3D / Spatial Viewport */}
                <div className="relative aspect-[16/10] rounded-2xl overflow-hidden bg-gradient-to-br from-[#2B1E37] via-[#1A1420] to-zinc-900 border border-[#3F304D]/20 shadow-inner flex items-center justify-center p-6 text-white">
                  {/* Subtle Grid overlay representing floorplan */}
                  <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

                  {/* Interactive Hotspot Pins */}
                  {activeZone.hotspots.map((hs, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveHotspotIndex(idx)}
                      style={{
                        top: `${hs.coordinate.y}%`,
                        left: `${hs.coordinate.x}%`,
                      }}
                      className={`absolute -translate-x-1/2 -translate-y-1/2 group transition-transform ${
                        activeHotspotIndex === idx ? "scale-125 z-20" : "scale-100 z-10 hover:scale-110"
                      }`}
                      aria-label={`Hotspot: ${hs.title}`}
                    >
                      <span className="relative flex h-6 w-6">
                        <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${
                          activeHotspotIndex === idx ? "bg-emerald-400" : "bg-[#BB96DA]"
                        }`} />
                        <span className={`relative inline-flex rounded-full h-6 w-6 items-center justify-center text-[10px] font-bold text-white shadow-lg ${
                          activeHotspotIndex === idx ? "bg-emerald-600 ring-2 ring-white" : "bg-[#3F304D]"
                        }`}>
                          {idx + 1}
                        </span>
                      </span>
                    </button>
                  ))}

                  {/* Zone Backdrop Title & Atmosphere */}
                  <div className="relative z-0 text-center max-w-sm space-y-2 pointer-events-none">
                    <span className="text-[10px] font-mono tracking-widest text-[#BB96DA] uppercase">
                      [ Spatial Viewport • Interactive Hotspots 1 &amp; 2 ]
                    </span>
                    <h3 className="font-serif text-2xl text-white font-bold">
                      {activeZone.name}
                    </h3>
                    <p className="text-xs text-white/70">
                      {activeZone.focus}
                    </p>
                  </div>
                </div>

                {/* Hotspot details card */}
                {activeZone.hotspots[activeHotspotIndex] && (
                  <div className="p-4 bg-[#FAF8F5] rounded-xl border border-[#3F304D]/10 animate-fade-in">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-[#3F304D]">
                        Hotspot 0{activeHotspotIndex + 1}: {activeZone.hotspots[activeHotspotIndex].title}
                      </span>
                      <span className="text-[10px] text-[#2C2626]/50 font-mono">Click pins to inspect</span>
                    </div>
                    <p className="text-xs text-[#2C2626]/80 leading-relaxed">
                      {activeZone.hotspots[activeHotspotIndex].description}
                    </p>
                  </div>
                )}
              </div>

              {/* Right Column: Zone Deep Dive Details */}
              <div className="lg:col-span-5 space-y-5">
                <div>
                  <h3 className="font-serif text-2xl text-[#1A1420] font-bold mb-2">
                    {activeZone.name}
                  </h3>
                  <p className="text-xs text-[#2C2626]/80 leading-relaxed">
                    {activeZone.description}
                  </p>
                </div>

                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#3F304D] mb-2.5">
                    Daily Departmental Activities
                  </h4>
                  <ul className="space-y-2 text-xs text-[#2C2626]/80">
                    {activeZone.keyActivities.map((act, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                        <span>{act}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-4 bg-[#FAF8F5] rounded-xl border border-[#3F304D]/10 space-y-1">
                  <div className="text-[10px] font-bold uppercase tracking-wider text-[#3F304D]">
                    Culture Pillar
                  </div>
                  <div className="text-xs font-serif italic text-[#1A1420]">
                    "{activeZone.culturePillar}"
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-zinc-50 border border-zinc-200 text-[11px] text-zinc-600 space-y-1">
                  <div className="font-bold uppercase tracking-wider text-zinc-700 flex items-center gap-1.5">
                    <Camera className="w-3.5 h-3.5" />
                    <span>Asset Checklist for Video Version</span>
                  </div>
                  <p className="leading-snug">{activeZone.prototypeAssetRequired}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Physical Office Address & Visiting Details */}
          <div className="bg-[#3F304D] text-[#FAF8F5] rounded-3xl p-8 sm:p-12 mb-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="space-y-3">
                <span className="text-xs font-mono font-bold uppercase text-[#BB96DA]">
                  Visit Growify In Person
                </span>
                <h2 className="font-serif text-3xl text-white">
                  Our Delhi Growth Headquarters
                </h2>
                <p className="text-xs sm:text-sm text-[#FAF8F5]/80 leading-relaxed">
                  Located in South Delhi's design corridor, minutes from the Mehrauli and Chattarpur luxury atelier districts.
                </p>
                <div className="pt-2 text-xs text-[#FAF8F5]/90 space-y-1">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-[#BB96DA]" />
                    <span>3rd Floor, D-112, 60 Feet Rd, Pocket D, Chattarpur Enclave, New Delhi - 110074</span>
                  </div>
                  <div className="pl-6 text-[#FAF8F5]/60 text-[11px]">
                    Monday – Friday: 9:30 AM – 7:30 PM IST (18+ Hour Sales Coverage)
                  </div>
                </div>
              </div>

              <div className="text-center md:text-right">
                <button
                  onClick={() => onOpenEnquiry("Schedule Studio Visit")}
                  className="px-8 py-3.5 bg-[#FAF8F5] text-[#3F304D] text-xs font-semibold tracking-wider uppercase rounded-xl hover:bg-white transition-all shadow-md"
                >
                  Schedule Studio Visit / Meeting
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
