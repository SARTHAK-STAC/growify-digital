import { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ScrollToTop } from "@/components/ScrollToTop";
import { EnquiryModal } from "@/components/EnquiryModal";

// Pages
import { HomePage } from "@/pages/HomePage";
import { ServicesPage } from "@/pages/ServicesPage";
import { CommerceServicePage } from "@/pages/CommerceServicePage";
import { GrowthServicePage } from "@/pages/GrowthServicePage";
import { IndustriesPage } from "@/pages/IndustriesPage";
import { CaseStudiesIndexPage } from "@/pages/CaseStudiesIndexPage";
import { MahimaCaseStudyPage } from "@/pages/MahimaCaseStudyPage";
import { RidhiCaseStudyPage } from "@/pages/RidhiCaseStudyPage";
import { ProductsPage } from "@/pages/ProductsPage";
import { LookifyProductPage } from "@/pages/LookifyProductPage";
import { RossifyProductPage } from "@/pages/RossifyProductPage";
import { CraftifyProductPage } from "@/pages/CraftifyProductPage";
import { PartnersPage } from "@/pages/PartnersPage";
import { AboutPage } from "@/pages/AboutPage";
import { LifeAtGrowifyPage } from "@/pages/LifeAtGrowifyPage";
import { InsightsPage } from "@/pages/InsightsPage";
import { CareersPage } from "@/pages/CareersPage";
import { ContactPage } from "@/pages/ContactPage";

export function App() {
  const [enquiryOpen, setEnquiryOpen] = useState(false);
  const [enquiryService, setEnquiryService] = useState<string | undefined>(undefined);

  const handleOpenEnquiry = (serviceName?: string) => {
    setEnquiryService(serviceName);
    setEnquiryOpen(true);
  };

  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col bg-[#FAF8F5] text-[#2C2626]">
        <Navbar onOpenEnquiry={() => handleOpenEnquiry("General Growth Consultation")} />

        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage onOpenEnquiry={handleOpenEnquiry} />} />
            <Route path="/services" element={<ServicesPage onOpenEnquiry={handleOpenEnquiry} />} />
            <Route path="/services/commerce" element={<CommerceServicePage onOpenEnquiry={handleOpenEnquiry} />} />
            <Route path="/services/growth" element={<GrowthServicePage onOpenEnquiry={handleOpenEnquiry} />} />
            <Route path="/industries" element={<IndustriesPage onOpenEnquiry={handleOpenEnquiry} />} />
            <Route path="/case-studies" element={<CaseStudiesIndexPage onOpenEnquiry={handleOpenEnquiry} />} />
            <Route path="/case-studies/mahima-mahajan" element={<MahimaCaseStudyPage onOpenEnquiry={handleOpenEnquiry} />} />
            <Route path="/case-studies/ridhi-mehra" element={<RidhiCaseStudyPage onOpenEnquiry={handleOpenEnquiry} />} />
            <Route path="/products" element={<ProductsPage onOpenEnquiry={handleOpenEnquiry} />} />
            <Route path="/products/lookify" element={<LookifyProductPage onOpenEnquiry={handleOpenEnquiry} />} />
            <Route path="/products/rossify" element={<RossifyProductPage onOpenEnquiry={handleOpenEnquiry} />} />
            <Route path="/products/craftify" element={<CraftifyProductPage onOpenEnquiry={handleOpenEnquiry} />} />
            <Route path="/partners" element={<PartnersPage onOpenEnquiry={handleOpenEnquiry} />} />
            <Route path="/about" element={<AboutPage onOpenEnquiry={handleOpenEnquiry} />} />
            <Route path="/life-at-growify" element={<LifeAtGrowifyPage onOpenEnquiry={handleOpenEnquiry} />} />
            <Route path="/insights" element={<InsightsPage onOpenEnquiry={handleOpenEnquiry} />} />
            <Route path="/careers" element={<CareersPage onOpenEnquiry={handleOpenEnquiry} />} />
            <Route path="/contact" element={<ContactPage />} />
            {/* Fallback route */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>

        <Footer />

        <EnquiryModal
          isOpen={enquiryOpen}
          onClose={() => setEnquiryOpen(false)}
          defaultService={enquiryService}
        />
      </div>
    </BrowserRouter>
  );
}

export default App;
