import { Link } from "react-router-dom";
import { ArrowUpRight, Mail, Phone, MapPin, Instagram, Linkedin, Globe } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#1A1420] text-[#FAF8F5] pt-16 pb-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-14 border-b border-white/10">
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-5">
            <div className="flex items-center gap-2.5">
              <span className="w-8 h-8 rounded-lg bg-[#FAF8F5] text-[#1A1420] flex items-center justify-center font-serif text-lg font-bold">
                G
              </span>
              <span className="font-serif text-2xl font-bold tracking-tight text-[#FAF8F5]">
                GROWIFY
              </span>
            </div>

            <p className="text-sm text-[#FAF8F5]/70 max-w-sm leading-relaxed">
              Growify builds connected commerce and growth systems for ambitious fashion, couture, jewellery, and lifestyle brands.
              Connecting storefronts, acquisition, retention, sales operations, and AI products.
            </p>

            <div className="space-y-2 text-xs text-[#FAF8F5]/80">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#BB96DA] flex-shrink-0 mt-0.5" />
                <span>3rd Floor, D-112, 60 Feet Rd, Pocket D, Chhatarpur Enclave, New Delhi, 110074</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#BB96DA] flex-shrink-0" />
                <a href="tel:+918800461296" className="hover:text-white transition-colors">
                  +91-8800461296 / +91-8800461295
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#BB96DA] flex-shrink-0" />
                <a href="mailto:info@growify.in" className="hover:text-white transition-colors">
                  info@growify.in
                </a>
              </div>
            </div>

            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://www.instagram.com/growifydigital"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Growify Instagram"
                className="w-9 h-9 rounded-full bg-white/5 hover:bg-white/15 flex items-center justify-center text-[#FAF8F5] transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://www.linkedin.com/company/growify-studio"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Growify LinkedIn"
                className="w-9 h-9 rounded-full bg-white/5 hover:bg-white/15 flex items-center justify-center text-[#FAF8F5] transition-colors"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://lookify.in"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Lookify Official Website"
                className="w-9 h-9 rounded-full bg-white/5 hover:bg-white/15 flex items-center justify-center text-[#FAF8F5] transition-colors"
              >
                <Globe className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Capabilities */}
          <div className="space-y-4">
            <h4 className="text-xs font-semibold uppercase tracking-widest text-[#BB96DA]">
              Connected Services
            </h4>
            <ul className="space-y-2 text-xs text-[#FAF8F5]/75">
              <li>
                <Link to="/services" className="hover:text-white transition-colors">
                  Growth Systems Overview
                </Link>
              </li>
              <li>
                <Link to="/services/commerce" className="hover:text-white transition-colors">
                  Shopify & Custom Storefronts
                </Link>
              </li>
              <li>
                <Link to="/services/growth" className="hover:text-white transition-colors">
                  Meta & Google Performance Ads
                </Link>
              </li>
              <li>
                <Link to="/services/growth#retention" className="hover:text-white transition-colors">
                  WhatsApp CRM & Retention
                </Link>
              </li>
              <li>
                <Link to="/services/growth#sales-ops" className="hover:text-white transition-colors">
                  18-Hour Sales Concierge
                </Link>
              </li>
              <li>
                <Link to="/services/growth#organic" className="hover:text-white transition-colors">
                  Fashion SEO & Editorial
                </Link>
              </li>
              <li>
                <Link to="/industries" className="hover:text-white transition-colors">
                  Fashion & Couture Industry
                </Link>
              </li>
            </ul>
          </div>

          {/* Proof & Products */}
          <div className="space-y-4">
            <h4 className="text-xs font-semibold uppercase tracking-widest text-[#BB96DA]">
              Products & Proof
            </h4>
            <ul className="space-y-2 text-xs text-[#FAF8F5]/75">
              <li>
                <Link to="/case-studies" className="hover:text-white transition-colors">
                  Case Studies Index
                </Link>
              </li>
              <li>
                <Link to="/case-studies/mahima-mahajan" className="hover:text-white transition-colors">
                  Mahima Mahajan Case Study
                </Link>
              </li>
              <li>
                <Link to="/case-studies/ridhi-mehra" className="hover:text-white transition-colors">
                  Ridhi Mehra Case Study
                </Link>
              </li>
              <li>
                <Link to="/products/lookify" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <span>Lookify Virtual Try-On</span>
                  <span className="text-[9px] bg-emerald-500/20 text-emerald-300 px-1 py-0.2 rounded font-mono">Live</span>
                </Link>
              </li>
              <li>
                <Link to="/products/rossify" className="hover:text-white transition-colors">
                  Rossify (Ops Suite)
                </Link>
              </li>
              <li>
                <Link to="/products/craftify" className="hover:text-white transition-colors">
                  Craftify (Creative Studio)
                </Link>
              </li>
              <li>
                <Link to="/partners" className="hover:text-white transition-colors">
                  LimeChat, QuickReply, Razorpay
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h4 className="text-xs font-semibold uppercase tracking-widest text-[#BB96DA]">
              Company & Culture
            </h4>
            <ul className="space-y-2 text-xs text-[#FAF8F5]/75">
              <li>
                <Link to="/about" className="hover:text-white transition-colors">
                  About & Leadership
                </Link>
              </li>
              <li>
                <Link to="/life-at-growify" className="hover:text-white transition-colors flex items-center gap-1">
                  <span>Life at Growify (Tour)</span>
                  <span className="text-[9px] bg-[#BB96DA]/20 text-[#BB96DA] px-1 py-0.2 rounded">Bonus</span>
                </Link>
              </li>
              <li>
                <Link to="/insights" className="hover:text-white transition-colors">
                  Editorial Journal & Guides
                </Link>
              </li>
              <li>
                <Link to="/careers" className="hover:text-white transition-colors">
                  Careers (We're Hiring)
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white transition-colors">
                  Contact & Book Audit
                </Link>
              </li>
              <li>
                <a href="https://lookify-demo.myshopify.com/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors inline-flex items-center gap-1">
                  <span>Live Lookify Demo</span>
                  <ArrowUpRight className="w-3 h-3 text-[#BB96DA]" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#FAF8F5]/50">
          <p>© 2019–2026 Growify Digital LLP. All rights reserved. New Delhi, India.</p>
          <div className="flex items-center gap-6">
            <span className="text-[11px] text-[#BB96DA]/80">
              Co-founded by Rishab Mehra & Disha Bhatnagar
            </span>
            <span className="hidden sm:inline text-white/20">|</span>
            <span className="text-[11px]">
              Built for Ambitious Luxury & Fashion Brands
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
