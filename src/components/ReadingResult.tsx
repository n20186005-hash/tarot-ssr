import type { TarotCardData } from "@/lib/tarot-data";
import { cn } from "@/lib/utils";
import { TarotCard } from "./TarotCard";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

interface ReadingResultProps {
  cards: Array<{
    data: TarotCardData;
    isReversed: boolean;
    position: string;
  }>;
  onReset: () => void;
}

export function ReadingResult({ cards, onReset }: ReadingResultProps) {
  const { i18n, t } = useTranslation();
  const lang = i18n.language === "zh-Hant" ? "zh" : "en";

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
                {card.data.name[lang]} {card.isReversed && `(${t("common.reversed")})`}
              </h3>
              <div className="flex flex-wrap justify-center gap-2">
                {card.data.keywords[lang].slice(0, 3).map(k => (
                  <span key={k} className="text-xs px-2 py-1 rounded-full bg-secondary text-secondary-foreground border border-secondary-foreground/20">
                    {k}
                  </span>
                ))}
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed mt-2">
                {card.isReversed ? card.data.meanings[lang].reversed : card.data.meanings[lang].upright}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="bg-card/50 backdrop-blur border border-primary/20 rounded-2xl p-8 text-center space-y-6 max-w-2xl mx-auto">
        <h3 className="text-2xl font-serif text-primary">{t("reading.ai_title")}</h3>
        <p className="text-foreground/80 leading-loose">
          {generateMockAIReading(cards, lang, t)}
        </p>
        
        <button 
          onClick={onReset}
          className="mt-8 px-8 py-3 bg-primary text-primary-foreground font-bold rounded-full hover:bg-primary/90 transition-all shadow-lg hover:shadow-primary/30"
        >
          {t("reading.new_reading")}
        </button>
      </div>
    </div>
  );
}

// Simple mock interpretation generator (MVP)
function generateMockAIReading(
  cards: Array<{data: TarotCardData, isReversed: boolean, position: string}>, 
  lang: "en" | "zh",
  t: any
) {
  const themes = cards.map(c => c.isReversed ? c.data.meanings[lang].reversed : c.data.meanings[lang].upright);
  const coreMessage = themes.join(" ");
  
  return t("reading.ai_mock_content", {
    cardName: cards[0].data.name[lang],
    themes: coreMessage
  });
}
