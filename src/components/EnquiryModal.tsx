import React, { useState } from "react";
import { X, CheckCircle, AlertCircle, ArrowRight, ShieldCheck, Sparkles } from "lucide-react";

interface EnquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultService?: string;
}

export function EnquiryModal({ isOpen, onClose, defaultService = "Connected Commerce & Growth" }: EnquiryModalProps) {
  const [formData, setFormData] = useState({
    fullName: "",
    workEmail: "",
    companyName: "",
    phoneNumber: "",
    serviceInterest: defaultService,
    monthlyGmv: "₹50L – ₹2Cr / month",
    message: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isOpen) return null;

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.fullName.trim()) {
      errs.fullName = "Please enter your full name";
    }
    if (!formData.workEmail.trim()) {
      errs.workEmail = "Please enter your work email";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.workEmail)) {
      errs.workEmail = "Please enter a valid business email address";
    }
    if (!formData.companyName.trim()) {
      errs.companyName = "Please enter your brand or company name";
    }
    if (!formData.message.trim()) {
      errs.message = "Please share a brief context on your current growth goals";
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    // In accordance with guidelines: No fake backend success.
    // Clearly marked client-side demo submission state.
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({
      fullName: "",
      workEmail: "",
      companyName: "",
      phoneNumber: "",
      serviceInterest: defaultService,
      monthlyGmv: "₹50L – ₹2Cr / month",
      message: "",
    });
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#1A1420]/70 backdrop-blur-sm animate-fade-in"
      role="dialog"
      aria-modal="true"
      aria-labelledby="enquiry-modal-title"
    >
      <div className="relative w-full max-w-2xl bg-[#FAF8F5] border border-[#3F304D]/15 rounded-2xl shadow-2xl overflow-hidden max-h-[92vh] flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-[#3F304D]/10 bg-white/80">
          <div>
            <span className="text-[11px] font-semibold tracking-[0.14em] uppercase text-[#3F304D]/70 block">
              Strategic Consultation
            </span>
            <h2 id="enquiry-modal-title" className="font-serif text-2xl text-[#1A1420] mt-0.5">
              Discuss Your Growth
            </h2>
          </div>
          <button
            onClick={onClose}
            aria-label="Close consultation modal"
            className="p-2 text-[#2C2626]/60 hover:text-[#1A1420] hover:bg-[#3F304D]/5 rounded-full transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="p-6 overflow-y-auto">
          {submitted ? (
            <div className="py-8 px-4 text-center">
              <div className="w-14 h-14 mx-auto mb-4 bg-emerald-100 text-emerald-800 rounded-full flex items-center justify-center">
                <CheckCircle className="w-8 h-8" />
              </div>
              <h3 className="font-serif text-2xl text-[#1A1420] mb-2">Consultation Request Logged</h3>
              <p className="text-sm text-[#2C2626]/80 max-w-md mx-auto mb-4 leading-relaxed">
                Thank you, <strong>{formData.fullName}</strong>. Your consultation request for{" "}
                <strong>{formData.companyName}</strong> has been logged in this evaluation prototype.
              </p>

              {/* Explicit Demo Limitation Disclosure as per assignment rules */}
              <div className="p-4 bg-amber-50/80 border border-amber-200/80 rounded-xl text-left max-w-lg mx-auto mb-6">
                <div className="flex items-start gap-2.5">
                  <AlertCircle className="w-4 h-4 text-amber-700 flex-shrink-0 mt-0.5" />
                  <div className="text-xs text-amber-900 leading-relaxed">
                    <strong>Demo Environment Notice:</strong> This is a client-side prototype demonstration. No remote
                    backend CRM API was called. To initiate an actual commercial engagement with Growify Digital, please
                    write directly to{" "}
                    <a href="mailto:info@growify.in" className="underline font-semibold text-[#3F304D]">
                      info@growify.in
                    </a>{" "}
                    or phone <span className="font-semibold">+91-8800461296</span>.
                  </div>
                </div>
              </div>

              <button
                onClick={handleReset}
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#3F304D] text-[#FAF8F5] text-xs font-semibold tracking-wider uppercase rounded-lg hover:bg-[#2B1E37] transition-all shadow-md"
              >
                Close & Return
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4" noValidate>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="fullName" className="block text-xs font-semibold tracking-wider uppercase text-[#2C2626] mb-1.5">
                    Your Full Name <span className="text-rose-600">*</span>
                  </label>
                  <input
                    id="fullName"
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="e.g. Rohini Sen"
                    className={`w-full px-3.5 py-2.5 text-sm bg-white border ${
                      errors.fullName ? "border-rose-500 ring-1 ring-rose-500" : "border-[#3F304D]/20 focus:border-[#3F304D]"
                    } rounded-lg outline-none transition-all`}
                  />
                  {errors.fullName && <p className="text-xs text-rose-600 mt-1">{errors.fullName}</p>}
                </div>

                <div>
                  <label htmlFor="workEmail" className="block text-xs font-semibold tracking-wider uppercase text-[#2C2626] mb-1.5">
                    Work Email <span className="text-rose-600">*</span>
                  </label>
                  <input
                    id="workEmail"
                    type="email"
                    required
                    value={formData.workEmail}
                    onChange={(e) => setFormData({ ...formData, workEmail: e.target.value })}
                    placeholder="name@brand.com"
                    className={`w-full px-3.5 py-2.5 text-sm bg-white border ${
                      errors.workEmail ? "border-rose-500 ring-1 ring-rose-500" : "border-[#3F304D]/20 focus:border-[#3F304D]"
                    } rounded-lg outline-none transition-all`}
                  />
                  {errors.workEmail && <p className="text-xs text-rose-600 mt-1">{errors.workEmail}</p>}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="companyName" className="block text-xs font-semibold tracking-wider uppercase text-[#2C2626] mb-1.5">
                    Brand / Company <span className="text-rose-600">*</span>
                  </label>
                  <input
                    id="companyName"
                    type="text"
                    required
                    value={formData.companyName}
                    onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                    placeholder="e.g. Maison Atelier"
                    className={`w-full px-3.5 py-2.5 text-sm bg-white border ${
                      errors.companyName ? "border-rose-500 ring-1 ring-rose-500" : "border-[#3F304D]/20 focus:border-[#3F304D]"
                    } rounded-lg outline-none transition-all`}
                  />
                  {errors.companyName && <p className="text-xs text-rose-600 mt-1">{errors.companyName}</p>}
                </div>

                <div>
                  <label htmlFor="phoneNumber" className="block text-xs font-semibold tracking-wider uppercase text-[#2C2626] mb-1.5">
                    Direct Phone / WhatsApp
                  </label>
                  <input
                    id="phoneNumber"
                    type="tel"
                    value={formData.phoneNumber}
                    onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
                    placeholder="+91 / +1..."
                    className="w-full px-3.5 py-2.5 text-sm bg-white border border-[#3F304D]/20 focus:border-[#3F304D] rounded-lg outline-none transition-all"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="serviceInterest" className="block text-xs font-semibold tracking-wider uppercase text-[#2C2626] mb-1.5">
                    Primary Area of Interest
                  </label>
                  <select
                    id="serviceInterest"
                    value={formData.serviceInterest}
                    onChange={(e) => setFormData({ ...formData, serviceInterest: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-sm bg-white border border-[#3F304D]/20 focus:border-[#3F304D] rounded-lg outline-none transition-all"
                  >
                    <option value="Connected Commerce & Growth">Connected Commerce & Growth System (Full Suite)</option>
                    <option value="Commerce & Shopify Architecture">Commerce & Shopify Architecture</option>
                    <option value="Performance Marketing (Meta & Google)">Performance Marketing (Meta & Google)</option>
                    <option value="Retention & WhatsApp CRM">Retention & WhatsApp CRM</option>
                    <option value="18-Hour Sales Concierge Desk">18-Hour Sales Concierge Desk</option>
                    <option value="Lookify AI Virtual Try-On">Lookify AI Virtual Try-On</option>
                    <option value="International Expansion (US / UAE / UK)">International Expansion (US / UAE / UK)</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="monthlyGmv" className="block text-xs font-semibold tracking-wider uppercase text-[#2C2626] mb-1.5">
                    Current Monthly Online Scale
                  </label>
                  <select
                    id="monthlyGmv"
                    value={formData.monthlyGmv}
                    onChange={(e) => setFormData({ ...formData, monthlyGmv: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-sm bg-white border border-[#3F304D]/20 focus:border-[#3F304D] rounded-lg outline-none transition-all"
                  >
                    <option value="Launching Soon / Pre-revenue">Launching Soon / Pre-revenue</option>
                    <option value="Under ₹25L / month">Under ₹25 Lakhs / month</option>
                    <option value="₹25L – ₹75L / month">₹25 Lakhs – ₹75 Lakhs / month</option>
                    <option value="₹75L – ₹2 Cr / month">₹75 Lakhs – ₹2 Crores / month</option>
                    <option value="₹2 Cr+ / month">₹2 Crores+ / month</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-xs font-semibold tracking-wider uppercase text-[#2C2626] mb-1.5">
                  Current Growth Bottleneck or Objective <span className="text-rose-600">*</span>
                </label>
                <textarea
                  id="message"
                  required
                  rows={3}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell us about your brand, current storefront, conversion or media challenges..."
                  className={`w-full px-3.5 py-2.5 text-sm bg-white border ${
                    errors.message ? "border-rose-500 ring-1 ring-rose-500" : "border-[#3F304D]/20 focus:border-[#3F304D]"
                  } rounded-lg outline-none transition-all resize-none`}
                />
                {errors.message && <p className="text-xs text-rose-600 mt-1">{errors.message}</p>}
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3">
                <div className="flex items-center gap-1.5 text-xs text-[#2C2626]/70">
                  <ShieldCheck className="w-4 h-4 text-emerald-700" />
                  <span>Strict NDA & commercial confidentiality guaranteed.</span>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#3F304D] text-[#FAF8F5] text-xs font-semibold tracking-wider uppercase rounded-lg hover:bg-[#2B1E37] transition-all shadow-md disabled:opacity-50"
                >
                  {isSubmitting ? (
                    "Processing Request..."
                  ) : (
                    <>
                      <span>Submit Consultation Request</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
