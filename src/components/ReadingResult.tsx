import type { TarotCardData } from "@/lib/tarot-data";
import { cn } from "@/lib/utils";
import { TarotCard } from "./TarotCard";
import { motion } from "framer-motion";

interface ReadingResultProps {
  cards: Array<{
    data: TarotCardData;
    isReversed: boolean;
    position: string;
  }>;
  onReset: () => void;
}

export function ReadingResult({ cards, onReset }: ReadingResultProps) {
  return (
    <div className="w-full max-w-4xl mx-auto space-y-12 animate-in fade-in zoom-in duration-500">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center">
        {cards.map((card, index) => (
          <motion.div 
            key={card.data.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            className="flex flex-col items-center space-y-4"
          >
            <div className="text-center">
              <span className="text-primary text-sm uppercase tracking-widest font-medium">
                {card.position}
              </span>
            </div>
            
            <TarotCard 
              card={card.data} 
              isRevealed={true} 
              isReversed={card.isReversed} 
            />
            
            <div className="text-center max-w-xs space-y-2">
              <h3 className="text-xl font-bold font-serif text-foreground">
                {card.data.name_cn} {card.isReversed && "(逆位)"}
              </h3>
              <div className="flex flex-wrap justify-center gap-2">
                {card.data.keywords.slice(0, 3).map(k => (
                  <span key={k} className="text-xs px-2 py-1 rounded-full bg-secondary text-secondary-foreground border border-secondary-foreground/20">
                    {k}
                  </span>
                ))}
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed mt-2">
                {card.isReversed ? card.data.meaning_reversed : card.data.meaning_upright}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="bg-card/50 backdrop-blur border border-primary/20 rounded-2xl p-8 text-center space-y-6 max-w-2xl mx-auto">
        <h3 className="text-2xl font-serif text-primary">AI 深度解读</h3>
        <p className="text-foreground/80 leading-loose">
          {generateMockAIReading(cards)}
        </p>
        
        <button 
          onClick={onReset}
          className="mt-8 px-8 py-3 bg-primary text-primary-foreground font-bold rounded-full hover:bg-primary/90 transition-all shadow-lg hover:shadow-primary/30"
        >
          开始新的占卜
        </button>
      </div>
    </div>
  );
}

// Simple mock interpretation generator (MVP)
function generateMockAIReading(cards: Array<{data: TarotCardData, isReversed: boolean, position: string}>) {
  const themes = cards.map(c => c.isReversed ? c.data.meaning_reversed : c.data.meaning_upright);
  const coreMessage = themes.join(" ");
  
  return `根据牌阵显示，${cards[0].data.name_cn}揭示了这一问题的核心能量。${coreMessage} 建议你保持觉察，聆听内心的指引。`;
}
