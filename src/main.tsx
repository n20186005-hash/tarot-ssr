import React, { useState, useEffect, createContext, useContext } from 'react';
import { createRoot } from 'react-dom/client';
import { Router, Route, Switch, useLocation, Link } from "wouter";
import { useHashLocation } from "wouter/use-hash-location";

// --- 0. 图标组件 (内联 SVG 以替代外部依赖，解决报错问题) ---
const IconWrapper = ({ children, className = "", ...props }: any) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="24" height="24" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className} 
    {...props}
  >
    {children}
  </svg>
);

const Globe = (props: any) => (
  <IconWrapper {...props}>
    <circle cx="12" cy="12" r="10"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/><path d="M2 12h20"/>
  </IconWrapper>
);
const ArrowRight = (props: any) => (
  <IconWrapper {...props}>
    <path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>
  </IconWrapper>
);
const Sparkles = (props: any) => (
  <IconWrapper {...props}>
    <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/>
    <path d="M5 3v4"/><path d="M9 5H3"/><path d="M5 16v4"/><path d="M3 18h6"/><path d="M16 19h6"/><path d="M19 16v6"/>
  </IconWrapper>
);
const Layers = (props: any) => (
  <IconWrapper {...props}>
    <path d="m12.83 2.12-7.55 3.23a1.5 1.5 0 0 0 0 2.76l7.55 3.23a1.5 1.5 0 0 0 1.17 0l7.55-3.23a1.5 1.5 0 0 0 0-2.76l-7.55-3.23a1.5 1.5 0 0 0-1.17 0z"/><path d="M22 12L12 17L2 12"/><path d="M22 17L12 22L2 17"/>
  </IconWrapper>
);
const Calendar = (props: any) => (
  <IconWrapper {...props}>
    <rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/>
  </IconWrapper>
);
const Moon = (props: any) => (
  <IconWrapper {...props}>
    <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/>
  </IconWrapper>
);
const Sun = (props: any) => (
  <IconWrapper {...props}>
    <circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/>
  </IconWrapper>
);
const Heart = (props: any) => (
  <IconWrapper {...props}>
    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/>
  </IconWrapper>
);
const Briefcase = (props: any) => (
  <IconWrapper {...props}>
    <rect width="20" height="14" x="2" y="7" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
  </IconWrapper>
);
const Zap = (props: any) => (
  <IconWrapper {...props}>
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
  </IconWrapper>
);


// --- 1. 语言包配置 ---
const translations = {
  en: {
    "meta": {
      "title": "AI Tarot Reading - Your Online Sanctuary",
      "description": "Free online tarot reading with AI deep interpretation, daily guidance, and Yes/No quick answers. Explore love, career, and life guidance."
    },
    "common": {
      "back_home": "Back to Home",
      "coming_soon": "Coming Soon",
      "start_reading": "Start Reading",
      "loading": "Loading...",
      "reversed": "Reversed",
      "share": "Share",
      "share_feature_coming": "Sharing feature is under development! Beautiful cards coming soon."
    },
    "home": {
      "badge": "AI-Powered Soul Sanctuary",
      "hero_title_1": "Insight into Destiny",
      "hero_title_2": "Guide to Future",
      "hero_desc": "Combining ancient tarot wisdom with modern AI deep interpretation to clear the fog and find your inner answers.",
      "cta_daily": "Draw Daily Guidance",
      "cta_yes_no": "Yes/No Quick Answer",
      "features_title": "Explore Your Spread",
      "features_desc": "Whether you need quick guidance or deep insight, we have the perfect reading for you.",
      "daily_title": "Daily Guidance",
      "daily_desc": "First light of guidance for the morning, starting your day with energy. Explore today's theme and advice.",
      "yes_no_title": "Yes/No Oracle",
      "yes_no_desc": "Hesitating? Have a specific question? Let tarot give you the most direct answer and advice.",
      "three_card_title": "Three Card Spread",
      "three_card_desc": "Classic timeline spread. Deeply analyze past influences, current situation, and future trends.",
      "love_title": "Love Tarot",
      "love_desc": "What are they thinking? Where is our relationship going? Explore hidden truths of the emotional world.",
      "career_title": "Career Guide",
      "career_desc": "Facing career choices? Looking for a breakthrough? Get strategic advice for your career development."
    },
    "nav": {
      "home": "Home",
      "yesno": "Yes/No Tarot",
      "three": "Three Card",
      "daily": "Daily Tarot"
    },
    "lang": {
      "select": "Select Language"
    }
  },
  "zh-Hant": {
    "meta": {
      "title": "塔羅AI占卜 - 你的在線心靈療癒所",
      "description": "免費在線塔羅占卜，提供AI深度解讀、每日運勢、Yes/No快速問答。探索愛情、事業與人生的指引。"
    },
    "common": {
      "back_home": "返回首頁",
      "coming_soon": "即將上線",
      "start_reading": "開始占卜",
      "loading": "載入中...",
      "reversed": "逆位",
      "share": "分享",
      "share_feature_coming": "分享功能開發中！即將支持生成精美卡片。"
    },
    "home": {
      "badge": "AI 驅動的心靈療癒所",
      "hero_title_1": "洞悉命運",
      "hero_title_2": "指引未來",
      "hero_desc": "結合古老塔羅智慧與現代 AI 深度解讀，為你撥開迷霧，尋找內心的答案。",
      "cta_daily": "抽取今日指引",
      "cta_yes_no": "Yes/No 快速問答",
      "features_title": "探索你的專屬牌陣",
      "features_desc": "無論你是需要快速的指引，還是深度的洞察，我們都為你準備了最適合的解讀方式。",
      "daily_title": "每日運勢",
      "daily_desc": "清晨的第一縷指引，為你開啟充滿能量的一天。探索今日的主題與建議。",
      "yes_no_title": "Yes/No 問答",
      "yes_no_desc": "猶豫不決？心中有具體的疑問？讓塔羅牌給你最直接的答案與建議。",
      "three_card_title": "三卡牌陣",
      "three_card_desc": "經典的時間流牌陣。深度解析過去的影響、現在的狀況與未來的趨勢。",
      "love_title": "愛情塔羅",
      "love_desc": "Ta在想什麼？我們的關係將走向何方？探索情感世界的隱秘真相。",
      "career_title": "事業指引",
      "career_desc": "面臨職業抉擇？尋找突破瓶頸的方向？為你的事業發展提供策略建議。"
    },
    "nav": {
      "home": "首頁",
      "yesno": "Yes/No 占卜",
      "three": "三牌陣",
      "daily": "每日運勢"
    },
    "lang": {
      "select": "選擇語言"
    }
  }
};

type Language = 'en' | 'zh-Hant';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType>({
  language: 'zh-Hant',
  setLanguage: () => {},
  t: (key) => key,
});

const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
  const [language, setLanguage] = useState<Language>('zh-Hant');

  const t = (path: string) => {
    // 增加安全性检查：防止 path 为空或非字符串导致 split 报错
    if (!path || typeof path !== 'string') return path || '';
    
    const keys = path.split('.');
    let result: any = translations[language];
    for (const key of keys) {
      if (result && result[key]) {
        result = result[key];
      } else {
        return path;
      }
    }
    return result as string;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

const useTranslation = () => useContext(LanguageContext);

// --- 2. UI 组件 ---

const Button = React.forwardRef<HTMLButtonElement, React.ButtonHTMLAttributes<HTMLButtonElement> & { variant?: 'default' | 'outline', size?: 'default' | 'lg' }>(
  ({ className = "", variant = "default", size = "default", ...props }, ref) => {
    const baseStyles = "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 cursor-pointer";
    const variants = {
      default: "bg-purple-600 text-white hover:bg-purple-700 shadow-lg shadow-purple-500/20",
      outline: "border border-white/20 bg-transparent hover:bg-white/10 text-white"
    };
    const sizes = {
      default: "h-9 px-4 py-2",
      lg: "h-14 px-8 text-lg rounded-full"
    };
    return (
      <button
        ref={ref}
        className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

const SEO = () => {
  const { t } = useTranslation();
  useEffect(() => {
    document.title = t("meta.title");
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', t("meta.description"));
    }
  }, [t]);
  return null;
};

// --- 3. 页面组件 ---

// 网络图片资源
const IMAGES = {
  hero_bg: "https://images.unsplash.com/photo-1636257257018-866d2c49d47a?q=80&w=2070&auto=format&fit=crop",
  sun: "https://images.unsplash.com/photo-1534066970146-88053a473215?q=80&w=800&auto=format&fit=crop", 
  wheel: "https://images.unsplash.com/photo-1544365558-35aa4afcf11f?q=80&w=800&auto=format&fit=crop",
  priestess: "https://images.unsplash.com/photo-1505568551464-9226164f9f74?q=80&w=800&auto=format&fit=crop",
  lovers: "https://images.unsplash.com/photo-1518199266791-5375a83190b7?q=80&w=800&auto=format&fit=crop",
  emperor: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=800&auto=format&fit=crop"
};

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
  
  const content = (
    <div className="group relative h-96 rounded-2xl overflow-hidden cursor-pointer border border-white/10 shadow-lg transition-all hover:scale-[1.02] hover:shadow-2xl bg-slate-900/50">
      <div 
        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
        style={{ backgroundImage: `url(${bgImage})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-90 transition-opacity group-hover:opacity-80" />
      
      <div className="absolute inset-0 p-8 flex flex-col justify-end">
        <div className="mb-auto opacity-0 -translate-y-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
          <div className="w-12 h-12 rounded-full bg-purple-500/20 backdrop-blur-md flex items-center justify-center mb-4 border border-purple-500/30">
            {icon}
          </div>
        </div>
        
        <div className="space-y-3 transform transition-all duration-300 group-hover:-translate-y-2">
          <div className="flex items-center justify-between">
            <h3 className="text-2xl font-serif font-bold text-white tracking-wide">{title}</h3>
            {comingSoon && (
              <span className="text-xs font-medium px-2 py-1 rounded bg-white/20 text-white backdrop-blur">
                {t("common.coming_soon")}
              </span>
            )}
          </div>
          <p className="text-white/70 line-clamp-3 group-hover:line-clamp-none transition-all text-sm leading-relaxed">
            {description}
          </p>
          
          {!comingSoon && (
            <div className="flex items-center text-purple-300 font-medium text-sm pt-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              {t("common.start_reading")} <ArrowRight className="w-4 h-4 ml-2" />
            </div>
          )}
        </div>
      </div>
    </div>
  );

  if (comingSoon) return <div className="cursor-not-allowed opacity-80">{content}</div>;
  return <Link href={link}>{content}</Link>;
}

function Home() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen relative overflow-hidden bg-[#0a0a0c]">
      <SEO />
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center text-center px-4">
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: `url(${IMAGES.hero_bg})`,
            filter: "brightness(0.4) saturate(1.2)"
          }}
        />
        <div className="absolute inset-0 z-0 bg-gradient-to-b from-[#0a0a0c]/80 via-transparent to-[#0a0a0c]" />
        
        <div className="relative z-10 max-w-4xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-10 duration-1000 fill-mode-forwards">
          <div 
            className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur border border-white/20 text-white/90 text-sm font-medium tracking-wider uppercase"
          >
            <Sparkles className="w-4 h-4 text-purple-400" />
            <span>{t("home.badge")}</span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-white tracking-tight drop-shadow-2xl">
            {t("home.hero_title_1")}<br/>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-200 to-yellow-400">{t("home.hero_title_2")}</span>
          </h1>

          <p className="text-xl md:text-2xl text-white/80 max-w-2xl mx-auto font-light leading-relaxed">
            {t("home.hero_desc")}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
            <Link href="/daily-tarot">
              <Button size="lg" className="shadow-purple-500/30">
                {t("home.cta_daily")}
              </Button>
            </Link>
            <Link href="/yes-no-tarot">
              <Button size="lg" variant="outline">
                {t("home.cta_yes_no")}
              </Button>
            </Link>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50 animate-bounce">
          <div className="w-6 h-10 border-2 border-current rounded-full flex justify-center pt-2">
            <div className="w-1 h-2 bg-current rounded-full" />
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 bg-[#0a0a0c] relative z-10">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-white">{t("home.features_title")}</h2>
            <p className="text-slate-400 max-w-xl mx-auto">
              {t("home.features_desc")}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard 
              icon={<Sun className="w-8 h-8 text-amber-300" />}
              title={t("home.daily_title")}
              description={t("home.daily_desc")}
              link="/daily-tarot"
              bgImage={IMAGES.sun}
            />
            <FeatureCard 
              icon={<Zap className="w-8 h-8 text-blue-300" />}
              title={t("home.yes_no_title")}
              description={t("home.yes_no_desc")}
              link="/yes-no-tarot"
              bgImage={IMAGES.wheel}
            />
            <FeatureCard 
              icon={<Moon className="w-8 h-8 text-purple-300" />}
              title={t("home.three_card_title")}
              description={t("home.three_card_desc")}
              link="/three-card"
              bgImage={IMAGES.priestess}
            />
            <FeatureCard 
              icon={<Heart className="w-8 h-8 text-pink-300" />}
              title={t("home.love_title")}
              description={t("home.love_desc")}
              link="/love-tarot"
              bgImage={IMAGES.lovers}
              comingSoon
            />
            <FeatureCard 
              icon={<Briefcase className="w-8 h-8 text-emerald-300" />}
              title={t("home.career_title")}
              description={t("home.career_desc")}
              link="/career-tarot"
              bgImage={IMAGES.emperor}
              comingSoon
            />
          </div>
        </div>
      </section>
    </div>
  );
}

const PagePlaceholder = ({ title, icon: Icon }: { title: string, icon: any }) => {
  const [, setLocation] = useLocation();
  const { t } = useTranslation();
  
  // 安全性检查：如果 Icon 不存在，显示一个空 div 或默认内容，防止崩溃
  if (!Icon) return <div className="p-4 text-red-500">Icon Error</div>;

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-[#0a0a0c]">
      <Icon className="w-16 h-16 text-purple-400 mb-6 opacity-80" />
      <h2 className="text-3xl font-serif text-slate-200 mb-8">{title}</h2>
      <button 
        onClick={() => setLocation('/')}
        className="text-sm text-slate-400 hover:text-white underline underline-offset-4 cursor-pointer"
      >
        ← {t("common.back_home")}
      </button>
    </div>
  );
};

// 使用 Sparkles 作为 Yes/No 的图标，因为它是绝对安全的
const YesNoTarot = () => <PagePlaceholder title="Yes/No Tarot" icon={Sparkles} />;
const ThreeCardSpread = () => <PagePlaceholder title="Three Card Spread" icon={Layers} />;
const DailyTarot = () => <PagePlaceholder title="Daily Tarot" icon={Calendar} />;

// --- 4. 主应用逻辑 ---

const LanguageSwitcher = () => {
  const { language, setLanguage } = useTranslation();
  
  const toggleLang = () => {
    setLanguage(language === 'en' ? 'zh-Hant' : 'en');
  };

  return (
    <button 
      onClick={toggleLang}
      className="flex items-center gap-2 px-3 py-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors text-sm font-medium backdrop-blur-md border border-white/10 text-white z-50 relative cursor-pointer"
    >
      <Globe size={16} />
      <span>{language === 'en' ? 'EN' : '繁體'}</span>
    </button>
  );
};

const Toaster = () => <div className="fixed bottom-4 right-4 z-50" />; 
const TooltipProvider = ({ children }: { children: React.ReactNode }) => <>{children}</>;

function AppRouter() {
  return (
    <Router hook={useHashLocation}>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/yes-no-tarot" component={YesNoTarot} />
        <Route path="/three-card" component={ThreeCardSpread} />
        <Route path="/daily-tarot" component={DailyTarot} />
        <Route>
          <div className="min-h-screen flex items-center justify-center text-slate-500">
            404 - Page Not Found
          </div>
        </Route>
      </Switch>
    </Router>
  );
}

function App() {
  return (
    <LanguageProvider>
      <div className="bg-[#0a0a0c] text-slate-100 min-h-screen font-sans selection:bg-purple-500/30">
        <TooltipProvider>
          <Toaster />
          <div className="fixed top-6 right-6 z-50">
            <LanguageSwitcher />
          </div>
          <AppRouter />
        </TooltipProvider>
      </div>
    </LanguageProvider>
  );
}

// --- 5. 注入样式 ---
const style = document.createElement('style');
style.textContent = `
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400&display=swap');
  
  body { margin: 0; background-color: #0a0a0c; font-family: 'Inter', sans-serif; }
  h1, h2, h3 { font-family: 'Playfair Display', serif; }
  #root { min-height: 100vh; width: 100%; }
  
  .text-gradient-gold {
    background: linear-gradient(to right, #fcd34d, #f59e0b);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;
document.head.appendChild(style);

const root = createRoot(document.getElementById('root')!);
root.render(<App />);
