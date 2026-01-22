import { Link } from "wouter";
import { motion } from "framer-motion";
import { Sparkles, Moon, Sun, ArrowRight, Heart, Briefcase, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { SEO } from "@/components/SEO";

interface HomeProps {
  targetSection?: string | undefined;
}

export default function Home({ targetSection }: HomeProps) {
  const { t } = useTranslation();

  useEffect(() => {
    if (targetSection) {
      document.getElementById(targetSection)?.scrollIntoView({ behavior: "smooth" });
    }
  }, [targetSection]);

  return (
    <div className="min-h-screen relative overflow-hidden">
      <SEO />
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center text-center px-4">
        {/* Background Image */}
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: `url(${new URL("@/assets/hero_bg.jpeg", import.meta.url).href})`,
            filter: "brightness(0.6)"
          }}
        />
        
        {/* Content */}
        <div className="relative z-10 max-w-4xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-10 duration-1000">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur border border-white/20 text-primary-foreground/90 text-sm font-medium tracking-wider uppercase"
          >
            <Sparkles className="w-4 h-4 text-primary" />
            <span>{t("home.badge")}</span>
          </motion.div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-white tracking-tight drop-shadow-2xl">
            {t("home.hero_title_1")}<br/>
            <span className="text-gradient-gold">{t("home.hero_title_2")}</span>
          </h1>

          <p className="text-xl md:text-2xl text-white/80 max-w-2xl mx-auto font-light leading-relaxed">
            {t("home.hero_desc")}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
            <Link href="/daily-tarot">
              <Button size="lg" className="h-14 px-8 text-lg rounded-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold shadow-gold transition-all hover:scale-105">
                {t("home.cta_daily")}
              </Button>
            </Link>
            <Link href="/yes-no-tarot">
              <Button size="lg" variant="outline" className="h-14 px-8 text-lg rounded-full border-white/30 bg-white/5 hover:bg-white/10 text-white backdrop-blur transition-all hover:scale-105">
                {t("home.cta_yes_no")}
              </Button>
            </Link>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 border-2 border-current rounded-full flex justify-center pt-2">
            <div className="w-1 h-2 bg-current rounded-full" />
          </div>
        </motion.div>
      </section>

      {/* Features Grid */}
      <section className="py-24 bg-background relative z-10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary">{t("home.features_title")}</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              {t("home.features_desc")}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard 
              icon={<Sun className="w-8 h-8 text-primary" />}
              title={t("home.daily_title")}
              description={t("home.daily_desc")}
              link="/daily-tarot"
              bgImage={new URL("@/assets/sun_card.jpeg", import.meta.url).href}
            />
            <FeatureCard 
              icon={<Zap className="w-8 h-8 text-primary" />}
              title={t("home.yes_no_title")}
              description={t("home.yes_no_desc")}
              link="/yes-no-tarot"
              bgImage={new URL("@/assets/wheel_card.jpeg", import.meta.url).href}
            />
            <FeatureCard 
              icon={<Moon className="w-8 h-8 text-primary" />}
              title={t("home.three_card_title")}
              description={t("home.three_card_desc")}
              link="/three-card"
              bgImage={new URL("@/assets/priestess_card.jpeg", import.meta.url).href}
            />
            <FeatureCard 
              icon={<Heart className="w-8 h-8 text-primary" />}
              title={t("home.love_title")}
              description={t("home.love_desc")}
              link="/love-tarot"
              bgImage={new URL("@/assets/lovers_card.jpeg", import.meta.url).href}
              comingSoon
            />
            <FeatureCard 
              icon={<Briefcase className="w-8 h-8 text-primary" />}
              title={t("home.career_title")}
              description={t("home.career_desc")}
              link="/career-tarot"
              bgImage={new URL("@/assets/emperor_card.jpeg", import.meta.url).href}
              comingSoon
            />
          </div>
        </div>
      </section>
    </div>
  );
}

function FeatureCard({ 
  icon, 
  title, 
  description, 
  link, 
  bgImage,
  comingSoon = false
}: { 
  icon: React.ReactNode; 
  title: string; 
  description: string; 
  link: string;
  bgImage: string;
  comingSoon?: boolean;
}) {
  const { t } = useTranslation();
  return (
    <Link href={comingSoon ? "#" : link}>
      <div className="group relative h-96 rounded-2xl overflow-hidden cursor-pointer border border-white/10 shadow-lg transition-all hover:scale-[1.02] hover:shadow-2xl">
        {/* Background */}
        <div 
          className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
          style={{ backgroundImage: `url(${bgImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-90 transition-opacity group-hover:opacity-80" />
        
        {/* Content */}
        <div className="absolute inset-0 p-8 flex flex-col justify-end">
          <div className="mb-auto opacity-0 -translate-y-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
            <div className="w-12 h-12 rounded-full bg-primary/20 backdrop-blur flex items-center justify-center mb-4">
              {icon}
            </div>
          </div>
          
          <div className="space-y-3 transform transition-all duration-300 group-hover:-translate-y-2">
            <div className="flex items-center justify-between">
              <h3 className="text-2xl font-serif font-bold text-white">{title}</h3>
              {comingSoon && (
                <span className="text-xs font-medium px-2 py-1 rounded bg-white/20 text-white backdrop-blur">
                  {t("common.coming_soon")}
                </span>
              )}
            </div>
            <p className="text-white/70 line-clamp-3 group-hover:line-clamp-none transition-all">
              {description}
            </p>
            
            {!comingSoon && (
              <div className="flex items-center text-primary font-medium text-sm pt-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                {t("common.start_reading")} <ArrowRight className="w-4 h-4 ml-2" />
              </div>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
}
