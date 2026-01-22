import { Link } from "wouter";
import { motion } from "framer-motion";
import { Sparkles, Moon, Sun, ArrowRight, Heart, Briefcase, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect } from "react";

interface HomeProps {
  targetSection?: string | undefined;
}

export default function Home({ targetSection }: HomeProps) {
  useEffect(() => {
    if (targetSection) {
      document.getElementById(targetSection)?.scrollIntoView({ behavior: "smooth" });
    }
  }, [targetSection]);

  return (
    <div className="min-h-screen relative overflow-hidden">
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
            <span>AI 驱动的心灵疗愈所</span>
          </motion.div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-white tracking-tight drop-shadow-2xl">
            洞悉命运<br/>
            <span className="text-gradient-gold">指引未来</span>
          </h1>

          <p className="text-xl md:text-2xl text-white/80 max-w-2xl mx-auto font-light leading-relaxed">
            结合古老塔罗智慧与现代 AI 深度解读，为你拨开迷雾，寻找内心的答案。
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
            <Link href="/daily-tarot">
              <Button size="lg" className="h-14 px-8 text-lg rounded-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold shadow-gold transition-all hover:scale-105">
                抽取今日指引
              </Button>
            </Link>
            <Link href="/yes-no-tarot">
              <Button size="lg" variant="outline" className="h-14 px-8 text-lg rounded-full border-white/30 bg-white/5 hover:bg-white/10 text-white backdrop-blur transition-all hover:scale-105">
                Yes/No 快速问答
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
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary">探索你的专属牌阵</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              无论你是需要快速的指引，还是深度的洞察，我们都为你准备了最适合的解读方式。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard 
              icon={<Sun className="w-8 h-8 text-primary" />}
              title="每日运势"
              description="清晨的第一缕指引，为你开启充满能量的一天。探索今日的主题与建议。"
              link="/daily-tarot"
              bgImage={new URL("@/assets/sun_card.jpeg", import.meta.url).href}
            />
            <FeatureCard 
              icon={<Zap className="w-8 h-8 text-primary" />}
              title="Yes/No 问答"
              description="犹豫不决？心中有具体的疑问？让塔罗牌给你最直接的答案与建议。"
              link="/yes-no-tarot"
              bgImage={new URL("@/assets/wheel_card.jpeg", import.meta.url).href}
            />
            <FeatureCard 
              icon={<Moon className="w-8 h-8 text-primary" />}
              title="三卡牌阵"
              description="经典的时间流牌阵。深度解析过去的影响、现在的状况与未来的趋势。"
              link="/three-card"
              bgImage={new URL("@/assets/priestess_card.jpeg", import.meta.url).href}
            />
            <FeatureCard 
              icon={<Heart className="w-8 h-8 text-primary" />}
              title="爱情塔罗"
              description="Ta在想什么？我们的关系将走向何方？探索情感世界的隐秘真相。"
              link="/love-tarot"
              bgImage={new URL("@/assets/lovers_card.jpeg", import.meta.url).href}
              comingSoon
            />
            <FeatureCard 
              icon={<Briefcase className="w-8 h-8 text-primary" />}
              title="事业指引"
              description="面临职业抉择？寻找突破瓶颈的方向？为你的事业发展提供策略建议。"
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
                  即将上线
                </span>
              )}
            </div>
            <p className="text-white/70 line-clamp-3 group-hover:line-clamp-none transition-all">
              {description}
            </p>
            
            {!comingSoon && (
              <div className="flex items-center text-primary font-medium text-sm pt-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                开始占卜 <ArrowRight className="w-4 h-4 ml-2" />
              </div>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
}
