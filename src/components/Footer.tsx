import { Link } from "wouter";
import { useTranslation } from "react-i18next";

export function Footer() {
  const { t } = useTranslation();

  const friendLinks = [
    { name: "Now Games", url: "https://nowgames.lol" },
    { name: "State Tax Calculators", url: "https://statetaxcalc.com" },
    { name: "The Forge Calculator", url: "https://forgecalc.org" },
    { name: "Dream Whisper AI", url: "https://dreamwhisperai.com" },
    { name: "Arcana AI", url: "https://arcanaai.org" },
    { name: "Fun Games Today", url: "https://fungames.today" },
    { name: "Toolbox Pro", url: "https://toolboxpro.top" },
    { name: "Tarotread", url: "https://tarotread.net" },
  ];

  return (
    <footer className="w-full bg-slate-950/50 border-t border-white/10 mt-20 py-12 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand & Contact */}
          <div className="col-span-1 md:col-span-1">
            <h3 className="text-xl font-serif font-bold text-primary mb-4">Tarot AI</h3>
            <p className="text-muted-foreground text-sm mb-4">
              {t("footer.slogan")}
            </p>
            <div className="text-sm text-muted-foreground">
              <p className="font-semibold text-white mb-1">{t("footer.contact_us")}</p>
              <a href="mailto:n20186005@gmail.com" className="hover:text-primary transition-colors">
                n20186005@gmail.com
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-span-1">
            <h4 className="font-semibold text-white mb-4">{t("footer.quick_links")}</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/" className="hover:text-primary transition-colors">{t("common.back_home")}</Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-primary transition-colors">{t("footer.about_us")}</Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-primary transition-colors">{t("footer.privacy")}</Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-primary transition-colors">{t("footer.terms")}</Link>
              </li>
            </ul>
          </div>

          {/* Friend Links */}
          <div className="col-span-1 md:col-span-2">
            <h4 className="font-semibold text-white mb-4">{t("footer.friend_links")}</h4>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-sm">
              {friendLinks.map((link) => (
                <a 
                  key={link.url} 
                  href={link.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors truncate"
                  title={link.name}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 mt-12 pt-8 text-center text-xs text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Tarotread.net. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
