import { SEO } from "@/components/SEO";
import { useTranslation } from "react-i18next";

export default function About() {
  const { t } = useTranslation();
  return (
    <div className="container mx-auto px-4 py-20 max-w-3xl">
      <SEO title="About Us" path="/about" />
      <h1 className="text-4xl font-serif font-bold text-primary mb-8">{t("footer.about_us")}</h1>
      <div className="prose prose-invert prose-lg">
        <p>
          Welcome to Tarotread.net. We are dedicated to combining ancient tarot wisdom with modern AI technology to provide you with deep, personalized insights.
        </p>
        <p>
          Our mission is to help you find clarity and guidance in your life journey through the art of tarot reading.
        </p>
      </div>
    </div>
  );
}
