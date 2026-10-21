import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ChevronRight, BookOpen, Clock, Tag, ExternalLink } from "lucide-react";
import { INSIGHTS, InsightArticle } from "@/data/insights";
import { SEOHead } from "@/components/SEOHead";

interface InsightsPageProps {
  onOpenEnquiry: (serviceName?: string) => void;
}

export function InsightsPage({ onOpenEnquiry }: InsightsPageProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [expandedSlug, setExpandedSlug] = useState<string | null>(INSIGHTS[0].slug);

  const categories = ["All", "Commerce Architecture", "Acquisition", "Retention", "AI & Innovation", "Global Strategy"];

  const filtered = selectedCategory === "All"
    ? INSIGHTS
    : INSIGHTS.filter((i) => i.category === selectedCategory);

  return (
    <>
      <SEOHead
        title="Luxury Commerce Insights & Strategy Playbooks"
        description="Deep-dive strategic research on luxury Shopify UX, high-AOV Meta/Google acquisition, WhatsApp retention CRM, and AI virtual try-on ROI."
        canonicalPath="/insights"
      />

      <div className="pt-32 pb-24 bg-[#FAF8F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumbs */}
          <div className="flex items-center gap-2 text-xs text-[#2C2626]/60 mb-8">
            <Link to="/" className="hover:text-[#3F304D]">Home</Link>
            <span>/</span>
            <span className="text-[#3F304D] font-medium">Insights</span>
          </div>

          {/* Header */}
          <div className="max-w-4xl space-y-4 mb-12">
            <span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-[#3F304D]/70 block">
              Editorial Journal &amp; Playbooks
            </span>
            <h1 className="font-serif text-4xl sm:text-6xl text-[#1A1420] leading-tight">
              Strategic Playbooks for Modern Fashion &amp; Luxury Commerce
            </h1>
            <p className="text-base text-[#2C2626]/80 leading-relaxed font-sans max-w-3xl">
              Original insights, measurement models, and architectural playbooks derived from scaling 476+ luxury, couture, and lifestyle labels.
            </p>
          </div>

          {/* Category Filter Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
                  selectedCategory === cat
                    ? "bg-[#3F304D] text-[#FAF8F5] shadow-xs"
                    : "bg-white text-[#2C2626]/75 hover:bg-zinc-100 border border-[#3F304D]/10"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Articles Accordion / Card View */}
          <div className="space-y-8 mb-20">
            {filtered.map((article) => {
              const isExpanded = expandedSlug === article.slug;
              return (
                <article
                  key={article.slug}
                  className="bg-white rounded-3xl p-6 sm:p-10 border border-[#3F304D]/15 shadow-xs transition-all"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                    <div className="flex items-center gap-2 text-xs">
                      <span className="font-semibold uppercase tracking-wider text-[#3F304D]">
                        {article.category}
                      </span>
                      <span className="text-zinc-300">•</span>
                      <span className="text-[#2C2626]/60">{article.readTime}</span>
                      <span className="text-zinc-300">•</span>
                      <span className="text-[#2C2626]/60 font-mono text-[11px]">{article.publishedDate}</span>
                    </div>

                    <div className="text-[11px] font-mono text-[#3F304D]/70">
                      Target Intent: {article.searchIntent.split("—")[0]}
                    </div>
                  </div>

                  <h2 className="font-serif text-2xl sm:text-3xl text-[#1A1420] font-normal leading-snug mb-3">
                    {article.title}
                  </h2>

                  <p className="text-xs sm:text-sm text-[#2C2626]/80 leading-relaxed mb-4">
                    {article.summary}
                  </p>

                  {/* Metadata pill strip */}
                  <div className="p-3 bg-[#FAF8F5] rounded-xl border border-[#3F304D]/10 text-xs space-y-1 mb-5">
                    <div>
                      <strong>Target Audience:</strong> {article.targetAudience}
                    </div>
                    <div>
                      <strong>Primary Target Keyword:</strong> <code className="font-mono text-[#3F304D]">{article.primaryKeyword}</code>
                    </div>
                  </div>

                  {/* Key Takeaways */}
                  <div className="mb-6">
                    <h3 className="text-xs font-bold uppercase tracking-wider text-[#3F304D] mb-2">
                      Key Strategic Takeaways
                    </h3>
                    <ul className="space-y-1.5 text-xs text-[#2C2626]/80">
                      {article.keyTakeaways.map((takeaway, tIdx) => (
                        <li key={tIdx} className="flex items-start gap-2">
                          <span className="text-[#BB96DA] font-bold">✓</span>
                          <span>{takeaway}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Expanded Content View */}
                  {isExpanded && (
                    <div className="pt-6 border-t border-[#3F304D]/10 space-y-6 animate-fade-in">
                      {article.contentSections.map((sec, sIdx) => (
                        <div key={sIdx} className="space-y-2">
                          <h4 className="font-serif text-xl font-bold text-[#1A1420]">
                            {sec.heading}
                          </h4>
                          {sec.paragraphs.map((para, pIdx) => (
                            <p key={pIdx} className="text-xs sm:text-sm text-[#2C2626]/85 leading-relaxed">
                              {para}
                            </p>
                          ))}
                        </div>
                      ))}

                      {/* Internal Links Recommendation */}
                      <div className="pt-4 border-t border-[#3F304D]/10 text-xs">
                        <strong className="text-[#3F304D] block mb-2">
                          Recommended Internal Architecture Links:
                        </strong>
                        <div className="flex flex-wrap gap-2">
                          {article.internalLinks.map((link, lIdx) => (
                            <Link
                              key={lIdx}
                              to={link.url}
                              className="px-3 py-1.5 bg-[#FAF8F5] hover:bg-[#3F304D]/5 border border-[#3F304D]/15 rounded-lg text-[#3F304D] font-semibold inline-flex items-center gap-1 transition-colors"
                            >
                              <span>{link.text}</span>
                              <ChevronRight className="w-3 h-3" />
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Toggle expansion */}
                  <div className="pt-4 flex items-center justify-between border-t border-[#3F304D]/10">
                    <button
                      onClick={() => setExpandedSlug(isExpanded ? null : article.slug)}
                      className="text-xs font-semibold uppercase tracking-wider text-[#3F304D] hover:underline"
                    >
                      {isExpanded ? "Collapse Full Playbook ▲" : "Read Full Playbook &amp; Strategy ▼"}
                    </button>
                    <button
                      onClick={() => onOpenEnquiry(`Strategy Regarding ${article.title}`)}
                      className="text-xs text-[#2C2626]/70 hover:text-[#3F304D] font-medium"
                    >
                      Consult on This Topic →
                    </button>
                  </div>
                </article>
              );
            })}
          </div>

          {/* CTA */}
          <div className="text-center bg-[#3F304D] text-[#FAF8F5] p-10 rounded-3xl">
            <h2 className="font-serif text-3xl text-white mb-2">
              Apply These Frameworks to Your Label
            </h2>
            <p className="text-xs sm:text-sm text-[#FAF8F5]/80 max-w-md mx-auto mb-6">
              Our growth strategists help fashion houses implement these exact retention, acquisition, and UX architectures.
            </p>
            <button
              onClick={() => onOpenEnquiry("Editorial Playbook Application")}
              className="px-8 py-3.5 bg-[#BB96DA] text-[#1A1420] text-xs font-semibold tracking-wider uppercase rounded-xl hover:bg-[#a97ecf] transition-all shadow-md"
            >
              Discuss Implementation
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
