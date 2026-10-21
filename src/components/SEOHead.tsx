import { useEffect } from "react";

interface SEOHeadProps {
  title: string;
  description: string;
  canonicalPath?: string;
}

export function SEOHead({ title, description, canonicalPath = "" }: SEOHeadProps) {
  useEffect(() => {
    document.title = `${title} | Growify Digital`;

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", description);
    }

    const canonicalLink = document.querySelector('link[rel="canonical"]');
    if (canonicalLink) {
      const fullUrl = `https://growify.in${canonicalPath.startsWith("/") ? canonicalPath : `/${canonicalPath}`}`;
      canonicalLink.setAttribute("href", fullUrl);
    }
  }, [title, description, canonicalPath]);

  return null;
}
