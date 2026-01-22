import { Link } from "wouter";
import { motion } from "framer-motion";
import { Sparkles, Moon, Sun, ArrowRight, Heart, Briefcase, Zap, Star } from "lucide-react";
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
    // 去掉 overflow-hidden，允许背景延伸
    <div className="min-h-screen relative w-full">
      <SEO />
      
      {/* ================= Hero Section (首屏) ================= */}
      <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-4 pt-20 pb-32">
        
        {/* 装饰元素：漂浮的星光 (用 CSS 动画代替图片，性能更好且不依赖素材) */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div 
            animate={{ opacity: [0.3, 0.6, 0.3], scale: [1, 1.2, 1] }}
            transition={{ duration: 5, repeat: Infinity }}
            className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-[80px]" 
          />
          <motion.div 
            animate={{ opacity: [0.3, 0.5, 0.3], scale: [1.2, 1, 1.2] }}
            transition={{ duration: 7, repeat: Infinity }}
            className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-[100px]" 
          />
        </div>
        
        {/* 主内容区 */}
        <div className="relative z-10 max-w-5xl mx-auto space-y-8">
          
          {/* 小标签 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-indigo-950/50 backdrop-blur-md border border-indigo-500/30 text-indigo-200 text-sm font-medium tracking-widest uppercase shadow-[0_0_20px_-5px_rgba(99,102,241,0.4)]"
          >
            <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
            <span>{t("home.badge") || "AI 赋能 · 心灵指引"}</span>
          </motion.div>

          {/* 大标题 */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold tracking-tight drop-shadow-2xl">
            <span className="text-slate-100 block mb-2">{t("home.hero_title_1")}</span>
            {/* 渐变金色文字 */}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-200 via-yellow-100 to-amber-200 animate-gradient-x bg-[length:200%_auto]">
              {t("home.hero_title_2")}
            </span>
          </h1>

          {/* 副标题 */}
          <p className="text-lg md:text-2xl text-slate-300/80 max-w-2xl mx-auto font-light leading-relaxed">
            {t("home.hero_desc")}
          </p>

          {/* 按钮组 */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-10">
            <Link href="/daily-tarot">
              <Button size="lg" className="h-14 px-10 text-lg rounded-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold shadow-[0_0_30px_-5px_rgba(245,158,11,0.5)] transition-all hover:scale-105 border-0 ring-2 ring-amber-400/20">
                {t("home.cta_daily")}
              </Button>
            </Link>
            <Link href="/yes-no-tarot">
              <Button size="lg" variant="outline" className="h-14 px-10 text-lg rounded-full border-slate-700 bg-slate-900/40 hover:bg-slate-800/60 text-slate-200 backdrop-blur-md transition-all hover:scale-105 hover:border-slate-500">
                {t("home.cta_yes_no")}
              </Button>
            </Link>
          </div>
        </div>

        {/* 滚动提示 */}
        <motion.div 
          className="absolute bottom-12 left-1/2 -translate-x-1/2 text-slate-500/50"
          animate={{ y: [0, 10, 0], opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="flex flex-col items-center gap-2">
            <span className="text-xs tracking-widest uppercase">Scroll</span>
            <div className="w-5 h-8 border border-current rounded-full flex justify-center pt-2">
              <div className="w-0.5 h-1.5 bg-current rounded-full" />
            </div>
          </div>
        </motion.div>
      </section>

      {/* ================= Features Grid (功能区) ================= */}
      {/* 这里的背景设为透明，让星空透出来 */}
      <section className="py-24 relative z-10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20 space-y-4">
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-slate-100">
              {t("home.features_title")}
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-amber-500/50 to-transparent mx-auto rounded-full" />
            <p className="text-slate-400 max-w-xl mx-auto text-lg">
              {t("home.features_desc")}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard 
              icon={<Sun className="w-6 h-6 text-amber-200" />}
              title={t("home.daily_title")}
              description={t("home.daily_desc")}
              link="/daily-tarot"
              // 如果图片加载失败，bg-slate-900 会作为保底色
              bgClass="from-amber-900/20 to-slate-900/80"
              borderColor="group-hover:border-amber-500/30"
            />
            <FeatureCard 
              icon={<Zap className="w-6 h-6 text-purple-200" />}
              title={t("home.yes_no_title")}
              description={t("home.yes_no_desc")}
              link="/yes-no-tarot"
              bgClass="from-purple-900/20 to-slate-900/80"
              borderColor="group-hover:border-purple-500/30"
            />
            <FeatureCard 
              icon={<Moon className="w-6 h-6 text-blue-200" />}
              title={t("home.three_card_title")}
              description={t("home.three_card_desc")}
              link="/three-card"
              bgClass="from-blue-900/20 to-slate-900/80"
              borderColor="group-hover:border-blue-500/30"
            />
            <FeatureCard 
              icon={<Heart className="w-6 h-6 text-pink-200" />}
              title={t("home.love_title")}
              description={t("home.love_desc")}
              link="/love-tarot"
              bgClass="from-pink-900/20 to-slate-900/80"
              borderColor="group-hover:border-pink-500/30"
              comingSoon
            />
            <FeatureCard 
              icon={<Briefcase className="w-6 h-6 text-emerald-200" />}
              title={t("home.career_title")}
              description={t("home.career_desc")}
              link="/career-tarot"
              bgClass="from-emerald-900/20 to-slate-900/80"
              borderColor="group-hover:border-emerald-500/30"
              comingSoon
            />
            <FeatureCard 
              icon={<Star className="w-6 h-6 text-cyan-200" />}
              title={"更多牌阵"} // 示例硬编码，防止翻译缺失
              description={"探索流年运势、选择困难症指南等更多功能..."}
              link="#"
              bgClass="from-cyan-900/20 to-slate-900/80"
              borderColor="group-hover:border-cyan-500/30"
              comingSoon
            />
          </div>
        </div>
      </section>
    </div>
  );
}

// 优化后的卡片组件：去掉了对本地图片的强依赖，改用 CSS 渐变，视觉更统一
function FeatureCard({ 
  icon, 
  title, 
  description, 
  link, 
  bgClass,
  borderColor = "group-hover:border-white/20",
  comingSoon = false
}: { 
  icon: React.ReactNode; 
  title: string; 
  description: string; 
  link: string;
  bgClass: string;
  borderColor?: string;
  comingSoon?: boolean;
}) {
  const { t } = useTranslation();
  
  return (
    <Link href={comingSoon ? "#" : link}>
      <motion.div 
        whileHover={{ y: -5 }}
        className={`group relative h-80 rounded-2xl overflow-hidden cursor-pointer border border-white/5 bg-slate-900/40 backdrop-blur-sm transition-all duration-500 ${borderColor}`}
      >
        {/* 背景光效 */}
        <div className={`absolute inset-0 bg-gradient-to-br ${bgClass} opacity-50 group-hover:opacity-100 transition-opacity duration-500`} />
        
        {/* 内部纹理 (可选) */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20" />

        {/* 内容 */}
        <div className="absolute inset-0 p-8 flex flex-col">
          {/* Icon 容器 */}
          <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 shadow-lg backdrop-blur-md group-hover:bg-white/10 transition-colors">
            {icon}
          </div>
          
          <div className="space-y-3 mt-auto">
            <div className="flex items-center justify-between">
              <h3 className="text-2xl font-serif font-bold text-slate-100 group-hover:text-amber-100 transition-colors">
                {title}
              </h3>
              {comingSoon && (
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-slate-800 border border-slate-700 text-slate-400 uppercase tracking-wide">
                  Soon
                </span>
              )}
            </div>
            
            <p className="text-slate-400 text-sm leading-relaxed group-hover:text-slate-300 transition-colors">
              {description}
            </p>
            
            {!comingSoon && (
              <div className="flex items-center text-amber-400/80 font-medium text-sm pt-4 opacity-0 -translate-x-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0">
                {t("common.start_reading") || "开始占卜"} <ArrowRight className="w-4 h-4 ml-2" />
              </div>
            )}
          </div>
        </div>
      </motion.div>
    </Link>
  );
}
