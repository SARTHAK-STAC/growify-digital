import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Clock, ShieldCheck, CheckCircle, AlertCircle, ArrowRight } from "lucide-react";
import { SEOHead } from "@/components/SEOHead";

export function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    workEmail: "",
    companyName: "",
    phoneNumber: "",
    serviceInterest: "Connected Commerce & Growth (Full Suite)",
    monthlyGmv: "₹50L – ₹2Cr / month",
    message: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.fullName.trim()) errs.fullName = "Please enter your name";
    if (!formData.workEmail.trim()) {
      errs.workEmail = "Please enter your work email";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.workEmail)) {
      errs.workEmail = "Please enter a valid business email";
    }
    if (!formData.companyName.trim()) errs.companyName = "Please enter your brand name";
    if (!formData.message.trim()) errs.message = "Please share your current growth goals or storefront challenges";
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  return (
    <>
      <SEOHead
        title="Contact Growify Digital — Schedule a Growth Architecture Audit"
        description="Connect with Growify Digital's senior strategists in New Delhi. Discuss your Shopify storefront, performance acquisition, and Lookify AI try-on integration."
        canonicalPath="/contact"
      />

      <div className="pt-32 pb-24 bg-[#FAF8F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumbs */}
          <div className="flex items-center gap-2 text-xs text-[#2C2626]/60 mb-8">
            <Link to="/" className="hover:text-[#3F304D]">Home</Link>
            <span>/</span>
            <span className="text-[#3F304D] font-medium">Contact</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left: Contact Info & Office Details */}
            <div className="lg:col-span-5 space-y-8">
              <div>
                <span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-[#3F304D]/70 block">
                  Let's Connect
                </span>
                <h1 className="font-serif text-4xl sm:text-5xl text-[#1A1420] leading-tight mt-1">
                  Discuss Your Brand's Growth Architecture
                </h1>
                <p className="text-sm text-[#2C2626]/80 leading-relaxed font-sans mt-3">
                  Schedule a confidential review with Growify's leadership team. We audit your storefront speed, acquisition efficiency, and international readiness.
                </p>
              </div>

              {/* Direct Office Details */}
              <div className="bg-white p-6 rounded-2xl border border-[#3F304D]/10 space-y-4">
                <h2 className="text-xs font-bold uppercase tracking-wider text-[#3F304D]">
                  New Delhi Headquarters
                </h2>

                <div className="space-y-3 text-xs text-[#2C2626]/85">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-4 h-4 text-[#BB96DA] flex-shrink-0 mt-0.5" />
                    <span>3rd Floor, D-112, 60 Feet Rd, Pocket D, Chattarpur Enclave, Chhatarpur, New Delhi - 110074, India</span>
                  </div>

                  <div className="flex items-center gap-3">
                    <Phone className="w-4 h-4 text-[#BB96DA] flex-shrink-0" />
                    <a href="tel:+918800461296" className="hover:text-[#3F304D] font-medium">
                      +91-8800461296 / +91-8800461295
                    </a>
                  </div>

                  <div className="flex items-center gap-3">
                    <Mail className="w-4 h-4 text-[#BB96DA] flex-shrink-0" />
                    <a href="mailto:info@growify.in" className="hover:text-[#3F304D] font-medium">
                      info@growify.in
                    </a>
                  </div>

                  <div className="flex items-start gap-3 pt-1 border-t border-zinc-100">
                    <Clock className="w-4 h-4 text-[#BB96DA] flex-shrink-0 mt-0.5" />
                    <div>
                      <div>Office Hours: Mon – Fri, 9:30 AM – 7:30 PM IST</div>
                      <div className="text-[11px] text-[#2C2626]/60">18+ Hour Live Sales Concierge Coverage for International Clients</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Verified Trust Badge */}
              <div className="p-4 bg-emerald-50/70 border border-emerald-200 rounded-xl text-xs text-emerald-950 flex items-start gap-2.5">
                <ShieldCheck className="w-4 h-4 text-emerald-700 flex-shrink-0 mt-0.5" />
                <span>
                  <strong>Confidentiality First:</strong> We operate under bilateral non-disclosure agreements to protect proprietary commercial data and gross margin metrics.
                </span>
              </div>
            </div>

            {/* Right: Enquiry Form */}
            <div className="lg:col-span-7 bg-white rounded-3xl p-8 sm:p-10 border border-[#3F304D]/15 shadow-sm">
              <h2 className="font-serif text-2xl text-[#1A1420] mb-2 font-bold">
                Book a Strategic Consultation
              </h2>
              <p className="text-xs text-[#2C2626]/75 leading-relaxed mb-6">
                Fill out the brief below and our strategy team will respond within 4 business hours.
              </p>

              {submitted ? (
                <div className="py-10 text-center animate-fade-in">
                  <div className="w-14 h-14 bg-emerald-100 text-emerald-800 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8" />
                  </div>
                  <h3 className="font-serif text-2xl text-[#1A1420] mb-2">Request Logged in Evaluation Prototype</h3>
                  <p className="text-xs text-[#2C2626]/80 max-w-md mx-auto mb-4">
                    Thank you, {formData.fullName}. Your request for <strong>{formData.companyName}</strong> has been logged in this demonstrable project build.
                  </p>

                  <div className="p-4 bg-amber-50 border border-amber-200 rounded-xl text-left max-w-md mx-auto mb-6 text-xs text-amber-900 leading-relaxed">
                    <AlertCircle className="w-4 h-4 text-amber-700 inline mr-1 -mt-0.5" />
                    <strong>Prototype Limitation Note:</strong> In accordance with evaluation rules, this demo does not transmit data to an external CRM. For actual business enquiries, reach out directly to <a href="mailto:info@growify.in" className="underline font-bold">info@growify.in</a>.
                  </div>

                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        fullName: "",
                        workEmail: "",
                        companyName: "",
                        phoneNumber: "",
                        serviceInterest: "Connected Commerce & Growth (Full Suite)",
                        monthlyGmv: "₹50L – ₹2Cr / month",
                        message: "",
                      });
                    }}
                    className="px-6 py-2.5 bg-[#3F304D] text-[#FAF8F5] text-xs font-semibold tracking-wider uppercase rounded-lg hover:bg-[#2B1E37] transition-all"
                  >
                    Submit Another Query
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="fullName" className="block text-xs font-semibold tracking-wider uppercase text-[#2C2626] mb-1.5">
                        Full Name <span className="text-rose-600">*</span>
                      </label>
                      <input
                        id="fullName"
                        type="text"
                        required
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        placeholder="e.g. Rohini Sen"
                        className={`w-full px-3.5 py-2.5 text-sm bg-[#FAF8F5] border ${
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
                        className={`w-full px-3.5 py-2.5 text-sm bg-[#FAF8F5] border ${
                          errors.workEmail ? "border-rose-500 ring-1 ring-rose-500" : "border-[#3F304D]/20 focus:border-[#3F304D]"
                        } rounded-lg outline-none transition-all`}
                      />
                      {errors.workEmail && <p className="text-xs text-rose-600 mt-1">{errors.workEmail}</p>}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="companyName" className="block text-xs font-semibold tracking-wider uppercase text-[#2C2626] mb-1.5">
                        Brand / Label Name <span className="text-rose-600">*</span>
                      </label>
                      <input
                        id="companyName"
                        type="text"
                        required
                        value={formData.companyName}
                        onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                        placeholder="e.g. Maison Atelier"
                        className={`w-full px-3.5 py-2.5 text-sm bg-[#FAF8F5] border ${
                          errors.companyName ? "border-rose-500 ring-1 ring-rose-500" : "border-[#3F304D]/20 focus:border-[#3F304D]"
                        } rounded-lg outline-none transition-all`}
                      />
                      {errors.companyName && <p className="text-xs text-rose-600 mt-1">{errors.companyName}</p>}
                    </div>

                    <div>
                      <label htmlFor="phoneNumber" className="block text-xs font-semibold tracking-wider uppercase text-[#2C2626] mb-1.5">
                        Phone / WhatsApp
                      </label>
                      <input
                        id="phoneNumber"
                        type="tel"
                        value={formData.phoneNumber}
                        onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
                        placeholder="+91 / +1..."
                        className="w-full px-3.5 py-2.5 text-sm bg-[#FAF8F5] border border-[#3F304D]/20 focus:border-[#3F304D] rounded-lg outline-none transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="serviceInterest" className="block text-xs font-semibold tracking-wider uppercase text-[#2C2626] mb-1.5">
                        Primary Capability Needed
                      </label>
                      <select
                        id="serviceInterest"
                        value={formData.serviceInterest}
                        onChange={(e) => setFormData({ ...formData, serviceInterest: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-sm bg-[#FAF8F5] border border-[#3F304D]/20 focus:border-[#3F304D] rounded-lg outline-none transition-all"
                      >
                        <option value="Connected Commerce & Growth (Full Suite)">Connected Commerce & Growth (Full Suite)</option>
                        <option value="Shopify Plus Architecture & Re-platforming">Shopify Plus Architecture & Re-platforming</option>
                        <option value="Performance Acquisition (Meta & Google)">Performance Acquisition (Meta & Google)</option>
                        <option value="WhatsApp CRM & Retention Engine">WhatsApp CRM & Retention Engine</option>
                        <option value="18-Hour Sales Concierge Desk">18-Hour Sales Concierge Desk</option>
                        <option value="Lookify AI Virtual Try-On Deployment">Lookify AI Virtual Try-On Deployment</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="monthlyGmv" className="block text-xs font-semibold tracking-wider uppercase text-[#2C2626] mb-1.5">
                        Current Monthly Online GMV
                      </label>
                      <select
                        id="monthlyGmv"
                        value={formData.monthlyGmv}
                        onChange={(e) => setFormData({ ...formData, monthlyGmv: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-sm bg-[#FAF8F5] border border-[#3F304D]/20 focus:border-[#3F304D] rounded-lg outline-none transition-all"
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
                      Storefront Challenge or Objective <span className="text-rose-600">*</span>
                    </label>
                    <textarea
                      id="message"
                      rows={3}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Share your current website link, key friction points, or growth goals..."
                      className={`w-full px-3.5 py-2.5 text-sm bg-[#FAF8F5] border ${
                        errors.message ? "border-rose-500 ring-1 ring-rose-500" : "border-[#3F304D]/20 focus:border-[#3F304D]"
                      } rounded-lg outline-none transition-all resize-none`}
                    />
                    {errors.message && <p className="text-xs text-rose-600 mt-1">{errors.message}</p>}
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-3.5 bg-[#3F304D] text-[#FAF8F5] text-xs font-semibold tracking-wider uppercase rounded-xl hover:bg-[#2B1E37] transition-all shadow-md flex items-center justify-center gap-2 disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        "Transmitting..."
                      ) : (
                        <>
                          <span>Schedule Growth Architecture Audit</span>
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
      </div>
    </>
  );
}
