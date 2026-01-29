import { SEO } from "@/components/SEO";
import { useTranslation } from "react-i18next";

export default function Terms() {
  const { t } = useTranslation();
  return (
    <div className="container mx-auto px-4 py-20 max-w-3xl">
      <SEO title="Terms of Service" path="/terms" />
      <h1 className="text-4xl font-serif font-bold text-primary mb-8">{t("footer.terms")}</h1>
      <div className="prose prose-invert prose-lg">
        <p>By accessing Tarotread.net, you agree to be bound by these Terms of Service.</p>
        <h3>Use of Service</h3>
        <p>Our tarot readings are for entertainment and guidance purposes only. They should not replace professional advice.</p>
        <h3>Disclaimer</h3>
        <p>We are not responsible for any decisions made based on the readings provided on this site.</p>
      </div>
    </div>
  );
}
