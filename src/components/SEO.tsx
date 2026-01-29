import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";

interface SEOProps {
  title?: string;
  description?: string;
  path?: string;
}

export function SEO({ title, description, path = "" }: SEOProps) {
  // Base URL (replace with actual domain in production)
  const baseUrl = "https://tarotread.net";
  const url = `${baseUrl}${path}`;

  const { t, ready } = useTranslation();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Return null on server/hydration to avoid mismatch with index.html static tags
  if (!mounted) {
    return null;
  }

  // Fallback to default (English) if translations aren't ready yet
  const siteTitle = (ready && t("meta.title")) || "AI Tarot Reading - Your Online Sanctuary";
  const metaDescription = description || (ready && t("meta.description")) || "Free online tarot reading with AI deep interpretation.";
  
  // Construct full title
  const fullTitle = title ? `${title} | ${siteTitle}` : siteTitle;

  return (
    <Helmet prioritizeSeoTags>
      <title>{fullTitle}</title>
      {metaDescription && <meta name="description" content={metaDescription} />}
      <link rel="canonical" href={url} />
      
      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={fullTitle} />
      {metaDescription && <meta property="og:description" content={metaDescription} />}
      <meta property="og:image" content={`${baseUrl}/og-image.jpg`} />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      {metaDescription && <meta name="twitter:description" content={metaDescription} />}
    </Helmet>
  );
}
