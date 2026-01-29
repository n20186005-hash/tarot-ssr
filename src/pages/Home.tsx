import { Link } from "wouter";
import { motion } from "framer-motion";
import { Sparkles, Moon, Sun, ArrowRight, Heart, Briefcase, Zap, Star, CheckCircle2, HelpCircle, BookOpen, MessageCircle, User } from "lucide-react";
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

      {/* ================= How It Works (Premium Style) ================= */}
      <section className="py-32 relative z-10 overflow-hidden">
        {/* Ambient Background */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-[500px] bg-indigo-900/20 blur-[120px] rounded-full pointer-events-none" />
        
        <div className="container mx-auto px-4 relative">
          <div className="text-center mb-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-block mb-4 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-indigo-300 text-xs font-medium tracking-widest uppercase"
            >
              The Process
            </motion.div>
            <h2 className="text-4xl md:text-6xl font-serif font-bold text-slate-100 mb-6">{t("how_it_works.title")}</h2>
            <p className="text-slate-400 max-w-xl mx-auto text-lg leading-relaxed">{t("how_it_works.desc")}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[1, 2, 3].map((step) => (
              <motion.div 
                key={step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: step * 0.2 }}
                className="group relative p-10 rounded-3xl bg-gradient-to-b from-slate-800/40 to-slate-900/40 border border-white/5 backdrop-blur-md hover:border-white/10 transition-all duration-500"
              >
                {/* Glowing Number */}
                <div className="absolute -top-6 left-8 w-12 h-12 flex items-center justify-center rounded-full bg-slate-900 border border-white/10 shadow-[0_0_20px_-5px_rgba(99,102,241,0.5)] z-10">
                  <span className="font-serif text-xl font-bold text-indigo-300">{step}</span>
                </div>
                
                {/* Content */}
                <div className="mt-4">
                  <div className="w-16 h-16 mb-6 rounded-2xl bg-indigo-500/10 flex items-center justify-center text-indigo-300 group-hover:scale-110 transition-transform duration-500 border border-indigo-500/20">
                    {step === 1 && <User className="w-8 h-8" />}
                    {step === 2 && <Sparkles className="w-8 h-8" />}
                    {step === 3 && <BookOpen className="w-8 h-8" />}
                  </div>
                  <h3 className="text-2xl font-serif font-bold text-slate-100 mb-4">{t(`how_it_works.step_${step}_title`)}</h3>
                  <p className="text-slate-400 leading-relaxed">{t(`how_it_works.step_${step}_desc`)}</p>
                </div>
                
                {/* Connecting Line (Desktop Only) */}
                {step < 3 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-[1px] bg-gradient-to-r from-white/10 to-transparent" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= Why Choose Us (Bento Grid) ================= */}
      <section className="py-32 relative z-10 bg-slate-950/50 border-y border-white/5">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            
            {/* Left Content */}
            <div className="space-y-10">
              <div>
                <h2 className="text-4xl md:text-6xl font-serif font-bold text-slate-100 mb-6 leading-tight">
                  {t("why_us.title")}
                </h2>
                <p className="text-lg text-slate-400 leading-relaxed">
                  {t("why_us.desc")}
                </p>
              </div>
              
              <div className="space-y-8">
                {[1, 2, 3].map((item) => (
                  <motion.div 
                    key={item}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: item * 0.1 }}
                    className="flex gap-6"
                  >
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mt-1">
                      <CheckCircle2 className="w-6 h-6 text-emerald-400" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-slate-200 mb-2">{t(`why_us.benefit_${item}_title`)}</h4>
                      <p className="text-slate-400 leading-relaxed">{t(`why_us.benefit_${item}_desc`)}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
            
            {/* Right Visuals (Glass Cards) */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-amber-500/10 via-purple-500/10 to-indigo-500/10 blur-3xl rounded-full" />
              <div className="relative grid grid-cols-2 gap-6">
                <motion.div 
                  whileHover={{ y: -5 }}
                  className="col-span-2 h-48 rounded-3xl bg-slate-800/40 border border-white/10 backdrop-blur-md p-8 flex flex-col justify-end shadow-2xl"
                >
                  <Sparkles className="w-10 h-10 text-amber-300 mb-4" />
                  <span className="text-2xl font-serif font-bold text-slate-100">AI Deep Analysis</span>
                  <span className="text-slate-400 text-sm mt-1">Powered by LLM</span>
                </motion.div>
                
                <motion.div 
                  whileHover={{ y: -5 }}
                  className="h-40 rounded-3xl bg-indigo-900/30 border border-white/10 backdrop-blur-md p-6 flex flex-col justify-end shadow-xl"
                >
                  <Zap className="w-8 h-8 text-purple-300 mb-3" />
                  <span className="text-lg font-bold text-slate-200">Instant</span>
                </motion.div>
                
                <motion.div 
                  whileHover={{ y: -5 }}
                  className="h-40 rounded-3xl bg-slate-800/40 border border-white/10 backdrop-blur-md p-6 flex flex-col justify-end shadow-xl"
                >
                  <Heart className="w-8 h-8 text-pink-300 mb-3" />
                  <span className="text-lg font-bold text-slate-200">Empathetic</span>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= Tarot Knowledge (Split Cards) ================= */}
      <section className="py-32 relative z-10 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-slate-100 mb-6">Unlock the Arcana</h2>
            <div className="w-24 h-1 bg-indigo-500/50 mx-auto rounded-full" />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
            {/* Major Arcana */}
            <motion.div 
              whileHover={{ y: -5 }}
              className="group relative overflow-hidden rounded-3xl border border-amber-500/20 bg-gradient-to-br from-slate-900 to-amber-950/30 p-10"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/10 blur-[80px] rounded-full pointer-events-none" />
              <div className="relative z-10">
                <Star className="w-12 h-12 text-amber-400 mb-6" />
                <h3 className="text-3xl font-serif font-bold text-amber-100 mb-4">Major Arcana</h3>
                <p className="text-slate-400 leading-relaxed mb-8">
                  The 22 cards representing life's karmic and spiritual lessons. They signify important milestones and major events.
                </p>
                <div className="flex flex-wrap gap-3">
                  <span className="px-4 py-1.5 rounded-full bg-amber-500/10 text-amber-300 text-sm border border-amber-500/20">The Fool</span>
                  <span className="px-4 py-1.5 rounded-full bg-amber-500/10 text-amber-300 text-sm border border-amber-500/20">The World</span>
                  <span className="px-4 py-1.5 rounded-full bg-amber-500/10 text-amber-300 text-sm border border-amber-500/20">The Empress</span>
                </div>
              </div>
            </motion.div>
            
            {/* Minor Arcana */}
            <motion.div 
              whileHover={{ y: -5 }}
              className="group relative overflow-hidden rounded-3xl border border-indigo-500/20 bg-gradient-to-br from-slate-900 to-indigo-950/30 p-10"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/10 blur-[80px] rounded-full pointer-events-none" />
              <div className="relative z-10">
                <Moon className="w-12 h-12 text-indigo-400 mb-6" />
                <h3 className="text-3xl font-serif font-bold text-indigo-100 mb-4">Minor Arcana</h3>
                <p className="text-slate-400 leading-relaxed mb-8">
                  The 56 cards reflecting the trials and tribulations that we experience on a daily basis. Covering emotions, thoughts, and material world.
                </p>
                <div className="flex flex-wrap gap-3">
                  <span className="px-4 py-1.5 rounded-full bg-indigo-500/10 text-indigo-300 text-sm border border-indigo-500/20">Wands</span>
                  <span className="px-4 py-1.5 rounded-full bg-indigo-500/10 text-indigo-300 text-sm border border-indigo-500/20">Cups</span>
                  <span className="px-4 py-1.5 rounded-full bg-indigo-500/10 text-indigo-300 text-sm border border-indigo-500/20">Swords</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ================= FAQ ================= */}
      <section className="py-32 relative z-10">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-slate-100 mb-6">{t("faq.title")}</h2>
            <HelpCircle className="w-10 h-10 text-slate-600 mx-auto" />
          </div>
          
          <div className="space-y-6">
            {[1, 2, 3].map((item) => (
              <motion.div 
                key={item}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: item * 0.1 }}
                className="group p-8 rounded-2xl bg-slate-900/40 border border-white/5 hover:border-white/10 hover:bg-slate-800/40 transition-all duration-300 cursor-pointer"
              >
                <h3 className="text-xl font-bold text-slate-200 mb-4 flex items-center gap-4">
                  <div className="w-8 h-8 rounded-lg bg-indigo-500/10 flex items-center justify-center flex-shrink-0">
                    <MessageCircle className="w-4 h-4 text-indigo-400" />
                  </div>
                  {t(`faq.q${item}`)}
                </h3>
                <p className="text-slate-400 pl-12 leading-relaxed text-lg">
                  {t(`faq.a${item}`)}
                </p>
              </motion.div>
            ))}
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
