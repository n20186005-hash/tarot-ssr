import { useState, useEffect } from "react";
import { Link } from "wouter";
import { ArrowLeft, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { TarotCard } from "@/components/TarotCard";
import { TAROT_DECK } from "@/lib/tarot-data";
import type { TarotCardData } from "@/lib/tarot-data";
import { toast } from "sonner";

export default function DailyTarot() {
  const [card, setCard] = useState<{data: TarotCardData, isReversed: boolean} | null>(null);

  useEffect(() => {
    // Check local storage for today's card
    const today = new Date().toDateString();
    const stored = localStorage.getItem("daily_tarot");
    
    if (stored) {
      const parsed = JSON.parse(stored);
      if (parsed.date === today) {
        const cardData = TAROT_DECK.find(c => c.id === parsed.cardId);
        if (cardData) {
          setCard({ data: cardData, isReversed: parsed.isReversed });
        }
      }
    }
  }, []);

  const drawDailyCard = () => {
    const randomCard = TAROT_DECK[Math.floor(Math.random() * TAROT_DECK.length)];
    const isReversed = Math.random() > 0.3; // Less chance of reversal for daily card
    
    const result = { data: randomCard, isReversed };
    setCard(result);
    
    // Save to local storage
    localStorage.setItem("daily_tarot", JSON.stringify({
      date: new Date().toDateString(),
      cardId: randomCard.id,
      isReversed
    }));
  };

  const handleShare = () => {
    toast.success("分享功能开发中！即将支持生成精美卡片。");
  };

  return (
    <div className="min-h-screen bg-background text-foreground p-6 relative">
       <div className="fixed inset-0 z-0 bg-gradient-to-b from-primary/5 to-background pointer-events-none" />

      {/* Header */}
      <header className="relative z-10 flex items-center justify-between mb-8 container mx-auto">
        <Link href="/">
          <Button variant="ghost" className="text-muted-foreground hover:text-foreground">
            <ArrowLeft className="w-4 h-4 mr-2" /> 返回首页
          </Button>
        </Link>
        {card && (
          <Button variant="outline" size="icon" onClick={handleShare}>
            <Share2 className="w-4 h-4" />
          </Button>
        )}
      </header>

      <main className="relative z-10 container mx-auto flex flex-col items-center justify-center min-h-[80vh]">
        {!card ? (
          <div className="text-center space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-primary mb-4">
              今日运势指引
            </h1>
            <p className="text-xl text-muted-foreground max-w-lg mx-auto">
              新的一天，宇宙想对你说什么？<br/>
              抽取一张牌，作为今天的精神图腾。
            </p>
            
            <div 
              className="w-48 h-80 mx-auto bg-[url(@/assets/card_back.jpeg)] bg-cover rounded-xl shadow-2xl cursor-pointer hover:scale-105 transition-transform duration-300 ring-4 ring-primary/20 hover:ring-primary/50"
              onClick={drawDailyCard}
            />
            
            <p className="text-sm text-muted-foreground animate-pulse">
              点击牌背抽取
            </p>
          </div>
        ) : (
          <div className="flex flex-col md:flex-row items-center gap-12 max-w-5xl mx-auto animate-in fade-in zoom-in duration-500">
             <div className="relative">
                <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full" />
                <TarotCard 
                  card={card.data} 
                  isRevealed={true} 
                  isReversed={card.isReversed}
                  size="lg"
                  className="shadow-2xl relative z-10"
                />
             </div>
             
             <div className="flex-1 space-y-6 text-center md:text-left">
               <div className="space-y-2">
                 <span className="text-sm font-bold tracking-widest text-primary uppercase">
                   Daily Guidance
                 </span>
                 <h2 className="text-4xl font-serif font-bold text-foreground">
                   {card.data.name_cn} {card.isReversed && "(逆位)"}
                 </h2>
               </div>
               
               <p className="text-lg leading-relaxed text-foreground/90 border-l-4 border-primary pl-6 py-2">
                 {card.isReversed ? card.data.meaning_reversed : card.data.meaning_upright}
               </p>
               
               <div className="bg-card/50 p-6 rounded-xl border border-white/10 space-y-4">
                 <h3 className="font-bold text-primary">今日建议</h3>
                 <p className="text-muted-foreground">
                   今天，试着体现{card.data.name_cn}的能量。
                   {card.isReversed 
                     ? "注意不要陷入负面的情绪循环，保持觉察。" 
                     : "保持开放的心态，让这种积极的品质引导你的行动。"}
                   关注以下关键词：
                   <span className="text-foreground font-medium mx-2">
                     {card.data.keywords.join("、")}
                   </span>
                 </p>
               </div>
             </div>
          </div>
        )}
      </main>
    </div>
  );
}
