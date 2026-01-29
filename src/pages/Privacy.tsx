import { SEO } from "@/components/SEO";
import { useTranslation } from "react-i18next";

export default function Privacy() {
  const { t } = useTranslation();
  return (
    <div className="container mx-auto px-4 py-20 max-w-3xl">
      <SEO title="Privacy Policy" path="/privacy" />
      <h1 className="text-4xl font-serif font-bold text-primary mb-8">{t("footer.privacy")}</h1>
      <div className="prose prose-invert prose-lg">
        <p>Your privacy is important to us. This Privacy Policy explains how we collect, use, and protect your information.</p>
        <h3>Information Collection</h3>
        <p>We do not collect personal identifiable information unless you voluntarily provide it (e.g., contacting us via email).</p>
        <h3>Usage</h3>
        <p>Any information you provide is used solely for the purpose of improving your experience on our website.</p>
      </div>
    </div>
  );
}
