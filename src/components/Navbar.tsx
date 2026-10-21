import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, ArrowRight, Sparkles } from "lucide-react";

interface NavbarProps {
  onOpenEnquiry: () => void;
}

export function Navbar({ onOpenEnquiry }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdown, setServicesDropdown] = useState(false);
  const [productsDropdown, setProductsDropdown] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setServicesDropdown(false);
    setProductsDropdown(false);
  }, [location.pathname]);

  const isActive = (path: string) => {
    if (path === "/" && location.pathname === "/") return true;
    if (path !== "/" && location.pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? "bg-[#FAF8F5]/90 backdrop-blur-md shadow-sm border-b border-[#3F304D]/10 py-3.5"
            : "bg-[#FAF8F5]/60 backdrop-blur-sm py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2.5 group">
            <span className="w-8 h-8 rounded-lg bg-[#3F304D] text-[#FAF8F5] flex items-center justify-center font-serif text-lg font-bold shadow-sm transition-transform group-hover:scale-105">
              G
            </span>
            <div className="flex flex-col">
              <span className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-[#1A1420] leading-none">
                GROWIFY
              </span>
              <span className="text-[9px] font-semibold tracking-[0.25em] text-[#3F304D]/70 uppercase mt-0.5">
                Digital Systems
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2 text-[13px] font-medium tracking-wide">
            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setServicesDropdown(true)}
              onMouseLeave={() => setServicesDropdown(false)}
            >
              <Link
                to="/services"
                className={`inline-flex items-center gap-1 px-3 py-2 rounded-md transition-colors ${
                  isActive("/services")
                    ? "text-[#3F304D] font-semibold"
                    : "text-[#2C2626]/80 hover:text-[#1A1420] hover:bg-[#3F304D]/5"
                }`}
              >
                <span>Services</span>
                <ChevronDown className="w-3.5 h-3.5 text-[#3F304D]/60" />
              </Link>

              {servicesDropdown && (
                <div className="absolute top-full left-0 w-64 pt-2 animate-fade-in">
                  <div className="bg-[#FAF8F5] border border-[#3F304D]/10 rounded-xl shadow-xl p-2 space-y-1">
                    <Link
                      to="/services"
                      className="block px-3 py-2 text-xs font-semibold text-[#1A1420] hover:bg-[#3F304D]/5 rounded-lg transition-colors"
                    >
                      Overview & Growth Stack
                    </Link>
                    <div className="editorial-rule my-1" />
                    <Link
                      to="/services/commerce"
                      className="block px-3 py-2 text-xs text-[#2C2626] hover:bg-[#3F304D]/5 rounded-lg transition-colors"
                    >
                      Commerce & Shopify Development
                    </Link>
                    <Link
                      to="/services/growth"
                      className="block px-3 py-2 text-xs text-[#2C2626] hover:bg-[#3F304D]/5 rounded-lg transition-colors"
                    >
                      Performance Marketing & Retention
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <Link
              to="/industries"
              className={`px-3 py-2 rounded-md transition-colors ${
                isActive("/industries")
                  ? "text-[#3F304D] font-semibold"
                  : "text-[#2C2626]/80 hover:text-[#1A1420] hover:bg-[#3F304D]/5"
              }`}
            >
              Industries
            </Link>

            <Link
              to="/case-studies"
              className={`px-3 py-2 rounded-md transition-colors ${
                isActive("/case-studies")
                  ? "text-[#3F304D] font-semibold"
                  : "text-[#2C2626]/80 hover:text-[#1A1420] hover:bg-[#3F304D]/5"
              }`}
            >
              Case Studies
            </Link>

            {/* Products Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setProductsDropdown(true)}
              onMouseLeave={() => setProductsDropdown(false)}
            >
              <Link
                to="/products"
                className={`inline-flex items-center gap-1 px-3 py-2 rounded-md transition-colors ${
                  isActive("/products")
                    ? "text-[#3F304D] font-semibold"
                    : "text-[#2C2626]/80 hover:text-[#1A1420] hover:bg-[#3F304D]/5"
                }`}
              >
                <span>Products</span>
                <ChevronDown className="w-3.5 h-3.5 text-[#3F304D]/60" />
              </Link>

              {productsDropdown && (
                <div className="absolute top-full left-0 w-64 pt-2 animate-fade-in">
                  <div className="bg-[#FAF8F5] border border-[#3F304D]/10 rounded-xl shadow-xl p-2 space-y-1">
                    <Link
                      to="/products/lookify"
                      className="flex items-center justify-between px-3 py-2 text-xs font-semibold text-[#1A1420] hover:bg-[#3F304D]/5 rounded-lg transition-colors"
                    >
                      <span>Lookify (AI Virtual Try-On)</span>
                      <span className="text-[10px] bg-emerald-100 text-emerald-800 px-1.5 py-0.5 rounded font-mono">
                        Live
                      </span>
                    </Link>
                    <Link
                      to="/products/rossify"
                      className="flex items-center justify-between px-3 py-2 text-xs text-[#2C2626] hover:bg-[#3F304D]/5 rounded-lg transition-colors"
                    >
                      <span>Rossify (Workflow Engine)</span>
                      <span className="text-[10px] bg-amber-100 text-amber-800 px-1.5 py-0.5 rounded font-mono">
                        Beta
                      </span>
                    </Link>
                    <Link
                      to="/products/craftify"
                      className="flex items-center justify-between px-3 py-2 text-xs text-[#2C2626] hover:bg-[#3F304D]/5 rounded-lg transition-colors"
                    >
                      <span>Craftify (Creative Studio)</span>
                      <span className="text-[10px] bg-purple-100 text-purple-800 px-1.5 py-0.5 rounded font-mono">
                        Concept
                      </span>
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <Link
              to="/partners"
              className={`px-3 py-2 rounded-md transition-colors ${
                isActive("/partners")
                  ? "text-[#3F304D] font-semibold"
                  : "text-[#2C2626]/80 hover:text-[#1A1420] hover:bg-[#3F304D]/5"
              }`}
            >
              Partners
            </Link>

            <Link
              to="/about"
              className={`px-3 py-2 rounded-md transition-colors ${
                isActive("/about")
                  ? "text-[#3F304D] font-semibold"
                  : "text-[#2C2626]/80 hover:text-[#1A1420] hover:bg-[#3F304D]/5"
              }`}
            >
              About
            </Link>

            <Link
              to="/life-at-growify"
              className={`px-3 py-2 rounded-md transition-colors ${
                isActive("/life-at-growify")
                  ? "text-[#3F304D] font-semibold"
                  : "text-[#2C2626]/80 hover:text-[#1A1420] hover:bg-[#3F304D]/5"
              }`}
            >
              Life at Growify
            </Link>

            <Link
              to="/insights"
              className={`px-3 py-2 rounded-md transition-colors ${
                isActive("/insights")
                  ? "text-[#3F304D] font-semibold"
                  : "text-[#2C2626]/80 hover:text-[#1A1420] hover:bg-[#3F304D]/5"
              }`}
            >
              Insights
            </Link>
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <Link
              to="/contact"
              className="text-xs font-semibold tracking-wider uppercase text-[#2C2626] hover:text-[#3F304D] px-3 py-2 transition-colors"
            >
              Contact
            </Link>
            <button
              onClick={onOpenEnquiry}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#3F304D] text-[#FAF8F5] text-xs font-semibold tracking-wider uppercase rounded-lg hover:bg-[#2B1E37] transition-all shadow-sm hover:shadow group"
            >
              <span>Discuss Your Growth</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={onOpenEnquiry}
              className="px-3 py-1.5 bg-[#3F304D] text-[#FAF8F5] text-[11px] font-semibold tracking-wider uppercase rounded-md"
            >
              Consult
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#2C2626] hover:bg-[#3F304D]/5 rounded-lg"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-30 lg:hidden bg-[#FAF8F5] pt-20 px-6 pb-8 overflow-y-auto animate-fade-in flex flex-col justify-between">
          <div className="space-y-4">
            <div className="text-[11px] font-semibold tracking-widest text-[#3F304D]/60 uppercase">
              Navigation Menu
            </div>
            <nav className="flex flex-col space-y-3 font-serif text-xl text-[#1A1420]">
              <Link to="/" className="py-1 hover:text-[#3F304D] transition-colors">
                Home
              </Link>
              <Link to="/services" className="py-1 hover:text-[#3F304D] transition-colors">
                Connected Services
              </Link>
              <Link to="/services/commerce" className="pl-4 text-base font-sans text-[#2C2626]/80 hover:text-[#3F304D]">
                — Commerce & Shopify
              </Link>
              <Link to="/services/growth" className="pl-4 text-base font-sans text-[#2C2626]/80 hover:text-[#3F304D]">
                — Growth & Retention
              </Link>
              <Link to="/industries" className="py-1 hover:text-[#3F304D] transition-colors">
                Industries (Fashion & Luxury)
              </Link>
              <Link to="/case-studies" className="py-1 hover:text-[#3F304D] transition-colors">
                Case Studies
              </Link>
              <Link to="/case-studies/mahima-mahajan" className="pl-4 text-base font-sans text-[#2C2626]/80 hover:text-[#3F304D]">
                — Mahima Mahajan
              </Link>
              <Link to="/case-studies/ridhi-mehra" className="pl-4 text-base font-sans text-[#2C2626]/80 hover:text-[#3F304D]">
                — Ridhi Mehra
              </Link>
              <Link to="/products" className="py-1 hover:text-[#3F304D] transition-colors">
                Technology Products
              </Link>
              <Link to="/products/lookify" className="pl-4 text-base font-sans text-[#2C2626]/80 hover:text-[#3F304D]">
                — Lookify AI Try-On
              </Link>
              <Link to="/partners" className="py-1 hover:text-[#3F304D] transition-colors">
                Partners & Integrations
              </Link>
              <Link to="/about" className="py-1 hover:text-[#3F304D] transition-colors">
                About & Leadership
              </Link>
              <Link to="/life-at-growify" className="py-1 hover:text-[#3F304D] transition-colors">
                Life at Growify (Office Tour)
              </Link>
              <Link to="/insights" className="py-1 hover:text-[#3F304D] transition-colors">
                Editorial Insights
              </Link>
              <Link to="/careers" className="py-1 hover:text-[#3F304D] transition-colors">
                Careers (We're Hiring)
              </Link>
              <Link to="/contact" className="py-1 hover:text-[#3F304D] transition-colors">
                Contact & Office Details
              </Link>
            </nav>
          </div>

          <div className="pt-8 border-t border-[#3F304D]/15 space-y-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenEnquiry();
              }}
              className="w-full py-3.5 bg-[#3F304D] text-[#FAF8F5] text-xs font-semibold tracking-wider uppercase rounded-xl shadow-md text-center"
            >
              Discuss Your Growth
            </button>
            <p className="text-center text-xs text-[#2C2626]/60">
              New Delhi HQ: +91-8800461296 | info@growify.in
            </p>
          </div>
        </div>
      )}
    </>
  );
}
