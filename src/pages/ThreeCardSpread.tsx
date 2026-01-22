import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ReadingResult } from "@/components/ReadingResult";
import { TAROT_DECK } from "@/lib/tarot-data";
import type { TarotCardData } from "@/lib/tarot-data";

export default function ThreeCardSpread() {
  const [cards, setCards] = useState<Array<{data: TarotCardData, isReversed: boolean, position: string}> | null>(null);
  const [isShuffling, setIsShuffling] = useState(false);

  const startReading = () => {
    setIsShuffling(true);
    setTimeout(() => {
      // Draw 3 unique cards
      const shuffled = [...TAROT_DECK].sort(() => Math.random() - 0.5);
      const drawn = shuffled.slice(0, 3).map((card, i) => ({
        data: card,
        isReversed: Math.random() > 0.5,
        position: i === 0 ? "过去 (The Past)" : i === 1 ? "现在 (The Present)" : "未来 (The Future)"
      }));
      
      setCards(drawn);
      setIsShuffling(false);
    }, 2500);
  };

  return (
    <div className="min-h-screen bg-background text-foreground p-6 relative">
       {/* Background */}
       <div className="fixed inset-0 z-0 bg-[url(@/assets/hero_bg.jpeg)] bg-cover bg-center opacity-20 pointer-events-none" />

      {/* Header */}
      <header className="relative z-10 flex items-center mb-8">
        <Link href="/">
          <Button variant="ghost" className="text-muted-foreground hover:text-foreground">
            <ArrowLeft className="w-4 h-4 mr-2" /> 返回首页
          </Button>
        </Link>
      </header>

      <main className="relative z-10 container mx-auto text-center min-h-[80vh] flex flex-col items-center justify-center">
        {!cards && !isShuffling && (
          <div className="space-y-8 max-w-2xl animate-in fade-in zoom-in duration-500">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-gradient-gold">
              三卡时间流牌阵
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              这是最经典的塔罗牌阵之一。它通过"过去-现在-未来"的时间轴，
              帮助你理清事情的来龙去脉，洞察潜在的发展趋势。
            </p>
            <div className="pt-8">
              <Button 
                size="lg" 
                onClick={startReading}
                className="h-16 px-12 text-xl rounded-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold shadow-gold hover:scale-105 transition-all"
              >
                开始深度解读
              </Button>
            </div>
          </div>
        )}

        {isShuffling && (
          <div className="flex flex-col items-center space-y-8">
            <div className="flex gap-4">
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  className="w-32 h-48 bg-card border-2 border-primary/30 rounded-lg shadow-xl"
                  animate={{ 
                    y: [0, -30, 0],
                    rotateY: [0, 180, 360]
                  }}
                  transition={{ 
                    duration: 1.5,
                    repeat: Infinity,
                    delay: i * 0.2,
                    ease: "easeInOut"
                  }}
                >
                  <div className="w-full h-full bg-[url(@/assets/card_back.jpeg)] bg-cover rounded opacity-80" />
                </motion.div>
              ))}
            </div>
            <p className="text-xl font-serif text-primary animate-pulse">
              洗牌中，请保持专注...
            </p>
          </div>
        )}

        {cards && (
          <ReadingResult 
            cards={cards} 
            onReset={() => setCards(null)} 
          />
        )}
      </main>
    </div>
  );
}
